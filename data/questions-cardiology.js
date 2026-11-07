// NREMT EMT Cognitive Exam Practice Question Bank
// Domain 2: Cardiology & Resuscitation (22 Questions)
// Difficulty Tiers: 1 = Easy, 2 = Medium, 3 = Hard
// Author: Original questions written by Gemini (each tagged source: "Gemini"); reviewed and corrected by Claude.
// Claude-authored questions for this domain live in data/questions-claude-cardiology.js

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
  }
);
