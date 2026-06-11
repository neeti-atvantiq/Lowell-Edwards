import Image from 'next/image';

const products = [
  {
    klass: 'bmx',
    cert: 'Authorised Reseller',
    certLogo: '/images/products/cert/butterfly.png',
    ref: 'Series 02',
    brand: 'ButterflyMX',
    type: 'Video Intercom & Smart Access',
    image: '/images/products/butterfly_img.png',
    desc: 'Cloud-managed video intercom purpose-built for residential buildings. Residents open doors via smartphone; managers control entire portfolios from a single dashboard; couriers use dedicated delivery access codes.',
    specs: [
      'HD video call to any smartphone',
      'QR code & mobile key entry',
      'Package room & delivery management',
      'Cloud-managed portfolio dashboard',
      'Visitor & contractor access codes',
    ],
  },
  {
    klass: 'akv',
    cert: 'Authorised Partner',
      certLogo: '/images/products/cert/akuvox.png',
    ref: 'Series 04',
    brand: 'Akuvox',
    type: 'AI Face Recognition Intercom',
    image: '/images/products/akuvox_img.png',
    desc: 'AI-powered SIP intercom with touchless face recognition entry. Designed for both small and large residential buildings. Integrates with existing wiring systems and supports Bluetooth and PIN backup access methods with full audit logging.',
    specs: [
      'AI face recognition — touchless entry',
      'Access Control system integration',
      'Bluetooth & PIN ~ Backup access & Code Access',
      'Multi-tenant door station support',
      'Full entry audit log',
      'Standard phone support',
      'Apartment stations are available'
    ],
  },
  {
    klass: 'db',
    cert: 'Certified Installer',
      certLogo: '/images/products/cert/doorbird.png',
    ref: 'Series 07',
    brand: 'DoorBird',
    type: 'Premium IP Video Door Station',
    image: '/images/products/doorbird_img.jpg',
    desc: 'Premium stainless steel IP video door stations built for demanding architectural environments. IP65 and IK10 rated for outdoor durability and vandal resistance. Ultra-wide 1080p camera with IR night vision. The preferred choice for luxury developments where aesthetics are non-negotiable.',
    specs: [
      'Stainless steel architectural design',
      'IP65 / IK10 — outdoor & vandal rated',
      '1080p ultra-wide fisheye camera',
      'Smart home platform integration',
      'IR night vision',
    ],
  },
];

export default function Products() {
  return (
    <section className="section products" id="products">
      <div className="wrap">
        <div className="products-header reveal">
          <div className="tag">Extensive Selection</div>
          <h2 className="h2">
            Equipment choices optimized for your building
          </h2>
        </div>
        <div className="integrator-note reveal" style={{ transitionDelay: '.1s' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>
            <strong>As a certified integrator and reseller, we deliver end-to-end management of your building systems.</strong>
            <br />
            <span style={{ fontSize: '0.93em', display: 'inline-block', marginTop: 2 }}>
               We assess your facility’s unique needs, recommend the ideal solution, and handle every phase—from expert supply and installation to long-term maintenance—ensuring optimal performance.
            </span>
          </span>
        </div>
        <div className="prod-grid reveal" style={{ transitionDelay: '.15s' }}>
          {products.map((p) => (
            <div className="prod-card" key={p.brand}>
              <div className="prod-image">
                <Image
                  src={p.image}
                  alt={p.brand}
                  width={1200}
                  height={800}
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="prod-top">
                <div className="prod-top-left">
                  <div className="prod-brand">{p.brand}</div>
                  <div className="prod-type">{p.type}</div>
                </div>
                <span className="prod-cert">
                  <Image
                    src={p.certLogo}
                    alt={p.cert}
                    width={80}
                    height={80}
                    className="cert-logo"
                  />
                </span>
              </div>
              <div className="prod-body">
                <div className="prod-divider" />
                <div className="prod-desc">{p.desc}</div>
                <div className="prod-specs">
                  {p.specs.map((s) => (
                    <div className="prod-spec" key={s}>
                      <div className="prod-spec-dot" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <div className="prod-footer">
                <a href="#quote" className="btn btn-gold" style={{ fontSize: 11.5, padding: '11px 22px' }}>
                  Request a Quote
                </a>
                <a href="#compare" className="btn btn-ghost">Compare</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
