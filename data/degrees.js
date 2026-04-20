const degreesData = [
  {
    id: 'btech-cse',
    name: 'B.Tech in Computer Science',
    stream: 'science',
    careers: ['Software Engineer', 'Data Scientist', 'AI Researcher'],
    duration: '4 Years',
    salary: '₹6-12 LPA',
    description: 'A technology-focused degree for students who love coding, algorithms and building software systems. Opens doors to top tech companies and startups.'
  },
  {
    id: 'btech-ece',
    name: 'B.Tech in Electronics & Communication',
    stream: 'science',
    careers: ['Embedded Systems Engineer', 'Telecom Engineer', 'IoT Developer'],
    duration: '4 Years',
    salary: '₹5-10 LPA',
    description: 'A strong choice for students interested in electronics, communication systems and hardware-software integration.'
  },
  {
    id: 'btech-mechanical',
    name: 'B.Tech in Mechanical Engineering',
    stream: 'science',
    careers: ['Design Engineer', 'Automotive Engineer', 'Manufacturing Specialist'],
    duration: '4 Years',
    salary: '₹4-9 LPA',
    description: 'A versatile engineering degree focused on machines, manufacturing and industrial design.'
  },
  {
    id: 'btech-civil',
    name: 'B.Tech in Civil Engineering',
    stream: 'science',
    careers: ['Structural Engineer', 'Site Engineer', 'Urban Planner'],
    duration: '4 Years',
    salary: '₹4-8 LPA',
    description: 'A practical degree for students who want to build infrastructure, roads, bridges and sustainable cities.'
  },
  {
    id: 'bsc-cs',
    name: 'B.Sc in Computer Science',
    stream: 'science',
    careers: ['Web Developer', 'Data Analyst', 'Research Assistant'],
    duration: '3 Years',
    salary: '₹4-8 LPA',
    description: 'A strong foundation in computing, programming and mathematics, ideal for students looking for a shorter undergraduate path into tech.'
  },
  {
    id: 'bsc-data-science',
    name: 'B.Sc in Data Science',
    stream: 'science',
    careers: ['Data Scientist', 'Business Intelligence Analyst', 'ML Engineer'],
    duration: '3 Years',
    salary: '₹5-11 LPA',
    description: 'A modern degree focused on statistics, machine learning and data-driven business decisions.'
  },
  {
    id: 'mbbs',
    name: 'MBBS',
    stream: 'science',
    careers: ['Doctor', 'Medical Researcher', 'Surgeon'],
    duration: '5.5 Years',
    salary: '₹7-14 LPA',
    description: 'The premier medical degree for students interested in healthcare, patient care and clinical research. Requires NEET preparation.'
  },
  {
    id: 'bds',
    name: 'BDS',
    stream: 'science',
    careers: ['Dentist', 'Oral Surgeon', 'Dental Researcher'],
    duration: '5 Years',
    salary: '₹4-9 LPA',
    description: 'A dental science degree for students interested in oral health, dentistry and surgical care.'
  },
  {
    id: 'bpharm',
    name: 'B.Pharm',
    stream: 'science',
    careers: ['Pharmacist', 'Quality Analyst', 'Regulatory Affairs Specialist'],
    duration: '4 Years',
    salary: '₹4-8 LPA',
    description: 'A degree that combines chemistry, biology and healthcare with careers in the pharmaceutical industry.'
  },
  {
    id: 'bsc-nursing',
    name: 'B.Sc in Nursing',
    stream: 'science',
    careers: ['Nurse', 'Medical Coordinator', 'Healthcare Manager'],
    duration: '4 Years',
    salary: '₹3-7 LPA',
    description: 'A healthcare degree that prepares students for nursing, patient care and public health roles.'
  },
  {
    id: 'bsc-physics',
    name: 'B.Sc in Physics',
    stream: 'science',
    careers: ['Research Scientist', 'Lab Technician', 'Data Analyst'],
    duration: '3 Years',
    salary: '₹3-7 LPA',
    description: 'A science degree for students fascinated by the laws of nature, optics, electronics and quantum systems.'
  },
  {
    id: 'btech-biotech',
    name: 'B.Tech in Biotechnology',
    stream: 'science',
    careers: ['Biotech Engineer', 'Genomics Analyst', 'Quality Control Specialist'],
    duration: '4 Years',
    salary: '₹5-10 LPA',
    description: 'An interdisciplinary degree combining biology with engineering, ideal for students interested in biotech and healthcare innovation.'
  },
  {
    id: 'bcom',
    name: 'B.Com in Accounting',
    stream: 'commerce',
    careers: ['Chartered Accountant', 'Financial Analyst', 'Business Analyst'],
    duration: '3 Years',
    salary: '₹4-8 LPA',
    description: 'A commerce degree focused on accounting, taxation and finance. Great for careers in accounting firms, banking and corporate finance.'
  },
  {
    id: 'bcom-hons',
    name: 'B.Com (Hons)',
    stream: 'commerce',
    careers: ['Investment Analyst', 'Tax Consultant', 'Finance Executive'],
    duration: '3 Years',
    salary: '₹5-9 LPA',
    description: 'A specialized commerce degree with deeper study in finance, accounting and business strategy.'
  },
  {
    id: 'bba',
    name: 'BBA in Business Management',
    stream: 'commerce',
    careers: ['Business Analyst', 'Operations Manager', 'Marketing Executive'],
    duration: '3 Years',
    salary: '₹4-9 LPA',
    description: 'A practical management degree for students who want to lead teams, manage operations and enter business roles early in their career.'
  },
  {
    id: 'bba-ib',
    name: 'BBA in International Business',
    stream: 'commerce',
    careers: ['Export Manager', 'International Marketer', 'Trade Analyst'],
    duration: '3 Years',
    salary: '₹4-8 LPA',
    description: 'A global business degree for careers in exports, international sales and cross-border trade.'
  },
  {
    id: 'bms',
    name: 'BMS in Management Studies',
    stream: 'commerce',
    careers: ['Operations Executive', 'HR Coordinator', 'Business Consultant'],
    duration: '3 Years',
    salary: '₹4-8 LPA',
    description: 'A management degree designed for students interested in business operations, HR and corporate strategy.'
  },
  {
    id: 'bfm',
    name: 'B.F.M in Financial Markets',
    stream: 'commerce',
    careers: ['Stock Analyst', 'Risk Manager', 'Portfolio Executive'],
    duration: '3 Years',
    salary: '₹5-10 LPA',
    description: 'A career-focused degree for students who want to work in stock markets, investment banking and financial services.'
  },
  {
    id: 'bcom-finance',
    name: 'B.Com in Finance',
    stream: 'commerce',
    careers: ['Financial Planner', 'Corporate Accountant', 'Banking Executive'],
    duration: '3 Years',
    salary: '₹4-8 LPA',
    description: 'A commerce specialization centered on finance, banking, investments and corporate money management.'
  },
  {
    id: 'bcom-taxation',
    name: 'B.Com in Taxation',
    stream: 'commerce',
    careers: ['Tax Consultant', 'Audit Associate', 'Compliance Officer'],
    duration: '3 Years',
    salary: '₹4-9 LPA',
    description: 'A degree for students who want to build expertise in tax laws, auditing and financial compliance.'
  },
  {
    id: 'bba-hr',
    name: 'BBA in Human Resources',
    stream: 'commerce',
    careers: ['HR Executive', 'Recruitment Specialist', 'Training Manager'],
    duration: '3 Years',
    salary: '₹4-8 LPA',
    description: 'A business degree for students interested in people management, talent acquisition and organizational culture.'
  },
  {
    id: 'bba-marketing',
    name: 'BBA in Marketing',
    stream: 'commerce',
    careers: ['Marketing Manager', 'Brand Executive', 'Digital Marketer'],
    duration: '3 Years',
    salary: '₹4-9 LPA',
    description: 'A degree focused on marketing strategy, advertising, brand building and digital campaigns.'
  },
  {
    id: 'ba-psychology',
    name: 'BA in Psychology',
    stream: 'arts',
    careers: ['Counselor', 'HR Specialist', 'Research Associate'],
    duration: '3 Years',
    salary: '₹3-7 LPA',
    description: 'A humanities degree for students interested in human behaviour, mental health, counselling and organizational psychology.'
  },
  {
    id: 'ba-design',
    name: 'B.Des in Graphic Design',
    stream: 'arts',
    careers: ['UI/UX Designer', 'Graphic Designer', 'Visual Artist'],
    duration: '4 Years',
    salary: '₹4-9 LPA',
    description: 'A creative degree for learners who enjoy visual storytelling, branding, digital media and user experience design.'
  },
  {
    id: 'ba-llb',
    name: 'BA LLB',
    stream: 'arts',
    careers: ['Lawyer', 'Legal Consultant', 'Judge'],
    duration: '5 Years',
    salary: '₹5-11 LPA',
    description: 'An integrated law degree for students interested in the legal system, advocacy, justice and corporate law.'
  },
  {
    id: 'ba-journalism',
    name: 'BA in Journalism',
    stream: 'arts',
    careers: ['Reporter', 'Content Writer', 'News Editor'],
    duration: '3 Years',
    salary: '₹3-7 LPA',
    description: 'A media degree for students who want to cover news, create stories and work in digital or print journalism.'
  },
  {
    id: 'ba-english',
    name: 'BA in English Literature',
    stream: 'arts',
    careers: ['Writer', 'Editor', 'Teacher'],
    duration: '3 Years',
    salary: '₹3-7 LPA',
    description: 'A classic arts degree for students who love literature, writing, communication and cultural studies.'
  },
  {
    id: 'ba-history',
    name: 'BA in History',
    stream: 'arts',
    careers: ['Archivist', 'Researcher', 'Museum Curator'],
    duration: '3 Years',
    salary: '₹3-7 LPA',
    description: 'A humanities degree for students interested in historical research, heritage and social studies.'
  },
  {
    id: 'bfa-fashion',
    name: 'BFA in Fashion Design',
    stream: 'arts',
    careers: ['Fashion Designer', 'Stylist', 'Visual Merchandiser'],
    duration: '4 Years',
    salary: '₹4-9 LPA',
    description: 'A design degree for creative students who want to build careers in fashion, apparel and styling.'
  },
  {
    id: 'ba-social-work',
    name: 'BA in Social Work',
    stream: 'arts',
    careers: ['Social Worker', 'NGO Manager', 'Community Activist'],
    duration: '3 Years',
    salary: '₹3-6 LPA',
    description: 'A service-oriented degree for students passionate about social justice, community development and welfare work.'
  },
  {
    id: 'ba-mass-communication',
    name: 'BA in Mass Communication',
    stream: 'arts',
    careers: ['Media Planner', 'PR Executive', 'Broadcast Journalist'],
    duration: '3 Years',
    salary: '₹4-8 LPA',
    description: 'A media degree for students interested in advertising, PR, broadcast media and digital communications.'
  },
  {
    id: 'barch',
    name: 'B.Arch',
    stream: 'arts',
    careers: ['Architect', 'Urban Planner', 'Interior Designer'],
    duration: '5 Years',
    salary: '₹5-10 LPA',
    description: 'A professional architecture degree for students who want to design buildings, cities and built environments.'
  }
];
