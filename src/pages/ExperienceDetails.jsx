import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { cv } from "../data/cv"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { renderRich } from "../components/richText"

export default function ExperienceDetails() {
  const { slug } = useParams()
  const role = cv.experience.find((r) => r.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!role) {
    return (
      <div className="space-y-6 py-8">
        <h2 className="text-3xl font-semibold">Role not found</h2>
        <p className="text-muted">This role doesn&apos;t exist or was moved.</p>
        <Button variant="outline" asChild>
          <Link to="/experience">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to experience
          </Link>
        </Button>
      </div>
    )
  }

  const details = role.details || []

  return (
    <div className="space-y-8">
      <Link
        to="/experience"
        className="group inline-flex w-fit items-center gap-2 text-sm text-muted transition hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" /> Experience
      </Link>

      <div>
        <div className="flex flex-wrap items-center gap-4">
          {role.logo ? (
            <img
              src={role.logo}
              alt={`${role.company} logo`}
              className="h-12 w-12 shrink-0 rounded-xl object-cover"
            />
          ) : null}
          <div>
            <h2 className="text-3xl font-semibold">{role.role}</h2>
            <p className="mt-2 text-sm text-muted">
              {role.company} • {role.location} • {role.period}
            </p>
          </div>
        </div>
      </div>

      {details.length ? (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Overview</h3>
          <div className="space-y-3 text-sm leading-relaxed text-muted">
            {details.map((paragraph, di) => (
              <p key={`detail-${di}`}>{renderRich(paragraph)}</p>
            ))}
          </div>
        </div>
      ) : null}

      <div>
        <h3 className="text-xl font-semibold">Highlights</h3>
        <ul className="mt-3 divide-y divide-border/60 border-y border-border/60 text-sm text-muted">
          {role.highlights.map((item, hi) => (
            <li key={`hl-${hi}`} className="flex gap-3 py-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{renderRich(item)}</span>
            </li>
          ))}
        </ul>
      </div>

      {role.tech?.length ? (
        <div>
          <h3 className="text-xl font-semibold">Tech</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {role.tech.map((tech, ti) => (
              <Badge key={`tech-${ti}`} variant="outline">{tech}</Badge>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
