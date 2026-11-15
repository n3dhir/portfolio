import * as Sentry from "@sentry/node"

// Errors that signal an upstream/transient problem rather than a bug in our code.
const TRANSIENT = /\b(429|5\d\d)\b|rate.?limit|timeout|econnreset|econnrefused|enetunreach|etimedout|socket hang up|fetch failed/i

export function captureError(err, req) {
  console.error(err)
  if (!process.env.SENTRY_DSN) return
  const msg = err instanceof Error ? err.message : String(err)
  Sentry.captureException(err, {
    level: TRANSIENT.test(msg) ? "warning" : "error",
    tags: { route: req?.originalUrl || req?.path || "unknown" },
    extra: { method: req?.method, ip: req?.ip },
  })
}
