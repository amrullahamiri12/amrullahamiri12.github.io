/**
 * Résumé data, transcribed from Amrullah's own LinkedIn export (Sept 2026).
 * Facts are verbatim; the one-line descriptions are editable summaries.
 * This single source feeds both the web page and the print stylesheet.
 */

export interface Role {
  org: string;
  title: string;
  from: string;
  to: string;
  place: string;
  /** Omit for older roles that only need a line on the page. */
  notes?: string[];
}

export const education = [
  {
    org: 'San José State University',
    title: 'B.S. Computer Science (transfer)',
    from: 'Spring 2027',
    to: 'Planned',
    place: 'San José, California',
    notes: ['Transferring from Los Medanos College.'],
  },
  {
    org: 'Los Medanos College',
    title: 'A.S. Computer Science',
    from: 'January 2025',
    to: 'December 2026 (expected)',
    place: 'Pittsburg, California',
    notes: ['Honors; 4.0 GPA.'],
  },
  {
    org: 'Khwaja Abdullah Ansari High School',
    title: 'High School Diploma, General Studies',
    from: 'March 2008',
    to: 'December 2010',
    place: 'Afghanistan',
  },
] satisfies Role[];

/** Grouped so a reader sees the shape of a decade without reading ten entries. */
export const experience = [
  {
    org: 'WiloSync',
    title: 'Co-founder',
    from: 'June 2026',
    to: 'Present',
    place: 'California',
    notes: [
      'Automation platform for service businesses: lead capture and AI screening, appointment and payment reminders, review requests.',
      'Define the product, direct the build and ship it — the platform is TypeScript and Next.js, built with AI assistance — including integrations across twenty-odd third-party APIs.',
    ],
  },
  {
    org: 'Gawfco Enterprises, Inc.',
    title: 'Accountant',
    from: 'April 2023',
    to: 'December 2024',
    place: 'Lafayette, California',
    notes: [
      'Owned day-to-day accounting and month-end close: AP/AR, reconciliations, journal entries, accruals and GAAP reporting.',
      'Maintained the general ledger and chart of accounts to audit-ready standard; filed sales/use tax, 571-L and 1099s.',
      'Documented SOPs and streamlined workflows — the work that later became the gas station reporting system.',
    ],
  },
  {
    org: 'LanguageLine Solutions',
    title: 'Pashto Interpreter',
    from: 'February 2022',
    to: 'April 2023',
    place: 'United States',
    notes: [
      'Real-time Pashto–English interpretation for healthcare, government, legal and financial clients, under HIPAA.',
      'Consecutive interpretation across medical visits, 911 and public safety, social services and banking.',
    ],
  },
  {
    org: 'Robert Half',
    title: 'Accounts Payable Clerk',
    from: 'November 2022',
    to: 'February 2023',
    place: 'Lafayette, California',
    notes: [
      'Full-cycle AP: high-volume invoice entry, coding to cost centers, check runs and discrepancy resolution.',
    ],
  },
  {
    org: 'Mission Essential',
    title: 'Linguist',
    from: 'July 2019',
    to: 'April 2021',
    place: 'Bagram District, Parwan, Afghanistan',
  },
  {
    org: 'National Statistics and Information Authority (NSIA)',
    title: 'NID Verification Officer',
    from: 'December 2020',
    to: 'August 2021',
    place: 'Kabul, Afghanistan',
  },
  {
    org: 'Ariana Medical Complex',
    title: 'Patient Billing & Customer Service',
    from: 'October 2021',
    to: 'April 2022',
    place: 'Kabul, Afghanistan',
  },
  {
    org: 'Albashir Group',
    title: 'Accounts Supervisor',
    from: 'October 2017',
    to: 'June 2019',
    place: 'Kabul, Afghanistan',
  },
  {
    org: 'Royal Pure Gold (Albashir Group)',
    title: 'Customer Service Supervisor',
    from: 'July 2016',
    to: 'October 2017',
    place: 'Kandahar, Afghanistan',
  },
  {
    org: 'Etisalat Afghanistan',
    title: 'Call Center Representative',
    from: 'October 2015',
    to: 'July 2016',
    place: 'Kabul, Afghanistan',
  },
  {
    org: 'RSDOA',
    title: 'Admin & Finance Assistant',
    from: 'February 2014',
    to: 'October 2015',
    place: 'Kabul, Afghanistan',
  },
] satisfies Role[];

/**
 * Four tiers, because the truth has a gradient. What he writes from scratch, what he is
 * learning, what he works inside with AI assistance, and what he simply operates.
 */
export const skills = [
  { group: 'I write', items: ['Java', 'Python', 'SQL'] },
  { group: 'Studying now', items: ['C++'] },
  {
    group: 'I work in',
    items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Prisma'],
    note: 'Read, modify and debug; AI-assisted for the heavy lifting.',
  },
  {
    group: 'I operate',
    items: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'Vercel',
      'Supabase',
      'PostgreSQL',
      'Docker',
    ],
  },
] as const;

/** Shown under the skills table and on the About page. */
export const disclosure = `A word on how these were built. The products here are written in TypeScript and React, with AI assistance. I can read that code, change it, and trace a bug through it, and I run everything around it myself — version control, deployments on Vercel, Postgres on Supabase, migrations, environment config, CI. What I would not claim is that I write React fluently from a blank file. The languages I write myself are Java, Python and SQL, with C++ this term.

I am telling you this because the alternative is a skills list that falls apart in the first interview, and because the part I did bring is the part that is hard to hire for. I spent two years closing books, so I knew what a daily close report has to prove before anyone could explain it to me. I specified these systems, made the calls I can defend — deterministic parsing instead of a model, where the validation tolerances sit, how the role hierarchy keeps one company's numbers away from another's — and I tested, corrected and shipped them.`;

export const languages = [
  { name: 'Pashto', level: 'Native or bilingual' },
  { name: 'Persian', level: 'Full professional' },
  { name: 'English', level: 'Full professional' },
] as const;
