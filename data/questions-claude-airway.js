// NREMT EMT Cognitive Exam Practice Question Bank
// Domain 1: Airway, Respiration & Ventilation — Claude-authored expansion (20 Questions: AIR-021 to AIR-040)
// Author: Claude. Every question in this file is tagged source: "Claude".
// Scope: EMT (2019 National EMS Scope of Practice Model / National EMS Education Standards).
// Difficulty Tiers: 1 = Easy, 2 = Medium, 3 = Hard

window.NREMT_QUESTIONS = window.NREMT_QUESTIONS || [];

window.NREMT_QUESTIONS.push(
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
  }
);
