import "./lib/sentry"
import React from 'react'
import { createRoot } from 'react-dom/client'
import * as Sentry from "@sentry/react"
import App from './App'
import './styles.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Sentry.ErrorBoundary fallback={<p>Something went wrong.</p>}>
    <App />
  </Sentry.ErrorBoundary>
)
