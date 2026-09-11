import NavBar from "./NavBar"
import Footer from "./Footer"
import CommandPalette from "../CommandPalette"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(0,146,184,0.2),_transparent_45%)] flex flex-col">
      <NavBar />
      <main className="container-wide py-12 flex-1">{children}</main>
      <Footer />
      <CommandPalette />
    </div>
  )
}
