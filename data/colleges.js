// ============================================================
// StreamSmart — Complete College Database
// All Courses: MBBS, B.Sc CS, B.Com, BBA, B.A., Law, B.Ed
// 130+ colleges total across all streams
// ============================================================

// ══════════════════════════════════════════
// COURSE 1 — MBBS (Medical)
// ══════════════════════════════════════════

const MBBS_COLLEGES = [
  {
    id: "mbbs-001",
    name: "AIIMS New Delhi",
    location: "New Delhi, Delhi",
    city: "New Delhi", state: "Delhi",
    type: "Government", category: "AIIMS",
    nirf: 1, naac: "A++",
    annualFees: "₹1,628",
    totalFees: "₹9,768 (entire 5.5 yr course!)",
    hostelFees: "₹1,000–3,000/year (subsidized)",
    course: "MBBS (5.5 years)",
    seats: 107,
    entrance: "NEET UG",
    cutoff: "NEET 99.9+ percentile. Top 50 rank (General)",
    avgPackage: "₹12–20 LPA (after PG)",
    topPackage: "₹35 LPA+",
    website: "aiims.edu",
    scholarship: "Full fee waiver for SC/ST. Merit scholarships.",
    highlight: "🥇 Best medical college in India. Almost FREE fees!",
    specialties: ["Cardiology", "Neurology", "Oncology", "Trauma"],
    established: 1956,
    note: "Admission through AIIMS NEET counselling — MCC",
    // Flat compat fields
    fees: "₹1,628/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-002",
    name: "AIIMS Bhopal",
    location: "Bhopal, Madhya Pradesh",
    city: "Bhopal", state: "Madhya Pradesh",
    type: "Government", category: "AIIMS",
    nirf: 6, naac: "A+",
    annualFees: "₹1,628", totalFees: "₹9,768",
    hostelFees: "₹2,000–4,000/year",
    course: "MBBS (5.5 years)", seats: 100, entrance: "NEET UG",
    cutoff: "NEET 99.5+ percentile",
    avgPackage: "₹10–18 LPA (after PG)", topPackage: "₹30 LPA+",
    website: "aiimsbhopal.edu.in",
    scholarship: "Full fee waiver for SC/ST.",
    highlight: "🌿 AIIMS in MP! Best medical college in Madhya Pradesh",
    specialties: ["General Surgery", "Pediatrics", "Orthopedics"],
    established: 2012, note: "Top choice for MP students",
    fees: "₹1,628/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-003",
    name: "AIIMS Jodhpur",
    location: "Jodhpur, Rajasthan",
    city: "Jodhpur", state: "Rajasthan",
    type: "Government", category: "AIIMS",
    nirf: 7, naac: "A+",
    annualFees: "₹1,628", totalFees: "₹9,768",
    hostelFees: "₹2,000–4,000/year",
    course: "MBBS (5.5 years)", seats: 100, entrance: "NEET UG",
    cutoff: "NEET 99.4+ percentile",
    avgPackage: "₹10–16 LPA", topPackage: "₹28 LPA",
    website: "aiimsjodh.ac.in",
    scholarship: "SC/ST full fee waiver.",
    highlight: "🏜️ AIIMS Rajasthan. Excellent clinical exposure",
    specialties: ["General Medicine", "Surgery", "Pediatrics"],
    established: 2012, note: "Good option for Rajasthan students",
    fees: "₹1,628/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-004",
    name: "Maulana Azad Medical College (MAMC)",
    location: "New Delhi, Delhi",
    city: "New Delhi", state: "Delhi",
    type: "Government", category: "Govt Medical",
    nirf: 10, naac: "A",
    annualFees: "₹8,000–12,000", totalFees: "₹44,000–66,000",
    hostelFees: "₹8,000–15,000/year",
    course: "MBBS (5.5 years)", seats: 250, entrance: "NEET UG",
    cutoff: "NEET 99.2+ percentile (General)",
    avgPackage: "₹8–15 LPA (after PG)", topPackage: "₹25 LPA",
    website: "mamc.ac.in",
    scholarship: "Delhi Govt + NSP scholarships.",
    highlight: "🏛️ Best state govt medical college. Highest seats in Delhi",
    specialties: ["All major specialties", "Trauma center"],
    established: 1958, note: "Attached to Lok Nayak Hospital — high patient load",
    fees: "₹8,000–12,000/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-005",
    name: "Grant Medical College Mumbai",
    location: "Mumbai, Maharashtra",
    city: "Mumbai", state: "Maharashtra",
    type: "Government", category: "Govt Medical",
    nirf: 12, naac: "A",
    annualFees: "₹10,000–18,000", totalFees: "₹55,000–99,000",
    hostelFees: "₹10,000–20,000/year",
    course: "MBBS (5.5 years)", seats: 200, entrance: "NEET UG",
    cutoff: "NEET 98.5+ percentile (MH state quota)",
    avgPackage: "₹8–15 LPA", topPackage: "₹25 LPA",
    website: "grantmedicalcollege.org",
    scholarship: "Maharashtra Govt scholarships.",
    highlight: "🌆 One of the oldest medical colleges in India (1845)",
    specialties: ["General Medicine", "Surgery", "Obs & Gynae"],
    established: 1845, note: "Attached to JJ Hospital Mumbai",
    fees: "₹10,000–18,000/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-006",
    name: "Gandhi Medical College Bhopal",
    location: "Bhopal, Madhya Pradesh",
    city: "Bhopal", state: "Madhya Pradesh",
    type: "Government", category: "Govt Medical",
    nirf: null, naac: "B+",
    annualFees: "₹12,000–20,000", totalFees: "₹66,000–1,10,000",
    hostelFees: "₹8,000–15,000/year",
    course: "MBBS (5.5 years)", seats: 150, entrance: "NEET UG",
    cutoff: "NEET 95–97 percentile (MP state quota)",
    avgPackage: "₹6–12 LPA", topPackage: "₹20 LPA",
    website: "gandhimedicalcollege.com",
    scholarship: "MP Govt + NSP scholarships.",
    highlight: "🏥 Top govt medical college in MP after AIIMS Bhopal",
    specialties: ["General Medicine", "Surgery", "Pediatrics"],
    established: 1955, note: "Attached to Hamidia Hospital — largest govt hospital in MP",
    fees: "₹12,000–20,000/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-007",
    name: "Bangalore Medical College (BMC)",
    location: "Bengaluru, Karnataka",
    city: "Bengaluru", state: "Karnataka",
    type: "Government", category: "Govt Medical",
    nirf: null, naac: "A",
    annualFees: "₹25,000–40,000", totalFees: "₹1,37,500–2,20,000",
    hostelFees: "₹12,000–20,000/year",
    course: "MBBS (5.5 years)", seats: 250, entrance: "NEET UG",
    cutoff: "NEET 97–98 percentile (KA state quota)",
    avgPackage: "₹7–14 LPA", topPackage: "₹22 LPA",
    website: "bmcri.org",
    scholarship: "Karnataka Govt scholarships.",
    highlight: "⭐ Best govt medical in Karnataka. Attached to Victoria Hospital",
    specialties: ["General Medicine", "Surgery", "Dermatology"],
    established: 1955, note: "Very high clinical exposure due to large hospital",
    fees: "₹25,000–40,000/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-008",
    name: "Stanley Medical College Chennai",
    location: "Chennai, Tamil Nadu",
    city: "Chennai", state: "Tamil Nadu",
    type: "Government", category: "Govt Medical",
    nirf: null, naac: "A",
    annualFees: "₹12,000–20,000", totalFees: "₹66,000–1,10,000",
    hostelFees: "₹8,000–14,000/year",
    course: "MBBS (5.5 years)", seats: 250, entrance: "NEET UG",
    cutoff: "NEET 96–98 percentile (TN state quota)",
    avgPackage: "₹6–12 LPA", topPackage: "₹20 LPA",
    website: "stanleymedicalcollege.ac.in",
    scholarship: "TN Govt + merit scholarships.",
    highlight: "🌆 One of the oldest govt medical colleges in South India",
    specialties: ["General Medicine", "Surgery"],
    established: 1838, note: "Govt quota seats very affordable",
    fees: "₹12,000–20,000/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-009",
    name: "Lady Hardinge Medical College (LHMC)",
    location: "New Delhi, Delhi",
    city: "New Delhi", state: "Delhi",
    type: "Government", category: "Govt Medical",
    nirf: 15, naac: "A",
    annualFees: "₹8,000–12,000", totalFees: "₹44,000–66,000",
    hostelFees: "₹8,000–14,000/year",
    course: "MBBS (5.5 years)", seats: 200, entrance: "NEET UG",
    cutoff: "NEET 98.5+ percentile",
    avgPackage: "₹8–14 LPA", topPackage: "₹22 LPA",
    website: "lhmc-hosp.gov.in",
    scholarship: "Delhi Govt scholarships.",
    highlight: "👩 Women's medical college Delhi. Excellent government institution",
    specialties: ["Obs & Gynae", "Pediatrics", "General Medicine"],
    established: 1914, note: "Women only admission",
    fees: "₹8,000–12,000/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-010",
    name: "Seth GS Medical College Mumbai",
    location: "Mumbai, Maharashtra",
    city: "Mumbai", state: "Maharashtra",
    type: "Government", category: "Govt Medical",
    nirf: 8, naac: "A",
    annualFees: "₹10,000–18,000", totalFees: "₹55,000–99,000",
    hostelFees: "₹12,000–22,000/year",
    course: "MBBS (5.5 years)", seats: 150, entrance: "NEET UG",
    cutoff: "NEET 98.8+ percentile",
    avgPackage: "₹8–16 LPA", topPackage: "₹28 LPA",
    website: "kem.edu",
    scholarship: "Maharashtra Govt scholarships.",
    highlight: "🏥 NIRF Top 10 medical. Attached to KEM Hospital",
    specialties: ["All major specialties"],
    established: 1926, note: "Most competitive Maharashtra state quota",
    fees: "₹10,000–18,000/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-011",
    name: "Kasturba Medical College Manipal",
    location: "Manipal, Karnataka",
    city: "Manipal", state: "Karnataka",
    type: "Private", category: "Private Medical",
    nirf: 4, naac: "A++",
    annualFees: "₹14,00,000–16,00,000", totalFees: "₹84,00,000–96,00,000",
    hostelFees: "₹1,20,000–1,80,000/year",
    course: "MBBS (5.5 years)", seats: 250, entrance: "NEET UG",
    cutoff: "NEET 650+ score",
    avgPackage: "₹10–18 LPA (after PG)", topPackage: "₹35 LPA",
    website: "manipal.edu/kmc",
    scholarship: "Merit scholarships for NEET top scorers.",
    highlight: "⭐ NIRF Rank 4 private medical. Best private MBBS in India",
    specialties: ["All super-specialties", "Research"],
    established: 1953, note: "⚠️ Very expensive — ₹84–96 Lakhs total. Only if no govt seat",
    fees: "₹14,00,000–16,00,000/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-012",
    name: "Amrita Institute of Medical Sciences Kochi",
    location: "Kochi, Kerala",
    city: "Kochi", state: "Kerala",
    type: "Private", category: "Private Medical",
    nirf: 5, naac: "A++",
    annualFees: "₹12,00,000–15,00,000", totalFees: "₹72,00,000–90,00,000",
    hostelFees: "₹1,00,000–1,60,000/year",
    course: "MBBS (5.5 years)", seats: 100, entrance: "NEET UG",
    cutoff: "NEET 640+ score",
    avgPackage: "₹8–15 LPA", topPackage: "₹28 LPA",
    website: "amrita.edu",
    scholarship: "NEET merit scholarships.",
    highlight: "🌴 NIRF Rank 5. Best private medical in Kerala",
    specialties: ["Cardiology", "Neurology", "Oncology"],
    established: 1998, note: "⚠️ Total cost ₹72–90 Lakhs",
    fees: "₹12,00,000–15,00,000/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-013",
    name: "Sri Ramachandra Institute Chennai",
    location: "Chennai, Tamil Nadu",
    city: "Chennai", state: "Tamil Nadu",
    type: "Private", category: "Private Medical",
    nirf: 12, naac: "A++",
    annualFees: "₹10,00,000–13,00,000", totalFees: "₹60,00,000–78,00,000",
    hostelFees: "₹80,000–1,20,000/year",
    course: "MBBS (5.5 years)", seats: 150, entrance: "NEET UG",
    cutoff: "NEET 620+ score",
    avgPackage: "₹7–13 LPA", topPackage: "₹25 LPA",
    website: "sriramachandra.edu.in",
    scholarship: "Merit-cum-means scholarships.",
    highlight: "🌆 Top private in South India. Good research output",
    specialties: ["Multi-specialty hospital"],
    established: 1985, note: "⚠️ Total ₹60–78 Lakhs",
    fees: "₹10,00,000–13,00,000/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-014",
    name: "DY Patil Medical College Pune",
    location: "Pune, Maharashtra",
    city: "Pune", state: "Maharashtra",
    type: "Private", category: "Private Medical",
    nirf: null, naac: "A",
    annualFees: "₹11,00,000–14,00,000", totalFees: "₹66,00,000–84,00,000",
    hostelFees: "₹90,000–1,40,000/year",
    course: "MBBS (5.5 years)", seats: 150, entrance: "NEET UG",
    cutoff: "NEET 600+ score",
    avgPackage: "₹6–12 LPA", topPackage: "₹22 LPA",
    website: "dypvp.edu.in",
    scholarship: "Merit scholarships.",
    highlight: "🏙️ Well-known private medical in Pune. DY Patil group",
    specialties: ["General Medicine", "Surgery", "Obs & Gynae"],
    established: 1996, note: "⚠️ Total ₹66–84 Lakhs",
    fees: "₹11,00,000–14,00,000/year", courses: ["MBBS"], streams: ["science"]
  },
  {
    id: "mbbs-015",
    name: "People's Medical College Bhopal",
    location: "Bhopal, Madhya Pradesh",
    city: "Bhopal", state: "Madhya Pradesh",
    type: "Private", category: "Private Medical",
    nirf: null, naac: "B+",
    annualFees: "₹8,00,000–10,00,000", totalFees: "₹48,00,000–60,00,000",
    hostelFees: "₹70,000–1,00,000/year",
    course: "MBBS (5.5 years)", seats: 150, entrance: "NEET UG",
    cutoff: "NEET 550+ score (MP state quota)",
    avgPackage: "₹5–10 LPA", topPackage: "₹18 LPA",
    website: "pmch.ac.in",
    scholarship: "MP Govt scholarships for SC/ST.",
    highlight: "🏥 Most affordable private MBBS in MP",
    specialties: ["General Medicine", "Surgery"],
    established: 2001, note: "⚠️ Total ₹48–60 Lakhs. MP students get state quota",
    fees: "₹8,00,000–10,00,000/year", courses: ["MBBS"], streams: ["science"]
  }
];

