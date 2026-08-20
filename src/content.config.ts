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

    /** Scope = size of the environment or analysis (§16). Never an outcome. */
    scope: z.array(z.string()).default([]),

    /** The single principal result (§12). */
    headlineOutcome: z.object({
      value: z.string(),
      label: z.string(),
      /** 'outcome' = the work changed it. 'finding' = the analysis identified it. */
      kind: z.enum(['outcome', 'finding']),
    }),

    /**
     * Supporting metrics from the same workstream only (§12). Kept in the schema
     * but deliberately unused on the current pages: figures read better inside
     * the prose, where they carry context, than stacked in a metric band.
     */
    supportingMetrics: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
          kind: z.enum(['outcome', 'scope', 'finding']),
        })
      )
      .default([]),

    /**
     * One sentence naming the judgment the project turned on. Rendered as a
     * pull quote on client-project pages. Omit where there is no such call.
     */
    keyDecision: z.string().optional(),

    /**
     * A plain inputs -> output -> result line, used where an employer case study
     * has no artifact to show. Explanatory only: never a recreation of an
     * internal system (§23).
     */
    method: z
      .object({
        inputs: z.array(z.string()).min(2),
        output: z.string(),
        result: z.string(),
      })
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
