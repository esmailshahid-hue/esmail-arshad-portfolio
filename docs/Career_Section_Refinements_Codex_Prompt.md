# Career Section Refinements — Codex Implementation Prompt

## Objective

Refine the existing **Experience** section of Esmail Arshad’s portfolio into a cleaner, more informative **Career** section.

The goal is to preserve the portfolio’s current editorial/minimal visual language while improving:

- information hierarchy
- breadth and clarity of each role summary
- visibility of quantitative outcomes
- location context
- scanability
- vertical efficiency

This should **not** become a résumé-style section with long bullet lists, cards, logos, or excessive visual decoration.

---

## 1. Rename the Section

Change the section title from:

> Experience

to:

> Career

Do **not** add a long narrative subtitle or introductory sentence. Keep the heading treatment consistent with the rest of the portfolio.

---

## 2. Overall Information Architecture

Keep the section as a clean chronological two-column layout.

### Left column
Show:

1. date range
2. location directly underneath

### Right column
Show:

1. role title
2. company name
3. one concise role-scope sentence
4. 2–3 subtle metric chips

Recommended hierarchy:

```text
DATE RANGE
Location

Role Title
COMPANY NAME

One-sentence role scope covering the broader operating remit of the position.

[ metric ] [ metric ] [ metric ]
```

Do **not** add:

- timeline dots
- vertical timeline lines
- cards around each role
- company logos
- decorative icons
- separate bullet lists of responsibilities

The section should feel editorial and understated.

---

## 3. Layout Refinements

### Desktop

Use approximately:

- **20–22%** width for dates/locations
- **78–80%** width for role content

Reduce the excessive horizontal gap between the date column and role content.

The left column should feel compact and functional, not like a large empty sidebar.

### Vertical spacing

The current rows use too much vertical space relative to the amount of content.

Tighten spacing while preserving readability:

- keep comfortable spacing between role title, company, summary, and metrics
- reduce top/bottom padding around each role
- keep dividers subtle
- aim for summaries to occupy no more than roughly 2 lines on a standard desktop viewport where possible
- keep the full section materially shorter than the current version even though more useful information is being added

Do not over-compress the section to the point that entries feel crowded.

---

## 4. Typography and Hierarchy

### Role title
Make the **role title** the primary visual element.

It should use the portfolio’s existing serif/display typography and be visually stronger than the company name.

### Company
Place the company directly below the role title.

Use the existing small uppercase/semibold green treatment or the closest existing design token.

If company names are links:

- remove any permanent underline
- use only a subtle hover/focus state
- do not make links visually noisy

### Dates
Use medium or semibold weight.

### Locations
Place directly below the date in smaller, lighter text.

Do not use location-pin icons.

### Summary
Use the existing body type style.

The summary should read as a single sentence describing the **broad operating scope of the role**, not as a compressed rewrite of the résumé bullets.

---

## 5. Role Content

Use the following role titles, dates, locations, summaries, and metrics.

### Jannat & Sadaf

**Date:** Jan 2026 – Present  
**Location:** Lahore, Pakistan  
**Role:** Operations Manager  
**Company:** Jannat & Sadaf

**Summary:**

> Own end-to-end production and supply operations for a made-to-order apparel business, spanning order scheduling, capacity planning, sourcing, material procurement, cost control, and fulfillment across Pret, Formal, and Wedding lines.

**Metric chips:**

- `98.6% on-time delivery`
- `93.5% spend traceability`
- `↓25% fabric cost · <5% rework`

---

### Schneider Electric

**Date:** Feb 2025 – Dec 2025  
**Location:** Foxborough, Massachusetts  
**Role:** Supply Chain Planner  
**Company:** Schneider Electric

**Summary:**

> Managed spare-parts planning and order execution for data-center power products, spanning S&OP/S&OE forecasting, inventory and shortage management, supplier and warehouse coordination, outbound logistics, and reverse-logistics/RMA workflows.

**Metric chips:**

- `↑20% forecast accuracy`
- `↑30% on-time pickups`
- `↓15% repair lead time`

---

### Formlabs

**Date:** Sep 2024 – Dec 2024  
**Location:** Boston, Massachusetts  
**Role:** Supply Chain Planner  
**Company:** Formlabs

**Summary:**

> Supported supply planning and inventory control across SLA and SLS product lines, covering material-risk monitoring, inventory segmentation and disposition, and cost/reporting automation across planning, operations, and finance.

**Metric chips:**

- `↓20% late orders · ↑6% OTIF`
- `$50K carrying-cost savings`
- `↓80% manual COGS work`

---

### Tesla

**Date:** May 2024 – Aug 2024  
**Location:** Palo Alto, California  
**Role:** Global Supply Manager  
**Company:** Tesla

**Summary:**

> Managed supplier sourcing and commercial analysis for NPI manufacturing equipment in electronics assembly, covering supplier negotiations, capacity and DFM reviews, should-costing, Capex governance, and cross-functional support for engineering, manufacturing, and finance.

**Metric chips:**

- `↓3% Capex spend`
- `$150K procurement savings`
- `$100M+ Capex visibility`

---

### TLS Technology

**Date:** May 2023 – Nov 2023  
**Location:** Lahore, Pakistan  
**Role:** Operations Manager  
**Company:** TLS Technology

**Summary:**

