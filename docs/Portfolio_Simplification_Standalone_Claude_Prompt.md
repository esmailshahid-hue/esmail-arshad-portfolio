# Portfolio Simplification Brief for Claude Design / Claude Code

## Objective

Redesign the portfolio homepage so it is significantly shorter, simpler, and faster for recruiters to scan.

The current site is visually polished, but it feels over-designed and too long because the homepage tries to do too many things at once:
- act as a project portfolio;
- showcase employer case studies;
- explain a personal working philosophy;
- summarize professional experience;
- present contact and education information.

The revised homepage should focus on only four substantive sections:

1. **Projects**
2. **About**
3. **Professional Experience**
4. **Contact**

A compact introductory hero should sit above these sections.

The site should remain minimalist, editorial, professional, and quiet. Do not add new decorative content. The next pass should primarily remove and consolidate.

---

# 1. Final Homepage Structure

Use this as the target homepage structure:

```text
────────────────────────────────────────────
Esmail Arshad

Projects    About    Experience    Contact      Résumé ↗
────────────────────────────────────────────


INTRO / HERO
Hi, I’m Esmail.

Supply chain and operations professional with 4+ years
across planning, sourcing, logistics, inventory and
process improvement.

[headshot]

Based in Lahore · Open internationally
────────────────────────────────────────────


PROJECTS

[ LARGE PROJECT CARD ]   [ LARGE PROJECT CARD ]

Demand & Inventory       Freight Spend &
Planning                 Vendor Cost Analysis

dashboard image          dashboard image

short title              short title
3 scope facts            3 scope facts
View project →           View project →
────────────────────────────────────────────


ABOUT

~100 words

Planning · Inventory · Procurement & Sourcing
Logistics · Operations · Analytics

SAP · Oracle · NetSuite · Excel · SQL · Tableau · Power BI

Purdue University
M.S. Engineering Management, 2025
B.S. Industrial Engineering, 2019
────────────────────────────────────────────


PROFESSIONAL EXPERIENCE

2026–Now   Jannat & Sadaf
           Operations Manager
           98.6% on-time delivery                  Case study →

2025       Schneider Electric
           Supply Chain Planning Intern
           30% improvement in on-time pickups      Case study →

2024       Formlabs
           Supply Chain Planning Intern
           80% reduction in manual reporting       Case study →

2024       Tesla
           Global Supply Chain Manager Intern
           $150K procurement savings               Case study →

2023       TLS Technology
           Supply Chain Operations Manager
           12% EMEA market-share growth            Case study →

2021–22    Amazon
           Supply Chain Program Manager (Contract)
           ~$360K financial exposure identified    Case study →

2020–21    Cosmos Surfaces
           Supply Chain Analyst
           95% fulfillment                         Case study →
────────────────────────────────────────────


CONTACT

Email
LinkedIn
Résumé
Location / mobility
────────────────────────────────────────────

tiny confidentiality disclosure
```

---

# 2. Navigation

Use exactly:

```text
Projects · About · Experience · Contact          Résumé ↗
```

`Esmail Arshad` on the left should link back to `/`.

Do not use:
- Work
- Case Studies
- How I Work
- Career

Reason:
- `Projects`, `About`, `Experience`, and `Contact` directly match visible homepage sections.
- `Work` is ambiguous because it could mean projects, employment, or case studies.
- `Career` overlaps with `Experience`.
- `How I Work` is vague and unnecessary.

Treat **Résumé** as a utility action rather than a content section.

It can have slightly different styling, but should not look like a large CTA button.

---

# 3. Hero / Intro

## Goal

The hero should communicate:
- who Esmail is;
- his professional domain;
- breadth of experience;
- current location / mobility.

It should not function as a résumé summary or philosophy statement.

## Remove

Remove:
- `SUPPLY CHAIN · OPERATIONS · ANALYTICS`
- `See the work`
- `How I work`
- any second paragraph explaining what “the work below” represents
- education beneath the headshot
- employer/system keyword rails
- large CTA buttons
- generic philosophy copy

## Suggested copy direction

### Heading

```text
Hi, I’m Esmail.
```

### Positioning

```text
I’m a supply chain and operations professional with 4+ years of experience across planning, sourcing, logistics, inventory and process improvement.
```

### Optional second line

```text
My background includes Tesla, Amazon, Schneider Electric, Formlabs and hands-on operations management in Pakistan.
```

### Mobility line

```text
Based in Lahore · Open to UAE, Saudi Arabia and broader international opportunities
```

Avoid phrases such as:
- structured problem-solving;
- operational discipline;
- data-driven decision-making;
- work that survives contact with the floor;
- the intersection of analytics and execution.

Keep the language plain and natural.

