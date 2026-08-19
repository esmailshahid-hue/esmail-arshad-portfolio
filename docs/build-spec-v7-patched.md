# Claude Code Build Prompt — Esmail Arshad Portfolio v7

**This is the only build document. It supersedes v1–v6 and all addenda.**

Build a production-ready static professional portfolio. Read this entire brief before writing content or code. Do not assert professional facts the sources do not support.

---

# 0. Pre-flight

Complete this before reading source material or writing code. Report results, then proceed.

## 0.1 Verify inputs

```text
content/source/resumes/standardized.pdf     REQUIRED — public résumé
content/source/resumes/procurement.pdf      REQUIRED — private source
content/source/resumes/logistics.pdf        REQUIRED — private source
content/source/js-bullet-bank.md            REQUIRED — private source
content/source/portfolio-facts.md           REQUIRED — contact, deployment, mobility,
                                              and client-project rights record (template below)
content/source/project-briefs.md            optional
content/artifacts/Freight_Spend_Analysis_Portfolio.xlsx      REQUIRED
content/artifacts/Inventory_Planning_Model_Portfolio.xlsx    REQUIRED
content/images/freight-dashboard.png        REQUIRED
content/images/inventory-dashboard.png      REQUIRED
public/esmail-arshad-resume.pdf             REQUIRED — copy of standardized.pdf
```

If a REQUIRED item is missing, stop and ask. Never substitute or reconstruct.

The two workbooks are **already sanitized**: document metadata cleared, external links removed, one supplier name neutralized, charts corrected. Do not modify them. They are private analysis sources — **never copy them into `public/`**.

## 0.2 Confirmed details

All contact, deployment, mobility and rights facts live in `content/source/portfolio-facts.md` — read it as part of §0.1, not as a separate chat input. Do not extract contact details from résumé PDFs. If `portfolio-facts.md` is missing any required field, stop and ask for that field specifically rather than inventing it.

If GitHub is `NONE` or the linked repo doesn't exist yet, omit GitHub from Contact for now — see §25a. If Headshot is `NONE`, build About without an image slot rather than leaving a gap.

## 0.2a portfolio-facts.md — required structure

Esmail supplies this file in the following shape. Client Project Rights are a **record of the decision already made in §15** — do not treat them as open fields to resolve differently.

```markdown
# Public Portfolio Facts

## Contact
Email: esmailshahid@gmail.com
LinkedIn: https://www.linkedin.com/in/esmailarshad/
GitHub: https://github.com/esmailshahid-hue  (repo not yet created — see §25a)

## Deployment
Custom domain: NONE
Use Vercel default URL until a custom domain exists: YES

## Mobility
Based in: Lahore, Pakistan
Priority relocation markets: UAE, Saudi Arabia
Open to broader international relocation: YES
Open to remote: YES

## Client Project Rights (locked — see §15, do not reopen)
### Freight Spend & Vendor Cost Review
rightsStatus: sanitized-recreation
Sanitized workbook may be shown: YES
Screenshot may be shown: YES
Downloads may be offered: NO

### Inventory Forecasting & Reorder Planning
rightsStatus: sanitized-recreation
Sanitized workbook may be shown: YES
Screenshot may be shown: YES
Downloads may be offered: NO

## Certification
Lean Six Sigma Green Belt — issuer: [FILL, or "not specified"]

## Systems
[Any confirmed system not already listed in §9, or "none beyond résumé-confirmed systems"]

## Optional
Headshot supplied: YES/NO
Headshot path: content/images/headshot.jpg  (omit line if NONE)
```

## 0.3 Client project rights — locked

```text
Both projects:
  rightsStatus:                     sanitized-recreation
  Sanitized workbook may be shown:  YES  (screenshots and excerpts)
  Screenshot may be shown:          YES
  Downloads may be offered:         NO
```

Do not build download links, file-size labels, or download UI for either project. The underlying datasets were client-supplied test data, so confidentiality risk is low, but the deliverable is work-for-hire and remains the client's property.

