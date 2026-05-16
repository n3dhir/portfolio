import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const PORT = process.env.PORT || 3000

const distPath = path.join(__dirname, '..', 'dist')
const rootPath = path.join(__dirname, '..')

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))
} else {
  app.use(express.static(rootPath))
}

app.get('*', (req, res) => {
  const indexInDist = path.join(distPath, 'index.html')
  const indexInRoot = path.join(rootPath, 'index.html')
  if (fs.existsSync(indexInDist)) return res.sendFile(indexInDist)
  return res.sendFile(indexInRoot)
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
