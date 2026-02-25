/**
 * STREAMSMART: MARG CHATBOT KNOWLEDGE BASE
 * Complete knowledge base with 25 intents, 8-15 keywords each, and detailed Indian-centric responses.
 */

const CHATBOT_INTENTS = [
    {
        name: "greeting",
        keywords: ["hi", "hello", "hey", "namaste", "hii", "helo", "good morning", "good afternoon", "who are you", "what are you", "sup", "start", "help", "greet", "namaskar"],
        responses: [
            "Namaste! 🙏 I'm Marg — your personal career guide on StreamSmart. \n\nI am here to help you navigate the complex world of Indian education. I can help you with:\n✅ Choosing the right Stream (Science, Commerce, Arts)\n✅ Finding the best Degree programs\n✅ Planning a Career path and checking Salaries\n✅ Finding Government Colleges with low fees\n✅ Tracking Entrance Exams (JEE, NEET, CUET, etc.)\n✅ Finding Scholarships (NSP, State portals)\n\nWhat would you like to know today? 😊"
        ],
        quickReplies: ["Which stream should I choose?", "What degrees are available?", "Tell me about government colleges", "Show me entrance exams"]
    },
    {
        name: "stream_general",
        keywords: ["stream", "which stream", "help me choose", "confused stream", "stream selection", "stream after 10th", "pcm pcb", "science commerce arts", "what stream", "choose stream", "stream suggest", "stream advice"],
        responses: [
            "Choosing a stream after Class 10 is your first big life decision! 🚀 Here is a quick look at your options:\n\n🔬 **SCIENCE**: For those who love logic, math, and experiments. Subjects: Physics, Chemistry, Maths (PCM) or Bio (PCB). Leads to: Engineering, Medicine, IT, Research.\n\n💰 **COMMERCE**: For people interested in business, money, and economics. Subjects: Accounts, Business Studies, Economics. Leads to: CA, Banking, Management, Entrepreneurship.\n\n🎨 **ARTS**: For the thinkers, creators, and social leaders. Subjects: History, PolSci, Geography, Psychology. Leads to: IAS, Law, Design, Journalism.\n\n✨ **Golden Rule**: Choose based on your INTEREST, not what your friends or relatives say. You can also take our 5-minute Career Quiz for a personalized recommendation!"
        ],
        quickReplies: ["Tell me more about Science", "Tell me more about Commerce", "Tell me more about Arts", "Take the career quiz"]
    },
    {
        name: "science_stream",
        keywords: ["science stream", "science", "pcm", "pcb", "physics", "chemistry", "maths stream", "bio stream", "biology stream", "engineering stream", "medical stream", "neet stream", "jee stream", "science career", "scientist"],
        responses: [
            "🔬 **SCIENCE STREAM** is for students who want to explore how the world works. \n\n**Common Subjects:** \n• PCM: Physics, Chemistry, Mathematics (For Engineering/Tech)\n• PCB: Physics, Chemistry, Biology (For Medical/Pharma)\n\n**Popular Degree Options:** \n• B.Tech (Engineering), B.Sc Computer Science, MBBS (Medicine), B.Pharma, B.Sc Data Science.\n\n**Career Salaries (Monthly):**\n👨‍💻 Software Developer: ₹20,000–40,000 (starting)\n👨‍⚕️ Doctor: ₹40,000–1,50,000\n👷 Engineer: ₹20,000–60,000\n🧪 Researcher: ₹25,000–80,000\n\n**Top Entrance Exams:** JEE Main, JEE Advanced, NEET, CUET, NDA.\n\nI recommend Science ONLY if you genuinely enjoy problem-solving and analytics! 🧪"
        ],
        quickReplies: ["Tell me about JEE exam", "Tell me about NEET exam", "What degrees in Science?", "Science government jobs"]
    },
    {
        name: "commerce_stream",
        keywords: ["commerce stream", "commerce", "accounts", "accountancy", "business studies", "economics", "ca stream", "bcom", "bba stream", "finance stream", "commerce career", "commerce jobs", "commerce salary", "banking stream"],
        responses: [
            "💰 **COMMERCE STREAM** is the backbone of the economy. It is perfect for students who are good with numbers and business logic.\n\n**Main Subjects:** \n• Accountancy, Business Studies, Economics, and Optional Mathematics.\n\n**Top Degrees:** \n• B.Com (General/Honors), BBA (Management), CA (Professional), CS (Secretarial), B.Stat.\n\n**Career Salaries (Monthly):**\n📊 Chartered Accountant: ₹40,000–1,50,000+\n🏦 Bank PO: ₹28,000–55,000\n📈 MBA Graduate: ₹35,000–1,00,000+\n📁 Accountant: ₹15,000–30,000\n\n**Government Job Scope:** Very high! You can appear for Bank PO, Income Tax Officer (SSC CGL), and UPSC (Indian Economic Service).\n\nIf you love business news and money management, Commerce is for you! 📈"
        ],
        quickReplies: ["What is CA course?", "Commerce government jobs", "BBA vs B.Com difference", "Commerce salary after 5 years"]
    },
    {
        name: "arts_stream",
        keywords: ["arts stream", "arts", "humanities", "history", "geography", "political science", "sociology", "ba stream", "arts career", "arts salary", "arts jobs", "humanities career", "arts scope", "is arts good", "arts worth"],
        responses: [
            "🎨 **ARTS/HUMANITIES STREAM**: Let's bust the myth first — Arts is NOT for weak students. It is for those who want to lead society! \n\n**Subjects:** History, Geography, Political Science, Sociology, Psychology, Economics, Fine Arts.\n\n**Top Degrees:** B.A., LLB (Law), B.Journalism, B.Ed (Teaching), B.Des (Design), B.S.W. (Social Work).\n\n**High-Paying Career Options:**\n🏛️ IAS/IPS Officer: ₹56,100–2,50,000+ (plus perks)\n⚖️ Lawyer: ₹30,000–2,00,000/month\n📰 Journalist: ₹40,000–1,00,000/month\n🎓 Professor: ₹50,000–1,50,000/month\n🎨 UX Designer: ₹25,000–80,000/month\n\n**Top Entrance Exams:** UPSC, CLAT (Law), CUET, NID (Design).\n\nIf you enjoy reading, debating, and social concepts, Arts is a powerhouse! 🏛️"
        ],
        quickReplies: ["How to become IAS officer?", "Is Arts really worth it?", "Arts government jobs", "Law career after Arts"]
    },
    {
        name: "after_10th",
        keywords: ["after 10th", "after class 10", "10th pass", "10 pass", "class 10 complete", "after 10", "10th board", "which stream after 10", "10th result", "what to do after 10", "10th complete"],
        responses: [
            "Congratulations on completing Class 10! 🎊 This is the time to choose your specialization. \n\n**How to choose?**\n✅ Choose **Science** if you love Maths & Science and want to be a Doctor or Engineer.\n✅ Choose **Commerce** if you like business, accounting, and want to work in Finance or Banking.\n✅ Choose **Arts** if you enjoy social studies, literature, and want to be a Lawyer, IAS officer, or Designer.\n\n**Pro Tip:** Your Class 10 marks are just a number. Don't choose Science just because you got 90%, choose it only if you LOVE the subjects. \n\nI recommend taking our **Career Quiz** to see your scientific match! 🎯"
        ],
        quickReplies: ["Take career quiz now", "Tell me about Science stream", "Tell me about Commerce stream", "Tell me about Arts stream"]
    },
    {
        name: "after_12th",
        keywords: ["after 12th", "after class 12", "12th pass", "12 pass", "12th complete", "after 12", "what after 12", "next step after 12", "12th result", "options after 12th", "what to do after 12th"],
        responses: [
            "Class 12 is done! Now the real world begins. 🌍 You have 4 main paths:\n\n1️⃣ **Graduation (Degree)**: 3-4 years. Best for long-term growth and mandatory for government jobs.\n2️⃣ **Professional Courses**: CA, CS, Law (NLU), Design (NID). High focus on specific skills.\n3️⃣ **Competitive Prep**: NEET, JEE, CUET for admission to top universities.\n4️⃣ **Skill Courses**: 6-month ITI or Vocational courses if you need to start working fast.\n\n**IMPORTANT**: A degree at a Government College costs only ₹3,000–15,000/year. Don't skip graduation! \n\nWhich stream are you from? I can give you specific advice! 😊"
        ],
        quickReplies: ["I'm from Science stream", "I'm from Commerce stream", "I'm from Arts stream", "Degree vs skill course"]
    },
    {
        name: "degree_general",
        keywords: ["degree", "graduation", "course", "bachelor", "which degree", "what degree", "degree options", "which course", "best course", "3 year course", "bsc", "bcom", "ba", "btech", "bba", "degree list"],
        responses: [
            "📚 Graduation is the foundation of your career. Here are the most popular degrees in India:\n\n**🔬 Science Paths:**\n• B.Sc CS (3yr) - ₹18k–35k starting salary\n• B.Tech (4yr) - ₹20k–40k starting salary\n• MBBS (5.5yr) - ₹40k–1.5L starting salary\n\n**💰 Commerce Paths:**\n• B.Com (3yr) - ₹15k–28k salary\n• BBA (3yr) - ₹16k–30k salary\n• CA (Level-based) - ₹40k–1.5L starting salary\n\n**🎨 Arts Paths:**\n• B.A. (3yr) - ₹14k–25k salary\n• LLB (3-5yr) - ₹20k–1L starting salary\n• B.Ed (2yr) - ₹22k–55k salary\n\nAll these are available at **Government Colleges** for just ₹3,000–15,000 per year! 🏫"
        ],
        quickReplies: ["Tell me about B.Sc CS", "Tell me about B.Tech", "Tell me about CA", "Tell me about LLB"]
    },
    {
        name: "bsc_cs",
        keywords: ["bsc cs", "bsc computer", "bsc computer science", "computer science degree", "b.sc cs", "bsc it", "computer graduation", "computer science after 12", "it graduation", "bsc it salary"],
        responses: [
            "💻 **B.Sc. Computer Science** is a 3-year degree perfect for the tech world.\n\n**Duration:** 3 years (6 semesters)\n**Stream:** Science (Maths usually preferred)\n**Fees (Govt College):** ₹3,000–10,000/year (vs ₹2L+ in Private)\n\n**What you'll learn:**\n• Year 1: C Programming, Maths, OS Basics\n• Year 2: Data Structures (DSA), DBMS, Web-Tech, Java\n• Year 3: Software Engineering, AI/ML, Networks.\n\n**Starting Salaries:**\n• Software Developer: ₹20k–40k\n• Web Developer: ₹18k–35k\n• Data Analyst: ₹22k–45k\n\n**Rating:** ⭐⭐⭐⭐⭐ for 2025 job market. Strong path to MCA or MBA IT later! 🚀"
        ],
        quickReplies: ["Government colleges for B.Sc CS", "B.Sc CS vs B.Tech", "Salary after 5 years", "MCA after B.Sc CS"]
    },
    {
        name: "btech",
        keywords: ["btech", "b.tech", "engineering degree", "engineering course", "engineering after 12", "jee preparation", "nit iit", "btech salary", "engineering college", "engineering branch", "be btech"],
        responses: [
            "🛠️ **B.Tech (Bachelor of Technology)** is India's most popular engineering degree.\n\n**Duration:** 4 years (8 semesters)\n**Stream:** Science PCM Compulsory\n**Entrance:** JEE Main (for NITs) & JEE Advanced (for IITs).\n\n**Popular Branches:**\n• CSE: Most popular, highest salaries (₹25k–60k start)\n• ECE: Electronics & Communications (₹20k–45k start)\n• Mechanical: Core industry (₹18k–40k start)\n\n**Govt/NIT Fees:** ₹80,000–1,50,000 per year.\n**Tip:** If you cannot crack JEE, a B.Sc CS degree leads to the same IT companies but in 1 year less! ⚡"
        ],
        quickReplies: ["What is JEE exam?", "B.Tech vs B.Sc CS", "Top NIT colleges", "B.Tech government jobs"]
    },
    {
        name: "mbbs",
        keywords: ["mbbs", "medical", "doctor", "neet", "medical degree", "become doctor", "medical college", "doctor salary", "mbbs fees", "b.pharma", "pharmacy", "medical after 12"],
        responses: [
            "🏥 **MBBS** is the dream for medical aspirants.\n\n**Duration:** 5.5 years (inc. 1 year internship)\n**Stream:** Science PCB Mandatory\n**Entrance:** NEET UG is the ONLY way for admission.\n\n**Fees Difference:**\n• Government Medical College: ₹10,000–50,000/year\n• Private Medical College: ₹5L–20L/year (Stay cautious!)\n\n**Income Potential:**\n• General Physician: ₹40k–80k\n• Govt Medical Officer: ₹56,100+ (Very Secure)\n• MD/MS Specialist: ₹1L–3L/month\n\n**NEET Cutoff (Approx):** General: 550+, OBC: 500+, SC/ST: 450+ out of 720. 🩺"
        ],
        quickReplies: ["NEET exam details", "Government medical college list", "MBBS vs B.Pharma", "Doctor salary in India"]
    },
    {
        name: "ca_course",
        keywords: ["ca", "chartered accountant", "ca course", "ca exam", "icai", "ca foundation", "ca intermediate", "ca salary", "become ca", "ca after 12th", "ca preparation"],
        responses: [
            "📊 **Chartered Accountant (CA)** is the gold standard for Commerce students.\n\n**Conducted by:** ICAI (The Institute of Chartered Accountants of India).\n**Duration:** 4–5 years. No reservation system here! ❌\n\n**The Path:**\n1️⃣ CA Foundation: 4 papers (After Class 12)\n2️⃣ CA Intermediate: 8 papers in 2 groups\n3️⃣ Articleship: 3 years of practical training under a senior CA.\n4️⃣ CA Final: The final hurdle.\n\n**Salaries:** Fresher CAs earn ₹40,000–1,50,000 per month depending on their attempt. \n\n**Total Fees:** Approx ₹1L only (excluding private coaching). Very affordable but requires 10+ hours of study! 📚"
        ],
        quickReplies: ["CA Foundation registration", "CA vs MBA which is better", "Commerce government jobs", "B.Com vs BBA"]
    },
    {
        name: "ias_upsc",
        keywords: ["ias", "ips", "upsc", "civil services", "ias officer", "collector", "civil servant", "ias exam", "upsc exam", "become ias", "ias salary", "ias preparation", "ias path", "district collector"],
        responses: [
            "🏛️ **IAS Officer (UPSC)** is the most powerful government job in India.\n\n**The Path:**\nStep 1: Complete ANY Graduation (B.A., B.Sc, B.Com, B.Tech all work!)\nStep 2: Clear UPSC CSE (Prelims → Mains → Interview)\nStep 3: Training at LBSNAA, Mussoorie.\n\n**Eligibility:** 21–32 years old. Graduation is compulsory.\n**Starting Salary:** Basic ₹56,100/month. \n**Perks:** Government Bungalow, Vehicle, Security, and huge Social Respect. Total value exceeds ₹1.5L/month.\n\n**Tip:** Arts subjects like History and PolSci help the most in UPSC preparation! 🏛️"
        ],
        quickReplies: ["Best degree for UPSC?", "UPSC preparation tips", "IAS vs IPS difference", "Arts stream for IAS"]
    },
    {
        name: "jee_exam",
        keywords: ["jee", "jee main", "jee advanced", "iit", "nit", "jee exam", "jee preparation", "jee eligibility", "jee 2025", "jee apply", "engineering entrance", "jee pattern"],
        responses: [
            "📝 **JEE (Joint Entrance Exam)** is the gateway to India's top engineering colleges.\n\n**JEE Main:** For NITs, IIITs, and GFTIs. \n• When: Jan & April. \n• Pattern: P, C, M (30Q each). Total 300 marks.\n• Eligibility: 75% marks in Class 12 Boards (65% for SC/ST).\n\n**JEE Advanced:** Only for the top 2.5 lakh candidates of JEE Main. Gateway to **IITs**.\n\n**Fee:** ₹650 (General), ₹325 (SC/ST/Girls).\n**Website:** jeemain.nta.nic.in\n\n**Prep Tip:** NCERT is your best friend for Chemistry. Start solving previous 10 years papers now! 🛠️"
        ],
        quickReplies: ["JEE Main application process", "Best NIT colleges", "Engineering without JEE", "JEE vs NEET which harder"]
    },
    {
        name: "neet_exam",
        keywords: ["neet", "neet exam", "neet preparation", "neet eligibility", "neet ug", "neet score", "medical entrance", "aiims", "neet 2025", "neet apply", "neet pattern"],
        responses: [
            "🏥 **NEET UG** is the single entrance exam for all Medical courses (MBBS, BDS, Ayush).\n\n**Pattern:** \n• Subjects: Physics (45Q), Chemistry (45Q), Botany (45Q), Zoology (45Q).\n• Total: 720 Marks. 3 hours 20 minutes.\n• Marking: +4 for correct, -1 for wrong.\n\n**Eligibility:** Minimum 17 years old. 50% in Class 12 PCB.\n**Score Needed (for Govt):** Aim for 550+ (General), 450+ (SC/ST).\n\n**Website:** neet.nta.nic.in\n**Tip:** Biology carries 50% of the marks! Read NCERT Biology at least 5 times before the exam. 🩺"
        ],
        quickReplies: ["Government medical colleges", "NEET preparation tips", "MBBS without NEET?", "B.Pharma details"]
    },
    {
        name: "cuet_exam",
        keywords: ["cuet", "cuet exam", "central university", "du admission", "delhi university", "bhu", "jnu", "cuet eligibility", "cuet 2025", "cuet preparation", "central university admission"],
        responses: [
            "📚 **CUET (Common University Entrance Test)** has replaced Board Marks for College Admissions.\n\n**For:** 250+ Central Universities (Delhi University, BHU, JNU, etc.)\n**Pattern:** \n• Sec 1: Language papers\n• Sec 2: Domain Subjects (Your stream subjects)\n• Sec 3: General Test.\n\n**Website:** cuet.samarth.ac.in\n**Fee:** ₹650 (up to 3 subjects).\n\n**Important:** Delhi University (DU) admissions are now 100% based on CUET score. Your 12th percentage is only a tie-breaker! 🏫"
        ],
        quickReplies: ["CUET vs board marks", "Delhi University admission", "CUET preparation strategy", "CLAT exam details"]
    },
    {
        name: "clat_law",
        keywords: ["clat", "law", "lawyer", "llb", "law exam", "nlu", "law college", "law career", "advocate", "judiciary", "clat 2025", "law after 12", "high court", "supreme court", "legal career"],
        responses: [
            "⚖️ **Law (LL.B.)** is a brilliant career choice today. \n\n**Two Paths:**\n• **5-Year Integrated (BA LLB / BBA LLB)**: Directly after Class 12 via **CLAT** or AILET exams for NLUs.\n• **3-Year LLB**: After any graduation (B.A., B.Sc, etc).\n\n**Salaries:**\n• Corporate Lawyer: ₹50k–3L/month\n• Judge (Judicial Services): ₹60k–2L/month\n• Advocate: Own practice, can earn ₹50k to several lakhs.\n\n**Law is one of the highest paying jobs for Arts & Commerce students!** ⚖️"
        ],
        quickReplies: ["Arts stream for law", "Top NLU colleges", "Judge career path", "Corporate lawyer salary"]
    },
    {
        name: "scholarship",
        keywords: ["scholarship", "financial help", "scholarship apply", "sc st scholarship", "obc scholarship", "girl scholarship", "merit scholarship", "scholarship portal", "nsp", "free education", "scholarship form", "scholarship 2025", "scholarship list", "govt scholarship"],
        responses: [
            "💰 Don't let money stop your studies! There are many scholarships for Indian students:\n\n**Central Government (NSP):**\n• Post-Matric SC/ST/OBC: Up to ₹23,000/year.\n• INSPIRE: For top 1% Science students (₹80,000/year).\n\n**Madhya Pradesh Scholars (My favorites!):**\n• **Medhavi Chhatra Yojana**: FULL FEES PAID if you scored 85%+ in 12th!\n• Gaon Ki Beti: ₹5,000/year for rural girls.\n• Vikramaditya Yojana: Free education for EWS students.\n\n**Tip:** Apply on scholarships.gov.in every year. 90% of students lose money just because they don't apply! 💰"
        ],
        quickReplies: ["NSP scholarship application", "MP scholarship portal", "Scholarship for girls", "Documents needed"]
    },
    {
        name: "govt_college",
        keywords: ["government college", "govt college", "sarkari college", "college fees", "cheap college", "affordable college", "college admission", "college in mp", "college near me", "best government college", "naac college", "college list"],
        responses: [
            "🏫 **Government Colleges** are the smartest choice for an Indian student.\n\n**Compare the Fees:**\n• Govt College: ₹2,000–15,000/YEAR\n• Private College: ₹30,000–2,00,000/YEAR\n• Total saving: Approx ₹2 Lakh to ₹5 Lakh over 3 years!\n\n**The degree value is 100% the same.** In fact, government degrees are more respected for Government Job applications. \n\n**MP Admission Portal:** epravesh.mponline.gov.in (Timeline: June-July). Use our College Finder to find one in your district! 🏫"
        ],
        quickReplies: ["MP college admission portal", "Documents for admission", "College hostel facilities", "Scholarship for govt college"]
    },
    {
        name: "degree_vs_skill",
        keywords: ["degree vs skill", "skill course", "short course", "3 month course", "iti", "polytechnic", "is degree worth it", "skip college", "skill india", "diploma", "degree or course", "short term course", "certificate course"],
        responses: [
            "⚖️ **Degree vs Skill Course: The Truth**\n\n• **Skill Course**: Good to start working fast (Electrician, Tally, Digital Marketing), but your salary hits a 'ceiling' very fast.\n• **Degree**: Mandatory for Government Jobs (IAS, Bank), MNC growth, and higher education. \n\n**Smartest Strategy:** Do BOTH! Graduate from a Government college (low fees) while doing a skill course on the side. \n\nStarting salaries with just a skill: ₹10k. Salaries with a Degree + Skill: ₹25k+. **Invest the 3 years, it's worth it!** ✅"
        ],
        quickReplies: ["Skill courses to do with degree", "Government college fees", "Jobs that require degree", "Best skill courses 2025"]
    },
    {
        name: "career_salary",
        keywords: ["career", "job", "salary", "earn", "earning", "income", "scope", "future", "government job", "private job", "salary after graduation", "how much earn", "career option", "highest paying", "best job"],
        responses: [
            "💰 **Income Potential in 2025 (Monthly starting):**\n\n• **Science**: Software (₹25k–60k), Doctor (₹56k+), Engineer (₹20k–45k).\n• **Commerce**: CA (₹40k–1.2L), Bank Manager (₹35k+), MBA (₹40k–1.5L).\n• **Arts**: IAS Officer (₹56k + Bungalow/Car), Lawyer (₹30k–2L), UX Designer (₹25k–80k).\n\n**Real Talk:** Your starting salary depends on your college, but after 5 years, it depends ONLY on your skills. Most fields reach ₹1L+ per month with 10 years of experience. 💸"
        ],
        quickReplies: ["Highest paying careers India", "Government job salaries", "Career after Arts", "How to increase salary"]
    },
    {
        name: "motivation",
        keywords: ["confused", "scared", "worried", "tensed", "tension", "stress", "don't know", "no idea", "lost", "help me", "what to do", "failed", "failure", "low marks", "bad marks", "give up", "not interested", "sad", "depressed"],
        responses: [
            "I hear you, and it's completely okay to feel this way. 💙 Every year, millions of Indian students go through exactly what you are feeling right now. \n\nRemember:\n✨ Your 10th/12th marks do NOT define your entire life.\n✨ There is a successful path for every student, whether you got 50% or 95%.\n✨ You are early in your journey, and you have time to learn.\n\nTake a deep breath. Let's find your interest first — then everything else becomes easy. Start with the Career Quiz, it only takes 5 minutes! 🎯"
        ],
        quickReplies: ["Help me choose a stream", "My marks are low, what can I do?", "Parent pressure on stream", "Take career quiz"]
    },
    {
        name: "parent_pressure",
        keywords: ["parents", "parent pressure", "parent force", "mummy papa", "family pressure", "parents want", "parents say", "ghar wale", "parents forcing", "parents don't understand", "parents pressure", "family forcing", "relatives suggesting"],
        responses: [
            "Indian parents often suggest Engineering or Medicine because they want you to be 'settled' and 'safe'. 🏠 \n\n**The Strategy:**\n1️⃣ **Stay Calm**: Don't argue, it closes their ears.\n2️⃣ **Show Data**: Show them our career pages with salaries of Lawyers, CAs, and Designers.\n3️⃣ **Use StreamSmart**: Invite them to look at the 'Parents' Corner' on this website. \n4️⃣ **The 'Degree' Safe-card**: Tell them you will do a Graduation Degree (safe for them) but in the subjects YOU love.\n\nYou have to live your career for 40 years, not them. Be respectful, but firm! 💙"
        ],
        quickReplies: ["Arts is not a weak stream", "Show salary comparison", "Government college is good", "Take career quiz"]
    },
    {
        name: "quiz_info",
        keywords: ["quiz", "take quiz", "career quiz", "test", "recommendation", "suggest stream", "which stream for me", "personality test", "interest test", "stream test", "quiz result", "retake quiz", "quiz accurate", "5 minute quiz"],
        responses: [
            "🎯 Our **Career Quiz** is designed for Indian students using behavioral data. \n\n• It has 12 simple multiple-choice questions.\n• It asks about what you like doing, not your marks.\n• Results show match % for Science, Commerce, and Arts.\n• It's FREE and takes only 5 minutes.\n\nReady to see your future? Click 'Career Quiz' in the navbar or the button below! 🚀"
        ],
        quickReplies: ["Start career quiz", "How accurate is the quiz?", "Quiz without registration", "I already took the quiz"]
    },
    {
        name: "hinglish",
        keywords: ["kya karna chahiye", "kaun sa stream", "mujhe help karo", "samajh nahi aata", "kya hoga", "stream batao", "course batao", "konsa subject", "aage kya kare", "padhai", "career kya", "job kaise milegi", "help karo", "batao", "nahi samjha"],
        responses: [
            "Bilkul! Main aapki poori help karunga. 😊 Marg — aapka career guide hoon.\n\nMain aapko in sab cheezon mein guide kar sakta hoon:\n📚 Sahi Stream choose karna (Science/Commerce/Arts)\n🎓 Achi Degree select karna\n💰 Konsi job mein kitni salary milegi\n🏫 Government College kaise milega\n📝 Entrance Exam ki details\n\nAap kya janna chahte hain? Aap mujhse English ya Hindi kisi bhi language mein pooch sakte hain!"
        ],
        quickReplies: ["Stream select karne mein help karo", "Government college ki fees", "Scholarship kaise milegi", "Konsa degree karna chahiye"]
    }
];

const CHATBOT_FALLBACKS = [
    "Not sure about that specific topic, but I can definitely help with:\n✅ Stream Selection\n✅ Degrees & Careers\n✅ Government Colleges\n✅ Entrance Exams & Scholarships\nWhat would you like to explore?",
    "Hmm, my knowledge is focused on career guidance for students! Ask me about streams, degrees, or exams like JEE/NEET and I'll give you full details. 😊",
    "I don't have information on that yet. I'm specially trained to help you with college admissions and career planning. Can I help you with stream selection or degree info?"
];

const WELCOME_MESSAGES = [
    "Namaste! 🙏 I'm Marg — your personal career guide on StreamSmart!",
    "I help students like you choose the right stream, find the best degree, and plan a clear career path — completely free! 🎓",
    "What would you like to know today? 😊"
];

const WELCOME_QUICK_REPLIES = ["Which stream should I choose?", "What degrees are available?", "Tell me about government colleges", "Show me entrance exams"];
