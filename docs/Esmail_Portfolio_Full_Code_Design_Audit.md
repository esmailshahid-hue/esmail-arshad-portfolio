# Esmail Arshad Portfolio — Full Code-Level Design Audit
## Current `main` branch vs. reference portfolios and agreed recruiter-first direction

**Repository audited:** `esmailshahid-hue/esmail-arshad-portfolio`  
**Branch:** `main`

This document is for a Claude Design / Claude Code agent. It audits the current codebase, recent commit history, and the reference portfolio direction already established.

---

# 0. Executive assessment

The portfolio has improved substantially from the earlier résumé-like version. The current architecture is directionally correct:

**human hero → curated case studies → About → career chronology → compact education/contact**

Do not rebuild the site from scratch.

Keep the strongest foundations:

- Astro + TypeScript + Tailwind;
- warm off-white / charcoal / slate visual system;
- Source Serif 4 + Inter typography;
- strong accessibility basics;
- case studies separated from chronology;
- employer cases separated from independent analytical projects;
- native HTML diagrams instead of fake employer screenshots;
- five featured homepage projects plus a full `/work/` archive;
- structured content collections.

The next pass should focus on:

1. fixing public-repository confidentiality problems;
2. refining the current homepage rather than undoing the curation work;
3. making featured cards visually more distinctive;
4. using supply-chain taxonomy on `/work/`, not as a homepage skills matrix;
5. simplifying diagrams so they do not repeat the prose;
6. improving analytical artifact presentation, especially on mobile;
7. cleaning stale documentation, dead fields, and inconsistent editorial language.

---

# 1. P0: public repository confidentiality problems

This is more urgent than design polish.

The repository is public. Content that is “not rendered” is still publicly accessible through GitHub.

## 1.1 `content/artifacts/` should not be public

Tracked files currently include:

- `content/artifacts/Freight_Spend_Analysis_Portfolio.xlsx`
- `content/artifacts/Inventory_Planning_Model_Portfolio.xlsx`

The portfolio documentation says these workbooks should not be downloadable, but a public GitHub repository gives both files raw download URLs.

### Recommended

Move the XLSX source files outside the public repository, for example:

```text
portfolio-private/
  artifacts/
    Freight_Spend_Analysis_Portfolio.xlsx
    Inventory_Planning_Model_Portfolio.xlsx
```

or into a separate private repository.

Add:

```gitignore
content/artifacts/
content-private/
portfolio-private/
```

The public site only needs sanitized images and approved public facts.

Deleting these files in a new commit does not remove old versions from Git history. If they genuinely must not remain publicly retrievable, either:

- make the repo private; or
- rewrite Git history with `git filter-repo` / BFG and force-push.

Verify old raw/blob URLs after cleanup.

---

## 1.2 Public MDX contains “private” evidence notes

`content/work/*.mdx` contains fields such as:

```yaml
evidence:
  - claim: ...
    source: CANDIDATE ACCOUNT ...
openQuestions: []
```

The schema calls this private provenance. In a public repo it is not private.

These notes include:

- internal guardrails;
- source provenance;
- candidate-only explanations;
- derivations;
- facts intentionally excluded from the visible site;
- mappings between metrics and résumé workstreams.

### Recommended

Remove `evidence` and `openQuestions` from the public MDX schema.

Move them to gitignored/private sidecars:

```text
content-private/
  evidence/
    amazon.yaml
    tesla.yaml
    schneider.yaml
    ...
```

Public work files should contain only public-safe fields.

---

## 1.3 `content/source/` is also public

Tracked source files include:

- `content/source/js-bullet-bank.md`
- `content/source/portfolio-facts.md`
- `content/source/resumes/standardized.pdf`

The bullet bank contains internal résumé-tailoring logic, unpublished metrics, application mappings, and operating notes that do not belong in a public portfolio source repository.

### Recommended

Move internal source material out of the public repository.

The standardized résumé may remain public because it is intentionally downloadable, but avoid unnecessary duplicate copies if `public/esmail-arshad-resume.pdf` is already canonical.

---

## 1.4 `docs/` exposes internal build history

The public repo includes:

- `docs/build-spec-v7-patched.md`
- `docs/step1-content-audit.md`
- `docs/step4-final-report.md`
- `docs/step5-revision-report.md`
- `docs/v7_patch.md`

These are useful internal working files but not useful public portfolio source.

### Recommended

Move them to private/gitignored storage. Keep one clean public `README.md`.

---

# 2. Reference-site synthesis

Do not combine the visual designs of the references. Use each reference for one specific lesson.

## Samir Saci → layered proof

Borrow:

```text
homepage preview
→ concise case study
→ optional artifact / deeper evidence
```

Keep supply chain first and tools second.

