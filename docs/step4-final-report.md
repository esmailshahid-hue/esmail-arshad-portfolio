# Step 4 — QA and Final Report
Esmail Arshad Portfolio · build spec v7 (patched) · 2026-08-19

---

## §0.4 Definition of done

| # | Check | Result |
|---|---|---|
| 1 | `npm run build` completes with zero errors | ✅ 3 pages, zero errors. `astro check`: 0 errors, 0 warnings |
| 2 | `npm run preview` serves the site; every homepage anchor resolves | ✅ All 7 anchors (`#work`, `#experience`, `#capabilities`, `#about`, `#education`, `#contact`, `#main`) have matching targets |
| 3 | `grep -ri "TODO" dist/` returns nothing | ✅ Nothing |
| 4 | Every internal link and route resolves; no 404s | ✅ All 7 routes and assets return 200 |
| 5 | Every `published: true` page passed the §14 publication gate | ✅ Only the two client projects are published; both are fully verified with zero TODOs |
| 6 | No image generated, mocked, or sourced outside `content/images/` | ✅ 7 images, all supplied. The only generated asset is `public/og.png` — a typographic OG card required by §25, containing no professional or evidentiary content |
| 7 | Renders correctly at 1440px, laptop, tablet, mobile | ✅ Verified at 1440 / 1280 / 768 / 375. No horizontal page scroll at any width |
| 8 | Fully usable with JavaScript disabled | ✅ Zero `<script>` tags beyond the JSON-LD block |

**Two defects were found during QA and fixed:**

1. **Horizontal page scroll on mobile (work pages).** The wide spreadsheet screenshots have a 36rem minimum width so dense sheets stay legible. Grid children default to `min-width: auto`, so that minimum propagated up and widened the whole page at 375px. Fixed with `min-w-0` on the grid children; the images now scroll inside their own container while the page body does not.
2. **WCAG AA contrast failure.** `--color-ink-mute` was `#767d88` — 3.91:1 on the page background and 3.62:1 on the recessed background, below the 4.5:1 AA threshold for the eyebrows, captions, dates and scope lines that use it. Darkened to `#666d78`: now 4.92:1 and 4.55:1. Both pass.

---

## Remaining TODOs

All 13 sit in the four unpublished employer case studies and correspond exactly to questions 3–15 from the Step 1 audit. **None reaches the built site.**

| Page | TODOs | What they block |
|---|---|---|
| Jannat & Sadaf | 3 | The Problem section (what was failing before the redesign) and both trade-offs (what gave way to long-lead wedding wear; why cost-led vs quality-led sourcing) |
| Amazon | 3 | What triggered the pricing work; where the carrier-conversion vs freight-cost balance was set; the measurement window and baseline for the 8% |
| Tesla | 4 | What prompted the should-cost exercise; the category of hidden charges surfaced; the negotiation trade-off; whether $150K is per-programme or annualized |
| Formlabs | 3 | How shortages were caught before; what decision the reports drove; the measurement window for −20% / +6% |

Answering these lets each page flip to `published: true` — that generates the route, the homepage card link and the sitemap entry. The README documents the flow.

---

## Unresolved source conflicts

**None.** Every difference across the three résumés is omission or re-framing of the same work for a different audience, which §1 explicitly classifies as not a conflict. The six variations found are recorded in §8 of the Step 1 audit.

Two deliberate resolutions:

- **Cosmos Surfaces** carries the dock utilization / 3PL turnaround achievement — word-identical across all three résumés — rather than the WMS/SAP fulfilment bullet, which is framed three different ways.
- **TLS Technology** is described as EMEA expansion (per §18), not EMEA and APAC, which appears only in the standardized résumé.

---

## Unsupported or inferred claims

**No unsupported claim was published.** Every figure on the two live pages was verified against its workbook, and every employer claim traces to a named résumé bullet in the `evidence` frontmatter.

Three corrections were applied to the brief's own figures rather than published as given:

