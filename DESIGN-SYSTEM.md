# Design System

## Colors

### Brand
| Token | Hex | Usage |
|-------|-----|-------|
| `brand-lime` | `#b5f727` | Primary CTA buttons, accent highlights |
| `brand-blue` | `#009AFF` | Secondary accent (logo, sparingly) |

### Surfaces
| Token | Hex | Usage |
|-------|-----|-------|
| `surface-primary` | `#151515` | Dark backgrounds (hero, footer, nav) |
| `surface-elevated` | `#1e1e1e` | Raised elements on dark backgrounds |
| `surface-border` | `#2e2e2e` | Borders on dark surfaces |
| `surface-light` | `#f8f8f8` | Light page background |
| `surface-white` | `#ffffff` | White sections |

### Text
| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#151515` | Headings, bold text on light backgrounds |
| `text-secondary` | `#4a4a4a` | Body text on light backgrounds |
| `text-muted` | `#6b6b6b` | Subtitles, labels, captions |

On dark backgrounds, use `text-white`, `text-white/60`, `text-gray-300`, `text-gray-400`, `text-gray-500` for the same hierarchy.

## Typography

**Font family:** DM Sans (Google Fonts) for both display and body.

| Style | Classes | Usage |
|-------|---------|-------|
| Page heading | `text-5xl md:text-7xl font-display font-medium tracking-tight` | Page titles ("Who We Are", "Our Branches") |
| Section subtitle | `text-base text-text-muted` | One-liner below page headings |
| Body large | `text-xl md:text-2xl text-text-secondary leading-relaxed` | Intro paragraphs |
| Body | `text-base text-text-secondary` | Standard body text |
| Label | `text-xs font-bold uppercase tracking-wide text-gray-500` | Section labels, footer headings |
| Card heading | `text-2xl md:text-3xl font-display font-medium` | Accordion cards, feature cards |
| Small | `text-sm` | Buttons, links, captions |

## Spacing

- Page max-width: `max-w-6xl` (1152px) with `px-6` padding
- Section vertical padding: `py-20`
- Hero container: `w-[99%] max-w-[1800px] mx-auto`
- Card gaps: `gap-3` or `gap-4`

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-hero` | `1.5rem` | Hero container, accordion cards |
| `rounded-card` | `0.75rem` | Content cards |
| `rounded-image` | `1rem` | Image containers |
| `rounded-full` | pill | Buttons, nav pills |

## Breakpoints

| Token | Width | Usage |
|-------|-------|-------|
| `mobile` | 320px | Small phones |
| `tablet` | 768px | Tablets |
| `laptop` | 1024px | Desktop nav switches from mobile pill to full nav |
| `desktop` | 1440px | Large screens |

## Buttons

### Primary CTA
```
px-8 py-3 bg-brand-lime text-surface-primary font-medium rounded-full text-sm hover:brightness-110 transition
```

### Secondary / Outline
```
px-8 py-3 border border-white/30 text-white font-medium rounded-full text-sm hover:bg-white/10 transition
```

### Nav pill link (active)
```
px-4 py-1.5 rounded-full text-sm bg-white/20 text-white font-medium
```

## Components

### FadeIn
Wraps sections for scroll-triggered fade-up animation. Uses Intersection Observer. Optional `delay` prop (ms).
```jsx
<FadeIn delay={150}>
  <p>Content fades in on scroll</p>
</FadeIn>
```

### Hero on-load animation
Staggered fade-up on page load using CSS classes:
```
hero-animate hero-animate-delay-1  (0.05s)
hero-animate hero-animate-delay-2  (0.15s)
hero-animate hero-animate-delay-3  (0.3s)
```

### Image carousel
Two-row infinite scroll with hover-pause. Uses `w-max` containers, duplicated content, and `translateX(-50%)` for seamless looping. Edge gradients fade to `surface-primary`.

### Adaptive header
Samples background color at three points (logo, nav, apply button) using `elementFromPoint` and switches between light/dark variants independently. Mobile pill is transparent until scroll > 10px.

## Image Guidelines

- All raster images converted to WebP (quality 80-92)
- Large display images (branch cards): full native resolution, quality 90
- Carousel/thumbnail images: capped at 1200px wide, quality 80
- Below-the-fold images use `loading="lazy"`
- Build-time optimization via `vite-plugin-image-optimizer`
