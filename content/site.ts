/**
 * Site data. All professional content lives here or in `content/work/*.mdx`.
 * Components render this data; they never hardcode it.
 *
 * Every fact below is traceable to content/source/. See docs/step1-content-audit.md.
 */

export const meta = {
  name: 'Esmail Arshad',
  positioning: 'Supply Chain, Operations & Analytics',
  proposition: 'I improve how products are planned, sourced, moved and measured.',
  title: 'Esmail Arshad | Supply Chain, Operations & Analytics',
  description:
    'Supply chain and operations professional spanning planning, procurement, logistics and analytics, with experience across industrial, technology and consumer operations.',
  resumePath: '/esmail-arshad-resume.pdf',
  ogImage: '/og.png',
} as const;

/**
 * One contextual line replaces the old company strip: every employer named here
 * carries the reason it is named. Do not repeat the same list elsewhere.
 */
export const hero = {
  eyebrow: 'SUPPLY CHAIN · OPERATIONS · ANALYTICS',
  headline: 'I improve how products are planned, sourced, moved and measured.',
  paragraph:
    'Supply chain and operations professional with 4+ years across Tesla, Amazon, Schneider Electric and Formlabs, spanning planning, sourcing, logistics, inventory and operational analytics. Today I run factory operations in Lahore.',
  capabilities: [
    'Supply Chain Planning',
    'Procurement & Sourcing',
    'Inventory Management',
    'Logistics & Fulfillment',
    'Operations & Process Improvement',
  ],
  tools: [
    { label: 'ERP', items: 'SAP, Oracle, NetSuite' },
    { label: 'Planning', items: 'Baxter, Netstock' },
    { label: 'Analytics', items: 'Excel, SQL, Tableau, Power BI' },
  ],
  /** `Lahore` is the anchor line; the rest is secondary. Rendered on separate
      lines rather than as one long inline string. */
  basedIn: 'Lahore, Pakistan',
  basedNote: 'Open to relocation across GCC, Europe & North America',
} as const;

/**
 * Reverse-chronological. Each role carries one line of scope and exactly one
 * metric — the single most impactful result, not a résumé dump.
 *
 * Tools are named inside the scope sentence (Baxter, SAP, Oracle, SQL,
 * BigQuery, Tableau, WMS, SAP ECC) rather than listed separately. They read as
 * natural prose where they are actually relevant, and still land as keywords,
 * without adding a third layer of chrome to every row.
 *
 * Each metric is the result its own scope line most directly supports, so
 * sentence and number stay coherent. Amazon's 8% and Cosmos's 95% appear
 * nowhere else on the site — their case studies cover different workstreams.
 *
 * Every sentence and figure traces to Esmail_Arshad_Resume.pdf.
 */
