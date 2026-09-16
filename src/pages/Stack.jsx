import { ArrowUpRight } from "lucide-react"
import { cv } from "../data/cv"
import { ItemIcon } from "../components/StackPills"

function UseRow({ item }) {
  const content = (
    <>
      <span className="flex min-w-0 items-center gap-3">
        <ItemIcon icon={item.icon} />
        <p className="truncate text-sm font-medium text-foreground">{item.label}</p>
      </span>
      {item.desc ? <p className="truncate text-sm text-muted sm:min-w-0 sm:flex-1">{item.desc}</p> : null}
      {item.href ? (
        <ArrowUpRight className="absolute right-2 top-2 h-4 w-4 shrink-0 text-muted transition group-hover:text-primary sm:static sm:opacity-0 sm:group-hover:opacity-100" />
      ) : null}
    </>
  )
  const className =
    "group relative flex min-w-0 flex-col gap-0.5 rounded-md px-2 py-1.5 pr-7 transition hover:bg-white/[0.04] sm:flex-row sm:items-center sm:gap-3 sm:pr-2"
  if (item.href) {
    return (
      <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    )
  }
  return (
    <div key={item.label} className={className}>
      {content}
    </div>
  )
}

export default function Stack() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">Stack</h2>
        <p className="mt-3 text-muted">Tools I use to build, ship, and operate software — detected from my actual machine, not aspirational.</p>
      </div>
      <div className="divide-y divide-border/60 border-y border-border/60">
        {cv.uses.map((group, gi) => (
          <div key={group.title} className="grid min-w-0 gap-4 py-6 md:grid-cols-[180px_1fr] md:gap-6">
            <p className="text-sm text-muted">
              <span className="mr-2 text-primary">{String(gi + 1).padStart(2, "0")}</span>
              {group.title}
            </p>
            <div className="min-w-0 space-y-1">
              {group.items.map((item) => (
                <UseRow key={item.label} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
