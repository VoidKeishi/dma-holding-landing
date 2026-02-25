## DMA Holdings — Design Guidelines v1.0

### Theme Name
**"Strategic Scale & Mineral Authority"**

*Structuring Capital, Scaling Resources*

---

### Brand Essence

| Attribute | Description |
|-----------|-------------|
| **Personality** | Strategic · Authoritative · Premium · Connected |
| **Feeling** | Confidence, institutional credibility, long-term vision |
| **Tone** | Commanding but approachable, Investment-grade but clear |
| **Tagline** | *"Structuring Capital, Scaling Resources"* |

**Core Message:** Singapore-based capital discipline powering Southeast Asian resource development

---

### Color System

#### Hierarchy & Application

| Role | Color | Hex | Specific Usage |
|------|-------|-----|----------------|
| **Background Primary** | White | `#FFFFFF` | Main page background |
| **Background Secondary** | Ice Blue | `#EEF4F7` | Alternate sections, card fills |
| **Text Primary** | Deep Navy | `#1E3A4F` | Body text, headings (softer than pure black) |
| **Text Secondary** | Slate | `#8A9BA1` | Captions, muted text |
| **Brand Primary** | Deep Teal | `#2C5F73` | CTAs, navbar active, H2, primary buttons |
| **Brand Secondary** | Medium Teal | `#5B9BAD` | Hover states, overlays, secondary elements |
| **Accent Highlight** | Rich Gold | `#C49A2A` | Investment pillars, key stats, premium accents — used more prominently than MSV |
| **Accent Light** | Sky Teal | `#9DCAD6` | Decorative borders, subtle highlights, section dividers |
| **Accent Positive** | Forest Green | `#2D7D6A` | Links, success states, positive indicators |

#### Color Do's & Don'ts

