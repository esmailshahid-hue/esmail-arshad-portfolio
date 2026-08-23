# Portfolio Visual Refinement Brief for Claude Design / Claude Code

## Objective

Refine the current simplified portfolio so it feels more visually polished and intentional **without adding more content or making the page longer**.

The current structure is already much stronger. The next pass should focus on:

- stronger visual hierarchy;
- better project-artifact presentation;
- purposeful accent-color use;
- cleaner Experience rows;
- a more polished hero/headshot treatment;
- restrained interaction;
- testing company logos only if they can be executed consistently.

Core principle:

> **Improve visual quality through hierarchy, proportion, crop quality, typography, and interaction — not by adding more sections, labels, diagrams, or decorative UI.**

---

# 1. Preserve the Simplified Structure

Keep only:

```text
Intro / Hero
Projects
Experience
Contact
```

About information should remain integrated into the top section rather than returning as a separate long section.

Do not reintroduce:

- Selected Work;
- How I Work;
- standalone employer case-study cards;
- homepage employer diagrams;
- capability matrices;
- metric strips;
- logo walls;
- marketing CTA sections.

---

# 2. Hero / Intro

## Goal

The hero should feel personal and polished while remaining compact.

Keep:

```text
Hi, I’m Esmail.

Supply chain and operations professional with 4+ years
across global companies and hands-on operating roles.

Short supporting line

Core skills
Systems
Education
Location / mobility

[headshot]
```

## Headshot

Recommended desktop treatment:

- approximately **240–270px wide**;
- simple crop;
- no card container;
- no caption;
- no heavy border;
- no visible shadow unless extremely subtle.

Mobile:
- text first;
- image second.

Do not let the portrait consume the first mobile viewport.

## Spacing

Target hero padding:

```text
36–48px top
36–48px bottom
```

---

# 3. Projects Should Be the Visual Focus

The two completed projects should receive most of the homepage visual attention:

1. **Demand & Inventory Planning**
2. **Freight Spend & Vendor Cost Analysis**

At normal desktop/laptop width, show them side by side.

Suggested breakpoint:

```css
@media (min-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
```

Do not rely on an `auto-fit` rule that may stack them too early.

---

# 4. Project Card Structure

Keep each card extremely simple:

```text
[large cropped artifact]

Demand & Inventory Planning →
24 SKUs · 18 months · 15 at/below reorder point
```

and:

```text
[large cropped artifact]

Freight Spend & Vendor Cost Analysis →
421 invoice lines · 11 vendors · ~$695K reviewed spend
```

Remove:

- duplicate category labels;
- long problem-led subtitle;
- separate `View project →`;
- multi-paragraph copy;
- stat grids;
- methodology previews.

Make the project title itself clickable.

---

# 5. Project Artifact Crops

This is one of the highest-priority refinements.

Do not show full dashboards at a scale where labels are unreadable.

## Demand planning crop

Prioritize:

- key KPI block;
- one demand chart;
- inventory-risk / reorder status.

## Freight analytics crop

Prioritize:

- reviewed-spend headline;
- vendor concentration;
- review queue / anomaly summary.

Use a shallower crop, approximately:

```css
aspect-ratio: 2 / 1;
```

or:

```text
220–250px image height on desktop
```

The homepage image only needs to signal real analytical work. The full artifact belongs on the project page.

## Artifact frame

Preferred:

```text
1px neutral border
small radius
no shadow
```

Acceptable alternative:

```text
1px border
extremely soft shadow
```

Avoid browser chrome, fake window controls, thick cards, or large shadows.

---

# 6. Light Project Interaction

Use restrained hover behavior only:

```text
artifact scale: 1.01–1.02
title / arrow shifts slightly
border darkens slightly
```

Duration:

```text
120–180ms
```

No parallax, reveal animations, expanding cards, or dramatic movement.

Respect `prefers-reduced-motion`.

---

# 7. Experience — Improve Hierarchy, Not Complexity

Keep Experience as a compact editorial list.

Each row should contain:

```text
Date
Company
Role
Selected result →
```

