# Portfolio — Design Context for Claude Design

A single-page portfolio for **Esmail Arshad**, a supply chain & operations professional.
Live at `https://esmail-arshad-portfolio.vercel.app`. This document is the complete
design context: what the site is, the decisions already made and why, and the parts that
are deliberately the way they are so they are not "fixed" back.

---

## 1. What the site is

- **Static site**, built with **Astro 5** + **Tailwind CSS v4** (via `@tailwindcss/vite`),
  content in **MDX**. Deployed on Vercel from `main`.
- **11 pages**: homepage, a `/work/` case-study archive, and 9 case-study pages.
- **Near-zero client JavaScript.** The only script is ~490 bytes inline for the theme
  toggle (see §6). No frameworks, no bundles. This is a hard constraint, not an accident —
  do not introduce client-side libraries or framework runtimes.
- **Audience:** recruiters and hiring managers in supply chain / operations. The site must
  read as a *portfolio of problems solved*, not a web résumé. That distinction has driven
  every revision.

## 2. Visual identity (keep this)

Editorial, restrained, print-like. The following are settled and should be preserved:

- **Serif display** (`Source Serif 4`) for headings; **sans body** (`Inter`).
- **Warm off-white ground**, charcoal ink, a **single slate-blue accent**. No other hues.
- Thin hairline rules and generous whitespace instead of boxes, shadows, or fills.
- Calm, quiet, confident. Not flashy. No gradients, no drop shadows, no rounded "card"
  chrome beyond a 2px radius.

### Design tokens (light)

```
--color-paper       #faf8f4   ground
--color-paper-deep  #f3efe8   footer / recessed
--color-card        #ffffff   diagram + artifact surfaces
--color-ink         #23262b   primary type
--color-ink-soft    #4d535c   body
--color-ink-mute    #666d78   captions, labels (AA: 4.92:1 on paper)
--color-rule        #ddd7cd   hairlines
--color-rule-soft   #e9e4db   faint hairlines
--color-slate       #3f5c73   the one accent — links, active states
--color-slate-deep  #2c4257   accent hover
```

### Type scale (continuous — do not reintroduce gaps)

`--text-hero` 52 · `--text-display` 44 · `--text-section` 36 · `--text-lede` 24, then
32 / 20 / 17 / 16 / 14 / 12 / 11 px. Each is a `clamp()` for fluid sizing. An earlier
version jumped 72 → 30 with nothing between; `--text-section` and `--text-lede` were added
to fill that, and the hero was brought down from 68px once it became a sentence rather than
a category label. Keep the scale continuous.

## 3. Homepage structure (current, deliberate)

```
HERO          greeting + 2 short paragraphs + 2 CTAs + mobility line | headshot (right)
CASE STUDIES  eyebrow "CASE STUDIES" + "A few problems I've worked on"
              5 featured cards: 1 lead (full width) + 4 (2-col) → "View all 9 case studies"
ABOUT         2 short paragraphs, does NOT restate the hero
WHERE I'VE WORKED   vertical timeline, chronology only, open-circle rail
EDUCATION + CONTACT two columns
FOOTER        quiet confidentiality note + © line
```

The order is intentional: *who → proof → how he thinks → where → contact*. The homepage
**curates** (5 featured); all 9 live on `/work/`, split into "Employer case studies" and
"Independent client projects."

## 4. Components

| Component | Role |
|---|---|
| `Section.astro` | Section wrapper; `density` (tight/default) + optional `divided` hairline |
| `EmployerCard.astro` | Company · title · one result. `lead` (2-col, larger) and `compact` (archive) variants. Carries a `CardPreview`. |
| `ClientCard.astro` | "Independent client project · discipline" · title · scope line. Thumbnail is a **zoomed crop** of the dashboard, not the whole sheet. |
| `CardPreview.astro` | A miniature of the case's *shape* — a `chain` (Line → Station → Equipment → Component) or a `contrast` (before → after). NOT the full diagram shrunk down. |
| `Diagram.astro` | Native HTML/CSS case-study diagrams (see §5). |

## 5. Case-study pages & diagrams

Every case study uses one structure. Employer: **Challenge → What I did → Decision →
Outcome**. Client: **Challenge → What I did → Decision → Key findings → Limitations**.
Each opens with a compact header + a three-item **at-a-glance** row (label / value / note).

