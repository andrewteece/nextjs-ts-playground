# Next.js + TypeScript Playground

![CI](https://github.com/andrewteece/nextjs-ts-playground/actions/workflows/ci.yml/badge.svg)
![CodeQL](https://github.com/andrewteece/nextjs-ts-playground/actions/workflows/codeql.yml/badge.svg)

A hands-on sandbox to practice modern **Next.js 15 (App Router) + React 19 + TypeScript** with Tailwind, Vitest, Storybook 9, and a full CI pipeline.
This repo is used for experimentation, learning, and to model the stack we’ll run at BAPI.

---

## ✨ Features

- ⚛️ Next.js 15 App Router + React 19
- 🔒 TypeScript strict mode
- 🎨 Tailwind CSS v3 (stable with Storybook, upgradeable to v4 later)
- 🧪 Vitest + React Testing Library + JSDOM
- 📖 Storybook 9 (Next.js + Vite framework, a11y, docs, Chromatic-ready)
- ✅ GitHub Actions CI (lint, typecheck, test, build, storybook)
- 🔐 CodeQL code scanning required in branch rules
- 📝 VS Code workspace settings, tasks, and launch configs
- 🧩 Playground katas (Todo app, Server Actions, API routes, etc.)
- 🚀 Ready for Headless WordPress integration via WPGraphQL

---

## 🚀 Getting Started

Install deps (pnpm recommended):

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Run Storybook locally:

```bash
pnpm storybook
```

Build Storybook static site:

```bash
pnpm build-storybook
```

---

## 📂 Project Structure

```
src/
  app/           # Next.js App Router routes
    (play)/      # Playground demos (Counter, API echo)
    api/         # Route handlers
    products/    # WordPress GraphQL demo routes
  components/    # UI building blocks
    ui/          # Primitives (Button, Card, Input, etc.)
    ui/__stories__ # Storybook stories colocated with components
  lib/           # Utilities and API clients (e.g., wp.ts)
  tests/         # Vitest test files + Storybook test integration
.storybook/      # Storybook config (main.ts, preview.tsx, setup files)
.vscode/         # Recommended VS Code settings, tasks, and extensions
```

---

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

For CI mode:

```bash
pnpm test:ci
```

For simple Storybook-bypassed tests:

```bash
pnpm test:simple
```

Example: `src/tests/counter.test.tsx` validates components render + fire events.

---

## 🔍 Linting & Type Checking

```bash
pnpm lint       # ESLint
pnpm typecheck  # TypeScript compiler
```

---

## 🔗 CI / CD

- GitHub Actions run `lint`, `typecheck`, `test`, `build`, and `storybook` on every PR.
- Branch protections enforce all checks must pass before merging.
- CODEOWNERS ensures PRs require review (self-approval allowed for this playground).
- CodeQL scanning is required and runs on every PR.

---

## 📦 Deployment

Deploy easily on [Vercel](https://vercel.com/).
Example:

```bash
pnpm build
pnpm start
```

Storybook can be deployed with [Chromatic](https://www.chromatic.com/) or Vercel preview apps.

---

## 🛠 Contributing / PR Flow

1. Create a feature branch:
   ```bash
   git checkout -b feat/my-feature
   ```
2. Push and open a Pull Request.
3. CI checks (`lint`, `typecheck`, `test`, `build`) must pass.
4. Approve the PR (Code Owner review).
5. Squash & merge into `main`.

---

## 🏗 BAPI-Aligned Stack

This playground models the tech stack planned for BAPI’s website rebuild:

- **Next.js 15 App Router** + **React 19** + **TypeScript**
- **Tailwind CSS v3 → v4 migration** + **shadcn/ui** for accessible UI primitives
- **Headless WordPress** via **WPGraphQL** (+ ACF)
  - GraphQL client with `fetch` and ISR caching (`revalidate`)
  - On-demand cache revalidation via webhook (`/api/revalidate`)
- **MegaMenu** navigation populated dynamically from WordPress menus
- **Internationalization** with `next-intl` (locale subpaths, localized metadata)
- **SEO**: `sitemap.ts`, `robots.ts`, structured data (JSON-LD), Open Graph
- **Testing**: Vitest + Testing Library + Storybook + Playwright (optional)
- **Deployment**: Vercel with ISR + CDN caching

> Future branches will demonstrate WordPress integration (`src/lib/wp.ts`, `/products`, `/resources`), i18n, and SEO features.

---

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Vitest Docs](https://vitest.dev)
- [Storybook 9 Docs](https://storybook.js.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [WPGraphQL](https://www.wpgraphql.com/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)
