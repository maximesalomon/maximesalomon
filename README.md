# maximesalomon.com

Personal site and blog for Maxime Salomon, rebuilt as a static-exported Next.js app and deployed on Vercel.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript 6
- Tailwind CSS 4
- Static export via `output: "export"`

## Requirements

- Node.js `20.9+`
- Corepack-enabled `pnpm`

## Local development

```bash
corepack enable
pnpm install
pnpm dev
```

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
```

## Static deployment

The app is built as a static export. Running `pnpm build` produces the deployable output in `out/`.

Vercel should build with:

```bash
pnpm build
```

No Node server runtime is required for production.

## Canonical URL configuration

Set `NEXT_PUBLIC_SITE_URL` in Vercel to the production site URL when you are ready to lock canonical metadata. Until then, the app falls back to Vercel-provided environment variables or `http://localhost:3000` locally.

## Dependency maintenance

- GitHub Actions runs lint, typecheck, unit tests, build, and Playwright smoke tests.
- Dependabot opens weekly dependency update PRs for npm packages and GitHub Actions.
