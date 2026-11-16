# Anik Healthcare Website

React + Vite website for Anik Healthcare / Dr. Gunjan Agarwal.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`. The ZIP intentionally does not include `node_modules/`, `.git/`, or a stale `dist/` folder; install dependencies and build the current source after extraction.

## Main routes

| Page | URL |
| --- | --- |
| Home | `/` |
| About | `/about` |
| Team | `/teams` |
| Services overview | `/services` |
| Gynaecology | `/gynaecology` |
| IVF Center | `/ivf-center` |
| Laparoscopic Surgeries | `/laparoscopic-surgeries` |
| Obstetrics | `/obstetrics` |
| Pediatrics | `/pediatrics` |
| Gallery | `/gallery` |
| Contact / Appointments | `/contact` |
| Sitemap | `/sitemap` |

Legacy URLs `/ivfcenter`, `/LS`, `/ls`, `/Obs`, `/obs`, and `/pediat` redirect to their current route equivalents.

## Deployment routing

- `vercel.json` rewrites application routes to `index.html` for React Router's `BrowserRouter`.
- `public/_redirects` provides the equivalent SPA fallback for Netlify-style static hosting.

The app includes a Not Found page for unmatched client-side routes. Direct route refreshes still require the hosting fallback above.
