import { Mail, Phone, Globe, Github, Linkedin } from "lucide-react"
import { cv } from "../data/cv"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"

export default function Contact() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-3 text-muted">Let’s connect for SaaS, platform reliability, or automation work.</p>
      </div>
      <Card className="glass">
        <CardHeader>
          <CardTitle>Reach out</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <a className="flex items-center gap-3 text-sm text-muted hover:text-foreground" href={`mailto:${cv.email}`}>
            <Mail className="h-4 w-4" />
            {cv.email}
          </a>
          <a className="flex items-center gap-3 text-sm text-muted hover:text-foreground" href={`tel:${cv.phone}`}>
            <Phone className="h-4 w-4" />
            {cv.phone}
          </a>
          <a className="flex items-center gap-3 text-sm text-muted hover:text-foreground" href={cv.website} target="_blank" rel="noreferrer">
            <Globe className="h-4 w-4" />
            {cv.website}
          </a>
          <a className="flex items-center gap-3 text-sm text-muted hover:text-foreground" href={cv.github} target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" />
            {cv.github}
          </a>
          <a className="flex items-center gap-3 text-sm text-muted hover:text-foreground" href={cv.linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="h-4 w-4" />
            {cv.linkedin}
          </a>
        </CardContent>
      </Card>
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <a href={`mailto:${cv.email}`}>Email me</a>
        </Button>
        <Button variant="outline" asChild>
          <a href={cv.website} target="_blank" rel="noreferrer">
            Visit website
          </a>
        </Button>
      </div>
    </div>
  )
}
