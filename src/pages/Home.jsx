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
            Available for impactful backend & SaaS work
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">{cv.title}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              Building reliable SaaS systems that scale from database to user experience.
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
              className="h-[500px] w-full object-cover"
            />
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card className="glass">
          <CardContent className="p-6">
            <p className="text-sm text-muted">Location</p>
            <p className="text-lg font-semibold">{cv.location}</p>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-6">
            <p className="text-sm text-muted">Current Role</p>
            <p className="text-lg font-semibold">Software Engineer @ Drivago</p>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-6">
            <p className="text-sm text-muted">Specialties</p>
            <p className="text-lg font-semibold">Backend reliability & automation</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
