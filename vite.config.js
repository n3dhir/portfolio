import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import { sentryVitePlugin } from "@sentry/vite-plugin"
import { execSync } from "node:child_process"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  const release =
    env.SENTRY_RELEASE ||
    `portfolio@${execSync("git rev-parse --short HEAD").toString().trim()}`

  // Upload source maps to Sentry only when SENTRY_UPLOAD=1 is set in .env.
  const uploadToSentry = env.SENTRY_UPLOAD === "1"

  return {
    plugins: [
      react(),
      ...(uploadToSentry
        ? [
            sentryVitePlugin({
              org: env.SENTRY_ORG || "aa-nr",
              project: env.SENTRY_PROJECT || "portfolio-frontend",
              authToken: env.SENTRY_AUTH_TOKEN,
              release: { name: release, inject: true },
              sourcemaps: { filesToDeleteAfterUpload: ["**/*.map"] },
            }),
          ]
        : []),
    ],
    build: {
      sourcemap: "hidden",
    },
    server: {
      // Forward API calls to the Express server during `npm run dev`
      // (expects `node server/index.js` running on :3001).
      proxy: {
        "/api": "http://localhost:3001",
      },
    },
  }
})
