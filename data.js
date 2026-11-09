// ==========================================================
//  EDIT THIS FILE ONLY. The website reads from it.
//  To add a project, copy a { ... } block and edit fields.
// ==========================================================

const SITE = {
  name: "Vinoth D",
  role: "Aerospace Engineer — Combustion Diagnostics, CFD & Alternative Fuel Research",
  tagline: "Currently researching flame stability and laser-based diagnostics for next-generation aero-engines at IIT Madras.",
  status: "Open to opportunities · Tamil Nadu, India 🇮🇳",
  email: "vinothaero.eng@gmail.com",
  phone: "+91 63797 19686",
  linkedin: "https://linkedin.com/in/vinoth-d-2b4927248",
  github: "https://github.com/cfdwithvinoth",
  location: "Kallagam 621653, Tiruchirapalli, Tamil Nadu, India",
  headshot: "",                              // e.g. "assets/images/headshot.jpg"
  resume: "",                                // e.g. "assets/Vinoth_D_Resume.pdf"
};

const PROJECTS = [
  {
    title: "Jet Noise Mitigation via Passive Control",
    subtitle: "Best Paper Award · National Conference",
    image: "assets/images/project-jet-noise.jpg",
    problem: "Underexpanded jet noise from aero-engine nozzles needed a low-cost passive control strategy.",
    role: "Solo researcher — CFD setup, post-processing, paper writing.",
    method: "RANS simulations in ANSYS Fluent with tabbed nozzle geometries; acoustic post-processing in Python.",
    result: "Achieved X dB noise reduction at peak frequency; awarded Best Paper.",
    tags: ["CFD", "Fluent", "Aeroacoustics", "Python"],
    link: "",
  },
  {
    title: "OH-PLIF Flame Structure Analysis",
    subtitle: "IIT Madras NCCRD",
    image: "assets/images/project-flame.jpg",
    problem: "Need to resolve flame stability limits for alternative fuels.",
    role: "Research Associate — laser setup, image processing, data pipeline.",
    method: "OH-PLIF imaging + Python pipeline (pandas, OpenCV) for flame front extraction.",
    result: "Identified stability envelope shift for XX% blend.",
    tags: ["OH-PLIF", "Laser Diagnostics", "Python", "Combustion"],
    link: "",
  },
  {
    title: "Experimental Data Analysis Pipeline",
    subtitle: "Automation & reporting",
    image: "",
    problem: "Manual reduction of diagnostic data was slow and error-prone.",
    role: "Built end-to-end pipeline.",
    method: "Python + pandas + matplotlib + Selenium for automated extraction.",
    result: "Cut analysis time by ~70%.",
    tags: ["Python", "pandas", "Selenium"],
    link: "",
  },
];

const EXPERIENCE = [
  {
    when: "Jan 2026 — Current",
    title: "Research Associate — Research Fellow",
    where: "IIT Madras (NCCRD) · Chennai, India",
    logo: "",
    points: [
      "Advanced laser diagnostics — OH-PLIF for flame structure analysis",
      "CFD validation against experimental data",
      "Alternative fuel characterization",
    ],
  },
  {
    when: "20XX — 20XX",
    title: "Graduate Engineer Trainee",
    where: "Kobelco · India",
    logo: "",
    points: ["Add bullet points here."],
  },
];

const SKILLS = [
  { group: "CFD",         items: ["ANSYS Fluent", "OpenFOAM", "ICEM CFD"] },
  { group: "Diagnostics", items: ["OH-PLIF", "PDPA", "High-speed imaging"] },
  { group: "Programming", items: ["Python", "pandas", "matplotlib / seaborn", "scikit-learn", "Selenium", "contera"] },
  { group: "Tools",       items: ["MATLAB", "SolidWorks", "LaTeX"] },
];
