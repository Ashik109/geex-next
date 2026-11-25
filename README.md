# Geex Next

Geex dashboard and landing templates ported to the Next.js App Router with React, TypeScript, Bootstrap, and the original CSS.

```bash
npm ci
npm run dev
```

The dashboard starts at `/`. The other dashboards are `/index-2`, `/index-3`, and `/index-4`. The showcase is at `/landing`. The sidebar links to the apps, components, and demo pages.

Page sources are TSX under `src/app`. Shared header, sidebar, customization controls, and runtime resources are in `src/components`. Dashboard and landing assets live under `public/assets` and `public/landing-assets` respectively. Internal links use Next.js routes and reload the document so that the template's page-scoped plugins initialize against a clean DOM.

The authentication screens preview form validation without an account service. Calendar events are local demo data. Some template fonts and date-picker styles load from their original CDN URLs.

`npm run lint` and `npm run build` verify the project.
