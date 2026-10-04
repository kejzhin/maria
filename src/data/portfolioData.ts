export interface WorkExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  highlights: string[];
}

export interface ToolItem {
  id: string;
  name: string;
  category: 'Communication' | 'EHR' | 'Portals' | 'Insurance';
  subtitle: string;
  description: string;
  features: string[];
  logoType?: 'svg' | 'icon' | 'image';
  logoUrl?: string;
  accentColor: string;
  badge?: string;
}

export const PERSONAL_INFO = {
  fullName: "Maria Bernadette S. Angeles - Estrada",
  preferredName: "Maria Bernadette Estrada",
  title: "Healthcare Virtual Assistant & Prior Authorization Specialist",
  tagline: "4+ Years of Dedicated Administrative & Clinical Support for U.S. Healthcare Practices (ENT & Allergy)",
  email: "angelesadeth11@gmail.com",
  phone: "(+63) 926 041 5994",
  location: "Pasig City, Philippines",
  timezonesSupported: "US Pacific (PST), Mountain (MST), Central (CST), Eastern (EST)",
  linkedIn: "https://www.linkedin.com/in/mariabernadetteae",
  education: {
    institution: "Bulacan State University",
    degree: "Bachelor of Science in Biology (B.S. Biology)",
    period: "2014 – 2018",
    description: "Solid scientific foundation in human biological sciences, physiological mechanisms, clinical anatomy, microbiology, and medical terminology."
  },
  bio: "Experienced Healthcare Virtual Assistant with over four years of experience supporting U.S.-based healthcare practices, particularly in ENT (Ear, Nose, & Throat) and Allergy. Skilled in prior authorization submissions, insurance eligibility and benefits verification, medical coding (ICD-10, CPT, HCPCS), patient communication, and healthcare administrative support. Adept at navigating various U.S. insurance portals, EHR management via AdvancedMD, telehealth proctoring via Doxy, and high-volume VoIP triage via Nextiva. HIPAA-certified, adaptable, and committed to clinical precision and patient care excellence."
};

export const TOOLS_COMMUNICATION: ToolItem[] = [
  {
    id: "doxy",
    name: "Doxy.me",
    category: "Communication",
    subtitle: "HIPAA-Compliant Telehealth",
    description: "Utilized for remote patient consultations, virtual patient intake, and live proctoring of COVID-19 diagnostic testing procedures with instant patient test certificates.",
    features: ["Virtual patient check-in", "Live proctored testing", "Encrypted video triage", "Waiting room queue triage"],
    logoUrl: "/logos/doxy.png",
    accentColor: "#0D9488"
  },
  {
    id: "nextiva",
    name: "Nextiva",
    category: "Communication",
    subtitle: "Cloud VoIP & Call Routing",
    description: "Primary telecom platform for handling high-volume inbound patient calls, scheduling, insurance follow-ups, and outbound coordination with U.S. payer representatives.",
    features: ["Inbound/Outbound call queues", "Call logging & voicemails", "HIPAA-compliant cloud telephony", "Warm transfers & multi-line routing"],
    logoUrl: "/logos/nextiva.png",
    accentColor: "#2563EB"
  },
  {
    id: "google-meet",
    name: "Google Meet",
    category: "Communication",
    subtitle: "Clinical Sync & Provider Briefings",
    description: "Conducting morning huddles, weekly provider meetings, and secure clinical coordination with physicians and healthcare administrators.",
    features: ["Real-time team sync", "Screen sharing for chart reviews", "Calendar integration", "Multi-disciplinary meetings"],
    logoUrl: "/logos/google-meet.png",
    accentColor: "#059669"
  },
  {
    id: "ms-teams",
    name: "Microsoft Teams",
    category: "Communication",
    subtitle: "Practice Collaboration Hub",
    description: "Inter-departmental messaging, urgent case escalations, task delegation, and secure clinical file sharing within practice networks.",
    features: ["Departmental channels", "Urgent doctor escalations", "Protected file repository", "Real-time task tracking"],
    logoUrl: "/logos/ms-teams.png",
    accentColor: "#4F46E5"
  },
  {
    id: "zoom",
    name: "Zoom",
    category: "Communication",
    subtitle: "Video Conferencing & Webinars",
    description: "Used for comprehensive VA training programs, patient educational webinars, and multi-facility clinical conferences.",
    features: ["Training session recordings", "Breakout practice rooms", "Interactive workflow training", "Provider conferences"],
    logoUrl: "/logos/zoom.png",
    accentColor: "#0284C7"
  },
  {
    id: "discord",
    name: "Discord",
    category: "Communication",
    subtitle: "Fast-Paced VA Squad Coordination",
    description: "Rapid internal communication, shift handovers, instant peer support, and team announcement distribution for virtual teams.",
    features: ["Instant shift handovers", "Resource repository", "Voice channels for quick syncs", "Bot notifications"],
    logoUrl: "/logos/discord.png",
    accentColor: "#5865F2"
  }
];

