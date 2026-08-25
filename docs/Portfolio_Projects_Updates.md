# Portfolio Refinement — Projects Updates

## Scope

This pass should update **only the homepage Projects section and the two homepage project-preview components required to support it**.

Treat the latest committed portfolio design — plus any already-approved Hero updates present in the working branch — as the visual baseline.

Do not redesign Experience, Hero, Contact, case-study pages, the archive page, or the overall site.

---

# Design Preservation — Critical

The current Claude-designed portfolio is approved and must be preserved.

This is a targeted **content hierarchy + project-visual refinement**, not a redesign.

Before editing:

1. Inspect the current homepage implementation and existing design system.
2. Reuse the current layout, spacing system, typography, color tokens, responsive behavior, and component patterns.
3. Inspect the two project case-study source files before changing copy or data visualizations:
   - `content/work/inventory-forecasting-reorder-planning.mdx`
   - `content/work/freight-spend-vendor-cost-review.mdx`
4. Make the smallest code changes necessary to implement this brief.

Do NOT:
- redesign the overall Projects section composition
- change the overall page width or shell
- change fonts or typography system
- change the warm off-white / slate visual palette
- introduce gradients, shadows, decorative illustrations, or a new card system
- change Hero, Experience, Contact, or case-study styling
- refactor unrelated components for code cleanliness
- change breakpoints unless required to prevent a regression from these specific updates
- invent metrics, trends, SKU histories, or chart shapes
- fabricate aesthetically convenient data
- replace real project evidence with generic placeholder charts

If a requested chart cannot be built accurately from verified source data, use the documented fallback rather than inventing data.

The existing implementation is the visual source of truth.

---

# Objective

Make the Projects section faster to understand and more visually compelling.

A recruiter should be able to understand each project in seconds:

> What problem was this about?  
> What did Esmail actually do?  
> What scale/result did it involve?  
> What does the analysis show?

The section should use **plain language**, clear supply-chain keywords, and clean visual evidence.

Avoid jargon and clever-sounding titles.

---

# 1. Remove “View all 9 projects”

Remove the homepage link:

> `View all 9 projects →`

Do not replace it with another CTA.

Reason:
- the homepage has exactly **two independent client projects**
- the other seven published entries are employer case studies associated with Experience
- both project cards are already clickable
- removing the link also reduces unnecessary whitespace before Experience

Do not change the `/work/` archive in this pass.

After removing the link, review the natural spacing between Projects and Experience.

Do not arbitrarily compress global section spacing unless needed after visual QA.

---

# 2. Simplify the project eyebrow labels

Replace the current labels with:

## Inventory
`INVENTORY PLANNING`

## Freight
`FREIGHT COST ANALYSIS`

Keep the existing restrained eyebrow styling.

Do not add icons, pills, or category badges.

---

# 3. Replace both project titles

Replace:

> `Matching forecast methods to SKU demand behavior`

with:

> **Demand Forecasting & Reorder Planning**

Replace:

> `Turning freight spend into a review queue`

with:

> **Freight Cost & Invoice Review**

Keep the existing arrow treatment that signals the card is clickable.

Clarity is the priority.

---

# 4. Replace the “Built…” sentences

## Inventory

Use:

> **Forecasted demand for 24 SKUs and set safety stock and reorder levels using 18 months of history.**

## Freight

Use:

> **Cleaned 12 months of freight invoices, compared vendor costs and flagged charges that needed review.**

Do not mention `Excel` here.

The sentence should explain the work, not the software.

Use plain English.

Avoid unnecessary jargon such as:
- normalize
- surface exceptions
- review queue
- unit economics
- taxonomy
- optimization framework

---

# 5. Remove the current methods footer

Remove:

> `Excel · Forecasting · Reorder planning`

> `Excel · Spend analytics · Anomaly review`

Do not replace them with another tools/methods list.

The cards already communicate the work directly, and the full case-study pages contain tool information.

Remove the `methods` prop from `ProjectPreviewCard` if it is no longer used anywhere.

Keep this refactor limited to what is required by this change.

---

# 6. Add one quiet takeaway line per project

After the analytical visual, add one concise takeaway.

## Inventory

> **Takeaway:** One forecast method did not fit all 24 SKUs.

## Freight

> **Takeaway:** Flagged spend is not savings — it is spend that needs checking.

Styling:
- quiet editorial text
- no card
- no colored callout
- no icon
- no pill
- no background
- no oversized bold treatment

`Takeaway:` may use medium/semi-bold weight, with the sentence in normal muted text.

