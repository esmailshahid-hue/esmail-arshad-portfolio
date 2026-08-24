# Portfolio Refinement — Pass 4: Experience Context and Project Storytelling

## Run this after Passes 1–3

### Current state
Passes 1–3 are already complete and should be treated as the approved baseline.

Do **not** reopen the major structural decisions from those passes.

The current homepage already has:
- a working integrated proportional Experience timeline
- a readable 2 × 2 Core / Systems / Education / Based block
- purpose-built analytical project visuals
- de-duplicated project KPIs
- a prominent `Get in touch` closing section
- responsive behavior tested at desktop, tablet and mobile widths
- the confidentiality disclaimer removed from the homepage
- dark mode retained after QA

This pass should be a **small enrichment pass**, not another redesign.

---

# Objective

Borrow the strongest information-design ideas from Yash Patel's supply-chain portfolio without inheriting its biggest weakness: too much text.

The main improvements should be:

1. make each Experience role communicate **what kind of work was done**, not only company / title / date
2. make each Project explicitly communicate **what was built**
3. add a small number of useful tool / method tags to Projects
4. preserve the current analytical visuals, whitespace, Contact treatment, metadata layout and responsive structure

The homepage should remain fast to scan.

---

# 1. Preserve these sections exactly in structure

Do not structurally redesign:

- Hero layout
- portrait treatment
- Core / Systems / Education / Based 2 × 2 layout
- project two-card structure on desktop
- current project analytical previews
- integrated proportional desktop Experience timeline
- vertical tablet/mobile Experience fallback
- `Get in touch` section
- header/navigation
- dark-mode behavior

Do not add:
- Overview section
- Focus section
- Approach section
- company-logo strip
- location column in Experience
- GitHub emphasis
- Back to top control

---

# 2. Experience: add one ultra-short role-focus line

## Current problem

The latest Experience timeline successfully answers:

> Where did Esmail work, in what role, and when?

That is much cleaner than the earlier version.

However, it is now slightly too stripped down because it does not tell the reader **what kind of work was actually performed in each role**.

Borrow this information-design idea from the reference portfolio, but do **not** add paragraph descriptions or result metrics.

---

# 3. Exact Experience hierarchy

Each Experience annotation should contain only:

1. **Company**
2. Role title
3. Exact month range
4. **One very short role-focus line**

Do not display:
- result metrics
- achievements
- arrows
- paragraphs
- locations
- company logos
- pill tags

The role-focus line itself should carry the useful taxonomy.

## Visual hierarchy

- Company = strongest
- Role title = secondary
- Date = tertiary
- Role-focus line = quiet supporting context

The new focus line should be visually lighter than the role title and should not make the annotation feel like a card.

Recommended size:
- approximately 11.5–12.5px
- readable line-height
- muted ink / slate-gray
- no uppercase
- no bold unless needed for legibility

---

# 4. Exact Experience focus lines

Add a new data field such as:

`focus: string`

to each role in `content/site.ts`.

Use the following concise wording:

### Jannat & Sadaf
`Production planning · Delivery risk`

### Schneider Electric
`Planning exceptions · Order risk`

### Formlabs
`NetSuite automation · Cost visibility`

### Tesla
`Should-costing · Supplier negotiation`

### TLS Technology
`EMEA expansion · Operating model`

### Amazon
`Freight analytics · Cost anomalies`

### Cosmos Surfaces
`Order recovery · Customer fulfillment`

These should remain short enough to fit the existing timeline annotations without turning into paragraph copy.

Do not lengthen them unless absolutely necessary.

---

# 5. Desktop timeline constraints

The current horizontal timeline uses compact annotations and switches to vertical below `xl`.

Keep this behavior.

After adding the focus lines:

- verify that no role annotation collides with another
- do not widen every annotation so far that the timeline loses its proportional character
- do not reduce company / role / date type sizes to create space
- if one focus line wraps awkwardly, shorten the copy rather than shrinking the type
- Tesla and Formlabs must remain clearly distinct within 2024
- the role spans must remain the primary temporal cue

Do not add outlined pills to the desktop timeline.

---

# 6. Tablet/mobile Experience

Keep the current vertical chronology.

Each role should show:

**Company**  
Role title  
Date  
Focus line

Example:

**Tesla**  
Global Supply Chain Manager Intern  
May 2024 – Aug 2024  
*Should-costing · Supplier negotiation*

No result metric.

