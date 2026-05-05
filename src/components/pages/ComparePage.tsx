import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Support = 'yes' | 'no' | 'part';

const rows: { feat: string; cells: Support[] }[] = [
  { feat: 'HD Video Intercom', cells: ['yes', 'yes', 'yes'] },
  { feat: 'Mobile App Entry', cells: ['yes', 'yes', 'yes'] },
  { feat: 'Face Recognition Entry', cells: ['no', 'yes', 'no'] },
  { feat: 'Cloud Portfolio Management', cells: ['yes', 'yes', 'part'] },
  { feat: 'Package Room / Delivery Management', cells: ['yes', 'no', 'no'] },
  { feat: 'SIP / PBX Integration', cells: ['no', 'yes', 'part'] },
  { feat: 'IP65+ Outdoor Rating', cells: ['yes', 'yes', 'yes'] },
  { feat: 'Smart Home Integration', cells: ['part', 'part', 'yes'] },
  { feat: 'Multi-Tenant Resident App', cells: ['yes', 'yes', 'part'] },
  { feat: 'On-Site Keypad + QR Access', cells: ['yes', 'yes', 'part'] },
];

const fitCards = [
  {
    brand: 'ButterflyMX',
    tag: 'Most Popular',
    body: 'Best for multifamily and mixed-use buildings prioritizing resident app adoption and delivery workflows.',
    image: '/images/installations/1.jpg',
  },
  {
    brand: 'Akuvox',
    tag: 'Enterprise',
    body: 'Ideal for complex sites needing broader integration capabilities, portfolio control, and advanced credentialing.',
    image: '/images/installations/5.jpg',
  },
  {
    brand: 'DoorBird',
    tag: 'Premium Design',
    body: 'Great for design-led projects that need robust access control with high-end architectural presentation.',
    image: '/images/solutions/solution-06.jpg',
  },
];

function supportIcon(kind: Support): ReactNode {
  if (kind === 'yes') {
    return (
      <div className="ci ci-yes">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="20,6 9,17 4,12" />
        </svg>
      </div>
    );
  }

  if (kind === 'part') {
    return (
      <div className="ci ci-part">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
    );
  }

  return (
    <div className="ci ci-no">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
  );
}

export default function ComparePage() {
  return (
    <main className="inner-page compare-page">
      <section className="inner-hero compare-hero-panel">
        <div className="wrap">
          <div className="split-hero-grid compare-hero-grid">
            <div className="inner-hero-content">
              <div className="tag">Platform Comparison</div>
              <h1 className="h2">
                Compare leading systems by feature depth, fit, and long-term <em className="em">operational value</em>
              </h1>
              <p className="body-lg">
                Every building profile is different. Use this expanded matrix as a decision guide,
                then let us validate the right option against your infrastructure and resident goals.
              </p>
              <div className="inner-hero-actions">
                <Link href="/#quote" className="btn btn-gold">Get Recommendation</Link>
                <Link href="/solution" className="btn btn-outline">View Solutions</Link>
              </div>
            </div>

            {/* <div className="compare-chooser-panel">
              <p className="compare-chooser-title">Quick Fit Snapshot</p>
              {fitCards.map((card) => (
                <article className="compare-chooser-row" key={card.brand}>
                  <div className="compare-chooser-head">
                    <span>{card.tag}</span>
                    <strong>{card.brand}</strong>
                  </div>
                  <p>{card.body}</p>
                </article>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      <section className="section narrative-intro-section" id="compare">
        <div className="wrap">
          <div className="narrative-intro-grid">
            <div>
              <div className="tag">Decision Guide</div>
              <h2 className="h3">Choose by building profile, not by brand name alone</h2>
            </div>
            <p className="body-lg narrative-intro-copy">
              The right platform depends on resident experience goals, integration depth,
              architectural expectations, and how much remote portfolio control your team needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section platform-showcase-section">
        <div className="wrap">
          <div className="platform-showcase-grid">
            {fitCards.map((card) => (
              <article key={card.brand} className="platform-showcase-card">
                <div className="platform-showcase-image">
                  <Image
                    src={card.image}
                    alt={card.brand}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="platform-showcase-copy">
                  <div className="fit-tag">{card.tag}</div>
                  <h3>{card.brand}</h3>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section comparison-table-section">
        <div className="wrap">
          <div className="comp-header-section">
            <div className="tag" style={{ justifyContent: 'center' }}>Feature Matrix</div>
            <h2 className="h2" style={{ textAlign: 'center' }}>Side-by-side breakdown</h2>
            <p
              className="body-lg"
              style={{ textAlign: 'center', marginTop: 18, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}
            >
              Choose based on deployment goals, integration requirements, and resident experience.
            </p>
          </div>

          <div className="compare-table-shell">
            <div className="comp-thead">
              <div className="comp-th" style={{ textAlign: 'left', paddingLeft: 28 }}>
                <div className="comp-th-label">Feature</div>
              </div>
              <div className="comp-th">
                <div className="comp-th-brand">ButterflyMX</div>
                <div className="comp-th-badge">Most Popular</div>
              </div>
              <div className="comp-th">
                <div className="comp-th-brand">Akuvox</div>
                <div className="comp-th-badge">Enterprise</div>
              </div>
              <div className="comp-th">
                <div className="comp-th-brand">DoorBird</div>
                <div className="comp-th-badge">Premium Design</div>
              </div>
            </div>

            {rows.map((row) => (
              <div className="comp-row" key={row.feat}>
                <div className="comp-feat">{row.feat}</div>
                <div className="comp-cell">{supportIcon(row.cells[0])}</div>
                <div className="comp-cell">{supportIcon(row.cells[1])}</div>
                <div className="comp-cell">{supportIcon(row.cells[2])}</div>
              </div>
            ))}
          </div>

          <div className="comp-legend">
            <div className="comp-legend-item">
              <div className="ci ci-yes" style={{ width: 20, height: 20 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
              </div>
              Fully supported
            </div>
            <div className="comp-legend-item">
              <div className="ci ci-part" style={{ width: 20, height: 20 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              Partial or add-on
            </div>
            <div className="comp-legend-item">
              <div className="ci ci-no" style={{ width: 20, height: 20 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              Not available
            </div>
          </div>
        </div>
      </section>

      <section className="section comparison-advice-section">
        <div className="wrap">
          <div className="advice-panel">
            <div>
              <div className="tag">Next Step</div>
              <h3 className="h3">Need help narrowing it down?</h3>
              <p className="body-lg">
                We can shortlist the best-fit platform after reviewing entrances, resident profile,
                delivery flow, and integration requirements.
              </p>
            </div>
            <Link href="/#quote" className="btn btn-gold">Request a Recommendation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
