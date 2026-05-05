import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">
              {/* <div className="nav-logo-mark">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="10" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  <rect x="3" y="17" width="7" height="4" rx="1.5" />
                </svg>
              </div> */}
              Lowell Edwards<span style={{ color: 'var(--gold)' }}>.</span>
            </div>
            <p>
              Certified authorised integrators for leading video intercom and access control systems. Supplying, installing, and maintaining building security solutions across the UK.


            </p>
            <a href="tel:08001234567" className="footer-phone">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9v2.02z" />
              </svg>
              201.525.3300
            </a>
          </div>
          <div className="footer-col">
            <h5>Products</h5>
            <ul>
              <li><Link href="/#products">Smart Video Intercom</Link></li>
              <li><Link href="/#products">Face Recognition System</Link></li>
              <li><Link href="/#products">Premium IP Door Station</Link></li>
              <li><Link href="/#products">Access Control</Link></li>
              <li><Link href="/compare">Compare Products</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Solutions</h5>
            <ul>
              <li><Link href="/solution">Residential Buildings</Link></li>
              <li><Link href="/solution">Commercial Offices</Link></li>
              <li><Link href="/solution">Gated Communities</Link></li>
              <li><Link href="/solution">Student Housing</Link></li>
              <li><Link href="/solution">New Developments</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Support</h5>
            <ul>
              <li><Link href="/#quote">Get a Free Quote</Link></li>
              <li><Link href="/#quote">Book a Site Survey</Link></li>
              <li><Link href="/why-us">24hr Maintenance</Link></li>
              <li><Link href="/why-us">Remote Support</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <hr className="rule" />
        <div className="footer-bottom">
          <div className="footer-legal">
            © 2026 Lowell Edwards Home Integration, Inc. ·{' '}
            <a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a>
          </div>
          <div className="footer-certs">
            <span className="footer-cert">ButterflyMX Certified</span>
            <span className="footer-cert">Akuvox Partner</span>
            <span className="footer-cert">DoorBird Installer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
