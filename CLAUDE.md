# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site at rheamendiratta.com. Next.js 14 (App Router) with static export for GitHub Pages. No Tailwind — all styling via CSS custom properties in `src/app/globals.css`.

## Commands

```bash
npm run dev      # local dev server at localhost:3000
npm run build    # static export → out/
```

## Architecture

Single-page app (`src/app/page.tsx` is `'use client'`) with state for active filter and open lightbox project. Key files:

- `src/data/projects.ts` — **add projects here**. Each entry has `id`, `title`, `description`, `body[]`, optional `bullets[]`/`note`, `tags`, `color` (`saffron`/`haldi`/`gulabi`), and optional `externalLink`/`githubLink`.
- `src/app/globals.css` — all CSS variables (from the style guide), layout, and component classes.
- `src/components/` — Hero, Sidebar, ProjectCard, Lightbox, ThemeToggle.

## Design system

Three spice colors map to the three filter categories:
- **Kesar/Saffron** (`--saffron`) → Education
- **Haldi/Olive** (`--haldi`) → Research & Data
- **Gulabi/Deep Rose** (`--gulabi`) → Social Impact

Fonts: Instrument Serif (headings), DM Sans (body), JetBrains Mono (tags/mono). Loaded via `next/font/google` in `layout.tsx`.

Dark mode: toggled by `data-theme="dark"` on `<html>`, persisted in `localStorage`. Anti-flash script in `layout.tsx`.

## Deployment

GitHub Actions at `.github/workflows/deploy.yml` — push to `main` auto-deploys to GitHub Pages. Requires GitHub Pages enabled in repo Settings → Pages → Source: GitHub Actions. Custom domain set via `public/CNAME`.

## Adding a project

Come back to the codespace, call Claude, share an image of what the project page should look like. Claude adds a new entry to `src/data/projects.ts`. To add manually, append a new object to the `projects` array following the existing pattern.
