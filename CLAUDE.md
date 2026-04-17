# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sodium Learn marketing website — a conversion-focused site for a workplace learning platform. Built with Next.js 16 (App Router), Tailwind CSS v4, TypeScript, and Sanity v3 CMS.

**Conversion flow:** Clarity → Trust → Relevance → Demo

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build (uses Turbopack)
- `npm run lint` — ESLint

## Architecture

**Design system tokens are defined in CSS** (`src/app/globals.css`) using Tailwind v4's `@theme` directive. There is NO `tailwind.config.ts` — all tokens live in CSS. Use token classes (e.g. `bg-bg-primary`, `text-action-primary`, `p-md`, `rounded-lg`) instead of raw values.

**Key token namespaces:**
- Colors: `bg-*`, `text-*`, `action-*`, `border-*`, `brand-*`, `gray-*`, `success/error/warning/info-*`, `accent-*`, `focus-*`
- Spacing: `xs(8px)`, `sm(16px)`, `md(24px)`, `lg(32px)`, `xl(48px)`, `xxl(64px)`, `section(96px)`, `section-compact(64px)`, `section-hero(128px)`
- Typography: Custom classes `.text-display-1` through `.text-label-sm` (defined in globals.css)
- Radius: `sm(6)`, `md(8)`, `lg(12)`
- Shadows: `shadow-card`, `shadow-card-hover`, `shadow-modal`, `shadow-nav`

**Hard rules (from design system):**
- No raw hex values in components — use Tailwind token classes only
- All spacing must be multiples of 8px
- No arbitrary or one-off styles
- Focus ring: 3px solid #4898E8, 2px offset — required on ALL interactive elements

## Directory Structure

```
src/
  app/          # Pages (App Router)
    page.tsx    # Homepage
    product/    # Product/Features
    solutions/  # Solutions index + [slug]
    about/      # About page
    blog/       # Blog index + [slug]
    api/        # revalidate webhook, health check
  components/
    layout/     # Navbar, Footer, Container, Section
    ui/         # Button, Card, Badge, Accordion
    sections/   # Homepage sections (Hero, Features, etc.)
    blog/       # BlogCard
    animations/ # ScrollReveal, StaggerChildren
  lib/
    sanity/     # client, queries, image builder
    utils.ts    # cn() (clsx + tailwind-merge)
    constants.ts # Nav links, footer links, CTA text
    seo.tsx      # generatePageMetadata, JsonLd component
```

## Animation System

CSS-first: Intersection Observer adds `.revealed` class → CSS transition. No JS animation library (no Framer Motion). Stagger delays via `.scroll-reveal-delay-{1-5}` classes. Reduced motion respected via `@media (prefers-reduced-motion: reduce)`.

## Sanity CMS

Client configs in `src/lib/sanity/client.ts`. GROQ queries in `src/lib/sanity/queries.ts`. Blog content currently uses hardcoded sample data — switch to Sanity queries by importing from the client. ISR webhook at `/api/revalidate`.

## Deployment

Railway via Dockerfile (standalone output). Env vars: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_TOKEN`, `SANITY_REVALIDATE_SECRET`, `NEXT_PUBLIC_SITE_URL`.

## Next.js 16 Notes

This version has breaking changes from typical Next.js patterns. Read `node_modules/next/dist/docs/` before modifying Next.js configuration.