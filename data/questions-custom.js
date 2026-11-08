// NREMT EMT Cognitive Exam Practice Question Bank
// Expansion / Future Question Packs File
// Add additional questions to window.NREMT_QUESTIONS below or inside the domain-specific files in /data.
//
// Schema for each question object:
// {
//   id: "UNIQUE-ID",                                      // e.g. "AIR-061", "CARD-067", "TRAU-054", "MED-086", "OPS-037"
//   source: "Custom",                                     // Author tag: "Gemini", "Claude", or "Custom"
//   domain: "Airway, Respiration & Ventilation",          // Must match one of the 5 official NREMT domains
//   subtopic: "Subtopic Name",                            // Used for targeted post-exam study feedback
//   patientType: "Adult" | "Pediatric" | "Obstetric" | "Operations",
//   difficulty: 1 | 2 | 3,                                // 1 = Easy, 2 = Medium, 3 = Hard
//   irtB: 0.0,                                            // Continuous IRT difficulty parameter (-1.5 to +1.5)
//   stem: "Clinical scenario question stem...",
//   options: ["Option A", "Option B", "Option C", "Option D"],
//   correctIndex: 0,                                      // 0-based index of the correct option (0, 1, 2, or 3)
//   explanation: "Detailed clinical rationale...",
//   studyTip: "High-yield takeaway pearl..."
// }

window.NREMT_QUESTIONS = window.NREMT_QUESTIONS || [];
