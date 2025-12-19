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
│   └── images/
│       └── headshot.jpg        # Profile photo (circular crop)
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
--bg-card: #1a1a1a         /* Card backgrounds */

/* Accents */
--accent-primary: #E87C5C  /* Coral - CTAs, highlights */
--accent-secondary: #F4A261 /* Amber - secondary */
--accent-tertiary: #2A9D8F /* Teal - links, tags */
--accent-purple: #A78BFA   /* Purple - skill card accent */

/* Text (improved contrast) */
--text-primary: #F5F5F5    /* Headings */
--text-secondary: #D1D5DB  /* Body text - improved contrast */
--text-tertiary: #9CA3AF   /* Captions */
--text-muted: #6B6B6B      /* Muted text */

/* Borders */
--border-subtle: #2A2A2A
--border-subtle-light: rgba(255, 255, 255, 0.08)
--border-hover: rgba(232, 124, 92, 0.3)

/* Gradients */
--gradient-hero: radial-gradient(ellipse at center top, rgba(232,124,92,0.08) 0%, transparent 50%)
--gradient-card: linear-gradient(135deg, rgba(30,30,30,0.8) 0%, rgba(20,20,20,0.9) 100%)
--gradient-timeline: linear-gradient(180deg, var(--accent-primary) 0%, rgba(232,124,92,0.1) 100%)
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
- Fixed position navigation bar with `bg-black/80` and `backdrop-blur-md`
- Logo ("AR") links to home
- 6 navigation links with animated underline on hover
- Active state shows full underline (`after:w-full`)
- Subtle bottom border (`border-white/5`)
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

## Layout Patterns

All pages use wide, full-container layouts (1200px max-width). Avoid narrow `max-w-2xl` or `max-w-3xl` constraints that create squished layouts.

### Common Patterns

```tsx
// Two-column grid (used on About, Contact)
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

// Three-column grid (used for cards, skills)
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

// Left metadata / Right content (used on Experience)
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
  <div className="md:col-span-4 lg:col-span-3">  {/* Date, location */}
  <div className="md:col-span-8 lg:col-span-9">  {/* Main content */}
```

### Responsive Typography

```tsx
// Page titles
text-[3rem] md:text-[4rem]

// Section titles
text-[2rem] md:text-[2.5rem]

// Card titles
text-[1.5rem] md:text-[1.75rem]

// Body text
text-lg md:text-xl leading-relaxed
```

## Pages

### Homepage (`/`)
Layout: Centered sections, full-width metrics grid
1. **Hero** (`max-w-4xl`) - Radial gradient background, pulsing star icon, name (5.5rem), title, value prop (`max-w-3xl`), dual CTAs with hover lift
2. **Impact Metrics** - 3-col grid with vertical dividers, top/bottom borders, $55M (coral), 23K+, 950+
3. **Featured Work** (2-col grid) - Project cards with gradient background and hover effects
4. **About Preview** (`max-w-4xl`) - Circular headshot (144px), career narrative hook
5. **Contact CTA** (`max-w-4xl`) - Growth-focused messaging

### About (`/about`)
Layout: 12-column grid with headshot
1. **Hero** (4-col/8-col grid) - Circular headshot (280px) left, career narrative right
2. **Skills & Tools** (3-col grid) - Color-coded left borders (coral/teal/purple), bullet points
3. **What Makes Me Different** (3-col grid) - Strategic Partnership, Curiosity-Driven, Hands-On Builder

### Work (`/work`)
Layout: Full-width grid
- Filter bar with 7 category pills (All, Executive Reporting, Data Infrastructure, Process Optimization, Tools & Automation, Data Governance, Predictive Analytics)
- Project grid (2-col) with 7 projects including Workforce Forecasting and Recruiting Funnel Optimization
- Cards: gradient background, abstract bar chart placeholder, hover border glow and lift
- Links to individual project pages (routes pending)

### Experience (`/experience`)
Layout: Visual timeline with gradient connector
- **Hero** - Title + subtitle
- **Timeline** - Vertical gradient line (`from-accent-coral to-accent-coral/10`), dot markers, date badges with coral pill styling
- 6 positions: TAG (Head of People Analytics), Chime, Vineti, NextRoll, Delivery Hero, Earlier Roles
- **Education** - Mercer University, BBA Sports Business Management, 2016

### Playground (`/playground`)
Layout: 2-col grid
- 4 placeholder cards for future content:
  - Interactive Dashboards (Tableau embeds)
  - SQL & Python Samples
  - Animated Visualizations
  - Data Stories

### Contact (`/contact`)
Layout: 2-col grid throughout
- **Hero** (2-col) - CTA + email (austin@austinrose.io) left, social cards with arrow hover animation right
- **Resume** (2-col) - Description left, download button right
- Social links: LinkedIn (roseaustin), GitHub (austinjamesrose), Email

## Animations

Defined in `globals.css`:

```css
/* Available animations */
@keyframes fadeUp      /* Scroll reveal - translateY(20px) to 0 */
@keyframes fadeIn      /* Page load - translateY(10px) to 0 */
@keyframes pulse       /* Icon pulse - scale 1 to 1.1, opacity 0.7 to 1 */
@keyframes float       /* Subtle float - translateY(0) to -4px */
@keyframes underlineGrow /* Nav underline - scaleX(0) to 1 */

/* Utility classes */
.animate-fade-in       /* Page content wrapper */
.animate-fade-up       /* Scroll reveal */
.animate-pulse-slow    /* 3s infinite pulse (hero star) */
.animate-float         /* 3s infinite float */
```

Respects `prefers-reduced-motion` for accessibility.

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
