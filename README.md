# Portfolio (React + Vite)

Personal portfolio for Nadhir Halbouni — Software Engineer. React + Vite + Tailwind + shadcn/ui, with a minimal Express server for VPS hosting.

It uses the existing `profile1.png` and `Nadhir_Halbouni_Resume.pdf` in the project root.

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
- Edit content in `src/data/cv.js` (single source of truth for all pages).
- Pages live in `src/pages/`, layout/nav in `src/components/site/`.
- Contact links (email, phone, site) come from `src/data/cv.js`.

Node.js server
----------------
This repo includes a minimal Express server at `server/index.js` that serves the built site from `dist/` (if present) or static files from the project root.

```bash
npm install
npm run build   # build the Vite app into dist/
npm start       # runs node server/index.js on port 3000
```

Set `PORT` to change the listening port, e.g. `PORT=8080 npm start`.

Deploy note: `dist/` is intentionally committed — build locally, then push directly to the VPS.
