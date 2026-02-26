/**
 * StreamSmart: Complete Colleges Database
 * Real Data: Fees, Rankings, Entrance Exams, and Placements
 */

const COLLEGES_DATA = [
    // --- B.TECH / ENGINEERING ---
    {
        id: "iit-delhi",
        name: "Indian Institute of Technology (IIT) Delhi",
        location: "New Delhi",
        state: "Delhi",
        type: "Government",
        nirf: 2,
        fees_annual: 220000,
        fees_total: 880000,
        entrance: "JEE Advanced",
        duration: "4 Years",
        package: "20.5 LPA",
        naac: "A++",
        highlight: "🏆 #2 NIRF Engineering Rank",
        course: "B.Tech",
        isIIT: true,
        isGovernment: true,
        extra: {
            branches: ["Computer Science", "Electrical", "Mechanical", "Civil"],
            scholarships: ["Merit-cum-Means (MCM)", "SC/ST Full Waiver"],
            companies: ["Google", "Microsoft", "Amazon", "Uber"],
            website: "https://home.iitd.ac.in",
            breakdown: { tuition: 200000, hostel: 12000, other: 8000 }
        }
    },
    {
        id: "iit-bombay",
        name: "Indian Institute of Technology (IIT) Bombay",
        location: "Mumbai",
        state: "Maharashtra",
        type: "Government",
        nirf: 3,
        fees_annual: 210000,
        fees_total: 840000,
        entrance: "JEE Advanced",
        duration: "4 Years",
        package: "22.7 LPA",
        naac: "A++",
        highlight: "🌟 Best for Entrepreneurship & Tech",
        course: "B.Tech",
        isIIT: true,
        isGovernment: true,
        extra: {
            branches: ["CS", "Electrical", "Aerospace", "Chemical"],
            scholarships: ["IITB Heritage Fund", "Fee Waiver for EWS"],
            companies: ["Apple", "Qualcomm", "Meta", "TSMC"],
            website: "https://www.iitb.ac.in",
            breakdown: { tuition: 195000, hostel: 10000, other: 5000 }
        }
    },
    {
        id: "manit-bhopal",
        name: "Maulana Azad National Institute of Technology (MANIT)",
        location: "Bhopal",
        state: "Madhya Pradesh",
        type: "Government",
        nirf: 80,
        fees_annual: 145000,
        fees_total: 580000,
        entrance: "JEE Main",
        duration: "4 Years",
        package: "11.5 LPA",
        naac: "A",
        highlight: "📍 Top NIT in Central India",
        course: "B.Tech",
        isNIT: true,
        isGovernment: true,
        isMP: true,
        extra: {
            branches: ["CSE", "ECE", "Architecture", "Civil"],
            scholarships: ["Post-Matric MP", "Medhavi Chhatra Yojana"],
            companies: ["TCS", "Infosys", "L&T", "Reliance"],
            website: "https://www.manit.ac.in",
            breakdown: { tuition: 125000, hostel: 15000, other: 5000 }
        }
    },
    {
        id: "bits-pilani",
        name: "Birla Institute of Technology & Science (BITS)",
        location: "Pilani",
        state: "Rajasthan",
        type: "Private",
        nirf: 25,
        fees_annual: 520000,
        fees_total: 2150000,
        entrance: "BITSAT",
        duration: "4 Years",
        package: "18.2 LPA",
        naac: "A",
        highlight: "💎 Best Private Engineering College",
        course: "B.Tech",
        isGovernment: false,
        extra: {
            branches: ["Computer Science", "Electronics", "Manufacturing"],
            scholarships: ["Merit Scholarship (80% waiver)", "MCN Scholarship"],
            companies: ["Cisco", "Oracle", "Nvidia", "JPMC"],
            website: "https://www.bits-pilani.ac.in",
            breakdown: { tuition: 480000, hostel: 30000, other: 10000 }
        }
    },
    {
        id: "vit-vellore",
        name: "Vellore Institute of Technology (VIT)",
        location: "Vellore",
        state: "Tamil Nadu",
        type: "Private",
        nirf: 11,
        fees_annual: 198000,
        fees_total: 792000,
        entrance: "VITEEE",
        duration: "4 Years",
        package: "9.0 LPA",
        naac: "A++",
        highlight: "🚀 High Placement Volume",
        course: "B.Tech",
        isGovernment: false,
        extra: {
            branches: ["CSE", "IT", "Bio-Tech", "Automobile"],
            scholarships: ["GV School Development", "VIT STARS (Rural)"],
            companies: ["Cognizant", "Wipro", "Accenture", "Dell"],
            website: "https://vit.ac.in",
            breakdown: { tuition: 175000, hostel: 18000, other: 5000 }
        }
    },

    // --- MBBS / MEDICAL ---
    {
        id: "aiims-delhi",
        name: "All India Institute of Medical Sciences (AIIMS)",
        location: "New Delhi",
        state: "Delhi",
        type: "Government",
        nirf: 1,
        fees_annual: 1628,
        fees_total: 8140,
        entrance: "NEET UG",
        duration: "5.5 Years",
        package: "15-25 LPA",
        naac: "A++",
        highlight: "🩺 #1 Medical College in India",
        course: "MBBS",
        isGovernment: true,
        extra: {
            branches: ["Medicine", "Surgery", "Pediatrics"],
            scholarships: ["AIIMS Merit", "Govt of India Scholarship"],
            companies: ["Apollo Hospitals", "Fortis", "AIIMS Residency"],
            website: "https://www.aiims.edu",
            breakdown: { tuition: 1000, hostel: 400, other: 228 }
        }
    },
    {
        id: "aiims-bhopal",
        name: "AIIMS Bhopal",
        location: "Bhopal",
        state: "Madhya Pradesh",
        type: "Government",
        nirf: 25,
        fees_annual: 1800,
        fees_total: 9000,
        entrance: "NEET UG",
        duration: "5.5 Years",
        package: "12-18 LPA",
        naac: "A",
        highlight: "📍 Best Medical College in MP",
        course: "MBBS",
        isGovernment: true,
        isMP: true,
        extra: {
            branches: ["General Medicine", "Radiology", "ENT"],
            scholarships: ["MP State Post-Matric", "Medhavi Chhatra"],
            companies: ["Govt Hospitals", "Max Healthcare"],
            website: "https://www.aiimsbhopal.edu.in",
            breakdown: { tuition: 1200, hostel: 400, other: 200 }
        }
    },

    // --- B.SC COMPUTER SCIENCE ---
    {
        id: "holkar-indore",
        name: "Govt. Holkar Science College",
        location: "Indore",
        state: "Madhya Pradesh",
        type: "Government",
        nirf: 150,
        fees_annual: 12000,
        fees_total: 36000,
        entrance: "B.Sc Merit/Entrance",
        duration: "3 Years",
        package: "4.5 LPA",
        naac: "A",
        highlight: "📍 Best Science College in Indore",
        course: "B.Sc CS",
        isGovernment: true,
        isMP: true,
        extra: {
            branches: ["Computer Science", "Physics", "Chemistry"],
            scholarships: ["Gaon Ki Beti Yojana", "Pratibha Kiran"],
            companies: ["TCS", "Wipro", "Capgemini"],
            website: "https://collegeholkar.org",
            breakdown: { tuition: 10000, hostel: 1500, other: 500 }
        }
    },
    {
        id: "st-stephens",
        name: "St. Stephen's College",
        location: "New Delhi",
        state: "Delhi",
        type: "Government",
        nirf: 4,
        fees_annual: 45000,
        fees_total: 135000,
        entrance: "CUET UG",
        duration: "3 Years",
        package: "9.5 LPA",
        naac: "A++",
        highlight: "🎓 Top Arts/Science College",
        course: "B.Sc CS",
        isGovernment: true,
        extra: {
            branches: ["Mathematics", "Physics", "Philosophy"],
            scholarships: ["DU Merit Scholarship", "Post-Matric Delhi"],
            companies: ["McKinsey", "BCG", "Bain"],
            website: "https://ststephens.edu",
            breakdown: { tuition: 40000, hostel: 3000, other: 2000 }
        }
    },

    // --- B.COM / BBA ---
    {
        id: "srcc-delhi",
        name: "Shri Ram College of Commerce (SRCC)",
        location: "New Delhi",
        state: "Delhi",
        type: "Government",
        nirf: 1,
        fees_annual: 30000,
        fees_total: 90000,
        entrance: "CUET UG",
        duration: "3 Years",
        package: "10.1 LPA",
        naac: "A++",
        highlight: "💰 #1 for Commerce in India",
        course: "B.Com",
        isGovernment: true,
        extra: {
            branches: ["Honours in Commerce", "Economics Honours"],
            scholarships: ["MHRD Scholarship", "Suman Tyagi Scholarship"],
            companies: ["Deloitte", "EY", "KPMG", "PWC"],
            website: "https://www.srcc.edu",
            breakdown: { tuition: 25000, hostel: 4000, other: 1000 }
        }
    },
    {
        id: "christ-university",
        name: "Christ University",
        location: "Bangalore",
        state: "Karnataka",
        type: "Private",
        nirf: 60,
        fees_annual: 210000,
        fees_total: 630000,
        entrance: "Christ Entrance",
        duration: "3 Years",
        package: "6.5 LPA",
        naac: "A+",
        highlight: "🏢 Top Private Management College",
        course: "BBA",
        isGovernment: false,
        extra: {
            branches: ["Finance", "Marketing", "HR", "Business Analytics"],
            scholarships: ["Merit Scholarship", "Financial Assistance"],
            companies: ["HSBC", "HDFC Bank", "Asian Paints"],
            website: "https://christuniversity.in",
            breakdown: { tuition: 190000, hostel: 15000, other: 5000 }
        }
    },

    // --- LAW ---
    {
        id: "nlsiu-bangalore",
        name: "National Law School of India University (NLSIU)",
        location: "Bangalore",
        state: "Karnataka",
        type: "Government",
        nirf: 1,
        fees_annual: 325000,
        fees_total: 1625000,
        entrance: "CLAT",
        duration: "5 Years",
        package: "15.5 LPA",
        naac: "A++",
        highlight: "⚖️ #1 Law School in India",
        course: "Law",
        isGovernment: true,
        extra: {
            branches: ["BA LLB (Hons)", "Public Policy"],
            scholarships: ["Aditya Birla scholarship", "Narendra Gupta"],
            companies: ["Amarchand Mangaldas", "AZB Partners", "Trilegal"],
            website: "https://www.nls.ac.in",
            breakdown: { tuition: 280000, hostel: 35000, other: 10000 }
        }
    },
    {
        id: "nliu-bhopal",
        name: "National Law Institute University (NLIU)",
        location: "Bhopal",
        state: "Madhya Pradesh",
        type: "Government",
        nirf: 15,
        fees_annual: 245000,
        fees_total: 1225000,
        entrance: "CLAT",
        duration: "5 Years",
        package: "12.0 LPA",
        naac: "A",
        highlight: "📍 Premier Law College in MP",
        course: "Law",
        isGovernment: true,
        isMP: true,
        extra: {
            branches: ["BA LLB (Hons)", "Cyber Law"],
            scholarships: ["MP Post-Matric", "Medhavi Chhatra"],
            companies: ["Luthra & Luthra", "Khaitan & Co"],
            website: "https://www.nliu.ac.in",
            breakdown: { tuition: 210000, hostel: 30000, other: 5000 }
        }
    },

    // --- ARTS / B.ED ---
    {
        id: "lsr-delhi",
        name: "Lady Shri Ram College for Women (LSR)",
        location: "New Delhi",
        state: "Delhi",
        type: "Government",
        nirf: 5,
        fees_annual: 18000,
        fees_total: 54000,
        entrance: "CUET UG",
        duration: "3 Years",
        package: "10.0 LPA",
        naac: "A++",
        highlight: "🎨 Top Arts College for Women",
        course: "B.A.",
        isGovernment: true,
        extra: {
            branches: ["English", "Psychology", "Statistics"],
            scholarships: ["K.L. Punj", "LSR Alumni Scholarship"],
            companies: ["Google", "BCG", "United Nations"],
            website: "https://lsr.edu.in",
            breakdown: { tuition: 15000, hostel: 2000, other: 1000 }
        }
    },
    {
        id: "bhu-varanasi",
        name: "Banaras Hindu University (BHU)",
        location: "Varanasi",
        state: "Uttar Pradesh",
        type: "Government",
        nirf: 6,
        fees_annual: 8000,
        fees_total: 24000,
        entrance: "CUET UG",
        duration: "3 Years",
        package: "6.5 LPA",
        naac: "A",
        highlight: "🏛️ One of India's Oldest Universities",
        course: "B.A.",
        isGovernment: true,
        extra: {
            branches: ["Social Sciences", "Performing Arts", "B.Ed"],
            scholarships: ["Internal BHU Scholarship", "UP Govt Scholarship"],
            companies: ["Teaching", "Research", "Civil Services"],
            website: "https://www.bhu.ac.in",
            breakdown: { tuition: 6000, hostel: 1500, other: 500 }
        }
    }
];
