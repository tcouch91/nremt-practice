# NREMT EMT Cognitive Exam — Computer Adaptive Testing (CAT) Simulator

An authentic practice exam application modeled after the **National Registry of Emergency Medical Technicians (NREMT) EMT Cognitive Exam** administered at Pearson VUE testing centers.

## Quick Start

1. **Direct Launch (Zero Setup)**: Double-click or open [`index.html`](./index.html) directly in any modern web browser.
2. **Validate Question Bank & Engine**:
   ```bash
   node scripts/validate-bank.js
   ```

## Key Features

- **300 Realistic Clinical Vignette Questions**:
  - Written in authentic NREMT scenario format (patient age/sex, mechanism of injury or nature of illness, clinical presentation, vital signs, and primary/secondary assessment priorities).
  - Weighted across the **5 official NREMT EMT domains**:
    - **Airway, Respiration & Ventilation** (60 questions — 20%)
    - **Cardiology & Resuscitation** (66 questions — 22%)
    - **Trauma** (53 questions — 18%)
    - **Medical; Obstetrics & Gynecology** (85 questions — 28%)
    - **EMS Operations** (36 questions — 12%)
  - Stratified across **3 Difficulty Tiers** (`1 = Easy` [91], `2 = Medium` [120], `3 = Hard` [89]) with continuous Item Response Theory (`irtB`) parameters.
  - Each question's `source` field records who wrote it (Gemini or Claude); see [`REVIEW.md`](./REVIEW.md).
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

## Syncing Progress Across Devices

Progress is saved in each browser's localStorage. Optional sync through a free [Supabase](https://supabase.com) project keeps a phone and a laptop in step. Devices share a random 16-character sync code, with no accounts or passwords. When sync isn't configured, the dashboard's sync card is hidden and nothing changes.

One-time setup:
1. Create a free Supabase project.
2. In the project's **SQL Editor**, paste and run [`supabase/schema.sql`](./supabase/schema.sql). The table stays locked; the browser can only call the two sync functions, so nobody can list other people's codes.
3. From **Project Settings → API Keys**, copy the **Project URL** and the **publishable** (or legacy `anon`) key into [`js/sync-config.js`](./js/sync-config.js). Both are meant to be public.
4. Commit and push. On the dashboard, tap **Turn On Sync** on one device, then open the link it shows on the other device (or enter the code there).

How merging works:
- Score reports, seen-question counts, and custom questions from both devices are combined, so nothing is lost.
- A paused exam follows Nate to whichever device he opens next. An exam that's finished or discarded on one device disappears from the others.
- **Reset Rotation** on one device resets it everywhere.
- Uploads are gzip-compressed, and opening the app when nothing has changed downloads almost nothing.

Run `node scripts/test-sync.js` to simulate two devices syncing through a fake server.

Note: Supabase pauses free projects after about a week with no activity. Regular studying keeps it awake; if it does pause, restore it from the dashboard.

## Adding More Questions in the Future

Questions are organized in [`data/`](./data/), one file per domain. Add a new question to the end of its domain file, using the next ID in that domain's sequence. Any new file must also be added as a `<script>` tag in `index.html`; `scripts/validate-bank.js` fails if a file in `data/` isn't loaded.
- [`data/questions-airway.js`](./data/questions-airway.js)
- [`data/questions-cardiology.js`](./data/questions-cardiology.js)
- [`data/questions-trauma.js`](./data/questions-trauma.js)
- [`data/questions-medical.js`](./data/questions-medical.js)
- [`data/questions-operations.js`](./data/questions-operations.js)
- [`data/questions-custom.js`](./data/questions-custom.js) (for expansion packs)
