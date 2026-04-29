const cards = [
  {
    n: '01',
    title: 'See Every Visitor Before You Open',
    body: 'High-definition video calling means every resident sees and verifies guests, couriers, and contractors before granting access — eliminating doorstep crime and unauthorised entry.',
    fact: 'Real-time HD video to any device',
  },
  {
    n: '02',
    title: 'Secure Package Delivery, Every Time',
    body: 'Couriers use a dedicated, time-limited access code to drop parcels in a secure lobby — every delivery captured and logged. No more porch piracy.',
    fact: 'Time-stamped delivery proof',
  },
  {
    n: '03',
    title: 'Manage Access Remotely & Instantly',
    body: 'Add residents, issue contractor codes, or revoke access from a single cloud dashboard — no callouts, no hardware visits, no waiting.',
    fact: 'Zero on-site visits required',
  },
  {
    n: '04',
    title: 'Complete Audit Trail',
    body: 'Every entry, every visitor, every event timestamped and stored — court-admissible video logs that protect residents, managers, and owners alike.',
    fact: 'Court-admissible video logs',
  },
  {
    n: '05',
    title: 'Zero-Touch Visitor Management',
    body: 'Issue auto-expiring access codes for cleaners, contractors, deliveries, and short-term guests — no fobs, no pickups, no hassle.',
    fact: 'Auto-expiring access codes',
  },
  {
    n: '06',
    title: 'Touchless Face Recognition Entry',
    body: 'AI-powered face recognition for staff and residents — no fobs, no codes, no friction. Hygienic, fast, and engineered for the highest-security environments.',
    fact: 'AI-powered, hygienic entry',
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
                <svg viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="20" y="20" width="160" height="60" rx="6" opacity=".5" />
                  <circle cx="50" cy="50" r="12" />
                  <line x1="80" y1="40" x2="160" y2="40" opacity=".7" />
                  <line x1="80" y1="55" x2="140" y2="55" opacity=".5" />
                  <line x1="80" y1="65" x2="120" y2="65" opacity=".4" />
                </svg>
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
