'use client';
import { useState } from 'react';

type Brand = 'all' | 'bmx' | 'akv' | 'db';

const cards: { brand: Exclude<Brand, 'all'>; tag: string; title: string; sub: string }[] = [
  { brand: 'bmx', tag: 'ButterflyMX', title: 'Mobile App Entry', sub: 'Residents grant access from their smartphone — anywhere in the world.' },
  { brand: 'bmx', tag: 'ButterflyMX', title: 'Package Room', sub: 'Couriers receive secure access codes — eliminating doorstep theft.' },
  { brand: 'akv', tag: 'Akuvox', title: 'AI Face Recognition', sub: 'Touchless entry powered by AI — for offices and high-security buildings.' },
  { brand: 'akv', tag: 'Akuvox', title: 'SIP Integration', sub: 'Connects directly to existing PBX systems for seamless multi-tenant calling.' },
  { brand: 'db', tag: 'DoorBird', title: 'Stainless Architectural', sub: 'IP65/IK10-rated stainless steel door stations for premium developments.' },
  { brand: 'db', tag: 'DoorBird', title: '1080p Ultra-Wide Camera', sub: 'Crystal-clear day and night vision with 180° field of view.' },
  { brand: 'db', tag: 'DoorBird', title: 'Smart Home Ready', sub: 'Native integration with Control4, Crestron, Savant, and more.' },
];

export default function Gallery() {
  const [filter, setFilter] = useState<Brand>('all');
  const visible = cards.filter((c) => filter === 'all' || c.brand === filter);

  return (
    <section className="section gallery" id="gallery">
      <div className="wrap">
        <div className="gallery-header reveal">
          <div className="tag" style={{ justifyContent: 'center' }}>Capabilities Showcase</div>
          <h2 className="h2">See it in action</h2>
          <p
            className="body-lg"
            style={{ marginTop: 18, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}
          >
            Explore our most-installed capabilities by brand. Filter to see what each system does best.
          </p>
        </div>
        <div className="g-tabs reveal">
          {(['all', 'bmx', 'akv', 'db'] as Brand[]).map((b) => (
            <button
              key={b}
              className={`g-tab ${filter === b ? 'active' : ''}`}
              onClick={() => setFilter(b)}
            >
              {b === 'all' ? 'All' : b === 'bmx' ? 'ButterflyMX' : b === 'akv' ? 'Akuvox' : 'DoorBird'}
            </button>
          ))}
        </div>
        <div className="g-grid reveal" style={{ transitionDelay: '.1s' }}>
          {visible.map((c, i) => (
            <div className={`g-card g-${c.brand}`} key={i} data-brand={c.brand}>
              <div className="g-art">
                <svg viewBox="0 0 320 200" fill="none">
                  <rect x="0" y="0" width="320" height="200" rx="6" fill="#0a0a18" />
                  <rect x="40" y="30" width="240" height="140" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".4" />
                  <circle cx="160" cy="100" r="38" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="160" cy="100" r="14" fill="currentColor" opacity=".6" />
                </svg>
              </div>
              <div className="g-meta">
                <div className="g-tag">{c.tag}</div>
                <div className="g-title">{c.title}</div>
                <div className="g-sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
