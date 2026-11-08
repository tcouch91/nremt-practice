// NREMT EMT Cognitive Exam Practice Question Bank
// Domain 4: Medical; Obstetrics & Gynecology (85 Questions: MED-001 to MED-085)
// Difficulty Tiers: 1 = Easy, 2 = Medium, 3 = Hard
// Scope: EMT (2019 National EMS Scope of Practice Model / National EMS Education Standards).
// Authorship is tracked per question by the `source` field ("Gemini" or "Claude").

window.NREMT_QUESTIONS = window.NREMT_QUESTIONS || [];

window.NREMT_QUESTIONS.push(
  {
    id: "MED-001",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Endocrine & Metabolic Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.1,
    stem: "You are called for a 33-year-old male with type 1 diabetes who is confused, diaphoretic, and shaky. His glucometer reading is 42 mg/dL. He is awake, able to obey commands, and has an intact gag reflex and ability to swallow. What is the MOST appropriate treatment?",
    options: [
      "Administer 1 tube (15 g) of oral glucose gel between his cheek and gum",
      "Insert a nasopharyngeal airway and ventilate with a bag-valve mask",
      "Have the patient take an extra dose of his prescribed rapid-acting insulin",
      "Withhold oral glucose until his blood glucose drops below 30 mg/dL"
    ],
    correctIndex: 0,
    explanation: "Oral glucose is indicated for patients with known or suspected hypoglycemia (< 60 mg/dL with altered mental status/symptomatic) who are conscious enough to swallow and maintain their own airway (intact gag reflex). Never administer insulin in the field, as insulin lowers blood glucose further and would be fatal in hypoglycemia.",
    studyTip: "Oral Glucose Indications: Hypoglycemia (< 60 mg/dL) + Altered Mental Status + Conscious/Able to swallow with intact gag reflex. Contraindication: Unresponsiveness or inability to swallow."
  },
  {
    id: "MED-002",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Allergic Reactions & Anaphylaxis",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.0,
    stem: "A 29-year-old female was stung by a wasp 10 minutes ago. She presents with generalized hives (urticaria), swelling of her lips and tongue, inspiratory stridor, diffuse wheezing, and a blood pressure of 82/48 mmHg. What is the MOST important medication to administer immediately, including the correct adult dose and site?",
    options: [
      "Diphenhydramine 50 mg orally",
      "Epinephrine 0.3 mg (1:1,000) intramuscularly into the anterolateral aspect of the mid-thigh",
      "Albuterol 2.5 mg via nebulizer before any other intervention",
      "Epinephrine 0.15 mg subcutaneously into the deltoid muscle"
    ],
    correctIndex: 1,
    explanation: "This patient is in life-threatening anaphylaxis (multi-system allergic reaction involving airway swelling/stridor, bronchospasm/wheezing, and distributive shock/hypotension). Intramuscular epinephrine (0.3 mg for adults; 0.15 mg for children) injected into the anterolateral mid-thigh (vastus lateralis) is the first-line, life-saving treatment because its alpha-1 effects reverse vasodilation and laryngeal edema while its beta-2 effects bronchodilate the airways.",
    studyTip: "Anaphylaxis vs. Mild Allergic Reaction: Anaphylaxis has Airway/Breathing compromise (stridor, wheezing, tongue swelling) OR Hypotension/Shock. Give IM Epinephrine (Adult 0.3 mg, Child 0.15 mg) into the anterolateral thigh immediately!"
  },
  {
    id: "MED-003",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Neurologic Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.9,
    stem: "When performing the Cincinnati Prehospital Stroke Scale (CPSS) on a 67-year-old female with suspected acute stroke, which three physical findings do you evaluate?",
    options: [
      "Pupil reactivity, blood glucose level, and grip strength",
      "Facial droop, arm drift, and abnormal speech",
      "Neck stiffness, plantar reflex, and gait stability",
      "Eye opening, verbal response, and motor response"
    ],
    correctIndex: 1,
    explanation: "The Cincinnati Prehospital Stroke Scale (CPSS) evaluates three rapid clinical findings: (1) Facial droop (ask the patient to smile or show teeth), (2) Arm drift (ask the patient to close their eyes and hold both arms extended palms up for 10 seconds), and (3) Speech (ask the patient to repeat a simple phrase like 'You can't teach an old dog new tricks'). If any 1 of these 3 signs is abnormal and acute, the probability of a stroke is > 72%.",
    studyTip: "Cincinnati Prehospital Stroke Scale = Facial Droop + Arm Drift (eyes closed for 10 sec) + Speech abnormality. Always document the exact 'Last Known Well' time and check a blood glucose!"
  },
  {
    id: "MED-004",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 1,
    irtB: -0.8,
    stem: "You are transporting a 31-year-old female who is 36 weeks pregnant after a minor slip and fall. Five minutes after being secured supine on the ambulance cot, she complains of sudden dizziness, nausea, and lightheadedness. Her skin is pale and clammy, and her blood pressure has dropped from 118/74 mmHg to 84/52 mmHg. What should you do IMMEDIATELY?",
    options: [
      "Place her in the Trendelenburg position with her feet elevated 12 inches",
      "Tilt or roll the patient onto her left side (left lateral recumbent position) or manually displace the uterus to the left",
      "Administer sublingual nitroglycerin to improve placental blood flow",
      "Have her sit bolt upright at a 90-degree angle"
    ],
    correctIndex: 1,
    explanation: "In the third trimester of pregnancy (or after 20 weeks gestation), lying flat in the supine position causes the heavy gravid uterus to compress the inferior vena cava against the spine, sharply decreasing venous return (preload) to the right atrium and causing maternal hypotension and syncope—known as Supine Hypotensive Syndrome. Positioning the patient on her left side (or tilting the board/cot 15–30 degrees to the left) immediately relieves vena caval compression.",
    studyTip: "Supine Hypotensive Syndrome (>= 20 weeks pregnant): Gravid uterus compresses the inferior vena cava when supine -> Maternal hypotension/dizziness. Treat by positioning in Left Lateral Recumbent position!"
  },
  {
    id: "MED-005",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.7,
    stem: "A 22-year-old male was working outdoors in 98°F (36.7°C) humid weather when he collapsed. His co-workers state he was complaining of headache and muscle cramps earlier. On exam, he is confused and combative, his skin is hot and flushed, his body temperature is 105.2°F (40.6°C), his HR is 136 beats/min, and his BP is 92/56 mmHg. What condition is he experiencing, and what is your FIRST priority after ABCs?",
    options: [
      "Heat exhaustion; give him cold water to drink by mouth",
      "Heat stroke; remove him from the hot environment and begin aggressive active cooling immediately",
      "Heat cramps; massage his calf muscles and transport non-emergently",
      "Hypoglycemia; administer oral glucose paste"
    ],
    correctIndex: 1,
    explanation: "Heat stroke is a true life-threatening thermoregulatory failure defined by a core temperature > 104°F (40°C) accompanied by central nervous system dysfunction (altered mental status, confusion, ataxia, seizures, or coma). Unlike heat exhaustion (where mental status is intact), heat stroke causes rapid multi-organ failure and brain damage unless aggressive rapid cooling (removing clothing, applying ice packs to neck/axillae/groin, misting with water and fanning, or cold water immersion) is started immediately.",
    studyTip: "Heat Exhaustion vs. Heat Stroke: The key differentiator on the NREMT is MENTAL STATUS! Altered mental status + core temp > 104°F (hot skin, wet or dry) = Heat Stroke -> Immediate aggressive cooling!"
  },
  {
    id: "MED-006",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Pediatric Medical Emergencies",
    patientType: "Pediatric",
    difficulty: 1,
    irtB: -0.6,
    stem: "You are dispatched at 1:00 AM for a 2-year-old boy who woke up with a loud, 'seal-like' barking cough and mild inspiratory stridor when crying. His mother states he has had a low-grade fever and runny nose for 2 days. He is alert, sitting comfortably on his mother's lap, not drooling, and able to drink sips of water. His SpO2 is 96%. What condition do you suspect, and how should you manage him?",
    options: [
      "Acute bacterial epiglottitis; attempt to visualize the epiglottis with a tongue depressor",
      "Laryngotracheobronchitis (croup); keep the child calm on his mother's lap and provide cool mist or humidified oxygen as needed",
      "Foreign body aspiration; perform 5 back slaps and 5 chest thrusts immediately",
      "Asthma exacerbation; force an oropharyngeal airway into place"
    ],
    correctIndex: 1,
    explanation: "Croup (viral laryngotracheobronchitis) typically affects children aged 6 months to 3 years, preceded by a few days of upper respiratory symptoms and low-grade fever, worsening at night with a classic 'seal-bark' cough and inspiratory stridor due to subglottic edema. Keep the child calm and comfortable on the parent's lap, avoid agitating exams, and administer humidified oxygen or cool mist if hypoxic.",
    studyTip: "Croup vs. Epiglottitis:\n• Croup = Slow onset (days), low-grade fever, 'seal-bark' cough, no drooling.\n• Epiglottitis = Sudden onset (hours), high fever, tripod position, drooling (dysphagia), muffled voice, NO barking cough."
  },
  {
    id: "MED-007",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 1,
    irtB: -0.8,
    stem: "As a newborn's head delivers during an emergency field childbirth, you observe that the umbilical cord is wrapped tightly once around the infant's neck (nuchal cord). What should you do FIRST?",
    options: [
      "Immediately clamp and cut the cord before attempting to slip it over the head",
      "Push the infant's head back into the birth canal and transport emergently",
      "Attempt to gently slip the cord over the infant's head (or shoulder) with two fingers",
      "Pull forcefully on the infant's head to complete delivery despite the tight cord"
    ],
    correctIndex: 2,
    explanation: "When a nuchal cord (umbilical cord around the baby's neck) is discovered after delivery of the head, FIRST attempt to gently slip the loop of cord over the infant's head (or shoulders) using two fingers. ONLY if the cord is too tight to slip over the head should you place two clamps 2 inches apart, cut the cord between the clamps, unwrap it, and complete the delivery.",
    studyTip: "Nuchal Cord sequence: (1) Gently slip cord over the baby's head with fingers. (2) If too tight to slip over the head, clamp in two places and cut between the clamps BEFORE delivering the shoulders."
  },
  {
    id: "MED-008",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.5,
    stem: "Why is activated charcoal rarely administered—and absolutely contraindicated—in patients who have ingested strong acids, alkalis (corrosives), or petroleum distillates (such as gasoline or kerosene)?",
    options: [
      "Activated charcoal reacts chemically with acids to form cyanide gas",
      "Charcoal does not bind to acids, alkalis, or hydrocarbons, obscures endoscopic view of esophageal burns, and increases the risk of vomiting and fatal chemical aspiration",
      "Charcoal causes severe hypertension in patients who ingest hydrocarbons",
      "Acids dissolve the plastic bottle containing activated charcoal"
    ],
    correctIndex: 1,
    explanation: "Activated charcoal is contraindicated in ingestions of caustics/corrosives (strong acids/alkalis like drain cleaner or bleach), hydrocarbons/petroleum distillates (gasoline, kerosene, paint thinner), heavy metals (iron, lithium), alcohols, and in any patient with altered mental status who cannot protect their airway. Charcoal does not bind these substances, ruins endoscopic visualization of tissue burns, and if the patient vomits, causes chemical burns or fatal hydrocarbon aspiration pneumonitis.",
    studyTip: "Activated Charcoal Contraindications (PHAILS): Pesticides/Petroleum hydrocarbons, Heavy metals, Acids/Alkalis/Alcohols, Iron, Lithium, Solvents—plus any patient with altered mental status or inability to swallow!"
  },
  {
    id: "MED-009",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Endocrine & Metabolic Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.2,
    stem: "You are assessing a 21-year-old female with type 1 diabetes who has had nausea, vomiting, and abdominal pain for 2 days after running out of insulin. She is lethargic, has dry mucous membranes and sunken eyes, a fruity 'acetone' odor on her breath, and rapid, deep respirations at 32 breaths/min. Her glucometer reads 'HIGH' (> 500 mg/dL), HR is 126 beats/min, and BP is 94/60 mmHg. What is the physiological purpose of her rapid, deep breathing (Kussmaul respirations)?",
    options: [
      "She is retaining carbon dioxide to compensate for metabolic alkalosis",
      "Her body is attempting to blow off carbon dioxide (an acid) to compensate for severe metabolic ketoacidosis",
      "She has developed cardiogenic pulmonary edema from fluid overload",
      "She is experiencing psychogenic hyperventilation unrelated to her diabetes"
    ],
    correctIndex: 1,
    explanation: "In Diabetic Ketoacidosis (DKA), the absence of insulin prevents glucose from entering cells, forcing the body to break down fats into acidic ketones. To compensate for this life-threatening metabolic acidosis, the brainstem triggers Kussmaul respirations—deep, rapid sighing breaths that exhale large amounts of carbon dioxide (CO2 / carbonic acid) and volatile acetone (producing the classic fruity breath odor). Never attempt to slow down Kussmaul respirations!",
    studyTip: "DKA Triad: Hyperglycemia (typically > 250–500 mg/dL) + Ketonemia (fruity acetone breath) + Metabolic Acidosis compensated by Kussmaul respirations (deep, rapid breaths) and severe osmotic dehydration (polyuria, polydipsia, polyphagia)."
  },
  {
    id: "MED-010",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Neurologic Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "You are called for a 30-year-old male with a history of epilepsy who has been having continuous generalized tonic-clonic seizure activity for the past 12 minutes without regaining consciousness. What is this condition called, and what is the primary threat to the patient's life?",
    options: [
      "Simple partial seizure; risk of temporary amnesia",
      "Status epilepticus; prolonged apnea/hypoventilation, severe cerebral hypoxia, hyperthermia, and neuronal death",
      "Absence (petit mal) seizure; risk of syncopal falls",
      "Postictal state; risk of transient hypertension"
    ],
    correctIndex: 1,
    explanation: "Status epilepticus is defined as a continuous seizure lasting more than 5 minutes OR two or more consecutive seizures without a return to baseline consciousness between them. During tonic-clonic seizures, chest wall and diaphragm muscles spasm while brain metabolic demand skyrockets, rapidly leading to profound hypoxia, hypercarbia, lactic acidosis, hyperthermia, hypoglycemia, and permanent brain damage. Protect the patient from injury, manage the airway (NPA, suction, BVM oxygenation), check glucose, and request immediate ALS intercept for benzodiazepines.",
    studyTip: "Status Epilepticus = Seizure lasting > 5 minutes OR multiple seizures without regaining consciousness in between. Priority: Airway (NPA, never OPA during active clenching), high-flow O2/BVM, glucose check, and urgent ALS intercept."
  },
  {
    id: "MED-011",
    source: "Gemini",
    reviewNote: "Clarified by Claude: atropine/pralidoxime for patients is an ALS intervention; EMTs generally use auto-injectors for self/peer care or per local protocol.",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "A 46-year-old agricultural worker collapsed while spraying crops in a greenhouse. He is confused and in severe respiratory distress with copious watery secretions pouring from his mouth and nose, pinpoint pupils (miosis), profuse sweating, tearing, vomiting, urinary incontinence, and diffuse wheezing. His heart rate is 44 beats/min. Which toxidrome is he exhibiting?",
    options: [
      "Anticholinergic toxicity (e.g., atropine or jimsonweed)",
      "Cholinergic toxicity from organophosphate insecticide poisoning (SLUDGEM / DUMBBELS)",
      "Sympathomimetic overdose (e.g., methamphetamine or cocaine)",
      "Tricyclic antidepressant overdose"
    ],
    correctIndex: 1,
    explanation: "Organophosphate insecticides (and nerve agents like sarin/VX) irreversibly inhibit acetylcholinesterase, causing massive accumulation of acetylcholine at muscarinic and nicotinic receptors (cholinergic crisis). Remember the mnemonic SLUDGEM / DUMBBELS: Salivation, Lacrimation, Urination, Defecation/Diarrhea, GI cramping, Emesis, Miosis (pinpoint pupils), plus Killer B's: Bronchorrhea, Bronchospasm, and Bradycardia. Ensure scene safety/decontamination first, aggressively suction and ventilate the airway, and request ALS for high-dose atropine and pralidoxime (2-PAM).",
    studyTip: "Organophosphate / Nerve Agent Poisoning = Cholinergic Crisis (SLUDGEM + Killer B's: Bradycardia, Bronchorrhea, Bronchospasm). Decontaminate FIRST, suction and ventilate, and request ALS for atropine/pralidoxime. (EMTs typically use DuoDote/Mark I auto-injectors only for self/peer care or per local protocol.)"
  },
  {
    id: "MED-012",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "During a winter power outage, a family of four has been running a gasoline generator inside an attached garage. All four family members complain of throbbing headaches, dizziness, nausea, and weakness. You apply a standard two-wavelength pulse oximeter to the father and obtain an SpO2 reading of 100% on room air. How should you interpret this pulse oximetry reading and treat the patients?",
    options: [
      "The 100% SpO2 rules out carbon monoxide poisoning; suspect viral food poisoning",
      "Standard pulse oximeters cannot distinguish carboxyhemoglobin from oxyhemoglobin and give falsely normal or elevated readings in carbon monoxide poisoning; administer 100% oxygen via nonrebreather mask immediately",
      "Administer a nasal cannula at 2 L/min because their SpO2 is already 100%",
      "Have the patients remain in the home while you ventilate the garage"
    ],
    correctIndex: 1,
    explanation: "Carbon monoxide (CO) binds to hemoglobin with roughly 200 to 250 times the affinity of oxygen, forming carboxyhemoglobin (COHb) and starving tissues of oxygen. Standard pulse oximeters cannot differentiate bright-red carboxyhemoglobin from oxyhemoglobin, so they display a falsely normal (98%–100%) SpO2 even when the patient has lethal tissue hypoxia. Remove all patients to fresh air and immediately administer high-flow 100% oxygen via nonrebreather mask (which reduces the half-life of carboxyhemoglobin from ~4–5 hours on room air to ~60–90 minutes).",
    studyTip: "Carbon Monoxide (CO) Poisoning: Flu-like symptoms (headache, nausea, dizziness) affecting multiple people/pets in an enclosed space. Standard SpO2 is FALSELY NORMAL (100%)! Treat immediately with 100% O2 via NRB and consider hyperbaric center transport."
  },
  {
    id: "MED-013",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Abdominal, GI & Renal Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "You are caring for a 57-year-old male with end-stage renal disease who receives hemodialysis three times a week. He has a surgically created arteriovenous (AV) fistula in his left forearm. When obtaining his vital signs, which rule MUST you follow?",
    options: [
      "Always inflate the blood pressure cuff over the AV fistula to check its patency",
      "Never obtain a blood pressure on the arm with the AV fistula; use the opposite arm (or thigh) to prevent clotting or rupturing the fistula",
      "Apply a tourniquet above the AV fistula during transport to prevent fluid overload",
      "Palpate the AV fistula forcefully for 2 minutes to stop the buzzing thrill"
    ],
    correctIndex: 1,
    explanation: "An arteriovenous (AV) fistula or graft is a dialysis patient's lifeline, created by surgically connecting an artery and a vein. A functioning fistula normally has a palpable vibration ('thrill') and an audible swishing sound ('bruit'). Never take a blood pressure, apply constriction, or perform venipuncture on the extremity with an AV fistula or shunt, as compression can cause thrombosis (clotting) or hemorrhage.",
    studyTip: "Dialysis AV Fistula/Graft: Normal findings = palpable 'thrill' and audible 'bruit'. NEVER take a blood pressure on the fistula arm! If the fistula bleeds uncontrollably, apply direct pressure (and tourniquet only as a last resort for life-threatening arterial hemorrhage)."
  },
  {
    id: "MED-014",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 2,
    irtB: 0.3,
    stem: "You are called for a 27-year-old female in active labor at 39 weeks gestation whose amniotic sac just ruptured. Upon visual inspection of the perineum, you see a loop of pulsating umbilical cord protruding from the vagina ahead of the baby's head (prolapsed umbilical cord). In addition to administering high-flow oxygen, what must you do IMMEDIATELY?",
    options: [
      "Gently push the umbilical cord back into the vagina and hold the labia closed",
      "Place two clamps on the protruding cord and cut between them so the baby can deliver",
      "Position the mother with her hips elevated (knee-chest or Trendelenburg) and insert a sterile gloved hand into the vagina to gently push the fetal presenting part OFF the umbilical cord",
      "Encourage the mother to push as hard as she can during the next contraction"
    ],
    correctIndex: 2,
    explanation: "Umbilical cord prolapse is a true obstetric surgical emergency: each contraction forces the fetal head against the maternal pelvis, pinching the umbilical cord shut and cutting off all oxygenated blood flow to the fetus (causing fetal asphyxia). Immediately position the mother in the knee-chest or Trendelenburg position (hips elevated), insert two fingers of a sterile gloved hand into the vagina to gently lift the baby's head/presenting part off the cord until relieved by the surgical team in the operating room, cover the exposed cord with a moist sterile dressing, and transport rapidly.",
    studyTip: "Prolapsed Umbilical Cord: NEVER push the cord back in! Elevate maternal hips (knee-chest/Trendelenburg), insert a sterile gloved hand to push the BABY'S HEAD off the cord, check for cord pulsations, keep exposed cord moist, and transport emergently."
  },
  {
    id: "MED-015",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 2,
    irtB: 0.2,
    stem: "One minute after delivery, you evaluate a newborn infant using the APGAR score. The infant's body is pink with blue hands and feet (acrocyanosis), the heart rate is 118 beats/min, the infant grimaces and cries weakly when stimulated, has some flexion of the extremities, and has slow, irregular respirations. What is this newborn's 1-minute APGAR score?",
    options: [
      "APGAR 5",
      "APGAR 6",
      "APGAR 8",
      "APGAR 9"
    ],
    correctIndex: 1,
    explanation: "Calculate the APGAR score (0, 1, or 2 points per category at 1 and 5 minutes after birth):\n• Appearance: Body pink, extremities blue (acrocyanosis) = 1 (Completely pink=2, Pale/blue all over=0)\n• Pulse: 118 beats/min (> 100 bpm) = 2 (>100=2, <100=1, Absent=0)\n• Grimace: Grimaces / weak cry to stimulation = 1 (Cries/pulls away=2, Grimace=1, No response=0)\n• Activity: Some flexion of extremities = 1 (Active motion=2, Some flexion=1, Limp/flaccid=0)\n• Respiration: Slow, irregular respirations = 1 (Strong cry=2, Slow/irregular=1, Absent=0)\nTotal APGAR = 1 + 2 + 1 + 1 + 1 = 6.",
    studyTip: "APGAR (Appearance, Pulse, Grimace, Activity, Respiration) at 1 and 5 minutes: Note that nearly all healthy newborns have blue hands/feet (acrocyanosis) at 1 minute, making a score of 9 (not 10) very common!"
  },
  {
    id: "MED-016",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 2,
    irtB: 0.1,
    stem: "Immediately after delivering the placenta, a 25-year-old mother begins experiencing heavy vaginal bleeding exceeding 500 mL, with pale skin and a heart rate of 116 beats/min. What is the MOST effective initial manual intervention to control postpartum hemorrhage?",
    options: [
      "Pack the vaginal canal tightly with sterile trauma dressings",
      "Perform firm, circular uterine fundal massage over the lower abdomen and encourage the mother to breastfeed the newborn if stable",
      "Apply a pelvic binder around the greater trochanters",
      "Have the mother stand upright to allow clots to pass"
    ],
    correctIndex: 1,
    explanation: "The #1 cause of postpartum hemorrhage (blood loss > 500 mL after vaginal delivery) is uterine atony—failure of the uterine smooth muscle to contract and pinch off the placental bed blood vessels. Perform firm, circular fundal massage on the mother's lower abdomen until the uterus feels firm like a grapefruit, place a sanitary pad over the perineum (never pack the vagina!), administer high-flow oxygen, and put the baby to the mother's breast (suckling releases endogenous oxytocin, which stimulates uterine contraction).",
    studyTip: "Postpartum Hemorrhage: Perform firm uterine fundal massage + put newborn to breast (releases natural oxytocin) + place external pads over perineum (NEVER pack the vagina!)."
  },
  {
    id: "MED-017",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Abdominal, GI & Renal Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.1,
    stem: "A 19-year-old male complains of abdominal pain that began yesterday afternoon as a dull, poorly localized ache around his navel (umbilicus). Over the past 4 hours, the pain has migrated to his right lower quadrant (McBurney's point) and has become sharp, constant, and worse whenever he walks or coughs. He also has anorexia, nausea, and a temperature of 100.8°F (38.2°C). What condition should you suspect?",
    options: [
      "Acute cholecystitis",
      "Acute appendicitis",
      "Acute pancreatitis",
      "Diverticulitis"
    ],
    correctIndex: 1,
    explanation: "Acute appendicitis classically begins with dull, visceral periumbilical pain (around the umbilicus), anorexia, and nausea. As inflammation spreads to the parietal peritoneum over the next 4 to 12 hours, the pain localizes sharply to the right lower quadrant at McBurney's point (one-third of the distance from the right anterior superior iliac spine to the umbilicus) with rebound tenderness and low-grade fever.",
    studyTip: "Abdominal Pain Quadrants:\n• RLQ (McBurney's point, starts periumbilical) = Appendicitis\n• RUQ (radiating to right scapula after fatty meal, Murphy's sign) = Cholecystitis\n• Epigastric (radiating straight to back, history of alcohol/gallstones) = Pancreatitis\n• LLQ (fever, older adults) = Diverticulitis."
  },
  {
    id: "MED-018",
    source: "Gemini",
    reviewNote: "Updated by Claude: 'excited delirium' terminology replaced with current terminology.",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Psychiatric & Behavioral Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "Law enforcement requests EMS for a 28-year-old male who was running naked in traffic, smashing car windows with his bare hands, and shouting incoherently. When you arrive, he is extremely agitated, diaphoretic, hyperthermic, tachycardic, and shows seemingly superhuman strength with complete insensitivity to pain from severe hand lacerations. When restraining this patient for safety, which position is STRICTLY CONTRAINDICATED because it rapidly leads to sudden cardiac arrest?",
    options: [
      "Supine on the stretcher with the head elevated 30 degrees",
      "Prone (face-down) restraint or 'hog-tying' with weight applied to the back, which causes positional asphyxia",
      "Left lateral recumbent position with four-point soft restraints",
      "Semi-Fowler's position with continuous capnography and pulse oximetry"
    ],
    correctIndex: 1,
    explanation: "This patient presents with hyperactive delirium with severe agitation (formerly called 'excited delirium'—a term major EMS organizations have retired), a true medical emergency characterized by severe metabolic acidosis, hyperthermia, catecholamine surge, and extreme agitation. Restraining a patient in the prone (face-down) position, 'hog-tying' (hobble-tying wrists to ankles behind the back), or placing weight on the back restricts diaphragm and chest wall movement, preventing the patient from maintaining the high minute ventilation needed to compensate for severe metabolic acidosis—leading to rapid positional asphyxia and fatal cardiac arrest.",
    studyTip: "Hyperactive delirium with severe agitation = True medical emergency (severe acidosis + hyperthermia). NEVER restrain a patient prone (face-down) or sandwich between backboards -> causes fatal Positional Asphyxia!"
  },
  {
    id: "MED-019",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Abdominal, GI & Renal Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "A 54-year-old male with a history of chronic alcoholism and liver cirrhosis vomits a large volume of bright red blood mixed with dark 'coffee-ground' emesis. He also reports passing black, tarry, foul-smelling stools (melena) over the past 2 days. He is pale, diaphoretic, and has a BP of 86/54 mmHg and HR of 128 beats/min. What is the MOST likely source of his life-threatening upper gastrointestinal hemorrhage?",
    options: [
      "Ruptured esophageal varices",
      "Internal hemorrhoids",
      "Lower colonic diverticulosis",
      "Acute renal calculi"
    ],
    correctIndex: 0,
    explanation: "In patients with chronic liver cirrhosis (often from alcoholism or hepatitis), scar tissue in the liver blocks portal venous blood flow (portal hypertension), causing veins at the base of the esophagus to become engorged, fragile, and tortuous (esophageal varices). Rupture of esophageal varices causes massive, painless, life-threatening upper GI hemorrhage (bright red hematemesis, coffee-ground emesis, and melena) and rapid hemorrhagic shock.",
    studyTip: "GI Bleed clues:\n• Upper GI Bleed (esophagus/stomach/duodenum) = Hematemesis (bright red or 'coffee-ground' vomit) + Melena (black, tarry stools).\n• Lower GI Bleed (colon/rectum) = Hematochezia (bright red blood per rectum).\n• Liver Cirrhosis/Alcoholism + painless massive hematemesis = Esophageal Varices."
  },
  {
    id: "MED-020",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 3,
    irtB: 0.8,
    stem: "Compare two pregnant patients who are both at 34 weeks gestation presenting with third-trimester vaginal bleeding:\n• Patient A woke up in a pool of bright red vaginal blood but denies any abdominal pain or contractions; her abdomen is soft and non-tender.\n• Patient B was involved in a minor fall and has sudden, severe, tearing abdominal pain, a rigid 'board-like' uterus that is tender to palpation, and a small amount of dark red vaginal bleeding.\nWhat are the respective diagnoses for Patient A and Patient B?",
    options: [
      "Patient A: Abruptio placentae; Patient B: Placenta previa",
      "Patient A: Placenta previa; Patient B: Abruptio placentae",
      "Patient A: Ectopic pregnancy; Patient B: Braxton-Hicks contractions",
      "Patient A: Preeclampsia; Patient B: Supine hypotensive syndrome"
    ],
    correctIndex: 1,
    explanation: "The two classic causes of third-trimester obstetric hemorrhage are differentiated by pain and uterine tone:\n• Placenta Previa (Patient A): The placenta implants abnormally low over the cervical os. As the cervix thins/dilates in the third trimester, it causes PAINLESS, bright red vaginal bleeding with a soft, non-tender uterus.\n• Abruptio Placentae (Patient B): Premature separation of a normally implanted placenta from the uterine wall (associated with hypertension, trauma, or cocaine use). It causes sudden, PAINFUL, tearing abdominal pain, a rigid/tender uterus, and dark red (or concealed) vaginal bleeding.",
    studyTip: "3rd-Trimester Bleeding Differentiator:\n• Placenta Previa = PAINLESS bright red bleeding + soft uterus.\n• Abruptio Placentae = PAINFUL dark red (or concealed) bleeding + rigid, tender uterus.\nNote: NEVER perform a digital vaginal exam in third-trimester bleeding!"
  },
  {
    id: "MED-021",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.9,
    stem: "You have just delivered a full-term newborn infant. You warm, dry, position the airway, suction the mouth then nose, and stimulate the infant for 30 seconds. Despite these initial steps, the newborn remains limp and apneic, and you palpate a heart rate of 52 beats/min at the base of the umbilical cord. What is your MOST appropriate next step according to the Neonatal Resuscitation algorithm?",
    options: [
      "Immediately begin chest compressions at a 3:1 ratio before providing any positive pressure ventilation",
      "Begin positive pressure ventilation (BVM) at 40 to 60 breaths/min using room air (21% oxygen) for 30 seconds, and reassess the heart rate",
      "Administer blow-by 100% oxygen at 10 L/min for 2 minutes before ventilating",
      "Flick the soles of the infant's feet for another 60 seconds"
    ],
    correctIndex: 1,
    explanation: "Follow the Neonatal Resuscitation Inverted Pyramid: After initial warming, drying, positioning, clearing secretions, and stimulation (first 30 seconds), if the newborn is apneic/gasping OR has a heart rate < 100 beats/min, you must begin Positive Pressure Ventilation (BVM) at a rate of 40 to 60 breaths/min (initially with 21% room air for term newborns) for 30 seconds. Chest compressions (at a 3:1 ratio with 100% oxygen) are started ONLY if the newborn's heart rate remains < 60 beats/min AFTER 30 seconds of effective positive pressure ventilation!",
    studyTip: "Neonatal Resuscitation Pyramid:\n1. Warm, Dry, Position, Suction (Mouth then Nose), Stimulate.\n2. If Apneic or HR < 100 -> Positive Pressure Ventilation (BVM) at 40–60 breaths/min for 30 sec.\n3. If HR remains < 60 AFTER 30 sec of effective BVM -> Start Chest Compressions (3:1 ratio, 90 compressions + 30 breaths = 120 events/min) with 100% O2."
  },
  {
    id: "MED-022",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Endocrine & Metabolic Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.7,
    stem: "A 72-year-old male with type 2 diabetes is found severely lethargic and confused in his nursing home room after 4 days of a urinary tract infection and poor fluid intake. His skin is warm and extremely dry with poor skin turgor, his glucometer reads 'HIGH' (> 600 mg/dL), his BP is 88/54 mmHg, and his HR is 124 beats/min. However, his respirations are normal in depth at 18 breaths/min (no Kussmaul respirations), and there is NO fruity acetone odor on his breath. What condition is he experiencing?",
    options: [
      "Diabetic ketoacidosis (DKA)",
      "Hyperosmolar hyperglycemic state (HHS / HHNS)",
      "Insulin shock (acute hypoglycemia)",
      "Thyroid storm"
    ],
    correctIndex: 1,
    explanation: "Hyperosmolar Hyperglycemic State (HHS, formerly HHNS) occurs primarily in older patients with Type 2 diabetes, often triggered by an infection (pneumonia, UTI) or illness. Because Type 2 diabetics still produce enough endogenous insulin to prevent fat breakdown into ketones, they do NOT develop ketoacidosis, Kussmaul respirations, or fruity acetone breath. Instead, blood glucose climbs to extreme levels (often 600–1,200 mg/dL) over days, causing profound osmotic diuresis, life-threatening dehydration, hyperosmolality, and neurological obtundation.",
    studyTip: "DKA vs. HHS:\n• DKA (usually Type 1) = Rapid onset (hours/1–2 days), glucose 250–600 mg/dL, ketones/acidosis present -> Kussmaul respirations + fruity breath.\n• HHS (usually Type 2) = Gradual onset (days), extreme glucose (> 600 mg/dL), profound dehydration + AMS, NO ketones, NO Kussmaul respirations, NO fruity breath."
  },
  {
    id: "MED-023",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Neurologic Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.0,
    stem: "You are called for a 64-year-old female who suddenly developed right-sided hemiparesis, right facial droop, and expressive aphasia while eating dinner 35 minutes ago. Her spouse states she was completely normal at 6:00 PM. Her vital signs are BP 174/96 mmHg, HR 82 beats/min, RR 16 breaths/min, SpO2 96% on room air, and blood glucose 108 mg/dL. How should you manage her oxygenation and blood pressure during rapid transport to a stroke center?",
    options: [
      "Apply a nonrebreather mask at 15 L/min despite her SpO2 of 96%, and administer sublingual nitroglycerin to lower her blood pressure",
      "Maintain her on room air (since SpO2 >= 94%), do not attempt to lower her compensatory hypertension, elevate the head of the cot 15 to 30 degrees, and pre-notify the receiving stroke center with her 6:00 PM last-known-well time",
      "Hyperventilate her with a BVM at 20 breaths/min to constrict cerebral arteries",
      "Administer 324 mg of chewable aspirin to dissolve the suspected cerebral clot"
    ],
    correctIndex: 1,
    explanation: "In acute stroke management: (1) Supplemental oxygen is ONLY given if the patient is hypoxic (SpO2 < 94%), as hyperoxia increases free-radical injury to the ischemic penumbra; (2) Elevated blood pressure is a protective physiological response to maintain cerebral perfusion pressure to ischemic brain tissue—never give nitroglycerin to lower BP; (3) NEVER give aspirin in the field for suspected stroke because ~15%–20% of strokes are hemorrhagic (aspirin would worsen brain bleeding; a head CT is required first); and (4) Document the exact 'Last Known Well' time (6:00 PM) to determine eligibility for fibrinolytics (tPA/tenecteplase).",
    studyTip: "Acute Stroke Rules: Check blood glucose first! Give O2 ONLY if SpO2 < 94%. NEVER give aspirin in the field for stroke (must rule out hemorrhagic stroke via CT first). Document exact 'Last Known Well' time!"
  },
  {
    id: "MED-024",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 3,
    irtB: 0.8,
    stem: "A 24-year-old primigravida female at 35 weeks gestation complains of a severe frontal headache, blurred 'spotted' vision, right upper quadrant epigastric pain, and marked swelling (edema) of her face and hands. Her blood pressure is 176/114 mmHg. While you are assessing her, she suddenly develops a generalized tonic-clonic seizure. What condition has she progressed into, and how should you manage her?",
    options: [
      "Gestational diabetes; administer oral glucose into her cheek",
      "Eclampsia; protect her airway, suction as needed, provide high-flow oxygen/BVM ventilation, position her on her left side, minimize bright lights/noise, and request immediate ALS intercept for magnesium sulfate",
      "Supine hypotensive syndrome; have her sit upright and walk to the stretcher",
      "Abruptio placentae; perform vigorous fundal massage"
    ],
    correctIndex: 1,
    explanation: "Preeclampsia is characterized after 20 weeks gestation by severe hypertension (BP >= 140/90 or >= 160/110 with severe features), proteinuria, edema of the face/hands, severe headache, visual disturbances (scotomata/blurred vision), and epigastric/RUQ pain. The onset of tonic-clonic seizures marks the transition from preeclampsia to eclampsia—a life-threatening maternal and fetal emergency. Manage the airway and oxygenation (BVM during hypoxia), position in left lateral tilt, minimize sensory stimulation (dim lights, no sirens if possible until needed), and arrange immediate ALS intercept (for IV/IM magnesium sulfate) and rapid transport.",
    studyTip: "Preeclampsia = Pregnancy (> 20 wks) + Hypertension + Headache/Visual changes/Edema/RUQ pain. Eclampsia = Preeclampsia + Seizures! Treat with airway/O2, left lateral tilt, low stimulation, and ALS intercept for Magnesium Sulfate."
  },
  {
    id: "MED-025",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Pediatric Medical Emergencies",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 1.1,
    stem: "You are called for a 4-year-old unimmunized boy who developed a sudden high fever of 103.8°F (39.9°C) and severe sore throat 4 hours ago. When you enter the room, the child appears anxious and toxic, is sitting upright leaning forward on his hands with his chin thrust out (sniffing/tripod position), has muffled 'hot potato' speech, and has saliva drooling down his chin because he refuses to swallow. What is the MOST critical precaution when managing this child?",
    options: [
      "Use a tongue depressor and penlight to inspect the posterior pharynx for swelling",
      "Place the child supine on the stretcher and insert an oropharyngeal airway immediately",
      "Do NOT inspect the mouth/throat or agitate the child (which can trigger complete laryngospasm and total airway obstruction); keep him calm in a position of comfort with blow-by oxygen and transport smoothly",
      "Have the child drink cold water to soothe the swollen epiglottis"
    ],
    correctIndex: 2,
    explanation: "Sudden-onset high fever, toxic appearance, tripod/sniffing posture, dysphagia, drooling, and muffled voice in an unimmunized child (or adult) are classic signs of acute bacterial epiglottitis (commonly Haemophilus influenzae type b). The cherry-red, swollen epiglottis can abruptly spasm and completely occlude the glottic opening if the child is agitated, forced to lie flat, or if anything (tongue blade, thermometer, suction catheter, OPA) is placed into the mouth. Keep the child calm on the parent's lap, administer blow-by high-flow oxygen, and transport smoothly to the ED.",
    studyTip: "Suspected Epiglottitis (Tripod + Drooling + High Fever + Sudden Onset): NEVER put anything in the child's mouth, NEVER force them supine, and avoid crying/agitation—any pharyngeal stimulation can cause fatal complete airway obstruction!"
  },
  {
    id: "MED-026",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.9,
    stem: "Ski patrol rescues a 39-year-old hiker who was lost overnight in subfreezing temperatures. The patient is unresponsive to verbal or painful stimuli, not shivering, and has cold, pale, stiff skin (estimated core temperature < 86°F / 30°C). When you assess for a carotid pulse and breathing, what modification to your assessment and handling is required?",
    options: [
      "Check the carotid pulse for only 3 seconds and immediately vigorously rub the patient's extremities to generate heat",
      "Assess for a central pulse and breathing for up to 30 to 45 (or 60) seconds before declaring cardiac arrest, and handle the patient extremely gently because rough movement can precipitate ventricular fibrillation",
      "Immerse the patient in a tub of hot water in the back of the ambulance",
      "Withhold CPR and AED analysis completely until the patient's temperature reaches 98.6°F"
    ],
    correctIndex: 1,
    explanation: "In severe hypothermia (core temp < 86°F / 30°C), shivering stops, the patient becomes comatose, and the metabolic rate, heart rate, and respiratory rate slow dramatically. Check for a central pulse and respirations for a prolonged period (30 to 60 seconds) so you do not overlook a very slow, faint pulse. Furthermore, the severely hypothermic myocardium is extremely irritable; rough handling, jarring movements, or active extremity massage can trigger refractory ventricular fibrillation (V-Fib) or cause 'afterdrop' (cold acidotic blood from the extremities returning to the core).",
    studyTip: "Severe Hypothermia (< 86°F / 30°C): Shivering stops! Check pulse for 30–60 seconds, handle gently (jarring causes V-Fib), remove wet clothing, apply heat packs ONLY to the central trunk (neck, axillae, groin—passive/core rewarming), and never massage cold extremities."
  },
  {
    id: "MED-027",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Hematologic Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.6,
    stem: "A 23-year-old African American male with a history of sickle cell disease presents with severe, agonizing pain in his chest, lower back, and both knees, accompanied by shortness of breath, fever, and hypoxia (SpO2 89% on room air). What is the underlying pathophysiology of his condition, and what is your priority prehospital treatment?",
    options: [
      "Excessive platelet destruction causing spontaneous joint hemorrhage; apply ice packs to all painful joints to constrict blood vessels",
      "Hypoxia and dehydration cause abnormal hemoglobin S red blood cells to become rigid and crescent-shaped, sludging and occluding microvasculature (vaso-occlusive crisis / acute chest syndrome); administer high-flow oxygen to keep SpO2 >= 94%, keep him warm and comfortable, and transport urgently",
      "Autoimmune destruction of synovial fluid; coach the patient to hyperventilate",
      "Iron overload in the lungs; withhold supplemental oxygen to avoid free-radical formation"
    ],
    correctIndex: 1,
    explanation: "In sickle cell disease, red blood cells contain abnormal Hemoglobin S. When exposed to hypoxia, dehydration, infection, acidosis, or cold temperatures, these RBCs deform into rigid, sticky sickle shapes that clog capillaries and arterioles (vaso-occlusive crisis), causing tissue ischemia, severe bone/joint pain, splenic sequestration, and life-threatening Acute Chest Syndrome (pulmonary microvascular occlusion—the leading cause of death in sickle cell patients). Administer supplemental oxygen, keep the patient warm (never apply ice, which causes vasoconstriction and worsens sickling!), and transport for IV hydration and analgesia.",
    studyTip: "Sickle Cell Vaso-Occlusive Crisis / Acute Chest Syndrome: Triggered by hypoxia, dehydration, infection, or cold. Give supplemental O2, keep the patient WARM (never use ice packs!), position for comfort, and transport."
  },
  {
    id: "MED-028",
    source: "Gemini",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 3,
    irtB: 1.2,
    stem: "You are assisting with an imminent field delivery when you observe that the infant's buttocks and both legs have delivered first (frank breech presentation), and the trunk has delivered up to the neck, but the infant's head remains trapped inside the birth canal for more than 3 minutes. What emergency maneuver must you perform to prevent fatal neonatal asphyxiation?",
    options: [
      "Pull forcefully on the infant's legs and torso to extract the trapped head",
      "Insert a sterile gloved hand into the vagina, placing your fingers in a 'V' shape on either side of the infant's nose and mouth to push the vaginal wall away from the face and create an airway while transporting emergently",
      "Clamp and cut the umbilical cord immediately so the infant begins breathing inside the birth canal",
      "Push the infant's buttocks and torso back into the uterus"
    ],
    correctIndex: 1,
    explanation: "In a breech delivery where the body delivers but the head becomes entrapped in the cervix/birth canal, the umbilical cord is compressed alongside the head while the baby's face is pressed tightly against the vaginal wall. Never pull on the baby's body/legs (causes fatal cervical spine traction injury). Instead, support the baby's body on your forearm and insert two fingers of a sterile gloved hand into the vagina, forming a 'V' on either side of the baby's nose and mouth to push the vaginal wall back and create an open air channel so the infant can breathe during rapid transport.",
    studyTip: "Breech Delivery with Entrapped Head: NEVER pull on the body! Support the body and insert a gloved hand in a 'V' shape over the infant's face to push the vaginal wall away from the nose and mouth to create an airway."
  },
  {
    id: "MED-029",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Endocrine & Metabolic Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.0,
    stem: "A 52-year-old man with diabetes is unresponsive to painful stimuli. He has snoring respirations at 14 breaths/min, a strong pulse, and a blood glucose of 31 mg/dL. Which action is MOST appropriate?",
    options: [
      "Squeeze a full tube of oral glucose between his cheek and gum",
      "Have a family member give him orange juice with added sugar",
      "Open and maintain his airway, request ALS, and transport promptly",
      "Wait for him to wake up enough to swallow, then give oral glucose"
    ],
    correctIndex: 2,
    explanation: "Oral glucose requires a patient who is awake enough to swallow and protect his own airway. Giving anything by mouth to an unresponsive patient risks aspiration and airway obstruction. Open and maintain the airway (adjunct and suction as needed), provide oxygen or ventilation as indicated, place him in a recovery position if appropriate, and request ALS for IV dextrose or glucagon while transporting. Some EMT protocols also allow glucagon; follow your local protocol.",
    studyTip: "Hypoglycemia + unresponsive or unable to swallow = NOTHING by mouth. Manage airway, ALS for IV dextrose/glucagon, transport."
  },
  {
    id: "MED-030",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Neurologic Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.2,
    stem: "You arrive as a 28-year-old woman is having a generalized tonic-clonic seizure on her living room floor. What should you do while she is actively seizing?",
    options: [
      "Hold her arms and legs down firmly so she does not injure herself",
      "Place a padded tongue blade between her teeth so she will not bite her tongue",
      "Move nearby objects away, protect her head, and do not restrain her",
      "Pour cool water on her face to help stop the seizure more quickly"
    ],
    correctIndex: 2,
    explanation: "During a seizure, protect the patient from injury: move furniture and objects away, cushion the head, loosen tight clothing, and time the seizure. Do not restrain the patient (which can cause fractures or other injuries) and never place anything in the mouth. Once the seizure stops, position her on her side, maintain the airway, suction as needed, and give oxygen. Check blood glucose and request ALS if the seizure lasts longer than 5 minutes or recurs.",
    studyTip: "Active seizure: protect from injury, nothing in the mouth, no restraint, time it. After: recovery position, airway, suction, O2, glucose check."
  },
  {
    id: "MED-031",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 1,
    irtB: -1.1,
    stem: "A 26-year-old woman who is 39 weeks pregnant with her second child is having strong contractions. Which finding MOST clearly indicates that delivery is imminent and you should prepare to deliver on scene?",
    options: [
      "Her amniotic sac ruptured about one hour ago",
      "She has had contractions for the past 4 hours",
      "Her contractions are about 10 minutes apart",
      "The baby's head is visible at the vaginal opening"
    ],
    correctIndex: 3,
    explanation: "Crowning—the presenting part (usually the head) bulging at the vaginal opening during a contraction—means delivery is imminent. Other signs include contractions 2 minutes apart or less, a strong urge to push or to have a bowel movement, and a woman who has delivered before. Ruptured membranes alone, contractions 10 minutes apart, or a few hours of labor do not mean birth is imminent.",
    studyTip: "Imminent delivery: CROWNING, contractions ≤ 2 min apart, urge to push or move bowels, previous fast deliveries. If crowning, prepare to deliver—do not transport."
  },
  {
    id: "MED-032",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 1,
    irtB: -0.9,
    stem: "During a field delivery, the baby's head is crowning with each contraction. What should you do as the head begins to deliver?",
    options: [
      "Ask the mother to hold her legs together until you reach the hospital",
      "Apply gentle pressure on the head to prevent an explosive delivery",
      "Pull steadily on the baby's head to speed up the delivery",
      "Push the baby's head back into the vagina to delay the delivery"
    ],
    correctIndex: 1,
    explanation: "As the head delivers, place the fingers of your gloved hand gently on the baby's head to support it and prevent an explosive (too-rapid) delivery, which can tear the perineum and injure the baby. Never pull on the baby, push it back in, or have the mother cross or hold her legs together. Once the head delivers, check for a nuchal cord and support the head as the shoulders deliver.",
    studyTip: "Crowning: gentle hand pressure on the head to control the delivery. Never pull, push back, or hold the legs together. Then check for a nuchal cord."
  },
  {
    id: "MED-033",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Pediatric",
    difficulty: 1,
    irtB: -1.0,
    stem: "You have just delivered a healthy, crying term newborn in the back of an ambulance. Besides keeping the airway clear, which complication is MOST important to prevent in the first minutes after birth?",
    options: [
      "Hypothermia",
      "Hypertension",
      "Hyperglycemia",
      "Hyperthermia"
    ],
    correctIndex: 0,
    explanation: "Newborns lose heat very quickly because they are wet and have a large surface area relative to body weight. Hypothermia increases oxygen consumption and can cause hypoglycemia and respiratory distress. Immediately dry the infant, remove wet linens, cover the head, and place the baby skin-to-skin with the mother (or wrap in warm, dry blankets). Warm the ambulance compartment.",
    studyTip: "Newborn priorities: warm, dry, stimulate, position the airway. Dry and cover the head, remove wet towels, skin-to-skin with the mother."
  },
  {
    id: "MED-034",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Neurologic Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.8,
    stem: "A 70-year-old man went to bed at 11:00 PM feeling normal. His wife found him at 6:30 AM with left-sided weakness and slurred speech. When she last saw him at 2:00 AM, he was asleep and snoring. What time should you report as his 'last known well' time?",
    options: [
      "2:00 AM, the last time his wife saw him",
      "6:30 AM, the time his symptoms were found",
      "11:00 PM, when he was last seen normal",
      "The time EMS arrived and completed the stroke scale"
    ],
    correctIndex: 2,
    explanation: "The last known well time is the last time the patient was seen at his neurologic baseline, awake and without symptoms. Seeing him asleep at 2:00 AM does not confirm he was normal, and the discovery time is not when symptoms began. For 'wake-up' strokes, report when he was last confirmed normal (11:00 PM). This time determines eligibility for stroke treatments, so record it exactly and report it to the receiving stroke center.",
    studyTip: "Last known well = last time CONFIRMED normal (awake, at baseline)—not when found, and not when last seen sleeping."
  },
  {
    id: "MED-035",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Pediatric",
    difficulty: 1,
    irtB: -1.1,
    stem: "A 3-year-old boy was found with an open bottle of his grandmother's pills. He is alert and acting normally, but some pills are missing. In addition to assessing and monitoring him, what should you do?",
    options: [
      "Bring the pill bottle and any remaining pills with you to the hospital",
      "Have him drink syrup of ipecac so that he vomits the pills right away",
      "Give him a large glass of milk to dilute whatever pills he swallowed",
      "Give activated charcoal, since it is indicated for every child ingestion"
    ],
    correctIndex: 0,
    explanation: "Identifying the substance, the amount, and the time of ingestion is critical. Bring the container and remaining pills to the hospital (or relay the information), and contact poison control or medical control per protocol. Inducing vomiting (ipecac) is no longer recommended, diluting with fluids is not appropriate for most ingestions, and activated charcoal is given only per protocol/medical direction for specific ingestions in patients who can protect their airway. Children may appear well early on even after a dangerous ingestion.",
    studyTip: "Ingested poison: WHAT, HOW MUCH, WHEN. Bring the container. Contact poison control/medical control. Never induce vomiting."
  },
  {
    id: "MED-036",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Psychiatric & Behavioral Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.2,
    stem: "You arrive at a residence for a 'possible suicide attempt.' Through the open doorway, you see a man in his 30s holding a kitchen knife and shouting that he wants to die. Law enforcement has not yet arrived. What should you do?",
    options: [
      "Rush in and take the knife away before he can harm himself",
      "Retreat to a safe location and wait for law enforcement to arrive",
      "Enter the room and calmly talk with him while standing close by",
      "Have your partner distract him while you approach him from behind"
    ],
    correctIndex: 1,
    explanation: "Scene safety is always your first priority. An agitated person with a weapon is a danger to you, your partner, and others. Retreat to a safe location, keep an escape route, and wait for law enforcement to secure the scene before making patient contact. Once the scene is safe, treat suicidal statements seriously and do not leave the patient alone.",
    studyTip: "Weapon on scene = retreat and wait for law enforcement. You cannot help anyone if you become a patient."
  },
  {
    id: "MED-037",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Gynecologic Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.7,
    stem: "A 24-year-old woman reports that she was sexually assaulted an hour ago. She is alert with minor abrasions and wants to go to the hospital. Which action BEST helps preserve evidence?",
    options: [
      "Encourage her to shower and change clothes before transport so she feels more comfortable",
      "Place any clothing she removes in separate paper bags, and ask her not to wash or urinate",
      "Thoroughly examine and clean the genital area so that injuries can be documented",
      "Place her clothing together in one sealed plastic bag to prevent any contamination"
    ],
    correctIndex: 1,
    explanation: "Provide compassionate, nonjudgmental care, preferably by a provider of the same gender if possible. Discourage the patient from bathing, showering, douching, urinating, changing clothes, or brushing her teeth before the exam, if possible. If clothing is removed, place each item in a separate paper bag (plastic retains moisture and can degrade evidence). Do not examine the genitalia unless there is severe bleeding that requires treatment. Document her statements objectively, in her own words.",
    studyTip: "Sexual assault: compassionate care, minimal questioning, discourage washing/urinating/changing, separate PAPER bags for clothing, no genital exam unless life-threatening bleeding."
  },
  {
    id: "MED-038",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Gynecologic Emergencies",
    patientType: "Obstetric",
    difficulty: 2,
    irtB: 0.1,
    stem: "A 27-year-old woman has sudden, severe, sharp pain in her right lower abdomen and some vaginal spotting. Her last menstrual period was 7 weeks ago. She is pale and diaphoretic, with HR 124 beats/min and BP 88/56 mmHg. She says she felt dizzy and fainted briefly. What should you suspect?",
    options: [
      "Acute appendicitis",
      "A ruptured ovarian cyst with mild bleeding",
      "A ruptured ectopic pregnancy",
      "Normal early pregnancy discomfort"
    ],
    correctIndex: 2,
    explanation: "Any woman of childbearing age with abdominal pain, a missed period, vaginal bleeding, and signs of shock should be presumed to have a ruptured ectopic pregnancy until proven otherwise. In an ectopic pregnancy, the fertilized egg implants outside the uterus (usually in a fallopian tube). As it grows, it can rupture and cause life-threatening internal bleeding. Treat for shock and transport rapidly; this is a surgical emergency.",
    studyTip: "Childbearing-age female + abdominal pain + missed period + shock = ruptured ectopic pregnancy until proven otherwise. Treat for shock, rapid transport."
  },
  {
    id: "MED-039",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Allergic Reactions & Anaphylaxis",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.2,
    stem: "Thirty minutes after taking a new antibiotic, a 35-year-old woman has developed an itchy rash with hives on her forearms. She has no difficulty breathing, no throat or tongue swelling, clear lungs, and a BP of 124/80 mmHg. She has a prescribed epinephrine auto-injector. What is the MOST appropriate management?",
    options: [
      "Assist her with the epinephrine auto-injector right away to stop the hives",
      "Assess carefully, monitor closely for progression, and transport her",
      "Advise her to take the next antibiotic dose to finish the course",
      "Give her oral glucose to prevent a drop in her blood sugar levels"
    ],
    correctIndex: 1,
    explanation: "This is a mild, localized allergic reaction without signs of anaphylaxis (no respiratory compromise, airway swelling, hypotension, or significant multi-system involvement). Epinephrine is not indicated at this time. Monitor her closely, reassess frequently, keep the auto-injector ready, and transport, because reactions can progress to anaphylaxis. If she develops breathing difficulty, throat tightness, wheezing, or hypotension, give epinephrine immediately.",
    studyTip: "Mild allergic reaction (local hives only, normal breathing and BP): monitor and transport. Anaphylaxis (airway, breathing, or perfusion compromise): epinephrine NOW."
  },
  {
    id: "MED-040",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Allergic Reactions & Anaphylaxis",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "Five minutes after you assisted a 41-year-old man with his 0.3 mg epinephrine auto-injector for a bee sting, he still has diffuse wheezing, his lips remain swollen, and his BP is 84/52 mmHg. His wife has a second auto-injector. What should you do?",
    options: [
      "Wait at least 30 minutes, because epinephrine cannot be repeated sooner",
      "Have him lie down and give him oral fluids to raise his blood pressure",
      "Give a second dose per protocol or medical control, and keep reassessing",
      "Withhold more epinephrine, because his heart rate is already elevated"
    ],
    correctIndex: 2,
    explanation: "Epinephrine can typically be repeated every 5 to 15 minutes if signs of anaphylaxis persist or worsen. Because he still has wheezing, airway swelling, and hypotension, give a second dose as allowed by your protocol or medical control, then continue high-flow oxygen, place him supine (or in a position of comfort if breathing is difficult), request ALS, and transport. Tachycardia is an expected effect and does not prevent another dose in anaphylaxis. Never give oral fluids to a patient with airway swelling.",
    studyTip: "Anaphylaxis not improving 5–15 min after epinephrine → repeat dose per protocol/medical control. Tachycardia is expected and not a reason to withhold it."
  },
  {
    id: "MED-041",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "You are ventilating a 30-year-old woman with a suspected opioid overdose who has a pulse but was breathing only 4 times per minute. Your partner prepares naloxone. What is the PRIMARY goal of giving naloxone in this patient?",
    options: [
      "Restoring adequate spontaneous breathing, not necessarily full alertness",
      "Waking her fully so she can answer questions and refuse transport",
      "Making her pupils dilate so you can confirm that she used an opioid",
      "Raising her heart rate above 100 beats/min to improve her circulation"
    ],
    correctIndex: 0,
    explanation: "The goal of naloxone is to reverse opioid-induced respiratory depression so the patient breathes adequately on her own. Large or rapid doses intended to fully wake the patient can trigger abrupt withdrawal, vomiting, agitation, and combativeness. Give naloxone per protocol, continue ventilating until breathing is adequate, and monitor closely, because naloxone can wear off before the opioid does, allowing respiratory depression to return.",
    studyTip: "Naloxone goal = adequate BREATHING. Ventilate first, then give naloxone. Watch for withdrawal/combativeness and for respiratory depression returning as naloxone wears off."
  },
  {
    id: "MED-042",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Pediatric Medical Emergencies",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: -0.1,
    stem: "An 18-month-old girl with a fever of 103.5°F (39.7°C) had a generalized seizure that lasted about 1 minute. She is now drowsy but arousable, breathing adequately, and her color is good. Her parents are frightened. What is the MOST appropriate management?",
    options: [
      "Place her in a tub of cold water with ice to bring her temperature down quickly",
      "Sponge her with rubbing alcohol to cool her skin as quickly as possible",
      "Reassure the parents that this is normal and no hospital evaluation is needed",
      "Remove excess clothing, monitor her airway, and transport for an evaluation"
    ],
    correctIndex: 3,
    explanation: "Febrile seizures are common in children between about 6 months and 6 years of age and are usually brief. Even so, every first-time febrile seizure needs evaluation, because the seizure could have another cause (for example, meningitis). Position the child to protect the airway, give oxygen if needed, remove excess clothing to allow passive cooling, check blood glucose if your protocol allows, and transport. Cold-water immersion can cause shivering, and alcohol can be absorbed through the skin and cause poisoning.",
    studyTip: "Febrile seizure: protect airway, passive cooling (remove extra clothing), transport for evaluation. No ice baths, no alcohol sponging."
  },
  {
    id: "MED-043",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Infectious Disease",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "A 19-year-old college student has a high fever, severe headache, a stiff neck, sensitivity to light, and a purplish rash that does not blanch when pressed. Which precautions should you take in addition to standard precautions?",
    options: [
      "Contact precautions only, because the infection spreads only through the rash",
      "Droplet precautions, including a surgical mask for you and for the patient",
      "No extra precautions, because this infection cannot spread between people",
      "Wait for a hazmat team, because the patient must be decontaminated first"
    ],
    correctIndex: 1,
    explanation: "Fever, headache, stiff neck, photophobia, and a nonblanching (petechial or purpuric) rash suggest bacterial meningitis, possibly meningococcal disease, which can be rapidly fatal. Meningococcal meningitis spreads through respiratory droplets, so use droplet precautions: a surgical mask for you, and one for the patient if tolerated, plus gloves and eye protection. Notify the receiving facility, and follow up on exposure reporting. Exposed providers may need preventive antibiotics.",
    studyTip: "Meningitis: fever, headache, stiff neck, photophobia, AMS, nonblanching rash. Use DROPLET precautions (surgical mask). Report exposures for possible prophylaxis."
  },
  {
    id: "MED-044",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Pediatric Medical Emergencies",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: 0.1,
    stem: "A 9-month-old infant has had vomiting and diarrhea for 2 days. Which finding MOST strongly indicates significant dehydration?",
    options: [
      "A fever of 100.6°F (38.1°C) and a runny nose",
      "Crying with tears and five wet diapers today",
      "A pink, moist tongue with brisk capillary refill",
      "A sunken fontanelle and no wet diaper in 8 hours"
    ],
    correctIndex: 3,
    explanation: "Signs of significant dehydration in infants include a sunken anterior fontanelle, sunken eyes, crying without tears, dry mucous membranes, markedly decreased urine output (few or no wet diapers), poor skin turgor, delayed capillary refill, tachycardia, and lethargy. Infants can become severely dehydrated quickly. Tears, frequent wet diapers, moist mucous membranes, and brisk capillary refill suggest adequate hydration.",
    studyTip: "Infant dehydration: sunken fontanelle and eyes, no tears, dry mouth, few wet diapers, poor skin turgor, delayed cap refill, lethargy, tachycardia."
  },
  {
    id: "MED-045",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.4,
    stem: "A 48-year-old man who drinks heavily every day stopped drinking 3 days ago. He is confused, sweating profusely, and tremulous, and he reports seeing bugs crawling on the walls. His HR is 132 beats/min, BP 176/98 mmHg, and temperature 100.9°F (38.3°C). How should you regard this presentation?",
    options: [
      "Mild withdrawal that he can manage at home if he resumes drinking slowly",
      "A psychiatric emergency that should be handled by law enforcement only",
      "Probable delirium tremens, a life-threatening condition needing transport",
      "Acute alcohol intoxication that will resolve as the alcohol is metabolized"
    ],
    correctIndex: 2,
    explanation: "Delirium tremens (DTs) is the most severe form of alcohol withdrawal, typically starting 2 to 4 days after the last drink. It causes confusion, hallucinations, tremors, profuse sweating, fever, tachycardia, hypertension, and seizures, and can be fatal. Protect the patient from injury, monitor the airway, check blood glucose, be prepared for seizures, request ALS, and transport. These patients often also have dehydration, electrolyte problems, and hypoglycemia.",
    studyTip: "Alcohol withdrawal can kill. DTs (2–4 days after the last drink): confusion, hallucinations, tremors, sweating, fever, tachycardia, seizures → ALS + transport."
  },
  {
    id: "MED-046",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "A 32-year-old hiker was bitten on the left hand by a rattlesnake 15 minutes ago. The hand is swelling and painful, with two puncture wounds. He is alert with stable vital signs. Which action is MOST appropriate?",
    options: [
      "Apply ice packs directly over the bite to slow the spread of the venom",
      "Apply a tight tourniquet above the elbow to keep the venom from spreading",
      "Cut over the punctures and use a suction device to remove the venom",
      "Keep him calm, splint the arm near heart level, and remove his rings"
    ],
    correctIndex: 3,
    explanation: "For pit viper bites, keep the patient calm and still to slow venom absorption, splint the extremity and keep it at about heart level, remove rings, watches, and tight clothing before swelling worsens, mark the edge of the swelling and the time, and transport to a facility that can give antivenom. Ice, tourniquets, incisions, and suction are not recommended and can increase tissue damage. Do not attempt to capture the snake.",
    studyTip: "Snakebite: calm, immobilize, extremity near heart level, remove jewelry, mark swelling, transport. NO ice, tourniquets, cutting, or suction."
  },
  {
    id: "MED-047",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Abdominal, GI & Renal Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.1,
    stem: "A 38-year-old man has sudden, severe, cramping pain in his right flank that comes in waves and radiates toward his groin. He cannot sit still, is nauseated, and says his urine looks pink. His vital signs are stable, and he has no fever. What is the MOST likely cause?",
    options: [
      "Acute appendicitis",
      "A kidney stone",
      "Acute cholecystitis",
      "Ruptured spleen"
    ],
    correctIndex: 1,
    explanation: "Kidney stones (renal calculi) classically cause sudden, severe, colicky flank pain that radiates to the groin, along with restlessness (patients cannot find a comfortable position), nausea and vomiting, and blood in the urine. Appendicitis usually begins around the umbilicus and moves to the right lower quadrant, often with fever. Cholecystitis causes right upper quadrant pain, often after fatty meals. A ruptured spleen causes left upper quadrant pain, usually after trauma. Note that in older adults, an abdominal aortic aneurysm can mimic a kidney stone.",
    studyTip: "Kidney stone: colicky flank pain radiating to the groin, restless patient, nausea, blood in urine. In older patients with 'kidney stone' pain, think AAA."
  },
  {
    id: "MED-048",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 2,
    irtB: 0.0,
    stem: "Ten minutes after an uncomplicated field delivery, the mother and baby are stable, the cord has been clamped and cut, and the placenta has not yet delivered. Bleeding is minimal. What should you do?",
    options: [
      "Pull firmly on the umbilical cord to deliver the placenta right away",
      "Push hard on the top of the uterus to force the placenta out quickly",
      "Begin transport; do not pull on the cord, and save the placenta if it delivers",
      "Remain on scene for at least one hour until the placenta has delivered"
    ],
    correctIndex: 2,
    explanation: "The placenta usually delivers on its own within about 30 minutes after the baby. Never pull on the umbilical cord or push forcefully on the uterus, which can tear the cord, cause hemorrhage, or turn the uterus inside out (uterine inversion). Do not delay transport waiting for it. If the placenta delivers, place it in a bag or container and bring it to the hospital so it can be checked for completeness. Monitor the mother for excessive bleeding.",
    studyTip: "Placenta: let it deliver on its own (usually within 30 min). NEVER pull the cord. Don't delay transport. Bring the placenta to the hospital."
  },
  {
    id: "MED-049",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 3,
    irtB: 0.9,
    stem: "During a field delivery, the baby's head delivers but then retracts tightly back against the mother's perineum, and the shoulders do not deliver with the next contraction. What is the MOST appropriate action?",
    options: [
      "Pull firmly downward on the baby's head to free the trapped front shoulder",
      "Push hard on the top of the uterus (fundus) to force the shoulders out",
      "Have the mother stop pushing and wait 10 minutes for the shoulders to rotate",
      "Do not pull; flex the mother's thighs sharply toward her abdomen and call ALS"
    ],
    correctIndex: 3,
    explanation: "A head that delivers and then retracts against the perineum ('turtle sign'), followed by shoulders that fail to deliver, indicates shoulder dystocia, which can quickly cause fetal hypoxia. Do not pull on the baby's head (which can injure the nerves of the neck and arm) and do not push on the fundus (which can wedge the shoulder more tightly). Position the mother with her thighs flexed sharply up toward her abdomen (McRoberts maneuver) to widen the pelvic outlet, support the baby's head, request ALS, and be prepared to transport rapidly and resuscitate the newborn.",
    studyTip: "Shoulder dystocia ('turtle sign'): NO pulling on the head, NO fundal pressure. Hyperflex the mother's thighs to her abdomen (McRoberts), request ALS, prepare for newborn resuscitation."
  },
  {
    id: "MED-050",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 3,
    irtB: 1.0,
    stem: "A 30-year-old woman in active labor at 38 weeks says she feels something 'coming out.' On inspection, you see a single tiny arm protruding from the vagina. What is the MOST appropriate action?",
    options: [
      "Gently pull on the arm with each contraction to help the baby deliver",
      "Push the arm back into the vagina, then let delivery continue normally",
      "Do not try to deliver; elevate her hips, give oxygen, and transport rapidly",
      "Have her push as hard as possible to deliver the baby before transport"
    ],
    correctIndex: 2,
    explanation: "A limb presentation (an arm or a single leg protruding first) means the baby is in an abnormal position and cannot be delivered vaginally in the field. Do not pull on the limb or try to push it back. Place the mother in a knee-chest position or supine with her hips elevated to reduce pressure on the baby and cord, give oxygen as indicated, cover the limb to keep it warm, and transport rapidly to a facility capable of an emergency cesarean delivery.",
    studyTip: "Limb presentation = cannot be delivered in the field. Don't pull, don't push back. Hips elevated/knee-chest, oxygen as indicated, rapid transport."
  },
  {
    id: "MED-051",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 1.1,
    stem: "A term infant is born through thick, dark green meconium-stained amniotic fluid. The infant is limp and not breathing after you warm, dry, position the airway, clear visible secretions with a bulb syringe, and stimulate. What is your NEXT step according to current neonatal resuscitation guidelines?",
    options: [
      "Withhold all ventilation until a paramedic suctions meconium from the trachea",
      "Begin bag-mask ventilation at 40 to 60 breaths/min and reassess the heart rate",
      "Suction the mouth and nose continuously for 30 seconds before anything else",
      "Begin chest compressions at a 3:1 ratio before giving any ventilations"
    ],
    correctIndex: 1,
    explanation: "Current neonatal resuscitation guidelines no longer recommend routine deep (tracheal) suctioning of non-vigorous infants born through meconium. After the initial steps, a newborn who is apneic, gasping, or has a heart rate below 100 beats/min needs positive pressure ventilation at 40 to 60 breaths per minute. Clear the mouth and nose with a bulb syringe if secretions obstruct the airway, but do not delay ventilation. Chest compressions are started only if the heart rate remains below 60 beats/min after 30 seconds of effective ventilation.",
    studyTip: "Meconium + non-vigorous newborn: initial steps, clear obvious secretions, then VENTILATE if apneic or HR < 100. Don't delay PPV for suctioning."
  },
  {
    id: "MED-052",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Pediatric Medical Emergencies",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.8,
    stem: "You are treating a 2-year-old boy whose mother says he 'fell off the couch.' You find bruises of different colors on his back, buttocks, and upper arms, and a pattern of loop-shaped marks on his thighs. The child is quiet and avoids eye contact. In addition to treating his injuries, what is the MOST appropriate action?",
    options: [
      "Confront the mother about the injuries and ask her to explain what happened",
      "Leave the scene once the mother refuses transport, since a parent can decline care",
      "Document your findings objectively and report your concerns as required by law",
      "Delay all care until law enforcement arrives to investigate the suspected abuse"
    ],
    correctIndex: 2,
    explanation: "Injuries inconsistent with the reported mechanism, bruises in various stages of healing, injuries on protected areas (back, buttocks, upper arms, thighs), and patterned marks (loops from cords, handprints) are red flags for child abuse. Treat the child, document objectively what you see and what was said (using quotes), avoid accusing or confronting the caregiver (which can escalate the situation or lead to the child being removed from care), encourage transport, and report your suspicions to the receiving facility and the appropriate authority as required by your state's mandatory reporting laws.",
    studyTip: "Suspected abuse: treat, document objectively (quote statements), don't confront or accuse, transport if possible, and REPORT—EMTs are mandated reporters in most states."
  },
  {
    id: "MED-053",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Pediatric Medical Emergencies",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 1.0,
    stem: "Parents of a 2-month-old girl called 911 because she suddenly turned blue around the lips, went limp, and seemed not to breathe for about 30 seconds while lying in her crib. When you arrive 8 minutes later, she is pink, alert, feeding normally, and her vital signs are normal for her age. What should you do?",
    options: [
      "Recommend transport for evaluation, explaining that a serious cause may be present",
      "Tell the parents it was a normal breath-holding spell that needs no follow-up",
      "Advise them to call back if it happens again, since she looks healthy now",
      "Have them sign a refusal form, because no treatment was provided on scene"
    ],
    correctIndex: 0,
    explanation: "A sudden, brief episode in an infant involving color change (cyanosis or pallor), absent or irregular breathing, a change in muscle tone, or unresponsiveness that has fully resolved is called a brief resolved unexplained event (BRUE). Although the infant may look completely normal on your arrival, these events can be caused by serious conditions such as infection, seizures, cardiac problems, metabolic disease, or abuse. Strongly recommend transport for evaluation, document the parents' description carefully, and monitor the infant.",
    studyTip: "BRUE: infant with a brief episode of color change, breathing change, tone change, or unresponsiveness that resolved. Looks normal now ≠ safe. Transport for evaluation."
  },
  {
    id: "MED-054",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Neurologic Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.2,
    stem: "A 46-year-old woman suddenly developed 'the worst headache of my life' while lifting weights. She vomited twice, is sensitive to light, and complains that her neck feels stiff. She is now drowsy but arousable. Her BP is 188/104 mmHg, and her blood glucose is 112 mg/dL. Which condition should you suspect, and what should you avoid?",
    options: [
      "A tension headache; give aspirin for pain relief and transport non-emergently",
      "A migraine; dim the lights and allow her to rest at home with her family",
      "Muscle strain in the neck; apply a cold pack and transport her by wheelchair",
      "A brain bleed (hemorrhagic stroke); avoid aspirin and transport rapidly"
    ],
    correctIndex: 3,
    explanation: "A sudden, severe 'thunderclap' headache—often during exertion—with vomiting, neck stiffness, light sensitivity, and an altered level of consciousness is classic for a subarachnoid hemorrhage (a form of hemorrhagic stroke), often from a ruptured aneurysm. Aspirin is contraindicated because it impairs clotting. Maintain the airway, be prepared for vomiting and seizures, elevate the head of the stretcher if no contraindications, give oxygen only if hypoxic, and transport rapidly to a stroke center.",
    studyTip: "'Worst headache of my life' + sudden onset + vomiting + stiff neck + AMS = subarachnoid hemorrhage. NO aspirin, rapid transport to a stroke center."
  },
  {
    id: "MED-055",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Infectious Disease",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.9,
    stem: "An 82-year-old woman with a urinary catheter has become increasingly confused over the past day, according to nursing home staff. Her skin is warm and flushed, her temperature is 102.4°F (39.1°C), HR 118 beats/min, RR 26 breaths/min, BP 86/50 mmHg, and SpO2 93%. What is the MOST likely problem, and what should you do?",
    options: [
      "Simple dementia progression; transport non-emergently to her physician's office",
      "An uncomplicated urinary tract infection; transport for routine antibiotics",
      "Sepsis with shock from infection; treat for shock and notify the hospital early",
      "Heat exhaustion; remove her blanket and give her oral fluids before transport"
    ],
    correctIndex: 2,
    explanation: "Fever, tachycardia, tachypnea, hypotension, and new confusion in an older patient with a likely infection source (indwelling urinary catheter) indicate sepsis progressing to septic shock—a time-sensitive emergency. Older adults often present with confusion rather than obvious infection symptoms. Give oxygen as needed, treat for shock, request ALS for IV fluids, transport promptly, and give the hospital an early 'sepsis alert' if your system uses one.",
    studyTip: "Sepsis: suspected infection + abnormal vitals (fever or low temp, fast HR, fast RR) + AMS or hypotension. Older adults often present with just confusion. Treat for shock, early notification."
  },
  {
    id: "MED-056",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Endocrine & Metabolic Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.1,
    stem: "Police call you for a 50-year-old man who smells strongly of alcohol, has slurred speech, and is unsteady on his feet. Officers want to take him to jail for public intoxication. He is able to follow simple commands and swallow, and his blood glucose is 46 mg/dL. What is the MOST appropriate action?",
    options: [
      "Release him to police custody, since his symptoms are explained by alcohol",
      "Give him oral glucose, reassess, and transport him for medical evaluation",
      "Withhold glucose, because alcohol in his stomach will raise his blood sugar",
      "Have him sleep it off and recheck his blood glucose in about four hours"
    ],
    correctIndex: 1,
    explanation: "Never assume that altered mental status is due to alcohol. Alcohol interferes with the liver's ability to release glucose and commonly causes hypoglycemia, and hypoglycemia itself causes slurred speech, unsteadiness, and confusion that mimic intoxication. Because he can swallow and protect his airway, give oral glucose, reassess his mental status and glucose, and transport for evaluation. Also look for other causes, such as head injury, which is common in intoxicated patients.",
    studyTip: "Altered mental status + smell of alcohol: check glucose and look for head injury. Alcohol causes hypoglycemia, and hypoglycemia mimics intoxication."
  },
  {
    id: "MED-057",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 1.3,
    stem: "A 16-year-old girl tells you she swallowed about 30 tablets of extra-strength acetaminophen 2 hours ago after a fight with her boyfriend. She says she feels fine now, her vital signs are normal, and she wants you to leave. Her parents are not home. What is the BEST course of action?",
    options: [
      "Leave after she signs a refusal form, since she is alert and her vital signs are normal",
      "Call poison control and remain on scene to watch her for symptoms over the next hour",
      "Leave her at home, since acetaminophen overdoses do not cause serious harm to the body",
      "Transport her, because this overdose can cause delayed liver failure and she is a minor"
    ],
    correctIndex: 3,
    explanation: "Acetaminophen overdose often causes few or no symptoms in the first 24 hours, but it can lead to severe, potentially fatal liver failure days later. An antidote is most effective when given early, within about 8 hours. In addition, she is a minor who generally cannot refuse care, and she has made a suicide attempt, so she lacks the capacity to refuse and needs evaluation. Transport her (with law enforcement assistance if needed, per protocol), bring the pill bottle, and attempt to contact her parents.",
    studyTip: "Acetaminophen overdose: often looks fine early, but causes delayed liver failure. Early hospital treatment is critical. Minors and suicidal patients generally cannot refuse."
  },
  {
    id: "MED-058",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Endocrine & Metabolic Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.0,
    stem: "A coworker reports that a 38-year-old man with diabetes became confused and combative within the past 20 minutes after skipping lunch. His skin is pale, cool, and sweaty. Which condition do these findings MOST suggest?",
    options: [
      "Diabetic ketoacidosis (high blood sugar)",
      "Hypoglycemia (low blood sugar)",
      "Heat stroke",
      "Alcohol intoxication"
    ],
    correctIndex: 1,
    explanation: "Hypoglycemia typically develops quickly (minutes) and is often triggered by skipping a meal, taking too much insulin, or exercising more than usual. The body releases epinephrine in response, causing pale, cool, sweaty skin and a rapid pulse, while the brain's lack of glucose causes confusion, combativeness, or unresponsiveness. Diabetic ketoacidosis develops slowly over hours to days with warm, dry skin, thirst, and frequent urination. Always check the blood glucose.",
    studyTip: "Hypoglycemia: rapid onset, cool clammy skin, confusion/combativeness. Hyperglycemia/DKA: gradual onset, warm dry skin, thirst, frequent urination, fruity breath."
  },
  {
    id: "MED-059",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Allergic Reactions & Anaphylaxis",
    patientType: "Pediatric",
    difficulty: 1,
    irtB: -0.9,
    stem: "A 6-year-old girl who weighs about 44 lb (20 kg) is having a severe allergic reaction to peanuts, with wheezing, hives, and throat tightness. Her school nurse hands you her prescribed epinephrine auto-injector. Which dose is MOST appropriate for a child of this size?",
    options: [
      "0.15 mg",
      "0.3 mg",
      "0.5 mg",
      "1 mg"
    ],
    correctIndex: 0,
    explanation: "Pediatric epinephrine auto-injectors deliver 0.15 mg and are generally prescribed for children weighing about 15 to 30 kg (33 to 66 lb). Adult auto-injectors deliver 0.3 mg and are used for patients weighing about 30 kg or more. Inject into the anterolateral thigh, hold it in place per the device instructions, and record the time. Always confirm that the auto-injector is prescribed to the patient and has not expired.",
    studyTip: "Epinephrine auto-injector: child (about 15–30 kg) = 0.15 mg; adult (30 kg or more) = 0.3 mg. Lateral thigh, hold in place, note the time, and reassess."
  },
  {
    id: "MED-060",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Neurologic Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.1,
    stem: "A 33-year-old woman with a history of epilepsy had a generalized seizure that stopped 5 minutes ago. She is now breathing adequately but is drowsy, confused, and slow to answer questions. How should you describe this phase?",
    options: [
      "The aura phase, which signals another seizure is about to begin",
      "Status epilepticus, which requires immediate CPR",
      "A stroke, because confusion never follows a seizure",
      "The postictal phase, a normal period of recovery after a seizure"
    ],
    correctIndex: 3,
    explanation: "The postictal phase follows a seizure and can last from minutes to hours. Patients are often drowsy, confused, and exhausted, and may have a headache or temporary weakness. Place her in the recovery position if she cannot protect her airway, give oxygen if needed, check her blood glucose, and monitor her. If she does not gradually improve, or she has another seizure without waking up in between, consider other causes and status epilepticus.",
    studyTip: "Seizure phases: aura → seizure (tonic-clonic) → postictal (confused, drowsy). A second seizure without regaining consciousness = status epilepticus."
  },
  {
    id: "MED-061",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.2,
    stem: "A 24-year-old roofer working in the heat reports painful spasms in his calves and abdomen. He is alert, sweating, and his vital signs are normal. What is the MOST appropriate treatment?",
    options: [
      "Begin aggressive cooling with ice packs to his neck, armpits, and groin",
      "Massage the cramping muscles vigorously and let him return to work",
      "Move him to a cool place to rest and give him an electrolyte drink",
      "Give him salt tablets and have him continue working in the shade"
    ],
    correctIndex: 2,
    explanation: "Heat cramps are painful muscle spasms caused by loss of water and electrolytes through heavy sweating. The patient is alert with normal vital signs. Move him to a cool environment, have him rest, and give an electrolyte-containing drink if he can tolerate it. Gentle stretching may help, but vigorous massage can worsen pain. Salt tablets can irritate the stomach and are not recommended. Aggressive cooling is for heat stroke.",
    studyTip: "Heat cramps: cool place, rest, oral electrolytes. Heat exhaustion: also dizziness, weakness, nausea. Heat stroke: altered mental status = aggressive cooling."
  },
  {
    id: "MED-062",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.8,
    stem: "A 46-year-old hunter has hard, white, waxy skin on several fingers after spending the night outdoors. You are 2 hours from the hospital, and there is a chance his hands will be exposed to the cold again during transport. What should you do?",
    options: [
      "Rub his fingers briskly with snow to restore circulation to them",
      "Protect his hands from cold and do not rewarm them if they could refreeze",
      "Rewarm his fingers over the heater vent so circulation returns during transport",
      "Break any blisters and wrap his fingers together tightly with gauze"
    ],
    correctIndex: 1,
    explanation: "Hard, white, waxy skin indicates deep frostbite. Never rub frostbitten tissue, which damages it further. Rewarming is very painful and should be done only if there is no chance the tissue will refreeze, because a thaw-refreeze cycle causes much worse damage than leaving it frozen. Remove wet clothing and jewelry, protect the area from further cold and injury, separate fingers with loose, dry, sterile dressings, keep the patient warm, and transport.",
    studyTip: "Frostbite: never rub, never rewarm if refreezing is possible, never rewarm with dry heat. Remove jewelry, pad between digits, handle gently."
  },
  {
    id: "MED-063",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Psychiatric & Behavioral Emergencies",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.7,
    stem: "A 27-year-old man called 9-1-1 because he 'can't go on anymore.' The scene is safe, and he is calm, sitting on his couch. Which approach is MOST appropriate?",
    options: [
      "Avoid mentioning suicide, because asking about it may put the idea in his head",
      "Tell him that everyone feels this way sometimes and he should cheer up",
      "Leave him alone in the room for a few minutes so he can collect himself",
      "Ask him directly whether he is thinking about killing himself and whether he has a plan"
    ],
    correctIndex: 3,
    explanation: "Asking directly about suicidal thoughts, plans, and access to means does not increase the risk of suicide; it shows concern and helps you assess the danger. Listen without judgment, do not dismiss his feelings, and never leave a potentially suicidal patient alone. Look for medications, weapons, or other means of self-harm. Encourage him to go to the hospital for evaluation, and involve law enforcement according to protocol if he refuses and is a danger to himself.",
    studyTip: "Suicidal patient: ask directly about thoughts and a plan, listen without judging, never leave the patient alone, remove means of harm, and transport."
  },
  {
    id: "MED-064",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 1,
    irtB: -1.0,
    stem: "Which event marks the BEGINNING of the second stage of labor?",
    options: [
      "The start of regular contractions",
      "The rupture of the amniotic sac ('water breaking')",
      "Full dilation of the cervix",
      "Delivery of the placenta"
    ],
    correctIndex: 2,
    explanation: "Labor has three stages. The first stage begins with regular contractions and ends when the cervix is fully dilated. The second stage begins with full cervical dilation and ends with delivery of the baby; this is when the mother feels the urge to push and crowning occurs. The third stage begins after the baby is born and ends with delivery of the placenta. The amniotic sac can rupture at any point.",
    studyTip: "Stage 1: contractions → full dilation. Stage 2: full dilation → baby delivered. Stage 3: baby delivered → placenta delivered."
  },
  {
    id: "MED-065",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Infectious Disease",
    patientType: "Operations",
    difficulty: 1,
    irtB: -0.6,
    stem: "While cleaning up after a call, you are stuck in the finger by a used needle that was left on the stretcher. What should you do FIRST?",
    options: [
      "Wash the area with soap and water and report the exposure right away",
      "Squeeze the wound hard to make it bleed, then soak the finger in bleach",
      "Finish restocking the ambulance and report it at the end of your shift",
      "Wait to see whether signs of infection develop before reporting it"
    ],
    correctIndex: 0,
    explanation: "After a needlestick, immediately wash the area thoroughly with soap and water. Then report the exposure to your supervisor or designated infection control officer without delay, so the source patient can be tested and you can be evaluated for post-exposure treatment—some medications to prevent HIV work best when started within hours. Do not apply bleach or other harsh chemicals to the wound, and never wait for symptoms.",
    studyTip: "Exposure: wash with soap and water (flush mucous membranes with water), report immediately, and get medical evaluation promptly for post-exposure treatment."
  },
  {
    id: "MED-066",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "A 70-year-old man was found in his unheated home in winter. He is confused and drowsy, has stopped shivering, and his core temperature feels very cold. His pulse is slow and weak. Which action is MOST important while moving and treating him?",
    options: [
      "Have him walk to the ambulance so that his muscles generate body heat",
      "Rub his arms and legs vigorously to improve circulation to his core",
      "Give him hot coffee or tea to drink to warm him from the inside",
      "Handle him very gently, remove wet clothing, and rewarm him passively"
    ],
    correctIndex: 3,
    explanation: "A hypothermic patient who is confused and has stopped shivering has moderate to severe hypothermia. The cold heart is very irritable, and rough handling or exertion can trigger ventricular fibrillation. Move him gently and keep him horizontal, remove wet clothing, insulate him from the cold, and warm the ambulance. Heat packs to the armpits, chest, and groin may be used per protocol. Do not rub the extremities or give anything by mouth to a patient with an altered mental status.",
    studyTip: "Moderate/severe hypothermia (no shivering, altered mental status): handle gently, keep horizontal, passive and core rewarming, nothing by mouth, no rubbing."
  },
  {
    id: "MED-067",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Neurologic Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "A 68-year-old woman with diabetes suddenly developed slurred speech and weakness in her right arm 30 minutes ago. Her Cincinnati Prehospital Stroke Scale is abnormal. Before transporting her to a stroke center, which assessment is MOST important to perform?",
    options: [
      "A blood glucose check",
      "A detailed head-to-toe exam of her extremities",
      "A temperature check",
      "An orthostatic blood pressure check"
    ],
    correctIndex: 0,
    explanation: "Hypoglycemia can cause stroke-like signs such as one-sided weakness, slurred speech, and confusion, especially in people with diabetes. A quick blood glucose check identifies this stroke mimic, which is easily treated, and the receiving stroke center needs the result. Determine her last known well time, perform a stroke scale, and transport rapidly. Orthostatic vital signs are unsafe in a possible stroke patient, and a detailed exam should not delay transport.",
    studyTip: "Every stroke-like presentation: check blood glucose. Also establish the last known well time and pre-notify the stroke center."
  },
  {
    id: "MED-068",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Abdominal, GI & Renal Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "A 45-year-old woman reports severe, cramping pain in her upper right abdomen that began an hour after eating a fried dinner. The pain spreads to her right shoulder blade, and she is nauseated. Which condition is MOST likely?",
    options: [
      "Appendicitis (inflamed appendix)",
      "Gallbladder disease (gallstones)",
      "A kidney stone (renal colic)",
      "A ruptured spleen (splenic injury)"
    ],
    correctIndex: 1,
    explanation: "The gallbladder is in the right upper quadrant and releases bile to digest fats. Gallstones or gallbladder inflammation typically cause right upper quadrant pain after a fatty meal, often radiating to the right shoulder or shoulder blade, with nausea and vomiting. Appendicitis usually starts near the navel and moves to the right lower quadrant. A kidney stone causes flank pain radiating to the groin, and a spleen injury causes left upper quadrant pain, usually after trauma.",
    studyTip: "Right upper quadrant pain after fatty meals radiating to the right shoulder = gallbladder. Left shoulder pain with left upper quadrant pain after trauma = spleen (Kehr's sign)."
  },
  {
    id: "MED-069",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Gynecologic Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "A 22-year-old woman reports lower abdominal pain that has worsened over 3 days, with fever, a foul-smelling vaginal discharge, and pain when she walks, which makes her shuffle. Her pregnancy test last week was negative. Which condition do these findings MOST suggest?",
    options: [
      "Ruptured ectopic pregnancy",
      "Placenta previa",
      "Pelvic inflammatory disease",
      "Kidney stone"
    ],
    correctIndex: 2,
    explanation: "Pelvic inflammatory disease (PID) is an infection of the uterus, fallopian tubes, and ovaries, often caused by sexually transmitted bacteria. It typically causes gradually worsening lower abdominal pain, fever, vaginal discharge, and pain with walking (a shuffling gait). PID can lead to sepsis and infertility. Place her in a position of comfort, monitor for signs of shock, and transport. A ruptured ectopic pregnancy usually causes sudden pain and signs of shock, and placenta previa occurs in late pregnancy.",
    studyTip: "PID: gradual lower abdominal pain, fever, discharge, shuffling gait. Always consider ectopic pregnancy in any woman of childbearing age with abdominal pain."
  },
  {
    id: "MED-070",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Hematologic Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "A 28-year-old man with hemophilia twisted his knee playing basketball an hour ago. The knee is now swollen, warm, and very painful, but there is no deformity. His vital signs are normal. Which statement about his care is MOST accurate?",
    options: [
      "He likely has bleeding into the joint; splint it, apply cold, and transport",
      "Because there is no deformity, he can be released with instructions to rest at home",
      "He should keep walking on the leg so that the knee joint does not stiffen",
      "Apply a tourniquet above the knee to keep the swelling from spreading"
    ],
    correctIndex: 0,
    explanation: "Hemophilia is an inherited disorder in which the blood lacks clotting factors, so even minor injuries can cause prolonged or severe bleeding. Bleeding into joints is common and causes swelling, warmth, and pain. Immobilize the joint, apply cold, and transport; these patients often need clotting factor replacement in the hospital. Many patients carry their own factor or an emergency letter—bring it. Watch for signs of internal bleeding and shock.",
    studyTip: "Bleeding disorders (hemophilia) and anticoagulants: minor trauma can cause major bleeding. Lower your threshold to transport, and watch for hidden bleeding."
  },
  {
    id: "MED-071",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "A 19-year-old woman swallowed a large number of diphenhydramine (an antihistamine) tablets. She is agitated and confused, picking at the air, with hot, dry, flushed skin, widely dilated pupils, and HR 134 beats/min. She has not urinated in hours. Which toxic syndrome does she show?",
    options: [
      "Opioid toxidrome",
      "Cholinergic toxidrome",
      "Sedative-hypnotic toxidrome",
      "Anticholinergic toxidrome"
    ],
    correctIndex: 3,
    explanation: "Anticholinergic poisoning (from antihistamines, some antidepressants, jimsonweed, and other drugs) blocks the parasympathetic nervous system. The classic description is 'hot as a hare (hyperthermia), dry as a bone (dry skin), red as a beet (flushed), blind as a bat (dilated pupils), mad as a hatter (delirium, hallucinations),' along with tachycardia and urinary retention. A cholinergic patient has the opposite—wet, with small pupils and a slow heart rate. Monitor her airway, protect her from injury, watch for seizures and dysrhythmias, and transport.",
    studyTip: "Anticholinergic = hot, dry, red, dilated pupils, delirious, tachycardic. Cholinergic (SLUDGEM) = wet, pinpoint pupils, bradycardic. Opioid = pinpoint pupils, respiratory depression."
  },
  {
    id: "MED-072",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.4,
    stem: "Lightning struck a group of four hikers. Three are moaning and moving with burns and confusion. The fourth is unresponsive, not breathing, and pulseless. The storm has passed, and you are the only EMT on scene. Whom should you treat FIRST?",
    options: [
      "The most severely burned of the three moaning patients",
      "The unresponsive, pulseless patient, by beginning CPR",
      "The patient who is most confused",
      "No one until additional units arrive"
    ],
    correctIndex: 1,
    explanation: "Lightning strike victims who are moving and moaning are breathing and usually survive. Lightning often causes cardiac and respiratory arrest, but the heart may restart on its own, while the breathing center remains paralyzed longer. Patients in arrest have a good chance of survival with prompt CPR and ventilation. For this reason, lightning strikes use 'reverse triage': treat patients in cardiac or respiratory arrest first. This is the opposite of standard mass-casualty triage.",
    studyTip: "Lightning = reverse triage: resuscitate the apparently dead first. Make sure the scene is safe (storm passed); victims do not hold an electrical charge."
  },
  {
    id: "MED-073",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 2,
    irtB: 0.2,
    stem: "A 31-year-old woman who is 35 weeks pregnant has a severe headache, sees 'spots' in her vision, and has noticeable swelling of her face and hands. Her BP is 168/108 mmHg. She is alert and has not had a seizure. What is the MOST appropriate care?",
    options: [
      "Have her walk around to reduce the swelling and recheck her BP in 30 minutes",
      "Give her a sports drink and recommend she see her obstetrician tomorrow",
      "Keep her calm in a dim, quiet setting on her left side and watch for seizures",
      "Lay her flat on her back and transport rapidly with lights and sirens"
    ],
    correctIndex: 2,
    explanation: "High blood pressure with headache, visual changes, and swelling after 20 weeks of pregnancy indicates severe preeclampsia, which can progress to eclampsia (seizures), stroke, or placental abruption. Minimize stimulation, which can trigger seizures: keep her calm, dim the lights, and transport quietly if possible. Position her on her left side to prevent supine hypotension, give oxygen as needed, have suction ready, and notify the receiving hospital.",
    studyTip: "Preeclampsia: hypertension + headache, visual changes, edema after 20 weeks. Reduce stimulation, left lateral position, suction ready, watch for seizures (eclampsia)."
  },
  {
    id: "MED-074",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 2,
    irtB: 0.1,
    stem: "A 26-year-old woman who is about 10 weeks pregnant has heavy vaginal bleeding and cramping. She is passing clots and some tissue. She is pale, with HR 112 beats/min and BP 102/66 mmHg. Which action is MOST appropriate?",
    options: [
      "Treat for shock, place a pad over the vaginal opening, and save any tissue",
      "Pack the vagina with sterile gauze to stop the bleeding before transport",
      "Have her sit on the toilet until the bleeding and cramping slow down",
      "Discard the tissue on scene so that she does not become more upset"
    ],
    correctIndex: 0,
    explanation: "These findings suggest a spontaneous abortion (miscarriage), which can cause significant blood loss. She is tachycardic and pale, so treat for shock: position, keep her warm, give oxygen as needed, and transport. Place a sanitary pad over the vaginal opening (never pack anything inside the vagina), and save any tissue or clots passed, bringing them to the hospital for examination. Provide emotional support; pregnancy loss is distressing at any stage.",
    studyTip: "Vaginal bleeding: pad externally (never pack), save tissue, treat for shock, and offer emotional support. Consider ectopic pregnancy and miscarriage in early pregnancy."
  },
  {
    id: "MED-075",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Pediatric Medical Emergencies",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: -0.2,
    stem: "You walk into a room where a 3-year-old boy is sitting on his mother's lap. Before touching him, you use the Pediatric Assessment Triangle to form a general impression. Which three components does it assess?",
    options: [
      "Airway, breathing, and circulation by palpating pulses",
      "Pulse, blood pressure, and respiratory rate",
      "Level of consciousness, pupils, and blood glucose",
      "Appearance, work of breathing, and circulation to the skin"
    ],
    correctIndex: 3,
    explanation: "The Pediatric Assessment Triangle is a quick, hands-off look at a child from across the room. Appearance includes muscle tone, interactiveness, consolability, gaze, and speech or cry (TICLS). Work of breathing includes abnormal sounds, positioning, retractions, and nasal flaring. Circulation to the skin includes pallor, mottling, and cyanosis. It helps determine how sick the child is before you begin a hands-on assessment that may upset him.",
    studyTip: "Pediatric Assessment Triangle: Appearance (TICLS), Work of breathing, Circulation to skin—assessed from the doorway before touching the child."
  },
  {
    id: "MED-076",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Abdominal, GI & Renal Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.4,
    stem: "A 62-year-old man who takes ibuprofen daily for arthritis says he has felt weak and dizzy for 2 days and that his stools have been black, sticky, and tarry. He is pale, with HR 110 beats/min. What does the stool description MOST likely indicate?",
    options: [
      "Bleeding from hemorrhoids near the end of the rectum",
      "Bleeding high in the digestive tract, such as from an ulcer",
      "A normal, harmless side effect of taking daily ibuprofen",
      "Bleeding from the lower part of the large intestine (colon)"
    ],
    correctIndex: 1,
    explanation: "Black, sticky, tarry stool (melena) results from blood that has been partially digested as it travels through the intestines, so it usually comes from the upper GI tract—such as a stomach or duodenal ulcer. Daily use of anti-inflammatory drugs like ibuprofen is a major cause of ulcers. Bright red blood in the stool (hematochezia) usually indicates bleeding lower in the GI tract, such as hemorrhoids or the colon. His weakness, pallor, and tachycardia suggest significant blood loss; treat for shock and transport.",
    studyTip: "Melena (black, tarry stool) = upper GI bleed. Bright red blood per rectum = usually lower GI bleed. Coffee-ground vomit = upper GI bleed."
  },
  {
    id: "MED-077",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Allergic Reactions & Anaphylaxis",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.7,
    stem: "Twenty minutes after you gave epinephrine to a 30-year-old woman for anaphylaxis from a bee sting, her hives have faded, her breathing is normal, and her BP is 124/78 mmHg. She feels fine and wants to refuse transport. What is the MOST important information to explain to her?",
    options: [
      "Since her symptoms resolved, she does not need any further care",
      "Epinephrine wears off quickly, and the reaction can return hours later",
      "She should give herself another dose of epinephrine in 1 hour even if she feels fine",
      "Her reaction must have been mild, because it responded to a single dose"
    ],
    correctIndex: 1,
    explanation: "Epinephrine is short-acting, and its effects may wear off within 10 to 20 minutes, allowing symptoms to return. In addition, some patients have a biphasic reaction, in which anaphylaxis returns hours later without any new exposure. For these reasons, any patient who received epinephrine for anaphylaxis should be transported for observation. If she still refuses after a clear explanation of the risks, follow your refusal protocol and document thoroughly.",
    studyTip: "After epinephrine for anaphylaxis: transport for observation. Epinephrine is short-acting, and biphasic reactions can occur hours later."
  },
  {
    id: "MED-078",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.9,
    stem: "A 21-year-old soldier collapsed during a long training run on a hot day. He is confused and combative, with skin that is hot and still sweaty. His HR is 138 beats/min and BP is 98/60 mmHg. Another EMT says it can't be heat stroke because he is still sweating. What is the MOST accurate statement?",
    options: [
      "He has heat exhaustion, because patients with heat stroke always have dry skin",
      "He has heat cramps from losing electrolytes and needs oral fluids",
      "His altered mental status suggests heat stroke; begin aggressive cooling now",
      "He is dehydrated and should drink water before any cooling is started"
    ],
    correctIndex: 2,
    explanation: "In exertional heat stroke—common in athletes, soldiers, and workers—patients often continue to sweat. Hot, dry skin is more typical of classic heat stroke in older adults during heat waves. The key feature that separates heat stroke from heat exhaustion is altered mental status (confusion, combativeness, seizures, or unresponsiveness). Heat stroke is a true emergency: remove him from the heat, remove clothing, and begin aggressive cooling immediately (cold-water immersion if available, or ice packs and cool water with fanning), then transport.",
    studyTip: "Heat stroke = hyperthermia + altered mental status, with or without sweating. Cool first, aggressively and immediately. Exertional heat stroke patients often sweat."
  },
  {
    id: "MED-079",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.0,
    stem: "A 39-year-old scuba diver made a rapid ascent after running low on air. Within 2 minutes of surfacing, he became confused, with weakness on one side of his body and difficulty speaking. Which condition is MOST likely?",
    options: [
      "Decompression sickness ('the bends'), which typically appears with joint pain hours after diving",
      "Nitrogen narcosis, which resolves as soon as the diver surfaces",
      "Hypoglycemia from exertion",
      "Arterial gas embolism, in which air bubbles from damaged lungs travel to the brain"
    ],
    correctIndex: 3,
    explanation: "When a diver ascends rapidly while holding his breath, expanding air can rupture the alveoli and enter the bloodstream. These air bubbles can travel to the brain and cause stroke-like signs within minutes of surfacing—an arterial gas embolism. Decompression sickness is caused by nitrogen bubbles forming in tissues and usually appears later (often within hours) with joint pain, rash, and fatigue. Give high-flow oxygen, keep him supine or in the recovery position, transport rapidly, and contact medical control about a hyperbaric chamber.",
    studyTip: "Arterial gas embolism: stroke-like signs within minutes of surfacing. Decompression sickness: joint pain, fatigue, rash, numbness, usually hours later. Both: high-flow oxygen, hyperbaric treatment."
  },
  {
    id: "MED-080",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Toxicology & Environmental Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.2,
    stem: "You respond to an unresponsive person in a parked car with the windows closed. As you approach, you notice a handwritten sign taped to the window reading 'DANGER – TOXIC GAS – CALL HAZMAT,' buckets inside the car, and a strong rotten-egg odor. What should you do?",
    options: [
      "Open the door quickly while holding your breath and pull the patient out",
      "Break a window to ventilate the car, then reach in to assess the patient",
      "Retreat upwind, keep others away, and request a hazmat team",
      "Put on a surgical mask over an N95 respirator before entering the car"
    ],
    correctIndex: 2,
    explanation: "These findings suggest a 'chemical suicide,' in which household chemicals are mixed to produce a toxic gas such as hydrogen sulfide (rotten-egg odor). The gas can quickly incapacitate or kill rescuers who open the car. Do not open the doors or windows. Retreat upwind, isolate the area, keep bystanders away, and request a hazmat team with self-contained breathing apparatus. Surgical masks and N95 respirators do not protect against toxic gases. Rescuers who become patients cannot help anyone.",
    studyTip: "Warning signs, chemical containers, and odors in an enclosed space = hazmat scene. Retreat upwind, isolate, deny entry, call hazmat. N95 masks do not filter gases."
  },
  {
    id: "MED-081",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Obstetric",
    difficulty: 3,
    irtB: 0.8,
    stem: "You have just delivered a healthy baby for a woman who received no prenatal care. Her abdomen is still very large and firm, and she says she feels strong contractions starting again. What should you do?",
    options: [
      "Clamp and cut the first cord, and prepare for a second baby",
      "Massage the uterus firmly to help the placenta deliver",
      "Pull gently but steadily on the umbilical cord to speed delivery of the placenta",
      "Begin transport immediately and tell her not to push during contractions"
    ],
    correctIndex: 0,
    explanation: "A uterus that remains large after delivery, with continued strong contractions, suggests a second baby (twins). Clamp and cut the first baby's cord, keep that baby warm and dry, and prepare for a second delivery, which usually occurs within minutes. Twins are often smaller and premature, so prepare for neonatal resuscitation and prevent hypothermia. Uterine massage is performed after all babies and placentas are delivered, and never pull on the cord.",
    studyTip: "Multiple births: suspect twins if the abdomen stays large and contractions continue. Clamp/cut the first cord, prepare for the next delivery, and expect small, premature infants."
  },
  {
    id: "MED-082",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Obstetrics & Neonatal Care",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 1.1,
    stem: "A newborn is delivered through thick, dark green amniotic fluid. The baby is limp, has poor muscle tone, and is not breathing or crying. After warming, drying, and positioning, which action is MOST appropriate according to current neonatal guidelines?",
    options: [
      "Delay ventilation until all meconium has been suctioned from the trachea",
      "Stimulate the baby vigorously for 2 full minutes before considering ventilation",
      "Clear the airway only if it is blocked, then start ventilation within 1 minute",
      "Give blow-by oxygen near the face and wait for the baby to start breathing"
    ],
    correctIndex: 2,
    explanation: "Thick green fluid indicates meconium. Current guidelines no longer recommend routine deep suctioning of the trachea for non-vigorous newborns born through meconium, because delaying ventilation is harmful. Provide initial steps (warm, dry, position, and clear the airway if obstructed), and if the baby is not breathing or the heart rate is below 100 beats/min, begin positive pressure ventilation within the first 60 seconds. Blow-by oxygen does not help an apneic newborn.",
    studyTip: "Meconium + non-vigorous newborn: clear the airway only if obstructed, then start PPV within the first minute. Don't let suctioning delay ventilation."
  },
  {
    id: "MED-083",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Pediatric Medical Emergencies",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 1.0,
    stem: "A 9-year-old girl has been losing weight, drinking large amounts of water, and urinating frequently for 2 weeks. Today she is vomiting, has abdominal pain, and is drowsy, with deep, rapid breathing and a fruity odor on her breath. She has no known medical history. Which condition is MOST likely?",
    options: [
      "Appendicitis with early rupture",
      "Diabetic ketoacidosis (new diabetes)",
      "Viral gastroenteritis with dehydration",
      "Hypoglycemia from not eating"
    ],
    correctIndex: 1,
    explanation: "Undiagnosed type 1 diabetes often first appears as diabetic ketoacidosis (DKA). Without insulin, glucose cannot enter the cells, so the body breaks down fat, producing ketones and acids. The classic signs are excessive thirst, frequent urination, weight loss, then vomiting, abdominal pain, dehydration, altered mental status, Kussmaul respirations, and a fruity odor. Check her blood glucose, support her airway and breathing, treat for dehydration and shock, and transport.",
    studyTip: "New-onset type 1 diabetes often presents as DKA: polyuria, polydipsia, weight loss → vomiting, abdominal pain, deep rapid breathing, fruity breath, altered mental status."
  },
  {
    id: "MED-084",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Psychiatric & Behavioral Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.9,
    stem: "Family members called 9-1-1 because a 72-year-old man with no psychiatric history suddenly became confused and began seeing insects on the walls this morning. His HR is 112 beats/min and temperature is 101.6°F (38.7°C). The family asks if he is 'going crazy.' How should you interpret this presentation?",
    options: [
      "It is most likely a new psychiatric illness, such as schizophrenia",
      "It is a normal part of aging",
      "He is probably faking symptoms to get attention",
      "It suggests a medical cause, such as infection, that is producing delirium"
    ],
    correctIndex: 3,
    explanation: "A sudden change in behavior in an older adult with no psychiatric history—especially with visual hallucinations, abnormal vital signs, or fever—strongly suggests delirium caused by a medical problem such as infection (urinary tract infection, pneumonia, sepsis), hypoglycemia, hypoxia, stroke, or medication effects. Primary psychiatric illnesses like schizophrenia usually begin in young adulthood and more often involve auditory hallucinations. Check blood glucose and SpO2, assess for infection, and transport.",
    studyTip: "Suspect a medical cause of abnormal behavior when there is sudden onset, age over 40 with no psychiatric history, visual hallucinations, abnormal vital signs, or fever."
  },
  {
    id: "MED-085",
    source: "Claude",
    domain: "Medical; Obstetrics & Gynecology",
    subtopic: "Neurologic Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.6,
    stem: "A 40-year-old man woke up with drooping on the entire right side of his face, including his forehead, and cannot close his right eye. His arm strength and speech are normal. A family member says it is 'just Bell's palsy.' What is the BEST approach?",
    options: [
      "Treat it as a possible stroke, determine his last known well time, and transport",
      "Reassure him that it is Bell's palsy and recommend he see his doctor next week",
      "Have him perform facial exercises to restore movement before you leave",
      "Give aspirin per protocol, because sudden facial droop always means a stroke"
    ],
    correctIndex: 0,
    explanation: "Bell's palsy, a temporary facial nerve paralysis, often affects the entire side of the face, including the forehead. Stroke typically spares the forehead, but EMTs cannot reliably tell the two apart in the field, and stroke cannot be ruled out without a hospital evaluation. Treat any new facial droop as a possible stroke: determine the last known well time (for symptoms found on waking, this is when he went to sleep), check blood glucose, and transport. EMTs do not give aspirin for suspected stroke, because it would worsen a brain bleed.",
    studyTip: "New facial droop = possible stroke until proven otherwise. Symptoms found on waking: last known well = when the patient went to sleep. No aspirin for stroke."
  }
);
