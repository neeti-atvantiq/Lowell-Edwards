'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? 'solid scrolled' : ''}>
      <div className="nav-inner">
        <a href="#" className="nav-logo" style={{ gap: 0 }}>
          {/* <div className="nav-logo-mark">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="10" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
              <rect x="3" y="17" width="7" height="4" rx="1.5" />
            </svg>
          </div>
          <span className="nav-logo-wordmark">
            Lowell Edwards<span style={{ color: 'var(--gold)' }}>.</span>
          </span> */}
          <Image
            src="/logo.jpg"
            alt="Lowell Edwards logo"
            width={190}
            height={60}
          />
        </a>
        <div className="nav-links">
          <a href="#solutions">Solutions</a>
          <a href="#products">Products</a>
          <a href="#why-us">Why Us</a>
          <a href="#compare">Compare</a>
          <a href="#quote">Quote</a>
        </div>
        <div className="nav-right">
          <a href="tel:2015253300" className="nav-phone">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9v2.02z" />
            </svg>
            0800 123 4567
          </a>
          <a
            href="#quote"
            className="btn btn-gold"
            style={{ padding: '10px 20px', fontSize: 11.5 }}
          >
            Get a Quote
          </a>
          <a
            href="#quote"
            className="btn btn-gold"
            style={{ padding: '10px 20px', fontSize: 11.5 }}
          >
            Request Service
          </a>          
        </div>
      </div>
    </nav>
  );
}
