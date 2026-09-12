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
      logo: "/logos/drivago.png",
      period: "Sep 2024 – Present",
      details: [
        "Full-stack engineer across **10+ repositories** powering Drivago's driving-school SaaS: agency management, candidate training, the admin backoffice, landing pages, a partners dashboard, and real-time services. **~2,600 commits** since September 2024, shipping to production continuously across Angular frontends and Express + Knex + PostgreSQL backends.",
        "The flagship system is the **cross-repository training platform**: candidates book theory exams, study video lessons with watch-progress tracking, and get assigned to exam centers and pickup points — while agencies run code sessions from workstations under a **fraud v2** system enforcing single-session access. Around it I built the full **payment lifecycle** (Konnect + Flouci with abstracted provider logic, renewals, plan upgrades, receipts) and growth systems (referrals, per-service coupons).",
        "Ownership extended to the platform itself: **Angular 14 → 19 migration** with full RTL/LTR support, production deployments on **Nginx + PM2**, Knex pool tuning and migration discipline, CI pipelines, and incident response for **500+ client agencies**.",
      ],
      highlights: [
        "Designed and delivered a **cross-repository training platform** spanning agency, candidate, and real-time apps — exams, video progress, exam centers, and device-linked workstation sessions with **fraud v2** single-session enforcement, across a multi-tenant **Drivago/Autoplus** split.",
        "Integrated **Konnect and Flouci** payment gateways behind abstracted provider logic; implemented renewals, plan upgrades with correct receipts, fee-aware amount calculations, and automated subscription billing.",
        "Migrated live subscriptions onto new **2026 pricing** — replacing hardcoded plan IDs with **dynamic plan resolution** and retiring legacy plans without breaking active subscribers.",
        "Built growth systems: **referral** flows, student **contests**, and **per-service coupons**, plus exam booking with health status and candidate ID uploads.",
        "Built an **AI blog pipeline** (OpenAI, Gemini, Anthropic via OpenRouter) generating bilingual FR/AR posts as structured JSON — slugs, TOC, FAQ, SEO — published from the admin backoffice straight to the Drivago website, saving the business team hours per article. Hardened the site itself with **SEO fundamentals** (sitemaps, hreflang, canonical URLs) and analytics/tracking integration.",
        "Implemented authentication and access control (**magic-link login, OAuth** for Google/Facebook, email confirmation, platform-based Drivago/Autoplus access) and real-time fraud detection.",
        "Led migration of core repositories from **Angular 14 to 19** (standalone components, CSS refactor waves) with full **RTL/LTR** support.",
        "Led production incident response for **500+ client agencies**, introducing reproducible debugging workflows that reduced mean time to resolution.",
        "Managed production deployments on Linux using **Nginx and PM2**, tuned Knex connection pools (100 → 20), and kept CI pipelines green across services.",
        "Engineered **automation** for **scraping, backups, notifications**, and **recurring billing** (cron jobs), plus ops monitoring (**disk-usage alerts to Slack**) — removing manual operations and saving hours each week.",
      ],
      impact: [
        "Unlocked **blog publishing** for the business team: from no publishing capability to **one-click deploy** — either generate a structured post from a topic via the LLM pipeline, or feed in unstructured text and get back a formatted, deployment-ready article.",
        "Removed billing busywork: **automated reconciliation** and in-place cashout editing replaced manual invoice chasing.",
        "Contained access abuse: **fraud v2** with single-session enforcement stopped concurrent workstation sessions.",
        "**Zero-breakage** 2026 pricing migration: legacy plans retired with live subscribers untouched.",
      ],
      tech: ["Angular", "Express.js", "Knex.js", "PostgreSQL", "JWT", "Nginx", "PM2", "Cron Jobs"],
    },
    {
      company: "Drivago",
      location: "Ariana, Tunisia",
      role: "Software Engineer Intern",
      slug: "drivago-intern",
      logo: "/logos/drivago.png",
      period: "Jul 2024 – Aug 2024",
      details: [
        "Two-month internship on Drivago's **administrator backoffice** — the internal console running agencies, subscriptions, billing, and cashouts. Full-stack work across both repositories (**Angular** frontend, **Express + Knex + PostgreSQL** backend), shipped to production continuously.",
        "**150+ commits** across financial dashboards, cohort retention, activity monitoring, and billing operations — plus the reliability work dashboards need: global filters, loaders, and aggregation fixes. Details below.",
      ],
      highlights: [
        "Built the admin **Financials dashboard**: **MRR, ARR, ARPU**, and subscriptions-evolution graphs with taxed/untaxed switching, plus invoicing, cash-in, and invoice-charge tracking.",
        "Implemented **cohort retention analysis** with per-column sums, totals, and MRR filters; fixed contraction/expansion accounting and refactored the backend into one function serving cohort data and agency lists.",
        "Created the **agencies activity page from scratch**: session-usage tracking, users/accounts day-activity stats, expiry and inactivity filters, sorting, and sticky headers.",
        "Extended **agency billing** with in-place cashout editing (status, means of payment, executed_at), date/status/type filters, and service purchases in transaction history.",
        "Hardened dashboard reliability: **global date filters** replacing per-card ones, loaders on stat cards, churn card, and calendar stats.",
      ],
      tech: ["Angular", "Angular Material", "ApexCharts", "Express.js", "Knex.js", "PostgreSQL"],
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
    frontend: ["Angular", "React", "RxJS", "Angular Material", "SCSS", "Tailwind CSS"],
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
  versions: [
    {
      version: "v1",
      note: "Original portfolio site (May 2026)",
      href: "https://v1.n3dhir.com",
    },
  ],
  uses: [
    {
      title: "Daily driver",
      items: [
        { label: "Pop!_OS 22.04", icon: "Monitor", desc: "Daily operating system", href: "https://pop.system76.com" },
        { label: "VS Code (Tokyo Night, stock font)", icon: "/icons/vscode.svg", desc: "Main editor", href: "https://code.visualstudio.com" },
        { label: "Firefox", icon: "/icons/firefox.svg", desc: "Primary browser", href: "https://www.firefox.com" },
        { label: "Konsole", icon: "Terminal", desc: "Terminal emulator", href: "https://apps.kde.org/konsole" },
      ],
    },
    {
      title: "VS Code extensions",
      items: [
        { label: "Thunder Client", icon: "/icons/ext-thunderclient.png", desc: "API testing without leaving the editor", href: "https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client" },
        { label: "Live Server", icon: "/icons/ext-liveserver.png", desc: "Static preview while building", href: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.liveserver" },
        { label: "Excalidraw", icon: "/icons/ext-excalidraw.png", desc: "Diagrams and whiteboarding", href: "https://marketplace.visualstudio.com/items?itemName=pomdtr.excalidraw-editor" },
        { label: "Markdown Preview Enhanced", icon: "/icons/ext-mdpreview.png", desc: "Docs preview", href: "https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced" },
        { label: "Markdown Mermaid", icon: "/icons/ext-mermaid.png", desc: "Diagrams as code", href: "https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid" },
        { label: "Material Icon Theme", icon: "/icons/ext-materialicons.png", desc: "File icons", href: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme" },
        { label: "opencode", icon: "Puzzle", desc: "AI agent in the editor", href: "https://marketplace.visualstudio.com/items?itemName=sst-dev.opencode" },
        { label: "Cline", icon: "/icons/ext-cline.png", desc: "AI agent in the editor", href: "https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev" },
        { label: "GitHub Pull Requests", icon: "/icons/ext-ghpr.png", desc: "Reviews without opening the browser", href: "https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github" },
        { label: "Remote SSH", icon: "/icons/ext-remotessh.png", desc: "Editing directly on servers", href: "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh" },
      ],
    },
    {
      title: "AI assistants",
      items: [
        { label: "GitHub Copilot + Copilot Chat", icon: "Sparkles", desc: "Inline completions and chat", href: "https://github.com/features/copilot" },
        { label: "Claude Code", icon: "Bot", desc: "Terminal agent for big changes", href: "https://docs.anthropic.com/en/docs/claude-code" },
        { label: "Kilo Code", icon: "Zap", desc: "Terminal agent", href: "https://kilocode.ai" },
        { label: "opencode", icon: "SquareTerminal", desc: "Terminal agent", href: "https://opencode.ai" },
        { label: "Gemini CLI", icon: "Sparkle", desc: "Terminal agent, installed globally", href: "https://github.com/google-gemini/gemini-cli" },
        { label: "Codex CLI", icon: "SquareTerminal", desc: "Terminal agent, installed globally", href: "https://github.com/openai/codex" },
      ],
    },
    {
      title: "Data + containers",
      items: [
        { label: "PostgreSQL 18 + psql", icon: "/icons/postgresql.svg", desc: "Primary database, administered from the CLI", href: "https://www.postgresql.org" },
        { label: "SQLite", icon: "/icons/sqlite.svg", desc: "Local dev databases", href: "https://sqlite.org" },
        { label: "Database Client for PostgreSQL", icon: "Database", desc: "DB GUI inside the editor", href: "https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-database-client2" },
        { label: "Docker", icon: "/icons/docker.svg", desc: "Containers for services and experiments", href: "https://www.docker.com" },
      ],
    },
    {
      title: "Web toolchain",
      items: [
        { label: "Vite", icon: "/icons/vitejs.svg", desc: "Build tool for every frontend", href: "https://vite.dev" },
        { label: "pnpm", icon: "Package", desc: "Package manager", href: "https://pnpm.io" },
        { label: "Angular CLI", icon: "/icons/angular.svg", desc: "Scaffolding and builds, installed globally", href: "https://angular.dev" },
        { label: "ESLint", icon: "/icons/eslint.svg", desc: "Linting", href: "https://eslint.org" },
        { label: "GitLens + git-graph", icon: "GitBranch", desc: "Blame and history in the editor", href: "https://www.gitkraken.com/gitlens" },
        { label: "gh CLI", icon: "Github", desc: "PRs and repos from the terminal", href: "https://cli.github.com" },
      ],
    },
    {
      title: "Testing",
      items: [
        { label: "Playwright", icon: "/icons/playwright.svg", desc: "E2E tests (MCP config in the editor)", href: "https://playwright.dev" },
        { label: "Cypress", icon: "/icons/cypressio.svg", desc: "E2E tests", href: "https://cypress.io" },
        { label: "Postman", icon: "/icons/postman.svg", desc: "API testing (config on this machine)", href: "https://www.postman.com" },
      ],
    },
    {
      title: "Work",
      items: [
        { label: "Jira", icon: "/icons/jira.svg", desc: "Issue tracking and workflow", href: "https://www.atlassian.com/software/jira" },
        { label: "Slack", icon: "/icons/slack.svg", desc: "Team communication", href: "https://slack.com" },
        { label: "Gmail", icon: "Mail", desc: "Email", href: "https://mail.google.com" },
        { label: "Google Calendar", icon: "/icons/googlecalendar.svg", desc: "Scheduling", href: "https://calendar.google.com" },
        { label: "GitHub Actions", icon: "/icons/githubactions.svg", desc: "CI for my repos", href: "https://docs.github.com/actions" },
        { label: "n8n", icon: "Workflow", desc: "Workflow automation, installed globally", href: "https://n8n.io" },
        { label: "Cloudflare", icon: "/icons/cloudflare.svg", desc: "DNS, proxying, and TLS for my domains", href: "https://www.cloudflare.com" },
      ],
    },
    {
      title: "Analytics",
      items: [
        { label: "PostHog", icon: "/icons/posthog.svg", desc: "Product analytics on AI-Flow", href: "https://posthog.com" },
      ],
    },
  ],
}
