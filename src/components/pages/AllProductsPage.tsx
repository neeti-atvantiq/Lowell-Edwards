'use client';
import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ProductCard = {
  brand: string;
  brandSlug: string;
  mark: string;
  status?: 'featured' | 'popular' | 'new';
  category: string;
  name: string;
  tagline: string;
  specs: string[];
  href: string;
  image: string;
};

const allProducts: ProductCard[] = [
  // AKUVOX
  { brand: 'Akuvox', brandSlug: 'akuvox', category: 'AI Face Recognition', name: 'Akuvox X915', mark: 'A', tagline: 'Flagship AI panel with 8MP+IR+ToF tri-camera.', specs: ['10″ IPS', '99.9% accuracy', '3D anti-spoofing'], href: '/product/akuvox/x915-flagship-panel', image: 'https://www.akuvox.com/uploads/202012/2020123119053400.png' },
  { brand: 'Akuvox', brandSlug: 'akuvox', category: 'Modular Intercom', name: 'Akuvox X912', mark: 'A', tagline: 'Modular snap-fit system. Mix and match modules per entrance.', specs: ['6+ modules', 'IP65', 'Modular'], href: '/product/akuvox/x912-intercom-panel', image: '/images/products/akuvox/X912.png' },
  { brand: 'Akuvox', brandSlug: 'akuvox', category: 'Access Terminal', name: 'Akuvox S532', mark: 'A', tagline: 'Compact 5" touchscreen terminal with face recognition.', specs: ['5″ screen', 'Face/RFID/PIN', '10k users'], href: '/product/akuvox/s532-body-temperature', image: '/images/products/akuvox/S532.png' },
  { brand: 'Akuvox', brandSlug: 'akuvox', category: 'Indoor Monitor', name: 'Akuvox C313', mark: 'A', tagline: '7" wall-mounted monitor for residents. PoE powered.', specs: ['7″ touchscreen', 'SIP video', 'PoE'], href: '/product/akuvox/c313-indoor-monitor', image: '/images/products/akuvox/C313.png' },
  { brand: 'Akuvox', brandSlug: 'akuvox', category: 'Premium Monitor', name: 'Akuvox S562', mark: 'A', tagline: '10" premium station with smart home control.', specs: ['10″ HD display', 'Android OS', 'Home control'], href: '/product/akuvox/s562-indoor-station', image: '/images/products/akuvox/S562.png' },
  { brand: 'Akuvox', brandSlug: 'akuvox', category: 'Access Control', name: 'Akuvox A02s', mark: 'A', tagline: 'Sleek RFID and keypad access reader.', specs: ['Keypad/RFID', 'Cloud-managed', 'PoE'], href: '/product/akuvox/a02s-indoor-phone', image: '/images/products/akuvox/a02.png' },
  { brand: 'Akuvox', brandSlug: 'akuvox', category: 'Access Control', name: 'Akuvox A08', mark: 'A', tagline: 'Enterprise-grade 2-door controller.', specs: ['2-door control', 'Offline mode', 'PoE+'], href: '/product/akuvox/a08-access-controller', image: 'https://www.akuvox.com/uploads/images/9d537ac8c4fcaea6a45dbe8ed0952389.png' },
  { brand: 'Akuvox', brandSlug: 'akuvox', category: 'Access Control', name: 'Akuvox A094', mark: 'A', tagline: 'Powerful 4-door access control unit.', specs: ['4-door control', '50k cards', 'DIN rail'], href: '/product/akuvox/a094-access-controller', image: 'https://www.akuvox.com/uploads/202301/2023011116260311.png' },
  { brand: 'Akuvox', brandSlug: 'akuvox', category: 'Mobile App', name: 'Akuvox SmartPlus', mark: 'A', tagline: 'Unified app for mobile access and video calls.', specs: ['iOS/Android', 'Remote Unlock', 'Free'], href: '/product/akuvox/smartplus-app', image: '/images/products/akuvox/smartplus.png' },

  // DOORBIRD
  { brand: 'DoorBird', brandSlug: 'doorbird', category: 'Multi-Button Intercom', name: 'DoorBird D210X', mark: 'D', tagline: 'Push-button range (1-6) in V4A stainless steel.', specs: ['1-6 buttons', '4K UHD', 'V4A steel'], href: '/product/doorbird/d210x-push-button', image: '/images/products/doorbird/D210X.jpeg' },
  { brand: 'DoorBird', brandSlug: 'doorbird', category: 'Keypad Intercom', name: 'DoorBird D21DKV', mark: 'D', tagline: 'Vertical video intercom with backlit keypad.', specs: ['4K Camera', 'PIN access', 'Dual relay'], href: '/product/doorbird/d21dkv-keypad-station', image: '/images/products/doorbird/D21DKV.jpeg' },
  { brand: 'DoorBird', brandSlug: 'doorbird', category: 'Horizontal Intercom', name: 'DoorBird D21DKH', mark: 'D', tagline: 'Landscape orientation for gates and wide pillars.', specs: ['Horizontal', '4K + Keypad', 'IK10 vandal'], href: '/product/doorbird/d21dkh-horizontal-keypad', image: '/images/products/doorbird/D21DKH.jpeg' },
  { brand: 'DoorBird', brandSlug: 'doorbird', category: 'Display Intercom', name: 'DoorBird D31TDH', mark: 'D', tagline: 'Large LCD directory display with 4K camera.', specs: ['Digital search', '4K sensor', 'V4A steel'], href: '/product/doorbird/d31tdh-display', image: 'https://www.doorbird.com/web-interface/media/productImage.php?ean=4251489601011' },
  { brand: 'DoorBird', brandSlug: 'doorbird', category: 'Indoor Station', name: 'DoorBird A1101', mark: 'D', tagline: 'Flush-mount glass monitor for residents.', specs: ['7″ Glass front', 'HomeKit scenes', 'PoE'], href: '/product/doorbird/d1101kh-indoor-station', image: '/images/products/doorbird/D1101KH.png' },
  { brand: 'DoorBird', brandSlug: 'doorbird', category: 'Mobile App', name: 'DoorBird App', mark: 'D', tagline: 'Local storage, no subscription mobile access.', specs: ['iOS/Android', 'No Monthly Fees', 'Native SDK'], href: '/product/doorbird/doorbird-app', image: 'https://www.doorbird.com/images/en_phone_live.png' },
  {brand: 'DoorBird',brandSlug: 'doorbird',mark: 'D',category: 'Access Control',name: 'DoorBird A1081',tagline: 'Network IP I/O controller for tamper-proof door and gate operation.',specs: ['3 Relays', 'AES-128 Encrypted', 'PoE Powered'],href: '/product/doorbird/a1081-access-controller', image: 'https://www.doorbird.com/web-interface/media/productImage.php?ean=4260423860346',},
  // BUTTERFLYMX
  { brand: 'ButterflyMX', brandSlug: 'butterflymx', category: 'Access Control', name: 'ButterflyMX Reader', mark: 'B', tagline: 'Keypad and RFID reader for secondary doors.', specs: ['PIN + RFID', 'Cloud-synced', 'IP65'], href: '/product/butterfly/access-control-reader', image: 'https://butterflymx.com/wp-content/uploads/2023/02/butterflymx-single-gang-reader.png' },
  { brand: 'ButterflyMX', brandSlug: 'butterflymx', category: 'Smart Camera', name: 'ButterflyMX Camera', mark:'B', tagline: 'Smart security camera for unified perimeter tracking.', specs: ['1080p HD', 'Audit logs', 'Cloud video'], href: '/product/butterfly/camera', image: 'https://butterflymx.com/wp-content/uploads/2024/08/butterflymx-dome-security-camera-features.webp' },
];

