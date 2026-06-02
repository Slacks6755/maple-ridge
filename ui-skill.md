---
name: ui
description: Design and build distinctive, production-grade web interfaces. Use when creating, reviewing, or refactoring UI — pages, components, layouts, styling, animations, forms, navigation. Covers aesthetic direction, accessibility, performance, and pre-delivery review. Avoids generic AI aesthetics.
---

# UI

A single skill for designing and reviewing web UI. Use it for **both** creation (build a page/component) and audit (review existing UI). It pairs an aesthetic-direction step with a production-grade rule set.

## When to use

- Designing a new page, component, or flow
- Refactoring or restyling existing UI
- Reviewing UI code for accessibility, polish, or consistency
- Choosing colors, typography, spacing, or motion
- Diagnosing why an interface feels "off" or unprofessional

Skip for: pure backend/API work, infra, or non-visual scripts.

---

## Part 1 — Aesthetic direction (do this BEFORE writing code)

The single biggest reason AI-generated UI looks generic is skipping this step. Commit to a direction first, then execute it precisely.

### Pick a tone, not a template
Choose an extreme and commit: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art-deco/geometric, soft/pastel, industrial/utilitarian. Both bold maximalism and refined minimalism work — what fails is the timid middle.

### Answer three questions before coding
1. **Purpose** — what problem does this solve, for whom?
2. **Differentiator** — what is the ONE thing someone will remember?
3. **Constraints** — framework, performance budget, accessibility floor.

### Aesthetic guidelines

**Typography**
- Avoid Inter, Roboto, Arial, Space Grotesk, and system stacks as the headline choice — they read as default.
- Pair a distinctive display font with a clean body font.
- Use a consistent type scale (e.g. 12 / 14 / 16 / 18 / 24 / 32 / 48).
- Body text ≥ 16px on mobile (prevents iOS auto-zoom). Line-height 1.5–1.75. Line length 60–75 chars.

**Color**
- Pick a dominant color and sharp accents over evenly-distributed palettes.
- Cliché to avoid: purple gradient on white. Don't.
- Use CSS variables / design tokens. No raw hex inside components.
- Design dark mode separately — don't invert. Verify contrast independently.

**Motion**
- Micro-interactions 150–300ms. Complex transitions ≤ 400ms. Never > 500ms.
- Animate `transform` and `opacity` only. Never animate width/height/top/left.
- Ease-out for entering, ease-in for exiting. Exit ~60–70% of enter duration.
- One well-orchestrated page-load with staggered reveals beats 12 scattered micro-interactions.
- Respect `prefers-reduced-motion`.

**Spatial composition**
- Asymmetry, overlap, diagonal flow, and grid-breaking outperform uniform grids.
- Use whitespace intentionally to group; use density intentionally to compress.
- Visual hierarchy via size, spacing, contrast — not color alone.

**Backgrounds & texture**
- Default to atmosphere over flat fills: gradient meshes, noise/grain, layered transparencies, geometric patterns, dramatic shadows, decorative borders.
- Match texture intensity to the chosen aesthetic — minimal designs need restraint here.

### Anti-patterns (the generic AI look)
- Inter / Roboto / Arial as primary font
- Purple-to-pink gradient on white
- Centered hero with three feature cards below
- Identical rounded-2xl cards with shadow-md everywhere
- Emojis used as icons
- Same design language as every other AI-generated site

### Match complexity to vision
Maximalist directions need elaborate code: heavy animation, layered effects, dense composition. Minimalist directions need restraint: pixel-precise spacing, careful typography, subtle state changes. Elegance comes from executing the chosen vision fully, not from middle-ground hedging.

---

## Part 2 — Production rules (the must-haves)

Ordered by priority. Skim §1–§3 every time; deeper sections as relevant.