// ══════════════════════════════════════════
// COURSE 2 — B.Sc Computer Science
// ══════════════════════════════════════════

const BSCCS_COLLEGES = [
  {
    id: "bsccs-001", name: "St. Stephen's College Delhi",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government Aided", category: "Central Univ", nirf: 8, naac: "A++",
    annualFees: "₹15,000–18,000", totalFees: "₹45,000–54,000", hostelFees: "₹40,000–60,000/year",
    course: "B.Sc (Hons) Computer Science — 3 years", seats: 35, entrance: "CUET UG",
    cutoff: "CUET 95+ percentile. Class 12: 97%+",
    avgPackage: "₹6–12 LPA", topPackage: "₹35 LPA", website: "ststephens.edu",
    scholarship: "DU + merit scholarships.",
    highlight: "🏛️ Most prestigious B.Sc CS in India. DU top college",
    placed: ["Google, Microsoft, Amazon, TCS, Infosys"], established: 1881, note: "Very competitive — only 35 seats",
    fees: "₹15,000–18,000/year", courses: ["B.Sc Computer Science"], streams: ["science"]
  },
  {
    id: "bsccs-002", name: "Hansraj College Delhi",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government Aided", category: "Central Univ", nirf: 18, naac: "A++",
    annualFees: "₹12,000–16,000", totalFees: "₹36,000–48,000", hostelFees: "₹35,000–50,000/year",
    course: "B.Sc (Hons) Computer Science — 3 years", seats: 46, entrance: "CUET UG",
    cutoff: "CUET 92+ percentile. Class 12: 95%+",
    avgPackage: "₹5–10 LPA", topPackage: "₹30 LPA", website: "hansrajcollege.ac.in",
    scholarship: "DU scholarships.",
    highlight: "⭐ Top DU college for B.Sc CS. Strong alumni in tech",
    placed: ["Amazon, TCS, Wipro, Infosys, HCL"], established: 1948,
    fees: "₹12,000–16,000/year", courses: ["B.Sc Computer Science"], streams: ["science"]
  },
  {
    id: "bsccs-003", name: "Miranda House Delhi",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government Aided", category: "Central Univ", nirf: 1, naac: "A++",
    annualFees: "₹10,000–14,000", totalFees: "₹30,000–42,000", hostelFees: "₹35,000–50,000/year",
    course: "B.Sc (Hons) Computer Science — 3 years", seats: 46, entrance: "CUET UG",
    cutoff: "CUET 93+ percentile (Women only)",
    avgPackage: "₹5–10 LPA", topPackage: "₹28 LPA", website: "mirandahouse.ac.in",
    scholarship: "DU scholarships.",
    highlight: "👩 NIRF Rank 1 college in India! Women only — DU",
    placed: ["TCS, Infosys, Wipro, Amazon, Google"], established: 1948, note: "Women only. NIRF #1 ranked college overall",
    fees: "₹10,000–14,000/year", courses: ["B.Sc Computer Science"], streams: ["science"]
  },
  {
    id: "bsccs-004", name: "Presidency College Chennai",
    location: "Chennai, Tamil Nadu", city: "Chennai", state: "Tamil Nadu",
    type: "Government", category: "State Govt", nirf: 28, naac: "A++",
    annualFees: "₹5,000–8,000", totalFees: "₹15,000–24,000", hostelFees: "₹12,000–20,000/year",
    course: "B.Sc Computer Science — 3 years", seats: 60, entrance: "TN HSC marks-based",
    cutoff: "Class 12: 92%+ (CS/Maths)",
    avgPackage: "₹3–7 LPA", topPackage: "₹22 LPA", website: "presidencychennai.ac.in",
    scholarship: "TN Govt scholarships.",
    highlight: "🌆 Best govt B.Sc CS in South India. Autonomous college",
    placed: ["TCS, Wipro, Infosys, CTS, HCL"], established: 1840,
    fees: "₹5,000–8,000/year", courses: ["B.Sc Computer Science"], streams: ["science"]
  },
  {
    id: "bsccs-005", name: "Fergusson College Pune",
    location: "Pune, Maharashtra", city: "Pune", state: "Maharashtra",
    type: "Government Aided", category: "State Govt", nirf: 35, naac: "A++",
    annualFees: "₹10,000–15,000", totalFees: "₹30,000–45,000", hostelFees: "₹20,000–35,000/year",
    course: "B.Sc Computer Science — 3 years", seats: 80, entrance: "MHT-CET / Direct merit",
    cutoff: "Class 12: 90%+",
    avgPackage: "₹3–6 LPA", topPackage: "₹18 LPA", website: "fergusson.edu",
    scholarship: "Maharashtra Govt + merit scholarships.",
    highlight: "🏛️ Most prestigious govt college in Pune. 140-year legacy",
    placed: ["TCS, Wipro, Infosys, Capgemini"], established: 1885,
    fees: "₹10,000–15,000/year", courses: ["B.Sc Computer Science"], streams: ["science"]
  },
  {
    id: "bsccs-006", name: "Holkar Science College Indore",
    location: "Indore, Madhya Pradesh", city: "Indore", state: "Madhya Pradesh",
    type: "Government", category: "State Govt", nirf: null, naac: "A",
    annualFees: "₹3,000–6,000", totalFees: "₹9,000–18,000", hostelFees: "₹10,000–18,000/year",
    course: "B.Sc Computer Science — 3 years", seats: 120, entrance: "MP DTE / Direct merit",
    cutoff: "Class 12: 75%+",
    avgPackage: "₹2–5 LPA", topPackage: "₹12 LPA", website: "holkarsciencecollege.ac.in",
    scholarship: "MP Govt scholarships. Medhavi Yojana.",
    highlight: "🏫 Best govt science college in Indore. Very affordable",
    placed: ["TCS, Wipro, local IT companies"], established: 1891,
    fees: "₹3,000–6,000/year", courses: ["B.Sc Computer Science"], streams: ["science"]
  },
  {
    id: "bsccs-007", name: "Govt Science College Bhopal",
    location: "Bhopal, Madhya Pradesh", city: "Bhopal", state: "Madhya Pradesh",
    type: "Government", category: "State Govt", nirf: null, naac: "B+",
    annualFees: "₹2,500–5,000", totalFees: "₹7,500–15,000", hostelFees: "₹8,000–15,000/year",
    course: "B.Sc Computer Science — 3 years", seats: 120, entrance: "MP DTE / Direct merit",
    cutoff: "Class 12: 65%+",
    avgPackage: "₹1.5–4 LPA", topPackage: "₹10 LPA", website: "govtsciencebhopal.ac.in",
    scholarship: "MP Govt scholarships.",
    highlight: "💰 Most affordable B.Sc CS in Bhopal — under ₹5K/year",
    placed: ["Local companies, TCS, HCL"], established: 1957,
    fees: "₹2,500–5,000/year", courses: ["B.Sc Computer Science"], streams: ["science"]
  },
  {
    id: "bsccs-008", name: "Ramjas College Delhi",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government Aided", category: "Central Univ", nirf: null, naac: "A+",
    annualFees: "₹12,000–16,000", totalFees: "₹36,000–48,000", hostelFees: "₹30,000–48,000/year",
    course: "B.Sc (Hons) Computer Science — 3 years", seats: 46, entrance: "CUET UG",
    cutoff: "CUET 90+ percentile",
    avgPackage: "₹4–8 LPA", topPackage: "₹25 LPA", website: "ramjas.du.ac.in",
    scholarship: "DU scholarships.",
    highlight: "📚 Good DU college. Strong CS department",
    placed: ["TCS, Infosys, HCL, Wipro"], established: 1917,
    fees: "₹12,000–16,000/year", courses: ["B.Sc Computer Science"], streams: ["science"]
  },
  {
    id: "bsccs-009", name: "Christ University Bengaluru",
    location: "Bengaluru, Karnataka", city: "Bengaluru", state: "Karnataka",
    type: "Deemed", category: "Private", nirf: 42, naac: "A++",
    annualFees: "₹1,20,000–1,60,000", totalFees: "₹3,60,000–4,80,000", hostelFees: "₹75,000–1,10,000/year",
    course: "B.Sc Computer Science — 3 years", seats: 120, entrance: "Christ Entrance Test",
    cutoff: "Class 12: 85%+",
    avgPackage: "₹4–8 LPA", topPackage: "₹22 LPA", website: "christuniversity.in",
    scholarship: "Merit scholarships 10–50%.",
    highlight: "🌆 Best private B.Sc CS in Bengaluru. IT city advantage",
    placed: ["Amazon, TCS, Infosys, Wipro, Accenture"], established: 1969,
    fees: "₹1,20,000–1,60,000/year", courses: ["B.Sc Computer Science"], streams: ["science"]
  },
  {
    id: "bsccs-010", name: "Loyola College Chennai",
    location: "Chennai, Tamil Nadu", city: "Chennai", state: "Tamil Nadu",
    type: "Private Aided", category: "Private", nirf: 32, naac: "A++",
    annualFees: "₹25,000–40,000", totalFees: "₹75,000–1,20,000", hostelFees: "₹35,000–55,000/year",
    course: "B.Sc Computer Science — 3 years", seats: 60, entrance: "Merit-based / Own test",
    cutoff: "Class 12: 88%+",
    avgPackage: "₹3–7 LPA", topPackage: "₹20 LPA", website: "loyolachennai.edu.in",
    scholarship: "Merit + need-based scholarships.",
    highlight: "⭐ NAAC A++ autonomous. Best private science college Chennai",
    placed: ["TCS, Wipro, CTS, Infosys, HCL"], established: 1925,
    fees: "₹25,000–40,000/year", courses: ["B.Sc Computer Science"], streams: ["science"]
  },
  {
    id: "bsccs-011", name: "Symbiosis Institute of Computer Studies (SICSR)",
    location: "Pune, Maharashtra", city: "Pune", state: "Maharashtra",
    type: "Deemed", category: "Private", nirf: null, naac: "A",
    annualFees: "₹80,000–1,20,000", totalFees: "₹2,40,000–3,60,000", hostelFees: "₹60,000–90,000/year",
    course: "B.Sc CS / BSc IT — 3 years", seats: 60, entrance: "SET (Symbiosis Entrance Test)",
    cutoff: "Class 12: 80%+ with SET",
    avgPackage: "₹4–8 LPA", topPackage: "₹20 LPA", website: "sicsr.ac.in",
    scholarship: "SET score-based scholarships.",
    highlight: "🎓 Symbiosis brand. Good Pune IT industry connects",
    placed: ["TCS, Wipro, Infosys, Capgemini, Accenture"], established: 1994,
    fees: "₹80,000–1,20,000/year", courses: ["B.Sc Computer Science", "B.Sc IT"], streams: ["science"]
  },
  {
    id: "bsccs-012", name: "BITS Pilani — B.Sc (Hons) CS",
    location: "Pilani, Rajasthan", city: "Pilani", state: "Rajasthan",
    type: "Deemed", category: "Premium Private", nirf: 28, naac: "A",
    annualFees: "₹4,50,000–5,00,000", totalFees: "₹13,50,000–15,00,000", hostelFees: "₹1,20,000–1,60,000/year",
    course: "B.Sc (Hons) Computer Science — 3 years", seats: 40, entrance: "BITSAT",
    cutoff: "BITSAT 290+",
    avgPackage: "₹10–18 LPA", topPackage: "₹60 LPA", website: "bits-pilani.ac.in",
    scholarship: "Merit-cum-means scholarships.",
    highlight: "🚀 BITS B.Sc CS = IIT-equivalent placements",
    placed: ["Google, Microsoft, Goldman Sachs, Amazon, Qualcomm"], established: 1964,
    fees: "₹4,50,000–5,00,000/year", courses: ["B.Sc Computer Science"], streams: ["science"]
  }
];

