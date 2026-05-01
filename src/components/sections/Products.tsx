import Image from 'next/image';

const products = [
  {
    klass: 'bmx',
    cert: 'Authorised Reseller',
    ref: 'Series 02',
    brand: 'ButterflyMX',
    type: 'Video Intercom & Smart Access',
    image: '/images/products/butterfly.jpg',
    desc: 'Cloud-managed video intercom purpose-built for residential buildings. Residents open doors via smartphone; managers control entire portfolios from a single dashboard; couriers use dedicated delivery access codes. The most widely deployed solution in UK apartment blocks.',
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
    ref: 'Series 04',
    brand: 'Akuvox',
    type: 'AI Face Recognition Intercom',
    image: '/images/products/akuvox.jpg',
    desc: 'AI-powered SIP intercom with touchless face recognition entry. Designed for offices, student accommodation, and high-security residential buildings. Integrates with existing PBX telephone systems and supports RFID and PIN backup access methods with full audit logging.',
    specs: [
      'AI face recognition — touchless entry',
      'SIP / PBX system integration',
      'RFID & PIN backup access',
      'Multi-tenant door station support',
      'Full entry audit log',
    ],
  },
  {
    klass: 'db',
    cert: 'Certified Installer',
    ref: 'Series 07',
    brand: 'DoorBird',
    type: 'Premium IP Video Door Station',
    image: '/images/products/doorbird.jpg',
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
          <div className="tag">Systems We Integrate</div>
          <h2 className="h2">
            The right hardware<br />for your building
          </h2>
        </div>
        <div className="integrator-note reveal" style={{ transitionDelay: '.1s' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          We are certified authorised integrators and resellers for each of the systems below. Our
          role is to assess your building&apos;s specific requirements, recommend the most suitable
          solution, then manage the complete process from supply and installation through to
          long-term maintenance.
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
              <div className="prod-meta">
                <span className="prod-cert">{p.cert}</span>
                {/* <span className="prod-ref">{p.ref}</span> */}
              </div>
              <div className="prod-top">
                <div className="prod-brand">{p.brand}</div>
                <div className="prod-type">{p.type}</div>
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
