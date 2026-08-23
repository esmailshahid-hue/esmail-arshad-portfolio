# Portfolio Refinement — Pass 2: Hero Metadata, Project De-cluttering, and a More Prominent Contact Section

## Scope
Run this after Pass 1 is approved.

This pass addresses the other readability issues on the homepage while preserving the overall structure.

## Primary files
- `src/pages/index.astro`
- `src/components/ProjectPreviewCard.astro`
- `src/components/InventoryDashboardPreview.astro`
- `src/components/FreightDashboardPreview.astro`
- `src/layouts/Base.astro`
- `content/site.ts`
- `src/styles/global.css` only where needed

Do not redesign the case-study pages in this pass.

---

# Objective

The current homepage is structurally strong, but two areas remain too compressed:

1. `Core / Systems / Education / Based` are squeezed into four desktop columns
2. the Contact section is so small that it is easy to miss

The project cards are much improved, but they repeat KPI information unnecessarily.

This pass should improve **readability and conversion**, not add more content.

---

# 1. Keep the Hero copy and portrait

Do not rewrite the Hero paragraph again.

Keep:

> Over the past four years, I've worked across planning, sourcing, logistics and inventory at Tesla, Amazon, Schneider Electric and Formlabs. Today I run factory operations in Lahore.

Keep the current restrained portrait treatment.

Do not add a CTA button to the Hero.

---

# 2. Restore Core / Systems / Education / Based to a true 2 × 2 desktop layout

The current code changes the block to `md:grid-cols-4`.

Remove that behavior.

On normal desktop widths, use:

**Row 1:** Core | Systems  
**Row 2:** Education | Based

Use a comfortable column gap and a clearly visible row gap.

Suggested direction:
- 2 columns from tablet/desktop upward
- 1 column only on narrow mobile if needed
- approximately 24–32px vertical space between the two rows
- approximately 40–64px between desktop columns

Do not make the block four columns again.

---

# 3. Improve the internal formatting of each metadata block

## Core
Keep as a compact list:

> Planning · Inventory · Procurement & Sourcing · Logistics · Operations · Analytics

Do not shrink the text to force one line.

Allow it to wrap naturally.

## Systems
Keep:

> SAP · Oracle · NetSuite · Excel · SQL · Tableau · Power BI

Again, natural wrapping is preferable to tiny text.

## Education
Do **not** render Education as one long inline sentence.

Use:

**Purdue University**  
M.S. Engineering Management, 2025  
B.S. Industrial Engineering, 2019

Institution should have slightly more visual weight than the degree lines.

## Based
Do **not** render this as one long line.

Use:

**Lahore**  
Open to UAE, Saudi Arabia & international roles

"Lahore" should be the immediate anchor.

---

# 4. Metadata icon rules

Keep the existing small line icons.

They are not the source of the readability problem.

Rules:
- keep one icon family
- 14–16px
- existing muted slate color
- same stroke weight
- no colored icon backgrounds
- no circles/badges around icons
- no additional decorative icons

The improvement should come from spacing and hierarchy.

---

# 5. Project cards: remove repeated KPI information

The new analytical previews are a major improvement. Keep them.

However, the cards currently repeat the same figures in:
- the KPI strip
- the project subtitle
- in some cases, the preview footer/callout

Remove this repetition.

## Inventory project

Keep the KPI strip:
- `24` SKUs
- `15` Stockout risk
- `1` Excess stock
- `$43.7K` Suggested reorder

Keep the three-row SKU decision view.

Remove the bottom text:

> 15 stockout risk · 8 balanced · 1 excess

The KPI strip already communicates the important risk counts.

The small segmented risk bar may remain **only if it still adds useful visual structure without text**. Otherwise remove it too.

### Replace the current subtitle
Current subtitle repeats KPIs.

Use:

> Demand classification, forecasting, safety stock and reorder logic

---

## Freight project

Keep the KPI strip:
- `$695K` Reviewed spend
- `421` Invoice lines
- `60` Review flags
- `$137.6K` Flagged spend

Keep the top-five vendor spend bars.

Keep the useful concentration callout:

> Top 3 vendors = 45.9% of spend

Remove the repeated line:

> 60 invoice lines flagged for review

It is already shown in the KPI strip.

### Replace the current subtitle
Use:

> Vendor concentration, spend normalization and anomaly review

---

# 6. Project microtype