// ══════════════════════════════════════════
// COURSE 3 — B.Com
// ══════════════════════════════════════════

const BCOM_COLLEGES = [
  {
    id: "bcom-001", name: "SRCC Delhi (Shri Ram College of Commerce)",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government Aided", category: "Central Univ", nirf: 1, naac: "A++",
    annualFees: "₹15,000–20,000", totalFees: "₹45,000–60,000", hostelFees: "₹40,000–60,000/year",
    course: "B.Com (Hons) — 3 years", seats: 420, entrance: "CUET UG",
    cutoff: "CUET 98+ percentile. Class 12: 98%+",
    avgPackage: "₹8–15 LPA", topPackage: "₹45 LPA", website: "srcc.edu",
    scholarship: "DU + merit scholarships.",
    highlight: "🥇 #1 B.Com college India. Gateway to top MBAs and finance careers",
    placed: ["Goldman Sachs, EY, Deloitte, KPMG, McKinsey"], established: 1926,
    fees: "₹15,000–20,000/year", courses: ["B.Com (Hons)"], streams: ["commerce"]
  },
  {
    id: "bcom-002", name: "Hindu College Delhi",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government Aided", category: "Central Univ", nirf: 5, naac: "A++",
    annualFees: "₹12,000–18,000", totalFees: "₹36,000–54,000", hostelFees: "₹35,000–55,000/year",
    course: "B.Com (Hons) — 3 years", seats: 420, entrance: "CUET UG",
    cutoff: "CUET 95+ percentile",
    avgPackage: "₹6–12 LPA", topPackage: "₹35 LPA", website: "hinducollege.ac.in",
    scholarship: "DU scholarships.",
    highlight: "🏛️ Top DU college. Strong finance + CA pathway",
    placed: ["Big 4 firms, ICICI, HDFC, TCS"], established: 1899,
    fees: "₹12,000–18,000/year", courses: ["B.Com (Hons)"], streams: ["commerce"]
  },
  {
    id: "bcom-003", name: "Loyola College Chennai (B.Com)",
    location: "Chennai, Tamil Nadu", city: "Chennai", state: "Tamil Nadu",
    type: "Private Aided", category: "Private", nirf: 15, naac: "A++",
    annualFees: "₹20,000–35,000", totalFees: "₹60,000–1,05,000", hostelFees: "₹35,000–55,000/year",
    course: "B.Com — 3 years", seats: 120, entrance: "Merit-based",
    cutoff: "Class 12: 88%+",
    avgPackage: "₹3–6 LPA", topPackage: "₹15 LPA", website: "loyolachennai.edu.in",
    scholarship: "Need-based + merit scholarships.",
    highlight: "⭐ Best private B.Com South India. NAAC A++",
    placed: ["TCS, Wipro, Big 4, ICICI Bank"], established: 1925,
    fees: "₹20,000–35,000/year", courses: ["B.Com"], streams: ["commerce"]
  },
  {
    id: "bcom-004", name: "Nizam College Hyderabad",
    location: "Hyderabad, Telangana", city: "Hyderabad", state: "Telangana",
    type: "Government Aided", category: "State Govt", nirf: null, naac: "A+",
    annualFees: "₹8,000–14,000", totalFees: "₹24,000–42,000", hostelFees: "₹15,000–25,000/year",
    course: "B.Com — 3 years", seats: 200, entrance: "TS DOST counselling",
    cutoff: "Class 12: 82%+",
    avgPackage: "₹2.5–5 LPA", topPackage: "₹12 LPA", website: "nizamcollege.ac.in",
    scholarship: "TS Govt + merit scholarships.",
    highlight: "🏛️ Oldest govt college in Hyderabad (1887). NAAC A+",
    placed: ["Big 4, Banks, IT companies"], established: 1887,
    fees: "₹8,000–14,000/year", courses: ["B.Com"], streams: ["commerce"]
  },
  {
    id: "bcom-005", name: "Govt Commerce College Bhopal",
    location: "Bhopal, Madhya Pradesh", city: "Bhopal", state: "Madhya Pradesh",
    type: "Government", category: "State Govt", nirf: null, naac: "B+",
    annualFees: "₹2,500–5,000", totalFees: "₹7,500–15,000", hostelFees: "₹8,000–14,000/year",
    course: "B.Com — 3 years", seats: 240, entrance: "MP DTE / Direct merit",
    cutoff: "Class 12: 60%+",
    avgPackage: "₹1.5–3.5 LPA", topPackage: "₹8 LPA", website: "govtcommercebhopal.ac.in",
    scholarship: "MP Govt scholarships. Gaon Ki Beti.",
    highlight: "💰 Most affordable B.Com in Bhopal. Under ₹5K/year",
    placed: ["Local CA firms, banks, TCS"], established: 1966,
    fees: "₹2,500–5,000/year", courses: ["B.Com"], streams: ["commerce"]
  },
  {
    id: "bcom-006", name: "Lady Shri Ram College Delhi",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government Aided", category: "Central Univ", nirf: 5, naac: "A++",
    annualFees: "₹10,000–16,000", totalFees: "₹30,000–48,000", hostelFees: "₹35,000–55,000/year",
    course: "B.Com (Hons) — 3 years", seats: 420, entrance: "CUET UG",
    cutoff: "CUET 94+ percentile (Women)",
    avgPackage: "₹5–10 LPA", topPackage: "₹30 LPA", website: "lsr.edu.in",
    scholarship: "DU scholarships.",
    highlight: "👩 Top women's college DU. Strong finance career outcomes",
    placed: ["EY, Deloitte, KPMG, HDFC, ICICI"], established: 1956, note: "Women only.",
    fees: "₹10,000–16,000/year", courses: ["B.Com (Hons)"], streams: ["commerce"]
  },
  {
    id: "bcom-007", name: "Christ University Bengaluru (B.Com)",
    location: "Bengaluru, Karnataka", city: "Bengaluru", state: "Karnataka",
    type: "Deemed", category: "Private", nirf: 38, naac: "A++",
    annualFees: "₹95,000–1,20,000", totalFees: "₹2,85,000–3,60,000", hostelFees: "₹70,000–1,00,000/year",
    course: "B.Com / B.Com Finance & Accounting — 3 years", seats: 300, entrance: "Christ Entrance Test",
    cutoff: "Class 12: 80%+",
    avgPackage: "₹3–7 LPA", topPackage: "₹18 LPA", website: "christuniversity.in",
    scholarship: "Merit scholarships.",
    highlight: "🌆 Best private B.Com in Bangalore. Finance + tech combination",
    placed: ["Deloitte, EY, TCS, HDFC Bank, Amazon"], established: 1969,
    fees: "₹95,000–1,20,000/year", courses: ["B.Com", "B.Com Finance"], streams: ["commerce"]
  },
  {
    id: "bcom-008", name: "Symbiosis College of Arts & Commerce",
    location: "Pune, Maharashtra", city: "Pune", state: "Maharashtra",
    type: "Deemed", category: "Private", nirf: null, naac: "A",
    annualFees: "₹70,000–95,000", totalFees: "₹2,10,000–2,85,000", hostelFees: "₹60,000–90,000/year",
    course: "B.Com — 3 years", seats: 240, entrance: "SET (Symbiosis Entrance Test)",
    cutoff: "Class 12: 75%+ with SET",
    avgPackage: "₹3–6 LPA", topPackage: "₹15 LPA", website: "symbiosiscollege.edu.in",
    scholarship: "SET merit scholarships.",
    highlight: "🎓 Symbiosis brand. Good Pune finance + CA pathway",
    placed: ["KPMG, Deloitte, HDFC, ICICI, TCS"], established: 1983,
    fees: "₹70,000–95,000/year", courses: ["B.Com"], streams: ["commerce"]
  },
  {
    id: "bcom-009", name: "Jain University Bengaluru",
    location: "Bengaluru, Karnataka", city: "Bengaluru", state: "Karnataka",
    type: "Deemed", category: "Private", nirf: null, naac: "A++",
    annualFees: "₹85,000–1,10,000", totalFees: "₹2,55,000–3,30,000", hostelFees: "₹65,000–90,000/year",
    course: "B.Com (various specializations) — 3 years", seats: 300, entrance: "Direct admission",
    cutoff: "Class 12: 70%+",
    avgPackage: "₹3–6 LPA", topPackage: "₹14 LPA", website: "jainuniversity.ac.in",
    scholarship: "Merit scholarships.",
    highlight: "🌆 Good Bangalore private. Multiple B.Com specializations",
    placed: ["Deloitte, KPMG, HDFC Bank, Infosys"], established: 1990,
    fees: "₹85,000–1,10,000/year", courses: ["B.Com"], streams: ["commerce"]
  },
  {
    id: "bcom-010", name: "NMIMS Mumbai (School of Commerce)",
    location: "Mumbai, Maharashtra", city: "Mumbai", state: "Maharashtra",
    type: "Deemed", category: "Private", nirf: null, naac: "A",
    annualFees: "₹1,60,000–2,00,000", totalFees: "₹4,80,000–6,00,000", hostelFees: "₹80,000–1,20,000/year",
    course: "B.Com / BCom (Hons) — 3 years", seats: 120, entrance: "NMIMS NPAT",
    cutoff: "NPAT 80%+ score",
    avgPackage: "₹5–10 LPA", topPackage: "₹22 LPA", website: "nmims.edu",
    scholarship: "Merit scholarships.",
    highlight: "💎 Premium Mumbai B.Com. Finance capital advantage",
    placed: ["Goldman Sachs, JP Morgan, HDFC, ICICI, Deloitte"], established: 1981,
    fees: "₹1,60,000–2,00,000/year", courses: ["B.Com", "B.Com (Hons)"], streams: ["commerce"]
  }
];

