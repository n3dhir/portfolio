import React from 'react'
import profile from '../../profile1.png'

export default function About() {
  return (
    <section id="about" className="about container">
      <img src={profile} alt="Profile" className="profile-image" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hello — I'm a software engineer who builds web applications. This portfolio
          shows my resume and contact details. Replace this text with your own bio.
        </p>
      </div>
    </section>
  )
}
