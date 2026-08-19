# Step 1 — Content Audit
Esmail Arshad Portfolio · build spec v7 (patched) · 2026-08-19

Sources read in full: `standardized.pdf`, `procurement.pdf`, `logistics.pdf`,
`js-bullet-bank.md`, `portfolio-facts.md`, both workbooks (all 22 sheets), all six screenshots.

---

## 1. Role / date / display-title inventory

| Company | §2 display title | Dates (all 3 résumés agree) | Location | Title appears in |
|---|---|---|---|---|
| Jannat & Sadaf | Operations Manager | Jan 2026 – Present | Lahore, PK | all three |
| Schneider Electric | Supply Chain Planning Intern | Feb 2025 – Dec 2025 | Foxboro, MA | standardized, logistics |
| Formlabs | Supply Chain Analyst Intern | Sep 2024 – Dec 2024 | Somerville, MA | **procurement only** |
| Tesla | Global Supply Chain Manager Intern | May 2024 – Aug 2024 | Palo Alto, CA | standardized, logistics |
| TLS Technology | Supply Chain Operations Manager | May 2023 – Nov 2023 | Lahore, PK | standardized, logistics |
| Amazon | Supply Chain Program Manager (Contract) | Nov 2021 – Nov 2022 | Bellevue, WA | all three |
| Cosmos Surfaces | Supply Chain Analyst | Jan 2020 – Nov 2021 | Kent, WA | standardized, logistics |

Every §2 display title is present in at least one résumé variant. None is invented.
**Confirm against LinkedIn before launch** — two worth checking:
- **Formlabs** — the display title comes only from `procurement.pdf`. The other two say
  "Supply Chain Planning Intern" (standardized) and "Supply Chain Planning Analyst Intern" (logistics).
- **Tesla** — `procurement.pdf` says "Procurement Supply Manager Intern"; the display title
  follows standardized + logistics.

Dates are identical across all three variants. No date conflicts.

---

## 2. Verified achievement inventory (attributed to source)

**Jannat & Sadaf** — S = standardized, P = procurement, L = logistics, B = bullet bank
- 98.6% on-time delivery via scheduling by due date / lead time / capacity, prioritizing long-lead wedding wear — S, P, L, B
- Fabric supplier base 4 → 12; cost-led for Pret, quality-led for Formal & Wedding; 25% fabric cost reduction; rework under 5% of order value — S, P, L, B
- Purchase-to-order cost tracking linking material purchases to orders/SKUs; 93.5% spend traceability — S, P, L, B
- 16x revenue growth over seven months while sustaining 98.6% OTD — **B only** (Swap B). §14: use as *context*, never as a delivered outcome
- PKR 3.0M growth plan with performance-based investment gates — B (Swap A). **Excluded** per §14 (no absolute PKR figures)
- Instagram reach +36%, non-follower share 24% → 31% — B (Swap C). Out of positioning scope; recommend omit
- Shopify funnel analysis (65% checkout drop-off) — B explicitly excludes it. Omit

**Schneider Electric**
- S&OE/S&OP forecasts in Baxter, MTS from historical trend / MTO from customer orders; forecast accuracy +20% — S, P
- Directed FedEx/UPS/warehouse teams on shortages, backorders, holds, EDI in Oracle and SAP ECC; on-time pickups +30% — S, P, L
- Reverse logistics and RMA for data-centre infrastructure: supplier repairs, returns, shipping docs, critical spares; repair lead time −15% — **L only**

**Formlabs** — three separate workstreams (§11)
- (a) SQL/BigQuery shortage & exception reporting across 300+ SLA/SLS components — inventory coverage, open POs, delivery exceptions, supplier escalation; late orders −20%, OTIF +6% — S, P, L
- (b) ABC analysis in Netstock across 1,200 SKUs; slow-moving/excess/at-risk segmentation and disposition; $50K carrying-cost saving — S, L
- (c) NetSuite spend & COGS reporting for SLS powders, consolidating BOM costs; 80% of manual reporting eliminated — **P only**

**Tesla** — distinct workstreams (§11)
- (a) Should-costing on TLA equipment benchmarking machining, material and labour inputs to challenge supplier quotes, surface hidden charges and identify negotiation levers; **$150K procurement savings** — S, P
- (b) Sourcing strategy and negotiation with contract manufacturers / Tier 1 & Tier 2 for NPI tooling — supplier capacity, DFM, line utilization, commercial terms; **3% Capex reduction** — P, L
- (c) Standardized Capex reporting template (spend, asset performance, amortization); visibility into $100M+ of investments — S, P, L