The result should link directly to the corresponding employer case study.

Do not use:

- cards;
- timeline graphics;
- expandable résumé bullets;
- mini diagrams;
- tooltips.

---

# 8. Remove Repeated `Case study →`

Instead of:

```text
Tesla
Global Supply Chain Manager Intern
$150K procurement savings
Case study →
```

use:

```text
Tesla
Global Supply Chain Manager Intern
$150K procurement savings →
```

The result itself is the case-study link.

This removes repeated interface copy from every row.

---

# 9. Experience Typography Hierarchy

The eye should hit:

```text
COMPANY
RESULT
ROLE
DATE
```

Recommended:

### Company
- strongest weight;
- darkest text.

### Result
- medium / semibold;
- interactive;
- optionally slate accent.

### Role
- quieter;
- secondary.

### Date
- smallest and lightest.

Example:

```text
2024        Tesla
            Global Supply Chain Manager Intern
            $150K procurement savings →
```

Do not give every line equal visual weight.

---

# 10. Experience Row Spacing

Recommended:

```text
11–13px top padding
11–13px bottom padding
```

Use thin horizontal rules between roles.

Avoid 18–20px vertical padding per row.

The section should feel like a polished index.

---

# 11. Company Logos — Optional Test Only

Company logos can improve recognition, but only if the system is visually consistent.

Do **not** automatically add them.

## Recommended test

Try:

- monochrome only;
- approximately **16–20px**;
- immediately beside company name;
- same optical footprint;
- grayscale or current slate color;
- no full-color branding.

Example:

```text
[logo] Tesla
       Global Supply Chain Manager Intern
       $150K procurement savings →
```

## Only keep logos if all seven work

The Experience section includes:

- Jannat & Sadaf;
- Schneider Electric;
- Formlabs;
- Tesla;
- TLS Technology;
- Amazon;
- Cosmos Surfaces.

Only keep logos if all seven can be represented with:

- clean source artwork;
- similar visual quality;
- similar apparent size;
- good monochrome treatment.

If Jannat & Sadaf, TLS, or Cosmos require low-quality marks or inconsistent substitutes, remove logos from **all** rows.

Consistency matters more than recognition.

## Do not create a logo strip

Do not add a separate employer logo wall.

If logos are used, they belong only within Experience rows.

---

# 12. Alternative if Logos Do Not Work

Keep Experience purely typographic.

If a small visual anchor is still needed, test:

- a tiny accent tick;
- or a subtle dot aligned with each date.

Do not create a full timeline rail.

First test the section with no decorative marker at all.

---

# 13. Accent Color

Use the muted slate accent mainly for interactive elements:

- project arrows;
- project-title hover;
- selected Experience result links;
- navbar hover / active state;
- Résumé utility link.

Avoid using accent color:
- on every heading;
- on every company name;
- as section backgrounds;
- as decorative bars everywhere.

Accent should signal:

> **interactive / active / important**

---

# 14. Reduce Border Density

Recommended:

### Header
thin bottom rule.

### Project artifact
1px neutral border.

### Experience
thin horizontal rules.

### Contact
background contrast can separate the section.

Avoid:
- bordered skill blocks;
- card borders around every experience;
- boxed metadata;
- borders around every section.

Let typography and spacing do most of the work.

---

# 15. Hero Metadata Styling

Core skills, systems, education, and mobility should feel like metadata, not separate content sections.

Example:

```text
Core
Planning · Inventory · Procurement & Sourcing · Logistics · Operations · Analytics

Systems
SAP · Oracle · NetSuite · Excel · SQL · Tableau · Power BI

Education
Purdue University · M.S. Engineering Management, 2025 · B.S. Industrial Engineering, 2019

Based in Lahore · Open internationally
```

Use:
- small muted labels;
- normal-weight values;
- tight spacing.

Do not render as cards or chips.

---

# 16. Contact

Keep the dark background if it creates a clean visual endpoint.

Reduce Contact to:

```text
Contact

Email
LinkedIn
Résumé
```

Do not repeat location if it is already in the hero.

Target total desktop height:

```text
120–160px
```

No marketing headline.
No CTA paragraph.
No large buttons.

---

# 17. Footer Disclosure

Use exactly one disclosure.

Suggested:

```text
Employer work is summarized without confidential detail. Client artifacts are sanitized.
```

Use:
- 10–11px text;
- muted gray;
- one line;
- minimal padding.

Remove sanitization language from the Projects heading area.

---

# 18. Remove Redundant Microcopy

Delete explanatory UI lines such as:

```text
Independent client work · sanitized excerpts
One selected result per role · full history on the résumé
View project →
Case study →
```

where the interface already makes the behavior obvious.

Preferred:

```text
Projects

Demand & Inventory Planning →
24 SKUs · 18 months · 15 at/below reorder point
```

and:

```text
Tesla
Global Supply Chain Manager Intern
$150K procurement savings →
```

The interface should explain itself.

---

# 19. Section Spacing

Use a tighter global rhythm.

| Area | Target |
|---|---:|
| Hero top/bottom | 36–48px |
| Major section top/bottom | 32–40px |
| Heading → content | 20–24px |
| Experience row top/bottom | 11–13px |
| Project image → title | 10–14px |
| Project title → scope line | 6–10px |
| Contact top/bottom | 28–36px |

Do not apply generous editorial spacing uniformly.

---

# 20. Target Homepage Length

Aim for approximately:

```text
1,500–1,800px desktop
```

The intended experience:

- intro is visible immediately;
- both projects appear within the first meaningful scroll;
- Experience follows quickly;
- the entire homepage can be consumed in about two desktop screens.

Do not preserve empty space simply to make the site feel premium.

Premium should come from:
- proportion;
- typography;
- alignment;
- image quality;
- restraint.

---

# 21. Mobile

Mobile structure:

```text
Header
Hero copy
Headshot
Hero metadata
Projects
Experience
Contact
```

Requirements:

- project cards stack;
- artifact crops remain readable;
- Experience result links remain visibly clickable;
- Résumé remains accessible;
- no hover-only content;
- remove logos on mobile if they create clutter.

---

# 22. Do Not Add

Do not add:

- decorative skill icons;
- full-color employer logos;
- logo wall;
- metric tiles;
- stock supply-chain photography;
- animated charts;
- glassmorphism;
- gradients;
- colored cards;
- large shadows;
- horizontal career timeline;
- mini employer diagrams;
- skill pills;
- interactive dashboard embeds;
- heavy scroll animation.

The page should become more attractive by being **better composed**, not more decorated.

---

# 23. Implementation Priority

## Priority 1
Refine project artifact crops and make the two project cards visually strong.

## Priority 2
Tighten hero / metadata layout and improve headshot proportion.

## Priority 3
Improve Experience hierarchy, row density, and metric-as-link behavior.

## Priority 4
Use accent color more intentionally.

## Priority 5
Test small monochrome company logos.

## Priority 6
Keep logos only if the full seven-company system looks consistently better than the typographic version.

Do not start with logos.

---

# 24. Acceptance Criteria

## Hero
- feels personal;
- remains compact;
- headshot is visible without dominating;
- metadata is useful but visually quiet.

## Projects
- appear side by side on normal desktop widths;
- screenshots visibly look like real analytical work;
- crops are readable;
- cards contain minimal text.

## Experience
- all seven roles are quickly scannable;
- company names and selected results stand out;
- rows are compact;
- no repeated `Case study →`;
- logos, if used, are fully consistent.

## Contact
- feels like a clean endpoint;
- contains only essential links;
- does not read like a marketing CTA.

## Overall

The site should feel:

```text
more polished
without
feeling more designed
```

---

# 25. Final Directive

> Keep the current minimalist structure and improve its visual quality through stronger artifact crops, sharper typography hierarchy, tighter spacing, purposeful accent-color use, subtle interaction, and a more polished headshot treatment. Do not add new content sections. Test small monochrome employer logos only after the Experience section works typographically, and keep them only if all seven logos can be presented consistently. The portfolio should remain quiet, compact, and recruiter-first.
