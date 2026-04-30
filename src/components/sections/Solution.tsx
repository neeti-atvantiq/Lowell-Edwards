import Image from 'next/image';

const cards = [
  {
    n: '01',
    title: 'See Every Visitor Before You Open',
    body: 'HD video intercom lets residents and managers see and speak to any visitor before granting access — from their phone, from anywhere in the world. No more opening blind.',
    fact: 'Real-time HD video to any device',
    image: '/images/solutions/solution-01.jpg',
  },
  {
    n: '02',
    title: 'Secure Package Delivery, Every Time',
    body: 'Couriers use a dedicated delivery PIN or QR code. Every delivery is logged with time-stamped video evidence. No more stolen parcels — residents and managers have full accountability.',
    fact: 'Time-stamped delivery proof',
    image: '/images/solutions/solution-02.jpg',
  },
  {
    n: '03',
    title: 'Manage Access Remotely & Instantly',
    body: 'Grant or revoke access credentials in seconds from any device. Onboarding a new tenant or locking out a former occupant takes moments — no site visit, no locksmith, no delay.',
    fact: 'Zero on-site visits required',
    image: '/images/solutions/solution-03.jpg',
  },
  {
    n: '04',
    title: 'Complete Audit Trail',
    body: 'Every entry event is logged — who, when, and how. Time-stamped video records provide irrefutable evidence for insurance claims, tenant disputes, and compliance audits.',
    fact: 'Court-admissible video logs',
    image: '/images/solutions/solution-04.jpg',
  },
  {
    n: '05',
    title: 'Zero-Touch Visitor Management',
    body: 'Issue temporary access codes for contractors, cleaners, or guests with defined time windows. Access expires automatically — no physical handover of keys, no loose ends.',
    fact: 'Auto-expiring access codes',
    image: '/images/solutions/solution-05.jpg',
  },
  {
    n: '06',
    title: 'Touchless Face Recognition Entry',
    body: 'For premium buildings, AI-powered face recognition provides frictionless, keyless entry for registered residents — secure, hygienic, and effortlessly modern.',
    fact: 'AI-powered, hygienic entry',
    image: '/images/solutions/solution-06.jpg',
  },
];

export default function Solution() {
  return (
    <section className="section solution" id="solutions">
      <div className="wrap">
        <div className="solution-header reveal">
          <div className="tag" style={{ justifyContent: 'center' }}>The Solution</div>
          <h2 className="h2" style={{ textAlign: 'center' }}>
            One system. Every problem <em className="em">solved.</em>
          </h2>
          <p
            className="body-lg"
            style={{ textAlign: 'center', marginTop: 18, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}
          >
            Modern video intercom and access control transforms how buildings are secured — giving
            managers full visibility and control from anywhere, at any time.
          </p>
        </div>
        <div className="solution-grid reveal" style={{ transitionDelay: '.1s' }}>
          {cards.map((c) => (
            <div className="sol-card" key={c.n}>
              <div className="sol-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12,5 19,12 12,19" />
                </svg>
              </div>
              <div className="sol-index">{c.n}</div>
              <div className="sol-graphic">
                <Image
                  src={c.image}
                  alt={c.title}
                  width={600}
                  height={375}
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="sol-title">{c.title}</div>
              <div className="sol-body">{c.body}</div>
              <div className="sol-fact">{c.fact}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
