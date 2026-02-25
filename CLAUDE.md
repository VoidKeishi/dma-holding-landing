# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page corporate landing page for **Discovery Minerals Asia (DMA Holdings)** — a Singapore-based investment group focused on metals, critical minerals, and resource development in Southeast Asia. Domain: `www.dma-holdings.com`.

**Status: Scaffolded.** Next.js 16 + Tailwind CSS v4 project created. Placeholder page renders with DMA brand tokens. Ready for component implementation.

## Tech Stack

Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, lucide-react

## Build Commands

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint check
```

## Architecture & Key Files

```
app/layout.tsx       — Root layout (Montserrat font, metadata, globals.css)
app/page.tsx         — Single-page entry point
app/globals.css      — Tailwind + DMA theme tokens (dma-* colors, CSS variables)
lib/utils.ts         — cn() helper (clsx + tailwind-merge)
lib/animations.ts    — Framer Motion presets (fadeInUp, stagger, etc.)
next.config.ts       — Image optimization, standalone output
GUIDELINES.md        — Full design system (colors, typography, grid, components, animations, section specs)
THEME.md             — Color palette, Tailwind tokens (dma-*), CSS variables
" Content.md"        — All page copy (NOTE: filename has a leading space)
AGENTS.md            — Detailed agent guidance, code style rules, brand quick-reference
Reference/           — Logo assets + theme files (gitignored — not in repo)
```

**Read GUIDELINES.md, THEME.md, and Content.md before writing any frontend code.**

## Critical Design Rules

- **Never use `#000000`** for text — use Deep Navy `#1E3A4F` (`dma-dark`)
- **Primary brand color**: Deep Teal `#2C5F73` (`dma-teal`) for all CTAs, buttons, active nav
- **Gold `#C49A2A`** (`dma-gold`): used more prominently than MSV (sister brand) — for investment pillars, key stats — but not on every element
- **Section backgrounds alternate** White `#FFFFFF` / Ice Blue `#EEF4F7` (`dma-ice`)
- **No dark section backgrounds** except CTA band and footer
- **Font**: Montserrat only, weights 300-700, via Google Fonts
- **All copy** comes from Content.md — do not invent text
- **All colors** come from THEME.md — no ad-hoc hex values

## Relationship to MSV-Landing

DMA is the parent holding company; MSV (`/home/keishi/Code/MSV-Landing`) is a subsidiary. Both use Montserrat and share document formats, but color palettes are intentionally distinct (zero hex overlap except white). DMA's palette is deeper/more institutional; MSV's is brighter/more technical.

## Page Sections (in order)

1. Nav — sticky, transparent→solid on scroll, logo left, single CTA right
2. Hero — 100vh, full-width image + gradient overlay
3. Company Overview — white bg, centered text
4. Investment Focus — ice blue bg, 4-column card grid
5. Geographic Focus — white bg, map/visual + 5 countries
6. CTA / Contact — deep teal bg
7. Footer — deep navy bg
