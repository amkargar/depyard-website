# Depyard website

Marketing site and quick-start documentation for [Depyard](https://github.com/amkargar/depyard), the self-hosted package and artifact registry platform.

Built with Nuxt 4, Vue, Tailwind CSS 4, and shadcn-vue-style UI primitives (CVA and Tailwind Merge).

## Local development

```bash
npm install
npm run dev
```

Nuxt starts on `http://localhost:3000`.

## Production

```bash
npm run build
npm run preview
```

For a static deployment, run `npm run generate` and publish the generated `.output/public` directory to any static host. The site contains two primary routes: `/` and `/docs`.

Set `NUXT_APP_BASE_URL` for a project subpath and `NUXT_PUBLIC_SITE_URL` to the full canonical site root before building. For this repository's default GitHub Pages URL:

```bash
NUXT_APP_BASE_URL=/depyard-website/ \
NUXT_PUBLIC_SITE_URL=https://amkargar.github.io/depyard-website \
npm run generate
```

Robots directives, page descriptions, canonical links, and SoftwareApplication structured data are included. The `public/depyard-social.png` 1200×630 branded dashboard card is used for Open Graph and large Twitter previews, with explicit image dimensions and alt text.

## GitHub Pages CI/CD

`.github/workflows/ci.yml` runs the static build for pull requests and pushes to `main`. `.github/workflows/deploy-pages.yml` generates and deploys the site on **every pushed tag** (and supports manual runs via `workflow_dispatch`). It builds the tag's source, then publishes `.output/public` using GitHub's Pages deployment actions. The default project URL is `https://amkargar.github.io/depyard-website`.

One-time repository setup: open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The deploy workflow has the required `pages: write` and `id-token: write` permissions.

For a custom domain, add repository Actions variables:

- `SITE_URL`: the canonical site root, such as `https://depyard.example.com`
- `PAGES_BASE_URL`: `/` for a root-domain deployment, or a path with a trailing slash

Without those variables, the workflow automatically uses the GitHub Pages project path.

## Content

The website presents current product capabilities, installer instructions, and direct links to the registry references in the main Depyard repository. Keep deployment commands and supported-registry descriptions aligned with the upstream project's README and `docs/` directory.
