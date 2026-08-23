# Portfolio Redesign — Pass 2: Rebuild the Two Project Visuals

## Run this only after Pass 1 is complete

### Files to attach to Claude
- The latest design/source produced in Pass 1
- `Inventory_Planning_Model_Portfolio.xlsx`
- `Freight_Spend_Analysis_Portfolio.xlsx`

## Objective
Replace the two raw Excel screenshots with **purpose-built portfolio previews** derived from the workbook data.

The current screenshots look like miniature spreadsheets and are difficult to read. Do not crop or polish the screenshots. Replace them completely.

The new previews should look like intentionally designed analytical artifacts:
- crisp
- readable at card size
- data-driven
- high impact
- visually consistent with the portfolio
- obviously related to the underlying Excel work without literally looking like Excel

## Non-negotiable rule
Use the Excel workbooks as the **source of truth for the numbers**, but recreate the visuals with native HTML/CSS/SVG or equivalent vector-style design.

Do not:
- paste raw Excel screenshots
- simulate the Excel ribbon or spreadsheet chrome
- show huge tables
- show tiny unreadable cells
- invent metrics not supported by the workbooks

---

# Shared visual system for both previews

Both project previews should clearly belong to the same design family.

Use:
- warm white / off-white background
- existing portfolio text colors
- existing muted blue as primary accent
- very light neutral dividers
- thin borders
- no drop shadows
- no gradients
- no saturated traffic-light palette
- no 3D charts
- no pie charts
- no dense legends

The preview should function at approximately half-page width.

Target:
- 3–4 large, readable KPIs
- one main analytical visual
- at most 2–3 supporting labels/callouts
- generous whitespace

Keep all numbers legible without zooming.

---

# Project 1 — Demand & Inventory Planning

## Card copy outside the visual

Small label:
> Demand & inventory planning

Headline:
> Matching forecast methods to SKU demand behavior

Support line:
> 24 SKUs · 18 months · 15 stockout-risk SKUs

---

## Workbook facts to use

Source workbook:
`Inventory_Planning_Model_Portfolio.xlsx`

Supported facts:
- 24 total SKUs
- 18 months of historical demand
- 15 stockout-risk SKUs
- 8 balanced SKUs
- 1 excess-stock SKU
- suggested reorder value: approximately `$43,684.50`
- forecast monthly demand: approximately `2,365`
- demand behaviors include Stable, Growing, Declining, Intermittent, Variable and Lumpy
- the model converts demand behavior, available inventory, reorder point and months of supply into an action queue

Use `$43.7K` as the compact display value for suggested reorder value.

---

## Exact visual concept

Build a **planner decision preview**, not a dashboard screenshot.

### Layout

#### Top KPI row
Use four small KPI blocks:

1. `24`
   label: `SKUs`

2. `15`
   label: `Stockout risk`

3. `1`
   label: `Excess stock`

4. `$43.7K`
   label: `Suggested reorder`

The number should be stronger than the label.

#### Main visual: compact planner queue
Below the KPI row, show a clean three-row decision table or card-list.

Use these exact representative rows:

### Row 1
SKU:
`SKU-1001`

Short item:
`Resin Standard Grey`

Behavior:
`Stable`

Months of supply:
`0.4`

Action:
`Reorder 266`

### Row 2
SKU:
`SKU-1002`

Short item:
`Tough 2000`

Behavior:
`Growing`

Months of supply:
`0.9`

Action:
`Reorder 187`

### Row 3
SKU:
`SKU-1018`

Short item:
`Shipping Carton Large`

Behavior:
`Stable`

Months of supply:
`7.1`

Action:
`Excess review`

Suggested visible columns:
- SKU / item
- behavior
- MoS
- action

Do not show more than these three representative rows.

### Supporting cue
Add one subtle text line or miniature segmented strip indicating:

`15 Stockout risk · 8 Balanced · 1 Excess`

This is optional if the preview becomes crowded. The 3-row planner queue is more important.

---

## What the Inventory preview should communicate in under 2 seconds

