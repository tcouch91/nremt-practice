// NREMT EMT Cognitive Exam Practice Question Bank
// Domain 1: Airway, Respiration & Ventilation (20 Questions)
// Difficulty Tiers: 1 = Easy, 2 = Medium, 3 = Hard

window.NREMT_QUESTIONS = window.NREMT_QUESTIONS || [];

window.NREMT_QUESTIONS.push(
  {
    id: "AIR-001",
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
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Pathophysiology & Perfusion",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.7,
    stem: "You are assessing a 3-year-old boy with a 2-day history of viral respiratory symptoms. Earlier, his mother noted nasal flaring and intercostal retractions with a respiratory rate of 48 breaths/min. Now, the child is lethargic, limp in his mother's arms, and does not cry when you approach. His respiratory rate has dropped to 12 breaths/min and is shallow, his heart rate is 56 beats/min, and central cyanosis is present. How should you interpret these findings and respond?",
    options: [
      "The child's respiratory distress is resolving as his respiratory rate returns to normal; apply blow-by oxygen",
      "The child has progressed from respiratory distress into decompensated respiratory failure and imminent arrest; begin BVM ventilations and chest compressions immediately",
      "The child is in compensated respiratory distress; administer nebulized albuterol and monitor closely",
      "The child is experiencing a simple febrile seizure postictal state; place him in the recovery position"
    ],
    correctIndex: 1,
    explanation: "In pediatric patients, a falling respiratory rate accompanied by lethargy, limp muscle tone, shallow breathing, and bradycardia (HR < 60 beats/min with poor perfusion) is an ominous sign of impending cardiopulmonary arrest—NOT clinical improvement. In pediatrics, bradycardia is a direct result of severe hypoxia. When a pediatric patient's heart rate drops below 60 beats/min with signs of poor perfusion despite oxygenation/ventilation, you must immediately perform both BVM ventilations and chest compressions.",
    studyTip: "In pediatrics, tachypnea + retractions = early respiratory distress. Bradypnea + lethargy + bradycardia (HR < 60 with poor perfusion) = decompensated respiratory failure / imminent arrest requiring BVM + CPR!"
  },
  {
    id: "AIR-016",
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
    domain: "Airway, Respiration & Ventilation",
    subtopic: "Lower Airway & Pulmonary Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.1,
    stem: "You are called for a 24-year-old female with a history of severe asthma who has been using her albuterol inhaler repeatedly over the past 3 hours without relief. Upon arrival, she is drowsy, diaphoretic, and sitting slumped forward. When you auscultate her chest, you hear almost no air movement and no wheezing bilaterally. Her RR is 32 breaths/min and shallow, HR is 134 beats/min, and SpO2 is 82%. What do these clinical findings indicate?",
    options: [
      "Her bronchospasm has resolved following repeated doses of albuterol",
      "She has a ''silent chest'' indicating severe, life-threatening airflow obstruction and impending respiratory arrest requiring immediate assisted BVM ventilations",
      "She is experiencing an anxiety-induced hyperventilation episode that should be treated with verbal coaching",
      "She has developed right-sided heart failure secondary to beta-agonist toxicity"
    ],
    correctIndex: 1,
    explanation: "Wheezing requires sufficient airflow moving through narrowed bronchioles to generate sound. When an asthma patient becomes exhausted, drowsy, and hypoxic with absent breath sounds and no wheezing ('silent chest'), bronchospasm and mucus plugging have become so severe that almost no air is moving into or out of the alveoli. This is a life-threatening emergency requiring immediate positive pressure ventilation with a BVM (with slow, gentle squeezes and prolonged exhalation times) and rapid transport.",
    studyTip: "A 'Silent Chest' in a status asthmaticus patient with lethargy and hypoxia does NOT mean improvement—it means virtually zero air movement and imminent respiratory arrest."
  },
  {
    id: "AIR-018",
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
  }
);
