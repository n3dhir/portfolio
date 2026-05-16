import profile from "../../profile1.png"
import { cv } from "../data/cv"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

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
            <p className="text-sm tracking-[0.3em] text-muted">{cv.title}</p>
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
        <Card className="glass overflow-hidden">
          <CardContent className="p-0">
            <img
              src={profile}
              alt="Nadhir Halbouni"
              className="w-full object-cover object-center h-56 sm:h-72 lg:h-[500px] rounded-md"
            />
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card className="glass">
          <CardContent className="p-6">
            <p className="text-sm">Location</p>
            <p className="text-sm text-primary font-semibold">{cv.location}</p>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-6">
            <p className="text-sm">Current Role</p>
            <p className="text-sm text-primary font-semibold">Software Engineer @Drivago</p>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-6">
            <p className="text-sm">Specialties</p>
            <p className="text-sm text-primary font-semibold">Full‑stack reliability & automation</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
