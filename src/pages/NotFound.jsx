import { Link } from "react-router-dom"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"

const shortcuts = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/stack", label: "Stack" },
  { to: "/contact", label: "Contact" },
]

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl space-y-8 py-16 text-center">
      <p className="text-7xl font-bold tracking-tight text-primary/90 md:text-8xl">404</p>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Lost in the terminal?</h2>
        <p className="text-muted">The page you are looking for doesn&apos;t exist or was moved.</p>
      </div>
      <div className="flex justify-center gap-3">
        <Button asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" /> Back home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/contact">Contact me</Link>
        </Button>
      </div>
    </div>
  )
}
