# Portfolio (React + Vite)

Quick scaffold for a personal portfolio using React + Vite. It uses the existing `profile1.png` and `Nadhir_Halbouni_Resume.pdf` in the project root.

Install and run:

```bash
npm install
npm run dev
```markdown
# Portfolio (React + Vite)

Quick scaffold for a personal portfolio using React + Vite. It uses the existing `profile1.png` and `Nadhir_Halbouni_Resume_v5.pdf` in the project root.

Install and run:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

Notes:
- Edit the text in `src/components/About.jsx` and replace `Your Name` in `src/components/Header.jsx`.
- Update the contact email in `src/components/Contact.jsx`.

Node.js server
----------------
This repo includes a minimal Express server at `server/index.js` that serves the built site from `dist/` (if present) or static files from the project root.

Install dependencies and run the server:

```bash
npm install
npm run build   # optional: build the Vite app into dist/
npm start       # runs node server/index.js on port 3000
```

Set `PORT` to change the listening port, e.g. `PORT=8080 npm start`.

```