Do not add generic coding projects or turn the site into a publishing platform.

## Nitin Navali → supply-chain taxonomy

Use a controlled archive taxonomy:

- Planning & Inventory
- Procurement & Sourcing
- Logistics & Fulfillment
- Operations & Program Management
- Analytics & Automation

Use this primarily on `/work/`.

Do not restore a large homepage capability matrix.

With only nine projects, a heavy JavaScript filter is unnecessary. Tags and a compact browse row are enough for now.

## Theerapong Thanarodpaibun → proof before chronology

Keep:

```text
case studies
before
career timeline
```

Do not move Experience above proof.

Do not expand the timeline into résumé bullets.

## Shimon Gowda → end-to-end coherence

Let the project mix prove breadth:

```text
Plan → Source → Operate → Move → Analyze / Improve
```

Do not turn that into another generic hero slogan.

## Kenneth Condit → distinguish employer impact from analytical proof

Employer cases should show:

- judgment;
- execution;
- leadership;
- operating outcome.

Independent projects should show:

- models;
- methodology;
- screenshots;
- limitations;
- inspectable analytical work.

## Sathya Narayanan Ramesh → systems in context

Show systems only where they materially support the story.

Avoid:

- proficiency bars;
- skill percentages;
- huge tool clouds;
- generic leadership claims;
- long autobiographical sections.

---

# 3. `src/pages/index.astro`

## Keep the current architecture

Keep:

- personal hero;
- headshot;
- five featured projects;
- About below proof;
- `Where I’ve worked`;
- compact Education + Contact;
- `/work/` archive link.

## 3.1 Change the secondary hero CTA

Current secondary CTA is **Résumé**.

Recommended:

```text
View case studies
About me
```

The résumé already exists in navigation and Contact.

Change the second CTA from `meta.resumePath` to `#about`.

## 3.2 Put copy before image on mobile

Current headshot uses:

```html
order-first ... md:order-none
```

This makes the portrait appear before the introduction on small screens.

Recommended: remove `order-first`.

Mobile should encounter:

1. headline;
2. intro;
3. CTA;
4. image.

## 3.3 Slightly increase desktop portrait size

Current desktop column is 16rem / 256px.

Consider 18–20rem on larger screens, without turning the page into a portrait-led personal site.

## 3.4 Reconsider the implicit oversized lead card

Current code makes the first featured project span two columns:

```ts
const [lead, ...rest] = featured;
```

Because Jannat & Sadaf is first by `order`, it automatically becomes the visually dominant project.

That is an accidental coupling between content order and visual hierarchy.

### Preferred layout

Use four equal employer cards:

```text
J&S       TLS
Tesla     Amazon
```

Then make the demand-planning client project a wide artifact-led card below.

This creates stronger variety and makes the real analytical artifact visually important.

If a lead card is retained, use an explicit frontmatter field such as:

```yaml
homepageLead: true
```

Do not use `order` to silently control visual size.

## 3.5 Vary section-divider rhythm

`Section.astro` supports optional dividers, but the homepage uses them nearly everywhere.

Recommended:

- divider above Case Studies;
- no divider above About;
- divider above Experience;
- no divider or softer treatment above Education/Contact.

Use whitespace for some transitions.

---

# 4. `content/site.ts`

## Keep the new human hero

The move away from credential/system lists was correct.

Do not restore:

- Focus rail;
- Systems rail;
- “Industrial engineer and Purdue graduate” as the main identity.

## 4.1 Refine About copy one more time

Current About is improved but still slightly polished.

Suggested:

```ts
paragraphs: [
  "I’ve worked in large global companies and smaller operating teams, so I’ve had to be comfortable both analyzing a problem and owning what happens next — from building a forecast to fixing a fulfillment issue or challenging a supplier quote.",
  "I’m most interested in work where better planning, simpler processes and useful automation improve service, cost or day-to-day execution.",
]
```

## 4.2 Remove dead `meta.proposition`

Current old copy:

```ts
proposition: 'I improve how products are planned, sourced, moved and measured.'
```

appears to be unused by the current homepage and Base layout.

If grep confirms no use, delete it so a future agent cannot accidentally reintroduce the old generic line.

## 4.3 Separate SEO positioning from schema job title

Current:

```ts
meta.positioning = 'Supply Chain, Operations & Analytics'
```

is used as the schema.org `jobTitle`.

That is a category, not a natural title.

Recommended:

```ts
positioning: 'Supply Chain, Operations & Analytics',
schemaJobTitle: 'Supply Chain & Operations Professional',
```

Use `schemaJobTitle` in JSON-LD.

## 4.4 Verify public role titles against the downloadable résumé

Run a consistency check for all displayed titles, especially Formlabs.

