import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { ArrowUpRight } from "lucide-react"

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// Site theme scale: slate empty cell + 4 teal steps (matches --primary).
const SCALE = ["#232b3a", "#134e4a", "#0f766e", "#14b8a6", "#5eead4"]

function monthLabels(weeks) {
  let prevMonth = -1
  return weeks.map((week) => {
    const first = week.contributionDays[0]
    const d = new Date(first.date + "T00:00:00")
    const month = d.getMonth()
    if (month !== prevMonth) {
      prevMonth = month
      return MONTHS[month]
    }
    return ""
  })
}

function formatDay(dateStr) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export default function GitHubCalendar() {
  const [state, setState] = useState({ status: "loading", total: 0, weeks: [], user: "n3dhir" })
  const [tip, setTip] = useState(null) // { text, x, y }

  useEffect(() => {
    let cancelled = false
    fetch("/api/github/calendar")
      .then((res) => {
        if (!res.ok) throw new Error("unavailable")
        return res.json()
      })
      .then((data) => {
        if (!cancelled) setState({ status: "ready", total: data.total || 0, weeks: data.weeks || [], user: data.user || "n3dhir" })
      })
      .catch(() => {
        if (!cancelled) setState((s) => ({ ...s, status: "error" }))
      })
    return () => {
      cancelled = true
    }
  }, [])

  const max = useMemo(
    () => Math.max(1, ...state.weeks.flatMap((w) => w.contributionDays.map((d) => d.contributionCount))),
    [state.weeks]
  )
  const level = (count) => (count === 0 ? 0 : Math.min(4, Math.ceil((count / max) * 4)))
  const labels = useMemo(() => monthLabels(state.weeks), [state.weeks])

  if (state.status === "error") return null

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <h4 className="text-lg font-semibold sm:text-xl">
          {state.status === "loading" ? "Contributions" : `${state.total} contributions in the last year`}
        </h4>
        <a
          className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-sm text-muted transition hover:text-primary"
          href={`https://github.com/${state.user}`}
          target="_blank"
          rel="noreferrer"
        >
          @{state.user} <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
      <div className="mt-2">
        {state.status === "loading" ? (
          <p className="py-4 text-center text-sm text-muted">Loading contributions…</p>
        ) : (
          <>
          <div className="overflow-x-auto pb-1">
            <div className="flex w-max gap-[3px] mx-auto">
              {state.weeks.map((week, i) => (
                <div key={i} className="flex flex-col gap-[3px]">
                  <span className="h-4 text-[10px] leading-4 text-muted">
                    {labels[i]}
                  </span>
                  {week.contributionDays.map((day) => (
                    <span
                      key={day.date}
                      onMouseMove={(ev) =>
                        setTip({
                          text: `${day.contributionCount} contribution${day.contributionCount === 1 ? "" : "s"} on ${formatDay(day.date)}`,
                          x: ev.clientX,
                          y: ev.clientY,
                        })
                      }
                      onMouseLeave={() => setTip(null)}
                      style={{ backgroundColor: SCALE[level(day.contributionCount)] }}
                      className="h-[10px] w-[10px] rounded-[2px] transition-transform hover:scale-125 hover:ring-1 hover:ring-primary"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 flex items-center justify-end gap-1.5 text-[11px] text-muted">
            Less
            {SCALE.map((c) => (
              <span key={c} style={{ backgroundColor: c }} className="h-[10px] w-[10px] rounded-[2px]" />
            ))}
            More
          </div>
          {tip
            ? createPortal(
                <div
                  className="pointer-events-none fixed z-50 rounded-md border border-border bg-popover px-2.5 py-1.5 text-xs whitespace-nowrap text-popover-foreground shadow-lg"
                  style={{ left: tip.x, top: tip.y - 12, transform: "translate(-50%, -100%)" }}
                >
                  {tip.text}
                </div>,
                document.body
              )
            : null}
          </>
        )}
      </div>
    </div>
  )
}