1. **"500 demand records" → 432.** 500 was `Raw_Data`'s formatted `max_row`, not its record count — the same error §15 had already caught with "100 SKUs."
2. **MTO wording reversed.** The brief said MTO items are "excluded from automated reorder." The workbook shows them and holds the reorder action for planner validation. The page now says so.
3. **"Four anomaly flags"** is accurate for the flag columns, so the method describes four; the findings additionally report the two further review types the dashboard surfaces (a credit/negative charge and a missing vendor name) rather than forcing the count.

Two presentation decisions worth knowing about:

- The dashboard's `Shipments 2025` cell reads as a year. Rendered on the site as **"2,025 shipments covered"**, tagged as scope.
- **16x revenue growth at Jannat & Sadaf is presented as context, never as an outcome Esmail delivered** — per §14. The page states this explicitly.

---

## Withheld artifacts and content

- **Both client workbooks.** No download link, no file-size label, no download UI, and neither `.xlsx` is in `dist/`. Verified.
- **`procurement.pdf` and `logistics.pdf`.** Gitignored, absent from `dist/`, never linked. Only `standardized.pdf` is published.
- **All employer visuals.** The four case studies carry no screenshots and no fabricated reproductions — metrics are typographic only.
- **The PKR 3.0M capital-plan bullet.** Excluded entirely; absolute PKR figures are off this site.
- **The Instagram reach and Shopify funnel bullets** from the J&S bullet bank. The bullet bank itself excludes the Shopify one; the Instagram bullet is outside the site's positioning.
- **Lean Six Sigma Green Belt.** Held but expired; omitted at Esmail's direction (2026-08-19), which overrides §20. The Certification block renders nothing while the array is empty.

---

## Unpublished pages

Four, all employer case studies: **Jannat & Sadaf, Amazon, Tesla, Formlabs.** Each is `published: false`, `draft: true`.

Unpublished means no route is generated at all — nothing in `dist/`, the sitemap or as a link. Their homepage cards still render with title, summary, principal outcome and capability tags, so the work is visible; they simply do not link yet.

**This is the main thing standing between the current site and a complete one.** Two of six work pages are live.

---

## Follow-ups for Esmail

1. **Answer the 13 TODOs** (Step 1 audit §10.B) to publish the four employer case studies.
2. **Confirm display titles against LinkedIn** — particularly **Formlabs** (*Supply Chain Analyst Intern*, which appears only in `procurement.pdf`) and **Tesla** (*Global Supply Chain Manager Intern*, from the standardized and logistics variants).
3. **Sign off on the freight screenshots**, which show real carrier names with invoice, shipment and PO numbers in sanitized-recreation data. The client is never identified. Flagged in the Step 1 audit; proceeding on your go-ahead.
4. **GitHub is omitted from Contact** per patched §21 and §25a, since no portfolio repository exists. Set `contact.github` in `content/site.ts` once one does.
5. **Your public résumé PDF displays a phone number.** The site carries none (§21), but the served PDF does.
6. **Case-study lengths will need a look once the TODOs are answered.** Excluding TODO text the four drafts currently sit at 362–395 words — close enough to each other that §13's warning about uniform length applies. J&S and Amazon should grow toward ~450 as the trade-off material lands; Tesla and Formlabs should stay nearer ~325.

---

## §25a — repository and deploy status

**No GitHub repository was created or pushed to.** `gh` is not installed in this environment, so per §25a step 3 no attempt was made.

Local git is initialized with four commits. When you are ready:

1. Create one empty repository at `https://github.com/esmailshahid-hue` — no README, no `.gitignore`.
2. Send me the URL. I will add it as `origin`, push, and connect it to Vercel.
3. After the first deploy, the Vercel URL needs to go into `astro.config.mjs` (`site`) and `public/robots.txt` (the `Sitemap:` line), or canonical tags, Open Graph and the sitemap will keep pointing at the placeholder. The README documents this.

Deploy target is the default Vercel URL. No custom domain at this stage, per `portfolio-facts.md`.
