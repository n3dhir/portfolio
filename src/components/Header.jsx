import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="site-title">Your Name</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