export const TOOLS_EHR: ToolItem[] = [
  {
    id: "advanced-md",
    name: "AdvancedMD",
    category: "EHR",
    subtitle: "Electronic Health Records & Practice Management",
    description: "In-depth daily operational mastery of AdvancedMD: patient registration, scheduling, medical chart documentation, clinical note indexing, charge review, and HIPAA-compliant e-faxing.",
    features: [
      "Patient Master Index & Demographics Management",
      "Template-based Clinical Documentation & Chart Tagging",
      "Insurance Pre-Authorization Document Attachment",
      "Scheduling & Appointment Status Workflow Management",
      "Electronic Faxing & Medical Record Release Auditing",
      "Billing Encounter Review & Charge Slips"
    ],
    logoUrl: "/logos/advancedmd.png",
    accentColor: "#0284C7",
    badge: "Core Primary EHR"
  }
];

export const TOOLS_PORTALS: ToolItem[] = [
  {
    id: "medpoint",
    name: "Medpoint Management",
    category: "Portals",
    subtitle: "California IPA & MSO Portal",
    description: "Navigating Medpoint portal for Managed Care Independent Practice Associations (IPAs): submitting specialist treatment authorizations, checking member capitation status, and tracking claim turnaround.",
    features: ["IPA specialist referral submissions", "TAR (Treatment Authorization Request) tracking", "Capitation eligibility verification", "Claim appeal submissions"],
    logoUrl: "/logos/medpoint.png",
    accentColor: "#0EA5E9"
  },
  {
    id: "preferred-ipa",
    name: "Preferred IPA",
    category: "Portals",
    subtitle: "Preferred IPA of California Portal",
    description: "Coordinating specialty authorizations, diagnostic referrals, and surgical pre-clearances for HMO members assigned to Preferred IPA networks across Southern California.",
    features: ["Specialist authorization requests", "Urgent pre-service authorizations", "Clinical chart note attachments", "Approval letter generation"],
    logoUrl: "/logos/preferred-ipa.png",
    accentColor: "#2563EB"
  },
  {
    id: "optum",
    name: "Optum Provider Portal",
    category: "Portals",
    subtitle: "Optum / OptumPay Ecosystem",
    description: "Expert utilization of Optum's provider portal for prior authorization submissions, electronic remittance advice (ERA), and benefits verification across UnitedHealthcare and affiliate plans.",
    features: ["Prior authorization submissions", "Eligibility & co-insurance lookup", "OptumPay remittance & claim status", "Appeals & grievance submissions"],
    logoUrl: "/logos/optum.png",
    accentColor: "#EA580C"
  },
  {
    id: "astrana-health",
    name: "Astrana Health",
    category: "Portals",
    subtitle: "Formerly ApolloMed / Network Medical Management",
    description: "Managing authorizations, referral routing, and patient care management rosters across Astrana Health's integrated physician network.",
    features: ["Care coordination referral tracking", "Direct-entry prior authorizations", "Network specialist directory search", "Utilization management compliance"],
    logoUrl: "/logos/astrana-health.png",
    accentColor: "#7C3AED"
  },
  {
    id: "regal-lakeside",
    name: "Regal / Lakeside Medical Group",
    category: "Portals",
    subtitle: "Regal Medical Group & Lakeside Community Healthcare",
    description: "Comprehensive portal workflows for Regal and Lakeside affiliated IPA patients: securing secondary specialist approvals, high-cost medication authorizations, and diagnostic imaging requests.",
    features: ["Pre-service authorization entries", "Rapid turnaround status updates", "Provider directory alignment", "Patient referral coordination"],
    logoUrl: "/logos/regal-lakeside.png",
    accentColor: "#059669"
  },
  {
    id: "availity",
    name: "Availity Essentials",
    category: "Portals",
    subtitle: "National Payer Clearinghouse & Portal",
    description: "High-volume daily usage for real-time 270/271 Eligibility & Benefits inquiries, 278 Prior Authorization submissions, and 276/277 Claim Status inquiries across hundreds of US health plans.",
    features: ["Real-time 270/271 eligibility verification", "278 Prior authorization submission & tracking", "276/277 Claim status research", "Payer digital attachments & clinical notes"],
    logoUrl: "/logos/availity.png",
    accentColor: "#1E3A8A"
  }
];

