import { useEffect, useRef, useState } from "react"
import { MessageCircle, Send, X } from "lucide-react"
import { renderRich } from "./richText"

const SUGGESTIONS = [
  "What has he built with AI?",
  "Tell me about Testify",
  "How do I contact him?",
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi — ask me anything about Nadhir's work, projects, or how to reach him." },
  ])
  const [draft, setDraft] = useState("")
  const [busy, setBusy] = useState(false)
  const boxRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, busy, open])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open ])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open ])

  const send = async (text) => {
    const content = (text ?? draft).trim()
    if (!content || busy) return
    const next = [...messages, { role: "user", content: content.slice(0, 1000) }]
    setMessages(next)
    setDraft("")
    setBusy(true)
    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.filter((m) => m.role !== "system").slice(-10) }),
      })
      const json = await resp.json()
      setMessages((m) => [...m, { role: "assistant", content: json.reply || json.error || "Something went wrong." }])
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Chat is unreachable — try again later." }])
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 top-24 z-40 flex flex-col items-end justify-end gap-3 md:mb-20 xl:mb-0">
      {open ? (
      <div className="glass flex min-h-0 w-[calc(100vw-2.5rem)] max-w-lg flex-1 flex-col overflow-hidden rounded-xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="text-sm font-semibold">Ask about Nadhir</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-md p-1 text-muted transition hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div ref={boxRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((m, i) => (
              <p
                key={i}
                className={`whitespace-pre-wrap rounded-lg px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-8 bg-primary/20 text-foreground"
                    : "mr-8 bg-white/5 text-muted"
                }`}
              >
                {m.role === "assistant" ? renderRich(m.content) : m.content}
              </p>
            ))}
            {busy ? <p className="mr-8 rounded-lg bg-white/5 px-3 py-2 text-sm text-muted">…</p> : null}
          </div>
          {messages.length <= 1 ? (
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted transition hover:border-primary hover:text-primary"
                >
                  {s}
                </button>
              ))}
            </div>
          ) : null}
          <form
            className="flex items-center gap-2 border-t border-border px-3 py-2.5"
            onSubmit={(e) => {
              e.preventDefault()
              send()
            }}
          >
            <textarea
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  send()
                }
              }}
              placeholder="Ask something…"
              aria-label="Chat message"
              maxLength={1000}
              rows={2}
              className="max-h-28 w-full resize-none bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
            />
            <button
              type="submit"
              disabled={busy || !draft.trim()}
              aria-label="Send message"
              className="rounded-md p-1.5 text-muted transition hover:text-primary disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
      </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="animate-chat-glow rounded-full border border-primary/50 bg-card p-3.5 text-muted transition hover:border-primary hover:text-primary"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  )
}
