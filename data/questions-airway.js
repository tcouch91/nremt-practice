// NREMT EMT Cognitive Exam Practice Question Bank
// Domain 1: Airway, Respiration & Ventilation (60 Questions: AIR-001 to AIR-060)
// Difficulty Tiers: 1 = Easy, 2 = Medium, 3 = Hard
// Scope: EMT (2019 National EMS Scope of Practice Model / National EMS Education Standards).
// Authorship is tracked per question by the `source` field ("Gemini" or "Claude").

window.NREMT_QUESTIONS = window.NREMT_QUESTIONS || [];

window.NREMT_QUESTIONS.push(
  {
    id: "AIR-001",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Adjuncts & Suctioning",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.1,
    stem: "You are caring for an unresponsive 44-year-old male found supine on the kitchen floor. He has slow, snoring respirations at 10 breaths/min. After performing a head-tilt, chin-lift maneuver, you attempt to insert an oropharyngeal airway (OPA), but the patient begins to gag and cough forcefully. What should you do NEXT?",
    options: [
      "Continue inserting the OPA rapidly past the tongue to secure the airway",
      "Remove the OPA immediately and be prepared to suction the oropharynx",
      "Switch to a smaller-sized OPA and reattempt insertion at a 90-degree angle",
      "Begin positive pressure ventilations with a bag-valve mask at 15 L/min"
    ],
    correctIndex: 1,
    explanation: "An intact gag reflex is an absolute contraindication to the use of an oropharyngeal airway (OPA). Attempting to force or leave an OPA in a patient with a gag reflex can induce vomiting, laryngospasm, and aspiration. You must immediately remove the OPA, have suction ready in case the patient vomits, and consider inserting a nasopharyngeal airway (NPA) instead if no contraindications exist.",
    studyTip: "OPA = Unresponsive WITHOUT a gag reflex. NPA = Unresponsive or semiconscious WITH an intact gag reflex (contraindicated in severe head/facial trauma with suspected basilar skull fracture)."
  },
  {
    id: "AIR-002",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Adjuncts & Suctioning",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.9,
    stem: "While assessing a 62-year-old female who experienced a generalized tonic-clonic seizure, you hear loud gurgling sounds coming from her upper airway. She is unresponsive with a respiratory rate of 8 breaths/min. What is your MOST immediate action?",
    options: [
      "Insert a nasopharyngeal airway lubricated with water-soluble gel",
      "Apply a nonrebreather mask at 15 L/min",
      "Roll the patient onto her side and suction the oropharynx for no more than 15 seconds",
      "Begin assisted ventilations with a bag-valve mask attached to high-flow oxygen"
    ],
    correctIndex: 2,
    explanation: "Gurgling indicates liquid secretions, blood, or vomitus in the upper airway. Before inserting an airway adjunct or applying positive pressure ventilation (which would force fluids into the lungs and cause aspiration), you must immediately clear the airway by positioning/rolling the patient if needed and suctioning the oropharynx for up to 15 seconds (10 seconds in a child, 5 seconds in an infant).",
    studyTip: "Gurgling = Immediate Suction! Never ventilate through secretions. Suction limits: Adult = 15 sec, Child = 10 sec, Infant = 5 sec."
  },
  {
    id: "AIR-003",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Anatomy & Assessment",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.0,
    stem: "A 23-year-old male was thrown from a motorcycle and is lying supine on the pavement. He is unresponsive and has noisy, snoring respirations. Which maneuver should you use FIRST to open his airway?",
    options: [
      "Head-tilt, chin-lift maneuver",
      "Jaw-thrust maneuver",
      "Head-tilt, neck-lift maneuver",
      "Blind finger sweep of the oropharynx"
    ],
    correctIndex: 1,
    explanation: "Snoring respirations indicate partial upper airway obstruction caused by the tongue relaxing against the posterior pharynx. Because this patient has a significant mechanism of injury (motorcycle ejection) and suspected cervical spine injury, you should open the airway using the jaw-thrust maneuver while maintaining manual inline spinal stabilization.",
    studyTip: "Suspected trauma = Jaw-Thrust maneuver first. Only switch to head-tilt, chin-lift if the jaw-thrust fails to open the airway (airway always takes precedence over spine)."
  },
  {
    id: "AIR-004",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Oxygenation & Delivery Devices",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.8,
    stem: "You are treating a 58-year-old male complaining of mild shortness of breath after climbing stairs. He is alert and oriented, speaking in full sentences, with a respiratory rate of 20 breaths/min, regular and adequate tidal volume, and an SpO2 of 91% on room air. Which oxygen delivery device is MOST appropriate for this patient?",
    options: [
      "Nasal cannula at 2 to 4 L/min",
      "Nonrebreather mask at 15 L/min",
      "Bag-valve mask with reservoir at 15 L/min",
      "Simple face mask at 4 L/min"
    ],
    correctIndex: 0,
    explanation: "For a patient with mild respiratory distress, adequate breathing, and mild hypoxemia (SpO2 91%, just below the target of 94%), a nasal cannula at 2 to 6 L/min is the most appropriate initial oxygen delivery device to titrate SpO2 to >= 94%. A nonrebreather mask is reserved for patients with severe respiratory distress, shock, or significant hypoxia, and a simple face mask requires at least 6 L/min to avoid rebreathing exhaled carbon dioxide.",
    studyTip: "Target SpO2 for most medical patients is 94%–99% (88%–92% in chronic COPD retainers). Use a nasal cannula (1–6 L/min) for mild hypoxia; use a nonrebreather (10–15 L/min) for severe hypoxia or shock."
  },
  {
    id: "AIR-005",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Positive Pressure Ventilation & BVM",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.7,
    stem: "You are ventilating an apneic 35-year-old male who has a strong carotid pulse of 82 beats/min. At what rate should you deliver breaths using a bag-valve mask?",
    options: [
      "1 breath every 3 seconds (20 breaths/min)",
      "1 breath every 6 seconds (10 breaths/min)",
      "2 breaths every 30 seconds",
      "1 breath every 10 seconds (6 breaths/min)"
    ],
    correctIndex: 1,
    explanation: "For an adult in respiratory arrest with a pulse (rescue breathing), deliver 1 breath every 6 seconds (10 breaths per minute), ensuring each breath is delivered over 1 second and produces visible chest rise. Hyperventilating the patient increases intrathoracic pressure, decreases venous return to the heart, and causes gastric inflation.",
    studyTip: "Rescue breathing with a pulse: Adult = 1 breath every 6 seconds (10/min). Infant/Child = 1 breath every 2 to 3 seconds (20–30/min)."
  },
  {
    id: "AIR-006",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Adjuncts & Suctioning",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.6,
    stem: "Prior to inserting a nasopharyngeal airway (NPA) in a semiconscious patient, how should you measure the adjunct to ensure proper sizing?",
    options: [
      "From the corner of the mouth to the earlobe",
      "From the center of the incisors to the angle of the mandible",
      "From the tip of the nose to the earlobe",
      "From the tip of the chin to the thyroid cartilage"
    ],
    correctIndex: 2,
    explanation: "A nasopharyngeal airway (NPA) is measured from the tip of the patient's nose to the earlobe. An oropharyngeal airway (OPA) is measured from the corner of the mouth to the earlobe (or angle of the jaw).",
    studyTip: "NPA sizing = Tip of Nose to Earlobe. OPA sizing = Corner of Mouth to Earlobe/Angle of Jaw."
  },
  {
    id: "AIR-007",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Positive Pressure Ventilation & BVM",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.2,
    stem: "You are called for a 27-year-old female found slumped on a couch. Friends report she used heroin 20 minutes ago. She is unresponsive to painful stimuli, has pinpoint pupils, cyanotic lips, and shallow respirations at a rate of 4 breaths/min. Her radial pulse is 64 beats/min. What should you do FIRST?",
    options: [
      "Administer 2 mg of intranasal naloxone immediately",
      "Apply a nonrebreather mask at 15 L/min and monitor her SpO2",
      "Open her airway, insert an airway adjunct, and assist ventilations with a bag-valve mask",
      "Perform chest compressions at a rate of 100 to 120 per minute"
    ],
    correctIndex: 2,
    explanation: "Although naloxone reverses opioid-induced respiratory depression, airway management and positive pressure ventilation ALWAYS take priority over medication administration. A patient breathing 4 times per minute with shallow tidal volume is in life-threatening respiratory failure and severe hypoxia; you must open the airway, insert an adjunct, and ventilate with a BVM attached to high-flow oxygen before administering naloxone.",
    studyTip: "In opioid overdose with apneic/agonal respirations and a pulse, ALWAYS ventilate with a BVM FIRST before administering naloxone."
  },
  {
    id: "AIR-008",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "A 19-year-old female with a history of asthma presents sitting in the tripod position, speaking in two-word phrases. Auscultation reveals diffuse bilateral expiratory wheezing. Her vital signs are BP 126/80 mmHg, HR 118 beats/min, RR 28 breaths/min, and SpO2 90% on room air. She has her prescribed albuterol metered-dose inhaler (MDI) in her hand. In addition to administering supplemental oxygen, what is the MOST appropriate action?",
    options: [
      "Have her inhale deeply BEFORE depressing the canister and hold her breath for 10 seconds",
      "Contact medical control or follow standing orders to assist her with her prescribed albuterol MDI",
      "Place her supine to reduce her work of breathing and conserve energy",
      "Withhold the inhaler because her heart rate is greater than 100 beats/min"
    ],
    correctIndex: 1,
    explanation: "Wheezing in an acute asthma exacerbation is caused by bronchospasm and lower airway inflammation. Assisting the patient with her prescribed beta-2 agonist bronchodilator (albuterol MDI) per protocol/medical control, along with supplemental oxygen, directly treats the underlying bronchospasm. Mild sinus tachycardia (HR 118) is expected due to hypoxia and anxiety and is not a contraindication to albuterol.",
    studyTip: "Proper MDI coaching: Shake canister, have patient exhale completely, depress canister as the patient begins a slow, deep inhalation over 5 seconds, then hold breath for 10 seconds."
  },
  {
    id: "AIR-009",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Oxygenation & Delivery Devices",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "You are evaluating a 68-year-old male with acute shortness of breath. He is alert, diaphoretic, and sitting upright. Auscultation reveals bilateral crackles halfway up his lung fields. His vital signs are BP 168/96 mmHg, HR 112 beats/min, RR 30 breaths/min, and SpO2 86% on room air. Which intervention is MOST beneficial for this patient?",
    options: [
      "Continuous positive airway pressure (CPAP)",
      "Insertion of a nasopharyngeal airway and BVM ventilation",
      "Simple face mask at 8 L/min and placing the patient supine",
      "Assisted inhalations with an albuterol metered-dose inhaler"
    ],
    correctIndex: 0,
    explanation: "This patient presents with acute cardiogenic pulmonary edema (crackles/rales, hypertension, severe dyspnea, and hypoxemia) and remains alert enough to follow commands and maintain his own airway. CPAP is the gold-standard prehospital intervention because positive end-expiratory pressure recruits collapsed alveoli and pushes fluid out of the alveoli back into the pulmonary capillaries.",
    studyTip: "CPAP Indications: Alert patient able to follow commands, moderate-to-severe respiratory distress (pulmonary edema/CHF, COPD, asthma), tachypnea, SpO2 < 90%, and systolic BP > 90 mmHg."
  },
  {
    id: "AIR-010",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Oxygenation & Delivery Devices",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "Which of the following patients is a CONTRAINDICATION for continuous positive airway pressure (CPAP)?",
    options: [
      "A 64-year-old female with COPD, expiratory wheezing, and BP 142/88 mmHg",
      "A 71-year-old male with pulmonary edema, bilateral crackles, and HR 116 beats/min",
      "A 55-year-old male with severe dyspnea, unilateral absent breath sounds after chest trauma, and BP 82/54 mmHg",
      "A 60-year-old female with CHF who is anxious, tachypneic at 28 breaths/min, and has an SpO2 of 88%"
    ],
    correctIndex: 2,
    explanation: "CPAP is contraindicated in patients with suspected pneumothorax (especially traumatic/tension pneumothorax with unilateral absent breath sounds) and hypotension (SBP < 90 mmHg). Positive airway pressure increases intrathoracic pressure, which worsens a pneumothorax and further decreases venous return (preload) to the heart, precipitating cardiovascular collapse in a hypotensive patient.",
    studyTip: "CPAP Contraindications: Respiratory arrest/apnea, unresponsiveness/inability to follow commands, hypotension (SBP < 90 mmHg), suspected pneumothorax/chest trauma, active vomiting/GI bleed, or recent facial surgery/trauma."
  },
  {
    id: "AIR-011",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Positive Pressure Ventilation & BVM",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "You are called to the home of a 70-year-old male with a permanent tracheostomy stoma in his anterior neck. He is unresponsive, cyanotic, and breathing agonally at 4 breaths/min. When you attempt to ventilate through the stoma using a pediatric mask attached to a BVM, you notice air escaping through the patient's mouth and nose, and his chest does not rise. What should you do?",
    options: [
      "Abandon stoma ventilation and ventilate exclusively through the mouth and nose",
      "Seal the patient's mouth and nose with one hand while ventilating through the stoma",
      "Place the patient in a prone position to drain secretions from the stoma",
      "Insert an adult oropharyngeal airway directly into the neck stoma"
    ],
    correctIndex: 1,
    explanation: "A patient with a partial laryngectomy still has an anatomical connection between the trachea and the upper pharynx. When ventilating through a neck stoma, if air escapes out the mouth and nose (preventing chest rise), you must manually seal the patient's mouth and pinch the nose closed while delivering breaths through the stoma.",
    studyTip: "Stoma ventilation: Use a pediatric mask over the stoma; do not hyperextend the neck. If air leaks from the mouth/nose during stoma ventilation, seal the mouth and nose."
  },
  {
    id: "AIR-012",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.1,
    stem: "A 21-year-old tall, thin male complains of sudden-onset, sharp left-sided pleuritic chest pain and shortness of breath that began while he was sitting in class. He denies trauma. Auscultation reveals diminished breath sounds over the left apex. His vital signs are BP 122/76 mmHg, HR 104 beats/min, RR 24 breaths/min, and SpO2 93%. What is the MOST likely cause of his symptoms?",
    options: [
      "Spontaneous pneumothorax",
      "Acute cardiogenic pulmonary edema",
      "Cardiac tamponade",
      "Bacterial epiglottitis"
    ],
    correctIndex: 0,
    explanation: "Spontaneous pneumothorax classically occurs in tall, thin young males (or patients with COPD/blebs) without any preceding trauma due to the rupture of a subpleural bleb. It presents with sudden, sharp unilateral pleuritic chest pain, dyspnea, and diminished or absent breath sounds on the affected side.",
    studyTip: "Tall, thin young male + sudden sharp unilateral pleuritic chest pain at rest + decreased breath sounds on one side = Spontaneous Pneumothorax."
  },
  {
    id: "AIR-013",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: 0.2,
    stem: "You are dispatched to a daycare center for a 9-month-old infant who suddenly began choking while playing with small toys. On arrival, the infant is conscious, unable to cry or make any sound, and has weak, ineffective cough attempts with perioral cyanosis. What should you do IMMEDIATELY?",
    options: [
      "Perform a blind finger sweep of the infant's mouth to locate the toy",
      "Deliver 5 back slaps followed by 5 chest thrusts repeatedly until the object is expelled or the infant becomes unresponsive",
      "Perform subdiaphragmatic abdominal thrusts (Heimlich maneuver) while holding the infant upright",
      "Place the infant supine and begin chest compressions at a ratio of 30:2"
    ],
    correctIndex: 1,
    explanation: "For a conscious infant (< 1 year old) with a severe foreign body airway obstruction (unable to cry, silent cough, cyanosis), deliver cycles of 5 back slaps (between the scapulae with the head lower than the trunk) followed by 5 chest thrusts. Abdominal thrusts are never performed on infants due to the high risk of liver and splenic injury.",
    studyTip: "Conscious Choking Infant (< 1 yr): 5 Back Slaps + 5 Chest Thrusts. Conscious Choking Child/Adult (> 1 yr): Abdominal Thrusts. Unresponsive Choking (all ages): Start CPR and look in the mouth before giving breaths."
  },
  {
    id: "AIR-014",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.4,
    stem: "A 48-year-old female who recently returned from a 14-hour international flight complains of sudden-onset shortness of breath and sharp right-sided chest pain that worsens on inspiration. She also takes oral contraceptives and smokes one pack of cigarettes daily. Her lungs are clear to auscultation bilaterally, and her vital signs are BP 114/78 mmHg, HR 122 beats/min, RR 28 breaths/min, and SpO2 89% on room air. What condition should you suspect?",
    options: [
      "Acute pulmonary embolism",
      "Acute asthma exacerbation",
      "Congestive heart failure",
      "Psychogenic hyperventilation syndrome"
    ],
    correctIndex: 0,
    explanation: "Sudden-onset dyspnea, pleuritic chest pain, tachycardia, and unexplained hypoxemia with clear lung sounds in a patient with risk factors for deep vein thrombosis (prolonged immobilization during travel, smoking, oral contraceptive use) strongly point to an acute pulmonary embolism (PE). Because a clot blocks blood flow to ventilated alveoli, breath sounds are typically clear despite severe hypoxia.",
    studyTip: "Clear lung sounds + sudden hypoxia/tachypnea/tachycardia + DVT risk factors (surgery, flight, immobilization, OCPs, cancer) = Pulmonary Embolism."
  },
  {
    id: "AIR-015",
    source: "Gemini",
    reviewNote: "Corrected by Claude: original answer said to start compressions immediately; AHA sequence is ventilate first, then compress if HR stays below 60 with poor perfusion.",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Pathophysiology & Perfusion",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.7,
    stem: "You are assessing a 3-year-old boy with a 2-day history of viral respiratory symptoms. Earlier, his mother noted nasal flaring and intercostal retractions with a respiratory rate of 48 breaths/min. Now, the child is lethargic, limp in his mother's arms, and does not cry when you approach. His respiratory rate has dropped to 12 breaths/min and is shallow, his heart rate is 56 beats/min, and central cyanosis is present. How should you interpret these findings and respond?",
    options: [
      "The child is improving as his respiratory rate returns toward normal; apply blow-by oxygen and observe",
      "The child is in respiratory failure and near arrest; begin BVM ventilations with high-flow oxygen, and start chest compressions if the heart rate stays below 60 with poor perfusion",
      "The child is in compensated respiratory distress; give humidified oxygen by mask and monitor closely",
      "The child is experiencing a simple febrile seizure postictal state; place him in the recovery position"
    ],
    correctIndex: 1,
    explanation: "In pediatric patients, a falling respiratory rate accompanied by lethargy, limp muscle tone, shallow breathing, and bradycardia (HR < 60 beats/min with poor perfusion) is an ominous sign of impending cardiopulmonary arrest—NOT clinical improvement. In pediatrics, bradycardia is a direct result of severe hypoxia. Your first action is effective BVM ventilation with high-flow oxygen, because correcting hypoxia often restores the heart rate. If the heart rate remains below 60 beats/min with signs of poor perfusion despite effective oxygenation and ventilation, begin chest compressions.",
    studyTip: "In pediatrics, tachypnea + retractions = early respiratory distress. Bradypnea + lethargy + bradycardia (HR < 60 with poor perfusion) = decompensated respiratory failure / imminent arrest requiring BVM + CPR!"
  },
  {
    id: "AIR-016",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Positive Pressure Ventilation & BVM",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.9,
    stem: "While ventilating an apneic adult patient with a bag-valve mask for several minutes, you notice the patient's abdomen becoming progressively distended and firm, and you feel increasing resistance when squeezing the bag. What is the primary cause of this complication, and how can it be prevented?",
    options: [
      "Squeezing the bag too forcefully and rapidly; prevent by delivering each breath gently over 1 second just until visible chest rise occurs",
      "Using an oxygen flow rate below 15 L/min; prevent by increasing the regulator flow to 25 L/min",
      "Inserting an oropharyngeal airway that is too short; prevent by removing the OPA during BVM ventilation",
      "Allowing too much time for exhalation; prevent by increasing the ventilation rate to 24 breaths/min"
    ],
    correctIndex: 0,
    explanation: "Gastric distension occurs when positive pressure ventilation is delivered too forcefully, too rapidly, or with excessive tidal volume, causing air to exceed the opening pressure of the lower esophageal sphincter and enter the stomach. An inflated stomach pushes upward on the diaphragm, restricting lung expansion (increasing bag resistance) and promoting regurgitation and aspiration. Deliver each breath slowly over 1 second only until the chest visibly rises.",
    studyTip: "Gastric distension during BVM ventilation increases intrathoracic pressure, restricts diaphragm movement, and causes vomiting/aspiration. Prevent by squeezing the bag smoothly over 1 second just until chest rise."
  },
  {
    id: "AIR-017",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.1,
    stem: "You are called for a 24-year-old female with a history of severe asthma who has been using her albuterol inhaler repeatedly over the past 3 hours without relief. Upon arrival, she is drowsy, diaphoretic, and sitting slumped forward. When you auscultate her chest, you hear almost no air movement and no wheezing bilaterally. Her RR is 32 breaths/min and shallow, HR is 134 beats/min, and SpO2 is 82%. What do these clinical findings indicate?",
    options: [
      "Her bronchospasm has resolved following repeated doses of albuterol",
      "She has a 'silent chest' indicating severe, life-threatening airflow obstruction and impending respiratory arrest requiring immediate assisted BVM ventilations",
      "She is experiencing an anxiety-induced hyperventilation episode that should be treated with verbal coaching",
      "She has developed right-sided heart failure secondary to beta-agonist toxicity"
    ],
    correctIndex: 1,
    explanation: "Wheezing requires sufficient airflow moving through narrowed bronchioles to generate sound. When an asthma patient becomes exhausted, drowsy, and hypoxic with absent breath sounds and no wheezing ('silent chest'), bronchospasm and mucus plugging have become so severe that almost no air is moving into or out of the alveoli. This is a life-threatening emergency requiring immediate positive pressure ventilation with a BVM (with slow, gentle squeezes and prolonged exhalation times) and rapid transport.",
    studyTip: "A 'Silent Chest' in a status asthmaticus patient with lethargy and hypoxia does NOT mean improvement—it means virtually zero air movement and imminent respiratory arrest."
  },
  {
    id: "AIR-018",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Pathophysiology & Perfusion",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.0,
    stem: "A 74-year-old male with severe emphysema (COPD) is complaining of worsening dyspnea over 2 days. He has a barrel-chested appearance, pursed-lip breathing, and uses accessory muscles in his neck. His SpO2 is 84% on room air. You place him on supplemental oxygen. Ten minutes into transport, he becomes increasingly somnolent, confused, and his respiratory rate drops from 26 to 8 shallow breaths/min, even though his SpO2 now reads 99%. What is your BEST action?",
    options: [
      "Leave the nonrebreather mask in place since his SpO2 is 99% and allow him to sleep",
      "Remove all supplemental oxygen immediately and coach him to breathe faster",
      "Begin assisting his ventilations with a bag-valve mask to eliminate accumulated carbon dioxide and maintain oxygenation",
      "Administer oral glucose because somnolence in COPD patients is always caused by hypoglycemia"
    ],
    correctIndex: 2,
    explanation: "Regardless of whether the patient's worsening hypoventilation and lethargy are due to respiratory muscle fatigue or hypercapnic narcosis (CO2 retention), a patient whose respiratory rate drops to 8 shallow breaths/min with altered mental status (somnolence) is in acute hypercapnic respiratory failure. Never withhold oxygen from a hypoxic patient, and if a COPD patient hypoventilates and becomes obtunded, you must assist their ventilations with a BVM to blow off excess CO2 and maintain adequate minute volume.",
    studyTip: "Pulse oximetry (SpO2) only measures hemoglobin saturation, NOT ventilation (CO2 elimination). A patient can have an SpO2 of 99% on supplemental O2 while in life-threatening hypercapnic respiratory failure!"
  },
  {
    id: "AIR-019",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Pathophysiology & Perfusion",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.2,
    stem: "Compare the two following patients:\n• Patient A: Tidal volume = 500 mL, Respiratory rate = 12 breaths/min, Dead space = 150 mL\n• Patient B: Tidal volume = 250 mL, Respiratory rate = 24 breaths/min, Dead space = 150 mL\nBoth patients have a total minute volume of 6,000 mL/min. Which statement accurately describes their alveolar ventilation?",
    options: [
      "Both patients have identical alveolar ventilation of 6,000 mL/min because their minute volumes are equal",
      "Patient B has higher alveolar ventilation because his respiratory rate is twice as fast",
      "Patient A has an alveolar ventilation of 4,200 mL/min, whereas Patient B has an alveolar ventilation of only 2,400 mL/min and is severely hypoventilating",
      "Patient B is hyperventilating and will develop respiratory alkalosis"
    ],
    correctIndex: 2,
    explanation: "Alveolar ventilation is calculated as (Tidal Volume - Anatomic Dead Space) x Respiratory Rate. Only the air that reaches the alveoli participates in gas exchange; the 150 mL of anatomic dead space (trachea and bronchi) never reaches the alveoli.\n• Patient A: (500 - 150) x 12 = 350 mL x 12 = 4,200 mL/min (Adequate).\n• Patient B: (250 - 150) x 24 = 100 mL x 24 = 2,400 mL/min (Severe alveolar hypoventilation despite tachypnea).",
    studyTip: "Alveolar Ventilation = (Tidal Volume - Dead Space) x RR. Rapid, shallow breathing drastically reduces alveolar ventilation because most of each breath merely moves dead-space air back and forth."
  },
  {
    id: "AIR-020",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.8,
    stem: "You are called for a 22-year-old male who is panicked after an argument with his partner. He complains of shortness of breath, dizziness, numbness and tingling around his mouth and fingers, and painful spasms in both hands (carpopedal spasm). His lungs are clear bilaterally, RR is 36 breaths/min and deep, HR is 116 beats/min, BP is 128/82 mmHg, and SpO2 is 99% on room air. After ruling out life-threatening medical causes, how should you manage this patient?",
    options: [
      "Have the patient breathe into a brown paper bag to rebreathe carbon dioxide",
      "Place a nonrebreather mask at 15 L/min and assist ventilations with a BVM",
      "Provide calm verbal reassurance, coach him to slow his breathing, and monitor closely during transport",
      "Administer 0.3 mg of intramuscular epinephrine for suspected anaphylaxis"
    ],
    correctIndex: 2,
    explanation: "This patient exhibits classic signs of hyperventilation syndrome (respiratory alkalosis due to excessive CO2 blow-off, causing cerebral vasoconstriction, perioral paresthesia, and carpopedal tetany/Trousseau's sign). However, because life-threatening conditions like pulmonary embolism, pneumothorax, diabetic ketoacidosis, or myocardial infarction can mimic anxiety/hyperventilation, NEVER have a patient breathe into a paper bag (which can prove fatal if the patient is actually hypoxic). Instead, provide calm reassurance, coach slow controlled breathing, and transport for evaluation.",
    studyTip: "NEVER use a paper bag for suspected hyperventilation syndrome in the field. Rule out hypoxia/PE/ACS first, use calm verbal coaching to slow respirations, and administer supplemental O2 if needed."
  },
  {
    id: "AIR-021",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Adjuncts & Suctioning",
    patientType: "Pediatric",
    difficulty: 1,
    irtB: -1.0,
    stem: "You need to insert an oropharyngeal airway (OPA) in an unresponsive 4-year-old girl who has no gag reflex. Which insertion technique is preferred for this child?",
    options: [
      "Insert it upside down and rotate it 180 degrees once it reaches the soft palate",
      "Insert it through the right nostril, bevel toward the septum, along the nasal floor",
      "Depress the tongue with a tongue blade and insert the OPA right side up along its curve",
      "Push the OPA in until you feel resistance, then advance it firmly past the resistance"
    ],
    correctIndex: 2,
    explanation: "In infants and children, the soft palate and oral tissues are easily injured, so the preferred technique is to depress the tongue with a tongue blade and slide the OPA in right side up, following the natural curve of the tongue. The 180-degree rotation technique is used in adults. Inserting through the nostril describes a nasopharyngeal airway, and forcing an adjunct past resistance causes trauma and bleeding.",
    studyTip: "Pediatric OPA: tongue blade + insert right side up (no rotation). Adult OPA: insert upside down and rotate 180 degrees (or sideways and rotate 90 degrees). Size from the corner of the mouth to the earlobe/angle of the jaw."
  },
  {
    id: "AIR-022",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Oxygenation & Delivery Devices",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.2,
    stem: "You are about to place a nonrebreather mask on a 57-year-old man with chest trauma who is breathing adequately but has an SpO2 of 88%. What must you do BEFORE placing the mask on his face?",
    options: [
      "Set the flow to 2 to 4 L/min so the reservoir bag does not overinflate",
      "Set the flow to 10 to 15 L/min and fully inflate the reservoir bag",
      "Remove the one-way valves so he can draw in room air if he needs it",
      "Attach a humidifier, because dry oxygen is unsafe at any flow rate"
    ],
    correctIndex: 1,
    explanation: "A nonrebreather mask delivers its high oxygen concentration (up to about 90%) only when the reservoir bag is pre-filled. Set the regulator to 10–15 L/min and cover the valve inside the mask with your finger until the bag fills, then place the mask on the patient. Adjust the flow so the bag never fully collapses when the patient inhales. Low flow rates cause the patient to rebreathe CO2, and the one-way valves must stay in place.",
    studyTip: "Nonrebreather: 10–15 L/min, pre-fill the reservoir, and the bag should not collapse on inhalation. Nasal cannula: 1–6 L/min."
  },
  {
    id: "AIR-023",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Anatomy & Assessment",
    patientType: "Pediatric",
    difficulty: 1,
    irtB: -1.1,
    stem: "A 6-year-old boy was eating peanuts when he began coughing. He is alert, and you hear a high-pitched sound each time he breathes in. What is this sound called, and what does it suggest?",
    options: [
      "Stridor; partial obstruction or narrowing of the upper airway",
      "Wheezing; narrowing of the lower airways from bronchospasm",
      "Crackles; fluid collecting in the alveoli and small airways",
      "Rhonchi; thick mucus or secretions in the larger bronchi"
    ],
    correctIndex: 0,
    explanation: "Stridor is a harsh, high-pitched sound heard mainly on inspiration. It indicates narrowing or partial obstruction of the upper airway (larynx or trachea), as from a foreign body, croup, epiglottitis, or airway swelling in anaphylaxis. Wheezing is a whistling sound, usually heard on expiration, caused by lower-airway narrowing. Crackles (rales) indicate fluid in the alveoli, and rhonchi indicate mucus in the larger airways.",
    studyTip: "Stridor = UPPER airway (inspiratory, high-pitched). Wheezing = LOWER airway (expiratory whistling). Crackles = fluid. Rhonchi = mucus. Snoring = tongue."
  },
  {
    id: "AIR-024",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Adjuncts & Suctioning",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.9,
    stem: "You are suctioning vomitus from the mouth of an unresponsive adult using a rigid (tonsil-tip) catheter. How far should you insert the catheter, and when should you apply suction?",
    options: [
      "Insert it until the patient gags, and apply suction continuously while inserting",
      "Insert it to the level of the vocal cords, and apply suction for up to 30 seconds",
      "Insert its full length into the throat, and apply suction while inserting it",
      "Insert it only as far as you can see, and apply suction while withdrawing it"
    ],
    correctIndex: 3,
    explanation: "Insert a rigid catheter only as far as you can see—never past the base of the tongue—to avoid stimulating the gag reflex, causing vomiting, or injuring tissue. Apply suction only while withdrawing the catheter, and limit each attempt to 15 seconds in an adult (10 seconds in a child, 5 seconds in an infant), then reoxygenate.",
    studyTip: "Suctioning: insert only as far as you can see, suction on the way OUT, and limit to 15 sec (adult) / 10 sec (child) / 5 sec (infant)."
  },
  {
    id: "AIR-025",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Oxygenation & Delivery Devices",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.7,
    stem: "In which of the following patients is a pulse oximetry reading MOST likely to be inaccurate?",
    options: [
      "A 50-year-old with a regular pulse of 110 beats/min after climbing stairs",
      "A 68-year-old receiving oxygen by nasal cannula at 2 L/min for COPD",
      "A 34-year-old found outdoors in the cold with pale, cool fingertips",
      "A 22-year-old with asthma who is speaking in full sentences at rest"
    ],
    correctIndex: 2,
    explanation: "Pulse oximeters need adequate blood flow to the sensor site. Cold, vasoconstricted, or poorly perfused fingers (hypothermia, shock) produce weak signals and unreliable readings. Other common causes of error are carbon monoxide poisoning (falsely high readings), dark nail polish, excessive movement, and bright ambient light. A fast regular pulse, supplemental oxygen, or a history of asthma does not by itself make the reading inaccurate.",
    studyTip: "SpO2 can be inaccurate with: poor perfusion/cold extremities, shock, CO poisoning (falsely HIGH), nail polish, motion, and bright light. Always treat the patient, not the number."
  },
  {
    id: "AIR-026",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Anatomy & Assessment",
    patientType: "Pediatric",
    difficulty: 1,
    irtB: -0.8,
    stem: "You are opening the airway of an unresponsive 3-month-old infant lying supine. Which positioning technique BEST keeps the infant's airway open?",
    options: [
      "Hyperextend the head as far back as possible to lift the tongue off the airway",
      "Place a folded towel under the shoulders to keep the head in a neutral position",
      "Place a thick pillow under the head to flex the neck slightly forward",
      "Tuck the chin toward the chest to keep the tongue from falling backward"
    ],
    correctIndex: 1,
    explanation: "Infants have a proportionally large occiput (back of the head), which flexes the neck forward and can kink the airway when they lie flat. A folded towel about 1 inch thick under the shoulders keeps the head in a neutral (sniffing) position. Hyperextension can collapse the soft, flexible infant trachea, and flexing the neck (pillow under the head, chin to chest) obstructs it.",
    studyTip: "Infant airway: NEUTRAL position. Pad under the SHOULDERS (large occiput). Avoid both hyperextension and flexion—the infant trachea is soft and kinks easily."
  },
  {
    id: "AIR-027",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Positive Pressure Ventilation & BVM",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.2,
    stem: "You are ventilating an apneic 60-year-old man with a bag-valve mask by yourself. You hear air leaking around the mask and see minimal chest rise. Your partner has just finished setting up suction. What is the BEST way to improve your ventilations?",
    options: [
      "Have your partner squeeze the bag while you seal the mask with both hands",
      "Squeeze the bag harder and faster to make up for the volume being lost",
      "Increase the oxygen flow to 25 L/min so more air reaches the lungs",
      "Switch to a nonrebreather mask at 15 L/min until ALS personnel arrive"
    ],
    correctIndex: 0,
    explanation: "Single-rescuer BVM ventilation is difficult, and mask leaks are the most common cause of inadequate ventilation. Two-rescuer BVM is preferred: one rescuer uses both hands to open the airway and hold a tight mask seal while the other squeezes the bag. Squeezing harder or faster does not fix a leak and causes gastric distension. Raising oxygen flow does not increase tidal volume, and a nonrebreather does nothing for an apneic patient.",
    studyTip: "Poor chest rise with BVM? Reposition the airway, check the mask seal, consider an adjunct, and use the TWO-person technique whenever possible."
  },
  {
    id: "AIR-028",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Pathophysiology & Perfusion",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: 0.0,
    stem: "A 7-month-old infant with a 3-day history of cold symptoms has a respiratory rate of 62 breaths/min, nasal flaring, and a short grunting sound at the end of each exhalation. What does the grunting MOST likely indicate?",
    options: [
      "A normal infant vocalization that is expected during feeding or crying",
      "A tongue obstruction that should be corrected with an oropharyngeal airway",
      "Thick secretions deep in the trachea that require deep catheter suctioning",
      "Increased work of breathing as the infant tries to keep the alveoli open"
    ],
    correctIndex: 3,
    explanation: "Grunting is an exhalation made against a partially closed glottis. It creates back-pressure that helps keep the small airways and alveoli open, and it is a sign of significant respiratory distress in infants and young children. Together with tachypnea, nasal flaring, retractions, and head bobbing, it calls for oxygen, close monitoring, and readiness to assist ventilations.",
    studyTip: "Pediatric signs of increased work of breathing: nasal flaring, retractions, grunting, head bobbing, seesaw breathing, and tripod positioning."
  },
  {
    id: "AIR-029",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Oxygenation & Delivery Devices",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "A 66-year-old woman with known COPD is in moderate respiratory distress. She is alert, speaking in short sentences, and her SpO2 is 85% on room air. Which oxygen strategy is MOST appropriate?",
    options: [
      "Withhold oxygen entirely so you do not suppress her hypoxic drive to breathe",
      "Give oxygen only if her SpO2 falls below 80% or she becomes unresponsive",
      "Give oxygen and titrate it, while closely watching her mental status and breathing",
      "Apply a nonrebreather at 15 L/min and keep it on until her SpO2 reads 100%"
    ],
    correctIndex: 2,
    explanation: "Never withhold oxygen from a hypoxic patient. In COPD, give supplemental oxygen and titrate it to the target your protocol specifies (often 88%–92% for known CO2 retainers), while continuously reassessing mental status, respiratory rate, and depth. If she becomes drowsy or her breathing slows or becomes shallow, assist ventilations with a BVM. Driving the SpO2 to 100% is unnecessary, and waiting for severe hypoxia is dangerous.",
    studyTip: "COPD + hypoxia: GIVE oxygen and titrate (commonly 88%–92% target per protocol). Watch mental status and breathing; assist with a BVM if ventilation becomes inadequate."
  },
  {
    id: "AIR-030",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Oxygenation & Delivery Devices",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "Ten minutes after you start CPAP on a 72-year-old man with suspected acute pulmonary edema, his BP falls from 152/90 to 82/54 mmHg, and he is becoming less responsive with shallow breathing. What should you do?",
    options: [
      "Increase the CPAP pressure to push more fluid out of his alveoli",
      "Remove the CPAP and assist his ventilations with a bag-valve mask",
      "Keep the CPAP in place and assist him with his own nitroglycerin",
      "Keep the CPAP in place and recheck his blood pressure in 10 minutes"
    ],
    correctIndex: 1,
    explanation: "CPAP raises intrathoracic pressure, which can reduce venous return and lower blood pressure. CPAP also requires an alert patient who can protect the airway and breathe on his own. Hypotension (SBP < 90 mmHg) and a declining level of consciousness are both indications to remove it. Because his breathing is now shallow and his mental status is worsening, remove the CPAP and assist ventilations with a BVM and high-flow oxygen. Nitroglycerin is contraindicated with this blood pressure.",
    studyTip: "Remove CPAP if the patient becomes hypotensive (SBP < 90), cannot follow commands, vomits, or tires out. Switch to BVM ventilation if breathing is inadequate."
  },
  {
    id: "AIR-031",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Anatomy & Assessment",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.1,
    stem: "A 45-year-old man choking on food in a restaurant becomes unresponsive as you arrive. You lower him to the floor, find no pulse, and begin chest compressions. Each time you open the airway to give breaths, what should you do FIRST?",
    options: [
      "Perform a blind finger sweep to dislodge any object deep in the throat",
      "Deliver 5 abdominal thrusts while he lies supine before each breath",
      "Look in the mouth and remove the object only if you can actually see it",
      "Pause compressions and check for a carotid pulse for up to 30 seconds"
    ],
    correctIndex: 2,
    explanation: "When a choking patient becomes unresponsive, begin CPR. Chest compressions generate pressure that may expel the object. Each time you open the airway to ventilate, look in the mouth and remove the object only if you can see it. Blind finger sweeps can push the object deeper. Abdominal thrusts are not used for unresponsive patients, and pulse checks should never exceed 10 seconds.",
    studyTip: "Unresponsive choking patient (any age): start CPR, look in the mouth before each set of breaths, remove only VISIBLE objects, and never do blind finger sweeps."
  },
  {
    id: "AIR-032",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "An 81-year-old nursing home resident has had 3 days of fever, chills, and a cough productive of thick yellow-green sputum. She is breathing 26 times per minute, and her SpO2 is 90% on room air. Her temperature is 101.9°F (38.8°C), and you hear crackles only over the right lower lung. What is the MOST likely cause?",
    options: [
      "Acute pulmonary edema from left-sided heart failure",
      "Pneumonia involving the lower lobe of the right lung",
      "Spontaneous pneumothorax of the right lower lung",
      "Pulmonary embolism from a deep vein thrombosis"
    ],
    correctIndex: 1,
    explanation: "Fever, chills, productive cough, tachypnea, hypoxemia, and LOCALIZED crackles over one area of the lung are classic findings of pneumonia, a lung infection that fills alveoli with fluid and pus. Pulmonary edema usually produces crackles in both lungs without fever. A pneumothorax causes diminished or absent breath sounds rather than crackles, and a pulmonary embolism typically presents suddenly with clear lungs. Give oxygen to correct hypoxemia, position her for comfort, watch for sepsis, and transport.",
    studyTip: "Pneumonia: fever + productive cough + localized (one-sided) crackles or diminished sounds. CHF: bilateral crackles, no fever, often JVD and edema. Elderly patients may only present with confusion."
  },
  {
    id: "AIR-033",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Adjuncts & Suctioning",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: 0.4,
    stem: "You respond to a home for a 9-year-old boy with a tracheostomy tube who is in respiratory distress. His mother says the tube has been 'rattling' and she can see thick secretions at the opening. His SpO2 is 86%. What should you do FIRST?",
    options: [
      "Ventilate through his mouth and nose with a BVM while covering the trach",
      "Insert an oropharyngeal airway so you can ventilate around the trach",
      "Increase his home oxygen and wait to see whether the secretions clear",
      "Suction the tracheostomy tube using sterile technique, then reassess"
    ],
    correctIndex: 3,
    explanation: "The most common cause of distress in a patient with a tracheostomy is obstruction of the tube by mucus. Suction the tube with sterile technique, inserting the catheter no farther than the length of the tube, and limit suction time (no more than 10 seconds in a child). Then reassess and oxygenate. If the tube cannot be cleared and the patient is deteriorating, ventilate through the trach with a BVM, and request ALS. The family is often an excellent resource for the patient's equipment.",
    studyTip: "Tracheostomy patient in distress: think DOPE (Dislodged, Obstructed, Pneumothorax, Equipment failure). Obstruction from secretions is most common, so suction the tube first."
  },
  {
    id: "AIR-034",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Pathophysiology & Perfusion",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "In a healthy adult, which of the following is the PRIMARY stimulus that triggers the brainstem to increase the rate and depth of breathing?",
    options: [
      "A decrease in the oxygen level of the arterial blood",
      "An increase in the pH (alkalinity) of the cerebrospinal fluid",
      "An increase in the carbon dioxide level of the arterial blood",
      "A decrease in systolic blood pressure sensed by baroreceptors"
    ],
    correctIndex: 2,
    explanation: "In healthy people, the main drive to breathe comes from chemoreceptors in the brainstem that sense rising carbon dioxide levels (detected as a falling, more acidic pH of the cerebrospinal fluid). Low oxygen levels are a secondary 'backup' (hypoxic) drive. Some patients with chronic CO2 retention may rely more on the hypoxic drive, but oxygen should still never be withheld from a hypoxic patient.",
    studyTip: "Primary drive to breathe = rising CO2 (falling pH). Hypoxic drive = backup. Never withhold O2 from a hypoxic patient—monitor and assist ventilations if needed."
  },
  {
    id: "AIR-035",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Positive Pressure Ventilation & BVM",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.8,
    stem: "A 63-year-old man with severe pneumonia is breathing 38 times per minute with very shallow chest rise. He opens his eyes only to loud voice, and his SpO2 is 82% despite a nonrebreather mask at 15 L/min. What is the MOST appropriate intervention?",
    options: [
      "Assist ventilations with a BVM, timing breaths with his own inhalations",
      "Switch to a nasal cannula at 6 L/min so the mask does not cause anxiety",
      "Coach him to slow his breathing and recheck his SpO2 in five minutes",
      "Increase the nonrebreather flow to 25 L/min to raise the delivered oxygen"
    ],
    correctIndex: 0,
    explanation: "A respiratory rate in the normal or even high range does not guarantee adequate breathing. Rapid, shallow breaths move mostly dead-space air, so minute volume reaching the alveoli is poor. This patient has inadequate ventilation (shallow tidal volume, altered mental status, and hypoxemia despite high-flow oxygen), so he needs positive pressure ventilation. Assist with a BVM, squeezing as he begins to inhale and gradually adjusting to an effective rate and volume. More oxygen through a mask cannot fix inadequate tidal volume.",
    studyTip: "Breathing adequacy = rate AND depth AND mental status. Fast + shallow + altered/hypoxic = assist ventilations with a BVM, even if the patient is still breathing."
  },
  {
    id: "AIR-036",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.9,
    stem: "An 8-month-old has had a runny nose for 2 days and now has wheezing, subcostal retractions, a respiratory rate of 64 breaths/min, and an SpO2 of 90%. The infant's nostrils are crusted with thick mucus, and he is having trouble feeding. Which intervention is MOST likely to quickly improve his breathing?",
    options: [
      "Assist him with his older sibling's prescribed albuterol inhaler and spacer",
      "Deliver 5 back slaps and 5 chest thrusts to clear a possible foreign body",
      "Lay him flat and supine to reduce his work of breathing during transport",
      "Suction his nostrils with a bulb syringe and provide humidified oxygen"
    ],
    correctIndex: 3,
    explanation: "This presentation is typical of bronchiolitis (often RSV). Young infants breathe mainly through the nose, so thick nasal secretions significantly increase their work of breathing and interfere with feeding. Gently suctioning the nostrils with a bulb syringe and giving humidified oxygen often produces rapid improvement. EMTs may only assist with medications prescribed to the patient, the history does not suggest choking, and infants in distress should be kept in a position of comfort, often upright in a caregiver's arms.",
    studyTip: "Infants are preferential nose breathers: nasal congestion can cause real respiratory distress. Bulb-suction the nose (mouth first, then nose if both need clearing) and give oxygen."
  },
  {
    id: "AIR-037",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Anatomy & Assessment",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.0,
    stem: "You are triaging four patients at a house fire. Which patient MOST urgently needs positive pressure ventilation?\n• Patient 1: RR 30, deep and regular, alert, SpO2 95%\n• Patient 2: RR 22, very shallow with minimal chest rise, responds only to pain, SpO2 85%\n• Patient 3: RR 28, anxious, speaking in full sentences, SpO2 98%\n• Patient 4: RR 26, sitting upright, speaking 4- to 5-word sentences, alert, SpO2 91%",
    options: [
      "Patient 1, because a rate of 30 breaths/min is the fastest of the group",
      "Patient 2, because shallow breaths with altered mentation are inadequate",
      "Patient 3, because anxiety will lead to rapid respiratory muscle fatigue",
      "Patient 4, because she is in a tripod position with shortened sentences"
    ],
    correctIndex: 1,
    explanation: "Respiratory rate alone is a poor indicator of adequate breathing. Patient 2 has a 'normal-looking' rate, but very shallow breaths (poor tidal volume), a decreased level of consciousness, and hypoxemia: the hallmarks of inadequate ventilation that require BVM assistance. Patients 1, 3, and 4 are breathing fast but have adequate depth and mental status. They need oxygen as indicated and close monitoring, but not positive pressure ventilation right now.",
    studyTip: "Inadequate breathing = abnormal rate OR shallow depth (poor chest rise) OR altered mental status with hypoxia. Look at chest rise and mental status, not just the number."
  },
  {
    id: "AIR-038",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Oxygenation & Delivery Devices",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.1,
    stem: "You are about to transport a patient on a nonrebreather mask at 15 L/min. Your portable D cylinder reads 2,000 psi. Using a D-cylinder constant of 0.16 and a safe residual pressure of 200 psi, approximately how long will the oxygen last?",
    options: [
      "About 12 minutes",
      "About 19 minutes",
      "About 21 minutes",
      "About 32 minutes"
    ],
    correctIndex: 1,
    explanation: "Duration of flow (minutes) = (gauge pressure − safe residual pressure) × cylinder constant ÷ flow rate (L/min). Here: (2,000 − 200) × 0.16 ÷ 15 = 1,800 × 0.16 ÷ 15 = 288 ÷ 15 ≈ 19.2 minutes. Forgetting to subtract the 200 psi safe residual gives about 21 minutes—a common error. Replace a cylinder when it reaches the safe residual pressure.",
    studyTip: "O2 duration = (psi − 200) × constant ÷ L/min. Constants: D = 0.16, E = 0.28, M = 1.56. Always subtract the 200 psi safe residual."
  },
  {
    id: "AIR-039",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Positive Pressure Ventilation & BVM",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.2,
    stem: "A 30-year-old woman was ejected from a vehicle and is unresponsive with agonal respirations. Your partner holds manual stabilization while you open the airway with a jaw-thrust, insert an OPA, and attempt two-person BVM ventilation. After repositioning the jaw-thrust twice and confirming a good mask seal, the chest still does not rise, and you see no obstruction in the mouth. What should you do NEXT?",
    options: [
      "Continue the jaw-thrust and squeeze the bag more forcefully until the chest rises",
      "Stop ventilating to protect the spine and wait for ALS to secure the airway",
      "Carefully use a head-tilt, chin-lift, because an open airway takes priority",
      "Remove the OPA and ventilate by mouth-to-mask without opening the airway"
    ],
    correctIndex: 2,
    explanation: "The jaw-thrust is the preferred maneuver when spinal injury is suspected because it moves the neck the least. However, if the jaw-thrust cannot open the airway after proper attempts, carefully perform a head-tilt, chin-lift. A patient cannot survive without an open airway and effective ventilation, so the airway takes priority over spinal precautions. Forceful squeezing causes gastric distension, and withholding ventilation leads to hypoxic arrest.",
    studyTip: "Suspected spinal injury: jaw-thrust first. If it fails to open the airway, use a careful head-tilt, chin-lift. Airway beats spine."
  },
  {
    id: "AIR-040",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Adjuncts & Suctioning",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.7,
    stem: "A 38-year-old man has been having a generalized tonic-clonic seizure for 7 minutes. His jaw is tightly clenched, he has snoring respirations, his lips are cyanotic, and there is no evidence of facial or head trauma. Which airway adjunct is MOST appropriate?",
    options: [
      "An oropharyngeal airway inserted with a bite block to pry the jaw open",
      "A nasopharyngeal airway lubricated with a water-soluble lubricant",
      "A rigid tongue depressor wedged between the teeth to prevent tongue biting",
      "No adjunct, because adjuncts are contraindicated in patients who are seizing"
    ],
    correctIndex: 1,
    explanation: "A nasopharyngeal airway (NPA) is ideal for a patient with a clenched jaw or an intact gag reflex who needs help keeping the airway open, as long as there is no suspected basilar skull fracture or severe facial trauma. Never force anything between the teeth of a seizing patient—doing so can break teeth, cause airway obstruction, and injure the rescuer. Support ventilation with high-flow oxygen or BVM as needed, check blood glucose, and request ALS for prolonged seizure activity (status epilepticus).",
    studyTip: "Clenched jaw or gag reflex present = NPA (if no basilar skull fracture/severe facial trauma). Never put anything between a seizing patient's teeth."
  },
  {
    id: "AIR-041",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Positive Pressure Ventilation & BVM",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.1,
    stem: "You are ventilating an apneic 50-year-old woman with a bag-valve mask attached to high-flow oxygen. Which finding BEST confirms that your ventilations are adequate?",
    options: [
      "The reservoir bag on the BVM stays fully inflated between breaths",
      "You feel strong resistance each time you squeeze the bag",
      "Her abdomen rises noticeably with each ventilation",
      "Her chest rises and falls visibly with each ventilation"
    ],
    correctIndex: 3,
    explanation: "Visible chest rise and fall with each breath is the primary sign of adequate artificial ventilation, supported by improving skin color, SpO2, and heart rate. Increasing resistance suggests an obstructed airway, poor positioning, or gastric distension. A rising abdomen means air is entering the stomach, which leads to vomiting and aspiration. A full reservoir bag only shows that oxygen is flowing into the device.",
    studyTip: "Adequate BVM ventilation = visible chest rise, improving color/SpO2, and a stable or improving heart rate. Abdominal rise = gastric distension; reposition and slow down."
  },
  {
    id: "AIR-042",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Anatomy & Assessment",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.2,
    stem: "A 41-year-old man at a restaurant grabbed his throat after taking a bite of steak. He is coughing forcefully, has good color, and tells you, 'Something went down the wrong way.' What should you do?",
    options: [
      "Encourage him to cough and watch for signs of a severe obstruction",
      "Perform abdominal thrusts right away, because choking can quickly become complete",
      "Deliver five firm back blows between his shoulder blades",
      "Look in his mouth and do a finger sweep to remove the food"
    ],
    correctIndex: 0,
    explanation: "A patient who can speak and cough forcefully has a mild (partial) airway obstruction with good air exchange. The cough is the most effective way to clear the object, so do not interfere. Encourage coughing, give oxygen if needed, and watch for signs of a severe obstruction—a weak or silent cough, inability to speak, stridor, or cyanosis. Begin back blows and abdominal thrusts only if the obstruction becomes severe. Blind finger sweeps can push the object deeper.",
    studyTip: "Can speak/cough forcefully = mild obstruction; encourage coughing. Cannot speak, silent cough, cyanosis = severe obstruction; 5 back blows alternating with 5 abdominal thrusts (adult/child, 2025 AHA) or back slaps and chest thrusts (infant)."
  },
  {
    id: "AIR-043",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Oxygenation & Delivery Devices",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.0,
    stem: "You are assessing four patients who are breathing adequately and have no history of lung disease. Which pulse oximetry reading indicates that a patient is hypoxic and needs supplemental oxygen?",
    options: [
      "98%",
      "96%",
      "90%",
      "94%"
    ],
    correctIndex: 2,
    explanation: "A normal SpO2 for a healthy person is about 94% to 99%. A reading below 94% suggests hypoxia, and readings of 90% or below indicate significant hypoxia that requires oxygen. Most protocols call for titrating oxygen to maintain an SpO2 of at least 94% in patients who do not have chronic lung disease. Always interpret the number together with the patient's appearance, mental status, and work of breathing.",
    studyTip: "Normal SpO2 = 94–99%. Below 94% = give oxygen and titrate. Treat the patient, not the number—look at mental status, skin color, and work of breathing."
  },
  {
    id: "AIR-044",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Adjuncts & Suctioning",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.8,
    stem: "A 29-year-old man was struck in the head with a baseball bat. He responds only to painful stimuli, has bruising around both eyes, and clear fluid is draining from his nose. He has snoring respirations and an intact gag reflex. Which airway adjunct should you AVOID?",
    options: [
      "A nasopharyngeal airway",
      "A rigid suction catheter",
      "An oropharyngeal airway",
      "A bag-valve mask"
    ],
    correctIndex: 0,
    explanation: "Bruising around both eyes (raccoon eyes) and clear fluid (cerebrospinal fluid) from the nose are signs of a possible basilar skull fracture. A nasopharyngeal airway is avoided in these patients because it could pass through the fractured skull base into the cranial vault. Use a jaw-thrust, suction as needed, and support ventilation with a BVM. An OPA cannot be used here because of the gag reflex, but it is not dangerous in the same way.",
    studyTip: "NPA is contraindicated with suspected basilar skull fracture: raccoon eyes, Battle's sign (bruising behind the ear), or CSF from the nose or ears, and with severe midface trauma."
  },
  {
    id: "AIR-045",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Oxygenation & Delivery Devices",
    patientType: "Operations",
    difficulty: 1,
    irtB: -0.9,
    stem: "While checking your ambulance at the start of a shift, you prepare a portable oxygen cylinder. Which practice is SAFE?",
    options: [
      "Lubricating a sticking regulator with a small amount of petroleum jelly",
      "Standing the cylinder upright and unsecured in the patient compartment",
      "Keeping the cylinder secured and away from open flames and heat sources",
      "Allowing the cylinder to empty completely before replacing it"
    ],
    correctIndex: 2,
    explanation: "Oxygen supports combustion, so cylinders must be kept away from flames, sparks, and heat, and must be secured so they cannot fall—a damaged valve can turn a cylinder into a projectile. Never use petroleum-based products or oil on regulators or valves, because they can ignite in the presence of pressurized oxygen. Replace a cylinder when it reaches the safe residual pressure (about 200 psi) rather than letting it run empty.",
    studyTip: "Oxygen safety: no oil or grease, no smoking or flames, secure every cylinder, and replace at the safe residual (about 200 psi)."
  },
  {
    id: "AIR-046",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Anatomy & Assessment",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.7,
    stem: "When a person swallows, which structure normally closes over the opening of the larynx to keep food and liquid out of the trachea?",
    options: [
      "The uvula",
      "The epiglottis",
      "The cricoid cartilage",
      "The carina"
    ],
    correctIndex: 1,
    explanation: "The epiglottis is a leaf-shaped flap of tissue that folds over the glottic opening during swallowing, directing food and liquid into the esophagus. When it fails—as in a patient with a decreased level of consciousness or a stroke that affects swallowing—material can be aspirated into the lungs. The uvula hangs from the soft palate, the cricoid cartilage is the ring below the thyroid cartilage, and the carina is where the trachea splits into the mainstem bronchi.",
    studyTip: "Epiglottis = the lid over the trachea during swallowing. Loss of protective reflexes (unresponsive, stroke, intoxication) = high aspiration risk; position and suction."
  },
  {
    id: "AIR-047",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Anatomy & Assessment",
    patientType: "Obstetric",
    difficulty: 2,
    irtB: -0.1,
    stem: "A woman who is about 8 months pregnant is choking at a family dinner. She cannot speak or cough and is clutching her throat. She is still conscious. What is the correct way to relieve the obstruction?",
    options: [
      "Perform abdominal thrusts with your fist just above her navel",
      "Have her lie flat on her back so you can give abdominal thrusts",
      "Perform a blind finger sweep, then give rescue breaths",
      "Perform chest thrusts with your hands on the center of her breastbone"
    ],
    correctIndex: 3,
    explanation: "In a woman in late pregnancy (or an obese patient whose abdomen you cannot get your arms around), abdominal thrusts are ineffective and can injure the uterus and fetus. Instead, stand behind her, place your fist on the center of the breastbone, and deliver quick, inward chest thrusts (alternating with back blows under the 2025 AHA guidelines) until the object is expelled or she becomes unresponsive. Laying a conscious, choking patient flat wastes time and makes the obstruction harder to clear. If she becomes unresponsive, begin CPR and look in the mouth before each set of breaths.",
    studyTip: "Severe FBAO in late pregnancy or obesity = chest thrusts instead of abdominal thrusts. Unresponsive = begin CPR (compressions help dislodge the object)."
  },
  {
    id: "AIR-048",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "A thin 70-year-old man with a long smoking history is sitting in a tripod position, breathing through pursed lips. He has a barrel-shaped chest and diminished breath sounds throughout, and his skin is pink. Which condition do these findings BEST describe?",
    options: [
      "Emphysema",
      "Acute asthma attack",
      "Pulmonary edema from heart failure",
      "Spontaneous pneumothorax"
    ],
    correctIndex: 0,
    explanation: "Emphysema is a form of COPD in which the alveolar walls are destroyed and air becomes trapped in the lungs. Patients are often thin with a barrel chest and breathe through pursed lips to keep the small airways open during exhalation. They work hard to maintain oxygenation and often keep a relatively pink color (the classic 'pink puffer'). Chronic bronchitis patients, by contrast, often have a productive cough and cyanosis. A pneumothorax is usually sudden and one-sided.",
    studyTip: "Emphysema: thin, barrel chest, pursed lips, tripod position. Chronic bronchitis: productive cough, often heavier and cyanotic. Both are COPD."
  },
  {
    id: "AIR-049",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "A 66-year-old woman being treated for lung cancer reports increasing shortness of breath over the past week. Breath sounds are decreased on the left side from the bottom of the lung to about halfway up. She has no fever, chest trauma, or sudden pain. Which condition is MOST likely?",
    options: [
      "Acute asthma",
      "A pleural effusion",
      "Upper airway obstruction",
      "Hyperventilation syndrome"
    ],
    correctIndex: 1,
    explanation: "A pleural effusion is a collection of fluid between the lung and the chest wall that compresses the lung. It develops gradually and is common with cancer, heart failure, and infection. Breath sounds are diminished over the area of fluid, usually the lower lung fields because fluid settles with gravity. Prehospital care is supportive: position of comfort (usually sitting upright), oxygen titrated to SpO2, and transport. The condition is drained at the hospital.",
    studyTip: "Gradual dyspnea + decreased breath sounds at one lung base = think pleural effusion. Sit the patient up, give oxygen, transport."
  },
  {
    id: "AIR-050",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.2,
    stem: "Medical control has approved helping a 24-year-old woman with asthma use her prescribed albuterol metered-dose inhaler. After you check the medication and shake the inhaler, what should you instruct her to do?",
    options: [
      "Inhale deeply, then press the inhaler as she breathes out quickly",
      "Press the inhaler twice quickly while breathing normally through her nose",
      "Exhale fully, then press the inhaler as she inhales deeply and hold her breath",
      "Hold the inhaler 6 inches from her mouth and spray it while she pants rapidly"
    ],
    correctIndex: 2,
    explanation: "For an MDI to deliver medication to the lower airways, the patient should exhale fully, seal her lips around the mouthpiece (or a spacer), press the canister as she begins a slow, deep inhalation, and then hold her breath as long as comfortable (about 10 seconds) so the medication can settle in the airways. Spraying while exhaling or breathing normally deposits most of the drug in the mouth. Reassess breathing and vital signs after each dose.",
    studyTip: "MDI steps: check the 'rights,' shake, exhale fully, seal lips (spacer helps), press while inhaling deeply, hold breath about 10 seconds, reassess."
  },
  {
    id: "AIR-051",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "Ten minutes after using her albuterol inhaler, a 32-year-old woman with asthma says she is breathing easier, and her wheezing has decreased. She now reports feeling shaky, her hands are trembling slightly, and her heart rate has risen from 102 to 116 beats/min. How should you interpret these new findings?",
    options: [
      "She is having an allergic reaction to albuterol and needs epinephrine",
      "These are expected side effects of albuterol; continue to monitor and reassess",
      "Her asthma is worsening, and she needs immediate BVM ventilation",
      "She is hypoglycemic and should receive oral glucose immediately"
    ],
    correctIndex: 1,
    explanation: "Albuterol is a beta-agonist that relaxes bronchial smooth muscle, but it also stimulates the heart and skeletal muscles. Tachycardia, tremors, shakiness, and nervousness are common, expected side effects. Since her breathing has improved, continue oxygen as needed, monitor vital signs, and reassess her lung sounds. Worsening asthma would show increasing distress, not improvement, and nothing suggests an allergic reaction or low blood sugar.",
    studyTip: "Albuterol side effects: tachycardia, tremor, nervousness, palpitations. Judge effectiveness by work of breathing, speech, wheezing, and SpO2."
  },
  {
    id: "AIR-052",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Pathophysiology & Perfusion",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: 0.3,
    stem: "A 9-month-old infant has had a cough and fever for 3 days. As he breathes in, his chest sinks inward while his abdomen pushes outward, and the pattern reverses on exhalation. He is sleepy and does not respond much to your examination. What does this breathing pattern indicate?",
    options: [
      "Normal abdominal breathing that is typical for infants",
      "Mild respiratory distress that can be managed with reassurance",
      "Hyperventilation caused by anxiety",
      "Severe respiratory distress that may be progressing to respiratory failure"
    ],
    correctIndex: 3,
    explanation: "Infants normally breathe mostly with the diaphragm, so some abdominal movement is normal. But 'seesaw' breathing—the chest sinking in as the abdomen rises—is a sign of severe respiratory distress as the infant's soft chest wall collapses under extreme effort. Combined with a decreased level of responsiveness, it suggests the infant is tiring and heading toward respiratory failure. Provide high-flow oxygen, be ready to assist ventilations with a BVM, and transport rapidly.",
    studyTip: "Pediatric warning signs: seesaw breathing, head bobbing, grunting, retractions, and especially a decreasing level of consciousness or slowing heart rate = impending respiratory failure."
  },
  {
    id: "AIR-053",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Adjuncts & Suctioning",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "You are ventilating an unresponsive 58-year-old man with a BVM and an oropharyngeal airway when he suddenly vomits a large amount of stomach contents. What should you do FIRST?",
    options: [
      "Squeeze the bag harder to force oxygen past the vomit",
      "Turn him onto his side and suction his mouth and throat",
      "Remove the BVM and apply a nonrebreather mask at 15 L/min",
      "Continue ventilating at the same rate and suction after the next 2 minutes"
    ],
    correctIndex: 1,
    explanation: "Ventilating through vomit forces it into the lungs, causing aspiration pneumonia and blocking air exchange. Stop ventilating, turn the patient onto his side (using spinal precautions if trauma is suspected), and suction the mouth and oropharynx until clear—no more than 15 seconds at a time in an adult. Then reposition, reinsert the airway adjunct if needed, and resume ventilations with high-flow oxygen. An unresponsive patient who is not breathing adequately still needs positive pressure ventilation, not a nonrebreather.",
    studyTip: "Vomiting during BVM: stop, roll, suction (15 sec max adult), then resume ventilation. Prevent it by ventilating slowly with just enough volume for chest rise."
  },
  {
    id: "AIR-054",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.4,
    stem: "A 45-year-old pool maintenance worker accidentally mixed two pool chemicals and inhaled the fumes in an enclosed pump room. He is now outside, coughing, with a burning throat and mild shortness of breath. The scene has been ventilated, and firefighters say it is safe. What is the MOST appropriate care?",
    options: [
      "Give oxygen, monitor his airway and breathing closely, and transport",
      "Have him drink milk to neutralize the chemical in his lungs",
      "Release him on scene because his symptoms are mild",
      "Rinse his mouth with water and wait to see whether symptoms resolve"
    ],
    correctIndex: 0,
    explanation: "Mixing pool chemicals can release chlorine or similar irritant gases. These gases react with moisture in the airways to cause burning, coughing, airway swelling, bronchospasm, and—sometimes hours later—pulmonary edema. Once the patient is removed from the exposure, give oxygen, monitor for worsening respiratory distress, and transport for evaluation even if symptoms seem mild. Nothing taken by mouth neutralizes an inhaled chemical.",
    studyTip: "Toxic inhalation: get the patient (safely) to fresh air, give oxygen, watch for airway swelling, bronchospasm, and delayed pulmonary edema, and transport."
  },
  {
    id: "AIR-055",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.7,
    stem: "A 7-year-old boy was pulled from a lake after being underwater for about a minute. He coughed up water and is now alert, talking, and says he feels fine. His RR is 26 breaths/min, SpO2 is 93%, and you hear faint crackles in both lung bases. His parents want to take him home. What should you advise?",
    options: [
      "He may go home, because he is alert, talking, and says he feels fine now",
      "He may go home if his SpO2 rises above 94% after 10 minutes of oxygen",
      "He needs transport, because lung injury can worsen over several hours",
      "He should lie flat with his legs raised to help drain water from his lungs"
    ],
    correctIndex: 2,
    explanation: "After a submersion event, aspirated water damages the alveoli and washes away surfactant, which can cause worsening hypoxia and pulmonary edema over the next several hours—even in a patient who initially appears well. Crackles, tachypnea, and a low SpO2 already show that his lungs are affected. Give oxygen, monitor closely, and transport. Explain to the parents why a hospital evaluation is needed, and document carefully if they refuse.",
    studyTip: "Any submersion patient with symptoms (cough, crackles, tachypnea, low SpO2, altered mental status) needs transport—lung injury can be delayed."
  },
  {
    id: "AIR-056",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.0,
    stem: "A 34-year-old hiker who climbed to 12,500 feet over the past day reports worsening shortness of breath at rest, a dry cough that is now producing pink, frothy sputum, and fatigue. You hear crackles in both lungs, and his SpO2 is 74%. What is the MOST important treatment?",
    options: [
      "Have him rest at this altitude for 24 hours so his body can acclimatize",
      "Give high-flow oxygen and bring him to a lower altitude as soon as possible",
      "Have him breathe into a paper bag to slow his breathing and calm him",
      "Assist with albuterol, because the crackles indicate severe bronchospasm"
    ],
    correctIndex: 1,
    explanation: "These findings indicate high-altitude pulmonary edema (HAPE), a life-threatening condition in which low oxygen pressure at altitude causes fluid to leak into the alveoli. The definitive treatment is descent—even 1,000 to 3,000 feet can help—along with high-flow oxygen. Staying at altitude allows the condition to progress. Rebreathing into a bag would worsen hypoxia, and crackles indicate fluid in the alveoli, not bronchospasm.",
    studyTip: "High-altitude illness (acute mountain sickness, HAPE, HACE): the definitive treatment is DESCENT plus oxygen. HAPE = dyspnea at rest, crackles, frothy sputum."
  },
  {
    id: "AIR-057",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Pathophysiology & Perfusion",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.2,
    stem: "A 49-year-old woman with a suspected pulmonary embolism has clear lung sounds, an open airway, a respiratory rate of 28 breaths/min with good chest rise, and an SpO2 of 86% that improves only slightly on a nonrebreather mask. Which statement BEST explains why she remains hypoxic?",
    options: [
      "Her alveoli are filled with fluid, so oxygen cannot reach the capillaries",
      "Her upper airway is partially blocked, so less air reaches the lungs",
      "Her rapid breathing is lowering her carbon dioxide level, which blocks oxygen uptake",
      "Air reaches her alveoli, but a clot keeps blood from flowing past them"
    ],
    correctIndex: 3,
    explanation: "Gas exchange requires both ventilation (air reaching the alveoli) and perfusion (blood flowing through the capillaries around them). In a pulmonary embolism, a clot blocks blood flow to part of the lung. Those alveoli are still ventilated—so lung sounds are clear and the chest rises well—but no blood passes by to carry the oxygen away. This ventilation/perfusion mismatch explains hypoxia that responds poorly to oxygen. Fluid-filled alveoli would produce crackles.",
    studyTip: "Ventilation without perfusion (pulmonary embolism) = clear lungs but low SpO2. Perfusion without ventilation (pneumonia, pulmonary edema, collapsed lung) = abnormal lung sounds."
  },
  {
    id: "AIR-058",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Positive Pressure Ventilation & BVM",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.9,
    stem: "A 3-year-old boy with a tracheostomy is in severe respiratory distress and becoming cyanotic. His mother says the trach tube came out, and she cannot reinsert it. You can see the open stoma in his neck. What should you do?",
    options: [
      "Ventilate over the stoma with a small, sealed BVM mask; if that fails, seal it and ventilate by mouth",
      "Push the old trach tube back into the stoma firmly, even if you meet resistance, so the airway is secured",
      "Place a nasal cannula at 2 L/min over the stoma, keep him calm, and transport him without delay",
      "Insert an oropharyngeal airway into the stoma and ventilate through it with a BVM and oxygen"
    ],
    correctIndex: 0,
    explanation: "When a trach tube is dislodged and cannot be replaced, the stoma is still a direct opening to the trachea. Use a small infant or child mask over the stoma to make a seal and ventilate with a BVM and high-flow oxygen. If the upper airway is intact and stoma ventilation fails, cover the stoma with a gloved finger or occlusive dressing and ventilate through the mouth and nose. Forcing a tube can create a false passage. Transport rapidly, and bring the tube and any spare.",
    studyTip: "Dislodged trach: ventilate over the stoma with a small, sealed mask; if that fails and the upper airway is intact, seal the stoma and ventilate by mouth/nose. Never force a tube."
  },
  {
    id: "AIR-059",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Pathophysiology & Perfusion",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.8,
    stem: "An 8-month-old infant has had a cold for several days. He is now limp and difficult to arouse. His respiratory rate is 20 breaths/min with shallow chest movement, his heart rate is 98 beats/min, and his SpO2 is 88%. Which statement BEST describes his breathing?",
    options: [
      "His breathing is adequate, because 20 breaths/min is within the normal adult range",
      "His breathing is too fast, and he should be coached to slow down",
      "His breathing is inadequate; his rate is too slow for his age, and he needs BVM ventilation",
      "His breathing is adequate as long as his heart rate stays above 60 beats/min"
    ],
    correctIndex: 2,
    explanation: "Normal respiratory rates are much faster in infants (about 30–60 breaths/min) than in adults. A rate of 20 breaths/min with shallow breathing in an infant is dangerously slow. Combined with lethargy, a falling heart rate (normal infant HR is about 100–160), and hypoxia, it indicates respiratory failure. Begin BVM ventilation at about 20–30 breaths/min (1 breath every 2–3 seconds) with high-flow oxygen, and transport rapidly.",
    studyTip: "Normal RR: infant 30–60, toddler 24–40, preschooler 22–34, school age 18–30, adolescent 12–16. A 'normal adult' rate in an infant is bradypnea."
  },
  {
    id: "AIR-060",
    source: "Claude",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Pathophysiology & Perfusion",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.1,
    stem: "A 19-year-old man dove into a shallow pond. He is alert but cannot move his arms or legs. His chest wall barely moves when he breathes; instead, his abdomen rises with each breath. His RR is 30 breaths/min and shallow, and his SpO2 is 89%. What is the BEST explanation and response?",
    options: [
      "He is anxious and hyperventilating; coach him to slow his breathing and give oxygen",
      "A neck injury has paralyzed his chest wall; stabilize his spine and assist with a BVM",
      "He has a tension pneumothorax; apply an occlusive dressing to his chest and transport rapidly",
      "Abdominal breathing is normal in young adults; give oxygen by nasal cannula and monitor"
    ],
    correctIndex: 1,
    explanation: "The intercostal muscles are controlled by nerves from the thoracic spinal cord, while the diaphragm is controlled by the phrenic nerve (C3–C5). A cervical cord injury below C5 can paralyze the chest wall muscles while sparing the diaphragm, producing 'diaphragmatic' or abdominal breathing that is shallow and inadequate. An injury at C3–C5 or higher can stop breathing entirely. Maintain manual spinal stabilization, assist ventilations with a BVM using a jaw-thrust, and transport rapidly.",
    studyTip: "'C3, 4, 5 keeps the diaphragm alive.' Abdominal-only breathing after a neck injury = cervical cord injury; ventilations will probably need support."
  }
);