## 0.4 Definition of done

Report each explicitly:

1. `npm run build` completes with zero errors
2. `npm run preview` serves the site; every homepage anchor resolves
3. `grep -ri "TODO" dist/` returns nothing
4. Every internal link and route resolves; no 404s
5. Every `published: true` page passed the §14 publication gate
6. No image on the site was generated, mocked, or sourced outside `content/images/`
7. Renders correctly at 1440px, laptop, tablet, mobile
8. Fully usable with JavaScript disabled

---

# 1. Sources

Use **all three résumés collectively** as fact sources. They are tailored presentations of one career, not competing employment records.

- **standardized.pdf** — canonical, and the only résumé published
- **procurement.pdf** — private. Contains Tesla sourcing strategy and negotiation with contract manufacturers, DFM, line utilization, Tier 1/Tier 2 supplier management, 3% Capex reduction; Formlabs NetSuite spend and COGS work (80% of manual reporting eliminated)
- **logistics.pdf** — private. Contains Schneider reverse-logistics and RMA workflows (15% repair lead-time reduction); Formlabs inbound-material and open-PO framing

The case studies should be **deeper than the downloadable résumé**. Where a role is richer in a private variant, use that evidence.

**js-bullet-bank.md** is a private source for Jannat & Sadaf context — see §15.

**portfolio-facts.md** may contain user-confirmed facts absent from résumés: verified systems, certification issuer, mobility wording, public URLs, disclosure decisions. Do not reject a confirmed fact merely because a résumé omits it.

For client projects, the **workbooks are the source of truth**. Inspect sheets, formulas, assumptions and outputs before writing any claim.

## Differences vs conflicts

An omission is **not** a conflict. Different wording for the same work is **not** a conflict. "100K" vs "100K+" is **not** a conflict.

A material conflict is: different numerical values for the same result · materially different geography · incompatible scope · contradictory attribution.

On a material conflict: flag the specific claim, omit it from public content, continue building everything unaffected. Do not halt the build.

---

# 2. Display titles

Use exactly these. They are drawn from existing résumé variants; none is invented.

- **Jannat & Sadaf** — Operations Manager
- **Schneider Electric** — Supply Chain Planning Intern
- **Formlabs** — Supply Chain Analyst Intern
- **Tesla** — Global Supply Chain Manager Intern
- **TLS Technology** — Supply Chain Operations Manager
- **Amazon** — Supply Chain Program Manager (Contract)
- **Cosmos Surfaces** — Supply Chain Analyst

Do not vary these by target role. Do not invent a more senior title. Report them in the content audit so Esmail can confirm they match his LinkedIn before launch.

Functional specificity belongs in the scope line, capability tags, case-study title and body — not in the employment title. Example:

> **Tesla** · Global Supply Chain Manager Intern
> *NPI sourcing, supplier costing and CapEx analysis*

---

# 3. Objective

Not an online résumé. Not a developer portfolio.

**Positioning:** Supply Chain, Operations & Analytics
**Proposition:** I improve how products are planned, sourced, moved and measured.

Target roles: Supply Chain Planning · Procurement / Strategic Sourcing · Logistics / Operations · Supply Chain Program Management · Operations Analytics.

Within roughly a minute a visitor should know: what kind of operator this is · what problems he has worked on · at what scale · what decisions he made · what evidence supports it · where actual analytical work can be inspected.

Show what a résumé cannot: operating context, problem definition, decision logic, trade-offs, method, scope, evidence, assumptions and limitations. **Do not rewrite résumé bullets into paragraphs.**

---

# 4. Architecture

Homepage plus work pages at `/work/[slug]`.

Homepage: Hero → Company strip → Proof line → Capabilities + Systems → Selected Work → Experience → About → Education & Certification → Contact.

No blog. No Perspective section.

---

# 5. Hero