The website and public résumé should intentionally use the same canonical public title even if older résumé variants differed.

---

# 5. `src/components/EmployerCard.astro`

Current content hierarchy is good:

```text
Company
Case title
Visual preview
One result
```

Do not restore the removed role-focus summary.

## Recommended

If the homepage moves to an equal-card grid, remove the `lead` prop and keep only:

```ts
compact?: boolean
```

On archive cards only, consider adding 1–2 capability tags.

Keep homepage cards cleaner.

---

# 6. `src/components/CardPreview.astro`

This is one of the biggest remaining design opportunities.

Current previews are mostly bordered text chips:

```text
[Line] → [Station] → [Equipment] → [Component]
```

Because every employer preview uses the same boxes/arrows, they still feel templated.

## Recommended preview kinds

Mirror the actual reasoning shape:

```ts
'hierarchy'
'narrowing'
'sequence'
'compare'
'recovery'
```

### Tesla — hierarchy

```text
LINE
  └ STATION
      └ EQUIPMENT
          └ COMPONENT
```

### Amazon — narrowing

Use progressively narrower bars:

```text
REGION
 LANE
  FACILITY
   PATTERN
```

### TLS — sequence

```text
Market ○──○ IOR ○──○ Compliance ○──○ Repeat
```

### J&S — compare

```text
BEFORE: Arrival order
AFTER:  Delivery risk
```

Use two visual lanes rather than a struck-through chip.

### Rules

- 2–4 labels maximum;
- no paragraph notes;
- no miniaturized full diagrams;
- no generic icons;
- use shape, line, spacing and hierarchy.

The client planning card should continue using a real sanitized image crop instead.

---

# 7. `src/components/ClientCard.astro`

The thumbnail-crop strategy is a meaningful improvement over showing the entire spreadsheet at unreadable scale.

Keep that idea.

## 7.1 Make the discipline more prominent than the generic project label

Current:

```text
Independent client project · Demand & inventory planning
```

is accurate but long.

Consider:

```text
Demand & inventory planning
Independent client project
```

or:

```text
Independent · Demand planning
```

Preferred for the current tone:

```text
Independent client project
Demand & inventory planning
```

The functional area should be easier to scan than the disclosure label.

## 7.2 Add a wide homepage variant

If the client planning project becomes the full-width fifth feature, use a layout such as:

```text
[readable dashboard crop]   Demand & inventory planning
                            Independent client project
                            Matching forecast methods to SKU demand behavior
                            24 SKUs · 18 months
                            View case study →
```

This card should visibly differ from employer cards.

---

# 8. `/work/` archive — `src/pages/work/index.astro`

Current structure is good:

- employer case studies;
- independent client projects;
- compact cards;
- homepage curation remains separate.

Keep that.

## 8.1 Borrow Nitin's taxonomy without overbuilding filters

Nine projects do not justify a large interactive filter UI yet.

Recommended now:

```text
Browse by capability
Planning & Inventory
Procurement & Sourcing
Logistics & Fulfillment
Operations & Program Management
Analytics & Automation
```

Use these as compact taxonomy chips / labels.

Render 1–2 capability labels on archive cards.

When the archive grows beyond approximately 12–15 items, consider true interactive filtering.

## 8.2 Normalize capability vocabulary

Current capability values are broad and do not visibly represent leadership/program work.

Recommended controlled set:

```text
Planning & Inventory
Procurement & Sourcing
Logistics & Fulfillment
Operations & Program Management
Analytics & Automation
```

Suggested mappings:

```text
Jannat & Sadaf
- Planning & Inventory
- Operations & Program Management

Schneider Electric
- Planning & Inventory
- Logistics & Fulfillment

Tesla
- Procurement & Sourcing
- Analytics & Automation

Formlabs
- Analytics & Automation
- Planning & Inventory

TLS Technology
- Operations & Program Management
- Logistics & Fulfillment

Amazon
- Logistics & Fulfillment
- Analytics & Automation

Cosmos Surfaces
- Logistics & Fulfillment
- Operations & Program Management

Inventory client project
- Planning & Inventory
- Analytics & Automation

Freight client project
- Logistics & Fulfillment
- Analytics & Automation
```

## 8.3 Make counts dynamic

Current intro hardcodes:

> Problems from seven roles and two independent client projects

Build this from:

```ts
employer.length
client.length
```

so it cannot become stale.

## 8.4 Keep the archive dense

Do not add full diagrams or large image previews to every archive item.

The archive should help a recruiter browse and choose.

The homepage should persuade.

---

# 9. `src/pages/work/[slug].astro`

The generic case-study renderer is a strong architectural decision.

Keep:

