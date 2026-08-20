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
  credential: 'Industrial engineer and Purdue Engineering Management graduate.',
  context:
    'NPI sourcing at Tesla, freight pricing at Amazon, supply planning at Schneider Electric, supply-risk analytics at Formlabs, and operations leadership now at Jannat & Sadaf.',
  disciplines: [
    'Planning & Inventory',
    'Procurement & Sourcing',
    'Logistics & Operations',
    'Analytics',
  ],
  systems: [
    'SAP',
    'Oracle',
    'NetSuite',
    'Netstock',
    'Baxter',
    'Excel',
    'SQL / BigQuery',
    'Tableau',
    'Power BI',
  ],
  mobility:
    'Lahore, Pakistan · Relocation priority UAE and Saudi Arabia · Open to broader relocation and remote',
} as const;

/**
 * §18 — reverse-chronological. Rendered as a dense list: no achievement
 * paragraphs, since the résumé and work pages carry the detail.
 */
export const experience = [
  {
    company: 'Jannat & Sadaf',
    displayTitle: 'Operations Manager',
    dates: '2026 — Now',
    location: 'Lahore',
    scope: 'Production planning, sourcing, cost control',
  },
  {
    company: 'Schneider Electric',
    displayTitle: 'Supply Chain Planning Intern',
    dates: '2025',
    location: 'Foxboro, MA',
    scope: 'S&OP, shortages, reverse logistics',
  },
  {
    company: 'Formlabs',
    displayTitle: 'Supply Chain Analyst Intern',
    dates: '2024',
    location: 'Somerville, MA',
    scope: 'Inventory and supply-risk analytics',
  },
  {
    company: 'Tesla',
    displayTitle: 'Global Supply Chain Manager Intern',
    dates: '2024',
    location: 'Palo Alto, CA',
    scope: 'NPI sourcing and should-cost analysis',
  },
  {
    company: 'TLS Technology',
    displayTitle: 'Supply Chain Operations Manager',
    dates: '2023',
    location: 'Lahore',
    scope: 'Global fulfilment and international expansion',
  },
  {
    company: 'Amazon',
    displayTitle: 'Supply Chain Program Manager (Contract)',
    dates: '2021 — 2022',
    location: 'Bellevue, WA',
    scope: 'Freight pricing and carrier analytics',
  },
  {
    company: 'Cosmos Surfaces',
    displayTitle: 'Supply Chain Analyst',
    dates: '2020 — 2021',
    location: 'Kent, WA',
    scope: 'Inventory and warehouse operations',
  },
] as const;

/** §19 — first person, two sentences. */
export const about = {
  headshot: 'headshot.jpeg',
  headshotAlt: 'Esmail Arshad',
  text: "I'm an industrial engineer who has worked across planning, procurement, logistics and operations in manufacturing, technology and consumer businesses. The work I do best puts operating judgment and structured analysis together — forecasting demand, challenging supplier costs, and finding supply risk early enough to act on.",
} as const;

/** §20 — undergraduate GPA is deliberately not displayed. */
export const education = {
  institution: 'Purdue University',
  degrees: [
    { degree: 'M.S. Engineering Management', year: '2025', detail: 'GPA 3.98' },
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

/** §23 — footer disclosure. */
export const confidentialityNote =
  'Employer work is summarized without confidential internal detail. Client work is anonymized and shown as sanitized excerpts.';
