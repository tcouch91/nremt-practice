// NREMT Computer Adaptive Testing (CAT) Engine, Question Rotation Manager & Diagnostic Analyzer

(function () {
  const STORAGE_KEYS = {
    EXPOSURE: "nremt_question_exposure_v1",
    ATTEMPTS: "nremt_exam_attempts_v1",
    CUSTOM_QUESTIONS: "nremt_user_custom_questions_v1",
    ACTIVE_SESSION: "nremt_active_session_v1",
    SYNC_META: "nremt_sync_meta_v1"
  };

  // Bookkeeping that lets js/sync.js merge two devices without resurrecting data that one of them
  // deliberately reset, cleared, or discarded.
  function getSyncMeta() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SYNC_META);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          exposureResetAt: parsed.exposureResetAt || 0,
          attemptsClearedAt: parsed.attemptsClearedAt || 0,
          closedSessionIds: Array.isArray(parsed.closedSessionIds) ? parsed.closedSessionIds : []
        };
      }
    } catch (e) {
      console.warn("Error reading sync metadata:", e);
    }
    return { exposureResetAt: 0, attemptsClearedAt: 0, closedSessionIds: [] };
  }

  function saveSyncMeta(meta) {
    try {
      localStorage.setItem(STORAGE_KEYS.SYNC_META, JSON.stringify(meta));
    } catch (e) {
      console.warn("Error saving sync metadata:", e);
    }
  }

  // Tells js/sync.js that saved progress changed so it can upload it.
  function notifyProgressChanged(kind) {
    try {
      window.dispatchEvent(new CustomEvent("nremt:progress-changed", { detail: { kind } }));
    } catch (e) {
      /* no listener support; sync simply won't auto-upload */
    }
  }

  // Official NREMT EMT Cognitive Exam Blueprint (proportions for a 35-question half-length exam)
  const DOMAIN_BLUEPRINT = [
    {
      name: "Airway, Respiration & Ventilation",
      shortName: "Airway & Breathing",
      examWeight: "18%–22%",
      targetCount35: 7,
      color: "#0284c7"
    },
    {
      name: "Cardiology & Resuscitation",
      shortName: "Cardiology & CPR",
      examWeight: "20%–24%",
      targetCount35: 8,
      color: "#dc2626"
    },
    {
      name: "Trauma",
      shortName: "Trauma",
      examWeight: "14%–18%",
      targetCount35: 6,
      color: "#d97706"
    },
    {
      name: "Medical; Obstetrics & Gynecology",
      shortName: "Medical & OB/GYN",
      examWeight: "27%–31%",
      targetCount35: 10,
      color: "#7c3aed"
    },
    {
      name: "EMS Operations",
      shortName: "EMS Operations",
      examWeight: "10%–14%",
      targetCount35: 4,
      color: "#059669"
    }
  ];

  const DIFFICULTY_LABELS = {
    1: "Easy",
    2: "Medium",
    3: "Hard"
  };

  // Milestone rank ladder for Nate's cumulative mastery progression
  const NATE_RANK_LADDER = [
    { minMastered: 0, title: "EMT Candidate", badge: "🩺 EMT Candidate", subtitle: "Every scenario you read builds pattern recognition." },
    { minMastered: 15, title: "First Responder", badge: "🚑 First Responder", subtitle: "You broke the inertia and started banking real clinical reps!" },
    { minMastered: 50, title: "BLS Crew Member", badge: "⚡ BLS Crew Member", subtitle: "50+ scenarios mastered — your XABC instincts are locking in." },
    { minMastered: 120, title: "Lead EMT Tech", badge: "🛡️ Lead EMT Tech", subtitle: "Over a quarter of the entire 400-question bank conquered!" },
    { minMastered: 220, title: "Field Preceptor", badge: "🌟 Field Preceptor", subtitle: "More than half the bank mastered — you can spot the NREMT traps." },
    { minMastered: 320, title: "NREMT Registry Ready", badge: "🏆 NREMT Registry Ready", subtitle: "Elite command of the EMT blueprint. Go crush that exam, Nate!" }
  ];

  // Load all built-in + custom user questions
  function getAllQuestions() {
    const base = Array.isArray(window.NREMT_QUESTIONS) ? window.NREMT_QUESTIONS : [];
    let userCustom = [];
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
      if (raw) {
        userCustom = JSON.parse(raw);
      }
    } catch (e) {
      console.warn("Could not load custom questions from localStorage:", e);
    }
    return [...base, ...userCustom];
  }

  function saveUserCustomQuestion(questionObj) {
    let userCustom = [];
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
      if (raw) userCustom = JSON.parse(raw);
    } catch (e) {
      userCustom = [];
    }
    userCustom.push(questionObj);
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_QUESTIONS, JSON.stringify(userCustom));
      notifyProgressChanged("custom-question");
    } catch (e) {
      console.warn("Could not save custom question:", e);
    }
    return getAllQuestions();
  }

  // Question Rotation & Exposure History
  function getExposureHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.EXPOSURE);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("Error reading exposure history:", e);
    }
    return { totalAttempts: 0, items: {} };
  }

  function saveExposureHistory(history) {
    try {
      localStorage.setItem(STORAGE_KEYS.EXPOSURE, JSON.stringify(history));
      notifyProgressChanged("exposure");
    } catch (e) {
      console.warn("Error saving exposure history:", e);
    }
  }

  function resetExposureHistory() {
    const meta = getSyncMeta();
    meta.exposureResetAt = Date.now();
    saveSyncMeta(meta);
    const empty = { totalAttempts: 0, items: {} };
    saveExposureHistory(empty);
    return empty;
  }

  function getPastAttempts() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("Error reading past attempts:", e);
    }
    return [];
  }

  function saveAttemptReport(report) {
    const attempts = getPastAttempts();
    attempts.unshift(report); // newest first
    try {
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts.slice(0, 50)));
      notifyProgressChanged("attempt");
    } catch (e) {
      console.warn("Error saving attempt report:", e);
    }
  }

  function clearAllHistory() {
    try {
      const meta = getSyncMeta();
      meta.exposureResetAt = Date.now();
      meta.attemptsClearedAt = Date.now();
      saveSyncMeta(meta);
      localStorage.removeItem(STORAGE_KEYS.EXPOSURE);
      localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
      clearActiveSession();
      notifyProgressChanged("clear");
    } catch (e) {
      console.warn("Error clearing history:", e);
    }
  }

  // Active in-progress session persistence (for duty call extended pause / browser recovery)
  function saveActiveSession(session) {
    if (!session || session.isCompleted) {
      clearActiveSession();
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(session));
      notifyProgressChanged("session");
    } catch (e) {
      console.warn("Error saving active session:", e);
    }
  }

  function getActiveSession() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.ACTIVE_SESSION);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && !parsed.isCompleted && parsed.currentQuestion) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Error loading active session:", e);
    }
    return null;
  }

  function clearActiveSession() {
    try {
      // Remember which exam was closed (finished or discarded) so another device's copy of it
      // doesn't come back as a "paused exam" after the next sync.
      const raw = localStorage.getItem(STORAGE_KEYS.ACTIVE_SESSION);
      const closedId = raw ? (JSON.parse(raw) || {}).sessionId : null;
      if (closedId) {
        const meta = getSyncMeta();
        if (!meta.closedSessionIds.includes(closedId)) {
          meta.closedSessionIds = [closedId, ...meta.closedSessionIds].slice(0, 30);
          saveSyncMeta(meta);
        }
      }
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
      if (closedId) notifyProgressChanged("session-closed");
    } catch (e) {
      console.warn("Error clearing active session:", e);
    }
  }

  // Shuffle options while preserving track of the correct answer
  function prepareQuestionInstance(question, shuffleChoices = true) {
    const indices = [0, 1, 2, 3];
    if (shuffleChoices) {
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = indices[i];
        indices[i] = indices[j];
        indices[j] = temp;
      }
    }
    const shuffledOptions = indices.map((origIdx) => question.options[origIdx]);
    const newCorrectIndex = indices.indexOf(question.correctIndex);

    return {
      ...question,
      options: shuffledOptions,
      correctIndex: newCorrectIndex,
      originalCorrectIndex: question.correctIndex,
      optionMapping: indices
    };
  }

  // 1PL IRT Rasch probability function
  function irtProbability(theta, b) {
    const D = 1.7;
    const exponent = -D * (theta - b);
    return 1 / (1 + Math.exp(exponent));
  }

  // Create a new CAT Exam Session (supports both 35-question full practice and 10-question focus sprint)
  function createExamSession(options = {}) {
    const mode = options.mode || ((options.totalQuestions || 35) <= 12 ? "sprint" : "full");
    // Review mode draws only from questions Nate missed or flagged last time he saw them.
    const reviewPoolIds = mode === "review" ? getReviewQueue().map((q) => q.id) : null;
    if (reviewPoolIds && reviewPoolIds.length === 0) return null;
    const totalQuestions = reviewPoolIds
      ? Math.min(reviewPoolIds.length, options.totalQuestions || 20)
      : options.totalQuestions || 35;
    const timeLimitSeconds = reviewPoolIds
      ? totalQuestions * 90 // relaxed pace for review rounds
      : options.timeLimitSeconds || Math.round((totalQuestions / 35) * 42 * 60);
    const exposure = getExposureHistory();
    const attemptNumber = exposure.totalAttempts + 1;

    const domainCounts = {};
    DOMAIN_BLUEPRINT.forEach((d) => {
      domainCounts[d.name] = 0;
    });

    const session = {
      sessionId: "EXAM-" + Date.now(),
      attemptNumber,
      mode,
      startedAt: new Date().toISOString(),
      totalQuestions,
      timeLimitSeconds,
      elapsedSeconds: 0,
      currentQuestionIndex: 0, // 0-based
      currentDifficultyTier: 2, // Start at Medium (Tier 2), just like standard CAT
      theta: 0.0, // Initial IRT ability estimate
      domainCounts,
      lastDomain: null,
      askedQuestionIds: [],
      responses: [], // Array of answered question records
      reviewPoolIds,
      currentQuestion: null,
      isCompleted: false,
      isDutyPaused: false,
      dutyPauseAt: null
    };

    // Select the first question
    session.currentQuestion = selectNextQuestion(session);
    saveActiveSession(session);
    return session;
  }

  // Core CAT Question Selection + Inter-Attempt Rotation Algorithm
  function selectNextQuestion(session) {
    const allQuestions = getAllQuestions();
    const exposure = getExposureHistory();
    const askedSet = new Set(session.askedQuestionIds);
    const targetTier = session.currentDifficultyTier;
    const targetTheta = session.theta;

    // Filter out questions already asked in THIS exam session
    const reviewSet = session.reviewPoolIds ? new Set(session.reviewPoolIds) : null;
    const available = allQuestions.filter((q) => !askedSet.has(q.id) && (!reviewSet || reviewSet.has(q.id)));
    if (available.length === 0) {
      return null;
    }

    // Calculate how much each domain still needs to fulfill its 35-question blueprint
    const domainDeficits = {};
    DOMAIN_BLUEPRINT.forEach((d) => {
      const askedInDomain = session.domainCounts[d.name] || 0;
      const scaledTarget = Math.max(1, Math.round((d.targetCount35 / 35) * session.totalQuestions));
      domainDeficits[d.name] = scaledTarget - askedInDomain;
    });

    // Helper to score a candidate question for selection
    // Priority order:
    // 1. Exact difficulty tier match (or closest tier if exact tier is completely exhausted in this session)
    // 2. Lowest exposure count across attempts (unseen questions ALWAYS prioritized first!)
    // 3. Oldest attempt seen (if seen before)
    // 4. Domain blueprint need + avoiding immediate same-domain repetition
    // 5. Closeness of item IRT parameter (irtB) to current candidate ability (theta)
    function scoreCandidate(q) {
      const exp = exposure.items[q.id] || { seenCount: 0, lastAttempt: 0 };
      const tierDiff = Math.abs(q.difficulty - targetTier);

      // Rotation penalty: strictly prefer unseen questions (seenCount === 0) across attempts,
      // and among seen questions, prefer those seen fewest times and in the oldest attempt.
      // In review mode every question has been seen, so only "longest since last seen" matters.
      const seenPenalty = reviewSet ? exp.lastAttempt * 500 : exp.seenCount * 500000 + exp.lastAttempt * 500;

      // Adaptive difficulty penalty: within the unseen pool (or same exposure tier),
      // strictly match the target difficulty tier (1=Easy, 2=Medium, 3=Hard).
      const tierPenalty = tierDiff * 50000;

      // Domain balancing bonus
      const deficit = domainDeficits[q.domain] !== undefined ? domainDeficits[q.domain] : 0;
      let domainBonus = deficit > 0 ? deficit * 15 : deficit * 25;
      if (session.lastDomain && q.domain === session.lastDomain) {
        domainBonus -= 18; // discourage consecutive same-domain questions when other domains need items
      }

      // IRT match bonus (prefer item b parameter close to current theta within the tier)
      const irtDistance = Math.abs((q.irtB || 0) - targetTheta);

      // Small random tie-breaker so attempts have natural variety
      const jitter = Math.random() * 4;

      return (
        -seenPenalty -       // Priority 1: Rotate questions between attempts (unseen questions first)
        tierPenalty +        // Priority 2: Match the dynamic CAT target difficulty tier
        domainBonus -        // Priority 3: Maintain NREMT domain proportions
        irtDistance * 12 +   // Priority 4: Match fine-grained IRT b to theta
        jitter
      );
    }

    let bestQuestion = null;
    let bestScore = -Infinity;

    for (const q of available) {
      const score = scoreCandidate(q);
      if (score > bestScore) {
        bestScore = score;
        bestQuestion = q;
      }
    }

    return prepareQuestionInstance(bestQuestion, true);
  }

  // Submit an answer for the current question and advance the CAT state
  // options.flagged: Nate marked this question as a guess, so it goes on his review list even if
  // the guess turns out to be right.
  function submitAnswer(session, selectedIndex, timeSpentSeconds = 0, options = {}) {
    const flagged = Boolean(options.flagged);
    if (!session || session.isCompleted || !session.currentQuestion) {
      return session;
    }

    const q = session.currentQuestion;
    const isCorrect = selectedIndex === q.correctIndex;
    const prevTier = session.currentDifficultyTier;
    const prevTheta = session.theta;

    // 1. Update IRT Ability Estimate (theta)
    const p = irtProbability(prevTheta, q.irtB || 0);
    // Adaptive step size K tapers gently from 0.48 to 0.26 as more items are answered
    const progressRatio = session.responses.length / Math.max(1, session.totalQuestions - 1);
    const K = 0.48 - 0.22 * progressRatio;

    let newTheta = prevTheta + K * ((isCorrect ? 1 : 0) - p);
    newTheta = Math.max(-2.5, Math.min(2.5, newTheta));

    // 2. Dynamic Difficulty Step Rule (matching real exam CAT mechanics):
    // - Correct answer on Easy (1) -> Medium (2)
    // - Correct answer on Medium (2) -> Hard (3)
    // - Correct answer on Hard (3) -> Remains Hard (3) with higher target theta/irtB
    // - Incorrect answer on Hard (3) -> Medium (2)
    // - Incorrect answer on Medium (2) -> Easy (1)
    // - Incorrect answer on Easy (1) -> Remains Easy (1) with lower target theta/irtB
    let nextTier = q.difficulty;
    let adaptationReason = "";
    if (isCorrect) {
      if (q.difficulty < 3) {
        nextTier = q.difficulty + 1;
        adaptationReason = `Correct ${DIFFICULTY_LABELS[q.difficulty]} item → Stepping UP to ${DIFFICULTY_LABELS[nextTier]} difficulty`;
      } else {
        nextTier = 3;
        adaptationReason = `Correct Hard item → Maintaining Hard difficulty (higher IRT target)`;
      }
    } else {
      if (q.difficulty > 1) {
        nextTier = q.difficulty - 1;
        adaptationReason = `Incorrect ${DIFFICULTY_LABELS[q.difficulty]} item → Stepping DOWN to ${DIFFICULTY_LABELS[nextTier]} difficulty`;
      } else {
        nextTier = 1;
        adaptationReason = `Incorrect Easy item → Maintaining Easy difficulty (foundational target)`;
      }
    }

    // 3. Record response and update exposure history immediately
    const responseRecord = {
      questionNumber: session.responses.length + 1,
      questionId: q.id,
      domain: q.domain,
      subtopic: q.subtopic,
      source: q.source || "Custom",
      reviewNote: q.reviewNote || "",
      patientType: q.patientType || "Adult",
      difficulty: q.difficulty,
      difficultyLabel: DIFFICULTY_LABELS[q.difficulty],
      irtB: q.irtB || 0,
      stem: q.stem,
      options: q.options,
      selectedIndex,
      correctIndex: q.correctIndex,
      isCorrect,
      flagged,
      explanation: q.explanation,
      studyTip: q.studyTip,
      thetaBefore: Number(prevTheta.toFixed(3)),
      thetaAfter: Number(newTheta.toFixed(3)),
      nextTargetTier: nextTier,
      adaptationReason,
      timeSpentSeconds
    };

    session.responses.push(responseRecord);
    session.askedQuestionIds.push(q.id);
    session.domainCounts[q.domain] = (session.domainCounts[q.domain] || 0) + 1;
    session.lastDomain = q.domain;
    session.theta = newTheta;
    session.currentDifficultyTier = nextTier;

    // Update persistent exposure history so questions rotate across attempts
    const exposure = getExposureHistory();
    const existingExp = exposure.items[q.id] || {
      seenCount: 0,
      correctCount: 0,
      everMissed: false,
      lastAttempt: 0,
      lastCorrect: null
    };
    const wasSeenBefore = existingExp.seenCount > 0;
    const hadMissedBefore = Boolean(
      existingExp.everMissed || existingExp.seenCount > (existingExp.correctCount || 0)
    );
    const wasMasteredBefore = (existingExp.correctCount || 0) > 0;

    existingExp.seenCount += 1;
    if (isCorrect) {
      existingExp.correctCount = (existingExp.correctCount || 0) + 1;
    } else {
      existingExp.everMissed = true;
    }
    existingExp.lastAttempt = session.attemptNumber;
    existingExp.lastCorrect = isCorrect;
    existingExp.lastFlagged = flagged;
    // Stays on the review list until answered correctly without a flag.
    existingExp.needsReview = !isCorrect || flagged;
    exposure.items[q.id] = existingExp;

    responseRecord.wasFirstTimeSeen = !wasSeenBefore;
    responseRecord.wasNewlyMastered = isCorrect && !wasMasteredBefore;
    responseRecord.wasComebackWin = isCorrect && hadMissedBefore;

    // Count the attempt as soon as any question is answered, so an exam that is ended early,
    // times out, or is abandoned (tab closed) does not reuse the same attempt number next time.
    exposure.totalAttempts = Math.max(exposure.totalAttempts || 0, session.attemptNumber);
    saveExposureHistory(exposure);

    // Check if exam has reached target question count
    if (session.responses.length >= session.totalQuestions) {
      finalizeSession(session);
    } else {
      session.currentQuestionIndex = session.responses.length;
      session.currentQuestion = selectNextQuestion(session);
      // If the bank runs out of eligible questions, end the exam instead of leaving it stuck.
      if (!session.currentQuestion) {
        session.poolExhausted = true; // not the candidate's fault, so unanswered items aren't penalized
        finalizeSession(session);
      } else {
        saveActiveSession(session);
      }
    }

    return session;
  }

  // Mark a session complete, build its report, and save it to attempt history.
  // Used for normal completion, time expiry, and "end exam early", so every scored exam is saved.
  function finalizeSession(session) {
    if (!session) return null;
    clearActiveSession();
    if (session.report) return session.report;
    session.isCompleted = true;
    session.completedAt = session.completedAt || new Date().toISOString();
    session.currentQuestion = null;
    if (session.responses.length === 0) return null;
    const report = generateDiagnosticReport(session);
    session.report = report;
    saveAttemptReport(report);
    return report;
  }

  // Generate comprehensive score & study feedback report
  function generateDiagnosticReport(session) {
    const responses = session.responses;
    const totalAsked = responses.length;
    const totalCorrect = responses.filter((r) => r.isCorrect).length;
    const rawAccuracy = totalAsked > 0 ? (totalCorrect / totalAsked) * 100 : 0;

    const newQuestionsSeenCount = responses.filter((r) => r.wasFirstTimeSeen).length;
    const newlyMasteredCount = responses.filter((r) => r.wasNewlyMastered).length;
    const comebackWinsCount = responses.filter((r) => r.wasComebackWin).length;

    // Difficulty-weighted score & IRT Scaled Score (NREMT scale: 100 to 1500, passing = 950)
    // Weights: Easy = 1.0, Medium = 1.35, Hard = 1.75
    const diffWeights = { 1: 1.0, 2: 1.35, 3: 1.75 };
    let earnedWeighted = 0;
    let maxPossibleWeighted = 0;
    let totalDifficultySum = 0;

    const byDifficulty = {
      1: { label: "Easy", total: 0, correct: 0, accuracy: 0 },
      2: { label: "Medium", total: 0, correct: 0, accuracy: 0 },
      3: { label: "Hard", total: 0, correct: 0, accuracy: 0 }
    };

    const byPatientType = {};
    const bySubtopic = {};

    responses.forEach((r) => {
      const w = diffWeights[r.difficulty] || 1.0;
      maxPossibleWeighted += w;
      if (r.isCorrect) earnedWeighted += w;
      totalDifficultySum += r.difficulty;

      // Difficulty breakdown
      if (byDifficulty[r.difficulty]) {
        byDifficulty[r.difficulty].total += 1;
        if (r.isCorrect) byDifficulty[r.difficulty].correct += 1;
      }

      // Patient Type breakdown
      const pType = r.patientType || "Adult";
      if (!byPatientType[pType]) {
        byPatientType[pType] = { type: pType, total: 0, correct: 0, accuracy: 0 };
      }
      byPatientType[pType].total += 1;
      if (r.isCorrect) byPatientType[pType].correct += 1;

      // Subtopic breakdown
      if (!bySubtopic[r.subtopic]) {
        bySubtopic[r.subtopic] = {
          subtopic: r.subtopic,
          domain: r.domain,
          total: 0,
          correct: 0,
          missedQuestions: [],
          studyTips: []
        };
      }
      bySubtopic[r.subtopic].total += 1;
      if (r.isCorrect) {
        bySubtopic[r.subtopic].correct += 1;
      } else {
        bySubtopic[r.subtopic].missedQuestions.push(r.questionId);
        if (r.studyTip) bySubtopic[r.subtopic].studyTips.push(r.studyTip);
      }
    });

    Object.values(byDifficulty).forEach((d) => {
      d.accuracy = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
    });
    Object.values(byPatientType).forEach((p) => {
      p.accuracy = p.total > 0 ? Math.round((p.correct / p.total) * 100) : 0;
    });

    // Unanswered questions (timer ran out, or the exam was ended early) count as incorrect,
    // as on the real NREMT, where you cannot pass without answering the minimum number of items.
    // Without this, answering 3 of 35 correctly and letting the clock run out scored as a pass.
    const unansweredCount = session.poolExhausted
      ? 0
      : Math.max(0, (session.totalQuestions || totalAsked) - totalAsked);
    const completedAll = unansweredCount === 0;

    // Replay each unanswered item as a wrong answer through the same ability update the exam uses:
    // a miss at the current tier, then a step down a tier, as if the candidate had answered it wrong.
    const TIER_CENTER_B = { 1: -0.85, 2: 0.1, 3: 0.95 };
    let scoringTheta = session.theta;
    let scoringTier = session.currentDifficultyTier || 2;
    for (let i = 0; i < unansweredCount; i++) {
      const p = irtProbability(scoringTheta, TIER_CENTER_B[scoringTier]);
      const progressRatio = (totalAsked + i) / Math.max(1, session.totalQuestions - 1);
      const K = 0.48 - 0.22 * Math.min(1, progressRatio);
      scoringTheta = Math.max(-2.5, Math.min(2.5, scoringTheta - K * p));
      maxPossibleWeighted += diffWeights[scoringTier];
      scoringTier = Math.max(1, scoringTier - 1);
    }

    const weightedRatio = maxPossibleWeighted > 0 ? earnedWeighted / maxPossibleWeighted : 0;
    const avgDifficultyFaced = totalAsked > 0 ? totalDifficultySum / totalAsked : 2.0;

    // Compute NREMT Scaled Score (100 to 1500, Passing Standard = 950)
    // Combine final IRT theta and weighted accuracy so both difficulty level reached and accuracy matter
    const thetaNormalized = (scoringTheta + 2.5) / 5.0; // 0 to 1 (theta = 0.20 is ~0.54)
    const compositeAbility = thetaNormalized * 0.55 + weightedRatio * 0.45;
    // Map compositeAbility = 0.62 to 950 (Passing Standard)
    let scaledScore;
    if (compositeAbility >= 0.62) {
      scaledScore = Math.round(950 + ((compositeAbility - 0.62) / (1.0 - 0.62)) * 550);
    } else {
      scaledScore = Math.round(100 + (compositeAbility / 0.62) * 850);
    }
    scaledScore = Math.max(100, Math.min(1500, scaledScore));
    // An unfinished exam can never pass, however well the answered items went.
    const passed = scaledScore >= 950 && completedAll && session.mode !== "review";

    // Domain Breakdown (Official 5 NREMT Domains)
    const domainBreakdown = DOMAIN_BLUEPRINT.map((d) => {
      const domainItems = responses.filter((r) => r.domain === d.name);
      const total = domainItems.length;
      const correct = domainItems.filter((r) => r.isCorrect).length;
      const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

      let status = "Above Passing Standard";
      let statusClass = "status-above";
      if (accuracy < 60) {
        status = "Below Passing Standard";
        statusClass = "status-below";
      } else if (accuracy < 74) {
        status = "Near Passing Standard";
        statusClass = "status-near";
      }

      const missedSubtopics = [
        ...new Set(domainItems.filter((r) => !r.isCorrect).map((r) => r.subtopic))
      ];

      return {
        domain: d.name,
        shortName: d.shortName,
        examWeight: d.examWeight,
        color: d.color,
        total,
        correct,
        incorrect: total - correct,
        accuracy,
        status,
        statusClass,
        missedSubtopics
      };
    });

    // Generate Personalized Study Recommendations ("What to focus learning on more")
    const priorityDomains = [...domainBreakdown]
      .filter((d) => d.total > 0)
      .sort((a, b) => a.accuracy - b.accuracy || b.incorrect - a.incorrect);

    const weakSubtopics = Object.values(bySubtopic)
      .filter((s) => s.missedQuestions.length > 0)
      .sort(
        (a, b) =>
          b.missedQuestions.length - a.missedQuestions.length ||
          a.correct / a.total - b.correct / b.total
      );

    // Collect high-yield study pearls from missed questions
    // ...and from flagged guesses that happened to be right, since Nate didn't actually know them.
    const missedResponses = responses.filter((r) => !r.isCorrect || r.flagged);
    const targetedStudyPearls = missedResponses.map((r) => ({
      flaggedGuess: Boolean(r.flagged && r.isCorrect),
      questionId: r.questionId,
      questionNumber: r.questionNumber,
      domain: r.domain,
      subtopic: r.subtopic,
      difficultyLabel: r.difficultyLabel,
      studyTip: r.studyTip
    }));

    // Adaptive Behavior Summary Narrative
    let adaptiveAnalysis = "";
    if (byDifficulty[1].total > 0 && byDifficulty[1].accuracy < 75) {
      adaptiveAnalysis =
        "You missed several foundational (Easy) questions, which caused the adaptive algorithm to step down in difficulty and prevented you from reaching higher-value Hard questions. Prioritize mastering core Primary Assessment (XABC), basic airway adjuncts, and BLS medication contraindications first.";
    } else if (byDifficulty[3].total >= Math.max(3, Math.round(totalAsked * 0.34)) && byDifficulty[3].accuracy >= 65) {
      adaptiveAnalysis =
        "Strong adaptive trajectory! By consistently answering Easy and Medium questions correctly, you forced the CAT engine into Hard clinical vignettes for much of the session and performed well under high-acuity clinical judgment scenarios.";
    } else if (byDifficulty[2].total > 0 && byDifficulty[3].total > 0 && byDifficulty[3].accuracy < 50) {
      adaptiveAnalysis =
        "Your foundational knowledge on Easy and Medium questions is solid—you repeatedly climbed into the Hard tier—but struggled when questions required differentiating subtle look-alike pathologies (such as Cushing's triad vs. shock, RVMI, or third-trimester bleeding differentials). Focus on pathophysiology and competing clinical priorities.";
    } else {
      adaptiveAnalysis =
        "Your difficulty curve fluctuated between Medium and Easy/Hard tiers across the session. Review the missed subtopics below to build consistency across all five NREMT domains.";
    }

    return {
      sessionId: session.sessionId,
      attemptNumber: session.attemptNumber,
      mode: session.mode || "full",
      completedAt: session.completedAt || new Date().toISOString(),
      elapsedSeconds: session.elapsedSeconds,
      totalAsked,
      totalCorrect,
      totalIncorrect: totalAsked - totalCorrect,
      rawAccuracy: Math.round(rawAccuracy),
      scaledScore,
      passingScore: 950,
      passed,
      totalQuestions: session.totalQuestions || totalAsked,
      unansweredCount,
      completedAll,
      endReason: session.endReason || (completedAll ? "completed" : "ended-early"),
      finalTheta: Number(scoringTheta.toFixed(2)),
      avgDifficultyFaced: Number(avgDifficultyFaced.toFixed(2)),
      newQuestionsSeenCount,
      newlyMasteredCount,
      comebackWinsCount,
      flaggedCount: responses.filter((r) => r.flagged).length,
      flaggedCorrectCount: responses.filter((r) => r.flagged && r.isCorrect).length,
      clearedFromReviewCount: responses.filter((r) => r.isCorrect && !r.flagged).length,
      reviewRemainingCount: getReviewQueue().length,
      byDifficulty,
      byPatientType: Object.values(byPatientType),
      domainBreakdown,
      priorityDomains,
      weakSubtopics,
      targetedStudyPearls,
      adaptiveAnalysis,
      responses
    };
  }

  // Pool & Rotation Statistics for the Dashboard
  function getQuestionPoolStats() {
    const allQuestions = getAllQuestions();
    const exposure = getExposureHistory();
    let unseenCount = 0;
    let seenOnceCount = 0;
    let seenMultipleCount = 0;

    const domainStats = DOMAIN_BLUEPRINT.map((d) => {
      const qs = allQuestions.filter((q) => q.domain === d.name);
      const unseen = qs.filter((q) => !exposure.items[q.id] || exposure.items[q.id].seenCount === 0).length;
      const easy = qs.filter((q) => q.difficulty === 1).length;
      const medium = qs.filter((q) => q.difficulty === 2).length;
      const hard = qs.filter((q) => q.difficulty === 3).length;
      return {
        ...d,
        total: qs.length,
        unseen,
        seen: qs.length - unseen,
        easy,
        medium,
        hard
      };
    });

    allQuestions.forEach((q) => {
      const exp = exposure.items[q.id];
      if (!exp || exp.seenCount === 0) {
        unseenCount++;
      } else if (exp.seenCount === 1) {
        seenOnceCount++;
      } else {
        seenMultipleCount++;
      }
    });

    const sourceCounts = {};
    allQuestions.forEach((q) => {
      const src = q.source || "Custom";
      sourceCounts[src] = (sourceCounts[src] || 0) + 1;
    });

    return {
      totalBankSize: allQuestions.length,
      sourceCounts,
      unseenCount,
      seenCount: allQuestions.length - unseenCount,
      seenOnceCount,
      seenMultipleCount,
      totalAttempts: exposure.totalAttempts || 0,
      domainStats
    };
  }

  // Cumulative Progress & Mastery Statistics for Nate's Momentum Tracker
  // Questions to revisit: missed, or flagged as a guess, the last time Nate answered them.
  // (Exposure records saved before flags existed only know whether the last answer was right.)
  function needsReview(exp) {
    if (!exp || !exp.seenCount) return false;
    return exp.needsReview !== undefined ? Boolean(exp.needsReview) : exp.lastCorrect === false;
  }

  function getReviewQueue() {
    const exposure = getExposureHistory();
    return getAllQuestions()
      .filter((q) => needsReview(exposure.items[q.id]))
      .sort((a, b) => (exposure.items[a.id].lastAttempt || 0) - (exposure.items[b.id].lastAttempt || 0));
  }

  function getNateProgressStats() {
    const allQuestions = getAllQuestions();
    const exposure = getExposureHistory();
    const allAttempts = getPastAttempts();
    // Review rounds are all previously missed questions, so they'd skew score trends.
    const pastAttempts = allAttempts.filter((a) => a.mode !== "review");
    const totalBankSize = allQuestions.length;

    let uniqueSeenCount = 0;
    let uniqueMasteredCount = 0;
    let comebackWinsAllTime = 0;
    let totalRepsAllTime = 0;

    allQuestions.forEach((q) => {
      const exp = exposure.items[q.id];
      if (exp && exp.seenCount > 0) {
        uniqueSeenCount += 1;
        totalRepsAllTime += exp.seenCount;
        const correctCount = exp.correctCount || 0;
        if (correctCount > 0) {
          uniqueMasteredCount += 1;
          if (exp.everMissed || exp.seenCount > correctCount) {
            comebackWinsAllTime += 1;
          }
        }
      }
    });

    const exploredPct = totalBankSize > 0 ? Math.round((uniqueSeenCount / totalBankSize) * 100) : 0;
    const masteredPct = totalBankSize > 0 ? Math.round((uniqueMasteredCount / totalBankSize) * 100) : 0;
    const learningInProgressCount = Math.max(0, uniqueSeenCount - uniqueMasteredCount);
    const learningPct = totalBankSize > 0 ? Math.round((learningInProgressCount / totalBankSize) * 100) : 0;

    // Determine current rank and next rank on the ladder
    let currentRankIdx = 0;
    for (let i = 0; i < NATE_RANK_LADDER.length; i++) {
      if (uniqueMasteredCount >= NATE_RANK_LADDER[i].minMastered) {
        currentRankIdx = i;
      }
    }
    const currentRank = NATE_RANK_LADDER[currentRankIdx];
    const nextRank =
      currentRankIdx < NATE_RANK_LADDER.length - 1
        ? NATE_RANK_LADDER[currentRankIdx + 1]
        : null;

    let rankProgressPct = 100;
    let masteredToNextRank = 0;
    if (nextRank) {
      const span = Math.max(1, nextRank.minMastered - currentRank.minMastered);
      const earnedInRank = Math.max(0, uniqueMasteredCount - currentRank.minMastered);
      rankProgressPct = Math.min(100, Math.round((earnedInRank / span) * 100));
      masteredToNextRank = Math.max(0, nextRank.minMastered - uniqueMasteredCount);
    }

    // Score progression across attempts
    let bestScaledScore = null;
    let latestScaledScore = null;
    let firstScaledScore = null;
    let scoreDeltaFromFirst = null;
    if (pastAttempts.length > 0) {
      latestScaledScore = pastAttempts[0].scaledScore;
      firstScaledScore = pastAttempts[pastAttempts.length - 1].scaledScore;
      bestScaledScore = Math.max(...pastAttempts.map((a) => a.scaledScore || 0));
      if (pastAttempts.length >= 2) {
        scoreDeltaFromFirst = bestScaledScore - firstScaledScore;
      }
    }

    // Per-domain cumulative mastery
    const domainMastery = DOMAIN_BLUEPRINT.map((d) => {
      const qs = allQuestions.filter((q) => q.domain === d.name);
      const total = qs.length;
      let seen = 0;
      let mastered = 0;
      qs.forEach((q) => {
        const exp = exposure.items[q.id];
        if (exp && exp.seenCount > 0) {
          seen += 1;
          if ((exp.correctCount || 0) > 0) {
            mastered += 1;
          }
        }
      });
      return {
        name: d.name,
        shortName: d.shortName,
        color: d.color,
        total,
        seen,
        mastered,
        masteredPct: total > 0 ? Math.round((mastered / total) * 100) : 0,
        seenPct: total > 0 ? Math.round((seen / total) * 100) : 0
      };
    });

    return {
      totalBankSize,
      uniqueSeenCount,
      uniqueMasteredCount,
      learningInProgressCount,
      comebackWinsAllTime,
      totalRepsAllTime,
      exploredPct,
      masteredPct,
      learningPct,
      currentRank,
      nextRank,
      rankProgressPct,
      masteredToNextRank,
      completedAttemptsCount: allAttempts.length,
      reviewQueueCount: getReviewQueue().length,
      bestScaledScore,
      latestScaledScore,
      firstScaledScore,
      scoreDeltaFromFirst,
      domainMastery
    };
  }

  // Expose public API on window.NREMTCatEngine
  window.NREMTCatEngine = {
    STORAGE_KEYS,
    DOMAIN_BLUEPRINT,
    DIFFICULTY_LABELS,
    NATE_RANK_LADDER,
    getAllQuestions,
    saveUserCustomQuestion,
    getExposureHistory,
    resetExposureHistory,
    getPastAttempts,
    clearAllHistory,
    saveActiveSession,
    getActiveSession,
    clearActiveSession,
    createExamSession,
    submitAnswer,
    finalizeSession,
    generateDiagnosticReport,
    getQuestionPoolStats,
    getNateProgressStats,
    getReviewQueue
  };
})();
