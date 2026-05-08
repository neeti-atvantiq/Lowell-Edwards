'use client';
import Image from 'next/image';
import Link from 'next/link';
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
  href: string;
};

export const cards: Card[] = [
  // --- BUTTERFLYMX (Access Control & Camera ONLY) ---
  { brand: 'bmx', image: 'https://butterflymx.com/wp-content/uploads/2023/02/butterflymx-single-gang-reader.png', badge: 'ButterflyMX', spec: 'RFID · KEYPAD', brandLabel: 'ButterflyMX', model: 'Access Control Reader', sub: 'Keypad · RFID fob · Key card', href: '/product/butterfly/access-control-reader' },
  { brand: 'bmx', image: 'https://butterflymx.com/wp-content/uploads/2024/08/butterflymx-dome-security-camera-features.webp', badge: 'ButterflyMX', spec: 'CLOUD · POE', brandLabel: 'ButterflyMX', model: 'Smart Camera', sub: 'Unified CCTV · Cloud recording', href: '/product/butterfly/camera' },

  // --- AKUVOX INTERCOM MODELS (X915, X912, S532) ---
  { brand: 'akv', image: 'https://www.akuvox.com/uploads/202012/2020123119053400.png', badge: 'Akuvox', spec: 'AI · TOUCHLESS', brandLabel: 'Akuvox', model: 'X915 Flagship Panel', sub: 'Tri-camera · 50k faces · 3D anti-spoof', href: '/product/akuvox/x915-flagship-panel' },
  { brand: 'akv', image: '/images/products/akuvox/X912.png', badge: 'Akuvox', spec: 'MODULAR', brandLabel: 'Akuvox', model: 'X912 Modular Intercom', sub: 'Snap-fit modules · expandable', href: '/product/akuvox/x912-intercom-panel' },
  { brand: 'akv', image: '/images/products/akuvox/S532.png', badge: 'Akuvox', spec: 'COMPACT', brandLabel: 'Akuvox', model: 'S532 Access Terminal', sub: 'Face + RFID + PIN · 5" screen', href: '/product/akuvox/s532-body-temperature' },

  // --- AKUVOX APARTMENT STATIONS (C313, S562) ---
  { brand: 'akv', image: '/images/products/akuvox/C313.png', badge: 'Akuvox', spec: '7" · POE', brandLabel: 'Akuvox', model: 'C313 Indoor Monitor', sub: 'Wall-mounted · SIP · HD Touchscreen', href: '/product/akuvox/c313-indoor-monitor' },
  { brand: 'akv', image: '/images/products/akuvox/S562.png', badge: 'Akuvox', spec: '10" · SMART', brandLabel: 'Akuvox', model: 'S562 Indoor Station', sub: 'Premium Android OS · Smart home control', href: '/product/akuvox/s562-indoor-station' },

  // --- AKUVOX ACCESS CONTROL (A02s, A08, A094) ---
  { brand: 'akv', image: '/images/products/akuvox/a02.png', badge: 'Akuvox', spec: 'RFID · PIN', brandLabel: 'Akuvox', model: 'A02S Access Reader', sub: 'Slim mullion reader · Cloud ready', href: '/product/akuvox/a02s-indoor-phone' },
  { brand: 'akv', image: 'https://www.akuvox.com/uploads/images/9d537ac8c4fcaea6a45dbe8ed0952389.png', badge: 'Akuvox', spec: '2-DOOR · CLOUD', brandLabel: 'Akuvox', model: 'A08 Access Controller', sub: 'Web-managed 2-door hub · Offline cache', href: '/product/akuvox/a08-access-controller' },
  { brand: 'akv', image: 'https://www.akuvox.com/uploads/202301/2023011116260311.png', badge: 'Akuvox', spec: '4-DOOR · DIN', brandLabel: 'Akuvox', model: 'A094 Access Controller', sub: 'Enterprise 4-door hub · Anti-passback', href: '/product/akuvox/a094-access-controller' },

  // --- AKUVOX APP ---
  { brand: 'akv', image: '/images/products/akuvox/smartplus.png', badge: 'Akuvox', spec: 'IOS · ANDROID', brandLabel: 'Akuvox', model: 'SmartPlus App', sub: 'Mobile entry · Video calls · Cloud', href: '/product/akuvox/smartplus-app' },

  // --- DOORBIRD INTERCOM PANELS (D210X, D21DKV, D21DKH, D31TDH) ---
  { brand: 'db', image: '/images/products/doorbird/D210X.jpeg', badge: 'DoorBird', spec: '4K · V4A', brandLabel: 'DoorBird', model: 'D210X Push Button', sub: '1-6 buttons · 4K · stainless steel', href: '/product/doorbird/d210x-push-button' },
  { brand: 'db', image: 'https://www.doorbird.com/shop/media/4260423870840/4260423870840.png', badge: 'DoorBird', spec: '4K · KEYPAD', brandLabel: 'DoorBird', model: 'D21DKV Keypad Station', sub: '4K video + backlit keypad · dual relay', href: '/product/doorbird/d21dkv-keypad-station' },
  { brand: 'db', image: '/images/products/doorbird/D21DKH.jpeg', badge: 'DoorBird', spec: 'HORIZONTAL', brandLabel: 'DoorBird', model: 'D21DKH Gate Keypad', sub: 'Landscape format · 4K + keypad', href: '/product/doorbird/d21dkh-horizontal-keypad' },
  { brand: 'db', image: 'https://www.doorbird.com/web-interface/media/productImage.php?ean=4251489601011', badge: 'DoorBird', spec: 'DIRECTORY · 4K', brandLabel: 'DoorBird', model: 'D31TDH Display Intercom', sub: 'Touchscreen search · V4A steel', href: '/product/doorbird/d31tdh-display' },

  // --- DOORBIRD APT STATIONS ---
  { brand: 'db', image: 'https://www.doorbird.com/shop/media/4260423867550/transparent_4260423867550.png', badge: 'DoorBird', spec: 'GLASS · 7"', brandLabel: 'DoorBird', model: 'A1101 Indoor Station', sub: 'Flush-mount glass · HomeKit scenes', href: '/product/doorbird/d1101fh-indoor-station' },

  // --- DOORBIRD ACCESS CONTROL ---
  { brand: 'db', image: 'https://www.doorbird.com/web-interface/media/productImage.php?ean=4260423860346', badge: 'DoorBird', spec: 'I/O CONTROLLER', brandLabel: 'DoorBird', model: 'A1081 Access Controller', sub: 'Network IP I/O Door Controller', href: '/product/doorbird/a1081-access-controller' },

  // --- DOORBIRD APP ---
  { brand: 'db', image: 'https://www.doorbird.com/images/en_phone_live.png', badge: 'DoorBird', spec: 'LOCAL STORAGE', brandLabel: 'DoorBird', model: 'DoorBird App', sub: 'iOS/Android · No subscription fees', href: '/product/doorbird/doorbird-app' },
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
                <Link href={c.href} className="g-view-btn">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  View Product
                </Link>
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
