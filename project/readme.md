# SEO Console Design System

A design system for **SEO Console**, an SEO monitoring/audit SaaS product with two surfaces: a marketing website and an internal dashboard (the actual app). The two surfaces intentionally look different — see "Two products, two token sets" below — and each has its own token set, component group, and UI kit.

## Sources
- `uploads/SEO_Console-Design_System.md` — brand-guidelines doc for the **marketing site**. A structured YAML+prose spec (colors, typography, spacing, radius, a `components:` inventory) plus a written style guide. Treated as ground truth for the marketing token set and its components.
- `uploads/seo-dashboard/` (repo: `github.com/talabadao/seo-console`, attached as a local codebase folder) — the real **dashboard app** source: Next.js + TypeScript + Tailwind v4, `app/components/*.tsx`, `app/globals.css`. Treated as ground truth for the dashboard token set, layout, and every dashboard component/screen — exact colors, spacing and copy were read from this code, not guessed from the attached screenshot.

## What SEO Console is
A clean, friendly modern-SaaS interface for an SEO monitoring tool — audits, keyword rank tracking, backlink monitoring, and scheduled reporting. The marketing site's job is to sell that product by showing its actual UI (keyword grids, ranking widgets, automation diagrams) directly inside marketing cards, rather than illustrating it abstractly.

## Content fundamentals
- **Tone**: confident, plain, engineering-flavored. Headlines state a capability directly ("The better way to monitor and improve your search performance", "Your all-purpose SEO console") — no hype adjectives, no exclamation points.
- **Voice**: mostly second-person-implicit / product-as-subject ("SEO Console doesn't paint marketing illustrations... it shows the actual product chrome"). Feature copy describes what the tool does, not how the user should feel about it.
- **Casing**: sentence case throughout — headlines, buttons, nav items. Never Title Case, never all-caps except perhaps a rare eyebrow label.
- **Button copy**: short, verb-first commands — "Start free", "Run audit", "Choose plan", "Log in". Two to three words, no punctuation.
- **Emoji**: none. The source doc shows no emoji anywhere in copy or UI.
- **Vibe**: "confidently engineered without trying to impress." Every section makes one claim and shows one piece of proof (a stat, a quote, or the product itself) — never a dense wall of bullet points.

