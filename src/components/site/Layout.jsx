import NavBar from "./NavBar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_45%)]">
      <NavBar />
      <main className="container-wide py-12">{children}</main>
      <Footer />
    </div>
  )
}