**Esmail Arshad**
**Supply Chain, Operations & Analytics**
**I improve how products are planned, sourced, moved and measured.**

Supporting line: *Industrial engineer and Purdue Engineering Management graduate working across planning, sourcing, logistics, operations and analytics.*

Mobility: **Based in Lahore, Pakistan · Open to international relocation, with the UAE and Saudi Arabia as priority markets · Open to remote roles**

Do not repeat employer names here — the company strip sits immediately below. Make no global work-authorization claim.

CTAs: **Selected Work** · **Résumé**. Text links: **LinkedIn · Email**. No dominant hero portrait.

---

# 6. Company strip

**Tesla · Amazon · Schneider Electric · Formlabs · Jannat & Sadaf**

Typographic by default. Local logo files only if supplied. Never hotlink logos. TLS and Cosmos appear in Experience only.

---

# 7. Proof line

Three outcome teasers:

**$150K** — procurement savings — Tesla
**8%** — freight network cost reduction — Amazon
**98.6%** — on-time delivery — Jannat & Sadaf

Never substitute scope metrics here.

---

# 8. Capabilities

**Planning & Inventory** — S&OP / S&OE · Demand Forecasting · Supply Planning · Inventory Planning · Replenishment · ABC Analysis

**Procurement & Sourcing** — Strategic Sourcing · Supplier Evaluation · Supplier Negotiation · Should-Cost Analysis · PO Management · Cost Analysis

**Logistics & Operations** — Freight / Carrier Operations · Inbound Logistics · Reverse Logistics / RMA · 3PL Management · Import / Export · Fulfillment

**Analytics & Program Management** — Advanced Excel · SQL / BigQuery · Tableau / Power BI · KPI Reporting · Root-Cause Analysis · Process Optimization · Cross-Functional Execution

Connect capabilities to supporting work via tags or links. No proficiency bars or ratings. No decorative icons.

---

# 9. Systems

Compact grouped block. Not a logo cloud, no proficiency levels.

**Enterprise & Planning:** SAP (incl. SAP ECC) · Oracle · NetSuite · Netstock · Baxter · WMS · TMS
**Analytics:** Advanced Excel · SQL / BigQuery · Tableau · Power BI

Verified against the résumés. Do not add systems unless confirmed in `portfolio-facts.md`.

---

# 10. Selected Work

One section, two visually distinct groups.

**Operating Case Studies (4):** Jannat & Sadaf · Amazon · Tesla · Formlabs
**Client Analytics Projects (2):** Freight Spend & Vendor Cost Review · Inventory Forecasting & Reorder Planning

The two groups do different jobs, and both are necessary:

> **Operating case studies prove business impact and judgment. They carry no screenshots — employer data cannot be shown.**
> **Client projects prove analytical method. They carry the artifacts.**

Shared content model:

```ts
type: "operating-case-study" | "client-project" | "tool"
```

Future analytics tools enter as `tool` without a new homepage section.

A card must communicate without a click: problem · organization or project type · capability tags · one outcome or scope signal · link.

Schneider, TLS and Cosmos appear in Experience only.

---

# 11. Case-study coherence — critical

**Never merge multiple résumé bullets into one project narrative unless the sources confirm they were the same initiative.** Employment roles contain several separate workstreams.

- **Tesla** — should-costing, broader sourcing/CapEx work, and investment reporting are distinct. Do not imply the $150K should-cost work caused the separate 3% CapEx result.
- **Formlabs** — SQL/BigQuery shortage reporting (300+ components), ABC analysis in Netstock (1,200 SKUs), and NetSuite COGS automation are three distinct workstreams. Do not narrate them as one sequential transformation.
- **Amazon** — carrier-performance analysis and freight-pricing rules may be related, but do not claim one caused the other.
- **Jannat & Sadaf** — scheduling, sourcing and spend traceability may combine into one operating-system narrative because they sit inside the current role, but causal links between individual metrics still need support.

