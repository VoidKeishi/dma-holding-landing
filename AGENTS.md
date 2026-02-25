# AGENTS.md — DMA Holdings Landing Page

## Project Overview

Single-page corporate landing page for **Discovery Minerals Asia (DMA Holdings)**, a Singapore-based investment and operating group focused on metals, critical minerals, and resource development in Southeast Asia. Domain: `www.dma-holdings.com`.

**Project status**: Scaffolded — Next.js 16 + Tailwind CSS v4 project created with DMA brand tokens. Placeholder page renders. Ready for component implementation.

## Repository Structure

```
/
├── AGENTS.md              # This file — agent guidance
├── README.md              # One-line project description
├── GUIDELINES.md          # Full design system (309 lines) — THE primary reference
├── THEME.md               # Color palette, typography, Tailwind tokens, CSS variables
├── Content.md             # All page copy (headline, body, pillars, regions) [note: leading space in filename]
├── .gitignore             # Ignores /Reference
└── Reference/             # Brand assets (not tracked in git)
    ├── DMA Logo/          # 13 logo variants (horizontal, vertical, white, transparent, watermark)
    ├── Theme.png          # Visual theme reference
    └── theme1.xml, theme2.xml  # Theme definitions
```

## Build / Lint / Test Commands

**Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS v4 (`@tailwindcss/postcss`), Framer Motion, lucide-react

```bash
npm install          # Install dependencies
npm run dev          # Dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint check
```

## Brand & Design System (MANDATORY — Read Before Any UI Work)

### Source of Truth

1. **GUIDELINES.md** — Complete design system: colors, typography, grid, components, animations, responsive breakpoints, section-by-section specs
2. **THEME.md** — Color palette with Tailwind tokens and CSS variables
3. **` Content.md`** — All page content (note the leading space in filename)

**Read all three files before writing any frontend code.**

### Color Palette (Quick Reference)

| Token | Hex | Usage |
|-------|-----|-------|
| `dma-ice` | `#EEF4F7` | Alternate section backgrounds |
| `dma-dark` | `#1E3A4F` | Primary text (NEVER use `#000000`) |
| `dma-slate` | `#8A9BA1` | Captions, muted text |
| `dma-teal` | `#2C5F73` | **Primary brand** — CTAs, navbar, H2, buttons |
| `dma-teal-light` | `#5B9BAD` | Hover states, overlays |
| `dma-sky` | `#9DCAD6` | Decorative borders, light highlights |
| `dma-gold` | `#C49A2A` | Investment pillars, key stats, premium accents |
| `dma-green` | `#2D7D6A` | Links, success states |

### Color Rules

- **DO**: Alternate White `#FFFFFF` and Ice Blue `#EEF4F7` for section backgrounds
- **DO**: Use Gold `#C49A2A` for investment pillars and key stats (more prominent than subsidiary brand)
- **DO**: Use Deep Teal `#2C5F73` consistently for all primary CTAs
- **DON'T**: Use pure black `#000000` for text — always Deep Navy `#1E3A4F`
- **DON'T**: Use dark backgrounds for entire sections — keep it light and institutional
- **DON'T**: Overuse Gold on every element — it should feel premium, not flashy

### Typography

- **Font**: Montserrat (weights: 300, 400, 500, 600, 700)
- **H1 (Hero)**: 700, 48-56px, uppercase optional, white on overlay
- **H2 (Section)**: 700, 36-40px, UPPERCASE, Deep Navy or Deep Teal
- **H3 (Card)**: 600, 20-24px, Title Case, Deep Navy
- **Body**: 400, 16-18px, sentence case, Deep Navy
- **Caption**: 500, 12-14px, UPPERCASE, Slate
- **Line-height**: 1.5-1.6 for body; letter-spacing: 0.5-1px for uppercase headings

### Page Sections (in order)

1. **Navigation** — Sticky, transparent→solid on scroll, logo left, single CTA right
2. **Hero** — Full-width image + gradient overlay, 100vh, headline + subheading + CTA
3. **Company Overview** — White bg, centered text, max-width 800px
4. **Investment Focus** — Ice Blue bg, 4-column card grid (Minerals, Processing, Resource Dev, Strategic Services)
5. **Geographic Focus** — White bg, map/visual + country list (VN, KH, LA, TH, MY)
6. **CTA / Contact** — Deep Teal bg or image overlay, ghost button
7. **Footer** — Deep Navy `#1E3A4F` bg, Montserrat 14px in Sky Teal

### Animation & Motion

- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Page load: fade in 300ms
- Scroll reveal: slide up + fade 200ms, stagger 50ms
- Card hover: lift + shadow 200ms, border→Gold
- Buttons: scale 1.02 on hover, 150ms
- Stats: count-up animation on scroll
- Nav: transparent→solid 200ms on scroll

### Responsive Breakpoints

| Breakpoint | Width | Columns | Notes |
|------------|-------|---------|-------|
| Mobile | < 640px | 4 | Single column, compact nav (logo + CTA only) |
| Tablet | 640-1024px | 8 | 2-col cards, compact nav |
| Desktop | > 1024px | 12 | Full layout, sticky nav, max-width 1200px |
| Large | > 1400px | 12 | Max-width 1400px, centered |

## Code Style Guidelines (For Implementation)

### General

- This is a **single-page static site** — keep it simple, no over-engineering
- Prefer semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- All content comes from `Content.md` — do not invent copy
- All design tokens come from THEME.md — do not create ad-hoc colors or fonts

### CSS / Tailwind

- Use Tailwind tokens defined in THEME.md (`dma-teal`, `dma-gold`, etc.)
- Define CSS variables as shown in THEME.md `:root` block
- Follow the component patterns in GUIDELINES.md (cards, buttons, hero overlays)
- Mobile-first responsive design

### Images & Assets

- Logo variants are in `Reference/DMA Logo/` — use appropriate variant per context
- Hero background: full-width, min 1920px wide, with gradient overlay
- Avoid generic stock photos; prefer Southeast Asian mineral/corporate contexts
- This repo's `Reference/` directory is gitignored — assets must be copied to the project's public/static directory

### Accessibility

- Ensure sufficient color contrast (the palette was designed for this)
- Use proper heading hierarchy (H1→H2→H3, no skipping)
- Alt text on all images
- Keyboard-navigable interactive elements
- `prefers-reduced-motion` support for animations

### File Naming

- Lowercase kebab-case for new files and directories
- Components: PascalCase if using a framework (React/Vue/Svelte)

## Key Decisions Still Needed

1. **Contact form**: Static mailto? Form service (Formspree, etc.)? Backend?
2. **Map**: Static image? Interactive map (Mapbox, Google Maps)?
3. **Image sourcing**: Stock photos? Custom photography?

## Logo Assets Available

13 variants in `Reference/DMA Logo/`:
- Horizontal: full color, white
- Vertical: full color
- Logo + Title: below, side (transparent bg)
- Logo + Title + Slogan: white variant
- Logo only: transparent, white bg, white, watermark
- Slogan: horizontal (color, white), vertical
