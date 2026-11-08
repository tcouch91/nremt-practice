// NREMT EMT Cognitive Exam Application Controller & UI Renderer

(function () {
  const engine = window.NREMTCatEngine;

  const state = {
    currentView: "lobby", // "lobby" | "exam" | "results"
    activeSession: null,
    activeReport: null,
    selectedOptionIndex: null,
    struckOutOptions: new Set(),
    questionStartTime: 0,
    timerInterval: null,
    isPaused: false,
    hideTimer: false,
    showLiveCatHud: true,
    focusHighlightStem: false,
    nateQuoteIndex: 0,
    reviewFilterStatus: "all", // "all" | "incorrect" | "correct"
    reviewFilterDomain: "all",
    reviewFilterDifficulty: "all"
  };

  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatDuration(totalSeconds) {
    const sec = Math.max(0, Math.floor(totalSeconds));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function formatDateShort(isoStr) {
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch (e) {
      return isoStr;
    }
  }

  // Highlight vital signs, ages, and priority prompt words when Focus Highlighter is toggled on
  function formatStemWithFocusHighlights(rawStem) {
    let html = escapeHtml(rawStem);
    // 1. Highlight key uppercase exam prompt words (FIRST, MOST, BEST, INITIAL, IMMEDIATELY, NOT, EXCEPT, NEXT)
    html = html.replace(
      /\b(FIRST|MOST|BEST|INITIAL|IMMEDIATELY|NOT|EXCEPT|NEXT|PRIORITY)\b/g,
      '<mark class="stem-focus-priority">$1</mark>'
    );
    // 2. Highlight clinical vital signs and measurements (BP, HR, RR, SpO2, GCS, mg/dL, mmHg, breaths/min, beats/min, temperatures, ages)
    // Labeled vitals ("HR 104", "SpO2 is 93%") come first so the label is highlighted with its value.
    // The trailing (?!\w) replaces \b, which never matches after "%" or "°F" followed by a space or comma.
    html = html.replace(
      /\b((?:SpO2|HR|RR|BP|GCS)\s*(?:of\s*|is\s*)?\d{1,3}(?:\/\d{2,3})?(?:\s*(?:%|beats\/min|breaths\/min|bpm|mmHg))?|\d{1,3}\/\d{2,3}\s*mmHg|\d{1,3}(?:\.\d)?\s*(?:beats\/min|breaths\/min|bpm|mg\/dL|mmHg|L\/min|%|°F|°C)|\d{1,2}-year-old|\d{1,2}-month-old|\d{1,2}\s*weeks?\s*(?:pregnant|gestation))(?!\w)/gi,
      '<span class="stem-focus-vital">$1</span>'
    );
    return html;
  }

  // Build context-aware, grounded encouraging messages for Nate
  function getNateCoachingQuotes(nateStats) {
    const quotes = [];

    if (nateStats.totalRepsAllTime === 0) {
      quotes.push(
        "Hey Nate — welcome to your personal NREMT training ground. Zero judgment here: nobody sees these scores but you, and a practice question is just a rep in the gym, not a verdict on you. If 35 questions feels heavy right now, click the 10-Question Focus Sprint just to break the ice!"
      );
    } else {
      quotes.push(
        `Hey Nate — look at your numbers on the right: you've already put in ${nateStats.totalRepsAllTime} question reps, unlocked ${nateStats.uniqueSeenCount} of ${nateStats.totalBankSize} scenarios, and permanently mastered ${nateStats.uniqueMasteredCount} of them. Procrastination lies and says you're starting from zero—you're already moving forward.`
      );
    }

    quotes.push(
      "Real talk on the fear of failing, Nate: missing a question on this app is the best thing that can happen to you today. Every missed question hands you a 2-sentence 'Clinical Pearl' at the end so that exact trap never catches you on the real NREMT."
    );

    quotes.push(
      "Having a hard time focusing today, Nate? Don't force a marathon. Run a Quick 10-Question Focus Sprint (~10 minutes), turn on the 🎯 Focus Highlighter in the top bar so vitals pop out, and call it a win. Small consistent reps beat cramming every single time."
    );

    quotes.push(
      "Remember how the adaptive test works, Nate: when the questions suddenly feel weird and brutal, DO NOT PANIC. That literally means you answered the easier ones right and forced the computer to give you Hard-tier questions!"
    );

    quotes.push(
      "Whenever a long paragraph makes your eyes glaze over, use the EMT trick: read the VERY LAST sentence of the question stem first so your brain knows what it's hunting for, then scan the vitals and ask: 'What will kill my patient first — Airway, Breathing, or Circulation?'"
    );

    if (nateStats.comebackWinsAllTime > 0) {
      quotes.push(
        `Proof that you're learning, Nate: you have ${nateStats.comebackWinsAllTime} Comeback Win${
          nateStats.comebackWinsAllTime === 1 ? "" : "s"
        } — questions you missed on an earlier run and came back to nail later. Mistakes aren't failures; they're just future correct answers in disguise.`
      );
    }

    if (nateStats.scoreDeltaFromFirst !== null && nateStats.scoreDeltaFromFirst > 0) {
      quotes.push(
        `Your Personal Best scaled score (${nateStats.bestScaledScore}) is up +${nateStats.scoreDeltaFromFirst} points from your first attempt (${nateStats.firstScaledScore}). That's not luck, Nate — that's your clinical instinct getting sharper.`
      );
    }

    return quotes;
  }

  // ============================================================================
  // INITIALIZATION
  // ============================================================================
  function init() {
    bindGlobalEvents();
    renderLobby();
    showView("lobby");
  }

  function bindGlobalEvents() {
    // Contrast / Color Scheme switcher
    const themeSelect = document.getElementById("select-color-scheme");
    if (themeSelect) {
      themeSelect.addEventListener("change", (e) => {
        document.body.classList.remove("theme-high-contrast", "theme-yellow-black");
        if (e.target.value === "high-contrast") {
          document.body.classList.add("theme-high-contrast");
        } else if (e.target.value === "yellow-black") {
          document.body.classList.add("theme-yellow-black");
        }
      });
    }

    // Toggle Timer visibility (Pearson VUE feature)
    const btnToggleTimer = document.getElementById("btn-toggle-timer");
    if (btnToggleTimer) {
      btnToggleTimer.addEventListener("click", () => {
        state.hideTimer = !state.hideTimer;
        updateHeaderTimerDisplay();
      });
    }

    // Toggle Live CAT Telemetry HUD
    const btnToggleCatHud = document.getElementById("btn-toggle-cat-hud");
    if (btnToggleCatHud) {
      btnToggleCatHud.addEventListener("click", () => {
        state.showLiveCatHud = !state.showLiveCatHud;
        const hudCheckbox = document.getElementById("chk-live-cat-hud");
        if (hudCheckbox) hudCheckbox.checked = state.showLiveCatHud;
        updateLiveCatHud();
      });
    }

    // Toggle Focus Stem Highlighter (helps Nate focus on vitals & key prompt words)
    const btnToggleFocusStem = document.getElementById("btn-toggle-focus-stem");
    if (btnToggleFocusStem) {
      btnToggleFocusStem.addEventListener("click", () => {
        state.focusHighlightStem = !state.focusHighlightStem;
        const focusStateEl = document.getElementById("focus-stem-state");
        if (focusStateEl) focusStateEl.textContent = state.focusHighlightStem ? "ON" : "Off";
        btnToggleFocusStem.classList.toggle("vue-tool-btn-active", state.focusHighlightStem);
        renderQuestionStemText();
      });
    }

    // 60-Second Breather / Pause Button during Exam
    const btnExamBreather = document.getElementById("btn-exam-breather");
    if (btnExamBreather) {
      btnExamBreather.addEventListener("click", openBreatherPauseModal);
    }

    // Firefighter Extended Duty Call Pause Button during Exam
    const btnExamDutyPause = document.getElementById("btn-exam-duty-pause");
    if (btnExamDutyPause) {
      btnExamDutyPause.addEventListener("click", openDutyPauseModal);
    }

    // In-Progress / Duty Paused Session recovery buttons in Lobby
    const btnDutyResume = document.getElementById("btn-duty-resume");
    if (btnDutyResume) {
      btnDutyResume.addEventListener("click", () => {
        const saved = engine.getActiveSession();
        if (saved) {
          resumeSavedExamSession(saved);
        }
      });
    }

    const btnDutyFinishEarly = document.getElementById("btn-duty-finish-early");
    if (btnDutyFinishEarly) {
      btnDutyFinishEarly.addEventListener("click", () => {
        const saved = engine.getActiveSession();
        if (saved) {
          if (saved.responses.length === 0) {
            showModal({
              title: "No Questions Answered Yet",
              bodyHtml: `<p>You haven't answered any questions in this session yet, Nate. Click <strong>Resume Exam Now</strong> to dive in, or <strong>Discard</strong> to start fresh!</p>`,
              confirmText: "Resume Exam Now ▶",
              cancelText: "Discard Session",
              onConfirm: () => resumeSavedExamSession(saved),
              onCancel: () => {
                engine.clearActiveSession();
                state.activeSession = null;
                renderLobby();
              }
            });
            return;
          }
          stopTimer();
          const report = engine.finalizeSession(saved);
          state.activeSession = null;
          state.activeReport = report;
          renderDiagnosticReport(report);
          showView("results");
        }
      });
    }

    const btnDutyDiscard = document.getElementById("btn-duty-discard");
    if (btnDutyDiscard) {
      btnDutyDiscard.addEventListener("click", () => {
        showModal({
          title: "Discard Paused Session?",
          bodyHtml: `<p>Are you sure you want to discard this in-progress session, Nate?</p><p style="margin-top:0.4rem;color:var(--vue-text-muted);font-size:0.86rem;">Any questions already answered will still count toward question exposure, but this attempt won't be scored.</p>`,
          confirmText: "Discard Session",
          cancelText: "Keep Session",
          onConfirm: () => {
            engine.clearActiveSession();
            state.activeSession = null;
            renderLobby();
          }
        });
      });
    }

    // Cycle Nate's Pep Talk Quote in Lobby
    const btnNateNewQuote = document.getElementById("btn-nate-new-quote");
    if (btnNateNewQuote) {
      btnNateNewQuote.addEventListener("click", () => {
        const nateStats = engine.getNateProgressStats();
        const quotes = getNateCoachingQuotes(nateStats);
        state.nateQuoteIndex = (state.nateQuoteIndex + 1) % quotes.length;
        const msgEl = document.getElementById("nate-coach-message");
        if (msgEl) {
          msgEl.textContent = quotes[state.nateQuoteIndex];
        }
      });
    }

    // Launch Full 35-Question Exam button in Lobby
    const btnStartExam = document.getElementById("btn-start-exam");
    if (btnStartExam) {
      btnStartExam.addEventListener("click", () => {
        const hudCheckbox = document.getElementById("chk-live-cat-hud");
        if (hudCheckbox) state.showLiveCatHud = hudCheckbox.checked;
        startNewExam("full");
      });
    }

    // Launch Quick 10-Question Focus Sprint button in Lobby
    const btnStartSprint = document.getElementById("btn-start-sprint");
    if (btnStartSprint) {
      btnStartSprint.addEventListener("click", () => {
        const hudCheckbox = document.getElementById("chk-live-cat-hud");
        if (hudCheckbox) state.showLiveCatHud = hudCheckbox.checked;
        startNewExam("sprint");
      });
    }

    // Reset Rotation Pool button
    const btnResetPool = document.getElementById("btn-reset-pool");
    if (btnResetPool) {
      btnResetPool.addEventListener("click", () => {
        showModal({
          title: "Reset Question Rotation Pool",
          bodyHtml: `
            <p>Are you sure you want to reset your question rotation history?</p>
            <p style="margin-top:0.5rem;color:var(--vue-text-muted);font-size:0.86rem;">
              Resetting marks all <strong>${engine.getAllQuestions().length} questions</strong> as unseen again. Your saved past score reports will remain intact unless you also clear attempt history.
            </p>
          `,
          confirmText: "Reset Rotation Pool",
          cancelText: "Cancel",
          onConfirm: () => {
            engine.resetExposureHistory();
            renderLobby();
          }
        });
      });
    }

    // Open Add Custom Question Modal
    const btnAddCustom = document.getElementById("btn-open-custom-modal");
    if (btnAddCustom) {
      btnAddCustom.addEventListener("click", openAddCustomQuestionModal);
    }

    // Exam Navigation: Next Button
    const btnNext = document.getElementById("btn-exam-next");
    if (btnNext) {
      btnNext.addEventListener("click", handleNextQuestion);
    }

    // Exam Navigation: Help Button
    const btnHelp = document.getElementById("btn-exam-help");
    if (btnHelp) {
      btnHelp.addEventListener("click", showExamInstructionsModal);
    }

    // Exam Navigation: End/Exit Exam Early
    const btnAbort = document.getElementById("btn-exam-abort");
    if (btnAbort) {
      btnAbort.addEventListener("click", handleEndExamEarly);
    }

    // Results Screen Buttons
    const btnRetakeExam = document.getElementById("btn-retake-exam");
    if (btnRetakeExam) {
      btnRetakeExam.addEventListener("click", () => {
        startNewExam("full");
      });
    }

    const btnRetakeSprint = document.getElementById("btn-retake-sprint");
    if (btnRetakeSprint) {
      btnRetakeSprint.addEventListener("click", () => {
        startNewExam("sprint");
      });
    }

    const btnBackToLobby = document.getElementById("btn-back-lobby");
    if (btnBackToLobby) {
      btnBackToLobby.addEventListener("click", () => {
        renderLobby();
        showView("lobby");
      });
    }

    // Review Filters
    const filterStatus = document.getElementById("filter-review-status");
    const filterDomain = document.getElementById("filter-review-domain");
    const filterDiff = document.getElementById("filter-review-difficulty");

    [filterStatus, filterDomain, filterDiff].forEach((el) => {
      if (el) {
        el.addEventListener("change", () => {
          state.reviewFilterStatus = filterStatus ? filterStatus.value : "all";
          state.reviewFilterDomain = filterDomain ? filterDomain.value : "all";
          state.reviewFilterDifficulty = filterDiff ? filterDiff.value : "all";
          if (state.activeReport) {
            renderQuestionReviewList(state.activeReport);
          }
        });
      }
    });

    // Keyboard shortcuts during exam (A/B/C/D or 1/2/3/4 to select, Enter for Next)
    document.addEventListener("keydown", (e) => {
      if (state.currentView !== "exam") return;
      const modalBackdrop = document.getElementById("vue-modal-backdrop");
      if (modalBackdrop && !modalBackdrop.classList.contains("hidden")) return;

      const key = e.key.toUpperCase();
      if (key === "1" || key === "A") {
        selectOption(0);
      } else if (key === "2" || key === "B") {
        selectOption(1);
      } else if (key === "3" || key === "C") {
        selectOption(2);
      } else if (key === "4" || key === "D") {
        selectOption(3);
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleNextQuestion();
      }
    });
  }

  function showView(viewName) {
    state.currentView = viewName;
    document.body.setAttribute("data-view", viewName); // lets the phone layout restyle per view
    const lobbyEl = document.getElementById("view-lobby");
    const examEl = document.getElementById("view-exam");
    const resultsEl = document.getElementById("view-results");
    const headerStatusEl = document.getElementById("vue-header-exam-status");
    const examToolsEl = document.getElementById("vue-subbar-exam-tools");

    lobbyEl.classList.toggle("hidden", viewName !== "lobby");
    examEl.classList.toggle("hidden", viewName !== "exam");
    resultsEl.classList.toggle("hidden", viewName !== "results");

    if (headerStatusEl) {
      headerStatusEl.classList.toggle("hidden", viewName !== "exam");
    }
    if (examToolsEl) {
      examToolsEl.classList.toggle("hidden", viewName !== "exam");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ============================================================================
  // VIEW 1: LOBBY / CANDIDATE PORTAL & NATE'S MOMENTUM HUB RENDERER
  // ============================================================================
  function renderNateMomentumHub() {
    const nateStats = engine.getNateProgressStats();
    const quotes = getNateCoachingQuotes(nateStats);
    if (state.nateQuoteIndex >= quotes.length) {
      state.nateQuoteIndex = 0;
    }

    const rankBadgeEl = document.getElementById("nate-rank-badge");
    if (rankBadgeEl) {
      rankBadgeEl.textContent = nateStats.currentRank.badge;
      rankBadgeEl.title = nateStats.currentRank.subtitle;
    }

    const msgEl = document.getElementById("nate-coach-message");
    if (msgEl) {
      msgEl.textContent = quotes[state.nateQuoteIndex];
    }

    const nextRankLbl = document.getElementById("nate-rank-next-label");
    if (nextRankLbl) {
      if (nateStats.nextRank) {
        nextRankLbl.textContent = `${nateStats.masteredToNextRank} more mastered to reach ${nateStats.nextRank.title}`;
      } else {
        nextRankLbl.textContent = "Top Rank Achieved: NREMT Registry Ready!";
      }
    }

    const rankFillEl = document.getElementById("nate-rank-progress-fill");
    if (rankFillEl) {
      rankFillEl.style.width = `${nateStats.rankProgressPct}%`;
    }

    const totalRepsEl = document.getElementById("nate-stat-total-reps");
    if (totalRepsEl) {
      totalRepsEl.textContent = String(nateStats.totalRepsAllTime);
    }

    const exploredEl = document.getElementById("nate-stat-explored");
    if (exploredEl) {
      exploredEl.textContent = `${nateStats.uniqueSeenCount} / ${nateStats.totalBankSize}`;
    }

    const masteredEl = document.getElementById("nate-stat-mastered");
    if (masteredEl) {
      masteredEl.textContent = `${nateStats.uniqueMasteredCount} (${nateStats.masteredPct}%)`;
    }

    const bestEl = document.getElementById("nate-stat-best");
    if (bestEl) {
      if (nateStats.bestScaledScore !== null) {
        bestEl.textContent =
          nateStats.comebackWinsAllTime > 0
            ? `${nateStats.bestScaledScore} (${nateStats.comebackWinsAllTime} ★)`
            : String(nateStats.bestScaledScore);
      } else {
        bestEl.textContent = "Ready!";
      }
    }

    // 400-question mastery bar
    const barMasteredEl = document.getElementById("nate-mastery-bar-mastered");
    const barLearningEl = document.getElementById("nate-mastery-bar-learning");
    if (barMasteredEl) {
      barMasteredEl.style.width = `${nateStats.masteredPct}%`;
    }
    if (barLearningEl) {
      barLearningEl.style.width = `${nateStats.learningPct}%`;
    }

    const masteryCaptionEl = document.getElementById("nate-mastery-caption");
    if (masteryCaptionEl) {
      if (nateStats.uniqueSeenCount === 0) {
        masteryCaptionEl.textContent =
          "0 of 400 unlocked so far — start a 10-question sprint or 35-question exam to light up this bar!";
      } else {
        masteryCaptionEl.innerHTML = `<strong style="color:#15803d;">✓ ${nateStats.uniqueMasteredCount} Mastered</strong> &nbsp;•&nbsp; <strong style="color:#0284c7;">● ${nateStats.learningInProgressCount} In Review</strong> &nbsp;•&nbsp; ${
          nateStats.totalBankSize - nateStats.uniqueSeenCount
        } Unseen remaining`;
      }
    }

    // 5-Domain cumulative mastery strip
    const domainStripEl = document.getElementById("nate-domain-mastery-strip");
    if (domainStripEl) {
      domainStripEl.innerHTML = nateStats.domainMastery
        .map(
          (d) => `
          <div class="nate-domain-pill">
            <div class="nate-domain-pill-top">
              <span><span class="domain-dot" style="background:${d.color};"></span><strong>${escapeHtml(
            d.shortName
          )}</strong></span>
              <span class="nate-domain-pill-count">${d.mastered}/${d.total} ✓</span>
            </div>
            <div class="nate-domain-mini-track" title="${d.mastered} mastered, ${d.seen} seen of ${d.total}">
              <div class="nate-domain-mini-fill" style="width:${d.masteredPct}%;background:${d.color};"></div>
            </div>
          </div>
        `
        )
        .join("");
    }
  }

  function renderLobby() {
    const stats = engine.getQuestionPoolStats();
    const pastAttempts = engine.getPastAttempts();

    // Check for saved in-progress / duty paused session
    const savedSession = engine.getActiveSession();
    const dutyBanner = document.getElementById("nate-duty-paused-banner");
    const dutyDesc = document.getElementById("nate-duty-desc");
    if (dutyBanner && dutyDesc) {
      if (savedSession && !savedSession.isCompleted && savedSession.currentQuestion) {
        const qNum = savedSession.responses.length + 1;
        const totalQ = savedSession.totalQuestions;
        const remaining = Math.max(
          0,
          savedSession.timeLimitSeconds - savedSession.elapsedSeconds
        );
        const modeLabel = savedSession.mode === "sprint" ? "10-Q Sprint" : "35-Q Exam";
        dutyDesc.innerHTML = `
          <strong>Exam Paused on Question ${qNum} of ${totalQ} (${modeLabel})</strong> with <strong>${formatDuration(
          remaining
        )}</strong> left.<br/>
          You have <strong>${savedSession.responses.length} questions already banked</strong>. Stay safe on shift, Nate — your patient is right here whenever you're ready!
        `;
        dutyBanner.classList.remove("hidden");
      } else {
        dutyBanner.classList.add("hidden");
      }
    }

    renderNateMomentumHub();

    // Update Hero KPI counts
    const bankTotalEl = document.getElementById("lobby-bank-total");
    if (bankTotalEl) bankTotalEl.textContent = `${stats.totalBankSize} Questions`;

    const unseenBadgeEl = document.getElementById("lobby-unseen-count");
    if (unseenBadgeEl) {
      unseenBadgeEl.textContent = `${stats.unseenCount} of ${stats.totalBankSize} Unseen (${Math.round(
        (stats.unseenCount / Math.max(1, stats.totalBankSize)) * 100
      )}%)`;
    }

    // Pool Progress Bar
    const unseenPct = (stats.unseenCount / Math.max(1, stats.totalBankSize)) * 100;
    const seenPct = 100 - unseenPct;
    const barUnseen = document.getElementById("pool-bar-unseen");
    const barSeen = document.getElementById("pool-bar-seen");
    if (barUnseen) barUnseen.style.width = `${unseenPct}%`;
    if (barSeen) barSeen.style.width = `${seenPct}%`;

    const poolLegendEl = document.getElementById("pool-legend-text");
    if (poolLegendEl) {
      poolLegendEl.innerHTML = `
        <span><strong style="color:#0284c7;">● ${stats.unseenCount} Unseen</strong> (prioritized in your next attempt)</span>
        <span><strong style="color:#64748b;">● ${stats.seenCount} Previously Seen</strong> across ${stats.totalAttempts} session${stats.totalAttempts === 1 ? "" : "s"}</span>
        <span style="color:var(--vue-text-muted);">Question authors: ${Object.entries(stats.sourceCounts || {})
          .map(([src, n]) => `${escapeHtml(src)} ${n}`)
          .join(" • ")}</span>
      `;
    }

    // Domain Table
    const tbody = document.getElementById("domain-pool-tbody");
    if (tbody) {
      tbody.innerHTML = stats.domainStats
        .map(
          (d) => `
        <tr>
          <td>
            <span class="domain-dot" style="background:${d.color};"></span>
            <strong>${escapeHtml(d.name)}</strong>
          </td>
          <td>${escapeHtml(d.examWeight)} <span style="color:var(--vue-text-muted);">(${d.targetCount35}/35)</span></td>
          <td>
            <span class="diff-badge diff-1" title="Easy">${d.easy} E</span>
            <span class="diff-badge diff-2" title="Medium">${d.medium} M</span>
            <span class="diff-badge diff-3" title="Hard">${d.hard} H</span>
          </td>
          <td><strong>${d.unseen}</strong> / ${d.total} unseen</td>
        </tr>
      `
        )
        .join("");
    }

    // Past Attempts History List
    const attemptsContainer = document.getElementById("past-attempts-container");
    if (attemptsContainer) {
      if (pastAttempts.length === 0) {
        attemptsContainer.innerHTML = `
          <div style="text-align:center;padding:2rem 1rem;color:var(--vue-text-muted);font-size:0.9rem;">
            No completed sessions yet, Nate! Try a <strong>Quick 10-Question Focus Sprint</strong> or a <strong>35-Question Practice Exam</strong> to log your first reps.
          </div>
        `;
      } else {
        attemptsContainer.innerHTML = pastAttempts
          .map((att, idx) => {
            const isSprint = att.mode === "sprint"; // reports without a mode predate sprints, so they were full exams
            const modeTag = isSprint ? "⚡ 10-Q Sprint" : "35-Q Exam";
            return `
          <div class="attempt-item">
            <div>
              <div style="font-weight:700;font-size:0.92rem;">
                #${att.attemptNumber || pastAttempts.length - idx} (${modeTag}) — Score: ${att.scaledScore}
              </div>
              <div style="font-size:0.78rem;color:var(--vue-text-muted);">
                ${formatDateShort(att.completedAt)} • ${att.totalCorrect}/${att.totalAsked} (${att.rawAccuracy}%) • Avg Diff: ${att.avgDifficultyFaced}
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:0.6rem;">
              <span class="attempt-badge ${att.passed ? "attempt-pass" : "attempt-fail"}">
                ${att.passed ? "950+ PASS PACE" : att.unansweredCount > 0 ? "INCOMPLETE" : "BUILDING REPS"}
              </span>
              <button class="vue-tool-btn btn-view-past-report" data-report-idx="${idx}">
                View Report
              </button>
            </div>
          </div>
        `;
          })
          .join("");

        attemptsContainer.querySelectorAll(".btn-view-past-report").forEach((btn) => {
          btn.addEventListener("click", () => {
            const idx = Number(btn.getAttribute("data-report-idx"));
            const report = pastAttempts[idx];
            if (report) {
              state.activeReport = report;
              renderDiagnosticReport(report);
              showView("results");
            }
          });
        });
      }
    }
  }

  // ============================================================================
  // VIEW 2: ACTIVE EXAM CONTROLLER (PEARSON VUE CAT INTERFACE + NATE FOCUS TOOLS)
  // ============================================================================
  function startNewExam(mode = "full") {
    stopTimer();
    const isSprint = mode === "sprint";
    state.activeSession = engine.createExamSession({
      mode: isSprint ? "sprint" : "full",
      totalQuestions: isSprint ? 10 : 35,
      timeLimitSeconds: isSprint ? 12 * 60 : 42 * 60
    });
    engine.saveActiveSession(state.activeSession);
    state.selectedOptionIndex = null;
    state.struckOutOptions.clear();
    state.isPaused = false;
    state.questionStartTime = Date.now();

    startTimer();
    renderCurrentExamQuestion();
    showView("exam");
  }

  function resumeSavedExamSession(savedSession) {
    stopTimer();
    state.activeSession = savedSession;
    state.selectedOptionIndex = null;
    state.struckOutOptions.clear();
    state.isPaused = false;
    state.activeSession.isDutyPaused = false;
    state.activeSession.dutyPauseAt = null;
    state.questionStartTime = Date.now();
    engine.saveActiveSession(state.activeSession);

    startTimer();
    renderCurrentExamQuestion();
    showView("exam");
  }

  function startTimer() {
    stopTimer();
    updateHeaderTimerDisplay();
    state.timerInterval = setInterval(() => {
      if (!state.activeSession || state.activeSession.isCompleted || state.isPaused) {
        return;
      }
      state.activeSession.elapsedSeconds += 1;
      const remaining =
        state.activeSession.timeLimitSeconds - state.activeSession.elapsedSeconds;
      updateHeaderTimerDisplay();

      if (remaining <= 0) {
        stopTimer();
        handleTimeExpired();
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function openBreatherPauseModal() {
    if (!state.activeSession || state.activeSession.isCompleted) return;
    state.isPaused = true;
    const pausedAt = Date.now();
    updateHeaderTimerDisplay();

    const qNum = state.activeSession.responses.length + 1;
    const totalQ = state.activeSession.totalQuestions;

    showModal({
      title: "🧘 Timer Paused — 60-Second Focus Reset for Nate",
      bodyHtml: `
        <div style="display:flex;flex-direction:column;gap:0.85rem;font-size:0.93rem;">
          <div class="breather-calm-box">
            <div style="font-weight:700;font-size:1rem;margin-bottom:0.35rem;color:#0369a1;">
              ⏱️ Your exam clock is completely paused on Question ${qNum} of ${totalQ}.
            </div>
            <p style="color:var(--vue-text);">
              Unclench your jaw, drop your shoulders away from your ears, and take one slow breath in for 4 seconds… hold for 2… and let it out slow.
            </p>
          </div>
          <p>
            <strong>Quick Reset Checklist when your focus drifts:</strong>
          </p>
          <ul style="padding-left:1.25rem;display:flex;flex-direction:column;gap:0.4rem;color:var(--vue-text-muted);">
            <li><strong>Don't grade yourself mid-test:</strong> Whether you missed the last question or nailed it doesn't matter right now. Only <em>this</em> patient is in front of you.</li>
            <li><strong>Read the last sentence first:</strong> Ask yourself what the question is actually asking (e.g., <em>"What should you do FIRST?"</em>), then look at the vitals.</li>
            <li><strong>XABC + Scene Safety:</strong> Scene safe &amp; PPE → Exsanguinating hemorrhage → Airway → Breathing (NRB vs. BVM) → Circulation/Shock.</li>
          </ul>
          <div style="margin-top:0.35rem;padding:0.75rem 0.9rem;background:#fef2f2;border:1px solid #fecaca;border-radius:6px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.6rem;">
            <div>
              <strong style="color:#991b1b;font-size:0.88rem;">🚨 Tones dropping or need an extended pause?</strong>
              <div style="font-size:0.8rem;color:#7f1d1d;">Freeze your exam clock and save progress so you can respond safely.</div>
            </div>
            <button type="button" class="btn-duty-resume btn-breather-to-duty" style="padding:0.4rem 0.9rem;font-size:0.82rem;">Switch to Duty Pause 🚒</button>
          </div>
        </div>
      `,
      confirmText: "I'm Reset — Resume Clock ▶",
      hideCancel: true,
      onConfirm: () => {
        const pausedDurationMs = Date.now() - pausedAt;
        state.questionStartTime += pausedDurationMs;
        state.isPaused = false;
        updateHeaderTimerDisplay();
      }
    });

    const dutySwitchBtn = document.querySelector(".btn-breather-to-duty");
    if (dutySwitchBtn) {
      dutySwitchBtn.addEventListener("click", () => {
        openDutyPauseModal();
      });
    }
  }

  function openDutyPauseModal() {
    if (!state.activeSession || state.activeSession.isCompleted) return;
    state.isPaused = true;
    state.activeSession.isDutyPaused = true;
    state.activeSession.dutyPauseAt = new Date().toISOString();
    engine.saveActiveSession(state.activeSession);
    const pausedAt = Date.now();
    updateHeaderTimerDisplay();

    const qNum = state.activeSession.responses.length + 1;
    const totalQ = state.activeSession.totalQuestions;
    const remaining = Math.max(
      0,
      state.activeSession.timeLimitSeconds - state.activeSession.elapsedSeconds
    );
    const answeredCount = state.activeSession.responses.length;
    const modeTag =
      state.activeSession.mode === "sprint"
        ? "10-Question Focus Sprint"
        : "35-Question Practice Exam";

    showModal({
      title: "🚒 Station Call / Duty Pause Active — Stay Safe, Nate!",
      bodyHtml: `
        <div style="display:flex;flex-direction:column;gap:0.85rem;font-size:0.93rem;">
          <div class="duty-pause-card">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.4rem;">
              <span style="font-weight:800;color:#991b1b;font-size:1.02rem;">⏱️ Exam Timer Completely Frozen</span>
              <span class="nate-for-badge" style="background:#fee2e2;color:#991b1b;border-color:#fca5a5;">FIREFIGHTER DUTY PAUSE</span>
            </div>
            <p style="color:#7f1d1d;line-height:1.5;">
              Station tones or emergency call? Your test is <strong>100% paused and safely saved</strong> to your device. Go gear up, take care of business, and watch your crew's back out there.
            </p>
          </div>

          <div class="duty-pause-stat-grid">
            <div class="duty-pause-stat-item">
              <div class="duty-pause-stat-val">Item ${qNum}</div>
              <div class="duty-pause-stat-lbl">Current Question</div>
            </div>
            <div class="duty-pause-stat-item">
              <div class="duty-pause-stat-val">${formatDuration(remaining)}</div>
              <div class="duty-pause-stat-lbl">Time Left</div>
            </div>
            <div class="duty-pause-stat-item">
              <div class="duty-pause-stat-val">${answeredCount} / ${totalQ}</div>
              <div class="duty-pause-stat-lbl">Questions Done</div>
            </div>
            <div class="duty-pause-stat-item">
              <div class="duty-pause-stat-val">Saved ✓</div>
              <div class="duty-pause-stat-lbl">Device Storage</div>
            </div>
          </div>

          <div style="background:var(--vue-bg);border:1px solid var(--vue-border);border-radius:6px;padding:0.75rem 0.9rem;font-size:0.86rem;color:var(--vue-text-muted);">
            <strong style="color:var(--vue-text);">No rush at all, Nate:</strong>
            Even if you close this browser tab, shut your laptop, or get held on scene for 3 hours, your test will be waiting right here when you return to quarters.
          </div>
        </div>
      `,
      confirmText: "I'm Back from the Call — Resume Exam ▶",
      cancelText: "Save & Exit to Dashboard",
      onConfirm: () => {
        const pausedDurationMs = Date.now() - pausedAt;
        state.questionStartTime += pausedDurationMs;
        state.isPaused = false;
        if (state.activeSession) {
          state.activeSession.isDutyPaused = false;
          state.activeSession.dutyPauseAt = null;
          engine.saveActiveSession(state.activeSession);
        }
        updateHeaderTimerDisplay();
      },
      onCancel: () => {
        state.isPaused = true;
        if (state.activeSession) {
          state.activeSession.isDutyPaused = true;
          engine.saveActiveSession(state.activeSession);
        }
        renderLobby();
        showView("lobby");
      }
    });
  }

  function updateHeaderTimerDisplay() {
    const timerTextEl = document.getElementById("vue-timer-text");
    const timerRowEl = document.getElementById("vue-timer-row");
    const btnToggle = document.getElementById("btn-toggle-timer");
    if (!timerTextEl || !state.activeSession) return;

    const remaining = Math.max(
      0,
      state.activeSession.timeLimitSeconds - state.activeSession.elapsedSeconds
    );

    if (state.activeSession && state.activeSession.isDutyPaused) {
      timerTextEl.textContent = `🚒 DUTY PAUSED (${formatDuration(remaining)})`;
    } else if (state.isPaused) {
      timerTextEl.textContent = `⏸ PAUSED (${formatDuration(remaining)})`;
    } else if (state.hideTimer) {
      timerTextEl.textContent = "Timer Hidden";
      if (btnToggle) btnToggle.textContent = "Show";
    } else {
      timerTextEl.textContent = `Time Remaining: ${formatDuration(remaining)}`;
      if (btnToggle) btnToggle.textContent = "Hide";
    }

    if (timerRowEl) {
      timerRowEl.classList.remove("timer-warning", "timer-danger");
      if (remaining <= 180) {
        timerRowEl.classList.add("timer-danger");
      } else if (remaining <= 360) {
        timerRowEl.classList.add("timer-warning");
      }
    }
  }

  function updateLiveCatHud() {
    const hudContainer = document.getElementById("cat-live-hud");
    const btnToggle = document.getElementById("btn-toggle-cat-hud");
    if (!hudContainer || !state.activeSession || !state.activeSession.currentQuestion) return;

    const q = state.activeSession.currentQuestion;
    const responses = state.activeSession.responses;
    const lastResp = responses.length > 0 ? responses[responses.length - 1] : null;

    if (btnToggle) {
      btnToggle.textContent = state.showLiveCatHud
        ? "Hide Adaptive Monitor"
        : "Show Adaptive Monitor";
    }

    if (!state.showLiveCatHud) {
      hudContainer.classList.add("hidden");
      return;
    }

    hudContainer.classList.remove("hidden");
    const diffLabel = engine.DIFFICULTY_LABELS[q.difficulty] || "Medium";
    const lastTransitionText = lastResp
      ? escapeHtml(lastResp.adaptationReason)
      : "Initial calibration item (starts at Medium difficulty)";

    hudContainer.innerHTML = `
      <span class="diff-badge diff-${q.difficulty}">${diffLabel} Tier (IRT b=${q.irtB >= 0 ? "+" : ""}${q.irtB})</span>
      <span style="color:var(--vue-text-muted);">|</span>
      <span><strong>Domain:</strong> ${escapeHtml(q.domain)}</span>
      <span style="color:var(--vue-text-muted);">|</span>
      <span style="color:var(--vue-text-muted);font-weight:500;">${lastTransitionText}</span>
    `;
  }

  function updateNateExamCheckin() {
    const checkinEl = document.getElementById("nate-exam-checkin");
    if (!checkinEl || !state.activeSession || !state.activeSession.currentQuestion) return;

    const session = state.activeSession;
    const q = session.currentQuestion;
    const qNum = session.responses.length + 1;
    const totalQ = session.totalQuestions;
    const lastResp = session.responses.length > 0 ? session.responses[session.responses.length - 1] : null;
    const halfMark = Math.ceil(totalQ / 2);

    let message = "";
    if (qNum === 1) {
      message =
        session.mode === "sprint"
          ? "⚡ <strong>10-Question Focus Sprint:</strong> Quick, low-stress reps, Nate. Just take it one patient at a time!"
          : "🩺 <strong>Shift Started:</strong> One patient at a time, Nate. Tip: Click <em>🎯 Focus Highlighter</em> above if you want vitals and keywords highlighted!";
    } else if (qNum === halfMark) {
      message = `🙌 <strong>Halfway mark (${qNum} of ${totalQ})!</strong> Unclench your jaw, take a breath, and keep rolling, Nate — you're building real momentum.`;
    } else if (qNum === totalQ) {
      message = `🏁 <strong>Final question of this set (${totalQ} of ${totalQ})!</strong> Finish strong, Nate — let's see what clinical pearls you unlocked!`;
    } else if (lastResp && lastResp.isCorrect && q.difficulty === 3) {
      message =
        "🔥 <strong>Nice work!</strong> You stepped up into a <strong>Hard-tier</strong> question. Even if this one feels tricky, earning a Hard question means you're doing great.";
    } else if (qNum % 7 === 0) {
      message = `💪 <strong>${qNum - 1} questions banked!</strong> Every single scenario you read locks in your NREMT pattern recognition. Need a quick reset? Hit <em>🧘 Take a 60s Breather</em> anytime.`;
    } else if (lastResp && !lastResp.isCorrect) {
      message =
        "🔄 <strong>Shake the last one off, Nate:</strong> The adaptive engine stepped the difficulty down so you can grab your footing right back. Focus on XABC for this patient.";
    } else {
      message = `🎯 <strong>Patient ${qNum} of ${totalQ}:</strong> Read the last sentence of the prompt first, rule out 2 distractors with right-click ✂ Strike, and trust your gut.`;
    }

    checkinEl.innerHTML = message;
  }

  function renderQuestionStemText() {
    const stemEl = document.getElementById("exam-question-stem");
    if (!stemEl || !state.activeSession || !state.activeSession.currentQuestion) return;
    const rawStem = state.activeSession.currentQuestion.stem;
    if (state.focusHighlightStem) {
      stemEl.innerHTML = formatStemWithFocusHighlights(rawStem);
    } else {
      stemEl.textContent = rawStem;
    }
  }

  function renderCurrentExamQuestion() {
    const session = state.activeSession;
    if (!session || !session.currentQuestion) return;

    const q = session.currentQuestion;
    const qNum = session.responses.length + 1;
    const totalQ = session.totalQuestions;

    state.selectedOptionIndex = null;
    state.struckOutOptions.clear();
    state.questionStartTime = Date.now();

    // Header question counter & progress bar
    const counterEl = document.getElementById("vue-question-counter");
    if (counterEl) {
      counterEl.textContent = `Question ${qNum} of ${totalQ}`;
    }

    const progressFill = document.getElementById("exam-progress-fill");
    if (progressFill) {
      const pct = ((qNum - 1) / totalQ) * 100;
      progressFill.style.width = `${pct}%`;
    }

    // Meta row inside workspace
    const metaLeftEl = document.getElementById("exam-meta-left");
    if (metaLeftEl) {
      metaLeftEl.innerHTML = `<strong>Item ${qNum} of ${totalQ}</strong> &nbsp;•&nbsp; ID: <code>${escapeHtml(q.id)}</code>`;
    }

    updateNateExamCheckin();
    updateLiveCatHud();
    renderQuestionStemText();

    // Options A, B, C, D
    const letters = ["A", "B", "C", "D"];
    const optionsContainer = document.getElementById("exam-options-container");
    if (optionsContainer) {
      optionsContainer.innerHTML = q.options
        .map(
          (optText, idx) => `
        <div class="exam-option-row">
          <div class="exam-option-card" data-opt-idx="${idx}" id="option-card-${idx}">
            <div class="option-radio-circle">${letters[idx]}</div>
            <div class="option-text">
              <span class="option-letter">${letters[idx]}.</span> ${escapeHtml(optText)}
            </div>
          </div>
          <button type="button" class="btn-strikeout" data-strike-idx="${idx}" id="btn-strike-${idx}" title="Cross out eliminated answer choice (or right-click / long-press the option)" aria-label="Cross out answer ${letters[idx]}">
            ✂<span class="lbl-long">&nbsp;Strike</span>
          </button>
        </div>
      `
        )
        .join("");

      // Bind click and right-click (contextmenu) events on options
      optionsContainer.querySelectorAll(".exam-option-card").forEach((card) => {
        const idx = Number(card.getAttribute("data-opt-idx"));
        // Long-press (about half a second) crosses out an answer on phones. iOS Safari never fires
        // "contextmenu" for a long-press, so it is handled with touch events, and the click that
        // follows the press is swallowed so the struck answer is not immediately selected.
        let pressTimer = null;
        let pressStart = null;
        let suppressClick = false;
        const cancelPress = () => {
          clearTimeout(pressTimer);
          pressTimer = null;
        };
        card.addEventListener(
          "touchstart",
          (e) => {
            const t = e.touches[0];
            pressStart = { x: t.clientX, y: t.clientY };
            suppressClick = false;
            cancelPress();
            pressTimer = setTimeout(() => {
              pressTimer = null;
              suppressClick = true;
              toggleStrikeout(idx);
              if (navigator.vibrate) navigator.vibrate(15);
            }, 500);
          },
          { passive: true }
        );
        card.addEventListener(
          "touchmove",
          (e) => {
            const t = e.touches[0];
            if (pressStart && Math.hypot(t.clientX - pressStart.x, t.clientY - pressStart.y) > 10) {
              cancelPress(); // the finger is scrolling, not pressing
            }
          },
          { passive: true }
        );
        card.addEventListener("touchend", cancelPress);
        card.addEventListener("touchcancel", cancelPress);
        card.addEventListener("click", () => {
          if (suppressClick) {
            suppressClick = false;
            return;
          }
          selectOption(idx);
        });
        card.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          // Android also fires contextmenu on long-press; the touch timer already handled it.
          if (suppressClick || pressTimer) {
            cancelPress();
            if (!suppressClick) {
              suppressClick = true;
              toggleStrikeout(idx);
            }
            return;
          }
          toggleStrikeout(idx);
        });
      });

      optionsContainer.querySelectorAll(".btn-strikeout").forEach((btn) => {
        const idx = Number(btn.getAttribute("data-strike-idx"));
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleStrikeout(idx);
        });
      });
    }

    // Next button label (Final Question says "Submit Exam")
    const btnNext = document.getElementById("btn-exam-next");
    if (btnNext) {
      btnNext.innerHTML =
        qNum === totalQ ? `Finish &amp; See Progress (${totalQ}/${totalQ}) &#9654;` : `Next &#9654;`;
    }
  }

  function selectOption(index) {
    state.selectedOptionIndex = index;
    // If the user selects an option that was struck out, un-strike it automatically
    if (state.struckOutOptions.has(index)) {
      state.struckOutOptions.delete(index);
    }
    refreshOptionVisualState();
  }

  function toggleStrikeout(index) {
    if (state.struckOutOptions.has(index)) {
      state.struckOutOptions.delete(index);
    } else {
      state.struckOutOptions.add(index);
      if (state.selectedOptionIndex === index) {
        state.selectedOptionIndex = null;
      }
    }
    refreshOptionVisualState();
  }

  function refreshOptionVisualState() {
    for (let i = 0; i < 4; i++) {
      const card = document.getElementById(`option-card-${i}`);
      const strikeBtn = document.getElementById(`btn-strike-${i}`);
      if (card) {
        card.classList.toggle("selected", state.selectedOptionIndex === i);
        card.classList.toggle("struck-out", state.struckOutOptions.has(i));
      }
      if (strikeBtn) {
        strikeBtn.classList.toggle("active", state.struckOutOptions.has(i));
      }
    }
  }

  function handleNextQuestion() {
    if (!state.activeSession || state.activeSession.isCompleted) return;

    // Authentic Pearson VUE validation: cannot leave a CAT question blank!
    if (state.selectedOptionIndex === null) {
      showModal({
        title: "Select an Answer Choice",
        bodyHtml: `
          <div style="display:flex;align-items:flex-start;gap:0.85rem;">
            <div style="font-size:1.6rem;line-height:1;">💡</div>
            <div>
              <p style="font-weight:700;margin-bottom:0.4rem;">Take your best clinical shot before advancing, Nate!</p>
              <p style="color:var(--vue-text-muted);font-size:0.9rem;">
                On the NREMT Computer Adaptive Test (CAT), every question requires an answer so the engine can adapt the next item. Cross out choices you know are wrong with <strong>✂ Strike</strong> and pick your best answer!
              </p>
            </div>
          </div>
        `,
        confirmText: "Got It",
        hideCancel: true
      });
      return;
    }

    const timeSpentSec = Math.max(
      1,
      Math.round((Date.now() - state.questionStartTime) / 1000)
    );
    engine.submitAnswer(state.activeSession, state.selectedOptionIndex, timeSpentSec);

    if (state.activeSession.isCompleted) {
      stopTimer();
      state.activeReport = state.activeSession.report;
      state.activeSession = null;
      renderDiagnosticReport(state.activeReport);
      showView("results");
    } else {
      renderCurrentExamQuestion();
    }
  }

  function handleTimeExpired() {
    if (!state.activeSession) return;
    showModal({
      title: "Time Expired",
      bodyHtml: `
        <p><strong>Your session timer has finished, Nate.</strong></p>
        <p style="margin-top:0.5rem;color:var(--vue-text-muted);">
          ${
            state.activeSession.totalQuestions - state.activeSession.responses.length > 0
              ? `You answered ${state.activeSession.responses.length} of ${state.activeSession.totalQuestions}. Just like the real NREMT, unanswered questions count as missed, so this attempt can't pass. Everything you did answer is still saved to your mastery bank.`
              : "Every question you answered has been saved to your mastery bank and scored for your study report!"
          }
        </p>
      `,
      confirmText: "View Progress & Diagnostic Report",
      hideCancel: true,
      onConfirm: () => {
        state.activeSession.endReason = "timeout";
        const report = engine.finalizeSession(state.activeSession);
        state.activeSession = null;
        if (report) {
          state.activeReport = report;
          renderDiagnosticReport(report);
          showView("results");
        } else {
          renderLobby();
          showView("lobby");
        }
      }
    });
  }

  function handleEndExamEarly() {
    if (!state.activeSession) return;
    const answeredCount = state.activeSession.responses.length;
    showModal({
      title: "End Session Early?",
      bodyHtml: `
        <p>You have answered <strong>${answeredCount} of ${state.activeSession.totalQuestions}</strong> questions so far, Nate.</p>
        <p style="margin-top:0.5rem;color:var(--vue-text-muted);font-size:0.88rem;">
          ${
            answeredCount > 0
              ? "All " +
                answeredCount +
                " questions you answered are already saved to your mastery progress. Heads up: like the real NREMT, the " +
                (state.activeSession.totalQuestions - answeredCount) +
                " unanswered questions will count as missed, so an unfinished exam can't pass. Want to see your breakdown anyway?"
              : "Return to your main dashboard?"
          }
        </p>
      `,
      confirmText: answeredCount > 0 ? `Score ${answeredCount} Answered Items` : "Exit to Lobby",
      cancelText: "Keep Going",
      onConfirm: () => {
        stopTimer();
        if (answeredCount > 0) {
          state.activeSession.endReason = "ended-early";
          const report = engine.finalizeSession(state.activeSession);
          state.activeSession = null;
          state.activeReport = report;
          renderDiagnosticReport(report);
          showView("results");
        } else {
          engine.clearActiveSession();
          state.activeSession = null;
          renderLobby();
          showView("lobby");
        }
      }
    });
  }

  // ============================================================================
  // VIEW 3: DIAGNOSTIC SCORE REPORT, NATE DEBRIEF & STUDY PLAN RENDERER
  // ============================================================================
  function renderNatePostExamCoaching(report) {
    const coachEl = document.getElementById("nate-results-coaching");
    if (!coachEl || !report) return;

    const nateStats = engine.getNateProgressStats();
    const hardStat = report.byDifficulty[3] || { correct: 0, total: 0, accuracy: 0 };
    const newlyMastered = report.newlyMasteredCount || 0;
    const comebacks = report.comebackWinsCount || 0;
    const newSeen = report.newQuestionsSeenCount || 0;

    let headline = "";
    let bodyText = "";

    const unanswered = report.unansweredCount || 0;
    if (unanswered > 0) {
      const why = report.endReason === "timeout" ? "The clock ran out" : "You ended the exam";
      headline = `⏱️ ${why} with ${unanswered} question${unanswered === 1 ? "" : "s"} unanswered`;
      bodyText = `On the real NREMT, running out of time before finishing means you can't pass, so those ${unanswered} count as missed here too. The good news: you went ${report.totalCorrect} for ${report.totalAsked} on the questions you did answer (${report.rawAccuracy}%), and they're all banked. Next time, aim to finish: about 70 seconds per question keeps you on pace${report.mode === "sprint" ? "" : ", and a 10-Question Sprint is a great way to practice pacing"}.`;
    } else if (report.passed) {
      headline = `🔥 Huge run, Nate! You hit ${report.scaledScore} (Above the 950 Passing Standard)!`;
      bodyText = `You answered ${report.totalCorrect} of ${report.totalAsked} correctly (${report.rawAccuracy}%) and forced the adaptive engine into ${hardStat.total} Hard-tier clinical scenarios (nailing ${hardStat.correct} of them). That's real NREMT readiness showing up.`;
    } else if (report.scaledScore >= 850) {
      headline = `💪 Knocking right on the door, Nate (${report.scaledScore} / 950)!`;
      bodyText = `You are super close to the 950 passing line—just 2 or 3 clinical traps away! Even better, you added +${newlyMastered} newly mastered questions to your permanent bank today (now ${nateStats.uniqueMasteredCount} / ${nateStats.totalBankSize} mastered overall).`;
    } else {
      headline = `🧱 Solid reps banked, Nate! (+${newlyMastered} New Questions Mastered)`;
      bodyText = `Don't let the scaled number stress you out for a second: the whole point of practice is finding the sneaky traps NOW so they don't get you on test day. You unlocked ${newSeen} brand-new scenarios and permanently mastered ${newlyMastered} more items (bringing your total mastered bank to ${nateStats.uniqueMasteredCount} of ${nateStats.totalBankSize}).`;
    }

    const badgesHtml = [
      `<span class="nate-debrief-chip">✓ +${newlyMastered} Newly Mastered</span>`,
      `<span class="nate-debrief-chip">🧭 ${nateStats.uniqueSeenCount}/${nateStats.totalBankSize} Total Bank Explored</span>`,
      hardStat.total > 0
        ? `<span class="nate-debrief-chip">⛰️ Reached ${hardStat.total} Hard-Tier Qs (${hardStat.correct} right)</span>`
        : "",
      comebacks > 0
        ? `<span class="nate-debrief-chip">★ ${comebacks} Comeback Win${comebacks === 1 ? "" : "s"}!</span>`
        : "",
      `<span class="nate-debrief-chip">${nateStats.currentRank.badge}</span>`
    ]
      .filter(Boolean)
      .join("");

    coachEl.innerHTML = `
      <div class="nate-debrief-header">
        <strong>${headline}</strong>
      </div>
      <p class="nate-debrief-body">${escapeHtml(bodyText)}</p>
      <div class="nate-debrief-chips">${badgesHtml}</div>
      <div class="nate-debrief-ActionTip">
        💡 <strong>Nate's 3-Minute Next Step:</strong> Scroll down to <em>"Study Pearls from Missed Questions"</em> and read just the yellow takeaways for the ${report.totalIncorrect} item${
      report.totalIncorrect === 1 ? "" : "s"
    } you missed. Once you see the "why," you own those questions next time!
      </div>
    `;
  }

  function renderDiagnosticReport(report) {
    if (!report) return;

    const isSprint = report.mode === "sprint"; // not inferred from answers: an unfinished exam is still an exam

    // 1. Top Banner & Scaled Score
    const bannerEl = document.getElementById("report-banner");
    if (bannerEl) {
      bannerEl.classList.remove("banner-pass", "banner-fail");
      bannerEl.classList.add(report.passed ? "banner-pass" : "banner-fail");
    }

    const statusPillEl = document.getElementById("report-status-pill");
    if (statusPillEl) {
      statusPillEl.className = `status-pill-large ${report.passed ? "pass" : "fail"}`;
      statusPillEl.innerHTML =
        report.unansweredCount > 0
          ? `⏱️ INCOMPLETE — ${report.unansweredCount} UNANSWERED, SCORED AS MISSED`
          : report.passed
          ? `✓ ABOVE PASSING STANDARD — PASSED PACE`
          : `📈 BUILDING MASTERY — FOCUS REVIEW BELOW`;
    }

    const headlineEl = document.getElementById("report-headline");
    if (headlineEl) {
      headlineEl.textContent =
        report.unansweredCount > 0
          ? `Not a pass yet, Nate. You answered ${report.totalAsked} of ${report.totalQuestions}, and finishing the exam is part of passing.`
          : report.passed
          ? `Great job, Nate! Your adaptive performance exceeded the 950 NREMT passing standard.`
          : `Good reps, Nate! Every question you just saw moved your mastery bank forward.`;
    }

    const subheadlineEl = document.getElementById("report-subheadline");
    if (subheadlineEl) {
      const poolStats = engine.getQuestionPoolStats();
      subheadlineEl.textContent = `Session #${report.attemptNumber} (${
        isSprint ? "10-Question Focus Sprint" : "35-Question Practice Exam"
      }) • Completed ${formatDateShort(report.completedAt)} • ${
        poolStats.unseenCount
      } unseen questions left in pool`;
    }

    const scaledNumEl = document.getElementById("report-scaled-score");
    if (scaledNumEl) {
      scaledNumEl.textContent = report.scaledScore;
    }

    // Position the user pin on the 100-1500 scale bar
    const userPinEl = document.getElementById("scale-user-pin");
    if (userPinEl) {
      const pct = Math.max(2, Math.min(98, ((report.scaledScore - 100) / 1400) * 100));
      userPinEl.style.left = `${pct}%`;
      userPinEl.title = `Your Scaled Score: ${report.scaledScore} (Passing: 950)`;
    }

    // Render Nate's Personalized Post-Exam Coaching Card
    renderNatePostExamCoaching(report);

    // 2. KPI Summary Cards
    const kpiGridEl = document.getElementById("report-kpi-grid");
    if (kpiGridEl) {
      const easyStat = report.byDifficulty[1] || { correct: 0, total: 0, accuracy: 0 };
      const medStat = report.byDifficulty[2] || { correct: 0, total: 0, accuracy: 0 };
      const hardStat = report.byDifficulty[3] || { correct: 0, total: 0, accuracy: 0 };
      const avgSecPerQ =
        report.totalAsked > 0 ? Math.round(report.elapsedSeconds / report.totalAsked) : 0;

      kpiGridEl.innerHTML = `
        <div class="kpi-card">
          <div class="kpi-title">Raw Accuracy</div>
          <div class="kpi-val">${report.totalCorrect} / ${report.totalAsked} (${report.rawAccuracy}%)</div>
          <div class="kpi-sub">${
            report.unansweredCount > 0
              ? `On answered questions • ${report.unansweredCount} unanswered (scored as missed)`
              : `Final IRT Ability θ = ${report.finalTheta >= 0 ? "+" : ""}${report.finalTheta}`
          }</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-title">Easy Tier Performance</div>
          <div class="kpi-val">${easyStat.correct} / ${easyStat.total} (${easyStat.accuracy}%)</div>
          <div class="kpi-sub">Foundational recall & BLS rules</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-title">Medium Tier Performance</div>
          <div class="kpi-val">${medStat.correct} / ${medStat.total} (${medStat.accuracy}%)</div>
          <div class="kpi-sub">Clinical application & assessment</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-title">Hard Tier Performance</div>
          <div class="kpi-val">${hardStat.correct} / ${hardStat.total} (${hardStat.accuracy}%)</div>
          <div class="kpi-sub">Complex judgment & subtle traps</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-title">Pacing & Time</div>
          <div class="kpi-val">${formatDuration(report.elapsedSeconds)}</div>
          <div class="kpi-sub">Avg ${avgSecPerQ}s per question</div>
        </div>
      `;
    }

    // 3. Render Interactive CAT Trajectory SVG Chart
    renderCatTrajectoryChart(report);

    // 4. Render Official 5-Domain Performance Breakdown
    const domainListEl = document.getElementById("report-domain-list");
    if (domainListEl) {
      domainListEl.innerHTML = report.domainBreakdown
        .map(
          (d) => `
        <div class="domain-perf-item">
          <div class="domain-perf-top">
            <div class="domain-perf-title">
              <span class="domain-dot" style="background:${d.color};"></span>
              ${escapeHtml(d.domain)}
              <span style="font-weight:400;font-size:0.8rem;color:var(--vue-text-muted);">
                (Exam Weight: ${escapeHtml(d.examWeight)})
              </span>
            </div>
            <div style="display:flex;align-items:center;gap:0.65rem;">
              <strong style="font-size:0.9rem;">${d.correct} / ${d.total} (${d.accuracy}%)</strong>
              <span class="comp-badge ${d.statusClass}">${escapeHtml(d.status)}</span>
            </div>
          </div>
          <div class="domain-bar-track">
            <div class="domain-bar-fill" style="width:${d.accuracy}%;background:${
            d.statusClass === "status-above"
              ? "#16a34a"
              : d.statusClass === "status-near"
              ? "#d97706"
              : "#dc2626"
          };"></div>
          </div>
          <div style="font-size:0.8rem;color:var(--vue-text-muted);margin-top:0.35rem;">
            ${
              d.missedSubtopics.length > 0
                ? `<strong>Focus Subtopics to Review:</strong> ${d.missedSubtopics.map(escapeHtml).join(" • ")}`
                : `✓ 100% mastery across all questions tested in this domain on this session.`
            }
          </div>
        </div>
      `
        )
        .join("");
    }

    // 5. Render "What You Should Focus Learning On More" Diagnostic Study Coach
    renderStudyFocusSection(report);

    // 6. Populate Domain Filter dropdown and Render Question Review
    const filterDomainEl = document.getElementById("filter-review-domain");
    if (filterDomainEl) {
      filterDomainEl.innerHTML =
        `<option value="all">All Domains (5)</option>` +
        engine.DOMAIN_BLUEPRINT.map(
          (d) => `<option value="${escapeHtml(d.name)}">${escapeHtml(d.name)}</option>`
        ).join("");
    }
    state.reviewFilterStatus = "all";
    state.reviewFilterDomain = "all";
    state.reviewFilterDifficulty = "all";
    renderQuestionReviewList(report);
  }

  function renderCatTrajectoryChart(report) {
    const container = document.getElementById("cat-chart-container");
    if (!container) return;

    const responses = report.responses || [];
    if (responses.length === 0) {
      container.innerHTML = "";
      return;
    }

    const width = 860;
    const height = 220;
    const padLeft = 75;
    const padRight = 30;
    const padTop = 25;
    const padBottom = 38;
    const plotW = width - padLeft - padRight;
    const plotH = height - padTop - padBottom;

    // Y-axis maps difficulty 1 (Easy) at bottom, 2 (Medium) at middle, 3 (Hard) at top
    const yForTier = (tier) => {
      const norm = (tier - 1) / 2; // 0 to 1
      return padTop + plotH * (0.85 - norm * 0.7);
    };

    const xForIdx = (idx) => {
      if (responses.length <= 1) return padLeft + plotW / 2;
      return padLeft + (idx / (responses.length - 1)) * plotW;
    };

    // Polyline connecting question difficulty steps
    const pointsStr = responses
      .map((r, i) => `${xForIdx(i).toFixed(1)},${yForTier(r.difficulty).toFixed(1)}`)
      .join(" ");

    // Horizontal grid lines for Easy, Medium, Hard
    const yEasy = yForTier(1);
    const yMed = yForTier(2);
    const yHard = yForTier(3);

    const circlesHtml = responses
      .map((r, i) => {
        const cx = xForIdx(i).toFixed(1);
        const cy = yForTier(r.difficulty).toFixed(1);
        const fill = r.isCorrect ? "#16a34a" : "#dc2626";
        const title = `Q${r.questionNumber} (${r.questionId}) — ${r.difficultyLabel} (${r.domain}): ${
          r.isCorrect ? "CORRECT" : "INCORRECT"
        }\n${r.adaptationReason}`;
        return `
          <g class="cat-node" style="cursor:pointer;" data-qnum="${r.questionNumber}">
            <circle cx="${cx}" cy="${cy}" r="6" fill="${fill}" stroke="#ffffff" stroke-width="2">
              <title>${escapeHtml(title)}</title>
            </circle>
            ${
              i % 2 === 0 || responses.length <= 20
                ? `<text x="${cx}" y="${height - 12}" text-anchor="middle" font-size="10" fill="#64748b">${r.questionNumber}</text>`
                : ""
            }
          </g>
        `;
      })
      .join("");

    container.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" class="cat-svg" role="img" aria-label="Computer Adaptive Testing Difficulty Progression Chart">
        <!-- Tier Grid Lines -->
        <line x1="${padLeft}" y1="${yHard}" x2="${width - padRight}" y2="${yHard}" stroke="#fca5a5" stroke-dasharray="4 4" stroke-width="1" />
        <line x1="${padLeft}" y1="${yMed}" x2="${width - padRight}" y2="${yMed}" stroke="#cbd5e1" stroke-dasharray="4 4" stroke-width="1" />
        <line x1="${padLeft}" y1="${yEasy}" x2="${width - padRight}" y2="${yEasy}" stroke="#86efac" stroke-dasharray="4 4" stroke-width="1" />

        <!-- Y-Axis Labels -->
        <text x="${padLeft - 10}" y="${yHard + 4}" text-anchor="end" font-size="11" font-weight="700" fill="#991b1b">HARD (3)</text>
        <text x="${padLeft - 10}" y="${yMed + 4}" text-anchor="end" font-size="11" font-weight="700" fill="#92400e">MEDIUM (2)</text>
        <text x="${padLeft - 10}" y="${yEasy + 4}" text-anchor="end" font-size="11" font-weight="700" fill="#166534">EASY (1)</text>

        <!-- Difficulty Step Polyline -->
        <polyline fill="none" stroke="#0284c7" stroke-width="2.5" points="${pointsStr}" />

        <!-- Question Nodes (Green = Correct -> Next Steps Up, Red = Incorrect -> Next Steps Down) -->
        ${circlesHtml}
      </svg>
      <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;font-size:0.78rem;color:var(--vue-text-muted);margin-top:0.3rem;">
        <div>
          <strong style="color:#16a34a;">● Correct Answer</strong> (steps UP next question difficulty) &nbsp;&nbsp;
          <strong style="color:#dc2626;">● Incorrect Answer</strong> (steps DOWN next question difficulty)
        </div>
        <div>Click any point on the graph to jump to that question's clinical review below.</div>
      </div>
    `;

    container.querySelectorAll(".cat-node").forEach((node) => {
      node.addEventListener("click", () => {
        const qnum = node.getAttribute("data-qnum");
        const targetCard = document.getElementById(`review-q-${qnum}`);
        if (targetCard) {
          targetCard.classList.add("is-open"); // expand it if it was collapsed on a phone
          targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    });
  }

  function renderStudyFocusSection(report) {
    const adaptiveNarrativeEl = document.getElementById("study-adaptive-narrative");
    if (adaptiveNarrativeEl) {
      adaptiveNarrativeEl.textContent = report.adaptiveAnalysis;
    }

    // Weak Subtopics Grid
    const subtopicsContainer = document.getElementById("study-weak-subtopics");
    if (subtopicsContainer) {
      if (!report.weakSubtopics || report.weakSubtopics.length === 0) {
        subtopicsContainer.innerHTML = `
          <div style="padding:1rem;background:var(--pass-bg);color:var(--pass-green);border-radius:6px;font-weight:600;">
            Perfect Run, Nate! You didn't miss a single subtopic on this session.
          </div>
        `;
      } else {
        subtopicsContainer.innerHTML = report.weakSubtopics
          .slice(0, 8)
          .map(
            (s, i) => `
          <div class="focus-subtopic-card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.25rem;">
              <span style="font-size:0.72rem;font-weight:800;text-transform:uppercase;color:var(--fail-red);">
                Priority #${i + 1} Focus Area
              </span>
              <span style="font-size:0.76rem;font-weight:700;color:var(--vue-text-muted);">
                ${s.correct}/${s.total} Correct (${s.missedQuestions.length} Missed)
              </span>
            </div>
            <div style="font-weight:700;font-size:0.96rem;margin-bottom:0.2rem;">
              ${escapeHtml(s.subtopic)}
            </div>
            <div style="font-size:0.78rem;color:var(--vue-text-muted);">
              Domain: ${escapeHtml(s.domain)} • Missed IDs: <code>${s.missedQuestions.map(escapeHtml).join(", ")}</code>
            </div>
          </div>
        `
          )
          .join("");
      }
    }

    // Patient Population Breakdown (Adult vs Pediatric vs Obstetric vs Operations)
    const popContainer = document.getElementById("study-population-breakdown");
    if (popContainer && report.byPatientType) {
      popContainer.innerHTML = report.byPatientType
        .map(
          (p) => `
        <div class="spec-item">
          <div class="spec-label">${escapeHtml(p.type)} Scenarios</div>
          <div class="spec-value">${p.correct} / ${p.total} (${p.accuracy}%)</div>
        </div>
      `
        )
        .join("");
    }

    // Targeted Study Pearls from Missed Questions
    const pearlsContainer = document.getElementById("study-pearls-list");
    if (pearlsContainer) {
      if (!report.targetedStudyPearls || report.targetedStudyPearls.length === 0) {
        pearlsContainer.innerHTML = `<p style="color:var(--vue-text-muted);font-size:0.9rem;">No missed clinical pearls to review!</p>`;
      } else {
        pearlsContainer.innerHTML = report.targetedStudyPearls
          .map(
            (p) => `
          <div class="pearl-item">
            <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.3rem;font-size:0.76rem;color:var(--vue-text-muted);">
              <span><strong>Question #${p.questionNumber} (${escapeHtml(p.questionId)})</strong> — ${escapeHtml(
              p.domain
            )} (${escapeHtml(p.subtopic)})</span>
              <span class="diff-badge diff-${
                p.difficultyLabel === "Easy" ? 1 : p.difficultyLabel === "Medium" ? 2 : 3
              }">${escapeHtml(p.difficultyLabel)}</span>
            </div>
            <div style="white-space:pre-line;"><strong>Clinical Pearl:</strong> ${escapeHtml(p.studyTip)}</div>
          </div>
        `
          )
          .join("");
      }
    }
  }

  function renderQuestionReviewList(report) {
    const listEl = document.getElementById("review-questions-list");
    const countLabelEl = document.getElementById("review-count-label");
    if (!listEl || !report) return;

    const filtered = (report.responses || []).filter((r) => {
      if (state.reviewFilterStatus === "incorrect" && r.isCorrect) return false;
      if (state.reviewFilterStatus === "correct" && !r.isCorrect) return false;
      if (state.reviewFilterDomain !== "all" && r.domain !== state.reviewFilterDomain) return false;
      if (
        state.reviewFilterDifficulty !== "all" &&
        String(r.difficulty) !== String(state.reviewFilterDifficulty)
      ) {
        return false;
      }
      return true;
    });

    if (countLabelEl) {
      countLabelEl.textContent = `Showing ${filtered.length} of ${report.responses.length} questions`;
    }

    if (filtered.length === 0) {
      listEl.innerHTML = `
        <div style="padding:1.5rem;text-align:center;color:var(--vue-text-muted);background:var(--vue-panel);border:1px solid var(--vue-border);border-radius:6px;">
          No questions match the selected filter criteria.
        </div>
      `;
      return;
    }

    const letters = ["A", "B", "C", "D"];
    listEl.innerHTML = filtered
      .map((r) => {
        const optionsHtml = r.options
          .map((optText, idx) => {
            let cls = "review-opt";
            let tag = "";
            if (idx === r.correctIndex) {
              cls += " opt-correct";
              tag = ` &nbsp;<strong>✓ [Correct Answer]</strong>`;
            } else if (idx === r.selectedIndex && !r.isCorrect) {
              cls += " opt-user-wrong";
              tag = ` &nbsp;<strong>✕ [Your Answer]</strong>`;
            }
            if (idx === r.selectedIndex && r.isCorrect) {
              tag = ` &nbsp;<strong>✓ [Your Answer — Correct]</strong>`;
            }
            return `
              <div class="${cls}">
                <strong>${letters[idx]}.</strong> ${escapeHtml(optText)}${tag}
              </div>
            `;
          })
          .join("");

        return `
          <div class="review-card ${r.isCorrect ? "review-correct" : "review-incorrect is-open"}" id="review-q-${
          r.questionNumber
        }">
            <div class="review-card-header" role="button" tabindex="0" aria-expanded="${!r.isCorrect}">
              <div>
                <strong>Question ${r.questionNumber}</strong> (<code>${escapeHtml(r.questionId)}</code>)
                <span class="source-badge source-${escapeHtml(String(r.source || "Custom").toLowerCase())}" title="Who wrote this question">Written by ${escapeHtml(r.source || "Custom")}</span>
                &nbsp;•&nbsp; <strong>${escapeHtml(r.domain)}</strong> — ${escapeHtml(r.subtopic)}
              </div>
              <div style="display:flex;align-items:center;gap:0.5rem;">
                <span class="diff-badge diff-${r.difficulty}">${escapeHtml(r.difficultyLabel)}</span>
                <span class="comp-badge ${r.isCorrect ? "status-above" : "status-below"}">
                  ${r.isCorrect ? "✓ Correct" : "✕ Incorrect"}
                </span>
              </div>
            </div>
            <div class="review-card-body">
              <div style="font-weight:500;font-size:1rem;white-space:pre-line;">${escapeHtml(r.stem)}</div>
              <div class="review-options">${optionsHtml}</div>
              <div class="review-rationale">
                <div style="margin-bottom:0.45rem;">
                  <strong>NREMT Clinical Rationale:</strong> ${escapeHtml(r.explanation)}
                </div>
                <div style="color:var(--vue-accent);font-weight:600;white-space:pre-line;">
                  💡 <strong>Study Takeaway:</strong> ${escapeHtml(r.studyTip)}
                </div>
                ${
                  r.reviewNote
                    ? `<div style="margin-top:0.45rem;font-size:0.78rem;color:var(--vue-text-muted);font-style:italic;">📝 ${escapeHtml(r.reviewNote)}</div>`
                    : ""
                }
                <div style="margin-top:0.45rem;font-size:0.76rem;color:var(--vue-text-muted);">
                  CAT Transition: ${escapeHtml(r.adaptationReason)} (Ability θ: ${r.thetaBefore} → ${
          r.thetaAfter
        })
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    // On phones, review cards collapse to their header (missed questions start open).
    // Tapping a header toggles its card; on wider screens every card is always fully shown.
    listEl.querySelectorAll(".review-card-header").forEach((header) => {
      const toggle = () => {
        const card = header.closest(".review-card");
        const open = card.classList.toggle("is-open");
        header.setAttribute("aria-expanded", String(open));
      };
      header.addEventListener("click", toggle);
      header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  // ============================================================================
  // MODALS (PEARSON VUE DIALOGS, HELP & ADD CUSTOM QUESTION)
  // ============================================================================
  function showModal(config) {
    const backdrop = document.getElementById("vue-modal-backdrop");
    const titleEl = document.getElementById("vue-modal-title");
    const bodyEl = document.getElementById("vue-modal-body");
    const btnConfirm = document.getElementById("vue-modal-confirm");
    const btnCancel = document.getElementById("vue-modal-cancel");

    if (!backdrop || !titleEl || !bodyEl || !btnConfirm || !btnCancel) return;

    titleEl.textContent = config.title || "Notification";
    bodyEl.innerHTML = config.bodyHtml || "";
    btnConfirm.textContent = config.confirmText || "OK";
    btnCancel.textContent = config.cancelText || "Cancel";
    btnCancel.classList.toggle("hidden", Boolean(config.hideCancel));

    const closeModal = () => {
      backdrop.classList.add("hidden");
      btnConfirm.onclick = null;
      btnCancel.onclick = null;
    };

    btnConfirm.onclick = () => {
      if (config.onConfirm) {
        const shouldKeepOpen = config.onConfirm();
        if (shouldKeepOpen === true) return;
      }
      closeModal();
    };

    btnCancel.onclick = () => {
      if (config.onCancel) config.onCancel();
      closeModal();
    };

    backdrop.classList.remove("hidden");
  }

  function showExamInstructionsModal() {
    showModal({
      title: "NREMT Adaptive Practice & Focus Tools — Guide for Nate",
      bodyHtml: `
        <div style="display:flex;flex-direction:column;gap:0.75rem;font-size:0.9rem;">
          <p><strong>1. Dynamic Computer Adaptive Testing (CAT):</strong> Just like the official NREMT Cognitive Exam, question difficulty adapts after every answer. Answering an <em>Easy</em> question correctly steps up to <em>Medium</em>; answering <em>Medium</em> correctly steps up to <em>Hard</em>. If questions start feeling super tough, that's a GOOD sign—it means you're climbing!</p>
          <p><strong>2. 🎯 Focus Highlighter:</strong> Click <strong>🎯 Focus Highlighter</strong> in the top bar anytime your eyes feel tired—it highlights vital signs, patient ages, and priority words (<em>FIRST, MOST, BEST</em>) so you can scan scenarios quickly.</p>
          <p><strong>3. 🧘 60-Second Breather:</strong> Click <strong>🧘 Take a 60s Breather</strong> to pause the clock whenever you feel distracted or overwhelmed.</p>
          <p><strong>4. ✂ Distractor Strikeout &amp; Shortcuts:</strong> Right-click any answer choice (or click <strong>✂ Strike</strong>) to cross out wrong options. Press <code>A</code>–<code>D</code> or <code>1</code>–<code>4</code> to select an option, and <code>Enter</code> for Next.</p>
        </div>
      `,
      confirmText: "Resume Exam",
      hideCancel: true
    });
  }

  function openAddCustomQuestionModal() {
    const allQs = engine.getAllQuestions();
    const existingIds = new Set(allQs.map((q) => q.id));
    let nextNum = allQs.filter((q) => String(q.id).startsWith("CUST-")).length + 1;
    while (existingIds.has(`CUST-${String(nextNum).padStart(3, "0")}`)) nextNum++;
    const defaultId = `CUST-${String(nextNum).padStart(3, "0")}`;

    showModal({
      title: "Add Custom NREMT Question to Bank",
      bodyHtml: `
        <div class="form-group">
          <label>Domain</label>
          <select id="cust-domain" class="form-select">
            ${engine.DOMAIN_BLUEPRINT.map(
              (d) => `<option value="${escapeHtml(d.name)}">${escapeHtml(d.name)}</option>`
            ).join("")}
          </select>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.65rem;">
          <div class="form-group">
            <label>Difficulty Tier</label>
            <select id="cust-diff" class="form-select">
              <option value="1">1 — Easy</option>
              <option value="2" selected>2 — Medium</option>
              <option value="3">3 — Hard</option>
            </select>
          </div>
          <div class="form-group">
            <label>Patient Type</label>
            <select id="cust-ptype" class="form-select">
              <option value="Adult">Adult</option>
              <option value="Pediatric">Pediatric</option>
              <option value="Obstetric">Obstetric</option>
              <option value="Operations">Operations</option>
            </select>
          </div>
          <div class="form-group">
            <label>Subtopic</label>
            <input type="text" id="cust-subtopic" class="form-input" placeholder="e.g. Airway Management" value="Clinical Judgment" />
          </div>
        </div>
        <div class="form-group">
          <label>Clinical Scenario Question Stem</label>
          <textarea id="cust-stem" class="form-textarea" placeholder="Enter realistic NREMT clinical scenario and question prompt..."></textarea>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;">
          <div class="form-group">
            <label>Option A</label>
            <input type="text" id="cust-opt-0" class="form-input" placeholder="Choice A" />
          </div>
          <div class="form-group">
            <label>Option B</label>
            <input type="text" id="cust-opt-1" class="form-input" placeholder="Choice B" />
          </div>
          <div class="form-group">
            <label>Option C</label>
            <input type="text" id="cust-opt-2" class="form-input" placeholder="Choice C" />
          </div>
          <div class="form-group">
            <label>Option D</label>
            <input type="text" id="cust-opt-3" class="form-input" placeholder="Choice D" />
          </div>
        </div>
        <div class="form-group">
          <label>Correct Option</label>
          <select id="cust-correct" class="form-select">
            <option value="0">Option A</option>
            <option value="1">Option B</option>
            <option value="2">Option C</option>
            <option value="3">Option D</option>
          </select>
        </div>
        <div class="form-group">
          <label>Clinical Rationale / Explanation</label>
          <textarea id="cust-explanation" class="form-textarea" placeholder="Explain why the correct answer is right and why distractors are wrong..."></textarea>
        </div>
        <div class="form-group">
          <label>High-Yield Study Tip</label>
          <input type="text" id="cust-tip" class="form-input" placeholder="Key takeaway pearl for post-exam study report..." />
        </div>
        <div id="cust-error-msg" style="color:var(--fail-red);font-size:0.82rem;font-weight:700;" class="hidden"></div>
      `,
      confirmText: "Save Question to Pool",
      cancelText: "Cancel",
      onConfirm: () => {
        const domain = document.getElementById("cust-domain").value;
        const difficulty = Number(document.getElementById("cust-diff").value);
        const patientType = document.getElementById("cust-ptype").value;
        const subtopic = document.getElementById("cust-subtopic").value.trim() || "General EMS";
        const stem = document.getElementById("cust-stem").value.trim();
        const opt0 = document.getElementById("cust-opt-0").value.trim();
        const opt1 = document.getElementById("cust-opt-1").value.trim();
        const opt2 = document.getElementById("cust-opt-2").value.trim();
        const opt3 = document.getElementById("cust-opt-3").value.trim();
        const correctIndex = Number(document.getElementById("cust-correct").value);
        const explanation =
          document.getElementById("cust-explanation").value.trim() ||
          "Review NREMT clinical guidelines for this topic.";
        const studyTip =
          document.getElementById("cust-tip").value.trim() ||
          "Focus on primary assessment (XABC) and clinical priorities.";
        const errEl = document.getElementById("cust-error-msg");

        if (!stem || !opt0 || !opt1 || !opt2 || !opt3) {
          if (errEl) {
            errEl.textContent = "Please fill in the question stem and all four answer options.";
            errEl.classList.remove("hidden");
          }
          return true; // keep modal open
        }

        const irtBMap = { 1: -0.8, 2: 0.0, 3: 0.9 };
        engine.saveUserCustomQuestion({
          id: defaultId,
          source: "Custom",
          domain,
          subtopic,
          patientType,
          difficulty,
          irtB: irtBMap[difficulty] || 0.0,
          stem,
          options: [opt0, opt1, opt2, opt3],
          correctIndex,
          explanation,
          studyTip
        });
        renderLobby();
        return false;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
