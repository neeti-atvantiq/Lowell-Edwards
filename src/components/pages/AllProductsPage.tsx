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
  {
    brand: 'ButterflyMX',
    brandSlug: 'butterflymx',
    mark: 'B',
    status: 'featured',
    category: 'Smart Video Intercom',
    name: 'ButterflyMX 12.5″',
    tagline: 'The flagship apartment intercom. 12.5" touchscreen, HD video calls to any smartphone, cloud-managed across the entire building.',
    specs: ['12.5″ touchscreen', '1080p HD camera', 'IP65 / IK10'],
    href: '/product/butterfly/video-intercom-panel',
    image: 'https://butterflymx.com/wp-content/uploads/2025/12/intercom_video_calling.webp',
  },
  {
    brand: 'ButterflyMX',
    brandSlug: 'butterflymx',
    mark: 'B',
    status: 'popular',
    category: 'Compact Video Intercom',
    name: 'ButterflyMX 7″',
    tagline: 'The compact alternative for smaller buildings, side entrances, or budget-conscious rollouts. Same software, smaller form.',
    specs: ['7″ touchscreen', '1080p camera', 'PoE / WiFi'],
    href: '/product/butterfly/video-intercom-panel',
    image: 'https://butterflymx.com/wp-content/uploads/2023/02/access_control_butterflymx_2_door_controller.png',
  },
  {
    brand: 'ButterflyMX',
    brandSlug: 'butterflymx',
    mark: 'B',
    category: 'PIN & RFID Keypad',
    name: 'ButterflyMX Keypad',
    tagline: 'Standalone PIN and RFID keypad for back gates, mailrooms, or amenity spaces. Cloud-synced credentials, no on-site management needed.',
    specs: ['PIN + RFID', 'Cloud-synced', 'IP65'],
    href: '/product/butterfly/access-control-reader',
    image: 'https://butterflymx.com/wp-content/uploads/2023/02/access_control_butterflymx_2_door_controller.png',
  },
  {
    brand: 'ButterflyMX',
    brandSlug: 'butterflymx',
    mark: 'B',
    category: 'Concierge & Front Desk',
    name: 'Front Desk Station',
    tagline: 'Tablet-based concierge dashboard for staffed lobbies. See and authorise every visitor, courier, and resident in real time.',
    specs: ['10.2″ tablet', 'Cloud dashboard', 'Multi-entry support'],
    href: '/product/butterfly/front-desk-station',
    image: 'https://butterflymx.com/wp-content/uploads/2021/11/audit-trails-butterflymx.jpg',
  },
  {
    brand: 'ButterflyMX',
    brandSlug: 'butterflymx',
    mark: 'B',
    status: 'new',
    category: 'QR Code Intercom',
    name: 'ButterflyMX QR Plaque',
    tagline: 'Visitors scan a QR code to call residents — no app download, no hardware complexity. Lowest-cost entry point into the ButterflyMX ecosystem.',
    specs: ['No electronics', 'Web-based intercom', 'Aluminium plaque'],
    href: '/product/butterfly/qr-code-intercom',
    image: 'https://butterflymx.com/wp-content/uploads/2025/12/butterflymx-scanning-qr-code-2.webp',
  },
  {
    brand: 'ButterflyMX',
    brandSlug: 'butterflymx',
    mark: 'B',
    category: 'Resident Mobile App',
    name: 'ButterflyMX App',
    tagline: 'The app residents use to answer the door, manage visitor PINs, and unlock from anywhere. iOS & Android. Apple Watch support.',
    specs: ['iOS 13+ / Android 8+', 'Apple Watch', 'Free download'],
    href: '/product/butterfly/video-intercom-panel',
    image: 'https://butterflymx.com/wp-content/uploads/2025/12/intercom_video_calling.webp',
  },
  {
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    mark: 'A',
    status: 'featured',
    category: 'AI Face Recognition',
    name: 'Akuvox X915',
    tagline: 'Flagship AI face recognition panel. 8MP RGB + IR + ToF tri-camera. 99.9% accuracy in under 500ms. Touchless authentication.',
    specs: ['10″ IPS · 8MP+IR+ToF', '99.9% accuracy', '3D anti-spoofing'],
    href: '/product/akuvox/x915-flagship-panel',
    image: '/images/products/akuvox/x915.jpg',
  },
  {
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    mark: 'A',
    category: 'SIP Door Phone',
    name: 'Akuvox R29 Series',
    tagline: 'Multi-tenant SIP door phone with directory search and on-screen calling. Solid choice for small-to-medium apartment buildings.',
    specs: ['7″ touchscreen', 'SIP / RFID / PIN', 'Up to 10,000 users'],
    href: '/product/akuvox/r29-face-recognition',
    image: '/images/products/akuvox/R29.jpg',
  },
  {
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    mark: 'A',
    status: 'new',
    category: 'Compact Doorbell',
    name: 'Akuvox E16c',
    tagline: 'Compact single-button doorbell with face recognition + RFID. Sleek slim form factor for residential and small commercial entry points.',
    specs: ['Face + RFID', 'Slim 27mm depth', 'PoE / WiFi'],
    href: '/product/akuvox/e16c-multi-tenant-station',
    image: '/images/products/akuvox/E16.png',
  },
  {
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    mark: 'A',
    category: 'Indoor Monitor',
    name: 'Akuvox S562',
    tagline: '10" indoor wall-mounted monitor for residents who prefer a dedicated panel over the smartphone app. View, talk, unlock from inside.',
    specs: ['10″ HD touchscreen', 'PoE', 'Multi-station support'],
    href: '/product/akuvox/s562-indoor-station',
    image: '/images/products/akuvox/S562.png',
  },
  {
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    mark: 'A',
    category: 'Modular Intercom',
    name: 'Akuvox X912',
    tagline: 'Modular snap-fit panel system. Mix and match camera, keypad, card reader, face recognition, and display modules per entrance.',
    specs: ['6+ module types', 'Snap-fit design', 'IP65 all modules'],
    href: '/product/akuvox/x912-intercom-panel',
    image: '/images/products/akuvox/X912.png',
  },
  {
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    mark: 'A',
    category: 'Access Terminal',
    name: 'Akuvox S532',
    tagline: 'Compact 5" touchscreen access terminal with face recognition, RFID, and PIN. Ideal for secondary doors, gyms, and car parks.',
    specs: ['5″ touchscreen', 'Face + RFID + PIN', '10,000 users'],
    href: '/product/akuvox/s532-body-temperature',
    image: '/images/products/akuvox/S532.png',
  },
  {
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    mark: 'A',
    category: 'Indoor Monitor',
    name: 'Akuvox C313',
    tagline: '7" wall-mounted indoor monitor. See visitors, talk, and unlock without reaching for your phone. PoE single-cable install.',
    specs: ['7″ touchscreen', 'SIP video', 'PoE powered'],
    href: '/product/akuvox/c313-indoor-monitor',
    image: '/images/products/akuvox/C313.png',
  },
  {
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    mark: 'A',
    category: 'Budget Indoor Phone',
    name: 'Akuvox A02S',
    tagline: 'Affordable 4.3" indoor video phone. Essential intercom functionality at an accessible price point for every unit.',
    specs: ['4.3″ display', 'SIP 2.0', 'Budget tier'],
    href: '/product/akuvox/a02s-indoor-phone',
    image: '/images/products/akuvox/a02.png',
  },
  {
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    mark: 'A',
    status: 'popular',
    category: 'Mobile App',
    name: 'Akuvox SmartPlus',
    tagline: 'Companion app for all Akuvox devices. HD video calls, remote unlock, visitor QR codes, and multi-site management.',
    specs: ['iOS + Android', 'Free · no subscription', 'Apple Watch'],
    href: '/product/akuvox/smartplus-app',
    image: '/images/products/akuvox/smartplus.png',
  },
  {
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    mark: 'D',
    status: 'featured',
    category: 'Premium Smart Doorbell',
    name: 'DoorBird D2101V',
    tagline: 'The flagship single-residence doorbell. 4K Ultra HD camera, native HomeKit/KNX/Crestron integration, V4A stainless steel.',
    specs: ['4K UHD camera', 'V4A stainless steel', 'HomeKit · KNX'],
    href: '/product/doorbird/d2101v-surface-station',
    image: '/images/products/doorbird/D2101V.png',
  },
  {
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    mark: 'D',
    category: 'Premium · Brass Finish',
    name: 'D2101V Brass Edition',
    tagline: 'The same flagship hardware in polished brass — for heritage properties, listed buildings, and Georgian/Victorian conversions where finish matters.',
    specs: ['Polished brass', '4K UHD', 'Heritage-suitable'],
    href: '/product/doorbird/d2101v-surface-station',
    image: 'https://www.doorbird.com/shop/media/4260423866782/D1101V_flush_blackdoor_rgb.jpeg',
  },
  {
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    mark: 'D',
    category: 'Multi-Button Series',
    name: 'DoorBird D210X',
    tagline: 'Push-button range from 1-6 buttons. Each routes to a different unit. Full 4K video in premium stainless steel.',
    specs: ['1-6 buttons', '4K camera', 'V4A steel'],
    href: '/product/doorbird/d210x-push-button',
    image: '/images/products/doorbird/D210X.jpeg',
  },
  {
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    mark: 'D',
    status: 'new',
    category: 'Video + Keypad',
    name: 'DoorBird D21DKV',
    tagline: '4K video intercom with integrated backlit keypad. PIN entry plus video calling in one V4A stainless panel.',
    specs: ['4K + keypad', 'Time-limited PINs', 'Dual relay'],
    href: '/product/doorbird/d21dkv-keypad-station',
    image: '/images/products/doorbird/D21DKV.jpeg',
  },
  {
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    mark: 'D',
    category: 'Horizontal Keypad',
    name: 'DoorBird D21DKH',
    tagline: 'Landscape-orientation keypad intercom for gate pillars and wide rails. Same 4K + keypad combo in horizontal format.',
    specs: ['Horizontal mount', '4K + keypad', 'IK10 vandal'],
    href: '/product/doorbird/d21dkh-horizontal-keypad',
    image: '/images/products/doorbird/D21DKH.jpeg',
  },
  {
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    mark: 'D',
    status: 'new',
    category: 'Indoor Station',
    name: 'DoorBird D1101',
    tagline: 'Flush-mount glass-fronted indoor monitor. 7" touchscreen with HomeKit scene triggers. See, talk, unlock — elegantly.',
    specs: ['7″ glass-front', 'HomeKit scenes', 'Flush mount'],
    href: '/product/doorbird/d1101kh-indoor-station',
    image: '/images/products/doorbird/D1101KH.png',
  },
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
