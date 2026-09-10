/**
 * The spine of the site. Dates and places are transcribed from Amrullah's own
 * LinkedIn export; the one-line descriptions are editable summaries, written
 * plainly on purpose — the facts carry it without help.
 */
export interface Era {
  year: string;
  place: string;
  what: string;
  /** Marks the turns in the story, which get a rule and heavier type. */
  pivot?: boolean;
}

export const chronology: Era[] = [
  {
    year: '2014',
    place: 'Kabul',
    what: 'Admin and finance assistant at a relief and skills-development organization. My first ledgers.',
  },
  {
    year: '2015',
    place: 'Kabul',
    what: 'Call center representative at Etisalat Afghanistan.',
  },
  {
    year: '2016',
    place: 'Kandahar',
    what: 'Customer service supervisor at Royal Pure Gold.',
  },
  {
    year: '2017',
    place: 'Kabul',
    what: 'Accounts supervisor for the Albashir Group. Two years running the books for a trading business.',
  },
  {
    year: '2019',
    place: 'Bagram',
    what: 'Linguist with Mission Essential. Twenty-two months.',
    pivot: true,
  },
  {
    year: '2020',
    place: 'Kabul',
    what: 'National ID verification officer at the National Statistics and Information Authority, through to August 2021.',
  },
  {
    year: '2021',
    place: 'Kabul',
    what: 'Patient billing and customer service at Ariana Medical Complex.',
  },
  {
    year: '2022',
    place: 'California',
    what: 'Interpreting Pashto and English over the phone for hospitals, courts, banks and 911 dispatchers. You are the only reason two people understand each other, and there is no second take.',
    pivot: true,
  },
  {
    year: '2023',
    place: 'Lafayette',
    what: 'Accountant at Gawfco Enterprises. Owning month-end close — AP and AR, reconciliations, the general ledger, the audit trail. This is where I met the software I now write.',
  },
  {
    year: '2025',
    place: 'Pittsburg',
    what: 'Started computer science at Los Medanos College. 4.0.',
    pivot: true,
  },
  {
    year: '2026',
    place: '—',
    what: 'Shipped Memora. Co-founded WiloSync. Built a daily-close reporting system for gas stations, which is the same job I used to do by hand.',
  },
  {
    year: '2027',
    place: 'San José',
    what: 'Transferring to San José State for the B.S.',
  },
];
