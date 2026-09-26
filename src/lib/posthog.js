import posthog from "posthog-js"

const key = import.meta.env.VITE_POSTHOG_KEY
const host = import.meta.env.VITE_POSTHOG_HOST || "https://us.posthog.com"

if (key) {
  posthog.init(key, {
    api_host: host,
    capture_pageview: false,
    capture_pageleave: true,
    capture_exceptions: true,
    session_recording: {
      maskAllInputs: true,
    },
  })
  posthog.startSessionRecording()
}

export function track(name, props) {
  if (key) posthog.capture(name, props)
}

export default posthog
