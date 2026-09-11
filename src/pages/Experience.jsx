import { cv } from "../data/cv"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function Experience() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">Experience</h2>
        <p className="mt-3 text-muted">Production engineering leadership and system design for high-availability SaaS platforms, with emphasis on automation and scalable migrations.</p>
      </div>
      <div className="space-y-6">
        {cv.experience.map((role, index) => (
          <Card key={`${role.role}-${role.period}-${index}`} className="glass">
            <CardHeader>
              <CardTitle>{role.role}</CardTitle>
              <CardDescription>
                {role.company} • {role.location} • {role.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted">
                {role.highlights.map((item, hi) => (
                  <li key={`${index}-${hi}`} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
