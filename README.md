# Portfolio — Ehtisham Iftikhar

Interactive portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion. Sections: hero, about, experience timeline, project case studies, skills, credentials and contact. Dark/light mode with no flash on load, and reduced-motion support. All content lives in `src/data.js`.

## Development

```bash
npm install
npm run dev
```

## Deployment (GitHub Pages)

1. Create a GitHub repo named `Portfolio` (or update `base` in `vite.config.js` to match your repo name).
2. Push this project to the repo's `main` branch.
3. In the repo settings, go to **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
4. Every push to `main` will automatically build and deploy via `.github/workflows/deploy.yml`.

Your site will be live at `https://<username>.github.io/Portfolio/`.
