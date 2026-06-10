export default function WhyUs() {
  return (
    <section className="section why" id="why-us">
      <div className="wrap">
        <div className="why-header reveal">
          <div className="tag" style={{ justifyContent: 'center' }}>Why Choose Us</div>
          <h2 className="h2" style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
            Certified Home Integration Specialists <br /><span className="em">Hackensack, NJ</span>
          </h2>
          <p
            style={{
              textAlign: 'center',
              marginTop: 12,
              fontFamily: 'var(--fb)',
              fontSize: 15,
              fontWeight: 400,
              letterSpacing: '.03em',
              color: 'rgba(22,26,32,.55)',
            }}
          >
            Proudly serving Northern New Jersey &amp; the NY Metro Area for over 30 years
          </p>
        </div>
        <div className="bento reveal" style={{ transitionDelay: '.1s' }}>
          {/* B1: Remote Service */}
          <div className="bc b1">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
            </div>
            <div className="bento-tag">Remote Support</div>
            <div className="bento-h">Diagnose &amp; resolve faults without a site visit</div>
            <div className="bento-p">
              Our engineers remotely access, diagnose, and resolve most faults — saving you time and
              minimising disruption to building residents and operations.
            </div>
            <div className="sla-pill">
              <div className="sla-pill-val">&lt;24h</div>
              <div className="sla-pill-label">Guaranteed<br />Response SLA</div>
            </div>
            <div className="sla-pill" >
              <div className="sla-pill-val">1</div>
              <div className="sla-pill-label">Year<br />Installation Guarantee</div>
            </div>
            </div>

          {/* B2: Track Record */}
          <div className="bc b2" style={{ padding: '40px 44px' }}>
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="bento-tag">Track Record</div>
            <div className="bento-h" style={{ marginBottom: -50 }}>
              Numbers that speak<br />for themselves
            </div>
            <div className="b2-stats">
              <div>
                <div className="b2-stat-num">300<span>+</span></div>
                <div className="b2-stat-label">Buildings secured across the New Jersey / New York Metro Area</div>
              </div>
              <div>
                <div className="b2-stat-num">98<span>%</span></div>
                <div className="b2-stat-label">Customer satisfaction score</div>
              </div>
              {/* <div>
                <div className="b2-stat-num">1<span style={{ fontSize: 28 }}>yr</span></div>
                <div className="b2-stat-label">Workmanship install warranty</div>
              </div>
              <div>
                <div className="b2-stat-num">24<span style={{ fontSize: 28 }}>h</span></div>
                <div className="b2-stat-label">Maximum maintenance response</div>
              </div> */}
            </div>
          </div>

          {/* B3: 1-Year Guarantee */}
          <div className="bc b3">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="bento-tag">Guarantee</div>
            <div className="bento-h">1-Year installation guarantee — without exception</div>
            <div className="bento-p">
              Every installation is backed by our full workmanship guarantee. If anything fails due
              to our installation, we fix it free of charge — no debate, no delay.
            </div>
            <div className="guarantee-ring" />
          </div>

          {/* B4: Resilient Networks */}
          <div className="bc b4">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21.3 15.3a12 12 0 00-18.6 0" />
                <path d="M17 11a7 7 0 00-10 0" />
                <path d="M12.9 7.1a2 2 0 00-1.8 0" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </div>
            <div className="bento-tag">Network Resilience</div>
            <div className="bento-h">Networks designed for intercom uptime</div>
            <div className="bento-p">
              We design and install network infrastructure specifically for intercom reliability —
              with remote service capabilities built in from day one to keep your building secure with self healing and fast remote service.
            </div>
          </div>

          {/* B5: Remote Power */}
          <div className="bc b5">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div className="bento-tag">Power Management</div>
            <div className="bento-h">Remotely reboot equipment from anywhere</div>
            <div className="bento-p">
              Remote power-cycle capabilities mean most lockouts are resolved without dispatching an
              engineer. Faster resolution, zero disruption, lower cost.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
