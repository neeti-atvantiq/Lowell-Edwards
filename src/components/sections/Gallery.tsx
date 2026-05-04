'use client';
import Image from 'next/image';
import { useState } from 'react';

type Brand = 'all' | 'bmx' | 'akv' | 'db';

type Card = {
  brand: Exclude<Brand, 'all'>;
  image: string;
  badge: string;
  spec: string;
  brandLabel: string;
  model: string;
  sub: string;
};

const cards: Card[] = [
  { brand: 'bmx', image: '/images/products/butterfly/videocom.webp', badge: 'ButterflyMX', spec: '1080P HD',      brandLabel: 'ButterflyMX', model: 'Video Intercom Panel',    sub: 'Multi-tenant · Cloud managed' },
  // { brand: 'bmx', image: '/images/products/product-02.jpg', badge: 'ButterflyMX', spec: 'iOS · ANDROID', brandLabel: 'ButterflyMX', model: 'Mobile Access App',       sub: 'iOS & Android · Open from anywhere' },
  { brand: 'akv', image: '/images/products/akuvox/R29.png', badge: 'Akuvox',      spec: 'AI · TOUCHLESS', brandLabel: 'Akuvox',      model: 'R29 Face Recognition',    sub: 'AI touchless entry · SIP compatible' },
  { brand: 'akv', image: '/images/products/akuvox/E16.png', badge: 'Akuvox',      spec: 'TOUCHSCREEN',    brandLabel: 'Akuvox',      model: 'E16C Multi-Tenant Station',sub: 'Touchscreen · RFID · PIN access' },
  { brand: 'db',  image: '/images/products/doorbird/D101S.png', badge: 'DoorBird',    spec: 'IP65 · 1080P',  brandLabel: 'DoorBird',    model: 'D101S IP Station',        sub: 'Stainless steel · IP65 · 1080p fisheye' },
  { brand: 'db',  image: '/images/products/doorbird/D2101V.png', badge: 'DoorBird',    spec: 'IK10 · IP65',   brandLabel: 'DoorBird',    model: 'D2101V Surface Station',  sub: 'Horizontal mount · IP65 · IK10 vandal-rated' },
  { brand: 'bmx', image: '/images/products/butterfly/access_control.png', badge: 'ButterflyMX', spec: 'RFID · KEYPAD', brandLabel: 'ButterflyMX', model: 'Access Control Reader',   sub: 'Keypad · RFID fob · Key card' },
];

export default function Gallery() {
  const [filter, setFilter] = useState<Brand>('all');
  const visible = cards
    .map((c, i) => ({ ...c, origIndex: i }))
    .filter((c) => filter === 'all' || c.brand === filter);

  return (
    <section className="section gallery" id="gallery">
      <div className="gallery-inner">
        <div className="gallery-intro reveal">
          <div className="gallery-intro-text">
            <div className="tag">Product Range</div>
            <div className="gallery-intro-title">
              Explore the hardware<br />we <em>supply &amp; install</em>
            </div>
            <div className="gallery-intro-desc">
              Every device below is available through us as a certified integrator — supplied, installed, and maintained by our UK team.
            </div>
          </div>
          <div className="gallery-tabs">
            {(['all', 'bmx', 'akv', 'db'] as Brand[]).map((b) => (
              <button
                key={b}
                type="button"
                className={`g-tab ${filter === b ? 'active' : ''}`}
                onClick={() => setFilter(b)}
              >
                {b === 'all' ? 'All Products' : b === 'bmx' ? 'ButterflyMX' : b === 'akv' ? 'Akuvox' : 'DoorBird'}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid reveal" style={{ transitionDelay: '.1s' }}>
          {visible.map((c) => (
            <div className={`g-card ${c.brand}`} key={`${c.brand}-${c.origIndex}`} data-brand={c.brand}>
              <div className="g-img-area">
                <div className="g-img-bg" />
                <div className="g-badge">{c.badge}</div>
                <div className="g-img-wrap">
                  <Image
                    src={c.image}
                    alt={c.model}
                    width={300} // Set fixed width
                    height={500} // Set fixed height
                    className="g-product-image"
                  />
                </div>
                <button className="g-view-btn" type="button">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  View Product
                </button>
                <div className="g-specs"><span className="g-spec">{c.spec}</span></div>
                <span className="g-index">{String(c.origIndex + 1).padStart(2, '0')}</span>
              </div>
              <div className="g-info">
                <div className="g-info-left">
                  <div className="g-prod-brand">{c.brandLabel}</div>
                  <div className="g-prod-model">{c.model}</div>
                  <div className="g-prod-sub">{c.sub}</div>
                </div>
                <a href="#quote" className="g-info-btn">
                  Quote
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12,5 19,12 12,19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
