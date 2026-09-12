import { useEffect, useState } from "react"
import { GitCommitHorizontal, GitFork, GitPullRequest, MessageCircle, PlusCircle, Rocket, Dot } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

const TYPE_ICONS = {
  push: GitCommitHorizontal,
  pr: GitPullRequest,
  issue: Dot,
  comment: MessageCircle,
  create: PlusCircle,
  fork: GitFork,
  release: Rocket,
}

function timeAgo(iso) {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
  if (seconds < 60) return "just now"
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

export default function GitHubActivity() {
  const [state, setState] = useState({ status: "loading", items: [], user: "n3dhir" })

  useEffect(() => {
    let cancelled = false
    fetch("/api/github/activity")
      .then((res) => {
        if (!res.ok) throw new Error("unavailable")
        return res.json()
      })
      .then((data) => {
        if (!cancelled) setState({ status: "ready", items: data.items || [], user: data.user || "n3dhir" })
      })
      .catch(() => {
        if (!cancelled) setState((s) => ({ ...s, status: "error" }))
      })
    return () => {
      cancelled = true
    }
  }, [])

  if (state.status === "error" || (state.status === "ready" && state.items.length === 0)) {
    return (
      <Card className="glass">
        <CardContent className="p-6 text-sm text-muted">
          Recent GitHub activity couldn&apos;t load here — see it live on{" "}
          <a className="text-primary hover:underline" href={`https://github.com/${state.user}`} target="_blank" rel="noreferrer">
            github.com/{state.user}
          </a>
          .
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="glass">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle>Recent activity</CardTitle>
          <a
            className="shrink-0 text-sm whitespace-nowrap text-muted transition hover:text-primary"
            href={`https://github.com/${state.user}`}
            target="_blank"
            rel="noreferrer"
          >
            @{state.user} ↗
          </a>
        </div>
      </CardHeader>
      <CardContent>
        {state.status === "loading" ? (
          <p className="py-4 text-center text-sm text-muted">Loading activity…</p>
        ) : (
          <ul className="divide-y divide-border/60">
            {state.items.map((item) => {
              const Icon = TYPE_ICONS[item.type] || GitCommitHorizontal
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 py-2.5"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-muted transition group-hover:text-primary" />
                    <span className="min-w-0 flex-1 truncate text-sm text-muted transition group-hover:text-foreground">
                      {item.text}
                    </span>
                    <span className="shrink-0 text-xs text-muted">{timeAgo(item.createdAt)}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