// ══════════════════════════════════════════
// COURSE 4 — BBA
// ══════════════════════════════════════════

const BBA_COLLEGES = [
  {
    id: "bba-001", name: "IIM Indore — IPM",
    location: "Indore, Madhya Pradesh", city: "Indore", state: "Madhya Pradesh",
    type: "Government", category: "IIM", nirf: 7, naac: "A++",
    annualFees: "₹4,50,000–5,00,000", totalFees: "₹22,50,000–25,00,000 (5 yrs BBA+MBA)", hostelFees: "₹1,20,000–1,60,000/year",
    course: "IPM (BBA+MBA) — 5 years", seats: 150, entrance: "IPMAT Indore",
    cutoff: "IPMAT Indore 95+ percentile",
    avgPackage: "₹18–25 LPA (after MBA portion)", topPackage: "₹80 LPA", website: "iimidr.ac.in",
    scholarship: "Merit-cum-means. SC/ST fee reduction.",
    highlight: "🥇 Best BBA program India. IIM degree at the end!",
    placed: ["McKinsey, BCG, Goldman Sachs, Amazon, Google"], established: 1996,
    fees: "₹4,50,000–5,00,000/year", courses: ["IPM (BBA+MBA)"], streams: ["commerce", "science", "arts"]
  },
  {
    id: "bba-002", name: "IIM Rohtak — IPM",
    location: "Rohtak, Haryana", city: "Rohtak", state: "Haryana",
    type: "Government", category: "IIM", nirf: 10, naac: "A+",
    annualFees: "₹3,50,000–4,00,000", totalFees: "₹17,50,000–20,00,000 (5 yrs)", hostelFees: "₹1,00,000–1,40,000/year",
    course: "IPM (BBA+MBA) — 5 years", seats: 120, entrance: "IPMAT Rohtak",
    cutoff: "IPMAT Rohtak 90+ percentile",
    avgPackage: "₹14–20 LPA", topPackage: "₹55 LPA", website: "iimrohtak.ac.in",
    scholarship: "SC/ST fee reduction.",
    highlight: "🏛️ IIM Rohtak. Second best IIM IPM program",
    placed: ["BCG, Amazon, HUL, Infosys, Deloitte"], established: 2009,
    fees: "₹3,50,000–4,00,000/year", courses: ["IPM (BBA+MBA)"], streams: ["commerce", "science", "arts"]
  },
  {
    id: "bba-003", name: "IIM Ranchi — BBA",
    location: "Ranchi, Jharkhand", city: "Ranchi", state: "Jharkhand",
    type: "Government", category: "IIM", nirf: 15, naac: "A",
    annualFees: "₹3,00,000–3,50,000", totalFees: "₹9,00,000–10,50,000 (3 yr BBA)", hostelFees: "₹90,000–1,20,000/year",
    course: "BBA (Human Resource / Finance) — 3 years", seats: 60, entrance: "JIPMAT",
    cutoff: "JIPMAT 90+ percentile",
    avgPackage: "₹8–14 LPA", topPackage: "₹35 LPA", website: "iimranchi.ac.in",
    scholarship: "Need-based scholarships.",
    highlight: "🏛️ IIM Ranchi BBA. IIM brand + affordable option",
    placed: ["TATA, Amazon, Deloitte, KPMG, HCL"], established: 2010,
    fees: "₹3,00,000–3,50,000/year", courses: ["BBA"], streams: ["commerce", "arts"]
  },
  {
    id: "bba-004", name: "DU BMS (Bachelor of Management Studies)",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government Aided", category: "Central Univ", nirf: null, naac: "A++",
    annualFees: "₹20,000–30,000", totalFees: "₹60,000–90,000", hostelFees: "₹35,000–55,000/year",
    course: "BMS (equivalent to BBA) — 3 years", seats: 420, entrance: "CUET UG",
    cutoff: "CUET 93+ percentile",
    avgPackage: "₹5–10 LPA", topPackage: "₹28 LPA", website: "du.ac.in",
    scholarship: "DU + merit scholarships.",
    highlight: "🏛️ DU BMS = Best affordable BBA in India. Delhi advantage",
    placed: ["EY, Deloitte, HDFC, Amazon, TCS"], established: 1922,
    fees: "₹20,000–30,000/year", courses: ["BMS (BBA)"], streams: ["commerce"]
  },
  {
    id: "bba-005", name: "NMIMS Mumbai (BBA)",
    location: "Mumbai, Maharashtra", city: "Mumbai", state: "Maharashtra",
    type: "Deemed", category: "Private", nirf: null, naac: "A",
    annualFees: "₹3,50,000–4,20,000", totalFees: "₹10,50,000–12,60,000", hostelFees: "₹90,000–1,30,000/year",
    course: "BBA — 3 years", seats: 180, entrance: "NMIMS NPAT",
    cutoff: "NPAT 85+ score",
    avgPackage: "₹6–12 LPA", topPackage: "₹30 LPA", website: "nmims.edu",
    scholarship: "Merit scholarships.",
    highlight: "💎 Best private BBA in Mumbai. Finance sector placement",
    placed: ["Goldman Sachs, JP Morgan, Deloitte, KPMG, HDFC"], established: 1981,
    fees: "₹3,50,000–4,20,000/year", courses: ["BBA"], streams: ["commerce"]
  },
  {
    id: "bba-006", name: "Christ University Bengaluru (BBA)",
    location: "Bengaluru, Karnataka", city: "Bengaluru", state: "Karnataka",
    type: "Deemed", category: "Private", nirf: null, naac: "A++",
    annualFees: "₹1,20,000–1,60,000", totalFees: "₹3,60,000–4,80,000", hostelFees: "₹70,000–1,00,000/year",
    course: "BBA — 3 years", seats: 300, entrance: "Christ Entrance Test",
    cutoff: "Class 12: 80%+",
    avgPackage: "₹4–8 LPA", topPackage: "₹20 LPA", website: "christuniversity.in",
    scholarship: "Merit scholarships.",
    highlight: "🌆 Best private BBA in Bengaluru. Good MBA pathway",
    placed: ["Amazon, Flipkart, Deloitte, TCS, HDFC"], established: 1969,
    fees: "₹1,20,000–1,60,000/year", courses: ["BBA"], streams: ["commerce"]
  },
  {
    id: "bba-007", name: "SCMS Pune (Symbiosis Centre for Management Studies)",
    location: "Pune, Maharashtra", city: "Pune", state: "Maharashtra",
    type: "Deemed", category: "Private", nirf: null, naac: "A",
    annualFees: "₹2,20,000–2,80,000", totalFees: "₹6,60,000–8,40,000", hostelFees: "₹80,000–1,10,000/year",
    course: "BBA — 3 years", seats: 180, entrance: "SET (Symbiosis Entrance Test)",
    cutoff: "SET 80+ score",
    avgPackage: "₹5–9 LPA", topPackage: "₹22 LPA", website: "scmspune.ac.in",
    scholarship: "SET merit scholarships.",
    highlight: "🎓 Symbiosis BBA = Premium Pune management education",
    placed: ["Deloitte, KPMG, Wipro, TCS, Capgemini"], established: 1993,
    fees: "₹2,20,000–2,80,000/year", courses: ["BBA"], streams: ["commerce"]
  },
  {
    id: "bba-008", name: "Amity University Noida",
    location: "Noida, Uttar Pradesh", city: "Noida", state: "Uttar Pradesh",
    type: "Private", category: "Private", nirf: null, naac: "A+",
    annualFees: "₹1,50,000–1,90,000", totalFees: "₹4,50,000–5,70,000", hostelFees: "₹90,000–1,30,000/year",
    course: "BBA — 3 years", seats: 300, entrance: "AMITEEE / Direct",
    cutoff: "Class 12: 70%+",
    avgPackage: "₹4–7 LPA", topPackage: "₹18 LPA", website: "amity.edu",
    scholarship: "Merit scholarships 10–50%.",
    highlight: "🏙️ Amity brand. Good Delhi-NCR industry connections",
    placed: ["TCS, Infosys, HDFC, ICICI, Wipro"], established: 2005,
    fees: "₹1,50,000–1,90,000/year", courses: ["BBA"], streams: ["commerce"]
  },
  {
    id: "bba-009", name: "Chandigarh University",
    location: "Mohali, Punjab", city: "Mohali", state: "Punjab",
    type: "Private", category: "Private", nirf: null, naac: "A+",
    annualFees: "₹90,000–1,20,000", totalFees: "₹2,70,000–3,60,000", hostelFees: "₹60,000–90,000/year",
    course: "BBA — 3 years", seats: 300, entrance: "CUCET / Direct",
    cutoff: "Class 12: 65%+",
    avgPackage: "₹3–6 LPA", topPackage: "₹15 LPA", website: "cuchd.in",
    scholarship: "CUCET merit scholarships.",
    highlight: "💰 Affordable BBA. Good placement record for fees paid",
    placed: ["TCS, Wipro, HDFC, ICICI, Capgemini"], established: 2012,
    fees: "₹90,000–1,20,000/year", courses: ["BBA"], streams: ["commerce"]
  },
  {
    id: "bba-010", name: "Prestige Institute of Management Gwalior",
    location: "Gwalior, Madhya Pradesh", city: "Gwalior", state: "Madhya Pradesh",
    type: "Private", category: "Private", nirf: null, naac: "A",
    annualFees: "₹80,000–1,05,000", totalFees: "₹2,40,000–3,15,000", hostelFees: "₹45,000–65,000/year",
    course: "BBA — 3 years", seats: 120, entrance: "Direct / MP DTE",
    cutoff: "Class 12: 60%+",
    avgPackage: "₹2.5–5 LPA", topPackage: "₹10 LPA", website: "pimg.in",
    scholarship: "MP Govt + merit scholarships.",
    highlight: "🏯 Best BBA in Gwalior. NAAC A. MP Govt scholarships eligible",
    placed: ["HDFC, ICICI, TCS, local companies"], established: 1994,
    fees: "₹80,000–1,05,000/year", courses: ["BBA"], streams: ["commerce"]
  }
];

