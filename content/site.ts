/**
 * Site data. All professional content lives here or in `content/work/*.mdx`.
 * Components render this data; they never hardcode it.
 *
 * Every fact below is traceable to content/source/.
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

/** Reverse-chronological career history. Summaries describe operating scope;
 * compact metrics carry the quantitative evidence separately. */
export const experience = [
  {
    company: 'Jannat & Sadaf',
    displayTitle: 'Operations Manager',
    dates: 'Jan 2026 – Present',
    location: 'Lahore, Pakistan',
    start: '2026-01-01',
    end: null as string | null,
    scope:
      'Own end-to-end production and supply operations for a made-to-order apparel business, spanning order scheduling, capacity planning, sourcing, material procurement, cost control, and fulfillment across Pret, Formal, and Wedding lines.',
    metrics: [
      '98.6% on-time delivery',
      '93.5% spend traceability',
      '↓25% fabric cost',
    ],
    slug: 'jannat-sadaf-production-scheduling',
  },
  {
    company: 'Schneider Electric',
    displayTitle: 'Supply Chain Planning Intern',
    dates: 'Feb 2025 – Dec 2025',
    location: 'Foxborough, Massachusetts',
    start: '2025-02-01',
    end: '2025-12-01',
    scope:
      'Managed spare-parts planning and order execution for data-center power products, spanning S&OP/S&OE forecasting, inventory and shortage management, supplier and warehouse coordination, outbound logistics, and reverse-logistics/RMA workflows.',
    metrics: [
      '↑20% forecast accuracy',
      '↑30% on-time pickups',
      '↓15% repair lead time',
    ],
    slug: 'schneider-high-risk-order-control',
  },
  {
    company: 'Formlabs',
    displayTitle: 'Supply Chain Planning Intern',
    dates: 'Sep 2024 – Dec 2024',
    location: 'Boston, Massachusetts',
    start: '2024-09-01',
    end: '2024-12-01',
    scope:
      'Supported supply planning and inventory control across SLA and SLS product lines, covering material-risk monitoring, inventory segmentation and disposition, and cost/reporting automation across planning, operations, and finance.',
    metrics: [
      '↑6% OTIF',
      '↓$50K carrying costs',
      '↓80% COGS reporting time',
    ],
    slug: 'formlabs-sls-cogs-automation',
  },
  {
    company: 'Tesla',
    displayTitle: 'Global Supply Manager Intern',
    dates: 'May 2024 – Aug 2024',
    location: 'Palo Alto, California',
    start: '2024-05-01',
    end: '2024-08-01',
    scope:
      'Managed supplier sourcing and commercial analysis for NPI manufacturing equipment in electronics assembly, covering supplier negotiations, capacity and DFM reviews, should-costing, Capex governance, and cross-functional support for engineering, manufacturing, and finance.',
    metrics: [
      '↓3% Capex spend',
      '$150K procurement savings',
      '$100M+ Capex tracked',
    ],
    slug: 'tesla-component-level-should-cost',
  },
  {
    company: 'TLS Technology',
    displayTitle: 'Supply Chain Operations Manager',
    dates: 'May 2023 – Nov 2023',
    location: 'Lahore, Pakistan',
    start: '2023-05-01',
    end: '2023-11-01',
    scope:
      'Led cross-border technology fulfillment and market expansion across EMEA and APAC, overseeing a 10-person operations team, IOR/EOR vendor networks, order processing, compliance processes, and regional delivery execution.',
    metrics: [
      '↓18% delivery lead time',
      '↑12% market share',
      '5 IOR vendors/qtr',
    ],
    slug: 'tls-emea-expansion-operating-model',
  },
  {
    company: 'Amazon',
    displayTitle: 'Supply Chain Program Manager',
    dates: 'Nov 2021 – Nov 2022',
    location: 'Greater Seattle Area',
    start: '2021-11-01',
    end: '2022-11-01',
    scope:
      'Managed cost and service performance across Amazon Freight’s middle-mile network, using pricing, lane, shipment, and carrier data to improve capacity alignment, resolve operational exceptions, and strengthen performance visibility for planning and operations teams.',
    metrics: [
      '↓8% network cost',
      '98% on-time delivery',
      '↓20 labor hrs/week',
    ],
    slug: 'amazon-cost-anomaly-investigation',
  },
  {
    company: 'Cosmos Surfaces',
    displayTitle: 'Supply Chain Analyst',
    dates: 'Jan 2020 – Nov 2021',
    location: 'Greater Seattle Area',
    start: '2020-01-01',
    end: '2021-11-01',
    scope:
      'Managed warehouse and distribution operations for imported stone products, spanning inventory control, WMS/SAP execution, 3PL coordination, dock operations, warehouse flow, and outbound fulfillment across the Greater Seattle area.',
    metrics: [
      '95% order fulfillment',
      '↓50% truck turnaround',
      '↑20% warehouse capacity',
    ],
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

/** Contact destinations. GitHub is reserved for the homepage footer. */
export const contact = {
  email: 'esmailshahid@gmail.com',
  linkedin: 'https://www.linkedin.com/in/esmailarshad/',
  linkedinLabel: 'linkedin.com/in/esmailarshad',
  github: 'https://github.com/esmailshahid-hue',
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
    'Open to conversations around supply chain, planning, logistics and operations opportunities.',
} as const;
