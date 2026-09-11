import { cv } from "../data/cv"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const groups = [
  { title: "Core Strengths", items: cv.skills.core },
  { title: "Backend & Data", items: cv.skills.backend },
  { title: "Frontend", items: cv.skills.frontend },
  { title: "AI / LLM", items: cv.skills.ai },
  { title: "Infrastructure & Tools", items: cv.skills.infrastructure },
  { title: "Other", items: cv.skills.other },
]

export default function Skills() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">Skills</h2>
        <p className="mt-3 text-muted">Technologies and practices I use to build reliable, maintainable systems.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {groups.map((group) => (
          <Card key={group.title} className="glass">
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.items.map((skill, si) => (
                <Badge key={`${group.title}-${si}`} variant="outline">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
