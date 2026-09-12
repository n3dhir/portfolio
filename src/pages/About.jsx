import { cv } from "../data/cv"
import { Badge } from "../components/ui/badge"
import { Mail, MapPin, Phone, User } from "lucide-react"
import GitHubActivity from "../components/GitHubActivity"
import GitHubCalendar from "../components/GitHubCalendar"

const details = (cv) => [
  { icon: User, label: "Name", value: cv.name },
  { icon: MapPin, label: "Location", value: cv.location },
  { icon: Mail, label: "Email", value: cv.email, href: `mailto:${cv.email}` },
  { icon: Phone, label: "Phone", value: cv.phone, href: `tel:${cv.phone.replace(/\s/g, "")}` },
]

export default function About() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-semibold">About</h2>
        <p className="mt-3 text-muted">I’m a pragmatic software engineer who turns ambiguous product needs into reliable systems. I lead full‑stack architecture, payments, and automation work — with a focus on observability, fault-tolerance, and developer ergonomics.</p>
      </div>

      <section>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-primary">01</span>
          <h3 className="text-xl font-semibold">Personal Details</h3>
        </div>
        <dl className="mt-2 grid gap-x-8 divide-y divide-border/60 border-y border-border/60 md:grid-cols-2 md:divide-y-0">
          {details(cv).map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-baseline justify-between gap-4 py-3 md:border-b md:border-border/60 md:[&:nth-last-child(-n+2)]:border-b-0">
              <dt className="flex items-center gap-2 text-sm text-muted">
                <Icon className="h-3.5 w-3.5" />
                {label}
              </dt>
              {href ? (
                <a href={href} className="text-right text-base font-medium transition hover:text-primary">
                  {value}
                </a>
              ) : (
                <dd className="text-right text-base font-medium">{value}</dd>
              )}
            </div>
          ))}
        </dl>
      </section>

      <section>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-primary">02</span>
          <h3 className="text-xl font-semibold">Languages</h3>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {cv.languages.map((lang) => (
            <Badge key={lang.name} variant="outline">
              {lang.name} — {lang.level}
            </Badge>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-primary">03</span>
          <h3 className="text-xl font-semibold">GitHub activity</h3>
        </div>
        <p className="mt-2 text-sm text-muted">What I&apos;ve been pushing, opening, and commenting on lately.</p>
        <div className="mt-2">
          <GitHubActivity />
        </div>
      </section>

      <section>
        <GitHubCalendar />
      </section>

      {cv.versions?.length ? (
        <section>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-primary">04</span>
            <h3 className="text-xl font-semibold">Previous versions</h3>
          </div>
          <p className="mt-2 text-sm text-muted">Earlier designs of this site, kept reachable.</p>
          <div className="mt-2 divide-y divide-border/60 border-y border-border/60">
            {cv.versions.map((v) => (
              <a
                key={v.version}
                href={v.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-3 transition"
              >
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-semibold group-hover:text-primary">{v.version}</span>
                  <span className="text-sm text-muted">{v.note}</span>
                </div>
                <span className="shrink-0 text-sm text-muted transition group-hover:text-primary">↗</span>
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