// ============================================================================
// Batch 3: Additional 20 Airway, Respiration & Ventilation Questions (AIR-061 to AIR-080)
// ============================================================================
window.NREMT_QUESTIONS.push(
  {
    id: "AIR-061",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Adjuncts & Suctioning",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.0,
    stem: "You are inserting an oropharyngeal airway (OPA) into an unresponsive 50-year-old adult with no gag reflex. Using the standard adult insertion technique, how should you advance the device?",
    options: [
      "Insert with the tip toward the roof of the mouth, then rotate it 180 degrees",
      "Insert with the tip toward the tongue, then push straight down into the throat",
      "Lubricate the flange with petroleum jelly and twist it 90 degrees into the cheek",
      "Advance the device along the side of the teeth until the flange passes the lips"
    ],
    correctIndex: 0,
    explanation: "In an adult, the standard method for inserting an OPA is to hold the airway upside down with the tip pointing toward the hard palate (roof of the mouth), advance it past the crest of the tongue until you meet the soft palate, and then rotate it 180 degrees so the curve rests over the tongue and the flange sits against the lips. (Using a tongue blade to insert it right-side up is also acceptable and is required in infants and children).",
    studyTip: "Adult OPA insertion: Tip toward the roof of the mouth, advance past the tongue, then rotate 180 degrees until the flange rests on the lips."
  },
  {
    id: "AIR-062",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Oxygenation & Delivery Devices",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.9,
    stem: "When administering supplemental oxygen to an adult through a standard nasal cannula, what is the appropriate flow rate range and approximate oxygen concentration delivered?",
    options: [
      "10 to 15 L/min, delivering roughly 80% to 95% inspired oxygen concentration",
      "1 to 6 L/min, delivering roughly 24% to 44% inspired oxygen concentration",
      "6 to 10 L/min, delivering roughly 40% to 60% inspired oxygen concentration",
      "0.5 to 2 L/min, delivering roughly 60% to 75% inspired oxygen concentration"
    ],
    correctIndex: 1,
    explanation: "A standard nasal cannula is used at flow rates of 1 to 6 L/min and delivers an inspired oxygen concentration (FiO2) of roughly 24% to 44% (increasing by about 4% per liter of flow above 21% room air). Flow rates above 6 L/min through a standard nasal cannula dry and irritate the nasal mucosa without meaningfully increasing oxygenation.",
    studyTip: "Nasal cannula: 1–6 L/min = ~24%–44% O2. Simple face mask: 6–10 L/min = ~40%–60% O2. Nonrebreather: 10–15 L/min = ~80%–95% O2."
  },
  {
    id: "AIR-063",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Adjuncts & Suctioning",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.8,
    stem: "You have sized and lubricated a nasopharyngeal airway (NPA) for a semiconscious patient with an intact gag reflex. When inserting the NPA into the right nostril, how should the beveled tip be oriented?",
    options: [
      "Pointed straight upward toward the bridge of the nose and frontal sinus",
      "Turned outward against the lateral wall of the nostril and nasal turbinates",
      "Facing inward toward the nasal septum and advanced along the nasal floor",
      "Rotated in full 360-degree circles while pushing upward toward the cheekbone"
    ],
    correctIndex: 2,
    explanation: "Most NPAs are designed to be placed in the right nostril first. The beveled (angled) tip must face the nasal septum (the center wall of the nose) so the smooth, rounded edge slides past the vascular nasal turbinates without tearing them and causing epistaxis. Advance it gently straight back along the floor of the nasal cavity, not upward toward the eyes.",
    studyTip: "NPA insertion: Right nostril preferred, bevel facing the septum, advance straight back along the floor of the nose."
  },
  {
    id: "AIR-064",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Anatomy & Assessment",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.7,
    stem: "Which of the following patients should be placed in the recovery position (lateral recumbent position) to help maintain a patent airway?",
    options: [
      "An apneic 40-year-old male who was ejected from a pickup truck",
      "An alert 65-year-old female with severe pulmonary edema and crackles",
      "A 28-year-old male with neck pain after diving into a shallow pool",
      "An unresponsive 32-year-old female breathing adequately with no trauma"
    ],
    correctIndex: 3,
    explanation: "The recovery (left lateral recumbent) position uses gravity to keep the tongue forward and allow saliva, blood, or vomitus to drain out of the mouth in an unresponsive or semiconscious patient who is breathing adequately and has no suspected spinal, hip, or pelvic injury. Patients who are apneic need supine BVM ventilation, and trauma patients require spinal motion restriction.",
    studyTip: "Recovery position indication: Unresponsive or postictal patient with adequate spontaneous breathing and NO suspected spinal trauma."
  },
  {
    id: "AIR-065",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Anatomy & Assessment",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.6,
    stem: "What is the approximate normal tidal volume and resting respiratory rate for a healthy average-sized adult?",
    options: [
      "About 500 mL per breath at a rate of 12 to 20 breaths/min",
      "About 150 mL per breath at a rate of 24 to 36 breaths/min",
      "About 1,200 mL per breath at a rate of 6 to 10 breaths/min",
      "About 250 mL per breath at a rate of 8 to 12 breaths/min"
    ],
    correctIndex: 0,
    explanation: "In an average healthy adult at rest, tidal volume (the volume of air moved in or out during a single normal breath) is approximately 500 mL (5 to 7 mL/kg), and the normal resting respiratory rate is 12 to 20 breaths/min, yielding a minute volume of roughly 6 to 8 L/min.",
    studyTip: "Normal adult breathing: Rate = 12–20 breaths/min, Tidal Volume = ~500 mL (5–7 mL/kg), Anatomic Dead Space = ~150 mL."
  },
  {
    id: "AIR-066",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Oxygenation & Delivery Devices",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.7,
    stem: "Why should a simple face mask NEVER be set to an oxygen flow rate below 6 L/min?",
    options: [
      "Low flow causes the mask's one-way flutter valves to freeze shut",
      "Exhaled carbon dioxide accumulates inside the mask and is rebreathed",
      "Flow below 6 L/min creates excessive positive airway pressure in the lungs",
      "The humidifier bottle will rupture if oxygen flow is set below 6 L/min"
    ],
    correctIndex: 1,
    explanation: "A simple face mask has open side ports and no reservoir bag, holding roughly 100 to 200 mL of dead space over the patient's face. An oxygen flow rate of at least 6 L/min (typically 6 to 10 L/min) is required to flush the patient's exhaled carbon dioxide out of the mask between breaths so the patient does not rebreathe CO2.",
    studyTip: "Never run a simple face mask below 6 L/min (or a nonrebreather below 10 L/min), or the patient will rebreathe exhaled carbon dioxide."
  },
  {
    id: "AIR-067",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Oxygenation & Delivery Devices",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.2,
    stem: "You have placed a nonrebreather mask at 10 L/min on a tachypneic 49-year-old man who is breathing deeply at 28 breaths/min. You notice that the reservoir bag flattens completely every time he inhales. What should you do?",
    options: [
      "Switch him immediately to a nasal cannula at 4 L/min so he can breathe room air",
      "Peel off both rubber one-way valves from the sides of the plastic face mask",
      "Increase the oxygen flow rate to 15 L/min so the bag stays at least two-thirds full",
      "Instruct the patient to hold his breath for 5 seconds between each inhalation"
    ],
    correctIndex: 2,
    explanation: "The reservoir bag on a nonrebreather mask should deflate by no more than one-third during a deep inhalation. If a patient with a high minute volume completely collapses the reservoir bag on inspiration, they will feel suffocated and draw in less oxygen. Increase the oxygen regulator flow to 15 L/min (or higher if needed) and verify there are no kinks in the tubing.",
    studyTip: "Nonrebreather reservoir bag must remain at least two-thirds inflated during inspiration; if it collapses, increase the O2 flow rate to 15 L/min."
  },
  {
    id: "AIR-068",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Adjuncts & Suctioning",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "While suctioning an unresponsive patient who just vomited, thick chunks of undigested food repeatedly clog the tip of your rigid Yankauer catheter, and loud gurgling continues. What is the BEST way to clear the airway?",
    options: [
      "Pour 100 mL of sterile saline into the mouth to dissolve the solid food particles",
      "Stop suctioning and force air past the vomit using a bag-valve mask at 15 L/min",
      "Switch to a narrow soft French whistle-tip catheter and advance it down the nose",
      "Roll the patient onto his side and sweep out large debris or suction with open tubing"
    ],
    correctIndex: 3,
    explanation: "When thick vomitus or large food chunks overwhelm or clog a rigid Yankauer tip, immediately log-roll the patient onto their side so gravity helps drain the mouth, wipe out visible solid chunks with a gloved finger wrapped in gauze, or remove the Yankauer tip and use the wide-bore suction tubing directly.",
    studyTip: "When thick vomit clogs a Yankauer tip: Roll the patient onto their side, clear visible solid chunks with a gloved finger, or remove the catheter tip and suction with the wide-bore tubing."
  },
  {
    id: "AIR-069",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Anatomy & Assessment",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: -0.1,
    stem: "Why does simple nasal congestion from a common viral cold frequently cause significant respiratory distress and poor feeding in a 2-month-old infant?",
    options: [
      "Young infants are obligate nose breathers and do not readily switch to mouth breathing",
      "Nasal mucus drains directly into the alveoli and deactivates pulmonary surfactant",
      "Viral colds cause the infant's cricoid cartilage to collapse during exhalation",
      "Infants under 6 months lack intercostal muscles and rely entirely on nasal pressure"
    ],
    correctIndex: 0,
    explanation: "Infants under 4 to 6 months of age have a large tongue relative to their oropharynx and a high-riding epiglottis, making them primarily obligate nose breathers. Even mild nasal secretions can substantially increase their work of breathing and prevent feeding; gentle suctioning of the nostrils with a bulb syringe (compressing the bulb BEFORE placing the tip in the nostril) often dramatically relieves their distress.",
    studyTip: "Infants < 6 months are obligate nose breathers! Simple nasal mucus can cause severe respiratory distress—clear the nostrils gently with a bulb syringe (squeeze bulb BEFORE inserting)."
  },
  {
    id: "AIR-070",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Positive Pressure Ventilation & BVM",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "You are ventilating an apneic patient with a bag-valve mask when your portable oxygen cylinder runs completely empty. While your partner retrieves a fresh oxygen cylinder from the ambulance, what should you do?",
    options: [
      "Stop ventilating the patient until the new oxygen tank is connected to the BVM",
      "Continue BVM ventilations without oxygen, as room air still provides 21% oxygen",
      "Switch to mouth-to-mask breathing without a barrier device to deliver higher oxygen",
      "Perform chest compressions instead of ventilations until the oxygen tank arrives"
    ],
    correctIndex: 1,
    explanation: "A self-inflating bag-valve mask refills with ambient room air (21% oxygen) even when disconnected from an oxygen cylinder. Never stop ventilating an apneic patient while waiting for a fresh oxygen cylinder—continuing BVM ventilations with room air maintains alveolar ventilation, eliminates carbon dioxide, and delivers 21% oxygen.",
    studyTip: "Never pause BVM ventilations if an oxygen tank runs dry! A self-inflating BVM still delivers 21% room air and removes CO2."
  },
  {
    id: "AIR-071",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "A 66-year-old man with a 45-pack-year smoking history complains of worsening shortness of breath. He is overweight, has dusky cyanotic lips, ankle edema, and a daily productive cough that he says has lasted for the past several winters. Auscultation reveals coarse rhonchi and wheezes. Which condition best fits this presentation?",
    options: [
      "Acute spontaneous pneumothorax",
      "Massive pulmonary thromboembolism",
      "Chronic obstructive bronchitis",
      "Psychogenic hyperventilation syndrome"
    ],
    correctIndex: 2,
    explanation: "Chronic bronchitis (one of the two main phenotypes of COPD, alongside emphysema) is defined clinically by a chronic productive cough lasting at least 3 months per year for 2 consecutive years. Excessive mucus production and airway inflammation obstruct airflow, leading to hypoxemia, cyanosis, hypercapnia, right-sided heart strain (cor pulmonale with ankle edema), and coarse rhonchi/wheezes.",
    studyTip: "COPD phenotypes: Chronic Bronchitis = chronic productive cough, mucus plugging, cyanosis, rhonchi, peripheral edema ('blue bloater'). Emphysema = alveolar destruction, barrel chest, thin build, pursed-lip breathing, quiet breath sounds ('pink puffer')."
  },
  {
    id: "AIR-072",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: 0.3,
    stem: "You respond to a 10-month-old infant who has had severe, rapid-fire coughing fits over the past week. During an episode in front of you, the infant coughs repeatedly on a single exhalation, turns red, and then takes a loud, high-pitched 'whooping' inhalation before vomiting thick mucus. What should you suspect and do?",
    options: [
      "Croup; insert an oropharyngeal airway and begin chest thrusts immediately",
      "Asthma; assist with an adult metered-dose inhaler and lay the infant flat",
      "Epiglottitis; withhold all oxygen and avoid suctioning the infant's mouth",
      "Pertussis; don droplet precautions, suction secretions, and give oxygen"
    ],
    correctIndex: 3,
    explanation: "Pertussis (whooping cough, caused by Bordetella pertussis) causes violent paroxysms of coughing followed by a forceful inspiratory 'whoop' and post-tussive vomiting. In infants, these spells can cause severe hypoxia, exhaustion, or apnea. Wear a surgical mask (droplet precautions), gently suction thick secretions from the mouth/nose, provide humidified or blow-by oxygen, and transport.",
    studyTip: "Paroxysmal coughing spells + inspiratory 'whoop' + post-tussive vomiting in an infant/child = Pertussis (whooping cough). Use droplet precautions, suction secretions, and watch closely for apnea in infants."
  },
  {
    id: "AIR-073",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Positive Pressure Ventilation & BVM",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.1,
    stem: "You are preparing to ventilate an unresponsive 78-year-old edentulous male with a bag-valve mask and notice that he wears upper and lower dentures. How should you manage his dentures?",
    options: [
      "Leave secure dentures in place for a better mask seal, but remove them if loose",
      "Always pry out all dentures immediately before applying the BVM face mask",
      "Push loose dentures deeper into the pharynx to hold the base of the tongue forward",
      "Tape the dentures to the outside of the BVM mask so the cheeks do not sink in"
    ],
    correctIndex: 0,
    explanation: "Without teeth, an elderly patient's cheeks often sink inward, making it very difficult to achieve an airtight BVM face mask seal. If dentures are firm and secure, leave them in place to support the structure of the mouth and improve your mask seal. However, if dentures are loose or dislodged, remove them immediately so they do not block the airway.",
    studyTip: "Dentures during BVM ventilation: Leave secure dentures IN to support a tight mask seal; remove LOOSE dentures so they don't obstruct the airway."
  },
  {
    id: "AIR-074",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Pathophysiology & Perfusion",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: 0.4,
    stem: "While assessing a 2-year-old toddler with severe bronchiolitis, you observe 'seesaw' (paradoxical) breathing in which the chest pulls inward while the abdomen pushes outward on every inspiration, accompanied by head bobbing and grunting. What do these signs indicate?",
    options: [
      "Mild upper airway congestion that can be managed at home with cool mist",
      "Severe work of breathing and impending respiratory failure needing BVM support",
      "Normal diaphragmatic breathing pattern expected in healthy toddlers under age 3",
      "Complete foreign body airway obstruction requiring immediate back blows"
    ],
    correctIndex: 1,
    explanation: "In infants and young children with compliant chest walls, 'seesaw' breathing (chest retracting inward while the abdomen expands outward), head bobbing (neck extension on inhalation, falling forward on exhalation), and expiratory grunting (glottic closure to generate auto-PEEP and keep alveoli open) are ominous signs of severe respiratory distress progressing to respiratory muscle exhaustion and failure. Prepare to assist ventilations with a BVM and transport urgently.",
    studyTip: "Pediatric late warning signs of impending respiratory failure: Seesaw (chest/abdominal) breathing, head bobbing, expiratory grunting, lethargy, and bradypnea."
  },
  {
    id: "AIR-075",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Positive Pressure Ventilation & BVM",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.7,
    stem: "You are ventilating an unresponsive head-injured adult using a BVM fitted with an inline waveform capnography (ETCO2) sensor. The monitor displays a regular rectangular waveform with an ETCO2 reading of 58 mmHg, and the patient's SpO2 is 97%. How should you adjust your ventilations?",
    options: [
      "Decrease your ventilation rate to 6 breaths/min so he retains more carbon dioxide",
      "Disconnect the oxygen tubing because an SpO2 of 97% indicates dangerous hyperoxia",
      "Slightly increase your ventilation rate or tidal volume toward an ETCO2 of 35–45 mmHg",
      "Keep ventilating at the exact same rate, because 58 mmHg is within normal limits"
    ],
    correctIndex: 2,
    explanation: "Normal end-tidal carbon dioxide (ETCO2) is 35 to 45 mmHg. An ETCO2 of 58 mmHg indicates hypercapnia (hypoventilation—carbon dioxide is building up because minute ventilation is too low). Particularly in a patient with a traumatic brain injury, elevated CO2 causes cerebral vasodilation and worsens intracranial pressure. Modestly increase the ventilation rate (toward 10–12 breaths/min) or ensure adequate chest rise to return ETCO2 to the normal 35–45 mmHg range.",
    studyTip: "Normal ETCO2 = 35–45 mmHg. High ETCO2 (> 45 mmHg) = Hypoventilation (breathe slightly faster/deeper). Low ETCO2 (< 35 mmHg) in a well-perfused patient = Hyperventilation (slow down)."
  },
  {
    id: "AIR-076",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.8,
    stem: "A 20-year-old male with cystic fibrosis has been coughing up thick, greenish sputum for 3 days. He is now pale, exhausted, and too weak to cough effectively. His RR is 10 breaths/min and shallow, HR is 128 beats/min, and SpO2 is 81% on his home nasal cannula. What is your priority action?",
    options: [
      "Increase his nasal cannula flow to 6 L/min and have him drink warm water to thin mucus",
      "Place him on CPAP at 10 cmH2O and transport him in a flat supine position",
      "Have him use a metered-dose inhaler and withhold positive pressure ventilation",
      "Suction visible oral secretions and assist ventilations with a BVM and high-flow oxygen"
    ],
    correctIndex: 3,
    explanation: "Cystic fibrosis is a genetic disorder that produces abnormally thick, sticky mucus in the lungs, leading to chronic airway obstruction and recurrent pulmonary infections. This patient has exhausted his respiratory muscles and progressed into hypoventilatory respiratory failure (shallow RR of 10, inability to clear secretions, SpO2 81%). CPAP is contraindicated in hypoventilation/exhaustion with thick secretions; instead, suction the upper airway as needed and immediately assist his breathing with a BVM and high-flow oxygen.",
    studyTip: "When a patient with chronic lung disease (CF, COPD, asthma) becomes exhausted with slow, shallow respirations, CPAP is no longer sufficient—switch immediately to BVM assisted ventilations!"
  },
  {
    id: "AIR-077",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Pathophysiology & Perfusion",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.9,
    stem: "A 6-year-old girl is pulled from a neighborhood swimming pool after a brief submersion. She has a strong carotid pulse of 110 beats/min but is unresponsive, cyanotic, and making no respiratory effort. When you squeeze the BVM on your first breath, you feel high resistance and see minimal chest rise despite a good jaw-thrust and mask seal. What should you do?",
    options: [
      "Reposition the airway, suction the mouth, and give steady BVM breaths to expand the lungs",
      "Perform five abdominal thrusts to force the swallowed pool water out of her lungs first",
      "Hold the child upside down by her ankles for 15 seconds so gravity drains her lower airways",
      "Stop attempting ventilations and begin chest compressions until the water is absorbed"
    ],
    correctIndex: 0,
    explanation: "In drowning/submersion victims, even a small amount of water entering the larynx can trigger severe vocal cord spasm (laryngospasm) and wash out pulmonary surfactant, causing stiff, noncompliant lungs (atelectasis). Never perform abdominal thrusts or try to 'drain water' from the lungs—doing so delays oxygenation and causes gastric regurgitation and aspiration. Reposition the airway, suction visible water/vomitus from the oropharynx, and deliver deliberate, effective positive pressure ventilations with a BVM and 100% oxygen.",
    studyTip: "Drowning resuscitation: NEVER perform abdominal thrusts to drain water from the lungs! Open the airway, suction the mouth, and deliver positive pressure BVM ventilations."
  },
  {
    id: "AIR-078",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Anatomy & Assessment",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.0,
    stem: "A 63-year-old man who started taking lisinopril for high blood pressure last month wakes up with massive, painless swelling of his lips and tongue, a muffled voice, and drooling. He has no hives, no itching, normal blood pressure (146/88 mmHg), and clear lung sounds without wheezing. What is the greatest immediate threat to this patient?",
    options: [
      "Distributive shock from widespread capillary leakage in the lower extremities",
      "Complete upper airway obstruction from progressive ACE-inhibitor angioedema",
      "Lower airway bronchospasm requiring nebulized albuterol as the primary therapy",
      "Acute cardiogenic pulmonary edema caused by sudden left ventricular pump failure"
    ],
    correctIndex: 1,
    explanation: "ACE inhibitors (medications ending in '-pril', such as lisinopril or enalapril) can cause isolated, severe angioedema of the lips, tongue, floor of the mouth, and larynx weeks or even years after starting the drug. Even without hives or wheezing, the rapidly swelling tongue and glottis can completely occlude the upper airway. Keep the patient upright in a position of comfort, administer high-flow oxygen, prepare for difficult BVM ventilation (NPA may be needed before swelling closes the pharynx), and request immediate ALS intercept for definitive airway management.",
    studyTip: "ACE-inhibitor ('-pril') angioedema presents with massive lip/tongue swelling, drooling, and voice changes (often without hives). Request ALS early—the tongue can rapidly occlude the entire oral airway!"
  },
  {
    id: "AIR-079",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Positive Pressure Ventilation & BVM",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.9,
    stem: "You have been ventilating an apneic 4-year-old boy with a BVM for 4 minutes during transport. His abdomen has become visibly distended and tympanic, his SpO2 is dropping from 95% to 86%, and it takes much more pressure on the bag to produce even slight chest rise. His airway is clear of secretions and his head is in a neutral sniffing position. What is causing his deterioration, and how should you respond?",
    options: [
      "He has developed acute asthma; squeeze the bag twice as fast to force air past his bronchioles",
      "His trachea has collapsed from neutral positioning; hyperextend his neck as far back as possible",
      "Gastric distension is restricting lung expansion; use gentle 1-second breaths and call ALS",
      "The BVM pressure valve is stuck; press firmly on his stomach to push the trapped air out"
    ],
    correctIndex: 2,
    explanation: "Children are especially prone to gastric inflation during BVM ventilation because their lower esophageal sphincter opens easily and their lungs rely heavily on diaphragm excursion. When the stomach fills with air, it pushes the diaphragm upward into the chest, dramatically reducing lung compliance and tidal volume. Never press manually on the stomach to expel air (causes massive regurgitation and fatal aspiration!). Instead, slow down and deliver smooth 1-second breaths using only enough volume to make the chest rise, keep suction ready, and have ALS decompress the stomach with an orogastric/nasogastric tube.",
    studyTip: "Never press on a distended abdomen to relieve gastric inflation—it causes vomiting and aspiration! Use gentle 1-second squeezes just until chest rise and have ALS place a gastric tube."
  },
  {
    id: "AIR-080",
    source: "Gemini",
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Airway Anatomy & Assessment",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.1,
    stem: "A 41-year-old woman was rescued from a bedroom fire. She is alert and speaking in full sentences with a brassy, hoarse voice. You note singed nasal hairs, soot around her mouth, and carbonaceous (black-flecked) sputum when she coughs. Her SpO2 reads 98% on room air and her lungs are currently clear. How should you manage her?",
    options: [
      "Allow her to sign a refusal if she feels fine, since her lungs are clear and SpO2 is 98%",
      "Insert an oropharyngeal airway right away to stent her vocal cords open before swelling",
      "Administer room air only and transport non-emergently to the closest urgent care clinic",
      "Give high-flow oxygen, request ALS early, and transport rapidly for impending airway edema"
    ],
    correctIndex: 3,
    explanation: "Facial burns, singed nasal hairs, soot in the mouth/sputum, brassy cough, and hoarseness after an enclosed-space fire are classic warning signs of upper airway thermal injury and carbon monoxide inhalation. Superheated air causes progressive mucosal edema of the supraglottic airway that can turn a hoarse voice into complete, un-intubatable airway obstruction within minutes. In addition, an SpO2 of 98% can be falsely reassuring due to carboxyhemoglobin. Administer high-flow 100% oxygen, request ALS intercept early, and transport rapidly.",
    studyTip: "Enclosed fire + hoarseness, stridor, singed nasal hairs, or carbonaceous sputum = impending upper airway thermal closure! Give high-flow O2, call ALS early, and transport emergently."
  }
);
