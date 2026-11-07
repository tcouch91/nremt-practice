# Review of the Gemini-built NREMT EMT practice app

Reviewed by Claude. This file covers (1) the app code, (2) Gemini's 100 original questions, (3) the 100 new questions Claude added, and (4) a complete list showing who wrote each question.

## How to tell who wrote a question

- **In the data:** every question has a `source` field, either `"Gemini"` or `"Claude"`. Questions you add through the app's "+ Add Question" button are tagged `"Custom"`.
- **By file:** Gemini's questions are in `data/questions-<domain>.js`. Claude's questions are in `data/questions-claude-<domain>.js`.
- **By ID:** Gemini's IDs are `AIR-001–020`, `CARD-001–022`, `TRAU-001–018`, `MED-001–028`, and `OPS-001–012`. Claude's continue the same sequences: `AIR-021–040`, `CARD-023–044`, `TRAU-019–035`, `MED-029–057`, and `OPS-013–024`.
- **In the app:** after an exam, each question in the review shows a "Written by Gemini" or "Written by Claude" badge. The dashboard shows the count for each author.
- **Below:** the full list is at the end of this file. A ✎ next to an ID means Claude corrected that Gemini question.

## 1. App code

| Severity | Finding | Status |
|---|---|---|
| **Blocker** | There was **no `index.html`**. The JS and CSS expect about 65 specific element IDs, but nothing loaded them, so the app could not be opened at all. | **Fixed.** Built `index.html` with every element the code expects. Tested a full exam in a headless browser with no console errors. |
| High | Exams that were **ended early** or that **timed out** were scored but never saved to "Past Attempts," and the attempt counter didn't advance. The next exam reused the same attempt number, which skews question rotation. | **Fixed.** Added `finalizeSession()` to the engine, used for all three ways an exam ends. The attempt counter now advances on the first answered question. |
| Medium | If the question bank ran out of eligible questions mid-exam, the exam silently froze. | **Fixed.** The exam now ends and scores instead. |
| Low | Custom question IDs were `CUST-<bank size + 1>`, which can collide when the bank size changes. | **Fixed.** IDs are now guaranteed unique. |
| Info | The "scaled score" (100–1500, pass at 950) is an invented formula. The real NREMT does not publish a mapping like this. The "Easy→Medium→Hard" stepping is a simplification of real CAT, which uses IRT ability estimates and a confidence-interval stopping rule. Gemini's text called this "authentic"/"official." | Added an on-page disclaimer that the score is an estimate and the tool is not affiliated with NREMT or Pearson VUE. Treat the score as a rough signal only. |
| Info | The live "Adaptive Monitor" shows each question's difficulty tier and IRT value *while you're answering it*. That tells you whether your last answer was right. | Left as is. It can be turned off on the start screen, and turning it off makes the practice more realistic. |

## 2. Gemini's 100 questions: are they EMT-basic level?

**Overall verdict: mostly yes.** Content is generally accurate and current, and nearly all of it is within EMT scope (2019 National EMS Scope of Practice Model). The rationales are thorough. Problems found:

### A. Test-taking "tell" (the biggest quality issue)
In **77%** of Gemini's questions the correct answer is the longest option. In **59%**, it is at least 20% longer than *every* wrong answer, often because the correct option includes its own explanation (e.g. "Yes; because the patient is unresponsive, apneic… begin CPR"). Several distractors are also obviously absurd ("Acids dissolve the plastic bottle," "Pour hydrogen peroxide over the exposed organs," "Drive onto the right sidewalk"). A student can score well by picking the longest answer, so **scores on Gemini's questions are probably inflated**. The real NREMT writes options of similar length with plausible distractors. Claude's 100 new questions were checked against this: in **0%** of them is the correct answer 20% longer than every distractor. The Gemini questions were left as written apart from the corrections below. Rewriting their answer options is a recommended follow-up.

