import { cv } from "../data/cv"
import { Badge } from "../components/ui/badge"
import { ArrowUpRight, Mail, MapPin, Phone, User } from "lucide-react"

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
        <dl className="mt-2 grid gap-x-8 border-y border-border/60 md:grid-cols-2">
          {details(cv).map(({ icon: Icon, label, value, href }, i) => (
            <div
              key={label}
              className={`flex items-baseline justify-between gap-3 border-border/60 py-3 sm:gap-4${i > 0 ? " border-t md:border-t-0" : ""}${i < 2 ? " md:border-b" : ""}`}
            >
              <dt className="flex shrink-0 items-center gap-2 text-sm text-muted">
                <Icon className="h-3.5 w-3.5" />
                {label}
              </dt>
              {href ? (
                <a href={href} className="min-w-0 break-all text-right text-sm font-medium transition hover:text-primary sm:text-base">
                  {value}
                </a>
              ) : (
                <dd className="min-w-0 break-all text-right text-sm font-medium sm:text-base">{value}</dd>
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

      {cv.versions?.length ? (
        <section>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-primary">03</span>
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
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition group-hover:text-primary" />
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
