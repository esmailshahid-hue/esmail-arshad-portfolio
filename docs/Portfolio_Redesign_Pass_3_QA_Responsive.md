# Portfolio Redesign — Pass 3: Responsive QA, Final Polish and Export

## Run this only after Passes 1 and 2 are approved

## Objective
Do not redesign the site again. This pass is for responsive behavior, visual QA, interaction cleanup and final export.

The goal is to catch implementation problems without introducing new concepts.

---

# 1. Required viewport review

Produce and inspect full-page captures at:

- Desktop: approximately `1280 px`
- Tablet: approximately `768 px`
- Mobile: approximately `390 px`

Do not treat responsive CSS as sufficient proof. Review the actual rendered layouts.

---

# 2. Header / navigation QA

At all sizes:
- navigation must not collide with the name
- no awkward two-line nav unless intentionally designed
- no horizontal page scroll
- résumé link remains easy to tap
- if the desktop nav cannot fit cleanly at mobile width, use a minimal mobile treatment rather than shrinking text excessively

Do not add a large mobile drawer unless necessary.

---

# 3. Hero QA

Desktop:
- portrait supports the copy rather than dominating it
- H1 has strong presence
- single intro paragraph remains one compact block
- metadata grid is clearly subordinate

Tablet/mobile:
- portrait and copy should not become an awkward narrow two-column squeeze
- stack the portrait and copy when needed
- maintain a natural reading order
- metadata may collapse from 2 × 2 to 1 × 4 on narrow mobile
- icons must remain small and aligned

---

# 4. Project QA

Desktop:
- both project cards are visually balanced
- both previews have the same height
- all KPI labels are readable
- no data is clipped
- no raw Excel screenshot remains

Tablet/mobile:
- cards stack if necessary
- inventory planner rows remain legible
- freight vendor bars remain legible
- KPI rows can become 2 × 2
- no horizontal scrolling
- no tiny labels that require zoom

---

# 5. Timeline QA

## Desktop
The timeline should remain one coherent horizontal career progression.

Check:
- all seven nodes fit without collisions
- alternating above/below entries do not overlap
- long role titles wrap cleanly
- two 2024 entries remain visually distinct
- the current 2026-Present role is subtly emphasized
- company name remains more prominent than metric
- no metric is bright enough to compete with Projects
- no repeated arrow clutter

## Tablet
Do not force a seven-node horizontal timeline if it becomes cramped.

At tablet width:
- either use a simplified two-row timeline
- or switch to a compact vertical timeline

Choose the cleaner option based on the actual render.

## Mobile
Switch to a **vertical timeline / stacked chronology**.

Requirements:
- one thin vertical line
- compact nodes
- company + role + date + result
- no horizontally scrolling timeline
- no tiny company labels
- preserve the same chronological information

---

# 6. Company-logo quality gate

If company logos were used in Pass 1:
- inspect all seven together
- confirm identical visual treatment
- confirm none is noticeably larger or more colorful
- confirm all remain recognizable at the chosen size

If the logos do not look consistently polished, remove **all** company logos.

Do not keep a mixed set.

---

# 7. Icon quality gate

Metadata/contact icons should:
- use one icon family
- use one stroke weight
- use one accent color
- be 14–16 px
- align optically with labels

Remove any icon that feels decorative rather than useful.

---

# 8. Copy QA

Final visible copy must:
- contain no em dash characters
- contain no confidentiality/sanitization disclaimer
- contain no AI-style phrase such as `Purdue-trained industrial engineer`
- use `2026-Present`
- use `80% reduction in manual SLS cost reporting`
- use `Lahore · Open to UAE, Saudi Arabia & international roles`

Check spelling consistency across the page.

---

# 9. Contact/footer QA

Desktop target:
`Contact` + email + LinkedIn + Résumé (PDF) + copyright in one compact closing region.

Mobile:
- stack naturally
- keep tap targets comfortable
- no dark footer background
- copyright should not become its own mostly blank screen/page

---

# 10. PDF/export bug

The previous `Design_Updated_3.pdf` created a second almost-empty page containing only the copyright.

Fix this.

For the final PDF:
- there must not be a mostly blank second page
- copyright must remain with the footer/contact area
- avoid accidental print page breaks
- set print styles explicitly if needed
- inspect the exported PDF visually after export

The website itself does not need to be forced into one literal printed page if doing so harms the web design, but the exported review PDF must not contain accidental blank overflow.

---

# 11. Final design constraints

Do not:
- reintroduce an About section
- add a dark Contact section
- add more project cards
- add more body copy
- introduce new colors
- add decorative graphics
- add extra badges
- add more navigation links
- materially increase page length

The final polish should come from:
- spacing
- alignment
- typography
- hierarchy
- crisp project visuals
- responsive behavior

---

# Final deliverables

Return all of the following:

1. final updated design/source
2. full-page desktop capture at ~1280 px
3. full-page tablet capture at ~768 px
4. full-page mobile capture at ~390 px
5. final PDF export
6. a short change log listing only what changed in this pass
7. confirmation that the PDF blank-page issue is fixed

Do not declare the design final until all three viewport captures and the PDF have been visually checked.
