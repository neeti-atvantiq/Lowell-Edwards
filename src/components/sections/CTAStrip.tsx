export default function CTAStrip() {
  return (
    <div className="cta-strip">
      <div className="wrap">
        <div className="cta-strip-inner">
          <div>
            <h2>Ready to secure your building?</h2>
            <p>Get a personalised quote — no obligation, no sales pressure. Just the right solution for your building.</p>
          </div>
          <div className="cta-strip-actions">
            <a href="tel:2015253300" className="btn-dark">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9v2.02z" />
              </svg>
              Call 201.525.3300
            </a>
            <a href="#quote" className="btn-dark">Get My Free Quote</a>
          </div>
        </div>
      </div>
    </div>
  );
}