### §1 Accessibility (CRITICAL)
- **Contrast** 4.5:1 for body text, 3:1 for large text and UI glyphs (WCAG AA).
- **Focus rings** visible on every interactive element (2–4px). Never `outline: none` without a replacement.
- **Alt text** on meaningful images. Empty `alt=""` only for decoration.
- **aria-label** on icon-only buttons.
- **Keyboard nav** — tab order matches visual order; full keyboard support; skip-to-main link.
- **Form labels** with `for` attribute; not placeholder-only.
- **Heading hierarchy** sequential h1 → h6, no skipped levels.
- **Color is never the only signal** — pair with icon or text.
- **Respect** `prefers-reduced-motion` and dynamic text sizing.
- **Modals/multi-step flows** must offer cancel/back/escape.

### §2 Touch & interaction (CRITICAL)
- **Touch target** ≥ 44×44px (iOS) / 48×48dp (Android). Use `hit-area` padding for smaller visual icons.
- **Touch spacing** ≥ 8px between targets.
- **Hover is not enough** — every hover state needs a tap/focus equivalent.
- **Async buttons** disable + show spinner during the request.
- **Errors** appear next to the field, not just in a banner.
- **`cursor: pointer`** on every clickable element on web.
- **`touch-action: manipulation`** to remove the 300ms tap delay.
- **Visual feedback within 100ms** of tap (ripple, opacity, scale).

### §3 Performance (HIGH)
- **Images** WebP/AVIF, responsive `srcset`/`sizes`, `loading="lazy"` below the fold. Declare width/height or aspect-ratio (prevents CLS).
- **Fonts** `font-display: swap` or `optional`. Preload only the critical variant.
- **Bundle** split by route. Defer/async third-party scripts. Audit and delete unused deps.
- **Lists** virtualize when > 50 items.
- **Main thread** keep per-frame work under 16ms. Debounce/throttle scroll, resize, input handlers.
- **Loading > 300ms** show skeleton or shimmer, not a blocking spinner.
- **CLS** reserve space for async content; never let layout jump.

### §4 Style consistency (HIGH)
- **No emoji as icons.** Use Lucide, Heroicons, Phosphor, or a custom set.
- **One icon family**, one stroke weight, one corner radius across the product.
- **One primary CTA per screen.** Secondary actions visually subordinate.
- **Consistent elevation scale** for cards / sheets / modals — don't sprinkle arbitrary shadow values.
- **State clarity** — hover, pressed, focused, disabled, selected all visually distinct.
- **Light + dark designed together**, not one inverted to make the other.

### §5 Layout & responsive (HIGH)
- **Mobile-first.** Design 375px first, then scale up.
- **Viewport meta** `width=device-width, initial-scale=1`. Never disable zoom.
- **Breakpoints** consistent across the project (e.g. 375 / 768 / 1024 / 1440).
- **No horizontal scroll** on mobile.
- **4 / 8px spacing rhythm.** No arbitrary margins.
- **Container** consistent max-width on desktop (e.g. `max-w-6xl`).
- **`min-h-dvh`** over `100vh` on mobile (handles iOS chrome).
- **Z-index scale defined** (e.g. 0 / 10 / 20 / 40 / 100 / 1000) — not ad-hoc `z-9999`.
- **Fixed bars reserve padding** for underlying content.

### §6 Typography & color (MEDIUM)
- Semantic color tokens (`primary`, `surface`, `on-surface`, `error`) — no raw hex inside components.
- Weight reinforces hierarchy: 600–700 headings, 400 body, 500 labels.
- Tabular figures for numbers in tables and data displays.
- Truncate as last resort. Prefer wrapping; provide tooltip/expand when truncating.

### §7 Animation (MEDIUM)
- Every animation must express cause and effect — never decorative-only.
- Page transitions maintain spatial continuity (shared element, directional slide).
- Stagger lists/grids 30–50ms per item.
- Spring/physics curves feel more natural than cubic-bezier for UI.
- All animations interruptible — user input cancels in-progress motion immediately.
- Modals animate from their trigger source (scale + fade or slide-in).
- Forward = left/up, backward = right/down. Stay consistent.

