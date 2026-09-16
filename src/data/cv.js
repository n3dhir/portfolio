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
    "Full-stack software engineer with 2 years building and scaling **production SaaS systems**, from database to user experience. Strong on backend reliability, system design, and ownership. Now focused on **AI engineering** — taking LLM-powered applications (**agents, RAG, automation**) from idea to deployed, usable products.",
  experience: [
    {
      company: "Drivago",
      location: "Ariana, Tunisia",
      role: "Software Engineer",
      slug: "drivago-engineer",
      logo: "/logos/drivago.png",
      period: "Sep 2024 – Present",
      details: [
        "Full-stack engineer across **10+ repositories** powering Drivago's driving-school SaaS: agency management, student training, the admin backoffice, landing pages, a partners dashboard, and real-time services. **~2,650 commits** since September 2024, shipping to production continuously across Angular frontends and Express + Knex + PostgreSQL backends.",
        "The flagship system is the **cross-repository training platform**: students book theory exams, study lessons, and get placed at exam centers. Around it I built the full **payment lifecycle** (two Tunisian providers, Konnect and Flouci, behind one abstraction — renewals, plan upgrades, receipts) and growth systems (referrals, per-service coupons).",
        "Ownership extended to the platform itself: **Angular 14 → 19 migration** with full RTL/LTR support, production deployments on **Nginx + PM2**, Knex pool tuning, database migrations, CI pipelines, and incident response for **500+ client agencies**.",
      ],
      highlights: [
        "Designed and built a cross-repository training platform spanning 7 repos, securing exams, lessons, and user sessions with anti-fraud enforcement.",
        "Integrated **Konnect and Flouci** (Tunisian payment providers) behind one provider abstraction; implemented renewals, plan upgrades with correct receipts, fee-aware billing, and automated subscriptions.",
        "Migrated live subscriptions onto new **2026 pricing** — replacing hardcoded plan IDs with **dynamic plan resolution** and retiring legacy plans without breaking active subscribers.",
        "Built growth systems: **referral** flows, student **contests**, and **per-service coupons**, plus exam booking with required document uploads.",
        "Built an **AI blog pipeline** generating bilingual French/Arabic posts — titles, tables of contents, FAQs, SEO metadata — published one-click from the backoffice to the website, saving the content team hours per article. Hardened the site with SEO fundamentals (sitemaps, hreflang, canonical URLs) and analytics.",
        "Implemented authentication and access control (**magic-link login, OAuth** for Google/Facebook, email confirmation, per-brand access control) and real-time fraud detection.",
        "Led migration of core repositories from **Angular 14 to 19** (standalone components) with full **RTL/LTR** support.",
        "Led production incident response for **500+ client agencies**, introducing reproducible debugging workflows that reduced mean time to resolution.",
        "Managed production deployments on Linux using **Nginx and PM2**, tuned Knex connection pools, and kept CI pipelines green across services.",
        "Engineered **automation** for **scraping, backups, notifications**, and **recurring billing** (cron jobs), plus ops monitoring (**disk-usage alerts to Slack**) — removing manual operations and saving hours each week.",
      ],
      impact: [
        "Unlocked **blog publishing** for the business team: from no publishing capability to **one-click deploy** — either generate a structured post from a topic via the LLM pipeline, or feed in unstructured text and get back a formatted, deployment-ready article.",
        "Removed billing busywork: **automated invoice finalization** and in-place payout editing replaced manual invoice chasing.",
        "Contained access abuse with **anti-fraud** session enforcement.",
        "**Zero-downtime** 2026 pricing migration: legacy plans retired with live subscribers untouched.",
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
        "Two-month internship on Drivago's **administrator backoffice** — the internal console running agencies, subscriptions, billing, and payouts. Full-stack work across both repositories (**Angular** frontend, **Express + Knex + PostgreSQL** backend), shipped to production continuously.",
        "**150+ commits** across financial dashboards, cohort retention, activity monitoring, and billing operations — plus the reliability work dashboards need: global filters, loading states, and aggregation fixes. Details below.",
      ],
      highlights: [
        "Built the admin **Financials dashboard**: **MRR, ARR, ARPU**, and subscriptions-evolution graphs with tax-inclusive/exclusive views, plus invoicing, incoming payments, and invoice-charge tracking.",
        "Implemented **cohort retention analysis** with per-column sums, totals, and MRR filters; fixed expansion/contraction accounting and unified the backend to serve cohort data and agency lists from one endpoint.",
        "Created the **agency activity page from scratch**: session-usage tracking, daily user and account activity, subscription-expiry and inactivity filters, sorting, and sticky headers.",
        "Extended **agency billing** with in-place payout editing (status, payment method, execution date), date/status/type filters, and service purchases in the transaction history.",
        "Hardened dashboard reliability: **global date filters** replacing per-card ones, loading states on stat cards, the churn widget, and calendar stats.",
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
        "Full-stack AI assistant pairing a **LangGraph tool-calling agent** with **document-grounded answers** and push-to-talk voice input.",
      details: [
        "AI-Flow pairs a FastAPI backend with a React frontend, served as a single deploy: the API and the static bundle run from one process.",
        "The backend runs a LangGraph agent with **Postgres checkpointing** for conversation state and long-term memory. If a provider fails, requests **fall back** across Ollama, Gemini, Mistral, and Groq.",
        "The agent has 7 tools: a safe-eval calculator, keyless Open-Meteo weather, Tavily web search, per-thread document search, a timezone-aware clock, and explicit remember/recall memory. Uploads (PDF, DOCX, TXT, MD, PY, CSV) are split into 900/150 chunks, embedded with **MiniLM (fully local)**, and retrieved top-4 scoped to the conversation — vectors and checkpoints are **fully purged** when a conversation is deleted.",
        "The frontend streams over **SSE** with per-tool start/finish traces that persist and replay on reload. Failures surface as readable messages, if a connection drops mid-answer the stream picks up where it left off, and generation can be stopped or retried. Voice input runs **fully local** (browser recording → ffmpeg → whisper-cli) and lands as an editable draft. Auth is JWT with bcrypt, rotating refresh tokens, and per-user conversation isolation.",
      ],
      // Screenshots: drop image files in public/screenshots/aiflow/ and list them here.
      screenshots: [],
      demoVideo: {
        src: "/videos/aiflow-demo.mp4",
        poster: "/videos/aiflow-demo-poster.jpg",
        caption: "Full walkthrough — chat, tools, documents, memory, and voice input",
      },
      highlights: [
        "Engineered a **LangGraph agent** with 7 tools (web search, calculator, weather, RAG over uploads, long-term memory), streaming SSE responses with live tool-call progress.",
        "Built a **RAG pipeline** (PDF/DOCX ingestion, chunking, pgvector similarity search) plus persistent conversation memory backed by a Postgres checkpointer.",
        "Added push-to-talk **voice input** via a whisper.cpp STT endpoint (ffmpeg normalization, timeout-guarded subprocesses, transcribe-to-draft UX).",
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
        "Conversational money tracker: log spending by messaging a **Telegram bot**, ask for summaries in your **AI assistant**, or check the **web UI** — one shared backend.",
      details: [
        "Buddy stores everything in one Postgres database (Tunis time, TND by default) and exposes it three ways: chat via MCP tools, a React web UI over a REST API, and a Telegram bot. All three call the **same tool functions** behind the **same zod schemas**.",
        "Time handling uses Intl with Africa/Tunis rather than a fixed offset, and categories and currencies stay free-form and normalized. Auth is per-user rows with 30-day session JWTs, bcrypt hashing, and **revocable scoped API tokens** (buddy_-prefixed, sha256 at rest) that also work as MCP credentials — revoking a token **automatically unlinks** the Telegram chats using it.",
        "The Telegram bot supports expense, income, summary, breakdown, list, and delete commands with inline Undo buttons. Optional Ollama parsing classifies free text and voice notes into intents, but the model **never touches the database** — it only proposes, and validated code plus your **Confirm** tap executes. Reads answer instantly while writes always wait for confirmation (intents expire after 5 minutes). Voice notes up to 2 minutes, transcribed locally with whisper.cpp. The dashboard has period pills, a net hero, CSS category bars, entry filters with edit/delete dialogs, and a tokens page with live scope editing.",
      ],
      // Screenshots: drop image files in public/screenshots/buddy/ and list them here.
      screenshots: [],
      demoVideo: {
        src: "/videos/buddy-demo.mp4",
        poster: "/videos/buddy-demo-poster.jpg",
        caption: "Full walkthrough — Telegram bot, MCP, and web dashboard",
      },
      highlights: [
        "Built a Telegram bot that logs expenses from everyday messages and voice notes, with **human-in-the-loop confirmation** before anything is saved.",
        "Connected the same backend to AI assistants via **MCP** (Claude, opencode) and to a web UI, so totals and spending history stay consistent everywhere.",
        "Designed private per-user accounts with **revocable access tokens**.",
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
        "Hiring-assessment platform for developers: employers build tests from a **question bank**, invite candidates by email, and get **auto-graded results** — MCQ, C++ coding, and short-text questions in one timed flow.",
      details: [
        "Employers assemble tests from a shared question bank — MCQ with per-option scoring, C++ tasks with public practice cases plus **hidden grading cases**, and short-text questions — then invite candidates through **templated email links**.",
        "Candidates get a tutorial, then timed fullscreen questions with per-question countdowns and auto-submit. C++ runs live against practice cases mid-attempt; final grading re-runs every submission against the hidden cases with **whitespace-tolerant comparison** and **partial credit** per case.",
        "The review side aggregates scores with charts, tracks candidates through a waiting → review → passed/rejected pipeline, and allows manual answer overrides with scores re-clamped to the test total. Google sign-in issues your own JWT, and grading answers are **stripped** from every candidate-facing response so solutions never leak.",
      ],
      // Screenshots: drop image files in public/screenshots/testify/ and list them here.
      screenshots: [
        { src: "/screenshots/testify/landing.png", caption: "Landing page" },
        { src: "/screenshots/testify/tests.png", caption: "Test library — assessments with domains, durations, and candidate counts" },
        { src: "/screenshots/testify/builder.png", caption: "Test builder — question bank with points and time budgets" },
        { src: "/screenshots/testify/welcome.png", caption: "Candidate experience — tutorial and timed test entry" },
        { src: "/screenshots/testify/editor.png", caption: "Code execution — compiler output and test case results" },
        { src: "/screenshots/testify/results.png", caption: "Auto-grading — per-question results and scores" },
      ],
      highlights: [
        "Built a **two-sided platform**: employer test builder + question bank on one side, timed candidate experience on the other.",
        "Ran C++ execution through external run APIs — interactive practice runs plus **hidden-case grading** with retry logic and per-case partial credit.",
        "Designed **anti-leak grading**: hidden validation cases, answer-stripping on all candidate reads, manual re-grade with score clamping.",
        "Shipped the **invite pipeline**: templated emails, candidate status tracking, and chart-based result reports.",
      ],
      tech: ["Angular", "Angular Material", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "ACE Editor"],
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
  heroSkills: [
    "Backend Systems",
    "REST APIs",
    "Authentication & Security",
    "Automation",
    "LangGraph",
    "RAG",
    "LLM Integration",
    "MCP",
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
      icon: "/icons/isi.png",
    },
    {
      degree: "Computer Science Degree",
      school: "Higher Institute of Informatics (ISI)",
      location: "Ariana, Tunisia",
      period: "2020 – 2023",
      icon: "/icons/isi.png",
    },
  ],
  certifications: [
    {
      label: "Professional Certificate in n8n — n8n (Sep 2026)",
      href: "https://credentials.learn.n8n.io/credentials/74f3a53a33824e74aceb8aabe657fbbd/",
      icon: "/icons/n8n.svg",
    },
    {
      label: "SQL (Advanced) Certificate — HackerRank (Jun 2023)",
      href: "https://www.hackerrank.com/certificates/97d6eca1123c",
      icon: "/icons/hackerrank.svg",
    },
    {
      label: "Problem Solving (Intermediate) Certificate — HackerRank (Aug 2022)",
      href: "https://www.hackerrank.com/certificates/8b5710611d39",
      icon: "/icons/hackerrank.svg",
    },
    {
      label: "Relational Database — freeCodeCamp (Jun 2023)",
      href: "https://www.freecodecamp.org/certification/fcc2c11e92e-2465-4367-b6ad-009d2358d741/relational-database-v8",
      icon: "/icons/freecodecamp.svg",
    },
    {
      label: "JavaScript Algorithms and Data Structures — freeCodeCamp (Jun 2023)",
      href: "https://www.freecodecamp.org/certification/fcc2c11e92e-2465-4367-b6ad-009d2358d741/javascript-algorithms-and-data-structures",
      icon: "/icons/freecodecamp.svg",
    },
    {
      label: "Algorithmic Toolbox — Coursera (May 2022)",
      href: "https://www.coursera.org/account/accomplishments/certificate/JH9V4JYRA5HD",
      icon: "/icons/coursera.svg",
    },
    {
      label: "Meta Hacker Cup 2022 (Sep 2022)",
      href: "https://www.facebook.com/codingcompetitions/hacker-cup/2022/certificate/569828177393035",
      icon: "/icons/meta.svg",
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
        { label: "Pop!_OS 22.04", icon: "/icons/popos.svg", desc: "Daily operating system", href: "https://pop.system76.com" },
        { label: "VS Code", icon: "/icons/vscode.svg", desc: "Main editor (Tokyo Night, stock font)", href: "https://code.visualstudio.com" },
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
        { label: "Markdown Mermaid", icon: "/icons/ext-mermaid.png", desc: "Diagrams as code", href: "https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid" },
        { label: "Material Icon Theme", icon: "/icons/ext-materialicons.png", desc: "File icons", href: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme" },
        { label: "opencode", icon: "/icons/opencode.svg", desc: "AI agent in the editor", href: "https://marketplace.visualstudio.com/items?itemName=sst-dev.opencode" },
        { label: "Cline", icon: "/icons/ext-cline.png", desc: "AI agent in the editor", href: "https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev" },
        { label: "GitHub Pull Requests", icon: "/icons/ext-ghpr.png", desc: "Reviews without opening the browser", href: "https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github" },
        { label: "Remote SSH", icon: "/icons/ext-remotessh.png", desc: "Editing directly on servers", href: "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh" },
      ],
    },
    {
      title: "AI assistants",
      items: [
        { label: "GitHub Copilot + Copilot Chat", icon: "/icons/githubcopilot.svg", desc: "Inline completions and chat", href: "https://github.com/features/copilot" },
        { label: "Claude Code", icon: "/icons/claude.svg", desc: "Terminal agent for big changes", href: "https://docs.anthropic.com/en/docs/claude-code" },
        { label: "Kilo Code", icon: "/icons/kilocode.svg", desc: "Terminal agent", href: "https://kilocode.ai" },
        { label: "opencode", icon: "/icons/opencode.svg", desc: "Terminal agent", href: "https://opencode.ai" },
        { label: "Gemini CLI", icon: "/icons/googlegemini.svg", desc: "Terminal agent", href: "https://github.com/google-gemini/gemini-cli" },
        { label: "Codex CLI", icon: "/icons/openai.svg", desc: "Terminal agent", href: "https://github.com/openai/codex" },
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
        { label: "pnpm", icon: "/icons/pnpm.svg", desc: "Package manager", href: "https://pnpm.io" },
        { label: "Angular CLI", icon: "/icons/angular.svg", desc: "Scaffolding and builds", href: "https://angular.dev" },
        { label: "ESLint", icon: "/icons/eslint.svg", desc: "Linting", href: "https://eslint.org" },
        { label: "GitLens + git-graph", icon: "/icons/gitlens.svg", desc: "Blame and history in the editor", href: "https://www.gitkraken.com/gitlens" },
        { label: "gh CLI", icon: "/icons/github.svg", desc: "PRs and repos from the terminal", href: "https://cli.github.com" },
      ],
    },
    {
      title: "Testing",
      items: [
        { label: "Playwright", icon: "/icons/playwright.svg", desc: "E2E tests", href: "https://playwright.dev" },
        { label: "Cypress", icon: "/icons/cypressio.svg", desc: "E2E tests", href: "https://cypress.io" },
        { label: "Postman", icon: "/icons/postman.svg", desc: "API testing", href: "https://www.postman.com" },
      ],
    },
    {
      title: "Work",
      items: [
        { label: "Jira", icon: "/icons/jira.svg", desc: "Issue tracking and workflow", href: "https://www.atlassian.com/software/jira" },
        { label: "Slack", icon: "/icons/slack.svg", desc: "Team communication", href: "https://slack.com" },
        { label: "Gmail", icon: "/icons/gmail.svg", desc: "Email", href: "https://mail.google.com" },
        { label: "Google Calendar", icon: "/icons/googlecalendar.svg", desc: "Scheduling", href: "https://calendar.google.com" },
        { label: "GitHub Actions", icon: "/icons/githubactions.svg", desc: "CI for my repos", href: "https://docs.github.com/actions" },
        { label: "n8n", icon: "/icons/n8n.svg", desc: "Workflow automation", href: "https://n8n.io" },
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
