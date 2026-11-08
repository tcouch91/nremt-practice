// NREMT EMT Cognitive Exam Practice Question Bank
// Domain 2: Cardiology & Resuscitation (66 Questions: CARD-001 to CARD-066)
// Difficulty Tiers: 1 = Easy, 2 = Medium, 3 = Hard
// Scope: EMT (2019 National EMS Scope of Practice Model / National EMS Education Standards).
// Authorship is tracked per question by the `source` field ("Gemini" or "Claude").

window.NREMT_QUESTIONS = window.NREMT_QUESTIONS || [];

window.NREMT_QUESTIONS.push(
  {
    id: "CARD-001",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.1,
    stem: "You arrive on scene to find a 61-year-old male collapsed in his driveway. He is unresponsive, apneic, and has no palpable carotid pulse. While your partner retrieves the AED from the ambulance, what is your MOST immediate action?",
    options: [
      "Insert an oropharyngeal airway and deliver 2 rescue breaths",
      "Begin high-quality chest compressions at a rate of 100 to 120 per minute and a depth of at least 2 inches",
      "Check his blood pressure and blood glucose level to determine the cause of arrest",
      "Perform a precordial thump and wait 30 seconds for the AED to arrive"
    ],
    correctIndex: 1,
    explanation: "In adult cardiac arrest, high-quality chest compressions (C-A-B sequence) are the top immediate priority before airway and breathing interventions. Compress the center of the chest at a rate of 100 to 120 compressions per minute to a depth of 2 to 2.4 inches (5 to 6 cm), allowing full chest recoil between compressions while your partner prepares the AED.",
    studyTip: "Adult CPR: C-A-B sequence, rate 100–120/min, depth 2–2.4 inches (5–6 cm), full recoil, minimize interruptions to < 10 seconds."
  },
  {
    id: "CARD-002",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "AED Operations & Special Situations",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.9,
    stem: "The AED has just delivered a shock to a 55-year-old female in cardiac arrest. What should you do IMMEDIATELY after the shock is delivered?",
    options: [
      "Check the carotid pulse for up to 10 seconds to see if the shock restored a rhythm",
      "Deliver 2 rescue breaths with a bag-valve mask and re-analyze the rhythm",
      "Resume chest compressions immediately, starting with a 30:2 cycle for 2 minutes",
      "Turn off the AED and prepare the patient for immediate transport"
    ],
    correctIndex: 2,
    explanation: "Immediately after an AED delivers a shock (or advises 'no shock advised'), you must resume chest compressions without pausing to check a pulse. Even when defibrillation successfully terminates ventricular fibrillation, the myocardium is typically stunned and requires immediate chest compressions for 2 minutes (5 cycles of 30:2) to restore coronary perfusion pressure.",
    studyTip: "After an AED shock (or 'no shock advised'), NEVER pause to check a pulse—immediately resume chest compressions for 2 minutes."
  },
  {
    id: "CARD-003",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.8,
    stem: "A 59-year-old male complains of substernal chest pressure radiating to his left jaw that began 25 minutes ago while mowing the lawn. He is alert and oriented, has no known drug allergies, and has not taken any medications today. What is the standard dose and route of aspirin you should administer per protocol?",
    options: [
      "81 mg swallowed whole with a full glass of water",
      "162 to 324 mg of chewable baby aspirin (2 to 4 tablets of 81 mg) chewed and swallowed",
      "0.4 mg placed sublingually under the tongue",
      "650 mg of enteric-coated aspirin dissolved in water"
    ],
    correctIndex: 1,
    explanation: "For patients with suspected acute coronary syndrome (ACS), administer 162 to 324 mg of non-enteric-coated chewable aspirin (two to four 81-mg tablets). Chewing the aspirin rapidly increases absorption across the oral and gastric mucosa so it can inhibit platelet aggregation and prevent coronary thrombus growth.",
    studyTip: "ACS Aspirin dose: 162–324 mg (2–4 x 81 mg chewable tablets). Contraindications: True aspirin allergy, active GI bleeding, or inability to swallow safely."
  },
  {
    id: "CARD-004",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.7,
    stem: "Before assisting a patient with chest pain in taking their prescribed sublingual nitroglycerin, which of the following vital signs is an absolute contraindication to administration?",
    options: [
      "Heart rate of 96 beats/min",
      "Respiratory rate of 22 breaths/min",
      "Systolic blood pressure of 86 mmHg",
      "Pulse oximetry reading of 95% on room air"
    ],
    correctIndex: 2,
    explanation: "Nitroglycerin is a potent smooth muscle vasodilator that reduces venous return (preload) and systemic vascular resistance (afterload). Administering nitroglycerin to a patient who is already hypotensive (systolic blood pressure < 90 to 100 mmHg, depending on local protocol) can precipitate profound, life-threatening cardiovascular collapse and decrease coronary artery perfusion.",
    studyTip: "Nitroglycerin Contraindications: Hypotension (SBP < 90–100 mmHg), use of phosphodiesterase-5 (PDE-5) inhibitors within 24–48 hours, severe bradycardia/tachycardia, head injury/increased ICP, or maximum doses (3) already taken."
  },
  {
    id: "CARD-005",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Pediatric",
    difficulty: 1,
    irtB: -0.6,
    stem: "You and your EMT partner arrive on scene to find a 4-year-old child in cardiac arrest. When two healthcare providers are performing CPR on an infant or child without an advanced airway in place, what is the correct compression-to-ventilation ratio?",
    options: [
      "30 compressions to 2 ventilations",
      "15 compressions to 2 ventilations",
      "15 compressions to 1 ventilation",
      "5 compressions to 1 ventilation"
    ],
    correctIndex: 1,
    explanation: "For infants and children (from birth beyond the neonatal period up to the onset of puberty), the single-rescuer CPR ratio is 30:2, while the two-rescuer healthcare provider CPR ratio is 15 compressions to 2 ventilations. Because pediatric cardiac arrest is most frequently respiratory/hypoxic in origin, the 15:2 ratio provides more frequent ventilations when two rescuers are present.",
    studyTip: "CPR Ratios: Adult (1 or 2 rescuers) = 30:2. Infant/Child (1 rescuer) = 30:2. Infant/Child (2 rescuers) = 15:2. Newborn/Neonatal delivery room resuscitation = 3:1."
  },
  {
    id: "CARD-006",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "AED Operations & Special Situations",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.8,
    stem: "While preparing to apply AED pads to the bare chest of a 72-year-old male in cardiac arrest, you notice a transdermal nitroglycerin patch on his right upper chest where the AED pad should be placed. What should you do?",
    options: [
      "Place the AED pad directly over the medication patch and analyze the rhythm",
      "Withhold AED application altogether to prevent an electrical burn",
      "Remove the patch with a gloved hand, wipe the skin dry, and then apply the AED pad",
      "Apply both AED pads to the patient's abdomen instead of the chest"
    ],
    correctIndex: 2,
    explanation: "Transdermal medication patches (such as nitroglycerin, fentanyl, or nicotine) located where an AED pad needs to go can block electrical energy delivery to the heart and cause thermal burns/arcing on the skin. Using a gloved hand (to avoid absorbing the medication yourself), remove the patch, wipe the area clean/dry, and apply the AED pad.",
    studyTip: "Medication patch on chest during arrest: Remove with gloved hand, wipe skin clean, apply AED pad."
  },
  {
    id: "CARD-007",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Pediatric",
    difficulty: 1,
    irtB: -0.5,
    stem: "Where should you palpate for a central pulse in an unresponsive 5-month-old infant?",
    options: [
      "Radial artery at the wrist",
      "Carotid artery in the neck",
      "Brachial artery on the medial aspect of the upper arm",
      "Dorsalis pedis artery on the top of the foot"
    ],
    correctIndex: 2,
    explanation: "In infants (< 1 year old), the short, chubby anatomy of the neck makes the carotid pulse difficult to palpate accurately and risks compressing the airway. Therefore, you should palpate the brachial artery (on the inside of the upper arm between the elbow and shoulder) or femoral artery for at least 5 seconds but no more than 10 seconds.",
    studyTip: "Central pulse check locations: Infant (< 1 yr) = Brachial (or femoral) artery. Child & Adult (> 1 yr) = Carotid (or femoral) artery."
  },
  {
    id: "CARD-008",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.2,
    stem: "A 66-year-old male with crushing substernal chest pain requests assistance with his prescribed nitroglycerin. His vital signs are BP 138/84 mmHg, HR 88 beats/min, RR 18 breaths/min, and SpO2 96%. During your focused history, he reveals that he took tadalafil (Cialis) yesterday evening. What should you do regarding nitroglycerin administration?",
    options: [
      "Administer half the normal dose of nitroglycerin (0.2 mg) and monitor his blood pressure",
      "Withhold nitroglycerin because tadalafil is a PDE-5 inhibitor that causes life-threatening hypotension when combined with nitrates",
      "Administer nitroglycerin because more than 12 hours have elapsed since he took tadalafil",
      "Administer nitroglycerin only after giving 324 mg of chewable aspirin"
    ],
    correctIndex: 1,
    explanation: "Phosphodiesterase-5 (PDE-5) inhibitors—such as sildenafil (Viagra/Revatio), vardenafil (Levitra), and tadalafil (Cialis/Adcirca)—used for erectile dysfunction or pulmonary arterial hypertension cause profound, refractory, and potentially fatal vasodilation and hypotension when combined with nitrates. Nitroglycerin is contraindicated within 24 hours of sildenafil/vardenafil and within 36 to 48 hours of tadalafil (due to its longer half-life).",
    studyTip: "Never give nitroglycerin within 24 hours of sildenafil/vardenafil (Viagra/Levitra) or within 48 hours of tadalafil (Cialis)."
  },
  {
    id: "CARD-009",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Heart Failure & Cardiogenic Shock",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "You are assessing a 75-year-old female with a history of chronic heart failure. She presents with jugular venous distension (JVD), hepatomegaly, abdominal ascites, and 3+ pitting edema in both ankles and lower legs, while her lung sounds are relatively clear. Which chamber of the heart is PRIMARILY failing to pump effectively?",
    options: [
      "Left ventricle",
      "Right ventricle",
      "Left atrium",
      "Coronary sinus"
    ],
    correctIndex: 1,
    explanation: "Right-sided heart failure (right ventricular failure) impairs the heart's ability to pump venous blood forward into the pulmonary circulation, causing blood to back up into the systemic venous system (vena cavae). This produces jugular venous distension (JVD), liver engorgement (hepatomegaly), ascites, and dependent peripheral/pedal edema. In contrast, left-sided heart failure causes blood to back up into the pulmonary veins and alveoli, producing pulmonary edema and crackles.",
    studyTip: "Left Heart Failure = Lungs (Pulmonary edema, crackles, orthopnea, pink frothy sputum). Right Heart Failure = Rest of Body (JVD, pedal edema, hepatomegaly, ascites). Note: The #1 cause of right heart failure is chronic left heart failure!"
  },
  {
    id: "CARD-010",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "AED Operations & Special Situations",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: -0.1,
    stem: "You are treating a 3-year-old child in cardiac arrest. You open the AED case and discover that the pediatric dose-attenuator pads are missing, leaving only adult AED pads available. What is the MOST appropriate action?",
    options: [
      "Perform CPR only and do not apply the AED until ALS arrives with pediatric pads",
      "Cut the adult AED pads in half so they fit the child's chest without overlapping",
      "Use the adult AED pads, placing them in an anterior-posterior position if necessary so the pads do not touch or overlap",
      "Place only one adult AED pad over the center of the sternum and leave the second pad disconnected"
    ],
    correctIndex: 2,
    explanation: "For infants and children under 8 years old (or < 55 lb / 25 kg), a manual defibrillator or an AED with a pediatric dose attenuator is preferred. However, if pediatric pads/attenuator are unavailable, you should ALWAYS use standard adult AED pads rather than withholding defibrillation! Ensure the pads do not touch or overlap—use anterior-posterior (chest and back) placement on small chests.",
    studyTip: "Pediatric AED rule (< 8 yrs): Use pediatric attenuator pads if available; if NOT available, use adult AED pads (anterior-posterior placement so pads never touch)."
  },
  {
    id: "CARD-011",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "After 6 minutes of CPR and 2 AED shocks, a 58-year-old male achieves return of spontaneous circulation (ROSC). He now has a palpable carotid and radial pulse of 94 beats/min and a blood pressure of 112/70 mmHg, but he remains unresponsive and is only taking occasional agonal gasps every 20 seconds. What is the MOST appropriate management of his airway and oxygenation?",
    options: [
      "Place a nonrebreather mask at 15 L/min and place him in the recovery position",
      "Ventilate him with a BVM at 10 breaths/min (1 breath every 6 seconds) and titrate oxygen to maintain an SpO2 between 92% and 98%",
      "Hyperventilate him with a BVM at 24 breaths/min with 100% oxygen to rapidly clear lactic acid",
      "Withhold ventilations until his SpO2 drops below 85% to prevent intrathoracic pressure buildup"
    ],
    correctIndex: 1,
    explanation: "Following ROSC, patients who remain comatose with inadequate/agonal breathing require controlled positive pressure ventilation at 10 breaths/min (1 breath every 6 seconds). Both hypoxia and hyperoxia (SpO2 of 100% with excessive free oxygen radicals) worsen post-cardiac arrest neurological injury, and hyperventilation causes cerebral vasoconstriction and decreased cardiac output. Therefore, titrate supplemental oxygen to maintain SpO2 between 92% and 98% (or 94%–98%).",
    studyTip: "Post-ROSC Care: Avoid hyperventilation (ventilate at 10 breaths/min / 1 every 6 sec), avoid hyperoxia (titrate SpO2 to 92%–98%), maintain SBP >= 90 mmHg, and transport to a PCI/cardiac center."
  },
  {
    id: "CARD-012",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Vascular & Hypertensive Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "A 69-year-old male with a history of poorly controlled hypertension complains of a sudden, severe 'tearing' pain in his chest that radiates straight through to his interscapular back. He is pale and diaphoretic. You obtain blood pressures in both arms and find a reading of 178/102 mmHg in the right arm and 112/68 mmHg in the left arm. What condition should you suspect?",
    options: [
      "Acute pericarditis",
      "Thoracic aortic dissection",
      "Gastroesophageal reflux disease",
      "Right ventricular myocardial infarction"
    ],
    correctIndex: 1,
    explanation: "Sudden-onset, maximal-intensity 'tearing' or 'ripping' chest pain radiating to the back between the shoulder blades, accompanied by a significant pulse deficit or systolic blood pressure difference (> 20 mmHg) between the right and left arms, is the classic presentation of an acute thoracic aortic dissection. Giving aspirin or nitroglycerin without medical control in suspected aortic dissection can be dangerous; focus on calm care and rapid, gentle transport to a surgical center.",
    studyTip: "Sudden 'tearing/ripping' chest-to-back pain + blood pressure discrepancy (> 20 mmHg) or pulse deficit between arms = Thoracic Aortic Dissection. Pulsating abdominal mass + lower back/flank pain + hypotension = Abdominal Aortic Aneurysm (AAA)."
  },
  {
    id: "CARD-013",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "AED Operations & Special Situations",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "When applying AED pads to a patient in cardiac arrest, you notice a small, hard, round lump just beneath the skin below the right clavicle. What does this finding represent, and how should you place the AED pad?",
    options: [
      "A subcutaneous tumor; place the AED pad directly over the lump for better electrical conductivity",
      "An implanted pacemaker or defibrillator (ICD); place the AED pad beside or below the device, avoiding direct placement over it",
      "A central venous catheter port; do not use the AED on this patient",
      "Subcutaneous emphysema from a tension pneumothorax; withhold chest compressions"
    ],
    correctIndex: 1,
    explanation: "A hard lump beneath the skin near the upper chest/clavicle (typically accompanied by a small surgical scar) indicates an implanted pacemaker or implantable cardioverter-defibrillator (ICD). Placing an AED pad directly over the metallic casing of an implanted device can block the delivery of shock energy to the myocardium. Place the AED pad directly adjacent to (at least 1 inch away from) the implanted device.",
    studyTip: "Implanted pacemaker/ICD: Never place the AED pad directly over the hard lump; place the pad adjacent to it (at least 1 inch away)."
  },
  {
    id: "CARD-014",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "You are called for a 78-year-old diabetic female who complains of sudden-onset extreme fatigue, nausea, epigastric discomfort, and shortness of breath that started 1 hour ago. She denies any chest pain. Her skin is pale, cool, and diaphoretic. Vital signs are BP 106/68 mmHg, HR 108 beats/min and irregular, RR 22 breaths/min, and SpO2 94%. What should you suspect as the MOST serious underlying cause?",
    options: [
      "Acute gastroenteritis from food poisoning",
      "Silent or atypical acute myocardial infarction (AMI)",
      "Simple dehydration from elevated blood glucose",
      "Benign paroxysmal positional vertigo"
    ],
    correctIndex: 1,
    explanation: "Elderly patients, women, and patients with diabetes mellitus (due to autonomic neuropathy blunting visceral pain fibers) frequently present with 'silent' or atypical acute myocardial infarction (AMI) without classic crushing chest pain. Instead, they exhibit anginal equivalents such as sudden unexplained dyspnea, extreme weakness/fatigue, syncope, nausea/vomiting, epigastric pain, and diaphoresis.",
    studyTip: "Always suspect Silent/Atypical MI in Women, Elderly, and Diabetics presenting with unexplained dyspnea, sudden fatigue/weakness, nausea, syncope, or diaphoresis—even without chest pain."
  },
  {
    id: "CARD-015",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Heart Failure & Cardiogenic Shock",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.4,
    stem: "A 63-year-old male is experiencing severe substernal chest pain following a massive myocardial infarction. He is confused, restless, and has cold, clammy, mottled skin. Auscultation reveals diffuse crackles in both lungs. His vital signs are BP 76/50 mmHg, HR 124 beats/min and weak, RR 28 breaths/min, and SpO2 87%. Which type of shock is this patient experiencing?",
    options: [
      "Hypovolemic shock",
      "Cardiogenic shock",
      "Neurogenic shock",
      "Anaphylactic shock"
    ],
    correctIndex: 1,
    explanation: "Cardiogenic shock occurs when extensive myocardial damage (typically > 40% of the left ventricle following an AMI) leaves the heart unable to generate adequate cardiac output to perfuse vital organs. It presents with hypotension (SBP < 90 mmHg), altered mental status, cool/clammy skin, tachycardia, and signs of pulmonary congestion (crackles/rales).",
    studyTip: "Cardiogenic Shock = Pump failure after MI/heart disease -> Hypotension + Tachycardia + Cool/Clammy skin + Pulmonary Crackles. Do NOT give nitroglycerin or large fluid boluses when lungs have crackles!"
  },
  {
    id: "CARD-016",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "Why is it critical to allow complete chest wall recoil after each chest compression during CPR?",
    options: [
      "It prevents rib fractures and sternal contusions in elderly patients",
      "It creates negative intrathoracic pressure that draws venous blood back into the heart (preload) to refill the chambers for the next compression",
      "It allows the lungs to passively exhale carbon dioxide without rescue breaths",
      "It gives the AED enough time to analyze the cardiac rhythm during compressions"
    ],
    correctIndex: 1,
    explanation: "During the decompression (recoil) phase of CPR, the chest wall springs back, generating negative intrathoracic pressure that pulls venous blood back into the right atrium and allows blood to perfuse the coronary arteries. Leaning on the chest between compressions maintains elevated intrathoracic pressure, severely reducing venous return (preload), cardiac output, and cerebral/coronary perfusion.",
    studyTip: "Full chest recoil = Negative intrathoracic pressure = Venous return (preload) + Coronary artery perfusion. Never lean on the chest between compressions!"
  },
  {
    id: "CARD-017",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Mechanical Circulatory Support (LVAD)",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.9,
    stem: "You respond to a 62-year-old male who has a left ventricular assist device (LVAD) with a percutaneous driveline exiting his abdomen connected to an external controller and battery pack. The patient is pale, unresponsive, and apneic. You cannot palpate a carotid or radial pulse, and when you auscultate over his left chest/epigastrium, you hear NO continuous mechanical humming sound. The LVAD controller is alarming with a red 'Pump Off / Low Flow' light. After attempting to reconnect/replace the power source per family guidance without success, should you perform chest compressions?",
    options: [
      "Never perform chest compressions on an LVAD patient under any circumstances because compressions will dislodge the pump",
      "Yes; because the patient is unresponsive, apneic, has no signs of perfusion, and the LVAD pump has stopped functioning (no hum), begin CPR and transport rapidly",
      "Perform abdominal thrusts instead of chest compressions to circulate blood through the LVAD cannula",
      "Apply an AED and deliver 3 consecutive stacked shocks before touching the chest"
    ],
    correctIndex: 1,
    explanation: "Continuous-flow LVAD patients normally lack a palpable pulse because the pump delivers non-pulsatile continuous flow (you normally assess perfusion via mental status, skin color, capillary refill, and listening for a continuous mechanical hum over the left chest). However, if the LVAD patient is unresponsive, apneic, has signs of absent perfusion, and has NO mechanical hum (indicating total pump failure), current AHA/EMS guidelines state you should perform standard chest compressions and BVM ventilations while troubleshooting power/transporting.",
    studyTip: "Continuous-flow LVAD patients often have NO palpable pulse even when awake and talking! Assess mental status + auscultate for a continuous 'hum' over the apex. If unresponsive + no hum/no perfusion, start CPR."
  },
  {
    id: "CARD-018",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Obstetric",
    difficulty: 3,
    irtB: 0.8,
    stem: "You are performing resuscitation on a 29-year-old female who is 34 weeks pregnant and in cardiac arrest. Her gravid fundus extends well above her umbilicus. In addition to high-quality chest compressions, airway management, and AED use, what critical modification MUST be performed continuously during CPR?",
    options: [
      "Perform chest compressions at half the normal depth (1 inch) to avoid injuring the fetus",
      "Withhold AED defibrillation because electrical current will cross the placenta",
      "Perform continuous manual left uterine displacement (LUD) by pulling/pushing the gravid uterus to the patient's left while keeping her torso supine on a firm surface",
      "Place the patient in a full 90-degree left lateral recumbent position to perform chest compressions"
    ],
    correctIndex: 2,
    explanation: "In a pregnant patient >= 20 weeks gestation (visually apparent gravid uterus at or above the umbilicus), the heavy uterus compresses the inferior vena cava and abdominal aorta when supine (aortocaval compression), severely blocking venous return to the heart and rendering CPR ineffective. Instead of tilting the whole body (which drastically reduces chest compression force), keep the torso flat/supine on a firm surface and have a rescuer perform continuous manual Left Uterine Displacement (LUD). Note: AED pads and energy levels are used normally in pregnancy.",
    studyTip: "Maternal Cardiac Arrest (>= 20 weeks / fundus at or above umbilicus): Keep torso supine for firm chest compressions + perform continuous manual Left Uterine Displacement (LUD) to relieve aortocaval compression."
  },
  {
    id: "CARD-019",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.1,
    stem: "A 60-year-old male has acute substernal chest pain radiating to his jaw. Just before you arrived, he took one of his prescribed 0.4 mg nitroglycerin tablets. He is now pale and severely lightheaded. You note prominent jugular venous distension (JVD), clear and equal lung sounds, HR 54 beats/min, BP 68/40 mmHg, and SpO2 95%. His chest pain persists. What is your MOST appropriate action?",
    options: [
      "Assist him with a second nitroglycerin tablet because his chest pain has not been relieved",
      "Place him supine, withhold further nitroglycerin, request ALS, and transport promptly",
      "Sit him fully upright to ease his breathing and recheck his blood pressure in 15 minutes",
      "Apply a nonrebreather mask, give aspirin, and repeat nitroglycerin once the BP is above 90"
    ],
    correctIndex: 1,
    explanation: "Nitroglycerin is a vasodilator that reduces venous return (preload). This patient became profoundly hypotensive after a single dose, so nitroglycerin must be withheld—hypotension (SBP < 90–100 mmHg per protocol) and bradycardia are contraindications to further doses. Lay him supine to improve venous return to the heart, give oxygen only if hypoxic (his SpO2 is 95%), request ALS for IV fluids, and transport promptly to a cardiac center. Aspirin may still be given per protocol if not contraindicated. Background (beyond EMT-level detail): chest pain + JVD + clear lungs + hypotension is the classic picture of an inferior MI with right ventricular involvement, which is especially sensitive to nitroglycerin because the injured right ventricle depends on preload.",
    studyTip: "Chest pain patient who becomes hypotensive after nitroglycerin: lay supine, NO more nitro, request ALS, transport. Recheck BP before EVERY nitro dose and withhold it if SBP is below your protocol's cutoff (90–100 mmHg).",
    reviewNote: "Rewritten by Claude: the original version asked for right-ventricular MI pathophysiology (paramedic-level). It now tests the EMT action."
  },
  {
    id: "CARD-020",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Bradycardia & Perfusion Assessment",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.7,
    stem: "You are called for an 81-year-old male who nearly fainted while standing up from breakfast. He is now confused, pale, and diaphoretic, complaining of chest tightness and dizziness. His radial pulse is slow and weak at 36 beats/min, BP is 74/42 mmHg, RR is 20 breaths/min, and SpO2 is 92% on room air. Which of the following actions is MOST appropriate?",
    options: [
      "Have the patient walk to the stretcher and transport non-emergently to his primary care physician",
      "Administer sublingual nitroglycerin to treat his chest tightness",
      "Position the patient supine, administer supplemental oxygen to maintain SpO2 >= 94%, request ALS intercept immediately, and initiate rapid transport",
      "Begin chest compressions immediately because his heart rate is below 60 beats/min"
    ],
    correctIndex: 2,
    explanation: "This adult patient has symptomatic bradycardia with severe hemodynamic instability (altered mental status, hypotension BP 74/42, chest tightness, diaphoresis) because his slow heart rate (36 bpm) cannot maintain cardiac output (CO = HR x SV). In adults WITH a pulse, chest compressions are not performed solely for HR < 60 (unlike pediatrics); instead, place the patient supine, provide supplemental oxygen for hypoxemia, and arrange immediate ALS intercept (for atropine/transcutaneous pacing) and rapid transport. Never give nitroglycerin in hypotension or extreme bradycardia.",
    studyTip: "In Adults, HR < 60 with a pulse = Symptomatic Bradycardia (treat with O2, supine position, ALS intercept for atropine/pacing). In Pediatrics, HR < 60 with poor perfusion despite oxygenation/ventilation = Start CPR!"
  },
  {
    id: "CARD-021",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Heart Failure & Cardiogenic Shock",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.0,
    stem: "You are treating a 70-year-old female who woke up at 2:00 AM gasping for air (paroxysmal nocturnal dyspnea). She has a history of hypertension and a previous MI, as well as mild COPD. She is sitting bolt upright, diaphoretic, coughing up pink, frothy sputum, and has JVD and bilateral coarse crackles extending to the apices. Her BP is 192/108 mmHg, HR is 120 beats/min, RR is 32 breaths/min, and SpO2 is 84%. How should you differentiate her primary condition from a COPD exacerbation and treat her?",
    options: [
      "Pink frothy sputum, severe hypertension, JVD, and paroxysmal nocturnal dyspnea indicate acute decompensated left heart failure (cardiogenic pulmonary edema); apply CPAP immediately and keep her seated upright",
      "Her history of COPD confirms this is a pure bronchitis exacerbation; place her supine and withhold CPAP",
      "Pink frothy sputum indicates an upper GI hemorrhage; suction for 30 seconds and place her in the Trendelenburg position",
      "Her high blood pressure indicates an ischemic stroke; withhold supplemental oxygen"
    ],
    correctIndex: 0,
    explanation: "While patients often have both CHF and COPD, paroxysmal nocturnal dyspnea (waking up gasping for air after fluid redistributes to the lungs when lying flat), severe sympathetic hypertension (BP 192/108), JVD, diffuse crackles, and pink, frothy sputum are classic signs of acute cardiogenic pulmonary edema (decompensated left-sided heart failure). Keeping the patient seated upright (with legs dangling to reduce venous preload) and immediately applying CPAP are life-saving EMT interventions.",
    studyTip: "Paroxysmal nocturnal dyspnea + orthopnea + pink frothy sputum + severe hypertension + diffuse crackles = Acute Cardiogenic Pulmonary Edema (CHF). Keep seated upright and apply CPAP!"
  },
  {
    id: "CARD-022",
    source: "Gemini",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.2,
    stem: "You arrive at a residence for a 52-year-old male who collapsed while watching television 2 minutes ago. His wife reports he suddenly gasped and slumped over. When you assess him, he is unresponsive, has no palpable carotid pulse, and is taking slow, noisy, gasping breaths every 15 to 20 seconds that move his jaw and neck muscles. What is the significance of these respirations, and how should you proceed?",
    options: [
      "These are adequate spontaneous respirations indicating the patient is not in cardiac arrest; place him in the recovery position",
      "These are agonal gasps—a brainstem reflex common in the first minutes of sudden cardiac arrest that do NOT provide effective ventilation; immediately begin chest compressions and apply the AED",
      "These represent Kussmaul respirations caused by diabetic ketoacidosis; check a blood glucose before starting CPR",
      "These represent Cheyne-Stokes respirations from a brainstem stroke; assist ventilations only without chest compressions"
    ],
    correctIndex: 1,
    explanation: "Agonal gasps are primitive brainstem reflexes that frequently occur in the first few minutes following sudden cardiac arrest (typically ventricular fibrillation). They appear as slow, irregular, snoring or gasping movements of the mouth and neck and do NOT provide effective oxygenation or ventilation. Mistaking agonal gasps for normal breathing is the #1 cause of delayed CPR. In an unresponsive, pulseless patient with agonal gasps, begin high-quality chest compressions and apply the AED immediately.",
    studyTip: "Agonal gasps occur in up to 40% of early sudden cardiac arrests (especially V-Fib). Never mistake agonal gasps for normal breathing—if unresponsive with absent or agonal breathing and no pulse, start CPR immediately!"
  },
  {
    id: "CARD-023",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.2,
    stem: "When performing chest compressions on an adult in cardiac arrest, where should you place your hands?",
    options: [
      "On the xiphoid process at the very bottom tip of the sternum",
      "On the upper third of the sternum, just below the clavicles",
      "On the lower half of the sternum in the center of the chest",
      "To the left of the sternum, directly over the apex of the heart"
    ],
    correctIndex: 2,
    explanation: "For adult CPR, place the heel of one hand on the lower half of the sternum (center of the chest, roughly between the nipples) with the other hand on top. Compressing over the xiphoid process can lacerate the liver, and compressing off-center (over the ribs or left chest) is less effective and more likely to fracture ribs.",
    studyTip: "Adult CPR hand position: lower half of the sternum, center of the chest. Rate 100–120/min, depth 2–2.4 in (5–6 cm), full recoil."
  },
  {
    id: "CARD-024",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Pediatric",
    difficulty: 1,
    irtB: -0.9,
    stem: "You are performing CPR on a 4-month-old infant in cardiac arrest. How deep should your chest compressions be?",
    options: [
      "About 1/2 inch (1 cm), to avoid injuring the ribs",
      "About 1 1/2 inches (4 cm), or one-third the chest depth",
      "About 2 to 2.4 inches (5 to 6 cm), the same as an adult",
      "About 3 inches (7.5 cm), or one-half the chest depth"
    ],
    correctIndex: 1,
    explanation: "Infant chest compressions should be at least one-third the anterior-posterior diameter of the chest, which is about 1 1/2 inches (4 cm). For children, the target is also one-third the chest depth, about 2 inches (5 cm). Shallow compressions do not generate adequate blood flow, and compressing to adult depth can injure an infant.",
    studyTip: "Compression depth = at least 1/3 of chest depth. Infant ≈ 1.5 in (4 cm). Child ≈ 2 in (5 cm). Adult 2–2.4 in (5–6 cm)."
  },
  {
    id: "CARD-025",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.8,
    stem: "Five minutes after you assist a 64-year-old woman with her first 0.4 mg dose of prescribed sublingual nitroglycerin, she still has chest pain. Her BP is now 134/82 mmHg and HR is 84 beats/min. According to typical protocols, when may a second dose be given?",
    options: [
      "Now, because 5 minutes have passed and her blood pressure is adequate",
      "After 30 minutes, once the first dose has been completely metabolized",
      "Only after arrival at the hospital, since one dose is the field maximum",
      "After 15 minutes, provided her heart rate has dropped below 60/min"
    ],
    correctIndex: 0,
    explanation: "Nitroglycerin may typically be repeated every 5 minutes, up to a total of 3 doses (including any the patient took before EMS arrival), as long as chest pain persists, the systolic BP remains above the protocol threshold (commonly 100 mmHg), and there are no other contraindications. Reassess blood pressure before each dose, and contact medical control as your protocol requires.",
    studyTip: "Nitroglycerin: 0.4 mg SL, repeat every 5 min, max 3 doses total. Check BP before EVERY dose; hold if SBP is below protocol (90–100 mmHg) or PDE-5 inhibitor use."
  },
  {
    id: "CARD-026",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.0,
    stem: "Which description is MOST typical of stable angina pectoris?",
    options: [
      "Chest pressure lasting over 30 minutes that is not relieved by rest or nitroglycerin",
      "Sharp chest pain that gets worse when you press directly on the chest wall",
      "Chest pressure brought on by exertion that resolves within minutes with rest",
      "Sudden tearing pain in the chest that radiates straight through to the back"
    ],
    correctIndex: 2,
    explanation: "Stable angina is chest discomfort caused by a temporary mismatch between the heart's oxygen demand and supply. It is typically triggered by exertion or stress and resolves within a few minutes with rest or nitroglycerin. Pain lasting longer than about 30 minutes that does not respond to rest or nitroglycerin suggests acute myocardial infarction. Pain reproduced by pressing on the chest suggests a musculoskeletal cause, and tearing pain to the back suggests aortic dissection—though EMTs should treat any chest pain as cardiac until proven otherwise.",
    studyTip: "Stable angina: exertion-triggered, brief, relieved by rest/nitro. Unstable angina: new, worsening, or at rest. AMI: prolonged and not relieved. Treat all as ACS in the field."
  },
  {
    id: "CARD-027",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "AED Operations & Special Situations",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.1,
    stem: "You have applied AED pads to a patient in cardiac arrest, and the AED announces that it is analyzing the heart rhythm. What should you do?",
    options: [
      "Continue chest compressions so blood flow is not interrupted",
      "Stop compressions and make sure no one touches the patient",
      "Check the carotid pulse while the AED completes its analysis",
      "Deliver two rescue breaths while the AED completes its analysis"
    ],
    correctIndex: 1,
    explanation: "Movement from compressions, ventilations, or touching the patient can interfere with the AED's rhythm analysis and lead to an incorrect shock decision. Pause compressions, state 'Clear!', and make sure no one is touching the patient during analysis and shock delivery. Keep the pause as short as possible and resume compressions immediately after the shock (or 'no shock advised').",
    studyTip: "During AED analysis and shock: hands OFF, everyone clear. Then resume compressions immediately, without a pulse check."
  },
  {
    id: "CARD-028",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "AED Operations & Special Situations",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.7,
    stem: "For an adult whose sudden cardiac arrest is caused by ventricular fibrillation, which factor has the GREATEST influence on the chance of survival?",
    options: [
      "Rapid transport to the closest hospital emergency department",
      "Early placement of an advanced airway by a paramedic",
      "Early high-quality CPR and defibrillation as soon as possible",
      "Early administration of intravenous cardiac medications"
    ],
    correctIndex: 2,
    explanation: "Ventricular fibrillation is treated by defibrillation, and the chance of a successful shock drops significantly with every minute of delay. High-quality CPR keeps the heart and brain perfused until the AED arrives and makes defibrillation more likely to succeed. Advanced airways, medications, and transport have not been shown to improve survival as much as early CPR and early defibrillation.",
    studyTip: "Chain of survival priorities for VF arrest: early recognition, early high-quality CPR, early DEFIBRILLATION. Minimize interruptions in compressions."
  },
  {
    id: "CARD-029",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.6,
    stem: "Which of the following patients with suspected acute coronary syndrome should NOT receive aspirin from an EMT?",
    options: [
      "A 70-year-old man with diabetes who is on insulin",
      "A 58-year-old woman who takes a daily blood pressure pill",
      "A 66-year-old man who quit smoking two years ago",
      "A 61-year-old woman who reports a true allergy to aspirin"
    ],
    correctIndex: 3,
    explanation: "A true allergy or hypersensitivity to aspirin is a contraindication. Other common contraindications include active gastrointestinal bleeding and inability to chew and swallow safely; follow local protocol about patients who already took aspirin today. Diabetes, hypertension medications, and a smoking history are cardiac risk factors, not contraindications.",
    studyTip: "Aspirin for ACS: 162–324 mg chewable. Withhold for true aspirin allergy, active GI bleeding, or inability to swallow. Risk factors are NOT contraindications."
  },
  {
    id: "CARD-030",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: -0.1,
    stem: "You and your partner are performing CPR on a 6-year-old girl. What are the correct compression depth and compression-to-ventilation ratio?",
    options: [
      "About 2 inches (5 cm) deep at a ratio of 15:2",
      "About 1 inch (2.5 cm) deep at a ratio of 30:2",
      "About 3 inches (7.5 cm) deep at a ratio of 15:2",
      "About 1 1/2 inches (4 cm) deep at a ratio of 3:1"
    ],
    correctIndex: 0,
    explanation: "For a child (1 year old to puberty), compress at least one-third the anterior-posterior depth of the chest—about 2 inches (5 cm)—at 100 to 120 compressions per minute. With two healthcare providers, use a 15:2 ratio; a single rescuer uses 30:2. The 3:1 ratio is for newborn resuscitation.",
    studyTip: "Child CPR: depth ≈ 2 in (5 cm). Two rescuers = 15:2, one rescuer = 30:2. Newborn = 3:1."
  },
  {
    id: "CARD-031",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Vascular & Hypertensive Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "A 56-year-old man who stopped taking his blood pressure medications reports a severe headache, nausea, and blurred vision. He is alert and oriented. His BP is 228/128 mmHg, HR 92, RR 18, and SpO2 97%. His Cincinnati stroke scale is normal. What is the MOST appropriate EMT management?",
    options: [
      "Assist him with his wife's nitroglycerin to bring his blood pressure down",
      "Lay him flat with his legs elevated to increase blood flow to his brain",
      "Position him with his head elevated, monitor closely, and transport promptly",
      "Have him take a double dose of his blood pressure pills, then reassess"
    ],
    correctIndex: 2,
    explanation: "Severely elevated blood pressure with symptoms such as headache, nausea, and visual changes suggests a hypertensive emergency, which can progress to stroke, seizures, or heart failure. EMT care is supportive: position of comfort with the head elevated, oxygen only if hypoxic, reassessment of neurologic status and vital signs, preparation for vomiting or seizures, and prompt transport. EMTs do not lower blood pressure with medications, and may assist only with medications prescribed to the patient for an indicated condition.",
    studyTip: "Hypertensive emergency: supportive care, head elevated, monitor neuro status, prepare for seizure/vomiting, transport. EMTs do not try to lower BP."
  },
  {
    id: "CARD-032",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "A 59-year-old man has had substernal chest pressure for 20 minutes. He is alert, breathing comfortably at 16 breaths/min with clear lungs, and his SpO2 is 98% on room air. What is the MOST appropriate approach to supplemental oxygen?",
    options: [
      "Apply a nonrebreather at 15 L/min, since every chest pain patient needs high-flow oxygen",
      "Ventilate with a bag-valve mask to rest his heart and improve coronary perfusion",
      "Apply a nasal cannula at 6 L/min to keep his SpO2 at 100% throughout transport",
      "Withhold oxygen for now, and give it if he becomes hypoxic, short of breath, or shocky"
    ],
    correctIndex: 3,
    explanation: "Current guidelines recommend supplemental oxygen for suspected ACS only when the patient is hypoxic (SpO2 below your protocol's threshold, commonly 90%–94%), short of breath, or showing signs of heart failure or shock. Giving unneeded oxygen to a patient with normal saturation has not been shown to help and may be harmful. Continue to monitor SpO2 and add oxygen if indications develop.",
    studyTip: "ACS + normal SpO2 + no distress = no routine oxygen. Give O2 for hypoxia (per protocol), dyspnea, heart failure, or shock."
  },
  {
    id: "CARD-033",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Heart Failure & Cardiogenic Shock",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.2,
    stem: "A 72-year-old woman with a history of congestive heart failure has gained 8 pounds over 3 days. She is short of breath, worse when lying flat, has swollen ankles and crackles at both lung bases, and her BP is 162/94 mmHg. How should you position her?",
    options: [
      "Supine with her legs raised to improve blood return to her heart",
      "Sitting upright with her legs dangling or lowered if possible",
      "Left lateral recumbent with her knees drawn up toward her chest",
      "Trendelenburg position with her head lower than her hips"
    ],
    correctIndex: 1,
    explanation: "Patients with CHF and pulmonary edema breathe more easily sitting upright (orthopnea is difficulty breathing when lying flat). Sitting upright with the legs dependent (dangling or lowered) lets gravity pool some blood in the legs, which reduces the volume returning to the congested heart and lungs. Positions that raise the legs or lower the head increase venous return and worsen pulmonary congestion.",
    studyTip: "CHF/pulmonary edema: sit upright, legs dependent. Consider CPAP if indicated and BP allows. Never lay these patients flat."
  },
  {
    id: "CARD-034",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Bradycardia & Perfusion Assessment",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "A 49-year-old woman reports sudden palpitations and lightheadedness. She is pale, diaphoretic, and confused. Her radial pulse is weak and too fast to count accurately (about 180 beats/min), and her BP is 78/50 mmHg. What is the MOST appropriate action?",
    options: [
      "Apply the AED and press analyze, since her heart rate is above 150",
      "Assist her with aspirin and nitroglycerin for possible cardiac ischemia",
      "Have her walk to the ambulance so you can reassess her once on board",
      "Lay her supine, give oxygen if needed, request ALS, and transport promptly"
    ],
    correctIndex: 3,
    explanation: "This patient has an unstable tachycardia: a very fast heart rate that leaves too little time for the ventricles to fill, causing hypotension and altered mental status. EMT care is supportive: place her supine, give oxygen if hypoxic or short of breath, request ALS intercept (paramedics can provide medications or synchronized cardioversion), and transport promptly. An AED is applied only to patients who are unresponsive and pulseless. Nitroglycerin is contraindicated with hypotension, and an unstable patient should not exert herself.",
    studyTip: "AEDs are ONLY for pulseless, unresponsive patients. Unstable tachycardia or bradycardia with a pulse: supine, O2 as needed, ALS intercept, rapid transport."
  },
  {
    id: "CARD-035",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Bradycardia & Perfusion Assessment",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "Which history of a fainting (syncope) episode is MOST concerning for a dangerous cardiac cause?",
    options: [
      "A 19-year-old who felt warm and nauseated, then fainted at the sight of blood",
      "A 68-year-old who suddenly passed out without warning while climbing stairs",
      "A 25-year-old who felt dizzy after standing up quickly from a hot bath",
      "A 30-year-old who fainted while having blood drawn and woke in seconds"
    ],
    correctIndex: 1,
    explanation: "Syncope that occurs suddenly without warning, during exertion, or in an older adult (especially one with heart disease) suggests a cardiac cause such as a dysrhythmia, structural heart disease, or ischemia, and may precede sudden cardiac death. Syncope preceded by warning signs such as warmth and nausea and triggered by pain, blood, or standing quickly is usually vasovagal or orthostatic and generally less dangerous—but every syncope patient deserves a thorough assessment.",
    studyTip: "Red flags for cardiac syncope: no warning (no prodrome), during exertion, older age, heart disease history, chest pain or palpitations, or family history of sudden death."
  },
  {
    id: "CARD-036",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "AED Operations & Special Situations",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "A 63-year-old man with an implanted cardioverter-defibrillator (ICD) says his device has shocked him twice in the past 20 minutes. He is now alert and oriented, with a regular pulse of 88 beats/min and a BP of 128/76 mmHg. Which statement about your care is MOST accurate?",
    options: [
      "You should avoid all physical contact, as another shock could seriously injure you",
      "You should apply the AED and deliver a shock to reset the implanted device",
      "You can assess him normally, keep the AED ready, and transport for evaluation",
      "He may refuse transport, because the shocks show that the ICD is working well"
    ],
    correctIndex: 2,
    explanation: "An ICD detects life-threatening rhythms and delivers a shock internally. Multiple shocks mean the patient had (or is having) dangerous dysrhythmias or a device problem, so he needs transport and evaluation. A shock from an ICD delivers very little energy to someone touching the patient and is not dangerous to rescuers, so assess and treat him normally. An AED is used only if he becomes unresponsive and pulseless, placing the pad away from the device.",
    studyTip: "ICD patients: care for them normally (shocks pose minimal risk to you). Multiple shocks = transport. If the patient arrests, use the AED with pads at least 1 inch from the device."
  },
  {
    id: "CARD-037",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "In which of the following situations should EMTs withhold resuscitation and NOT begin CPR on a pulseless, apneic adult?",
    options: [
      "A man found in a cold lake after 20 minutes underwater whose skin is very cold",
      "A woman whose husband says she has a DNR order but cannot find the document",
      "A man who has had 10 minutes of bystander CPR and has fixed, dilated pupils",
      "A woman found in bed with dependent lividity and rigor mortis in her jaw"
    ],
    correctIndex: 3,
    explanation: "Resuscitation is withheld when there are obvious signs of death—dependent lividity, rigor mortis, decomposition, or injuries incompatible with life—or a valid DNR/POLST is presented. Cold-water submersion victims may survive prolonged arrest, so resuscitate. A DNR that cannot be produced is not valid, so begin CPR and contact medical control. Dilated pupils are not a reliable sign of death and may occur within minutes of arrest.",
    studyTip: "Withhold CPR for obvious death (lividity, rigor mortis, decomposition, decapitation) or a valid DNR. When in doubt, START resuscitation."
  },
  {
    id: "CARD-038",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "AED Operations & Special Situations",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "Lifeguards pull a 40-year-old man from a swimming pool. He is unresponsive and pulseless, his chest is wet, and he is lying on the wet pool deck. CPR is in progress. What should you do before applying the AED pads?",
    options: [
      "Withhold the AED until the patient is completely dry and has been rewarmed",
      "Quickly wipe the chest dry, then apply the pads and make sure everyone is clear",
      "Apply the pads directly over the wet skin, since water improves conductivity",
      "Move the patient into the ambulance first, since AEDs cannot be used outdoors"
    ],
    correctIndex: 1,
    explanation: "Water on the chest can conduct electricity across the skin, reducing the energy that reaches the heart and creating a risk to rescuers. Remove the patient from the water, quickly wipe the chest dry, apply the pads, and ensure no one is touching the patient during analysis and shock. An AED can be used on a damp surface once the patient is out of the water. Delaying defibrillation to fully dry or rewarm the patient reduces the chance of survival.",
    studyTip: "AED + water: get the patient out of standing water, wipe the chest dry, apply pads, and clear everyone. Do not delay defibrillation."
  },
  {
    id: "CARD-039",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.8,
    stem: "A 67-year-old man with crushing chest pain tells you he has already taken three of his 0.4 mg nitroglycerin tablets in the past 15 minutes without relief. He has not taken aspirin and has no allergies. His BP is 142/88 mmHg, HR 96, and SpO2 96%. What is the BEST course of action?",
    options: [
      "Assist with three more nitroglycerin doses, since his BP is still adequate",
      "Withhold aspirin, because it should not be combined with nitroglycerin",
      "Give aspirin per protocol, consult medical control before more nitro, and transport",
      "Wait on scene for 15 minutes to see whether the nitroglycerin starts working"
    ],
    correctIndex: 2,
    explanation: "Doses the patient took before your arrival count toward the usual maximum of three nitroglycerin doses, so contact medical control before giving any more. Chest pain unrelieved by three nitroglycerin doses is highly suspicious for acute myocardial infarction. Give 162–324 mg of chewable aspirin if there are no contraindications (aspirin and nitroglycerin are routinely given together), monitor vital signs, and transport promptly, ideally to a facility capable of cardiac catheterization. Never delay on scene.",
    studyTip: "Ask how much nitro the patient took BEFORE you arrived: it counts toward the max of 3. Unrelieved chest pain = treat as AMI: aspirin, rapid transport, pre-notification."
  },
  {
    id: "CARD-040",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Vascular & Hypertensive Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.0,
    stem: "A 74-year-old man with a history of hypertension and smoking has sudden, severe lower back and abdominal pain. He is pale and diaphoretic, with BP 84/52 mmHg and HR 122 beats/min. You note a pulsating mass near his umbilicus, and his femoral pulses feel unequal. What is the MOST appropriate management?",
    options: [
      "Palpate the mass deeply to confirm its size, then assist him in walking to the cot",
      "Treat for shock, handle him gently, avoid palpating the mass, and transport rapidly",
      "Give 324 mg of aspirin and assist with nitroglycerin for possible cardiac pain",
      "Place him in a sitting position and give oral fluids to raise his blood pressure"
    ],
    correctIndex: 1,
    explanation: "Sudden severe back or abdominal pain, a pulsating abdominal mass, unequal femoral pulses, and signs of shock in an older patient with hypertension and a smoking history strongly suggest a leaking or ruptured abdominal aortic aneurysm (AAA). Treat for shock (supine, oxygen as indicated, keep warm), handle the patient gently, avoid palpating the mass (which could worsen the rupture), keep him NPO, request ALS, and transport rapidly to a facility with vascular surgery. Aspirin, nitroglycerin, and exertion are dangerous.",
    studyTip: "AAA: older, hypertensive, smoker + sudden back/abdominal pain + pulsating mass + shock. Gentle handling, NO palpation of the mass, treat for shock, rapid transport."
  },
  {
    id: "CARD-041",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "AED Operations & Special Situations",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.9,
    stem: "You are transporting a 58-year-old man who had return of spontaneous circulation after two AED shocks. Halfway to the hospital, he becomes unresponsive, and you can no longer feel a carotid pulse. The AED pads are still attached. What should you do?",
    options: [
      "Begin compressions and ask the driver to stop the ambulance so the AED can analyze",
      "Press analyze while the ambulance keeps moving, so you do not delay arrival",
      "Perform CPR only and do not use the AED again until you reach the hospital",
      "Press the shock button without analyzing, since he was shockable before"
    ],
    correctIndex: 0,
    explanation: "Start CPR immediately. Vehicle motion can interfere with the AED's rhythm analysis, so ask your partner to stop the ambulance before analysis and shock delivery, then resume compressions and transport after the shock is delivered or 'no shock' is advised. Withholding the AED delays possible defibrillation. AEDs will not deliver a shock without first analyzing the rhythm.",
    studyTip: "Re-arrest during transport: start CPR, STOP the vehicle for AED analysis/shock, then resume transport. Keep pads attached after ROSC."
  },
  {
    id: "CARD-042",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Bradycardia & Perfusion Assessment",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.1,
    stem: "A 61-year-old woman on hemodialysis missed her last two treatments. She reports profound weakness and nausea. She is alert but pale, with a slow, weak radial pulse of 38 beats/min, BP 82/50 mmHg, and an AV fistula in her left forearm. Which of the following BEST describes the situation and your priorities?",
    options: [
      "She is dehydrated from missed dialysis; give oral fluids and take a BP in her left arm",
      "Her symptoms are expected after missed dialysis; transport non-emergently in a chair",
      "She is likely hypoglycemic; give oral glucose and arrange a ride to dialysis later",
      "Suspect high potassium; lay her supine, call ALS, transport, and prepare for arrest"
    ],
    correctIndex: 3,
    explanation: "Missed dialysis allows potassium and fluid to build up. High potassium (hyperkalemia) can cause profound weakness, bradycardia, hypotension, and sudden cardiac arrest. Place her supine, give oxygen as needed, request ALS (they can treat hyperkalemia), keep the AED ready, and transport promptly. Never take a blood pressure on the arm with a dialysis fistula. Dialysis patients are usually fluid-overloaded, so oral fluids are inappropriate, and you should still check her blood glucose.",
    studyTip: "Dialysis patient who missed treatment + weakness + bradycardia = suspect hyperkalemia → risk of cardiac arrest. ALS, transport, AED ready. No BP on the fistula arm."
  },
  {
    id: "CARD-043",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.2,
    stem: "You find a 26-year-old man on a bathroom floor with a syringe nearby. He is unresponsive, is not breathing, and has no carotid pulse after a 10-second check. You have naloxone, a BVM, and an AED. What should you do FIRST?",
    options: [
      "Give intranasal naloxone and wait 2 to 3 minutes for a response before starting CPR",
      "Give BVM ventilations only, because opioid arrests are purely respiratory in origin",
      "Begin high-quality chest compressions and apply the AED as soon as it is ready",
      "Give intranasal naloxone and recheck his carotid pulse every 30 seconds"
    ],
    correctIndex: 2,
    explanation: "This patient is in cardiac arrest (no pulse), not just respiratory arrest. Begin high-quality CPR immediately and apply the AED. Naloxone may be given per protocol once CPR is under way, but it must never delay or interrupt compressions, ventilations, or defibrillation, because there is no proven benefit of naloxone once the heart has stopped. If the patient had a pulse with absent or inadequate breathing, the priority would be BVM ventilation, followed by naloxone.",
    studyTip: "Suspected opioid overdose: PULSE → ventilate with BVM, then naloxone. NO PULSE → CPR + AED first; naloxone must not delay CPR."
  },
  {
    id: "CARD-044",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 1.3,
    stem: "During CPR on a 5-year-old child, a paramedic places an advanced airway. You are now performing continuous chest compressions while your partner ventilates. At what rate should your partner deliver ventilations?",
    options: [
      "1 breath every 6 seconds (10 breaths/min)",
      "2 breaths after every 15 compressions",
      "1 breath every 2 to 3 seconds (20–30/min)",
      "1 breath every 10 seconds (6 breaths/min)"
    ],
    correctIndex: 2,
    explanation: "Current pediatric guidelines recommend 1 breath every 2 to 3 seconds (20 to 30 breaths per minute) for infants and children receiving CPR with an advanced airway in place, with continuous compressions. Adults with an advanced airway receive 1 breath every 6 seconds. Without an advanced airway, pause compressions to give 2 breaths after every 15 compressions (two rescuers).",
    studyTip: "Advanced airway in place: Adult = 1 breath every 6 sec. Infant/Child = 1 breath every 2–3 sec. Continuous compressions, no pauses for breaths."
  },
  {
    id: "CARD-045",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.0,
    stem: "You and your partner are performing two-rescuer CPR on a 62-year-old man. How often should you switch the person doing chest compressions?",
    options: [
      "Every 2 minutes (about 5 cycles of 30:2), during the rhythm analysis",
      "Only when the compressor says they are too tired to continue",
      "Every 30 seconds to keep both rescuers fresh",
      "Every 10 minutes, so that compressions are interrupted as little as possible"
    ],
    correctIndex: 0,
    explanation: "Compression quality declines after about 2 minutes, often before the rescuer notices fatigue. Switch compressors about every 2 minutes (5 cycles of 30:2), ideally during the AED's rhythm analysis, and complete the switch in less than 5 seconds. Waiting for the compressor to feel tired allows shallow, slow compressions, while switching every 30 seconds creates unnecessary pauses.",
    studyTip: "Switch compressors every 2 minutes (during rhythm analysis), in under 5 seconds. Fatigue reduces compression depth before rescuers notice it."
  },
  {
    id: "CARD-046",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.9,
    stem: "During two-rescuer CPR on an adult with no advanced airway, you are giving breaths with a bag-valve mask. How should each breath be delivered?",
    options: [
      "As fast and forcefully as possible to fully inflate the lungs",
      "Over 3 to 4 seconds using the entire volume of the bag",
      "Over about 1 second, with just enough volume to make the chest rise",
      "Only while compressions continue, without pausing"
    ],
    correctIndex: 2,
    explanation: "Each rescue breath should be delivered over about 1 second with just enough volume to produce visible chest rise. Giving breaths too forcefully or with too much volume causes gastric distension and vomiting and increases pressure in the chest, which reduces blood return to the heart. Without an advanced airway, compressions pause briefly for the two breaths after each set of 30.",
    studyTip: "Rescue breaths: 1 second each, just enough for chest rise. Without an advanced airway, pause for 2 breaths after every 30 compressions (adult)."
  },
  {
    id: "CARD-047",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.1,
    stem: "A few minutes after you assist a 65-year-old man with his prescribed sublingual nitroglycerin, his chest pain has decreased. He now reports a throbbing headache. His BP is 128/80 mmHg. How should you interpret the headache?",
    options: [
      "It indicates a stroke, so you should withhold all further treatment",
      "It is a common side effect of nitroglycerin caused by dilation of blood vessels",
      "It means the nitroglycerin was expired and should be discarded",
      "It is a sign of an allergic reaction that requires epinephrine"
    ],
    correctIndex: 1,
    explanation: "Nitroglycerin relaxes and dilates blood vessels, including those in the head, so a throbbing headache is a common, expected side effect. Other side effects include hypotension, dizziness, and a burning sensation under the tongue. Reassess his blood pressure before each dose, and follow protocol for repeat doses as long as his BP stays adequate. A headache alone does not indicate a stroke.",
    studyTip: "Nitroglycerin side effects: headache, hypotension, dizziness, flushing. Recheck BP before every dose (withhold if SBP is below about 100 mmHg or per protocol)."
  },
  {
    id: "CARD-048",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "AED Operations & Special Situations",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.2,
    stem: "You are applying AED pads to an adult in cardiac arrest using the standard (anterolateral) placement. Where should the two pads be placed?",
    options: [
      "Both pads side by side over the center of the breastbone",
      "One pad on the upper back and one pad on the lower back",
      "One pad on each upper arm, on the outside of the arm, just below the shoulder",
      "One below the right collarbone, one on the left chest below the armpit"
    ],
    correctIndex: 3,
    explanation: "In the anterolateral position, one pad goes on the upper right chest just below the collarbone, and the other goes on the left side of the chest, a few inches below the armpit. This places the heart between the pads so the shock passes through it. Pads placed side by side would send the current across the skin rather than through the heart. An anterior-posterior placement (front and back of the chest) is an alternative, especially for small children.",
    studyTip: "Adult AED pads: upper right chest below the clavicle + left lateral chest below the armpit. The heart must be between the pads."
  },
  {
    id: "CARD-049",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Pediatric",
    difficulty: 1,
    irtB: -0.7,
    stem: "You and your partner are performing two-rescuer CPR on a 6-month-old infant. Which compression technique is recommended for the rescuer doing compressions?",
    options: [
      "Two fingers on the upper half of the sternum, just below the neck",
      "Two hands stacked on the lower half of the sternum, as for an adult",
      "Both thumbs on the lower sternum with your hands encircling the chest",
      "One finger pressing firmly on the xiphoid process at the base of the sternum"
    ],
    correctIndex: 2,
    explanation: "For two-rescuer infant CPR, encircle the infant's chest with both hands and compress the lower half of the sternum with both thumbs. This technique produces better depth and blood pressure than the two-finger method. Compress about 1 1/2 inches (4 cm), or one-third of the chest depth, at 100–120 per minute, using a 15:2 ratio. Never compress over the xiphoid process.",
    studyTip: "Infant CPR: two-thumb–encircling hands or the heel of one hand (the 2025 AHA guidelines dropped the two-finger method), on the lower half of the sternum, about 1 1/2 in (4 cm). 30:2 for one rescuer, 15:2 for two."
  },
  {
    id: "CARD-050",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.8,
    stem: "In the adult out-of-hospital chain of survival, what is the FIRST link?",
    options: [
      "Recognizing the arrest and activating the emergency response system",
      "Rapid defibrillation with an AED as soon as one is brought to the scene",
      "Advanced life support by paramedics, including medications and airways",
      "Care after the return of spontaneous circulation at a cardiac center"
    ],
    correctIndex: 0,
    explanation: "The chain of survival begins with recognizing cardiac arrest (unresponsive, not breathing normally) and activating the emergency response system. It continues with early high-quality CPR, rapid defibrillation, advanced resuscitation, post-cardiac arrest care, and recovery. Each link depends on the one before it—an AED cannot help if no one recognizes the arrest and calls for help.",
    studyTip: "Chain of survival: recognize and call → high-quality CPR → defibrillation → advanced care → post-arrest care → recovery."
  },
  {
    id: "CARD-051",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.6,
    stem: "Why is aspirin given to patients with suspected acute coronary syndrome?",
    options: [
      "It dissolves the clot that is blocking the coronary artery",
      "It dilates the coronary arteries to improve blood flow",
      "It is a strong pain reliever that replaces the need for nitroglycerin",
      "It reduces platelet clumping, which helps keep the clot from getting larger"
    ],
    correctIndex: 3,
    explanation: "Aspirin is an antiplatelet medication. It prevents platelets from clumping together, which helps stop the clot in the coronary artery from growing and reduces damage to the heart muscle. It does not dissolve existing clots (fibrinolytic drugs do that in the hospital), it does not dilate vessels (nitroglycerin does that), and at this dose it is not given for pain relief.",
    studyTip: "Aspirin = antiplatelet; keeps the clot from growing. Nitroglycerin = vasodilator; reduces cardiac workload and may ease chest pain."
  },
  {
    id: "CARD-052",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.1,
    stem: "A 59-year-old man has crushing chest pain. He has no prescription for nitroglycerin, but his wife hands you her own nitroglycerin tablets and asks you to give him one. His BP is 146/90 mmHg. What should you do?",
    options: [
      "Give one of her tablets now, because his blood pressure is adequate for nitroglycerin",
      "Do not give the wife's nitroglycerin; give aspirin if indicated per protocol",
      "Give half of one tablet to reduce the risk of a headache or low blood pressure",
      "Give a tablet only if the bottle is less than a year past its expiration date"
    ],
    correctIndex: 1,
    explanation: "EMTs may assist a patient only with medication prescribed to that patient, unless their protocols specifically include EMS-carried nitroglycerin. Giving another person's prescription is outside an EMT's scope of practice. Instead, give aspirin if there are no contraindications, oxygen if he is hypoxic, place him in a position of comfort, consider requesting ALS, and transport. Follow local protocol or contact medical control if your service carries its own nitroglycerin.",
    studyTip: "Assist only with medication prescribed to THAT patient (check the right patient, medication, dose, route, time, and expiration), unless your protocol provides EMS-stocked medication."
  },
  {
    id: "CARD-053",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Heart Failure & Cardiogenic Shock",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "A 74-year-old woman reports shortness of breath that has slowly worsened over a week. Which part of her history MOST strongly suggests congestive heart failure?",
    options: [
      "She sleeps propped on three pillows and wakes at night gasping for air",
      "She has had a fever and a cough with green sputum for the past 2 days",
      "Her symptoms began suddenly after a long car ride across the country",
      "She has a sharp pain in her side that gets worse when she twists or bends"
    ],
    correctIndex: 0,
    explanation: "Orthopnea (difficulty breathing when lying flat, so the patient sleeps on extra pillows or in a recliner) and paroxysmal nocturnal dyspnea (waking up suddenly short of breath) are classic signs of left-sided heart failure, in which fluid backs up into the lungs. Other clues include ankle swelling, weight gain, and crackles. Fever with productive cough suggests pneumonia, sudden onset after immobility suggests pulmonary embolism, and pain with movement suggests a musculoskeletal cause.",
    studyTip: "CHF history clues: orthopnea (extra pillows), paroxysmal nocturnal dyspnea, ankle edema, weight gain, and medications such as furosemide (a diuretic)."
  },
  {
    id: "CARD-054",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "AED Operations & Special Situations",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "After one AED shock and 2 minutes of CPR on a 57-year-old man, the AED advises no shock. You check and find a strong carotid pulse, but he is still unresponsive and breathing only 4 times per minute. What should you do?",
    options: [
      "Remove the AED pads and place him in the recovery position for transport",
      "Resume chest compressions, because his breathing is not adequate",
      "Apply a nonrebreather mask at 15 L/min and reassess him in 5 minutes",
      "Ventilate with a BVM every 6 seconds and leave the AED attached"
    ],
    correctIndex: 3,
    explanation: "He has a return of spontaneous circulation (ROSC) but is not breathing adequately. Give rescue breaths with a BVM and supplemental oxygen at 1 breath every 6 seconds (10 per minute), and avoid hyperventilating. Leave the AED pads in place because he may go back into cardiac arrest, and check his pulse about every 2 minutes. Compressions are not needed while he has a pulse, and a nonrebreather cannot help a patient who is barely breathing.",
    studyTip: "ROSC but inadequate breathing: ventilate 1 breath every 6 seconds (adult), leave the AED attached, recheck pulse often, and transport."
  },
  {
    id: "CARD-055",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Bradycardia & Perfusion Assessment",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: 0.3,
    stem: "You have been ventilating a 2-year-old girl with a BVM and high-flow oxygen for 30 seconds because of respiratory failure. Her chest is rising well, but her heart rate remains 50 beats/min, and her skin is pale and mottled. What should you do NEXT?",
    options: [
      "Begin chest compressions, along with ventilations",
      "Continue ventilations alone, because she still has a pulse",
      "Stop ventilations and apply a nonrebreather mask",
      "Wait for ALS to arrive before changing your treatment"
    ],
    correctIndex: 0,
    explanation: "In infants and children, a heart rate below 60 beats/min with signs of poor perfusion that continues despite adequate oxygenation and ventilation is treated with chest compressions—even though a pulse is present. Bradycardia in children is usually caused by hypoxia and signals impending cardiac arrest. Begin CPR (15:2 with two rescuers), continue ventilating with oxygen, request ALS, and transport.",
    studyTip: "Pediatric HR below 60 with poor perfusion despite good ventilation and oxygenation = start CPR. Don't wait for the pulse to disappear."
  },
  {
    id: "CARD-056",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Vascular & Hypertensive Emergencies",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "A 52-year-old man who stopped taking his blood pressure medication reports a severe headache, blurred vision, and nausea. His BP is 232/134 mmHg, he is alert, and his neurological exam is otherwise normal. What is the MOST appropriate EMT management?",
    options: [
      "Assist him with his leftover blood pressure pills to bring his BP down quickly",
      "Have him lie flat with his legs elevated to improve blood flow to his brain",
      "Keep him calm with his head elevated, monitor him closely, and transport",
      "Assist him with nitroglycerin to lower his blood pressure before transport"
    ],
    correctIndex: 2,
    explanation: "This is a possible hypertensive emergency: severely elevated blood pressure with symptoms such as headache, vision changes, and nausea that suggest organ involvement. EMTs do not lower blood pressure with medication; dropping it too fast can cause a stroke or heart attack. Keep him calm, elevate his head, give oxygen if he is hypoxic, watch for seizures or stroke signs, and transport. Nitroglycerin is not indicated without chest pain, and lying flat may worsen symptoms.",
    studyTip: "Hypertensive emergency: calm, head up, monitor for stroke/seizure, transport. EMTs do not try to lower blood pressure with medication."
  },
  {
    id: "CARD-057",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "AED Operations & Special Situations",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.2,
    stem: "You are performing CPR on a 66-year-old woman. The AED analyzes her rhythm and announces, 'No shock advised.' She remains unresponsive and pulseless. What should you do?",
    options: [
      "Turn off the AED, because it has determined that resuscitation is futile",
      "Press the shock button anyway, because she is in cardiac arrest",
      "Wait 2 minutes and allow the AED to analyze again without touching her",
      "Resume high-quality CPR immediately, starting with chest compressions"
    ],
    correctIndex: 3,
    explanation: "A 'no shock advised' message means the AED did not detect a shockable rhythm (ventricular fibrillation or pulseless ventricular tachycardia). The patient may be in asystole or pulseless electrical activity, which do not respond to shocks but still require CPR. Resume compressions immediately, continue for 2 minutes, and let the AED reanalyze. Leave the AED on—her rhythm may become shockable.",
    studyTip: "'No shock advised' + no pulse = resume CPR immediately (asystole/PEA). AEDs shock only VF and pulseless VT."
  },
  {
    id: "CARD-058",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.4,
    stem: "A 71-year-old woman with diabetes has felt unusually tired and short of breath for 2 hours. She also has nausea and an aching discomfort in her jaw and upper back, but no chest pain. Her skin is pale and sweaty. How should you approach her care?",
    options: [
      "Treat her as possible ACS, because atypical symptoms are common in her group",
      "Rule out a cardiac cause, because a heart attack nearly always causes chest pain",
      "Treat her for a possible dental infection, because her jaw is aching",
      "Assume she has the flu and recommend that she see her doctor tomorrow"
    ],
    correctIndex: 0,
    explanation: "Women, older adults, and people with diabetes frequently have acute coronary syndrome without classic chest pain. They may have fatigue, shortness of breath, nausea, or discomfort in the jaw, neck, back, or arms instead. Pale, diaphoretic skin increases concern. Treat her as a possible ACS patient: oxygen if hypoxic, aspirin per protocol, position of comfort, consider ALS for a 12-lead ECG, and prompt transport.",
    studyTip: "Atypical ACS is common in women, older adults, and people with diabetes: fatigue, dyspnea, nausea, jaw/back pain, or weakness without chest pain."
  },
  {
    id: "CARD-059",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: 0.1,
    stem: "While off duty and alone at a park, you find a 5-year-old boy unresponsive and not breathing. No one saw him collapse, and you do not have a phone. What should you do?",
    options: [
      "Leave him immediately to find a phone and call 9-1-1, then return to begin CPR",
      "Perform about 2 minutes of CPR, then leave briefly to call 9-1-1 and get an AED",
      "Give rescue breaths only, because children's hearts rarely stop",
      "Wait with the child until another bystander arrives"
    ],
    correctIndex: 1,
    explanation: "Cardiac arrest in children is usually caused by a breathing problem (asphyxia) rather than a primary heart problem, so immediate CPR with breaths is especially important. If you are alone without a phone and the collapse was unwitnessed, perform about 2 minutes (5 cycles) of CPR before leaving to activate EMS and get an AED. If the arrest was witnessed and sudden, a heart rhythm problem is more likely, so call and get the AED first.",
    studyTip: "Lone rescuer, unwitnessed pediatric arrest, no phone: 2 minutes of CPR first, then call. Sudden witnessed collapse: call/get the AED first."
  },
  {
    id: "CARD-060",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.7,
    stem: "A 63-year-old man has had stable angina for years, with chest pressure only when he climbs stairs that goes away with rest and one nitroglycerin tablet. Today, the same pressure started while he was watching television, has lasted 25 minutes, and was not relieved by two of his nitroglycerin tablets. How should you regard this episode?",
    options: [
      "As stable angina, because the pressure feels the same as his usual episodes",
      "As anxiety, because the pain started while he was resting, not exerting",
      "As ACS, because new angina at rest that nitroglycerin does not relieve is unstable",
      "As a reaction to nitroglycerin, because the tablets did not relieve the pain"
    ],
    correctIndex: 2,
    explanation: "Stable angina follows a predictable pattern: brought on by exertion and relieved by rest or nitroglycerin within minutes. A change in that pattern—pain at rest, pain lasting longer, or pain not relieved by nitroglycerin—indicates unstable angina or myocardial infarction, both forms of acute coronary syndrome. Treat him as a potential AMI: aspirin per protocol, oxygen if hypoxic, further nitroglycerin per protocol if BP permits, request ALS for a 12-lead ECG, and transport promptly.",
    studyTip: "Any change in an angina pattern—at rest, longer, more frequent, or not relieved by nitro—is unstable and treated as ACS."
  },
  {
    id: "CARD-061",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.8,
    stem: "Your crew is reviewing a recorded cardiac arrest. Compressions were the right depth and rate, but they were paused for 30 seconds while the patient was moved to the stretcher and for 20 seconds during each pulse check. Which CPR quality goal did the crew MOST clearly fail to meet?",
    options: [
      "Allowing the chest to recoil fully after every compression",
      "Ventilating at a rate of 1 breath every 6 seconds during CPR",
      "Attaching and using the AED within 1 minute of arriving at the patient",
      "Limiting each pause in compressions to less than 10 seconds"
    ],
    correctIndex: 3,
    explanation: "Blood flow to the heart and brain stops within seconds of a pause in compressions and takes many compressions to build back up. High-quality CPR keeps the chest compression fraction (the portion of the resuscitation during which compressions are performed) as high as possible—at least 60% and ideally above 80%—by limiting each interruption to less than 10 seconds. Pulse checks should take no more than 10 seconds, and moves should be planned so compressions continue.",
    studyTip: "Minimize interruptions: pulse checks 10 seconds or less, switch compressors during analysis, and aim for a compression fraction above 80%."
  },
  {
    id: "CARD-062",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Acute Coronary Syndrome (ACS)",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.0,
    stem: "A 34-year-old man reports crushing chest pain that began 30 minutes after he used cocaine. He is sweaty and anxious, with HR 128 beats/min, BP 178/104 mmHg, and SpO2 97%. He has no allergies and has not taken any PDE-5 inhibitors. Which statement about his care is MOST accurate?",
    options: [
      "Cocaine can cause a heart attack at any age; treat him as possible ACS",
      "His pain is caused by anxiety alone, so reassure him and suggest he see his doctor",
      "Cocaine use is a contraindication to every cardiac medication, so give nothing",
      "Have him walk around to burn off the cocaine and slow down his heart rate"
    ],
    correctIndex: 0,
    explanation: "Cocaine causes coronary artery spasm, increases heart rate and blood pressure, and promotes clot formation, so it can cause myocardial infarction even in young people without heart disease. Treat chest pain after cocaine use as possible ACS: keep him calm, give oxygen if hypoxic, give aspirin per protocol, consider nitroglycerin per protocol or medical control, request ALS, and transport. Watch closely for dysrhythmias, seizures, and hyperthermia.",
    studyTip: "Cocaine + chest pain = possible AMI at any age. Calm, oxygen if hypoxic, aspirin per protocol, ALS, transport; monitor for dysrhythmias and seizures."
  },
  {
    id: "CARD-063",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 1.1,
    stem: "You have just delivered a newborn. After 30 seconds of effective positive pressure ventilation with chest rise, the newborn's heart rate is 50 beats/min. How should you perform chest compressions?",
    options: [
      "Use the heel of one hand on the sternum at a ratio of 30 compressions to 2 breaths",
      "Use two thumbs on the lower third of the sternum at a ratio of 3:1",
      "Use two fingers on the sternum at a ratio of 15:2 at 100 compressions per minute",
      "Give continuous compressions without pausing for any ventilations"
    ],
    correctIndex: 1,
    explanation: "Newborns who remain below 60 beats/min after 30 seconds of effective ventilation need chest compressions. Use the two-thumb–encircling hands technique on the lower third of the sternum to a depth of about one-third of the chest, coordinated at 3 compressions to 1 ventilation (90 compressions and 30 breaths per minute, about 120 events per minute). Because newborn arrest is almost always caused by respiratory problems, ventilation is emphasized more than in older infants and children.",
    studyTip: "Newborn: PPV first. HR below 60 after 30 seconds of effective PPV = compressions at 3:1 with two thumbs. Older infants and children: 30:2 (one rescuer) or 15:2 (two rescuers)."
  },
  {
    id: "CARD-064",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Vascular & Hypertensive Emergencies",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.9,
    stem: "A 76-year-old man with atrial fibrillation has sudden, severe pain in his right lower leg. The leg is pale and cool, he cannot feel you touch his foot, and you cannot find a pulse on top of his foot. The left leg is warm with good pulses. There was no injury. What is the MOST appropriate care?",
    options: [
      "Elevate the right leg above the level of his heart and apply a cold pack",
      "Massage his calf firmly to break up the clot and restore circulation",
      "Keep the leg level or slightly low, pad and protect it, and transport",
      "Apply a tourniquet above the knee to keep the clot from moving upward"
    ],
    correctIndex: 2,
    explanation: "Sudden pain, pallor, pulselessness, numbness, and coldness in one limb suggest an acute arterial occlusion. In a patient with atrial fibrillation, a clot from the heart often lodges in a leg artery. The limb is losing its blood supply and can be lost within hours. Keep the leg level or slightly dependent (elevation reduces arterial flow further), keep it warm and padded—never apply cold or massage it—and transport promptly to a facility that can restore blood flow.",
    studyTip: "Acute arterial occlusion: pain, pallor, pulselessness, paresthesia, paralysis, poikilothermia (cold). Keep the limb level/dependent and padded; transport promptly."
  },
  {
    id: "CARD-065",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Bradycardia & Perfusion Assessment",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.2,
    stem: "A 64-year-old man regained a pulse after cardiac arrest. He remains unresponsive. Your partner is ventilating with a BVM at about 24 breaths/min with large breaths, and the man's blood pressure is dropping. Why should your partner slow the ventilations to about 10 per minute?",
    options: [
      "Fast ventilation raises carbon dioxide levels, which weakens the heart muscle",
      "Each breath raises chest pressure, which reduces blood return to the heart",
      "Fast ventilation uses up the portable oxygen supply too quickly",
      "Fast ventilation can wake the patient, causing him to fight the BVM"
    ],
    correctIndex: 1,
    explanation: "Overventilation is common and harmful. Each positive pressure breath raises the pressure in the chest, which reduces venous return to the heart and lowers cardiac output and blood pressure—especially in a fragile post-arrest patient. Rapid ventilation also blows off too much carbon dioxide, which constricts the blood vessels in the brain and reduces cerebral blood flow. Ventilate an adult with a pulse at 1 breath every 6 seconds with just enough volume for chest rise, and titrate oxygen to an SpO2 of about 92–98%.",
    studyTip: "Post-ROSC: avoid hyperventilation (10/min adult), avoid hypoxia and hypotension, keep the AED attached, and transport to an appropriate center."
  },
  {
    id: "CARD-066",
    source: "Claude",
    domain: "Cardiology & Resuscitation",
    subtopic: "Adult & Pediatric BLS / CPR",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.6,
    stem: "You are the only rescuer performing CPR on a 13-year-old girl who has visible breast development and is about adult size. Which compression depth and ratio should you use?",
    options: [
      "About 1 1/2 inches (4 cm) at 15:2",
      "About 2 inches (5 cm) at 15:2",
      "One-third of the chest depth using the two-thumb technique at 3:1",
      "At least 2 inches (5 cm), but no more than 2.4 inches (6 cm), at 30:2"
    ],
    correctIndex: 3,
    explanation: "For CPR purposes, the child guidelines apply from 1 year of age until the onset of puberty (breast development in girls; underarm, chest, or facial hair in boys). Once a patient shows signs of puberty, use adult guidelines: compress at least 2 inches (5 cm) but no more than 2.4 inches (6 cm) at 100–120 per minute with a 30:2 ratio, whether there are one or two rescuers. Use adult AED pads as well.",
    studyTip: "Adult CPR guidelines begin at puberty, not at a specific age. Adult = 2–2.4 in, 30:2 for one or two rescuers. Child (1 year to puberty) = about 2 in, 30:2 (one rescuer) or 15:2 (two rescuers)."
  }
);
