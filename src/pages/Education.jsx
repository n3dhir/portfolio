import { cv } from "../data/cv"
import { Badge } from "../components/ui/badge"

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
            <div key={`${item.degree}-${item.period}-${ei}`} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
              <div className="min-w-0">
                <p className="text-lg font-semibold">{item.degree}</p>
                <p className="mt-0.5 text-sm text-muted">
                  {item.school} • {item.location}
                </p>
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
              <span>{cert.label}</span>
              <span className="shrink-0 transition group-hover:text-primary">↗</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
