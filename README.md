# Disrupt Website

The website for [Disrupt](https://disruptnu.com), Northeastern University's largest undergraduate fintech club.

## Stack

- **Framework:** React 18 + React Router
- **Build tool:** Vite
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Image optimization:** sharp, vite-plugin-image-optimizer, svgo

## Getting Started

```bash
npm install
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs to `dist/`. The Vite image optimizer runs automatically during build.

## Deploying

The site is hosted on Vercel under the project `disrupt-website`.

```bash
npx vercel deploy --prod
```

Production URL: https://disruptnu.com

## Project Structure

```
src/
  Components/
    HomeComponents/       # Hero, WhoWeAre, WhatWeDo, Events, Community
    ConsultingComponents/ # Consulting page sections
    QuantComponents/      # Quant page sections
    ResearchComponents/   # Research page sections
    VenturesComponents/   # Finnovate page sections
    EventsComponents/     # Events page sections
    AboutComponents/      # About, Team, Leadership
    shared/               # Footer, FadeIn
  Content/                # Static text content
  img/                    # Image assets (WebP)
public/
  logos/                  # Brand logos (PNG)
```

## Key Files

- `context.md` - Brand voice, content guide, page-by-page requirements
- `DESIGN-SYSTEM.md` - Colors, typography, spacing, component patterns
- `TODO.md` - Outstanding tasks and placeholder content

## Contributors

- Arsh Jafri
- Preet Singh
- Brian Kapusta
- Helen Miao
- Connor Tessaro
- Harsh Singh

Last updated April 28, 2026 by Arsh Jafri.