The viewer should understand:

> This is not just a forecast. The model classifies SKU demand and turns it into replenishment actions.

Do not make the visual primarily about the 18-month demand table.

---

# Project 2 — Freight Spend & Vendor Cost Analysis

## Card copy outside the visual

Small label:
> Freight spend & vendor cost analysis

Headline:
> Turning freight spend into a review queue

Support line:
> $695K reviewed spend · 421 invoice lines · 60 review flags

---

## Workbook facts to use

Source workbook:
`Freight_Spend_Analysis_Portfolio.xlsx`

Supported facts:
- total reviewed spend: `$695,475`
- 421 invoice lines
- 2,025 shipments
- 11 vendors
- top 3 vendors represent `45.9%` of total spend
- top 5 vendors represent approximately `70.6%`
- FedEx is the largest vendor at approximately `$118,589`, or `17.1%`
- 60 invoice lines were flagged for review
- flagged spend is approximately `$137,615`
- July 2025 was the highest monthly spend at approximately `$78,603`

Use compact values:
- `$695K`
- `421`
- `2,025`
- `60`
- `$137.6K`

---

## Exact visual concept

Build a **vendor-spend + review-risk preview**.

### Top KPI row
Use four KPI blocks:

1. `$695K`
   label: `Reviewed spend`

2. `421`
   label: `Invoice lines`

3. `60`
   label: `Review flags`

4. `$137.6K`
   label: `Flagged spend`

#### Main visual: top vendor spend bars
Create a clean horizontal bar chart with the top five vendors.

Use these exact values:

- `FedEx` — `$118.6K` — `17.1%`
- `DHL Express` — `$103.3K` — `14.9%`
- `XPO Logistics` — `$97.4K` — `14.0%`
- `J.B. Hunt` — `$95.3K` — `13.7%`
- `UPS` — `$76.3K` — `11.0%`

Design rules:
- sort descending
- one muted accent family
- no rainbow bars
- use direct labels, not a legend
- keep axes/minor gridlines extremely subtle or omit them
- show spend value at the end of each bar
- percentages may appear in smaller secondary text

### Supporting callout
Add one compact callout:

> Top 3 vendors = 45.9% of spend

Optional second line if space permits:

> 60 invoice lines flagged for review

Do not add a second full chart.

---

## What the Freight preview should communicate in under 2 seconds

The viewer should understand:

> I consolidated freight spend, identified vendor concentration and created a focused review queue for anomalies.

The preview should not look like an AP invoice table.

---

# Project-card interaction

Keep the whole card clickable.

Do not add multiple competing CTAs inside the preview.

A single arrow at the end of the project headline is acceptable, but not required.

Hover:
- subtle border/accent change
- no exaggerated zoom
- no large animation

---

# Responsive behavior for the project previews

## Desktop
- two project cards side by side
- equal widths
- equal preview heights
- visuals should remain legible at half-page width

## Tablet
- cards may remain two columns only if all labels are still readable
- otherwise stack them

## Mobile
- stack cards vertically
- keep KPI row to 2 × 2 if needed
- preserve the top-five freight bars
- preserve all three inventory action rows
- no horizontal scrolling inside the preview
- no clipped labels

---

# Accuracy rules

Do not round in a misleading way.

Use:
- `$43.7K` from approximately `$43,684.50`
- `$695K` from `$695,475`
- `$137.6K` from approximately `$137,615`
- `$118.6K` from approximately `$118,589`
- `$103.3K` from approximately `$103,308`
- `$97.4K` from approximately `$97,353`
- `$95.3K` from approximately `$95,339`
- `$76.3K` from approximately `$76,320`

Do not claim that `$137.6K` is confirmed savings. It is **flagged spend for review**.

Do not label `$43.7K` as savings. It is a **suggested reorder value**.

---

# Pass 2 deliverable

Return:
1. the updated design/source
2. one full-page desktop render
3. one close-up render of each project card at readable scale

Do not perform the final PDF export yet.

After the two project visuals are approved, proceed to Pass 3.