export const TOOLS_INSURANCE: ToolItem[] = [
  {
    id: "blue-shield",
    name: "Blue Shield of California / BCBS",
    category: "Insurance",
    subtitle: "Blue Shield & Blue Cross Network Plans",
    description: "Deep expertise in Blue Shield HMO, PPO, EPO, and Covered California plans. Proficient in Blue Shield provider portals, BSC prior authorization rules, clinical guidelines for ENT surgeries, and allergy immunotherapy coverage.",
    features: [
      "Blue Shield of CA Provider Portal navigation",
      "Medical Necessity guidelines for ENT & Allergy",
      "Out-of-state BCBS BlueCard eligibility & benefits",
      "Prior auth for biologics (Xolair, Dupixent, Fasenra)",
      "Appeals & reconsideration documentation"
    ],
    logoUrl: "/logos/blue-shield.png",
    accentColor: "#006699",
    badge: "Official Network Expertise"
  },
  {
    id: "medicare",
    name: "Medicare (CMS)",
    category: "Insurance",
    subtitle: "Federal Medicare Part A, B & Medicare Advantage (Part C)",
    description: "Comprehensive knowledge of Medicare Local Coverage Determinations (LCDs), National Coverage Determinations (NCDs), Advance Beneficiary Notices (ABN), Medicare secondary payer (MSP) rules, and Medicare Advantage pre-authorizations.",
    features: [
      "CMS Local & National Coverage Determinations (LCD/NCD)",
      "Traditional Medicare Part B fee schedule & rules",
      "Medicare Advantage HMO/PPO authorization rules",
      "Coordination of Benefits & MSP questionnaires",
      "Billing compliance & modifier usage"
    ],
    logoUrl: "/logos/medicare.png",
    accentColor: "#B91C1C",
    badge: "CMS Guidelines Expert"
  },
  {
    id: "medi-cal",
    name: "Medi-Cal / Medicaid",
    category: "Insurance",
    subtitle: "California State Healthcare Program",
    description: "Familiarity with straight Medi-Cal and Medi-Cal Managed Care health plans (L.A. Care, Health Net, IEHP, CalOptima) including Treatment Authorization Requests (TAR).",
    features: ["TAR electronic submission", "Managed Medi-Cal plan verification", "Prescription & procedure limitations", "Share of Cost (SOC) tracking"],
    logoUrl: "/logos/medi-cal.png",
    accentColor: "#0284C7"
  },
  {
    id: "commercial-payers",
    name: "Commercial & Major Payers",
    category: "Insurance",
    subtitle: "Aetna, Cigna, UnitedHealthcare, Humana",
    description: "Managing pre-determinations, prior authorizations, and complex benefits across leading national commercial health insurers.",
    features: ["In-network & out-of-network benefits", "Deductible accumulation research", "Pre-certification of surgical suites", "Tiered specialty drug approvals"],
    logoUrl: "/logos/commercial-payers.png",
    accentColor: "#047857"
  }
];

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    id: "la-ent",
    role: "Healthcare Virtual Assistant",
    company: "Los Angeles Center for Ears, Nose, Throat and Allergy",
    location: "Philippines (Remote Supporting U.S. Practice)",
    period: "July 2022 – Present",
    badge: "Current Primary Role",
    description: "Serving as an indispensable clinical administrative backbone for a prominent multi-provider Los Angeles ENT and Allergy surgical center. Managing high-volume prior authorizations, clinical coding, EHR operations, and patient communications.",
    responsibilities: [
      "Proctored diverse COVID-19 testing kit procedures with corresponding brand protocols via Doxy.me during and post-pandemic, ensuring clinical testing validity and publishing official patient test certificates.",
      "Applied procedural expertise in CPT codes, HCPCS Level II, and ICD-10-CM diagnostic coding to assemble comprehensive prior authorization packets for ENT and Allergy treatments.",
      "Facilitated training programs for newly hired virtual assistants specializing in the allergy department, establishing standard operating procedures (SOPs) and fostering inter-departmental reliability.",
      "Submitted prior authorizations to corresponding U.S.-based portals in a timely manner; managed pending authorizations diligently to ensure approval clearance prior to patient appointments.",
      "Executed outbound calls to health insurance payers for real-time benefit verifications, claim follow-ups, and urgent authorization escalations; managed inbound calls for patient scheduling, authorization inquiries, and triage.",
      "Mastered electronic health records (EHR) utilization primarily in AdvancedMD, telehealth via Doxy.me, VoIP telephony via Nextiva, and secure electronic faxing of clinical records to U.S. hospital facilities."
    ],
    skills: [
      "AdvancedMD EHR",
      "Prior Authorization",
      "Doxy.me Telehealth",
      "Nextiva VoIP",
      "CPT & ICD-10 Coding",
      "Allergy Department SOPs",
      "Availity",
      "Optum Portal",
      "Medpoint & Preferred IPA",
      "COVID-19 Proctoring"
    ],
    highlights: [
      "Trained and onboarded new Virtual Assistants in allergy clinical workflows",
      "Maintained a high prior authorization submission accuracy rate",
      "Prevented appointment cancellations by clearing authorizations in advance"
    ]
  },
  {
    id: "zydus",
    role: "Licensed Professional Medical Representative",
    company: "Zydus Healthcare Phils, Inc.",
    location: "BGC Taguig City, Philippines",
    period: "January 2019 – March 2022",
    description: "Represented premier cardio-metabolic pharmaceuticals to top medical specialists in major tertiary hospital systems, bridging clinical pharmacology with physician needs.",
    responsibilities: [
      "Promoted high-efficacy cardio-metabolic therapeutic products in the Philippine market to specialty physicians including Cardiologists, Endocrinologists, Nephrologists, and Internal Medicine consultants.",
      "Managed territory assignments strategically to conduct tailored medical presentations and market penetration in tertiary hospitals.",
      "Significantly contributed to revenue growth, product formulary adoption, and market share expansion for designated drug portfolios.",
      "Executed targeted clinical marketing strategies to doctors, facilitating formal hospital drug committee inclusions and hospital formulary listings.",
      "Mastered complex pharmacological drug studies, clinical trial data, and mechanism of action to address physician clinical inquiries."
    ],
    skills: [
      "Cardio-Metabolic Pharmacology",
      "Physician Relationship Building",
      "Hospital Formulary Inclusions",
      "Clinical Presentation",
      "Territory Management",
      "Medical Ethics & Compliance"
    ],
    highlights: [
      "Successfully secured multiple hospital formulary listings in tertiary medical centers",
      "Consistently achieved quarterly sales targets across specialty cardiology clinics"
    ]
  },
  {
    id: "rmerk",
    role: "Medical Clinician",
    company: "R-Merk Drug, Inc.",
    location: "Quezon City, Philippines",
    period: "July 2018 – January 2019",
    description: "Coordinated clinical product introductions and institutional hospital partnerships for specialized injectable and vial medications.",
    responsibilities: [
      "Drove product inclusion of vital injectable/vial medications to leading healthcare institutions and hospitals through clinical presentations to department heads.",
      "Established and cultivated high-trust relationships with chief hospital pharmacists and procurement officers, ensuring consistent medicine availability.",
      "Monitored hospital medicine utilization, feedback, and patient care movement to support institutional supply chains."
    ],
    skills: [
      "Hospital Pharmacy Relations",
      "Injectable & Vial Medications",
      "Institutional Sales",
      "Clinical Account Management"
    ],
    highlights: [
      "Expanded institutional adoption of critical hospital vial medications"
    ]
  }
];
