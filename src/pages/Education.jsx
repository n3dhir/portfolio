import { ArrowUpRight } from "lucide-react"
import { cv } from "../data/cv"
import { Badge } from "../components/ui/badge"
import { ItemIcon } from "../components/StackPills"

export default function Education() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-semibold">Education & Certifications</h2>
        <p className="mt-3 text-muted">Formal education complemented by certificates that strengthen my skills.</p>
      </div>

      <section>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-primary">01</span>
          <h3 className="text-xl font-semibold">Education</h3>
        </div>
        <div className="mt-2 divide-y divide-border/60 border-y border-border/60">
          {cv.education.map((item, ei) => (
            <div key={`${item.degree}-${item.period}-${ei}`} className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-4">
              <div className="flex min-w-0 items-center gap-4">
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt={`${item.school} logo`}
                    loading="lazy"
                    className="h-10 w-auto shrink-0 rounded-md bg-white px-2 py-1"
                  />
                ) : null}
                <div className="min-w-0">
                  <p className="text-lg font-semibold">{item.degree}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    {item.school} • {item.location}
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="shrink-0">{item.period}</Badge>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-primary">02</span>
          <h3 className="text-xl font-semibold">Certifications</h3>
        </div>
        <div className="mt-2 divide-y divide-border/60 border-y border-border/60">
          {cv.certifications.map((cert, ci) => (
            <a
              key={`cert-${ci}`}
              href={cert.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 py-3 text-sm text-muted transition hover:text-foreground"
            >
              <span className="flex min-w-0 items-center gap-2.5">
                {cert.icon ? <ItemIcon icon={cert.icon} /> : null}
                <span className="truncate">{cert.label}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition group-hover:text-primary" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
