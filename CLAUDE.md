@AGENTS.md

# Ignite Project

This project was scaffolded with [Ignite](https://github.com/JoaoGuimaraes22/ignite) — a Next.js 16 monorepo for building client landing pages.

## Available Skills

```
/design-brief     # interactive design direction questionnaire → info/design-brief.md
/populate         # fill EN+PT dicts from info/info.md
/audit-site       # scan dicts for placeholders, mismatches, missing data
/image-prompts    # generate AI image prompts for all images
/menu-prompts     # generate AI image prompts for menu items
/seo-check        # validate SEO on live deployed site (meta, OG, JSON-LD)
/adapt-template   # port this project into a reusable Ignite template overlay
/frontend-design  # create distinctive frontend sections (use for hero + key sections only)
```

## Workflow (from project directory)

1. `ignite gather` — scrape reviews + hours from Google Maps
2. Fill in `info/info.md` with real business data
3. Run `/populate` to auto-fill both EN + PT dictionaries
4. SEO setup: replace `public/og-image.jpg` (1200x630), `public/favicon.ico`, and update `public/site.webmanifest`
5. Run `/audit-site` to catch placeholders, mismatches, and SEO gaps
6. Run `/image-prompts` to generate AI image prompts
7. Run `ignite images generate` from the monorepo to batch-generate images
8. Run `ignite images optimize` to convert to WebP and resize
9. Run `ignite deploy` — creates GitHub repo, sets up Vercel pipeline, syncs env vars, deploys
10. Run `/seo-check` to validate live SEO tags
11. Run `/adapt-template` to port into a reusable template (optional)

## SEO (built into base template)

The layout automatically generates from `metadata` dict key:
- Canonical URLs + hreflang (pt/en)
- OpenGraph + Twitter Card meta tags
- JSON-LD structured data (LocalBusiness schema)
- Robots meta (index, follow, max-image-preview: large)
- Favicon set (ico, 32x32, 16x16, apple-touch-icon)
- Web app manifest

`ignite deploy` auto-sets `NEXT_PUBLIC_SITE_URL` and syncs all `NEXT_PUBLIC_*` env vars to Vercel.

## Dict-First Rule

Always define dictionary shape BEFORE building components. Lock the dict keys, nesting, and arrays first — then build components against that shape. This prevents rework.

Read `template.md` in relevant templates before building sections — each has dict shapes, unique patterns, and reference notes.

## When to Use `/frontend-design`

Only for **differentiating sections** (hero, unique niche sections). Skip for standard patterns (FAQ, pricing, footer, contact, stats) — base patterns already work well.

# Base Template Conventions

## Project Structure

- All routes live under `app/[lang]/`
- `_components/` — shared UI components (private, not routable)
- `_lib/` — utilities, helpers, services
- `_hooks/` — custom React hooks
- `_types/` — TypeScript types/interfaces
- `dictionaries/` — translation JSON files per locale
- `api/` — API routes using `route.ts` convention

## Image Folder Convention

- `public/hero/` — hero background images or video
- `public/about/` — about section images
- `public/services/` — service card images
- `public/gallery/` — gallery strip images
- `public/before-after/` — before/after comparison pairs
- `public/team/` — team member photos
- Root `public/` — only favicon, og-image, logos, manifest icons

## i18n

- Default locale: `pt`, supported: `pt`, `en`
- Config lives in `i18n-config.ts` (root)
- `proxy.ts` handles locale detection via Accept-Language header
- Translations loaded server-side via `getDictionary(lang)` from `dictionaries.ts`
- Adding a locale: update `i18n-config.ts`, add JSON in `dictionaries/`, add import in `dictionaries.ts`

## Naming

- Files: `kebab-case` (e.g. `locale-switcher.tsx`)
- Components: `PascalCase` exports (e.g. `export default function LocaleSwitcher`)
- Types: `PascalCase` (e.g. `type Locale`)

## Component Conventions

- **NEVER hardcode visible text**: every UI string must come from `dict` — section headings, button labels, footer column titles, placeholder text, aria-labels. `<h2>Contact</h2>` is WRONG; `<h2>{dict.heading}</h2>` is correct.
- **Default exports only**: `export default function SectionName`
- **Generic `dict` prop**: `{ dict: DictType }` for section data — never named domain props
- **Locale param**: `lang` (matching route segment `[lang]`) — never `locale`
- **Dict keys**: camelCase of kebab-case filename (`gallery-strip.tsx` → `galleryStrip`)
- **Self-contained sections**: each component gets ONE dict key with ALL its data, no cross-key dependencies
- **Types inferred from JSON**: no explicit Dict interfaces — TypeScript infers from imports
- **Navbar dict**: `{ brand, cta, links: [{ id, label }] }` — links are dict-driven, never hardcoded
- **Page composition**: Navbar + sections + Footer all in `page.tsx`, not layout — layout is for html/body/metadata only
- **`<main>` wrapper**: sections wrapped in `<main>` element in page.tsx for semantic HTML

## Next.js 16 Gotchas

- `proxy.ts` NOT `middleware.ts` — middleware was renamed in Next.js 16
- Use `PageProps<'/[lang]'>` and `LayoutProps<'/[lang]'>` type helpers for route params
- `params` is a Promise — always `await params` before accessing values
- Named export `proxy` (not default export) in proxy.ts
- API routes use `route.ts` with named HTTP method exports (GET, POST, etc.)

## Tailwind v4

- Use canonical opacity syntax: `border-black/8` NOT `border-black/[.08]`
- Use arbitrary values only when no utility exists

## Animations (Motion)

- Library: `motion` (formerly framer-motion)
- Server Components: `import * as motion from "motion/react-client"`
- Client Components: `import { motion } from "motion/react"`
- Use `motion.div`, `motion.button`, etc. as drop-in replacements for HTML elements
- Key props: `animate`, `whileInView`, `whileHover`, `layout`, `transition`

## Patterns

- Server Components by default — only add `"use client"` when needed
- `error.tsx` must be a Client Component (`"use client"`)
- Use `_` prefix folders for non-routable code inside `app/`
- Route groups `(name)` for organizing without affecting URLs