No visible arrow label.

The entire role block may remain clickable.

---

# 7. Projects: explicitly state what was built

## Current problem

The latest Project cards already have:
- category/eyebrow
- KPI strip
- purpose-built analytical visual
- title
- capability-oriented subtitle

The visual design is strong.

However, the subtitle still reads more like a list of analytical capabilities than a statement of **what was actually created**.

Borrow the strongest idea from the reference portfolio:

> Make the deliverable / build immediately explicit.

---

# 8. Replace the Project subtitles

## Inventory project

Current capability-style subtitle:

> Demand classification, forecasting, safety stock and reorder logic

Replace with:

> **Built an Excel planning model linking demand behavior, safety stock and reorder decisions.**

## Freight project

Current capability-style subtitle:

> Vendor concentration, spend normalization and anomaly review

Replace with:

> **Built an Excel spend model to normalize freight costs and surface review exceptions.**

Do not add a separate `Built` heading unless the visual composition clearly benefits from it.

The sentence itself should be enough.

---

# 9. Reorder the Project-card hierarchy

The current component shows the KPI/visual container before the project title.

Change the information order so the reader understands the project before seeing the metrics.

## Target hierarchy

### 1. Eyebrow/category

### 2. Project title

### 3. One-sentence "what I built" statement

### 4. Analytical preview
Inside the preview:
- KPI strip
- existing purpose-built data visual

### 5. Tool/method tags

The card should read:

> What is this?  
> What did Esmail build?  
> Show me the evidence.  
> What tools/methods were involved?

Keep the full card clickable.

Do not add multiple internal CTAs.

---

# 10. Project titles

Keep the current project titles unless a layout issue requires a minor edit.

### Inventory
`Matching forecast methods to SKU demand behavior`

### Freight
`Turning freight spend into a review queue`

Do not replace them with generic titles such as:
- Inventory Dashboard
- Freight Analysis
- Excel Model

The current titles communicate the analytical problem well.

---

# 11. Add 2–3 tool/method tags to each Project

Use tags only on Projects, not on the desktop Experience timeline.

## Inventory
Use:

`Excel`  
`Forecasting`  
`Reorder planning`

## Freight
Use:

`Excel`  
`Spend analytics`  
`Vendor analysis`

If `Vendor analysis` creates an awkward width on mobile, `Anomaly review` is an acceptable alternative.

---

# 12. Tag styling

Borrow the scanability of the reference site's pills, but make them more restrained.

Rules:
- maximum 3 tags per project
- small, compact pills
- no heavy fills
- light border or very subtle neutral fill
- no bright colors
- no shadows
- no icon inside every pill
- consistent spacing
- same height and type treatment across both cards

Tags should describe:
- tool
- method
- analytical discipline

Do not use achievements as tags.

Do **not** create tags such as:
- `$43.7K reorder`
- `60 review flags`
- `$695K spend`
- `15 stockout risk`

Those values already belong to the KPI strip.

---

# 13. Preserve the current Project visuals

Do not replace the current analytical previews.

## Inventory
Keep:
- four KPI values
- three representative SKU/action rows
- MoS information
- risk/reorder visual logic
- the subtle segmented risk bar if it still reads cleanly

## Freight
Keep:
- four KPI values
- top-five vendor spend bars
- spend/share labels
- `Top 3 vendors = 45.9% of spend`

Do not return to raw Excel screenshots.

Do not make Projects text-only like the reference portfolio.

The current analytical previews are a key competitive advantage of this portfolio.

---

# 14. Project readability after reordering

Because title + build statement will now appear before the preview:

- keep the build statement to one concise sentence
- avoid increasing project-card height unnecessarily
- keep both cards visually balanced
- do not repeat the same facts in title, build statement, KPIs and tags
- maintain readable microtype
- allow cards to stack at the current breakpoint where needed

Do not force two columns at tablet widths if the visual becomes cramped.

---

# 15. Section descriptors: optional only

The reference portfolio uses strong descriptive section headlines.

This can add personality, but the current homepage has deliberately been simplified.

Do **not** automatically add large section taglines.

If the page feels visually too generic after the Experience/Project enrichment, test a single small supporting descriptor under the section heading.

Potential options:

## Projects
`Selected analytical work`

or

`Built for operating decisions`

## Experience
`Across planning, sourcing, logistics and operations`

These should:
- be one short line
- use smaller text than the section heading
- remain visually secondary
- not materially increase section height