export const experience = [
  {
    company: 'Jannat & Sadaf',
    displayTitle: 'Operations Manager',
    dates: 'Jan 2026 – Present',
    start: '2026-01-01',
    end: null as string | null,
    scope:
      'Own production planning, sourcing and cost control across three made-to-order apparel lines.',
    metric: { value: '98.6%', label: 'on-time delivery' },
    slug: 'jannat-sadaf-production-scheduling',
  },
  {
    company: 'Schneider Electric',
    displayTitle: 'Supply Chain Planning Intern',
    dates: 'Feb 2025 – Dec 2025',
    start: '2025-02-01',
    end: '2025-12-01',
    scope:
      'Generated S&OE/S&OP forecasts in Baxter and ran daily exception management on high-risk orders across SAP and Oracle.',
    metric: { value: '30%', label: 'better on-time pickups' },
    slug: 'schneider-high-risk-order-control',
  },
  {
    company: 'Formlabs',
    displayTitle: 'Supply Chain Planning Intern',
    dates: 'Sep 2024 – Dec 2024',
    start: '2024-09-01',
    end: '2024-12-01',
    scope:
      'Built shortage and exception reporting in SQL and BigQuery across 300+ SLA and SLS components.',
    metric: { value: '20%', label: 'fewer late orders' },
    slug: 'formlabs-sls-cogs-automation',
  },
  {
    company: 'Tesla',
    displayTitle: 'Global Supply Chain Manager Intern',
    dates: 'May 2024 – Aug 2024',
    start: '2024-05-01',
    end: '2024-08-01',
    scope:
      'Should-costed top-level assembly tooling against machining, material and labour inputs to challenge supplier quotes.',
    metric: { value: '$150K', label: 'procurement savings' },
    slug: 'tesla-component-level-should-cost',
  },
  {
    company: 'TLS Technology',
    displayTitle: 'Supply Chain Operations Manager',
    dates: 'May 2023 – Nov 2023',
    start: '2023-05-01',
    end: '2023-11-01',
    scope:
      'Led a ten-person team building the importer-of-record, customs and compliance model for EMEA market entry.',
    metric: { value: '12%', label: 'EMEA market-share growth' },
    slug: 'tls-emea-expansion-operating-model',
  },
  {
    company: 'Amazon',
    displayTitle: 'Supply Chain Program Manager (Contract)',
    dates: 'Nov 2021 – Nov 2022',
    start: '2021-11-01',
    end: '2022-11-01',
    scope:
      'Ran root-cause analysis across ~100K weekly shipments in Tableau and Excel, and rebuilt lane-level freight pricing rules.',
    metric: { value: '8%', label: 'lower network cost' },
    slug: 'amazon-cost-anomaly-investigation',
  },
  {
    company: 'Cosmos Surfaces',
    displayTitle: 'Supply Chain Analyst',
    dates: 'Jan 2020 – Nov 2021',
    start: '2020-01-01',
    end: '2021-11-01',
    scope:
      'Integrated WMS with SAP ECC for real-time inventory accuracy and reworked dock scheduling with 3PL partners.',
    metric: { value: '95%', label: 'order fulfillment' },
    slug: 'cosmos-brown-fantasy-recovery',
  },
] as const;

/** §19 — first person, two sentences. */
export const about = {
  headshot: 'headshot.jpeg',
  headshotAlt: 'Esmail Arshad',
} as const;

/** Compact supporting block. GPA is deliberately not shown: it frames the
 *  page toward a graduate candidate when four years of case studies should be
 *  doing the selling. It remains on the résumé. */
export const education = {
  institution: 'Purdue University',
  degrees: [
    { degree: 'M.S. Engineering Management', year: '2025', detail: null },
    { degree: 'B.S. Industrial Engineering', year: '2019', detail: null },
  ],
  /**
   * Lean Six Sigma Green Belt is held but expired. Esmail's decision (2026-08-19)
   * is to omit it for now; see content/source/portfolio-facts.md. To reinstate,
   * add an entry here and it renders in its own line.
   */
  certifications: [] as { name: string; issuer: string | null }[],
} as const;

/**
 * §21 — GitHub is intentionally absent from Contact: the repository holds this
 * portfolio's own source rather than portfolio-relevant supply chain work.
 */
export const contact = {
  email: 'esmailshahid@gmail.com',
  linkedin: 'https://www.linkedin.com/in/esmailarshad/',
  linkedinLabel: 'linkedin.com/in/esmailarshad',
  github: null as string | null,
} as const;

/**
 * Retained as internal documentation only — deliberately NOT rendered on the
 * site. The standing rule still holds for authoring: employer work is written
 * without confidential internal detail, and client work is shown through
 * sanitized excerpts. Each client case-study page carries its own anonymity
 * note where it is actually relevant.
 */
export const confidentialityNote =
  'Employer work is summarized without confidential internal detail. Client work is shown through sanitized excerpts.';

/** Closing "Get in touch" section. */
export const contactSection = {
  heading: 'Get in touch',
  supporting:
    'For supply chain, planning, logistics or operations opportunities, email me or connect on LinkedIn.',
} as const;
