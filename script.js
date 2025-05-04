const questions = [
  {
    question: "Woman 54 years old, called an ambulance with complaints of shortness of breath, palpitation, irregular heartbeat and fever. On examination: the general condition is satisfactory. Body temperature is 37.5°C. BR -20 per minute. During auscultation, breathing is harsh, there is no wheezing. Heart rate is 116 beats per minute, the rhythm is irregular. BP is -120/90 mmHg. On the cardiogram, P waves occur too soon after T waves, normal QRS. What’s the patients diagnose by ECG?",
    answers: [
      { text: "Extrasystoles", correct: true },
      { text: "Weakness of the sinus node", correct: false },
      { text: "Paroxysmal tachycardia", correct: false },
      { text: "Atrial fibrillation", correct: false },
      { text: "AV blockade", correct: false },
    ],
  },
  {
    question: "Woman 54 years old, called an ambulance with complaints of shortness of breath, palpitation, irregular heartbeat and fever. On examination: the general condition is satisfactory. Body temperature is 37.5°C. BR -20 per minute. During auscultation, breathing is harsh, there is no wheezing. Heart rate is 116 beats per minute, the rhythm is irregular. BP is -120/90 mmHg. On the cardiogram, P waves occur too soon after T waves, normal QRS. What’s the patients diagnose by ECG?",
    answers: [
      { text: "Atrial extrasystole", correct: true },
      { text: "Ventricular extrasystole ", correct: false },
      { text: "AV extrasystole", correct: false },
      { text: "Atrial fibrillation", correct: false },
      { text: "AV blockade", correct: false },
    ],
  },
  {
    question: "An 18-year-old boy presents with complaints of syncope. An ECG shows hypertrophy and abnormal systolic anterior leaflet motion of the mitral valve. Which of the following drugs should be avoided in this patient?",
    answers: [
      { text: "Digoxin", correct: true },
      { text: "Beta blockers", correct: false },
      { text: "Verapamil", correct: false },
      { text: "Disopyramide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "At a doctor's appointment, a 56-year-old woman complains of headaches, numbness in the lower jaw and tinnitus. From anamnesis: this condition has been bothering for the last 6 months, heredity is not burdened. Physical examination: no pathological noises are heard during auscultation of the heart, blood pressure is 140/90 mmHg, respiratory rate is 18 per minute, heart rate is 85 beats per minute. Presumably, what diagnosis can be made?",
    answers: [
      { text: "Primary arterial hypertension", correct: true },
      { text: "Secondary arterial hypertension", correct: false },
      { text: "Hypertensive crisis", correct: false },
      { text: "Ischemic stroke", correct: false },
      { text: "T. Myocardial infarction", correct: false },
    ],
  },
  {
    question: "A 67-year-old patient with complaints of swelling on the legs and under the eyes, an increase in blood pressure to 160/100, headaches, shortness of breath with moderate physical exertion, tachycardia. These complaints were started 1 month ago. From anamnesis: suffers from arterial hypertension of the II degree for 10 years. He takes Tromboass (acetylsalicylic acid) 75 mg, amlodipine 5 mg, rozuvastatin 10 mg, lisinopril 5 mg, bisoprolol 5 mg regularly. physical examination: Heart tones are muted, the rhythm is correct, heart rate is 82 beats per minute, blood pressure is 150/90 mm Hg. Pasty of the lower extremities. Choose which of the prescribed medications should be canceled to improve the patient's condition?",
    answers: [
      { text: " Amlodipine", correct: true },
      { text: "Bisoprolol", correct: false },
      { text: "Rozuvastatin", correct: false },
      { text: "Tromboass", correct: false },
      { text: "Lisinopril", correct: false },
    ],
  },
  {
    question: "At a doctor's appointment, a 66-year-old woman complains of severe headache, blurry vision, a feeling of compression in the head, numbness in the lower jaw, tinnitus. From anamnesis: suffers from hypertension for the last 5 years. She takes antihypertensive medications regularly. This condition is noted during the day, after a stressful situation at work. Physical examination: the skin is clean. There is redness of the eyes. Heart tones are rhythmic, muted. Blood pressure = 210/120 mmHg. HR-90 beats per minute. Pathological reflexes are negative. The patient has a hypertensive crisis. In which form you will prescribe Kaptopril for this patient?",
    answers: [
      { text: "Tablet sublingual", correct: true },
      { text: "Tablet orally ", correct: false },
      { text: "Capsule orally", correct: false },
      { text: "Intro muscular", correct: false },
      { text: "Intro venous", correct: false },
    ],
  },
  {
    question: "Which of the followings are  the first-line drugs for the treatment of stable angina?",
    answers: [
      { text: "B-blockers.", correct: true },
      { text: "Analgetics. ", correct: false },
      { text: "Ca blockers.", correct: false },
      { text: "ACE inhibitors.", correct: false },
      { text: "Diuretics.", correct: false },
    ],
  },
  {
    question: "A 60-year-old male presents with intermittent palpitations and dizziness for the past few weeks. His blood pressure is 140/90 mmHg, heart rate is irregularly irregular at 110 bpm, and respiratory rate is 16/min. What is the most likely diagnosis?",
    answers: [
      { text: "Atrial fibrillation.", correct: true },
      { text: "Atrial flutter.", correct: false },
      { text: "Paroxysmal supraventricular tachycardia (PSVT). ", correct: false },
      { text: "Ventricular tachycardia.", correct: false },
      { text: "Ventricular extrasystola.", correct: false },
    ],
  },
  {
    question: "A 45-year-old male presents to the emergency department with chest pain and shortness of breath. He has a history of smoking and hypertension. On examination, he appears diaphoretic and uncomfortable. Vital signs reveal a blood pressure of 160/100 mmHg, heart rate of 110 bpm, and respiratory rate of 24/min. An electrocardiogram (ECG) is performed and shows ST-segment elevation in leads V1-V3. What is the likely diagnosis based on the ECG findings?",
    answers: [
      { text: "Anterior myocardial infarction.", correct: true },
      { text: "Inferior myocardial infarction.", correct: false },
      { text: "Posterior myocardial infarction. ", correct: false },
      { text: "Pericarditis.", correct: false },
      { text: "Lateral myocardial infarction.", correct: false },
    ],
  },
  {
    question: "A 40-year-old male presents to the emergency department with sudden-onset chest pain and shortness of breath. He has a history of smoking and a family history of premature coronary artery disease. On examination, he appears diaphoretic and uncomfortable. Vital signs reveal a blood pressure of 160/100 mmHg, heart rate of 110 bpm, and respiratory rate of 24/min. An electrocardiogram (ECG) shows ST-segment elevation in leads II, III, and aVF. What is the most likely diagnosis for this patient?",
    answers: [
      { text: "Acute myocardial infarction", correct: true },
      { text: "Acute pericarditis", correct: false },
      { text: "Aortic dissection", correct: false },
      { text: "Stable angina", correct: false },
      { text: "Pulmonary embolism", correct: false },
    ],
  },
  {
    question: "A 56-year-old male has presented to emergency department with complicated MI. The patient suddenly collapsed following an episode of shortness of breath. His vitals are as follows BP 80/45 mmHg, pulse 115 bpm, and respiratory rate 26 per minute. His urine output was also decreased Which is the best treatment for this patient? ",
    answers: [
      { text: "Intubation with mechanical ventilation ", correct: true },
      { text: "Non-invasive ventilation with tight fitting face mask ", correct: false },
      { text: "Continuous positive pressure ventilation ", correct: false },
      { text: "High-frequency jet ventilation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 56-year-old man, while waiting for an appointment at the polyclinic, suddenly began to complain of shortness of breath with attacks of suffocation, dry cough, sweating, severe weakness. physical examination: cold sticky sweat, acrocyanosis, tachypnea. The heart tones are arrhythmic, the heart rate is 154 beats per minute. BP 155/90 mmHg. On the electrocardiogram: ST segment depression in V3-V4, single ventricular extrasystoles. Which of the following drugs should be used primarily for emergency care?",
    answers: [
      { text: "Nitroglycerin", correct: true },
      { text: "Aspirin", correct: false },
      { text: "Morphine", correct: false },
      { text: "Heparin", correct: false },
      { text: "Captopril", correct: false },
    ],
  },
  {
    question: "True about the vegetations seen in infective endocarditis is:",
    answers: [
      { text: "Extend into the chordae", correct: true },
      { text: "Present mainly along the lines of closure", correct: false },
      { text: "Present on both side of valve leafiets", correct: false },
      { text: "Do not embolise", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following manoeuvre’s decreases the intensity of the murmur in hypertrophic cardiomyopathy?",
    answers: [
      { text: "Squatting", correct: true },
      { text: "Valsalva strain phase", correct: false },
      { text: "Standing posture", correct: false },
      { text: "Exercise", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 45-year-old previously healthy male patient presented with fever, chills and fatigue.  On admission, his body temperature was 38.5 degree Celsius. Two days later, he developed a new regurgitant murmur. The echocardiogram confirmed the presence of vegetation in the posterior leaflet of mitral valve. His blood culture obtained was positive for gram-positive cocci in chains. What is the treatment for the given condition?",
    answers: [
      { text: "Penicillin with gentamicin", correct: true },
      { text: "Ampicillin with gentamicin", correct: false },
      { text: "Vancomycin", correct: false },
      { text: "Clarithromycin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 46-year-old man, for several months he has been worried about fever, night sweats, repeated vomiting, pain in the knee joints, a feeling of palpitation, physical examination: the skin and mucous membranes are clean, pale. The temperature is 38.0. The terminal phalanges of the fingers in the form of \"drumsticks\", Osler nodules on the palms. Heart tones are rhythmic, tachycardia is 118 beats per minute. 100/70 mmHg UAC: Hb-101g/l, erythrocytes – 4,4x10*12, platelets – 305x10*9; leukocytes – 16x10*9, ESR – 40 mm/hour. From anamnesis:he is registered in a drug treatment center as a person who uses injecting drugs. What the doctor's treatment tactics?",
    answers: [
      { text: "Outpatient treatment with the use of antibiotics and glucocorticoids.", correct: true },
      { text: "Outpatient treatment with the use of antibiotics only. ", correct: false },
      { text: "Hospitalization for intensive antibiotic therapy and surgery if necessary.", correct: false },
      { text: "Hospitalization for coronary angiography and coronary artery stenting.", correct: false },
      { text: "Electrophysiological examination of the heart and implantation of a pacemaker.", correct: false },
    ],
  },
  {
    question: "A 55-year-old man has been complaining of dull pain in the heart area for two weeks, shortness of breath, orthopnea. Examination reveals dullness heart sounds. Which one of the following diagnoses is most likely in this patient?",
    answers: [
      { text: "Exudative pericarditis", correct: true },
      { text: "Myocardial infarction ", correct: false },
      { text: "Emphysema with right ventricular failure", correct: false },
      { text: "Atrial fibrillation", correct: false },
      { text: "Superior vena cava syndrome", correct: false },
    ],
  },
  {
    question: "A 50-year-old female patient underwent mitral valve replacement for severe MR 5years ago. She is now posted for an elective colonoscopy, for evaluation of altered bowel habits. What is the recommended prophylaxis for this patient?",
    answers: [
      { text: "No antibiotic prophylaxis required", correct: true },
      { text: "Amoxicillin, 2g orally, taken 30 to 60 minutes before the procedure", correct: false },
      { text: "Clindamycin 600mg orally, taken 30 to 60 minutes before the procedure", correct: false },
      { text: "Ampicillin, 2g IM or IV 30 to 60 minutes before the procedure", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 50-year-old female presents to the clinic with complaints of abdominal pain the last 8 months, bloating, and weight loss. She reports feeling fatigued and weak most of the time. On examination, she appears pale, and there are signs of glossitis. Laboratory investigations: hemoglobin level 80 g/l, vitamin B12 – 120 pg/ml. An upper gastrointestinal endoscopy is performed, shows atrophic gastritis. Which test would be most useful for confirming the diagnosis?",
    answers: [
      { text: "Anti parietal cell antibody (APCA) test", correct: true },
      { text: "Serum iron test ", correct: false },
      { text: "Complete blood count (CBC) ", correct: false },
      { text: "Stool antigen test for H. pylori", correct: false },
      { text: "Urea breath test", correct: false },
    ],
  },
  {
    question: "A 25-year-old man attends  his family doctor with a 7-month history of burning epigastric pain before meals and at night. Antacids usually resolves his symptoms. He does not have any other medical problems and does not take any medications. He does not smoke or drink alcohol. Vital signs are normal. Which one of the following diagnoses is most likely in this patient?",
    answers: [
      { text: "Chronic gastritis B ", correct: true },
      { text: "Eosinophilic gastritis", correct: false },
      { text: "Chronic autoimmune gastritis", correct: false },
      { text: "Gastro-oesophageal reflux disease", correct: false },
      { text: "Reflux –gastritis", correct: false },
    ],
  },
  {
    question: "A 45-year-old cirrhotic patient presented with severe hematemesis. The management of choice is:",
    answers: [
      { text: "Whole blood transfusion ", correct: true },
      { text: "Colloids are preferred over crystalloids", correct: false },
      { text: "Normal saline infusion ", correct: false },
      { text: "IV fluid with diuretics", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 45-year-old man has had recurrent and at times severe epigastric abdominal pain for the last 2 years. Antacids have given him symptomatic relief. The most recent episode began 1 week ago and has not responded completely to antacids. The pain now wakes him up at night. He smokes one pack of cigarettes per day, and he takes aspirin several times a week. His family history is unremarkable. Physical examination reveals moderate epigastric tenderness without evidence of a mass. The stool is brown and positive for occult blood. What diagnostic tests should you consider?",
    answers: [
      { text: "Upper gastrointestinal endoscopy ", correct: true },
      { text: "Abdominal radiographic ", correct: false },
      { text: " Electrogastrography", correct: false },
      { text: "Electrokymography", correct: false },
      { text: "Computed tomography ", correct: false },
    ],
  },
  {
    question: "40 years male presented to opd with pain in the abdomen, loss of weight, anorexia, recurrent diarrhea, low-grade fever and distension of the abdomen. Examination revealed a palpable lump in Right iliac fossa. Barium enema showed pulled up caecum. Likely diagnosis is ",
    answers: [
      { text: "TB", correct: true },
      { text: "Malignancy ", correct: false },
      { text: "Intussusception ", correct: false },
      { text: "Necrotising enterocolitis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 50-year-old woman was referred with a 4-year history of diarrhoea that was predominantly nocturnal. Symptoms had worsened over the preceding 12 months. She would have to get up three or four times to open her bowels, on 3 or 4 nights a week. Daytime frequency was only twice, but stools were often explosive, pale and sometimes left a residue after flushing. She had lost 10kg in 2 years, but her appetite was normal. She had been referred 2 years previously and been investigated. A barium enema had shown sigmoid diverticular disease, but no other abnormality.What is the likely diagnosis?",
    answers: [
      { text: "SIBO", correct: true },
      { text: "GIRD", correct: false },
      { text: "IBS", correct: false },
      { text: "IBD", correct: false },
      { text: "PUD", correct: false },
    ],
  },
  {
    question: "A 25-year-old male presents with abdominal pain, diarrhea, and weight loss. He also complains of fatigue and low-grade fever. Endoscopy reveals patchy inflammation in the ileum with skip areas. The biopsy confirms the diagnosis of Crohn's disease. Which of the following is the initial treatment of choice?",
    answers: [
      { text: "Aminosalicylates ", correct: true },
      { text: "Glucocorticoids ", correct: false },
      { text: "Antibiotics ", correct: false },
      { text: "Immunosuppressants ", correct: false },
      { text: "Biologic agents", correct: false },
    ],
  },
  {
    question: "Which of the following viral markers signifies the ongoing viral replication in the case of Hepatitis-B infection? ",
    answers: [
      { text: "HBeAg", correct: true },
      { text: "Anti-HBs ", correct: false },
      { text: "Anti-HBc ", correct: false },
      { text: "HBsAg", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient who is a known case of Decompensated Liver disease and was already on the national transplant list for Liver transplantation has been approved for and next on line for transplantation. Which of the following is an absolute contraindication to liver transplantation? ",
    answers: [
      { text: "AIDS", correct: true },
      { text: "Age >70 ", correct: false },
      { text: "Portal vein thrombosis ", correct: false },
      { text: "Severe obesity ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 65-year-old male with a history of chronic alcohol abuse presents with worsening jaundice, abdominal distension, and altered mental status. On examination, there are spider angiomas, gynecomastia, and testicular atrophy. Laboratory investigations reveal hypoalbuminemia, and thrombocytopenia, ALT - 200 U/L, AST -  170 U/L. An abdominal ultrasound shows a nodular liver and splenomegaly. Which of the following is a common complication of this condition?",
    answers: [
      { text: "Alcoholic liver cirrhosis ", correct: true },
      { text: "Hepatitis B-associated cirrhosis ", correct: false },
      { text: "Chronic viral hepatitis B", correct: false },
      { text: "Alcoholic hepatitis", correct: false },
      { text: "Autoimmune hepatitis ", correct: false },
    ],
  },
  {
    question: "hronic liver disease patient with ascites and no bleeding varices. He presents with hematemesis and melena. What is the next step in management? ",
    answers: [
      { text: "FFP transfusion ", correct: true },
      { text: "Inj. vitamin K ", correct: false },
      { text: "Inj. Tranexamic acid ", correct: false },
      { text: "Platelet transfusion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 63-year-old man with a history of liver cirrhosis presents with confusion and disorientation. Physical exam reveals hyperreflexia and spasticity. Laboratory data showed anemia, thrombopenia, increased transaminase, alkaline phosphatase and total bilirubin, ammonia and decreased albumin. Which of the following is the primary mechanism of action of albumin in the treatment of this patient?",
    answers: [
      { text: "Increasing hepatic blood flow", correct: true },
      { text: "Reducing gut ammonia production", correct: false },
      { text: "Inhibiting gut bacteria", correct: false },
      { text: "Reducing inflammation", correct: false },
      { text: "Inhibiting intestinal motility", correct: false },
    ],
  },
  {
    question: "A 45-year-old woman presents with confusion and asterixis. She has a history of alcoholic liver disease and is currently not taking any medications. Plasma ammonia (NH3) level on admission was twice the normal level. Which of the following medications is used to treat these symptoms?",
    answers: [
      { text: "Lactulose", correct: true },
      { text: "Flumazenil", correct: false },
      { text: "Ornithetil", correct: false },
      { text: "Glutamic acid", correct: false },
      { text: "Essentiale", correct: false },
    ],
  },
  {
    question: "A 48-year-old male alcoholic patient presents to emergency with sudden loss of vision and acute abdominal pain mainly around epigastric area radiating to the back. On examination, he is found to be tachypnoeic, tachycardic. Lab investigations showed elevated serum amylase and leucocytes. What do you think is the most likely cause for loss of vision? ",
    answers: [
      { text: "Purtscher's retinopathy  ", correct: true },
      { text: "Hyperglycemia ", correct: false },
      { text: "Hypoxia ", correct: false },
      { text: "Central Retinal Vein Occlusion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 48-year-old male alcoholic patient presents to emergency with acute abdominal pain in epigastric area radiating to the back. On examination, he is found to be tachypnoeic, tachycardic. Lab investigations showed elevated serum amylase and leucocytes. All of following are used for routine medical treatment of the condition except? ",
    answers: [
      { text: "Gabexate mesylate", correct: true },
      { text: "Ringers Lactate ", correct: false },
      { text: "Normal Saline ", correct: false },
      { text: "IV opiates ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An employee of a large hotel equipped with air conditioning suddenly developed a fever of up to 40°C, chills, cough with sputum, hemoptysis, chest pain when breathing, myalgia, nausea, and diarrhea. X-ray examination revealed infiltrative changes in both lungs. What is the most likely cause of pneumonia?",
    answers: [
      { text: "Legionella", correct: true },
      { text: "Klebsiella ", correct: false },
      { text: "Mycoplasma pneumoniae", correct: false },
      { text: "Pfeiffer stick", correct: false },
      { text: "Staphylococcus aureus", correct: false },
    ],
  },
  {
    question: "A 35-year-old office worker presents with a persistent cough and chest congestion for the past week. She denies fever but reports fatigue and occasional wheezing. On examination, scattered rhonchi are heard bilaterally without any signs of consolidation. The patient requests medication to alleviate her symptoms.What medication might be recommended as a first-line treatment for this patient with acute bronchitis?",
    answers: [
      { text: "Albuterol", correct: true },
      { text: "Amoxicillin", correct: false },
      { text: "Ibuprofen ", correct: false },
      { text: "Loratadine", correct: false },
      { text: "Prednisolone", correct: false },
    ],
  },
  {
    question: "A 12 year old girl came to doctor with complains of cough dyspnea, chest tightness. There are decreased breath sounds in all lung fields. Which one of the following diagnoses is most likely in this patient?",
    answers: [
      { text: "Bronchial asthma", correct: true },
      { text: "COPD", correct: false },
      { text: "Pulmonary embolism with recurrent course", correct: false },
      { text: "Ankylosing spondylitis", correct: false },
      { text: "Primary pulmonary hypertension", correct: false },
    ],
  },
  {
    question: "A 27 years old male, came to the hospital with complaints of episodes of shortness of breath, wheezing, and coughing that develop up to 3-4 times a week, which are relieved with salbutamol (1-2 inhalations). The boundaries of the heart are within normal limits. Heart rate - 70 per minute, blood pressure - 125/80 mm Hg. PSV=84% of the proper value. What is the severity of bronchial asthma in this patient?",
    answers: [
      { text: "Moderate bronchial asthma;", correct: true },
      { text: "Mild persistent bronchial asthma;", correct: false },
      { text: "Mild intermittent bronchial asthma; ", correct: false },
      { text: "Severe bronchial asthma;", correct: false },
      { text: "Severity cannot be determined.", correct: false },
    ],
  },
  {
    question: "A 70-year-old female presents with chronic cough, sputum production, and wheezing. She has a significant smoking history. Which medication is most appropriate for managing her COPD symptoms?",
    answers: [
      { text: "Short-acting beta-agonists", correct: true },
      { text: "Inhaled corticosteroids ", correct: false },
      { text: "Long-acting muscarinic antagonists", correct: false },
      { text: "Oral corticosteroids", correct: false },
      { text: "Anticoagulints", correct: false },
    ],
  },
  {
    question: "A 65-year-old woman with a history of hypertension and type 2 diabetes presents with worsening shortness of breath, cough, and wheezing. She reports increased use of her rescue inhaler over the past month. On examination, there are bilateral expiratory wheezes heard. Which of the following diagnostic tests is most appropriate to confirm the diagnosis of bronchial asthma in this patient?",
    answers: [
      { text: "Spirometry", correct: true },
      { text: "Chest X-ray ", correct: false },
      { text: "Bronchoscopy", correct: false },
      { text: "High-resolution CT scan of the chest", correct: false },
      { text: "Bronchography", correct: false },
    ],
  },
  {
    question: "A 55-year-old man, presents to the clinic with a chronic cough, daily production of copious sputum, and recurrent chest infections over the past several years. He reports a history of childhood pneumonia and several episodes of bronchitis. On physical examination, coarse crackles are heard bilaterally on auscultation of the chest. Which of the following conditions is most likely responsible for Mr. Smith's symptoms?",
    answers: [
      { text: "Bronchiectasis", correct: true },
      { text: "Chronic obstructive pulmonary disease (COPD)", correct: false },
      { text: "Bronchial Asthma ", correct: false },
      { text: "Pulmonary fibrosis", correct: false },
      { text: "Pulmonary embolism", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman, presents with a one-week history of cough, fever, and chest pain. She recently had a dental procedure. On examination, there is localized tenderness over the left lower chest. Imaging reveals a cavitary lesion with an air-fluid level in the left lower lobe.What is the most likely source of infection in Ms. Patel's case?",
    answers: [
      { text: "Dental infection", correct: true },
      { text: "Gastrointestinal tract infection", correct: false },
      { text: "Urinary tract infection", correct: false },
      { text: "Skin and soft tissue infection", correct: false },
      { text: "Upper respiratory tract infection ", correct: false },
    ],
  },
  {
    question: "A 53-year-old man presents with symptoms blood-tinged foul-smelling sputum, weight lost, productive cough over the last 3 month. Chest x-ray is unremarkable. What is the most appropriate next investigation in this case?",
    answers: [
      { text: "CT scan of chest", correct: true },
      { text: "Allergic test", correct: false },
      { text: "Lung function test", correct: false },
      { text: "Thoracoscopy ", correct: false },
      { text: "Thoracocentesis", correct: false },
    ],
  },
  {
    question: "A 50-year-old female, presents to the emergency department with complaints of sudden onset sharp chest pain and shortness of breath. She has a history of breast cancer and recently completed chemotherapy. On physical examination, decreased breath sounds are noted on the left side of the chest, and dullness to percussion is present.What diagnostic imaging modality is typically used to confirm the presence of pleural effusion?",
    answers: [
      { text: "Chest X-ray", correct: true },
      { text: "Computed tomography (CT) scan of the chest", correct: false },
      { text: "Magnetic resonance imaging (MRI) of the chest", correct: false },
      { text: "Electrocardiogram (ECG) ", correct: false },
      { text: "Lung function test", correct: false },
    ],
  },
  {
    question: "A 30-year-old female presents to the emergency department with acute-onset dyspnea and chest pain. She recently gave birth via cesarean section and has been immobile. On examination, she is tachycardic with a heart rate of 110 beats per minute and hypoxic with an oxygen saturation of 89% on room air. Which of the following is the most likely diagnosis?",
    answers: [
      { text: "Pulmonary embolism", correct: true },
      { text: "Cystic fibrosis", correct: false },
      { text: "Pulmonary tuberculosis", correct: false },
      { text: "Bronchiectasis ", correct: false },
      { text: "Pneumonia", correct: false },
    ],
  },
  {
    question: "A 55-year-old male, presents with worsening shortness of breath, fatigue, and peripheral edema over the past six months. He has a history of untreated sleep apnea. Physical examination reveals elevated jugular venous pressure and hepatomegaly. An echocardiogram shows right atrial and ventricular enlargement and an estimated pulmonary artery pressure of 50 mmHg. Which one of the following diagnoses is most likely in this patient?",
    answers: [
      { text: " Cor pulmonale", correct: true },
      { text: "lobar pneumonia", correct: false },
      { text: "Bronchial asthma", correct: false },
      { text: "Pulmonary fibrosis", correct: false },
      { text: "Cancer", correct: false },
    ],
  },
  {
    question: "A 65-year-old male, presents with progressive dyspnea on exertion and non-productive cough. He has a history of long-standing tobacco use. Physical examination reveals bilateral basal crackles and digital clubbing. Pulmonary function tests show restrictive lung disease. Echocardiography shows signs of right ventricular strain and an estimated pulmonary artery pressure of 40 mmHg. Which one of the following diagnoses is most likely in this patient?",
    answers: [
      { text: " Cor pulmonale", correct: true },
      { text: "Chronic bronchitis", correct: false },
      { text: "Bronchial asthma", correct: false },
      { text: "Pulmonary embolism", correct: false },
      { text: "Cystic fibrosis", correct: false },
    ],
  },
  {
    question: "A 50-year-old male, presents to the emergency department with complaints of sudden onset chest pain and difficulty breathing. He has a history of chronic obstructive pulmonary disease (COPD) and a recent exacerbation of his symptoms. On physical examination, he is diaphoretic and tachypneic.What diagnostic test is most appropriate to confirm the presence of cor pulmonale in Mr. Garcia?",
    answers: [
      { text: "Echocardiography", correct: true },
      { text: "Chest X-ray ", correct: false },
      { text: "Pulmonary function test", correct: false },
      { text: "Electrocardiogram (ECG)", correct: false },
      { text: "Pulsoxymetry", correct: false },
    ],
  },
  {
    question: "A 65-year-old female, presents to her primary care physician with complaints of persistent cough, wheezing, and chest tightness. She has a history of interstitial lung disease and is on long-term oxygen therapy. On physical examination, she has bibasilar crackles on auscultation. What diagnostic test should you consider?",
    answers: [
      { text: "ECG", correct: true },
      { text: "Pulsoxymetry", correct: false },
      { text: "Chest X-Ray", correct: false },
      { text: "Peakflowmetry", correct: false },
      { text: "Spirometry ", correct: false },
    ],
  },
  {
    question: "A 36-year-old man. UA: color red, specific weight 1009, acid reaction, protein 0,03 g / l, erythr 15-20-23 in the field of vision, suffering from chronic glomerulonephritis. What urinary finding will be the most specific ?",
    answers: [
      { text: "Red Cells casts", correct: true },
      { text: "Glucosuria", correct: false },
      { text: "Proteinuria ", correct: false },
      { text: "White Cells casts", correct: false },
      { text: "Increase Triglycerides", correct: false },
    ],
  },
  {
    question: "A 32-year-old women up to 10 weeks, after cold weather, oliguria and generalized edema. UA: color red, turbid, specific weight 1029, acid reaction, protein 0, 3 g / l, leuke 1-5-2 in the field of vision, erythr 10-15-23 the field of vision. Which drug can be prescribed the for glomerulonephritis in pregnant women up to 12 weeks?",
    answers: [
      { text: "Amoxiclav", correct: true },
      { text: "Biseptol ", correct: false },
      { text: "Ciprofloxacin", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "Penicillin", correct: false },
    ],
  },
  {
    question: "A 18-year-old man 2 weeks after cold weather infection developed oliguria, and generalized edema. UA: color red, turbid, leuke 10-15-23 in the field of vision, erythr 10-15-23 the field of vision. What should be the first measure for glomerulonephritis in clinic?",
    answers: [
      { text: "enal biopsy", correct: true },
      { text: "Cystoscopy", correct: false },
      { text: "Three glass sample", correct: false },
      { text: "Massive antibiotic therapy R", correct: false },
      { text: "Introvenous-pylographi", correct: false },
    ],
  },
  {
    question: " 40-year-old female comes with Loin pain. Urine examination shows 120 rbc/hpf. Urine microscopy revealed dysmorphic RBCs in urine. The site of origin is",
    answers: [
      { text: "Kidney", correct: true },
      { text: "Ureter", correct: false },
      { text: "Bladder", correct: false },
      { text: "Urethra", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Aviation delivered a sick man, 40 years old. Was 4 days in hospital for acute glomerulonephritis. Objectively: the patient's condition is serious, confused consciousness. Diuresis along the catheter 100 ml per day. UA: red-brown color, turbid, specific weight 1009, acid reaction, protein 1.9 g / l, leuke 10 in the field of vision, erythr> 100 in the field of vision BA: Hb 120g / l, er 4.8 * 10; tr 260 * 10; ESR 41mm / h, urea 34 mmol / l, creatinine 745 mkmol / l, potas - 8.7 mmol / l. Which of the following diagnoses is most likely in the patient?",
    answers: [
      { text: "Acute renal failure", correct: true },
      { text: "B Chronic kidney disease", correct: false },
      { text: "C Traumatic kidney injury", correct: false },
      { text: "D Anaphylactic shock", correct: false },
      { text: "A Pylonephritis", correct: false },
    ],
  },
  {
    question: "A man, 27 years old. Was 5 days drinking alcohol. Diuresis along the catheter 200 ml per day. BP 170/100 mm. hg. UA: red-brown color, turbid, specific weight 1019, acid reaction, protein 1.0 g / l, leuke 10 in the field of vision, erythr> 100 in the field of vision BA: Hb 150g / l, er 4.8 * 10; tr 260 * 10; ESR 51mm / h, creatinine 645 mkmol / l, potas - 9.7 mmol / l.  Which combination will be preference to the treatment of acute renal injury,?",
    answers: [
      { text: "Diuretics, ACE-inhibitors", correct: true },
      { text: "Heparin, indomethacin, courantil", correct: false },
      { text: "Glucocorticosteroids ACE-inhibitors ", correct: false },
      { text: "Indomethacin, cytostatics.", correct: false },
      { text: "Cytostatics, Diuretics", correct: false },
    ],
  },
  {
    question: "A 56-year-old man 3 month ago after developed oliguria 400 ml/day, BP 160/100 mm. and generalized edema. UA: color yellow, turbid, specific weight 1009, acid reaction, protein 0,3 g / l, leuke 10 in the field of vision, erythr abs. the field of vision. GFR-12 ml/min/1,73 m2, creatinine level 320 mkmol/l. What is the most likely clinical diagnosis?",
    answers: [
      { text: "A Chronic kidney disease", correct: true },
      { text: "B Semilunar glomerulonephritis,", correct: false },
      { text: "C Pylonephritis,", correct: false },
      { text: "D Chronic renal failure,", correct: false },
      { text: "E Proliferative glomerulonephritis", correct: false },
    ],
  },
  {
    question: "A man, 40 years old. 3 weeks ago visiting in hospital for chronic glomerulonephritis. Diuresis along the catheter 800 ml per day. UA: red-brown color, turbid, specific weight 1009, acid reaction, protein 2,0 g / l, leuke 5 in the field of vision, erythr > 100 in the field of vision BA: Hb 110g / l, er 4.4 * 10; tr 220 * 10; ESR 51mm / h: urea 34 mmol / l, creatinine 145 mkmol / l. What formidable complication did the patient develop?",
    answers: [
      { text: "Chronic kidney disease", correct: true },
      { text: "Acute renal failure ", correct: false },
      { text: "C Traumatic kidney injury", correct: false },
      { text: "D Anaphylactic shock", correct: false },
      { text: "E Pylonephritis", correct: false },
    ],
  },
  {
    question: "A 26-year-old woman 1 weeks after cold weather infection developed oliguria, dysuria. UA: color yellow, turbid, specific weight 1019, acid reaction, protein 0, 3 g / l, leuke 15-15-25 in the field of vision, erythr abs. the field of vision. What  instrumental examination is necessary for diagnosing chronic pyelonephritis?",
    answers: [
      { text: "Ultrasound of the kidneys", correct: true },
      { text: "Retrograde pyelography", correct: false },
      { text: "Chest X-ray", correct: false },
      { text: "Cystoscopy, three-glass test", correct: false },
      { text: "Chromocystography ", correct: false },
    ],
  },
  {
    question: "A 32-year-old pregnant women up to 12 weeks, after cold weather, oliguria, dysuria and generalized edema. UA: color yellow, turbid, specific weight 1029, acid reaction, protein 0, 003 g / l, leuke 10-15-23 in the field of vision, erythr abs. the field of vision. Which drug you would prescribe  for pyelonephritis in pregnant women up to 12 weeks?",
    answers: [
      { text: "Amoxiclav", correct: true },
      { text: "Biseptol ", correct: false },
      { text: "Ciprofloxacin", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "Penicillin", correct: false },
    ],
  },
  {
    question: "A 56-year-old man 3 month ago after developed oliguria 400 ml/day, BP 160/100 mm. and generalized edema. UA: color yellow, turbid, specific weight 1009, acid reaction, protein 0,3 g / l, leuke 10 in the field of vision, erythr abs. the field of vision. GFR-12 ml/min/1,73 m2, creatinine level 320 mkmol/l. What is the clinical diagnosis?",
    answers: [
      { text: "A Chronic renal failure", correct: true },
      { text: "B Semilunar glomerulonephritis", correct: false },
      { text: "C Pylonephritis", correct: false },
      { text: "D Chronic kidney disease", correct: false },
      { text: "E Proliferative glomerulonephritis", correct: false },
    ],
  },
  {
    question: "A 56-year-old woman 1 month ago after developed Pale skin, oliguria 300 ml/day, BP 230/110 mm. and generalized edema. BA Hb 72 g/l, GFR-12 ml/min/1,73 m2, creatinine level 0.8-1.0 mmol / l.  To combination of which of the followings preference is given for the treatment of chronic renal failure,?",
    answers: [
      { text: "Eritropoitin, ACE-inhibitors", correct: true },
      { text: "Heparin, indomethacin, courantil", correct: false },
      { text: "Glucocorticosteroids, AСE-inhibitors", correct: false },
      { text: "Indomethacin, cytostatics.", correct: false },
      { text: "Cytostatics, Diuretics", correct: false },
    ],
  },
  {
    question: "A 36-year-old man, from life history chronic glomerulonephritis last 10 years. Decrises urine out put for the last 14 day less than 400 ml. BP = 160/95 mm Hg Creatinine - 600 μmol / L, potassium - 7.2 mmol / L. GFR-12 ml/min. What are the tactics of patient management?",
    answers: [
      { text: " Hemodialysis", correct: true },
      { text: "Cystoscopy", correct: false },
      { text: "Coronaragraphy", correct: false },
      { text: "Sergery", correct: false },
      { text: "Intravenous-pylographi", correct: false },
    ],
  },
  {
    question: "What is the most common extraglandular manifestation of Sjogren's syndrome?",
    answers: [
      { text: "Arthritis", correct: true },
      { text: "Primary biliary cirrhosis", correct: false },
      { text: "Vasculitis", correct: false },
      { text: "Renal tubular acidosis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 48-year-old woman with morning stiffness & painful joints of the handswas diagnosed as a case of Rheumatoid arthritis. X-ray of the hand showed joint space loss & subchondral erosion. Which part of the spine is most commonly affected in such patients having Rheumatoid arthritis? ",
    answers: [
      { text: "Cervical ", correct: true },
      { text: "Lumbar ", correct: false },
      { text: "Thoracic", correct: false },
      { text: "Sacral", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 56-year-old woman with hypertension & Type 2 DM presented with morning stiffness & painful joints was diagnosed with Rheumatoid arthritis recently. Which of the following is the most common cardiac involvement in such patients having rheumatoid arthritis?",
    answers: [
      { text: "Pericarditis ", correct: true },
      { text: "Cardiomyopathy ", correct: false },
      { text: "Myocarditis ", correct: false },
      { text: "Endocarditis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient with urethritis developed swelling and pain in the left knee, urethral swab is positive for chlamydia. What is the most likely diagnosis?",
    answers: [
      { text: "Psoriatic arthritis Reactive arthritis", correct: true },
      { text: "Septic arthritis", correct: false },
      { text: "Sjogren’s syndrome", correct: false },
      { text: "Reactive arthritis", correct: false },
      { text: "Felty syndrome", correct: false },
    ],
  },
  {
    question: "A 42-year-old male complains of pain in the lumbar region, restricting their mobility. Radiographic findings include bilateral sacro-iliitis and lower lumbar spine ankylosis. Which of the following treatment would you recommend?",
    answers: [
      { text: "Sulfasalazin", correct: true },
      { text: "D-penicillamine ", correct: false },
      { text: "Chondroitin sulfate", correct: false },
      { text: "Leflunomide", correct: false },
      { text: "Hyaluronic acid intra-articular injection", correct: false },
    ],
  },
  {
    question: "A 62-year-old woman diagnosted with high titer of anti–cyclic citrullinated peptide antibody, joint deformity. Which of the following specify drug for the basic therapy?",
    answers: [
      { text: "Methotrexate", correct: true },
      { text: "Aspirin", correct: false },
      { text: "Allopurinol", correct: false },
      { text: "Amoxicilline ", correct: false },
      { text: "Chondroitine sylfate", correct: false },
    ],
  },
  {
    question: "A 48-year-old was diagnosed with rheumatoid arthritis and was taking methotrexate 20 mg per week without adequate response. On examination joints are swollen and tender. Which of the following treatment regimens would you recommend?",
    answers: [
      { text: "Methotrexate+sulfasalazine+hydroxychloroquine", correct: true },
      { text: "Azathioprine+Mycophenolate ", correct: false },
      { text: "Azathioprine+prednisolone+non-steroidal anti-inflammatory drugs", correct: false },
      { text: "Prednisolone+intravenous cyclophosphamide", correct: false },
      { text: "Prednisolone+methotrexate", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is associated with drug-induced lupus erythematosus?",
    answers: [
      { text: "Hydralazine", correct: true },
      { text: "Metformin", correct: false },
      { text: " Bupivacaine", correct: false },
      { text: "Acetaminophen", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A middle-aged woman presented with body ache and easy fatiguability. She also complained of knee pain and dry mouth. On examination, she had parotid swelling. Which of the following serologies is likely to be positive in the given clinical condition?",
    answers: [
      { text: "Anti Ro/SS-A", correct: true },
      { text: "Anti topoisomerase", correct: false },
      { text: "Anti centromere", correct: false },
      { text: "U1-RNP", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The patient of 38 years has arrived with complaints to morning stiffness, flexion of proximal interphalangeal joints and hyperextension of distal interphalangeal joints. Which one of following diagnoses is most likely in this patient?",
    answers: [
      { text: "Rheumatoid arthritis with Boutonniere deformity", correct: true },
      { text: "Rheumatoid arthritis with Swan-neck deformity", correct: false },
      { text: "Ostheoarthritis with Herheden's deformity", correct: false },
      { text: "Ostheoarthritis with Bouchard‘s deformity", correct: false },
      { text: "Gout with Tophi", correct: false },
    ],
  },
  {
    question: "A 35 year-old female complains of pain and swelling in both wrist and knees for 3 month. There is increased stiffness in the hands early in the morning, which last close to 40 min. Which one of following diagnoses is most likely in this patient?",
    answers: [
      { text: "Rheumatoid arthritis", correct: true },
      { text: "Reiter's syndrome", correct: false },
      { text: "Gout ", correct: false },
      { text: "Acute rheumatic fever", correct: false },
      { text: "Ankylosing spondylitis", correct: false },
    ],
  },
  {
    question: "A 30-year-old female complains of pain in wrist, proximal interphalangeal joints. Labarotory findings include positive anti–cyclic citrullinated peptide antibody, positive rheumatoid factor. Which of the following treatment regimens would you recommend?",
    answers: [
      { text: "Methotrexate 7.5 mg per week", correct: true },
      { text: "D-penicillamine 200 mg per day", correct: false },
      { text: "Allopurinol 100 vg per day", correct: false },
      { text: "Methotrexate 7.5 mg per day ", correct: false },
      { text: "D-penicillamine 200 mg per week", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman diagnosed with rheumatoid arthritis takes methotrexate 7.5 mg per week. The woman became pregnant. What is your next tactic?",
    answers: [
      { text: "Prescribe hydroxychloroquine without methotrexate", correct: true },
      { text: "Reduce the dose of methotrexate", correct: false },
      { text: "Prescribe hydroxychloroquine+ methotrexate", correct: false },
      { text: "Continue methotrexate ", correct: false },
      { text: "Stop treatment", correct: false },
    ],
  },
  {
    question: "Which of the followings is the most commonly seen dyslipidaemia associated Diabetes mellitus?",
    answers: [
      { text: "↑ Triglycerides", correct: true },
      { text: "↑ HDL ", correct: false },
      { text: "↓ Triglycerides", correct: false },
      { text: "↓ Cholesterol", correct: false },
      { text: "↑ Cholesterol", correct: false },
    ],
  },
  {
    question: "A 45 year old male patient was brought to emergency with history of unbearable abdominal pain for the past 24 hours associated with 3 episodes of vomiting.Ultrasound shows presence of acute pancreatitis. Which of the following will help you differentiate b/w acute pancreatitis and Diabetic ketoacidosis? ",
    answers: [
      { text: "Serum lipase ", correct: true },
      { text: "Serum amylase ", correct: false },
      { text: "Decreased glucagon ", correct: false },
      { text: "Hyperglycaemia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 33-year-old woman presented to her general practitioner for prophylactically visit She is 27 week pregnant. Her fasting plasma glucose is 99 mg/dl. What diagnose does she have?",
    answers: [
      { text: "Gestational diabetes mellitus", correct: true },
      { text: "Normal glucose profile ", correct: false },
      { text: "Impaired fasting glycaemia", correct: false },
      { text: "Impaired glucose tolerance", correct: false },
      { text: "Diabetes mellitus type 1", correct: false },
    ],
  },
  {
    question: "A middle aged man is admitted with RTA and bleeding from the scalp. He is unconscious. A card in his pocket reveals that he is a known diabetic on Glimipiride and Metformin, 2 tablets twice daily. What should be the next step?",
    answers: [
      { text: "Airway, CT scan, Blood Sugar if <70 start dextrose", correct: true },
      { text: "Send blood for tests, start iv glucose and send for CT head", correct: false },
      { text: "Start normal saline and send for CT head ", correct: false },
      { text: "Start Dextrose solution and send for CT head ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 59 year old men came to hospital for prophylactically visit without any symptoms. His BMI is 28 kg/m2. His fasting plasma glucose is 115 mg/dl. His 2h post oral glucose tolerance test glucose level is 180 mg/dl. What medication should be used for prevention of diabetes type 2?",
    answers: [
      { text: "Metformin", correct: true },
      { text: "Glibenclomide", correct: false },
      { text: "Kanagliflazine ", correct: false },
      { text: "Pioglitazone", correct: false },
      { text: "Sitagliptine", correct: false },
    ],
  },
  {
    question: "Man, 67-year-old presented to the clinic with bradycardia, weight gain. Two years ago he had transphenoidal adenoma surgery. TSH – 0,01 (N-0,4-4 MIU/ml), fT4 – 4 (N-9-25 mmol/l). What diagnose does he has?",
    answers: [
      { text: "Secondary hypothyroidism", correct: true },
      { text: "Primary hyperthyroidism", correct: false },
      { text: "Secondary hyperthyroidism", correct: false },
      { text: "Iatrogenic hyperthyroidism", correct: false },
      { text: "Primary hypothyroidism ", correct: false },
    ],
  },
  {
    question: "A 49-year-old woman presented to the clinic with symptoms of anxiety and palpitations. On examination, she had tachycardia with a heart rate of 90 beats/minute, bilateral tremors, and a small goiter. TFT results: free T4 22.5 pmol/L (11.5–19.7), TSH 0.08 mU/L (0.35–5.5, TSH receptor AB is positive. What diagnose does she has?",
    answers: [
      { text: "Hyperthyroidism", correct: true },
      { text: "Hypothyroidism", correct: false },
      { text: "Hashimoto thyroiditis", correct: false },
      { text: "Acute thyroiditis", correct: false },
      { text: "Sub-acute thyroiditis", correct: false },
    ],
  },
  {
    question: "A 25-year-old beautician, diagnosed as having Grave’s disease 6 weeks ago, presented to medical assessment unit with reduced vision. She was taking carbimazole (40 mg/day) for 6 weeks and had noticed an improvement in her initial symptoms of anxiety, palpitations, and diarrhea since the initiation of the therapy. What long-term treatment you will give?",
    answers: [
      { text: " I131 ablation", correct: true },
      { text: "Thiamazole", correct: false },
      { text: "Levothyroxine", correct: false },
      { text: "Dexamethasone", correct: false },
      { text: "Thyroid surgery", correct: false },
    ],
  },
  {
    question: "A 46-year-old man has mild renal failure and hypertension which is proving difficult to manage. CT scan shows both a small adrenal tumor and bilateral hyperplasia. Which of the following is the best test to make a definitive diagnosis?",
    answers: [
      { text: "Selective adrenal vein sampling", correct: true },
      { text: "Dexamethasone suppression test ", correct: false },
      { text: "NP-59 adrenal scintigr", correct: false },
      { text: "Adrenal MRI ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Patient 39 years old went to the doctor with darkening of the skin and gums, weakness, rapid weight loss (by 10 kg in the last 3 months), general weakness, irritability, poor appetite, a feeling of heaviness in the epigastric region and nausea, increasing after eating. BP is 70/50 mm.hg. What treatment you will prescribe?",
    answers: [
      { text: "Cortisol", correct: true },
      { text: "Mitotan", correct: false },
      { text: "Insulin", correct: false },
      { text: "Adrenaline", correct: false },
      { text: "L-thyroxin ", correct: false },
    ],
  },
  {
    question: "A 35-year-old patient suffers from attacks of arterial hypertension up to 220/140 mmHg, accompanied by tremor, sweating, tachycardia, with a spontaneous decrease in blood pressure after 30 minutes. Catecholamines in blood are high. What treatment you will prescribe?",
    answers: [
      { text: "α-blockers", correct: true },
      { text: "ACE inhibitors", correct: false },
      { text: "ARB", correct: false },
      { text: "Ca-channel blockers", correct: false },
      { text: "Diuretics", correct: false },
    ],
  },
  {
    question: "A 60-year-old male presented with a 4-week history of polyuria, polydipsia, and left-sided abdominal pain. On examination, he was apyrexial. A 1.5-cm neck lump was palpable and had a firm consistency. There was no lymphadenopathy and systemic examination showed mild left renal angle tenderness. Investigations: calcium 3.92 mmol/L (2.2–2.6), phosphate 0.45 mmol/L (0.8–1.5), iPTH 92 pmol/L (1.6–7.2), randome glucose 6.0 mmol/L. What is the next step in diagnosis?",
    answers: [
      { text: "Neck CT", correct: true },
      { text: "MRI of pituitary gland ", correct: false },
      { text: "CT of adrenal gland", correct: false },
      { text: "CT of kidneys", correct: false },
      { text: "MRI of abdomen", correct: false },
    ],
  },
  {
    question: "A 49-year-old male presented with a 4-week history of polyuria, polydipsia, and left-sided abdominal pain. On examination, he was apyrexial. A 1.5-cm neck lump was palpable and had a firm consistency. There was no lymphadenopathy and systemic examination showed mild left renal angle tenderness. Investigations: calcium 3.92 mmol/L (2.2–2.6), phosphate 0.45 mmol/L (0.8–1.5), iPTH 92 pmol/L (1.6–7.2), randome glucose 6.0 mmol/L. Which one of the following is the most likely cause of his clinical and biochemical profile?",
    answers: [
      { text: "Parathyroid adenoma", correct: true },
      { text: "Diabetes mellitus ", correct: false },
      { text: "Hypoparathyroidism", correct: false },
      { text: "Secondary hyperperathyroidism", correct: false },
      { text: "Tertiary hyperparathyroidism", correct: false },
    ],
  },
  {
    question: "In patient marrow examination the megaloblastic type of hematopoiesis is seen. What kind of anemia from the followings is most probable?",
    answers: [
      { text: "Vitamin B12 deficiency", correct: true },
      { text: "Vitamin C deficiency", correct: false },
      { text: "Impaired intestinal absorption of vitamin B12 and folic acid ", correct: false },
      { text: "Increased need for folic acid or vitamin B-12 due to intense erythropoiesis", correct: false },
      { text: "Calcium deficiency", correct: false },
    ],
  },
  {
    question: "A 29 years old woman presents with Hb 7,1g/dl, MCV – 108fl raised MCV (mean cell volume) and normal MCHC (mean cell hemoglobin concentration). Which of the following types of anemia is the most probable?",
    answers: [
      { text: "Folic acid deficiency", correct: true },
      { text: "Beta thalassemia", correct: false },
      { text: "Sideroblastic anemia ", correct: false },
      { text: "Iron deficiency anemia", correct: false },
      { text: "Sickle cell anemia", correct: false },
    ],
  },
  {
    question: "A 70 years old male presents with pallor and mild icterus. His Hb is 6,9g/dl and MCV is 130fl. Which of the following investigations should be the next step?",
    answers: [
      { text: "Serum B12, B9", correct: true },
      { text: "Serum B6, B8 ", correct: false },
      { text: "Serum B8", correct: false },
      { text: "Coombs test", correct: false },
      { text: "Serum erythropoietin", correct: false },
    ],
  },
  {
    question: "A 65 years old woman presents with gastric atrophy. Her Hb 5,7g/dl, MCV – 114fl, Serum folate 8 ng/ml, Serum vitamin B12 40ng/ml, Serum iron 160mcg/dl. Which of the followings is a best choice for treatment?",
    answers: [
      { text: "Hydroxocobalamin intramuscular injections", correct: true },
      { text: "Folic acid oral supplements", correct: false },
      { text: "Ferrous sulphate oral supplements ", correct: false },
      { text: "Cyanocobalamin oral supplements", correct: false },
      { text: "Iron Dextran intramuscular injections", correct: false },
    ],
  },
  {
    question: "A patient of Hemophilia received multiple blood transfusions. Which of the following metabolic abnormalities can be seen in a patient?",
    answers: [
      { text: "Metabolic alkalosis", correct: true },
      { text: "Respiratory alkalosis", correct: false },
      { text: "Metabolic acidosis", correct: false },
      { text: "Respiratory acidosis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 72-year-old male presented with complaints of progressive cervical lymphadenopathy & night sweats. On examination, he was found to have pallor & non-blanching petechia in his ankles. Initial investigations revealed leukocytosis. On detailed evaluation,smudge cells are seen in peripheral smear. The BCL-2 inhibitor useful in this patient would be? ",
    answers: [
      { text: "Venetoclax", correct: true },
      { text: "Fludarabine ", correct: false },
      { text: "Cladiribine ", correct: false },
      { text: "Pentostatin ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An 80-year-old, asymptomatic man presents with a Total leucocyte count of 1 lakh, with 80% lymphocytes and 20°/o PMN. What is the most probable diagnosis? ",
    answers: [
      { text: "CLL", correct: true },
      { text: "HIV", correct: false },
      { text: "CML", correct: false },
      { text: "TB", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 62-year-old male was found to have clinical features of Chronic Myeloid Leukemia (CML) on peripheral blood smear. On detailed evaluation, the patient was also found to have T3151 mutation in BCR-ABL. What is the first line treatment for this patient?",
    answers: [
      { text: "Ponatinib ", correct: true },
      { text: "Bosutinib ", correct: false },
      { text: "Tofacitinib ", correct: false },
      { text: "Nilotinib", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 7 years old boy presents with fever up to 38,5 C that lasts 9 days, weakness, loss of appetite, frequent nasal bleedings during 3 months. On physical examination: pallor of the skin and mucous membrane, splenomegaly and cervical lymph nodes enlargement. His Hb- 6g/dl, RBC- 2,2x1012/l, WBC count of 17x109/l, blasts-25%; platelets are reduced to 50x109/l. After marrow examination, cytochemistry and immunological tests B-ALL was confirmed. Which of the following investigations should be performed else for prognosing?",
    answers: [
      { text: "Cytogenetic analysis", correct: true },
      { text: "Chest X-ray", correct: false },
      { text: "Lymph node biopsy", correct: false },
      { text: "Liver ultrasound", correct: false },
      { text: "Serum Iron ", correct: false },
    ],
  },
  {
    question: "A 40-year male complains of hot flushes each time he bathes. On investigation his Hb is 20 g/d L, Platelet: 1,89,000/µ L, WBC: 30,000/µL, Investigation revealed JAK2 mutation. What is the most likely diagnosis? ",
    answers: [
      { text: "Polycythemia Vera ", correct: true },
      { text: "Progressive massive fibrosis ", correct: false },
      { text: "Chronic myeloid leukaemia ", correct: false },
      { text: "Essential thrombocytosis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 70 years old man presents with a platelet count of 720x109/L with abnormalities in size, shape and granularity of platelets. WBC count is 12x109/L, hemoglobin is 11g/dl and Philadelphia chromosome is absent. Which of the followings is the most likely diagnosis?",
    answers: [
      { text: "Polycythemia vera ", correct: true },
      { text: "Chronic myeloid leukemia", correct: false },
      { text: "Leukemoid reaction", correct: false },
      { text: "Myelofibrosis", correct: false },
      { text: "Essential thrombocythemia ", correct: false },
    ],
  },
  {
    question: "A 71 years old women presents with history of nose bleeds, fever for 3 weeks. On physical examination paleness of skin and mucous membrane, purpura was noticed. Investigations show hemoglobin of 7.3 gr/dl, RBC- 1,8x1012/l, WBC- 1,5x109/l, Pt- 25x109/l. Which of the following investigations should be performed next for diagnosis?",
    answers: [
      { text: "Bone marrow examination", correct: true },
      { text: "Lymph node biopsy", correct: false },
      { text: "Peripheral blood smear test ", correct: false },
      { text: "Iron tests", correct: false },
      { text: "Coagulating profile", correct: false },
    ],
  },
  {
    question: "A 70 years old male presents with polycythemia. Which of the following factors can help you to differentiate primary polycythemia from secondary?",
    answers: [
      { text: "Serum erythropoietin level", correct: true },
      { text: "RBC count ", correct: false },
      { text: "Mean corpuscular volume", correct: false },
      { text: "Hemoglobin level", correct: false },
      { text: "Hematocrit level", correct: false },
    ],
  },
  {
    question: "A 47 years old woman, called an ambulance with complaints of palpitation, shortness of breath, irregular heartbeat and fever for the last 2 hours. On examination: the general condition is satisfactory. Body temperature is 38°C. BR -22 per minute. During auscultation, breathing is harsh, there is no wheezing. Heart rate is 120 beats per minute, the rhythm is irregular. BP is -120/90 mmHg. On the cardiogram, P waves occur too soon after T waves, bigemenias in the leads and normal QRS. What’s the patients diagnose by ECG?",
    answers: [
      { text: "Extrasystoles", correct: true },
      { text: "Paroxysmal tachycardia", correct: false },
      { text: "Atrial fibrillation", correct: false },
      { text: "Weakness of the sinus node ", correct: false },
      { text: "AV blockade", correct: false },
    ],
  },
  {
    question: "A 57 years old man, called an ambulance with complaints of palpitation, shortness of breath, irregular heartbeat and fever for the last 3 hours. On examination: the general condition is satisfactory. Body temperature is 38°C. BR -22 per minute. During auscultation, breathing is harsh, there is no wheezing. Heart rate is 260 beats per minute, the rhythm is irregular. BP is -130/90 mmHg. On the cardiogram, positive F waves on V1-V6 leads. What’s the patients diagnose by ECG?",
    answers: [
      { text: " Atrial flutter", correct: true },
      { text: "Paroxysmal tachycardia", correct: false },
      { text: "Atrial fibrillation", correct: false },
      { text: "Extrasystoles", correct: false },
      { text: "Weakness of the sinus node ", correct: false },
    ],
  },
  {
    question: "55 years old man, called an ambulance with complaining of shortness of breath with minor physical exertion, rapid regular heartbeat and palpitations. On examination: the general condition is relatively satisfactory. Body temperature is 37.3°C. BR -23 per minute. During auscultation, breathing is harsh, there is no wheezing. Heart rate is 255 beats per minute, the rhythm is wrong. BP is -120/90 mmHg. On the cardiogram, there are no P waves, the presence of multi-amplitude, polymorphic multiple extrasystoles. From the ECG description you can think about paroxysmal tachycardia. What will be your fist aid as an ambulance doctor?",
    answers: [
      { text: "Heart defibrillation", correct: true },
      { text: "Cardio stimulation ", correct: false },
      { text: "Heart cardioversion", correct: false },
      { text: "Ablation", correct: false },
      { text: "Bypass", correct: false },
    ],
  },
  {
    question: "At a doctor's appointment, a 40-year-old man complains of headaches, blurry vision, numbness in the lower jaw, tinnitus, anxiety. From anamnesis: this condition has been bothering for the last 5 months, heredity is not burdened, he is registered with a doctor with a diagnosis of pheochromocytoma. Physical examination: no pathological noises are heard during auscultation of the heart, blood pressure is 150/90 mmHg, respiratory rate is 19 per minute, heart rate is 88 beats per minute. Presumably, what diagnosis can be made?",
    answers: [
      { text: "Secondary arterial hypertension", correct: true },
      { text: "Primary arterial hypertension ", correct: false },
      { text: "Hypertensive crisis", correct: false },
      { text: "Ischemic stroke", correct: false },
      { text: "Myocardial infarction", correct: false },
    ],
  },
  {
    question: "At a doctor's appointment, a 66-year-old woman complains of severe headache, blurry vision, a feeling of compression in the head, numbness in the lower jaw, tinnitus. From anamnesis: suffers from hypertension for the last 5 years. She takes antihypertensive medications regularly. This condition is noted during the day, after a stressful situation at work. Physical examination: the skin is clean. There is redness of the eyes. Heart tones are rhythmic, muted. Blood pressure = 210/120 mmHg. HR-90 beats per minute. Pathological reflexes are negative. The patient has a hypertensive crisis. What is the dose of Kaptopril in hypertensive crisis disease?",
    answers: [
      { text: "25mg", correct: true },
      { text: "10mg", correct: false },
      { text: "15mg", correct: false },
      { text: "20mg", correct: false },
      { text: "5mg", correct: false },
    ],
  },
  {
    question: "A 45 years old woman, complained of high blood pressure, headaches, oligomenorrhea, cough and sometimes shortness of breath. She also claims to feel a heartbeat. Anamnesis: the patient regularly consumes large amounts of salt in food, works as a financial analyst and abuses alcohol. Heredity is burdened. physical examination: the skin is clean, BR – 20 per minute, heart rate – 115 beats per minute, blood pressure – 135/85 mmHg. The doctor suspects hypertension. With which disease should a differential diagnosis be carried out?",
    answers: [
      { text: "Hyperaldosteronism", correct: true },
      { text: "Graves’ disease", correct: false },
      { text: "Hashimotos disease ", correct: false },
      { text: "Arterial asthma", correct: false },
      { text: "Cirrhosis of the liver", correct: false },
    ],
  },
  {
    question: "Angina pectoris is a manifestation of which of the followings ?",
    answers: [
      { text: "Decrease myocardial blood supply", correct: true },
      { text: "Aortic stenosis", correct: false },
      { text: "Mitral stenosis ", correct: false },
      { text: "Increase heart afterload", correct: false },
      { text: "Acute rheumatic fever", correct: false },
    ],
  },
  {
    question: "A 70-year-old woman at a doctor's appointment complaining of pain in the heart area of a compressive nature when walking more than 100 meters, duration 15 minutes, is stopped with nitroglycerin. Anamnesis: suffers from hypertension for more than 6 years. Physical examination: BR – 20 per minute, heart tones are normal, heart rate – 76 per minute, blood pressure – 130/90 mmHg. The doctor suggested angina pectoris. Which of the following functional classes of angina pectoris it would be?",
    answers: [
      { text: "III", correct: true },
      { text: "II", correct: false },
      { text: "I", correct: false },
      { text: "IV", correct: false },
      { text: "V", correct: false },
    ],
  },
  {
    question: "A 54-year-old man suddenly began to feel severe chest pain, which spread to his left arm and neck. He also experiences nausea and sweating. These symptoms have been going on for the last 20 minutes. Which of the following statements are true about the symptoms that a patient with acute coronary syndrome may experience?",
    answers: [
      { text: "Acute coronary syndrome may be a manifestation of myocardial infarction and requires urgent medical attention.", correct: true },
      { text: "The symptoms of acute coronary syndrome always go away immediately after rest.", correct: false },
      { text: "Acute chest pain extending to the left arm is a common symptom of acute coronary syndrome. ", correct: false },
      { text: "Acute coronary syndrome has no connection with neck pain or nausea.", correct: false },
      { text: "Acute chest pain in acute coronary syndrome usually disappears within 5 minutes.", correct: false },
    ],
  },
  {
    question: "A 65-year-old male presents with retrosternal chest pain radiating to his neck and jaw. The pain occurs during exertion and is relieved by rest or nitroglycerin. What is the most likely diagnosis?",
    answers: [
      { text: "Stable angina.", correct: true },
      { text: "Unstable angina.", correct: false },
      { text: "Variant (Prinzmetal's) angina.", correct: false },
      { text: "Microvascular angina.", correct: false },
      { text: "Postinfarction angina.", correct: false },
    ],
  },
  {
    question: "A 50-year-old man suddenly began to complain of shortness of breath with attacks of suffocation, dry cough, sweating, severe weakness. physical examination: cold sticky sweat, acrocyanosis, BR 30 per minute. The heart tones are arrhythmic, the heart rate is 154 beats per minute. BP 160/90 mmHg is registered with a doctor with a diagnosis of coronary heart disease. Angina of tension. FC II. Atherosclerotic cardiosclerosis. Prescribed medications are taken irregularly. On the electrocardiogram: ST segment depression in V3-V4, single ventricular extrasystoles. Which of the following drugs should be used primarily for emergency care?",
    answers: [
      { text: "Nitroglycerin", correct: true },
      { text: "Heparin", correct: false },
      { text: "Aspirin", correct: false },
      { text: "Morphine", correct: false },
      { text: "Captopril ", correct: false },
    ],
  },
  {
    question: "A patient, a 60-year-old man, came to you with complaints of bouts of chest pain that occur suddenly, increase during physical activity and often at night. Anamnesis: suffers from arterial hypertension, takes antihypertensive medications regularly. The patient has been smoking for more than 20 years and uses alcohol socially. Heredity is burdened. The doctor suspects unstable angina. What is the doctor's next step?",
    answers: [
      { text: "Prescribe nitrates for urgent pain relief.", correct: true },
      { text: "Perform coronary angiography and further stenting of the coronary arteries.", correct: false },
      { text: "Recommend that the patient start taking acetylsalicylic acid daily", correct: false },
      { text: "Prescribe antianginal treatment with beta-blockers and calcium antagonists.", correct: false },
      { text: "Perform coronary bypass surgery.", correct: false },
    ],
  },
  {
    question: "Which of the following groups of drugs are the most effective in the treatment of hypertrophic cardiomyopathy?",
    answers: [
      { text: "Beta blockers;", correct: true },
      { text: "ACE inhibitors;", correct: false },
      { text: "Diuretics;", correct: false },
      { text: "Calcium antagonists.", correct: false },
      { text: "Anticoagulants", correct: false },
    ],
  },
  {
    question: "A 50 years old gentleman presents in emergency department with fever, chest pain with deep breath, shortness of breath on exercise. He has AMI 4 weeks back. What is the most likely diagnosis?",
    answers: [
      { text: "Pulmonary embolism", correct: true },
      { text: "Dilated cardiomyopathy", correct: false },
      { text: "Pulmonary edema", correct: false },
      { text: "Preicarditis", correct: false },
      { text: "Valvular heart disease ", correct: false },
    ],
  },
  {
    question: "A 46-year-old man, for several months he has been worried about fever, night sweats, repeated vomiting, pain in the knee joints, a feeling of palpitation, physical examination: the skin and mucous membranes are clean, pale. The temperature is 38.0. The terminal phalanges of the fingers in the form of \"drumsticks\", Osler nodules on the palms. Heart tones are rhythmic, tachycardia is 118 beats per minute. 100/70 mmHg UAC: Hb-101g/l, erythrocytes – 4,4x10*12, platelets – 305x10*9; leukocytes – 16x10*9, ESR – 40 mm/hour. From anamnesis: he is registered in a drug treatment center as a person who uses injecting drugs. The doctor prescribed prednisone. Which daily dose of prednisone it can be?",
    answers: [
      { text: "20mg", correct: true },
      { text: "10mg", correct: false },
      { text: "15mg", correct: false },
      { text: "5 mg", correct: false },
      { text: "25mg", correct: false },
    ],
  },
  {
    question: "A 25-year-old patient came to you with complaints of joint pain, fatigue and low physical activity. Her medical history indicates that she had rheumatic fever as a child, which was successfully cured. Physical examination revealed signs of inflammation in several joints, as well as an increase in the size of the left atrium. The patient also complains of abdominal pain and diarrhea. For the purpose of prevention, which drug is used?",
    answers: [
      { text: "Benzatin benzylpenicillin", correct: true },
      { text: "Azithromycin", correct: false },
      { text: "Amoxicillin", correct: false },
      { text: "Benzylpenicillin", correct: false },
      { text: "Cefuroxime ", correct: false },
    ],
  },
  {
    question: "A 50 years old gentleman presents in emergency department with fever, chest pain with deep breath, shortness of breath on exercise. He has AMI 4 weeks back. What is the most likely diagnosis?",
    answers: [
      { text: "Pulmonary embolism", correct: true },
      { text: "Dilated cardiomyopathy", correct: false },
      { text: "Pulmonary edema", correct: false },
      { text: "Preicarditis", correct: false },
      { text: "Valvular heart disease ", correct: false },
    ],
  },
  {
    question: "A 70-year-old woman has a history of dyspnoea and palpitations for six months. An ECG at that time showed atrial fibrillation. She was given digoxin, diuretics and aspirin. Which from the following drugs would you recommend ?",
    answers: [
      { text: "Varfarin", correct: true },
      { text: "Verapamil", correct: false },
      { text: "Clopidogrel", correct: false },
      { text: "Nirtoglycerin", correct: false },
      { text: "Calcium channels blockers", correct: false },
    ],
  },
  {
    question: "A 58-year-old woman attends  his family doctor with symptoms of  upper abdominal pain, diarrhea,  lightheadedness and weakness, peripheral neuropathy. Which one of the following diagnoses is most likely in this patient?",
    answers: [
      { text: "Chronic autoimmune gastritis", correct: true },
      { text: "Chronic gastritis B", correct: false },
      { text: "Eosinophilic gastritis", correct: false },
      { text: "Gastro-oesophageal reflux disease", correct: false },
      { text: "Reflux –gastritis", correct: false },
    ],
  },
  {
    question: "A 38-year-old man attends  his family doctor with symptoms of continuous burning midepigastric pain that is often exacerbated by food and recumbency, nausea, bilious vomiting. He had a history of back pain and taking Diclofenac for 6 months. Which one of the following diagnoses is most likely in this patient?",
    answers: [
      { text: "Type C gastritis ", correct: true },
      { text: "Chronic autoimmune gastritis", correct: false },
      { text: "Gastro-oesophageal reflux disease", correct: false },
      { text: "Reflux –gastritis", correct: false },
      { text: "Chronic cholecystitis", correct: false },
    ],
  },
  {
    question: "A 38-year-old man has had recurrent and at times severe epigastric abdominal pain for the last several years. Antacids have given him symptomatic relief. The most recent episode began 1 week ago and has not responded completely to antacids. The pain now wakes him up at night. He smokes one pack of cigarettes per day, and he takes aspirin several times a week. His family history is unremarkable. Physical examination reveals moderate epigastric tenderness without evidence of a mass. The stool is brown and positive for occult blood. What diagnostic tests should you consider?",
    answers: [
      { text: "Double-contrast upper GI radiographic ", correct: true },
      { text: "Ultrasonography ", correct: false },
      { text: " Electrogastrography", correct: false },
      { text: "Electrokymography", correct: false },
      { text: "Computed tomography ", correct: false },
    ],
  },
  {
    question: "A 36-year-old man completes a 14-day course of eradication of H. pylori, stool antigen test confirms. Two years later, he presents to the emergency department with a 2-hour history of severe, diffuse abdominal pain. He has been taking ibuprofen for the last 2 weeks. On physical exam, his abdomen is tender with involuntary guarding (rigid abdomen) and rebound tenderness. Vital signs are temperature 37°C, pulse 110 beats per minute (bpm), respirations 20/min, and blood pressure 110/70. What is the next step in diagnosis?",
    answers: [
      { text: "Abdominal radiographic ", correct: true },
      { text: "Upper gastrointestinal endoscopy ", correct: false },
      { text: " Electrogastrography", correct: false },
      { text: "Electrokymography", correct: false },
      { text: "Computed tomography ", correct: false },
    ],
  },
  {
    question: "A 38-year-old man gives chronic history of diarrhoea and blood in stool presents with multiple fistulae in the perineum and multiple stricture in small intestine. What is the most likely diagnosis?",
    answers: [
      { text: "Crohn's disease", correct: true },
      { text: "Radiation enteritis", correct: false },
      { text: "Ulcerative Colitis", correct: false },
      { text: "Ischemic bowel disease", correct: false },
      { text: "Irritable bowel syndrome", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman has a history of chronic diarrhea and gallstones and now has rectovaginal fistula. Which of the following is the most likely diagnosis?",
    answers: [
      { text: " Crohn disease", correct: true },
      { text: "Systemic lupus erythematosus ", correct: false },
      { text: "Ulcerative colitis", correct: false },
      { text: "Whipple's disease", correct: false },
      { text: "Colonic Carcinoma", correct: false },
    ],
  },
  {
    question: "A 45-year-old male presentes with recurrent episodes of bloody diarrhea & mucus for 5 years. Despite regular treatment with adequate doses of sulfasalazine, he has had several exacerbations of his disease and required several weeks of steroids for the control for flares. What should be the next line of treatment for him?",
    answers: [
      { text: "Azathioprine", correct: true },
      { text: "Methotrexate ", correct: false },
      { text: "Cyclosporine", correct: false },
      { text: "Cyclophosphamide", correct: false },
      { text: "Mercaptopurine", correct: false },
    ],
  },
  {
    question: "In which disease there can be no significant hepatomegaly?",
    answers: [
      { text: "Acute viral hepatitis", correct: true },
      { text: "Congestive heart failure", correct: false },
      { text: "Alcoholic hepatitis ", correct: false },
      { text: "Large-nodular cirrhosis of the liver", correct: false },
      { text: "Hemochromatosis", correct: false },
    ],
  },
  {
    question: "A 56-year-old male patient presents with abdominal pain in the right hypochondrium, fatigue, and loss of appetite, swelling in ankles. His liver function test shows serum AST 240 U/l  and ALT 180 U/l,. What is the most likely diagnosis?",
    answers: [
      { text: "Liver cirrhosis", correct: true },
      { text: "Chronic hepatitis C", correct: false },
      { text: "Alcoholic liver disease", correct: false },
      { text: "Acute hepatitis ", correct: false },
      { text: "Chronic hepatitis B", correct: false },
    ],
  },
  {
    question: "A 62-year-old male with decompensated liver cirrhosis presents with confusion and asterixis. On physical examination, he has a flapping tremor and a fetid breath odor. Laboratory studies show elevated ammonia levels. Imaging studies show cirrhosis. What is the most likely diagnosis?",
    answers: [
      { text: "Hepatic encephalopathy", correct: true },
      { text: "Portal vein thrombosis", correct: false },
      { text: "Hepatocellular carcinoma ", correct: false },
      { text: "Acute liver failure", correct: false },
      { text: "Hemochromatosis", correct: false },
    ],
  },
  {
    question: "A 60-year-old man with alcoholic liver cirrhosis presents with worsening ascites and a serum sodium level of 125 mEq/L. What is the best initial treatment?",
    answers: [
      { text: "Administer albumin infusion", correct: true },
      { text: "Start lactulose", correct: false },
      { text: "Initiate spironolactone therapy", correct: false },
      { text: "Increase diuretic dose ", correct: false },
      { text: "Antibiotic therapy", correct: false },
    ],
  },
  {
    question: "A 45-year-old male with chronic Hepatitis C infection presents with elevated liver enzymes and mild fibrosis on liver biopsy. Which of the following is the first-line treatment for chronic Hepatitis C?",
    answers: [
      { text: " Sofosbuvir and Ledipasvir combination therapy", correct: true },
      { text: "Ribavirin monotherapy", correct: false },
      { text: "Interferon-alpha monotherapy", correct: false },
      { text: "Lamivudine monotherapy", correct: false },
      { text: "Entecavir monotherapy", correct: false },
    ],
  },
  {
    question: "A 30-year-old female with chronic Hepatitis B infection and compensated cirrhosis presents for treatment. Which of the following medications is a first-line therapy for chronic Hepatitis B?",
    answers: [
      { text: "Entecavir", correct: true },
      { text: "Ribavirin", correct: false },
      { text: "Interferon-alpha", correct: false },
      { text: "Acyclovir", correct: false },
      { text: "Ribavirin", correct: false },
    ],
  },
  {
    question: "A 48-year-old female presents with recurrent right upper quadrant pain, nausea, and vomiting. On physical examination, there is tenderness in the right upper quadrant, Kera's sign, Ortner's sign are positive What is the most likely diagnosis?",
    answers: [
      { text: "Chronic cholecystitis ", correct: true },
      { text: "Acute cholecystitis  ", correct: false },
      { text: "Choledocholithiasis ", correct: false },
      { text: "Pancreatitis", correct: false },
      { text: "Chronic hepatitis", correct: false },
    ],
  },
  {
    question: "A 58-year-old woman presents with abdominal pain and steatorrhea. She has a history of chronic pancreatitis. Which enzyme replacement therapy is most effective for managing her symptoms? ",
    answers: [
      { text: "Lipase ", correct: true },
      { text: "Amylase ", correct: false },
      { text: "Trypsin ", correct: false },
      { text: "Chymotrypsin ", correct: false },
      { text: "Pepsin", correct: false },
    ],
  },
  {
    question: "On the 5th day of hospital stay for cholelithiasis, the patient’s body temperature rises and symptoms of intoxication increase. X-ray reveals an area of infiltration in the lower lobe of the right lung. What type of pneumonia is diagnosed by the doctor?",
    answers: [
      { text: "Nosocomial", correct: true },
      { text: "Atypical ", correct: false },
      { text: "Aspiration", correct: false },
      { text: "Friedlander;", correct: false },
      { text: "Community-acquired;", correct: false },
    ],
  },
  {
    question: "A 40-year-old male presents to the urgent care clinic with a two-day history of worsening cough, fever, and chest congestion. He reports feeling very tired and has missed work due to his symptoms. On examination, his temperature is 38.5°C, HR is 90 bpm, RR is 20 breaths/min, and oxygen saturation is 95% on room air. Chest auscultation reveals scattered rhonchi bilaterally. Kyungsoo asks about medications to help alleviate his symptoms. What is the most appropriate recommendation for medication in this patient?",
    answers: [
      { text: " Suggest over-the-counter nonsteroidal anti-inflammatory drugs (NSAIDs) for fever and discomfort", correct: true },
      { text: "Recommend a short course of oral corticosteroids to reduce inflammation", correct: false },
      { text: "Advise over-the-counter cough expectorants to help clear mucus", correct: false },
      { text: "Prescribe antibiotics to treat the underlying infection", correct: false },
      { text: "Prescribe Bronchodilators", correct: false },
    ],
  },
  {
    question: "28 years old female, turned to a paramedic with complaints of daily attacks of suffocation, difficulty breathing, and wheezing in the chest. Attacks are provoked by sharp unpleasant odors, dust, and smoke. After an attack, a small amount of viscous, glassy sputum is discharged. What is your preliminary diagnosis?",
    answers: [
      { text: "Bronchial asthma;", correct: true },
      { text: "Bronchopneumonia", correct: false },
      { text: "Allergic alveolitis", correct: false },
      { text: "Chronic simple bronchitis ", correct: false },
      { text: "Pulmonary emphysema;", correct: false },
    ],
  },
  {
    question: "A 50 years old, a trainer, complains of a cough with scanty mucous sputum, mainly in the morning, and decreased tolerance to physical activity. He has been smoking 20 cigarettes a day for 20 years, and has had cough syndrome for many years due to smoking. Questionnaire mMRC - 1 point, CAT - 4 points. R-gr: Focal and infiltrativechanges are not detected. Sinuses are free. Spirometry: Vital vital capacity - 86%, FEV - 82%,FEV/FVC - 67%. ECG: no changes detected. Sputum analysis: mucous membrane, with microscopy - single leukocytes in the field of view. What is your preliminary diagnosis?",
    answers: [
      { text: "COPD, stage I, risk group A;", correct: true },
      { text: "COPD, stage II, risk group B;", correct: false },
      { text: "COPD, stage II, risk group A;", correct: false },
      { text: "COPD, stage III, risk group C;", correct: false },
      { text: "COPD, stage I, risk group B.", correct: false },
    ],
  },
  {
    question: "A 70-year-old male with COPD presents with recurrent exacerbations requiring frequent hospitalizations. He has persistent symptoms despite optimal bronchodilator therapy. Which medication is most appropriate for reducing exacerbations in this patient?",
    answers: [
      { text: "Montelukast", correct: true },
      { text: "Azithromycin", correct: false },
      { text: "Roflumilast ", correct: false },
      { text: "Theophylline", correct: false },
      { text: "Mucolytics", correct: false },
    ],
  },
  {
    question: "A 55-year-old female with COPD presents with persistent cough, dyspnea, and fatigue despite optimal medical therapy. Pulmonary function tests reveal severe airflow limitation. Which surgical intervention is most appropriate for her condition?",
    answers: [
      { text: "Bronchial Thermoplasty", correct: true },
      { text: "Lung Volume Reduction Surgery (LVRS)", correct: false },
      { text: "Lung Transplantation", correct: false },
      { text: "Bullectomy ", correct: false },
      { text: "Segmentectomy", correct: false },
    ],
  },
  {
    question: "A 55-year-old male, presents with a four-week history of cough, fever, and malaise. He is a heavy smoker with a history of alcohol abuse. On examination, there is dullness to percussion over the right lower lung field. Imaging reveals a cavitary lesion with an air-fluid level in the right lower lobe. What is the most likely complication associated with Mr. Garcia's lung abscess?",
    answers: [
      { text: "Empyema", correct: true },
      { text: "Pneumothorax", correct: false },
      { text: "Pulmonary hypertension", correct: false },
      { text: "Brain abscess", correct: false },
      { text: "Sepsis", correct: false },
    ],
  },
  {
    question: "A 55-year-old male presents with a productive cough, dyspnea, and fatigue. He has a history of recurrent pneumonia. Chest CT scan demonstrates dilated bronchi filled with mucus. What is the most appropriate diagnostic test?",
    answers: [
      { text: "High-resolution CT scan", correct: true },
      { text: "Pulmonary function tests", correct: false },
      { text: "Chest X-ray", correct: false },
      { text: "Sputum culture ", correct: false },
      { text: "Peakphlowmetry", correct: false },
    ],
  },
  {
    question: "A 32 years old male patient presenting with complains fever, headache with chills. The patient had smoked 2 years now he stopped. Palpation determines normal, percussion determined dull sound, large bubbled damp rattles he read during auscultation. A CBC determines low leucocytes, slight low haemoglobin. X-ray shown obstructive infiltrate on right segment of lung. Its known its lung abscess what type of treatment should be given to this patient?",
    answers: [
      { text: "Amoxicillin + clindamycin", correct: true },
      { text: "Corticosteroids", correct: false },
      { text: "Anti depressants", correct: false },
      { text: "Immediately surgery", correct: false },
      { text: "Diuretics", correct: false },
    ],
  },
  {
    question: "Mr. Wang, a 65-year-old male, presents to the hospital with complaints of fatigue, shortness of breath, and leg swelling for the past two weeks. He has a history of hypertension and diabetes mellitus. On physical examination, decreased breath sounds are noted bilaterally, and dullness to percussion is present on both sides of the chest.What diagnostic procedure is performed to obtain pleural fluid for analysis?",
    answers: [
      { text: "Thoracentesis", correct: true },
      { text: "Bronchoscopy ", correct: false },
      { text: "Pulmonary function test", correct: false },
      { text: "Echocardiography", correct: false },
      { text: "Chest x-ray", correct: false },
    ],
  },
  {
    question: "A 65-year-old male presents to the clinic with complaints of chest pain and shortness of breath. He has a history of smoking and hypertension. On examination, he is tachypneic with a respiratory rate of 28 breaths per minute and hypoxic with an oxygen saturation of 87% on room air. Which of the following risk factors is most strongly associated with pulmonary embolism in this patient?",
    answers: [
      { text: "Obesity", correct: true },
      { text: "Diabetes mellitus", correct: false },
      { text: "Hyperlipidemia ", correct: false },
      { text: "Family history of coronary artery disease", correct: false },
      { text: "Alcoholism", correct: false },
    ],
  },
  {
    question: "A 60-year-old male, presents to the emergency department with complaints of increasing shortness of breath and swelling in his ankles for the past month. He has a history of chronic obstructive pulmonary disease (COPD) and a long-standing smoking habit. On physical examination, jugular venous distention and bilateral lower extremity edema are noted. What is the likely diagnosis for Mr. Smith's condition?",
    answers: [
      { text: "Cor pulmonale", correct: true },
      { text: "Pulmonary embolism", correct: false },
      { text: "Acute myocardial infarction involving the inferior wall. ", correct: false },
      { text: "Congestive heart failure", correct: false },
      { text: "Pulmonary tuberculosis", correct: false },
    ],
  },
  {
    question: "A 40-year-old female presents with fever, cough, and shortness of breath. She has a history of systemic lupus erythematosus (SLE) and is currently on immunosuppressive therapy. On examination, she appears ill and tachypneic. Chest X-ray reveals diffuse bilateral infiltrates. Arterial blood gas analysis shows a pH of 7.32, PaCO2 of 50 mmHg, PaO2 of 55 mmHg, and HCO3- of 24 mEq/L. What is the most likely diagnosis?",
    answers: [
      { text: "Acute respiratory distress syndrome (ARDS)", correct: true },
      { text: "Pulmonary embolism ", correct: false },
      { text: "Pneumonia", correct: false },
      { text: "Chronic obstructive pulmonary disease (COPD) exacerbation", correct: false },
      { text: "Bronchial asthma", correct: false },
    ],
  },
  {
    question: "A 60-year-old female, presents to the hospital with complaints of worsening shortness of breath and cough productive of pink-tinged sputum. She has a history of idiopathic pulmonary arterial hypertension and is on long-term vasodilator therapy. On physical examination, she has diffuse crackles bilaterally.What treatment modality is most appropriate for managing Ms. Wang's cor pulmonale?",
    answers: [
      { text: "Supplemental oxygen therapy", correct: true },
      { text: "Anticoagulation therapy ", correct: false },
      { text: "Inhaled corticosteroids", correct: false },
      { text: "Diuretic therapy", correct: false },
      { text: "Mucolytics", correct: false },
    ],
  },
  {
    question: "A 65-year-old female, presents to the emergency department with complaints of chest pain and palpitations. She has a history of chronic obstructive pulmonary disease (COPD) and atrial fibrillation. On physical examination, she has irregularly irregular heart sounds and bilateral leg swelling.What diagnostic test is most appropriate to assess the severity of Mrs. Thomas's cor pulmonale?",
    answers: [
      { text: "Echocardiography", correct: true },
      { text: "B Chest CT angiography", correct: false },
      { text: "Cardiac catheterization ", correct: false },
      { text: "Pulmonary function test", correct: false },
      { text: "Chest X-Ray", correct: false },
    ],
  },
  {
    question: "A 20-year-old man 2 weeks after cold weather infection developed oliguria, and generalized edema. UA: color red, turbid, specific weight 1008, acid reaction, protein 0, 009 g / l, leuke 1-2-3 in the field of vision, erythr 16-26-37 the field of vision. GFR-115 ml/min/1,73 m2. Which of the following diagnoses is most likely in the patient?",
    answers: [
      { text: " Acute glomerulonephritis", correct: true },
      { text: "Semilunar glomerulonephritis,", correct: false },
      { text: "Pylonephritis", correct: false },
      { text: "Lipoid nephrosis,", correct: false },
      { text: "Proliferative glomerulonephritis", correct: false },
    ],
  },
  {
    question: "A 20-year-old woman 3 weeks after cold water developed oliguria and generalized edema. BP 150/100 mm. hg. UA: color red, turbid, specific weight 1009, acid reaction, protein 0, 3 g / l, leuke 0-15-2 in the field of vision, erythr 15-23. the field of vision. Which drug can be used for the treatment of hypertension associated this glomerulonephritis ?",
    answers: [
      { text: "Furosemide", correct: true },
      { text: "Penicillin", correct: false },
      { text: "Dopegit", correct: false },
      { text: "Corinfar", correct: false },
      { text: "Propranolol ", correct: false },
    ],
  },
  {
    question: "A 65-year-old man 1 weeks after cold weather infection developed oliguria, dysuria and generalized edema. . UA: color red, turbid, specific weight 1029, acid reaction, protein 0, 03 g / l, leuke 16-25-29 in the field of vision.  Which is the most appropriate therapy to a patient suffering from glomerulonephritis and prostatitis?",
    answers: [
      { text: "Ampicillin", correct: true },
      { text: "Furosemide", correct: false },
      { text: "Dopegit", correct: false },
      { text: "Corinfar", correct: false },
      { text: "Propranolol ", correct: false },
    ],
  },
  {
    question: "A man, 20 years old. 3 weeks ago visiting in hospital for chronic glomerulonephritis. Diuresis along the catheter 800 ml per day. Massive eadema, oliguria.UA: red-brown color, turbid, specific weight 1009, acid reaction, protein 4,0 g / l, leuke 5 in the field of vision, erythr > 100 in the field of vision BA: Hb 110g / l, er 4.4 * 10; tr 220 * 10; ESR 51mm / h: What formidable complication did the patient develop?",
    answers: [
      { text: "Nephrotic syndrome", correct: true },
      { text: "Acute renal failure ", correct: false },
      { text: "Traumatic kidney injury", correct: false },
      { text: "Anaphylactic shock", correct: false },
      { text: "Pylonephritis", correct: false },
    ],
  },
  {
    question: "A 56-year-old man 2 days ago after drinking alcohol developed oliguria 100 ml/day, BP 180/100 mm. and generalized edema. UA: color yellow, turbid, specific weight 1029, acid reaction, protein 0, 03 g / l, leuk- 10 in the field of vision, erythr abs. the field of vision. GFR-12 ml/min/1,73 m2. Which of the following diagnoses is most likely in the patient?",
    answers: [
      { text: "A Acute renal injury", correct: true },
      { text: "B Semilunar glomerulonephritis,", correct: false },
      { text: "C Pyelonephritis,", correct: false },
      { text: "D Chronic renal failure,", correct: false },
      { text: "E Proliferative glomerulonephritis", correct: false },
    ],
  },
  {
    question: "A man, 41 years old. Was 2 days drinking beer. Objectively: the patient's condition is serious, confused consciousness. Diuresis along the catheter 255 ml per day. UA: red-brown color, turbid, specific weight 1020, acid reaction, protein 1.7 g / l, leuke 10 in the field of vision, BA: Hb 120g / l, er 4.8 * 10; tr 260 * 10; ESR 56 mm / h, urea 30 mmol / l, creatinine 823 mkmol / l/ What treatment of hypertension is associated this AKI ?",
    answers: [
      { text: "urosimide, enalapril", correct: true },
      { text: "Propranolol, ACE-inhibitors F", correct: false },
      { text: "Dopegit, nitrites", correct: false },
      { text: "Corinfar, Propranolol", correct: false },
      { text: "Penicillin, enalapril,", correct: false },
    ],
  },
  {
    question: "A man, 38 years old. 4 weeks ago visiting in hospital for chronic glomerulonephritis. Objectively: the patient's condition is serious, confused consciousness. Diuresis along the catheter 700 ml per day. UA: red-brown color, turbid, specific weight 1009, acid reaction, protein 3,0 g / l, leuke 7 in the field of vision, erythr> 100 in the field of vision urea 34 mmol / l, creatinine 545 mkmol / l, potassium 7.0 mmol / l. Which of the following diagnoses is most likely in the patient?",
    answers: [
      { text: "Traumatic kidney injury", correct: true },
      { text: "Chronic kidney disease", correct: false },
      { text: "Acute renal failure ", correct: false },
      { text: "Anaphylactic shock", correct: false },
      { text: "Pylonephritis", correct: false },
    ],
  },
  {
    question: "A 53-year-old female patient with a history of rheumatoid arthritis complains of fatigue, shortness of breath, and weight loss. On physical examination, the patient has bilateral ankle edema and hepatosplenomegaly. Laboratory tests show hypoalbuminemia and proteinuria. Renal biopsy reveals amyloid deposits in the glomeruli. What is the most likely diagnosis?",
    answers: [
      { text: " Renal amyloidosis", correct: true },
      { text: "Focal segmental glomerulosclerosis", correct: false },
      { text: "Membranous nephropathy", correct: false },
      { text: "Minimal change disease", correct: false },
      { text: "IgA nephropathy", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman 1 weeks after cold weather infection developed oliguria, dysuria and generalized edema. UA: color yellow, turbid, leuke 10-15-23 in the field of vision, erythr abs. the field of vision. What should be the first measure chronic pyelonephritis in clinic?",
    answers: [
      { text: "Ultrasound of the kidneys", correct: true },
      { text: "Cystoscopy", correct: false },
      { text: "Three glass sample", correct: false },
      { text: "Massive antibiotic therapy ", correct: false },
      { text: "Introvenous-pylographi", correct: false },
    ],
  },
  {
    question: "A 25-year-old woman 3 weeks after cold water developed oliguria, dysuria and generalized edema. BP 150/100 mm. hg. UA: color yellow, turbid, specific weight 1009, acid reaction, protein 0, 3 g / l, leuke 10-15-23 in the field of vision, erythr abs. the field of vision. Which drug means for the treatment of hypertension associated this pyelonephritis ?",
    answers: [
      { text: "Furosemide", correct: true },
      { text: "Penicillin", correct: false },
      { text: "Dopegit", correct: false },
      { text: "Corinfar", correct: false },
      { text: "Propranolol ", correct: false },
    ],
  },
  {
    question: "The patient has the following biochemical parameters for chronic renal failure: proteinuria - 1.4 g / l, urea nitrogen - 38 mg%, blood creatinine - 530 mmol / l, serum sodium - 138 mmol / l, urine creatinine 800 mmol / l, daily urine output 500 ml. Which of the followings is the glomerular filtration rate?",
    answers: [
      { text: "15ml / min", correct: true },
      { text: "12ml / min ", correct: false },
      { text: "60ml / min", correct: false },
      { text: "100ml / min", correct: false },
      { text: "60ml / min", correct: false },
    ],
  },
  {
    question: "A 66-year-old man 2 month ago after developed oliguria 300 ml/day, BP 160/100 mm. and generalized edema. UA: color yellow, turbid, specific weight 1002, acid reaction, protein 0,32 g / l, leuke 10 in the field of vision, erythr abs. the field of vision. GFR-12 ml/min/1,73 m2, creatinine level 325 mkmol/l. Which statement of below is more expedient to use for correct treatment for chronic renal failure?",
    answers: [
      { text: "Recormon", correct: true },
      { text: "Penicillin ", correct: false },
      { text: "Sulfodimezine", correct: false },
      { text: "Erythromycin", correct: false },
      { text: "Amoxicilline", correct: false },
    ],
  },
  {
    question: "A 36-year-old man 1 month ago after developed oliguria 300 ml/day, BP 180/100 mm. and generalized edema. Hb-90 g/l, UA: color yellow, turbid, specific weight 1006, acid reaction, protein 0,2 g / l, leuke 11 in the field of vision, erythr abs. the field of vision. GFR-10 ml/min/1,73 m2, creatinine level 305 mkmol/l. Which of the followigs included in conservative treatment for chronic renal failure?",
    answers: [
      { text: "Enterosorption therapy for anemia, correction of blood pressure", correct: true },
      { text: "Low protein diet, antibiotics, steroids ", correct: false },
      { text: "Therapy for anemia, cytostatics, diuretics", correct: false },
      { text: "Correction of blood pressure, high protein diet", correct: false },
      { text: "Therapy for anemia, cytostatics, steroids", correct: false },
    ],
  },
  {
    question: "Which joint is most affected by gout?",
    answers: [
      { text: "First MTP", correct: true },
      { text: "Elbow joints", correct: false },
      { text: "PIP and MCP joints", correct: false },
      { text: "Knee joints ", correct: false },
      { text: "DIP joints", correct: false },
    ],
  },
  {
    question: "A 35-year-old man visited a doctor with dull back pain that occurs at night and morning back stiffness lasting more than 1 hour. What test can be positive during a physical examination for ankylosing spondylitis?",
    answers: [
      { text: "Schober test", correct: true },
      { text: "Thompson test", correct: false },
      { text: "McMurray test ", correct: false },
      { text: "Sciatic stretch test", correct: false },
      { text: "Trendelenburg test", correct: false },
    ],
  },
  {
    question: "A 28-year-old man presents with a 2-year history of progressively worsening back pain, fatigue, and morning stiffness. He also reports pain in his left hip and right heel. The symptoms improve with activity. Physical exam is significant for reduced spinal range of motion. ESR is elevated. RF and ANA are negative. What is the most likely diagnosis?",
    answers: [
      { text: "Ankylosing spondylitis", correct: true },
      { text: "Spinal hernia", correct: false },
      { text: "Rheumatoid arthritis", correct: false },
      { text: "Gout ", correct: false },
      { text: "Osteoarthritis", correct: false },
    ],
  },
  {
    question: "A 35-year-old woman presents with a 9-month history of episodic joint pain (arthralgia). The symptoms began with mild pain in the left metacarpophalangeal (MCP) joint, but now she has pain in both MCPs, both proximal interphalangeal joints (PIPs), and both knees. Her joints feel “stiff” for about an hour every morning. The stiffness improves with activity. The MCP and PIP joints are tender, swollen, and boggy. What diagnosis do you expect?",
    answers: [
      { text: "Rheumatoid arthritis", correct: true },
      { text: "Osteoarthritis", correct: false },
      { text: "Fibromyalgia", correct: false },
      { text: "Acute rheumatic fever", correct: false },
      { text: "Ankylosing spondylitis", correct: false },
    ],
  },
  {
    question: "A 38-year-old female complains of pain in wrist, proximal interphalangeal joints. Labarotory findings include positive anti–cyclic citrullinated peptide antibody, positive rheumatoid factor. Which of the following treatment regimens would you recommend?",
    answers: [
      { text: "Methotrexate 7.5 mg per week", correct: true },
      { text: "D-penicillamine 200 mg per day", correct: false },
      { text: "Allopurinol 100 vg per day", correct: false },
      { text: "Methotrexate 7.5 mg per day ", correct: false },
      { text: "D-penicillamine 200 mg per week", correct: false },
    ],
  },
  {
    question: "A 47-year-old patient has the following combination of symptoms: early involvement in the process of the metatarsophalangeal joint of the big toe, sharp reddening during the exacerbation, joint degeneration, nephropathy, bouts of renal colic, subcutaneous nodules on the ears and elbows. Which of the following is the basic treatment?",
    answers: [
      { text: "Allopurinol", correct: true },
      { text: "Prednisolone", correct: false },
      { text: "Azathioprine ", correct: false },
      { text: "Indometacin", correct: false },
      { text: "Methotrexate", correct: false },
    ],
  },
  {
    question: "Patient 51 years old, was admitted to the hospital with an attack of acute arthritis of the right ankle joint. The attack began suddenly, in the morning. Accompanied by a temperature increase of up to 37.5 0C. The joint area is swollen, painful. A month ago, noted a similar attack, with the defeat of the metatarsophalangeal joint of the right leg. Which of the following diagnostic tests are the most informative?",
    answers: [
      { text: "Uric acid in the blood serum, x-ray", correct: true },
      { text: "Complete blood count, x-ray", correct: false },
      { text: "Urine, x-ray examination ", correct: false },
      { text: "Total holesterol, x-ray examination", correct: false },
      { text: "Urine, joint puncture", correct: false },
    ],
  },
  {
    question: "Polymositis is characterized by inflammation and degeneration of the muscles. Dermatomyositis is polymositis accompanied by skin inflammation. In which of the following age groups do these disorders typically occur?",
    answers: [
      { text: "Adults ages 40 to 60 years, and children ages 5 to 15 years", correct: true },
      { text: "Children of all ages, and young adults ages 20 to 29 years", correct: false },
      { text: "Infants and young children ages 2 to 10 years", correct: false },
      { text: "Children ages 2 to 10 years, and adolescents ages 12 to 19 years", correct: false },
      { text: "Middle ages 30-40 years.", correct: false },
    ],
  },
  {
    question: "The patient, 25 years old, was admitted with complaints of high fever, erythematous rash on cheekbones, polyarthralgia, muscle aches, weight loss, headaches, diffuse thinning of hair. In the hemogram: erythrocytes 2.4x1012 / l, leukocytes 2.8x109 / l, platelets 210x109 / l. In the urine, the specific gravity is 1024, protein in the urine is 0.5 g / l, erythrocytes are 7-10 and single hyaline cylinders. Which one of following diagnoses is most likely in this patient?",
    answers: [
      { text: "Systemic lupus erythematosus", correct: true },
      { text: "Dermatomyositis", correct: false },
      { text: "Aplastic anemia ", correct: false },
      { text: "Systemic scleroderma", correct: false },
      { text: "Acute glomerulonephritis", correct: false },
    ],
  },
  {
    question: "A 32 year old lady complains dysphagia, Raynaud’s phenomenon, erythematous rash on cheekbones, diffuse thinning of hair. Investigations show anti - ribonucleoprotein antibody. Which one of following diagnoses is most likely in this patient?",
    answers: [
      { text: " Mixed connective tissue disorder", correct: true },
      { text: "Systemic sclerosis", correct: false },
      { text: "Systemic lupus erythematosus", correct: false },
      { text: "Rheumatoid arthritis", correct: false },
      { text: "Sjogren’s syndrome", correct: false },
    ],
  },
  {
    question: "A young woman has fever up to 390 C, erythematous rash on the face, ulser in the mouth , pain in the metacarpophalangeal and proximal interphalangeal joints of the hand. Which one of following diagnoses is most likely in this patient?",
    answers: [
      { text: "Systemic lupus erythematosus", correct: true },
      { text: "Rheumatoid arthritis ", correct: false },
      { text: "Reactive arthritis", correct: false },
      { text: "Rheumatic fever", correct: false },
      { text: "Systemic scleroderma", correct: false },
    ],
  },
  {
    question: "A 40-year-old man suddenly developed an arthritis of the first metatarsophalangeal joint of the right foot in the middle of the night. What diagnostic study is the most informative?",
    answers: [
      { text: "Uric acid, x-ray of the joint", correct: true },
      { text: "Total protein, magnetic resonance imaging", correct: false },
      { text: "C-reactive protein, joint ultrasound ", correct: false },
      { text: "Complete blood counts , x-ray of the joint", correct: false },
      { text: "Urine test, joint ultrasound", correct: false },
    ],
  },
  {
    question: "A 52-year-old patient has the following combination of symptoms: early involvement in the process of the metatarsophalangeal joint of the big toe, sharp reddening during the exacerbation, joint degeneration, nephropathy, bouts of renal colic, subcutaneous nodules on the ears and elbows. Which of the following is the basic treatment?",
    answers: [
      { text: "Allopurinol", correct: true },
      { text: "Prednisolone", correct: false },
      { text: "Azathioprine ", correct: false },
      { text: "Indometacin", correct: false },
      { text: "Methotrexate", correct: false },
    ],
  },
  {
    question: "What is the normal level of FPG in non - pregnant population according ADA criteria?",
    answers: [
      { text: "<100 mg/dl", correct: true },
      { text: ">90 mg/dl", correct: false },
      { text: ">100 mg/dl", correct: false },
      { text: "<90 mg/dl ", correct: false },
      { text: "<110 mg/dl", correct: false },
    ],
  },
  {
    question: "A patient has DM 1 diagnosed at age of 13 years. On ophthalmological examination, he has retina hemorrhages, exudates in retina. What is the diagnosis?",
    answers: [
      { text: "Retinopathy", correct: true },
      { text: "Retinitis", correct: false },
      { text: "Glaucoma ", correct: false },
      { text: "Retina hemorrhage", correct: false },
      { text: "Ophtalmopathy", correct: false },
    ],
  },
  {
    question: "A 46 year man is diagnosed with Type-2 diabetes at his present visit for the first time. On examination of kidney function his GFR is 90 ml/min. Urine albumin is 400 mg/g. What diagnose he has?",
    answers: [
      { text: "CKD G1A3", correct: true },
      { text: "CKD G2A3", correct: false },
      { text: "CKD G3A3", correct: false },
      { text: "CKD G1A2", correct: false },
      { text: "CKD G5A3", correct: false },
    ],
  },
  {
    question: "A 40-year-old man presented to the medical assessment unit with 2-day history of feeling nauseous and generally unwell. On examination, he had a BMI of 17 kg/m2, with features of dehydration, a pulse rate of 104 beats/minute, and blood pressure of 90 mm Hg systolic. Investigations:blood sugar 28 mmol/L, pH 7.37 (7.35–7.45), HCO3 23 mmol/L (22–27, Na 134 mmol/L (135–145), K 4.5 mmol/L (3.5–4.5), amylase 22 IU/L (<125), urine sugar +++, ketones 4+. He was initially managed on a prandial insulin and intravenous fluids. He made a good clinical recovery and was discharged home with pre-mix insulin (70/30) injections bd. Which one of the following is the most appropriate management approach for him when he is reviewed on a follow-up clinic visit in 4 weeks time?",
    answers: [
      { text: "Continue insulin therapy life long", correct: true },
      { text: "Continue metformin therapy", correct: false },
      { text: "Continue pioglitazone therapy", correct: false },
      { text: "Continue DPP4 inhibitors therapy ", correct: false },
      { text: "Continue sulfonylureas therapy", correct: false },
    ],
  },
  {
    question: "A 31-year-old woman presented to her doctor with polydipsia and polyuria. On examination, she had a BMI of 22 kg/m2. Investigations: Blood sugar 25.5 mmol/L, pH 7.37 (7.35–7.45), Venous HCO3 23 mmol/L (22–27), Sodium 138 mmol/L (135–145), Potassium 4.2 mmol/L (3.5–4.5), urine sugar +++, ketones 4+. Which one of the following is the most appropriate initial therapy, based on her clinical profile?",
    answers: [
      { text: "Insulin", correct: true },
      { text: "Metformin", correct: false },
      { text: "Pioglitazone", correct: false },
      { text: "Sulfonylurea", correct: false },
      { text: "Incretins ", correct: false },
    ],
  },
  {
    question: "Woman, 61-year-old presented to the clinic with symptoms of bradycardia, weight gain, enlargement of thyroid gland. TSH 48 (N-0,4-4 MIU/ml), fT4 – 7 (N-9-25 mmol/l). What diagnose does she has?",
    answers: [
      { text: "Primary hypothyroidism", correct: true },
      { text: "Primary hyperthyroidism ", correct: false },
      { text: "Secondary hypothyroidism", correct: false },
      { text: "Secondary hyperthyroidism", correct: false },
      { text: "Iatrogenic hyperthyroidism", correct: false },
    ],
  },
  {
    question: "Man, 75 y.o. 67-year-old presented to the clinic with bradycardia, weight gain. Two years ago he had transphenoidal adenoma surgery. TSH – 0,01 (N-0,4-4 MIU/ml), fT4 – 4 (N-9-25 mmol/l). What diagnose does he has?",
    answers: [
      { text: "Secondary hypothyroidism", correct: true },
      { text: "Primary hypothyroidism ", correct: false },
      { text: "Primary hyperthyroidism", correct: false },
      { text: "Secondary hyperthyroidism", correct: false },
      { text: "Iatrogenic hyperthyroidism", correct: false },
    ],
  },
  {
    question: "A 16-year-old boy presented to thyroid clinic with a 3-month history of feeling unwell, weight loss, anxiety, and panic attacks. He also complained of redness and grittiness of eyes, with painful eye movements. On examination, he had bilateral tremors, proptosis and lid retraction. What treatment you will give for his eyes symptoms?",
    answers: [
      { text: "Dexamethasone", correct: true },
      { text: "Levothyroxine", correct: false },
      { text: "Thiamazole", correct: false },
      { text: "Thyroid surgery", correct: false },
      { text: "I131 ablation", correct: false },
    ],
  },
  {
    question: "A 29–year-old patient come to an endocrinologist for an appointment with complaints of increase in blood pressure to 220/130 mmHg, a hard-controlled crisis, accompanied by a feeling of palpitation, sweating, shortness of breath, severe headache arising from emotional stress, decreasing after sleep What is the most likely diagnosis?",
    answers: [
      { text: "Pheochromocitoma", correct: true },
      { text: "Grave’s disease ", correct: false },
      { text: "Hypothyroidism", correct: false },
      { text: "Cushing’s syndrome", correct: false },
      { text: "Adrenal insufficiency", correct: false },
    ],
  },
  {
    question: "Patient with a diagnosis of secondary hyperaldosteronism. What is a drug of choice?",
    answers: [
      { text: "ARB", correct: true },
      { text: "Ca-channel blockers", correct: false },
      { text: "β-blockers ", correct: false },
      { text: "Diuretics", correct: false },
      { text: "α-blockers", correct: false },
    ],
  },
  {
    question: "Patient 32 y.o. was diagnosed with primary hyperaldosteronism. What is a drug of choice?",
    answers: [
      { text: "Spironolactone", correct: true },
      { text: "β-blockers", correct: false },
      { text: "Ca-channel blockers", correct: false },
      { text: "Diuretics", correct: false },
      { text: "α-blockers", correct: false },
    ],
  },
  {
    question: "Man, 69y.o. Has CKD for 5 years and dialysis last 2 years. iPTH – 100 (N-9,5-75 pg/ml), corrected Ca – 1,2 (N-1,25-3,0 mmol/l). Vitamin D – 20 (30-100 ng/ml). What treatment you will prescribe?",
    answers: [
      { text: "Vitamin D supplements", correct: true },
      { text: "Spironolactone", correct: false },
      { text: "Cinacalcet ", correct: false },
      { text: "Diuretics", correct: false },
      { text: "L-thyroxin", correct: false },
    ],
  },
  {
    question: "Man, 68 y.o. Has CKD for 5 years and dialysis last 2 years. iPTH – 100 (N-9,5-75 pg/ml), corrected Ca – 1,2 (N-1,25-3,0 mmol/l). Vitamin D – 20 (30-100 ng/ml). What is the likeliest diagnosis?",
    answers: [
      { text: " Secondary hyperparathyroidism ", correct: true },
      { text: "Primary hyperparathyroidism", correct: false },
      { text: "Secondary hyperthyroidism", correct: false },
      { text: "Primary hypothyroidism", correct: false },
      { text: "Hypoparathyroidism", correct: false },
    ],
  },
  {
    question: "A 22 years old male with CBC: RBC-1,8x1012/l, HB - 38g/l, CI(color index) - 0.9, TLC - 1.6x109/l, platelets - 5.0x109/l. Which of the followings is most likely primary diagnosis?",
    answers: [
      { text: " Aplastic anemia", correct: true },
      { text: "B12-deficiency anemia", correct: false },
      { text: "Hemolytic anemia", correct: false },
      { text: "Sideroblastic anemia", correct: false },
      { text: "Iron deficiency anemia", correct: false },
    ],
  },
  {
    question: "A 27 years old man attends a hospital with complaints to weakness, dizziness, fever, pain when swallowing. On examination attention was drawn to the pallor of the skin, multiple petechial hemorrhages, necrotic ulcers of the throat and mouth, liver and spleen are not enlarged. CBC: Hb- 59 g/l, RBC 2x1012/l, Reticulocytes, Platelets 28x109/l, WBC 1.5 x109/l. Trephine biopsy of bone marrow shows severe reduction of haemopoietic stem cells with an increase of fat spaces. Which of the followings is most likely diagnosis?",
    answers: [
      { text: "Aplastic anemia", correct: true },
      { text: "Iron deficiency anemia", correct: false },
      { text: "B12-deficiency anemia", correct: false },
      { text: "Hemolytic anemia", correct: false },
      { text: "Sideroblastic anemia", correct: false },
    ],
  },
  {
    question: "A 16 years old girl presents with fatigue, weakness, lethargy. She eats meat rarely, once a week. On examination: paleness of skin and mucous membrane. CBC and iron tests reveals for Iron deficiency anemia. Other examination and investigations are unremarkable. Which of the following drugs may be used to treat her?",
    answers: [
      { text: "Ferrous gluconate", correct: true },
      { text: "Ferric sulfate", correct: false },
      { text: "Desferrioxamine", correct: false },
      { text: "Erythropoietin", correct: false },
      { text: "Iron Dextran", correct: false },
    ],
  },
  {
    question: "A 30 years old pregnant woman presents with fatigue, weakness, lethargy. She eats meat rarely. On examination: paleness of skin and mucous membrane. Blood film shows Microcytic hypochromic red blood cells. You are suspecting Iron deficiency anemia. Which of the followings you will check as a best marker for iron deficiency?",
    answers: [
      { text: "Serum ferritin", correct: true },
      { text: "Total Iron Binding capacity", correct: false },
      { text: "Serum iron ", correct: false },
      { text: "Transferrin saturation", correct: false },
      { text: "Hematocrit level", correct: false },
    ],
  },
  {
    question: "A 10 years old male with Hemophilia-A presents with spontaneous right knee bleeding, his factor VIII level-1%. Which of the followings is a treatment choice?",
    answers: [
      { text: "Factor VIII replacement", correct: true },
      { text: "Desmopressin", correct: false },
      { text: "Factor IX replacement", correct: false },
      { text: "Platelet transfusion", correct: false },
      { text: "Vitamin K orally", correct: false },
    ],
  },
  {
    question: "A 65 years old women on medical check-up presents with painless bilateral cervical lymphadenopathy. Her Hb-120g/l, Pl-125x109/l, WBC 140x109/l, Lymphocytes- 137x109/l. Other examination and investigations are unremarkable. Which of the followings is the most likely diagnosis? ",
    answers: [
      { text: "CLL (chronic lymphocytic leukemia)", correct: true },
      { text: "HIV (human immunodeficiency virus)", correct: false },
      { text: "TB (tuberculosis)", correct: false },
      { text: "CML (chronic myeloid leukemia)", correct: false },
      { text: "ALL (acute lymphoblastic leukemia)", correct: false },
    ],
  },
  {
    question: "A 70 years old men presents with CLL: involvement of bilateral cervical lymphadenopathy, splenomegaly, Hb-120g/l, Pl-130x109/l, WBC- 160x109/l, Lymphocytes- 157x109/l. Which of the following stages (by Rai) is most probable? ",
    answers: [
      { text: "II", correct: true },
      { text: "I", correct: false },
      { text: "0", correct: false },
      { text: "III", correct: false },
      { text: "IV", correct: false },
    ],
  },
  {
    question: "A 7 years old boy presents with fever up to 38,5 C that lasts 8 days, weakness, loss of appetite, frequent nasal bleedings during 3 months. On physical examination: pallor of the skin and mucous membrane, splenomegaly and cervical lymph nodes enlargement. After investigations diagnosed B-ALL. Supportive and specific treatment started. Which of the following drugs can be used (intrathecal) in this case for cranial prophylaxis?",
    answers: [
      { text: "Methotrexate", correct: true },
      { text: "Vincristine", correct: false },
      { text: "Daunorubicin", correct: false },
      { text: "Dexamethasone", correct: false },
      { text: "Rituximab", correct: false },
    ],
  },
  {
    question: "A 59 years old men presents with CLL: involvement of bilateral cervical lymphadenopathy, splenomegaly, Hb-120g/l, Pl-120x109/l, WBC- 163x109/l, Lymphocytes- 160x109/l. Which of following laboratory findings should be done to confirm the diagnosis? ",
    answers: [
      { text: "Immunophenotyping", correct: true },
      { text: "Serum Iron ", correct: false },
      { text: "Iron tests", correct: false },
      { text: "Lymph node biopsy", correct: false },
      { text: "Liver functioning test", correct: false },
    ],
  },
  {
    question: "A 70 years old man with Myeloproliferative syndrome presents with decreased RBC, low white cell count and decreased platelets. Which of the followings is the most likely diagnosis?",
    answers: [
      { text: "Myelofibrosis", correct: true },
      { text: "Chronic myeloid leukemia", correct: false },
      { text: "Polycythemia vera", correct: false },
      { text: "Essential thrombocytosis", correct: false },
      { text: "Chronic eosinophilic leukemia", correct: false },
    ],
  },
  {
    question: "A patient presents with increased Hb, decreased white cell count and increased platelets. Which of the followings is the most likely diagnosis is?",
    answers: [
      { text: "Polycythemia vera", correct: true },
      { text: "Chronic myeloid leukemia ", correct: false },
      { text: "Myelofibrosis", correct: false },
      { text: "Essential thrombocytosis", correct: false },
      { text: "Chronic lymphocytic leukemia", correct: false },
    ],
  },
  {
    question: "A 71 years old man presents with symptoms of Myelofibrosis. Which of the followings investigations is the best in this condition?",
    answers: [
      { text: "Bone marrow biopsy", correct: true },
      { text: "Lymph node biopsy", correct: false },
      { text: "Bone marrow aspiration ", correct: false },
      { text: "Skin biopsy", correct: false },
      { text: "Liver biopsy", correct: false },
    ],
  },
  {
    question: "A 60-year-old male came with Hb 19.0 gm/dl on three occasions. The resident doctor wants to exclude Polycythemia Vera. Which of the followings is the most relevant investigation?",
    answers: [
      { text: " Red cell mass", correct: true },
      { text: "Total leukocyte count", correct: false },
      { text: "Hematocrit", correct: false },
      { text: "Reticulocyte count", correct: false },
      { text: "Platelet count", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
