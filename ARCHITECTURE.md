# Austin Rose Portfolio - Architecture Overview

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.0 | React framework with App Router |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| React | 19.x | UI library |

## Project Structure

```
austin-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (fonts, header, footer)
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Design tokens & base styles
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   ├── work/
│   │   │   └── page.tsx        # Portfolio grid
│   │   ├── experience/
│   │   │   └── page.tsx        # Career timeline
│   │   ├── playground/
│   │   │   └── page.tsx        # Interactive demos (coming soon)
│   │   └── contact/
│   │       └── page.tsx        # Contact page
│   │
│   └── components/
│       └── layout/
│           ├── index.ts        # Barrel export
│           ├── Header.tsx      # Fixed navigation
│           ├── Footer.tsx      # Site footer
│           └── Container.tsx   # Max-width wrapper
│
├── public/                     # Static assets
│   ├── resume.pdf              # (to be added)
│   └── images/                 # (to be added)
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Design System

### Aesthetic: "Refined Data Elegance"
Dark mode default, inspired by Claude.ai's minimalist approach. Focus on generous whitespace, centered layouts, and data-driven visual hierarchy.

### Color Palette

Defined in `globals.css` as CSS custom properties:

```css
/* Backgrounds */
--bg-primary: #0f0f0f      /* Main background */
--bg-secondary: #1a1a1a    /* Cards, sections */
--bg-tertiary: #242424     /* Elevated elements */

/* Accents */
--accent-primary: #E87C5C  /* Coral - CTAs, highlights */
--accent-secondary: #F4A261 /* Amber - secondary */
--accent-tertiary: #2A9D8F /* Teal - links, tags */

/* Text */
--text-primary: #F5F5F5    /* Headings */
--text-secondary: #A3A3A3  /* Body text */
--text-tertiary: #6B6B6B   /* Captions */

/* Utility */
--border-subtle: #2A2A2A
```

### Typography

Three Google Fonts loaded via `next/font`:

| Font | CSS Variable | Usage |
|------|--------------|-------|
| Fraunces | `--font-fraunces` | Display/headings (serif) |
| Plus Jakarta Sans | `--font-plus-jakarta` | Body text (sans-serif) |
| JetBrains Mono | `--font-jetbrains` | Code/data (monospace) |

### Type Scale

```css
--font-size-hero: 4rem     /* 64px - hero text */
--font-size-h1: 2.5rem     /* 40px - page titles */
--font-size-h2: 1.75rem    /* 28px - section titles */
--font-size-h3: 1.25rem    /* 20px - card titles */
--font-size-body: 1rem     /* 16px - body */
--font-size-small: 0.875rem /* 14px - captions */
--font-size-micro: 0.75rem /* 12px - labels */
```

### Spacing

```css
--spacing-xs: 0.25rem   /* 4px */
--spacing-sm: 0.5rem    /* 8px */
--spacing-md: 1rem      /* 16px */
--spacing-lg: 2rem      /* 32px */
--spacing-xl: 4rem      /* 64px */
--spacing-2xl: 8rem     /* 128px - section spacing */
--spacing-3xl: 12rem    /* 192px */
```

## Components

### Layout Components

#### `Header` (`src/components/layout/Header.tsx`)
- Fixed position navigation bar
- Logo ("AR") links to home
- 6 navigation links with active state indicator
- Backdrop blur effect on scroll
- Client component (uses `usePathname`)

#### `Footer` (`src/components/layout/Footer.tsx`)
- Social links: LinkedIn, GitHub, Email
- Copyright with dynamic year
- Secondary navigation links
- Server component

#### `Container` (`src/components/layout/Container.tsx`)
- Max-width wrapper (1200px)
- Horizontal padding (24px)
- Polymorphic `as` prop for semantic HTML

## Pages

### Homepage (`/`)
Sections:
1. **Hero** - Name, title, value prop, dual CTAs
2. **Impact Metrics** - $55M, 23K+, 950+ in large display type
3. **Featured Work** - 2 project cards with hover effects
4. **About Preview** - Brief intro with link
5. **Contact CTA** - Call to action block

### About (`/about`)
Sections:
1. **Professional Story** - Career narrative
2. **Skills & Tools** - 3-column grid (Data, Strategy, Leadership)
3. **Philosophy** - 3 approach principles

### Work (`/work`)
- Filter bar with category pills (static, functionality pending)
- Project grid with 5 projects
- Each card: category tag, title, description, impact metric
- Links to individual project pages (routes pending)

### Experience (`/experience`)
- Vertical timeline with alternating cards
- 3 positions with highlights
- Education section

### Playground (`/playground`)
- 4 placeholder cards for future content:
  - Interactive Dashboards (Tableau embeds)
  - SQL & Python Samples
  - Animated Visualizations
  - Data Stories

### Contact (`/contact`)
- Email CTA button
- Social links grid
- Resume download section

## Tailwind v4 Configuration

This project uses Tailwind CSS v4 with the new CSS-based configuration:

```css
/* globals.css */
@import "tailwindcss";

@theme inline {
  --color-bg-primary: var(--bg-primary);
  --color-accent-coral: var(--accent-primary);
  /* ... etc */
}
```

Colors are used via Tailwind classes: `bg-bg-primary`, `text-accent-coral`, etc.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

Optimized for Vercel deployment:
- Zero-config Next.js support
- Static page generation for all routes
- Edge-optimized font loading

```bash
# Deploy via CLI
npx vercel --prod

# Or connect GitHub repo at vercel.com/new
```

## Future Enhancements (Phase 2+)

- [ ] Individual project pages (`/work/[slug]`)
- [ ] Project filtering functionality
- [ ] Framer Motion scroll animations
- [ ] Tableau dashboard embeds
- [ ] Code syntax highlighting (Prism/Shiki)
- [ ] Contact form with email integration
- [ ] Resume PDF generation
- [ ] OG image generation
- [ ] Analytics integration
