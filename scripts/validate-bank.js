// Validation & Test Suite for NREMT Practice Exam Question Bank & CAT Engine
// Run with: node scripts/validate-bank.js

const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");

// 1. Load all question files
global.window = {};
const store = {};
global.localStorage = {
  getItem: (k) => store[k] || null,
  setItem: (k, v) => {
    store[k] = v;
  },
  removeItem: (k) => {
    delete store[k];
  }
};

// Load exactly the question files index.html loads, so the two can never drift apart.
const indexHtml = fs.readFileSync(path.join(rootDir, "index.html"), "utf8");
const dataFiles = [...indexHtml.matchAll(/<script src="(data\/[^"]+\.js)"/g)].map((m) => m[1]);
const unloaded = fs
  .readdirSync(path.join(rootDir, "data"))
  .filter((f) => f.endsWith(".js") && !dataFiles.includes(`data/${f}`));
if (unloaded.length > 0) {
  throw new Error(`Question files not loaded by index.html: ${unloaded.join(", ")}`);
}
dataFiles.forEach((f) => require(path.join(rootDir, f)));
require(path.join(rootDir, "js/cat-engine.js"));

const questions = window.NREMT_QUESTIONS;
const engine = window.NREMTCatEngine;

const validDomains = new Set(engine.DOMAIN_BLUEPRINT.map((d) => d.name));
const seenIds = new Set();
const seenStems = new Set();

console.log("=== 1. Question Bank Schema & Clinical Integrity Check ===");
if (questions.length < 100) {
  throw new Error(`Expected at least 100 questions, found ${questions.length}`);
}

const domainCounts = {};
const diffCounts = { 1: 0, 2: 0, 3: 0 };

questions.forEach((q, idx) => {
  if (!q.id || seenIds.has(q.id)) {
    throw new Error(`Duplicate or missing ID at index ${idx}: ${q.id}`);
  }
  seenIds.add(q.id);

  if (!q.stem || seenStems.has(q.stem)) {
    throw new Error(`Duplicate or missing stem on question ${q.id}`);
  }
  seenStems.add(q.stem);

  if (!validDomains.has(q.domain)) {
    throw new Error(`Invalid domain "${q.domain}" on question ${q.id}`);
  }

  if (![1, 2, 3].includes(q.difficulty)) {
    throw new Error(`Invalid difficulty ${q.difficulty} on question ${q.id}`);
  }

  if (!Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(`Question ${q.id} must have exactly 4 options`);
  }

  if (![0, 1, 2, 3].includes(q.correctIndex)) {
    throw new Error(`Invalid correctIndex ${q.correctIndex} on question ${q.id}`);
  }

  if (!q.explanation || !q.studyTip || !q.subtopic) {
    throw new Error(`Missing explanation, studyTip, or subtopic on question ${q.id}`);
  }

  domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
  diffCounts[q.difficulty] += 1;
});

console.log(`✓ Validated ${questions.length} unique questions with 0 duplicates.`);
console.log("  Domain Distribution:", domainCounts);
console.log("  Difficulty Distribution (1=Easy, 2=Medium, 3=Hard):", diffCounts);

console.log("\n=== 2. DOM Element ID Binding Check ===");
const html = fs.readFileSync(path.join(rootDir, "index.html"), "utf8");
const appJs = fs.readFileSync(path.join(rootDir, "js/app.js"), "utf8");
const idRegex = /getElementById\(["']([^"']+)["']\)/g;
let match;
const missingIds = [];
while ((match = idRegex.exec(appJs)) !== null) {
  const id = match[1];
  if (
    id.startsWith("cust-") ||
    id.startsWith("option-card-") ||
    id.startsWith("btn-strike-") ||
    id.startsWith("review-q-")
  ) {
    continue;
  }
  if (!html.includes(`id="${id}"`)) {
    missingIds.push(id);
  }
}
if (missingIds.length > 0) {
  throw new Error(`Missing DOM IDs in index.html: ${missingIds.join(", ")}`);
}
console.log("✓ All static DOM IDs in js/app.js match index.html.");

console.log("\n=== 3. CAT Adaptive Algorithm & Question Rotation Check ===");
const s1 = engine.createExamSession();
while (!s1.isCompleted) {
  const isRight = Math.random() < 0.7;
  const choice = isRight
    ? s1.currentQuestion.correctIndex
    : (s1.currentQuestion.correctIndex + 1) % 4;
  engine.submitAnswer(s1, choice, 18);
}

const s2 = engine.createExamSession();
while (!s2.isCompleted) {
  const isRight = Math.random() < 0.5;
  const choice = isRight
    ? s2.currentQuestion.correctIndex
    : (s2.currentQuestion.correctIndex + 1) % 4;
  engine.submitAnswer(s2, choice, 22);
}

const overlap = s2.askedQuestionIds.filter((id) => s1.askedQuestionIds.includes(id));
if (overlap.length !== 0) {
  throw new Error(`Expected 0 overlap between Attempt 1 and Attempt 2, got ${overlap.length}`);
}
console.log(
  `✓ Attempt 1 (35 Qs, Score: ${s1.report.scaledScore}) & Attempt 2 (35 Qs, Score: ${s2.report.scaledScore}) completed with 0 overlapping questions.`
);
console.log("✓ All validation checks passed!");