### §8 Forms & feedback (MEDIUM)
- Visible label per input. Helper text persistent below complex fields.
- Validate on `blur`, not on every keystroke.
- Error message states cause + fix path. Not "Invalid input."
- Multi-error forms get a top summary with anchor links + auto-focus first invalid field.
- `aria-live="polite"` for toasts; `role="alert"` for form errors.
- Semantic `input` types (`email`, `tel`, `number`) — triggers correct mobile keyboard.
- `autocomplete` attributes — let the browser fill.
- Confirm before destructive or sheet-dismiss-with-unsaved-changes. Provide undo for bulk deletes.
- Disabled state: 0.38–0.5 opacity + `cursor: not-allowed` + actual `disabled` attribute.

### §9 Navigation (HIGH)
- Bottom nav max 5 items. Icon + label, never icon-only.
- Current location visually highlighted in nav.
- Back behavior predictable — preserves scroll, filter state, input.
- Every key screen reachable via URL / deep link.
- Modals never used for primary navigation flow.
- Navigation placement stays consistent across pages.
- After route change, focus moves to main content (screen reader users).
- Large screens (≥ 1024px) prefer sidebar; small screens use bottom/top nav.

### §10 Charts & data (LOW)
- Match chart type to data: trend → line, comparison → bar, proportion → pie (only ≤ 5 categories).
- Color is not the only differentiator — add patterns or labels.
- Tooltips on hover (web) / tap (mobile) showing exact values.
- Responsive: simplify on small screens (horizontal bar, fewer ticks).
- Skeleton while loading, meaningful empty state, error state with retry.
- Provide table alternative + `aria-label` summary for screen readers.
- Legends near the chart, interactive (click to toggle series).

---

## Part 3 — Review workflow

When asked to "review my UI" or "check this page":

1. **Scan §1–§3** (Accessibility, Touch, Performance) — these are non-negotiable.
2. **Walk §4–§5** for consistency and responsive issues.
3. **Spot-check §6–§10** as relevant to what's on the page.
4. **Report in `file:line — issue — fix` format**, grouped by severity:
   - CRITICAL — §1, §2 violations
   - HIGH — §3, §4, §5, §9 violations
   - MEDIUM — §6, §7, §8 violations
   - LOW — §10 violations

For deeper rule context, consult Vercel's living guidelines:
`https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`

---

## Pre-delivery checklist

Run before shipping any UI work.

**Visual quality**
- [ ] No emojis as icons
- [ ] One icon family, consistent stroke weight
- [ ] Semantic color tokens (no raw hex in components)
- [ ] Pressed states don't shift layout
- [ ] Aesthetic direction is intentional and consistent across screens

**Interaction**
- [ ] Every interactive element has visible focus + hover/press feedback
- [ ] Touch targets ≥ 44×44
- [ ] Async actions show loading state within 100ms
- [ ] Disabled states are visually clear AND have the `disabled` attribute
- [ ] No hover-only affordances

**Accessibility**
- [ ] Body text contrast ≥ 4.5:1 in both light AND dark mode
- [ ] All meaningful images/icons have labels
- [ ] Keyboard-only: can reach and operate every control
- [ ] `prefers-reduced-motion` respected
- [ ] Form errors auto-focus and announce

**Layout**
- [ ] Tested at 375px and 1440px
- [ ] No horizontal scroll on mobile
- [ ] Safe areas respected (notch, gesture bar)
- [ ] 4/8px spacing rhythm intact
- [ ] Fixed bars don't obscure scroll content

**Performance**
- [ ] Images WebP/AVIF + dimensions declared
- [ ] Fonts use `font-display: swap`
- [ ] CLS feels stable (no jump on load)
- [ ] Lists > 50 items virtualized
- [ ] Third-party scripts deferred

---

## Final principle

Don't hold back. The default failure mode is timid, generic, middle-of-the-road. Pick a direction and execute it fully — every detail, every state, every breakpoint. A bold imperfect interface beats a safe forgettable one.
