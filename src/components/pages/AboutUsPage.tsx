import Link from 'next/link';

const heritage = [
  {
    year: '1978',
    title: 'Where we began.',
    body: 'Lowell/Edwards opened its doors as a reliable technology installation partner for residential and commercial properties. Decades before "smart buildings" became a phrase, we were already wiring them — quietly, carefully, and with the kind of finish that lasts.',
    meta: 'Founded',
  },
  {
    year: '2019',
    title: 'Where we focused.',
    body: 'After years of broad-spectrum installation work, we committed to a single discipline: modern intercom and access systems. Today every project we take on involves video entry, mobile access, or building-wide integration — and every engineer on the team specialises in it.',
    meta: 'Intercom Practice Launched',
  },
];

const services = [
  {
    num: 'i. Intercom Installation',
    title: 'Lobby panels and tenant stations, installed properly.',
    body: 'From single-door brownstones to multi-entrance complexes, we plan, wire, and commission intercom systems that actually get used — with clean cable routing, weather-rated outdoor hardware, and resident-friendly tenant stations.',
    points: ['Indoor and outdoor stations', 'Audio + HD video systems', 'Tenant directory and call routing', 'Clean, concealed cable runs'],
  },
  {
    num: 'ii. Video Entry Systems',
    title: 'See who is at the door — from anywhere.',
    body: 'Mobile-first video entry that lets residents, property managers, and staff see, speak with, and let in visitors from a phone or in-unit screen. We configure the apps, the call flow, and the camera angles so it all just works on day one.',
    points: ['Mobile app entry for residents', 'In-unit answering stations', 'Visitor video calling', 'Cloud video recording optional'],
  },
  {
    num: 'iii. Access Control',
    title: 'Keypads, readers, cards, and credentials.',
    body: 'Side-door readers, garage access, amenity-space credentials, and main-entry door release — all tied into one system. We work with apartment buildings, office properties, and gated entrances to design access that fits how the building is actually used.',
    points: ['Card and fob readers', 'Keypad and PIN entry', 'Mobile credential access', 'Door release and strike control'],
  },
  {
    num: 'iv. Building-Wide Integration',
    title: 'One system for every entrance.',
    body: 'For larger properties, a main lobby intercom is only the start. We bring side doors, service entrances, garage gates, amenity spaces, and cameras together into one coherent system that property managers can actually administer.',
    points: ['Multi-entrance configuration', 'Camera and CCTV integration', 'Property-manager dashboards', 'Remote entry and visitor logs'],
  },
];

const properties = [
  { icon: 'building', title: 'Apartment Buildings', body: 'Multifamily intercoms with mobile app entry and tenant directories.' },
  { icon: 'home', title: 'Luxury Residences', body: 'Discreet, design-led video entry for single-family and townhome owners.' },
  { icon: 'briefcase', title: 'Office Properties', body: 'Visitor management, credentialed access, and after-hours entry control.' },
  { icon: 'gate', title: 'Gated Entrances', body: 'Driveway, garage, and perimeter gate control with remote release.' },
  { icon: 'sparkle', title: 'Amenity Spaces', body: 'Gym, lounge, rooftop, and package-room access for residents only.' },
  { icon: 'layers', title: 'Multi-Entrance Facilities', body: 'Unified access across lobbies, side doors, service entries, and gates.' },
];

const components = [
  { title: 'Video Calling', body: 'HD video at the door, mirrored to in-unit stations and resident phones.' },
  { title: 'Mobile Access', body: 'Open the door from anywhere with a smartphone — no fobs, no keys, no fuss.' },
  { title: 'Keypads & PINs', body: 'Permanent or temporary access codes for residents, staff, and trades.' },
  { title: 'Card & Fob Readers', body: 'Traditional credentials where they still make the most sense.' },
  { title: 'Door Release', body: 'Quiet electric strikes and maglocks integrated cleanly with existing hardware.' },
  { title: 'Integrated Cameras', body: 'Entry cameras tied into the intercom and to building CCTV where required.' },
  { title: 'Remote Entry', body: 'Property managers grant access to visitors and contractors without leaving their desk.' },
  { title: 'Visitor Logs', body: 'Time-stamped records of who came, who let them in, and when.' },
];