For each case study: **one primary problem → one coherent method → one principal result.** Adjacent work may be omitted or placed in a short *Related work* block.

---

# 12. Case-study structure

**Snapshot** — organization · display title · timeframe · functional focus · capabilities · systems relevant to this case · principal outcome

**Context** — the operation and its scale. Scope metrics belong here.

**Problem** — the operating problem or decision, and why it mattered. Do not invent a financial consequence.

**Decision / trade-off** — the judgment involved. This most separates a case study from a résumé bullet. Shapes: cost vs. quality · service level vs. capacity · supplier quote vs. should-cost benchmark · availability vs. inventory exposure · carrier conversion vs. freight cost. Where unsupported, use a TODO — never generic consulting prose.

**What I did** — 3–5 method-level steps. Analysis, decision criteria, process design, coordination, systems. Not responsibilities.

**Result** — one principal result. Supporting metrics only from the same workstream. Attribution stated honestly.

**Reflection** — optional. Only where a real lesson exists.

No section exists merely because the template contains it.

---

# 13. Drafting and publication

Draft narrative wherever sources genuinely support it — summarizing a sourced bullet is not invention. For unsupported detail insert:

`TODO — Esmail to supply: [specific question]`

Ask precise questions, not generic placeholders.

All incomplete employer case studies: `draft: true`, `published: false`.

**Publication gate.** A page cannot be `published: true` while it contains unresolved factual TODOs affecting the narrative · material source conflicts · unsupported attribution · unresolved confidentiality concerns · unresolved artifact rights. **TODO markers must never reach the public site.**

**Length.** No minimum. Loose upper guidance: J&S and Amazon ~450 words; Tesla and Formlabs ~325. Use the shortest length that communicates the reasoning. **Do not equalize lengths.**

**Titles.** Problem-led, never the employer name. Examples only — propose better if you can:

- J&S — *Building a more reliable made-to-order operation*
- Amazon — *Pricing freight lanes against carrier behaviour*
- Tesla — *Testing tooling quotes against a should-cost model*
- Formlabs — *Turning fragmented inventory data into supply-risk signals*

**Vary the construction.** Four titles with identical rhythm, length and grammatical shape is a generated-content tell.

---

# 14. Employer case-study direction

## Jannat & Sadaf

**Primary story:** building a more reliable made-to-order operating system.

Evidence: scheduling by due date, lead time and capacity (98.6% OTD) · supplier base 4 → 12 with cost-led sourcing for Pret and quality-led for Formal and Wedding (25% fabric cost reduction, rework under 5% of order value) · purchase-to-order cost tracking (93.5% spend traceability).

**Context from `js-bullet-bank.md`:** this operating system was built during **16x revenue growth over seven months**. Use growth as *context*, 98.6% OTD as the *outcome*. Holding on-time delivery through that rate of growth is materially stronger than the OTD figure alone. **Do not present growth as an outcome Esmail delivered.**

Do not use the PKR 3.0M capital-plan bullet — absolute PKR figures are excluded from this site.

Principal outcome: **98.6% on-time delivery.** Lead with operating decisions, not a list of statistics.

## Amazon

**Primary story:** freight pricing and middle-mile network economics.

Scope: ~100K weekly shipments. Method: carrier performance, shipment and service exceptions, Tableau and Excel, lane-level demand, mileage, dwell time, lead time, pricing rule adjustments.

Principal outcome: **8% freight network cost reduction.** Do not state that service-performance analysis caused the pricing result. Amazon Freight is a public program name and may be used.

## Tesla

**Primary story:** should-cost analysis for NPI tooling.

Method: machining, material and labour inputs · supplier quote assessment · negotiation levers · sourcing context. The procurement résumé is richest here.

Principal outcome: **$150K procurement savings.** Broader sourcing, 3% CapEx reduction and $100M+ investment visibility may appear only as adjacent role context. No supplier names, no contract terms.

## Formlabs