**TLS Technology**
- Led global operations team of 10; SOP redesign from order/logistics/sales-cycle analysis; delivery timelines −18% — S, P, L
- EMEA (and APAC, per S) expansion; onboarded 5 Importer-of-Record vendors per quarter with customs brokers and freight forwarders; market share +12% — S, P, L

**Amazon** — two workstreams, no causal link (§11, §14)
- (a) Root-cause analysis on ~100K weekly shipments in Tableau and Excel — carrier performance, shipment/service exceptions, SLA adherence; sustained 98% on-time delivery — S, P, L
- (b) Dynamic pricing-rule adjustments across Amazon Freight using mileage, lead time, dwell time and lane-level demand to improve carrier capacity alignment / conversion; **8% network cost reduction** — S, P, L

**Cosmos Surfaces**
- WMS ↔ SAP integration for real-time inventory accuracy → 95% fulfillment rate — S, L (P frames it as SAP WMS cycle counts)
- Dock utilization with 3PL partnerships; truck turnaround −50% on outbound — S, P, L (identical wording)

---

## 3. Metric classification (§16)

**Outcome** — 98.6% OTD · 25% fabric cost reduction · rework <5% of order value · 93.5% spend
traceability · +20% forecast accuracy · +30% on-time pickups · −15% repair lead time ·
−20% late orders · +6% OTIF · $50K carrying-cost saving · 80% manual reporting eliminated ·
$150K procurement savings · 3% Capex reduction · −18% delivery timelines · +12% market share ·
8% network cost reduction · 98% OTD (Amazon) · 95% fulfillment rate · −50% truck turnaround

**Scope** — 300+ SLA/SLS components · 1,200 SKUs · ~100K weekly shipments · $100M+ investment
visibility · team of 10 · 5 IOR vendors per quarter · supplier base 4 → 12 · 16x revenue growth
(context only) · 421 invoice lines · 11 vendors · 12 months · $695,475 reviewed spend ·
24 SKUs · 18 months of history

**Finding** (client projects only — never rendered as realized savings) — 60 review items ·
$137,615 flagged for review · $3,743 possible duplicate invoices · 19 missing PO numbers ·
$59,941 high-cost outliers · top-3 vendor share 45.9% · 15 stockout-risk SKUs · 1 excess-stock SKU ·
8 balanced · $43,685 suggested reorder value · $78,354 current inventory value

---

## 4. Systems and tools evidence

Every system in §9 is résumé-confirmed:

| System | Evidence |
|---|---|
| SAP / SAP ECC | Schneider (S, P, L), Cosmos (S, P) |
| Oracle | Schneider (S, P, L) |
| NetSuite | Formlabs (P); skills line (S, P, L) |
| Netstock | Formlabs ABC (S, L); skills line (S, P, L) |
| Baxter | Schneider forecasting (S, P); skills line (S, P, L) |
| WMS | Cosmos (S, L); skills line (S, L) |
| TMS | skills line (S, L) |
| Advanced Excel | Amazon, Schneider; skills line (all) |
| SQL / BigQuery | Formlabs (S, P, L) |
| Tableau | Amazon (S, P, L) |
| Power BI | skills line (S, P) |

`portfolio-facts.md` supplies no additional systems, so §9 stands as written. **Nothing added.**

---

## 5. Primary workstream candidates — and what must NOT be merged

| Employer | Primary story | Kept separate |
|---|---|---|
| Jannat & Sadaf | Building a made-to-order operating system: scheduling → sourcing → cost traceability | Permitted to combine per §11, but **16x growth is context, not an outcome**, and no causal link asserted between the three metrics |
| Amazon | Freight pricing and middle-mile network economics → 8% | **Carrier-performance / 98% OTD analysis is a separate workstream.** Do not claim it caused the pricing result |
| Tesla | Should-cost analysis for NPI tooling → $150K | **3% Capex** (sourcing strategy) and **$100M+ Capex reporting** are separate — adjacent role context only |
| Formlabs | Component supply-risk visibility from operational data → −20% late orders / +6% OTIF | **ABC/Netstock 1,200 SKUs / $50K** and **NetSuite COGS / 80%** are separate workstreams. Not folded in |
| Schneider | *No case study* — Experience only. Best single achievement: reverse-logistics/RMA, −15% repair lead time (§18) | — |
| TLS | *No case study.* Best single achievement: team of 10 + EMEA expansion (§18) | — |
| Cosmos | *No case study.* Recommend the dock/3PL turnaround bullet — identical in all three variants | — |

