// EduPulse Application State Store
class StateStore {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('edupulse_user')) || {
      id: 1,
      name: "Alex Rivers",
      email: "student@edupulse.edu",
      role: "student", // 'student' | 'teacher' | 'admin'
      rollNumber: "23BCE1042",
      department: "Computer Science & Engineering",
      semester: 4,
      cgpa: 3.82,
      attendancePct: 94.5,
      skills: ["Python", "C++", "Data Structures", "SQL", "HTML/CSS"],
      interests: ["Machine Learning", "Open Source", "Competitive Programming"]
    };

    this.subjects = [
      { id: 101, code: "CS201", name: "Data Structures & Algorithms", credits: 4, score: 78.5, teacher: "Dr. Aris Thorne" },
      { id: 102, code: "CS204", name: "Python for Intelligent Systems", credits: 3, score: 86.2, teacher: "Dr. Aris Thorne" },
      { id: 103, code: "MATH301", name: "Discrete Mathematics & Probability", credits: 4, score: 61.0, teacher: "Prof. Sarah Vance" },
      { id: 104, code: "CS302", name: "Computer Networks & Distributed Systems", credits: 3, score: 72.4, teacher: "Dr. Aris Thorne" }
    ];

    this.topicScores = {
      101: [
        { topic: "Arrays & Vectors", score: 88.5, status: "Mastered" },
        { topic: "Linked Lists", score: 82.0, status: "Good" },
        { topic: "Stacks & Queues", score: 75.5, status: "Moderate" },
        { topic: "Trees & BST", score: 62.0, status: "Needs Practice" },
        { topic: "Graphs & Dijkstra", score: 55.0, status: "Learning Gap" }
      ],
      102: [
        { topic: "Basic Syntax & Functions", score: 95.0, status: "Mastered" },
        { topic: "OOP Concepts", score: 90.0, status: "Mastered" },
        { topic: "Numpy & DataFrames", score: 88.0, status: "Good" },
        { topic: "Async & Generators", score: 78.0, status: "Moderate" }
      ],
      103: [
        { topic: "Set Theory & Logic", score: 70.0, status: "Moderate" },
        { topic: "Combinatorics", score: 64.0, status: "Needs Practice" },
        { topic: "Probability Distributions", score: 58.0, status: "Learning Gap" }
      ]
    };

    this.assignments = [
      {
        id: 1,
        subjectId: 101,
        subjectName: "Data Structures & Algorithms",
        title: "Implementation of AVL Trees & Self-Balancing",
        topic: "Trees & BST",
        difficulty: "hard",
        maxMarks: 100,
        deadline: new Date(Date.now() + 3 * 86400000).toISOString(),
        status: "pending", // pending, submitted, graded
        description: "Implement a modern C++ AVL Tree template with insertion, deletion, and height verification routines."
      },
      {
        id: 2,
        subjectId: 102,
        subjectName: "Python for Intelligent Systems",
        title: "Predictive Analytics Pipeline in Pandas",
        topic: "Numpy & DataFrames",
        difficulty: "medium",
        maxMarks: 50,
        deadline: new Date(Date.now() + 5 * 86400000).toISOString(),
        status: "pending",
        description: "Build a data ingestion script to filter outliers and compute rolling accuracy metrics."
      },
      {
        id: 3,
        subjectId: 103,
        subjectName: "Discrete Mathematics",
        title: "Probability Distribution Problem Set",
        topic: "Probability Distributions",
        difficulty: "medium",
        maxMarks: 30,
        deadline: new Date(Date.now() - 1 * 86400000).toISOString(),
        status: "graded",
        marksObtained: 24.5,
        teacherFeedback: "Good attempt. Check standard deviation normalization on Q8.",
        aiPreliminaryFeedback: "Mathematical proof layout is correct. Q8 misses sqrt(n) factor in denominator."
      }
    ];

    this.anonymousFeedback = [
      {
        id: 1,
        subjectId: 101,
        subjectName: "Data Structures & Algorithms",
        category: "Teaching pace",
        rating: 3,
        sentiment: "negative",
        text: "The pace during Graph algorithms (Dijkstra/BFS) was a bit too fast. More worked step-by-step examples on the board would help greatly.",
        date: "2026-10-02"
      },
      {
        id: 2,
        subjectId: 101,
        subjectName: "Data Structures & Algorithms",
        category: "Study material",
        rating: 5,
        sentiment: "positive",
        text: "The lecture notes on Trees and Binary Heaps were extremely clear and helpful for revision!",
        date: "2026-10-04"
      },
      {
        id: 3,
        subjectId: 102,
        subjectName: "Python for Intelligent Systems",
        category: "Assignments",
        rating: 4,
        sentiment: "positive",
        text: "Practical code assignments are engaging and well structured. Would love more edge case unit tests in the spec.",
        date: "2026-10-05"
      },
      {
        id: 4,
        subjectId: 103,
        subjectName: "Discrete Mathematics",
        category: "Course difficulty",
        rating: 2,
        sentiment: "negative",
        text: "Probability concepts feel very abstract. Can we have extra tutorial sessions or problem-solving hours before exams?",
        date: "2026-10-06"
      }
    ];

    this.opportunities = [
      {
        id: 1,
        title: "Global AI & EdTech Hackathon 2026",
        organization: "OpenAI & EduPulse Labs",
        category: "Hackathons",
        description: "Build innovative AI solutions targeting learning gap diagnosis, adaptive tutoring, and classroom analytics.",
        eligibility: "Undergraduate Students in Computer Science or Data Science",
        requiredSkills: ["Python", "C++", "AI/ML", "API Integration"],
        deadline: "2026-10-25",
        isOnline: true,
        location: "Remote / Online",
        url: "https://edupulse.edu/hackathons/ai-2026",
        isSaved: true
      },
      {
        id: 2,
        title: "Summer Research Fellowship in Graph Neural Networks",
        organization: "Institute of Advanced Computing",
        category: "Research opportunities",
        description: "Work alongside leading researchers on optimizing graph tree traversals and dynamic neural architectures.",
        eligibility: "3rd and 4th Year CSE/ECE Students with 3.5+ CGPA",
        requiredSkills: ["Data Structures", "C++", "Python", "Machine Learning"],
        deadline: "2026-11-01",
        isOnline: false,
        location: "Boston, MA (Stipend provided)",
        url: "https://iac.edu/fellowships/gnn",
        isSaved: false
      },
      {
        id: 3,
        title: "National Student Software Engineering Challenge",
        organization: "TechInnovators Guild",
        category: "Competitions",
        description: "Compete against 500+ university teams in building scalable microservices and algorithm optimization.",
        eligibility: "Enrolled University Students",
        requiredSkills: ["C++", "SQL", "Data Structures"],
        deadline: "2026-10-18",
        isOnline: true,
        location: "Online",
        url: "https://techinnovators.org/challenge",
        isSaved: false
      }
    ];

    this.studyPlans = [
      {
        id: 1,
        subjectName: "Data Structures & Algorithms",
        assessmentDate: "2026-10-20",
        dailyHours: 2.0,
        tasks: [
          { day: 1, topic: "Trees & BST", desc: "Revise BST insertion & deletion edge cases. Solve 3 LeetCode Tree problems.", minutes: 60, done: true },
          { day: 2, topic: "AVL Trees", desc: "Practice single and double rotations on paper.", minutes: 60, done: true },
          { day: 3, topic: "Graphs Basics", desc: "Review Adjacency List vs Matrix representation & BFS traversal.", minutes: 90, done: false },
          { day: 4, topic: "Dijkstra Algorithm", desc: "Implement Priority Queue version of Dijkstra algorithm in C++.", minutes: 90, done: false },
          { day: 5, topic: "Mock Assessment", desc: "Complete timed 45-minute practice test on Graphs & Trees.", minutes: 60, done: false }
        ]
      }
    ];

    this.notifications = [
      { id: 1, title: "Assignment Deadline Approaching", message: "AVL Trees assignment is due in 3 days.", type: "warning", date: "10 mins ago", read: false },
      { id: 2, title: "Opportunity Match Alert", message: "92% match with Global AI & EdTech Hackathon 2026.", type: "success", date: "1 hour ago", read: false },
      { id: 3, title: "Grade Published", message: "Dr. Aris Thorne graded Discrete Math set: 24.5/30.", type: "info", date: "1 day ago", read: true }
    ];

    this.teacherStudents = [
      { id: 1, roll: "23BCE1042", name: "Alex Rivers", avgScore: 78.5, attendance: 94.5, supportLevel: "Lower", trend: "+3.2%" },
      { id: 2, roll: "23BCE1088", name: "Jordan Lee", avgScore: 54.0, attendance: 78.0, supportLevel: "Higher", trend: "-8.5%" },
      { id: 3, roll: "23BCE1102", name: "Maya Lin", avgScore: 68.2, attendance: 89.0, supportLevel: "Moderate", trend: "-1.5%" },
      { id: 4, roll: "23BCE1145", name: "Ethan Vance", avgScore: 92.4, attendance: 98.0, supportLevel: "Lower", trend: "+5.0%" }
    ];
  }

  setUser(user) {
    this.currentUser = user;
    localStorage.setItem('edupulse_user', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('edupulse_user');
    this.currentUser = null;
  }
}

window.stateStore = new StateStore();
