// NREMT EMT Cognitive Exam Practice Question Bank
// Domain 3: Trauma (53 Questions: TRAU-001 to TRAU-053)
// Difficulty Tiers: 1 = Easy, 2 = Medium, 3 = Hard
// Scope: EMT (2019 National EMS Scope of Practice Model / National EMS Education Standards).
// Authorship is tracked per question by the `source` field ("Gemini" or "Claude").

window.NREMT_QUESTIONS = window.NREMT_QUESTIONS || [];

window.NREMT_QUESTIONS.push(
  {
    id: "TRAU-001",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Bleeding & Shock",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.0,
    stem: "A 31-year-old construction worker accidentally severed his right forearm with a circular saw. Bright red blood is spurting forcefully from the wound. Direct pressure with a sterile trauma dressing fails to control the hemorrhage. What should you do NEXT?",
    options: [
      "Elevate the right arm above the level of the heart and apply an ice pack",
      "Apply an arterial tourniquet proximal to the wound and tighten it until the bright red bleeding stops",
      "Apply digital pressure to the brachial artery for 10 minutes before considering a tourniquet",
      "Wrap an elastic bandage loosely over the blood-soaked dressing and check a blood pressure"
    ],
    correctIndex: 1,
    explanation: "Life-threatening extremity arterial hemorrhage (bright red spurting blood) that is not immediately controlled by direct pressure requires immediate application of a commercial windlass tourniquet placed 2 to 3 inches proximal to the wound (never over a joint). Tighten the tourniquet until hemorrhage stops and the distal pulse is eliminated, and note the time of application.",
    studyTip: "Extremity hemorrhage control sequence: Direct Pressure -> Commercial Tourniquet (2–3 inches proximal to wound, never over a joint). Do NOT waste time with elevation or pressure points!"
  },
  {
    id: "TRAU-002",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Chest & Abdominal Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.9,
    stem: "You are treating a 26-year-old male who was stabbed in the right anterior chest. You observe a bubbling, sucking wound at the fourth intercostal space that makes a hissing sound each time the patient inhales. What is your MOST immediate intervention for this wound?",
    options: [
      "Pack the chest cavity tightly with hemostatic gauze",
      "Apply an occlusive (vented or three-sided) dressing over the wound",
      "Stabilize the chest wall by taping a bulky sandbag over the wound",
      "Leave the wound uncovered so air does not become trapped inside the chest"
    ],
    correctIndex: 1,
    explanation: "A sucking chest wound represents an open pneumothorax, where air enters the pleural space through the chest wall defect during inspiration because the defect offers less resistance than the trachea. Immediately seal the wound (with a gloved hand first, then a commercial vented chest seal or a three-sided occlusive dressing taped on three sides) to prevent air from entering the chest while allowing trapped air to escape.",
    studyTip: "Open Pneumothorax (sucking chest wound): Seal immediately with a vented chest seal or 3-sided occlusive dressing. If the patient subsequently develops a tension pneumothorax, burp/lift one corner of the dressing to release trapped air."
  },
  {
    id: "TRAU-003",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Chest & Abdominal Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.8,
    stem: "Following an assault with a knife, a 34-year-old male has a large abdominal laceration with several loops of small bowel protruding through the abdominal wall (evisceration). How should you manage the exposed organs?",
    options: [
      "Gently push the protruding bowel loops back into the abdominal cavity and tape the wound shut",
      "Cover the exposed bowel with a sterile trauma dressing moistened with sterile saline, then cover with a dry occlusive dressing to retain warmth",
      "Pack the abdominal wound with dry hemostatic gauze and apply firm direct pressure",
      "Pour hydrogen peroxide over the exposed organs to prevent peritonitis"
    ],
    correctIndex: 1,
    explanation: "Never attempt to push eviscerated abdominal organs back into the peritoneal cavity, and never apply dry gauze directly onto exposed bowel (which adheres to and damages the tissue). Cover the exposed organs with a sterile dressing moistened with sterile normal saline, place a dry occlusive dressing over top to prevent evaporative heat loss and contamination, and flex the patient's knees slightly if no spinal injury is suspected to reduce abdominal wall tension.",
    studyTip: "Abdominal Evisceration: Never push organs back in! Cover with sterile saline-moistened dressing + occlusive cover to retain heat and moisture."
  },
  {
    id: "TRAU-004",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.7,
    stem: "A 42-year-old male spilled dry powdered lime onto his bare right forearm at an industrial plant. After ensuring scene safety and donning appropriate PPE, what is the FIRST step in decontaminating his chemical burn?",
    options: [
      "Immediately flush the arm with copious amounts of water from a high-pressure hose",
      "Apply a neutralizing acid solution to counteract the alkaline lime",
      "Brush off the dry chemical powder completely before flushing the area with copious amounts of water",
      "Wrap the forearm in a sterile dry dressing and transport without using water"
    ],
    correctIndex: 2,
    explanation: "When dealing with a dry powdered chemical (especially dry lime, which reacts exothermically with water to produce corrosive heat), you must FIRST brush off all loose dry powder from the skin and remove contaminated clothing before irrigating the area with copious amounts of flowing water for at least 20 minutes.",
    studyTip: "Dry chemical burns: Brush off dry powder FIRST, then flush with copious flowing water. Never attempt to neutralize an acid or alkali on the skin (causes a thermal exothermic reaction)."
  },
  {
    id: "TRAU-005",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.6,
    stem: "A carpenter has a 4-inch steel nail impaled through his left cheek, and the tip of the nail is protruding into his oral cavity and causing significant bleeding that compromises his airway. What should you do?",
    options: [
      "Stabilize the nail in place with bulky dressings under all circumstances",
      "Carefully remove the impaled object from the cheek so you can control bleeding and manage the airway",
      "Push the nail all the way through the mouth to extract it from the inside",
      "Insert an oropharyngeal airway alongside the nail without touching the cheek"
    ],
    correctIndex: 1,
    explanation: "Although impaled objects are almost always stabilized in place, there are two classic exceptions: (1) an object impaled in the cheek/airway that obstructs the airway or prevents airway/bleeding control, and (2) an object impaled in the chest that directly interferes with CPR in a patient in cardiac arrest. For a cheek impalement with airway compromise, carefully remove the object (pulling it out in the direction it entered) and pack both the inside and outside of the cheek to control bleeding.",
    studyTip: "Impaled objects: Stabilize in place EXCEPT when the object obstructs the airway (e.g., through-and-through cheek impalement with airway compromise) or prevents chest compressions during cardiac arrest."
  },
  {
    id: "TRAU-006",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Bleeding & Shock",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.2,
    stem: "You are assessing a 28-year-old female involved in a high-speed motor vehicle collision. She is anxious and restless, with pale, cool, clammy skin. Her vital signs are BP 114/82 mmHg, HR 118 beats/min, RR 24 breaths/min, and SpO2 95%. Which stage of shock is this patient currently exhibiting?",
    options: [
      "Compensated shock",
      "Decompensated shock",
      "Irreversible shock",
      "Neurogenic shock"
    ],
    correctIndex: 0,
    explanation: "In compensated shock, sympathetic nervous system activation (catecholamine release) causes tachycardia, tachypnea, peripheral vasoconstriction (pale, cool, clammy skin, narrowed pulse pressure), and anxiety/restlessness, successfully maintaining a normal systolic blood pressure (BP 114/82 mmHg). Once systolic blood pressure drops (< 90 mmHg in adults), the patient has entered decompensated shock.",
    studyTip: "Compensated Shock = Tachycardia + Pale/Cool/Clammy skin + Restlessness/Anxiety + Narrowing pulse pressure, with NORMAL Blood Pressure. Decompensated Shock = Hypotension (SBP < 90 mmHg) + Altered Mental Status."
  },
  {
    id: "TRAU-007",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "You are evaluating a 45-year-old male who fell 15 feet from a ladder onto concrete. Upon assessment, he opens his eyes only when you apply a trapezius pinch, makes incomprehensible moaning sounds, and withdraws his arm from painful stimuli. What is his Glasgow Coma Scale (GCS) score?",
    options: [
      "GCS 6 (E2, V2, M2)",
      "GCS 8 (E2, V2, M4)",
      "GCS 9 (E3, V2, M4)",
      "GCS 10 (E2, V3, M5)"
    ],
    correctIndex: 1,
    explanation: "Calculate the Glasgow Coma Scale by summing the three components:\n• Eye Opening (E): Opens eyes to pain = 2 (Spontaneous=4, Verbal=3, Pain=2, None=1)\n• Verbal Response (V): Incomprehensible sounds/moaning = 2 (Oriented=5, Confused=4, Inappropriate words=3, Incomprehensible sounds=2, None=1)\n• Motor Response (M): Withdraws from pain = 4 (Obeys commands=6, Localizes pain=5, Withdraws from pain=4, Abnormal flexion/decorticate=3, Abnormal extension/decerebrate=2, None=1)\nTotal GCS = 2 + 2 + 4 = 8 (indicating a severe traumatic brain injury).",
    studyTip: "GCS Breakdown: Eyes (4-1), Verbal (5-1), Motor (6-1). Motor scores: 6=Obeys, 5=Localizes, 4=Withdraws, 3=Decorticate (flexion), 2=Decerebrate (extension), 1=None. GCS <= 8 = Severe TBI."
  },
  {
    id: "TRAU-008",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "A 38-year-old male was caught in a garage fire and sustained partial- and full-thickness burns to his entire anterior chest and abdomen, the entire circumference of his right arm, and the anterior surface of his right leg. Using the adult Rule of Nines, what percentage of his total body surface area (TBSA) is burned?",
    options: [
      "27%",
      "36%",
      "45%",
      "54%"
    ],
    correctIndex: 1,
    explanation: "Using the adult Rule of Nines:\n• Entire anterior torso (chest + abdomen) = 18%\n• Entire right arm (anterior + posterior) = 9%\n• Anterior surface of the right leg (half of 18%) = 9%\nTotal TBSA burned = 18% + 9% + 9% = 36%.",
    studyTip: "Adult Rule of Nines: Head & Neck = 9%, Each Arm = 9% (4.5% front/back), Anterior Torso = 18%, Posterior Torso = 18%, Each Leg = 18% (9% front/back), Genitalia = 1%. (Infant: Head = 18%, Each Leg = 13.5%)."
  },
  {
    id: "TRAU-009",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Chest & Abdominal Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "An unrestrained driver struck the steering wheel at high speed. You observe that a large segment of his left lateral chest wall moves inward during inspiration and outward during expiration (paradoxical chest motion). His respiratory rate is 30 breaths/min and shallow, and his SpO2 is 86% on room air. What is the MOST effective treatment for this injury?",
    options: [
      "Wrap circumferential elastic tape tightly around the entire rib cage to immobilize the ribs",
      "Place a 10-pound sandbag directly on the flail segment",
      "Provide positive pressure ventilation with a bag-valve mask to act as an 'internal pneumatic splint' and improve tidal volume",
      "Perform immediate needle decompression on the right chest"
    ],
    correctIndex: 2,
    explanation: "Paradoxical chest wall movement indicates a flail chest (3 or more adjacent ribs fractured in 2 or more places) accompanied by underlying pulmonary contusion. When the patient exhibits inadequate ventilation and hypoxia (shallow RR of 30, SpO2 86%), positive pressure ventilation (BVM) provides 'internal pneumatic splinting' that expands the lungs and corrects hypoxia. Taping the chest or placing heavy sandbags restricts chest expansion and worsens respiratory failure.",
    studyTip: "Flail chest (paradoxical motion) causes severe pain, hypoventilation, and underlying pulmonary contusion. Do NOT tape the chest or use sandbags; use positive pressure ventilation (BVM) for inadequate breathing!"
  },
  {
    id: "TRAU-010",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Chest & Abdominal Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "A 22-year-old female fell off a mountain bike, striking her left upper abdomen and lower ribs against the handlebars. She complains of left upper quadrant abdominal pain as well as sharp, aching pain in the tip of her left shoulder. Her heart rate is 114 beats/min and her skin is pale. What does the left shoulder pain represent?",
    options: [
      "An occult fracture of the left clavicle",
      "Kehr's sign—referred pain via the phrenic nerve caused by blood irritating the diaphragm from a ruptured spleen",
      "Acute myocardial ischemia triggered by trauma",
      "Cullen's sign from retroperitoneal hemorrhage"
    ],
    correctIndex: 1,
    explanation: "Left upper quadrant trauma with referred pain to the left shoulder is known as Kehr's sign. Free blood in the peritoneal cavity from a splenic laceration or rupture irritates the undersurface of the left hemidiaphragm; because the phrenic nerve (C3–C5) shares spinal cord segments with the supraclavicular nerves supplying the shoulder, the brain perceives diaphragmatic irritation as left shoulder pain.",
    studyTip: "Kehr's Sign = Left upper quadrant trauma (splenic rupture) causing referred pain to the LEFT shoulder via phrenic nerve irritation."
  },
  {
    id: "TRAU-011",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Musculoskeletal Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.1,
    stem: "Which of the following injuries is an appropriate indication for applying a mechanical traction splint?",
    options: [
      "An open fracture of the tibia and fibula with severe ankle deformity",
      "A suspected pelvic fracture with an externally rotated lower extremity",
      "An isolated, painful, swollen mid-shaft femur fracture with no hip, knee, pelvic, or lower leg injuries",
      "A dislocated knee with an absent dorsalis pedis pulse"
    ],
    correctIndex: 2,
    explanation: "A traction splint is indicated specifically for an isolated mid-shaft femur fracture, where contraction of the powerful quadriceps and hamstring muscles causes the bone ends to override, producing severe pain and up to 1–2 liters of internal blood loss into the thigh. Traction splints are contraindicated if there is a concomitant pelvic fracture, hip injury, knee injury, or tibia/fibula/ankle fracture on the same extremity.",
    studyTip: "Traction Splint Indication: Isolated mid-shaft femur fracture ONLY. Contraindications: Pelvic fracture, hip injury, knee injury, or lower leg/ankle fracture."
  },
  {
    id: "TRAU-012",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "You are assessing a 30-year-old male who was struck in the head with a baseball bat. He has bruising behind both ears over the mastoid processes, bilateral periorbital ecchymosis, and clear fluid mixed with blood draining from his right ear canal. How should you manage the drainage from his ear?",
    options: [
      "Pack the right ear canal tightly with sterile gauze sponges to stop the cerebrospinal fluid leak",
      "Cover the ear loosely with a sterile gauze pad to collect the drainage without obstructing flow",
      "Suction the ear canal with a rigid tonsil-tip catheter for 10 seconds",
      "Insert a nasopharyngeal airway to protect his airway during transport"
    ],
    correctIndex: 1,
    explanation: "Bruising over the mastoid process (Battle's sign), periorbital ecchymosis (raccoon eyes), and blood/cerebrospinal fluid (CSF) draining from the ears (otorrhea) or nose (rhinorrhea) indicate a basilar skull fracture. Never pack the ear or nose tightly to stop CSF drainage, as doing so increases intracranial pressure and risks ascending meningitis; instead, cover the area loosely with a sterile gauze pad. Also, never insert a nasopharyngeal airway (NPA) in suspected basilar skull fractures.",
    studyTip: "Basilar Skull Fracture signs: Raccoon eyes + Battle's sign + CSF otorrhea/rhinorrhea ('halo/target sign' on gauze). Cover CSF leaks loosely—NEVER pack the ear/nose, and NEVER insert an NPA!"
  },
  {
    id: "TRAU-013",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.7,
    stem: "You are caring for a 19-year-old male who suffered a severe closed head injury after falling from a skateboard without a helmet. He is unresponsive with abnormal extension posturing (decerebrate). You record the following vital signs: BP 196/94 mmHg, HR 46 beats/min, and RR 8 breaths/min with an irregular Cheyne-Stokes pattern. What pathophysiological process do these vital signs indicate?",
    options: [
      "Decompensated hemorrhagic shock from an occult intra-abdominal bleed",
      "Neurogenic shock from a complete cervical spinal cord transection",
      "Cushing's triad indicating critically increased intracranial pressure (ICP) and impending brainstem herniation",
      "Cardiogenic shock caused by a myocardial contusion"
    ],
    correctIndex: 2,
    explanation: "Cushing's triad consists of (1) severe hypertension with a widening pulse pressure, (2) reflex bradycardia, and (3) irregular or slow respirations (Cheyne-Stokes or biot respirations). It occurs when dangerously elevated intracranial pressure (ICP) compresses the cerebrum and brainstem; the body raises systemic arterial pressure to maintain cerebral perfusion pressure, which activates arterial baroreceptors and triggers vagal bradycardia.",
    studyTip: "Contrast Traumatic Shock vs. Cushing's Triad:\n• Hemorrhagic Shock = Hypotension (LOW BP) + Tachycardia (HIGH HR)\n• Cushing's Triad (Increased ICP) = Hypertension/Widening Pulse Pressure (HIGH BP) + Bradycardia (LOW HR) + Irregular Respirations."
  },
  {
    id: "TRAU-014",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Bleeding & Shock",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.9,
    stem: "A 25-year-old male dove into the shallow end of a swimming pool and struck his head on the bottom. He is rescued from the water alert and oriented, complaining that he cannot move or feel his arms or legs. His vital signs are BP 78/48 mmHg, HR 58 beats/min, and RR 16 breaths/min (diaphragmatic breathing). Below the level of his clavicles, his skin is warm, dry, and flushed. Why is this patient hypotensive without tachycardia or cool, clammy skin?",
    options: [
      "The pool water caused mild hypothermia that masks hemorrhagic shock",
      "Spinal cord injury interrupted sympathetic nervous system outflow, causing unopposed vagal tone (bradycardia) and massive peripheral vasodilation (warm, dry skin and hypotension)—classic neurogenic shock",
      "He has a ruptured spleen with internal hemorrhage that has not yet triggered epinephrine release",
      "He is experiencing Cushing's reflex from an epidural hematoma"
    ],
    correctIndex: 1,
    explanation: "Neurogenic shock (a form of distributive shock) occurs after a high cervical or upper thoracic spinal cord injury disrupts the descending sympathetic nervous system pathways. Without sympathetic tone, blood vessels below the level of injury lose their vasoconstrictive tone and dilate widely, causing blood to pool peripherally (hypotension with warm, dry, pink/flushed skin) and preventing the heart from mounting a tachycardic response (normal or slow heart rate due to unopposed parasympathetic vagus nerve tone).",
    studyTip: "Neurogenic Shock vs. Hypovolemic Shock:\n• Hypovolemic = Hypotension + Tachycardia + Cool, Pale, Clammy skin.\n• Neurogenic = Hypotension + Bradycardia/Normal HR + Warm, Dry, Flushed skin below spinal injury."
  },
  {
    id: "TRAU-015",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Chest & Abdominal Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.1,
    stem: "Compare two patients who were both stabbed in the chest 15 minutes ago. Both present with severe hypotension (BP 76/58 mmHg), tachycardia (HR 132 beats/min), and prominent jugular venous distension (JVD).\n• Patient 1 has absent breath sounds on the left side and hyperresonance to percussion.\n• Patient 2 has clear and equal breath sounds bilaterally, distant/muffled heart tones, and a narrowing pulse pressure.\nWhat are the respective diagnoses for Patient 1 and Patient 2?",
    options: [
      "Patient 1: Cardiac tamponade; Patient 2: Tension pneumothorax",
      "Patient 1: Tension pneumothorax; Patient 2: Cardiac tamponade",
      "Patient 1: Simple hemothorax; Patient 2: Flail chest",
      "Patient 1: Pulmonary embolism; Patient 2: Neurogenic shock"
    ],
    correctIndex: 1,
    explanation: "Both tension pneumothorax and cardiac tamponade cause obstructive shock with hypotension and JVD (because blood cannot return to the right heart). The key differentiator on the NREMT is lung sounds:\n• Tension Pneumothorax (Patient 1): Unilateral absent/diminished breath sounds, hyperresonance, and late tracheal deviation.\n• Cardiac Tamponade (Patient 2): Equal and clear bilateral breath sounds + Beck's Triad (JVD, muffled/distant heart sounds, and hypotension with narrowing pulse pressure).",
    studyTip: "Obstructive Shock Differentiator (both have Hypotension + JVD):\n• Absent unilateral breath sounds = Tension Pneumothorax.\n• Equal breath sounds + muffled heart tones + narrowing pulse pressure = Cardiac Tamponade (Beck's Triad)."
  },
  {
    id: "TRAU-016",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.8,
    stem: "A 24-year-old male was struck in the right temple (temporal bone) by a line-drive baseball. He was knocked unconscious for 1 minute at the scene, then woke up alert, oriented, and insisted he felt fine. Twenty minutes later during transport, he rapidly becomes lethargic, develops a dilated, nonreactive right pupil, and becomes unresponsive with left-sided hemiparesis. Which intracranial hemorrhage matches this classic 'lucid interval' presentation?",
    options: [
      "Chronic venous subdural hematoma",
      "Acute epidural hematoma caused by laceration of the middle meningeal artery",
      "Transient ischemic attack (TIA)",
      "Simple cerebral concussion"
    ],
    correctIndex: 1,
    explanation: "An acute epidural hematoma typically results from blunt trauma to the temporal bone that lacerates the middle meningeal artery. It classically presents with brief initial loss of consciousness, followed by a 'lucid interval' where the patient wakes up and appears normal, followed by rapid neurological deterioration (ipsilateral blown pupil, contralateral hemiparesis, unresponsiveness) because high-pressure arterial bleeding rapidly expands between the skull and dura mater.",
    studyTip: "Epidural Hematoma = Temporal bone blow -> Middle Meningeal ARTERY bleed -> Brief LOC, 'Lucid Interval', then rapid decline with ipsilateral dilated pupil. Subdural Hematoma = Bridging VEINS bleed -> More gradual decline (common in elderly/alcoholics/shaken infants)."
  },
  {
    id: "TRAU-017",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Musculoskeletal Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.0,
    stem: "Six hours after his right lower leg was crushed beneath a fallen concrete beam, a 36-year-old male complains of excruciating, burning pain in his calf that is completely out of proportion to the visible injury and worsens dramatically when you passively stretch his toes. His calf is tense and rock-hard to palpation, and he reports numbness and tingling between his first and second toes. How should you manage this extremity?",
    options: [
      "Elevate the leg high above the level of the heart and pack it in ice to reduce swelling",
      "Apply a tight elastic compression wrap from the toes to the knee",
      "Keep the extremity at the level of the heart (neutral position), splint loosely without constriction, and transport urgently for surgical evaluation",
      "Apply an arterial tourniquet proximal to the knee to prevent toxin release"
    ],
    correctIndex: 2,
    explanation: "This patient has acute compartment syndrome, where bleeding and edema within the unyielding osteofascial compartment of the lower leg raise intracompartmental pressure above capillary perfusion pressure, causing muscle and nerve ischemia (the 6 Ps: Pain out of proportion/on passive stretch, Paresthesia, Pallor, Paralysis, Poikilothermia, Pulselessness [late sign]). Do NOT elevate the limb above the heart (lowers arterial inflow pressure) and do NOT apply ice (causes vasoconstriction); keep the limb neutral at heart level and transport urgently for surgical fasciotomy.",
    studyTip: "Compartment Syndrome: Earliest sign = Pain out of proportion to injury (especially with passive stretching) + Paresthesia. Keep limb neutral at heart level; NEVER ice or elevate!"
  },
  {
    id: "TRAU-018",
    source: "Gemini",
    reviewNote: "Revised by Claude: distractors were ALS-only procedures (needle decompression, IV fluids, pericardiocentesis), which made the answer obvious. Replaced with EMT-level distractors.",
    domain: "Trauma",
    subtopic: "Chest & Abdominal Trauma",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 1.2,
    stem: "A 13-year-old boy playing baseball was struck squarely in the center of the chest by a pitched baseball and collapsed instantaneously. Upon your arrival 3 minutes later, he is unresponsive, apneic, and pulseless. There is a small circular contusion over the sternum, but no rib instability or crepitus. What is the pathophysiology of his arrest, and what intervention offers the highest chance of survival?",
    options: [
      "Tension pneumothorax; seal the chest with an occlusive dressing and begin BVM ventilation",
      "Commotio cordis—blunt impact during the vulnerable repolarization phase (upstroke of the T-wave) inducing ventricular fibrillation; immediate CPR and AED defibrillation",
      "Aortic injury; withhold compressions to avoid worsening bleeding and transport rapidly",
      "Sternal fracture with cardiac contusion; ventilate only and avoid chest compressions"
    ],
    correctIndex: 1,
    explanation: "Commotio cordis occurs when a low-to-moderate energy blunt blow to the precordium (such as a baseball, hockey puck, or lacrosse ball in children/adolescents with compliant chest walls) strikes during a narrow 10- to 30-millisecond window on the upstroke of the T-wave (ventricular repolarization), immediately triggering ventricular fibrillation (V-Fib) without structural cardiac damage. Survival depends on immediate high-quality CPR and rapid AED defibrillation.",
    studyTip: "Commotio Cordis = Sudden blunt blow to the chest (baseball/puck) during the T-wave repolarization window -> Instantaneous V-Fib cardiac arrest. Treat with immediate CPR + AED defibrillation!"
  },
  {
    id: "TRAU-019",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.1,
    stem: "A patient has several scattered burns on his legs that are difficult to estimate with the Rule of Nines. Using the 'rule of palms,' approximately what percentage of body surface area does the patient's own palm (including fingers) represent?",
    options: [
      "About 1%",
      "About 5%",
      "About 9%",
      "About 18%"
    ],
    correctIndex: 0,
    explanation: "The patient's palm (including the fingers) represents roughly 1% of their total body surface area, regardless of age. This 'rule of palms' is useful for estimating small or scattered (irregular) burns. The Rule of Nines is better suited to large burns covering entire body regions.",
    studyTip: "Rule of palms: patient's palm ≈ 1% TBSA (any age). Use it for small or scattered burns; use the Rule of Nines for large areas."
  },
  {
    id: "TRAU-020",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.0,
    stem: "A cook spilled boiling water on her forearm. The skin is red, moist, and very painful, and several fluid-filled blisters have formed. How should you classify this burn?",
    options: [
      "Superficial (first-degree) burn",
      "Partial-thickness (second-degree) burn",
      "Full-thickness (third-degree) burn",
      "Subdermal (fourth-degree) burn"
    ],
    correctIndex: 1,
    explanation: "Partial-thickness (second-degree) burns involve the epidermis and part of the dermis. They are red, moist, intensely painful, and characterized by blisters. Superficial burns involve only the epidermis and are red and painful without blisters (like a sunburn). Full-thickness burns extend through the dermis and appear white, leathery, or charred, with little or no pain in the burned area because the nerve endings are destroyed.",
    studyTip: "Superficial = red, painful, no blisters. Partial-thickness = BLISTERS, red, moist, very painful. Full-thickness = white/leathery/charred, painless center."
  },
  {
    id: "TRAU-021",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Musculoskeletal Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.2,
    stem: "You are splinting a suspected closed fracture of the middle of a patient's forearm (radius and ulna). To properly immobilize this injury, the splint should immobilize which structures?",
    options: [
      "The fracture site only, so the patient can still bend the wrist and elbow",
      "The shoulder and the elbow, since the forearm hangs from the upper arm",
      "The wrist and the elbow, the joints above and below the injury",
      "The fingers and the wrist, since the hand moves the forearm bones"
    ],
    correctIndex: 2,
    explanation: "When splinting a long-bone fracture, immobilize the joint above and the joint below the injury so that the bone ends cannot move. For a mid-forearm fracture, that means the elbow and wrist. Assess pulse, motor function, and sensation (PMS) distal to the injury before and after splinting.",
    studyTip: "Long-bone fracture: immobilize the joint ABOVE and BELOW. Joint injury: immobilize the bone above and below. Check distal PMS before and after splinting."
  },
  {
    id: "TRAU-022",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.8,
    stem: "A factory worker's index finger was completely amputated by a machine. Bleeding from the hand is controlled. How should you care for the amputated finger?",
    options: [
      "Place it directly on ice in a cooler so the tissue freezes and is preserved",
      "Rinse it with hydrogen peroxide and let it air dry before transporting it",
      "Wrap it in a moist sterile dressing, seal it in a bag, and keep it cool",
      "Leave it at the scene, since reattachment is not attempted for fingers"
    ],
    correctIndex: 2,
    explanation: "Wrap the amputated part in a sterile dressing moistened with sterile saline (per local protocol), place it in a sealed plastic bag, and keep the bag cool by placing it on or in a container of ice or cold packs—never in direct contact with ice, which causes frostbite and tissue damage. Transport the part with the patient. Fingers are frequently reattached.",
    studyTip: "Amputated part: moist sterile dressing → sealed plastic bag → keep cool (NOT directly on ice, never frozen) → transport with the patient."
  },
  {
    id: "TRAU-023",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Bleeding & Shock",
    patientType: "Pediatric",
    difficulty: 1,
    irtB: -0.9,
    stem: "A 10-year-old boy was hit in the nose by a soccer ball and has a steady nosebleed. He is alert with no other injuries. How should you position him and control the bleeding?",
    options: [
      "Lay him flat on his back and pack both nostrils tightly with gauze",
      "Tilt his head back and apply an ice pack to the back of his neck",
      "Have him lie on his side and let the blood drain freely from his nose",
      "Have him sit, lean forward, and pinch the fleshy part of the nostrils"
    ],
    correctIndex: 3,
    explanation: "For epistaxis, have the patient sit and lean forward, then pinch the soft, fleshy part of the nostrils together firmly for several minutes. Leaning forward keeps blood from running down the throat, where it can be swallowed (causing vomiting) or aspirated. Tilting the head back or lying flat increases these risks. If there is a possible spinal injury, follow spinal precautions and be ready to suction.",
    studyTip: "Nosebleed: sit up, lean FORWARD, pinch the fleshy part of the nose. Never tilt the head back."
  },
  {
    id: "TRAU-024",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Trauma Triage & Assessment",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.1,
    stem: "According to the national field triage guidelines for injured patients, which of the following findings by itself indicates the need for transport to the highest-level trauma center available?",
    options: [
      "A stab wound to the abdomen in an alert patient with normal vital signs",
      "An isolated wrist deformity in a 40-year-old who tripped on a curb",
      "A 2-inch scalp laceration in a 25-year-old who is alert and oriented",
      "Neck soreness after a low-speed rear-end collision with normal vitals"
    ],
    correctIndex: 0,
    explanation: "Penetrating injury to the head, neck, torso, or proximal extremities is a high-risk ('red') injury pattern that warrants transport to the highest-level trauma center, even when the patient initially looks stable. Penetrating torso wounds can cause severe internal bleeding before vital signs change. Other red criteria include SBP < 90 mmHg (adult), inability to follow commands, abnormal respiratory rate or respiratory distress, chest wall instability, suspected pelvic fracture, two or more proximal long-bone fractures, amputation proximal to the wrist or ankle, and active bleeding requiring a tourniquet.",
    studyTip: "Field triage 'red' criteria include penetrating injury to the head/neck/torso/proximal extremities, SBP < 90, unable to follow commands, RR < 10 or > 29/respiratory distress, flail chest, pelvic fracture, and amputation above the wrist/ankle."
  },
  {
    id: "TRAU-025",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Musculoskeletal Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "A 33-year-old motorcyclist struck a guardrail. He has severe pelvic pain, his legs are unequal in length, and the pelvis shifts when you gently press on it once. His BP is 88/56 mmHg and HR is 128 beats/min. What is the MOST appropriate management of his pelvis?",
    options: [
      "Rock the pelvis repeatedly to confirm the fracture before splinting it",
      "Apply a traction splint to the shorter leg to realign the pelvic bones",
      "Apply a pelvic binder centered over the greater trochanters",
      "Elevate his legs 12 inches and keep his knees flexed during transport"
    ],
    correctIndex: 2,
    explanation: "An unstable pelvic fracture can cause massive internal bleeding into the pelvis and retroperitoneum. A pelvic binder (or sheet) wrapped snugly around the pelvis at the level of the greater trochanters reduces pelvic volume, stabilizes bone fragments, and helps control bleeding. Assess the pelvis only once with gentle pressure—repeated rocking can dislodge clots. Traction splints are contraindicated with pelvic fractures. Treat for shock and transport rapidly to a trauma center.",
    studyTip: "Unstable pelvis + shock: pelvic binder at the GREATER TROCHANTERS, assess the pelvis only once (no rocking), no traction splint, rapid transport."
  },
  {
    id: "TRAU-026",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "Which of the following patients MOST clearly requires spinal motion restriction?",
    options: [
      "An alert, sober 30-year-old who twisted an ankle stepping off a curb",
      "An alert, sober 25-year-old with no neck pain after a minor fender-bender",
      "An alert, sober 45-year-old with an isolated finger laceration from a knife",
      "An intoxicated 52-year-old with neck pain after falling down 8 stairs"
    ],
    correctIndex: 3,
    explanation: "Spinal motion restriction is indicated for patients with a concerning mechanism plus any of the following: midline spinal pain or tenderness, neurologic deficits, altered mental status, intoxication, a distracting injury, or inability to communicate reliably. This patient fell down stairs, is intoxicated (making the exam unreliable), and has neck pain. Alert, sober patients without spinal pain, tenderness, deficits, or distracting injuries generally do not need spinal motion restriction.",
    studyTip: "Spinal motion restriction indications: midline pain/tenderness, neuro deficit, altered mental status, intoxication, distracting injury, or unreliable exam after a concerning mechanism."
  },
  {
    id: "TRAU-027",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: 0.3,
    stem: "A 16-year-old football player is lying supine on the field after a hard tackle and complains of neck pain and tingling in his hands. He is breathing adequately and is wearing a well-fitting helmet and shoulder pads. How should you manage his airway access?",
    options: [
      "Remove the helmet immediately so you can assess the back of his head",
      "Leave the helmet on and remove the face mask to gain airway access",
      "Remove the shoulder pads first, then remove the helmet together with them",
      "Have him sit up and remove the helmet himself so the neck is not twisted"
    ],
    correctIndex: 1,
    explanation: "When a helmet fits well, the patient's airway is accessible, and he is breathing adequately, leave the helmet in place and remove the face mask (cut or unclip it) to provide airway access. The helmet and shoulder pads together keep the head and spine in neutral alignment; removing only one creates a gap that can flex or extend the neck. Remove the helmet only if it prevents airway management or adequate immobilization, or is loose, and then only with trained personnel, with the shoulder pads per protocol.",
    studyTip: "Athletic helmet + shoulder pads: leave both on and remove the face mask for airway access. Remove the helmet only if it blocks airway care or is loose."
  },
  {
    id: "TRAU-028",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "The power company confirms that a downed line has been de-energized. A 34-year-old lineman who contacted the line has a small charred wound on his right palm and another on his left heel. He is alert with normal vital signs. Which concern is MOST important?",
    options: [
      "Hidden internal tissue damage and cardiac dysrhythmias despite the small wounds",
      "Infection of the small entrance and exit wounds over the next several days",
      "Hypothermia from heat loss through the burned skin on the palm and heel",
      "Inhalation injury to the upper airway from smoke produced by the burns"
    ],
    correctIndex: 0,
    explanation: "Electrical current travels through the body between the entrance and exit wounds and can cause severe damage to muscles, nerves, blood vessels, and organs that is not visible on the skin. Current passing through the chest can cause dysrhythmias and cardiac arrest, even after a delay. Ensure scene safety first, then monitor closely, be prepared to use the AED, care for the wounds, and transport every electrical injury patient for evaluation.",
    studyTip: "Electrical burns: scene safety first. Small skin wounds can hide massive internal damage. Biggest early threat = cardiac dysrhythmia/arrest. Always transport."
  },
  {
    id: "TRAU-029",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "A metal fragment from a grinder has penetrated a worker's right eye and is still embedded in it. How should you manage this injury?",
    options: [
      "Carefully remove the fragment, then irrigate the eye with sterile saline",
      "Apply firm direct pressure over the eye to control any internal bleeding",
      "Stabilize the object with gauze and a protective cup, and cover both eyes",
      "Leave both eyes uncovered so the patient can keep watching his surroundings"
    ],
    correctIndex: 2,
    explanation: "Never remove an object impaled in the eye or apply pressure to the globe. Stabilize the object with rolled gauze or dressings and place a protective cup (or similar shield) over it without touching the object. Cover the uninjured eye as well, because the eyes move together (consensual movement); moving the uninjured eye would move the injured one too. Keep the patient calm, and transport with the head elevated.",
    studyTip: "Impaled object in the eye: stabilize + protective cup, cover BOTH eyes (they move together), no pressure on the globe, never remove it."
  },
  {
    id: "TRAU-030",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.4,
    stem: "A 79-year-old woman who takes warfarin (a blood thinner) tripped and struck her forehead on a table. She has a small hematoma, is alert and oriented, and has a GCS of 15 and normal vital signs. Why is she considered high risk despite her reassuring exam?",
    options: [
      "Elderly patients cannot feel pain, so a serious injury may go unnoticed",
      "Warfarin causes seizures in elderly patients after any minor head trauma",
      "Her normal vital signs indicate that she is already in decompensated shock",
      "Anticoagulants increase the risk of delayed bleeding inside the skull"
    ],
    correctIndex: 3,
    explanation: "Anticoagulants such as warfarin (and newer agents like apixaban or rivaroxaban) impair clotting, so even minor head trauma can cause intracranial bleeding that worsens gradually over hours. Older adults also have brain atrophy that stretches the bridging veins, making subdural hematomas more likely. These patients should be transported for evaluation even with a normal initial exam, and reassessed frequently for changes in mental status.",
    studyTip: "Older adult on anticoagulants + any head strike = high risk for delayed intracranial bleeding. Transport and reassess mental status frequently."
  },
  {
    id: "TRAU-031",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.8,
    stem: "Firefighters rescue a 44-year-old man from a burning apartment. He has burns to his face, singed nasal hairs, and soot around his mouth. His voice is becoming hoarse, and he has a brassy cough. He is alert, with RR 24 and SpO2 96%. What is the MOST important concern?",
    options: [
      "His SpO2 is reassuring, so his airway can be reassessed at the hospital",
      "Hoarseness is expected after a fire and will resolve once he is calmed",
      "Airway swelling from inhalation injury may cause sudden obstruction",
      "Cool the facial burns with ice for 20 minutes before any airway care"
    ],
    correctIndex: 2,
    explanation: "Facial burns, singed nasal hairs, soot in the mouth, hoarseness, stridor, and a brassy cough are signs of inhalation injury. Heat and toxic smoke cause airway swelling that can progress quickly to complete obstruction. Give high-flow oxygen (which also treats possible carbon monoxide poisoning—SpO2 may be falsely normal), monitor the airway continuously, request ALS early for advanced airway management, and transport rapidly. Never apply ice to burns.",
    studyTip: "Inhalation injury clues: facial burns, singed hair, soot, hoarseness, stridor, enclosed-space fire. Airway can close rapidly—high-flow O2, early ALS, rapid transport. SpO2 may be falsely normal (CO)."
  },
  {
    id: "TRAU-032",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Chest & Abdominal Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.0,
    stem: "You sealed a stab wound to a patient's left chest with an occlusive dressing taped on all four sides. Several minutes later, he becomes increasingly short of breath and anxious. Breath sounds are absent on the left, his neck veins are distended, and his BP is falling. What should you do FIRST?",
    options: [
      "Lift one corner of the dressing to let trapped air escape",
      "Apply a second occlusive dressing over the first one",
      "Place him supine and elevate his legs 12 inches",
      "Pack the wound tightly with gauze under the dressing"
    ],
    correctIndex: 0,
    explanation: "This patient is developing a tension pneumothorax: air is entering the pleural space but cannot escape, compressing the lung and eventually the heart and great vessels (absent breath sounds, JVD, hypotension, worsening distress). Briefly lift (burp) one corner of the occlusive dressing to release the trapped air, or replace it with a vented chest seal. Then provide high-flow oxygen or BVM ventilations as needed, request ALS for needle decompression, and transport rapidly.",
    studyTip: "Worsening distress + absent breath sounds + JVD + hypotension after sealing a chest wound = tension pneumothorax → BURP the dressing (lift one corner)."
  },
  {
    id: "TRAU-033",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Bleeding & Shock",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.1,
    stem: "An 80-year-old man fell down a flight of stairs. He has an obvious deformed femur fracture and pelvic pain. He is anxious and pale with cool, clammy skin, his HR is 74 beats/min, and his BP is 96/70 mmHg. His medications include metoprolol. How should you interpret his presentation?",
    options: [
      "His normal heart rate shows that he has not lost a significant amount of blood",
      "He is probably in shock; metoprolol can block the expected rise in heart rate",
      "His pale, cool skin is an expected side effect of metoprolol, not a sign of shock",
      "His blood pressure is normal for his age, so non-emergent transport is reasonable"
    ],
    correctIndex: 1,
    explanation: "Beta blockers such as metoprolol prevent the heart rate from rising in response to blood loss, so an older patient can be in significant shock with a 'normal' heart rate. Pale, cool, clammy skin, anxiety, a narrowed pulse pressure, and a mechanism with two major sources of blood loss (femur and pelvis) indicate shock. In addition, many older adults normally have higher blood pressures, so 96/70 may represent hypotension for him. Treat for shock and transport rapidly to a trauma center.",
    studyTip: "Beta blockers mask tachycardia in shock. Older patients may be in shock with a 'normal' HR and BP. Trust the skin signs, mental status, and mechanism."
  },
  {
    id: "TRAU-034",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Bleeding & Shock",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 0.9,
    stem: "A 4-year-old girl fell onto her bicycle handlebars 30 minutes ago. She is quiet and anxious, with pale, cool skin, a capillary refill of 4 seconds, HR 162 beats/min, RR 34 breaths/min, and BP 94/62 mmHg. Her abdomen is tender. What is the BEST interpretation?",
    options: [
      "She is stable, because her blood pressure is normal for a 4-year-old",
      "She is in irreversible shock, so resuscitation efforts are unlikely to help",
      "Her fast heart rate is from fear and pain and should not cause concern",
      "She is in compensated shock; her blood pressure will fall only late"
    ],
    correctIndex: 3,
    explanation: "Children compensate for blood loss very effectively by increasing their heart rate and constricting peripheral blood vessels, so blood pressure stays normal until about 25%–30% or more of their blood volume is lost. Tachycardia, delayed capillary refill, cool and pale skin, and anxiety are early signs of compensated shock. Hypotension in a child (below about 70 + [2 × age in years] mmHg systolic—78 mmHg for this child) is a late, ominous sign of decompensation. Treat for shock, keep her warm, and transport rapidly to a pediatric-capable trauma center.",
    studyTip: "Pediatric shock: tachycardia + delayed cap refill + cool skin come FIRST. Hypotension is LATE. Minimum SBP (1–10 yrs) ≈ 70 + (2 × age)."
  },
  {
    id: "TRAU-035",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Bleeding & Shock",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.2,
    stem: "You are the first to reach a 27-year-old man who crashed his motorcycle. Bright red blood is spurting from a deep wound on his upper thigh and pooling rapidly. He is unresponsive with snoring respirations. Your partner is still retrieving equipment. What should you do FIRST?",
    options: [
      "Open his airway with a jaw-thrust and hold it until your partner returns",
      "Apply a tourniquet high and tight on the thigh above the bleeding wound",
      "Check for a carotid pulse for up to 10 seconds before any intervention",
      "Apply a cervical collar, then begin assisting his ventilations with a BVM"
    ],
    correctIndex: 1,
    explanation: "Massive external hemorrhage can cause death within minutes, faster than a partially obstructed airway. Current trauma care places control of life-threatening external bleeding first ('X' in XABCDE) before airway and breathing. Apply a tourniquet high and tight on the thigh (or direct pressure if a tourniquet is not immediately available), then immediately open the airway with a jaw-thrust and manage breathing. With adequate help, these steps are performed simultaneously.",
    studyTip: "Trauma primary survey: X-A-B-C-D-E. Life-threatening eXternal hemorrhage first, then Airway, Breathing, Circulation. Spurting bleeding kills in minutes."
  },
  {
    id: "TRAU-036",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Musculoskeletal Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.1,
    stem: "You are about to splint a painful, deformed lower leg on a 35-year-old woman who fell while hiking. What should you assess both BEFORE and AFTER applying the splint?",
    options: [
      "Pulse, motor function, and sensation below the injury",
      "Blood pressure in both arms",
      "Range of motion by asking her to bend the knee and ankle",
      "Pupil size and reaction to light"
    ],
    correctIndex: 0,
    explanation: "Check distal pulse, motor function, and sensation (PMS, sometimes called CMS—circulation, motor, sensation) before and after splinting, and document both. A splint applied too tightly, or movement of bone ends, can compress nerves and blood vessels. If PMS worsens after splinting, loosen or adjust the splint. Never ask the patient to move an injured joint to test range of motion.",
    studyTip: "Splinting: check distal PMS before and after, immobilize the joints above and below a bone injury (or the bones above and below a joint injury), and pad voids."
  },
  {
    id: "TRAU-037",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Bleeding & Shock",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.2,
    stem: "A 27-year-old man cut his thigh on a piece of sheet metal. Dark red blood is flowing steadily from the wound, but it is not spurting. Which type of bleeding is this MOST likely to be?",
    options: [
      "Arterial bleeding",
      "Capillary bleeding",
      "Venous bleeding",
      "Internal bleeding"
    ],
    correctIndex: 2,
    explanation: "Venous bleeding is dark red (low in oxygen) and flows steadily, because veins are under lower pressure than arteries. Arterial bleeding is bright red and spurts with each heartbeat, and it is the hardest to control. Capillary bleeding is a slow ooze, as in an abrasion. Most venous bleeding can be controlled with firm direct pressure, although large veins can bleed heavily.",
    studyTip: "Arterial = bright red, spurting. Venous = dark red, steady flow. Capillary = slow ooze. Control with direct pressure first; tourniquet for life-threatening extremity bleeding."
  },
  {
    id: "TRAU-038",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.9,
    stem: "A 30-year-old man spilled boiling water on his forearm 2 minutes ago. The skin is red and painful, with a few small blisters. What is the BEST initial treatment?",
    options: [
      "Apply ice directly to the burn until the pain has completely stopped",
      "Cover the burn with butter or ointment to seal in moisture",
      "Pop the blisters with a sterile needle to relieve the pressure",
      "Cool it with cool running water, then apply a dry, sterile dressing"
    ],
    correctIndex: 3,
    explanation: "The first step in burn care is to stop the burning process. For a small burn, cool the area with cool or room-temperature water for several minutes, then cover it with a dry, sterile dressing. Ice causes further tissue damage (frostbite) and can cause hypothermia. Butter and ointments trap heat and increase the risk of infection. Blisters protect the underlying tissue, so leave them intact. Large burns should not be cooled for long, because the patient can become hypothermic.",
    studyTip: "Burns: stop the burning, remove jewelry, cool small burns briefly (no ice), cover with dry sterile dressings, keep the patient warm, and do not pop blisters."
  },
  {
    id: "TRAU-039",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.0,
    stem: "A 22-year-old woman caught her hand in a machine. A flap of skin on the back of her hand has been torn loose but is still attached at one side. What type of soft-tissue injury is this?",
    options: [
      "An abrasion",
      "An avulsion",
      "A contusion",
      "A puncture"
    ],
    correctIndex: 1,
    explanation: "An avulsion is an injury in which a flap of skin or tissue is torn loose or pulled off completely. If the flap is still attached, gently fold it back into its normal position if possible, control bleeding, and cover it with a moist or dry sterile dressing per protocol. An abrasion is a scrape of the outer skin layer, a contusion is a bruise under intact skin, and a puncture is a deep, narrow wound from a pointed object.",
    studyTip: "Abrasion = scrape. Laceration = cut. Avulsion = flap torn loose. Puncture = deep, narrow hole. Contusion = bruise (closed injury)."
  },
  {
    id: "TRAU-040",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Musculoskeletal Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.6,
    stem: "A 19-year-old football player is holding his right arm away from his body after a hard tackle. His shoulder looks squared off and deformed, and he cannot move it. He has a good radial pulse and normal sensation in his hand. How should you splint this injury?",
    options: [
      "Pull firmly on the arm to put the shoulder back in place, then apply a sling",
      "Straighten his arm down against his side and secure it there with tape",
      "Splint it as found, padding the space between his arm and body",
      "Leave it unsplinted so the hospital staff can see the deformity"
    ],
    correctIndex: 2,
    explanation: "This is most likely an anterior shoulder dislocation. EMTs should not try to reduce (relocate) a dislocation; doing so can damage nerves and blood vessels. Splint the shoulder in the position of comfort or the position found, filling the gap between the arm and chest with a pillow or blanket, then secure it with a sling and swathe. Recheck distal pulse, motor function, and sensation before and after splinting.",
    studyTip: "Joint injuries (dislocations): splint in the position found, immobilize the bones above and below the joint, and do not attempt reduction."
  },
  {
    id: "TRAU-041",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Bleeding & Shock",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "A 31-year-old man has a deep stab wound in his left groin with heavy bleeding that continues despite firm direct pressure. The wound is too close to the body for a tourniquet. What should you do NEXT?",
    options: [
      "Pack the wound with hemostatic gauze and hold firm pressure",
      "Elevate the leg and place a cold pack over the groin wound",
      "Apply a tourniquet on the lower leg, just below the knee",
      "Remove the blood-soaked dressing and apply a fresh, thinner dressing"
    ],
    correctIndex: 0,
    explanation: "Junctional areas such as the groin, armpit, and neck cannot be controlled with a standard limb tourniquet. For heavy bleeding in these areas, pack the wound cavity tightly with hemostatic (or plain) gauze, directly on the source of bleeding, and hold firm direct pressure for at least 3 minutes (or per product instructions). A tourniquet below the wound will not help. Never remove a blood-soaked dressing, because doing so disrupts clots; add more dressings and continue pressure.",
    studyTip: "Junctional bleeding (groin, axilla, neck): wound packing with hemostatic gauze + firm pressure for at least 3 minutes. Tourniquets work only on limbs."
  },
  {
    id: "TRAU-042",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Chest & Abdominal Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "A 58-year-old man fell against a table and has painful, tender ribs on his right side. He is taking shallow breaths because of the pain. Breath sounds are equal, and his SpO2 is 95%. Which care is MOST appropriate?",
    options: [
      "Wrap tape tightly around his whole chest to keep the ribs from moving",
      "Have him splint the ribs with a pillow and encourage deep breaths",
      "Apply an occlusive dressing over the injured ribs and transport",
      "Lay him flat on the injured side and have him hold his breath when it hurts"
    ],
    correctIndex: 1,
    explanation: "Rib fractures are painful, and patients often take shallow breaths, which can lead to collapsed areas of lung and pneumonia. Supporting the area with a pillow or a sling and swathe can reduce pain while still allowing the chest to expand. Avoid wrapping tape or straps tightly around the chest, because that restricts breathing. Give oxygen as needed, monitor for signs of pneumothorax, and transport. An occlusive dressing is used for open chest wounds, not closed rib fractures.",
    studyTip: "Rib fractures: support with a pillow or sling and swathe, never tape circumferentially, encourage deep breaths, and watch for pneumothorax or flail chest."
  },
  {
    id: "TRAU-043",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Pediatric",
    difficulty: 2,
    irtB: -0.1,
    stem: "A 15-year-old soccer player collided head-to-head with another player and was 'out' for a few seconds. He is now alert but keeps asking, 'What happened? Did we win?' every few minutes, and he has a headache and nausea. His vital signs are normal. What is the MOST appropriate action?",
    options: [
      "Let him return to the game if he can jog on the sideline without dizziness",
      "Give him a sports drink and have him rest on the bench for the half",
      "Release him to his parents, because his vital signs are within normal limits",
      "Keep him out of play, monitor him, and transport him for evaluation"
    ],
    correctIndex: 3,
    explanation: "Brief loss of consciousness, repeated questioning (amnesia), headache, and nausea are signs of a concussion, a traumatic brain injury. These findings can also be early signs of bleeding in the skull. He must not return to play the same day. Maintain spinal precautions as indicated by your protocol, monitor his mental status for any decline, watch for vomiting, and transport for evaluation.",
    studyTip: "Concussion signs: confusion, amnesia, repeated questions, headache, nausea, dizziness. No same-day return to play; monitor for worsening mental status."
  },
  {
    id: "TRAU-044",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Musculoskeletal Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "An 84-year-old woman slipped on her bathroom floor and cannot get up. Her left leg is shortened and rotated outward, and she has severe pain in her left groin. Distal pulses are present. What is the MOST appropriate way to immobilize this injury?",
    options: [
      "Apply a traction splint to the left leg to reduce pain and bleeding",
      "Straighten and rotate the leg back to normal, then apply a board splint",
      "Pad the hip, secure her legs together, and move her with a scoop stretcher",
      "Have her stand and pivot to the stretcher to limit movement of the hip"
    ],
    correctIndex: 2,
    explanation: "A shortened, externally rotated leg after a fall in an older adult suggests a hip (proximal femur) fracture. Traction splints are not used for hip fractures, because the hip joint is involved. Immobilize the patient by padding around the hip, placing pillows between the legs and securing them together, and moving her with a scoop stretcher or long board onto a padded stretcher. Do not try to straighten the leg. Also consider why she fell—syncope, stroke, or dehydration may be the underlying cause.",
    studyTip: "Hip fracture: shortened, externally rotated leg. Pad and immobilize with a scoop stretcher or long board—no traction splint. Ask why the patient fell."
  },
  {
    id: "TRAU-045",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Trauma Triage & Assessment",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "An unrestrained driver struck a tree head-on at moderate speed. He is alert and reports only mild chest soreness. You notice the steering wheel is bent and the windshield is intact. Which injuries should you MOST strongly suspect based on this mechanism?",
    options: [
      "Chest and upper abdominal injuries, such as rib, lung, heart, or liver injury",
      "Isolated lower leg injuries from his feet striking the brake pedal",
      "Only minor injuries, because the windshield is not cracked or starred",
      "Burns and abrasions to his hands and face from the airbag deploying"
    ],
    correctIndex: 0,
    explanation: "A bent steering wheel indicates that the driver's chest or upper abdomen struck it with significant force (the 'up-and-over' or 'down-and-under' pathway). Suspect rib fractures, pulmonary and cardiac contusions, pneumothorax, aortic injury, and liver or spleen injury, even if the patient feels fine at first. An intact windshield makes head strike less likely but does not rule out serious chest or abdominal trauma. Reassess often, and consider a trauma center.",
    studyTip: "Read the vehicle: bent steering wheel = chest/abdominal injury; starred windshield = head/neck injury; dashboard knee imprints = knee, femur, hip injury."
  },
  {
    id: "TRAU-046",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Musculoskeletal Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.2,
    stem: "A 40-year-old construction worker fell from a ladder. The end of a broken bone is protruding through the skin of his lower leg, and there is moderate bleeding. What is the MOST appropriate care for this injury?",
    options: [
      "Push the bone back under the skin, then dress the wound and splint",
      "Leave the wound uncovered so the hospital staff can see the bone",
      "Apply a tourniquet above the wound first, regardless of the bleeding",
      "Control bleeding, cover with a sterile dressing, and splint as found"
    ],
    correctIndex: 3,
    explanation: "This is an open fracture. Control bleeding with gentle pressure around (not on) the bone end, cover the wound and bone with a sterile dressing to reduce contamination, and splint the extremity without trying to push the bone back in—doing so drags contamination into the wound. If the bone end slips back in during splinting, report it to the receiving facility. A tourniquet is used only if bleeding is life-threatening and not controlled by pressure.",
    studyTip: "Open fracture: control bleeding, cover with a sterile dressing, never push bone ends back, splint, and check distal PMS before and after."
  },
  {
    id: "TRAU-047",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "A 36-year-old worker was splashed in both eyes with a liquid cleaning chemical. He is in severe pain and cannot open his eyes. After ensuring scene safety, what is the MOST important treatment?",
    options: [
      "Patch both eyes tightly to keep him from rubbing them, then transport",
      "Flush both eyes with water or saline for at least 20 minutes",
      "Flush the eyes for about 1 minute, then stop once the pain improves",
      "Rinse the eyes with a mild neutralizing solution such as vinegar"
    ],
    correctIndex: 1,
    explanation: "A chemical splash to the eye can cause permanent damage within minutes. Begin irrigating immediately with large amounts of clean water or normal saline, holding the eyelids open and flowing from the inside corner (near the nose) toward the outside so the chemical does not run into the other eye. Continue for at least 20 minutes—longer for alkalis—and continue during transport. Do not use neutralizing agents, which cause additional chemical reactions and heat.",
    studyTip: "Chemical in the eye: irrigate immediately and continuously for at least 20 minutes (longer for alkalis), from the inner corner outward. No neutralizers."
  },
  {
    id: "TRAU-048",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.4,
    stem: "A 26-year-old man was slashed across the side of his neck with a knife. Dark red blood is flowing steadily from the wound, and you hear a faint sucking sound. What is the BEST way to dress this wound?",
    options: [
      "Wrap a pressure bandage tightly around the neck to control the bleeding",
      "Apply a tourniquet loosely around the neck, then pad it with gauze",
      "Pack the wound with dry gauze and leave it otherwise uncovered",
      "Apply an occlusive dressing and direct pressure to one side only"
    ],
    correctIndex: 3,
    explanation: "An open wound to a large neck vein can draw air into the vessel when the patient inhales, causing an air embolism that can travel to the heart and lungs and be fatal. Cover the wound immediately with a gloved hand, then an occlusive dressing, and apply direct pressure to control bleeding. Never wrap a bandage around the neck or compress both carotid arteries, because doing so can cut off blood flow to the brain or obstruct the airway.",
    studyTip: "Open neck wound: occlusive dressing + direct pressure (one side only) to prevent air embolism and control bleeding. Never wrap circumferentially."
  },
  {
    id: "TRAU-049",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Musculoskeletal Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.8,
    stem: "A 45-year-old man has been pinned under a collapsed concrete wall by both legs for about 4 hours. He is alert, with HR 108 beats/min and BP 112/70 mmHg. Rescuers are preparing to lift the wall. What is the MOST important concern as the weight is removed?",
    options: [
      "Potassium and toxins from crushed muscle can enter the blood and stop the heart",
      "His legs may swell quickly, so he should be walked to the ambulance right away",
      "There is no special concern, because his vital signs are currently stable",
      "The main danger is hypothermia from lying on the cold concrete for hours"
    ],
    correctIndex: 0,
    explanation: "When muscle is crushed for a prolonged period (generally more than an hour or two), damaged cells release potassium, acids, and myoglobin into the trapped tissue. When the pressure is released, these substances rush into the circulation (crush syndrome), which can cause sudden cardiac dysrhythmias or cardiac arrest, shock, and kidney failure. Request ALS before the weight is removed if possible, give oxygen, keep the patient warm, apply AED pads per protocol, and be prepared for cardiac arrest.",
    studyTip: "Crush syndrome: prolonged entrapment → release of potassium and toxins when freed → dysrhythmias and kidney failure. Get ALS on scene before release when possible."
  },
  {
    id: "TRAU-050",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Trauma Triage & Assessment",
    patientType: "Obstetric",
    difficulty: 3,
    irtB: 1.0,
    stem: "A 29-year-old woman who is 34 weeks pregnant was a restrained driver in a moderate-speed collision. She has only a seat belt abrasion across her lower abdomen and mild cramping. Her HR is 96 beats/min and BP is 116/72 mmHg. She wants to go home. Why is transport especially important?",
    options: [
      "Pregnant women are not legally allowed to refuse EMS care or transport",
      "Seat belts do not injure the abdomen, so the abrasion suggests abuse",
      "Her normal vital signs prove the fetus is fine, but the law requires transport",
      "Abruption can develop later, and her extra blood volume can hide shock"
    ],
    correctIndex: 3,
    explanation: "In late pregnancy, a woman's blood volume increases by up to about 50% and her resting heart rate rises, so she can lose a large amount of blood before her vital signs change. The body also protects the mother by reducing blood flow to the uterus, so the fetus may be in distress while she appears stable. Blunt abdominal trauma can cause placental abruption, sometimes hours later. Transport her on her left side (or with the backboard tilted left) and monitor closely. A competent adult can refuse care, but explain these risks clearly.",
    studyTip: "Pregnant trauma: the fetus is in trouble before the mother shows shock. Transport, tilt or position to the left after 20 weeks, and watch for abruption (pain, cramping, bleeding)."
  },
  {
    id: "TRAU-051",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.2,
    stem: "A 33-year-old man has a severe head injury after a fall from a roof. He has a GCS of 7. Besides keeping his airway open, which TWO problems have the GREATEST impact on worsening his brain injury during your care?",
    options: [
      "Mild pain and anxiety from the fall",
      "Low oxygen and low blood pressure",
      "High blood sugar and a mild fever",
      "A slow heart rate and high blood pressure"
    ],
    correctIndex: 1,
    explanation: "After a traumatic brain injury, the injured brain is very sensitive to low oxygen and low blood flow. Even a single episode of hypoxia (SpO2 below 90%) or hypotension (systolic BP below 90 mmHg in adults) is associated with a much higher risk of death and disability. Keep SpO2 at 94% or above, ventilate at a normal rate (avoid routine hyperventilation), treat shock, and transport rapidly to a trauma center. A slow heart rate with high blood pressure suggests rising pressure in the skull, but it is a sign rather than a cause of secondary injury.",
    studyTip: "Traumatic brain injury: prevent hypoxia (keep SpO2 at 94% or higher) and hypotension (SBP at 90 or higher, adult). Avoid hyperventilation unless your protocol directs it for herniation."
  },
  {
    id: "TRAU-052",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Chest & Abdominal Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.9,
    stem: "A 42-year-old factory worker was about 30 feet from an industrial explosion. He has ringing in his ears, is coughing up a small amount of blood, and is short of breath, although he has no visible wounds. Which type of blast injury BEST explains these findings?",
    options: [
      "Secondary blast injury from flying debris and shrapnel",
      "Tertiary blast injury from being thrown against a wall",
      "Primary blast injury from the pressure wave itself",
      "Quaternary blast injury from heat and toxic smoke"
    ],
    correctIndex: 2,
    explanation: "Primary blast injuries are caused by the pressure wave itself, which damages hollow, air-filled organs: the ears (ruptured eardrums, ringing), lungs (blast lung, which can cause coughing up blood, shortness of breath, and pneumothorax), and intestines. These injuries may have no visible external signs. Secondary injuries come from flying debris, tertiary injuries from the body being thrown, and quaternary injuries include burns and inhalation. Give oxygen, monitor his breathing closely, and transport.",
    studyTip: "Blast injuries: primary = pressure wave (ears, lungs, bowel); secondary = shrapnel/debris; tertiary = body thrown; quaternary = burns, crush, inhalation."
  },
  {
    id: "TRAU-053",
    source: "Claude",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 1.1,
    stem: "A 2-year-old boy pulled a pot of boiling water off the stove. He has partial-thickness burns covering his entire head, his entire front torso (chest and abdomen), and his entire right leg (front and back). Using the pediatric Rule of Nines, approximately what percentage of his body surface area is burned?",
    options: [
      "36%",
      "41%",
      "50%",
      "59%"
    ],
    correctIndex: 2,
    explanation: "In the pediatric Rule of Nines, a small child's head is proportionally larger and each leg is proportionally smaller than an adult's. The head and neck count for 18%, the front of the torso 18%, the back of the torso 18%, each arm 9%, and each leg 14%. This child's burns cover the head (18%) + front torso (18%) + entire right leg (14%) = 50%. A burn of this size in a child is critical and requires transport to a burn center, along with careful prevention of hypothermia.",
    studyTip: "Pediatric Rule of Nines: head 18%, each arm 9%, front torso 18%, back torso 18%, each leg 14%. Adult: head 9%, each leg 18%."
  }
);