---

## 6. Proposed employer case studies (problem-led titles, varied construction §13)

1. **Jannat & Sadaf** — *Holding delivery promises while the order book multiplied*
   (~450 words · outcome 98.6% OTD)
2. **Amazon** — *Pricing freight lanes against how carriers actually behave*
   (~450 words · outcome 8% network cost reduction)
3. **Tesla** — *What a tooling quote should have cost*
   (~325 words · outcome $150K procurement savings)
4. **Formlabs** — *Finding the shortages before they became late orders*
   (~325 words · outcome −20% late orders / +6% OTIF)

Four different grammatical shapes: gerund clause · gerund + subordinate clause · noun clause ·
gerund + temporal clause. Alternatives welcome.

---

## 7. Client-project figures — verified against the workbooks

### Freight Spend & Vendor Cost Review — every §15 figure confirmed ✅

| Claim | Workbook | Status |
|---|---|---|
| 421 invoice lines | `Cleaned_Data` = 421 data rows; Dashboard "Invoices 421" | ✅ |
| 11 vendors | Dashboard "Vendors 11" (10 standardized + 1 "Needs Review") | ✅ |
| 12 months | Jan 2025 – Dec 2025 | ✅ |
| $695,475 reviewed spend | $695,475.29 | ✅ |
| 60 review items | `Anomaly_Flag` = Review ×60 | ✅ |
| $137,615 flagged | $137,615.04 | ✅ |
| $3,743 possible duplicates | $3,743.26 (4 invoices) | ✅ |
| 19 missing PO numbers | `Missing_PO_Flag` = Yes ×19 | ✅ |
| Top-3 vendor share 45.9% | 45.90% | ✅ |
| Four anomaly flags | 4 flag columns: Duplicate, Missing PO, Currency Review, High Cost | ✅ |

Additional verified detail available: top-5 share 70.6% · 29 non-USD invoices normalized ·
$59,941 high-cost outliers · Linehaul Freight 79.7% of spend · peak month Jul 2025 at $78,603 ·
2,025 shipments · avg cost/shipment $343.

⚠️ Two presentation notes:
- The Dashboard's **"Shipments 2025"** cell reads as a year at a glance. If used on the site,
  write it as **2,025 shipments**.
- The Dashboard's Anomaly Review Summary lists **six** review types — the four flag columns plus
  *credits/negative charges* (1) and *missing vendor name* (1). §15's "four anomaly flags" is
  correct about the flag *columns*; I'll describe the review categories accurately rather than
  forcing the number four.

### Inventory Forecasting & Reorder Planning — one figure does not verify ❌

| Claim | Workbook | Status |
|---|---|---|
| 24 SKUs | `SKU_Master` = 24 rows; Dashboard "Total SKUs 24" | ✅ |
| **500 demand records** | **`Raw_Data` = 432 records.** 500 is the sheet's formatted `max_row` | ❌ **see below** |
| 18 months (Jan 2024 – Jun 2025) | 18 monthly buckets on Dashboard | ✅ |
| 15 stockout-risk SKUs | `Risk_Status` = Stockout Risk ×15 | ✅ |
| 1 excess-stock SKU | ×1 | ✅ |
| 8 balanced | ×8 (15+1+8 = 24) | ✅ |
| $43,685 suggested reorder value | Dashboard $43,684.50 | ✅ (row sum is $43,679.50 — a $5 rounding difference inside the workbook; the Dashboard KPI is the published figure) |
| $78,354 current inventory value | $78,354 | ✅ |
| Z-score safety stock, lead-time-scaled | `Assumptions`: Z = 1.65, SS = Z × σ_monthly / √30 × √(lead-time days) | ✅ |
| Reorder point = lead-time demand + safety stock | `Assumptions` | ✅ |
| Method chosen by demand behaviour | Stable/Variable → 6-mo MA; Growing → 3-mo MA; Lumpy/Intermittent → median | ✅ |
| ABC classification | A 14 · B 7 · C 3 | ✅ |
| Demand behaviour typing | Stable 11 · Intermittent 4 · Growing 3 · Variable 3 · Lumpy 2 · Declining 1 | ✅ |

