import Link from 'next/link';

const credentials = [
  { label: 'Certified Integrator', name: 'ButterflyMX', sub: 'Authorised installation partner' },
  { label: 'Certified Integrator', name: 'Akuvox', sub: 'AI biometric specialist partner' },
  { label: 'Certified Integrator', name: 'DoorBird', sub: 'Premium German installer programme' },
  { label: 'Compliance & Standards', name: 'GDPR · BS 7671', sub: 'ICO registered · NICEIC approved' },
];

const stats = [
  { num: '500', unit: '+', label: 'Buildings Secured', context: 'Across the US — apartments, offices, heritage homes, healthcare' },
  { num: '98', unit: '%', label: 'Customer Satisfaction', context: 'Based on post-install surveys across 18 months of projects' },
  { num: '<24', unit: 'h', label: 'Response Time SLA', context: 'Real engineer responds — guaranteed, no automated email systems' },
  { num: '1', unit: 'yr', label: 'Installation Guarantee', context: 'If our workmanship fails in year one, we fix it free — no debate' },
];

const pillars = [
  {
    num: 'i. Process',
    title: 'A consultative process, not an order form.',
    body: 'Every property is different. Every brief gets reviewed by a real engineer who understands intercom systems, building regulations, and the specific contexts where each manufacturer leads.',
    points: ['Free site survey for all projects', 'Itemised, transparent specification', 'Honest brand recommendation — even if it\'s not us', 'No hidden fees, no upsell pressure'],
  },
  {
    num: 'ii. Guarantees',
    title: 'Promises we actually keep.',
    body: 'A 24-hour response SLA, a 1-year installation guarantee, and the original engineer answering when something needs attention. Our promises sit on top of full manufacturer warranties.',
    points: ['24-hour response, guaranteed', '1-year installation guarantee', 'Stacks with manufacturer warranty (2–5 years)', 'Same engineer, year 1 to year 10'],
  },
  {
    num: 'iii. Expertise',
    title: 'Three certifications. One responsibility.',
    body: 'We\'re certified by ButterflyMX, Akuvox, and DoorBird — three brands with very different strengths. Most installers carry one. Carrying all three means we recommend the right system, not just the one we sell.',
    points: ['Triple-certified integrator', 'Site-specific engineer training per brand', 'NICEIC-approved electrical work', 'ICO-registered for biometric installs'],
  },
];

const processSteps = [
  { num: 'i', day: 'Day 0', title: 'Brief & Survey', body: 'You tell us about the property. We respond within 24 hours and book a free in-person site survey.' },
  { num: 'ii', day: 'Day 1–3', title: 'Specification', body: 'Engineer-reviewed itemised proposal: hardware, integrations, finishes, timeline. Transparent pricing.' },
  { num: 'iii', day: 'Day 4–7', title: 'Sign-off', body: 'Refinements, finish samples, listed-building consent if applicable. Single sign-off, no surprises.' },
  { num: 'iv', day: 'Day 8–14', title: 'Installation', body: 'Same engineer who scoped it fits it. Most apartment blocks complete in a single working day.' },
  { num: 'v', day: 'Ongoing', title: 'Support & Care', body: '24-hour SLA, remote diagnostics, on-site within 2 working days. Same team, every call.' },
];

