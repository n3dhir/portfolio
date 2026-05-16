export const cv = {
  name: "Nadhir Halbouni",
  title: "Software Engineer",
  location: "Ariana, Tunisia",
  email: "nadhir.halbouni5@gmail.com",
  phone: "+216 50 058 735",
  website: "https://n3dhir.com",
  github: "https://github.com/n3dhir",
  linkedin: "https://www.linkedin.com/in/nadhir-halbouni/",
  summary:
    "Full-stack engineer specializing in data-heavy SaaS systems, backend reliability, and automation. Experienced in building and scaling production systems across multiple repositories, handling real-time features, payments, and growth mechanisms. Strong focus on ownership, system design, and delivering end-to-end solutions from database to user experience.",
  experience: [
    {
      company: "Drivago",
      location: "Ariana, Tunisia",
      role: "Software Engineer",
      period: "Sep 2024 – Present",
      highlights: [
        "Designed and built a cross-repository training platform spanning 7+ services, enabling secure multi-device usage and supporting concurrent usage without session conflicts.",
        "Integrated payment gateways (Konnect, Flouci) with a full payment lifecycle and automated subscription billing across thousands of transactions.",
        "Owned production incident resolution for 500+ client agencies, rapidly reproducing and debugging cross-platform issues to reduce time-to-resolution.",
        "Managed production deployments on Linux servers using Nginx and PM2 with end-to-end environment configuration.",
        "Engineered automation systems (cron jobs) for scraping, database backups, and recurring billing, saving hours of weekly maintenance.",
        "Built authentication and security systems (magic-link login, OAuth, real-time fraud detection) enforcing single-session access.",
        "Led migration of 4 core repositories from Angular v14 to v19, enabling standardized architecture and full RTL/LTR support.",
        "Built a referral and coupon system driving acquisition and retention through modular discount logic and reward tracking.",
      ],
    },
    {
      company: "Drivago",
      location: "Ariana, Tunisia",
      role: "Software Engineer Intern",
      period: "Jul 2024 – Aug 2024",
      highlights: [
        "Built BI dashboards tracking SaaS metrics (MRR, ARR, churn, ARPU) to support product decisions.",
        "Designed and optimized PostgreSQL queries for retention analysis and cohort tracking.",
        "Developed advanced segmentation and filtering systems for backoffice operations (subscriptions, payments, activity).",
      ],
    },
  ],
  projects: [
    {
      name: "Testify — Technical Assessment Platform",
      period: "Nov 2023 – Jun 2024",
      description:
        "Web-based technical assessment platform featuring code execution, automated evaluation, and backend processing for candidate submissions.",
      highlights: [
        "Built a full-stack platform supporting MCQ, coding challenges, and open-ended evaluations.",
        "Implemented a C++ code execution engine with test case validation, automated scoring, and pass/fail evaluation.",
        "Designed a backend evaluation pipeline handling submissions, validation, and result aggregation.",
      ],
      tech: ["Angular", "Node.js", "Express.js", "MongoDB", "ACE Editor"],
      links: [
        { label: "Live Demo", href: "https://testify.n3dhir.com" },
        { label: "Demo Video", href: "https://drive.google.com/file/d/11PjLQudEmKk0j9YbJ3aseVqYhDcJsMyp" },
      ],
    },
  ],
  skills: {
    core: [
      "Backend Systems",
      "API Design",
      "REST APIs",
      "Authentication & Security",
      "Payments Integration",
      "Automation",
      "Data Modeling",
    ],
    backend: ["Node.js", "Express.js", "PostgreSQL", "Knex.js", "MongoDB"],
    frontend: ["Angular (v14–v19)", "RxJS", "Angular Material", "SCSS"],
    infrastructure: ["Linux", "Nginx", "PM2", "Cron Jobs", "ngrok", "Git/GitHub"],
    other: ["SSR", "SSG", "SEO Optimization", "OAuth (Google/Facebook)"],
  },
  education: [
    {
      degree: "Software Engineering Degree",
      school: "Higher Institute of Informatics (ISI)",
      location: "Ariana, Tunisia",
      period: "2023 – 2026",
    },
    {
      degree: "Computer Science Degree",
      school: "Higher Institute of Informatics (ISI)",
      location: "Ariana, Tunisia",
      period: "2020 – 2023",
    },
  ],
  certifications: [
    "SQL (Advanced) Certificate — HackerRank (Jun 2023)",
    "Problem Solving (Intermediate) Certificate — HackerRank (Aug 2022)",
    "Relational Database — freeCodeCamp (Jun 2023)",
    "JavaScript Algorithms and Data Structures — freeCodeCamp (Jun 2023)",
    "Algorithmic Toolbox — Coursera (May 2022)",
    "Meta Hacker Cup 2022 (Sep 2022)",
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "French", level: "Professional" },
    { name: "German", level: "Basic" },
  ],
}
