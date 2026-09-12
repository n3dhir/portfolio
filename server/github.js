import { Router } from "express"

// GitHub activity proxy — caches public events server-side so the page
// never hits browser rate limits. Optional GITHUB_TOKEN raises the quota.
const GITHUB_USER = process.env.GITHUB_USER || "n3dhir"
const cache = { data: null, ts: 0 }
const TTL_MS = 5 * 60 * 1000

function githubHeaders() {
  const headers = { "User-Agent": "portfolio-site", Accept: "application/vnd.github+json" }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  return headers
}

function summarizeEvent(e) {
  const repo = e.repo?.name || ""
  const repoUrl = `https://github.com/${repo}`
  const createdAt = e.created_at
  const id = String(e.id)
  switch (e.type) {
    case "PushEvent": {
      const commits = e.payload?.commits?.length ?? e.payload?.size ?? 0
      if (commits === 0) return null
      return { id, type: "push", text: `Pushed ${commits} commit${commits === 1 ? "" : "s"} to ${repo}`, href: repoUrl, createdAt }
    }
    case "PullRequestEvent": {
      const pr = e.payload?.pull_request || {}
      const action = e.payload?.action === "closed" ? (pr.merged ? "merged" : "closed") : (e.payload?.action || "updated")
      const num = pr.number ? ` #${pr.number}` : ""
      const href = pr.html_url || (pr.number ? `${repoUrl}/pull/${pr.number}` : repoUrl)
      return { id, type: "pr", text: `${action[0].toUpperCase() + action.slice(1)} PR${num} in ${repo}`, href, createdAt }
    }
    case "IssuesEvent": {
      const issue = e.payload?.issue || {}
      const num = issue.number ? ` #${issue.number}` : ""
      const href = issue.html_url || (issue.number ? `${repoUrl}/issues/${issue.number}` : repoUrl)
      return { id, type: "issue", text: `${e.payload?.action || "updated"} issue${num} in ${repo}`, href, createdAt }
    }
    case "IssueCommentEvent": {
      const issue = e.payload?.issue || {}
      const comment = e.payload?.comment || {}
      const href = comment.html_url || issue.html_url || (issue.number ? `${repoUrl}/issues/${issue.number}` : repoUrl)
      return { id, type: "comment", text: `Commented on #${issue.number || ""} in ${repo}`, href, createdAt }
    }
    case "CreateEvent": {
      const ref = e.payload?.ref ? ` ${e.payload.ref}` : ""
      return { id, type: "create", text: `Created ${e.payload?.ref_type || "something"}${ref} in ${repo}`, href: repoUrl, createdAt }
    }
    case "ForkEvent": {
      const forkee = e.payload?.forkee?.full_name || repo
      return { id, type: "fork", text: `Forked ${repo}`, href: `https://github.com/${forkee}`, createdAt }
    }
    case "ReleaseEvent": {
      const tag = e.payload?.release?.tag_name ? ` ${e.payload.release.tag_name}` : ""
      return { id, type: "release", text: `Released${tag} in ${repo}`, href: e.payload?.release?.html_url || repoUrl, createdAt }
    }
    default:
      return null
  }
}

const router = Router()

const calendarCache = { data: null, ts: 0 }
const CALENDAR_TTL_MS = 6 * 60 * 60 * 1000

// Contribution calendar (the green squares). Only available via GraphQL,
// so this route requires GITHUB_TOKEN to be set.
router.get("/calendar", async (req, res) => {
  try {
    if (!process.env.GITHUB_TOKEN) {
      return res.status(503).json({ error: "Contribution calendar needs a GitHub token." })
    }
    if (calendarCache.data && Date.now() - calendarCache.ts < CALENDAR_TTL_MS) {
      return res.json(calendarCache.data)
    }
    const resp = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: githubHeaders(),
      body: JSON.stringify({
        query: `query($login: String!) {
          user(login: $login) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays { date contributionCount color }
                }
              }
            }
          }
        }`,
        variables: { login: GITHUB_USER },
      }),
    })
    if (!resp.ok) throw new Error(`GitHub GraphQL ${resp.status}`)
    const json = await resp.json()
    if (json.errors) throw new Error(json.errors[0]?.message || "GraphQL error")
    const calendar = json.data.user.contributionsCollection.contributionCalendar
    const payload = { user: GITHUB_USER, total: calendar.totalContributions, weeks: calendar.weeks }
    calendarCache.data = payload
    calendarCache.ts = Date.now()
    res.json(payload)
  } catch (err) {
    res.status(502).json({ error: "Contribution calendar unavailable right now." })
  }
})

router.get("/activity", async (req, res) => {
  try {
    if (cache.data && Date.now() - cache.ts < TTL_MS) {
      return res.json(cache.data)
    }
    const resp = await fetch(`https://api.github.com/users/${GITHUB_USER}/events/public?per_page=60`, {
      headers: githubHeaders(),
    })
    if (!resp.ok) throw new Error(`GitHub API ${resp.status}`)
    const events = await resp.json()
    const items = events.map(summarizeEvent).filter(Boolean).slice(0, 10)
    const payload = { user: GITHUB_USER, items }
    cache.data = payload
    cache.ts = Date.now()
    res.json(payload)
  } catch (err) {
    res.status(502).json({ error: "GitHub activity unavailable right now." })
  }
})

export default router
