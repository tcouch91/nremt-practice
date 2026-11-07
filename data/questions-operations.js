// NREMT EMT Cognitive Exam Practice Question Bank
// Domain 5: EMS Operations (12 Questions)
// Difficulty Tiers: 1 = Easy, 2 = Medium, 3 = Hard

window.NREMT_QUESTIONS = window.NREMT_QUESTIONS || [];

window.NREMT_QUESTIONS.push(
  {
    id: "OPS-001",
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
    domain: "EMS Operations",
    subtopic: "Triage & Mass Casualty (MCI)",
    patientType: "Operations",
    difficulty: 2,
    irtB: 0.1,
    stem: "During a mass casualty incident (MCI) using START triage, you approach an unresponsive adult female who is not breathing. What is the ONLY intervention you should perform before deciding whether to tag her Black (Deceased) or Red (Immediate)?",
    options: [
      "Perform 2 minutes of high-quality CPR and apply an AED",
      "Manually open her airway (and insert an OPA if available); if she remains apneic, tag her Black (Deceased)",
      "Deliver 5 rescue breaths with a bag-valve mask and check a carotid pulse for 30 seconds",
      "Check her blood pressure and pupil reactivity"
    ],
    correctIndex: 1,
    explanation: "In adult START triage, if a patient is apneic, you immediately reposition/open the airway once. If the patient begins breathing after the airway is opened, tag them Red (Immediate). If the patient remains apneic after opening the airway, tag them Black (Deceased/Expectant) and move to the next patient. Performing CPR during an MCI consumes rescuers and resources needed to save dozens of salvageable Red patients. (Note: In pediatric JumpSTART triage, an apneic child WITH a pulse receives 5 rescue breaths before being tagged Black if still apneic).",
    studyTip: "MCI Triage Apnea Rule:\n• Adult (START): Open airway -> Still apneic = BLACK.\n• Pediatric (JumpSTART, ages 1–8): Open airway -> Still apneic -> Check pulse -> If pulse present, give 5 rescue breaths -> Still apneic = BLACK (if breathing resumes = RED)."
  },
  {
    id: "OPS-007",
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
    explanation: "Abandonment is the unilateral termination of the EMT-patient relationship once care has been initiated, without obtaining a valid patient refusal or transferring care to an healthcare professional of equal or higher training/licensure. Simply wheeling a patient into an ED hallway without a formal face-to-face transfer of care and report to an RN/MD constitutes patient abandonment.",
    studyTip: "Abandonment = Stopping care or leaving a patient without transferring care to an equal or higher medical authority (e.g., an ALS paramedic handing off a patient needing ALS care to a BLS EMT, or leaving a patient at the ED without a formal nurse/physician handoff)."
  },
  {
    id: "OPS-009",
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
    domain: "EMS Operations",
    subtopic: "Ambulance Operations & Safety",
    patientType: "Operations",
    difficulty: 3,
    irtB: 1.0,
    stem: "You are driving an ambulance emergently (with warning lights and siren activated) transporting a critical trauma patient on a two-lane undivided road. Ahead of you, a school bus has stopped in the opposite lane with its alternating red lights flashing and its mechanical ''STOP'' arm extended to unload children. What are you legally and safely required to do?",
    options: [
      "Maintain speed, switch the siren to ''phaser'' mode, and pass the school bus on the left shoulder",
      "Slow down to 15 mph and drive past the school bus while sounding the air horn",
      "Come to a complete stop before reaching the school bus, turn off or silence the siren as appropriate, and wait until the bus retracts its stop arm, turns off its flashing red lights, and signals that it is safe to proceed",
      "Drive onto the right sidewalk to bypass the stopped school bus"
    ],
    correctIndex: 2,
    explanation: "Emergency vehicle exemptions ('due regard' laws) NEVER permit an ambulance—even when operating with lights and siren during an emergency—to pass a stopped school bus that has its alternating red lights flashing and stop arm extended on an undivided roadway. Unloading children are unpredictable and may dart across the road toward the ambulance lights. You must come to a complete stop and wait until all children are clear and the bus driver turns off the flashing red lights (or waves you through after securing the children).",
    studyTip: "Emergency Vehicle 'Due Regard' Rule: An ambulance running lights and siren MUST still come to a complete stop for a stopped school bus displaying flashing red lights!"
  }
);
