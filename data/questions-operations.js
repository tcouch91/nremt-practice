// NREMT EMT Cognitive Exam Practice Question Bank
// Domain 5: EMS Operations (36 Questions: OPS-001 to OPS-036)
// Difficulty Tiers: 1 = Easy, 2 = Medium, 3 = Hard
// Scope: EMT (2019 National EMS Scope of Practice Model / National EMS Education Standards).
// Authorship is tracked per question by the `source` field ("Gemini" or "Claude").

window.NREMT_QUESTIONS = window.NREMT_QUESTIONS || [];

window.NREMT_QUESTIONS.push(
  {
    id: "OPS-001",
    source: "Gemini",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Operations",
    difficulty: 1,
    irtB: -1.1,
    stem: "You respond to a grocery store for a 68-year-old female found unresponsive on the floor after collapsing. No family members or legal guardians are present on scene. Under which legal doctrine are you permitted to provide emergency assessment, treatment, and transport?",
    options: [
      "Expressed consent",
      "Implied consent",
      "Involuntary judicial consent",
      "Substituted durable consent"
    ],
    correctIndex: 1,
    explanation: "Implied consent (the emergency doctrine) applies when a patient is unresponsive, mentally incapacitated, or otherwise unable to make rational decisions and faces a threat to life or limb. The law assumes that a reasonable, competent person would consent to emergency medical care and transport if they were able to do so.",
    studyTip: "Types of Consent:\n• Expressed/Informed = Competent adult verbally or nonverbally agrees after risks/benefits explained.\n• Implied = Unresponsive/incapacitated patient (or unaccompanied minor in an emergency) where a reasonable person would want care."
  },
  {
    id: "OPS-002",
    source: "Gemini",
    domain: "EMS Operations",
    subtopic: "HazMat & Scene Safety",
    patientType: "Operations",
    difficulty: 1,
    irtB: -0.9,
    stem: "You are the first emergency unit to arrive at a highway rollover involving a tanker truck that is leaking an unknown fuming liquid onto the roadway. Where should you position your ambulance upon arrival?",
    options: [
      "Downwind and downhill within 50 feet of the tanker so you can read the placard",
      "Upwind, uphill, and upstream at a safe distance, using binoculars to identify the placard",
      "Directly alongside the cab of the truck to extricate the driver immediately",
      "In the Warm Zone immediately adjacent to the chemical spill"
    ],
    correctIndex: 1,
    explanation: "At any hazardous materials (HazMat) incident, scene safety for rescuers is paramount. Always stage your ambulance upwind (so vapors blow away from you), uphill (so leaking liquids flow away from you), and upstream, remaining in the Cold Zone at a safe distance. Use binoculars to read the diamond-shaped HazMat placard or UN four-digit identification number and consult the Emergency Response Guidebook (ERG).",
    studyTip: "HazMat Staging Rule: Always park UPWIND, UPHILL, and UPSTREAM in the Cold Zone. Use binoculars and the Emergency Response Guidebook (ERG)—never enter the Hot Zone without HazMat training and PPE!"
  },
  {
    id: "OPS-003",
    source: "Gemini",
    domain: "EMS Operations",
    subtopic: "Ambulance Operations & Air Medical",
    patientType: "Operations",
    difficulty: 1,
    irtB: -0.8,
    stem: "When establishing an emergency landing zone (LZ) on flat ground for a medical helicopter during daytime operations, what are the MINIMUM recommended dimensions of the landing zone?",
    options: [
      "25 feet by 25 feet",
      "50 feet by 50 feet",
      "100 feet by 100 feet",
      "500 feet by 500 feet"
    ],
    correctIndex: 2,
    explanation: "A standard helicopter landing zone (LZ) should be a flat, firm area cleared of debris, wires, trees, and spectators measuring at least 100 feet by 100 feet (30 m x 30 m) during daytime operations (and up to 100 x 100 ft or larger depending on aircraft size/night operations), with the slope not exceeding 8–10 degrees.",
    studyTip: "Helicopter Landing Zone (LZ): Minimum 100 ft x 100 ft, flat/clear of overhead wires, mark corners with weighted cones/landing lights (never flares or barrier tape!). Never approach the aircraft until signaled by the pilot/flight crew, and NEVER approach from the rear (tail rotor)!"
  },
  {
    id: "OPS-004",
    source: "Gemini",
    domain: "EMS Operations",
    subtopic: "Ambulance Operations & Infection Control",
    patientType: "Operations",
    difficulty: 1,
    irtB: -0.7,
    stem: "You are dispatched to transport a 49-year-old male from a shelter who has a 3-week history of a productive cough with blood-tinged sputum (hemoptysis), night sweats, fever, and unexplained weight loss. Which personal protective equipment (PPE) should you don for respiratory protection?",
    options: [
      "A standard surgical mask on the EMT only",
      "A properly fitted N95 (or HEPA) respirator on the EMT, and a surgical mask (or oxygen mask) on the patient",
      "A face shield only, because tuberculosis is transmitted exclusively by large droplets",
      "An N95 respirator on the patient and no mask on the EMT"
    ],
    correctIndex: 1,
    explanation: "Productive cough, hemoptysis, night sweats, fever, and weight loss are classic signs of active pulmonary tuberculosis (TB), which is transmitted via tiny airborne droplet nuclei that remain suspended in the air. Standard airborne precautions require the healthcare provider to wear a fit-tested N95 or HEPA respirator, while placing a standard surgical mask (or nonrebreather oxygen mask if hypoxic) on the patient to contain respiratory secretions at the source. Never put an N95 with an exhalation valve or high breathing resistance on a patient in respiratory distress.",
    studyTip: "Infection Control Precautions:\n• Airborne (TB, Measles, Varicella/Chickenpox) = N95/HEPA respirator on EMT + Surgical mask on patient.\n• Droplet (Influenza, Meningitis, Pertussis, Mumps) = Standard Surgical Mask within 6 feet."
  },
  {
    id: "OPS-005",
    source: "Gemini",
    domain: "EMS Operations",
    subtopic: "Triage & Mass Casualty (MCI)",
    patientType: "Operations",
    difficulty: 2,
    irtB: -0.1,
    stem: "You are serving as the Triage Officer at a multi-vehicle bus crash using the START (Simple Triage and Rapid Treatment) system. You encounter a 40-year-old male lying on the ground who is unable to walk. His respiratory rate is 24 breaths/min, he has a strong radial pulse (capillary refill < 2 seconds), and he is confused and unable to follow simple commands. Which triage tag color should you assign to this patient?",
    options: [
      "Green (Minor)",
      "Yellow (Delayed)",
      "Red (Immediate)",
      "Black (Deceased / Expectant)"
    ],
    correctIndex: 2,
    explanation: "Using the START triage algorithm (RPM: Respirations -> Perfusion -> Mental Status | '30 - 2 - Can Do'):\n1. Walking wounded? No.\n2. Respirations: Breathing at 24/min (< 30/min) -> move to Perfusion.\n3. Perfusion: Radial pulse present / capillary refill < 2 seconds -> move to Mental Status.\n4. Mental Status: Cannot follow simple commands -> Tag RED (Immediate)! Any failure in R (> 30 or < 10), P (absent radial pulse / cap refill > 2 sec), or M (unable to obey commands) makes the patient Red (Immediate).",
    studyTip: "START Triage (RPM: 30 - 2 - Can Do):\n• Walking = GREEN (Minor)\n• Apneic even after opening airway = BLACK (Expectant)\n• Apneic, starts breathing after opening airway = RED (Immediate)\n• RR > 30, OR Radial pulse absent (Cap refill > 2s), OR Cannot follow commands = RED (Immediate)\n• Non-ambulatory but passes R, P, and M = YELLOW (Delayed)."
  },
  {
    id: "OPS-006",
    source: "Gemini",
    reviewNote: "Corrected by Claude: START does not include inserting an OPA during triage; you open the airway once.",
    domain: "EMS Operations",
    subtopic: "Triage & Mass Casualty (MCI)",
    patientType: "Operations",
    difficulty: 2,
    irtB: 0.1,
    stem: "During a mass casualty incident (MCI) using START triage, you approach an unresponsive adult female who is not breathing. What is the ONLY intervention you should perform before deciding whether to tag her Black (Deceased) or Red (Immediate)?",
    options: [
      "Perform 2 minutes of high-quality CPR and apply an AED",
      "Manually open her airway once; if she remains apneic, tag her Black (Deceased)",
      "Deliver 5 rescue breaths with a bag-valve mask and check a carotid pulse for 30 seconds",
      "Check her blood pressure and pupil reactivity"
    ],
    correctIndex: 1,
    explanation: "In adult START triage, if a patient is apneic, you immediately reposition/open the airway once. If the patient begins breathing after the airway is opened, tag them Red (Immediate). If the patient remains apneic after opening the airway, tag them Black (Deceased/Expectant) and move to the next patient. Performing CPR during an MCI consumes rescuers and resources needed to save dozens of salvageable Red patients. (Note: In pediatric JumpSTART triage, an apneic child WITH a pulse receives 5 rescue breaths before being tagged Black if still apneic).",
    studyTip: "MCI Triage Apnea Rule:\n• Adult (START): Open airway -> Still apneic = BLACK.\n• Pediatric (JumpSTART, ages 1–8): Open airway -> Still apneic -> Check pulse -> If pulse present, give 5 rescue breaths -> Still apneic = BLACK (if breathing resumes = RED)."
  },
  {
    id: "OPS-007",
    source: "Gemini",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Operations",
    difficulty: 2,
    irtB: 0.0,
    stem: "A 45-year-old male was involved in a minor fender-bender and has a small abrasion on his forehead. He is alert and oriented to person, place, time, and event (A&O x4), shows no signs of alcohol or drug intoxication, has normal vital signs, and has no distracting injuries, but he insists on refusing EMS transport. What is the MOST critical step before having him sign a refusal-of-care (AMA) form?",
    options: [
      "Have a police officer place the patient in protective custody and force transport",
      "Perform a thorough assessment, clearly explain in lay terms the potential risks and consequences of refusing care (including worsening injury or death), advise him to seek immediate care if symptoms develop, and document thoroughly",
      "Have the patient sign the blank refusal form immediately without performing a physical exam to save time",
      "Refuse to let him leave until his primary care physician arrives on scene"
    ],
    correctIndex: 1,
    explanation: "A mentally competent adult with intact decision-making capacity (A&O x4, no head injury/hypoxia/intoxication impairing judgment) has the legal right to refuse medical treatment and transport. To execute an informed refusal and protect the patient (and yourself from liability), you must complete as thorough an assessment as permitted, clearly inform the patient of his condition and the worst-case risks of refusing transport (including permanent disability or death), encourage him to call 911 if symptoms change, have a witness sign the refusal, and write a comprehensive narrative.",
    studyTip: "Informed Refusal Checklist: (1) Confirm Decision-Making Capacity (A&O x4, no hypoxia/hypoglycemia/intoxication/TBI), (2) Perform assessment & vitals, (3) Explain risks/consequences of refusal (including death), (4) Obtain signature with a witness, (5) Document thoroughly."
  },
  {
    id: "OPS-008",
    source: "Gemini",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Operations",
    difficulty: 2,
    irtB: 0.2,
    stem: "An EMT arrives at the Emergency Department with a 62-year-old patient experiencing chest pain. Because the ED triage area is busy, the EMT leaves the patient on a hospital stretcher in the hallway and returns to service without giving a verbal handoff report or obtaining a signature from an ED nurse or physician. Which legal violation has this EMT committed?",
    options: [
      "Assault",
      "Abandonment",
      "False imprisonment",
      "Defamation of character"
    ],
    correctIndex: 1,
    explanation: "Abandonment is the unilateral termination of the EMT-patient relationship once care has been initiated, without obtaining a valid patient refusal or transferring care to a healthcare professional of equal or higher training/licensure. Simply wheeling a patient into an ED hallway without a formal face-to-face transfer of care and report to an RN/MD constitutes patient abandonment.",
    studyTip: "Abandonment = Stopping care or leaving a patient without transferring care to an equal or higher medical authority (e.g., an ALS paramedic handing off a patient needing ALS care to a BLS EMT, or leaving a patient at the ED without a formal nurse/physician handoff)."
  },
  {
    id: "OPS-009",
    source: "Gemini",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Operations",
    difficulty: 2,
    irtB: 0.3,
    stem: "To successfully prove a lawsuit for medical negligence (malpractice) against an EMT in civil court, the plaintiff must establish that ALL FOUR of which legal elements were present?",
    options: [
      "Duty to act, Breach of duty, Damages (actual injury), and Proximate causation",
      "Malice aforethought, Criminal intent, Battery, and Libel",
      "Implied consent, Good Samaritan immunity, Res ipsa loquitur, and Slander",
      "Scope of practice, Medical direction, HIPAA violation, and Abandonment"
    ],
    correctIndex: 0,
    explanation: "Medical negligence requires all 4 legal elements to be proven:\n1. Duty to Act: The EMT had a legal/contractual obligation to care for the patient.\n2. Breach of Duty: The EMT failed to act within the standard of care expected of a reasonably prudent EMT with similar training under similar circumstances.\n3. Damages: The patient suffered actual physical or psychological harm/injury.\n4. Proximate Cause: There is a direct causal link showing the EMT's breach of duty directly caused the patient's damages.",
    studyTip: "The 4 Elements of Negligence: (1) Duty to Act, (2) Breach of Duty (violating standard of care), (3) Damages (harm), and (4) Proximate Cause (breach directly caused the harm)."
  },
  {
    id: "OPS-010",
    source: "Gemini",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Operations",
    difficulty: 3,
    irtB: 0.7,
    stem: "You are called to the residence of a 79-year-old male with terminal metastatic lung cancer who is in cardiac arrest. His wife hands you a valid, state-approved Do Not Resuscitate (DNR) / POLST order signed by the patient and his attending physician. However, two minutes later, the patient's adult son arrives at the house, screams that he does not agree with the DNR, and demands that you perform CPR and transport his father immediately. What is the MOST appropriate course of action?",
    options: [
      "Honor the valid written DNR order, withhold CPR, provide emotional support to the family, and contact medical control if needed",
      "Disregard the valid DNR order and perform full CPR to appease the angry son unless the wife physically intervenes",
      "Have the wife and son vote on whether resuscitation should be attempted",
      "Apply the AED and deliver shocks only, without performing chest compressions"
    ],
    correctIndex: 0,
    explanation: "A valid, original written Do Not Resuscitate (DNR) or Physician Orders for Life-Sustaining Treatment (POLST) form signed by the competent patient (or their legally designated healthcare proxy/power of attorney) and their physician expresses the patient's binding autonomous legal right to refuse resuscitation. Family members who are not the legal healthcare surrogate cannot override a patient's valid written DNR order simply because they disagree. Unless your personal safety is threatened by violence on scene, you should honor the valid DNR order, withhold resuscitation, support the grieving family, and consult medical control.",
    studyTip: "DNR / POLST Rules:\n• Valid written DNR present -> Honor the patient's wishes (cannot be revoked by a non-proxy relative).\n• Living Will ONLY (not a DNR) or family claims a DNR exists but cannot produce the document -> Begin resuscitation and contact medical control.\n• Note: A DNR only prohibits CPR/intubation in arrest—it NEVER prohibits comfort care, oxygen, pain relief, or choking relief if the patient is still alive!"
  },
  {
    id: "OPS-011",
    source: "Gemini",
    domain: "EMS Operations",
    subtopic: "Triage & Mass Casualty (MCI)",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.9,
    stem: "During a school bus rollover MCI, you are triaging a 5-year-old boy using the JumpSTART pediatric triage system. The child is unresponsive and apneic. You position his airway using a jaw-thrust maneuver, and he remains apneic. You palpate his carotid pulse and feel a faint pulse of 64 beats/min. According to the JumpSTART algorithm, what should you do NEXT?",
    options: [
      "Immediately tag the child Black (Expectant) and move to the next patient",
      "Deliver 5 rescue breaths (ventilations); if spontaneous breathing resumes, tag him Red (Immediate), and if he remains apneic, tag him Black (Expectant)",
      "Perform 2 minutes of two-rescuer CPR at a 15:2 ratio",
      "Tag the child Yellow (Delayed) because he still has a palpable pulse"
    ],
    correctIndex: 1,
    explanation: "The JumpSTART pediatric MCI triage algorithm (used for children ages 1 to 8 years who appear to be children) modifies START to account for the fact that pediatric arrest starts as primary respiratory arrest before the heart stops. If a child is apneic after positioning the airway:\n• Check for a peripheral/central pulse.\n• If NO pulse -> Tag BLACK.\n• If a pulse IS present -> Deliver 5 rescue breaths (~15 seconds) to clear upper airway/alveolar closure. If spontaneous breathing resumes -> Tag RED (Immediate). If the child remains apneic after 5 rescue breaths -> Tag BLACK (Expectant).",
    studyTip: "JumpSTART Pediatric Triage Differences vs. Adult START:\n1. Respiratory rate normal range is 15 to 45 breaths/min (< 15 or > 45 = RED).\n2. Apneic child WITH a pulse gets 5 Rescue Breaths! (Still apneic after 5 breaths = BLACK; starts breathing = RED).\n3. Mental status uses AVPU (inappropriate painful posturing or unresponsive = RED)."
  },
  {
    id: "OPS-012",
    source: "Gemini",
    domain: "EMS Operations",
    subtopic: "Ambulance Operations & Safety",
    patientType: "Operations",
    difficulty: 3,
    irtB: 1.0,
    stem: "You are driving an ambulance emergently (with warning lights and siren activated) transporting a critical trauma patient on a two-lane undivided road. Ahead of you, a school bus has stopped in the opposite lane with its alternating red lights flashing and its mechanical 'STOP' arm extended to unload children. What are you legally and safely required to do?",
    options: [
      "Maintain speed, switch the siren to 'phaser' mode, and pass the school bus on the left shoulder",
      "Slow down to 15 mph and drive past the school bus while sounding the air horn",
      "Come to a complete stop before reaching the school bus, turn off or silence the siren as appropriate, and wait until the bus retracts its stop arm, turns off its flashing red lights, and signals that it is safe to proceed",
      "Drive onto the right sidewalk to bypass the stopped school bus"
    ],
    correctIndex: 2,
    explanation: "Emergency vehicle exemptions ('due regard' laws) NEVER permit an ambulance—even when operating with lights and siren during an emergency—to pass a stopped school bus that has its alternating red lights flashing and stop arm extended on an undivided roadway. Unloading children are unpredictable and may dart across the road toward the ambulance lights. You must come to a complete stop and wait until all children are clear and the bus driver turns off the flashing red lights (or waves you through after securing the children).",
    studyTip: "Emergency Vehicle 'Due Regard' Rule: An ambulance running lights and siren MUST still come to a complete stop for a stopped school bus displaying flashing red lights!"
  },
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
  },
  {
    id: "OPS-025",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Operations",
    difficulty: 1,
    irtB: -1.1,
    stem: "A 45-year-old alert, oriented woman with a cut on her arm says, 'Yes, please take care of it,' when you ask whether you may bandage the wound. What type of consent has she given?",
    options: [
      "Implied (emergency) consent",
      "Involuntary (legal) consent",
      "Expressed consent",
      "Minor's (parental) consent"
    ],
    correctIndex: 2,
    explanation: "Expressed consent is given when a competent adult, after being told about the proposed care and its risks, verbally agrees or clearly indicates agreement (for example, by nodding or holding out her arm). It must be obtained from every alert, competent adult before treatment. Implied consent applies to unresponsive patients or those unable to consent in a life-threatening emergency. Involuntary consent applies to patients treated under legal orders, such as a court order or protective custody.",
    studyTip: "Expressed = competent adult agrees after being informed. Implied = unresponsive/incapacitated in an emergency. Involuntary = court-ordered or protective custody."
  },
  {
    id: "OPS-026",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Communications & Documentation",
    patientType: "Operations",
    difficulty: 1,
    irtB: -1.0,
    stem: "A physician at medical control orders you by radio to assist your patient with one dose of his prescribed nitroglycerin. What should you do immediately after receiving the order?",
    options: [
      "Repeat the order back to the physician word for word to confirm it",
      "Give the medication right away without responding",
      "Wait until you arrive at the hospital to confirm the order",
      "Ask your partner whether the order sounds correct"
    ],
    correctIndex: 0,
    explanation: "Repeating a medical order back word for word (the 'echo' technique) confirms that you heard it correctly and gives the physician a chance to correct any error before the medication is given. If an order is unclear or seems inappropriate, ask for clarification. Document the order, the name of the physician, and the time. Giving a medication before confirming the order risks a dangerous error.",
    studyTip: "Medical control orders: echo them back word for word, question unclear or inappropriate orders, and document who ordered what and when."
  },
  {
    id: "OPS-027",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Ambulance Operations & Safety",
    patientType: "Operations",
    difficulty: 1,
    irtB: -0.9,
    stem: "You are responding to a two-vehicle crash on a busy highway at night. Which action MOST improves your personal safety when you step out of the ambulance onto the roadway?",
    options: [
      "Turning off all emergency lights so other drivers are not distracted",
      "Wearing a high-visibility, reflective safety vest",
      "Walking along the traffic side of the ambulance to reach the patients faster",
      "Parking the ambulance on the far side of the crash where traffic is moving"
    ],
    correctIndex: 1,
    explanation: "Being struck by a vehicle is a leading cause of death for responders at roadway incidents. Wearing a high-visibility reflective vest (meeting ANSI standards) helps drivers see you, especially at night. Keep emergency lights on as protocol directs, use fire apparatus or other vehicles to block traffic, park in a protected position, and work on the side of the ambulance away from traffic whenever possible.",
    studyTip: "Roadway safety: high-visibility vest, use blocking vehicles, work on the non-traffic side, and never turn your back to traffic."
  },
  {
    id: "OPS-028",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Ambulance Operations & Safety",
    patientType: "Operations",
    difficulty: 1,
    irtB: -1.2,
    stem: "In which situation should you perform an emergency move of a patient BEFORE completing your initial assessment and spinal precautions?",
    options: [
      "The patient is lying on a cold kitchen floor and says she is uncomfortable",
      "The family asks you to move the patient from the floor to the couch",
      "The patient is in a small bathroom where you have limited room to work",
      "The patient is in a car with flames spreading toward the passenger area"
    ],
    correctIndex: 3,
    explanation: "An emergency move is used when there is an immediate danger to the patient or rescuers—such as fire, explosion risk, an unstable structure, or uncontrolled traffic—or when the patient must be moved to provide life-saving care (for example, moving a patient in cardiac arrest from a chair to the floor for CPR). Emergency moves, such as clothes drags or blanket drags, sacrifice spinal precautions to save a life, so pull along the long axis of the body when possible. Discomfort and limited space call for urgent or non-urgent moves.",
    studyTip: "Emergency move = immediate danger or need for life-saving care. Pull along the long axis of the body (clothes drag, blanket drag, shoulder drag)."
  },
  {
    id: "OPS-029",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Operations",
    difficulty: 2,
    irtB: 0.0,
    stem: "You are treating an 86-year-old woman with dementia who lives with her son. She has bruises in different stages of healing on her upper arms, is underweight, and is wearing soiled clothing. Her son gives a vague explanation and seems annoyed by your questions. What is your MOST appropriate action?",
    options: [
      "Confront the son about the bruises and ask him directly whether he hurt her",
      "Treat her, document your findings objectively, and report as the law requires",
      "Ignore your concerns, because a patient with dementia may simply have fallen",
      "Photograph the son and the home so you can attach them to the police report"
    ],
    correctIndex: 1,
    explanation: "Bruises in different stages of healing, signs of neglect (poor hygiene, malnutrition), and a caregiver who gives vague explanations are red flags for elder abuse or neglect. EMTs are mandated reporters in most states. Treat the patient, avoid confrontation (which can increase the patient's risk and threaten your safety), document exactly what you saw and heard using quotes, report to the receiving facility, and file a report with adult protective services or law enforcement according to state law.",
    studyTip: "Suspected abuse (child or elder): treat, document objectively (quotes, observations), do not confront, and report per state law—you are usually a mandated reporter."
  },
  {
    id: "OPS-030",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "HazMat & Scene Safety",
    patientType: "Operations",
    difficulty: 2,
    irtB: 0.2,
    stem: "You arrive at a rollover crash involving a tanker truck. From a safe distance upwind, you see a diamond-shaped placard with the number 1203 on the tank. Which resource should you use to identify the substance and determine initial safe isolation distances?",
    options: [
      "Your service's drug reference guide",
      "The truck driver's cell phone",
      "The Emergency Response Guidebook (ERG)",
      "The local poison control center's website"
    ],
    correctIndex: 2,
    explanation: "The Emergency Response Guidebook (ERG), published by the U.S. Department of Transportation, lets responders look up the four-digit UN/NA identification number on a placard to identify the material, its hazards, recommended protective actions, and initial isolation and evacuation distances. (Number 1203 is gasoline.) Every ambulance should carry a copy or the app. Stay upwind and uphill, and request a hazmat team.",
    studyTip: "Hazmat: identify from a distance with binoculars, look up the placard number in the ERG (orange guide pages give protective actions), stay upwind and uphill."
  },
  {
    id: "OPS-031",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Communications & Documentation",
    patientType: "Operations",
    difficulty: 2,
    irtB: 0.1,
    stem: "You are writing the narrative section of a patient care report. Which statement is an example of SUBJECTIVE information?",
    options: [
      "BP 142/88 mmHg, HR 96 and regular, RR 18 and unlabored",
      "Patient states, 'My chest feels heavy and tight.'",
      "Skin is pale, cool, and diaphoretic, with delayed capillary refill",
      "Lung sounds are clear and equal bilaterally in all fields"
    ],
    correctIndex: 1,
    explanation: "Subjective information is what the patient (or family or bystanders) tells you—symptoms, feelings, and history that you cannot measure or observe directly. Quoting the patient's own words is the best way to document it. Objective information is what you can see, hear, feel, or measure, such as vital signs, skin signs, and lung sounds. A good report clearly separates the two and avoids opinions or conclusions such as 'patient was drunk.'",
    studyTip: "Subjective = what the patient says (symptoms; use quotes). Objective = what you observe or measure (signs, vitals). Document facts, not opinions."
  },
  {
    id: "OPS-032",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Triage & Mass Casualty (MCI)",
    patientType: "Operations",
    difficulty: 2,
    irtB: 0.3,
    stem: "You are assigned as the triage officer at a bus crash with 30 patients. While triaging, you come across a patient with severe bleeding from a leg wound. What care should you provide before moving to the next patient?",
    options: [
      "Quickly control the bleeding, such as with a tourniquet, then tag and move on",
      "Stay with the patient and provide complete care until the patient is transported",
      "Splint all of the patient's injuries and obtain a full set of baseline vital signs",
      "Skip this patient entirely, because triage officers never provide any care"
    ],
    correctIndex: 0,
    explanation: "In a mass-casualty incident, the triage officer's job is to quickly sort every patient so resources go where they will do the most good. Only rapid life-saving interventions are performed during triage—opening the airway, controlling severe bleeding (such as with a tourniquet), and, in some systems, auto-injector antidotes—before tagging the patient and moving on. Detailed assessment and treatment happen later in the treatment area.",
    studyTip: "MCI triage: limit care to life-saving interventions (open airway, control major bleeding, antidotes), tag, and move on. Treatment happens in the treatment area."
  },
  {
    id: "OPS-033",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Ambulance Operations & Air Medical",
    patientType: "Operations",
    difficulty: 2,
    irtB: -0.2,
    stem: "A medical helicopter has landed on a flat field to pick up your patient, and the rotors are still turning. The flight crew signals you to bring the patient to the aircraft. How should you approach?",
    options: [
      "From the rear of the aircraft, where you are away from the main rotor",
      "From the uphill side if the ground slopes, holding equipment up high",
      "From any direction, as long as you move quickly and stay low",
      "From the front or side, in the pilot's view, once the crew signals"
    ],
    correctIndex: 3,
    explanation: "Approach a helicopter only when the flight crew or pilot signals you, and approach from the front or side, staying within the pilot's field of view. Crouch as you approach, and never walk near the tail rotor, which spins fast enough to be nearly invisible. On sloped ground, approach from the downhill side, because the main rotor dips closer to the ground on the uphill side. Keep equipment low and secure loose items that could blow into the rotors.",
    studyTip: "Helicopter safety: approach only when signaled, from the front/side in view of the pilot, crouched, from the downhill side. Never near the tail rotor."
  },
  {
    id: "OPS-034",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Operations",
    difficulty: 3,
    irtB: 0.8,
    stem: "You are treating a 70-year-old man with chest pain whose BP is 86/54 mmHg. When you call medical control, the physician orders you to assist him with his nitroglycerin. What is the MOST appropriate response?",
    options: [
      "Give the nitroglycerin, because a physician ordered it and you are protected from liability",
      "Refuse to speak with the physician and transport without further contact",
      "Politely question the order, restate the patient's blood pressure, and ask the physician to confirm it",
      "Give half the dose as a compromise"
    ],
    correctIndex: 2,
    explanation: "Nitroglycerin is contraindicated in a patient with a systolic BP below about 90–100 mmHg because it can cause severe hypotension. If you receive an order that seems inappropriate, you have a responsibility to question it: politely repeat the key findings (the low blood pressure) and ask the physician to confirm or clarify the order. The physician may not have heard the vital signs correctly. Following an order you know is harmful does not protect you, and changing the dose on your own is outside your scope.",
    studyTip: "If a medical order seems inappropriate, question it respectfully and restate the key findings. If it is still unsafe, do not carry it out, and document the conversation."
  },
  {
    id: "OPS-035",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "Medical-Legal & Ethical Issues",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 1.0,
    stem: "A 16-year-old girl who is married and has her own child at home was in a minor car crash. She has a painful wrist and asks you to splint it and take her to the hospital. Her parents cannot be reached. Which statement about consent is MOST accurate?",
    options: [
      "She may be considered an emancipated minor and can give her own consent for care",
      "You cannot treat her until a parent is reached, unless her condition is life-threatening",
      "Only her husband can give consent for her treatment",
      "You must contact law enforcement to give consent"
    ],
    correctIndex: 0,
    explanation: "Minors generally need a parent or guardian to consent to treatment, except in emergencies (implied consent). However, emancipated minors may consent to their own care. Although laws vary by state, minors who are married, pregnant, already parents, in the military, or legally emancipated by a court are usually considered emancipated. She can therefore consent to her own treatment and transport—and also refuse it. Follow your state's laws and local protocols.",
    studyTip: "Emancipated minors (married, parents, pregnant, military, or court-emancipated, depending on state law) may consent to and refuse their own care."
  },
  {
    id: "OPS-036",
    source: "Claude",
    domain: "EMS Operations",
    subtopic: "HazMat & Scene Safety",
    patientType: "Operations",
    difficulty: 3,
    irtB: 1.2,
    stem: "A construction worker is trapped up to his chest in a trench collapse about 8 feet deep. He is conscious, yelling for help, and having trouble breathing. Coworkers are trying to dig him out with shovels. What should you do?",
    options: [
      "Climb into the trench to give him oxygen and help the coworkers dig",
      "Lower the ambulance stretcher into the trench and pull him out quickly",
      "Stay out, move everyone back from the edge, and call technical rescue",
      "Park the ambulance at the edge of the trench so equipment is close by"
    ],
    correctIndex: 2,
    explanation: "Trench collapses are extremely dangerous because a second collapse often follows, burying rescuers. Soil weighs more than 100 pounds per cubic foot, and vibration or weight near the edge—from people, vehicles, or equipment—can trigger another collapse. Do not enter an unshored trench. Keep everyone back from the edge, shut down nearby heavy equipment and traffic, request a technical rescue team, and prepare to treat the patient (including for crush injuries) once he is safely removed.",
    studyTip: "Trench or confined space: never enter without proper training, shoring, and equipment. Secure the perimeter, eliminate vibration, and call technical rescue."
  }
);