### B. Content corrections made (marked ✎ in the list below; the review screen shows a note)
| ID | Problem | Fix |
|---|---|---|
| AIR-015 | The correct answer said to start BVM **and** chest compressions "immediately" for a bradycardic child. AHA sequence: ventilate first, and compress only if HR stays < 60 with poor perfusion *despite* effective ventilation. (The explanation already said this, so the question contradicted itself.) Distractor suggested nebulized albuterol (not EMT scope without a patient prescription). | Rewrote the correct option and the explanation. Replaced the albuterol distractor. |
| CARD-019 | **Above EMT level.** It asked for the pathophysiology of right-ventricular MI ("preload-dependent… venodilation"), which is paramedic content needing a 12-lead. It also had the EMT giving nitro at HR 54, which many protocols prohibit. | Rewritten to test the EMT action (hypotension after nitro: supine, no more nitro, ALS, transport). The RVMI concept is kept as background in the explanation. |
| TRAU-018 | All three distractors were ALS-only procedures (needle decompression, IV fluids, pericardiocentesis), which gave away the answer. | Replaced with plausible EMT-level distractors. |
| OPS-006 | The answer said to insert an OPA during START triage. START only repositions the airway. | Removed the OPA. |
| MED-011 | The study tip told EMTs to "administer Atropine + Pralidoxime" to patients. That is ALS. EMT auto-injector use is generally limited to self/peer care or local protocol. | Clarified. |
| MED-018 | Used "excited delirium," a term ACEP/NAEMSP and others have withdrawn. | Updated to "hyperactive delirium with severe agitation." |

### C. Mechanical fixes
- 16 places in the text showed literal doubled apostrophes (`''silent chest''`) on screen. Fixed.
- Typos fixed: "beforeattempting" (MED-007), "absolute contraindicated" (MED-008), "an healthcare" (OPS-008), "instantly fatalize" / "Signs" (CARD-017).

### D. In scope but on the hard edge for EMT (kept)
AIR-019 (alveolar ventilation math), CARD-017 (LVAD), MED-009 (Kussmaul/acid-base physiology), TRAU-010 (phrenic-nerve explanation of Kehr's sign), and TRAU-013 (Cushing's triad mechanism). All appear in mainstream EMT textbooks, but they lean more on mechanism than the NREMT usually does.

### E. Guideline-change watch item
The AHA's 2025 guideline update changed adult/child choking care to alternate **back blows and abdominal thrusts**, and dropped the two-finger infant compression technique. AIR-013's study tip still says "Child/Adult: Abdominal Thrusts." Exam item banks and courses adopt new guidelines on different timelines, so check what your course teaches. None of Claude's new questions depend on the parts that changed.

## 3. Claude's 100 new questions

- **Spread:** Airway 20, Cardiology 22, Trauma 17, Medical/OB 29, Operations 12. This brings the bank to 200 (40 / 44 / 35 / 57 / 24), which is close to the NREMT blueprint weights.
- **Difficulty:** about 30% Easy, 40% Medium, and 30% Hard in each domain. 21 are pediatric and 6 are obstetric.
- **Scope:** written to the EMT scope of practice. Medications are limited to oxygen, oral glucose, aspirin, assisted nitroglycerin, epinephrine auto-injector, naloxone, and the patient's own inhaler. Interventions include BVM, CPAP, OPA/NPA, suction, AED, tourniquet, pelvic binder, splinting, and spinal motion restriction. ALS interventions appear only as "request ALS."
- **Coverage gaps filled:** BLS details (hand position, infant/child depth, advanced-airway ventilation rates), AED special situations (water, re-arrest in a moving ambulance, ICD), opioid arrest vs. respiratory arrest, AAA, hyperkalemia in dialysis patients, field triage criteria, pelvic binders, helmets, pediatric compensated shock, beta-blocker-masked shock, XABC hemorrhage priority, ectopic pregnancy, shoulder dystocia, limb presentation, meconium (current NRP), BRUE, child abuse, sepsis, DTs, snakebite, febrile seizure, meningitis PPE, HIPAA, PCR corrections, NIMS, hazmat zones, minors and consent, crime scenes, JumpSTART, and capacity/refusal.
- **Quality checks run:** unique IDs, 4 distinct options, valid fields, and every answer verified against its rationale. Option lengths were balanced so the longest answer is not a reliable tell.

## 4. Complete question list by author

### Written by Gemini (100 questions)

**Airway, Respiration & Ventilation** (20)

