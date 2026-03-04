# Maple Ridge Construction & Development

General contractor website for Maple Ridge Construction in Etowah, TN. Serves Southeast Tennessee — McMinn, Bradley, Polk, and Monroe Counties.

**Domain:** mapleridgeconstruction.com
**Owner:** Zack Newman
**Phone:** (423) 506-2380
**Email:** zack@mapleridgedev.com

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5, React 19
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Fonts:** Source Serif 4 (display) + DM Sans (body) via next/font
- **Deployment:** Standalone output (Vercel)
- **SEO:** Programmatic sitemap, robots.txt, JSON-LD structured data, FAQPage schema, per-page metadata

## Pages (54 total)

| Route | Count | Description |
|---|---|---|
| `/` | 1 | Homepage |
| `/about` | 1 | About — Zack Newman, company story |
| `/contact` | 1 | Contact form + phone/email |
| `/projects` | 1 | Portfolio placeholder (noindex, hidden from nav) |
| `/services` | 1 | Services overview |
| `/services/[service]` | 3 | New Construction, Remodeling, Land Development |
| `/service-areas` | 1 | Service areas overview |
| `/service-areas/[slug]` | 10 | City landing pages |
| `/service-areas/[slug]/[service]` | 30 | Service+area combo pages (SEO) |

### Service Areas (10)
**Big pages:** Etowah, Athens, Cleveland, Tellico Plains, Madisonville, Sweetwater
**Smaller pages:** Englewood, Benton, Riceville, Ocoee

### Services (3)
New Construction, Home Remodeling, Land Development

---

## Architecture

### Data Layer (`src/data/`)
All shared data lives in centralized files — no hardcoded values scattered across pages:
- `contact.ts` — phone, email, address, hours, owner name, geo coordinates
- `services.ts` — service list with names, slugs, descriptions, hrefs
- `service-areas.ts` — all 10 areas with content, highlights, nearby areas, county data

### Shared Components (`src/components/`)
- `PageHero` — reusable dark hero section used on every page
- `CTASection` — reusable CTA block with quote + phone buttons
- `Header` — sticky nav with service/area dropdowns, mobile menu
- `Footer` — 4-column footer with all links and contact info
- `LocalBusinessSchema` — JSON-LD structured data (GeneralContractor)
- `Logo` — SVG tree logo

### Key Config Files
- `tailwind.config.ts` — custom `ridge`, `earth`, `stone` color palettes
- `src/app/globals.css` — reusable utility classes (btn, card, section-title, etc.)
- `src/app/layout.tsx` — root layout, global metadata, fonts
- `src/app/sitemap.ts` — programmatic sitemap (all 54 pages)
- `src/app/robots.ts` — robots.txt generation

---

## Client Notes

### Target SEO Keywords
- **General contractor** (+ location variants)
- **New construction** / **home builder** (+ location variants)
- **Home remodeling** (+ location variants)
- **Land development** (+ location variants)

### SEO Strategy (implemented)
- Keyword-first title tags on every page
- 30 service+area combo pages targeting "[service] in [city], TN" searches
- FAQPage JSON-LD schema on all 3 service detail pages
- GeneralContractor JSON-LD schema site-wide
- Internal linking mesh: combo pages link to parent area/service pages and to each other
- Per-page meta descriptions with CTA language
- Programmatic sitemap with all 54 URLs

### Portfolio / Projects
- Client wants to highlight full-scale remodels as portfolio pieces
- One portfolio page with multiple projects, possibly before/after comparisons
- Keep it simple — not a separate page per project
- **Currently:** placeholder page at `/projects`, hidden from nav, noindexed
- **Client will send photos when ready**

### Portfolio TODO (when photos arrive)
1. Build out `/projects` page with real photos using Next.js `<Image>`
2. Consider a before/after component for remodel projects
3. Add "Projects" back to Header nav and Footer
4. Add `/projects` to sitemap (currently excluded)
5. Remove `robots: { index: false }` from projects metadata
6. Consider `ImageGallery` schema for structured data

### Contact Form
- Form is visual only — **no backend connected yet**
- Need to wire up to Formspree, Netlify Forms, or a custom API route

### Missing Assets
- `og-image.jpg` — referenced in metadata but not in `/public`
- No real photos — all image slots use icon placeholders
- When photos come in, use `next/image` `<Image>` component (AVIF/WebP already configured)

### Future Considerations
- Google Business Profile — set up and link to site
- Google Search Console — verification stub exists in layout.tsx
- Blog / content hub — long-term organic traffic play
- Cost guide content — "how much does it cost to build a house in Tennessee" etc.

---

## Development

```bash
npm install
npm run dev    # development server
npm run build  # production build (generates all 54 static pages)
npm run lint   # eslint
```

Site by [SMB Help](https://smbhelp.co)
