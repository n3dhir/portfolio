import { ArrowUpRight, Mail, Phone, Globe, Github, Linkedin } from "lucide-react"
import { cv } from "../data/cv"

const channels = (cv) => [
  { icon: Mail, label: cv.email, href: `mailto:${cv.email}` },
  { icon: Phone, label: cv.phone, href: `tel:${cv.phone}` },
  { icon: Globe, label: cv.website, href: cv.website },
  { icon: Github, label: cv.github, href: cv.github },
  { icon: Linkedin, label: cv.linkedin, href: cv.linkedin },
]

export default function Contact() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-3 text-muted">Interested in collaborating or working together? Feel free to contact me — I reply quickly.</p>
      </div>
      <div className="divide-y divide-border/60 border-y border-border/60">
        {channels(cv).map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex items-center justify-between gap-4 py-3.5 text-sm text-muted transition hover:text-foreground"
          >
            <span className="flex min-w-0 items-center gap-3">
              <Icon className="h-4 w-4 shrink-0 transition group-hover:text-primary" />
              <span className="truncate">{label}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition group-hover:text-primary" />
          </a>
        ))}
      </div>
    </div>
  )
}
