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

const cards: Card[] = [
  { brand: 'bmx', image: 'https://butterflymx.com/wp-content/uploads/2025/12/intercom_video_calling.webp', badge: 'ButterflyMX', spec: '1080P HD',      brandLabel: 'ButterflyMX', model: 'Video Intercom Panel',    sub: 'Multi-tenant · Cloud managed', href: '/product/butterfly/video-intercom-panel' },
  { brand: 'bmx', image: 'https://butterflymx.com/wp-content/uploads/2023/02/access_control_butterflymx_2_door_controller.png', badge: 'ButterflyMX', spec: 'RFID · KEYPAD', brandLabel: 'ButterflyMX', model: 'Access Control Reader',   sub: 'Keypad · RFID fob · Key card', href: '/product/butterfly/access-control-reader' },
  { brand: 'bmx', image: 'https://butterflymx.com/wp-content/uploads/2025/12/butterflymx-scanning-qr-code-2.webp', badge: 'ButterflyMX', spec: 'QR · NO APP', brandLabel: 'ButterflyMX', model: 'QR Code Intercom',    sub: 'Visitor scan · no app download · aluminium', href: '/product/butterfly/qr-code-intercom' },
  { brand: 'bmx', image: 'https://butterflymx.com/wp-content/uploads/2021/11/audit-trails-butterflymx.jpg', badge: 'ButterflyMX', spec: 'CONCIERGE', brandLabel: 'ButterflyMX', model: 'Front Desk Station',    sub: 'Tablet dashboard · multi-entry · audit logs', href: '/product/butterfly/front-desk-station' },
  { brand: 'akv', image: '/images/products/akuvox/X915.jpg', badge: 'Akuvox',      spec: 'AI · TOUCHLESS', brandLabel: 'Akuvox',      model: 'X915 Flagship Panel',    sub: 'Tri-camera · 50k faces · 3D anti-spoof', href: '/product/akuvox/x915-flagship-panel' },
  { brand: 'akv', image: '/images/products/akuvox/R29.jpg', badge: 'Akuvox',      spec: 'AI · 7" TOUCH', brandLabel: 'Akuvox',      model: 'R29 Face Recognition',    sub: 'AI touchless entry · SIP compatible', href: '/product/akuvox/r29-face-recognition' },
  { brand: 'akv', image: '/images/products/akuvox/X912.png', badge: 'Akuvox',      spec: 'MODULAR',    brandLabel: 'Akuvox',      model: 'X912 Modular Intercom',sub: 'Snap-fit modules · expandable', href: '/product/akuvox/x912-intercom-panel' },
  { brand: 'akv', image: '/images/products/akuvox/E16.png', badge: 'Akuvox',      spec: 'TOUCHSCREEN',    brandLabel: 'Akuvox',      model: 'E16C Multi-Tenant Station',sub: 'Touchscreen · RFID · PIN access', href: '/product/akuvox/e16c-multi-tenant-station' },
  { brand: 'akv', image: '/images/products/akuvox/S532.png', badge: 'Akuvox',      spec: 'COMPACT',    brandLabel: 'Akuvox',      model: 'S532 Access Terminal',sub: 'Face + RFID + PIN · 5" screen', href: '/product/akuvox/s532-body-temperature' },
  { brand: 'db',  image: '/images/products/doorbird/D210X.jpeg', badge: 'DoorBird',    spec: '4K · V4A',   brandLabel: 'DoorBird',    model: 'D210X Push Button',        sub: '1-6 buttons · 4K · stainless steel', href: '/product/doorbird/d210x-push-button' },
  { brand: 'db',  image: 'https://www.doorbird.com/shop/media/4260423870840/4260423870840.png', badge: 'DoorBird',    spec: '4K · KEYPAD',  brandLabel: 'DoorBird',    model: 'D21DKV Keypad Station',        sub: '4K video + backlit keypad · dual relay', href: '/product/doorbird/d21dkv-keypad-station' },
  { brand: 'db',  image: 'https://www.doorbird.com/shop/media/4260423870055/4260423870055.png', badge: 'DoorBird',    spec: 'IP65 · 1080P',  brandLabel: 'DoorBird',    model: 'D101S IP Station',        sub: 'Stainless steel · IP65 · 1080p fisheye', href: '/product/doorbird/d101s-ip-station' },
  { brand: 'db',  image: 'https://www.doorbird.com/web-interface/media/productImage.php?ean=4260423866744', badge: 'DoorBird',    spec: 'IK10 · IP65',   brandLabel: 'DoorBird',    model: 'D2101V Surface Station',  sub: 'Horizontal mount · IP65 · IK10 vandal-rated', href: '/product/doorbird/d2101v-surface-station' },
  { brand: 'db',  image: 'https://www.doorbird.com/shop/media/4260423867550/transparent_4260423867550.png', badge: 'DoorBird',    spec: 'GLASS · 7"',   brandLabel: 'DoorBird',    model: 'D1101KH Indoor Station',  sub: 'Flush-mount glass · HomeKit scenes', href: '/product/doorbird/d1101fh-indoor-station' },
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