After removing duplicate text, slightly improve readability.

Targets:
- KPI labels: approximately 11px rather than 10px where space permits
- table/chart row labels: approximately 12–13px
- do not introduce text smaller than 10.5–11px unless it is genuinely non-essential
- do not enlarge everything; use the newly created whitespace intelligently

Keep card heights visually balanced.

Do not increase the overall Projects section height materially.

---

# 7. Redesign Contact so it is prominent enough to be noticed

The current Contact treatment is too small and visually close to a utility footer.

Contact is an important conversion point. It needs to be **clearly visible without becoming a dark gimmicky panel**.

## Replace the current tiny Contact row with a purposeful closing section

Keep the same light / warm page background.

Use:
- a clear top divider
- approximately 48–64px vertical padding on desktop
- a strong section heading
- one short supporting sentence
- three obvious actions
- copyright integrated into the same closing region

Do not use a dark background.

---

# 8. Exact Contact content

## Heading
Use:

> Get in touch

Recommended size:
- approximately 28–32px desktop
- smaller but still prominent on mobile

## Supporting copy
Use:

> For supply chain, planning, logistics or operations opportunities, email me or connect on LinkedIn.

Keep this to one sentence.

Do not add another paragraph.

---

# 9. Contact action hierarchy

Email should be the strongest action because it is the most direct way to contact me.

### Primary
Show:

**Email**  
`esmailshahid@gmail.com`

Make the email visually prominent:
- stronger text weight or slightly larger type
- clear underline or restrained outline/button treatment
- do not hide the actual address behind only the words `Email me`

### Secondary
Show:
- `LinkedIn`
- `Résumé (PDF)`

Use the existing small line icons if desired:
- mail
- LinkedIn
- document/file

Keep all three actions easy to identify and easy to tap.

### Recommended desktop composition
A good structure is:

Left side:
- `Get in touch`
- one-sentence supporting copy

Right side:
- Email
- LinkedIn
- Résumé

or:

Heading + copy above  
three clearly separated actions below

Choose whichever produces the cleanest visual hierarchy at the actual viewport.

Do not compress everything into one tiny baseline row.

---

# 10. Integrate the copyright into Contact

Place:

> © 2026 Esmail Arshad

inside the same closing Contact region, visually subordinate to the contact actions.

It can sit:
- on a lower row beneath a subtle rule, or
- aligned to the opposite edge at the bottom

The copyright should not create another visually separate footer section.

---

# 11. Remove the confidentiality disclaimer completely

Delete the rendered text:

> Employer work is summarized without confidential internal detail. Client work is shown through sanitized excerpts.

Remove it from the visual site.

It may remain in internal source documentation if useful, but it must not render on the homepage/footer.

Remove the separate footer whose primary purpose is to show that disclaimer.

`Base.astro` should no longer render the current `confidentialityNote`.

---

# 12. Footer structure after this pass

There should no longer be:

Contact section  
→ large empty separation  
→ separate tinted footer  
→ disclaimer  
→ copyright

Instead, the page should end with one deliberate **Get in touch** section containing:
- heading
- supporting sentence
- Email
- LinkedIn
- Résumé
- copyright

This must be easy to notice when the reader reaches the end of the homepage.

---

# 13. Header / Contact navigation

Keep the `Contact` nav anchor and ensure it lands at the beginning of the new `Get in touch` section.

Do not remove the Contact link from desktop navigation.

---

# Acceptance criteria

Before completing this pass, verify:

- [ ] Hero copy remains concise and unchanged
- [ ] metadata is 2 × 2 on desktop, not 4 columns
- [ ] Education uses multiple lines
- [ ] Based uses `Lahore` as its own visual anchor
- [ ] metadata text has comfortable line length and spacing
- [ ] inventory card no longer repeats risk counts below the KPI strip
- [ ] freight card no longer repeats the 60 review flags below the KPI strip
- [ ] project subtitles explain capabilities rather than repeat KPIs
- [ ] Contact is visually prominent enough to notice
- [ ] actual email address is visible
- [ ] Contact remains on a light background
- [ ] confidentiality disclaimer is gone
- [ ] separate disclaimer/footer block is gone
- [ ] copyright is integrated into the Contact closing region
- [ ] Contact nav link still works

## Deliverable
Return:
1. updated source
2. full-page desktop render at ~1280px
3. close-up render of the Hero metadata area
4. close-up render of the new Contact section
