import { cv } from "../data/cv"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

export default function Education() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">Education & Certifications</h2>
        <p className="mt-3 text-muted">Formal education complemented by certificates that strengthen my skills.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {cv.education.map((item, ei) => (
          <Card key={`${item.degree}-${item.period}-${ei}`} className="glass">
            <CardHeader>
              <CardTitle>{item.degree}</CardTitle>
              <CardDescription>
                {item.school} • {item.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge>{item.period}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="glass">
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2 text-sm text-muted">
          {cv.certifications.map((cert, ci) => (
            <p key={`cert-${ci}`}>• {cert}</p>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
