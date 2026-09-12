import { cv } from "../data/cv"
import { StackPill } from "../components/StackPills"

// Skill label → icon (brand SVG path or lucide name). Falls back to text-only.
export const SKILL_ICONS = {
  // Core
  "Backend Systems": "Server",
  "API Design": "Braces",
  "REST APIs": "ArrowLeftRight",
  "Authentication & Security": "ShieldCheck",
  "Payments Integration": "CreditCard",
  Automation: "Cog",
  "Data Modeling": "Database",
  // Backend & Data
  "Node.js": "/icons/nodejs.svg",
  "Express.js": "/icons/express.svg",
  TypeScript: "/icons/typescript.svg",
  Python: "/icons/python.svg",
  FastAPI: "/icons/fastapi.svg",
  PostgreSQL: "/icons/postgresql.svg",
  pgvector: "Database",
  "Knex.js": "/icons/knexjs.svg",
  MongoDB: "/icons/mongodb.svg",
  // Frontend
  "Angular": "/icons/angular.svg",
  React: "/icons/react.svg",
  RxJS: "/icons/rxjs.svg",
  "Angular Material": "/icons/angularmaterial.svg",
  SCSS: "/icons/sass.svg",
  "Tailwind CSS": "/icons/tailwindcss.svg",
  // AI / LLM
  LangGraph: "Workflow",
  LangChain: "/icons/langchain.svg",
  RAG: "DatabaseZap",
  "LLM Integration": "MessagesSquare",
  Ollama: "/icons/ollama.svg",
  "whisper.cpp": "Mic",
  MCP: "Plug",
  // Infrastructure & Tools
  Linux: "Terminal",
  Nginx: "/icons/nginx.svg",
  PM2: "/icons/pm2.svg",
  "Cron Jobs": "Clock",
  ngrok: "/icons/ngrok.svg",
  "Git/GitHub": "Github",
  // Other
  SSR: "Server",
  SSG: "Files",
  "SEO Optimization": "Search",
  "OAuth (Google/Facebook)": "/icons/oauth.svg",
}

const groups = [
  { title: "Core Strengths", items: cv.skills.core },
  { title: "Backend & Data", items: cv.skills.backend },
  { title: "Frontend", items: cv.skills.frontend },
  { title: "AI / LLM", items: cv.skills.ai },
  { title: "Infrastructure & Tools", items: cv.skills.infrastructure },
  { title: "Other", items: cv.skills.other },
]

export default function Skills() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">Skills</h2>
        <p className="mt-3 text-muted">Technologies and practices I use to build reliable, maintainable systems.</p>
      </div>
      <div className="divide-y divide-border/60 border-y border-border/60">
        {groups.map((group, gi) => (
          <div key={group.title} className="grid gap-4 py-6 md:grid-cols-[180px_1fr] md:gap-6">
            <p className="text-sm text-muted">
              <span className="mr-2 text-primary">{String(gi + 1).padStart(2, "0")}</span>
              {group.title}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <StackPill key={`${group.title}-${skill}`} icon={SKILL_ICONS[skill]} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