- compact header;
- organization / role / timeframe;
- concise summary;
- at-a-glance row;
- primary diagram or artifact;
- narrow editorial prose;
- employer/client shared shell;
- client disclosure.

## 9.1 Fix stale navigation

Current top link:

```text
← Selected work
```

and bottom link:

```text
← All work
```

both point to the homepage section.

Now that `/work/` is the actual archive, recommended:

Top:

```text
← All case studies
```

Bottom:

```text
← Back to case studies
```

Both:

```text
/work/
```

Remove the old “Selected work” vocabulary entirely.

## 9.2 Stop using `tools` as a mixed keyword bucket

Current `tools` contains unlike concepts.

Examples:

### Tesla
- Should-costing
- Supplier benchmarking
- Advanced Excel

### TLS
- IOR
- Customs
- Freight forwarding
- Compliance
- SOPs
- KPI management

### J&S
- Production planning
- Capacity management
- Order prioritization

These are a mix of:
- systems;
- methods;
- functions;
- keywords.

Because they render as one quiet line under the title, the case page risks reintroducing résumé/ATS vocabulary.

### Recommended schema

```yaml
systems:
  - SAP
  - Oracle

methods:
  - Exception management
  - Root-cause review
```

### Recommended rendering

Employer pages should show systems only where materially relevant.

Examples:

```text
Schneider: SAP · Oracle
Formlabs: NetSuite · SQL
Amazon: Tableau · TMS
```

Potentially show no systems line for:

```text
J&S
TLS
Tesla
```

unless a real tool adds useful context.

For client projects:

```text
Built in Excel
```

is enough.

Do not create a separate Tools section.

## 9.3 Keep the three-item at-a-glance row, but avoid over-standardization

Three facts are useful for scanning.

Do not add more.

Do not require every case to look identical below that row.

The semantic structure can stay consistent while visuals vary.

---

# 10. `src/components/Diagram.astro`

This is one of the best technical choices in the repository.

Keep native HTML diagrams rather than imported infographics.

Benefits:

- responsive;
- accessible;
- searchable;
- selectable;
- consistent in dark mode;
- easy to edit;
- clearly explanatory rather than fake internal-company evidence.

## Main issue: some diagrams contain too much copy

A diagram should carry the **shape of the reasoning**, not duplicate `What I did`.

### Schneider currently

8 stages, each with a note, plus:
- phase labels;
- repeat statement;
- outcome;
- caption.

### TLS currently

7 stages, notes, phases, repeat statement, outcome, caption.

These become a second wall of text before the case-study prose.

## Recommended diagram rule

Target:

- 4–6 nodes;
- short labels;
- notes only when necessary;
- one concise caption;
- do not repeat a large outcome already shown in the at-a-glance row.

---

## 10.1 Schneider diagram

Current core logic is strong: daily loop.

Simplify to:

```text
PRIORITIZE
High-risk orders

↓

VALIDATE
Inventory + open POs

↓

EXECUTE
Warehouse + carrier pickup

↓

REVIEW
Missed pickups

↓

ACT
Root cause + owner

↻ NEXT MORNING
```

The visual should communicate that the process loops.

The body can explain:
- customer-facing urgency;
- international cutoff timing;
- documentation;
- ERP release issues.

Do not put all of that inside diagram boxes.

---

## 10.2 TLS diagram

Simplify to:

```text
ASSESS MARKET
↓
SOURCE / VET IOR
↓
DEFINE COUNTRY PROCESS
↓
EXECUTE SHIPMENT
↓
TRACK COMPLIANCE
↻ next market
```

Use Bahrain as a small annotation:

```text
First use case: Bahrain
```

not a full process stage.

---

## 10.3 Tesla diagram

The hierarchy is strong.

Keep:

```text
TLA line
↳ Station
   ↳ Equipment
      ↳ Tier 3 / Tier 4 component
         ↳ Cross-supplier benchmark
```

Reduce explanatory note length.

The indentation/fan-out is the meaning.

---

## 10.4 Jannat & Sadaf diagram

The before/after idea is strong.

Keep the core distinction:

```text
BEFORE
Order of arrival

AFTER
Risk of missing the date
```

Reduce the current four bullets per side to 2–3.

For example:

Before:
- due date not weighed against remaining effort;
- lead time / capacity not consistently considered;
- late wedding orders surfaced too late.

After:
- due date + lead time + capacity;
- long-lead wedding work prioritized;
- capacity pressure surfaced earlier.

---

## 10.5 Amazon diagram

Keep the narrowing shape.

This is the best example of the diagram adding meaning beyond the prose.

The reader can see:

```text
Region
↓
Lane
↓
Facility pair
↓
Repeated individuals
```

The visual itself explains the investigation.

---

## 10.6 Formlabs diagram

