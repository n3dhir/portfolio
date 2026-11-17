const ID = import.meta.env.VITE_GA_MEASUREMENT_ID

const isLocal =
  typeof window !== "undefined" &&
  /^localhost$|^127\.|^192\.168\.|^10\./.test(window.location.hostname)

const enabled = Boolean(ID) && !isLocal

if (enabled) {
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag("js", new Date())
  window.gtag("config", ID, { send_page_view: false })

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ID}`
  document.head.appendChild(script)
}

export function track(event, props) {
  if (enabled && window.gtag) window.gtag("event", event, props)
}

export function trackPageview(path) {
  if (enabled && window.gtag) {
    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    })
  }
}
