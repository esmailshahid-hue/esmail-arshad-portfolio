import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * One shared schema for every work item (§25). Operating case studies and client
 * projects differ only in `type` and which optional fields they populate — empty
 * optional fields disappear cleanly rather than rendering an empty section.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './content/work' }),
  schema: z.object({
    type: z.enum(['operating-case-study', 'client-project', 'tool']),
    title: z.string(),
    organization: z.string(),
    displayTitle: z.string().optional(),
    roleFocus: z.string(),
    timeframe: z.string(),
    summary: z.string(),
    capabilities: z.array(z.string()).min(1),
    tools: z.array(z.string()).default([]),

    /**
     * External destinations for entries that have a public artefact of their own
     * — a live tool, a repository. Case studies leave this empty and nothing
     * renders. Kept structured rather than hardcoded in MDX so the template
     * controls the wording and the link treatment.
     */
    links: z
      .object({
        live: z.string().url().optional(),
        github: z.string().url().optional(),
      })
      .optional(),

    /** Scope = size of the environment or analysis (§16). Never an outcome. */
    scope: z.array(z.string()).default([]),

    /**
     * Career case studies open with exactly three facts, not a metric band:
     * the signal, the work, and what it came to. Each is one label + one fact.
     * These figures are not repeated in large treatments further down the page.
     */
    atAGlance: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          note: z.string(),
        })
      )
      .length(3)
      .optional(),

    /**
     * The single principal result (§12). Required in practice for case studies,
     * which is every entry that reaches a card. Optional at the schema level so
     * a tool — which has a product, not a result — is not forced to invent one.
     */
    headlineOutcome: z
      .object({
        value: z.string(),
        label: z.string(),
        /** 'outcome' = the work changed it. 'finding' = the analysis identified it. */
        kind: z.enum(['outcome', 'finding']),
      })
      .optional(),




    /**
     * A native diagram, rendered from this data as real text in the page's own
     * type and colour. Never an imported infographic: a picture of a paragraph
     * cannot be selected, searched, translated or read aloud, and it does not
     * reflow on a phone. Only added where the shape carries something the prose
     * cannot — a narrowing search, a split of material — and every figure shown
     * is one the case study states in words as well.
     */
    diagram: z
      .object({
        kind: z.enum(['narrowing', 'recovery', 'hierarchy', 'sequence', 'compare']),
        caption: z.string(),
        /** `narrowing`: each step of the search, widest first.
         *  `sequence`: each stage of a process, in order. */
        steps: z
          .array(z.object({ label: z.string(), note: z.string() }))
          .default([]),
        /** `hierarchy`: each level of a decomposition. `fan` describes the
         *  branching into that level, which is usually the reason the diagram
         *  exists at all. */
        levels: z
          .array(
            z.object({ label: z.string(), note: z.string(), fan: z.string().optional() })
          )
          .default([]),
        /** `compare`: the contrast the case study turns on. */
        compare: z
          .object({
            before: z.object({
              label: z.string(),
              caption: z.string().optional(),
              items: z.array(z.string()).min(2),
            }),
            after: z.object({
              label: z.string(),
              caption: z.string().optional(),
              items: z.array(z.string()).min(2),
            }),
          })
          .optional(),
        /** `sequence`: stages grouped into phases, rendered side by side so a
         *  loop reads as a loop rather than a long column. Numbering runs
         *  continuously across phases. */
        phases: z
          .array(
            z.object({
              label: z.string(),
              steps: z.array(z.object({ label: z.string(), note: z.string() })).min(2),
            })
          )
          .default([]),
        /** `sequence`: what the process produces, and what makes it recur. */
        outcome: z.string().optional(),
        repeats: z.string().optional(),
        /** `recovery`: one quantity divided into parts. Percentages must total 100. */
        split: z
          .object({
            label: z.string(),
            parts: z.array(
              z.object({
                pct: z.number().min(1).max(99),
                value: z.string(),
                label: z.string(),
                muted: z.boolean().default(false),
              })
            ),
          })
          .optional(),
        /** `recovery`: the sources that were combined, and what they produced. */
        combine: z
          .object({ sources: z.array(z.string()).min(2), output: z.string() })
          .optional(),
      })
      .optional(),

    /**
     * A miniature of the case's shape, for the homepage card only. Without it
     * the cards are text links, which is most of why the homepage read as a
     * résumé. Deliberately not the full diagram shrunk down — that has far too
     * much text to survive at card size.
     */
    preview: z
      .discriminatedUnion('kind', [
        z.object({ kind: z.literal('chain'), steps: z.array(z.string()).min(3).max(4) }),
        z.object({ kind: z.literal('contrast'), from: z.string(), to: z.string() }),
      ])
      .optional(),

    rightsStatus: z.enum(['own-work', 'sanitized-recreation']).default('own-work'),

    /** Client-project artefacts. `downloadable` is never true — see §0.3. */
    images: z
      .array(
        z.object({
          file: z.string(),
          sheet: z.string(),
          alt: z.string(),
          caption: z.string(),
          /** Leads the page, and supplies the card thumbnail. One per project. */
          primary: z.boolean().default(false),
          /** Card-thumbnail crop, as a zoom factor and an offset in percent of
           *  the container. A full dashboard scaled to card width is an
           *  unreadable block; this zooms into the part worth seeing. */
          thumb: z
            .object({ zoom: z.number().min(1).max(4), x: z.number(), y: z.number() })
            .optional(),
        })
      )
      .default([]),

    featured: z.boolean().default(false),
    published: z.boolean().default(false),
    draft: z.boolean().default(true),
    order: z.number().default(99),

    /** Private provenance (§17). Never rendered publicly. */
    evidence: z
      .array(z.object({ claim: z.string(), source: z.string() }))
      .default([]),

    /** Specific questions blocking publication (§13). Never rendered publicly. */
    openQuestions: z.array(z.string()).default([]),
  }),
});

export const collections = { work };