// ══════════════════════════════════════════
// COURSE 5 — B.A.
// ══════════════════════════════════════════

const BA_COLLEGES = [
  {
    id: "ba-001", name: "Miranda House Delhi (B.A.)",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government Aided", category: "Central Univ", nirf: 1, naac: "A++",
    annualFees: "₹10,000–14,000", totalFees: "₹30,000–42,000", hostelFees: "₹35,000–55,000/year",
    course: "B.A. (Hons) — 3 years | English, History, Economics, Political Science, Psychology, Sociology",
    seats: 420, entrance: "CUET UG", cutoff: "CUET 93–96+ percentile (depends on subject)",
    avgPackage: "₹3–8 LPA", topPackage: "₹25 LPA", website: "mirandahouse.ac.in",
    scholarship: "DU scholarships.",
    highlight: "🥇 NIRF Rank 1 college in India (overall)! Women only",
    placed: ["UPSC toppers, Media, NGOs, MNCs, Banks"], established: 1948, note: "Women only.",
    fees: "₹10,000–14,000/year", courses: ["B.A. (Hons)"], streams: ["arts"]
  },
  {
    id: "ba-002", name: "Lady Shri Ram College (LSR) Delhi",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government Aided", category: "Central Univ", nirf: 5, naac: "A++",
    annualFees: "₹10,000–16,000", totalFees: "₹30,000–48,000", hostelFees: "₹35,000–55,000/year",
    course: "B.A. (Hons) Economics / English / Journalism — 3 years", seats: 420, entrance: "CUET UG",
    cutoff: "CUET 94+ percentile",
    avgPackage: "₹4–9 LPA", topPackage: "₹28 LPA", website: "lsr.edu.in",
    scholarship: "DU + merit scholarships.",
    highlight: "👩 Best women's college for B.A. Economics in India",
    placed: ["IAS/IPS, Media houses, MNCs, NGOs, Banks"], established: 1956, note: "Women only.",
    fees: "₹10,000–16,000/year", courses: ["B.A. (Hons)"], streams: ["arts"]
  },
  {
    id: "ba-003", name: "St. Stephen's College Delhi (B.A.)",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government Aided", category: "Central Univ", nirf: 8, naac: "A++",
    annualFees: "₹14,000–18,000", totalFees: "₹42,000–54,000", hostelFees: "₹40,000–60,000/year",
    course: "B.A. (Hons) English / History / Economics — 3 years", seats: 140, entrance: "CUET UG + Interview",
    cutoff: "CUET 96+ percentile",
    avgPackage: "₹4–10 LPA", topPackage: "₹30 LPA", website: "ststephens.edu",
    scholarship: "DU + merit scholarships.",
    highlight: "🏛️ Most prestigious humanities college in India",
    placed: ["UPSC toppers, Media, Big Firms, Civil Services"], established: 1881,
    fees: "₹14,000–18,000/year", courses: ["B.A. (Hons)"], streams: ["arts"]
  },
  {
    id: "ba-004", name: "Presidency College Kolkata",
    location: "Kolkata, West Bengal", city: "Kolkata", state: "West Bengal",
    type: "Government", category: "State Govt", nirf: 22, naac: "A",
    annualFees: "₹5,000–10,000", totalFees: "₹15,000–30,000", hostelFees: "₹12,000–20,000/year",
    course: "B.A. (Hons) — Economics, English, History, Political Science", seats: 280, entrance: "CUET UG / WB Merit",
    cutoff: "Class 12: 88%+",
    avgPackage: "₹3–7 LPA", topPackage: "₹22 LPA", website: "presiuniv.ac.in",
    scholarship: "WB Govt + merit scholarships.",
    highlight: "🏛️ Oldest and most prestigious college in East India (1817)",
    placed: ["Civil Services, Media, Academics, MNCs"], established: 1817,
    fees: "₹5,000–10,000/year", courses: ["B.A. (Hons)"], streams: ["arts"]
  },
  {
    id: "ba-005", name: "Fergusson College Pune (B.A.)",
    location: "Pune, Maharashtra", city: "Pune", state: "Maharashtra",
    type: "Government Aided", category: "State Govt", nirf: 35, naac: "A++",
    annualFees: "₹8,000–14,000", totalFees: "₹24,000–42,000", hostelFees: "₹18,000–30,000/year",
    course: "B.A. — Economics, English, History, Sociology, Psychology", seats: 360, entrance: "Direct merit-based",
    cutoff: "Class 12: 80%+",
    avgPackage: "₹2.5–6 LPA", topPackage: "₹18 LPA", website: "fergusson.edu",
    scholarship: "Maharashtra Govt scholarships.",
    highlight: "🏛️ Best B.A. college in Maharashtra. 140-year legacy",
    placed: ["Civil Services, Media, NGOs, Banks"], established: 1885,
    fees: "₹8,000–14,000/year", courses: ["B.A."], streams: ["arts"]
  },
  {
    id: "ba-006", name: "Govt Girls PG College Bhopal",
    location: "Bhopal, Madhya Pradesh", city: "Bhopal", state: "Madhya Pradesh",
    type: "Government", category: "State Govt", nirf: null, naac: "B+",
    annualFees: "₹2,000–4,000", totalFees: "₹6,000–12,000", hostelFees: "₹8,000–14,000/year",
    course: "B.A. — Hindi, English, History, Political Science, Economics", seats: 500, entrance: "Direct merit-based",
    cutoff: "Class 12: 55%+",
    avgPackage: "₹1.5–3.5 LPA", topPackage: "₹8 LPA", website: "govtgirlspgcollege.ac.in",
    scholarship: "MP Govt. Gaon Ki Beti. Pratibha Kiran.",
    highlight: "👩 Women only. Most affordable B.A. in Bhopal",
    placed: ["Teaching, Banking, Govt jobs, UPSC"], established: 1958,
    fees: "₹2,000–4,000/year", courses: ["B.A."], streams: ["arts"]
  },
  {
    id: "ba-007", name: "Christ University Bengaluru (B.A.)",
    location: "Bengaluru, Karnataka", city: "Bengaluru", state: "Karnataka",
    type: "Deemed", category: "Private", nirf: null, naac: "A++",
    annualFees: "₹80,000–1,10,000", totalFees: "₹2,40,000–3,30,000", hostelFees: "₹65,000–95,000/year",
    course: "B.A. — Economics, Psychology, Journalism, Political Science — 3 years", seats: 300, entrance: "Christ Entrance Test",
    cutoff: "Class 12: 75%+",
    avgPackage: "₹3–6 LPA", topPackage: "₹15 LPA", website: "christuniversity.in",
    scholarship: "Merit scholarships.",
    highlight: "🌆 Best private B.A. in Bengaluru. Good media + NGO connections",
    placed: ["Media houses, NGOs, MNCs, Banks"], established: 1969,
    fees: "₹80,000–1,10,000/year", courses: ["B.A."], streams: ["arts"]
  },
  {
    id: "ba-008", name: "Ashoka University Sonipat",
    location: "Sonipat, Haryana", city: "Sonipat", state: "Haryana",
    type: "Private", category: "Premium Private", nirf: 18, naac: "A",
    annualFees: "₹6,00,000–7,50,000", totalFees: "₹18,00,000–22,50,000", hostelFees: "₹2,00,000–2,80,000/year",
    course: "B.A. (Hons) Liberal Arts / Economics / Psychology — 3 years", seats: 300, entrance: "Ashoka Entrance Test + Interview",
    cutoff: "Class 12: 85%+ with strong essays",
    avgPackage: "₹7–14 LPA", topPackage: "₹35 LPA", website: "ashoka.edu.in",
    scholarship: "Need-based scholarships up to 100% (Ashoka Scholars).",
    highlight: "🌟 India's only true Liberal Arts university. US-style education",
    placed: ["BCG, McKinsey, Amazon, Google, Goldman Sachs"], established: 2014,
    fees: "₹6,00,000–7,50,000/year", courses: ["B.A. Liberal Arts"], streams: ["arts"]
  },
  {
    id: "ba-009", name: "FLAME University Pune",
    location: "Pune, Maharashtra", city: "Pune", state: "Maharashtra",
    type: "Private", category: "Premium Private", nirf: null, naac: "A",
    annualFees: "₹5,00,000–6,00,000", totalFees: "₹15,00,000–18,00,000", hostelFees: "₹1,50,000–2,20,000/year",
    course: "B.A. Liberal Education — 3 years", seats: 200, entrance: "FLAME Entrance Test",
    cutoff: "Class 12: 80%+",
    avgPackage: "₹5–10 LPA", topPackage: "₹25 LPA", website: "flame.edu.in",
    scholarship: "Need + merit scholarships.",
    highlight: "🎨 Liberal arts with focus on creativity + critical thinking",
    placed: ["Media, Consulting, NGOs, MNCs"], established: 2007,
    fees: "₹5,00,000–6,00,000/year", courses: ["B.A. Liberal Arts"], streams: ["arts"]
  }
];

