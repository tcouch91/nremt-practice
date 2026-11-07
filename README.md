# NREMT EMT Cognitive Exam — Computer Adaptive Testing (CAT) Simulator

An authentic practice exam application modeled after the **National Registry of Emergency Medical Technicians (NREMT) EMT Cognitive Exam** administered at Pearson VUE testing centers.

## Quick Start

1. **Direct Launch (Zero Setup)**: Double-click or open [`index.html`](./index.html) directly in any modern web browser.
2. **Validate Question Bank & Engine**:
   ```bash
   node scripts/validate-bank.js
   ```

## Key Features

- **100 Realistic Clinical Vignette Questions**:
  - Written in authentic NREMT scenario format (patient age/sex, mechanism of injury or nature of illness, clinical presentation, vital signs, and primary/secondary assessment priorities).
  - Weighted across the **5 official NREMT EMT domains**:
    - **Airway, Respiration & Ventilation** (20 questions — 20%)
    - **Cardiology & Resuscitation** (22 questions — 22%)
    - **Trauma** (18 questions — 18%)
    - **Medical; Obstetrics & Gynecology** (28 questions — 28%)
    - **EMS Operations** (12 questions — 12%)
  - Stratified across **3 Difficulty Tiers** (`1 = Easy` [30], `2 = Medium` [40], `3 = Hard` [30]) with continuous Item Response Theory (`irtB`) parameters.
- **Dynamic Computer Adaptive Testing (CAT) Engine**:
  - Starts at **Medium** difficulty.
  - Answering an **Easy** question correctly steps up to **Medium**; answering **Medium** correctly steps up to **Hard**; answering **Hard** correctly stays at **Hard** with a higher IRT target.
  - Answering a **Hard** question incorrectly steps down to **Medium**; answering **Medium** incorrectly steps down to **Easy**.
- **Automatic Question Rotation Across Attempts**:
  - Tracks exposure counts in `localStorage` so unseen questions are strictly prioritized before any previously seen question rotates back into a new exam, and shuffles option ordering (`A–D`) on every attempt.
- **Authentic Pearson VUE Workstation Interface**:
  - Forward-only navigation (no returning to prior questions once submitted), mandatory selection prompt, countdown timer (with Pearson VUE Hide/Show toggle), right-click / button **✂ Strikeout** tool to eliminate distractors, and Pearson VUE contrast themes (*Standard*, *High Contrast White-on-Black*, and *Yellow-on-Black*).
- **35-Question Scaled Score & Personalized Study Feedback**:
  - Computes a simulated **NREMT Scaled Score (100–1500, Passing Standard: 950)** based on IRT ability ($\theta$) and difficulty-weighted accuracy.
  - Renders an interactive **CAT Difficulty Progression Graph** showing every upward and downward step across all 35 questions.
  - Evaluates each of the 5 NREMT domains (*Above Passing Standard*, *Near Passing Standard*, *Below Passing Standard*).
  - Generates a **"What You Should Focus Learning On More"** diagnostic study plan ranking weak subtopics, comparing Adult vs. Pediatric/Obstetric performance, and compiling high-yield clinical pearls from missed questions.

## Adding More Questions in the Future

Questions are organized modularly in [`data/`](./data/):
- [`data/questions-airway.js`](./data/questions-airway.js)
- [`data/questions-cardiology.js`](./data/questions-cardiology.js)
- [`data/questions-trauma.js`](./data/questions-trauma.js)
- [`data/questions-medical.js`](./data/questions-medical.js)
- [`data/questions-operations.js`](./data/questions-operations.js)
- [`data/questions-custom.js`](./data/questions-custom.js) (for expansion packs)
