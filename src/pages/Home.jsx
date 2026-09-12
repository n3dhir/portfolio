import profile from "../../profile1.png"
import { cv } from "../data/cv"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"

const facts = (cv) => [
  { label: "Location", value: cv.location },
  { label: "Current Role", value: "Full-Stack Software Engineer @Drivago" },
  { label: "Specialties", value: "Full‑stack reliability & automation" },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Available for impactful full‑stack & SaaS work
          </div>
          <div>
            <p className="text-sm text-muted">Hi — I’m Nadhir Halbouni, {cv.title}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              I build dependable, data-driven SaaS platforms that scale.
            </h1>
          </div>
          <p className="text-base text-muted md:text-lg">{cv.summary}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">Let’s work together</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/projects">View projects</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {cv.skills.core.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
        <img
          src={profile}
          alt="Nadhir Halbouni"
          className="w-full rounded-lg object-cover object-center h-56 sm:h-72 lg:h-[500px]"
        />
      </section>

      <section className="grid gap-x-8 md:grid-cols-3">
        {facts(cv).map((fact) => (
          <div key={fact.label} className="border-t border-border/60 py-4">
            <p className="text-sm text-muted">{fact.label}</p>
            <p className="mt-1 text-sm font-semibold text-primary">{fact.value}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
