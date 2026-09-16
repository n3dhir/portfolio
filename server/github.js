import { Router } from "express"

// GitHub proxy — caches server-side so the page never hits browser rate
// limits. Optional GITHUB_TOKEN raises the quota.
const GITHUB_USER = process.env.GITHUB_USER || "n3dhir"

function githubHeaders() {
  const headers = { "User-Agent": "portfolio-site", Accept: "application/vnd.github+json" }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  return headers
}

const router = Router()

const calendarCache = { data: null, ts: 0 }
const CALENDAR_TTL_MS = 5 * 60 * 1000

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

export default router
