export interface SolutionCard {
  n: string;
  title: string;
  body: string;
  fact: string;
  image: string;
}

export const solutionCards: SolutionCard[] = [
  {
    n: '01',
    title: 'See Every Visitor Before You Open',
    body: 'Residents can see and speak with visitors or receive packages — from their phone, from anywhere. No more buzzing in strangers or missed deliveries.',
    fact: 'Real-time HD video to any device',
    image: '/images/solutions/solution-01.png',
  },
  {
    n: '02',
    title: 'Touchless Face Recognition Entry',
    body: 'For premium buildings, AI-powered face recognition provides fast and easy, keyless entry for registered residents — no key, no fob, no phone out of pocket.',
    fact: 'AI-powered, hygienic entry',
    image: '/images/solutions/solution-05.jpeg',
  },
  {
    n: '03',
    title: 'Secure Package & Visitor Management',
    body: 'Couriers use a delivery PIN or QR code for secure package drop-off, with every delivery logged and time-stamped. Temporary access codes for guests or contractors expire automatically—no keys, no loose ends.',
    fact: 'Time-stamped delivery & auto-expiring codes',
    image: '/images/solutions/solution-02.png',
  },
  {
    n: '04',
    title: 'Complete Audit Trail',
    body: 'Every entry event is logged — who, when, and how. Time-stamped video records provide irrefutable evidence for insurance claims, tenant disputes, and compliance audits.',
    fact: 'Extensive Photo Logs',
    image: '/images/solutions/solution-04.jpg',
  },
  {
    n: '05',
    title: 'Manage Access Remotely & Instantly',
    body: 'Grant or revoke access credentials in seconds from any device. Onboarding a new tenant or locking out a former occupant takes moments — no site visit, no locksmith, no delay.',
    fact: 'Zero on-site visits required',
    image: '/images/solutions/solution-03.jpg',
  },
  {
    n: '06',
    title: 'Support Standard Phone Calls',
    body: 'Residents without smartphones can still talk to and unlock doors for visitors through a standard phone call — ensuring every occupant has full access control regardless of their device.',
    fact: 'No smartphone required',
    image: '/images/solutions/solution-06.jpeg',
  },
];