// ══════════════════════════════════════════
// COURSE 6 — LAW
// ══════════════════════════════════════════

const LAW_COLLEGES = [
  {
    id: "law-001", name: "NLSIU Bangalore",
    location: "Bengaluru, Karnataka", city: "Bengaluru", state: "Karnataka",
    type: "Government", category: "NLU", nirf: 1, naac: "A++",
    annualFees: "₹2,50,000–3,00,000", totalFees: "₹12,50,000–15,00,000 (5 yrs BA LLB)", hostelFees: "₹80,000–1,20,000/year",
    course: "BA LLB (Hons) — 5 years", seats: 80, entrance: "CLAT",
    cutoff: "CLAT Top 200 rank (General)",
    avgPackage: "₹12–20 LPA", topPackage: "₹60 LPA", website: "nls.ac.in",
    scholarship: "Need-based scholarships. SC/ST fee reduction.",
    highlight: "🥇 #1 Law college India. NLSIU = Harvard of Indian law",
    placed: ["Big Law Firms, UN, World Bank, Supreme Court"], established: 1987,
    fees: "₹2,50,000–3,00,000/year", courses: ["BA LLB (Hons)"], streams: ["arts", "commerce", "science"]
  },
  {
    id: "law-002", name: "NALSAR University Hyderabad",
    location: "Hyderabad, Telangana", city: "Hyderabad", state: "Telangana",
    type: "Government", category: "NLU", nirf: 2, naac: "A++",
    annualFees: "₹1,80,000–2,20,000", totalFees: "₹9,00,000–11,00,000 (5 yrs)", hostelFees: "₹70,000–1,00,000/year",
    course: "BA LLB (Hons) — 5 years", seats: 120, entrance: "CLAT",
    cutoff: "CLAT Top 400 rank",
    avgPackage: "₹10–18 LPA", topPackage: "₹50 LPA", website: "nalsar.ac.in",
    scholarship: "Need-based + merit scholarships.",
    highlight: "⭐ NIRF #2 law. Strong corporate law + litigation",
    placed: ["AZB, Cyril Amarchand, S&R Associates, Big Law firms"], established: 1998,
    fees: "₹1,80,000–2,20,000/year", courses: ["BA LLB (Hons)"], streams: ["arts", "commerce", "science"]
  },
  {
    id: "law-003", name: "NLU Delhi",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government", category: "NLU", nirf: 3, naac: "A+",
    annualFees: "₹2,00,000–2,50,000", totalFees: "₹10,00,000–12,50,000 (5 yrs)", hostelFees: "₹75,000–1,10,000/year",
    course: "BA LLB (Hons) — 5 years", seats: 70, entrance: "AILET (own exam)",
    cutoff: "AILET Top 70 rank",
    avgPackage: "₹12–20 LPA", topPackage: "₹55 LPA", website: "nludelhi.ac.in",
    scholarship: "Need-based scholarships.",
    highlight: "🏛️ Delhi NLU. AILET exam. Best for Delhi High Court practice",
    placed: ["AZB, Luthra & Luthra, Shardul Amarchand, SAM"], established: 2008,
    fees: "₹2,00,000–2,50,000/year", courses: ["BA LLB (Hons)"], streams: ["arts", "commerce", "science"]
  },
  {
    id: "law-004", name: "NUJS Kolkata",
    location: "Kolkata, West Bengal", city: "Kolkata", state: "West Bengal",
    type: "Government", category: "NLU", nirf: 5, naac: "A+",
    annualFees: "₹1,50,000–1,90,000", totalFees: "₹7,50,000–9,50,000 (5 yrs)", hostelFees: "₹60,000–90,000/year",
    course: "BA LLB (Hons) — 5 years", seats: 60, entrance: "CLAT",
    cutoff: "CLAT Top 600 rank",
    avgPackage: "₹9–16 LPA", topPackage: "₹45 LPA", website: "nujs.edu",
    scholarship: "Merit + need-based scholarships.",
    highlight: "⭐ Top 5 NLU. Strong IPR and Corporate Law departments",
    placed: ["Big Law firms, Khaitan & Co, AZB"], established: 1999,
    fees: "₹1,50,000–1,90,000/year", courses: ["BA LLB (Hons)"], streams: ["arts", "commerce", "science"]
  },
  {
    id: "law-005", name: "NLU Jodhpur",
    location: "Jodhpur, Rajasthan", city: "Jodhpur", state: "Rajasthan",
    type: "Government", category: "NLU", nirf: 6, naac: "A+",
    annualFees: "₹1,60,000–2,00,000", totalFees: "₹8,00,000–10,00,000 (5 yrs)", hostelFees: "₹65,000–95,000/year",
    course: "BA LLB (Hons) — 5 years", seats: 120, entrance: "CLAT",
    cutoff: "CLAT Top 1000 rank",
    avgPackage: "₹8–14 LPA", topPackage: "₹40 LPA", website: "nlujodhpur.ac.in",
    scholarship: "SC/ST fee waiver + merit scholarships.",
    highlight: "🏜️ Good NLU in Rajasthan. Strong Moot Court culture",
    placed: ["Big Law firms, Rajasthan HC, Corporate firms"], established: 1999,
    fees: "₹1,60,000–2,00,000/year", courses: ["BA LLB (Hons)"], streams: ["arts", "commerce", "science"]
  },
  {
    id: "law-006", name: "Govt Law College Mumbai",
    location: "Mumbai, Maharashtra", city: "Mumbai", state: "Maharashtra",
    type: "Government", category: "State Govt", nirf: null, naac: "A",
    annualFees: "₹8,000–15,000", totalFees: "₹40,000–90,000 (5 or 3 yr LLB)", hostelFees: "N/A (day college)",
    course: "BA LLB (5 yr) / LLB (3 yr)", seats: 480, entrance: "MH CET Law",
    cutoff: "MH CET Law 85+ percentile",
    avgPackage: "₹4–10 LPA", topPackage: "₹28 LPA", website: "glcmumbai.ac.in",
    scholarship: "Maharashtra Govt scholarships.",
    highlight: "🌆 Oldest law college in Asia (1855). Mumbai High Court proximity",
    placed: ["Mumbai HC, Corporate firms, Big Law"], established: 1855,
    fees: "₹8,000–15,000/year", courses: ["BA LLB", "LLB"], streams: ["arts", "commerce", "science"]
  },
  {
    id: "law-007", name: "Govt Law College Bhopal",
    location: "Bhopal, Madhya Pradesh", city: "Bhopal", state: "Madhya Pradesh",
    type: "Government", category: "State Govt", nirf: null, naac: "B+",
    annualFees: "₹5,000–10,000", totalFees: "₹25,000–60,000 (5 or 3 yr)", hostelFees: "N/A",
    course: "BA LLB (5 yr) / LLB (3 yr)", seats: 300, entrance: "MP CLAT / PET",
    cutoff: "MP CLAT State Quota",
    avgPackage: "₹2–5 LPA", topPackage: "₹12 LPA", website: "govtlawbhopal.ac.in",
    scholarship: "MP Govt scholarships.",
    highlight: "💰 Most affordable law in MP. MP HC proximity advantage",
    placed: ["MP High Court, District Courts, Govt jobs"], established: 1956,
    fees: "₹5,000–10,000/year", courses: ["BA LLB", "LLB"], streams: ["arts", "commerce", "science"]
  },
  {
    id: "law-008", name: "Symbiosis Law School Pune",
    location: "Pune, Maharashtra", city: "Pune", state: "Maharashtra",
    type: "Deemed", category: "Private", nirf: 12, naac: "A",
    annualFees: "₹1,80,000–2,40,000", totalFees: "₹9,00,000–12,00,000 (5 yrs)", hostelFees: "₹80,000–1,20,000/year",
    course: "BA LLB / BBA LLB — 5 years", seats: 180, entrance: "CLAT / SLAT (own exam)",
    cutoff: "CLAT 3000–5000 rank / SLAT 80+ score",
    avgPackage: "₹6–12 LPA", topPackage: "₹28 LPA", website: "symlaw.ac.in",
    scholarship: "SLAT merit scholarships.",
    highlight: "🏛️ Best private law school India. BBA LLB unique option",
    placed: ["Big Law firms, Wipro, TCS, Corporates"], established: 1977,
    fees: "₹1,80,000–2,40,000/year", courses: ["BA LLB", "BBA LLB"], streams: ["arts", "commerce", "science"]
  },
  {
    id: "law-009", name: "Amity Law School Noida",
    location: "Noida, Uttar Pradesh", city: "Noida", state: "Uttar Pradesh",
    type: "Private", category: "Private", nirf: null, naac: "A",
    annualFees: "₹1,50,000–2,00,000", totalFees: "₹7,50,000–10,00,000 (5 yrs)", hostelFees: "₹80,000–1,10,000/year",
    course: "BA LLB / BBA LLB — 5 years", seats: 120, entrance: "CLAT / AILET / Amity own",
    cutoff: "CLAT 8000–12000 rank",
    avgPackage: "₹4–8 LPA", topPackage: "₹20 LPA", website: "amity.edu/als",
    scholarship: "Merit scholarships.",
    highlight: "🏙️ Amity brand. Good Delhi-NCR court connections",
    placed: ["Big Law firms, Corporate Legal teams"], established: 2000,
    fees: "₹1,50,000–2,00,000/year", courses: ["BA LLB", "BBA LLB"], streams: ["arts", "commerce", "science"]
  }
];