const PAGE_SIZE = 9;
const LOAD_INCREMENT = 6;

export default function AllProductsPage() {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('featured');
  const [visibleLimit, setVisibleLimit] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const items = filter === 'all' ? [...allProducts] : allProducts.filter((p) => p.brandSlug === filter);
    if (sort === 'brand') {
      items.sort((a, b) => a.brand.localeCompare(b.brand));
    } else if (sort === 'name') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    }
    return items;
  }, [filter, sort]);

  const visible = filtered.slice(0, visibleLimit);

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
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [visible]);

  const counts = {
    all: allProducts.length,
    butterflymx: allProducts.filter((p) => p.brandSlug === 'butterflymx').length,
    akuvox: allProducts.filter((p) => p.brandSlug === 'akuvox').length,
    doorbird: allProducts.filter((p) => p.brandSlug === 'doorbird').length,
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="wrap ap-breadcrumb">
        <div className="ap-breadcrumb-inner">
          <Link href="/">Home</Link>
          <span className="ap-breadcrumb-sep">/</span>
          <span className="ap-crumb-current">All Products</span>
        </div>
      </div>

      {/* Header */}
      <section className="ap-header">
        <div className="wrap">
          <div className="ap-header-inner reveal in">
            <div className="ap-tag">All Products</div>
            <h1 className="ap-h1">Browse the full <em className="em">range.</em></h1>
            <p className="ap-header-desc">Every ButterflyMX, Akuvox, and DoorBird product we supply and install — filtered, comparable, and ready to spec for your project. Each model is matched to specific deployment scenarios; tap any product for full details and a tailored quote.</p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="ap-filter-bar">
        <div className="wrap ap-filter-bar-inner">
          <div className="ap-filter-tabs">
            <button
              className={`ap-filter-tab${filter === 'all' ? ' active' : ''}`}
              onClick={() => { setFilter('all'); setVisibleLimit(PAGE_SIZE); }}
            >
              All Products <span className="ap-filter-tab-count">{counts.all}</span>
            </button>
            <button
              className={`ap-filter-tab${filter === 'butterflymx' ? ' active' : ''}`}
              onClick={() => { setFilter('butterflymx'); setVisibleLimit(PAGE_SIZE); }}
            >
              <span className="ap-filter-tab-mark">B</span>
              ButterflyMX <span className="ap-filter-tab-count">{counts.butterflymx}</span>
            </button>
            <button
              className={`ap-filter-tab${filter === 'akuvox' ? ' active' : ''}`}
              onClick={() => { setFilter('akuvox'); setVisibleLimit(PAGE_SIZE); }}
            >
              <span className="ap-filter-tab-mark">A</span>
              Akuvox <span className="ap-filter-tab-count">{counts.akuvox}</span>
            </button>
            <button
              className={`ap-filter-tab${filter === 'doorbird' ? ' active' : ''}`}
              onClick={() => { setFilter('doorbird'); setVisibleLimit(PAGE_SIZE); }}
            >
              <span className="ap-filter-tab-mark">D</span>
              DoorBird <span className="ap-filter-tab-count">{counts.doorbird}</span>
            </button>
          </div>
          <div className="ap-filter-meta">
            <div className="ap-filter-count">
              Showing <strong>{visible.length}</strong> of <strong>{filtered.length}</strong>
            </div>
            <select
              className="ap-filter-sort"
              value={sort}
              onChange={(e) => { setSort(e.target.value); setVisibleLimit(PAGE_SIZE); }}
            >
              <option value="featured">Sort: Featured</option>
              <option value="brand">Sort: Brand A–Z</option>
              <option value="name">Sort: Model name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="ap-grid-section">
        <div className="wrap">
          <div className="ap-grid">
            {visible.map((p, i) => (
              <article className="ap-card reveal" key={`${p.name}-${i}`}>
                <div className="ap-card-image">
                  <div className="ap-card-image-bg"></div>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'contain', padding: '20px' }}
                  />
                  <span className="ap-brand-tag">
                    <span className="ap-brand-mark">{p.mark}</span>
                    <span className="ap-brand-name">{p.brand}</span>
                  </span>
                  {p.status && (
                    <span className={`ap-status ap-status-${p.status}`}>
                      {p.status === 'featured' ? 'Featured' : p.status === 'popular' ? 'Popular' : 'New'}
                    </span>
                  )}
                </div>
                <div className="ap-card-content">
                  <div className="ap-card-cat">{p.category}</div>
                  <div className="ap-card-name">{p.name}</div>
                  <p className="ap-card-tagline">{p.tagline}</p>
                  <div className="ap-card-specs">
                    {p.specs.map((s, j) => (
                      <span className="ap-card-spec" key={j}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className="ap-card-footer">
                  <Link href={p.href} className="ap-card-cta">
                    View Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </Link>
                  <Link href="/contact" className="ap-card-quote">Quote</Link>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="ap-empty">
              <h3>No products match this filter</h3>
              <p>Try selecting a different brand or showing all products.</p>
              <button className="btn btn-outline" onClick={() => setFilter('all')}>Show All Products</button>
            </div>
          )}

          {/* View More */}
          {visible.length < filtered.length && (
            <div className="ap-view-more">
              <div className="ap-view-more-progress">
                <span><strong>{visible.length}</strong> of <strong>{filtered.length}</strong> products</span>
                <div className="ap-view-more-bar">
                  <div className="ap-view-more-bar-fill" style={{ width: `${Math.round((visible.length / filtered.length) * 100)}%` }}></div>
                </div>
              </div>
              <button
                className="btn btn-gold ap-view-more-btn"
                onClick={() => setVisibleLimit((l) => l + LOAD_INCREMENT)}
              >
                <span>View More Products</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="ap-bottom-cta">
        <div className="wrap ap-bottom-cta-inner">
          <div className="ap-bottom-cta-text">
            <div className="ap-bottom-cta-eyebrow">Need help choosing?</div>
            <h2 className="ap-bottom-cta-h2">Get a tailored quote<br />for your <em className="em">project.</em></h2>
            <p className="ap-bottom-cta-desc">Tell us about your property and we&apos;ll come back within 24 hours with a transparent, itemised proposal — reviewed by a real engineer, not a sales bot.</p>
          </div>
          <div className="ap-bottom-cta-actions">
            <Link href="/contact" className="btn btn-gold">
              <span>Get a Free Quote</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <a href="tel:2015253300" className="btn btn-outline ap-cta-call">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9v2.02z" /></svg>
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
