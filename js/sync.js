// Cross-device progress sync (Supabase), keyed by a shared random "sync code".
//
// Every device keeps working from localStorage exactly as before. When sync is on, this module
// downloads the saved copy for the code, merges it with what's on this device, writes the result
// back locally, and uploads it. Merging is additive (nothing on either device is thrown away)
// except where one device deliberately reset rotation, cleared history, or closed an exam.

(function () {
  const engine = window.NREMTCatEngine;
  const cfg = window.NREMT_SYNC_CONFIG || {};
  const KEYS = engine.STORAGE_KEYS;
  const LOCAL = {
    CODE: "nremt_sync_code_v1",
    VERSION: "nremt_sync_version_v1",
    LAST_SYNCED: "nremt_sync_last_v1",
    FINGERPRINT: "nremt_sync_fingerprint_v1"
  };
  const CODE_ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ"; // no 0/O, 1/I/L look-alikes
  const CODE_LENGTH = 16;
  const MAX_ATTEMPTS = 50;
  const MAX_CLOSED_IDS = 50;

  const configured = Boolean(cfg.supabaseUrl && cfg.supabaseAnonKey);
  // Accept the project URL with or without a pasted "/rest/v1" suffix.
  const baseUrl = String(cfg.supabaseUrl || "")
    .replace(/\/+$/, "")
    .replace(/\/rest\/v1$/, "");

  // --------------------------------------------------------------------------
  // Small helpers
  // --------------------------------------------------------------------------
  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    try {
      if (value === null || value === undefined) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("Sync could not write", key, e);
    }
  }

  // JSON with sorted keys, so two copies of the same data compare equal even after Postgres
  // (jsonb) reorders object keys.
  function stableStringify(value) {
    if (Array.isArray(value)) return "[" + value.map(stableStringify).join(",") + "]";
    if (value && typeof value === "object") {
      return (
        "{" +
        Object.keys(value)
          .filter((k) => value[k] !== undefined)
          .sort()
          .map((k) => JSON.stringify(k) + ":" + stableStringify(value[k]))
          .join(",") +
        "}"
      );
    }
    return JSON.stringify(value === undefined ? null : value);
  }

  function sameData(a, b) {
    return stableStringify(a) === stableStringify(b);
  }

  function timeOf(iso) {
    const t = Date.parse(iso || "");
    return Number.isFinite(t) ? t : 0;
  }

  function sessionStartedAt(session) {
    if (!session) return 0;
    return timeOf(session.startedAt) || Number(String(session.sessionId || "").replace(/\D/g, "")) || 0;
  }

  // --------------------------------------------------------------------------
  // Sync codes
  // --------------------------------------------------------------------------
  function normalizeCode(input) {
    const chars = String(input || "")
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "");
    if (chars.length !== CODE_LENGTH) return null;
    for (const c of chars) if (!CODE_ALPHABET.includes(c)) return null;
    return chars.match(/.{4}/g).join("-");
  }

  function generateCode() {
    const bytes = new Uint8Array(CODE_LENGTH);
    crypto.getRandomValues(bytes);
    let out = "";
    // Rejection sampling keeps every character equally likely.
    let i = 0;
    while (out.length < CODE_LENGTH) {
      if (i >= bytes.length) {
        crypto.getRandomValues(bytes);
        i = 0;
      }
      const b = bytes[i++];
      if (b < 248) out += CODE_ALPHABET[b % CODE_ALPHABET.length];
    }
    return normalizeCode(out);
  }

  // --------------------------------------------------------------------------
  // Wire format: saved reports carry the full question text for every response. The text is
  // already in the question bank, so uploads keep only the question id plus the shuffled option
  // order, and downloads rebuild the rest. This keeps a 50-exam history to a few hundred KB.
  // --------------------------------------------------------------------------
  let bankById = null;
  function bank() {
    if (!bankById) {
      bankById = {};
      engine.getAllQuestions().forEach((q) => {
        bankById[q.id] = q;
      });
    }
    return bankById;
  }

  function slimResponse(r) {
    if (!r || r._slim) return r;
    const q = bank()[r.questionId];
    if (!q || !Array.isArray(r.options) || r.stem !== q.stem) return r;
    const order = r.options.map((text) => q.options.indexOf(text));
    if (order.some((i) => i < 0)) return r;
    const slim = { ...r, _slim: 1, _o: order };
    delete slim.stem;
    delete slim.options;
    delete slim.explanation;
    delete slim.studyTip;
    delete slim.reviewNote;
    return slim;
  }

  function hydrateResponse(r) {
    if (!r || !r._slim) return r;
    const q = bank()[r.questionId];
    const full = { ...r };
    delete full._slim;
    delete full._o;
    if (q) {
      full.stem = q.stem;
      full.options = r._o.map((i) => q.options[i]);
      full.explanation = q.explanation;
      full.studyTip = q.studyTip;
      full.reviewNote = q.reviewNote || "";
    } else {
      full.stem = "(This question is no longer in the question bank.)";
      full.options = r._o.map(() => "—");
      full.explanation = "";
      full.studyTip = "";
      full.reviewNote = "";
    }
    return full;
  }

  function mapResponses(container, fn) {
    if (!container || !Array.isArray(container.responses)) return container;
    return { ...container, responses: container.responses.map(fn) };
  }

  function toWire(snapshot) {
    return {
      ...snapshot,
      attempts: snapshot.attempts.map((a) => mapResponses(a, slimResponse)),
      activeSession: snapshot.activeSession ? mapResponses(snapshot.activeSession, slimResponse) : null
    };
  }

  function fromWire(snapshot) {
    return {
      ...snapshot,
      attempts: snapshot.attempts.map((a) => mapResponses(a, hydrateResponse)),
      activeSession: snapshot.activeSession ? mapResponses(snapshot.activeSession, hydrateResponse) : null
    };
  }

  // --------------------------------------------------------------------------
  // Snapshots
  // --------------------------------------------------------------------------
  function emptySnapshot() {
    return {
      schema: 1,
      exposure: { totalAttempts: 0, items: {} },
      attempts: [],
      activeSession: null,
      customQuestions: [],
      meta: { exposureResetAt: 0, attemptsClearedAt: 0, closedSessionIds: [] }
    };
  }

  function sanitizeSnapshot(s) {
    const base = emptySnapshot();
    if (!s || typeof s !== "object") return base;
    const exposure = s.exposure && typeof s.exposure === "object" ? s.exposure : base.exposure;
    const meta = s.meta && typeof s.meta === "object" ? s.meta : base.meta;
    return {
      schema: 1,
      exposure: {
        totalAttempts: Number(exposure.totalAttempts) || 0,
        items: exposure.items && typeof exposure.items === "object" ? exposure.items : {}
      },
      attempts: Array.isArray(s.attempts) ? s.attempts.filter((a) => a && typeof a === "object") : [],
      activeSession: s.activeSession && typeof s.activeSession === "object" ? s.activeSession : null,
      customQuestions: Array.isArray(s.customQuestions) ? s.customQuestions.filter((q) => q && q.id) : [],
      meta: {
        exposureResetAt: Number(meta.exposureResetAt) || 0,
        attemptsClearedAt: Number(meta.attemptsClearedAt) || 0,
        closedSessionIds: Array.isArray(meta.closedSessionIds) ? meta.closedSessionIds : []
      }
    };
  }

  function readLocalSnapshot() {
    return sanitizeSnapshot({
      exposure: readJson(KEYS.EXPOSURE, null),
      attempts: readJson(KEYS.ATTEMPTS, []),
      activeSession: readJson(KEYS.ACTIVE_SESSION, null),
      customQuestions: readJson(KEYS.CUSTOM_QUESTIONS, []),
      meta: readJson(KEYS.SYNC_META, null)
    });
  }

  // Writes straight to localStorage (not through the engine) so it doesn't trigger another sync.
  function writeLocalSnapshot(snapshot, { keepLocalSession }) {
    writeJson(KEYS.EXPOSURE, snapshot.exposure);
    writeJson(KEYS.ATTEMPTS, snapshot.attempts);
    writeJson(KEYS.CUSTOM_QUESTIONS, snapshot.customQuestions.length ? snapshot.customQuestions : null);
    writeJson(KEYS.SYNC_META, snapshot.meta);
    if (!keepLocalSession) writeJson(KEYS.ACTIVE_SESSION, snapshot.activeSession);
    bankById = null; // custom questions may have changed
  }

  // --------------------------------------------------------------------------
  // Merging
  // --------------------------------------------------------------------------
  function mergeMeta(a, b) {
    const closed = [];
    [...a.closedSessionIds, ...b.closedSessionIds].forEach((id) => {
      if (id && !closed.includes(id)) closed.push(id);
    });
    return {
      exposureResetAt: Math.max(a.exposureResetAt, b.exposureResetAt),
      attemptsClearedAt: Math.max(a.attemptsClearedAt, b.attemptsClearedAt),
      closedSessionIds: closed.slice(0, MAX_CLOSED_IDS)
    };
  }

  function mergeExposure(a, b, aResetAt, bResetAt) {
    // A rotation reset on one device wins over older history from the other.
    if (aResetAt > bResetAt) return a;
    if (bResetAt > aResetAt) return b;

    const items = { ...a.items };
    Object.keys(b.items).forEach((id) => {
      const x = items[id];
      const y = b.items[id];
      if (!x) {
        items[id] = y;
        return;
      }
      const newer = (y.lastAttempt || 0) > (x.lastAttempt || 0) ? y : x;
      items[id] = {
        ...x,
        ...y,
        seenCount: Math.max(x.seenCount || 0, y.seenCount || 0),
        correctCount: Math.max(x.correctCount || 0, y.correctCount || 0),
        everMissed: Boolean(x.everMissed || y.everMissed),
        lastAttempt: Math.max(x.lastAttempt || 0, y.lastAttempt || 0),
        lastCorrect: newer.lastCorrect === undefined ? null : newer.lastCorrect
      };
      // Review-list status follows whichever device answered the question most recently.
      ["needsReview", "lastFlagged"].forEach((key) => {
        if (newer[key] === undefined) delete items[id][key];
        else items[id][key] = newer[key];
      });
    });
    return { totalAttempts: Math.max(a.totalAttempts, b.totalAttempts), items };
  }

  function attemptKey(attempt) {
    return attempt.sessionId || attempt.completedAt || stableStringify(attempt).slice(0, 80);
  }

  function mergeAttempts(a, b, clearedAt) {
    const byKey = new Map();
    [...a, ...b].forEach((attempt) => {
      const key = attemptKey(attempt);
      const existing = byKey.get(key);
      if (!existing || (attempt.totalAsked || 0) > (existing.totalAsked || 0)) byKey.set(key, attempt);
    });
    return [...byKey.values()]
      .filter((attempt) => !clearedAt || timeOf(attempt.completedAt) > clearedAt)
      .sort((x, y) => timeOf(y.completedAt) - timeOf(x.completedAt))
      .slice(0, MAX_ATTEMPTS);
  }

  function mergeActiveSession(a, b, closedIds, attempts) {
    const finishedIds = new Set(attempts.map((x) => x.sessionId).filter(Boolean));
    const usable = [a, b].filter(
      (s) =>
        s &&
        !s.isCompleted &&
        s.currentQuestion &&
        !closedIds.includes(s.sessionId) &&
        !finishedIds.has(s.sessionId)
    );
    if (usable.length === 0) return null;
    if (usable.length === 1) return usable[0];
    const [x, y] = usable;
    if (x.sessionId === y.sessionId) {
      // Same exam on both devices: keep whichever got further.
      const xr = (x.responses || []).length;
      const yr = (y.responses || []).length;
      if (xr !== yr) return xr > yr ? x : y;
      return (y.elapsedSeconds || 0) > (x.elapsedSeconds || 0) ? y : x;
    }
    // Two different paused exams: keep the one started most recently.
    return sessionStartedAt(y) > sessionStartedAt(x) ? y : x;
  }

  function mergeCustomQuestions(a, b) {
    const seen = new Set();
    return [...a, ...b].filter((q) => {
      if (seen.has(q.id)) return false;
      seen.add(q.id);
      return true;
    });
  }

  // Both snapshots in wire (slim) form.
  function mergeSnapshots(local, remote) {
    const meta = mergeMeta(local.meta, remote.meta);
    const attempts = mergeAttempts(local.attempts, remote.attempts, meta.attemptsClearedAt);
    return {
      schema: 1,
      exposure: mergeExposure(
        local.exposure,
        remote.exposure,
        local.meta.exposureResetAt,
        remote.meta.exposureResetAt
      ),
      attempts,
      activeSession: mergeActiveSession(local.activeSession, remote.activeSession, meta.closedSessionIds, attempts),
      customQuestions: mergeCustomQuestions(local.customQuestions, remote.customQuestions),
      meta
    };
  }

  // --------------------------------------------------------------------------
  // Supabase calls (plain fetch against the two RPC functions; no SDK needed)
  // --------------------------------------------------------------------------
  async function rpc(fn, body) {
    const headers = { "Content-Type": "application/json", apikey: cfg.supabaseAnonKey };
    // Legacy anon keys are JWTs and also go in Authorization; new publishable keys don't.
    if (String(cfg.supabaseAnonKey).startsWith("eyJ")) headers.Authorization = "Bearer " + cfg.supabaseAnonKey;
    const res = await fetch(`${baseUrl}/rest/v1/rpc/${fn}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      let detail = "";
      try {
        detail = (await res.json()).message || "";
      } catch (e) {
        /* ignore */
      }
      const err = new Error(detail || `Sync server returned ${res.status}`);
      err.status = res.status;
      throw err;
    }
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  }

  // --------------------------------------------------------------------------
  // Sync loop & status
  // --------------------------------------------------------------------------
  const status = {
    state: "off", // off | syncing | synced | offline | error
    message: "",
    lastSyncedAt: Number(localStorage.getItem(LOCAL.LAST_SYNCED)) || 0
  };
  const statusListeners = [];
  let syncing = null;
  let rerunRequested = false;
  let debounceTimer = null;

  function setStatus(state, message) {
    status.state = state;
    status.message = message || "";
    statusListeners.forEach((cb) => {
      try {
        cb({ ...status, code: getCode() });
      } catch (e) {
        console.warn(e);
      }
    });
  }

  function getCode() {
    try {
      return localStorage.getItem(LOCAL.CODE);
    } catch (e) {
      return null;
    }
  }

  function isInExam() {
    return document.body && document.body.getAttribute("data-view") === "exam";
  }

  // --------------------------------------------------------------------------
  // Compression: progress is stored on the server as gzip+base64 ({gz: "..."}), roughly 10x
  // smaller than raw JSON. Plain JSON is still accepted for browsers without CompressionStream.
  // --------------------------------------------------------------------------
  function bytesToBase64(bytes) {
    let bin = "";
    for (let i = 0; i < bytes.length; i += 0x8000) {
      bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    }
    return btoa(bin);
  }

  function base64ToBytes(b64) {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  async function encodeData(obj) {
    if (typeof CompressionStream === "undefined") return obj;
    const stream = new Blob([JSON.stringify(obj)]).stream().pipeThrough(new CompressionStream("gzip"));
    const bytes = new Uint8Array(await new Response(stream).arrayBuffer());
    return { gz: bytesToBase64(bytes) };
  }

  async function decodeData(data) {
    if (!data || typeof data.gz !== "string") return data;
    if (typeof DecompressionStream === "undefined") {
      throw new Error("this browser is too old to read synced progress");
    }
    const stream = new Blob([base64ToBytes(data.gz)]).stream().pipeThrough(new DecompressionStream("gzip"));
    return JSON.parse(await new Response(stream).text());
  }

  // Cheap fingerprint of the last state this device synced, to skip pointless uploads.
  function fingerprint(snapshot) {
    const str = stableStringify(snapshot);
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 0x01000193);
    }
    return (h >>> 0).toString(16) + ":" + str.length;
  }

  async function upload(code, snapshot, baseVersion) {
    return rpc("put_progress", { p_code: code, p_data: await encodeData(snapshot), p_base_version: baseVersion });
  }

  function rememberSynced(version, snapshot) {
    localStorage.setItem(LOCAL.VERSION, String(version));
    localStorage.setItem(LOCAL.FINGERPRINT, fingerprint(snapshot));
  }

  async function runSyncOnce(code) {
    for (let tries = 0; tries < 3; tries++) {
      const knownVersion = Number(localStorage.getItem(LOCAL.VERSION)) || 0;
      const remoteRow = await rpc("get_progress", { p_code: code, p_known_version: knownVersion });
      const localFull = readLocalSnapshot();
      const local = toWire(localFull);

      if (remoteRow && remoteRow.unchanged) {
        // Nobody else saved since our last sync, so this device already has everything.
        if (fingerprint(local) === localStorage.getItem(LOCAL.FINGERPRINT)) return { localChanged: false };
        const newVersion = await upload(code, local, knownVersion);
        if (newVersion === -1) continue;
        rememberSynced(newVersion, local);
        return { localChanged: false };
      }

      const remote = remoteRow ? sanitizeSnapshot(await decodeData(remoteRow.data)) : null;
      const merged = remote ? mergeSnapshots(local, remote) : local;

      const keepLocalSession = isInExam(); // never swap the exam that's on screen
      const mergedFull = fromWire(merged);
      const localChanged = !sameData(
        keepLocalSession ? { ...mergedFull, activeSession: null } : mergedFull,
        keepLocalSession ? { ...localFull, activeSession: null } : localFull
      );
      if (localChanged) writeLocalSnapshot(mergedFull, { keepLocalSession });

      let version = remoteRow ? remoteRow.version : 0;
      if (!remote || !sameData(merged, remote)) {
        const newVersion = await upload(code, merged, version);
        if (newVersion === -1) continue; // another device saved first; download again and re-merge
        version = newVersion;
      }
      rememberSynced(version, merged);
      return { localChanged };
    }
    throw new Error("Another device kept saving at the same moment; will retry shortly.");
  }

  async function syncNow() {
    const code = getCode();
    if (!configured || !code) return;
    if (syncing) {
      rerunRequested = true;
      return syncing;
    }
    clearTimeout(debounceTimer);
    setStatus("syncing");
    syncing = (async () => {
      try {
        const { localChanged } = await runSyncOnce(code);
        status.lastSyncedAt = Date.now();
        localStorage.setItem(LOCAL.LAST_SYNCED, String(status.lastSyncedAt));
        setStatus("synced");
        if (localChanged) window.dispatchEvent(new CustomEvent("nremt:progress-synced"));
      } catch (e) {
        const offline = typeof navigator !== "undefined" && navigator.onLine === false;
        console.warn("Sync failed:", e);
        setStatus(offline ? "offline" : "error", offline ? "" : e.message);
      } finally {
        syncing = null;
        if (rerunRequested) {
          rerunRequested = false;
          scheduleSync(1000);
        }
      }
    })();
    return syncing;
  }

  function scheduleSync(delayMs) {
    if (!configured || !getCode()) return;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(syncNow, delayMs);
  }

  function enable(codeInput) {
    const code = codeInput === undefined ? generateCode() : normalizeCode(codeInput);
    if (!code) return { ok: false, error: `Sync codes are ${CODE_LENGTH} letters and numbers, like ABCD-EFGH-JKMN-PQRS.` };
    localStorage.setItem(LOCAL.CODE, code);
    localStorage.removeItem(LOCAL.VERSION);
    localStorage.removeItem(LOCAL.FINGERPRINT);
    syncNow();
    return { ok: true, code };
  }

  function disable() {
    clearTimeout(debounceTimer);
    [LOCAL.CODE, LOCAL.VERSION, LOCAL.LAST_SYNCED, LOCAL.FINGERPRINT].forEach((k) => localStorage.removeItem(k));
    status.lastSyncedAt = 0;
    setStatus("off");
  }

  function shareLink() {
    const code = getCode();
    if (!code) return "";
    return `${location.origin}${location.pathname}#sync=${code}`;
  }

  // --------------------------------------------------------------------------
  // Wiring
  // --------------------------------------------------------------------------
  function init() {
    if (!configured) return;

    // Opening a share link (…/#sync=CODE) turns sync on with that code.
    const match = /[#&]sync=([A-Za-z0-9-]+)/.exec(location.hash || "");
    if (match) {
      const code = normalizeCode(match[1]);
      if (code) {
        localStorage.setItem(LOCAL.CODE, code);
        localStorage.removeItem(LOCAL.VERSION);
        localStorage.removeItem(LOCAL.FINGERPRINT);
      }
      history.replaceState(null, "", location.pathname + location.search);
    }

    if (getCode()) {
      setStatus("synced");
      syncNow();
    }

    window.addEventListener("nremt:progress-changed", (e) => {
      const kind = e.detail && e.detail.kind;
      // Mid-exam saves happen after every answer; batch those so a phone isn't uploading constantly.
      scheduleSync(kind === "session" || kind === "exposure" ? 15000 : 1500);
    });
    document.addEventListener("visibilitychange", () => {
      // Upload when Nate switches away (phone locked, app switched) and refresh when he comes back.
      if (getCode()) syncNow();
    });
    window.addEventListener("online", () => syncNow());
  }

  window.NREMTSync = {
    isConfigured: () => configured,
    getCode,
    getStatus: () => ({ ...status, code: getCode() }),
    onStatus: (cb) => statusListeners.push(cb),
    enable,
    disable,
    syncNow,
    shareLink,
    normalizeCode,
    // Exposed for scripts/test-sync.js
    _internals: { mergeSnapshots, toWire, fromWire, sanitizeSnapshot, sameData, generateCode, encodeData, decodeData }
  };

  init();
})();