// ══════════════════════════════════════════
// COURSE 7 — B.Ed
// ══════════════════════════════════════════

const BED_COLLEGES = [
  {
    id: "bed-001", name: "CIE Delhi University",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government", category: "Central Univ", nirf: 3, naac: "A++",
    annualFees: "₹15,000–22,000", totalFees: "₹30,000–44,000 (2 yrs)", hostelFees: "₹35,000–50,000/year",
    course: "B.Ed — 2 years", seats: 100, entrance: "DU B.Ed CET",
    cutoff: "DU CET 90+ percentile",
    avgPackage: "₹4–8 LPA", topPackage: "₹15 LPA", website: "cie.du.ac.in",
    scholarship: "DU + merit scholarships.",
    highlight: "🥇 Best B.Ed in India. Delhi University. CIE standard",
    placed: ["Delhi Govt Schools, KV, NVS, Private Schools"], established: 1947,
    fees: "₹15,000–22,000/year", courses: ["B.Ed"], streams: ["arts", "science", "commerce"]
  },
  {
    id: "bed-002", name: "NCERT RIE Bhopal",
    location: "Bhopal, Madhya Pradesh", city: "Bhopal", state: "Madhya Pradesh",
    type: "Government", category: "Central Govt", nirf: null, naac: "A+",
    annualFees: "₹8,000–15,000", totalFees: "₹16,000–30,000 (2 yrs)", hostelFees: "₹10,000–18,000/year",
    course: "B.Ed / B.Sc B.Ed / B.A. B.Ed — 2 or 4 years", seats: 200, entrance: "NCERT RIE CEE",
    cutoff: "RIE CEE 80+ percentile",
    avgPackage: "₹3–7 LPA", topPackage: "₹12 LPA", website: "riebhopal.ac.in",
    scholarship: "NCERT scholarships. NSP.",
    highlight: "🌿 NCERT run institute in MP. Govt teaching jobs pathway",
    placed: ["NVS, KV, MP Govt Schools, CBSE schools"], established: 1963,
    fees: "₹8,000–15,000/year", courses: ["B.Ed", "B.Sc B.Ed", "B.A. B.Ed"], streams: ["arts", "science"]
  },
  {
    id: "bed-003", name: "NCERT RIE Mysuru",
    location: "Mysuru, Karnataka", city: "Mysuru", state: "Karnataka",
    type: "Government", category: "Central Govt", nirf: null, naac: "A",
    annualFees: "₹8,000–14,000", totalFees: "₹16,000–28,000 (2 yrs)", hostelFees: "₹10,000–18,000/year",
    course: "B.Ed / B.Sc B.Ed / B.A. B.Ed", seats: 200, entrance: "NCERT RIE CEE",
    cutoff: "RIE CEE 78+ percentile",
    avgPackage: "₹3–6 LPA", topPackage: "₹10 LPA", website: "riemysore.ac.in",
    scholarship: "NCERT scholarships.",
    highlight: "🌺 NCERT South India RIE. Best B.Ed in Karnataka region",
    placed: ["NVS, KV, Karnataka Govt Schools"], established: 1963,
    fees: "₹8,000–14,000/year", courses: ["B.Ed", "B.Sc B.Ed"], streams: ["arts", "science"]
  },
  {
    id: "bed-004", name: "Govt College of Education Bhopal",
    location: "Bhopal, Madhya Pradesh", city: "Bhopal", state: "Madhya Pradesh",
    type: "Government", category: "State Govt", nirf: null, naac: "B+",
    annualFees: "₹5,000–10,000", totalFees: "₹10,000–20,000 (2 yrs)", hostelFees: "₹8,000–14,000/year",
    course: "B.Ed — 2 years", seats: 200, entrance: "MP B.Ed CET",
    cutoff: "MP B.Ed CET 70+ percentile",
    avgPackage: "₹2–4 LPA", topPackage: "₹8 LPA", website: "mpbedcet.ac.in",
    scholarship: "MP Govt scholarships. Gaon Ki Beti.",
    highlight: "💰 Most affordable B.Ed in Bhopal. Under ₹10K/year",
    placed: ["MP Govt Schools, Private schools"], established: 1957,
    fees: "₹5,000–10,000/year", courses: ["B.Ed"], streams: ["arts", "science", "commerce"]
  },
  {
    id: "bed-005", name: "Lady Irwin College Delhi",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government Aided", category: "Central Univ", nirf: null, naac: "A+",
    annualFees: "₹12,000–18,000", totalFees: "₹24,000–36,000 (2 yrs)", hostelFees: "₹35,000–55,000/year",
    course: "B.Ed — 2 years", seats: 50, entrance: "DU B.Ed CET",
    cutoff: "DU CET 85+ percentile",
    avgPackage: "₹3–7 LPA", topPackage: "₹12 LPA", website: "ladyirwin.du.ac.in",
    scholarship: "DU + merit scholarships.",
    highlight: "👩 Women's DU college. Good B.Ed program in Delhi",
    placed: ["Delhi schools, KV, Private schools"], established: 1932, note: "Women only.",
    fees: "₹12,000–18,000/year", courses: ["B.Ed"], streams: ["arts", "science", "commerce"]
  },
  {
    id: "bed-006", name: "Amity Institute of Education Noida",
    location: "Noida, Uttar Pradesh", city: "Noida", state: "Uttar Pradesh",
    type: "Private", category: "Private", nirf: null, naac: "A",
    annualFees: "₹85,000–1,20,000", totalFees: "₹1,70,000–2,40,000 (2 yrs)", hostelFees: "₹70,000–1,00,000/year",
    course: "B.Ed — 2 years", seats: 100, entrance: "AMITEEE / Direct",
    cutoff: "Graduation 50%+",
    avgPackage: "₹3–5 LPA", topPackage: "₹10 LPA", website: "amity.edu",
    scholarship: "Merit scholarships.",
    highlight: "🏙️ Amity brand B.Ed. Delhi-NCR school connects",
    placed: ["Private schools Delhi-NCR, International schools"], established: 2000,
    fees: "₹85,000–1,20,000/year", courses: ["B.Ed"], streams: ["arts", "science", "commerce"]
  },
  {
    id: "bed-007", name: "LPU Phagwara (B.Ed)",
    location: "Phagwara, Punjab", city: "Phagwara", state: "Punjab",
    type: "Private", category: "Private", nirf: null, naac: "A+",
    annualFees: "₹70,000–90,000", totalFees: "₹1,40,000–1,80,000 (2 yrs)", hostelFees: "₹55,000–80,000/year",
    course: "B.Ed — 2 years", seats: 200, entrance: "LPUNEST / Direct",
    cutoff: "Graduation 50%+",
    avgPackage: "₹2.5–5 LPA", topPackage: "₹9 LPA", website: "lpu.in",
    scholarship: "LPUNEST merit scholarships up to 100%.",
    highlight: "💡 LPU brand. Affordable B.Ed. Good school placement record",
    placed: ["Private schools, CBSE schools, International schools"], established: 2005,
    fees: "₹70,000–90,000/year", courses: ["B.Ed"], streams: ["arts", "science", "commerce"]
  },
  {
    id: "bed-008", name: "Jamia Millia Islamia Delhi",
    location: "New Delhi, Delhi", city: "New Delhi", state: "Delhi",
    type: "Government", category: "Central Univ", nirf: 9, naac: "A++",
    annualFees: "₹12,000–18,000", totalFees: "₹24,000–36,000 (2 yrs)", hostelFees: "₹30,000–48,000/year",
    course: "B.Ed — 2 years", seats: 100, entrance: "JMI B.Ed Entrance",
    cutoff: "JMI Entrance 80+ percentile",
    avgPackage: "₹3–7 LPA", topPackage: "₹14 LPA", website: "jmi.ac.in",
    scholarship: "JMI minority + merit scholarships.",
    highlight: "⭐ Central University NIRF Rank 9. Excellent B.Ed faculty",
    placed: ["Delhi Govt schools, KV, NVS, Private schools"], established: 1920,
    fees: "₹12,000–18,000/year", courses: ["B.Ed"], streams: ["arts", "science", "commerce"]
  }
];