| ID | Difficulty | Subtopic | Correct answer |
|---|---|---|---|
| AIR-001 | Easy | Airway Adjuncts & Suctioning | Remove the OPA immediately and be prepared to suction the oropharynx |
| AIR-002 | Easy | Airway Adjuncts & Suctioning | Roll the patient onto her side and suction the oropharynx for no more than 15… |
| AIR-003 | Easy | Airway Anatomy & Assessment | Jaw-thrust maneuver |
| AIR-004 | Easy | Oxygenation & Delivery Devices | Nasal cannula at 2 to 4 L/min |
| AIR-005 | Easy | Positive Pressure Ventilation & BVM | 1 breath every 6 seconds (10 breaths/min) |
| AIR-006 | Easy | Airway Adjuncts & Suctioning | From the tip of the nose to the earlobe |
| AIR-007 | Medium | Positive Pressure Ventilation & BVM | Open her airway, insert an airway adjunct, and assist ventilations with a bag… |
| AIR-008 | Medium | Lower Airway & Pulmonary Emergencies | Contact medical control or follow standing orders to assist her with her pres… |
| AIR-009 | Medium | Oxygenation & Delivery Devices | Continuous positive airway pressure (CPAP) |
| AIR-010 | Medium | Oxygenation & Delivery Devices | A 55-year-old male with severe dyspnea, unilateral absent breath sounds after… |
| AIR-011 | Medium | Positive Pressure Ventilation & BVM | Seal the patient's mouth and nose with one hand while ventilating through the… |
| AIR-012 | Medium | Lower Airway & Pulmonary Emergencies | Spontaneous pneumothorax |
| AIR-013 | Medium | Lower Airway & Pulmonary Emergencies | Deliver 5 back slaps followed by 5 chest thrusts repeatedly until the object … |
| AIR-014 | Medium | Lower Airway & Pulmonary Emergencies | Acute pulmonary embolism |
| AIR-015 ✎ | Hard | Pathophysiology & Perfusion | The child is in respiratory failure and near arrest; begin BVM ventilations w… |
| AIR-016 | Hard | Positive Pressure Ventilation & BVM | Squeezing the bag too forcefully and rapidly; prevent by delivering each brea… |
| AIR-017 | Hard | Lower Airway & Pulmonary Emergencies | She has a 'silent chest' indicating severe, life-threatening airflow obstruct… |
| AIR-018 | Hard | Pathophysiology & Perfusion | Begin assisting his ventilations with a bag-valve mask to eliminate accumulat… |
| AIR-019 | Hard | Pathophysiology & Perfusion | Patient A has an alveolar ventilation of 4,200 mL/min, whereas Patient B has … |
| AIR-020 | Hard | Lower Airway & Pulmonary Emergencies | Provide calm verbal reassurance, coach him to slow his breathing, and monitor… |

**Cardiology & Resuscitation** (22)

| ID | Difficulty | Subtopic | Correct answer |
|---|---|---|---|
| CARD-001 | Easy | Adult & Pediatric BLS / CPR | Begin high-quality chest compressions at a rate of 100 to 120 per minute and … |
| CARD-002 | Easy | AED Operations & Special Situations | Resume chest compressions immediately, starting with a 30:2 cycle for 2 minutes |
| CARD-003 | Easy | Acute Coronary Syndrome (ACS) | 162 to 324 mg of chewable baby aspirin (2 to 4 tablets of 81 mg) chewed and s… |
| CARD-004 | Easy | Acute Coronary Syndrome (ACS) | Systolic blood pressure of 86 mmHg |
| CARD-005 | Easy | Adult & Pediatric BLS / CPR | 15 compressions to 2 ventilations |
| CARD-006 | Easy | AED Operations & Special Situations | Remove the patch with a gloved hand, wipe the skin dry, and then apply the AE… |
| CARD-007 | Easy | Adult & Pediatric BLS / CPR | Brachial artery on the medial aspect of the upper arm |
| CARD-008 | Medium | Acute Coronary Syndrome (ACS) | Withhold nitroglycerin because tadalafil is a PDE-5 inhibitor that causes lif… |
| CARD-009 | Medium | Heart Failure & Cardiogenic Shock | Right ventricle |
| CARD-010 | Medium | AED Operations & Special Situations | Use the adult AED pads, placing them in an anterior-posterior position if nec… |
| CARD-011 | Medium | Adult & Pediatric BLS / CPR | Ventilate him with a BVM at 10 breaths/min (1 breath every 6 seconds) and tit… |
| CARD-012 | Medium | Vascular & Hypertensive Emergencies | Thoracic aortic dissection |
| CARD-013 | Medium | AED Operations & Special Situations | An implanted pacemaker or defibrillator (ICD); place the AED pad beside or be… |
| CARD-014 | Medium | Acute Coronary Syndrome (ACS) | Silent or atypical acute myocardial infarction (AMI) |
| CARD-015 | Medium | Heart Failure & Cardiogenic Shock | Cardiogenic shock |
| CARD-016 | Medium | Adult & Pediatric BLS / CPR | It creates negative intrathoracic pressure that draws venous blood back into … |
| CARD-017 | Hard | Mechanical Circulatory Support (LVAD) | Yes; because the patient is unresponsive, apneic, has no signs of perfusion, … |
| CARD-018 | Hard | Adult & Pediatric BLS / CPR | Perform continuous manual left uterine displacement (LUD) by pulling/pushing … |
| CARD-019 ✎ | Hard | Acute Coronary Syndrome (ACS) | Place him supine, withhold further nitroglycerin, request ALS, and transport … |
| CARD-020 | Hard | Bradycardia & Perfusion Assessment | Position the patient supine, administer supplemental oxygen to maintain SpO2 … |
| CARD-021 | Hard | Heart Failure & Cardiogenic Shock | Pink frothy sputum, severe hypertension, JVD, and paroxysmal nocturnal dyspne… |
| CARD-022 | Hard | Adult & Pediatric BLS / CPR | These are agonal gasps—a brainstem reflex common in the first minutes of sudd… |

