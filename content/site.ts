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

export const hero = {
  supporting:
    'Industrial engineer and Purdue Engineering Management graduate working across planning, sourcing, logistics, operations and analytics.',
  mobility:
    'Based in Lahore, Pakistan · Open to international relocation, with the UAE and Saudi Arabia as priority markets · Open to remote roles',
  targetRoles: [
    'Supply Chain Planning',
    'Procurement / Strategic Sourcing',
    'Logistics / Operations',
    'Supply Chain Program Management',
    'Operations Analytics',
  ],
} as const;

/** §6 — typographic company strip. TLS and Cosmos appear in Experience only. */
export const companyStrip = [
  'Tesla',
  'Amazon',
  'Schneider Electric',
  'Formlabs',
  'Jannat & Sadaf',
] as const;

/** §7 — three outcome teasers. Never scope metrics. */
export const proofLine = [
  { value: '$150K', label: 'procurement savings', org: 'Tesla' },
  { value: '8%', label: 'freight network cost reduction', org: 'Amazon' },
  { value: '98.6%', label: 'on-time delivery', org: 'Jannat & Sadaf' },
] as const;

/** §8 — capability groups. `tag` values link cards to capability groups. */
export const capabilities = [
  {
    tag: 'Planning & Inventory',
    skills: [
      'S&OP / S&OE',
      'Demand Forecasting',
      'Supply Planning',
      'Inventory Planning',
      'Replenishment',
      'ABC Analysis',
    ],
  },
  {
    tag: 'Procurement & Sourcing',
    skills: [
      'Strategic Sourcing',
      'Supplier Evaluation',
      'Supplier Negotiation',
      'Should-Cost Analysis',
      'PO Management',
      'Cost Analysis',
    ],
  },
  {
    tag: 'Logistics & Operations',
    skills: [
      'Freight / Carrier Operations',
      'Inbound Logistics',
      'Reverse Logistics / RMA',
      '3PL Management',
      'Import / Export',
      'Fulfillment',
    ],
  },
  {
    tag: 'Analytics & Program Management',
    skills: [
      'Advanced Excel',
      'SQL / BigQuery',
      'Tableau / Power BI',
      'KPI Reporting',
      'Root-Cause Analysis',
      'Process Optimization',
      'Cross-Functional Execution',
    ],
  },
] as const;

/** §9 — verified against the résumés. Nothing added beyond résumé-confirmed systems. */
export const systems = [
  {
    group: 'Enterprise & Planning',
    items: ['SAP (incl. SAP ECC)', 'Oracle', 'NetSuite', 'Netstock', 'Baxter', 'WMS', 'TMS'],
  },
  {
    group: 'Analytics',
    items: ['Advanced Excel', 'SQL / BigQuery', 'Tableau', 'Power BI'],
  },
] as const;

/**
 * §18 — reverse-chronological. Roles with case studies carry the scope line only.
 * Schneider, TLS and Cosmos carry exactly one achievement each.
 */
export const experience = [
  {
    company: 'Jannat & Sadaf',
    displayTitle: 'Operations Manager',
    dates: '2026 — Present',
    location: 'Lahore, Pakistan',
    scope: 'Made-to-order production planning, fabric sourcing and order-level cost control',
    hasCaseStudy: true,
  },
  {
    company: 'Schneider Electric',
    displayTitle: 'Supply Chain Planning Intern',
    dates: '2025',
    location: 'Foxboro, MA',
    scope: 'S&OP / S&OE forecasting, shortage resolution and reverse logistics',
    hasCaseStudy: false,
    achievement:
      'Ran reverse-logistics and RMA workflows for data-centre infrastructure — coordinating supplier repairs, warehouse returns, shipping documentation and critical spare availability — reducing repair lead time by 15%.',
  },
  {
    company: 'Formlabs',
    displayTitle: 'Supply Chain Analyst Intern',
    dates: '2024',
    location: 'Somerville, MA',
    scope: 'Component supply-risk reporting, inventory segmentation and spend analysis',
    hasCaseStudy: true,
  },
  {
    company: 'Tesla',
    displayTitle: 'Global Supply Chain Manager Intern',
    dates: '2024',
    location: 'Palo Alto, CA',
    scope: 'NPI sourcing, supplier costing and CapEx analysis',
    hasCaseStudy: true,
  },
  {
    company: 'TLS Technology',
    displayTitle: 'Supply Chain Operations Manager',
    dates: '2023',
    location: 'Lahore, Pakistan',
    scope: 'Global order fulfilment, SOP design and international market expansion',
    hasCaseStudy: false,
    achievement:
      'Led a global operations team of 10 and drove EMEA expansion by onboarding five Importer-of-Record vendors per quarter with customs brokers and freight forwarders, growing market share by 12%.',
  },
  {
    company: 'Amazon',
    displayTitle: 'Supply Chain Program Manager (Contract)',
    dates: '2021 — 2022',
    location: 'Bellevue, WA',
    scope: 'Middle-mile carrier performance and freight-pricing analytics',
    hasCaseStudy: true,
  },
  {
    company: 'Cosmos Surfaces',
    displayTitle: 'Supply Chain Analyst',
    dates: '2020 — 2021',
    location: 'Kent, WA',
    scope: 'Inventory accuracy, warehouse systems and outbound fulfilment',
    hasCaseStudy: false,
    achievement:
      'Optimized dock utilization through 3PL partnerships, reducing outbound truck turnaround time by 50%.',
  },
] as const;

/** §19 — first person, ~100–120 words. */
export const about = {
  headshot: 'headshot.jpeg',
  headshotAlt: 'Esmail Arshad',
  paragraphs: [
    'I trained as an industrial engineer, and I still approach operations the same way: find where the process actually breaks, then design the decision around it rather than around the reporting.',
    'That took me from warehouse and inventory systems into planning and procurement, then into the analytics that sit underneath both — forecasting, should-cost models, freight economics, supply-risk reporting. Along the way the work moved across industrial manufacturing, hardware technology and consumer operations, which is where I learned how differently the same supply chain problem behaves depending on what you are making.',
    'Now I run operations end to end, and the analytical habit has not gone anywhere. I would rather show the model than describe the result.',
  ],
} as const;

/** §20 — undergraduate GPA is deliberately not displayed. */
export const education = {
  institution: 'Purdue University',
  location: 'West Lafayette, IN',
  degrees: [
    {
      degree: 'M.S. Engineering Management',
      year: '2025',
      detail: 'GPA 3.98',
    },
    {
      degree: 'B.S. Industrial Engineering',
      year: '2019',
      detail: null,
    },
  ],
  /**
   * Lean Six Sigma Green Belt is held but expired. Esmail's decision (2026-08-19)
   * is to omit it for now; see content/source/portfolio-facts.md. To reinstate,
   * add an entry here and it will render in its own visually separate block.
   */
  certifications: [] as { name: string; issuer: string | null }[],
} as const;

/**
 * §21 — GitHub is intentionally absent: no portfolio repository exists yet.
 * See §25a and the README for the sequence to add it.
 */
export const contact = {
  intro: 'Open to supply chain, operations and analytics roles.',
  email: 'esmailshahid@gmail.com',
  linkedin: 'https://www.linkedin.com/in/esmailarshad/',
  linkedinLabel: 'linkedin.com/in/esmailarshad',
  github: null as string | null,
} as const;

/** §23 — footer disclosure. */
export const confidentialityNote =
  'Employer work is summarized without confidential internal detail. Client work is anonymized and shown as approved or sanitized excerpts.';