**Primary story:** using operational data to surface component supply risk.

Scope: 300+ SLA/SLS components. Method: inventory coverage, open POs, shortage and exception reporting in SQL/BigQuery, supplier escalation.

Principal outcome: choose one — 20% reduction in late orders, or 6% OTIF improvement. ABC analysis across 1,200 SKUs and NetSuite COGS automation are **separate workstreams** and must not be folded into this case.

---

# 15. Client projects

Public label: **Anonymized Client Project.** It is accurate to state the work was delivered for a real client. Never identify the client, the platform, the fee, or commercial terms. **Do not call paid client work an "independent build."**

Verify every figure against the workbook before publishing it.

## Freight Spend & Vendor Cost Review

Scope: **421 invoice lines · 11 vendors · 12 months · $695,475 reviewed spend.**

Method: vendor-name standardization from raw variants · cost-category normalization · FX normalization to USD · unit economics at cost per shipment, per kg and per mile · Pareto concentration · four anomaly flags (possible duplicate, missing PO, currency review, high-cost outlier) · per-row review comment and recommended action · original raw data preserved as audit trail.

Findings: 60 review items · $137,615 flagged for review · $3,743 possible duplicate invoices · 19 missing PO numbers · top 3 vendor share 45.9%.

**Critical judgment, must remain prominent:** flagged spend is spend *requiring review*, not recoverable savings, until validated against AP records and vendor statements.

Capabilities: Logistics & Operations · Analytics & Program Management.

## Inventory Forecasting & Reorder Planning

Scope: **24 SKUs · 500 demand records · 18 months of history (Jan 2024 – Jun 2025).**

*(Note: earlier drafts said 100 SKUs. That was wrong — 100 is a row count. Use 24.)*

Method: demand classified as stable, growing, declining, intermittent, variable or lumpy · forecast method selected per behaviour · safety stock from service-level Z-score and lead-time-scaled variability · reorder point as lead-time demand plus safety stock · ABC classification · risk typing with a stated reason per SKU · documented assumptions · MTO items excluded from automated reorder pending planner validation.

Findings: 15 stockout-risk SKUs · 1 excess-stock SKU · 8 balanced · $43,685 suggested reorder value · $78,354 current inventory value.

**Critical judgment:** forecast method is chosen by demand behaviour rather than applied uniformly to every SKU.

Capabilities: Planning & Inventory · Analytics & Program Management.

## Presentation

Each project page: problem · scope · method · the analytical judgment · tools · findings · assumptions and limitations.

**Show 2–3 images per project, not one** — the dashboard plus one or two excerpts of underlying working sheets. The working sheets prove the model is real.

- Freight: Dashboard · Anomaly_Review · Vendor_Mapping
- Inventory: Dashboard · Forecast_Model · Inventory_Risk_Review

**No downloads.** Build no download links or file-size labels. **Never fabricate a screenshot.** For future public tools, support GitHub and live-demo links.

---

# 16. Metrics

Classify internally and treat visually as distinct:

- **Outcome** — something the work changed
- **Scope** — size of the environment or analysis
- **Finding** — something an analysis identified. **Never presented as realized savings.**

Rules: preserve approved source values · give enough context to interpret the metric · distinguish scope from outcome visually · do not manufacture precision · sourced round figures are fine · no absolute PKR business figures.

Homepage proof teasers may intentionally repeat their case-study outcomes. Avoid unnecessary repetition elsewhere, but impose no artificial once-only rule.

---

# 17. Internal evidence trail

For significant claims, keep private provenance metadata that is **not rendered publicly**:

```ts
evidence: [
  { claim: "$150K procurement savings", source: "procurement résumé — Tesla bullet 2" }
]
```

Purpose: prevent unsupported claims creeping in during later edits, and separate source-backed prose from additions. A claim appearing in only one tailored résumé is not automatically weak — flag it only if it conflicts with another source.

---

# 18. Experience

Reverse-chronological, display titles from §2:

