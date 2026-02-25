# DMA Holdings Corporate Theme

This document provides the official DMA Holdings corporate branding colors and typography derived from the DMA logo and brand identity for use in the landing page development.

## Source
Extracted from: DMA Holdings logo (mountain-peak mark with teal gradient) and brand identity materials.

### Design Relationship
DMA Holdings is the parent investment group; Mining Services Vietnam (MSV) is a subsidiary. Both brands share the Montserrat typeface for family consistency. DMA's palette is deeper and more authoritative — reflecting its role as a strategic holding company versus MSV's technical services positioning.

| Aspect | MSV (Services) | DMA (Holding) |
|--------|---------------|---------------|
| Personality | Technical, Practical, Reliable | Strategic, Authoritative, Premium |
| Primary Color | `#3494BA` (bright blue) | `#2C5F73` (deep steel teal) |
| Feel | Field-ready, hands-on | Boardroom, capital markets |

## Color Palette

### Base Colors
These form the foundation of the color system for text, backgrounds, and structural elements.

| Name | Hex Code | Tailwind Token | Usage |
|------|----------|----------------|-------|
| White | `#FFFFFF` | — | Main page background, reversed text |
| Ice Blue | `#EEF4F7` | `dma-ice` | Alternate section backgrounds, card fills |
| Deep Navy | `#1E3A4F` | `dma-dark` | Primary text, headings (softer than pure black) |
| Slate | `#8A9BA1` | `dma-slate` | Captions, muted text, secondary copy |

### Accent Colors
Brand accent colors for highlights, call-to-actions, and visual interest.

| Name | Hex Code | Tailwind Token | Color | Usage |
|------|----------|----------------|-------|-------|
| Deep Teal | `#2C5F73` | `dma-teal` | Dark Teal | **Primary brand color** — CTAs, navbar active, H2, primary buttons |
| Medium Teal | `#5B9BAD` | `dma-teal-light` | Mid Teal | Hover states, overlays, secondary elements |
| Sky Teal | `#9DCAD6` | `dma-sky` | Light Blue | Decorative accents, subtle borders, light highlights |
| Rich Gold | `#C49A2A` | `dma-gold` | Gold | Investment pillars, key stats, premium accents |
| Forest Green | `#2D7D6A` | `dma-green` | Green | Links, success states, positive indicators |

### Interactive Elements

| Element | Hex Code | Usage |
|---------|----------|-------|
| Hyperlink | `#2D7D6A` | Default link color (Forest Green) |
| Hyperlink Hover | `#2C5F73` | Hovered link color (Deep Teal) |

## Typography

### Font Family
**Montserrat** is the official DMA Holdings typeface for both headings and body text, shared with the MSV brand for family consistency.

- **Font Name:** Montserrat
- **Usage:** All text (headings and body)
- **Source:** Google Fonts
- **Import URL:** `https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap`

### Recommended Weights
- 300 (Light) — Subtle text, large display numbers
- 400 (Regular) — Body text
- 500 (Medium) — Emphasized body text, labels
- 600 (Semi-Bold) — Subheadings, card titles
- 700 (Bold) — Main headings, hero text

## Usage Guidelines

### Color Usage Recommendations
- Use **Deep Teal (#2C5F73)** as the primary brand color for main CTAs and important UI elements
- Use **Rich Gold (#C49A2A)** more prominently than MSV uses gold — for investment pillars, key statistics, and premium emphasis (but still with restraint)
- Use **Deep Navy (#1E3A4F)** for body text on light backgrounds instead of pure black
- Use **Ice Blue (#EEF4F7)** for alternating section backgrounds to create visual rhythm
- Reserve **Forest Green (#2D7D6A)** for links and positive action indicators

### Typography Guidelines
- Maintain consistent use of Montserrat across all text elements
- Use appropriate font weights to establish visual hierarchy
- Ensure sufficient contrast between text and backgrounds for accessibility

## CSS Variables Example

```css
:root {
  /* Base Colors */
  --color-white: #FFFFFF;
  --color-ice: #EEF4F7;
  --color-dark: #1E3A4F;
  --color-slate: #8A9BA1;

  /* Brand Colors */
  --color-teal: #2C5F73;       /* Primary — Deep Teal */
  --color-teal-light: #5B9BAD; /* Secondary — Medium Teal */
  --color-sky: #9DCAD6;        /* Decorative — Sky Teal */
  --color-gold: #C49A2A;       /* Accent — Rich Gold */
  --color-green: #2D7D6A;      /* Positive — Forest Green */

  /* Interactive */
  --color-link: #2D7D6A;
  --color-link-hover: #2C5F73;

  /* Typography */
  --font-primary: 'Montserrat', sans-serif;
}
```

## Tailwind CSS Example

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'dma-ice': '#EEF4F7',
        'dma-dark': '#1E3A4F',
        'dma-slate': '#8A9BA1',
        'dma-teal': '#2C5F73',
        'dma-teal-light': '#5B9BAD',
        'dma-sky': '#9DCAD6',
        'dma-gold': '#C49A2A',
        'dma-green': '#2D7D6A',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
}
```
