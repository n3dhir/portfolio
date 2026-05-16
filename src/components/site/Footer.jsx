export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container-wide flex flex-col items-center justify-between gap-3 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} Nadhir Halbouni. All rights reserved.</p>
        <p>Built with React, Vite, Tailwind, and shadcn/ui.</p>
      </div>
    </footer>
  )
}
