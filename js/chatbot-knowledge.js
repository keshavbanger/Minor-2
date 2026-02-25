/**
 * Marg Chatbot Knowledge Base
 * Contains all intents, keywords, and responses for the rule-based bot mode.
 */

const ChatbotIntents = [
    {
        name: 'greeting',
        keywords: ['hi', 'hello', 'hey', 'namaste', 'hii', 'helo', 'good morning', 'good afternoon', 'sup', 'who are you', 'what are you', 'help', 'start'],
        responses: [
            "Hello! 😊 I'm Marg, your career guide. How can I help you today?",
            "Namaste! 🙏 Great to see you here. Ready to explore your career path?",
            "Hi there! I'm Marg. I help students like you choose the right stream and career. What's on your mind?"
        ],
        quickReplies: [
            "Tell me about streams",
            "Help me choose a career",
            "What degrees can I do?"
        ]
    },
    {
        name: 'stream_help',
        keywords: ['stream', 'science', 'commerce', 'arts', 'which stream', 'help me choose', 'confused', 'stream selection', 'class 10', 'class 12', 'pcm', 'pcb', 'maths', 'biology', 'account'],
        responses: [
            "Choosing a stream can feel confusing — but don't worry! Here's a quick overview:\n\n🔬 **SCIENCE** — For math & science lovers\nLeads to: Engineering, Medicine, IT, Research\n\n💰 **COMMERCE** — For business minds\nLeads to: CA, Banking, MBA, Entrepreneurship\n\n🎨 **ARTS** — For thinkers & creators\nLeads to: IAS, Law, Journalism, Teaching\n\nWant me to recommend a stream for YOU specifically? Take our 5-minute quiz! 🎯"
        ],
        quickReplies: [
            "Tell me more about Science",
            "Tell me more about Commerce",
            "Tell me more about Arts",
            "Take the quiz"
        ]
    },
    {
        name: 'science_query',
        keywords: ['science stream', 'pcm', 'pcb', 'physics', 'chemistry', 'engineering stream', 'medical stream'],
        responses: [
            "🔬 **SCIENCE STREAM** — Here's everything:\n\n**Subjects you'll study:**\n• Physics, Chemistry, Mathematics (PCM)\n• OR Physics, Chemistry, Biology (PCB)\n\n**Best career paths:**\n👨‍💻 PCM → Engineering, IT, Data Science, Architecture\n👨‍⚕️ PCB → Medicine, Pharmacy, Biotechnology, Nursing\n\n**Key entrance exams:**\n📝 JEE Main & Advanced (Engineering)\n📝 NEET (Medical)\n\n**Salary range after graduation:**\nStarting: ₹20,000–40,000/month\nAfter 5 years: ₹50,000–1,00,000/month\n\nIs Science right for you? Take our quiz to confirm! 🎯"
        ],
        quickReplies: ["Take the quiz", "Tell me about degrees"]
    },
    {
        name: 'commerce_query',
        keywords: ['commerce stream', 'business studies', 'accounts', 'economics', 'ca', 'finance'],
        responses: [
            "💰 **COMMERCE STREAM** — Complete guide:\n\n**Subjects you'll study:**\n• Accountancy, Business Studies, Economics\n• Mathematics (optional but recommended)\n\n**Career paths:**\n📊 CA (Chartered Accountant) — Top earning\n🏦 Banking & Finance\n🏢 MBA & Management\n💼 Entrepreneurship\n\n**Key entrance exams:**\n📝 CUET, CAT (for MBA), IPMAT (IIM)\n\n**Government job opportunities:**\n✅ Bank PO, SSC CGL, UPSC (Economics)\n\nStarting salary: ₹15,000–28,000/month\nAfter 5 years: ₹40,000–80,000/month"
        ],
        quickReplies: ["Tell me about CA", "Government job options"]
    },
    {
        name: 'arts_query',
        keywords: ['arts stream', 'humanities', 'history', 'sociology', 'political science', 'geography'],
        responses: [
            "🎨 **ARTS/HUMANITIES STREAM**:\n\n**Subjects:** History, Geography, Political Science, Sociology, Psychology, English, Hindi\n\n**Career paths:**\n🏛️ IAS/IPS Officer — Highest paid government job\n⚖️ Lawyer/Judge — Excellent earning\n📰 Journalist/Author\n🎭 Designer, Actor, Artist\n\n**MYTH BUSTED:** Arts does NOT mean low salary! An IAS officer earns ₹56,000+ per month. A good lawyer earns ₹1,00,000+ per month.\n\nStarting salary: ₹14,000–25,000/month\nTop earners after 10 years: ₹80,000–2,00,000/month"
        ],
        quickReplies: ["How to become IAS", "Degrees in Arts"]
    },
    {
        name: 'degree_query',
        keywords: ['degree', 'course', 'graduation', 'bsc', 'bcom', 'ba', 'btech', 'mbbs', 'bba', 'llb', 'bed', 'what degree', 'which course', 'after 12th'],
        responses: [
            "📚 Here are the most popular degrees by stream:\n\n🔬 **SCIENCE:**\n• B.Sc. Computer Science (3 yrs)\n• B.Tech Engineering (4 yrs)\n• MBBS Medicine (5.5 yrs)\n\n💰 **COMMERCE:**\n• B.Com (3 yrs)\n• BBA (3 yrs)\n• CA (4-5 yrs)\n\n🎨 **ARTS:**\n• B.A. (3 yrs)\n• LLB Law (3 yrs)\n• B.Ed Teaching (2 yrs)\n\nWant details about any specific degree?"
        ],
        quickReplies: [
            "Tell me about B.Sc CS",
            "Tell me about MBBS",
            "Tell me about CA",
            "Tell me about B.A."
        ]
    },
    {
        name: 'bsc_cs_query',
        keywords: ['bsc cs', 'computer science', 'it degree', 'software developer'],
        responses: [
            "💻 **B.Sc. Computer Science**\n\n**Duration:** 3 years (6 semesters)\n**Stream:** Science\n**Fees at Govt College:** ₹3,000–10,000/year\n\n**Career options:**\n👨‍💻 Software Developer — ₹20k–40k\n🌐 Web Developer — ₹18k–35k\n📊 Data Analyst — ₹22k–45k\n\n**Govt jobs:** SSC, NIC, Banking IT officer\n\nRating: ⭐⭐⭐⭐⭐ (Highly recommended in 2025)"
        ]
    },
    {
        name: 'government_jobs',
        keywords: ['government job', 'govt job', 'ssc', 'upsc', 'railway job', 'bank po', 'ias officer'],
        responses: [
            "🏛️ **Government Jobs After Graduation:**\n\n**AFTER ANY DEGREE:**\n• SSC CGL — Grade B/C govt officer — ₹35k–80k\n• Bank PO/Clerk — ₹25k–55k\n• UPSC IAS/IPS — ₹56k–2.5L\n\n**AFTER SCIENCE:**\n• DRDO Scientist — ₹45k–80k\n• ISRO Scientist — ₹50k–90k\n\n**AFTER COMMERCE:**\n• Income Tax Officer — ₹44k–70k\n• Accounts Officer — ₹35k–60k\n\nKey: Graduation is **MANDATORY** for most government jobs. No degree = no eligibility. ⚠️"
        ],
        quickReplies: ["IAS path", "Bank PO requirements"]
    },
    {
        name: 'college_query',
        keywords: ['college', 'government college', 'admission', 'fees', 'hostel', 'best college'],
        responses: [
            "🏫 **About Government Degree Colleges:**\n\n**Why choose government college?**\n✅ Very low fees (₹2,000–15,000/year)\n✅ Same degree value as private college\n✅ NAAC accredited\n✅ Scholarship eligible\n\n**Fees comparison:**\nGovernment: ₹3,000–15,000/year\nPrivate: ₹30,000–2,00,000/year\n\nUse our College Finder to see colleges in your district."
        ],
        quickReplies: ["Admission process", "Find colleges in MP"]
    },
    {
        name: 'exam_query',
        keywords: ['exam', 'entrance', 'jee', 'neet', 'cuet', 'clat', 'nda'],
        responses: [
            "📝 **Entrance Exams Guide:**\n\n**Engineering:** JEE Main & Advanced\n**Medical:** NEET UG\n**Central Universities:** CUET UG\n**Law:** CLAT\n**Defense:** NDA\n\nWhich exam do you want to learn more about?"
        ],
        quickReplies: ["JEE Main", "NEET UG", "CUET UG"]
    },
    {
        name: 'ias_path',
        keywords: ['ias', 'ips', 'upsc', 'civil services', 'become ias'],
        responses: [
            "🏛️ **IAS Officer Path**\n\n**Stream for graduation:** ANY stream works (Arts preferred for base)\n\n**Your journey:**\n1. Complete graduation\n2. Appear for UPSC Civil Services Exam\n3. 3 stages: Prelims → Mains → Interview\n\nStarting salary: ₹56,100/month + Residence, Car, Security.\n\n⚡ **Pro tip:** Start preparation during graduation. Choose a BA with History/Political Science for a strong foundation."
        ]
    },
    {
        name: 'motivation',
        keywords: ['confused', 'scared', 'worried', 'tensed', 'fail', 'failure', 'don\'t know'],
        responses: [
            "Hey, it's completely okay to feel confused. 😊 Almost EVERY student feels exactly like you do right now.\n\n✨ There is NO wrong choice — only uninformed ones.\n✨ Your stream doesn't define your entire life.\n✨ Many successful people changed direction.\n\nLet's figure this out together. Want to start with our 5-minute quiz? 🎯"
        ],
        quickReplies: ["Take the quiz", "Talk about streams"]
    },
    {
        name: 'hinglish_query',
        keywords: ['kya karna chahiye', 'kaun sa stream', 'mujhe help karo', 'samajh nahi aata', 'course batao'],
        responses: [
            "Bilkul! Main aapki help karunga. 😊\n\nAapke liye main yeh kar sakta hoon:\n📚 Stream choose karne mein help\n🎓 Degree options batana\n💰 Career aur salary info\n🏫 Govt college dhundhna\n\nAap kya janna chahte hain? Bata dijiye!"
        ]
    },
    {
        name: 'after_10th',
        keywords: ['after 10th', '10th pass', 'after class 10', 'which stream after 10th'],
        responses: [
            "After Class 10, you choose one of 3 streams. This is a very important decision!\n\n**Ask yourself:**\nQ1: Which subjects did I enjoy most?\nQ2: What kind of work do I find interesting?\n\n🔬 Science → if you love Maths/Science\n💰 Commerce → if you love Business/Accounts\n🎨 Arts → if you love Social Studies/Languages\n\nTake our quiz for a personalized recommendation! 🎯"
        ]
    },
    {
        name: 'after_12th',
        keywords: ['after 12th', 'after class 12', '12th pass', 'what to do after 12'],
        responses: [
            "After Class 12, you have these main paths:\n\n1️⃣ **Graduation Degree** (3-4 years) — Best for long-term growth\n2️⃣ **Diploma/ITI** (1-2 years) — For faster entry-level jobs\n3️⃣ **Competitive Prep** — Usually alongside graduation\n\n**My recommendation:** Go for graduation in a government college. It costs very little and opens most doors. ✅"
        ]
    }
];
