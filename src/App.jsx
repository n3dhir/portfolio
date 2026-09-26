import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import posthog from "./lib/posthog"
import Layout from "./components/site/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import ExperienceDetails from "./pages/ExperienceDetails"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import Skills from "./pages/Skills"
import Education from "./pages/Education"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import Stack from "./pages/Stack"
import Activity from "./pages/Activity"
import NotFound from "./pages/NotFound"

function PageTracker() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (import.meta.env.VITE_POSTHOG_KEY) posthog.capture("$pageview")
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <PageTracker />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:slug" element={<ExperienceDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
