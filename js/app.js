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
    hideTimer: false,
    showLiveCatHud: true,
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

    // Launch Exam button in Lobby
    const btnStartExam = document.getElementById("btn-start-exam");
    if (btnStartExam) {
      btnStartExam.addEventListener("click", () => {
        const hudCheckbox = document.getElementById("chk-live-cat-hud");
        if (hudCheckbox) state.showLiveCatHud = hudCheckbox.checked;
        startNewExam();
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
        startNewExam();
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
  // VIEW 1: LOBBY / CANDIDATE PORTAL RENDERER
  // ============================================================================
  function renderLobby() {
    const stats = engine.getQuestionPoolStats();
    const pastAttempts = engine.getPastAttempts();

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
        <span><strong style="color:#64748b;">● ${stats.seenCount} Previously Seen</strong> across ${stats.totalAttempts} completed attempt${stats.totalAttempts === 1 ? "" : "s"}</span>
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
            No completed attempts yet. Launch your first 35-question adaptive exam to receive a scaled score and personalized study plan!
          </div>
        `;
      } else {
        attemptsContainer.innerHTML = pastAttempts
          .map(
            (att, idx) => `
          <div class="attempt-item">
            <div>
              <div style="font-weight:700;font-size:0.92rem;">
                Attempt #${att.attemptNumber || pastAttempts.length - idx} — Scaled Score: ${att.scaledScore}
              </div>
              <div style="font-size:0.78rem;color:var(--vue-text-muted);">
                ${formatDateShort(att.completedAt)} • ${att.totalCorrect}/${att.totalAsked} (${att.rawAccuracy}%) • Avg Diff: ${att.avgDifficultyFaced}
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:0.6rem;">
              <span class="attempt-badge ${att.passed ? "attempt-pass" : "attempt-fail"}">
                ${att.passed ? "PASSED" : "BELOW STD"}
              </span>
              <button class="vue-tool-btn btn-view-past-report" data-report-idx="${idx}">
                View Report
              </button>
            </div>
          </div>
        `
          )
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
  // VIEW 2: ACTIVE EXAM CONTROLLER (PEARSON VUE CAT INTERFACE)
  // ============================================================================
  function startNewExam() {
    stopTimer();
    state.activeSession = engine.createExamSession({
      totalQuestions: 35,
      timeLimitSeconds: 42 * 60 // 42 minutes for 35 questions
    });
    state.selectedOptionIndex = null;
    state.struckOutOptions.clear();
    state.questionStartTime = Date.now();

    startTimer();
    renderCurrentExamQuestion();
    showView("exam");
  }

  function startTimer() {
    stopTimer();
    updateHeaderTimerDisplay();
    state.timerInterval = setInterval(() => {
      if (!state.activeSession || state.activeSession.isCompleted) {
        stopTimer();
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

  function updateHeaderTimerDisplay() {
    const timerTextEl = document.getElementById("vue-timer-text");
    const timerRowEl = document.getElementById("vue-timer-row");
    const btnToggle = document.getElementById("btn-toggle-timer");
    if (!timerTextEl || !state.activeSession) return;

    const remaining = Math.max(
      0,
      state.activeSession.timeLimitSeconds - state.activeSession.elapsedSeconds
    );

    if (state.hideTimer) {
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

    updateLiveCatHud();

    // Stem
    const stemEl = document.getElementById("exam-question-stem");
    if (stemEl) {
      stemEl.textContent = q.stem;
    }

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
          <button type="button" class="btn-strikeout" data-strike-idx="${idx}" id="btn-strike-${idx}" title="Cross out eliminated answer choice (or right-click option)">
            ✂ Strike
          </button>
        </div>
      `
        )
        .join("");

      // Bind click and right-click (contextmenu) events on options
      optionsContainer.querySelectorAll(".exam-option-card").forEach((card) => {
        const idx = Number(card.getAttribute("data-opt-idx"));
        card.addEventListener("click", () => selectOption(idx));
        card.addEventListener("contextmenu", (e) => {
          e.preventDefault();
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
        qNum === totalQ ? `Submit Exam (${totalQ}/${totalQ}) &#9654;` : `Next &#9654;`;
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
        title: "Pearson VUE Exam Notification",
        bodyHtml: `
          <div style="display:flex;align-items:flex-start;gap:0.85rem;">
            <div style="font-size:1.6rem;line-height:1;">⚠️</div>
            <div>
              <p style="font-weight:700;margin-bottom:0.4rem;">You cannot leave this question blank.</p>
              <p style="color:var(--vue-text-muted);font-size:0.9rem;">
                On the National Registry Computer Adaptive Test (CAT), each response dynamically determines the difficulty of your next question. Please select an answer choice before clicking <strong>Next</strong>.
              </p>
            </div>
          </div>
        `,
        confirmText: "OK",
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
        <p><strong>Your exam time limit has expired.</strong></p>
        <p style="margin-top:0.5rem;color:var(--vue-text-muted);">
          Your completed responses have been scored to generate your diagnostic performance report.
        </p>
      `,
      confirmText: "View Score & Diagnostic Feedback",
      hideCancel: true,
      onConfirm: () => {
        state.activeSession.isCompleted = true;
        const report = engine.generateDiagnosticReport(state.activeSession);
        state.activeReport = report;
        renderDiagnosticReport(report);
        showView("results");
      }
    });
  }

  function handleEndExamEarly() {
    if (!state.activeSession) return;
    const answeredCount = state.activeSession.responses.length;
    showModal({
      title: "End Exam Session Early?",
      bodyHtml: `
        <p>You have completed <strong>${answeredCount} of ${state.activeSession.totalQuestions}</strong> questions.</p>
        <p style="margin-top:0.5rem;color:var(--vue-text-muted);font-size:0.88rem;">
          ${
            answeredCount > 0
              ? "Would you like to score the questions you have answered so far, or return to the lobby without saving a report?"
              : "Return to the candidate dashboard?"
          }
        </p>
      `,
      confirmText: answeredCount > 0 ? `Score ${answeredCount} Answered Items` : "Exit to Lobby",
      cancelText: "Continue Exam",
      onConfirm: () => {
        stopTimer();
        if (answeredCount > 0) {
          state.activeSession.isCompleted = true;
          const report = engine.generateDiagnosticReport(state.activeSession);
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

  // ============================================================================
  // VIEW 3: DIAGNOSTIC SCORE REPORT & STUDY PLAN RENDERER
  // ============================================================================
  function renderDiagnosticReport(report) {
    if (!report) return;

    // 1. Top Banner & Scaled Score
    const bannerEl = document.getElementById("report-banner");
    if (bannerEl) {
      bannerEl.classList.remove("banner-pass", "banner-fail");
      bannerEl.classList.add(report.passed ? "banner-pass" : "banner-fail");
    }

    const statusPillEl = document.getElementById("report-status-pill");
    if (statusPillEl) {
      statusPillEl.className = `status-pill-large ${report.passed ? "pass" : "fail"}`;
      statusPillEl.innerHTML = report.passed
        ? `✓ ABOVE PASSING STANDARD — PASSED`
        : `✕ BELOW PASSING STANDARD — FOCUS REVIEW NEEDED`;
    }

    const headlineEl = document.getElementById("report-headline");
    if (headlineEl) {
      headlineEl.textContent = report.passed
        ? "Congratulations! Your adaptive ability estimate exceeded the NREMT EMT passing standard."
        : "Your adaptive score fell below the 950 passing threshold. Review your personalized study priorities below.";
    }

    const subheadlineEl = document.getElementById("report-subheadline");
    if (subheadlineEl) {
      const poolStats = engine.getQuestionPoolStats();
      subheadlineEl.textContent = `Attempt #${report.attemptNumber} • Completed ${formatDateShort(
        report.completedAt
      )} • ${poolStats.unseenCount} unseen questions remaining in pool for your next attempt`;
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
          <div class="kpi-sub">Final IRT Ability θ = ${report.finalTheta >= 0 ? "+" : ""}${report.finalTheta}</div>
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
                : `✓ 100% mastery across all questions tested in this domain on this attempt.`
            }
          </div>
        </div>
      `
        )
        .join("");
    }

    // 5. Render "What You Should Focus Learning On More" Diagnostic Study Coach
    renderStudyFocusSection(report);

    // 6. Populate Domain Filter dropdown and Render 35-Question Review
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
      // tier 1 -> padTop + plotH * 0.85
      // tier 2 -> padTop + plotH * 0.50
      // tier 3 -> padTop + plotH * 0.15
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
            Perfect Score! You did not miss any subtopics on this exam attempt.
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
          <div class="review-card ${r.isCorrect ? "review-correct" : "review-incorrect"}" id="review-q-${
          r.questionNumber
        }">
            <div class="review-card-header">
              <div>
                <strong>Question ${r.questionNumber}</strong> (<code>${escapeHtml(r.questionId)}</code>)
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
      title: "NREMT Pearson VUE Computer Adaptive Exam — Instructions",
      bodyHtml: `
        <div style="display:flex;flex-direction:column;gap:0.75rem;font-size:0.9rem;">
          <p><strong>1. Dynamic Computer Adaptive Testing (CAT):</strong> Just like the official NREMT Cognitive Exam, question difficulty adapts dynamically after every answer. Answering an <em>Easy</em> question correctly steps up to <em>Medium</em>; answering <em>Medium</em> correctly steps up to <em>Hard</em>. Answering a <em>Hard</em> question incorrectly steps down to <em>Medium</em>.</p>
          <p><strong>2. Forward-Only Navigation:</strong> You must select an answer before advancing, and you cannot return to previous questions once submitted.</p>
          <p><strong>3. Distractor Strikeout Tool:</strong> Right-click any answer choice (or click its <strong>✂ Strike</strong> button) to cross out options you have ruled out.</p>
          <p><strong>4. Keyboard Shortcuts:</strong> Press <code>A</code>–<code>D</code> or <code>1</code>–<code>4</code> to select an option, and press <code>Enter</code> to advance to the next item.</p>
        </div>
      `,
      confirmText: "Resume Exam",
      hideCancel: true
    });
  }

  function openAddCustomQuestionModal() {
    const allQs = engine.getAllQuestions();
    const nextNum = allQs.length + 1;
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
