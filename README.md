# Esmail Arshad — Portfolio

Static portfolio site. **Astro · TypeScript · Tailwind CSS v4 · zero client JavaScript.**

```bash
npm install
npm run dev      # local dev server
npm run build    # static output to dist/
npm run preview  # serve the built site
```

---

## Content structure

All professional content lives in `content/`. Components render it; they never hardcode it.

```
content/
  site.ts                  Homepage data: hero, proof line, capabilities, systems,
                           experience, about, education, contact.
  work/*.mdx               One file per work item. Frontmatter = structured data,
                           body = the case-study prose.
  images/                  Every image used on the site. Nothing is sourced elsewhere.
  artifacts/*.xlsx         Private analysis sources. Never served, never linked.
  source/                  Résumés, bullet bank and portfolio-facts.md. Private.
```

`content/source/resumes/procurement.pdf` and `logistics.pdf` are **private sources**. They are
gitignored, are never copied into `public/`, and must never be linked. Only `standardized.pdf`
is published, as `public/esmail-arshad-resume.pdf`.

The two client workbooks in `content/artifacts/` are private analysis sources. They are the
source of truth for every figure on the client-project pages, but **no download is offered
for either of them** — the work is the client's property.

---

## Adding a work item

Create `content/work/<slug>.mdx`. The filename becomes the URL: `/work/<slug>/`.

The schema is defined once in `src/content.config.ts` and shared by every work item. Empty
optional fields disappear cleanly — never populate a field just because it exists.

```yaml
---
type: operating-case-study     # | client-project | tool
title: Problem-led title, never the employer name
organization: Amazon
displayTitle: Supply Chain Program Manager (Contract)   # omit for client projects
roleFocus: One line of functional focus
timeframe: '2024'              # quote bare years, or YAML reads them as numbers
summary: One or two sentences. Used on the card and as the page meta description.
capabilities:                  # must match a capability group in content/site.ts
  - Logistics & Operations
tools: [Tableau, Advanced Excel]
scope:                         # size of the environment. Never an outcome.
  - ~100K weekly shipments
headlineOutcome:               # exactly one principal result
  value: 8%
  label: freight network cost reduction
  kind: outcome                # outcome | finding
supportingMetrics:             # same workstream only
  - { value: '19', label: invoices missing PO numbers, kind: finding }
rightsStatus: own-work         # | sanitized-recreation
images: []                     # client projects only — see below
featured: true
published: false               # see the publication gate below
draft: true
order: 2                       # controls card order within its group
evidence:                      # private provenance. Never rendered.
  - claim: 8% network cost reduction
    source: standardized résumé Amazon bullet 1
openQuestions: []              # private. Questions blocking publication.
---
```

Body sections use `## Heading`. Use only the sections the material supports.

### The publication gate

`published: false` means **no route is generated at all** — the page does not appear in
`dist/`, the sitemap, or as a link. Cards for unpublished items still render on the homepage
with their title, summary, outcome and capability tags; they simply do not link.

A page may only be flipped to `published: true` when it contains no unresolved `TODO`
markers, no unresolved source conflicts, no unsupported attribution and no open rights
questions. `TODO` text must never reach the public site — `npm run build` then
`grep -ri "TODO" dist/` should return nothing.

To publish a finished case study, set `published: true` and `draft: false`, and clear
`openQuestions`.

---

## Replacing the résumé

Overwrite `public/esmail-arshad-resume.pdf`. The path is referenced once, in
`content/site.ts` → `meta.resumePath`. Keep `content/source/resumes/standardized.pdf` in
sync so the published PDF and the canonical source stay identical.

## Adding an artifact image

1. Put the file in `content/images/`.
2. Add an entry to the work item's `images` array:

```yaml
images:
  - file: inventory-dashboard.png
    sheet: Dashboard            # which workbook sheet it came from
    alt: Describe what the sheet actually shows, including the key figures.
    caption: One line on why this sheet is worth looking at.
```

Images are resolved from `content/images/` at build time and optimized automatically. Wide
spreadsheet screenshots scroll inside their own container rather than widening the page.

Never fabricate a screenshot, and never add an image sourced from outside `content/images/`.

## Adding a certification

`content/site.ts` → `education.certifications`. The array is currently empty, so the
Certification block does not render. Adding an entry renders it in its own column, visually
separate from the Purdue block so it is not implied to be Purdue-issued:

```ts
certifications: [{ name: 'Lean Six Sigma Green Belt', issuer: 'Issuer name' }],
```

## Adding GitHub to Contact

`content/site.ts` → `contact.github`. It is `null` while no portfolio repository exists, and
the Contact link is omitted rather than rendered empty. Set it only once the repository
contains this portfolio's own source — not as a generic profile link.

---

## Deploying

No GitHub repository exists yet. The sequence:

1. **Create one empty repository** at `https://github.com/esmailshahid-hue` — no README and
   no `.gitignore`, since this project supplies its own.
2. **Add it as a remote and push:**

   ```bash
   git remote add origin https://github.com/esmailshahid-hue/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect the repository to Vercel.** Framework preset: Astro. Build command
   `npm run build`, output directory `dist` — both already set in `vercel.json`. Every push
   to `main` then deploys automatically.
4. **Update the site URL.** Vercel assigns a default URL; there is no custom domain at this
   stage. Set that URL in two places, or canonical tags, Open Graph and the sitemap will
   point at the placeholder:
   - `astro.config.mjs` → `site`
   - `public/robots.txt` → the `Sitemap:` line

   Rebuild after changing them.

---

## Accessibility and constraints

- **Zero client JavaScript.** The site is fully usable with JS disabled; there are no
  `<script>` tags beyond the JSON-LD block.
- Semantic HTML, correct heading order, a skip link, visible keyboard focus, WCAG AA
  contrast throughout, and `prefers-reduced-motion` respected.
- Nothing essential is behind a hover state.
- Wide content scrolls inside its own container; the page body never scrolls horizontally.

## Confidentiality rules built into the site

- Employer case studies carry **no screenshots** and no fabricated reproductions of internal
  systems — metrics are typographic only.
- Client projects are labelled **Anonymized Client Project**. The client, platform and
  commercial terms are never identified.
- **No downloads** are offered for either client workbook, and no download UI exists.
- No supplier names, contract terms or non-public internal data from employer work.
- No absolute PKR business figures.
