# AGENTS.md - app-portfolio

## Project Overview

React 19 + TypeScript 6 + Vite 8 portfolio site deployed to GitHub Pages. Code comments and UI text are in **French**.

## Quick Commands

```bash
npm run dev      # Start dev server
npm run build    # tsc -b && vite build
npm run lint     # ESLint (zero warnings allowed)
npm run format   # Prettier --write .
```

**No test scripts exist.** There is no test framework configured.

## Build Order

TypeScript must compile before Vite bundles. The `build` script handles this: `tsc -b && vite build`.

## Key Architecture

### Entry Point

`src/main.tsx` → wraps app in `ThemeProvider` → `CopyProvider` → `RouterProvider`

### Routing

`src/router.tsx` uses `createBrowserRouter` with `basename: import.meta.env.BASE_URL`.

**Critical**: Vite config sets `base: '/app-portfolio/'` for GitHub Pages. All routes must work under this base path.

Routes: `/`, `/about-me`, `/projects`, `/gallery`, `/contact`

### Data Layer

All portfolio data lives in `src/data/*.json` files (static JSON). Custom hooks in `src/hooks/use{Entity}.ts` load and type-cast this data. No API calls.

### Component Structure

```
src/components/
├── common/       # Reusable UI: Button, Card, Text, Header, etc.
├── features/     # Domain-specific: navigation/, profile/, copy-clipboard/, social-network/
└── layout/       # Page layouts: HomeLayout, MainLayout, SectionLayout, Transition
```

### Contexts

- `ThemeContext` - Dark/light mode (default: dark). Uses Tailwind's `.dark`/`.light` class on `<html>`.
- `CopyContext` - Clipboard copy with 3-second cooldown and alert state.

## Tooling Config

### TypeScript

Strict mode enabled in `tsconfig.app.json`:
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`
- Target: ES2020, JSX: react-jsx

### ESLint

Flat config (`eslint.config.js`) with:
- `typescript-eslint` recommended
- `eslint-plugin-react` recommended
- `react/react-in-jsx-scope: off` (not needed with React 17+ JSX transform)
- Ignores: `dist/`, `node_modules/`

### Prettier

`.prettierrc`:
- Single quotes, semicolons, trailing commas (all)
- 100 char print width, 2 spaces, LF line endings

### Tailwind CSS v4

Uses `@tailwindcss/vite` plugin. Custom theme tokens in `src/style/global.css`:
- Colors: `primary`, `secondary`, `background`, `foreground`, `text-primary`, `text-secondary`, `divider`
- Fonts: `title-black`, `title-bold`, `text-bold`, `text-medium`
- Light/dark themes via CSS custom properties on `.light`/`:root`

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`):
- Triggers on push to `main`
- Builds with Node 18, creates `dist/404.html` from `dist/index.html` (SPA fallback)
- Deploys to GitHub Pages

## Conventions

- Default exports for components and hooks
- Barrel exports via `index.ts` in `hooks/`, `contexts/`, `types/`
- Interfaces in `src/types/interfaces/*.type.ts` (note: `.type.ts` extension, not `.ts`)
- Enums as `as const` arrays + derived types in `src/types/enums/`
- Component props defined inline or in interfaces at top of file
- French comments (`/** Composant **/`, error messages in French)