const promises = [
  { title: '24-hour response SLA', body: 'A real engineer responds within 24 hours of your enquiry. No automated holding emails, no "we\'ll be in touch shortly," no dropped leads.', meta: 'Written into every quote' },
  { title: '1-year installation guarantee', body: 'If anything fails because of how we installed it within the first year, we fix it free. No debate, no surcharge, no callout fee. This is on top of the manufacturer warranty.', meta: 'No-quibble policy' },
  { title: 'Itemised, no-surprise pricing', body: 'Every quote is itemised line by line — hardware, labour, integrations, contingency. What you see on day one is what you pay on day fifty. No hidden fees, no scope creep.', meta: 'Fixed-fee structure' },
  { title: 'GDPR & ICO documentation included', body: 'For biometric and CCTV-integrated installs, we provide the Data Protection Impact Assessment, draft consent forms, and ICO registration guidance as part of the install — not as an extra.', meta: 'Compliance-ready handover' },
  { title: 'Same engineer, year 1 to year 10', body: 'The engineer who surveys your property is the one who installs it — and the one who picks up the phone five years later. We don\'t subcontract; we don\'t rotate.', meta: 'Continuity guaranteed' },
  { title: 'Honest "wrong tool" recommendations', body: 'If the brand we\'d love to sell you isn\'t right for your building, we\'ll say so. We sell three systems precisely so we can recommend the one that actually fits — not the one with the best margin.', meta: 'Vendor-neutral advice' },
];

const compareRows = [
  { feature: 'Free site survey', us: '✓', them: '✗' },
  { feature: 'Engineer-led install', us: 'Same engineer who scoped it', them: 'Subcontractor network' },
  { feature: 'Vendor-neutral advice', us: '3 brands, honest fit', them: '✗' },
  { feature: 'Building regulations', us: 'NICEIC-approved + 17th Edition', them: 'Variable' },
  { feature: 'Listed-building expertise', us: '✓', them: '✗' },
  { feature: 'GDPR / DPIA documentation', us: 'Included for biometric installs', them: '✗' },
  { feature: 'Installation guarantee', us: '1 year, no quibble', them: 'Hardware only' },
  { feature: 'Support contact', us: 'Same engineer, US-based', them: 'Ticket queue' },
  { feature: 'Response SLA', us: '<24 hours, guaranteed', them: 'Variable' },
];

