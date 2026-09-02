// ============================================================
// PORTFOLIO DATA — Edit this file to update your entire portfolio
// ============================================================

const portfolioData = {

  // ── Personal Info ──────────────────────────────────────────
  personal: {
    name: "Sanket Waghmare",
    title: "AI & Data Science Student",
    tagline: "Building intelligent solutions with AI, Machine Learning & Data.",
    description: "Passionate about Artificial Intelligence, Machine Learning, Data Science and building practical technology solutions.",
    email: "waghmaresanket124@gmail.com",
    github: "https://github.com/sanket124w",
    linkedin: "www.linkedin.com/in/sanket-waghmare-6277b7305",
    resumeLink: "assets/resume.pdf",
    profileImage: "assets/profile.jpeg"
  },

  // ── About Me ───────────────────────────────────────────────
  about: {
    paragraphs: [
      "I am a BE Artificial Intelligence & Data Science student with a strong interest in building intelligent systems and extracting meaningful insights from data.",
      "My areas of interest include Artificial Intelligence, Machine Learning, Data Science, Python programming, Data Analytics, and Software Development. I enjoy working on real-world problems and turning ideas into practical solutions."
    ],
    quickFacts: [
      { label: "Degree", value: "BE — AI & Data Science", icon: "graduation" },
      { label: "University", value: "Savitribai Phule Pune University", icon: "university" },
      { label: "Role", value: "AI & Data Science Student", icon: "code" },
      { label: "Status", value: "Open to Opportunities", icon: "briefcase" }
    ]
  },

  // ── Skills ─────────────────────────────────────────────────
  skills: [
    {
      category: "Programming",
      icon: "code",
      items: ["Python", "C++", "C", "SQL"]
    },
    {
      category: "AI & Machine Learning",
      icon: "brain",
      items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Generative AI"]
    },
    {
      category: "Data Science",
      icon: "chart",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"]
    },
    {
      category: "Tools & Technologies",
      icon: "tool",
      items: ["Git", "GitHub", "Jupyter Notebook", "VS Code"]
    },
    {
      category: "Databases",
      icon: "database",
      items: ["MySQL", "MongoDB"]
    }
  ],

  // ── Experience ─────────────────────────────────────────────
  experience: [
    {
      role: "Data Science Intern",
      company: "Shorat Innovations Private Limited",
      duration: "1 Jan 2026 — [1 Feb 2026",
      description: "Worked on data preprocessing, exploratory data analysis, machine learning workflows and Python-based data science tasks.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter"]
    }
    // Add more experiences here:
    // {
    //   role: "Your Role",
    //   company: "Company Name",
    //   duration: "Start — End",
    //   description: "What you did.",
    //   technologies: ["Tech1", "Tech2"]
    // }
  ],

  // ── Projects ───────────────────────────────────────────────
  projects: [
    {
      name: "Stock Price Prediction",
      description: "Built a machine-learning solution using Python and Linear Regression to predict the next days stock closing price from cleaned historical market data Implemented data preprocessing, Min-Max scaling, train test evaluation, and actual-vs-predicted visualizations to make model performance easy to interpret.",
      technologies: ["Python", "Machine Learning", "Pandas"],
      github: "https://github.com/sanket124w/stock-prediction",
      demo: "https://stock-prediction-omega-liard.vercel.app/",
      image: null
    },
    {
      name: "Personal Portfolio",
      description: "Built a responsive personal portfolio website with dark/light mode, smooth navigation, mobile-friendly design, and animated sections. It highlights my skills in HTML, CSS, and JavaScript through dynamic UI features such as theme persistence, scroll effects, and an interactive contact form.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sanket124w/Personal-Portfolio",
      demo: "https://sanket124w.github.io/Personal-Portfolio/",
      image: "assets/portfolio.png"
    },
    {
      name: "Project Name",
      description: "A brief description of what this project does and the problem it solves.",
      technologies: ["Python", "Deep Learning", "TensorFlow"],
      github: "#",
      demo: "#",
      image: null
    }
    // Add more projects here
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      degree: "BE — Artificial Intelligence & Data Science",
      institution: "Savitribai Phule Pune University (SPPU)",
      college: "[Shri Chharatrapati Shivaji Maharaj College of Engineering Nepti, Ahilyanagar]",
      duration: "2023 — 2027",
      grade: "[6.02]",
      description: "Studying core subjects in AI, Machine Learning, Data Science, and Computer Science fundamentals."
    }
    // Add more education entries:
    // {
    //   degree: "HSC — Science",
    //   institution: "[Board Name]",
    //   college: "[School/College Name]",
    //   duration: "2020 — 2022",
    //   grade: "[Percentage / CGPA]",
    //   description: ""
    // }
  ],

  // ── Certifications ────────────────────────────────────────
  certifications: [
    {
      name: "[Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate]",
      issuer: "[Oracle]",
      date: "[January 4 2026]",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8DC0BDA50DB2A46C6F0DF0D4687F534E9EF03048A28C8DF263717CF26C8DBA70"
    },
    {
      name: "[Certification Name]",
      issuer: "[Issuing Organization]",
      date: "[Date]",
      link: "#"
    }
    // Add more certifications here
  ],

  // ── Achievements ──────────────────────────────────────────
  achievements: [
    // Add your achievements here:
    // {
    //   title: "Achievement Title",
    //   description: "Brief description of the achievement.",
    //   date: "2024"
    // }
  ],

  // ── Footer ────────────────────────────────────────────────
  footer: {
    text: "© 2026 Sanket Waghmare. All rights reserved."
  }
};
