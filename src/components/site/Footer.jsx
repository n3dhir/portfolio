import { Github, Linkedin, Mail } from "lucide-react"
import { cv } from "../../data/cv"

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container-wide flex flex-col justify-between gap-3 text-sm text-muted md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Nadhir Halbouni. All rights reserved.</p>
        <div className="flex items-center gap-1">
          <a
            href={cv.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 transition hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={cv.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 transition hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${cv.email}`} aria-label="Email" className="rounded-md p-2 transition hover:text-primary">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
