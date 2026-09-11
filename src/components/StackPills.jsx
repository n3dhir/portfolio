import {
  ArrowLeftRight,
  Bot,
  Braces,
  Clock,
  Cog,
  CreditCard,
  Database,
  DatabaseZap,
  FileCode2,
  Files,
  GitBranch,
  Github,
  MessagesSquare,
  Mic,
  Mail,
  Monitor,
  Package,
  Plug,
  Puzzle,
  Search,
  Server,
  ShieldCheck,
  Sparkle,
  Sparkles,
  SquareTerminal,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react"

const LUCIDE_ICONS = {
  ArrowLeftRight,
  Bot,
  Braces,
  Clock,
  Cog,
  CreditCard,
  Database,
  DatabaseZap,
  FileCode2,
  Files,
  GitBranch,
  Github,
  MessagesSquare,
  Mic,
  Mail,
  Monitor,
  Package,
  Plug,
  Puzzle,
  Search,
  Server,
  ShieldCheck,
  Sparkle,
  Sparkles,
  SquareTerminal,
  Terminal,
  Workflow,
  Zap,
}

// Monochrome-black SVGs that need inversion to white on dark pills.
const INVERT = new Set(["/icons/ollama.svg", "/icons/langchain.svg", "/icons/express.svg", "/icons/posthog.svg", "/icons/googlecalendar.svg"])

export function ItemIcon({ icon }) {
  if (!icon) return null
  if (icon.startsWith("/")) {
    return (
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className={`h-4 w-4 shrink-0 ${INVERT.has(icon) ? "invert" : ""}`}
      />
    )
  }
  const LucideIcon = LUCIDE_ICONS[icon]
  if (!LucideIcon) return null
  return <LucideIcon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
}

export function StackPill({ icon, label }) {
  return (
    <span className="inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-glow">
      <ItemIcon icon={icon} />
      {label}
    </span>
  )
}
