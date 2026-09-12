import { ArrowUpRight } from "lucide-react"
import { cv } from "../data/cv"
import { Badge } from "../components/ui/badge"
import GitHubCalendar from "../components/GitHubCalendar"

export default function Activity() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-semibold">Activity</h2>
        <p className="mt-3 text-muted">Open-source contributions and yearly activity, live from the API.</p>
      </div>

      <section>
        <GitHubCalendar />
      </section>

      {cv.contributions?.length ? (
        <section>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-primary">01</span>
            <h3 className="text-xl font-semibold">Contributions</h3>
          </div>
          <p className="mt-2 text-sm text-muted">Pull requests and issue work on projects that aren&apos;t mine.</p>
          <div className="mt-2 divide-y divide-border/60 border-y border-border/60">
            {cv.contributions.map((item, ci) => (
              <a
                key={`${item.repo}-${ci}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 py-5"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{item.kind}</Badge>
                    <Badge>{item.status}</Badge>
                    <span className="text-sm text-muted">{item.repo}</span>
                  </div>
                  <h4 className="mt-2 font-semibold transition group-hover:text-primary">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
