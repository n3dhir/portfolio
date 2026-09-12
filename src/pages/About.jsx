import { cv } from "../data/cv"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import GitHubActivity from "../components/GitHubActivity"
import GitHubCalendar from "../components/GitHubCalendar"

export default function About() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">About</h2>
        <p className="mt-3 text-muted">I’m a pragmatic software engineer who turns ambiguous product needs into reliable systems. I lead full‑stack architecture, payments, and automation work — with a focus on observability, fault-tolerance, and developer ergonomics.</p>
      </div>
      <Card className="glass">
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-muted">Name</p>
            <p className="text-base font-medium">{cv.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted">Location</p>
            <p className="text-base font-medium">{cv.location}</p>
          </div>
          <div>
            <p className="text-sm text-muted">Email</p>
            <p className="text-base font-medium">{cv.email}</p>
          </div>
          <div>
            <p className="text-sm text-muted">Phone</p>
            <p className="text-base font-medium">{cv.phone}</p>
          </div>
        </CardContent>
      </Card>
      <div>
        <h3 className="text-xl font-semibold">Languages</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {cv.languages.map((lang) => (
            <Badge key={lang.name} variant="outline">
              {lang.name} — {lang.level}
            </Badge>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-semibold">GitHub activity</h3>
          <p className="mt-2 text-sm text-muted">What I&apos;ve been pushing, opening, and commenting on lately.</p>
        </div>
        <GitHubActivity />
      </div>
      <div className="space-y-3">
        <GitHubCalendar />
      </div>
      {cv.versions?.length ? (
        <div>
          <h3 className="text-xl font-semibold">Previous versions</h3>
          <p className="mt-2 text-sm text-muted">Earlier designs of this site, kept reachable.</p>
          <div className="mt-3 space-y-2">
            {cv.versions.map((v) => (
              <a
                key={v.version}
                href={v.href}
                target="_blank"
                rel="noreferrer"
                className="glass group flex items-center justify-between gap-4 rounded-lg px-4 py-3 transition hover:border-primary/40"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-semibold group-hover:text-primary">{v.version}</span>
                  <span className="text-sm text-muted">{v.note}</span>
                </div>
                <span className="text-sm text-muted transition group-hover:text-primary">↗</span>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
