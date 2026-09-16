import { Router } from "express"
import { cv } from "../src/data/cv.js"

// Portfolio chatbot: answers from cv.js via Groq. See .env.example for config.
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"
const MODELS = process.env.GROQ_MODELS
  ? process.env.GROQ_MODELS.split(",").map((m) => m.trim()).filter(Boolean)
  : ["openai/gpt-oss-20b", "openai/gpt-oss-120b", "qwen/qwen3.8-27b"]

const LIMIT = parseInt(process.env.CHAT_LIMIT || "50", 10) || 50
const WINDOW_MS = parseInt(process.env.CHAT_WINDOW_MS || "900000", 10) || 900000
const hits = new Map()

function checkLimit(ip) {
  const now = Date.now()
  if (hits.size > 5000) {
    for (const [key, e] of hits) {
      if (now - e.start > WINDOW_MS) hits.delete(key)
    }
  }
  const entry = hits.get(ip)
  if (!entry || now - entry.start > WINDOW_MS) {
    hits.set(ip, { count: 1, start: now })
    return true
  }
  entry.count += 1
  return entry.count <= LIMIT
}

const strip = (s) => String(s ?? "").replace(/\*\*/g, "")

function buildContext() {
  const lines = [
    `Name: ${cv.name} — ${cv.title}. Location: ${cv.location}.`,
    `Contact: email ${cv.email}, phone ${cv.phone}, site ${cv.website}, GitHub ${cv.github}, LinkedIn ${cv.linkedin}.`,
    `Summary: ${strip(cv.summary)}`,
    "",
    "Experience:",
    ...cv.experience.map(
      (e) => `- ${e.role} at ${e.company}, ${e.location} (${e.period}). ${e.details.map(strip).join(" ")} Highlights: ${e.highlights.map(strip).join(" | ")}`
    ),
    "",
    "Projects:",
    ...cv.projects.map(
      (p) =>
        `- ${strip(p.name)} (${p.period}). ${strip(p.description)} Highlights: ${p.highlights.map(strip).join(" | ")} Tech: ${p.tech.join(", ")}. Links: ${p.links.map((l) => `${l.label}: ${l.href}`).join(", ")}.`
    ),
    "",
    `Skills: ${[...cv.skills.core, ...cv.skills.backend, ...cv.skills.frontend, ...cv.skills.ai, ...cv.skills.infrastructure, ...cv.skills.other].join(", ")}.`,
    `Education: ${cv.education.map((e) => `${e.degree}, ${e.school}, ${e.location} (${e.period})`).join(" | ")}.`,
    `Certifications: ${cv.certifications.map((c) => c.label).join(" | ")}.`,
    `Languages: ${cv.languages.map((l) => `${l.name} (${l.level})`).join(", ")}.`,
  ]
  return lines.join("\n")
}

const SYSTEM = `You are the helpful assistant on Nadhir Halbouni's personal portfolio site (you are not Nadhir himself). Answer visitor questions using ONLY the facts below. Be concise (2-4 sentences, bullets for lists). Format any links as Markdown [label](https://...) with full URLs. Always close **bold** markers — never leave them unclosed, including inside tables. If the answer is not in these facts, say you don't know and point to the contact page. Never invent jobs, dates, or skills. Never add disclaimers about your sources — no "based on the information provided", "according to my data", or similar. Just answer directly. Neutral tone, third person — refer to Nadhir by name, never as "we".\n\nFACTS:\n${buildContext()}`

const router = Router()

router.post("/", async (req, res) => {
  try {
    if (!process.env.GROQ_API_KEY) {
      return res.status(503).json({ error: "Chat is not configured yet — check back soon." })
    }
    if (!checkLimit(req.ip)) {
      return res.status(429).json({ error: "Too many messages — try again in a bit." })
    }
    console.log(`chat from ${req.ip}`)
    const { messages } = req.body ?? {}
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages[] is required." })
    }
    const history = messages
      .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-8)
      .map((m) => ({ role: m.role, content: m.content.slice(0, 1000) }))
    if (history.length === 0 || history[history.length - 1].role !== "user") {
      return res.status(400).json({ error: "Last message must be from the user." })
    }

    let reply = null
    let lastErr = "all models exhausted"
    for (const model of MODELS) {
      try {
        const resp = await fetch(GROQ_API_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model,
            messages: [{ role: "system", content: SYSTEM }, ...history],
            max_tokens: 400,
            temperature: 0.3,
          }),
        })
        const rl = (h) => resp.headers.get(h) ?? "?"
        console.log(
          `groq ${model}: requests ${rl("x-ratelimit-remaining-requests")}/${rl("x-ratelimit-limit-requests")}, ` +
            `tokens ${rl("x-ratelimit-remaining-tokens")}/${rl("x-ratelimit-limit-tokens")}`
        )
        if (resp.status === 429 || resp.status >= 500) {
          lastErr = `Groq ${resp.status} on ${model}`
          continue
        }
        if (!resp.ok) throw new Error(`Groq ${resp.status} on ${model}`)
        const json = await resp.json()
        reply = json.choices?.[0]?.message?.content?.trim()
        if (reply) break
      } catch (err) {
        lastErr = err.message
        break
      }
    }
    if (!reply) throw new Error(lastErr)
    res.json({ reply })
  } catch (err) {
    console.error(err)
    res.status(502).json({ error: "Chat is unavailable right now — try again later." })
  }
})

export default router