## Headshot

Keep the headshot in the hero.

Desktop:
- place it on the right;
- approximately 240–300px wide;
- simple crop;
- no caption.

Mobile:
- text first;
- portrait second.

Do not place the portrait before the intro on small screens.

## Height target

Aim for:

```text
400–500px desktop
```

The first screen should feel concise rather than cinematic.

---

# 4. Projects Section

## Purpose

This should be the main visual proof section on the homepage.

There are currently two completed analytical projects with inspectable deliverables:

1. **Demand & Inventory Planning**
2. **Freight Spend & Vendor Cost Analysis**

These should be the only items in the homepage Projects section.

Do not mix employer case studies into this section.

## Heading

Use simply:

```text
Projects
```

Do not use:
- Selected Work
- Client Work
- Independent Client Work
- A Few Problems I’ve Worked On

The section label should be literal.

---

# 5. Project Card Design

Use two equal-width project cards side-by-side on desktop.

Each card should include only:

- project discipline/name;
- large sanitized artifact image;
- short case title;
- one compact scope line;
- `View project →`.

Do not include:
- multiple paragraphs;
- multi-row stat grids;
- methodology previews;
- many tags;
- multiple CTAs.

Mobile:
- stack cards vertically;
- keep images readable.

---

## 5.1 Demand & Inventory Planning

Suggested homepage structure:

```text
Demand & Inventory Planning

[large readable dashboard crop]

Matching forecast methods to SKU demand behavior

24 SKUs · 18 months of demand · 15 at/below reorder point

View project →
```

The image should be a deliberate crop of the strongest evidence, for example:
- demand chart;
- risk status;
- key KPIs.

Do not show the entire workbook at a scale where labels are unreadable.

---

## 5.2 Freight Spend & Vendor Cost Analysis

Suggested homepage structure:

```text
Freight Spend & Vendor Cost Analysis

[large readable dashboard crop]

Turning freight invoice data into a review queue

421 invoice lines · 11 vendors · ~$695K reviewed spend

View project →
```

Again, use a readable crop rather than the entire dashboard screenshot at small scale.

---

# 6. About Section

## Purpose

About should quickly explain:
- what kind of professional Esmail is;
- his main functional skill set;
- tools/systems;
- education;
- target professional direction.

Do not create a separate `How I Work` or philosophy section.

## Length

Target:

```text
80–120 words
```

## Suggested copy

```text
I’m a supply chain and operations professional with 4+ years of experience across planning, logistics, inventory, sourcing and process improvement.

My background includes global companies such as Tesla, Amazon, Schneider Electric and Formlabs, along with hands-on operations management in Pakistan. I’m particularly interested in supply chain program management, planning, logistics and operations roles where better processes and better use of data improve day-to-day execution.
```

Keep it direct and human.

---

## 6.1 Core Skills

Render as one simple text line:

```text
Planning · Inventory · Procurement & Sourcing · Logistics · Operations · Analytics
```

Do not use:
- skill cards;
- chips;
- progress bars;
- proficiency ratings;
- icon grids.

---

## 6.2 Systems

Use one compact line:

```text
SAP · Oracle · NetSuite · Excel · SQL · Tableau · Power BI
```

Do not turn this into a separate Tools section.

---

## 6.3 Education

Place education within About rather than as a separate homepage section.

Use:

```text
Purdue University
M.S. Engineering Management, 2025
B.S. Industrial Engineering, 2019
```

Do not show GPA on the portfolio.

---

# 7. Remove the Standalone Homepage Case Studies Section

Delete the current homepage section that presents employer cases such as:
- Jannat & Sadaf
- Amazon
- Tesla
- TLS Technology
- Schneider Electric
- Formlabs
- Cosmos Surfaces

Do not merely reduce card size.

Remove the section as a separate homepage content category.

Reason:
- it duplicates Professional Experience;
- it makes the page too long;
- it forces recruiters to process employer stories before seeing career chronology;
- the diagrams do not have enough context at homepage size.

Employer case studies should remain available through Professional Experience.

---

# 8. Remove Homepage Mini-Diagrams

Remove all employer mini-diagrams from the homepage.

Examples:
- J&S before/after bars;
- Amazon narrowing funnel;
- Tesla line/station/equipment/component hierarchy;
- TLS market-entry sequence.

These diagrams should remain only on the dedicated case-study pages, where:
- the problem is already explained;
- the diagram can be larger;
- labels are readable;
- the visual has context.

Homepage rule:

```text
Homepage = invitation
Case-study page = explanation
```

Do not use diagrams decoratively just to make employer cards feel visual.

---

# 9. Remove “How I Work”

Delete the entire `How I Work` section.