const values = [
  { title: 'Clean Installation', body: 'Concealed cable routing, weather-rated mounts, and finishes that disappear into the architecture rather than fight it.' },
  { title: 'Dependable Performance', body: 'Systems configured for the way the property is actually used — not just powered up and walked away from.' },
  { title: 'Long-Term Support', body: 'The team that installs your system is the team you call when you need to add a door, swap a unit, or move a resident over.' },
];

export default function AboutUsPage() {
  return (
    <main className="inner-page about-page">
      {/* HERO */}
      <section className="wu-hero">
        <div className="wrap">
          <div className="wu-hero-grid">
            <div className="wu-hero-content">
              <div className="tag">About Lowell/Edwards</div>
              <h1 className="h1">
                Since 1978, building<br />
                <em className="em">trusted entrances.</em><br />
                Since 2019, focused on <em className="em">intercoms.</em>
              </h1>
              <p className="wu-hero-desc">
                Lowell/Edwards has been providing reliable technology installation services for residential and commercial properties for nearly five decades. In 2019 we narrowed our focus to what we do best — modern intercom, video entry, and access control systems for the buildings that need them.
              </p>
              <blockquote className="wu-hero-quote">
                A modern intercom system is more than a front-door panel — it connects residents, visitors, property managers, and staff through video, mobile, keypads, cameras, and remote entry. We make sure every part is installed properly, placed correctly, and configured for everyday use.
              </blockquote>
              <div className="wu-hero-cta">
                <Link href="/contact" className="btn btn-gold">
                  <span>Talk To Our Team</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
                <Link href="/products" className="btn btn-outline">
                  <span>See Our Products</span>
                </Link>
                <span className="wu-hero-cta-note">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Hackensack, NJ · Serving the tri-state region
                </span>
              </div>
            </div>

            <div className="wu-credentials-stack">
              <div className="wu-credential-card">
                <div className="wu-credential-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <div className="wu-credential-text">
                  <div className="wu-credential-label">Since 1978</div>
                  <div className="wu-credential-name">Nearly 50 years of installation craft</div>
                  <div className="wu-credential-sub">Residential and commercial technology projects across the tri-state region</div>
                </div>
              </div>
              <div className="wu-credential-card">
                <div className="wu-credential-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
                </div>
                <div className="wu-credential-text">
                  <div className="wu-credential-label">Since 2019</div>
                  <div className="wu-credential-name">Specialised in intercom and access</div>
                  <div className="wu-credential-sub">Certified by ButterflyMX, Akuvox, and DoorBird — three brands, one team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERITAGE TIMELINE */}
      <section className="section au-heritage">
        <div className="wrap">
          <div className="section-header wu-section-header">
            <div className="tag">Our Story</div>
            <h2 className="h2">Two dates that <em className="em">shaped the company.</em></h2>
            <p className="body-lg">From a general installation business in 1978 to a focused intercom and access specialist in 2019 — here is how we arrived at the work we do today.</p>
          </div>
          <div className="au-heritage-grid">
            {heritage.map((h, i) => (
              <div className="au-heritage-card" key={i}>
                <div className="au-heritage-year">{h.year}</div>
                <div className="au-heritage-meta">{h.meta}</div>
                <div className="au-heritage-title">{h.title}</div>
                <p className="au-heritage-body">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — reuse pillar grid */}
      <section className="section wu-pillars">
        <div className="wrap">
          <div className="section-header wu-section-header">
            <div className="tag">What we do</div>
            <h2 className="h2">Four disciplines, <em className="em">one specialism.</em></h2>
            <p className="body-lg">Every project we take on falls into one or more of these areas — and every engineer on the team is trained across all four.</p>
          </div>
          <div className="au-services-grid">
            {services.map((s, i) => (
              <div className="wu-pillar-card" key={i}>
                <div className="wu-pillar-num">{s.num}</div>
                <div className="wu-pillar-title">{s.title}</div>
                <p className="wu-pillar-body">{s.body}</p>
                <ul className="wu-pillar-points">
                  {s.points.map((pt, j) => (
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

      {/* PROPERTIES SERVED */}
      <section className="section au-properties-section">
        <div className="wrap">
          <div className="section-header wu-section-header">
            <div className="tag">Who we serve</div>
            <h2 className="h2">Buildings of <em className="em">every shape.</em></h2>
            <p className="body-lg">From single-entry brownstones to multi-entrance commercial properties, we design entry systems around how the building is actually used — not the other way around.</p>
          </div>
          <div className="au-properties-grid">
            {properties.map((p, i) => (
              <div className="au-property-card" key={i}>
                <div className="au-property-icon">
                  <PropertyIcon name={p.icon} />
                </div>
                <div className="au-property-title">{p.title}</div>
                <p className="au-property-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM COMPONENTS — what a modern intercom actually is */}
      <section className="section wu-promises">
        <div className="wrap">
          <div className="section-header wu-section-header">
            <div className="tag">More than a panel</div>
            <h2 className="h2">What a modern intercom <em className="em">actually is.</em></h2>
            <p className="body-lg">A complete entry system connects residents, visitors, property managers, and staff through every one of these components — and we install all of them as part of a single, cohesive setup.</p>
          </div>
          <div className="au-components-grid">
            {components.map((c, i) => (
              <div className="au-component-card" key={i}>
                <div className="au-component-title">{c.title}</div>
                <p className="au-component-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section au-values-section">
        <div className="wrap">
          <div className="section-header wu-section-header">
            <div className="tag">Why it matters</div>
            <h2 className="h2">Three things we <em className="em">refuse to compromise on.</em></h2>
            <p className="body-lg">Decades of experience taught us where projects go wrong. These are the three principles we built the company around.</p>
          </div>
          <div className="au-values-grid">
            {values.map((v, i) => (
              <div className="au-value-card" key={i}>
                <div className="au-value-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="au-value-title">{v.title}</div>
                <p className="au-value-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="wu-bottom-cta">
        <div className="wrap">
          <div className="wu-bottom-cta-inner">
            <div className="tag wu-bottom-tag">Ready to talk?</div>
            <h2 className="h2">Make building access <em className="em">simpler, safer,</em><br />and more convenient for everyone.</h2>
            <p className="wu-bottom-cta-desc">Tell us about your property and an engineer will come back within 24 hours with an itemised proposal — no obligation, no automated systems, no sales pressure.</p>
            <div className="wu-bottom-cta-actions">
              <Link href="/contact" className="btn btn-gold">
                <span>Get a Free Quote</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
              <Link href="/why-us" className="btn btn-outline wu-btn-frost">
                <span>Why Choose Us</span>
              </Link>
              <a href="tel:2015253300" className="btn btn-outline wu-btn-frost">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9v2.02z" /></svg>
                <span>Call 201-525-3300</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PropertyIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8 } as const;
  switch (name) {
    case 'building':
      return (
        <svg {...common}><rect x="4" y="2" width="16" height="20" rx="1" /><line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" /><line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" /><line x1="9" y1="14" x2="9" y2="14.01" /><line x1="15" y1="14" x2="15" y2="14.01" /><path d="M10 22v-4h4v4" /></svg>
      );
    case 'home':
      return (
        <svg {...common}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
      );
    case 'briefcase':
      return (
        <svg {...common}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>
      );
    case 'gate':
      return (
        <svg {...common}><path d="M3 21V7l9-4 9 4v14" /><line x1="3" y1="21" x2="21" y2="21" /><line x1="9" y1="9" x2="9" y2="21" /><line x1="15" y1="9" x2="15" y2="21" /><line x1="12" y1="11" x2="12" y2="21" /></svg>
      );
    case 'sparkle':
      return (
        <svg {...common}><path d="M12 3l2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4z" /></svg>
      );
    case 'layers':
      return (
        <svg {...common}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
      );
    default:
      return null;
  }
}
