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
    "A passionate Software Engineer 🚀 focused on backend systems, distributed architecture, and developer tooling — building the invisible infrastructure that makes great products possible."
  ),
  resumeLink: "", // Add your resume link here
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/patnia",
  linkedin: "https://www.linkedin.com/in/patniaadi",
  gmail: "apatni@ucsb.edu",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "BACKEND ENGINEER & SYSTEMS BUILDER WHO LOVES DISTRIBUTED SYSTEMS AND DEVELOPER TOOLING",
  skills: [
    emoji("⚡ Design and build high-throughput backend systems and microservices handling millions of events/day"),
    emoji("⚡ Architect distributed systems with a focus on latency, reliability, and observability"),
    emoji("⚡ Build full-stack applications and developer tools from CLI to production-ready web dashboards")
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
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
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "UC Santa Barbara",
      logo: require("./assets/images/ucsbLogo.svg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2023 – June 2027 (Expected)",
      desc: "GPA: 3.8/4.0 · Dean's List. Focus on systems, distributed computing, and HCI.",
      descBullets: [
        "Relevant coursework: Operating Systems, Computer Networks, Algorithms, Database Systems, Distributed Systems",
        "Undergraduate Research Assistant at the UCSB HCI Lab (2023)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend & Systems",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend / Full-Stack",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "78%"
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
      company: "Palo Alto Networks",
      companylogo: require("./assets/images/paloaltoLogo.svg"),
      date: "Jun 2024 – Sep 2024",
      desc: "Built Python microservices and infrastructure improvements for security event processing at scale.",
      descBullets: [
        "Built Python microservices processing 1M+ security events/day using FastAPI and Kafka",
        "Reduced P99 API latency by 42% via query optimization, connection pooling, and Redis caching",
        "Shipped CI/CD pipeline with GitHub Actions + Docker cutting deploy cycle from 45 min → 8 min",
        "Implemented distributed rate-limiting middleware adopted across 4 internal teams"
      ]
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Stealth Startup",
      companylogo: require("./assets/images/stealthLogo.svg"),
      date: "Jan 2024 – May 2024",
      desc: "Built the core product — a React dashboard and Node.js REST API — from the ground up.",
      descBullets: [
        "Built React dashboard achieving 97 Lighthouse performance score with dynamic data virtualization",
        "Designed Node.js REST API with JWT auth, RBAC, and rate limiting — 99.98% uptime",
        "Integrated Stripe and Plaid APIs powering $80k+ in monthly transaction volume",
        "Raised test coverage from 34% → 91% using Jest and Cypress"
      ]
    },
    {
      role: "Undergraduate Research Assistant",
      company: "UCSB HCI Lab",
      companylogo: require("./assets/images/ucsbLogo.svg"),
      date: "Sep 2023 – Dec 2023",
      desc: "Built data pipelines and visualizations supporting HCI research published at CHI 2024.",
      descBullets: [
        "Built data collection pipeline aggregating 500k+ user interaction events for HCI research",
        "Developed D3.js visualizations for research paper published in CHI 2024",
        "Maintained the lab's open-source toolkit with 800+ GitHub stars"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SYSTEMS AND TOOLS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/programmer.svg"),
      projectName: "DistribuTrace",
      projectDesc:
        "Distributed tracing system for microservices with a custom context-propagation protocol delivering sub-1ms overhead at 10k+ req/s, plus a real-time flame-graph dashboard.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/patnia"
        }
      ]
    },
    {
      image: require("./assets/images/developerActivity.svg"),
      projectName: "NeuralMarket",
      projectDesc:
        "Algorithmic trading engine using LSTM + reinforcement learning for real-time signal generation. Full backtesting framework across 5+ years of market data — +23% backtest ROI.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/patnia"
        }
      ]
    },
    {
      image: require("./assets/images/skill.svg"),
      projectName: "CollabFlow",
      projectDesc:
        "Real-time collaborative code editor with live cursors, operational transforms for conflict resolution, syntax highlighting for 30+ languages, and session recording. 500+ active users.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/patnia"
        }
      ]
    },
    {
      image: require("./assets/images/manOnTable.svg"),
      projectName: "APIForge",
      projectDesc:
        "CLI + web tool that auto-generates type-safe REST API clients, documentation, and mock servers from OpenAPI 3.x specs. Supports TypeScript, Python, and Go output. 2k+ GitHub stars.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/patnia"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Hackathons, awards, and things I'm proud of",
  achievementsCards: [
    {
      title: "CHI 2024 Research Contribution",
      subtitle:
        "Co-authored research published at ACM CHI 2024 through work at the UCSB HCI Lab on large-scale user interaction data pipelines and D3.js visualizations.",
      image: require("./assets/images/skill.svg"),
      imageAlt: "CHI 2024",
      footerLink: []
    },
    {
      title: "2k+ GitHub Stars",
      subtitle:
        "APIForge, an open-source CLI tool for generating type-safe API clients from OpenAPI specs, accumulated 2k+ GitHub stars from the developer community.",
      image: require("./assets/images/developerActivity.svg"),
      imageAlt: "GitHub Stars",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/patnia"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section — disabled (no Medium blog)

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
    "Open to SWE internships (Summer 2025), research collaborations, and interesting systems problems. Response time: < 24h.",
  number: "",
  email_address: "apatni@ucsb.edu"
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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
