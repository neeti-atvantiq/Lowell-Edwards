'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { solutionCategories, heroStats } from '@/data/all-products';

export default function SolutionsPage() {
  const [heroMouse, setHeroMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useRevealOnScroll({ threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setHeroMouse({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }
    };
    const hero = heroRef.current;
    hero?.addEventListener('mousemove', handleMouse);
    return () => hero?.removeEventListener('mousemove', handleMouse);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveCategory(e.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    solutionCategories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="ap-page">
      {/* Hero */}
      <section className="ap-hero" ref={heroRef}>
        <div className="ap-hero-bg">
          <div className="ap-hero-orb ap-hero-orb-1" style={{ transform: `translate(${heroMouse.x * 25}px, ${heroMouse.y * 15}px)` }} />
          <div className="ap-hero-orb ap-hero-orb-2" style={{ transform: `translate(${heroMouse.x * -18}px, ${heroMouse.y * -12}px)` }} />
          <div className="ap-hero-grid-lines" />
        </div>

        <div className="wrap">
          <div className="ap-hero-layout">
            <div className="ap-hero-content reveal">
              <div className="ap-hero-eyebrow">
                <span className="ap-hero-badge">Lowell Edwards</span>
                <span className="ap-hero-label">· Product Catalogue</span>
              </div>
              <h1 className="ap-hero-title">
                Every product.<br />
                <em className="em">One integrator.</em>
              </h1>
              <p className="ap-hero-desc">
                We install Akuvox, ButterflyMX, and DoorBird — the three leading intercom and access control platforms. 
                Compare features, explore categories, and request a free quote.
              </p>
              <div className="ap-hero-stats">
                {heroStats.map((s, i) => (
                  <div className="ap-hero-stat" key={i}>
                    <span className="ap-hero-stat-val">{s.value}</span>
                    <span className="ap-hero-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="ap-hero-actions">
                <a href="#intercoms" className="btn btn-gold">Browse Products</a>
                <Link href="/contact" className="btn btn-outline">Get a Quote</Link>
              </div>
            </div>

            <div className="ap-hero-visual reveal">
              <div className="ap-hero-brand-stack" style={{ transform: `perspective(800px) rotateY(${heroMouse.x * 4}deg) rotateX(${heroMouse.y * -2}deg)` }}>
                <div className="ap-hero-brand-card ap-hero-brand-1">
                  <Image src="https://www.akuvox.com/uploads/202012/2020123119053400.png" alt="Akuvox" width={180} height={180} style={{ objectFit: 'contain' }} />
                  <span>Akuvox</span>
                </div>
                <div className="ap-hero-brand-card ap-hero-brand-2">
                  <Image src="/images/gallery/aparment/doorbird.png" alt="DoorBird" width={180} height={180} style={{ objectFit: 'contain' }} />
                  <span>DoorBird</span>
                </div>
                <div className="ap-hero-brand-card ap-hero-brand-3">
                  <Image src="https://butterflymx.com/wp-content/uploads/2023/02/butterflymx-single-gang-reader.png" alt="ButterflyMX" width={180} height={180} style={{ objectFit: 'contain' }} />
                  <span>ButterflyMX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <nav className="ap-cat-nav">
        <div className="wrap">
          <div className="ap-cat-nav-inner">
            {solutionCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={`ap-cat-nav-link ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Categories */}
      {solutionCategories.map((category) => (
        <section key={category.id} id={category.id} className="ap-cat-section">
          <div className="wrap">
            <div className="ap-cat-header reveal">
              <div className="ap-cat-header-left">
                <div>
                  <h2 className="ap-cat-title">{category.title}</h2>
                  <p className="ap-cat-subtitle">{category.subtitle}</p>
                </div>
              </div>
              <span className="ap-cat-count">{category.brands.length} brand{category.brands.length !== 1 ? 's' : ''}</span>
            </div>

            <div className={`ap-brand-grid ap-brand-grid-${category.brands.length} reveal`}>
              {category.brands.map((brand, bIndex) => (
                <Link href={brand.link} className="ap-brand-card" key={`${category.id}-${brand.name}-${bIndex}`}>
                  <div className="ap-brand-card-img">
                    <div className="ap-brand-card-badge">{brand.name}</div>
                    <Image
                      src={brand.image}
                      alt={`${brand.name} ${category.title}`}
                      className="ap-brand-card-product"
                      width={800}
                      height={600}
                      style={{ objectFit: 'cover', padding: '30px', width: '100%', height: '100%' }}
                    />
                  </div>
                  <div className="ap-brand-card-body">
                    <h3 className="ap-brand-card-name">{brand.name}</h3>
                    <p className="ap-brand-card-tagline">{brand.tagline}</p>

                    {brand.entryFeatures && (
                      <div className="ap-brand-features">
                        <div className="ap-brand-feat-group">
                          <span className="ap-brand-feat-label">Entry:</span>
                          <span className="ap-brand-feat-list">{brand.entryFeatures.join(' · ')}</span>
                        </div>
                        <div className="ap-brand-feat-group">
                          <span className="ap-brand-feat-label">App:</span>
                          <span className="ap-brand-feat-list">{brand.appFeatures?.join(' · ')}</span>
                        </div>
                      </div>
                    )}

                    {brand.generalFeatures && (
                      <div className="ap-brand-features">
                        <div className="ap-brand-feat-group">
                          <span className="ap-brand-feat-label">Features:</span>
                          <span className="ap-brand-feat-list">{brand.generalFeatures.join(' · ')}</span>
                        </div>
                      </div>
                    )}

                    <div className="ap-brand-card-footer">
                      <span className="ap-brand-card-cta">
                        View range
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}