Also remove:
- `Analysis that survives contact with the floor`
- Plan / Source & Move / Measure framework
- paragraphs explaining personal working philosophy

Do not rewrite this section.

The Projects and Experience sections should demonstrate how Esmail works without requiring a separate explanatory layer.

Any useful content can be absorbed into About.

---

# 10. Professional Experience

## Purpose

This section should replace:
- the current horizontal career rail;
- the employer case-study grid on the homepage.

It should be the primary professional-history section.

A recruiter should be able to scan:
1. date;
2. company;
3. role;
4. one selected accomplishment;
5. optional case-study link.

## Layout

Use a dense vertical list.

Example:

```text
2026–Now     Jannat & Sadaf
             Operations Manager
             98.6% on-time delivery                 Case study →
```

Use thin horizontal rules between roles.

Do not use:
- timeline dots;
- vertical rails;
- logos;
- large experience cards;
- mini diagrams;
- tooltips;
- multiple résumé bullets;
- expandable panels by default.

The section should feel like an editorial career index.

---

# 11. Professional Experience Content

Each role should contain no more than:

```text
Date
Company
Role
One selected result
Case study →
```

Do not reproduce full résumé bullets.

Use one strong result only.

## Recommended initial content

### Jannat & Sadaf

```text
2026–Now
Jannat & Sadaf
Operations Manager
98.6% on-time delivery
Case study →
```

### Schneider Electric

```text
2025
Schneider Electric
Supply Chain Planning Intern
30% improvement in on-time pickups
Case study →
```

### Formlabs

```text
2024
Formlabs
Supply Chain Planning Intern
80% reduction in manual SLS cost reporting
Case study →
```

### Tesla

```text
2024
Tesla
Global Supply Chain Manager Intern
$150K procurement savings
Case study →
```

### TLS Technology

```text
2023
TLS Technology
Supply Chain Operations Manager
12% EMEA market-share growth
Case study →
```

### Amazon

```text
2021–2022
Amazon
Supply Chain Program Manager (Contract)
~$360K financial exposure identified
Case study →
```

### Cosmos Surfaces

```text
2020–2021
Cosmos Surfaces
Supply Chain Analyst
95% fulfillment
Case study →
```

Before implementation, verify every role title and metric against:
- the canonical public résumé;
- approved public case-study content.

Do not substitute older résumé variants.

---

# 12. Employer Case Studies

Keep the detailed employer case-study pages.

The recommendation is to remove the **homepage case-study section**, not the actual case studies.

Use:

```text
Experience row
↓
Case study →
↓
dedicated case-study page
```

Do not use hover tooltips for case-study summaries.

Reasons:
- poor mobile behavior;
- weak discoverability;
- accessibility complexity;
- important accomplishments become hidden.

A visible `Case study →` link is sufficient.

---

# 13. Employer Case-Study Page Structure

Keep the existing stronger pattern:

```text
Company · Role · Period

Problem-led title

Short summary

3 proof facts

Main diagram

Challenge

What I did

Decision

Outcome
```

Detailed diagrams belong here.

Examples:
- Tesla hierarchy;
- Amazon narrowing funnel;
- J&S scheduling before/after;
- TLS market-entry operating model;
- Schneider exception-management loop.

Do not place these visuals back on the homepage.

---

# 14. Project Detail Pages

Use dedicated pages for the two completed analytical projects.

Conceptual routes:

```text
/projects/inventory-planning/
/projects/freight-spend-analysis/
```

Suggested project-page structure:

```text
Project title
Short problem statement
Scope facts

Primary sanitized dashboard

Challenge
Approach / What I did
Decision / method choice
Key findings

One secondary artifact

Limitations
```

These pages can be slightly deeper than employer case studies because the analytical artifacts are inspectable.

Do not include every workbook screenshot simply because it exists.

---

# 15. Site Architecture

Use this conceptual structure:

```text
/
  homepage

/projects/inventory-planning/
/projects/freight-spend-analysis/

/case-studies/jannat-sadaf-production-scheduling/
/case-studies/schneider-high-risk-order-control/
/case-studies/formlabs-sls-cogs-automation/
/case-studies/tesla-component-level-should-cost/
/case-studies/tls-emea-expansion-operating-model/
/case-studies/amazon-cost-anomaly-investigation/
/case-studies/cosmos-brown-fantasy-recovery/
```

## Important

Do not rename existing `/work/...` routes solely for cosmetic reasons if that creates technical risk.

It is acceptable to:
- keep existing `/work/...` URLs internally;
- change visible labels/navigation;
- add redirects later if route cleanup is worthwhile.

Information architecture matters more than URL naming.

---

# 16. No Primary Case Studies Archive in Navigation

Do not place a `Case Studies` or `Work` index in the primary navbar.

