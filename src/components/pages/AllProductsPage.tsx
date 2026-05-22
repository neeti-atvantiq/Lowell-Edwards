'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data strictly matching your handwritten notes
const solutionCategories = [
  {
    id: 'intercoms',
    title: 'Intercoms',
    subtitle: 'Primary entry management',
    icon: '📞',
    brands: [
      {
        name: 'Akuvox',
        tagline: 'AI-powered face recognition entry',
        image: '/images/gallery/intercom/akuvox.png',
        link: '/products/akuvox/intercoms',
        entryFeatures: ['App', 'Facial Recg', 'Fobs', 'Pin codes', 'BlueTooth', 'Landlines'],
        appFeatures: ['User pin codes', 'Delivery Pin codes', 'Guest Pin codes', 'User Add/Remove FAMILY & TENANTS']
      },
      {
        name: 'ButterflyMX',
        tagline: 'Cloud-first smartphone video entry',
        image: '/images/gallery/intercom/butterfly.png',
        link: '/products/butterflymx/intercoms',
        entryFeatures: ['App', 'Fobs', 'Pin Codes', 'Landlines'],
        appFeatures: ['User Pin Codes', 'Delivery Pin Codes', 'Guest Pin Codes']
      },
      {
        name: 'DoorBird',
        tagline: 'German-engineered premium IP intercoms',
        image: '/images/gallery/intercom/doorbird.jpg',
        link: '/products/doorbird/intercoms',
        entryFeatures: ['App', 'Fobs', 'Pin Codes (some models)'],
        appFeatures: ['Fix Pin codes on keypad models']
      }
    ]
  },
  {
    id: 'access-control',
    title: 'Access Control',
    subtitle: 'Secondary doors & gates',
    icon: '🔐',
    brands: [
      {
        name: 'Akuvox',
        tagline: 'Multi-modal readers & controllers',
        image: '/images/gallery/access_control/akuvox.png',
        link: '/products/akuvox/access-control',
        generalFeatures: ['Keypad', 'Fob', 'Bluetooth', 'Facial Rec', 'APP Integration', 'Shares Info']
      },
      {
        name: 'ButterflyMX',
        tagline: 'Unified cloud access platform',
        image: '/images/gallery/access_control/butterfly.png',
        link: '/products/butterflymx/access-control',
        generalFeatures: ['Keypad', 'Fob', 'APP Integration', 'Shares Info']
      },
      {
        name: 'DoorBird',
        tagline: 'AES-encrypted I/O controllers',
        image: '/images/gallery/access_control/doorbird.png',
        link: '/products/doorbird/access-control',
        generalFeatures: ['Keypad', 'Fob', 'APP Integration', 'Independent']
      }
    ]
  },
  {
    id: 'apartment-stations',
    title: 'Apartment Stations',
    subtitle: 'In-unit resident monitors',
    icon: '🖥',
    brands: [
      {
        name: 'Akuvox',
        tagline: 'Smart screens from 7" to 10"',
        image: '/images/gallery/aparment/akuvox.png',
        link: '/products/akuvox/apartment-stations',
        generalFeatures: ['7" - 10" Screens', 'Doorbell option', 'View & Talk to Visitors', 'Retrofit friendly', 'Wired or WiFi']
      },
      {
        name: 'DoorBird',
        tagline: 'Premium indoor video panels',
        image: '/images/gallery/aparment/doorbird.png',
        link: '/products/doorbird/apartment-stations',
        generalFeatures: ['4" & 7" Screens', 'View & Talk to visitors', 'Wired or WiFi']
      }
    ]
  }
];

const heroStats = [
  { value: '3', label: 'Premium brands' },
  { value: '500+', label: 'Installations' },
  { value: '10,000+', label: 'Units deployed' },
  { value: '24/7', label: 'Support' },
];

export default function SolutionsPage() {
  const [heroMouse, setHeroMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

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
                <span className="ap-hero-label">Product Catalogue</span>
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

                    {'entryFeatures' in brand && (
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

                    {'generalFeatures' in brand && (
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