> Led cross-border technology fulfillment and market expansion across EMEA and APAC, overseeing a 10-person operations team, IOR/EOR vendor networks, order processing, compliance processes, and regional delivery execution.

**Metric chips:**

- `↓18% project delivery time`
- `↑12% market share`
- `5 IOR vendors / quarter`

---

### Amazon

**Date:** Nov 2021 – Nov 2022  
**Location:** Greater Seattle Area  
**Role:** Program Manager  
**Company:** Amazon

**Summary:**

> Managed cost and service performance across Amazon Freight’s middle-mile network, using pricing, lane, shipment, and carrier data to improve capacity alignment, resolve operational exceptions, and strengthen performance visibility for planning and operations teams.

**Metric chips:**

- `↓8% network cost`
- `98% on-time delivery`
- `20 hrs saved / week`

---

### Cosmos Surfaces

**Date:** Jan 2020 – Nov 2021  
**Location:** Greater Seattle Area  
**Role:** Operations Engineer  
**Company:** Cosmos Surfaces

**Summary:**

> Managed warehouse and distribution operations for imported stone products, spanning inventory control, WMS/SAP execution, 3PL coordination, dock operations, warehouse flow, and outbound fulfillment across the Greater Seattle area.

**Metric chips:**

- `95% order fulfillment`
- `↓50% truck turnaround`
- `↑20% warehouse capacity`

---

## 6. Metric Chip Design

The metric chips should be **distinctive from the summary text but deliberately subtle**.

They are supporting evidence, not the visual centerpiece of the section.

### Visual treatment

Use:

- very light warm-gray, stone, or muted sage background consistent with the site palette
- no visible border unless the existing design system requires an extremely subtle one
- no shadow
- compact horizontal and vertical padding
- approximately **8–10px corner radius**, not an exaggerated pill shape
- smaller type than the summary sentence
- regular-to-medium font weight
- tight but comfortable spacing between chips
- natural wrapping when required

Do **not**:

- use dark green filled pills
- use large badges
- use bright accent colors
- add icons beyond the `↑` and `↓` characters already present in the copy
- animate the chips
- make the chips look like buttons or CTAs

### Metric-writing convention

Maintain this system consistently:

- `↑` = desirable increase
- `↓` = desirable decrease
- no arrow for absolute performance levels, monetary savings, scale, or counts

Examples:

```text
↑20% forecast accuracy
↓15% repair lead time
98% on-time delivery
$150K procurement savings
```

Do not rewrite these as wordier phrases such as:

```text
20% better forecast accuracy
15% shorter repair lead time
20% fewer late orders
80% less manual reporting
```

---

## 7. Role Summary Writing Rule

Do not treat the summary as a fourth résumé bullet.

Each sentence should communicate the **operating scope of the role**.

The pattern should be closer to:

> Managed/Owned/Led [core function or business area], spanning [major functional responsibilities/workstreams].

rather than:

> Built X, improved Y, and created Z.

Specific projects and outcomes belong in the metric chips and elsewhere in the portfolio.

Preserve the exact summaries supplied above unless a very minor wording adjustment is required for responsive layout.

Do not materially narrow their scope.

---

## 8. Responsive Behavior

### Tablet
Maintain the two-column structure while reducing the left-column width appropriately.

Ensure:

- role summaries remain readable
- metric chips wrap naturally
- no horizontal overflow
- date/location stay visually associated with the correct role

### Mobile
Stack each entry vertically:

```text
DATE RANGE
Location

Role Title
COMPANY

Summary

[ metric ] [ metric ]
[ metric ]
```

Keep:

- date and location compact
- clear separation between entries
- metric chips left-aligned
- natural chip wrapping

Do not preserve a narrow desktop-style date column on mobile.

---

## 9. Preserve Existing Portfolio Design Language

Before making changes, inspect the existing implementation and reuse current:

- typography tokens
- spacing variables
- color variables
- content widths
- divider styles
- responsive breakpoints
- component conventions

Do not introduce a new visual system solely for this section.

The finished Career section should look like it was always part of the existing portfolio.

---

## 10. Do Not Change

Do not modify:

- Hero section
- Projects section
- navigation
- footer/contact section
- global typography unless strictly required
- global page widths unless the Career implementation reveals an actual shared-layout bug
- wording or metrics in other sections

Do not create new pages or dependencies for this task.

---

## 11. Final Quality Check

Before considering the task complete, verify all of the following:

- [ ] `Experience` has been renamed to `Career`
- [ ] All seven roles are present and remain in reverse chronological order
- [ ] Every role shows a date and location
- [ ] Role title is visually more prominent than company name
- [ ] Company names do not have distracting permanent underlines
- [ ] Each role has exactly one concise scope sentence
- [ ] Scope sentences describe the broad role rather than merely restating résumé bullets
- [ ] Quantitative outcomes appear as subtle chips
- [ ] Arrow conventions are used consistently
- [ ] Chips do not resemble buttons or CTAs
- [ ] The section remains visually minimal
- [ ] No timeline line, timeline dots, logos, or unnecessary icons were added
- [ ] Horizontal whitespace between the two columns has been reduced
- [ ] Vertical spacing is tighter than the current implementation
- [ ] Metric chips wrap cleanly at narrower widths
- [ ] Mobile layout stacks correctly
- [ ] No unrelated portfolio sections were changed
- [ ] Existing styling/components were reused wherever possible
- [ ] The page builds successfully with no console or TypeScript errors
