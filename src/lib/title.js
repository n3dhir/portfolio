import { cv } from "../data/cv"

const SITE = "Nadhir Halbouni"

const PAGES = {
  "/about": "About",
  "/experience": "Experience",
  "/projects": "Projects",
  "/skills": "Skills",
  "/education": "Education",
  "/contact": "Contact",
  "/resume": "Resume",
  "/stack": "Stack",
  "/activity": "Activity",
}

export function pageTitle(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/"

  const project = path.match(/^\/projects\/([^/]+)$/)
  if (project) {
    const p = cv.projects.find((x) => x.slug === project[1])
    if (p) return `${p.name} — ${SITE}`
  }

  const exp = path.match(/^\/experience\/([^/]+)$/)
  if (exp) {
    const e = cv.experience.find((x) => x.slug === exp[1])
    if (e) return `${e.role} at ${e.company} — ${SITE}`
  }

  if (path === "/") return `${SITE} — Full-Stack Software Engineer`

  const name = PAGES[path]
  return name ? `${name} — ${SITE}` : `Not Found — ${SITE}`
}
