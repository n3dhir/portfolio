import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { cv } from "../data/cv"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { renderRich } from "../components/richText"

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
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected === null) return
    const onKey = (ev) => {
      if (ev.key === "Escape") setSelected(null)
      if (ev.key === "ArrowRight") setSelected((s) => (s + 1) % screenshots.length)
      if (ev.key === "ArrowLeft") setSelected((s) => (s - 1 + screenshots.length) % screenshots.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selected])

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
        <p className="mt-3 text-muted">{renderRich(project.description)}</p>
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

      {project.demoVideo?.src ? (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Demo</h3>
          <figure className="overflow-hidden rounded-lg border border-border/60">
            <video
              src={project.demoVideo.src}
              poster={project.demoVideo.poster}
              controls
              preload="metadata"
              playsInline
              className="aspect-video w-full bg-black"
            />
            {project.demoVideo.caption ? (
              <figcaption className="px-4 py-3 text-sm text-muted">{project.demoVideo.caption}</figcaption>
            ) : null}
          </figure>
        </div>
      ) : null}

      {screenshots.length ? (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Screenshots</h3>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {screenshots.slice(0, 5).map((shot, si) => {
              const isFirst = si === 0
              const hasMore = si === 4 && screenshots.length > 5
              const span = screenshots.length === 1
                ? "col-span-2 lg:col-span-4"
                : isFirst
                  ? "col-span-2 aspect-video lg:row-span-2 lg:aspect-auto lg:h-full lg:min-h-[320px]"
                  : "aspect-video"
              return (
                <button
                  key={`shot-${si}`}
                  type="button"
                  onClick={() => setSelected(si)}
                  aria-label={`View ${shot.caption || `screenshot ${si + 1}`} fullscreen`}
                  className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-lg border border-border/60 ${span}`}
                >
                  <img
                    src={shot.src}
                    alt={shot.caption || `${project.name} screenshot ${si + 1}`}
                    loading="lazy"
                    decoding="async"
                    className={`w-full object-cover object-top transition duration-500 ease-out group-hover:scale-105 ${isFirst ? "aspect-video lg:h-full" : "aspect-video"}`}
                  />
                  {hasMore ? (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/60 text-2xl font-semibold text-white">
                      +{screenshots.length - 5}
                    </span>
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/35">
                      <Maximize2 className="h-7 w-7 scale-75 text-white opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100" />
                    </span>
                  )}
                </button>
              )
            })}
          </div>
          {selected !== null && screenshots[selected] ? (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
              onClick={() => setSelected(null)}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close fullscreen view"
                className="absolute top-4 right-4 rounded-md border border-border bg-background/80 p-2 text-muted transition hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(ev) => {
                  ev.stopPropagation()
                  setSelected((selected - 1 + screenshots.length) % screenshots.length)
                }}
                aria-label="Previous screenshot"
                className="absolute left-3 rounded-md border border-border bg-background/80 p-2 text-muted transition hover:text-primary sm:left-6"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <figure className="max-h-full max-w-5xl" onClick={(ev) => ev.stopPropagation()}>
                <img
                  src={screenshots[selected].src}
                  alt={screenshots[selected].caption || `${project.name} screenshot ${selected + 1}`}
                  className="max-h-[76vh] w-auto max-w-full rounded-lg object-contain"
                />
                <figcaption className="mt-3 flex items-center justify-center gap-3 text-center text-sm text-muted">
                  <span>{screenshots[selected].caption}</span>
                  <span className="shrink-0 font-mono text-xs">
                    {selected + 1} / {screenshots.length}
                  </span>
                </figcaption>
              </figure>
              <button
                type="button"
                onClick={(ev) => {
                  ev.stopPropagation()
                  setSelected((selected + 1) % screenshots.length)
                }}
                aria-label="Next screenshot"
                className="absolute right-3 rounded-md border border-border bg-background/80 p-2 text-muted transition hover:text-primary sm:right-6"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          ) : null}
        </div>
      ) : project.demoVideo?.src ? null : (
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
              <p key={`detail-${di}`}>{renderRich(paragraph)}</p>
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
              <span>{renderRich(item)}</span>
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
