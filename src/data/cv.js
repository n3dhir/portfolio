export const cv = {
  name: "Nadhir Halbouni",
  title: "Full-Stack Software Engineer",
  location: "Ariana, Tunisia",
  email: "nadhir.halbouni5@gmail.com",
  phone: "+216 50 058 735",
  website: "https://n3dhir.com",
  github: "https://github.com/n3dhir",
  linkedin: "https://www.linkedin.com/in/nadhir-halbouni/",
  summary:
    "Full-stack engineer specializing in data-heavy SaaS systems, backend reliability, and automation. Experienced in building and scaling production systems across multiple repositories, handling real-time features, payments, and growth mechanisms. Strong focus on ownership, system design, and delivering end-to-end solutions from database to user experience. Building LLM-powered apps with agents and RAG.",
  experience: [
    {
      company: "Drivago",
      location: "Ariana, Tunisia",
      role: "Software Engineer",
      slug: "drivago-engineer",
      period: "Sep 2024 – Present",
      // Details: add longer paragraphs here to show them on the role's details page.
      details: [],
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
      slug: "drivago-intern",
      period: "Jul 2024 – Aug 2024",
      // Details: add longer paragraphs here to show them on the role's details page.
      details: [],
      highlights: [
        "Built BI dashboards tracking SaaS metrics (MRR, ARR, churn, ARPU) to support product decisions.",
        "Designed and optimized PostgreSQL queries for retention analysis and cohort tracking.",
        "Developed advanced segmentation and filtering systems for backoffice operations (subscriptions, payments, activity).",
      ],
    },
  ],
  projects: [
    {
      name: "AI Flow — LLM Chat Platform with Agents, RAG & Voice Input",
      slug: "aiflow",
      period: "Aug 2026 – Present",
      description:
        "Full-stack AI assistant pairing a LangGraph tool-calling agent with document-grounded answers and push-to-talk voice input.",
      details: [
        "AI-Flow pairs a FastAPI backend with a React frontend, served as a single deploy: the API and the static bundle run from one process.",
        "The backend runs a LangGraph agent with Postgres checkpointing for conversation state and long-term memory. If a provider fails, requests fall back across Ollama, Gemini, Mistral, and Groq.",
        "The agent has 7 tools: a safe-eval calculator, keyless Open-Meteo weather, Tavily web search, per-thread document search, a clock, and explicit remember/recall memory. Uploads (PDF, DOCX, TXT, MD, PY, CSV) are split into 900/150 chunks, embedded with MiniLM, and retrieved top-4 scoped to the conversation — vectors and checkpoints are fully purged when a conversation is deleted.",
        "The frontend streams over SSE with per-tool start/finish traces that persist and replay on reload. Failures surface as readable messages, drops mid-answer are continued, and generation can be stopped or retried. Voice input runs fully local (browser recording → ffmpeg → whisper-cli) and lands as an editable draft. Auth is JWT with bcrypt, rotating refresh tokens, and per-user conversation isolation.",
      ],
      // Screenshots: drop image files in public/screenshots/aiflow/ and list them here.
      screenshots: [],
      highlights: [
        "Engineered a LangGraph agent with 7 tools (web search, calculator, weather, RAG over uploads, long-term memory), streaming SSE responses with live tool-call progress.",
        "Built a RAG pipeline (PDF/DOCX ingestion, chunking, pgvector similarity search) plus persistent conversation memory backed by a Postgres checkpointer.",
        "Added push-to-talk voice input via a whisper.cpp STT endpoint (ffmpeg normalization, timeout-guarded subprocesses, transcribe-to-draft UX).",
      ],
      tech: ["Python", "FastAPI", "LangGraph", "React", "PostgreSQL + pgvector", "Ollama", "whisper.cpp"],
      links: [
        { label: "Live Demo", href: "https://aiflow.n3dhir.com" },
        { label: "GitHub", href: "https://github.com/n3dhir/AI-Flow" },
      ],
    },
    {
      name: "Buddy — Personal Finance Tracker (Telegram, MCP + Web)",
      slug: "buddy",
      period: "Sep 2026",
      description:
        "Conversational money tracker: log spending by messaging a Telegram bot, ask for summaries in your AI assistant, or check the web UI — one shared backend.",
      details: [
        "Buddy stores everything in one Postgres database (Tunis time, TND by default) and exposes it three ways: chat via MCP tools, a React web UI over a REST API, and a Telegram bot. All three call the same tool functions behind the same zod schemas.",
        "Time handling uses Intl with Africa/Tunis rather than a fixed offset, and categories and currencies stay free-form and normalized. Auth is per-user rows with 30-day session JWTs, bcrypt hashing, and revocable scoped API tokens (buddy_-prefixed, sha256 at rest) that also work as MCP credentials — revoking a token automatically unlinks the Telegram chats using it.",
        "The Telegram bot supports expense, income, summary, breakdown, list, and delete commands with inline Undo buttons. Optional Ollama parsing classifies free text and voice notes into intents, but reads answer instantly while writes always wait for a Confirm press (intents expire after 5 minutes). Voice notes are capped at 120 seconds and transcribed locally with whisper.cpp. The dashboard has period pills, a net hero, CSS category bars, entry filters with edit/delete dialogs, and a tokens page with live scope editing — and no live sync by design, you refresh to see chat-made changes.",
      ],
      // Screenshots: drop image files in public/screenshots/buddy/ and list them here.
      screenshots: [
        { src: "/screenshots/buddy/dashboard.png", caption: "Dashboard — net hero, category breakdown, and entries" },
      ],
      highlights: [
        "Built a Telegram bot that logs expenses from everyday messages and voice notes, with human-in-the-loop confirmation before anything is saved.",
        "Connected the same backend to AI assistants via MCP (Claude, opencode) and to a web UI, so totals and spending history stay consistent everywhere.",
        "Designed private per-user accounts with revocable access tokens.",
      ],
      tech: ["TypeScript", "Node.js", "Express", "MCP SDK", "PostgreSQL", "JWT", "whisper.cpp", "Telegram Bot API"],
      links: [
        { label: "Live Demo", href: "https://buddy.n3dhir.com" },
        { label: "GitHub", href: "https://github.com/n3dhir/Buddy" },
        { label: "Telegram Bot", href: "https://t.me/buddy_n3dhir_bot" },
      ],
    },
    {
      name: "Testify — Technical Assessment Platform",
      slug: "testify",
      period: "Nov 2023 – Jun 2024",
      description:
        "Web-based technical assessment platform featuring code execution, automated evaluation, and backend processing for candidate submissions.",
      details: [
        "Testify supports MCQ, coding challenges, and open-ended evaluations in one platform.",
        "Candidate C++ code runs through an execution API with test-case validation, automated scoring, and pass/fail evaluation. A server-side pipeline handles submissions, validation, and result aggregation.",
      ],
      // Screenshots: drop image files in public/screenshots/testify/ and list them here.
      screenshots: [],
      highlights: [
        "Built a full-stack platform supporting MCQ, coding challenges, and open-ended evaluations.",
        "Integrated a C++ code execution api to run user-submitted code, with test case validation, automated scoring, and pass/fail evaluation.",
        "Designed backend evaluation pipeline handling submissions, validation, and result aggregation.",
      ],
      tech: ["Angular", "Node.js", "Express.js", "MongoDB", "ACE Editor"],
      links: [
        { label: "Live Demo", href: "https://testify.n3dhir.com" },
        { label: "Demo Video", href: "https://drive.google.com/file/d/11PjLQudEmKk0j9YbJ3aseVqYhDcJsMyp" },
      ],
    },
  ],
  contributions: [
    {
      repo: "EvAnLyOrG/lumo-assistant",
      kind: "Issue discussion",
      status: "Resolved",
      title: "Diagnosed “Chat does not work at all” (#3)",
      description:
        "Traced the 404 to the retired endpoint plus two compounding bugs, and gave the reporter build-from-branch instructions that got them working.",
      href: "https://github.com/EvAnLyOrG/lumo-assistant/issues/3",
    },
    {
      repo: "tashfeenahmed/freellmapi",
      kind: "Pull request",
      status: "Merged",
      title: "Keep the Playground scroll inside its transcript pane, not on the whole page",
      description:
        "Root-caused a min-h-screen flexbox issue where long conversations scrolled the whole page instead of the transcript pane.",
      href: "https://github.com/tashfeenahmed/freellmapi/pull/1037",
    },
    {
      repo: "harleen05/sidequest-hub",
      kind: "Pull request",
      status: "Merged",
      title: "App shell with fixed header and proper scroll handling (#38)",
      description:
        "Reimplemented the layout as a fixed-header app shell with scroll containment, closing his own issue #39.",
      href: "https://github.com/harleen05/sidequest-hub/pull/38",
    },
    {
      repo: "Shadow1363/Terminal",
      kind: "Pull request",
      status: "Merged",
      title: "Command autocomplete (#2)",
      description: "Added tab-autocomplete to the terminal's command input.",
      href: "https://github.com/Shadow1363/Terminal/pull/2",
    },
    {
      repo: "Shadow1363/Terminal",
      kind: "Pull request",
      status: "Merged",
      title: "History navigation with up/down arrows (#1)",
      description: "Added up/down arrow navigation through previously entered commands.",
      href: "https://github.com/Shadow1363/Terminal/pull/1",
    },
    {
      repo: "LeetCode-Feedback/LeetCode-Feedback",
      kind: "Issue",
      status: "Closed",
      title: "Missing test case — Validate Binary Search Tree (#18860)",
      description: "Reported a missing test case for problem 98.",
      href: "https://github.com/LeetCode-Feedback/LeetCode-Feedback/issues/18860",
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
    backend: ["Node.js", "Express.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "pgvector", "Knex.js", "MongoDB"],
    frontend: ["Angular (v14–v19)", "React", "RxJS", "Angular Material", "SCSS", "Tailwind CSS"],
    ai: ["LangGraph", "LangChain", "RAG", "LLM Integration", "Ollama", "whisper.cpp", "MCP"],
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
    {
      label: "SQL (Advanced) Certificate — HackerRank (Jun 2023)",
      href: "https://www.hackerrank.com/certificates/97d6eca1123c",
    },
    {
      label: "Problem Solving (Intermediate) Certificate — HackerRank (Aug 2022)",
      href: "https://www.hackerrank.com/certificates/8b5710611d39",
    },
    {
      label: "Relational Database — freeCodeCamp (Jun 2023)",
      href: "https://www.freecodecamp.org/certification/fcc2c11e92e-2465-4367-b6ad-009d2358d741/relational-database-v8",
    },
    {
      label: "JavaScript Algorithms and Data Structures — freeCodeCamp (Jun 2023)",
      href: "https://www.freecodecamp.org/certification/fcc2c11e92e-2465-4367-b6ad-009d2358d741/javascript-algorithms-and-data-structures",
    },
    {
      label: "Algorithmic Toolbox — Coursera (May 2022)",
      href: "https://www.coursera.org/account/accomplishments/certificate/JH9V4JYRA5HD",
    },
    {
      label: "Meta Hacker Cup 2022 (Sep 2022)",
      href: "https://www.facebook.com/codingcompetitions/hacker-cup/2022/certificate/569828177393035",
    },
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "French", level: "Professional" },
    { name: "German", level: "Basic" },
  ],
}
