const quizQuestions = [
    {
        id: 1,
        question: "Which subject do you enjoy the most?",
        options: [
            { text: "Mathematics", icon: "fa-calculator", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Science & Biology", icon: "fa-microscope", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "History & Social Studies", icon: "fa-monument", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Business & Accounts", icon: "fa-briefcase", score: { science: 0, commerce: 1, arts: 0 } },
            { text: "Art & Drawing", icon: "fa-palette", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Literature & Languages", icon: "fa-book-open", score: { science: 0, commerce: 0, arts: 1 } }
        ]
    },
    {
        id: 2,
        question: "What type of activity sounds most exciting?",
        options: [
            { text: "Solving complex problems", icon: "fa-brain", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Doing experiments", icon: "fa-flask", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Writing stories", icon: "fa-pen-nib", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Managing money", icon: "fa-coins", score: { science: 0, commerce: 1, arts: 0 } },
            { text: "Helping or teaching others", icon: "fa-hand-holding-heart", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Creating art or music", icon: "fa-music", score: { science: 0, commerce: 0, arts: 1 } }
        ]
    },
    {
        id: 3,
        question: "Which future job sounds most interesting?",
        options: [
            { text: "Engineer or Scientist", icon: "fa-robot", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Doctor or Pharmacist", icon: "fa-user-md", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "IAS Officer", icon: "fa-landmark", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Businessman", icon: "fa-user-tie", score: { science: 0, commerce: 1, arts: 0 } },
            { text: "Teacher or Professor", icon: "fa-chalkboard-teacher", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Journalist or Designer", icon: "fa-newspaper", score: { science: 0, commerce: 0, arts: 1 } }
        ]
    },
    {
        id: 4,
        question: "How would your friends describe you?",
        options: [
            { text: "Logical and analytical", icon: "fa-chart-line", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Creative and expressive", icon: "fa-theater-masks", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Empathetic and helpful", icon: "fa-heart", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Organized and detail-oriented", icon: "fa-tasks", score: { science: 0, commerce: 1, arts: 0 } },
            { text: "Curious and questioning", icon: "fa-search", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Social and communicative", icon: "fa-comments", score: { science: 0, commerce: 0, arts: 1 } }
        ]
    },
    {
        id: 5,
        question: "What kind of problems do you like solving?",
        options: [
            { text: "Number and formula based", icon: "fa-square-root-alt", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Real-world science", icon: "fa-atom", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Social and political", icon: "fa-globe-asia", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Business and market", icon: "fa-store", score: { science: 0, commerce: 1, arts: 0 } },
            { text: "Human behavior", icon: "fa-users", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Design and creativity", icon: "fa-bezier-curve", score: { science: 0, commerce: 0, arts: 1 } }
        ]
    },
    {
        id: 6,
        question: "Which school event do you enjoy most?",
        options: [
            { text: "Science fair", icon: "fa-vial", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Math olympiad", icon: "fa-superscript", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Debate or MUN", icon: "fa-microphone", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Commerce event", icon: "fa-file-invoice-dollar", score: { science: 0, commerce: 1, arts: 0 } },
            { text: "Art or cultural show", icon: "fa-paint-brush", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Essay or quiz", icon: "fa-edit", score: { science: 0, commerce: 0, arts: 1 } }
        ]
    },
    {
        id: 7,
        question: "What matters most in a future career?",
        options: [
            { text: "Job security and salary", icon: "fa-shield-alt", score: { science: 0, commerce: 1, arts: 0 } },
            { text: "Making a difference", icon: "fa-leaf", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Creative freedom", icon: "fa-rocket", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Running own business", icon: "fa-building", score: { science: 0, commerce: 1, arts: 0 } },
            { text: "Continuous learning", icon: "fa-graduation-cap", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Helping people directly", icon: "fa-people-carry", score: { science: 0, commerce: 0, arts: 1 } }
        ]
    },
    {
        id: 8,
        question: "How do you prefer to study?",
        options: [
            { text: "Formulas and problems", icon: "fa-subscript", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Diagrams and experiments", icon: "fa-project-diagram", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Reading and writing", icon: "fa-scroll", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Case studies", icon: "fa-book", score: { science: 0, commerce: 1, arts: 0 } },
            { text: "Group discussions", icon: "fa-users-cog", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Visual projects", icon: "fa-images", score: { science: 0, commerce: 0, arts: 1 } }
        ]
    },
    {
        id: 9,
        question: "Which news topic interests you most?",
        options: [
            { text: "Technology and science", icon: "fa-laptop-code", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Health and medicine", icon: "fa-heartbeat", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Politics and government", icon: "fa-gavel", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Business and economy", icon: "fa-chart-area", score: { science: 0, commerce: 1, arts: 0 } },
            { text: "Sports and culture", icon: "fa-basketball-ball", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Society and education", icon: "fa-user-friends", score: { science: 0, commerce: 0, arts: 1 } }
        ]
    },
    {
        id: 10,
        question: "What kind of content do you prefer?",
        options: [
            { text: "Science fiction", icon: "fa-user-astronaut", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Biology or nature", icon: "fa-dna", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "History or politics", icon: "fa-university", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Business or self-help", icon: "fa-lightbulb", score: { science: 0, commerce: 1, arts: 0 } },
            { text: "Art or music", icon: "fa-guitar", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Fiction or literature", icon: "fa-feather", score: { science: 0, commerce: 0, arts: 1 } }
        ]
    },
    {
        id: 11,
        question: "What is your dream lifestyle?",
        options: [
            { text: "Working in tech company", icon: "fa-building", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Running a hospital", icon: "fa-hospital", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Serving the nation", icon: "fa-flag", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Building a business", icon: "fa-rocket", score: { science: 0, commerce: 1, arts: 0 } },
            { text: "Traveling and creating", icon: "fa-plane-departure", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Teaching and mentoring", icon: "fa-apple-alt", score: { science: 0, commerce: 0, arts: 1 } }
        ]
    },
    {
        id: 12,
        question: "What would you do with ₹1 lakh?",
        options: [
            { text: "Invest in equipment or tech", icon: "fa-microchip", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Learn a science skill", icon: "fa-vials", score: { science: 1, commerce: 0, arts: 0 } },
            { text: "Donate or serve community", icon: "fa-hand-holding-usd", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Start a small business", icon: "fa-store-alt", score: { science: 0, commerce: 1, arts: 0 } },
            { text: "Buy art supplies", icon: "fa-fill-drip", score: { science: 0, commerce: 0, arts: 1 } },
            { text: "Read and educate yourself", icon: "fa-book-reader", score: { science: 0, commerce: 0, arts: 1 } }
        ]
    }
];

const motivationalMessages = [
    "Great start! Keep going.",
    "Interesting choice!",
    "You're doing great.",
    "Almost there!",
    "Just a few more questions.",
    "Analyzing your potential...",
    "Think carefully!",
    "Discovery in progress..."
];
