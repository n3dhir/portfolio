import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { cv } from "../data/cv"
import { Badge } from "../components/ui/badge"

export default function Projects() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="mt-3 text-muted">Selected products and engineering work. Click a project for details, screenshots, and demos.</p>
      </div>

      <section>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-primary">01</span>
          <h3 className="text-xl font-semibold">Selected work</h3>
        </div>
        <div className="mt-2 divide-y divide-border/60 border-y border-border/60">
          {cv.projects.map((project, pi) => (
            <Link
              key={project.slug || `${project.name}-${pi}`}
              to={`/projects/${project.slug}`}
              className="group flex items-start justify-between gap-4 py-5"
            >
              <div className="min-w-0 space-y-1.5">
                <h4 className="text-lg font-semibold transition group-hover:text-primary">{project.name}</h4>
                <p className="text-sm text-muted">{project.period}</p>
                <p className="text-sm text-muted">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-0.5">
                  {project.tech.map((tech, ti) => (
                    <Badge key={`${pi}-tech-${ti}`} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>

      {cv.contributions?.length ? (
        <section>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-primary">02</span>
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