If this creates excessive card height after visual QA, prefer removing the takeaway entirely rather than adding more layout complexity.

---

# 7. Preserve the current KPI strips

Keep the existing four KPI values for each project.

## Inventory

- `24` — SKUs
- `15` — Stockout risk / at or below reorder point
- `1` — Excess stock
- `$43.7K` — Suggested reorder

## Freight

- `$695K` — Reviewed spend
- `421` — Invoice lines
- `60` — Review flags
- `$137.6K` — Flagged spend

Do not reinterpret:
- `$43.7K` as savings
- `$137.6K` as savings or recoverable value

Keep the KPI strip visually restrained.

---

# 8. Redesign the Inventory preview

The current homepage Inventory preview is effectively a miniature table:

`SKU | MoS | Action`

with product names, demand type, months of supply and reorder actions.

Replace it with a cleaner visual that communicates the project's core insight:

> Different demand patterns require different forecasting approaches.

---

# 9. Preferred Inventory visual — three real demand-pattern sparklines

Create three compact mini charts based on **real demand-history data from the sanitized project workbook/source evidence**.

Target categories:

- **Stable**
- **Growing**
- **Intermittent**

Each mini chart should show:

1. a simple actual demand-history sparkline
2. the demand-pattern label
3. the corresponding forecasting approach in very short text

Suggested labels:

### Stable
`6-month average`

### Growing
`3-month average`

### Intermittent
`Median-based`

Keep text minimal.

Do not show:
- SKU descriptions
- long explanations
- full axes
- chart legends
- table columns
- raw workbook styling

The purpose is pattern recognition, not detailed analysis.

---

# 10. Inventory data accuracy — mandatory

Do **not** invent the sparkline shapes.

Before implementing the preferred Inventory visual:

1. inspect the sanitized project source/workbook data available in the repository
2. identify one real SKU classified as Stable
3. identify one real SKU classified as Growing
4. identify one real SKU classified as Intermittent
5. use their actual monthly demand values

If raw monthly values are not available in a reliable machine-readable source, do **not** approximate or recreate them by eye from screenshots.

Use the fallback visual below instead.

---

# 11. Inventory fallback visual

If actual SKU time-series values cannot be reliably sourced, replace the mini-table with a simple inventory-status distribution based only on verified counts:

- **15** at/below reorder point
- **8** balanced
- **1** excess

Use one clean segmented horizontal bar or equivalent minimal chart.

Verified proportions:
- 62.5% at/below reorder point
- 33.3% balanced
- 4.2% excess

Because these counts partly repeat the KPI strip, this is a fallback only.

Preferred order:

**real demand-pattern sparklines > verified status distribution > current mini-table**

Do not use invented charts.

---

# 12. Redesign the Freight preview

Replace the current five-vendor mini-chart with a cleaner three-bar summary.

Use these verified measures:

### Linehaul freight
`79.7%`

### Top 3 vendors
`45.9%`

### Spend needing review
`19.8%`

`19.8%` is the approximate share of flagged spend based on the verified source values:

`$137,615 / $695,475`

Use the precise underlying source figures if calculating programmatically.

---

# 13. Freight chart styling

Use three clean horizontal bars.

Each row should contain only:
- short label
- bar
- percentage

Do not add:
- vendor names
- dollar amounts inside this chart
- legends
- paragraph captions
- a second concentration sentence below the chart

The KPI strip already provides scale in dollars and invoice counts.

The chart should provide **insight**, not repeat the KPIs.

---

# 14. Do not use raw Excel screenshots on the homepage

Keep raw/sanitized workbook screenshots on the individual project case-study pages.

The homepage should use curated, purpose-built visual summaries.

Preference order:

1. clean custom chart using verified project data
2. carefully cropped screenshot only if a custom visual cannot represent the insight honestly
3. never use a fake or generic chart

Do not reintroduce full spreadsheet screenshots into the homepage cards unless explicitly approved later.

---

# 15. Final card hierarchy

Each homepage project card should follow this hierarchy:

### 1. Eyebrow

### 2. Clear project title →

### 3. One concise sentence explaining what was done

### 4. KPI strip

### 5. Purpose-built visual

### 6. Quiet takeaway line

The entire card remains clickable.

Do not add:
- a second CTA
- a tools footer
- method pills
- separate “Built” heading
- another explanatory paragraph

---

# 16. Target copy — Inventory

## Eyebrow
`INVENTORY PLANNING`

## Title
`Demand Forecasting & Reorder Planning`