// ============================================================================
// Batch 3: Additional 19 Trauma Questions (TRAU-054 to TRAU-072)
// ============================================================================
window.NREMT_QUESTIONS.push(
  {
    id: "TRAU-054",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Bleeding & Shock",
    patientType: "Adult",
    difficulty: 1,
    irtB: -1.0,
    stem: "A 14-year-old skateboarder scraped both knees across rough asphalt. Blood is oozing slowly and evenly from the raw skin surface without spurting or dark pooling. Which type of bleeding is this?",
    options: [
      "Arterial hemorrhage",
      "Venous hemorrhage",
      "Capillary bleeding",
      "Junctional hemorrhage"
    ],
    correctIndex: 2,
    explanation: "Capillary bleeding is characterized by slow, even oozing of bright-to-medium red blood from damaged superficial capillary beds (typical of abrasions and minor scrapes). It generally clots spontaneously or with gentle direct pressure and a sterile dressing. Arterial bleeding spurts bright red with each heartbeat, while venous bleeding flows steadily and is dark red.",
    studyTip: "Bleeding types: Arterial = bright red, spurting with pulse. Venous = dark red, steady flow. Capillary = slow, even oozing from abrasions."
  },
  {
    id: "TRAU-055",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.9,
    stem: "You are assessing a foundry worker whose forearm was splashed with molten metal. The center of the burn is dry, leathery, and pearly white, and the patient states he feels no pain when you touch the center of the lesion, though the red edges hurt intensely. What depth of burn is at the center?",
    options: [
      "Superficial (first-degree) burn",
      "Superficial partial-thickness burn",
      "Deep partial-thickness burn",
      "Full-thickness (third-degree) burn"
    ],
    correctIndex: 3,
    explanation: "Full-thickness (third-degree) burns extend through the entire epidermis and dermis into the subcutaneous tissue. Because cutaneous nerve endings in the dermis are destroyed, the center of a full-thickness burn is insensate (painless to touch) and appears dry, leathery, charred, brown, or waxy white. The surrounding partial-thickness border still has intact nerve endings and remains very painful.",
    studyTip: "Burn depths: Superficial (1st) = red, dry, painful (sunburn). Partial-thickness (2nd) = red/mottled, blisters, intensely painful. Full-thickness (3rd) = dry, leathery/charred/waxy white, painless at the center."
  },
  {
    id: "TRAU-056",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.8,
    stem: "A 17-year-old hockey player had an intact upper permanent incisor knocked completely out of its socket. After controlling bleeding from the gum socket with a gauze pad, how should you handle and transport the avulsed tooth?",
    options: [
      "Hold it by the crown only, never scrub the root, and place it in milk or sterile saline",
      "Scrub the root clean with an alcohol prep pad and wrap the dry tooth in sterile gauze",
      "Place the tooth in a cup of hydrogen peroxide to sterilize the root ligament fibers",
      "Pack the tooth directly into crushed ice so the root freezes before hospital arrival"
    ],
    correctIndex: 0,
    explanation: "An avulsed permanent tooth can often be successfully reimplanted if the delicate periodontal ligament cells on the root remain viable. Always pick up the tooth by the crown (chewing edge), never touch or scrub the root, rinse gently with saline or milk only if covered in dirt, and transport it immersed in cold milk, balanced salt solution, or sterile saline.",
    studyTip: "Avulsed tooth care: Handle by the CROWN only, never scrub the root, and transport in milk or sterile saline (never dry gauze or water/peroxide)."
  },
  {
    id: "TRAU-057",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.7,
    stem: "How does a closed hematoma differ from a simple contusion (bruise)?",
    options: [
      "A hematoma involves open tearing of the epidermis, whereas a contusion is intact skin",
      "A hematoma is a pocket of blood pooled in tissue from damage to a larger vessel",
      "A hematoma only occurs inside the skull, whereas a contusion only occurs on limbs",
      "A hematoma is caused by thermal heat, whereas a contusion is caused by blunt force"
    ],
    correctIndex: 1,
    explanation: "Both contusions and hematomas are closed soft-tissue injuries caused by blunt force. A contusion (bruise/ecchymosis) involves small amounts of blood leaking from damaged capillaries into the dermis. A hematoma involves damage to a larger blood vessel, creating a palpable, swollen mass or pocket of pooled blood beneath the tissue (a large thigh or pelvic hematoma can hold over a liter of blood).",
    studyTip: "Contusion = superficial capillary bleeding/bruising (ecchymosis). Hematoma = larger vessel bleeding creating a distinct, swollen collection of pooled blood under the skin."
  },
  {
    id: "TRAU-058",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Musculoskeletal Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.6,
    stem: "When splinting a closed forearm fracture, at what points must you assess distal pulse, motor function, and sensation (PMS)?",
    options: [
      "Only before applying the splint, so you do not have to unwrap the bandage later",
      "Only after arriving at the hospital triage desk during your handoff report",
      "Both before applying the splint and immediately after securing the splint",
      "Only if the patient complains that their fingers have turned completely blue"
    ],
    correctIndex: 2,
    explanation: "Distal neurovascular status—Pulse, Motor function, and Sensation (PMS / CMS)—must be checked and documented BEFORE applying any splint and RECHECKED immediately after securing the splint (as well as periodically during transport) to ensure the splint or bone movement did not compress an artery or nerve.",
    studyTip: "Splinting golden rule: Always check and document distal PMS (Pulse, Motor, Sensation) BEFORE and AFTER applying any splint."
  },
  {
    id: "TRAU-059",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 1,
    irtB: -0.7,
    stem: "A 35-year-old woman burned her left hand with boiling soup. She is wearing two tight gold rings and a metal wristwatch on that extremity. Why is it important to remove her rings and watch immediately?",
    options: [
      "Gold reacts chemically with burn blisters and releases toxic metallic fumes",
      "Metal jewelry interferes with the pulse oximeter placed on the opposite hand",
      "Rapid swelling will soon trap the rings, acting like a tourniquet on her fingers",
      "Watches retain cold air and cause frostbite in partial-thickness thermal burns"
    ],
    correctIndex: 2,
    explanation: "Burns and crush/fracture injuries to the hand or wrist trigger rapid, severe soft-tissue swelling (edema). Removing rings, bracelets, and watches early—before swelling sets in—prevents the jewelry from acting as a constricting tourniquet that cuts off arterial blood flow and causes ischemic necrosis of the fingers.",
    studyTip: "Always remove rings, watches, and constricting jewelry from burned or injured extremities IMMEDIATELY before swelling turns them into tourniquets."
  },
  {
    id: "TRAU-060",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: -0.1,
    stem: "You respond to a 48-year-old man who struck his head on a metal beam and has a 3-inch scalp laceration that is bleeding heavily. Upon gentle palpation around the wound edges, you feel spongy, unstable bone fragments and a visible depression in the skull. How should you control the bleeding?",
    options: [
      "Apply a loose bulky dressing and gentle pressure only around the firm intact edges",
      "Press down firmly with the heel of your hand directly over the depressed bone fragments",
      "Pack hemostatic gauze tightly down into the depressed skull fracture until bleeding stops",
      "Wrap an elastic pressure bandage tightly over the center of the depressed fracture site"
    ],
    correctIndex: 0,
    explanation: "Although the scalp is rich in blood vessels and bleeds profusely, applying firm direct pressure directly over an open or depressed skull fracture can drive bone fragments inward into the brain parenchyma and meninges. Instead, cover the wound with a bulky, loose sterile dressing and apply gentle pressure only along the intact bony perimeter around the fracture.",
    studyTip: "Depressed/open skull fracture with bleeding: Never push directly on unstable skull bone! Apply a loose bulky sterile dressing and press gently only around the intact edges."
  },
  {
    id: "TRAU-061",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Chest & Abdominal Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.0,
    stem: "While palpating the neck and upper chest of a patient who was involved in a rollover motor vehicle crash, you feel a distinct crackling, popping sensation beneath your fingertips—similar to pressing on puffed rice cereal. What is this finding called, and what does it indicate?",
    options: [
      "Bony crepitus; multiple fractures of the cervical spinous processes",
      "Subcutaneous emphysema; air leaking from a torn lung or airway under the skin",
      "Jugular venous distension; blood backing up into the superior vena cava",
      "Urticarial wheals; an acute allergic reaction to airbag deployment powder"
    ],
    correctIndex: 1,
    explanation: "Subcutaneous emphysema is a crackling sensation felt when air escapes from a lacerated lung, bronchus, trachea, or esophagus and dissects into the subcutaneous fat layer of the chest wall, neck, and face. Its presence in blunt or penetrating chest trauma is a strong warning sign of an underlying pneumothorax or tracheobronchial tree injury.",
    studyTip: "Subcutaneous emphysema ('Rice Krispies' crackling under the skin of the chest/neck) = air leaking from a damaged lung or airway -> watch closely for tension pneumothorax!"
  },
  {
    id: "TRAU-062",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Chest & Abdominal Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "A 33-year-old mechanic was pinned across the sternum for 2 minutes when a car slipped off a floor jack. His skin from the mid-chest upward (neck, face, and shoulders) is deep purple-blue, his eyes are bulging with bright red subconjunctival hemorrhages, and his neck veins are distended, while his lower body is pale. What condition do these findings describe?",
    options: [
      "Neurogenic shock",
      "Commotio cordis",
      "Traumatic asphyxia",
      "Aortic coarctation"
    ],
    correctIndex: 2,
    explanation: "Traumatic asphyxia results from a sudden, severe crushing compression of the thorax (such as being pinned under a vehicle or heavy machinery). The abrupt spike in intrathoracic pressure forces venous blood backward out of the right side of the heart into the valveless superior vena cava and head/neck veins, rupturing tiny capillaries and causing classic cervicofacial cyanosis (purple head/neck), petechiae, bulging bloodshot eyes, and swollen tongue/lips.",
    studyTip: "Traumatic Asphyxia = severe chest crush injury -> sudden backward venous surge -> purple/blue head and neck, bulging bloodshot eyes, JVD, and swollen lips/tongue."
  },
  {
    id: "TRAU-063",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Musculoskeletal Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "A hiker fell onto a rock ledge and has a severely angulated closed mid-shaft tibia/fibula fracture. His foot is cold, pale, and bluish, and you cannot palpate a dorsalis pedis or posterior tibial pulse. Your transport time from the trailhead is 45 minutes. Under standard EMS guidelines, how should you manage the angulated limb?",
    options: [
      "Splint the leg in the exact twisted position found and pack the foot in crushed ice",
      "Flex the ankle 90 degrees and apply an arterial tourniquet tightly above the knee",
      "Have the patient stand on the foot briefly to pop the bone ends back into alignment",
      "Apply gentle inline traction once to realign the limb and restore the distal pulse"
    ],
    correctIndex: 3,
    explanation: "When a long-bone shaft fracture is severely angulated and the distal extremity is pulseless/cyanotic, the bent bone ends are kinking or compressing the artery. Making ONE gentle attempt at manual inline traction to bring the limb back into anatomical alignment often unkinks the vessel and restores distal blood flow before splinting. Stop immediately if you feel strong bony resistance or a sharp increase in pain, and splint in that position.",
    studyTip: "Angulated long-bone fracture + ABSENT distal pulse: Perform ONE gentle attempt at inline realignment to restore circulation (stop if resistance is met), then splint and recheck PMS."
  },
  {
    id: "TRAU-064",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Chest & Abdominal Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.2,
    stem: "In abdominal trauma, how does the primary threat of a lacerated solid organ (such as the liver or spleen) differ from the primary threat of a ruptured hollow organ (such as the stomach or small intestine)?",
    options: [
      "Solid organs cause severe internal hemorrhage, whereas hollow organs spill contents and cause peritonitis",
      "Solid organs spill bile and acid into the belly, whereas hollow organs cause massive arterial bleeding",
      "Solid organ injuries are always completely painless, whereas hollow organ injuries only cause bruising",
      "Solid organs only bleed from penetrating wounds, whereas hollow organs only rupture from blunt trauma"
    ],
    correctIndex: 0,
    explanation: "Solid abdominal organs (spleen, liver, kidneys, pancreas) are richly vascular; when fractured or lacerated, they bleed profusely into the peritoneal or retroperitoneal space, leading to life-threatening hypovolemic shock. Hollow organs (stomach, gallbladder, small and large intestines, urinary bladder) contain digestive enzymes, stomach acid, bile, or bacteria; when ruptured, they spill these contents into the abdominal cavity, causing intense chemical and bacterial peritonitis (board-like rigidity, guarding, and rebound tenderness).",
    studyTip: "Abdominal trauma: Solid organs (Spleen, Liver, Kidneys) = Bleed (hemorrhagic shock). Hollow organs (Stomach, Bowel, Gallbladder, Bladder) = Spill contents (chemical/bacterial peritonitis, rigid abdomen)."
  },
  {
    id: "TRAU-065",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.3,
    stem: "A 24-year-old amateur boxer was struck squarely in the left eye by a punch. He complains of double vision (diplopia), numbness of his left upper cheek and upper lip, and when you ask him to look up toward the ceiling, his right eye moves upward normally while his left eye stays fixed straight ahead. What injury do you suspect?",
    options: [
      "Acute retinal detachment of the right eye with optic nerve compression",
      "Orbital floor (blow-out) fracture with inferior eye muscle entrapment",
      "Isolated comminuted fracture of the anterior cartilaginous nasal septum",
      "Posterior dislocation of the left temporomandibular jaw joint capsule"
    ],
    correctIndex: 1,
    explanation: "Blunt impact to the globe compresses orbital contents downward, fracturing the thin bony floor of the orbit (an orbital blow-out fracture). The inferior rectus eye muscle and infraorbital nerve often become pinched in the fracture line, preventing the affected eye from looking upward (causing double vision/diplopia) and causing numbness of the ipsilateral cheek and upper lip.",
    studyTip: "Blunt eye trauma + inability to gaze upward + double vision (diplopia) + numb upper cheek = Orbital Floor ('Blow-Out') Fracture."
  },
  {
    id: "TRAU-066",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 2,
    irtB: 0.1,
    stem: "During the secondary assessment of an unresponsive 27-year-old male who was thrown from an all-terrain vehicle (ATV), you note priapism (a persistent, involuntary erection of the penis). What does this physical finding strongly indicate?",
    options: [
      "Severe pelvic ring fracture with complete urethral transection",
      "Acute synthetic opioid overdose taken shortly before the crash",
      "Severe spinal cord injury disrupting sympathetic nerve pathways",
      "Isolated blunt contusion to the anterior urinary bladder wall"
    ],
    correctIndex: 2,
    explanation: "Priapism in a male trauma patient is a classic neurological sign of an acute spinal cord injury (typically cervical or thoracic). Interruption of descending sympathetic nervous system fibers leaves parasympathetic pathways unopposed, causing engorgement of the corpus cavernosum. Maintain strict spinal motion restriction and monitor for neurogenic shock.",
    studyTip: "Priapism in a trauma patient = classic sign of acute spinal cord injury (unopposed parasympathetic tone due to loss of sympathetic outflow)."
  },
  {
    id: "TRAU-067",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Chest & Abdominal Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.8,
    stem: "A 30-year-old man was shot in the right lateral chest. He is pale, diaphoretic, and tachypneic at 32 breaths/min, with a BP of 74/48 mmHg and HR of 136 beats/min. Breath sounds are absent on the right side and clear on the left. Unlike a tension pneumothorax, his neck veins are completely FLAT and the right chest is dull to percussion. What is the most likely injury?",
    options: [
      "Simple closed pneumothorax",
      "Pericardial tamponade",
      "Myocardial contusion",
      "Massive hemothorax"
    ],
    correctIndex: 3,
    explanation: "Both tension pneumothorax and massive hemothorax cause unilateral absent or diminished breath sounds and shock. However, in a massive hemothorax, a lacerated intercostal, pulmonary, or great vessel pours 1,500+ mL of blood into the pleural cavity. Because the patient is losing a huge volume of blood out of the vascular system into the chest, the neck veins are usually FLAT (hypovolemic shock) and the chest sounds dull (fluid-filled) to percussion—whereas tension pneumothorax traps air under pressure, causing distended neck veins (JVD) and hyperresonance.",
    studyTip: "Absent unilateral breath sounds + Shock:\n• With JVD + hyperresonance = Tension Pneumothorax (air trapping).\n• With FLAT neck veins + dullness to percussion = Massive Hemothorax (blood loss into chest)."
  },
  {
    id: "TRAU-068",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.7,
    stem: "You are caring for an unresponsive head-injured patient who initially pulled his arms tightly inward against his chest with clenched fists when stimulated (decorticate posturing). Ten minutes into transport, when you apply a noxious stimulus, he now stiffly extends and rotates both arms outward at his sides with his wrists flexed and legs rigidly extended (decerebrate posturing). How should you interpret this change?",
    options: [
      "His brain injury is worsening, with deeper brainstem compression and herniation",
      "His intracranial pressure is falling as he wakes up from his cerebral concussion",
      "He has developed hypocalcemia from hyperventilation, causing benign hand cramps",
      "He is transitioning from a generalized seizure into a normal postictal recovery"
    ],
    correctIndex: 0,
    explanation: "Decorticate posturing (abnormal flexion: arms pulled inward toward the 'core' of the chest, legs extended; GCS Motor = 3) indicates damage to the cerebral hemispheres or internal capsule above the red nucleus. Progression from decorticate (flexion) to decerebrate posturing (abnormal extension: arms and legs rigidly extended and pronated; GCS Motor = 2) is an ominous sign that rising intracranial pressure and uncal/brainstem herniation are compressing deeper into the midbrain and pons.",
    studyTip: "Posturing progression: Decorticate (Flexion toward the CORE, M=3) -> Decerebrate (Extension, M=2) -> Flaccid (No response, M=1) indicates worsening brainstem herniation."
  },
  {
    id: "TRAU-069",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.9,
    stem: "A 29-year-old painter accidentally triggered an airless high-pressure paint sprayer (3,000 psi) against the tip of his index finger. On exam, you see only a tiny 1-mm pinpoint puncture mark with no external bleeding, and he reports only mild stinging. He asks to stay at work and put a bandage on it. What should you tell him and do?",
    options: [
      "Reassure him that a tiny puncture without bleeding is minor and let him stay at work",
      "Splint at heart level without ice and transport urgently, as deep tissue necrosis develops rapidly",
      "Squeeze the finger firmly from the palm toward the tip to push the injected paint out of the hole",
      "Pack the hand in crushed ice and elevate it high above his shoulder to slow paint absorption"
    ],
    correctIndex: 1,
    explanation: "High-pressure injection injuries (from paint guns, grease guns, diesel fuel injectors, or hydraulic lines operating at 2,000–10,000 psi) are notorious 'wolf in sheep's clothing' surgical emergencies. Initially, they look like a tiny, harmless pinhole with minimal pain. However, the pressurized liquid blasts deep along fascial planes and tendon sheaths into the hand and forearm, causing chemical necrosis, vascular thrombosis, and severe compartment syndrome that frequently results in finger or hand amputation if surgical debridement is delayed. Never apply ice (worsens ischemia) and transport immediately.",
    studyTip: "High-pressure injection injury (paint sprayer/grease gun/hydraulic line): Tiny pinhole wound hides limb-threatening deep tissue necrosis and compartment syndrome! Never apply ice; transport emergently for surgery."
  },
  {
    id: "TRAU-070",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Burns & Soft Tissue Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 1.0,
    stem: "You are transporting a 44-year-old man who suffered a circumferential full-thickness (third-degree) burn completely encircling his chest and upper torso in an industrial flash fire. Twenty minutes after the burn, his breathing becomes shallow and rapid, his SpO2 drops to 85%, and you notice his chest wall barely expands even when you assist him with a bag-valve mask, though his upper airway is patent and clear. What is the cause of his ventilatory failure?",
    options: [
      "Carbon monoxide has paralyzed his phrenic nerve at the level of the lower brainstem",
      "Inhaled steam has caused bilateral spontaneous pneumothoraces inside both lung apices",
      "Tight, leathery burn eschar encircling his chest is restricting chest wall expansion",
      "Fluid loss through the burned skin has caused immediate hypovolemic cardiac arrest"
    ],
    correctIndex: 2,
    explanation: "Full-thickness burn tissue (eschar) is dead, dry, leathery, and completely inelastic. When a full-thickness burn encircles the entire circumference of the chest wall (circumferential torso burn), underlying tissue edema tightens the rigid eschar like a steel band around the rib cage, physically preventing the chest wall from expanding during inspiration or BVM ventilation. Support ventilations with a BVM and 100% oxygen and transport emergently to a burn/trauma center where physicians can perform an emergency surgical escharotomy (incising the eschar to allow the chest to expand).",
    studyTip: "Circumferential full-thickness burns: On an extremity = acts like a tourniquet (cuts off distal pulse). Around the chest/thorax = acts like a vise (restricts chest expansion and ventilation, requiring surgical escharotomy)."
  },
  {
    id: "TRAU-071",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Adult",
    difficulty: 3,
    irtB: 0.9,
    stem: "A 31-year-old man was struck in the jaw with a metal pipe (isolated facial blow with no fall or neck pain). He has an unstable bilateral mandible fracture, missing teeth, and heavy bleeding inside his mouth. He is alert, sitting upright, leaning forward, and spitting blood into a towel. Whenever you try to lay him flat on the cot, he panics, gags, and develops loud stridor and gurgling. How should you position and transport him?",
    options: [
      "Force him flat onto a long spine board with straps so you can apply a rigid collar",
      "Place him in the Trendelenburg position so blood pools away from his vocal cords",
      "Insert an oropharyngeal airway while he sits upright to splint his fractured jaw",
      "Let him sit upright leaning forward, provide suction and oxygen, and transport"
    ],
    correctIndex: 3,
    explanation: "The tongue is attached anteriorly to the mandible (lower jaw). A bilateral mandibular fracture detaches the bony support of the tongue, allowing the tongue and soft tissues to fall backward into the hypopharynx when the patient is placed supine—while blood and broken teeth simultaneously pool over the glottis. When an alert patient with severe maxillofacial trauma cannot tolerate lying supine without losing their airway, allow them to sit upright leaning forward so gravity pulls the tongue forward and drains blood out of the mouth, provide suction and oxygen, and transport promptly.",
    studyTip: "Severe facial/mandible fracture in an alert patient who chokes when laid flat: Never force them supine! Transport sitting upright/leaning forward (or lateral if spinal restriction is needed) with suction in hand."
  },
  {
    id: "TRAU-072",
    source: "Gemini",
    domain: "Trauma",
    subtopic: "Head, Neck & Spine Trauma",
    patientType: "Pediatric",
    difficulty: 3,
    irtB: 1.1,
    stem: "You are assessing a 5-month-old infant who fell from a high changing table onto a tile floor. The infant has a high-pitched, inconsolable cry, projectile vomiting, and a tense, bulging anterior fontanelle (soft spot) even when held upright. What does the bulging fontanelle indicate, and how should you manage the infant?",
    options: [
      "Increased intracranial pressure; protect the spine, prevent hypoxia, and transport rapidly",
      "Severe dehydration from vomiting; lay the infant flat and give oral electrolyte solution",
      "Normal venous pressure from crying; reassure the parents that open sutures prevent swelling",
      "Depressed skull fracture under the soft spot; apply firm direct pressure over the fontanelle"
    ],
    correctIndex: 0,
    explanation: "In infants up to 12–18 months of age, the anterior fontanelle ('soft spot') between the frontal and parietal skull bones has not yet fused. While a sunken fontanelle indicates dehydration, a tense, firm, bulging fontanelle (especially when not actively crying or when upright) is a classic pediatric sign of elevated intracranial pressure (ICP) from intracranial hemorrhage, cerebral edema, or meningitis. Protect the cervical spine (with shoulder padding to maintain neutral alignment), administer oxygen to prevent hypoxia, keep suction ready for vomiting, and transport rapidly.",
    studyTip: "Infant anterior fontanelle clues: Sunken fontanelle = Dehydration. Tense/Bulging fontanelle = Increased Intracranial Pressure (TBI, intracranial bleed, or meningitis)."
  }
);
