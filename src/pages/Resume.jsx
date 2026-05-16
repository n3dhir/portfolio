import resumePdf from "../../Nadhir_Halbouni_Resume_v5.pdf"
import { cv } from "../data/cv"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { buttonVariants } from "../components/ui/button"

export default function Resume() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">Resume</h2>
        <p className="mt-3 text-muted">Download or view a PDF copy of the resume.</p>
      </div>
      <Card className="glass">
        <CardHeader>
          <CardTitle>{cv.name} — {cv.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted">{cv.summary}</p>
          <div className="flex flex-wrap gap-3">
            <a className={buttonVariants()} href={resumePdf} target="_blank" rel="noreferrer">
              Open PDF
            </a>
            <a className={buttonVariants({ variant: "outline" })} href={resumePdf} download>
              Download PDF
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