| Do | Don't |
|-------|---------|
| Use Gold (#C49A2A) for investment pillars, key stats, and 2-3 elements per section | Overuse Gold on every element — it should still feel premium, not flashy |
| Light backgrounds (White + Ice Blue alternating) for a clean, institutional feel | Dark backgrounds across entire sections — keep it light and authoritative |
| Deep Teal (#2C5F73) for all primary CTAs and interactive elements | Mix multiple accent colors on buttons — keep CTAs consistent |
| Use Ice Blue (#EEF4F7) sections to create visual rhythm | Use pure black (#000000) for text — always use Deep Navy (#1E3A4F) |

---

### Typography

#### Font: Montserrat (Google Fonts)

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
```

#### Type Scale

| Element | Weight | Size | Style | Color |
|---------|--------|------|-------|-------|
| **H1 — Hero** | 700 | 48-56px | UPPERCASE optional | `#FFFFFF` on overlay |
| **H2 — Section** | 700 | 36-40px | UPPERCASE | `#1E3A4F` or `#2C5F73` |
| **H3 — Card Title** | 600 | 20-24px | Title Case | `#1E3A4F` |
| **Body** | 400 | 16-18px | Sentence case | `#1E3A4F` |
| **Caption/Label** | 500 | 12-14px | UPPERCASE | `#8A9BA1` |
| **Stats/Numbers** | 600 | 32-48px | — | `#2C5F73` or `#C49A2A` |

#### Typography Tips
- **Line-height:** 1.5-1.6 for body text (readable for investment/corporate content)
- **Letter-spacing:** 0.5-1px for UPPERCASE headings
- **Key figures:** Large and bold to emphasize scale and capability

---

### Grid System

| Breakpoint | Columns | Max-width | Gutter |
|------------|---------|-----------|--------|
| Mobile | 4 | 100% | 16px |
| Tablet | 8 | 100% | 20px |
| Desktop | 12 | 1200px | 24px |
| Large | 12 | 1400px | 24px |

---

### Site Structure (Single Page)

```
┌─────────────────────────────────────────────────────────┐
│                    NAVIGATION BAR                       │
│  [Logo]                              [Contact Us CTA]  │
└─────────────────────────────────────────────────────────┘

├── HERO SECTION
│   ├── Full-width background image + overlay
│   ├── Headline: "Building Strategic Natural Resources
│   │              Platforms Across Asia"
│   ├── Subheading (company description)
│   └── Primary CTA
│
├── COMPANY OVERVIEW
│   ├── Brief introduction (2-3 paragraphs)
│   └── Key positioning statement
│
├── INVESTMENT FOCUS (4 Pillars)
│   ├── Minerals — Nickel, REE, copper, gold
│   ├── Processing & Refining — Downstream infrastructure
│   ├── Resource Development — Partnerships & incubation
│   └── Strategic Services — MSV technical capability
│
├── GEOGRAPHIC FOCUS
│   ├── "Southeast Asia Platform"
│   ├── Country list: Vietnam, Cambodia, Laos, Thailand, Malaysia
│   └── "Singapore-based. Regionally focused. Globally connected."
│
├── CTA / CONTACT
│   ├── Call-to-action banner
│   └── Contact information or form
│
└── FOOTER
    ├── Company info
    ├── Legal / Copyright
    └── Social links (if applicable)
```

---

### Navigation

#### Desktop Navigation (Sticky)

| Property | Value |
|----------|-------|
| Height | 72-80px |
| Background (default) | `transparent` on Hero |
| Background (scrolled) | `#FFFFFF` + shadow |
| Shadow | `0 2px 8px rgba(30, 58, 79, 0.08)` |
| Logo Height | 40-48px |
| Style | Logo left, single CTA button right (minimal — single page) |
| CTA Button | Primary style ("Contact Us" or "Get in Touch") |

#### Mobile Navigation (< 1024px)

| Property | Value |
|----------|-------|
| Style | Logo + CTA button only (no hamburger needed for single page) |
| Alternative | If smooth-scroll anchors added: hamburger with section links |
| Background | `#FFFFFF` |
| CTA Button | Compact primary style |

#### Logo Requirements
- **Full color version** — for white backgrounds
- **White/Reversed version** — for dark hero overlay

---

### Component Library

#### Buttons

| Type | Style |
|------|-------|
| **Primary** | `bg: #2C5F73`, `text: #FFF`, `hover: #5B9BAD` |
| **Secondary** | `border: 2px #2C5F73`, `text: #2C5F73`, `hover: filled` |
| **Ghost (dark bg)** | `border: 2px #FFF`, `text: #FFF`, `hover: filled white` |
| **Text Link** | `color: #2D7D6A`, `underline on hover` |

#### Cards (Investment Pillars)

```css
.card {
  background: #FFFFFF;
  border: 1px solid #9DCAD6;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(30, 58, 79, 0.06);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(30, 58, 79, 0.12);
  transform: translateY(-2px);
  border-color: #C49A2A;
}
```

#### Hero Overlays

```css
/* Option A: Dark gradient */
background: linear-gradient(
  to bottom,
  rgba(30, 58, 79, 0.5),
  rgba(30, 58, 79, 0.85)
);

/* Option B: Brand tint */
background: linear-gradient(
  135deg,
  rgba(44, 95, 115, 0.7),
  rgba(30, 58, 79, 0.85)
);
```

---

### Section-by-Section Guidelines

#### Hero Section

| Property | Value |
|---------|-------|
| Height | 100vh or min 600px |
| Background | Full-width image + gradient overlay |
| Headline | H1, white, centered or left-aligned |
| Subheading | Body weight, white/80% opacity |
| CTA | Primary button (ghost style on dark bg) |

#### Company Overview

| Property | Value |
|---------|-------|
| Background | `#FFFFFF` |
| Layout | Centered text block, max-width 800px |
| Content | 2-3 paragraphs from body copy |

#### Investment Focus (4 Pillars)

| Property | Value |
|---------|-------|
| Background | `#EEF4F7` |
| Layout | 4-column grid (2x2 on tablet, 1-col on mobile) |
| Cards | Icon + title + description |
| Card accent | Gold (#C49A2A) for icons or top border |

#### Geographic Focus

| Property | Value |
|---------|-------|
| Background | `#FFFFFF` |
| Layout | Map or visual + country list |
| Tagline | "Singapore-based. Regionally focused. Globally connected." |

#### CTA / Contact

| Property | Value |
|---------|-------|
| Background | `#2C5F73` (Deep Teal) or image + overlay |
| Text | `#FFFFFF` |
| CTA | Ghost button style |

---

### Footer

**Background:** `#1E3A4F`

| Element | Style |
|---------|-------|
| Text | Montserrat 400, 14px, `#9DCAD6` |
| Copyright | Montserrat 400, 12px, `#8A9BA1` |
| Padding | 48px top/bottom |

---

### Imagery Guidelines

#### Photo Requirements

| Type | Specification |
|------|---------------|
| **Subject** | Strategic resource assets, mineral processing, corporate + field contexts |
| **Context** | Southeast Asia (Vietnam, Cambodia, Laos, Thailand, Malaysia) |
| **Must have** | Balance of corporate (boardroom, signing, strategy) and field (operations, resources) |
| **Tone** | Clean, institutional, premium — not overly rugged |
| **Resolution** | Minimum 1920px wide for hero |

#### Avoid
- Generic stock photos
- Overly gritty or dirty industrial imagery (this is a holding company, not field operations)
- Western/non-Asian contexts
- Cluttered or low-quality visuals

---

### Motion & Interaction

| Element | Animation |
|---------|-----------|
| Page load | Fade in (300ms) |
| Scroll reveal | Slide up + fade (200ms, stagger 50ms) |
| Hover cards | Lift + shadow (200ms ease-out) |
| Hover pillar cards | Border color change to Gold |
| Buttons | Subtle scale 1.02 (150ms) |
| Stats numbers | Count up animation on scroll |
| Navigation | Transparent → solid on scroll (200ms) |

**Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`

---

### Responsive Breakpoints

| Breakpoint | Width | Notes |
|------------|-------|-------|
| Mobile | < 640px | Single column, compact nav |
| Tablet | 640-1024px | 2 columns, compact nav |
| Desktop | > 1024px | Full layout, sticky nav |
| Large | > 1400px | Max-width container, centered |
