// Coach View (coach.html): a read-only window into Nate's synced progress.
//
// It downloads the progress saved under a sync code with the same get_progress function the app
// uses, and only ever reads. It never calls put_progress and never touches the practice app's own
// localStorage keys, so opening this page on any device can't change or merge anyone's progress.
// The only thing it stores is the sync code being viewed (nremt_coach_code_v1).

(function () {
  const cfg = window.NREMT_SYNC_CONFIG || {};
  const engine = window.NREMTCatEngine || {};
  const DOMAINS = engine.DOMAIN_BLUEPRINT || [];
  const CODE_KEY = "nremt_coach_code_v1";
  const CODE_ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
  const PASSING = 950;
  const DOMAIN_ABOVE = 74; // same cut-offs the app's score report uses
  const DOMAIN_NEAR = 60;
  const REFRESH_MS = 60 * 1000;

  const baseUrl = String(cfg.supabaseUrl || "")
    .replace(/\/+$/, "")
    .replace(/\/rest\/v1$/, "");

  const $ = (id) => document.getElementById(id);
  const els = {
    status: $("c-status"),
    setup: $("c-setup"),
    form: $("c-code-form"),
    input: $("c-code-input"),
    codeError: $("c-code-error"),
    content: $("c-content"),
    paused: $("c-paused"),
    hero: $("c-hero"),
    tiles: $("c-tiles"),
    scoreChart: $("c-score-chart"),
    domains: $("c-domains"),
    domainHint: $("c-domain-hint"),
    activity: $("c-activity"),
    subtopics: $("c-subtopics"),
    review: $("c-review"),
    history: $("c-history"),
    changeCode: $("c-change-code"),
    tooltip: $("c-tooltip")
  };

  const state = {
    code: null,
    version: 0,
    updatedAt: null,
    data: null,
    checkedAt: 0,
    loading: false,
    error: ""
  };

  // --------------------------------------------------------------------------
  // Helpers
  // --------------------------------------------------------------------------
  function esc(value) {
    return String(value === undefined || value === null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeCode(input) {
    const chars = String(input || "")
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "");
    if (chars.length !== 16) return null;
    for (const c of chars) if (!CODE_ALPHABET.includes(c)) return null;
    return chars.match(/.{4}/g).join("-");
  }

  function storedCode() {
    try {
      return normalizeCode(localStorage.getItem(CODE_KEY));
    } catch (e) {
      return null;
    }
  }

  function storeCode(code) {
    try {
      if (code) localStorage.setItem(CODE_KEY, code);
      else localStorage.removeItem(CODE_KEY);
    } catch (e) {
      /* private mode: the code just won't be remembered */
    }
  }

  function timeOf(iso) {
    const t = Date.parse(iso || "");
    return Number.isFinite(t) ? t : 0;
  }

  function attemptTime(a) {
    return timeOf(a.completedAt) || Number(String(a.sessionId || "").replace(/\D/g, "")) || 0;
  }

  function dayKey(t) {
    const d = new Date(t);
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  }

  function startOfDay(t) {
    const d = new Date(t);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }

  function formatClock(t) {
    return new Date(t).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  }

  function formatWhen(t) {
    if (!t) return "—";
    const today = startOfDay(Date.now());
    const day = startOfDay(t);
    if (day === today) return `Today ${formatClock(t)}`;
    if (day === today - 86400000) return `Yesterday ${formatClock(t)}`;
    const sameYear = new Date(t).getFullYear() === new Date().getFullYear();
    const date = new Date(t).toLocaleDateString([], {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: sameYear ? undefined : "numeric"
    });
    return `${date}, ${formatClock(t)}`;
  }

  function formatShortDate(t) {
    return new Date(t).toLocaleDateString([], { month: "short", day: "numeric" });
  }

  function formatAgo(t) {
    if (!t) return "never";
    const sec = Math.max(0, Math.round((Date.now() - t) / 1000));
    if (sec < 60) return "just now";
    const min = Math.round(sec / 60);
    if (min < 60) return `${min} min ago`;
    const hr = Math.round(min / 60);
    if (hr < 24) return `${hr} hr ago`;
    const days = Math.round(hr / 24);
    return days === 1 ? "yesterday" : `${days} days ago`;
  }

  function formatDuration(totalSeconds) {
    const sec = Math.max(0, Math.round(totalSeconds || 0));
    if (sec < 60) return `${sec} s`;
    const min = Math.round(sec / 60);
    if (min < 60) return `${min} min`;
    const h = Math.floor(min / 60);
    const m = min % 60;
    return m ? `${h} h ${m} min` : `${h} h`;
  }

  function pct(n, d) {
    return d > 0 ? Math.round((n / d) * 100) : 0;
  }

  function plural(n, word, pluralWord) {
    return `${n} ${n === 1 ? word : pluralWord || word + "s"}`;
  }

  function modeLabel(mode) {
    if (mode === "sprint") return "10-Q Sprint";
    if (mode === "review") return "Review round";
    return "35-Q Exam";
  }

  function shortDomain(name) {
    const d = DOMAINS.find((x) => x.name === name);
    return d ? d.shortName : name || "Other";
  }

  function needsReview(exp) {
    if (!exp || !exp.seenCount) return false;
    return exp.needsReview !== undefined ? Boolean(exp.needsReview) : exp.lastCorrect === false;
  }

  // Question bank: the site's question files plus any custom questions saved in the progress.
  let bankCache = null;
  function bank() {
    if (bankCache) return bankCache;
    bankCache = {};
    (window.NREMT_QUESTIONS || []).forEach((q) => {
      if (q && q.id) bankCache[q.id] = q;
    });
    ((state.data && state.data.customQuestions) || []).forEach((q) => {
      if (q && q.id && !bankCache[q.id]) bankCache[q.id] = q;
    });
    return bankCache;
  }

  // Responses are uploaded slimmed (question id + shuffled option order), so rebuild option text.
  function optionText(r, index) {
    if (index === null || index === undefined || index < 0) return "(no answer)";
    if (Array.isArray(r.options) && r.options[index] !== undefined) return r.options[index];
    const q = bank()[r.questionId];
    if (q && Array.isArray(r._o) && q.options) return q.options[r._o[index]] || "—";
    return `Option ${String.fromCharCode(65 + index)}`;
  }

  function resultPill(a) {
    if (a.mode === "review") {
      const cleared = a.clearedFromReviewCount !== undefined ? a.clearedFromReviewCount : a.totalCorrect || 0;
      return `<span class="c-pill is-info">Cleared ${cleared} of ${a.totalAsked || 0}</span>`;
    }
    if (a.passed) return `<span class="c-pill is-good">Passed</span>`;
    if (a.completedAll === false || a.endReason === "ended-early") {
      return `<span class="c-pill is-warn">Ended early</span>`;
    }
    return `<span class="c-pill is-bad">Below ${PASSING}</span>`;
  }

  // --------------------------------------------------------------------------
  // Tooltip (shared by the charts)
  // --------------------------------------------------------------------------
  function showTip(html, x, y) {
    const tip = els.tooltip;
    tip.innerHTML = html;
    tip.hidden = false;
    const pad = 12;
    const w = tip.offsetWidth;
    const h = tip.offsetHeight;
    let left = x + pad;
    let top = y - h - pad;
    if (left + w > window.innerWidth - 8) left = x - w - pad;
    if (left < 8) left = 8;
    if (top < 8) top = y + pad;
    tip.style.left = `${left}px`;
    tip.style.top = `${top}px`;
  }

  function hideTip() {
    els.tooltip.hidden = true;
  }

  function tipForElement(el, html) {
    const r = el.getBoundingClientRect();
    showTip(html, r.left + r.width / 2, r.top);
  }

  // --------------------------------------------------------------------------
  // Network (read-only)
  // --------------------------------------------------------------------------
  async function fetchProgress(code, knownVersion) {
    const headers = { "Content-Type": "application/json", apikey: cfg.supabaseAnonKey };
    if (String(cfg.supabaseAnonKey).startsWith("eyJ")) headers.Authorization = "Bearer " + cfg.supabaseAnonKey;
    const res = await fetch(`${baseUrl}/rest/v1/rpc/get_progress`, {
      method: "POST",
      headers,
      cache: "no-store",
      body: JSON.stringify({ p_code: code, p_known_version: knownVersion || 0 })
    });
    if (!res.ok) throw new Error(`The sync server returned ${res.status}.`);
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  }

  async function decodeData(data) {
    if (!data || typeof data.gz !== "string") return data;
    if (typeof DecompressionStream === "undefined") {
      throw new Error("This browser is too old to read synced progress. Try a current Chrome, Safari, or Edge.");
    }
    const bin = atob(data.gz);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
    return JSON.parse(await new Response(stream).text());
  }

  function sanitize(d) {
    const s = d && typeof d === "object" ? d : {};
    const exposure = s.exposure && typeof s.exposure === "object" ? s.exposure : {};
    return {
      exposure: { items: exposure.items && typeof exposure.items === "object" ? exposure.items : {} },
      attempts: Array.isArray(s.attempts) ? s.attempts.filter((a) => a && typeof a === "object") : [],
      activeSession: s.activeSession && typeof s.activeSession === "object" ? s.activeSession : null,
      customQuestions: Array.isArray(s.customQuestions) ? s.customQuestions.filter((q) => q && q.id) : []
    };
  }

  async function load(code, { quiet } = {}) {
    if (state.loading) return;
    const sameCode = state.code === code && state.data;
    state.loading = true;
    if (!quiet) renderStatus();
    try {
      const result = await fetchProgress(code, sameCode ? state.version : 0);
      state.checkedAt = Date.now();
      state.error = "";
      if (!result) {
        if (sameCode) {
          state.error = "That sync code no longer has any saved progress.";
        } else {
          showSetup("No progress is saved under that code. Check it against Nate's dashboard.", code);
        }
        return;
      }
      if (result.unchanged && sameCode) return;
      state.data = sanitize(await decodeData(result.data));
      state.code = code;
      state.version = result.version || 0;
      state.updatedAt = timeOf(result.updated_at);
      bankCache = null;
      storeCode(code);
      els.setup.hidden = true;
      els.content.hidden = false;
      renderAll();
    } catch (e) {
      const message = navigator.onLine === false ? "You're offline." : e.message || "Couldn't reach the sync server.";
      if (state.data) state.error = message;
      else showSetup(message, code);
    } finally {
      state.loading = false;
      renderStatus();
    }
  }

  // --------------------------------------------------------------------------
  // Setup & status
  // --------------------------------------------------------------------------
  function showSetup(error, code) {
    els.content.hidden = true;
    els.setup.hidden = false;
    els.codeError.hidden = !error;
    els.codeError.textContent = error || "";
    if (code) els.input.value = code;
    renderStatus();
    if (!code) els.input.focus();
  }

  function renderStatus() {
    if (!state.data) {
      els.status.innerHTML = state.loading ? `<span><span class="c-dot is-busy"></span>Loading…</span>` : "";
      return;
    }
    let dot = "";
    let text;
    if (state.loading) {
      dot = "is-busy";
      text = "Checking for updates…";
    } else if (state.error) {
      dot = "is-error";
      text = `${esc(state.error)} Showing what was last loaded.`;
    } else {
      text = `Last synced from Nate's device <strong title="${esc(new Date(state.updatedAt).toLocaleString())}">${esc(
        formatAgo(state.updatedAt)
      )}</strong>`;
    }
    els.status.innerHTML = `
      <span><span class="c-dot ${dot}"></span>${text}</span>
      <button type="button" class="c-btn c-btn-small" id="c-refresh" ${state.loading ? "disabled" : ""}>↻ Refresh</button>`;
    $("c-refresh").addEventListener("click", () => load(state.code));
  }

  // --------------------------------------------------------------------------
  // Derived data
  // --------------------------------------------------------------------------
  function derive() {
    const d = state.data;
    const attempts = d.attempts.slice().sort((a, b) => attemptTime(a) - attemptTime(b));
    const practice = attempts.filter((a) => a.mode !== "review");
    const reviews = attempts.filter((a) => a.mode === "review");
    const practiceResponses = [];
    practice.forEach((a) => (a.responses || []).forEach((r) => practiceResponses.push(r)));
    const items = d.exposure.items;
    const seenIds = Object.keys(items).filter((id) => items[id] && items[id].seenCount > 0);
    const reviewIds = Object.keys(items).filter((id) => needsReview(items[id]));
    return { attempts, practice, reviews, practiceResponses, items, seenIds, reviewIds };
  }

  // --------------------------------------------------------------------------
  // Rendering
  // --------------------------------------------------------------------------
  function renderAll() {
    const v = derive();
    renderPaused();
    renderOverview(v);
    renderScoreChart(v);
    renderDomains(v);
    renderActivity(v);
    renderSubtopics(v);
    renderReview(v);
    renderHistory(v);
  }

  function renderPaused() {
    const s = state.data.activeSession;
    if (!s || !Array.isArray(s.responses)) {
      els.paused.hidden = true;
      return;
    }
    const answered = s.responses.length;
    const correct = s.responses.filter((r) => r.isCorrect).length;
    const total = s.totalQuestions || answered;
    const started = timeOf(s.startedAt);
    els.paused.hidden = false;
    els.paused.innerHTML = `<strong>⏸ Exam in progress:</strong> ${esc(modeLabel(s.mode))}, ${answered} of ${total} answered${
      answered ? ` (${correct} correct so far)` : ""
    }${started ? `, started ${esc(formatWhen(started))}` : ""}. It's saved, and he can pick it up on any of his devices.`;
  }

  function renderOverview(v) {
    // Scores from exams he stopped early are partial, so the headline compares finished exams only.
    const finished = v.practice.filter((a) => a.completedAll !== false);
    const latest = finished[finished.length - 1];
    const newest = v.practice[v.practice.length - 1];
    const endedNote =
      newest && newest !== latest
        ? `<p class="c-hero-meta">His most recent exam (${esc(formatWhen(attemptTime(newest)))}) ended early after ${plural(
            newest.totalAsked || 0,
            "question"
          )}.</p>`
        : "";
    if (!latest) {
      els.hero.innerHTML = `
        <p class="c-hero-label">Latest practice score</p>
        <p class="c-hero-value">—</p>
        <p class="c-hero-meta">No practice exams finished yet.</p>${endedNote}`;
    } else {
      const prev = finished[finished.length - 2];
      const best = Math.max(...finished.map((a) => a.scaledScore || 0));
      let delta = "";
      if (prev && typeof prev.scaledScore === "number") {
        const diff = (latest.scaledScore || 0) - prev.scaledScore;
        if (diff > 0) delta = `<span class="c-delta-up">▲ ${diff}</span> vs previous`;
        else if (diff < 0) delta = `<span class="c-delta-down">▼ ${Math.abs(diff)}</span> vs previous`;
        else delta = "Same as previous";
      }
      els.hero.innerHTML = `
        <p class="c-hero-label">Latest practice score</p>
        <p class="c-hero-value">${esc(latest.scaledScore)}</p>
        <p>${resultPill(latest)}</p>
        <p class="c-hero-meta">${esc(modeLabel(latest.mode))} · ${esc(formatWhen(attemptTime(latest)))}</p>
        <p class="c-hero-meta">${delta ? delta + " · " : ""}Best ${esc(best)} · Passing ${PASSING}</p>${endedNote}`;
    }

    const allAsked = v.attempts.reduce((n, a) => n + (a.totalAsked || 0), 0);
    const allCorrect = v.attempts.reduce((n, a) => n + (a.totalCorrect || 0), 0);
    const bankSize = Object.keys(bank()).length;
    const weekAgo = Date.now() - 7 * 86400000;
    const weekSeconds = v.attempts
      .filter((a) => attemptTime(a) >= weekAgo)
      .reduce((n, a) => n + (a.elapsedSeconds || 0), 0);
    const totalSeconds = v.attempts.reduce((n, a) => n + (a.elapsedSeconds || 0), 0);
    const lastTime = Math.max(
      v.attempts.length ? attemptTime(v.attempts[v.attempts.length - 1]) : 0,
      state.data.activeSession ? timeOf(state.data.activeSession.startedAt) : 0
    );
    const completed = v.practice.filter((a) => a.completedAll !== false);
    const passedCount = completed.filter((a) => a.passed).length;
    const reviewCount = v.reviewIds.length;

    const tiles = [
      {
        label: "Practice exams",
        value: v.practice.length,
        note: `${passedCount} of ${completed.length} finished exams passed${
          v.reviews.length ? ` · ${plural(v.reviews.length, "review round")}` : ""
        }`
      },
      {
        label: "Questions answered",
        value: allAsked.toLocaleString(),
        note: allAsked ? `${pct(allCorrect, allAsked)}% correct overall` : "None yet"
      },
      {
        label: "Question bank seen",
        value: `${v.seenIds.length}<small> / ${bankSize}</small>`,
        note: `${pct(v.seenIds.length, bankSize)}% of the bank so far`
      },
      {
        label: "On his review list",
        value: reviewCount,
        note: reviewCount ? "Missed or guessed, not yet re-answered" : "All clear"
      },
      {
        label: "Study time, last 7 days",
        value: formatDuration(weekSeconds),
        note: `${formatDuration(totalSeconds)} in total`
      },
      {
        label: "Last studied",
        value: lastTime ? esc(formatAgo(lastTime).replace(/^./, (c) => c.toUpperCase())) : "—",
        note: lastTime ? esc(formatWhen(lastTime)) : ""
      }
    ];
    els.tiles.innerHTML = tiles
      .map(
        (t) => `
        <div class="c-tile">
          <p class="c-tile-label">${t.label}</p>
          <p class="c-tile-value">${t.value}</p>
          <p class="c-tile-note">${t.note}</p>
        </div>`
      )
      .join("");
  }

  // Score trend: one series (scaled score per practice exam) against the 950 passing line.
  function renderScoreChart(v) {
    // Partial scores from exams he stopped early would distort the trend, so only finished exams are plotted.
    const pts = v.practice.filter((a) => typeof a.scaledScore === "number" && a.completedAll !== false);
    const endedEarly = v.practice.length - pts.length;
    const box = els.scoreChart;
    if (!pts.length) {
      box.innerHTML = `<p class="c-empty">Scores will appear here after he finishes his first practice exam.</p>`;
      return;
    }
    const W = Math.max(300, box.clientWidth || 600);
    const H = W < 500 ? 220 : 260;
    const m = { top: 18, right: 40, bottom: 30, left: 44 };
    const iw = W - m.left - m.right;
    const ih = H - m.top - m.bottom;

    const scores = pts.map((a) => a.scaledScore);
    let lo = Math.floor((Math.min(...scores, PASSING) - 100) / 100) * 100;
    let hi = Math.ceil((Math.max(...scores, PASSING) + 100) / 100) * 100;
    lo = Math.max(100, lo);
    hi = Math.min(1500, hi);
    const span = hi - lo;
    const step = span <= 600 ? 100 : span <= 1200 ? 200 : 300;
    const ticks = [];
    for (let t = Math.ceil(lo / step) * step; t <= hi; t += step) ticks.push(t);

    const x = (i) => m.left + (pts.length === 1 ? iw / 2 : (i / (pts.length - 1)) * iw);
    const y = (s) => m.top + ih - ((s - lo) / span) * ih;

    const grid = ticks
      .map(
        (t) => `
        <line class="c-gridline" x1="${m.left}" x2="${m.left + iw}" y1="${y(t)}" y2="${y(t)}"></line>
        <text class="c-axis-text" x="${m.left - 8}" y="${y(t) + 4}" text-anchor="end">${t.toLocaleString()}</text>`
      )
      .join("");

    // Date labels: first exam of each day, thinned so they never collide.
    const minGap = 56;
    let lastLabelX = -Infinity;
    let lastDay = "";
    const xLabels = pts
      .map((a, i) => {
        const t = attemptTime(a);
        const key = dayKey(t);
        const px = x(i);
        if (key === lastDay || px - lastLabelX < minGap) return "";
        lastDay = key;
        lastLabelX = px;
        return `<text class="c-axis-text" x="${px}" y="${m.top + ih + 20}" text-anchor="middle">${esc(formatShortDate(t))}</text>`;
      })
      .join("");

    const linePath = pts.map((a, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(a.scaledScore).toFixed(1)}`).join(" ");
    const areaPath =
      pts.length > 1
        ? `${linePath} L${x(pts.length - 1).toFixed(1)},${m.top + ih} L${x(0).toFixed(1)},${m.top + ih} Z`
        : "";
    const last = pts[pts.length - 1];
    const lastX = x(pts.length - 1);
    const lastY = y(last.scaledScore);
    const passY = y(PASSING);
    // Keep the end label clear of the passing-line label.
    const endLabelY = Math.abs(lastY - passY) < 14 ? lastY + (lastY > passY ? 14 : -10) : lastY + 4;

    const points = pts
      .map((a, i) => `<circle class="c-point" data-i="${i}" cx="${x(i)}" cy="${y(a.scaledScore)}" r="4.5"></circle>`)
      .join("");
    const hits = pts
      .map(
        (a, i) =>
          `<circle class="c-hit" data-i="${i}" cx="${x(i)}" cy="${y(a.scaledScore)}" r="14" fill="transparent" tabindex="0"
             aria-label="${esc(`${formatWhen(attemptTime(a))}: score ${a.scaledScore}`)}"></circle>`
      )
      .join("");

    box.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img"
           aria-label="Practice exam scaled scores over time; the exam history below lists every score">
        ${grid}
        <line class="c-passline" x1="${m.left}" x2="${m.left + iw}" y1="${passY}" y2="${passY}"></line>
        <text class="c-pass-text" x="${m.left + 4}" y="${passY - 6}">Passing ${PASSING}</text>
        ${areaPath ? `<path class="c-area" d="${areaPath}"></path>` : ""}
        ${pts.length > 1 ? `<path class="c-line" d="${linePath}"></path>` : ""}
        <line class="c-crosshair" id="c-crosshair" x1="0" x2="0" y1="${m.top}" y2="${m.top + ih}" visibility="hidden"></line>
        ${points}
        <text class="c-end-label" x="${lastX + 8}" y="${endLabelY}">${esc(last.scaledScore)}</text>
        ${xLabels}
        <rect id="c-score-overlay" x="${m.left - 10}" y="${m.top}" width="${iw + 20}" height="${ih}" fill="transparent"></rect>
        ${hits}
      </svg>
      <div class="c-legend-row">
        ${endedEarly ? `<span>${plural(endedEarly, "exam")} he ended early ${endedEarly === 1 ? "isn't" : "aren't"} charted (see history).</span>` : ""}
        ${pts.some((a) => a.mode === "sprint") ? `<span>10-question sprint scores swing more than full 35-question exams.</span>` : ""}
      </div>`;

    const svg = box.querySelector("svg");
    const cross = svg.querySelector("#c-crosshair");
    const circles = svg.querySelectorAll(".c-point");
    function activate(i, clientX, clientY) {
      const a = pts[i];
      circles.forEach((c) => c.classList.toggle("is-active", Number(c.dataset.i) === i));
      cross.setAttribute("x1", x(i));
      cross.setAttribute("x2", x(i));
      cross.setAttribute("visibility", "visible");
      const html = `<strong>${esc(formatWhen(attemptTime(a)))}</strong><br>
        ${esc(modeLabel(a.mode))}<br>
        Score <strong>${esc(a.scaledScore)}</strong> · ${a.totalCorrect || 0} of ${a.totalAsked || 0} correct<br>
        <span class="c-tt-muted">${a.passed ? "Passed" : `Below ${PASSING}`}</span>`;
      if (clientX === undefined) {
        const r = svg.getBoundingClientRect();
        const scale = r.width / W;
        showTip(html, r.left + x(i) * scale, r.top + y(a.scaledScore) * scale);
      } else showTip(html, clientX, clientY);
    }
    function clear() {
      circles.forEach((c) => c.classList.remove("is-active"));
      cross.setAttribute("visibility", "hidden");
      hideTip();
    }
    function nearest(evt) {
      const r = svg.getBoundingClientRect();
      const px = ((evt.clientX - r.left) / r.width) * W;
      let best = 0;
      pts.forEach((_, i) => {
        if (Math.abs(x(i) - px) < Math.abs(x(best) - px)) best = i;
      });
      return best;
    }
    svg.addEventListener("pointermove", (e) => activate(nearest(e), e.clientX, e.clientY));
    svg.addEventListener("pointerleave", clear);
    svg.querySelectorAll(".c-hit").forEach((h) => {
      h.addEventListener("focus", () => activate(Number(h.dataset.i)));
      h.addEventListener("blur", clear);
    });
  }

  function domainStatus(total, accuracy) {
    if (!total) return `<span class="c-pill">Not tried yet</span>`;
    if (total < 5) return `<span class="c-pill">Only ${total} answered</span>`;
    if (accuracy >= DOMAIN_ABOVE) return `<span class="c-pill is-good">Above passing standard</span>`;
    if (accuracy >= DOMAIN_NEAR) return `<span class="c-pill is-warn">Near passing standard</span>`;
    return `<span class="c-pill is-bad">Below passing standard</span>`;
  }

  function renderDomains(v) {
    const b = bank();
    const bankByDomain = {};
    Object.values(b).forEach((q) => {
      bankByDomain[q.domain] = (bankByDomain[q.domain] || 0) + 1;
    });
    const seenByDomain = {};
    v.seenIds.forEach((id) => {
      const q = b[id];
      if (q) seenByDomain[q.domain] = (seenByDomain[q.domain] || 0) + 1;
    });

    els.domainHint.textContent = v.practiceResponses.length
      ? `From ${plural(v.practiceResponses.length, "question")} in practice exams. The line marks ${DOMAIN_ABOVE}%, the app's "above passing standard" mark.`
      : "Appears after his first practice exam.";

    els.domains.innerHTML = DOMAINS.map((d) => {
      const rs = v.practiceResponses.filter((r) => r.domain === d.name);
      const correct = rs.filter((r) => r.isCorrect).length;
      const acc = pct(correct, rs.length);
      return `
        <div class="c-domain">
          <div class="c-domain-top">
            <span class="c-domain-name">${esc(d.shortName)}<span class="c-domain-weight">${esc(d.examWeight)} of the exam</span></span>
            ${domainStatus(rs.length, acc)}
          </div>
          <div class="c-bar-row">
            <div class="c-bar-track" role="img" aria-label="${esc(`${d.shortName}: ${acc}% correct, ${correct} of ${rs.length}`)}">
              ${rs.length ? `<div class="c-bar-fill" style="width:${acc}%"></div>` : ""}
              <div class="c-bar-mark" style="left:${DOMAIN_ABOVE}%"></div>
            </div>
            <span class="c-bar-value">${rs.length ? `${acc}% <span class="c-col-muted">(${correct}/${rs.length})</span>` : "—"}</span>
          </div>
          <div class="c-domain-foot">
            <span>Seen ${seenByDomain[d.name] || 0} of ${bankByDomain[d.name] || 0} questions in the bank</span>
          </div>
        </div>`;
    }).join("");
  }

  function renderActivity(v) {
    const byDay = {};
    v.attempts.forEach((a) => {
      const k = dayKey(attemptTime(a));
      const e = (byDay[k] = byDay[k] || { questions: 0, sessions: 0, seconds: 0 });
      e.questions += a.totalAsked || 0;
      e.sessions += 1;
      e.seconds += a.elapsedSeconds || 0;
    });
    const today = startOfDay(Date.now());
    const weekStart = new Date(today);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay()); // Sunday of this week
    const start = new Date(weekStart);
    start.setDate(start.getDate() - 28);

    const level = (q) => (q <= 0 ? 0 : q < 10 ? 1 : q < 20 ? 2 : q < 35 ? 3 : q < 60 ? 4 : 5);
    const heads = ["S", "M", "T", "W", "T", "F", "S"].map((h) => `<div class="c-cal-head">${h}</div>`).join("");
    const cells = [];
    for (let i = 0; i < 35; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      const t = day.getTime();
      const e = byDay[dayKey(t)];
      const isFuture = t > today;
      const label = day.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });
      const detail = isFuture
        ? ""
        : e
          ? `${plural(e.questions, "question")} · ${plural(e.sessions, "session")} · ${formatDuration(e.seconds)}`
          : "No study";
      const cls = ["c-cell", isFuture ? "is-future" : `l${level(e ? e.questions : 0)}`, t === today ? "is-today" : ""].join(" ");
      cells.push(
        `<div class="${cls}" ${isFuture ? "" : `tabindex="0" data-tip="${esc(`<strong>${esc(label)}</strong><br>${esc(detail)}`)}"`}
              aria-label="${esc(isFuture ? label : `${label}: ${detail}`)}">${day.getDate()}</div>`
      );
    }

    const twoWeeksAgo = today - 13 * 86400000;
    const activeDays = Object.keys(byDay).filter((k) => {
      const [yy, mm, dd] = k.split("-").map(Number);
      return new Date(yy, mm - 1, dd).getTime() >= twoWeeksAgo;
    }).length;
    const thisWeek = v.attempts
      .filter((a) => attemptTime(a) >= weekStart.getTime())
      .reduce((n, a) => n + (a.totalAsked || 0), 0);

    els.activity.innerHTML = `
      <div class="c-cal">${heads}${cells.join("")}</div>
      <div class="c-cal-legend" aria-hidden="true">
        <span>0</span>
        <i style="background:var(--seq-0)"></i><i style="background:var(--seq-1)"></i><i style="background:var(--seq-2)"></i>
        <i style="background:var(--seq-3)"></i><i style="background:var(--seq-4)"></i><i style="background:var(--seq-5)"></i>
        <span>60+ questions</span>
      </div>
      <p class="c-cal-summary">Studied on ${plural(activeDays, "day")} of the last 14 · ${plural(thisWeek, "question")} so far this week.</p>`;

    els.activity.querySelectorAll("[data-tip]").forEach((cell) => {
      const html = cell.getAttribute("data-tip");
      cell.addEventListener("pointerenter", () => tipForElement(cell, html));
      cell.addEventListener("pointerleave", hideTip);
      cell.addEventListener("focus", () => tipForElement(cell, html));
      cell.addEventListener("blur", hideTip);
    });
  }

  function renderSubtopics(v) {
    const groups = {};
    v.practiceResponses.forEach((r) => {
      const key = `${r.domain}||${r.subtopic}`;
      const g = (groups[key] = groups[key] || { domain: r.domain, subtopic: r.subtopic, total: 0, missed: 0 });
      g.total += 1;
      if (!r.isCorrect) g.missed += 1;
    });
    const list = Object.values(groups)
      .filter((g) => g.missed > 0)
      .sort((a, b) => b.missed - a.missed || a.total - a.missed - (b.total - b.missed) || b.total - a.total)
      .slice(0, 6);
    if (!list.length) {
      els.subtopics.innerHTML = `<p class="c-empty">${
        v.practiceResponses.length ? "No misses yet in practice exams." : "Appears after his first practice exam."
      }</p>`;
      return;
    }
    els.subtopics.innerHTML = `<ul class="c-list">${list
      .map((g) => {
        const acc = pct(g.total - g.missed, g.total);
        return `
          <li>
            <div class="c-li-top">
              <span class="c-li-title">${esc(g.subtopic || "General")}</span>
              <span class="c-li-meta">missed ${g.missed} of ${g.total}</span>
            </div>
            <p class="c-li-meta">${esc(shortDomain(g.domain))} · ${acc}% correct</p>
            <div class="c-mini-track" aria-hidden="true"><div class="c-mini-fill" style="width:${acc}%"></div></div>
          </li>`;
      })
      .join("")}</ul>`;
  }

  function renderReview(v) {
    const b = bank();
    const ids = v.reviewIds.slice().sort((a, c) => (v.items[a].lastAttempt || 0) - (v.items[c].lastAttempt || 0));
    if (!ids.length) {
      els.review.innerHTML = `<p class="c-empty">All clear. Every question he missed or flagged has since been answered correctly.</p>`;
      return;
    }
    const shown = ids.slice(0, 12);
    els.review.innerHTML = `<ul class="c-list">${shown
      .map((id) => {
        const q = b[id];
        const e = v.items[id];
        const why = e.lastFlagged
          ? e.lastCorrect
            ? "🚩 Guessed right last time"
            : "🚩 Flagged and missed"
          : "Missed last time";
        const stem = q ? q.stem : "(No longer in the question bank)";
        return `
          <li>
            <div class="c-li-top">
              <span class="c-li-title">${esc(q ? `${shortDomain(q.domain)} · ${q.subtopic}` : id)}</span>
              <span class="c-li-meta">${esc(why)}</span>
            </div>
            <p class="c-li-stem">${esc(stem.length > 160 ? stem.slice(0, 157) + "…" : stem)}</p>
            <p class="c-li-meta">Seen ${plural(e.seenCount || 0, "time")} · ${e.correctCount || 0} correct</p>
          </li>`;
      })
      .join("")}</ul>${
      ids.length > shown.length ? `<p class="c-li-meta" style="margin-top:8px">+ ${ids.length - shown.length} more</p>` : ""
    }`;
  }

  function renderHistory(v) {
    const list = v.attempts.slice().reverse();
    if (!list.length) {
      els.history.innerHTML = `<p class="c-empty">No finished exams yet.</p>`;
      return;
    }
    const head = `
      <div class="c-hist-head" aria-hidden="true">
        <span>Date</span><span>Type</span><span>Score</span><span>Correct</span><span>Result</span><span>Time</span><span></span>
      </div>`;
    els.history.innerHTML =
      head +
      list
        .map((a, i) => {
          const asked = a.totalAsked || 0;
          const correctText =
            a.completedAll === false
              ? `${a.totalCorrect || 0}/${asked} <span class="c-col-muted">of ${a.totalQuestions || "?"}</span>`
              : `${a.totalCorrect || 0}/${asked} <span class="c-col-muted">(${pct(a.totalCorrect || 0, asked)}%)</span>`;
          return `
            <details class="c-exam" data-i="${i}">
              <summary>
                <span class="h-date">${esc(formatWhen(attemptTime(a)))}</span>
                <span class="h-type c-col-muted">${esc(modeLabel(a.mode))}</span>
                <span class="h-score">${a.mode === "review" ? "—" : esc(a.scaledScore)}</span>
                <span class="h-correct">${correctText}</span>
                <span class="h-result">${resultPill(a)}</span>
                <span class="h-time c-col-muted">${esc(formatDuration(a.elapsedSeconds))}</span>
              </summary>
              <div class="c-exam-body"></div>
            </details>`;
        })
        .join("");

    els.history.querySelectorAll(".c-exam").forEach((det) => {
      det.addEventListener("toggle", () => {
        const body = det.querySelector(".c-exam-body");
        if (det.open && !body.dataset.ready) {
          body.innerHTML = examDetail(list[Number(det.dataset.i)]);
          body.dataset.ready = "1";
        }
      });
    });
  }

  function examDetail(a) {
    const rs = Array.isArray(a.responses) ? a.responses : [];
    const asked = a.totalAsked || rs.length;
    const flagged = rs.filter((r) => r.flagged).length;
    const avg = asked ? Math.round((a.elapsedSeconds || 0) / asked) : 0;
    const stats = [
      `Answered ${asked} of ${a.totalQuestions || asked}`,
      `${a.totalCorrect || 0} correct`,
      `${formatDuration(a.elapsedSeconds)} total, about ${avg} s per question`,
      a.newQuestionsSeenCount ? `${plural(a.newQuestionsSeenCount, "new question")}` : "",
      flagged ? `${flagged} flagged` : ""
    ].filter(Boolean);
    const shown = rs.filter((r) => !r.isCorrect || r.flagged);
    const b = bank();
    const items = shown
      .map((r) => {
        const q = b[r.questionId];
        const stem = r.stem || (q && q.stem) || "(No longer in the question bank)";
        const tip = (q && q.studyTip) || r.studyTip || "";
        return `
          <div class="c-q">
            <div class="c-q-top">
              ${r.isCorrect ? `<span class="c-pill is-good">Correct</span>` : `<span class="c-pill is-bad">Missed</span>`}
              ${r.flagged ? `<span class="c-pill is-warn">🚩 Flagged as a guess</span>` : ""}
              <span class="c-li-meta">Q${esc(r.questionNumber)} · ${esc(shortDomain(r.domain))} · ${esc(r.subtopic)} · ${esc(
          r.difficultyLabel || ""
        )}</span>
            </div>
            <p class="c-q-stem">${esc(stem)}</p>
            <p class="c-q-ans">${
              r.isCorrect
                ? `He answered: <strong>${esc(optionText(r, r.correctIndex))}</strong>`
                : `He chose: <strong>${esc(optionText(r, r.selectedIndex))}</strong><br>Correct: <strong>${esc(
                    optionText(r, r.correctIndex)
                  )}</strong>`
            }</p>
            ${tip ? `<p class="c-q-tip">💡 ${esc(tip)}</p>` : ""}
          </div>`;
      })
      .join("");
    return `
      <p class="c-exam-stats">${stats.map(esc).join(" · ")}</p>
      ${items || `<p class="c-empty">Every question correct, none flagged.</p>`}`;
  }

  // --------------------------------------------------------------------------
  // Startup
  // --------------------------------------------------------------------------
  function codeFromHash() {
    const m = /[#&](?:code|sync)=([A-Za-z0-9-]+)/.exec(location.hash || "");
    if (!m) return null;
    try {
      history.replaceState(null, "", location.pathname + location.search);
    } catch (e) {
      /* ignore */
    }
    return normalizeCode(m[1]);
  }

  function init() {
    if (!baseUrl || !cfg.supabaseAnonKey) {
      showSetup("Sync isn't set up for this site, so there's no progress to show.");
      els.form.hidden = true;
      return;
    }

    els.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const code = normalizeCode(els.input.value);
      if (!code) {
        els.codeError.hidden = false;
        els.codeError.textContent = "A sync code is 16 letters and numbers, like ABCD-EFGH-JKMN-PQRS.";
        return;
      }
      els.codeError.hidden = true;
      load(code);
    });

    els.changeCode.addEventListener("click", () => {
      storeCode(null);
      state.code = null;
      state.data = null;
      state.version = 0;
      els.input.value = "";
      showSetup("");
    });

    let resizeTimer = null;
    let lastWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (state.data) renderScoreChart(derive());
      }, 150);
    });
    window.addEventListener("scroll", hideTip, { passive: true });

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible" && state.code && Date.now() - state.checkedAt > 30 * 1000) {
        load(state.code, { quiet: true });
      }
    });
    setInterval(() => {
      if (document.visibilityState === "visible" && state.code) load(state.code, { quiet: true });
    }, REFRESH_MS);
    // Keep the "synced X min ago" text fresh between checks.
    setInterval(() => {
      if (state.data && !state.loading) renderStatus();
    }, 30 * 1000);

    const code = codeFromHash() || storedCode();
    if (code) load(code);
    else showSetup("");
  }

  init();
})();
