import Image from 'next/image';

export default function LTE() {
  return (
    <section className="section lte-section" id="lte">
      <div className="wrap">
        <div className="lte-grid">

          {/* Left column: content */}
          <div className="lte-content reveal">
            <div className="tag">Always-On Connectivity</div>
            <h2 className="h2">
              LTE internet service —<br />
              <em className="em">connectivity guaranteed.</em>
            </h2>
            <p className="body-lg" style={{ marginTop: 20, marginBottom: 36, maxWidth: 540 }}>
              Every video intercom and access control system depends on a reliable internet
              connection. We supply and install dedicated LTE internet service so your building stays
              connected — even when wired networks fail.
            </p>

            {/* Feature list */}
            <ul className="lte-features">
              <li className="lte-feat">
                <span className="lte-feat-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.55a11 11 0 0114.08 0" />
                    <path d="M1.42 9a16 16 0 0121.16 0" />
                    <path d="M8.53 16.11a6 6 0 016.95 0" />
                    <line x1="12" y1="20" x2="12.01" y2="20" />
                  </svg>
                </span>
                <div className="lte-feat-text">
                  <div className="lte-feat-title">Dedicated 4G/LTE failover</div>
                  <div className="lte-feat-body">Backup internet that automatically takes over when your primary connection drops. Your intercom never goes offline.</div>
                </div>
              </li>
              <li className="lte-feat">
                <span className="lte-feat-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="lte-feat-text">
                  <div className="lte-feat-title">24/7 monitoring included</div>
                  <div className="lte-feat-body">We monitor signal strength and uptime around the clock. If something looks off, we know before you do.</div>
                </div>
              </li>
              <li className="lte-feat">
                <span className="lte-feat-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                    <line x1="6" y1="12" x2="6" y2="12" />
                    <line x1="10" y1="12" x2="10" y2="12" />
                    <line x1="14" y1="12" x2="14" y2="12" />
                    <line x1="18" y1="12" x2="18" y2="12" />
                  </svg>
                </span>
                <div className="lte-feat-text">
                  <div className="lte-feat-title">Pre-configured SIM hardware</div>
                  <div className="lte-feat-body">All-in-one router with industrial SIM card pre-loaded. We deliver, install, and activate — you don&apos;t lift a finger.</div>
                </div>
              </li>
              <li className="lte-feat">
                <span className="lte-feat-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                </span>
                <div className="lte-feat-text">
                  <div className="lte-feat-title">No installation cost surprises</div>
                  <div className="lte-feat-body">One transparent monthly fee covers hardware, data, monitoring, and support. No hidden charges, no usage caps to worry about.</div>
                </div>
              </li>
            </ul>

            {/* <a href="#quote" className="btn btn-gold" style={{ marginTop: 36 }}>
              <span>Add LTE to my quote</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a> */}
          </div>

          {/* Right column: visual */}
          <div className="lte-visual reveal" style={{ transitionDelay: '.15s' }}>
            {/* Stat banner at top */}
            <div className="lte-stat-banner">
              <div className="lte-stat">
                <div className="lte-stat-num">99.9<span className="lte-stat-pct">%</span></div>
                <div className="lte-stat-label">Network uptime</div>
              </div>
              <div className="lte-stat">
                <div className="lte-stat-num">&lt;30<span className="lte-stat-unit">s</span></div>
                <div className="lte-stat-label">Failover time</div>
              </div>
              <div className="lte-stat">
                <div className="lte-stat-num">24<span className="lte-stat-unit">/7</span></div>
                <div className="lte-stat-label">Live monitoring</div>
              </div>
            </div>

            {/* LTE router image */}
            <div className="lte-illustration">
              <Image
                src="/images/lte.jpg"
                alt="Industrial LTE router — dual-SIM 4G failover device"
                width={380}
                height={280}
                style={{ width: '100%', height: 'auto', maxWidth: 380, borderRadius: 8 }}
              />
            </div>
            <div style={{ marginTop: 12, textAlign: 'center' }}>
  <a href="#quote" className="btn btn-gold">
    <span>Add LTE to my quote</span>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
  </a>
</div>
          </div>

        </div>
      </div>
    </section>
  );
}