Diagrams are **native HTML/CSS rendered from frontmatter data** (`Diagram.astro`), in the
site's own type and tokens — never imported PNG infographics. This is a firm decision:
native diagrams are selectable, translatable, screen-reader legible, responsive, and
weightless; imported infographics were rejected because their text became ~4px on mobile and
they read as marketing next to the genuine Excel artifacts. Five shapes exist:

- `narrowing` — a funnel that eliminates ground each step (Amazon investigation)
- `recovery` — one quantity split into parts, then recombined (Cosmos)
- `hierarchy` — a decomposition where the fan-out is the point (Tesla)
- `sequence` — process stages, optionally phased two-up and recurring (Schneider, TLS)
- `compare` — a before/after contrast (Jannat & Sadaf, Formlabs)

Each shape's concluding step carries the slate accent so the five don't read as one texture.
Client-project pages additionally show the real sanitized Excel dashboards as artifacts —
those stay pure white on both themes (evidence on a desk), and are the site's strongest
credibility signal.

## 6. Dark mode (working — keep intact)

Three states: **no choice follows the OS** (`prefers-color-scheme`), an explicit light
choice, and an explicit dark choice, persisted in `localStorage`. A sun/moon toggle sits at
the end of the nav. A ~490-byte inline `<head>` script sets the theme before first paint to
avoid a flash; with JS off, the button is inert and the OS preference still applies.

Dark palette is **designed, not inverted** — warm ground (`#17191c`, not black), off-white
type (`#ebe7e0`, not pure white, which glares). All foreground/background pairs pass **WCAG
AA** (tightest 5.16:1). Dark tokens are defined once and mapped in twice (OS + explicit) so
the two paths can't drift.

```
--dk-paper #17191c · --dk-paper-deep #121417 · --dk-card #1e2126
--dk-ink #ebe7e0 · --dk-ink-soft #b5b0a7 · --dk-ink-mute #979186
--dk-rule #383c42 · --dk-rule-soft #2a2e33 · --dk-slate #93b7d4 · --dk-slate-deep #b6d2e7
```

## 7. Content principles (why copy reads the way it does)

These are hard-won and should be respected in any copy changes:

- **Personable, not keyword-stuffed.** Hero is "Hi, I'm Esmail. I work in supply chain and
  operations." — a person, not a category label. Contractions throughout.
- **Say each thing once.** Metrics appear a single time. The hero, cards, and experience
  rows deliberately don't repeat the same facts. Role-focus lines were removed from cards
  because the title already implies them.
- **One workstream per case study.** Metrics stay attached to the work that produced them;
  unrelated achievements are kept off a page even when they're from the same employer.
- **No fabricated numbers**, including in diagrams — every figure shown also appears in prose.
- Private provenance lives in frontmatter (`evidence`, `openQuestions`) and **never renders**.

## 8. Responsive & accessibility baseline (maintain)

- Verified no horizontal overflow at **375 / 768 / 1024 / 1280 / 1440**. Wide tables/diagrams
  scroll inside their own containers; the page body never scrolls sideways.
- Mobile nav collapses items progressively so the header stays one row with the toggle.
- Single `<h1>` per page, no heading-level skips, all images have alt text (decorative
  thumbnails are `aria-hidden`), visible focus rings, `astro check` passes clean.

## 9. Deliberate choices — do NOT "fix" these

- **The content container is already correct.** Shell max-width ~1248px, prose ~672px. Two
  prior briefs asked to "widen to 1100–1200px"; it was already wider. Don't narrow the prose.
- **Native diagrams over image infographics** (§5).
- **Near-zero JS** (§1) — the theme toggle is the only exception, and intentionally so.
- **GPA is omitted** from the site (it frames toward a graduate candidate; it's on the résumé).
- **Résumé stays a hero CTA**, not only a nav link — highest-value action for a job search.
- **Client dashboards stay white** in dark mode — they're evidence, not chrome.

## 10. Known open items (fair game to improve)

- **Headshot is 389×389**, displayed up to ~260px — slightly soft on retina. A larger source
  would help.
- **Card preview visuals** are the newest element and the least polished; they're a
  reasonable place for design attention.
- General polish of spacing rhythm and the diagram styling is welcome — within the identity
  and constraints above.

---

**In one line for the reviewer:** this is a deliberately restrained, near-zero-JS editorial
portfolio; make it more polished and more visual *within* the existing identity, palette,
type scale, and constraints — not a redesign.
