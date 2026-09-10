/** Single source of truth for identity, navigation and outbound links. */
export const site = {
  name: 'Amrullah Amiri',
  role: 'Computer science student',
  focus: 'AI and machine learning',
  location: 'Concord, California',
  /** The headline carries the arc; the tagline carries the temperament. */
  headline:
    'I spent ten years doing the work that software was supposed to make easier. Now I build the software.',
  tagline: 'I build things that have to work on Monday morning.',

  looking: {
    what: 'a summer 2027 internship in machine learning',
    where: 'Bay Area or remote',
    authorization: 'Authorized to work in the US',
  },
  description:
    'Amrullah Amiri — computer science student in Concord, California, working toward AI and machine learning. Selected work, notes, and a résumé.',

  /** TODO(amrullah): keep this current — it's the cheapest way to look alive. */
  now: [
    'Building WiloSync with my co-founder and onboarding our first customers.',
    'Finishing my A.S. at Los Medanos, then transferring to San José State for the B.S. in Spring 2027.',
    'Working through C++ this term.',
    'Measuring how badly language models handle Pashto, and looking for the next thing to measure.',
  ],

  school: 'Los Medanos College',
  degree: 'A.S. Computer Science',
  graduates: 'December 2026',

  // Deliberately no phone number — a public portfolio does not need one.
  email: 'amrullah.amiri12@gmail.com',
  links: [
    { label: 'Email', href: 'mailto:amrullah.amiri12@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/amrullahamiri12' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amrullah-amiri/' },
  ],
} as const;

export const nav = [
  { label: 'Work', href: '/work' },
  { label: 'Notes', href: '/notes' },
  { label: 'About', href: '/about' },
  { label: 'Résumé', href: '/resume' },
] as const;

/** Path comparison that ignores trailing slashes, so /work and /work/ both match. */
export function isCurrent(pathname: string, href: string): boolean {
  const trim = (s: string) => (s.length > 1 ? s.replace(/\/+$/, '') : s);
  const path = trim(pathname);
  const target = trim(href);
  return path === target || path.startsWith(`${target}/`);
}
