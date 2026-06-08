'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? 'solid scrolled' : ''}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" style={{ gap: 0 }}>
          <Image src="/logo.jpg" alt="Lowell Edwards logo" width={270} height={55} loading="eager"/>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <Link href="/solution" className={pathname.startsWith('/solution') ? 'active' : ''}>Solutions</Link>
          <Link href="/products" className={pathname.startsWith('/products') ? 'active' : ''}>Products</Link>
          <Link href="/why-us" className={pathname.startsWith('/why-us') ? 'active' : ''}>Why Us</Link>
          <Link href="/about" className={pathname.startsWith('/about') ? 'active' : ''}>About Us</Link>
          <Link href="/contact" className={pathname.startsWith('/contact') ? 'active' : ''}>Contact Us</Link>
        </div>

        <div className="nav-right">
          {/* KEEP EXACTLY SAME */}
          <a href="tel:2015253300" className="nav-phone">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9v2.02z" />
            </svg>
            201-525-3300
          </a>

          <Link href="/#quote" className="btn btn-gold" style={{ padding: '10px 20px', fontSize: 11.5 }}>
            Get a Quote
          </Link>

          <Link href="/#lte" className="btn btn-gold" style={{ padding: '10px 20px', fontSize: 11.5 }}>
            Request Service
          </Link>

          {/* ONLY NEW THING */}
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown ONLY */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/solution" className={pathname.startsWith('/solution') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Solutions</Link>
        <Link href="/products" className={pathname.startsWith('/products') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Products</Link>
        <Link href="/why-us" className={pathname.startsWith('/why-us') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Why Us</Link>
        <Link href="/about" className={pathname.startsWith('/about') ? 'active' : ''} onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link href="/contact" className={pathname.startsWith('/contact') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</Link>

        {/* FIXED BUTTON STYLE */}
        <div className="mobile-cta">
          <Link href="/#quote" className="btn btn-gold" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
          <Link href="/#lte" className="btn btn-gold" onClick={() => setMenuOpen(false)}>Request Service</Link>
        </div>
      </div>
    </nav>
  );
}