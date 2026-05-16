import { cv } from "../data/cv"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"

export default function Projects() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="mt-3 text-muted">Selected products and engineering work that demonstrate system design, automation, and real-world impact.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {cv.projects.map((project) => (
          <Card key={project.name} className="glass">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.period}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted">{project.description}</p>
              <ul className="space-y-2 text-sm text-muted">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <Button key={link.href} variant="outline" asChild>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
