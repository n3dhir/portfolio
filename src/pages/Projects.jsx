import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { cv } from "../data/cv"
import { Badge } from "../components/ui/badge"
import { renderRich } from "../components/richText"

export default function Projects() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="mt-3 text-muted">Selected products and engineering work. Click a project for details, screenshots, and demos.</p>
      </div>

      <section>
        <h3 className="text-xl font-semibold">Selected work</h3>
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
                <p className="text-sm text-muted">{renderRich(project.description)}</p>
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
    </div>
  )
}