❌ **"500 demand records" is wrong — it is 432.** This is the same class of error §15 already caught
with "100 SKUs" (100 is `SKU_Master`'s formatted row count; 500 is `Raw_Data`'s). Actual composition:
23 SKUs × 18 months + 1 SKU × 17 months + 1 stray lowercase `sku-1014` row = **432 records**.
I will not publish 500. **Recommend "432 demand records."**

❌ **MTO wording needs correction.** §15 says "MTO items excluded from automated reorder pending
planner validation." The workbook's `Assumptions` sheet says the opposite in mechanism: *"MTO SKUs
are still shown in the model, but final reorder action should be validated with the planner before
purchase."* 4 of 24 SKUs are MTO. **Recommend: "MTO items are modelled but held back from automated
reorder until a planner validates them."**

**Bonus evidence worth using** — `Inventory_Risk_Review` carries two rows beyond the 16 risk flags:
a *Data Quality* flag (raw demand contained a lowercase/trailing-space SKU variant — I confirmed
`sku-1014` in `Raw_Data`) and a *Past Due PO* flag. These are strong, verifiable proof of real
data-cleaning discipline.

---

## 8. Material source conflicts (§1)

**None found.** Every difference across the three résumés is omission or re-framing of the same
work for a different audience — explicitly *not* a conflict under §1. Recorded for transparency:

| Item | Variation | Assessment |
|---|---|---|
| Amazon shipment volume | "100K" (S) vs "100K+" (P, L) | §1: explicitly not a conflict. Use "~100K weekly" |
| Tesla 3% Capex | Attributed to contract-manufacturer sourcing (P) vs Tier 1/Tier 2 sourcing + PO tracking (L) | Same initiative, two lenses. Same value. Adjacent context only per §14 |
| Formlabs 300+ components | "shortage and exception" (S) / "procurement" (P) / "inbound material" (L) reports | One workstream, three framings. Identical results (−20%, +6%) |
| Cosmos 95% fulfillment | "Integrated WMS with SAP ECC" (S) / "SAP ERP" (L) / "cycle counts using SAP WMS" (P) | Compatible framings of SAP+WMS work. **Recommend using the dock/3PL bullet instead** — it is word-identical in all three and sidesteps the question |
| TLS expansion | "EMEA and APAC" (S) vs "EMEA" (P, L) | Omission, not conflict. §18 names EMEA — use EMEA |
| Schneider RMA work | Present only in `logistics.pdf` | Omission. §17: a claim in one tailored variant is not weak unless contradicted. Use it |

---

## 9. Disclosure and rights risks

1. **Client-project screenshots name real carriers** — FedEx, UPS, DHL, XPO, J.B. Hunt, Maersk,
   C.H. Robinson, Kuehne+Nagel, Ryder, BlueGrace — alongside invoice numbers, shipment IDs and PO
   numbers. This is sanitized recreation data with one supplier already neutralized to "Needs Review"
   (§0.1), and `rightsStatus: sanitized-recreation` permits screenshots. The *client* is never named.
   Flagging it so you sign off explicitly: **these are carrier names in synthetic data, not the
   client's identity.** My reading is that this is fine and it is strong evidence — confirm.
2. **No downloads anywhere.** No download links, no file-size labels, no workbook in `public/`
   for either project. Workbooks stay in `content/artifacts/` (git-tracked, never served).
3. **Private résumés protected.** `procurement.pdf` and `logistics.pdf` are gitignored and will
   never be copied to `public/` or linked. Only `standardized.pdf` is published, as
   `public/esmail-arshad-resume.pdf`.
4. **No employer visuals.** The four employer case studies carry no screenshots and no fabricated
   reproductions — typographic metric treatments only (§23).
5. **PKR excluded.** The PKR 3.0M capital-plan bullet is dropped entirely.
6. **Your public résumé contains a phone number.** The site will carry none (§21), but the PDF
   served at `/esmail-arshad-resume.pdf` displays `0092-301-8666700`. Intentional? Easy to leave
   as-is; just making sure it is a choice.

---

## 10. Questions I need answered

### A. Blocking — `portfolio-facts.md` is missing fields §0.2a requires

