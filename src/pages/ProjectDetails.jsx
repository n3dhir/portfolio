import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { cv } from "../data/cv"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = cv.projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="space-y-6 py-8">
        <h2 className="text-3xl font-semibold">Project not found</h2>
        <p className="text-muted">This project doesn&apos;t exist or was moved.</p>
        <Button variant="outline" asChild>
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to projects
          </Link>
        </Button>
      </div>
    )
  }

  const screenshots = project.screenshots || []
  const details = project.details || []

  return (
    <div className="space-y-8">
      <Link
        to="/projects"
        className="group inline-flex w-fit items-center gap-2 text-sm text-muted transition hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" /> Projects
      </Link>

      <div>
        <h2 className="text-3xl font-semibold">{project.name}</h2>
        <p className="mt-2 text-sm text-muted">{project.period}</p>
        <p className="mt-3 text-muted">{project.description}</p>
        {project.links?.length ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button key={link.href} variant="outline" asChild>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        ) : null}
      </div>

      {screenshots.length ? (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Screenshots</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {screenshots.map((shot, si) => (
              <figure key={`shot-${si}`} className="overflow-hidden rounded-lg border border-border/60">
                <img
                  src={shot.src}
                  alt={shot.caption || `${project.name} screenshot ${si + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover object-top"
                />
                {shot.caption ? (
                  <figcaption className="px-4 py-3 text-sm text-muted">{shot.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-sm text-muted">
          Screenshots coming soon — add images to <code className="text-foreground">public/screenshots/{project.slug}/</code> and
          list them in <code className="text-foreground">src/data/cv.js</code>.
        </p>
      )}

      {details.length ? (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Overview</h3>
          <div className="space-y-3 text-sm leading-relaxed text-muted">
            {details.map((paragraph, di) => (
              <p key={`detail-${di}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      ) : null}

      <div>
        <h3 className="text-xl font-semibold">Highlights</h3>
        <ul className="mt-3 divide-y divide-border/60 border-y border-border/60 text-sm text-muted">
          {project.highlights.map((item, hi) => (
            <li key={`hl-${hi}`} className="flex gap-3 py-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Tech</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech, ti) => (
            <Badge key={`tech-${ti}`} variant="outline">{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
