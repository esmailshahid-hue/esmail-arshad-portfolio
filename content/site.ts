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
  /** The visible h1. `meta.positioning` still carries the category for <title>
      and structured data, where a search engine needs it. */
  greeting: "Hi, I'm Esmail. I work in supply chain and operations.",
  intro:
    'I like work where the problem is real and the answer has to hold up in practice — fixing a production schedule, challenging a supplier quote, or working out why shipments are going wrong.',
  background:
    'Over the past four years I’ve worked across planning, sourcing, logistics, inventory and process improvement, at companies including Tesla, Amazon, Schneider Electric and Formlabs.',
  mobility:
    'Based in Lahore · Open to the UAE, Saudi Arabia and broader international opportunities',
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
    dates: '2026 — Now',
    location: 'Lahore',
  },
  {
    company: 'Schneider Electric',
    displayTitle: 'Supply Chain Planning Intern',
    dates: '2025',
    location: 'Foxboro, MA',
  },
  {
    company: 'Formlabs',
    displayTitle: 'Supply Chain Analyst Intern',
    dates: '2024',
    location: 'Somerville, MA',
  },
  {
    company: 'Tesla',
    displayTitle: 'Global Supply Chain Manager Intern',
    dates: '2024',
    location: 'Palo Alto, CA',
  },
  {
    company: 'TLS Technology',
    displayTitle: 'Supply Chain Operations Manager',
    dates: '2023',
    location: 'Lahore',
  },
  {
    company: 'Amazon',
    displayTitle: 'Supply Chain Program Manager (Contract)',
    dates: '2021 — 2022',
    location: 'Bellevue, WA',
  },
  {
    company: 'Cosmos Surfaces',
    displayTitle: 'Supply Chain Analyst',
    dates: '2020 — 2021',
    location: 'Kent, WA',
  },
] as const;

/** §19 — first person, two sentences. */
export const about = {
  headshot: 'headshot.jpeg',
  headshotAlt: 'Esmail Arshad',
  /** Deliberately does not restate the hero. The years, the disciplines and the
      mobility line all live up there; repeating them here was the old version's
      main flaw. */
  paragraphs: [
    "I’ve worked in both large global companies and much smaller operating environments, so I move between analysis and execution fairly comfortably — building a forecast, challenging a supplier quote, sorting out a fulfilment problem, or putting a better process in place.",
    'What interests me most is where better planning, automation and operational discipline make a supply chain more reliable and easier to run.',
  ],
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
