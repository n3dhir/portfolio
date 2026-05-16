import React from 'react'
import resumePdf from '../../Nadhir_Halbouni_Resume.pdf'

export default function Resume() {
  return (
    <section id="resume" className="resume container">
      <h2>Resume</h2>
      <p>Download a PDF copy of my resume:</p>
      <a className="btn" href={resumePdf} target="_blank" rel="noopener noreferrer">Open / Download Resume</a>
    </section>
  )
}
