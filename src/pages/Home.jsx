import { cv } from "../data/cv"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { StackPill } from "../components/StackPills"
import { renderRich } from "../components/richText"
import { SKILL_ICONS } from "./Skills"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="order-2 hidden lg:order-1 lg:block">
          <img
            src="/profile.png"
            alt="Nadhir Halbouni"
            className="mx-auto h-80 w-80 rounded-full object-cover object-center"
          />
        </div>
        <div className="order-1 space-y-6 lg:order-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Available for full-stack & AI product work
          </div>
          <div className="flex items-center gap-4 lg:hidden">
            <img
              src="/profile.png"
              alt="Nadhir Halbouni"
              className="h-16 w-16 shrink-0 rounded-full object-cover object-center"
            />
            <div>
              <p className="text-sm text-muted">Hi — I’m Nadhir Halbouni, {cv.title}</p>
              <p className="mt-0.5 text-xs text-muted/70">Ariana, Tunisia</p>
            </div>
          </div>
          <div>
            <p className="hidden text-sm text-muted lg:block">Hi — I’m Nadhir Halbouni, {cv.title}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              From production SaaS to AI-powered products.
            </h1>
          </div>
          <p className="text-base text-muted">{renderRich(cv.summary)}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">Let’s work together</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/projects">View projects</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {cv.heroSkills.map((skill) => (
              <StackPill key={skill} icon={SKILL_ICONS[skill]} label={skill} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
