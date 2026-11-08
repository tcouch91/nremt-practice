// Simulates two devices syncing through a fake Supabase server and checks the merge rules.
// Run: node scripts/test-sync.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");
const { webcrypto } = require("crypto");

const rootDir = path.join(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(rootDir, "index.html"), "utf8");
const dataFiles = [...indexHtml.matchAll(/<script src="(data\/[^"]+\.js)"/g)].map((m) => m[1]);

// ---- Fake Supabase: same semantics as supabase/schema.sql ----
const server = { rows: new Map(), puts: 0, downloads: 0, bytes: 0, online: true };
async function fakeFetch(url, opts) {
  if (!server.online) throw new TypeError("Failed to fetch");
  const body = JSON.parse(opts.body);
  const fn = url.split("/rpc/")[1];
  const respond = (value) => ({ ok: true, status: 200, text: async () => JSON.stringify(value) });
  if (fn === "get_progress") {
    const row = server.rows.get(body.p_code);
    if (row && row.version === body.p_known_version) return respond({ version: row.version, unchanged: true });
    server.downloads++;
    return respond(row ? { data: JSON.parse(row.data), version: row.version } : null);
  }
  if (fn === "put_progress") {
    server.puts++;
    server.bytes = opts.body.length;
    const row = server.rows.get(body.p_code);
    if (body.p_base_version === 0) {
      if (row) return respond(-1);
      server.rows.set(body.p_code, { data: JSON.stringify(body.p_data), version: 1 });
      return respond(1);
    }
    if (!row || row.version !== body.p_base_version) return respond(-1);
    row.data = JSON.stringify(body.p_data);
    row.version++;
    return respond(row.version);
  }
  return { ok: false, status: 404, json: async () => ({ message: "no such function" }), text: async () => "" };
}

function makeDevice(name, hash = "") {
  const store = new Map();
  const listeners = {};
  const docListeners = {};
  const body = { attrs: { "data-view": "lobby" }, getAttribute(k) { return this.attrs[k]; }, setAttribute(k, v) { this.attrs[k] = v; } };
  const window = {
    NREMT_SYNC_CONFIG: { supabaseUrl: "https://fake.supabase.co", supabaseAnonKey: "sb_publishable_test" },
    addEventListener: (t, cb) => (listeners[t] = listeners[t] || []).push(cb),
    dispatchEvent: (e) => (listeners[e.type] || []).forEach((cb) => cb(e))
  };
  const context = {
    window,
    console,
    crypto: webcrypto,
    fetch: fakeFetch,
    navigator: { onLine: true },
    location: { hash, origin: "https://youbetterpassnate.org", pathname: "/", search: "" },
    history: { replaceState: () => { context.location.hash = ""; } },
    document: { body, addEventListener: (t, cb) => (docListeners[t] = docListeners[t] || []).push(cb) },
    CustomEvent: class { constructor(type, init) { this.type = type; this.detail = init && init.detail; } },
    localStorage: {
      getItem: (k) => (store.has(k) ? store.get(k) : null),
      setItem: (k, v) => store.set(k, String(v)),
      removeItem: (k) => store.delete(k)
    },
    setTimeout: () => 0, // debounced auto-syncs are driven manually below
    clearTimeout: () => {},
    Blob, Response, CompressionStream, DecompressionStream, TextEncoder, btoa, atob
  };
  context.window.localStorage = context.localStorage;
  vm.createContext(context);
  for (const f of [...dataFiles, "js/cat-engine.js", "js/sync.js"]) {
    vm.runInContext(fs.readFileSync(path.join(rootDir, f), "utf8"), context, { filename: f });
  }
  return { name, engine: window.NREMTCatEngine, sync: window.NREMTSync, store, body, window, context };
}

function answer(device, session, correct) {
  const q = session.currentQuestion;
  const idx = correct ? q.correctIndex : (q.correctIndex + 1) % 4;
  device.engine.submitAnswer(session, idx, 30);
  device.engine.saveActiveSession(session);
}

function runExam(device, mode, answers) {
  const total = mode === "sprint" ? 10 : 35;
  const session = device.engine.createExamSession({ mode, totalQuestions: total, timeLimitSeconds: total * 72 });
  answers.forEach((c) => answer(device, session, c));
  return session;
}

