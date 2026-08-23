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
  greeting: "Hi, I'm Esmail.",
  paragraph:
    "Over the past four years, I've worked across planning, sourcing, logistics and inventory at Tesla, Amazon, Schneider Electric and Formlabs. Today I run factory operations in Lahore.",
  core: 'Planning · Inventory · Procurement & Sourcing · Logistics · Operations · Analytics',
  systems: 'SAP · Oracle · NetSuite · Excel · SQL · Tableau · Power BI',
  based: 'Lahore · Open to UAE, Saudi Arabia & international roles',
} as const;

/**
 * Reverse-chronological, chronology only. The role-focus line was removed: it
 * restated what the case studies already say, and repeating it here was a large
 * part of why the page read as a résumé.
 */
export const experience = [
  {
    company: 'Jannat & Sadaf',
    displayTitle: 'Operations Manager',
    dates: 'Jan 2026 – Present',
    start: '2026-01-01',
    end: null as string | null,
    result: '98.6% on-time delivery',
    slug: 'jannat-sadaf-production-scheduling',
  },
  {
    company: 'Schneider Electric',
    displayTitle: 'Supply Chain Planning Intern',
    dates: 'Feb 2025 – Dec 2025',
    start: '2025-02-01',
    end: '2025-12-01',
    result: '30% improvement in on-time pickups',
    slug: 'schneider-high-risk-order-control',
  },
  {
    company: 'Formlabs',
    displayTitle: 'Supply Chain Planning Intern',
    dates: 'Sep 2024 – Dec 2024',
    start: '2024-09-01',
    end: '2024-12-01',
    result: '80% less manual reporting effort',
    slug: 'formlabs-sls-cogs-automation',
  },
  {
    company: 'Tesla',
    displayTitle: 'Global Supply Chain Manager Intern',
    dates: 'May 2024 – Aug 2024',
    start: '2024-05-01',
    end: '2024-08-01',
    result: '$150K procurement savings',
    slug: 'tesla-component-level-should-cost',
  },
  {
    company: 'TLS Technology',
    displayTitle: 'Supply Chain Operations Manager',
    dates: 'May 2023 – Nov 2023',
    start: '2023-05-01',
    end: '2023-11-01',
    result: '12% EMEA market-share growth',
    slug: 'tls-emea-expansion-operating-model',
  },
  {
    company: 'Amazon',
    displayTitle: 'Supply Chain Program Manager (Contract)',
    dates: 'Nov 2021 – Nov 2022',
    start: '2021-11-01',
    end: '2022-11-01',
    result: '~$360K exposure identified',
    slug: 'amazon-cost-anomaly-investigation',
  },
  {
    company: 'Cosmos Surfaces',
    displayTitle: 'Supply Chain Analyst',
    dates: 'Jan 2020 – Nov 2021',
    start: '2020-01-01',
    end: '2021-11-01',
    result: '~$50K installation completed on schedule',
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

/** §23 — footer disclosure. */
export const confidentialityNote =
  'Employer work is summarized without confidential internal detail. Client work is shown through sanitized excerpts.';
