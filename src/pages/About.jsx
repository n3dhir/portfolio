import { cv } from "../data/cv"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

export default function About() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">About</h2>
        <p className="mt-3 text-muted">{cv.summary}</p>
      </div>
      <Card className="glass">
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-muted">Name</p>
            <p className="text-base font-medium">{cv.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted">Location</p>
            <p className="text-base font-medium">{cv.location}</p>
          </div>
          <div>
            <p className="text-sm text-muted">Email</p>
            <p className="text-base font-medium">{cv.email}</p>
          </div>
          <div>
            <p className="text-sm text-muted">Phone</p>
            <p className="text-base font-medium">{cv.phone}</p>
          </div>
        </CardContent>
      </Card>
      <div>
        <h3 className="text-xl font-semibold">Languages</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {cv.languages.map((lang) => (
            <Badge key={lang.name} variant="outline">
              {lang.name} — {lang.level}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
