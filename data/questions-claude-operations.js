// NREMT EMT Cognitive Exam Practice Question Bank
// Domain 5: EMS Operations — Claude-authored expansion (12 Questions: OPS-013 to OPS-024)
// Author: Claude. Every question in this file is tagged source: "Claude".
// Scope: EMT (2019 National EMS Scope of Practice Model / National EMS Education Standards).
// Difficulty Tiers: 1 = Easy, 2 = Medium, 3 = Hard

window.NREMT_QUESTIONS = window.NREMT_QUESTIONS || [];

window.NREMT_QUESTIONS.push(
  {
    id: "OPS-013",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Operations",
    difficulty: 1,
    irtB: -1.1,
    stem: "After transporting a well-known local politician who was injured in a car crash, you are approached by a television reporter asking about the patient's injuries. Under HIPAA, with whom may you share the patient's protected health information without the patient's authorization?",
    options: [
      "The television reporter, because the patient is a public figure",
      "Your friends on social media, as long as you do not post the name",
      "The emergency department staff who are taking over the patient's care",
      "Any bystander at the scene who asks whether the patient will be okay"
    ],
    correctIndex: 2,
    explanation: "HIPAA allows protected health information to be shared without authorization for treatment, payment, and health care operations—such as giving a report to the hospital staff assuming care. Sharing information with the media, posting about patients on social media (even without names, if the patient could be identified), or discussing care with bystanders is a breach of confidentiality, regardless of the patient's fame.",
    studyTip: "HIPAA: share PHI only for treatment, payment, operations, or as required by law (e.g., mandatory reporting, subpoena). Never with media, friends, or social media."
  },
  {
    id: "OPS-014",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Ambulance Operations & Infection Control",
    patientType: "Operations",
    difficulty: 1,
    irtB: -1.2,
    stem: "Which of the following is the single MOST effective way for an EMT to prevent the spread of infection between patients?",
    options: [
      "Wearing an N95 respirator on every call",
      "Thorough hand hygiene before and after patient contact",
      "Taking antibiotics at the start of each work shift",
      "Wearing the same gloves throughout the shift"
    ],
    correctIndex: 1,
    explanation: "Hand hygiene—washing with soap and water or using an alcohol-based hand sanitizer—before and after patient contact and after removing gloves is the most effective way to prevent disease transmission. Use soap and water when hands are visibly soiled. Gloves must be changed between patients, N95 respirators are used for airborne precautions, and prophylactic antibiotics are not used for routine protection.",
    studyTip: "Hand hygiene is the #1 infection control measure. Change gloves between patients and wash hands after removing them."
  },
  {
    id: "OPS-015",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Ambulance Operations & Safety",
    patientType: "Operations",
    difficulty: 1,
    irtB: -1.0,
    stem: "You and your partner are about to lift a loaded stretcher. Which technique BEST reduces the risk of a back injury?",
    options: [
      "Bend at the waist with your legs straight and lift using your back muscles",
      "Keep your back locked, lift with your legs, and keep the load close to your body",
      "Twist your torso toward the ambulance while you lift to save time and steps",
      "Hold the load at arm's length so your back stays straight while you lift it"
    ],
    correctIndex: 1,
    explanation: "The power lift (squat lift) uses the strong leg muscles: keep your back straight and locked, feet shoulder-width apart, bend at the knees and hips, keep the weight as close to your body as possible, and lift by straightening your legs. Avoid bending at the waist, twisting while lifting, and reaching or holding loads away from your body, all of which strain the back. Communicate with your partner and know your limits.",
    studyTip: "Power lift: back locked, legs do the work, load close to the body, no twisting, communicate with your partner. Ask for help when needed."
  },
  {
    id: "OPS-016",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Communications & Documentation",
    patientType: "Operations",
    difficulty: 1,
    irtB: -0.8,
    stem: "While writing a paper patient care report, you realize you recorded the wrong blood pressure. What is the correct way to fix this error?",
    options: [
      "Use correction fluid to cover the mistake, then write in the correct value",
      "Tear out the page, and rewrite the entire report from the very beginning",
      "Draw a single line through the error, initial and date it, and add the correction",
      "Scribble over the error until it is unreadable, then write the correct value"
    ],
    correctIndex: 2,
    explanation: "The patient care report is a legal document. To correct an error, draw a single horizontal line through it so it remains readable, initial and date the change, and write the correct information. Obscuring, erasing, or destroying the original entry can appear to be falsification. For electronic reports, follow your agency's process for addenda. If an error is discovered after submission, add a dated addendum rather than altering the original.",
    studyTip: "PCR errors: single line through, initial, date, correct it. Never erase, white-out, or destroy the original. Late corrections = dated addendum."
  },
  {
    id: "OPS-017",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Incident Management & MCI",
    patientType: "Operations",
    difficulty: 2,
    irtB: -0.1,
    stem: "Under the National Incident Management System (NIMS), what is the recommended span of control—the number of people or units one supervisor should directly manage?",
    options: [
      "About 1 to 2, with 1 being optimal",
      "About 3 to 7, with 5 being optimal",
      "About 10 to 15, with 12 being optimal",
      "About 20 to 25, with 20 being optimal"
    ],
    correctIndex: 1,
    explanation: "In the Incident Command System used under NIMS, each supervisor should directly manage about 3 to 7 people or units, with 5 considered ideal. A manageable span of control maintains accountability and effective communication. When the number exceeds this, the incident commander creates additional divisions, groups, or sectors (such as triage, treatment, and transport) with their own supervisors.",
    studyTip: "NIMS/ICS span of control: 3–7 (ideal 5). Key EMS sectors at an MCI: triage, treatment, transport, staging."
  },
  {
    id: "OPS-018",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "HazMat & Scene Safety",
    patientType: "Operations",
    difficulty: 2,
    irtB: 0.0,
    stem: "At a hazardous materials incident, the scene is divided into hot, warm, and cold zones. In which zone does patient decontamination take place?",
    options: [
      "The hot zone, where the release occurred",
      "The warm zone, between the hot and cold zones",
      "The cold zone, where the command post is set up",
      "At the receiving hospital, after transport"
    ],
    correctIndex: 1,
    explanation: "The hot (exclusion) zone is the contaminated area where the release occurred; only properly trained and protected hazmat personnel enter it. The warm (contamination reduction) zone contains the decontamination corridor, where patients and responders are decontaminated. The cold (support) zone is a clean area where the command post, staging, and EMS treatment and transport are located. EMTs without hazmat training typically treat patients only after decontamination, in the cold zone.",
    studyTip: "HOT = contamination (hazmat techs only). WARM = DECON corridor. COLD = command, staging, EMS treatment/transport."
  },
  {
    id: "OPS-019",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Ambulance Operations & Safety",
    patientType: "Operations",
    difficulty: 2,
    irtB: 0.2,
    stem: "You are driving an ambulance with lights and siren to a cardiac arrest. You approach an intersection with a red traffic signal and see cars stopped in some lanes. What is the SAFEST way to proceed?",
    options: [
      "Maintain your speed, since other drivers must yield to emergency vehicles",
      "Come to a complete stop, make sure each lane has yielded, then proceed carefully",
      "Turn off the siren so other drivers are not startled, and then go through slowly",
      "Use the oncoming traffic lane and accelerate through the intersection quickly"
    ],
    correctIndex: 1,
    explanation: "Intersections are where most ambulance crashes occur. Laws allowing emergency vehicles to proceed through red lights still require 'due regard' for the safety of others. Come to a complete stop at a red light or stop sign, make eye contact with other drivers, verify that every lane has yielded (including traffic hidden behind stopped vehicles), and then proceed cautiously. Do not assume other drivers can see or hear you.",
    studyTip: "Most ambulance crashes happen at intersections. Stop at red lights, clear each lane one at a time, and never assume other drivers see or hear you."
  },
  {
    id: "OPS-020",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Operations",
    difficulty: 2,
    irtB: 0.1,
    stem: "A 14-year-old soccer player has an open fracture of the lower leg with moderate bleeding. The coach has tried repeatedly but cannot reach her parents. Under which type of consent may you treat and transport her?",
    options: [
      "Expressed consent given by the coach",
      "Implied consent, because it is an emergency",
      "Informed refusal signed by the patient",
      "No consent; you must wait for a parent"
    ],
    correctIndex: 1,
    explanation: "Minors generally cannot give legal consent for their own care. When a minor has a potentially serious injury or illness and a parent or legal guardian cannot be reached, the law assumes the parents would want their child treated, so implied consent applies. Treat and transport, document the attempts to reach the parents, and continue those efforts. A coach is not a legal guardian unless specifically authorized, and a minor cannot refuse care in an emergency.",
    studyTip: "Minor + emergency + parent/guardian unavailable = implied consent. Exceptions where minors can consent: emancipated minors (and others per state law)."
  },
  {
    id: "OPS-021",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Operations",
    difficulty: 2,
    irtB: 0.3,
    stem: "Police have secured the scene of a shooting, and you are treating a 30-year-old man with a gunshot wound to the chest. Which action BEST helps preserve evidence without compromising patient care?",
    options: [
      "Cut his clothing straight through the bullet hole to expose the wound quickly",
      "Avoid cutting through holes in clothing, and touch only what is necessary",
      "Wipe away the blood at the scene so police can photograph the wound clearly",
      "Delay treatment until the police finish photographing and collecting evidence"
    ],
    correctIndex: 1,
    explanation: "Patient care always comes first, but you can help preserve evidence by cutting around (not through) bullet holes and knife tears in clothing, touching and moving only what is necessary, using a single path into and out of the scene, placing removed clothing in paper bags if asked by police, and documenting the patient's position and any statements objectively. Do not clean up the scene or delay life-saving care for evidence collection.",
    studyTip: "Crime scene: patient care first. Cut around holes in clothing, minimize disturbance, one path in and out, paper bags, and document objectively."
  },
  {
    id: "OPS-022",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Triage & Mass Casualty (MCI)",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.9,
    stem: "You are using JumpSTART triage at a school bus crash. A 4-year-old girl cannot walk. She is breathing 50 times per minute, has a palpable peripheral pulse, and responds appropriately to your voice. Which triage category should she receive?",
    options: [
      "Green (Minor), because she responds appropriately to voice",
      "Yellow (Delayed), because she has a palpable peripheral pulse",
      "Red (Immediate), because her respiratory rate is above 45",
      "Black (Expectant), because her breathing rate is not survivable"
    ],
    correctIndex: 2,
    explanation: "JumpSTART uses age-appropriate respiratory thresholds: a respiratory rate below 15 or above 45 breaths per minute is tagged Red (Immediate). Although she has a palpable pulse and an appropriate mental status, her respiratory rate of 50 places her in the Red category. In adult START, the cutoff is 30 breaths per minute; applying adult criteria to young children can lead to under- or over-triage.",
    studyTip: "JumpSTART (ages ~1–8): RR < 15 or > 45 = RED. No palpable peripheral pulse = RED. Inappropriate response to pain or unresponsive (AVPU 'P' inappropriate or 'U') = RED."
  },
  {
    id: "OPS-023",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Operations",
    difficulty: 3,
    irtB: 1.0,
    stem: "You treated a 67-year-old man for hypoglycemia with oral glucose. Fifteen minutes later he is alert and oriented, his glucose is 118 mg/dL, and he wants to refuse transport. Which factor makes his refusal MOST concerning?",
    options: [
      "He is now alert and oriented to person, place, time, and event",
      "He takes a long-acting oral diabetes pill that can cause hypoglycemia to recur",
      "He ate a sandwich after his glucose came back up to a normal level",
      "His wife plans to stay with him and recheck his glucose throughout the day"
    ],
    correctIndex: 1,
    explanation: "Some oral diabetes medications (sulfonylureas such as glipizide or glyburide) stimulate insulin release for many hours, so hypoglycemia often returns after oral glucose wears off. Patients taking these medications are at high risk of recurrent, severe hypoglycemia and are often admitted for observation. If he has decision-making capacity, he may still refuse, but explain this specific risk clearly, consult medical control per protocol, ensure he eats a complex-carbohydrate meal, confirm a responsible adult will stay with him, and document thoroughly. Being alert, eating, and having someone with him all reduce, not increase, the risk.",
    studyTip: "Hypoglycemia refusals are riskier when the patient takes long-acting oral agents (sulfonylureas), lives alone, has no food, or had an unexplained low. Explain risks, consult medical control, document."
  },
  {
    id: "OPS-024",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Operations",
    difficulty: 3,
    irtB: 1.2,
    stem: "A 35-year-old man struck his head in a bicycle crash. He is confused about the day and keeps asking what happened, has a large scalp hematoma, and has a GCS of 13. He becomes agitated and insists that he does not want to go to the hospital. What is the MOST appropriate course of action?",
    options: [
      "Have him sign a refusal form, since every adult has the right to refuse care",
      "Leave the scene immediately to avoid any accusation of assault or battery",
      "Recognize that he lacks capacity, and seek police and medical control help",
      "Wait on scene until he becomes fully oriented, then let him make a decision"
    ],
    correctIndex: 2,
    explanation: "A patient must have decision-making capacity to refuse care. This patient has an altered mental status from a head injury (confusion, repetitive questioning, GCS 13), so he cannot understand the risks of refusing. Implied consent applies. Keep trying to persuade him calmly, involve law enforcement and medical control per protocol, and use restraint only as a last resort and only as your protocol allows. Allowing him to refuse—or leaving—could result in serious harm and in liability for abandonment or negligence. Document his mental status and your actions carefully.",
    studyTip: "No capacity = no valid refusal. Head injury, hypoxia, hypoglycemia, intoxication, or psychiatric crisis may impair capacity. Involve medical control and law enforcement; document."
  }
);