1. **Lean Six Sigma Green Belt.** §20 requires it on the site, but it appears in **none** of the
   three résumés, and `portfolio-facts.md` has no `## Certification` section. Do you hold it, and
   who issued it? (If no issuer, it renders without one; if you do not hold it, §20 comes out.)
2. **Headshot.** `headshot.jpeg` was supplied and is a usable professional portrait, but
   `portfolio-facts.md` has no `## Optional / Headshot supplied` line. Use it in About — yes or no?

Not blocking, resolved from the spec itself, but noting how I read them:
- **Client Project Rights** — absent from your facts file; taken from §0.3, which the patch says is
  a record of a decision already made. `sanitized-recreation`, show workbook and screenshots, no downloads.
- **Systems** — absent; §9 stands on résumé evidence alone, nothing added.
- **GitHub** — your facts file lists a profile URL but `Portfolio repository: NONE`. Per patched
  §0.2 and §25a, **GitHub is omitted from Contact** for now and tracked as a Step 4 follow-up.
  `gh` is not installed here, so I will not attempt to create the repo (§25a step 3 confirmed).

### B. Case-study substance — these become the TODOs if unanswered

**Jannat & Sadaf**
3. Before the scheduling redesign, what was actually going wrong — late wedding orders, capacity
   collisions, or something else? What did a missed date cost you commercially?
4. The trade-off: prioritizing long-lead wedding wear must have pushed something else back. What
   gave way, and how did you decide that was acceptable?
5. Why cost-led sourcing for Pret but quality-led for Formal and Wedding — what was rework running
   at before it came under 5% of order value?

**Amazon**
6. What triggered the pricing-rule work — a margin problem, a capacity problem, or a specific
   lane-level failure?
7. The trade-off between carrier conversion and freight cost: where did you set it, and what were
   you willing to give up?
8. Over what period was the 8% measured, and against what baseline?

**Tesla**
9. What prompted the should-cost exercise — a quote that looked wrong, or standard practice for
   NPI tooling?
10. What kind of "hidden charges" did the model surface, at the category level? (No supplier names,
    no contract terms.)
11. The negotiation trade-off — price against tooling lead time, capacity, or quality?
12. Is $150K a single-program figure or annualized?

**Formlabs**
13. What did shortage visibility look like before the SQL/BigQuery reports — how were shortages
    being caught?
14. What decision did the reports actually drive: expedite, re-plan, or escalate to the supplier?
15. Over what window were −20% late orders and +6% OTIF measured?

**Client projects**
16. Confirm **432 demand records** (not 500) for the inventory project — see §7.
17. Confirm the corrected **MTO wording** — see §7.

Questions 3–15 are exactly the material §12's *Problem* and *Decision / trade-off* sections need.
Unanswered, those four pages ship as `draft: true` / `published: false` with specific TODOs, and
the two client-project pages — which are fully verified — publish immediately.

---

## Pre-flight status (§0.1)

All REQUIRED inputs present and organized. `project-briefs.md` (optional) was not supplied.

```
content/source/resumes/standardized.pdf          ✅
content/source/resumes/procurement.pdf           ✅  (gitignored, private)
content/source/resumes/logistics.pdf             ✅  (gitignored, private)
content/source/js-bullet-bank.md                 ✅  converted from JS_Resume_Bullet_Bank.docx
content/source/portfolio-facts.md                ✅  incomplete — see §10.A
content/source/project-briefs.md                 —   optional, not supplied
content/artifacts/Freight_Spend_Analysis_Portfolio.xlsx     ✅  unmodified
content/artifacts/Inventory_Planning_Model_Portfolio.xlsx   ✅  unmodified
content/images/freight-dashboard.png             ✅
content/images/freight-anomaly-review.png        ✅  bonus — §15 wants 2–3 images/project
content/images/freight-vendor-mapping.png        ✅  bonus
content/images/inventory-dashboard.png           ✅
content/images/inventory-forecast-model.png      ✅  bonus
content/images/inventory-risk-review.png         ✅  bonus
content/images/headshot.jpeg                     ✅  supplied but undeclared — see §10.A.2
public/esmail-arshad-resume.pdf                  ✅  copy of standardized.pdf
```

All six supplied screenshots correspond exactly to the sheets §15 names. Nothing generated,
nothing mocked, nothing sourced outside `content/images/`.

**Stopping here per §27 Step 2. No scaffolding, no schema, no case-study prose written.**
