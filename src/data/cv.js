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
    "I design and ship data-first SaaS platforms used by hundreds of organizations. I focus on full‑stack reliability, payment flows, and automation that reduces manual toil — delivering end-to-end solutions from database design to delightful front-end experiences.",
  experience: [
    {
      company: "Drivago",
      location: "Ariana, Tunisia",
      role: "Software Engineer",
      period: "Sep 2024 – Present",
      highlights: [
        "Designed and delivered a cross-repository training platform spanning 7+ services, enabling secure multi-device access while preventing session conflicts during concurrent usage.",
        "Integrated Konnect and Flouci payment gateways, implemented the full payment lifecycle, and automated subscription billing for thousands of transactions.",
        "Led production incident response for 500+ client agencies, introducing reproducible debugging workflows that reduced mean time to resolution.",
        "Managed production deployments on Linux using Nginx and PM2, standardizing environment configuration and improving uptime across services.",
        "Engineered automation for scraping, backups, and recurring billing (cron jobs), removing manual operations and saving hours each week.",
        "Implemented authentication and security features (magic-link login, OAuth for Google/Facebook) and real-time fraud detection to enforce single-session access.",
        "Led migration of four core repositories from Angular v14 to v19, standardizing architecture and adding full RTL/LTR support.",
        "Implemented a modular referral and coupon system to drive acquisition and retention through flexible discount rules and reward tracking.",
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
        "Web-based technical assessment platform featuring code execution, automated evaluation, and server-side processing for candidate submissions.",
      highlights: [
        "Built a full-stack platform supporting MCQ, coding challenges, and open-ended evaluations.",
        "Integrated a C++ code execution api to run user-submitted code, with test case validation, automated scoring, and pass/fail evaluation.",
        "Designed a server-side evaluation pipeline handling submissions, validation, and result aggregation.",
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
      "Full‑stack Systems",
      "API Design",
      "REST APIs",
      "Authentication & Security",
      "Payments Integration",
      "Automation",
      "Data Modeling",
    ],
    backend: ["Node.js", "Express.js", "PostgreSQL", "Knex.js", "MongoDB"],
    frontend: ["Angular", "RxJS", "Angular Material", "SCSS", "Tailwind CSS"],
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