Keep before/after, but simplify copy.

Avoid lines like:

> adding a SKU did not add a month of work

which sounds rhetorical and can be read literally.

Use:

> The reporting logic was rebuilt around reusable source data so additional SKUs did not require the monthly calculation to be rebuilt.

---

# 11. Editorial voice in diagrams and MDX

Several current captions are more polished/aphoristic than the desired tone.

Avoid:

> The last three steps are what made the first one work.

Avoid:

> The value was in the pipeline surviving after it.

Avoid:

> Arrival order ignores the one fact that matters most.

Prefer literal operational language.

### Schneider

Use:

> Prior-day misses fed the next morning's risk review, creating a recurring exception-management loop.

### TLS

Use:

> Bahrain was the first use case; the same framework was then applied to additional EMEA markets, with country requirements reassessed each time.

### J&S

Use:

> Scheduling moved from arrival order to delivery risk, using due date, lead time and available capacity.

### Formlabs

Use:

> The logic was rebuilt around reusable source data so the process could scale without rebuilding the monthly calculation for each added SKU.

---

# 12. Analytical client projects

These should remain more inspectable than employer case studies.

That difference is valuable.

## 12.1 Rename the planning case

Current:

**Letting demand behaviour choose the forecast method**

Recommended:

**Matching forecast methods to SKU demand behavior**

Benefits:

- clearer;
- explicitly says forecast;
- less editorial;
- stronger recruiter language;
- consistent US English.

## 12.2 Reduce planning artifacts from three to two

Current:

1. `inventory-dashboard.png`
2. `inventory-forecast-model.png`
3. `inventory-risk-review.png`

Recommended:

### Primary
`inventory-dashboard.png`

### Secondary
`inventory-forecast-model.png`

Remove `inventory-risk-review.png` from the public page unless it adds a genuinely different insight.

Its key logic already appears in the written findings.

This makes the page shorter and cleaner.

## 12.3 Do not scale entire dashboards into tiny homepage thumbnails

The current crop/zoom feature is directionally correct.

Homepage should show:
- one readable demand chart;
- one risk/status block;
- one or two headline values.

Detailed page should show the full sanitized artifact.

## 12.4 Improve mobile artifact behavior

Current full artifacts use:

```css
min-w-[44rem]
overflow-x-auto
```

That is functional but forces mobile users to pan a large spreadsheet.

Recommended:

### Mobile
- readable crop / focus view;
- clear `View full artifact` affordance.

### Desktop
- full image.

If horizontal scroll remains, make the scroll region keyboard focusable:

```html
tabindex="0"
aria-label="Scrollable dashboard image"
```

---

# 13. `src/styles/global.css`

The overall design system should stay.

Keep:

- warm paper ground;
- charcoal type;
- restrained slate;
- Source Serif 4 + Inter;
- dark-mode palette;
- visible focus;
- reduced-motion handling;
- narrow prose measure.

Do not turn the site into a blue dashboard interface.

## 13.1 Strengthen case section headings slightly

Current `.prose-editorial h2`:

```css
font-size: 0.6875rem;
```

11px all-caps is arguably too quiet for primary scan points like:

- Challenge
- What I did
- Decision
- Outcome

Recommended:

```css
font-size: 0.75rem–0.8125rem;
letter-spacing: 0.12em–0.14em;
```

Keep them understated but more readable.

## 13.2 Keep body copy around 17px

Current:

```css
1.0625rem
```

is appropriate.

Do not shrink copy to make the page feel shorter.

Shorten content instead.

## 13.3 Keep prose narrow and visuals wide

Current:

```text
case prose → max-w-2xl
visuals → shell width
```

is correct.

Do not widen the body text to fill the screen.

---

# 14. `src/layouts/Base.astro`

## 14.1 Desktop navigation

Current desktop navigation is good:

- Case Studies
- About
- Experience
- Résumé
- Contact
- theme toggle

Keep it.

## 14.2 Mobile navigation hides Résumé

At phone width, current breakpoints hide:
- Experience;
- Contact;
- Résumé.

The visitor may see only:
- Case Studies;
- About;
- theme.

A recruiter should not lose direct résumé access on mobile.

### Recommended

Avoid a complex hamburger unless needed.

Use a simple two-row mobile header:

```text
Esmail Arshad                theme

Case Studies · About · Résumé · Contact
```

Experience can stay omitted from the mobile nav because the timeline is on the homepage.

Résumé should remain visible at every width.

## 14.3 Add active state later

On `/work/` and case pages, `Case Studies` can use `aria-current="page"` or an active underline.

Nice polish, not urgent.

## 14.4 SEO foundation is strong

Keep:
- canonical;
- Open Graph;
- Twitter card;
- sitemap;
- Person JSON-LD.

