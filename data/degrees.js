const degreesData = [
    // SCIENCE STREAM
    {
        id: "bsc-maths",
        name: "B.Sc. Mathematics",
        stream: "science",
        duration: "3 Years",
        careers: ["Data Analyst", "Teacher", "Statistician"],
        salary: "₹15,000–25,000",
        description: "Focuses on advanced mathematical theories and their applications."
    },
    {
        id: "bsc-physics",
        name: "B.Sc. Physics",
        stream: "science",
        duration: "3 Years",
        careers: ["Researcher", "Lab Technician", "Teacher"],
        salary: "₹14,000–22,000",
        description: "Study of matter, energy, and the fundamental laws of nature."
    },
    {
        id: "bsc-chemistry",
        name: "B.Sc. Chemistry",
        stream: "science",
        duration: "3 Years",
        careers: ["Lab Analyst", "Pharmacist", "Teacher"],
        salary: "₹14,000–22,000",
        description: "Exploration of substances, their properties, and reactions."
    },
    {
        id: "bsc-biology",
        name: "B.Sc. Biology",
        stream: "science",
        duration: "3 Years",
        careers: ["Lab Technician", "Researcher", "Teacher"],
        salary: "₹13,000–20,000",
        description: "Comprehensive study of living organisms and life processes."
    },
    {
        id: "bsc-cs",
        name: "B.Sc. Computer Science",
        stream: "science",
        duration: "3 Years",
        careers: ["Software Developer", "IT Support", "Web Developer"],
        salary: "₹18,000–35,000",
        description: "Study of computer systems, programming, and software engineering."
    },
    {
        id: "bsc-biotech",
        name: "B.Sc. Biotechnology",
        stream: "science",
        duration: "3 Years",
        careers: ["Biotech Researcher", "Lab Analyst", "Quality Control"],
        salary: "₹15,000–25,000",
        description: "Application of biological systems to technical and industrial processes."
    },
    {
        id: "btech",
        name: "B.Tech (Engineering)",
        stream: "science",
        duration: "4 Years",
        careers: ["Engineer", "Developer", "Project Manager"],
        salary: "₹20,000–40,000",
        description: "Professional degree in various engineering disciplines like CSE, Mechanical, Civil."
    },
    {
        id: "mbbs",
        name: "MBBS",
        stream: "science",
        duration: "5.5 Years",
        careers: ["Doctor", "Surgeon", "Medical Officer"],
        salary: "₹35,000–80,000",
        description: "Primary medical degree required to become a registered medical practitioner."
    },
    {
        id: "bpharma",
        name: "B.Pharma",
        stream: "science",
        duration: "4 Years",
        careers: ["Pharmacist", "Drug Inspector", "Medical Rep"],
        salary: "₹18,000–30,000",
        description: "Focuses on pharmaceutical science, drug discovery, and manufacturing."
    },
    {
        id: "bsc-agri",
        name: "B.Sc. Agriculture",
        stream: "science",
        duration: "4 Years",
        careers: ["Agriculture Officer", "Researcher", "Farm Manager"],
        salary: "₹15,000–25,000",
        description: "Study of agricultural sciences and efficient farming practices."
    },

    // COMMERCE STREAM
    {
        id: "bcom",
        name: "B.Com",
        stream: "commerce",
        duration: "3 Years",
        careers: ["Accountant", "Auditor", "Finance Analyst"],
        salary: "₹15,000–28,000",
        description: "Foundational degree in commerce, accounting, and business laws."
    },
    {
        id: "bba",
        name: "BBA",
        stream: "commerce",
        duration: "3 Years",
        careers: ["Business Manager", "HR Executive", "Marketing Manager"],
        salary: "₹16,000–30,000",
        description: "Bachelor of Business Administration focusing on management skills."
    },
    {
        id: "bcom-hons",
        name: "B.Com (Honours)",
        stream: "commerce",
        duration: "3 Years",
        careers: ["CA", "Senior Accountant", "Tax Consultant"],
        salary: "₹18,000–35,000",
        description: "In-depth specialization in accounting, banking, and finance."
    },
    {
        id: "ca",
        name: "CA (Chartered Accountant)",
        stream: "commerce",
        duration: "4-5 Years",
        careers: ["CA", "Financial Advisor", "Auditor"],
        salary: "₹40,000–1,00,000",
        description: "Professional certification in accounting and financial management."
    },
    {
        id: "cs",
        name: "CS (Company Secretary)",
        stream: "commerce",
        duration: "3 Years",
        careers: ["Company Secretary", "Legal Advisor"],
        salary: "₹25,000–50,000",
        description: "Focuses on corporate laws, governance, and secretarial practices."
    },
    {
        id: "bms",
        name: "BMS",
        stream: "commerce",
        duration: "3 Years",
        careers: ["Brand Manager", "Sales Manager", "Operations"],
        salary: "₹16,000–28,000",
        description: "Bachelor of Management Studies for a career in corporate management."
    },
    {
        id: "bcom-banking",
        name: "B.Com Banking",
        stream: "commerce",
        duration: "3 Years",
        careers: ["Bank PO", "Finance Officer", "Loan Manager"],
        salary: "₹18,000–35,000",
        description: "Specialized commerce degree for the banking and insurance sectors."
    },
    {
        id: "bba-finance",
        name: "BBA Finance",
        stream: "commerce",
        duration: "3 Years",
        careers: ["Financial Analyst", "Investment Banker"],
        salary: "₹20,000–40,000",
        description: "BBA with a major focus on financial markets and investment."
    },
    {
        id: "becon",
        name: "B.Eco (Economics)",
        stream: "commerce",
        duration: "3 Years",
        careers: ["Economist", "Policy Analyst", "Teacher"],
        salary: "₹15,000–25,000",
        description: "Study of production, consumption, and transfer of wealth."
    },
    {
        id: "bcom-taxation",
        name: "B.Com Taxation",
        stream: "commerce",
        duration: "3 Years",
        careers: ["Tax Consultant", "GST Analyst"],
        salary: "₹16,000–28,000",
        description: "Specialized study of direct and indirect taxation laws."
    },

    // ARTS STREAM
    {
        id: "ba-history",
        name: "B.A. History",
        stream: "arts",
        duration: "3 Years",
        careers: ["IAS Officer", "Teacher", "Researcher"],
        salary: "₹14,000–25,000",
        description: "Study of past events, societies, and civilizations."
    },
    {
        id: "ba-polscience",
        name: "B.A. Political Science",
        stream: "arts",
        duration: "3 Years",
        careers: ["Politician", "IAS", "Journalist"],
        salary: "₹14,000–25,000",
        description: "Exploration of political theories, governance, and international relations."
    },
    {
        id: "ba-soc",
        name: "B.A. Sociology",
        stream: "arts",
        duration: "3 Years",
        careers: ["Social Worker", "NGO Manager", "Researcher"],
        salary: "₹13,000–22,000",
        description: "Study of social behavior, culture, and societal structures."
    },
    {
        id: "ba-english",
        name: "B.A. English",
        stream: "arts",
        duration: "3 Years",
        careers: ["Writer", "Editor", "Content Creator", "Teacher"],
        salary: "₹14,000–25,000",
        description: "Focuses on English literature, linguistics, and creative writing."
    },
    {
        id: "ba-geo",
        name: "B.A. Geography",
        stream: "arts",
        duration: "3 Years",
        careers: ["GIS Analyst", "Town Planner", "Teacher"],
        salary: "₹13,000–22,000",
        description: "Study of Earth's lands, features, and inhabitants."
    },
    {
        id: "ba-psych",
        name: "B.A. Psychology",
        stream: "arts",
        duration: "3 Years",
        careers: ["Counselor", "HR Executive", "Therapist"],
        salary: "₹15,000–28,000",
        description: "Study of the human mind and behavior."
    },
    {
        id: "llb",
        name: "LLB (Law)",
        stream: "arts",
        duration: "3 Years (Post Grad)",
        careers: ["Lawyer", "Judge", "Legal Advisor"],
        salary: "₹20,000–60,000",
        description: "Professional degree in law and judicial systems."
    },
    {
        id: "bed",
        name: "B.Ed",
        stream: "arts",
        duration: "2 Years",
        careers: ["Teacher", "Principal", "Education Officer"],
        salary: "₹18,000–35,000",
        description: "Professional degree for becoming a teacher in schools."
    },
    {
        id: "bjmc",
        name: "B.Journalism (Mass Comm)",
        stream: "arts",
        duration: "3 Years",
        careers: ["Journalist", "Anchor", "Content Creator"],
        salary: "₹15,000–30,000",
        description: "Study of mass media, journalism, and communication."
    },
    {
        id: "bfa",
        name: "B.F.A. (Fine Arts)",
        stream: "arts",
        duration: "4 Years",
        careers: ["Artist", "Graphic Designer", "Art Teacher"],
        salary: "₹14,000–25,000",
        description: "Focuses on visual or performing arts like painting, sculpture, dance."
    },
    {
        id: "bsw",
        name: "B.S.W. (Social Work)",
        stream: "arts",
        duration: "3 Years",
        careers: ["NGO Worker", "Welfare Officer"],
        salary: "₹13,000–20,000",
        description: "Training in social welfare, community development, and advocacy."
    },
    {
        id: "ba-eco",
        name: "B.A. Economics",
        stream: "arts",
        duration: "3 Years",
        careers: ["Economist", "Banker", "Teacher"],
        salary: "₹14,000–25,000",
        description: "Study of economic theories and quantitative analysis of wealth."
    }
];
