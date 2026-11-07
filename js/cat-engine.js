// NREMT Computer Adaptive Testing (CAT) Engine, Question Rotation Manager & Diagnostic Analyzer

(function () {
  const STORAGE_KEYS = {
    EXPOSURE: "nremt_question_exposure_v1",
    ATTEMPTS: "nremt_exam_attempts_v1",
    CUSTOM_QUESTIONS: "nremt_user_custom_questions_v1",
    ACTIVE_SESSION: "nremt_active_session_v1"
  };

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
    } catch (e) {
      console.warn("Error saving exposure history:", e);
    }
  }

  function resetExposureHistory() {
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
    } catch (e) {
      console.warn("Error saving attempt report:", e);
    }
  }

  function clearAllHistory() {
    try {
      localStorage.removeItem(STORAGE_KEYS.EXPOSURE);
      localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
    } catch (e) {
      console.warn("Error clearing history:", e);
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

  // Create a new 35-question CAT Exam Session
  function createExamSession(options = {}) {
    const totalQuestions = options.totalQuestions || 35;
    const timeLimitSeconds = options.timeLimitSeconds || 42 * 60; // 42 minutes for 35 questions (proportional to 70–100 Qs in 120 mins)
    const exposure = getExposureHistory();
    const attemptNumber = exposure.totalAttempts + 1;

    const domainCounts = {};
    DOMAIN_BLUEPRINT.forEach((d) => {
      domainCounts[d.name] = 0;
    });

    const session = {
      sessionId: "EXAM-" + Date.now(),
      attemptNumber,
      startedAt: new Date().toISOString(),
      totalQuestions,
      timeLimitSeconds,
      elapsedSeconds: 0,
      currentQuestionIndex: 0, // 0-based (0 to 34)
      currentDifficultyTier: 2, // Start at Medium (Tier 2), just like standard CAT
      theta: 0.0, // Initial IRT ability estimate
      domainCounts,
      lastDomain: null,
      askedQuestionIds: [],
      responses: [], // Array of answered question records
      currentQuestion: null,
      isCompleted: false
    };

    // Select the first question
    session.currentQuestion = selectNextQuestion(session);
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
    const available = allQuestions.filter((q) => !askedSet.has(q.id));
    if (available.length === 0) {
      return null;
    }

    // Calculate how much each domain still needs to fulfill its 35-question blueprint
    const domainDeficits = {};
    DOMAIN_BLUEPRINT.forEach((d) => {
      const askedInDomain = session.domainCounts[d.name] || 0;
      const scaledTarget = Math.round((d.targetCount35 / 35) * session.totalQuestions);
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
      const seenPenalty = exp.seenCount * 500000 + exp.lastAttempt * 500;

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
  function submitAnswer(session, selectedIndex, timeSpentSeconds = 0) {
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
      patientType: q.patientType || "Adult",
      difficulty: q.difficulty,
      difficultyLabel: DIFFICULTY_LABELS[q.difficulty],
      irtB: q.irtB || 0,
      stem: q.stem,
      options: q.options,
      selectedIndex,
      correctIndex: q.correctIndex,
      isCorrect,
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
      lastAttempt: 0,
      lastCorrect: null
    };
    existingExp.seenCount += 1;
    if (isCorrect) existingExp.correctCount += 1;
    existingExp.lastAttempt = session.attemptNumber;
    existingExp.lastCorrect = isCorrect;
    exposure.items[q.id] = existingExp;

    // Check if exam has reached 35 questions
    if (session.responses.length >= session.totalQuestions) {
      session.isCompleted = true;
      session.completedAt = new Date().toISOString();
      session.currentQuestion = null;
      exposure.totalAttempts = Math.max(exposure.totalAttempts, session.attemptNumber);
      saveExposureHistory(exposure);

      const report = generateDiagnosticReport(session);
      session.report = report;
      saveAttemptReport(report);
    } else {
      saveExposureHistory(exposure);
      session.currentQuestionIndex = session.responses.length;
      session.currentQuestion = selectNextQuestion(session);
    }

    return session;
  }

  // Generate comprehensive score & study feedback report after 35 questions
  function generateDiagnosticReport(session) {
    const responses = session.responses;
    const totalAsked = responses.length;
    const totalCorrect = responses.filter((r) => r.isCorrect).length;
    const rawAccuracy = totalAsked > 0 ? (totalCorrect / totalAsked) * 100 : 0;

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

    const weightedRatio = maxPossibleWeighted > 0 ? earnedWeighted / maxPossibleWeighted : 0;
    const avgDifficultyFaced = totalAsked > 0 ? totalDifficultySum / totalAsked : 2.0;

    // Compute NREMT Scaled Score (100 to 1500, Passing Standard = 950)
    // Combine final IRT theta and weighted accuracy so both difficulty level reached and accuracy matter
    const thetaNormalized = (session.theta + 2.5) / 5.0; // 0 to 1 (theta = 0.20 is ~0.54)
    const compositeAbility = thetaNormalized * 0.55 + weightedRatio * 0.45;
    // Map compositeAbility = 0.62 to 950 (Passing Standard)
    let scaledScore;
    if (compositeAbility >= 0.62) {
      scaledScore = Math.round(950 + ((compositeAbility - 0.62) / (1.0 - 0.62)) * 550);
    } else {
      scaledScore = Math.round(100 + (compositeAbility / 0.62) * 850);
    }
    scaledScore = Math.max(100, Math.min(1500, scaledScore));
    const passed = scaledScore >= 950;

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
    const missedResponses = responses.filter((r) => !r.isCorrect);
    const targetedStudyPearls = missedResponses.map((r) => ({
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
    } else if (byDifficulty[3].total >= 12 && byDifficulty[3].accuracy >= 65) {
      adaptiveAnalysis =
        "Strong adaptive trajectory! By consistently answering Easy and Medium questions correctly, you forced the CAT engine into Hard clinical vignettes for much of the exam and performed well under high-acuity clinical judgment scenarios.";
    } else if (byDifficulty[2].total > 0 && byDifficulty[3].total > 0 && byDifficulty[3].accuracy < 50) {
      adaptiveAnalysis =
        "Your foundational knowledge on Easy and Medium questions is solid—you repeatedly climbed into the Hard tier—but struggled when questions required differentiating subtle look-alike pathologies (such as Cushing's triad vs. shock, RVMI, or third-trimester bleeding differentials). Focus on pathophysiology and competing clinical priorities.";
    } else {
      adaptiveAnalysis =
        "Your difficulty curve fluctuated between Medium and Easy/Hard tiers across the exam. Review the missed subtopics below to build consistency across all five NREMT domains.";
    }

    return {
      sessionId: session.sessionId,
      attemptNumber: session.attemptNumber,
      completedAt: session.completedAt || new Date().toISOString(),
      elapsedSeconds: session.elapsedSeconds,
      totalAsked,
      totalCorrect,
      totalIncorrect: totalAsked - totalCorrect,
      rawAccuracy: Math.round(rawAccuracy),
      scaledScore,
      passingScore: 950,
      passed,
      finalTheta: Number(session.theta.toFixed(2)),
      avgDifficultyFaced: Number(avgDifficultyFaced.toFixed(2)),
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

    return {
      totalBankSize: allQuestions.length,
      unseenCount,
      seenCount: allQuestions.length - unseenCount,
      seenOnceCount,
      seenMultipleCount,
      totalAttempts: exposure.totalAttempts || 0,
      domainStats
    };
  }

  // Expose public API on window.NREMTCatEngine
  window.NREMTCatEngine = {
    DOMAIN_BLUEPRINT,
    DIFFICULTY_LABELS,
    getAllQuestions,
    saveUserCustomQuestion,
    getExposureHistory,
    resetExposureHistory,
    getPastAttempts,
    clearAllHistory,
    createExamSession,
    submitAnswer,
    generateDiagnosticReport,
    getQuestionPoolStats
  };
})();