**Trauma** (18)

| ID | Difficulty | Subtopic | Correct answer |
|---|---|---|---|
| TRAU-001 | Easy | Bleeding & Shock | Apply an arterial tourniquet proximal to the wound and tighten it until the b… |
| TRAU-002 | Easy | Chest & Abdominal Trauma | Apply an occlusive (vented or three-sided) dressing over the wound |
| TRAU-003 | Easy | Chest & Abdominal Trauma | Cover the exposed bowel with a sterile trauma dressing moistened with sterile… |
| TRAU-004 | Easy | Burns & Soft Tissue Trauma | Brush off the dry chemical powder completely before flushing the area with co… |
| TRAU-005 | Easy | Burns & Soft Tissue Trauma | Carefully remove the impaled object from the cheek so you can control bleedin… |
| TRAU-006 | Medium | Bleeding & Shock | Compensated shock |
| TRAU-007 | Medium | Head, Neck & Spine Trauma | GCS 8 (E2, V2, M4) |
| TRAU-008 | Medium | Burns & Soft Tissue Trauma | 36% |
| TRAU-009 | Medium | Chest & Abdominal Trauma | Provide positive pressure ventilation with a bag-valve mask to act as an 'int… |
| TRAU-010 | Medium | Chest & Abdominal Trauma | Kehr's sign—referred pain via the phrenic nerve caused by blood irritating th… |
| TRAU-011 | Medium | Musculoskeletal Trauma | An isolated, painful, swollen mid-shaft femur fracture with no hip, knee, pel… |
| TRAU-012 | Medium | Head, Neck & Spine Trauma | Cover the ear loosely with a sterile gauze pad to collect the drainage withou… |
| TRAU-013 | Hard | Head, Neck & Spine Trauma | Cushing's triad indicating critically increased intracranial pressure (ICP) a… |
| TRAU-014 | Hard | Bleeding & Shock | Spinal cord injury interrupted sympathetic nervous system outflow, causing un… |
| TRAU-015 | Hard | Chest & Abdominal Trauma | Patient 1: Tension pneumothorax; Patient 2: Cardiac tamponade |
| TRAU-016 | Hard | Head, Neck & Spine Trauma | Acute epidural hematoma caused by laceration of the middle meningeal artery |
| TRAU-017 | Hard | Musculoskeletal Trauma | Keep the extremity at the level of the heart (neutral position), splint loose… |
| TRAU-018 ✎ | Hard | Chest & Abdominal Trauma | Commotio cordis—blunt impact during the vulnerable repolarization phase (upst… |

**Medical; Obstetrics & Gynecology** (28)

| ID | Difficulty | Subtopic | Correct answer |
|---|---|---|---|
| MED-001 | Easy | Endocrine & Metabolic Emergencies | Administer 1 tube (15 g) of oral glucose gel between his cheek and gum |
| MED-002 | Easy | Allergic Reactions & Anaphylaxis | Epinephrine 0.3 mg (1:1,000) intramuscularly into the anterolateral aspect of… |
| MED-003 | Easy | Neurologic Emergencies | Facial droop, arm drift, and abnormal speech |
| MED-004 | Easy | Obstetrics & Neonatal Care | Tilt or roll the patient onto her left side (left lateral recumbent position)… |
| MED-005 | Easy | Toxicology & Environmental Emergencies | Heat stroke; remove him from the hot environment and begin aggressive active … |
| MED-006 | Easy | Pediatric Medical Emergencies | Laryngotracheobronchitis (croup); keep the child calm on his mother's lap and… |
| MED-007 | Easy | Obstetrics & Neonatal Care | Attempt to gently slip the cord over the infant's head (or shoulder) with two… |
| MED-008 | Easy | Toxicology & Environmental Emergencies | Charcoal does not bind to acids, alkalis, or hydrocarbons, obscures endoscopi… |
| MED-009 | Medium | Endocrine & Metabolic Emergencies | Her body is attempting to blow off carbon dioxide (an acid) to compensate for… |
| MED-010 | Medium | Neurologic Emergencies | Status epilepticus; prolonged apnea/hypoventilation, severe cerebral hypoxia,… |
| MED-011 ✎ | Medium | Toxicology & Environmental Emergencies | Cholinergic toxicity from organophosphate insecticide poisoning (SLUDGEM / DU… |
| MED-012 | Medium | Toxicology & Environmental Emergencies | Standard pulse oximeters cannot distinguish carboxyhemoglobin from oxyhemoglo… |
| MED-013 | Medium | Abdominal, GI & Renal Emergencies | Never obtain a blood pressure on the arm with the AV fistula; use the opposit… |
| MED-014 | Medium | Obstetrics & Neonatal Care | Position the mother with her hips elevated (knee-chest or Trendelenburg) and … |
| MED-015 | Medium | Obstetrics & Neonatal Care | APGAR 6 |
| MED-016 | Medium | Obstetrics & Neonatal Care | Perform firm, circular uterine fundal massage over the lower abdomen and enco… |
| MED-017 | Medium | Abdominal, GI & Renal Emergencies | Acute appendicitis |
| MED-018 ✎ | Medium | Psychiatric & Behavioral Emergencies | Prone (face-down) restraint or 'hog-tying' with weight applied to the back, w… |
| MED-019 | Medium | Abdominal, GI & Renal Emergencies | Ruptured esophageal varices |
| MED-020 | Hard | Obstetrics & Neonatal Care | Patient A: Placenta previa; Patient B: Abruptio placentae |
| MED-021 | Hard | Obstetrics & Neonatal Care | Begin positive pressure ventilation (BVM) at 40 to 60 breaths/min using room … |
| MED-022 | Hard | Endocrine & Metabolic Emergencies | Hyperosmolar hyperglycemic state (HHS / HHNS) |
| MED-023 | Hard | Neurologic Emergencies | Maintain her on room air (since SpO2 >= 94%), do not attempt to lower her com… |
| MED-024 | Hard | Obstetrics & Neonatal Care | Eclampsia; protect her airway, suction as needed, provide high-flow oxygen/BV… |
| MED-025 | Hard | Pediatric Medical Emergencies | Do NOT inspect the mouth/throat or agitate the child (which can trigger compl… |
| MED-026 | Hard | Toxicology & Environmental Emergencies | Assess for a central pulse and breathing for up to 30 to 45 (or 60) seconds b… |
| MED-027 | Hard | Hematologic Emergencies | Hypoxia and dehydration cause abnormal hemoglobin S red blood cells to become… |
| MED-028 | Hard | Obstetrics & Neonatal Care | Insert a sterile gloved hand into the vagina, placing your fingers in a 'V' s… |

**EMS Operations** (12)

| ID | Difficulty | Subtopic | Correct answer |
|---|---|---|---|
| OPS-001 | Easy | Medical-Legal & Ethical Issues | Implied consent |
| OPS-002 | Easy | HazMat & Scene Safety | Upwind, uphill, and upstream at a safe distance, using binoculars to identify… |
| OPS-003 | Easy | Ambulance Operations & Air Medical | 100 feet by 100 feet |
| OPS-004 | Easy | Ambulance Operations & Infection Control | A properly fitted N95 (or HEPA) respirator on the EMT, and a surgical mask (o… |
| OPS-005 | Medium | Triage & Mass Casualty (MCI) | Red (Immediate) |
| OPS-006 ✎ | Medium | Triage & Mass Casualty (MCI) | Manually open her airway once; if she remains apneic, tag her Black (Deceased) |
| OPS-007 | Medium | Medical-Legal & Ethical Issues | Perform a thorough assessment, clearly explain in lay terms the potential ris… |
| OPS-008 | Medium | Medical-Legal & Ethical Issues | Abandonment |
| OPS-009 | Medium | Medical-Legal & Ethical Issues | Duty to act, Breach of duty, Damages (actual injury), and Proximate causation |
| OPS-010 | Hard | Medical-Legal & Ethical Issues | Honor the valid written DNR order, withhold CPR, provide emotional support to… |
| OPS-011 | Hard | Triage & Mass Casualty (MCI) | Deliver 5 rescue breaths (ventilations); if spontaneous breathing resumes, ta… |
| OPS-012 | Hard | Ambulance Operations & Safety | Come to a complete stop before reaching the school bus, turn off or silence t… |

### Written by Claude (100 questions)

**Airway, Respiration & Ventilation** (20)

| ID | Difficulty | Subtopic | Correct answer |
|---|---|---|---|
| AIR-021 | Easy | Airway Adjuncts & Suctioning | Depress the tongue with a tongue blade and insert the OPA right side up along… |
| AIR-022 | Easy | Oxygenation & Delivery Devices | Set the flow to 10 to 15 L/min and fully inflate the reservoir bag |
| AIR-023 | Easy | Airway Anatomy & Assessment | Stridor; partial obstruction or narrowing of the upper airway |
| AIR-024 | Easy | Airway Adjuncts & Suctioning | Insert it only as far as you can see, and apply suction while withdrawing it |
| AIR-025 | Easy | Oxygenation & Delivery Devices | A 34-year-old found outdoors in the cold with pale, cool fingertips |
| AIR-026 | Easy | Airway Anatomy & Assessment | Place a folded towel under the shoulders to keep the head in a neutral position |
| AIR-027 | Medium | Positive Pressure Ventilation & BVM | Have your partner squeeze the bag while you seal the mask with both hands |
| AIR-028 | Medium | Pathophysiology & Perfusion | Increased work of breathing as the infant tries to keep the alveoli open |
| AIR-029 | Medium | Oxygenation & Delivery Devices | Give oxygen and titrate it, while closely watching her mental status and brea… |
| AIR-030 | Medium | Oxygenation & Delivery Devices | Remove the CPAP and assist his ventilations with a bag-valve mask |
| AIR-031 | Medium | Airway Anatomy & Assessment | Look in the mouth and remove the object only if you can actually see it |
| AIR-032 | Medium | Lower Airway & Pulmonary Emergencies | Pneumonia involving the lower lobe of the right lung |
| AIR-033 | Medium | Airway Adjuncts & Suctioning | Suction the tracheostomy tube using sterile technique, then reassess |
| AIR-034 | Medium | Pathophysiology & Perfusion | An increase in the carbon dioxide level of the arterial blood |
| AIR-035 | Hard | Positive Pressure Ventilation & BVM | Assist ventilations with a BVM, timing breaths with his own inhalations |
| AIR-036 | Hard | Lower Airway & Pulmonary Emergencies | Suction his nostrils with a bulb syringe and provide humidified oxygen |
| AIR-037 | Hard | Airway Anatomy & Assessment | Patient 2, because shallow breaths with altered mentation are inadequate |
| AIR-038 | Hard | Oxygenation & Delivery Devices | About 19 minutes |
| AIR-039 | Hard | Positive Pressure Ventilation & BVM | Carefully use a head-tilt, chin-lift, because an open airway takes priority |
| AIR-040 | Hard | Airway Adjuncts & Suctioning | A nasopharyngeal airway lubricated with a water-soluble lubricant |

**Cardiology & Resuscitation** (22)

| ID | Difficulty | Subtopic | Correct answer |
|---|---|---|---|
| CARD-023 | Easy | Adult & Pediatric BLS / CPR | On the lower half of the sternum in the center of the chest |
| CARD-024 | Easy | Adult & Pediatric BLS / CPR | About 1 1/2 inches (4 cm), or one-third the chest depth |
| CARD-025 | Easy | Acute Coronary Syndrome (ACS) | Now, because 5 minutes have passed and her blood pressure is adequate |
| CARD-026 | Easy | Acute Coronary Syndrome (ACS) | Chest pressure brought on by exertion that resolves within minutes with rest |
| CARD-027 | Easy | AED Operations & Special Situations | Stop compressions and make sure no one touches the patient |
| CARD-028 | Easy | AED Operations & Special Situations | Early high-quality CPR and defibrillation as soon as possible |
| CARD-029 | Easy | Acute Coronary Syndrome (ACS) | A 61-year-old woman who reports a true allergy to aspirin |
| CARD-030 | Medium | Adult & Pediatric BLS / CPR | About 2 inches (5 cm) deep at a ratio of 15:2 |
| CARD-031 | Medium | Vascular & Hypertensive Emergencies | Position him with his head elevated, monitor closely, and transport promptly |
| CARD-032 | Medium | Acute Coronary Syndrome (ACS) | Withhold oxygen for now, and give it if he becomes hypoxic, short of breath, … |
| CARD-033 | Medium | Heart Failure & Cardiogenic Shock | Sitting upright with her legs dangling or lowered if possible |
| CARD-034 | Medium | Bradycardia & Perfusion Assessment | Lay her supine, give oxygen if needed, request ALS, and transport promptly |
| CARD-035 | Medium | Bradycardia & Perfusion Assessment | A 68-year-old who suddenly passed out without warning while climbing stairs |
| CARD-036 | Medium | AED Operations & Special Situations | You can assess him normally, keep the AED ready, and transport for evaluation |
| CARD-037 | Medium | Adult & Pediatric BLS / CPR | A woman found in bed with dependent lividity and rigor mortis in her jaw |
| CARD-038 | Medium | AED Operations & Special Situations | Quickly wipe the chest dry, then apply the pads and make sure everyone is clear |
| CARD-039 | Hard | Acute Coronary Syndrome (ACS) | Give aspirin per protocol, consult medical control before more nitro, and tra… |
| CARD-040 | Hard | Vascular & Hypertensive Emergencies | Treat for shock, handle him gently, avoid palpating the mass, and transport r… |
| CARD-041 | Hard | AED Operations & Special Situations | Begin compressions and ask the driver to stop the ambulance so the AED can an… |
| CARD-042 | Hard | Bradycardia & Perfusion Assessment | Suspect high potassium; lay her supine, call ALS, transport, and prepare for … |
| CARD-043 | Hard | Adult & Pediatric BLS / CPR | Begin high-quality chest compressions and apply the AED as soon as it is ready |
| CARD-044 | Hard | Adult & Pediatric BLS / CPR | 1 breath every 2 to 3 seconds (20–30/min) |

**Trauma** (17)

| ID | Difficulty | Subtopic | Correct answer |
|---|---|---|---|
| TRAU-019 | Easy | Burns & Soft Tissue Trauma | About 1% |
| TRAU-020 | Easy | Burns & Soft Tissue Trauma | Partial-thickness (second-degree) burn |
| TRAU-021 | Easy | Musculoskeletal Trauma | The wrist and the elbow, the joints above and below the injury |
| TRAU-022 | Easy | Burns & Soft Tissue Trauma | Wrap it in a moist sterile dressing, seal it in a bag, and keep it cool |
| TRAU-023 | Easy | Bleeding & Shock | Have him sit, lean forward, and pinch the fleshy part of the nostrils |
| TRAU-024 | Medium | Trauma Triage & Assessment | A stab wound to the abdomen in an alert patient with normal vital signs |
| TRAU-025 | Medium | Musculoskeletal Trauma | Apply a pelvic binder centered over the greater trochanters |
| TRAU-026 | Medium | Head, Neck & Spine Trauma | An intoxicated 52-year-old with neck pain after falling down 8 stairs |
| TRAU-027 | Medium | Head, Neck & Spine Trauma | Leave the helmet on and remove the face mask to gain airway access |
| TRAU-028 | Medium | Burns & Soft Tissue Trauma | Hidden internal tissue damage and cardiac dysrhythmias despite the small wounds |
| TRAU-029 | Medium | Head, Neck & Spine Trauma | Stabilize the object with gauze and a protective cup, and cover both eyes |
| TRAU-030 | Medium | Head, Neck & Spine Trauma | Anticoagulants increase the risk of delayed bleeding inside the skull |
| TRAU-031 | Hard | Burns & Soft Tissue Trauma | Airway swelling from inhalation injury may cause sudden obstruction |
| TRAU-032 | Hard | Chest & Abdominal Trauma | Lift one corner of the dressing to let trapped air escape |
| TRAU-033 | Hard | Bleeding & Shock | He is probably in shock; metoprolol can block the expected rise in heart rate |
| TRAU-034 | Hard | Bleeding & Shock | She is in compensated shock; her blood pressure will fall only late |
| TRAU-035 | Hard | Bleeding & Shock | Apply a tourniquet high and tight on the thigh above the bleeding wound |

**Medical; Obstetrics & Gynecology** (29)

| ID | Difficulty | Subtopic | Correct answer |
|---|---|---|---|
| MED-029 | Easy | Endocrine & Metabolic Emergencies | Open and maintain his airway, request ALS, and transport promptly |
| MED-030 | Easy | Neurologic Emergencies | Move nearby objects away, protect her head, and do not restrain her |
| MED-031 | Easy | Obstetrics & Neonatal Care | The baby's head is visible at the vaginal opening |
| MED-032 | Easy | Obstetrics & Neonatal Care | Apply gentle pressure on the head to prevent an explosive delivery |
| MED-033 | Easy | Obstetrics & Neonatal Care | Hypothermia |
| MED-034 | Easy | Neurologic Emergencies | 11:00 PM, when he was last seen normal |
| MED-035 | Easy | Toxicology & Environmental Emergencies | Bring the pill bottle and any remaining pills with you to the hospital |
| MED-036 | Easy | Psychiatric & Behavioral Emergencies | Retreat to a safe location and wait for law enforcement to arrive |
| MED-037 | Easy | Gynecologic Emergencies | Place any clothing she removes in separate paper bags, and ask her not to was… |
| MED-038 | Medium | Gynecologic Emergencies | A ruptured ectopic pregnancy |
| MED-039 | Medium | Allergic Reactions & Anaphylaxis | Assess carefully, monitor closely for progression, and transport her |
| MED-040 | Medium | Allergic Reactions & Anaphylaxis | Give a second dose per protocol or medical control, and keep reassessing |
| MED-041 | Medium | Toxicology & Environmental Emergencies | Restoring adequate spontaneous breathing, not necessarily full alertness |
| MED-042 | Medium | Pediatric Medical Emergencies | Remove excess clothing, monitor her airway, and transport for an evaluation |
| MED-043 | Medium | Infectious Disease | Droplet precautions, including a surgical mask for you and for the patient |
| MED-044 | Medium | Pediatric Medical Emergencies | A sunken fontanelle and no wet diaper in 8 hours |
| MED-045 | Medium | Toxicology & Environmental Emergencies | Probable delirium tremens, a life-threatening condition needing transport |
| MED-046 | Medium | Toxicology & Environmental Emergencies | Keep him calm, splint the arm near heart level, and remove his rings |
| MED-047 | Medium | Abdominal, GI & Renal Emergencies | A kidney stone |
| MED-048 | Medium | Obstetrics & Neonatal Care | Begin transport; do not pull on the cord, and save the placenta if it delivers |
| MED-049 | Hard | Obstetrics & Neonatal Care | Do not pull; flex the mother's thighs sharply toward her abdomen and call ALS |
| MED-050 | Hard | Obstetrics & Neonatal Care | Do not try to deliver; elevate her hips, give oxygen, and transport rapidly |
| MED-051 | Hard | Obstetrics & Neonatal Care | Begin bag-mask ventilation at 40 to 60 breaths/min and reassess the heart rate |
| MED-052 | Hard | Pediatric Medical Emergencies | Document your findings objectively and report your concerns as required by law |
| MED-053 | Hard | Pediatric Medical Emergencies | Recommend transport for evaluation, explaining that a serious cause may be pr… |
| MED-054 | Hard | Neurologic Emergencies | A brain bleed (hemorrhagic stroke); avoid aspirin and transport rapidly |
| MED-055 | Hard | Infectious Disease | Sepsis with shock from infection; treat for shock and notify the hospital early |
| MED-056 | Hard | Endocrine & Metabolic Emergencies | Give him oral glucose, reassess, and transport him for medical evaluation |
| MED-057 | Hard | Toxicology & Environmental Emergencies | Transport her, because this overdose can cause delayed liver failure and she … |

**EMS Operations** (12)

| ID | Difficulty | Subtopic | Correct answer |
|---|---|---|---|
| OPS-013 | Easy | Medical-Legal & Ethical Issues | The emergency department staff who are taking over the patient's care |
| OPS-014 | Easy | Ambulance Operations & Infection Control | Thorough hand hygiene before and after patient contact |
| OPS-015 | Easy | Ambulance Operations & Safety | Keep your back locked, lift with your legs, and keep the load close to your body |
| OPS-016 | Easy | Communications & Documentation | Draw a single line through the error, initial and date it, and add the correc… |
| OPS-017 | Medium | Incident Management & MCI | About 3 to 7, with 5 being optimal |
| OPS-018 | Medium | HazMat & Scene Safety | The warm zone, between the hot and cold zones |
| OPS-019 | Medium | Ambulance Operations & Safety | Come to a complete stop, make sure each lane has yielded, then proceed carefully |
| OPS-020 | Medium | Medical-Legal & Ethical Issues | Implied consent, because it is an emergency |
| OPS-021 | Medium | Medical-Legal & Ethical Issues | Avoid cutting through holes in clothing, and touch only what is necessary |
| OPS-022 | Hard | Triage & Mass Casualty (MCI) | Red (Immediate), because her respiratory rate is above 45 |
| OPS-023 | Hard | Medical-Legal & Ethical Issues | He takes a long-acting oral diabetes pill that can cause hypoglycemia to recur |
| OPS-024 | Hard | Medical-Legal & Ethical Issues | Recognize that he lacks capacity, and seek police and medical control help |