Refine schema job title as described above.

Optional later:
- Article/CreativeWork JSON-LD on case pages.

---

# 15. `src/content.config.ts`

## 15.1 Repurpose `capabilities`; do not remove it

Use it for `/work/` taxonomy.

Make it controlled:

```ts
const capability = z.enum([
  'Planning & Inventory',
  'Procurement & Sourcing',
  'Logistics & Fulfillment',
  'Operations & Program Management',
  'Analytics & Automation',
]);
```

Then:

```ts
capabilities: z.array(capability).min(1).max(2)
```

## 15.2 Remove unused `tool` type unless there is a real plan

Current:

```ts
'operating-case-study' | 'client-project' | 'tool'
```

No current work item is a `tool`.

The site intentionally should not drift into a generic software-tool portfolio.

Recommended:

```ts
'operating-case-study' | 'client-project'
```

unless a specific public tool is planned.

## 15.3 Split systems from methods

Replace mixed `tools` with:

```ts
systems: z.array(z.string()).default([])
methods: z.array(z.string()).default([])
```

Use systems for actual platforms/technology.

Methods can exist as metadata without necessarily rendering everywhere.

## 15.4 Remove private fields from the public schema

After private migration, remove:

```ts
evidence
openQuestions
```

from public content validation.

## 15.5 Update stale comments

Current comments still reference:
- old internal section numbers;
- employer-only assumptions that now apply to clients too;
- “private” data that is publicly committed.

Rewrite comments to describe current code only.

---

# 16. `content/work/*.mdx` editorial consistency

## 16.1 Standardize US English

Current public copy mixes:
- labour / labor;
- fulfilment / fulfillment;
- behaviour / behavior.

Use one style.

Recommended:
- labor;
- fulfillment;
- behavior;
- modeling;
- standardized.

## 16.2 Keep one workstream per case

This is already one of the strongest improvements.

Do not reintroduce unrelated “Related Work” sections.

Keep:

```text
Tesla $150K should-cost
separate from 3% CapEx sourcing

Formlabs COGS automation
separate from $50K ABC + OTIF

Schneider exception management
separate from forecasting + RMA

J&S scheduling
separate from supplier + spend tracking

TLS EMEA expansion
separate from 18% delivery-timeline redesign

Amazon anomaly investigation
separate from 8% pricing result
```

## 16.3 Remove clever reversals / marketing phrasing

Prefer:
- facts;
- decisions;
- constraints;
- results.

Delete lines whose main purpose is sounding memorable.

---

# 17. Homepage featured set

Keep the current five featured subjects:

- Jannat & Sadaf;
- Tesla;
- TLS Technology;
- Amazon;
- demand-planning client project.

This gives:

```text
J&S
current ownership / production planning

TLS
leadership / international expansion

Tesla
procurement / cost

Amazon
freight analytics / investigation

Client project
forecasting / inventory planning
```

Schneider, Formlabs, Cosmos and freight analytics belong in the archive.

Do not put all nine back on the homepage.

---

# 18. Timeline

Keep the current restrained open-circle rail.

It is much better than a colorful horizontal infographic.

Do not add:
- company logos;
- role bullets;
- metrics;
- per-row location;
- capability descriptions.

The single line:

> Roles in the United States and Pakistan.

is useful context.

Possible small-screen refinement:
place date above company if the two-column layout becomes cramped below ~380px.

---

# 19. `README.md` requires a full rewrite

Current README is materially stale.

Examples:

## Incorrect

> zero client JavaScript

Current site has theme-toggle scripts.

## Incorrect

> no GitHub repository exists yet

The repository exists.

## Stale

> client projects are labelled Anonymized Client Project

They are now Independent client projects.

## Stale schema example

It references fields such as `supportingMetrics` that were removed.

## Incorrect privacy claim

It says client workbooks are private and not downloadable.

They are currently committed to the public repository.

## Stale publication behavior

README says unpublished items can still render cards.

Current homepage explicitly filters:

```ts
published && featured
```

### Recommended README scope

Keep only:

1. purpose;
2. stack;
3. local development;
4. public content architecture;
5. case-study authoring rules;
6. deployment;
7. accessibility;
8. confidentiality rule: **private material must never be committed**.

Do not preserve historical build instructions that are no longer true.

---

# 20. Recommended public repository structure

```text
content/
  images/
    public sanitized evidence only
  work/
    public case-study MDX only
  site.ts

public/
  esmail-arshad-resume.pdf
  og.png
  robots.txt

src/
  components/
  layouts/
  pages/
  styles/

README.md
astro.config.mjs
package.json
...
```

Private material should live outside this repo:

```text
portfolio-private/
  artifacts/
    client workbooks
  evidence/
    source provenance
    candidate-only notes
    open questions
  source/
    resume variants
    bullet banks
    research briefs
    internal audit docs
```

---

# 21. Commit-history retrospective

The commit history shows a useful progression. Future design work should understand which changes were strategic improvements versus temporary layout fixes.

## `d17003c` — initial Astro build

### Keep

This established the strong technical foundation:

- Astro;
- TypeScript;
- Tailwind;
- accessibility;
- SEO;
- content collections;
- static output.

No reason to change the core stack.

---

## `cee77f0` — homepage reduced by 58%

### Strong improvement

This removed:
- proof strip;
- company strip;
- capability section;
- repeated metrics.

This was the first major move away from résumé duplication.

Do not restore these sections.

---

## `8b59913` — standardized employer case studies

### Strong improvement

This introduced:
- consistent case anatomy;
- new Amazon anomaly story;
- Cosmos recovery story;
- native diagrams;
- tighter spacing.

Keep the case-study structure.

---

## `44d847e` — Phase 2 / nine-page unification

### Mostly strong

Good:
- new employer cases;
- coherent schema;
- shared Diagram component;
- consistent employer/client vocabulary;
- accessibility improvements.

### Caution

The site can become *too standardized* if:
- every preview is boxes/arrows;
- every diagram is a bordered process map;
- every page uses identical visual pacing.

The next step should be **visual differentiation inside a stable structure**, not a new structure.

---

## `9095c21` — Focus / Systems / Based hero rail

### Layout improvement, strategic regression

This solved empty space but filled it with résumé metadata.

It made the hero more visually occupied while reinforcing the CV feeling.

The later decision to remove it was correct.

Do not restore:
- Focus block;
- Systems block;
- Based metadata rail;
- four-column keyword-heavy hero.

---

## `8242c32` — type scale + dark mode

### Strong improvement

Keep:
- continuous type scale;
- stronger section-heading rung;
- designed dark palette;
- accessibility contrast.

No rollback.

---

## `b2c3c4a` — manual theme override

### Good improvement

Keep the theme toggle.

But this commit makes the README's “zero client JavaScript” statement obsolete.

Documentation should reflect reality.

---

## `4985a25` — “curate rather than recite”

### Most important strategic commit

This is the current design baseline.

It correctly introduced:

- a human hero;
- larger headshot placement;
- five featured projects;
- full `/work/` archive;
- employer preview visuals;
- independent-client labels;
- cropped client thumbnails;
- chronology-only timeline;
- shorter About;
- no GPA;
- Case Studies + About navigation.

Do not undo this commit's information architecture.

Refine it.

---

## `172077b` + `0a22370` — timeline markers and merge

### Appropriate refinement

The subtle rail/dots are restrained enough.

Do not expand the timeline into the colorful reference infographic.

---

# 22. File-by-file recommendation table

| File / area | Recommended treatment |
|---|---|
| `src/pages/index.astro` | **Keep architecture.** Hero CTA to About; copy-first mobile hero; deliberate grid hierarchy; wide client artifact card; vary dividers. |
| `content/site.ts` | **Revise.** Remove dead proposition; refine About; separate schema job title; verify public role titles. |
| `EmployerCard.astro` | **Keep.** Remove `lead` prop if equal-grid design adopted; capability tags only in archive mode. |
| `ClientCard.astro` | **Keep crop strategy.** Make discipline more prominent; add wide homepage variant. |
| `CardPreview.astro` | **Major redesign.** Replace generic chips with hierarchy/narrowing/sequence/compare shapes. |
| `Diagram.astro` | **Keep native diagrams.** Reduce nodes and explanatory text. |
| `Section.astro` | **Keep.** Use divider selectively. |
| `src/pages/work/index.astro` | **Keep employer/client split.** Add light taxonomy; make counts dynamic; no heavy filter yet. |
| `src/pages/work/[slug].astro` | **Revise.** Back links to `/work/`; systems/methods split; better mobile artifact handling. |
| `src/content.config.ts` | **Revise.** Capability enum; systems/methods; remove private provenance; consider dropping unused `tool` type. |
| `src/styles/global.css` | **Keep visual system.** Slightly strengthen editorial section headings. |
| `README.md` | **Rewrite.** It is materially stale. |
| `content/artifacts/` | **Remove from public repo immediately.** |
| `content/source/` | **Move internal materials out of public repo.** |
| `docs/` | **Move internal build/audit files out of public repo.** |
| `content/work/*.mdx` | **Public narrative only.** Remove evidence/openQuestions; US-English pass; simplify captions/diagram text. |

---

# 23. Implementation priority

## P0 — security / confidentiality before visual work