export default function WhyUsPage() {
  return (
    <main className="inner-page why-page">
      {/* HERO */}
      <section className="wu-hero">
        <div className="wrap">
          <div className="wu-hero-grid">
            <div className="wu-hero-content">
              <div className="tag">Why Lowell Edwards</div>
              <h1 className="h1">Anyone can sell hardware.<br /><em className="em">We install it properly.</em></h1>
              <p className="wu-hero-desc">
                The smartest intercom in the world is only as good as the engineer who installed it. We&apos;re the certified integrator that property managers, developers, and luxury homeowners call when they want it done once, done properly, and done by people who&apos;ll pick up the phone in three years&apos; time.
              </p>
              <blockquote className="wu-hero-quote">
                The engineer who scopes your install is the same one who fits it — and the same one you&apos;ll speak to in five years if anything ever needs attention.
              </blockquote>
              <div className="wu-hero-cta">
                <Link href="/contact" className="btn btn-gold">
                  <span>Get a Free Quote</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
                <Link href="/products" className="btn btn-outline">
                  <span>See Our Products</span>
                </Link>
                <span className="wu-hero-cta-note">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Free site survey · 24h response
                </span>
              </div>
            </div>

            <div className="wu-credentials-stack">
              {credentials.map((c, i) => (
                <div className="wu-credential-card" key={i}>
                  <div className="wu-credential-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
                  </div>
                  <div className="wu-credential-text">
                    <div className="wu-credential-label">{c.label}</div>
                    <div className="wu-credential-name">{c.name}</div>
                    <div className="wu-credential-sub">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="wu-stats-bar">
        <div className="wrap">
          <div className="wu-stats-header">
            <div className="tag wu-stats-tag">Track Record</div>
            <h2 className="h2">Numbers that <em className="em">speak for themselves.</em></h2>
          </div>
          <div className="wu-stats-grid">
            {stats.map((s, i) => (
              <div className="wu-stat-item" key={i}>
                <div className="wu-stat-num">{s.num}<span>{s.unit}</span></div>
                <div className="wu-stat-label">{s.label}</div>
                <div className="wu-stat-context">{s.context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section wu-pillars">
        <div className="wrap">
          <div className="section-header wu-section-header">
            <div className="tag">Three pillars</div>
            <h2 className="h2">Why people <em className="em">keep choosing us.</em></h2>
            <p className="body-lg">A good intercom installer is part engineer, part consultant, and part long-term partner. Here&apos;s what we mean by all three.</p>
          </div>
          <div className="wu-pillars-grid">
            {pillars.map((p, i) => (
              <div className="wu-pillar-card" key={i}>
                <div className="wu-pillar-num">{p.num}</div>
                <div className="wu-pillar-title">{p.title}</div>
                <p className="wu-pillar-body">{p.body}</p>
                <ul className="wu-pillar-points">
                  {p.points.map((pt, j) => (
                    <li key={j}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="section wu-process">
        <div className="wrap">
          <div className="section-header wu-section-header">
            <div className="tag">How we work</div>
            <h2 className="h2">From enquiry to <em className="em">handover.</em></h2>
            <p className="body-lg">A typical project moves through five stages. Each handled by people, not portals.</p>
          </div>
          <div className="wu-process-timeline">
            {processSteps.map((step, i) => (
              <div className="wu-process-step" key={i}>
                <div className="wu-process-step-num">{step.num}</div>
                <div className="wu-process-step-day">{step.day}</div>
                <div className="wu-process-step-title">{step.title}</div>
                <p className="wu-process-step-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISES */}
      <section className="section wu-promises">
        <div className="wrap">
          <div className="section-header wu-section-header">
            <div className="tag">Our Promises</div>
            <h2 className="h2">Six guarantees, <em className="em">written down.</em></h2>
            <p className="body-lg">Marketing language is cheap. Specific commitments aren&apos;t. Here are six promises we make in writing as part of every quote.</p>
          </div>
          <div className="wu-promises-grid">
            {promises.map((p, i) => (
              <div className="wu-promise-card" key={i}>
                <div className="wu-promise-title">{p.title}</div>
                <p className="wu-promise-body">{p.body}</p>
                <span className="wu-promise-meta">{p.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section wu-compare">
        <div className="wrap">
          <div className="section-header wu-section-header">
            <div className="tag">Compared</div>
            <h2 className="h2">Why <em className="em">an integrator</em>,<br />not a buy-direct?</h2>
            <p className="body-lg">You can buy any of these systems direct from the manufacturer. Here&apos;s why most property managers, developers, and homeowners ultimately work with a certified integrator instead.</p>
          </div>
          <div className="wu-compare-table">
            <div className="wu-compare-head">
              <div className="wu-compare-head-cell">Aspect</div>
              <div className="wu-compare-head-cell wu-us-col">Lowell Edwards</div>
              <div className="wu-compare-head-cell">Buy direct</div>
            </div>
            {compareRows.map((row, i) => (
              <div className="wu-compare-row" key={i}>
                <div className="wu-compare-cell wu-feat-name">{row.feature}</div>
                <div className="wu-compare-cell wu-us-col">
                  {row.us === '✓' ? (
                    <svg className="wu-check-yes" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  ) : row.us}
                </div>
                <div className="wu-compare-cell">
                  {row.them === '✗' ? (
                    <svg className="wu-check-no" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  ) : <span className="wu-partial">{row.them}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="wu-bottom-cta">
        <div className="wrap">
          <div className="wu-bottom-cta-inner">
            <div className="tag wu-bottom-tag">Ready to start?</div>
            <h2 className="h2">Three brands. <em className="em">One integrator.</em><br />One quote, scoped properly.</h2>
            <p className="wu-bottom-cta-desc">Tell us about your property and an engineer will come back within 24 hours with an itemised proposal — no obligation, no automated systems, no sales pressure.</p>
            <div className="wu-bottom-cta-actions">
              <Link href="/contact" className="btn btn-gold">
                <span>Get a Free Quote</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
              <Link href="/products" className="btn btn-outline wu-btn-frost">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                <span>Browse Products</span>
              </Link>
              <a href="tel:2015253300" className="btn btn-outline wu-btn-frost">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9v2.02z" /></svg>
                <span>Call 201.525.3300</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}