Jannat & Sadaf (2026–present, Lahore) · Schneider Electric (2025, Foxboro MA) · Formlabs (2024, Somerville MA) · Tesla (2024, Palo Alto CA) · TLS Technology (2023, Lahore) · Amazon (2021–2022, Bellevue WA) · Cosmos Surfaces (2020–2021, Kent WA)

Each role: company · display title · dates · location · **one concise functional scope line**. Example:

> **Amazon** · Supply Chain Program Manager (Contract) · 2021–2022 · Bellevue, WA
> *Middle-mile carrier performance and freight-pricing analytics*

Roles with case studies (J&S, Amazon, Tesla, Formlabs) get the scope line only — **no achievement text**.

Schneider, TLS and Cosmos have no case study and may each carry **one** achievement. Schneider's reverse-logistics/RMA work and TLS's team leadership and EMEA expansion are the most distinctive.

Keep this section substantially shorter than the résumé.

---

# 19. About

First person, ~100–120 words. Convey the progression: Industrial Engineering → Supply Chain & Operations → Planning / Procurement / Analytics → Operational Leadership, across industrial manufacturing, technology and consumer operations.

Avoid: employer-name repetition · "passionate about" · "driven by" · generic leadership language · résumé-summary phrasing · third-person biography.

---

# 20. Education & Certification

**Purdue University** — M.S. Engineering Management, 2025, GPA 3.98 · B.S. Industrial Engineering, 2019

**Do not display the undergraduate GPA.**

**Lean Six Sigma Green Belt** — visually separate from the Purdue block so it is not implied to be Purdue-issued. Include the issuer only if supplied in `portfolio-facts.md`.

---

# 21. Contact

Heading: **Contact.** One concise line at most.

Email · LinkedIn · Résumé. GitHub only if §0.2 supplied a URL and it contains portfolio-relevant work.

**No phone number. No contact form. No motivational CTA copy.**

If no GitHub repository exists yet at build time, omit GitHub from Contact and note it as a follow-up in the Step 4 final report rather than leaving a placeholder link.

---

# 22. Résumé

One public file at `public/esmail-arshad-resume.pdf`, served at `/esmail-arshad-resume.pdf`. Linked from navigation and Contact. No embedded viewer, no variant selector. The procurement and logistics résumés remain private sources and must never be linked or copied into `public/`.

---

# 23. Confidentiality

**Employer work:** no supplier names · no contract terms · no non-public internal data · no proprietary screenshots · no confidential tables · **no fabricated reproductions of employer dashboards.** Publicly known program names may be used.

**Client work:** anonymize identity · obey `rightsStatus` · never publish raw client data.

Where employer work needs a visual, use typographic metrics, simplified method diagrams or abstract process flows — and do not style them to look like reproductions of internal systems.

Footer: *Employer work is summarized without confidential internal detail. Client work is anonymized and shown as approved or sanitized excerpts.*

---

# 24. Design

**Strategy consulting × industrial technology × premium annual report.**

Warm off-white background · charcoal type · one restrained slate accent · strong editorial hierarchy · generous whitespace · thin dividers · understated metric treatments · real sanitized analytical screenshots.

Avoid: developer-portfolio aesthetics · neon · gradients · typewriter effects · animated counters · 3D · connected globes · warehouse/port/container stock imagery · supply-chain clip art · decorative icon grids · carousels · parallax · every section inside rounded cards.

Subtle hover states are fine where they aid hierarchy and respect reduced-motion.

---

# 25. Technical

**Astro · TypeScript · Tailwind · static output.**

Work content in `content/work/*.mdx`; site data in `content/site.ts`. One shared schema:

```ts
slug · type · title · organization · displayTitle · roleFocus · timeframe
summary · capabilities · tools · scope · headlineOutcome · rightsStatus
featured · published · draft · evidence
```

No professional content hardcoded in components. Empty optional fields disappear cleanly.