1. Remove public client XLSX workbooks.
2. Remove candidate-only evidence notes from public MDX.
3. Move bullet banks / portfolio facts / internal docs out of public repo.
4. Update `.gitignore`.
5. Decide whether history must be rewritten or repo made private.
6. Verify raw/blob URLs after cleanup.
7. Rewrite README privacy statements.

---

## P1 — highest visual / UX return

1. Redesign `CardPreview.astro` with distinct case-specific shapes.
2. Change hero secondary CTA from Résumé to About.
3. Put hero copy before portrait on mobile.
4. Remove accidental J&S full-width lead behavior; use deliberate grid hierarchy.
5. Make demand-planning client project the wide artifact-led homepage feature.
6. Simplify Schneider/TLS/J&S/Formlabs diagram text.
7. Fix case-study navigation to `/work/`.
8. Rename planning project to **Matching forecast methods to SKU demand behavior**.
9. Reduce planning project public screenshots from three to two.

---

## P2 — archive / content system

1. Add capability taxonomy to `/work/`.
2. Add capability tags to compact archive cards.
3. Normalize capability labels.
4. Split `tools` into `systems` and `methods`.
5. Standardize US English.
6. Remove rhetorical captions.
7. Make archive counts dynamic.
8. Slightly increase case-section heading size.

---

## P3 — polish

1. Keep résumé accessible in mobile nav.
2. Add active navigation state.
3. Improve mobile artifact viewing.
4. Consider per-case structured data.
5. Remove obsolete spec-number comments and stale code comments.

---

# 24. Acceptance criteria

The next design pass should be considered successful when the following are true.

## Homepage

- A recruiter understands the professional identity within roughly 10 seconds.
- The hero reads like a person, not a keyword matrix.
- Exactly five projects are featured.
- The four employer cards do not read like résumé bullets.
- Employer previews have visibly different reasoning shapes.
- The demand-planning project visibly looks like inspectable analytical proof.
- About is short and natural.
- Timeline is chronology only.
- Education is compact.
- Résumé remains easy to access on mobile.

## `/work/`

- Employer cases and independent projects remain clearly distinct.
- Recruiters can identify relevant capability areas quickly.
- Taxonomy helps browsing without adding unnecessary UI.
- The archive stays dense and fast to scan.

## Case-study pages

- Header + proof row is understandable quickly.
- The diagram adds visual logic rather than repeating the body.
- `Challenge / What I did / Decision / Outcome` remains clear.
- Separate workstreams remain separate.
- Client artifacts are readable enough to be useful.
- Pages do not become image galleries.
- Mobile artifact access is reasonable.

## Public repository

- No client workbooks are publicly downloadable unless explicitly intended.
- No candidate-only evidence notes remain public.
- No internal bullet banks/build specs remain public.
- README describes the current implementation accurately.
- Public source looks intentional and professional.

---

# 25. Things not to reintroduce

Do not regress into:

- company-logo strip;
- hero metric strip;
- Focus / Systems / Based rail;
- giant capability matrix on homepage;
- skills cloud;
- skill bars or proficiency percentages;
- all nine projects on homepage;
- detailed résumé bullets in Experience;
- generic supply-chain stock photography;
- flashy developer-portfolio animation;
- fake employer dashboards;
- generated visuals presented as evidence;
- long motivational copy;
- “passion for optimization” language;
- unrelated Related Work sections;
- technology-first project titles.

---

# 26. Target visual character

The intended feeling remains:

**strategy consulting + industrial technology + premium annual report**

with:

- more personality than a consulting deck;
- more proof than a résumé;
- less visual noise than a dashboard portfolio;
- more domain credibility than a generic analytics portfolio.

Use:
- employer names;
- process shapes;
- real sanitized client artifacts;
- typography;
- spacing;
- selective metrics;
- restrained motion.

Do not use stock photography or decorative data visualizations merely to fill space.

---

# 27. Recommended end-state information architecture

```text
HOME

Human introduction + portrait
↓
4 equal employer problem cards
↓
1 wide analytical client project
↓
short About
↓
restrained career timeline
↓
compact Education / Contact
↓
footer
```

```text
WORK ARCHIVE

Employer case studies
+ capability taxonomy
↓
Independent client projects
↓
sanitized evidence only
```

```text
EMPLOYER CASE PAGE

Company / role / period
Problem-led title
Short summary
3 proof facts
One concise visual
Challenge
What I did
Decision
Outcome
```

```text
CLIENT CASE PAGE

Project discipline
Problem-led title
Short summary
3 proof facts
Primary sanitized artifact
Challenge
What I did
Decision
Key findings
One secondary artifact
Limitations
```

The current repository is already close to this structure.

The next pass should be a **cleanup, differentiation and confidentiality pass**, not another full rebuild.
