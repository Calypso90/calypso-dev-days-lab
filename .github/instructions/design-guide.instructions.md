---
description: "Use when designing or styling Bingo Mixer UI components. Enforces Brutalist Blocks aesthetic: heavy black borders, neon yellow accents, monospace typography, hard edges, bold animations."
name: design-guide
applyTo: ["src/components/**/*.tsx", "src/index.css"]
---

# Brutalist Blocks Design Guide

Bingo Mixer uses a **Brutalist Blocks** aesthetic: raw, monumental, high-contrast design with heavy black borders, neon yellow accents, monospace typography, and bold animations. This is not generic — it's deliberately distinctive and committed.

## Color System

Define in `src/index.css` `@theme`:
```css
@theme {
  --color-black: #000000;
  --color-charcoal: #1a1a1a;
  --color-yellow: #ffff00;
  --color-white: #ffffff;
  --color-text-dark: #000000;
  --color-text-light: #ffffff;
}
```

**Usage**:
- **Backgrounds**: Charcoal (#1a1a1a) for dark sections, white for cards/content
- **Borders**: Pure black (3px minimum, `border-black border-4`)
- **Accents**: Neon yellow (#ffff00) for active states, winning squares, CTAs, highlights
- **Text**: Black on white/light, white on charcoal/dark

**Never**: Gray, blue, green, or soft pastels. No opacity on core colors (stark contrast).

## Typography

**Fonts** (import in `src/index.css`):
```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=IBM+Plex+Sans:wght@600;700&display=swap');
```

**Headings**: IBM Plex Mono, bold, ALL CAPS, larger sizes (5xl for H1)
**Body**: IBM Plex Sans bold or IBM Plex Mono, no light weights

**Never**: system-ui, Inter, Roboto, or generic sans-serif. No light weights.

## Borders & Spacing

**Borders**: 3-4px solid black, NO rounding, all interactive elements
**Spacing**: Generous (6-8 units = 48-64px padding), dramatic gaps (16-32px)
**Shadows**: Heavy and offset, not subtle
**Never**: Subtle spacing, rounded corners, thin borders, minimal padding

## Component Patterns

### Buttons
```tsx
className="px-8 py-6 bg-white border-4 border-black text-black font-bold text-lg hover:bg-yellow active:scale-95"
```

### Cards
```tsx
className="bg-white border-4 border-black p-8 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.8)]"
```

### Bingo Squares
```tsx
// Unmarked
className="border-4 border-black bg-white text-black active:scale-95"
// Marked
className="border-4 border-black bg-yellow text-black font-bold"
// Free space
className="border-4 border-black bg-black text-yellow font-bold"
```

### Dark Sections
```tsx
className="bg-charcoal text-white border-b-4 border-yellow"
```

## Animations

**Entry**: Staggered blocks with animation-delay (0ms, 50ms, 100ms...)
**Interaction**: Scale 95% on tap, instant (active:scale-95)
**Win**: Yellow flash pulse, large scaling, CSS confetti particles
**Timing**: 100-150ms for micro, 500-800ms for celebration

## Anti-patterns

❌ Rounded corners, soft colors, thin borders, light fonts, subtle shadows, generic system fonts, opacity on core colors
