import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo" style={{ gap: 0 }}>
              <Image src="/logo.jpg" alt="Lowell Edwards logo" width={220} height={45} />
            </Link>
            <p>
              Certified authorized integrators for leading video intercom and access control systems. Supplying, installing, and maintaining building security solutions.
            </p>
            <a href="tel:2015253300" className="footer-phone">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9v2.02z" />
              </svg>
              201-525-3300
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
          <div className="footer-col">
            <h5>Follow Us</h5>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/lowelledwards00/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com/LowellEdwards1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="http://www.linkedin.com/pub/lowell-kaps/0/902/382" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://plus.google.com/106812760381537863529/posts" target="_blank" rel="noopener noreferrer" aria-label="Google">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <hr className="rule" />
        <div className="footer-bottom">
          <div className="footer-legal">
            © 2026 Lowell Edwards Home Integration ·{' '}
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