If they make the page feel busier, omit them.

---

# 16. Hero: leave unchanged in this pass

Do not replace:

> Hi, I'm Esmail.

in this pass.

Do not add a personal-brand slogan yet.

A stronger value-proposition H1 may be tested later, but it is a positioning decision rather than a necessary design fix.

The current Hero copy should remain unchanged during this implementation.

---

# 17. Contact: leave unchanged

The latest `Get in touch` section already addresses the weakness identified in the reference comparison.

Keep:
- `Get in touch` heading
- current supporting sentence
- full email address as primary action
- LinkedIn
- Résumé (PDF)
- integrated copyright
- light background

Do not:
- add GitHub
- make the Contact section dark
- enlarge it again
- add another footer underneath

---

# 18. Core / Systems / Education / Based: leave unchanged

The latest 2 × 2 implementation is approved.

Do not add:
- Focus cards
- extra skills boxes
- extra badges
- more icons
- tool pills

The current block already performs the role that the reference portfolio's Focus section performs.

---

# 19. Do not add the reference portfolio's Overview section

Do not add:
- Current Lens
- Core Strength
- Operating Style
- additional introductory paragraphs

These would duplicate information already available in:
- Hero
- Core
- Projects
- Experience

---

# 20. Do not add an Approach section

Do not add homepage cards such as:

- Data before decisions
- Suppliers are partners, not vendors

The portfolio's existing case-study structure already contains Decision sections where professional judgment can be demonstrated through evidence.

Do not create a new Decision Principle component.

---

# 21. Do not add locations to the Experience timeline

Do not add city/state/country to each role.

The timeline already contains:
- duration
- company
- role
- date
- focus line

Location would add another permanent layer of information without improving the core career story enough to justify the density.

---

# 22. Do not add company logos

Do not add employer logos to the Experience timeline.

The timeline's typography and geometry should remain the visual system.

Seven corporate marks would make the section feel more like LinkedIn and would compete with the role annotations.

---

# 23. Do not add Back to top

The reference portfolio is longer and benefits more from this utility.

The current homepage is deliberately compact.

Do not add a Back to top control unless the homepage becomes materially longer in a future redesign.

---

# 24. Preserve the current visual language

Keep:
- warm off-white background
- Source Serif + Inter pairing
- muted slate accent
- restrained cards
- thin dividers
- generous whitespace
- light borders
- minimal animation
- no excessive shadows

Do not copy the reference site's page structure or overall text density.

Borrow its **clarity of explanation**, not its volume of copy.

---

# Responsive QA

After implementing the enrichment changes, visually inspect:

- ~1280px
- ~1024px
- ~768px
- ~390px

## Specifically check

### Experience
- focus lines do not collide
- no annotations become too tall
- horizontal timeline still feels airy
- vertical timeline remains easy to scan

### Projects
- title and build statement do not overcrowd the card
- KPI strip remains legible
- analytical visuals remain the main evidence
- tags do not wrap awkwardly
- mobile cards remain comfortable without horizontal scrolling

Do not solve problems by shrinking visible text below the current readability floor.

---

# Acceptance criteria

Before completing this pass, verify:

- [ ] Experience retains the integrated proportional duration timeline
- [ ] each role gains exactly one concise focus line
- [ ] no Experience result metrics return
- [ ] no Experience pill tags are added on desktop
- [ ] no company locations are added
- [ ] no employer logos are added
- [ ] Project cards explicitly state what was built
- [ ] Project title/build context appears before the analytical preview
- [ ] current analytical visuals remain intact
- [ ] each project has no more than 3 useful tool/method tags
- [ ] tags do not repeat KPI/results
- [ ] Project copy is not materially more verbose than the current version
- [ ] Core / Systems / Education / Based remain unchanged
- [ ] Contact remains unchanged
- [ ] no Overview section is added
- [ ] no Focus section is added
- [ ] no Approach section is added
- [ ] no GitHub emphasis is added
- [ ] no Back to top control is added
- [ ] no new decorative visual system is introduced
- [ ] desktop/tablet/mobile remain readable

---

# Deliverables

Return:

1. updated source
2. full-page desktop render at ~1280px
3. close-up of the updated Experience timeline
4. close-up of both updated Project cards
5. full-page mobile render at ~390px
6. short change log
7. confirmation that all acceptance criteria were visually reviewed

Do not introduce any additional homepage redesign ideas in this pass.
