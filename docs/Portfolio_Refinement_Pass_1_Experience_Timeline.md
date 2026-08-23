# Portfolio Refinement — Pass 1: Rebuild the Experience Timeline for Readability

## Scope
This pass should change **only the Experience section and any supporting data/styles needed for it**.

Do not redesign the Hero, Projects, Contact, header, or case-study pages in this pass.

## Primary files
- `src/components/ExperienceTimeline.astro`
- `content/site.ts` only if a data field must be added or normalized
- `src/styles/global.css` only for reusable timeline styles if needed

---

# Objective

The current desktop Experience section has two disconnected layers:

1. a proportional year line with role-start dots
2. a separate 7-column text grid underneath

This is visually dense and forces the reader to mentally connect the dot above with the role below.

Replace this with **one integrated career timeline** that communicates:

- where I worked
- my role
- the exact month range
- approximate duration
- sequence between roles

The Experience section should **not** try to communicate detailed outcomes. The case studies already do that.

---

# 1. Remove the current desktop structure

Delete the current pattern of:

- one date band at the top
- one dot per role
- a separate evenly spaced `grid-cols-7` role row underneath

Do not preserve the seven-column role grid.

Do not use evenly spaced role cards.

---

# 2. Remove metrics and arrows from the homepage Experience section

Do not display role results such as:

- `$150K procurement savings`
- `~$360K exposure identified`
- `98.6% on-time delivery`
- `30% improvement in on-time pickups`

Do not display `→` after every role.

These results remain available in the linked case studies.

The homepage Experience section should answer:

> Where did Esmail work, in what role, and when?

The Projects / case-study pages answer:

> What did he accomplish?

If a role has a case study, make the role annotation and/or duration span clickable with a subtle hover/focus state.

---

# 3. Build a single integrated semi-proportional timeline

## Desktop visual concept

Create one horizontal chronological axis from **2020 to the present**.

Use:

- one thin neutral horizontal axis
- small year markers
- a subtle duration span for each role
- annotation blocks connected directly to their spans
- alternating annotations above and below the axis where necessary
- no card borders around each employer
- no colored background blocks
- no rainbow colors
- no dense paragraph copy

The visual should resemble a restrained annual-report / editorial timeline, not a project-management Gantt chart.

## Duration behavior

Use the existing `start` and `end` fields in `content/site.ts`.

For roles with an `end` date:
- calculate start position from `start`
- calculate span length from `start` to `end`

For the current role where `end === null`:
- extend the span from its start date to the current month
- label the text as `Jan 2026 – Present`

Years can be evenly distributed on the axis, but role spans should begin at approximately the correct month within the year and should approximately represent duration.

Very short roles may use a sensible minimum visual width so they remain visible.

The **printed month range is authoritative**. The bar is a supporting cue.

---

# 4. Exact chronology to display

Use the existing source-of-truth dates from `content/site.ts`.

### Cosmos Surfaces
**Jan 2020 – Nov 2021**  
Supply Chain Analyst

### Amazon
**Nov 2021 – Nov 2022**  
Supply Chain Program Manager (Contract)

### TLS Technology
**May 2023 – Nov 2023**  
Supply Chain Operations Manager

### Tesla
**May 2024 – Aug 2024**  
Global Supply Chain Manager Intern

### Formlabs
**Sep 2024 – Dec 2024**  
Supply Chain Planning Intern

### Schneider Electric
**Feb 2025 – Dec 2025**  
Supply Chain Planning Intern

### Jannat & Sadaf
**Jan 2026 – Present**  
Operations Manager

Do not reduce Tesla and Formlabs to two generic `2024` entries.

The reader must be able to see the **May–Aug → Sep–Dec** progression immediately.

---

# 5. Annotation hierarchy

Each role annotation should contain only:

1. **Company name**
2. Role title
3. Exact month range

Recommended hierarchy:

- Company: strongest, 14–15px, medium/semibold
- Role: secondary, approximately 12.5–13.5px
- Date: tertiary but readable, approximately 12px
- Do not go below 12px for visible timeline information

Avoid long line lengths.

Where a title is long, allow a natural two-line wrap instead of shrinking the type.

---

# 6. Collision handling

The timeline must be manually/algorithmically laid out so text never collides.

Requirements:

- alternate entries above and below the axis where useful
- use separate lanes for roles that occur close together
- Tesla and Formlabs must not overlap
- Cosmos and Amazon meet in Nov 2021; show the handoff faithfully without inventing a large gap
- Jannat & Sadaf should have a subtle visual indication that the role is ongoing
- keep connector lines short and quiet

If a perfectly proportional placement produces unreadable labels, prioritize readable annotations while preserving the correct chronological relationship.

---

# 7. Color and styling

Use the existing portfolio palette.

- axis: neutral rule color
- historical role spans: muted blue-gray / slate
- current role: slightly stronger slate
- company text: primary ink
- role/date: muted ink

Do not assign different colors to employers.

Do not use company logos in the timeline in this pass.

---

# 8. Mobile and tablet structure

The desktop horizontal timeline should **not** be forced onto narrow screens.

## Tablet
If the integrated horizontal version becomes crowded:
- switch to a simplified vertical timeline rather than shrinking text excessively

## Mobile
Use a compact vertical chronological timeline.

Each mobile item:

**Company**  
Role title  
`Exact month range`

No result metric.  
No arrow label.  
The whole item can link to the case study.

Do not use horizontal scrolling for the timeline.

---

# 9. Remove the redundant location sentence

Remove:

> Roles in the United States and Pakistan.

It adds another line without helping the timeline answer the core question.

---

# Acceptance criteria

Before completing this pass, verify:

- [ ] no 7-column desktop role grid remains
- [ ] no result metrics appear in Experience
- [ ] no repeated `→` arrows appear in Experience
- [ ] role duration is encoded visually, not just start-date dots
- [ ] Tesla and Formlabs are clearly distinguished within 2024
- [ ] exact month ranges are readable
- [ ] no visible timeline text is smaller than 12px
- [ ] no annotation collisions at approximately 1280px
- [ ] mobile uses a vertical timeline with no horizontal scrolling
- [ ] case-study links remain accessible via the role annotation/span
- [ ] the section is visibly less dense than the current implementation

## Deliverable
Return:
1. updated source
2. desktop render of the Experience section at ~1280px
3. mobile render of the Experience section at ~390px

Do not continue into the other homepage sections yet.
