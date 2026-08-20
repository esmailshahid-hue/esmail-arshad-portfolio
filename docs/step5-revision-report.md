# Revision — v2
Esmail Arshad Portfolio · 2026-08-20

Response to `Esmail_Portfolio_Revision_Suggestions_Claude_Code.md`. Each recommendation was
assessed against the live site before any change. Measurements are at 1440×900.

---

## Measured result

| | Before | After | |
|---|---|---|---|
| Homepage height | 7,111px (7.9 screens) | **2,969px (3.3 screens)** | −58% |
| "Amazon" on homepage | 7× | **3×** | |
| "Jannat & Sadaf" | 7× | **3×** | |
| "Tesla" | 6× | **3×** | |
| "Anonymized Client Project" | 6× | **0×** | label replaced |
| Each headline metric | 3× | **1×** | |
| Metrics before prose (client pages) | 5 in a band | **1, in a summary row** | |
| Live work pages | 2 of 6 | **6 of 6** | |
| Employer case-study length | 362–395 words | 223–265 words | −33% |
| Client project length | 734 / 858 words | 350 / 437 words | −52% / −49% |

The three remaining name mentions each do a different job: the hero context line (what he did
there), the work card (whose work it is), the experience row (when). No mention is redundant.

---

## Recommendations applied

**§1 Writing standard.** All seven flagged phrases removed. Three deeper patterns also cut:

- The *"X is not Y. It is Z"* rhetorical reversal, which appeared eight times. It now appears once.
- The aphoristic closing line on nearly every section ("…which is the whole difference between a
  supply risk and a late order").
- Explaining supply chain basics to a supply chain reader — "Made-to-order work has no
  finished-goods buffer", "You cannot review spend you cannot group", and a full paragraph on why
  moving averages fail on intermittent demand.

**§3.1** Proof-metric strip removed. Each figure now appears once, on its own card, with context.

**§3.2** Company strip removed. Replaced by one hero line where every employer carries its reason:
*"NPI sourcing at Tesla, freight pricing at Amazon, supply planning at Schneider Electric,
supply-risk analytics at Formlabs, and operations leadership now at Jannat & Sadaf."*

**§3.3** Capability section (907px) removed. Replaced by two lines in the hero — disciplines and
systems. The capability taxonomy stays in frontmatter as metadata. The cross-links it carried
("See: Formlabs, Jannat & Sadaf, Anonymized Client Project") were the single largest source of
name repetition and listed the same client project twice without distinguishing them.

**§3.6** Portfolio-explanation copy removed. The card designs now carry the distinction.

**§3.7** "Anonymized Client Project" replaced with **Client work · Freight analytics** and
**Client work · Inventory planning**. Disclosure moved to a footnote at the end of each page.

**§4.1 / §4.2** Employer and client cards are now separate components. Employer cards are compact
and lead with the result. Client cards lead with the dashboard image, since the artifact is the
argument. Cropping is done in CSS against the original file, so the evidence image stays a single
source of truth and no derivative was created.

**§5.1** Metric band replaced with a three-item summary row: scope, tools, and the single result
or finding.

**§5.3 / §5.4** Employer pages cut to Context → Problem → What I did → Result → Related work.
Client pages cut to Problem → Method → What it surfaced → Limitations, with the primary dashboard
leading the page and the two supporting sheets below in a two-up grid.

**§7** Experience compressed from 1,318px to ~380px — a dense seven-row list, achievement
paragraphs removed.

**§8** About, Education and Contact combined into one 297px block, replacing three sections
totalling 1,666px. About is two sentences.

**§9** Section padding reduced, eyebrow labels dropped, and density now varies by section: open
hero, editorial work grid, dense experience list, compact closing block.

---

## Recommendations not applied, and why

**§3.4 — feature four items, move the rest to a `/work/` index.** Not applied. With six items an
index page is thin, and it puts a third of the work behind an extra click. The homepage length
problem was better solved by cutting the proof strip, company strip and capability section, which
together cost roughly 1,200px and carried most of the repetition. All six now fit in 999px.

**§6.2 — method diagrams.** Applied in a reduced form. A boxed flowchart would read as decoration
on a site that otherwise avoids it, so employer pages carry a plain typographic line instead —
`Machining + Material + Labour → Should-cost benchmark → Quote gap → negotiation levers`. It gives
the employer pages a visual anchor without imitating an internal system (§23).

**§11–12 — reference portfolios.** Worked from the principles the doc extracted rather than
browsing the eight sites. The binding constraint here was design judgment, not more examples.

---

## The structural decision: publishing all six pages

**§3.5** says an unfinished case study should be either finished and clickable, or hidden. Agreed —
four non-clickable cards was the weakest thing about v1.

The resolution was to **publish all four employer case studies now**, which required no invented
facts. §5.3's own recommended structure — Context, Problem, What I did, Result — makes the
trade-off section optional, and nearly all 13 open questions ask for either decision detail or
measurement windows that the résumés never state. Written to that structure, every sentence traces
to a named résumé bullet, no TODO remains, and the §14 publication gate is satisfied honestly.

Specifically, the headline results are published exactly as the sources state them — "$150K in
procurement savings", "8% network cost reduction", "20% fewer late orders" — without implying a
measurement window or baseline that no source provides.

**The 13 questions are now enrichment, not blockers.** Answering them adds a decision/trade-off
section to each page, which is the one thing these case studies still lack and the thing that most
separates a case study from a résumé bullet.

---

## Verification

- `npm run build`: 7 pages, zero errors. `astro check`: 0 errors, 0 warnings, 0 hints.
- No `TODO` in `dist/`. No private source material in `dist/`. No download UI.
- All 10 routes and assets return 200.
- No horizontal page scroll at 1440 / 1280 / 768 / 375. Wide sheets scroll inside their own
  containers.
- Zero client JavaScript. All images have alt text. WCAG AA contrast holds (4.92:1 lowest).
- Heading order valid, `lang="en"`, skip link present.

---

## Unchanged

Every published figure still traces to its source, and the three corrections from the first build
hold: **432 demand records** (not 500), the corrected MTO wording, and 16x revenue growth presented
as the condition the 98.6% was achieved under rather than as a delivered outcome. The `evidence`
frontmatter remains complete and private on all six pages.
