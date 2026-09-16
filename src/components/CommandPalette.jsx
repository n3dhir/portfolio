import { useEffect, useMemo, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search } from "lucide-react"
import { cv } from "../data/cv"

export const PALETTE_EVENT = "open-palette"

function buildEntries() {
  const entries = [
    { label: "Home", hint: "Page", to: "/" },
    { label: "About", hint: "Page", to: "/about" },
    { label: "Experience", hint: "Page", to: "/experience" },
    { label: "Projects", hint: "Page", to: "/projects" },
    { label: "Skills", hint: "Page", to: "/skills" },
    { label: "Education", hint: "Page", to: "/education" },
    { label: "Contact", hint: "Page", to: "/contact" },
    { label: "Resume", hint: "Page", to: "/resume" },
    { label: "Stack", hint: "Page", to: "/stack" },
    { label: "Activity", hint: "Page", to: "/activity" },
  ]
  for (const project of cv.projects) {
    if (project.slug) entries.push({ label: project.name, hint: "Project", to: `/projects/${project.slug}` })
  }
  for (const role of cv.experience) {
    if (role.slug) entries.push({ label: `${role.role} @ ${role.company}`, hint: "Experience", to: `/experience/${role.slug}` })
  }
  return entries
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(0)
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const activeRef = useRef(null)
  const entries = useMemo(buildEntries, [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return entries
    return entries.filter(
      (e) => e.label.toLowerCase().includes(q) || e.hint.toLowerCase().includes(q)
    )
  }, [entries, query])

  useEffect(() => {
    setActive(0)
  }, [query])

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest" })
  }, [active])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      } else if (e.key === "Escape") {
        setOpen(false)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener("keydown", onKey)
    window.addEventListener(PALETTE_EVENT, onOpen)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener(PALETTE_EVENT, onOpen)
    }
  }, [])

  useEffect(() => {
    if (open) {
      setQuery("")
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [open ])

  const go = (to) => {
    setOpen(false)
    navigate(to)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-24"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-label="Command palette"
    >
      <div
        className="glass w-full max-w-lg overflow-hidden rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-border px-4">
          <Search className="h-4 w-4 shrink-0 text-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault()
                setActive((a) => Math.min(a + 1, results.length - 1))
              } else if (e.key === "ArrowUp") {
                e.preventDefault()
                setActive((a) => Math.max(a - 1, 0))
              } else if (e.key === "Enter" && results[active]) {
                go(results[active].to)
              }
            }}
            placeholder="Go to page or project…"
            className="w-full bg-transparent py-3 text-sm text-foreground placeholder:text-muted focus:outline-none"
            aria-label="Search pages and projects"
          />
          <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted">ESC</kbd>
        </div>
        <div className="max-h-72 overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-muted">No matches.</p>
          ) : (
            results.map((entry, i) => (
              <button
                key={entry.to}
                ref={i === active ? activeRef : undefined}
                onClick={() => go(entry.to)}
                onMouseEnter={() => setActive(i)}
                className={`flex w-full items-center justify-between gap-4 rounded-md px-3 py-2 text-left text-sm transition ${
                  i === active ? "bg-white/10 text-foreground" : "text-muted"
                }`}
              >
                <span>{entry.label}</span>
                <span className="text-xs opacity-70">{entry.hint}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