## Description
`Forecasted demand for 24 SKUs and set safety stock and reorder levels using 18 months of history.`

## KPIs
Keep existing verified KPI strip.

## Visual
Preferred: three verified demand-pattern sparklines.

Fallback: verified 15 / 8 / 1 inventory-status distribution.

## Takeaway
`One forecast method did not fit all 24 SKUs.`

---

# 17. Target copy — Freight

## Eyebrow
`FREIGHT COST ANALYSIS`

## Title
`Freight Cost & Invoice Review`

## Description
`Cleaned 12 months of freight invoices, compared vendor costs and flagged charges that needed review.`

## KPIs
Keep existing verified KPI strip.

## Visual
Three horizontal bars:
- Linehaul freight — 79.7%
- Top 3 vendors — 45.9%
- Spend needing review — 19.8%

## Takeaway
`Flagged spend is not savings — it is spend that needs checking.`

---

# 18. Card alignment

The two cards should remain visually balanced when side by side.

The current component uses breakpoint-specific minimum height for the title/description area.

Do not remove that behavior unless the new shorter titles/copy make it unnecessary.

If changing it:
- visually verify both cards at 1024px and 1280px
- prefer natural spacing if both preview boxes remain aligned
- do not introduce arbitrary blank space solely to force symmetry

Make the smallest adjustment necessary.

---

# 19. Project-to-Experience spacing

After removing `View all 9 projects`:

- inspect the gap between the bottom of the project cards and the Experience divider/heading
- reduce only section-specific excess spacing if needed
- do not globally change the `Section` component unless absolutely necessary
- preserve the overall page rhythm established by the approved design

The goal is to remove the obvious empty gap, not make the sections feel cramped.

---

# Responsive QA

Visually inspect:

- ~1280px
- ~1024px
- ~768px
- ~390px

## Check specifically

### Project copy
- titles are immediately understandable
- descriptions remain concise
- no awkward wrapping

### KPI strips
- all values/labels remain legible
- no clipping
- `$43.7K` and `$137.6K` retain adequate width

### Inventory visual
- sparklines remain readable if the preferred solution is used
- no fabricated/placeholder data is present
- fallback bar, if used, is clearly labeled

### Freight visual
- three bars fit comfortably
- percentages are legible
- labels do not truncate unnecessarily

### Takeaways
- remain quiet and secondary
- do not make the cards overly tall
- do not compete with KPI strip or chart

### Section transition
- Projects flows naturally into Experience
- no large blank gap remains after removal of the archive link

---

# Acceptance criteria

Before completing this pass, verify:

- [ ] current approved visual language is preserved
- [ ] no unrelated sections are redesigned
- [ ] `View all 9 projects` is removed from the homepage
- [ ] no replacement archive CTA is added
- [ ] Inventory eyebrow is `INVENTORY PLANNING`
- [ ] Freight eyebrow is `FREIGHT COST ANALYSIS`
- [ ] Inventory title is `Demand Forecasting & Reorder Planning`
- [ ] Freight title is `Freight Cost & Invoice Review`
- [ ] both `Built an Excel...` sentences are removed
- [ ] approved plain-English descriptions are used
- [ ] methods/tool footer is removed from both cards
- [ ] current KPI strips remain accurate
- [ ] `$43.7K` is not described as savings
- [ ] `$137.6K` is not described as savings
- [ ] Inventory mini-table is replaced with a cleaner verified visual
- [ ] no Inventory sparkline is invented
- [ ] Freight five-vendor chart is replaced with the three-measure chart
- [ ] Freight chart uses 79.7%, 45.9%, and approximately 19.8%
- [ ] no redundant chart caption is added
- [ ] takeaway line is implemented quietly, or omitted if visual QA shows unnecessary density
- [ ] raw Excel screenshots are not introduced on the homepage
- [ ] full project cards remain clickable
- [ ] no second CTA is added
- [ ] Projects-to-Experience spacing is improved without global layout changes
- [ ] desktop/tablet/mobile remain readable
- [ ] before/after comparison shows targeted refinement, not a redesign

---

# Deliverables

Return:

1. updated source
2. summary of exactly which files changed
3. full-page desktop render at ~1280px
4. close-up of both updated project cards
5. tablet render at ~768px
6. mobile render at ~390px
7. confirmation of which Inventory visual was used:
   - verified real sparklines, or
   - verified fallback status distribution
8. source/data references used for every new chart
9. short change log
10. confirmation that all acceptance criteria were visually reviewed

Do not make additional portfolio redesign changes outside this scope.
