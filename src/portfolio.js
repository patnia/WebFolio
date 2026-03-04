/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Aadi Patni",
  title: "Hi, I'm Aadi",
  subTitle: emoji(
    "A Software Engineer 🚀 with experience building backend systems, REST APIs, and full-stack applications using Python, SQL, and cloud platforms — skilled in system design and production workflows from architecture and implementation to testing, deployment, and monitoring."
  ),
  resumeLink: "", // Add your resume link here
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/patnia",
  linkedin: "https://www.linkedin.com/in/patniaadi",
  gmail: "aadipatni2803@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "BACKEND ENGINEER WHO BUILDS SCALABLE SYSTEMS, DATA PIPELINES, AND PRODUCTION APIs",
  skills: [
    emoji(
      "⚡ Build and deploy production-grade backend systems, REST APIs, and ETL pipelines handling millions of records"
    ),
    emoji(
      "⚡ Design database schemas and optimize SQL queries for real-time analytics and reporting"
    ),
    emoji(
      "⚡ Develop machine learning models and vector search backends for intelligent, data-driven products"
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "Jupyter",
      fontAwesomeClassname: "fas fa-book-open"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-snowflake"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Purdue University",
      logo: require("./assets/images/programmer.svg"), // Replace with Purdue logo
      subHeader: "Bachelor of Science in Statistics",
      duration: "August 2022 – December 2025",
      desc: "Minor: Business Economics, Supply Chain Engineering Technology",
      descBullets: [
        "Coursework: Linear Algebra, R Programming, Linear Regression, Statistical Quality Control, Data Structures and Algorithms, Object-Oriented Programming, SAS",
        "Certifications: Machine Learning with Python (IBM), Statistics with Python Specialization (University of Michigan), Data Science Professional Career Certificate (Google)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend Development & Python",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Engineering & ML",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Sparkl.me",
      companylogo: require("./assets/images/programmer.svg"), // Replace with Sparkl logo
      date: "May 2025 – Aug 2025",
      // desc: "Built production ETL and vector search infrastructure for multimodal asset processing at scale.",
      descBullets: [
        "Built production ETL pipeline using Python, Pinecone, and OpenAI API to process 100K+ assets with multimodal search",
        "Designed SerpAPI integration with rate-limiting, error handling, and licensing validation, achieving 91% data quality",
        "Implemented vector similarity search backend and metadata enrichment workflows, reducing manual processing by 70%",
        "Collaborated in Agile sprints to refine system architecture, PostgreSQL schemas, and monitoring for production reliability"
      ]
    },
    {
      role: "Backend Software Engineering Intern",
      company: "Qure.ai",
      companylogo: require("./assets/images/programmer.svg"), // Replace with Qure.ai logo
      date: "May 2024 – Aug 2024",
      // desc: "Built automated preprocessing and logging infrastructure for large-scale medical image pipelines.",
      descBullets: [
        "Built automated preprocessing pipeline in Python for 500K+ medical images with quality checks and error handling",
        "Designed backend workflows using Python, NumPy, Pandas for image ingestion, metadata extraction, and feature generation",
        "Implemented logging infrastructure and unit tests with pytest to ensure pipeline reliability and reproducibility"
      ]
    },
    {
      role: "Data Science Intern",
      company: "Bijnis",
      companylogo: require("./assets/images/programmer.svg"), // Replace with Bijnis logo
      date: "May 2023 – Aug 2023",
      // desc: "Processed 1M+ transaction records and built live Tableau dashboards backed by optimized SQL APIs.",
      descBullets: [
        "Built end-to-end workflows in SQL and Python to process 1M+ transaction records, designing normalized schemas and APIs",
        "Optimized SQL queries and table indexes, reducing reporting latency by 40% and enabling real-time dashboard updates",
        "Connected Tableau dashboards to live SQL backend with REST endpoints, enabling self-serve analytics for business teams"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Personal Projects",
  projects: [
    {
      image: require("./assets/images/programmer.svg"),
      projectName: "Enterprise Resource Planning (ERP) Software",
      // projectDesc:
        // "Full-stack ERP system with a Python/SQL backend and FastAPI/React frontend featuring barcode-enabled inventory tracking, FIFO logic, an automated purchase-order scheduler with email API integration, and a supplier/customer rating engine with REST APIs for dashboard integration.",
      descBullets: [
        "Built an ERP system using Python/SQL backend and React frontend with barcode-enabled inventory tracking and FIFO logic",
        "Developed automated purchase-order scheduler in Python with email API integration, improving procurement efficiency",
        "Created supplier/customer rating engine with SQL aggregations and REST APIs for dashboard integration and quality control"
      ]
      /*footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/patnia"
        }
      ]*/
    },
    {
      image: require("./assets/images/developerActivity.svg"),
      projectName: "Spam Call Detection System",
      date: "May 2022 - Aug 2022",
      // projectDesc:
        // "XGBoost classifier for telecom spam call filtering achieving 97.5% accuracy, 90.3% precision, and 88.6% recall. Built for Mobileum with cross-validation, feature importance analysis, and fraud pattern detection to refine sensitivity and prevention capabilities.",
      descBullets: [
        "Developed an XGBoost classifier for spam call filtering, achieving 97.5% accuracy on telecom datasets",
        "Enhanced model robustness using cross-validation, reaching 90.3% precision and 88.6% recall on test data",
        "Analyzed feature importance and fraud patterns, refining detection sensitivity and fraud prevention capabilities"
      ]
      /*footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/patnia"
        }
      ]*/
    }
  ],
  display: true
};

// Certifications Section

const certificationSection = {
  title: emoji("Certifications 📜"),
  subtitle: "Industry-recognized certifications in data science and machine learning",
  achievementsCards: [
    {
      title: "Machine Learning with Python",
      subtitle: "IBM — Covered supervised/unsupervised learning, model evaluation, and applied ML with Python.",
      image: require("./assets/images/skill.svg"),
      imageAlt: "IBM Certification",
      footerLink: [
        {
          name: "View Credentials",
          url: "https://coursera.org/verify/W8Q5FM9NCK27"
        }
      ]
    },
    {
      title: "Statistics with Python Specialization",
      subtitle: "University of Michigan — Inferential statistics, probability, and statistical modeling with Python.",
      image: require("./assets/images/skill.svg"),
      imageAlt: "University of Michigan Certification",
      footerLink: [
        {
          name: "View Credentials",
          url: "https://www.coursera.org/account/accomplishments/specialization/T3ZC2WQYWWQE"
        }
      ]
    },
    {
      title: "Data Science Professional Career Certificate",
      subtitle: "Google — End-to-end data science workflows: data wrangling, visualization, modeling, and communication.",
      image: require("./assets/images/skill.svg"),
      imageAlt: "Google Certification",
      footerLink: [
        {
          name: "View Credentials",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/L3HX4W8CG4HX"
        }
      ]
    }
  ],
  display: true
};

// Leadership Section

const leadershipSection = {
  title: emoji("Leadership 🌟"),
  subtitle: "Roles where I built communities, led teams, and drove impact",
  achievementsCards: [
    {
      title: "Boiler B — Co-Founder & Vice President",
      subtitle: "Aug 2022 – May 2025 | Established a dedicated support platform for international students, securing $20,000+ in funding. Mentored incoming first-years and oversaw 4 committees, raising participation by 35%.",
      image: require("./assets/images/developerActivity.svg"),
      imageAlt: "Boiler B",
      footerLink: []
    },
    {
      title: "CASO Treasurer — $35,000+ Raised",
      subtitle: "Cricket and Social Outreach (CASO), Purdue — Managed finances and budgeting, securing $35,000+ for cultural, sporting, and outreach events. Boosted community engagement by 30%.",
      image: require("./assets/images/developerActivity.svg"),
      imageAlt: "CASO",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section — disabled

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Section — disabled

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast Section — disabled

const podcastSection = {
  title: "",
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to new opportunities — response time under 24h.",
  number: "(765) 476-6833",
  email_address: "aadipatni2803@gmail.com"
};

// Twitter Section — disabled

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  certificationSection,
  leadershipSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