Site fully usable with zero client JavaScript. With six work items, prefer visible capability tags over filtering UI.

**Accessibility:** semantic HTML · correct heading order · visible keyboard focus · WCAG AA contrast · useful alt text · `prefers-reduced-motion` · nothing essential behind hover · no layout shift.

**SEO:** title `Esmail Arshad | Supply Chain, Operations & Analytics` · meta description *Supply chain and operations professional spanning planning, procurement, logistics and analytics, with experience across industrial, technology and consumer operations.* · canonical · Open Graph · Person JSON-LD · unique work-page metadata · sitemap · robots.txt · OG image at `public/og.png` (name plus positioning line, clean type, solid background).

**Deploy:** Vercel. README covers content structure, adding a work item, replacing the résumé, adding an artifact image, toggling published state, deploying.

---

# 25a. Repository and deploy sequencing

No GitHub repository exists yet. Sequence:

1. Build the full site locally with `git init` and normal commits. Do not block any part of Step 3 or Step 4 on a remote existing.
2. Once the build passes §0.4 definition of done, tell Esmail to create one empty repository at `https://github.com/esmailshahid-hue` (no README, no `.gitignore` — this project supplies its own) and share the resulting URL.
3. Add that URL as `origin`, push, then connect the repo to Vercel for deploys. Do not attempt to create the GitHub repository via API or CLI unless `gh` is already authenticated in this environment — check for that before assuming it.
4. Deploy target is the default Vercel URL. No custom domain at this stage, per `portfolio-facts.md`.
5. Once the repo exists and the site is deployed, add the GitHub URL to Contact per §21 — only if it will contain this portfolio's own source, not as a generic profile link.

---

# 26. Do not build

Skill bars · proficiency percentages · certificate galleries · testimonials · blog · Perspective section · newsletter · contact form · résumé viewer · résumé variants · dark-mode toggle · carousels · fabricated dashboards · filler statistics · "current focus" blocks · rhetorical-question CTAs · decorative capability icons · third-person biography · artificial uniform section lengths · client-workbook downloads.

**Never write content just because a component supports the field.**

---

# 27. Build process

## Step 1 — Content audit

Read all three résumés, the J&S bullet bank, `portfolio-facts.md`, both workbooks and both screenshots. Produce:

1. Role / date / display-title inventory
2. Verified achievement inventory, each attributed to its source variant
3. Metric classification: outcome · scope · finding
4. Systems and tools evidence
5. Primary workstream candidates per employer, and which bullets describe **separate** initiatives that must not be merged
6. The four proposed employer case studies with problem-led titles
7. Verified figures for both client projects, checked against the workbooks
8. Material source conflicts
9. Disclosure or rights risks
10. Specific questions needed for problem context, decision logic, trade-offs and attribution

Treat omission across tailored résumés as omission, not conflict.

## Step 2 — Approval checkpoint

Present the audit and **stop**. Do not scaffold, write case-study prose, or begin Step 3 until Esmail replies.

## Step 3 — Build

Schema → homepage → client-project pages (verified content, no ambiguity) → employer case-study drafts with TODOs → Experience, About, Education, Contact → responsive → accessibility → SEO and OG → README and deploy config.

## Step 4 — QA

Review at 1440px, laptop, tablet, mobile. Check: first-minute recruiter scan · hierarchy · spacing · mobile reading order · links · accessibility · confidentiality · source integrity · artifact rights · metric context · duplicated content · résumé-like filler · accidentally merged workstreams · unresolved TODOs · §0.4 definition of done.

**Final report:** remaining TODOs · unresolved source conflicts · unsupported or inferred claims · withheld artifacts · unpublished pages.

---

# Standard

The site should communicate one thing: **I understand how supply chains operate across planning, suppliers, logistics, analytics and execution — and I can show the decisions and evidence behind the work.**

Credibility comes from problems solved, judgment, method, scale, outcomes and inspectable artifacts. Not from professional copy.