## Visual foundations
- **Palette**: near-monochrome. White canvas, near-black ink (#111111) for all primary actions and headline type, gray-scale surfaces for card fills. The blue accent (#3b82f6) and four badge pastels (orange/pink/violet/emerald) exist but are used sparingly — inline links occasionally, avatar fills, and small tag pills. Primary CTAs are never colored.
- **Type**: two families with a strict boundary. **Manrope** 600-weight with negative letter-spacing (-0.5px to -2px) for every display headline (h1–h3); **Inter** for everything else (body, buttons, nav, captions) at 400–600 weight with no tracking. Never mixed within the same role.
- **Spacing**: 4px base unit. Section rhythm is a flat 96px between major bands — consistent, not increasing with hierarchy. Card padding is either 32px (feature/pricing cards) or 24px (proof/mockup cards) — no other card padding value exists.
- **Backgrounds**: flat color only. No photography, no illustration, no gradients, no patterns or textures. The one exception is real product UI — actual keyword grids, dashboards, and automation diagrams — shown at small scale inside white cards. Full-bleed sections are flat color bands, not imagery.
- **Animation**: not documented in the source (explicitly listed under Known Gaps). Treat transitions as instant/minimal — a press-state color change on buttons, nothing else. Do not invent easing, fades, or bounces.
- **Hover states**: the source doc's explicit rule is "never document hover — default and active/pressed only." So this system has no hover-darken or hover-lighten conventions; the only documented state change is press (primary → primary-active, #111111 → #242424).
- **Press states**: color shift only (primary darkens to #242424 on press). No scale/shrink transforms are documented.
- **Borders**: 1px hairline (#e5e7eb) on inputs, some card outlines, and table dividers. A softer hairline (#f3f4f6) separates sections that share the white canvas. Borders are thin and low-contrast, never a colored accent border.
- **Shadows**: two soft values only — `0 1px 2px rgba(0,0,0,.05)` (resting elevation, e.g. the active pill inside nav-pill-group) and `0 4px 12px rgba(0,0,0,.08)` (pricing tiers, hero mockup card). No heavy shadows, no neumorphism, no glassmorphism, no inner shadows on system-authored surfaces (product-UI fragments carry their own internal chrome/shadows, but those aren't system tokens).
- **The featured-tier / footer dark inversion**: dark surface (#101010) appears in exactly two places — the footer (every page) and the featured pricing tier. Nowhere else. This scarcity is the point; don't add other dark cards.
- **Transparency/blur**: none documented. No frosted-glass panels, no backdrop-filter usage.
- **Imagery color vibe**: n/a — no photography is used in this system. If a consuming project adds photography, keep it consistent with the monochrome-first, product-screenshot-forward vibe (real UI over stock photos).
- **Corner radii**: strictly hierarchical — 4px (rare, badge accents) → 6px (small inline controls) → 8px (buttons, inputs, tabs) → 12px (content cards) → 16px (the one hero mockup card, the system's largest) → pill/full (nav-pill-group, badges, avatars, icon buttons). Never exceed 16px on a card.
- **Cards**: no shadow by default (surface-card fill does the separating work); pricing tiers and the hero mockup card get the one subtle drop-shadow value appropriate to their level. Hairline border is optional and mostly reserved for white cards that need definition against the white page (feature-icon-card, product-mockup-card, hero-app-mockup-card).
- **Layout**: single 12-column editorial grid, ~1200px max width. Hero uses a 7/5 split (copy left, product card right). Feature grids are 3-up (or 4-up for the lighter `FeatureIconCard`); pricing is 4-up. Everything collapses to fewer columns, never smaller cards, at narrower widths.
- **Surface pacing rule**: never repeat the same surface mode two bands in a row. The canonical rhythm is white → light-gray → white → product-mockup → white → dark-footer.

## Iconography
No icon assets (font, sprite sheet, or SVG set) were present in the source material — the doc's Known Gaps section doesn't even claim an icon system exists. **Lucide** (loaded from CDN) is substituted as the closest geometric-stroke match to the brand's clean, precise character, wrapped by `Icon` (`components/display/Icon.jsx`). This is a flagged substitution — if SEO Console has its own icon set, swap `Icon`'s implementation and re-point every usage.
- No emoji, no Unicode glyphs used as icons.
- Star ratings (`RatingStars`) use the Lucide `star` glyph filled in badge-orange, not an emoji or Unicode ★.
- No logo/brand mark exists in the source. `Wordmark` (`components/layout/Wordmark.jsx`) renders "SEO Console" in Manrope 600 wherever a mark is needed — this is plain type, not a substitute icon or invented logo.

## Intentional additions
Beyond the source doc's `components:` inventory, this system adds:
- **`Icon`** — a thin wrapper needed to use the substituted Lucide glyph set consistently (the doc references icons inside buttons/cards but defines no icon component itself).
- **`Wordmark`** — needed anywhere the doc's `top-nav` and `footer` specs call for a logo/wordmark, since no logo file exists.

Every other component name below maps directly to a `components:` entry in the source YAML.

## Two products, two token sets
The marketing site (near-black CTAs, Manrope display type, `--color-*`/`--surface-*` tokens) and the dashboard app (Google-blue accent, Geist type, `--db-*` tokens scoped to a `.db-scope` wrapper) are visually distinct on purpose — the dashboard's job is to resemble Google Search Console closely, which the marketing brand's monochrome system never asked for. Nothing named `--db-*` ever appears outside `.db-scope`; nothing from the marketing token set appears inside it. Any page using dashboard components must wrap its root in `class="db-scope"` (add `db-dark` for dark mode — a Settings toggle, not `prefers-color-scheme`).

## Components
Grouped by directory (`components/<group>/`); each is a self-contained `.jsx` + `.d.ts` pair with a usage `.prompt.md`.

**Marketing site:**
- **actions/** — `Button`, `IconButton`, `TextLink`
- **forms/** — `TextInput`
- **navigation/** — `TopNav`, `NavPillGroup`, `CategoryTab`
- **display/** — `Avatar`, `Badge`, `RatingStars`, `Icon`
- **surfaces/** — `FeatureCard`, `FeatureIconCard`, `ProductMockupCard`, `CustomerProofCard`, `PricingTierCard` (incl. `featured` dark variant), `HeroAppMockupCard`, `CtaBandLight`
- **layout/** — `Wordmark`, `HeroBand`, `Footer`

**Dashboard app:**
- **dashboard/** — `TopTabNav` (matches the app's actual top-tab header — an earlier pass explored a GSC-style left sidebar here, but that was reverted as an unwanted departure from the shipped product), `MetricCard`, `TrendPill`, `FilterPopover` (exact port of the app's Filters popover, including the two things GSC doesn't have: People Also Ask and AI search prompts), `DateRangePopover`, `DataTable`, `GoogleSignInButton` (Google's own OAuth sign-in icon, copied from the app's sign-in screen), `ThemeToggle` (matches the app's real system/light/dark toggle in Settings)

## Index
- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `fonts.css` (Google Fonts substitute — see Fonts below).
- `components/` — 21 React primitives, grouped as above. Each directory has one `@dsCard`-tagged `.html` showing its variants.
- `guidelines/` — 13 foundation specimen cards (color, type, spacing, radius, elevation, wordmark, surface rhythm) for the Design System tab.
- `ui_kits/marketing-site/` — a click-through recreation of the marketing site: Homepage, Pricing, Resources (blog listing with filterable tags), and Login, sharing a `TopNav`/`Footer` shell. Open `index.html`.
- `ui_kits/seo-console-dashboard/` — a click-through recreation of the dashboard app: sign-in, Performance (metrics, chart, filterable/sortable breakdown table), Opportunities (cannibalization/low-hanging/underperforming), and the Settings modal, behind the app's real top-tab nav. Analytics/Indexing/URL Inspection are stubbed (not built this pass — see Caveats). Open `index.html`.
- `thumbnail.html` — the project's homepage tile.
- `SKILL.md` — portable skill definition for use in Claude Code / other agent contexts.

## Fonts
**Manrope is licensed to SEO Console** per the source doc and not available as a public web font — this system currently loads it from Google Fonts, where a same-named open-source Manrope exists and is visually very close, but **if that's a different license/weight-set than SEO Console's actual custom face, please supply the real font files** and they'll be swapped into `tokens/fonts.css` as self-hosted `@font-face` rules. Inter and JetBrains Mono are both genuinely open-source and load from Google Fonts as-is.

## Caveats
- **Marketing site**: built from a single markdown spec — no Figma, codebase, or logo file. Every component is an interpretation of the YAML `components:` block and prose description, not a pixel-measured extraction. No logo exists; `Wordmark` is plain type. The badge pastel set is documented in the source as possibly seasonal/approximate.
- **Dashboard**: built from the real app code (ground truth) — colors, spacing, and copy are read from `app/globals.css` and the `.tsx` components, not guessed. An earlier pass redesigned the nav into a GSC-style left sidebar; that's been reverted to `TopTabNav`, matching the app's actual top-tab header (`app/components/Dashboard.tsx`) — the system now tracks the real product rather than a GSC lookalike. `ThemeToggle` was double-checked against the app and does match a real feature (system/light/dark in Settings), so it stays. Only 4 of the app's 6 screens were built this pass (Performance, Opportunities, Settings, Sign-in) — **Analytics, Indexing, and URL Inspection are not yet built**. The Performance chart is a plain SVG line chart standing in for the app's real Recharts chart (interaction — tooltips, zoom — wasn't rebuilt).
- Iconography is a CDN substitution (Lucide) across both products, flagged above — swap if SEO Console has its own icon set. The dashboard's "Continue with Google" button keeps Google's own official multicolor sign-in icon (copied from the app's code), since that's the standard OAuth badge Google provides for third-party use, not a competitor's proprietary UI.

**Ask**: if you have the real Manrope font files or a logo mark for the marketing site, or want Analytics/Indexing/URL Inspection built out for the dashboard, let me know and I'll pick those up next.
