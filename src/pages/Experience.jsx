import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { cv } from "../data/cv"

export default function Experience() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-semibold">Experience</h2>
        <p className="mt-3 text-muted">Production engineering leadership and system design for high-availability SaaS platforms, with emphasis on automation and scalable migrations. Click a role for details.</p>
      </div>
      <div className="divide-y divide-border/60 border-y border-border/60">
        {cv.experience.map((role, index) => (
          <Link
            key={role.slug || `${role.role}-${role.period}-${index}`}
            to={`/experience/${role.slug}`}
            className="group flex items-baseline gap-4 py-5"
          >
            <span className="font-mono text-sm text-primary">0{index + 1}</span>
            <div className="min-w-0 flex-1">
              <p className="text-lg font-semibold transition group-hover:text-primary">{role.role}</p>
              <p className="mt-0.5 text-sm text-muted">
                {role.company} • {role.location} • {role.period}
              </p>
              <p className="mt-1.5 line-clamp-2 text-sm text-muted">{role.highlights[0]}</p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-primary" />
          </Link>
        ))}
      </div>
    </div>
  )
}
