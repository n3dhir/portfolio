import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { cv } from "../data/cv"
import { Badge } from "../components/ui/badge"

export default function Projects() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="mt-3 text-muted">Selected products and engineering work. Click a project for details, screenshots, and demos.</p>
      </div>
      <div className="space-y-4">
        {cv.projects.map((project, pi) => (
          <Link
            key={project.slug || `${project.name}-${pi}`}
            to={`/projects/${project.slug}`}
            className="glass group flex items-center justify-between gap-6 rounded-lg p-6 transition hover:border-primary/40"
          >
            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold group-hover:text-primary">{project.name}</h3>
                <span className="text-sm text-muted">{project.period}</span>
              </div>
              <p className="text-sm text-muted">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tech.map((tech, ti) => (
                  <Badge key={`${pi}-tech-${ti}`} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-primary" />
          </Link>
        ))}
      </div>

      {cv.contributions?.length ? (
        <div className="space-y-4 pt-4">
          <div>
            <h3 className="text-xl font-semibold">Contributions</h3>
            <p className="mt-2 text-sm text-muted">Pull requests and issue work on projects that aren&apos;t mine.</p>
          </div>
          <div className="space-y-4">
            {cv.contributions.map((item, ci) => (
              <a
                key={`${item.repo}-${ci}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="glass group flex items-center justify-between gap-6 rounded-lg p-6 transition hover:border-primary/40"
              >
                <div className="min-w-0 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{item.kind}</Badge>
                    <Badge>{item.status}</Badge>
                    <span className="text-sm text-muted">{item.repo}</span>
                  </div>
                  <h4 className="font-semibold group-hover:text-primary">{item.title}</h4>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