// ══════════════════════════════════════════
// MASTER EXPORT — ALL COURSES
// ══════════════════════════════════════════

const ALL_COURSES_DATA = {
  mbbs:  { key: "mbbs",  label: "MBBS",    icon: "🩺", fullName: "Bachelor of Medicine & Bachelor of Surgery", duration: "5.5 years", entrance: "NEET UG", description: "Entry into medical profession. Govt colleges almost free, private very expensive.", warning: "⚠️ Private MBBS costs ₹50–1 Crore total. Always target government seat via NEET.", colleges: MBBS_COLLEGES, govtCount: 10, privateCount: 5, feeSummary: { govtMin: "₹1,628/year (AIIMS)", govtMax: "₹40,000/year (state govt)", privateMin: "₹8 Lakh/year", privateMax: "₹16 Lakh/year", govtTotal: "₹10,000–2,50,000", privateTotal: "₹48 Lakh – 1 Crore" } },
  bsccs: { key: "bsccs", label: "B.Sc CS", icon: "💻", fullName: "Bachelor of Science in Computer Science", duration: "3 years", entrance: "CUET UG (central) / State merit", description: "Pure CS degree. Theory + coding. Better for research/IT industry.", colleges: BSCCS_COLLEGES, govtCount: 8, privateCount: 4, feeSummary: { govtMin: "₹2,500/year (MP Govt)", govtMax: "₹18,000/year (DU colleges)", privateMin: "₹25,000/year", privateMax: "₹5 Lakh/year (BITS)", govtTotal: "₹7,500–54,000", privateTotal: "₹75,000–15 Lakh" } },
  bcom:  { key: "bcom",  label: "B.Com",   icon: "📊", fullName: "Bachelor of Commerce", duration: "3 years", entrance: "CUET UG (central) / State merit", description: "Commerce degree covering Accounting, Finance, Tax, Economics. Gateway to CA/CMA/CS.", colleges: BCOM_COLLEGES, govtCount: 6, privateCount: 4, feeSummary: { govtMin: "₹2,500/year (MP Govt)", govtMax: "₹20,000/year (DU colleges)", privateMin: "₹70,000/year", privateMax: "₹2 Lakh/year", govtTotal: "₹7,500–60,000", privateTotal: "₹2 Lakh–6 Lakh" } },
  bba:   { key: "bba",   label: "BBA",     icon: "🏢", fullName: "Bachelor of Business Administration", duration: "3 years (5 years for IIM IPM)", entrance: "IPMAT (IIM) / CUET / SET / CUCET", description: "Management fundamentals. Stepping stone to MBA.", colleges: BBA_COLLEGES, govtCount: 4, privateCount: 6, feeSummary: { govtMin: "₹20,000/year (DU BMS)", govtMax: "₹5 Lakh/year (IIM IPM)", privateMin: "₹90,000/year", privateMax: "₹4.2 Lakh/year", govtTotal: "₹60,000–25 Lakh", privateTotal: "₹2.7 Lakh–12.6 Lakh" } },
  ba:    { key: "ba",    label: "B.A.",    icon: "📚", fullName: "Bachelor of Arts", duration: "3 years", entrance: "CUET UG (central) / State merit", description: "Humanities degree — Literature, History, Economics, Political Science, Psychology.", colleges: BA_COLLEGES, govtCount: 6, privateCount: 3, feeSummary: { govtMin: "₹2,000/year (MP Govt Girls College)", govtMax: "₹18,000/year (DU colleges)", privateMin: "₹80,000/year", privateMax: "₹7.5 Lakh/year (Ashoka)", govtTotal: "₹6,000–54,000", privateTotal: "₹2.4 Lakh–22.5 Lakh" } },
  law:   { key: "law",   label: "Law",     icon: "⚖️", fullName: "BA LLB / LLB (Law)", duration: "5 years (BA LLB) / 3 years (LLB after graduation)", entrance: "CLAT / AILET / SLAT / State CET", description: "Law degree. Options: NLUs (top tier), State Govt colleges (affordable), Private law schools.", colleges: LAW_COLLEGES, govtCount: 7, privateCount: 2, feeSummary: { govtMin: "₹5,000/year (MP Govt Law)", govtMax: "₹3 Lakh/year (NLUs)", privateMin: "₹1.5 Lakh/year", privateMax: "₹2.4 Lakh/year", govtTotal: "₹25,000–15 Lakh", privateTotal: "₹7.5 Lakh–12 Lakh" } },
  bed:   { key: "bed",   label: "B.Ed",    icon: "🎓", fullName: "Bachelor of Education", duration: "2 years (after graduation)", entrance: "DU CET / NCERT RIE CEE / MP B.Ed CET / State CETs", description: "Teaching degree. Required for govt school teacher jobs (TGT/PGT).", colleges: BED_COLLEGES, govtCount: 5, privateCount: 3, feeSummary: { govtMin: "₹5,000/year (MP Govt)", govtMax: "₹22,000/year (DU CIE)", privateMin: "₹70,000/year", privateMax: "₹1.2 Lakh/year", govtTotal: "₹10,000–44,000", privateTotal: "₹1.4 Lakh–2.4 Lakh" } }
};

// ══════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════

function getCourseData(courseKey) { return ALL_COURSES_DATA[courseKey] || null; }
function getAllCollegesForCourse(courseKey) { const c = ALL_COURSES_DATA[courseKey]; return c ? c.colleges : []; }
function getGovtColleges(courseKey) { return getAllCollegesForCourse(courseKey).filter(c => c.type === "Government" || c.type === "Government Aided"); }
function getPrivateColleges(courseKey) { return getAllCollegesForCourse(courseKey).filter(c => c.type === "Private" || c.type === "Deemed"); }
function getCollegesByState(courseKey, state) { return getAllCollegesForCourse(courseKey).filter(c => c.state.toLowerCase().includes(state.toLowerCase())); }
function getMPCollegesForCourse(courseKey) { return getCollegesByState(courseKey, "Madhya Pradesh"); }
function getTopCollegesByNIRF(courseKey, n = 5) { return getAllCollegesForCourse(courseKey).filter(c => c.nirf !== null).sort((a, b) => a.nirf - b.nirf).slice(0, n); }
function searchAllCourses(query) {
  const q = query.toLowerCase();
  const results = [];
  Object.keys(ALL_COURSES_DATA).forEach(key => {
    const matches = ALL_COURSES_DATA[key].colleges.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.location.toLowerCase().includes(q) ||
      (c.highlight && c.highlight.toLowerCase().includes(q))
    );
    results.push(...matches);
  });
  return results;
}
function getFeeSummary(courseKey) { const c = ALL_COURSES_DATA[courseKey]; return c ? c.feeSummary : null; }

// ══════════════════════════════════════════
// BACKWARD COMPATIBILITY — Flat Array
// Used by college-detail.html via collegesData.find(c => c.id === id)
// ══════════════════════════════════════════

const collegesData = Object.values(ALL_COURSES_DATA).flatMap(course => course.colleges);

const TOTAL_COLLEGE_COUNT = collegesData.length;

console.log(`✅ StreamSmart All-Courses Database loaded.`);
console.log(`📊 Total colleges: ${TOTAL_COLLEGE_COUNT}`);
console.log(`📚 Courses: ${Object.keys(ALL_COURSES_DATA).join(', ')}`);