(async () => {
  // 1. Phone turns on sync and finishes a sprint.
  const phone = makeDevice("phone");
  phone.sync.enable();
  await phone.sync.syncNow();
  const code = phone.sync.getCode();
  assert.match(code, /^[2-9A-HJKMNP-Z]{4}(-[2-9A-HJKMNP-Z]{4}){3}$/, "code format");
  const sprint = runExam(phone, "sprint", [true, true, false, true, true, true, false, true, true, true]);
  phone.engine.finalizeSession(sprint);
  await phone.sync.syncNow();
  assert.strictEqual(phone.engine.getPastAttempts().length, 1);

  // 2. Laptop already has its own history, then joins via share link: both histories are kept.
  const laptop = makeDevice("laptop");
  const lapExam = runExam(laptop, "sprint", [false, false, true, true, false, true, true, true, false, true]);
  laptop.engine.finalizeSession(lapExam);
  const laptopJoined = makeDevice("laptop2", "#sync=" + code.toLowerCase().replace(/-/g, ""));
  // carry laptop's storage into the share-link device
  for (const [k, v] of laptop.store) laptopJoined.store.set(k, v);
  await laptopJoined.sync.syncNow();
  assert.strictEqual(laptopJoined.sync.getCode(), code, "share link sets code");
  assert.strictEqual(laptopJoined.context.location.hash, "", "share link removed from URL");
  assert.strictEqual(laptopJoined.engine.getPastAttempts().length, 2, "laptop has both attempts");
  await phone.sync.syncNow();
  assert.strictEqual(phone.engine.getPastAttempts().length, 2, "phone got laptop attempt");

  // Hydrated reports keep full question text and correct shuffled options.
  const phoneCopy = phone.engine.getPastAttempts().find((a) => a.sessionId === lapExam.sessionId);
  const original = lapExam.responses[0];
  const synced = phoneCopy.responses[0];
  assert.strictEqual(synced.stem, original.stem);
  assert.strictEqual(JSON.stringify(synced.options), JSON.stringify(original.options));
  assert.strictEqual(synced.options[synced.correctIndex], original.options[original.correctIndex]);
  assert.strictEqual(synced.explanation, original.explanation);

  // Exposure counts merged (questions from both exams are "seen" on both).
  const seenPhone = Object.keys(phone.engine.getExposureHistory().items).length;
  const seenLaptop = Object.keys(laptopJoined.engine.getExposureHistory().items).length;
  assert.strictEqual(seenPhone, seenLaptop);
  assert.ok(seenPhone >= 10);

  // 3. Paused exam on the phone shows up on the laptop and can be continued there.
  const paused = runExam(phone, "full", [true, true, true, false, true]);
  await phone.sync.syncNow();
  await laptopJoined.sync.syncNow();
  const resumed = laptopJoined.engine.getActiveSession();
  assert.ok(resumed, "laptop sees paused exam");
  assert.strictEqual(resumed.sessionId, paused.sessionId);
  assert.strictEqual(resumed.responses.length, 5);
  answer(laptopJoined, resumed, true);
  answer(laptopJoined, resumed, true);
  await laptopJoined.sync.syncNow();
  await phone.sync.syncNow();
  assert.strictEqual(phone.engine.getActiveSession().responses.length, 7, "phone gets the further-along copy");

  // 4. Finishing it on the laptop removes the paused exam from the phone (no resurrection).
  const lapSession = laptopJoined.engine.getActiveSession();
  const report = laptopJoined.engine.finalizeSession(lapSession);
  laptopJoined.engine.saveActiveSession(lapSession); // app clears it after finishing
  await laptopJoined.sync.syncNow();
  await phone.sync.syncNow();
  assert.strictEqual(phone.engine.getActiveSession(), null, "finished exam not resurrected");
  assert.ok(phone.engine.getPastAttempts().some((a) => a.sessionId === report.sessionId));

  // 5. Discarding a paused exam on one device discards it on the other.
  runExam(phone, "sprint", [true]);
  await phone.sync.syncNow();
  await laptopJoined.sync.syncNow();
  assert.ok(laptopJoined.engine.getActiveSession());
  laptopJoined.engine.clearActiveSession();
  await laptopJoined.sync.syncNow();
  await phone.sync.syncNow();
  assert.strictEqual(phone.engine.getActiveSession(), null, "discard propagates");

  // 6. Mid-exam on the laptop, a sync must not replace the on-screen exam.
  laptopJoined.body.setAttribute("data-view", "exam");
  const onScreen = runExam(laptopJoined, "sprint", [true, false]);
  runExam(phone, "full", [true, true, true]); // different exam paused on phone, started later
  await phone.sync.syncNow();
  await laptopJoined.sync.syncNow();
  assert.strictEqual(
    JSON.parse(laptopJoined.store.get("nremt_active_session_v1")).sessionId,
    onScreen.sessionId,
    "on-screen exam kept"
  );
  laptopJoined.body.setAttribute("data-view", "lobby");

  // 7. Reset rotation on one device wins over older exposure history elsewhere.
  phone.engine.resetExposureHistory();
  await phone.sync.syncNow();
  await laptopJoined.sync.syncNow();
  assert.strictEqual(Object.keys(laptopJoined.engine.getExposureHistory().items).length, 0, "reset propagates");
  assert.ok(laptopJoined.engine.getPastAttempts().length >= 3, "reset rotation keeps reports");

  // 8. Concurrent saves: stale version is rejected and re-merged, nothing lost.
  const a = runExam(phone, "sprint", Array(10).fill(true));
  phone.engine.finalizeSession(a);
  const b = runExam(laptopJoined, "sprint", Array(10).fill(false));
  laptopJoined.engine.finalizeSession(b);
  await phone.sync.syncNow(); // bumps server version; laptop's next put must retry
  await laptopJoined.sync.syncNow();
  await phone.sync.syncNow();
  const ids = (d) => d.engine.getPastAttempts().map((x) => x.sessionId).sort().join();
  assert.strictEqual(ids(phone), ids(laptopJoined), "both devices have the same attempts");
  assert.ok(ids(phone).includes(a.sessionId) && ids(phone).includes(b.sessionId));

  // 9. A no-op sync neither downloads nor uploads again.
  const putsBefore = server.puts;
  const downloadsBefore = server.downloads;
  await phone.sync.syncNow();
  assert.strictEqual(server.puts, putsBefore, "no redundant upload");
  assert.strictEqual(server.downloads, downloadsBefore, "no redundant download");

  // Stored data is compressed and round-trips.
  const stored = JSON.parse(server.rows.get(code).data);
  assert.strictEqual(typeof stored.gz, "string");
  const decoded = await phone.sync._internals.decodeData(stored);
  assert.ok(Array.isArray(decoded.attempts) && decoded.attempts.length >= 5);
  // Older/uncompressed rows still read fine.
  assert.deepStrictEqual(await phone.sync._internals.decodeData({ attempts: [] }), { attempts: [] });

  // 10. Offline: status reports it and local data is untouched.
  server.online = false;
  phone.context.navigator.onLine = false;
  await phone.sync.syncNow();
  assert.strictEqual(phone.sync.getStatus().state, "offline");
  server.online = true;
  phone.context.navigator.onLine = true;

  // 10b. Flagged guesses: on the review list even when right, and the newest answer wins across devices.
  const flagSession = phone.engine.createExamSession({ mode: "sprint", totalQuestions: 10, timeLimitSeconds: 720 });
  const flaggedId = flagSession.currentQuestion.id;
  phone.engine.submitAnswer(flagSession, flagSession.currentQuestion.correctIndex, 10, { flagged: true });
  assert.ok(phone.engine.getReviewQueue().some((q) => q.id === flaggedId), "flagged correct answer needs review");
  await phone.sync.syncNow();
  await laptopJoined.sync.syncNow();
  assert.ok(laptopJoined.engine.getReviewQueue().some((q) => q.id === flaggedId), "flag synced");
  const review = laptopJoined.engine.createExamSession({ mode: "review" });
  assert.strictEqual(review.mode, "review");
  assert.ok(review.reviewPoolIds.includes(flaggedId) && review.reviewPoolIds.includes(review.currentQuestion.id));
  // Answer every review question correctly without flagging: the list empties on both devices.
  while (!review.isCompleted && review.currentQuestion) {
    laptopJoined.engine.submitAnswer(review, review.currentQuestion.correctIndex, 10);
  }
  const reviewReport = laptopJoined.engine.finalizeSession(review);
  assert.strictEqual(reviewReport.passed, false, "review rounds never count as a pass");
  assert.strictEqual(reviewReport.clearedFromReviewCount, review.responses.length);
  await laptopJoined.sync.syncNow();
  await phone.sync.syncNow();
  assert.ok(!phone.engine.getReviewQueue().some((q) => q.id === flaggedId), "cleared on the other device");

  // 11. Bad codes are rejected; the upload is small enough.
  assert.strictEqual(phone.sync.enable("ABC").ok, false);
  assert.strictEqual(phone.sync.getCode(), code);

  // Payload size with a full 50-exam history.
  const heavy = makeDevice("heavy");
  heavy.sync.enable();
  for (let i = 0; i < 50; i++) {
    const s = runExam(heavy, "full", Array.from({ length: 35 }, (_, j) => (i + j) % 3 !== 0));
    heavy.engine.finalizeSession(s);
  }
  await heavy.sync.syncNow();
  const localBytes = heavy.store.get("nremt_exam_attempts_v1").length;
  console.log(`50 full exams: ${(localBytes / 1024).toFixed(0)} KB on device, ${(server.bytes / 1024).toFixed(0)} KB uploaded`);
  assert.ok(server.bytes < 2000000, "fits the server's 2 MB limit");

  console.log("All sync checks passed.");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
