import resumePdf from "../../Nadhir_Halbouni_Resume.pdf"
import { cv } from "../data/cv"
import { Button } from "../components/ui/button"
import { renderRich } from "../components/richText"
import { track } from "../lib/posthog"

export default function Resume() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">Resume</h2>
        <p className="mt-3 text-muted">A concise summary of roles, projects, and technical strengths.</p>
      </div>
      <div className="border-t border-border/60 pt-6">
        <p className="text-lg font-semibold">{cv.name} — {cv.title}</p>
        <p className="mt-2 text-sm text-muted">{renderRich(cv.summary)}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild>
            <a href={resumePdf} target="_blank" rel="noreferrer" onClick={() => track("resume_opened")}>
              Open PDF
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={resumePdf} download onClick={() => track("resume_downloaded")}>
              Download PDF
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