Employer case studies can be accessed contextually from Experience.

If the current `/work/` archive remains:
- it may stay accessible;
- it should not be a primary navigation destination;
- the homepage should not depend on it.

This can be revisited later if the portfolio grows materially.

---

# 17. Contact Section

## Heading

Use simply:

```text
Contact
```

Do not use:
- `Hiring for planning, sourcing, logistics or operations analytics?`
- sales-oriented CTA copy;
- long introductory paragraphs.

## Content

Use:

```text
Email
esmailshahid@gmail.com

LinkedIn
linkedin.com/in/esmailarshad

Résumé
Download PDF

Based in Lahore
Open to UAE, Saudi Arabia and broader international opportunities
```

The current dark background can remain if it creates a clean visual endpoint.

Reduce section height.

The section should be useful, not promotional.

---

# 18. Footer Disclosure

Keep the confidentiality disclosure but make it visually quiet.

Suggested text:

```text
Employer work is summarized without confidential internal detail. Client work is shown through sanitized excerpts.
```

Use:
- 10–11px text;
- muted color;
- minimal spacing.

Do not make confidentiality the dominant final message.

---

# 19. Visual Direction

Preserve the existing visual identity:

- warm off-white background;
- charcoal type;
- muted slate accent;
- Source Serif 4 for display headings;
- Inter for body text;
- thin rules;
- restrained border radius;
- existing dark mode.

Do not introduce:
- gradients;
- colorful icons;
- stock photography;
- logo walls;
- dashboard-like UI chrome;
- pill-heavy tag systems;
- animated diagrams;
- giant metric blocks;
- decorative charts.

Desired feel:

```text
minimal
editorial
professional
quiet
credible
```

---

# 20. Page-Length Target

Do not solve the long-page problem only by reducing padding.

Remove redundant sections first.

Suggested desktop content budget:

```text
Header                    60–70px
Hero                     400–500px
Projects                  600–750px
About                     300–400px
Professional Experience  650–800px
Contact + footer          250–350px
```

Approximate target homepage length:

```text
2,300–2,800px desktop
```

The recruiter should not feel like they are scrolling through an endless narrative.

---

# 21. Copy Voice

Use:
- first person;
- plain language;
- short sentences;
- literal headings;
- concrete numbers;
- supply-chain-native terminology.

Avoid:
- philosophical framing;
- polished editorial slogans;
- AI-sounding summary language;
- marketing CTAs.

Remove phrases such as:

```text
Analysis that survives contact with the floor
Five problems, and what I did with them
The work below is the part that matters
Finding the one number nobody was looking at
See the work
How I work
```

Prefer:

```text
Projects
About
Professional Experience
Contact
View project →
Case study →
```

---

# 22. Mobile Behavior

Mobile order:

```text
Header
Hero copy
Headshot
Projects
About
Professional Experience
Contact
```

Requirements:
- project cards stack;
- experience remains a vertical list;
- no hover-dependent interactions;
- Résumé remains visible in mobile navigation;
- no tooltip-only content;
- images remain large enough to understand.

---

# 23. What Should Stay from the Current Build

Preserve:
- current typography;
- current palette;
- headshot near the top;
- sanitized client dashboard crops;
- existing detailed case-study pages;
- native HTML employer diagrams on case pages;
- dark mode;
- accessibility work;
- sanitized analytical evidence.

Do not discard the technically strong case-study implementation.

This is mainly a homepage simplification and hierarchy redesign.

---

# 24. Acceptance Criteria

The redesign is successful if:

## In the first 10 seconds
A recruiter understands:
- supply chain / operations;
- 4+ years of experience;
- planning, sourcing, logistics and inventory breadth;
- recognizable employer experience.

## In the first scroll
The recruiter sees the two real analytical projects.

## In About
The recruiter understands:
- core skills;
- systems;
- education;
- target direction.

## In Experience
The recruiter can scan all seven roles quickly and see one meaningful result for each.

## For deeper proof
A recruiter can open a case study if interested, but is never forced to read employer stories on the homepage.

## Overall
The homepage should feel like:

```text
professional portfolio
+
career overview
```

not:

```text
résumé
+
case-study archive
+
personal manifesto
```

---

# 25. Final Directive

The next pass should remove complexity rather than add more design.

Core instruction:

> Build the homepage around four literal sections: Projects, About, Professional Experience and Contact. Use the two completed analytical projects as the primary visual proof. Move employer case studies out of the homepage and link to them from the relevant Experience rows. Remove mini-diagrams, How I Work, marketing CTAs, duplicate education, and redundant career storytelling. Preserve the current understated visual identity, but make the homepage substantially shorter, quieter, and faster to scan.
