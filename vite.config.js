import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    // Forward API calls to the Express server during `npm run dev`
    // (expects `node server/index.js` running on :3001).
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
})
