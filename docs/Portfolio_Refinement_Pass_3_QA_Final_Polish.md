# Portfolio Refinement — Pass 3: Responsive QA, Readability Audit, and Final Polish

## Scope
Run only after Passes 1 and 2 are approved.

Do not introduce another redesign concept in this pass.

This is a QA and polish pass focused on:
- readability
- responsive behavior
- spacing
- visual hierarchy
- interaction consistency

---

# 1. Required viewport captures

Render and visually inspect the homepage at:

- ~1280px desktop
- ~1024px smaller desktop
- ~768px tablet
- ~390px mobile

Do not rely only on CSS logic or automated overflow checks.

The actual rendered page must be reviewed.

---

# 2. Readability audit

The main concern is clustered small text.

Check every homepage section for:

- overly narrow columns
- long text forced into tiny type
- too many simultaneous labels
- multiple repeated lines saying the same thing
- text below a sensible readable threshold
- insufficient line-height
- insufficient vertical separation between information groups

## Type-size guardrails

Use these as practical targets, not rigid rules:

- primary body / explanatory copy: ~15–17px
- metadata values: ~14–15px
- timeline company names: ~14–15px
- timeline role titles: ~12.5–13.5px
- timeline dates: ~12px
- project visualization rows: ~12–13px
- small uppercase labels: ~10.5–11px minimum

Do not solve overflow by making type smaller than these targets.

Prefer:
- wrapping
- removing repetition
- changing layout
- adding breathing room

---

# 3. Hero + metadata QA

Desktop:
- Hero and portrait should feel balanced
- 2 × 2 metadata layout should read as four calm groups, not one dense matrix
- Core and Systems can wrap naturally
- Education must not become a long inline sentence
- Based must clearly show `Lahore` first

Tablet/mobile:
- metadata should collapse gracefully
- use 2 columns only where the text remains comfortable
- switch to 1 column on narrow mobile if necessary
- icons remain small and aligned
- no horizontal scrolling

---

# 4. Projects QA

Desktop:
- both cards should remain balanced
- KPI strips should be easy to scan
- inventory rows should be readable without zooming
- freight bars and vendor labels should be readable without zooming
- project subtitles should add context, not repeat KPI figures

Tablet/mobile:
- stack cards when two columns become cramped
- no clipped labels
- no horizontal scroll inside cards
- KPI rows may become 2 × 2 if necessary
- preserve readable vendor names and SKU/action labels

Do not shrink the visualizations excessively just to keep two columns.

---

# 5. Experience QA

## Desktop
Verify:
- one integrated timeline, not a timeline plus a second résumé grid
- role spans approximately reflect duration
- exact month ranges remain readable
- Tesla and Formlabs are clear and separate within 2024
- no metrics/results appear
- no repeated arrows appear
- no label collisions
- no company/role/date text smaller than the readability targets

## Tablet
If the horizontal timeline becomes visually compromised:
- switch earlier to the vertical version

Do not preserve the horizontal layout simply because there is technically no overflow.

## Mobile
Use a compact vertical timeline.

Each role should show:
- company
- role
- date

No metric/result.

No horizontal timeline scrolling.

---

# 6. Contact visibility QA

The final Contact section is intentionally more prominent than the previous version.

At every viewport, verify that:

- `Get in touch` is immediately visible as a section heading
- the supporting sentence is readable
- the email address is unmistakable
- LinkedIn and Résumé are easy to identify
- tap targets are comfortable on mobile
- the section does not visually collapse into a tiny footer
- the section remains light and consistent with the rest of the portfolio

The reader should not reach the bottom of the page without noticing how to contact me.

---

# 7. Footer/disclaimer QA

Verify:

- confidentiality disclaimer is not rendered anywhere
- no separate large footer survives beneath Contact
- copyright appears once
- copyright stays visually subordinate
- there is no large blank space after Contact

---

# 8. Header QA

Check:
- name remains on one line
- Projects / Experience / Contact / Résumé fit comfortably on desktop
- Contact remains available at desktop widths
- mobile navigation does not crowd the header
- theme toggle does not cause wrapping or misalignment

---

# 9. Dark-mode decision gate

Do not automatically remove dark mode.

After reviewing the final header and homepage:

Keep the theme toggle only if:
- it does not crowd the header
- both themes look equally intentional
- it does not add visual noise

If the toggle compromises the minimal header or dark mode looks materially weaker than the light design, remove the toggle and use the light editorial design consistently.

Document the decision briefly.

---

# 10. Interaction consistency

Check all interactive homepage elements:

- project cards
- timeline role links
- email
- LinkedIn
- Résumé
- navigation
- theme toggle if retained

Requirements:
- clear keyboard focus
- subtle consistent hover treatment
- no excessive arrows
- no multiple competing CTA styles
- full clickable areas where appropriate

---

# 11. Final visual rhythm

The final homepage should feel like:

1. **Introduction**
2. **Professional profile**
3. **Proof of work**
4. **Career chronology**
5. **Clear invitation to contact**

There should be enough whitespace to separate these mental tasks.

Do not optimize for the fewest possible pixels of scrolling at the expense of readability.

A slightly taller page is preferable to a cramped one.

---

# 12. Final acceptance checklist

- [ ] Hero feels clean and not résumé-like
- [ ] Core/Systems/Education/Based are calm and readable
- [ ] Projects are the visual centerpiece
- [ ] no duplicated KPI copy
- [ ] Experience is one integrated chronology
- [ ] timeline shows duration, not only start dates
- [ ] Experience contains no outcome clutter
- [ ] Contact is prominent and easy to act on
- [ ] email address is visibly displayed
- [ ] confidentiality disclaimer is absent
- [ ] no redundant footer remains
- [ ] no page-level horizontal overflow at any required viewport
- [ ] mobile remains comfortable to scan
- [ ] no visible text has been made tiny to solve layout problems
- [ ] dark-mode decision has been consciously reviewed
- [ ] final page feels like a portfolio, not a compressed résumé

## Final deliverables

Return:
1. final updated source
2. full-page 1280px capture
3. full-page 1024px capture
4. full-page 768px capture
5. full-page 390px capture
6. short change log
7. confirmation that each checklist item was visually reviewed
