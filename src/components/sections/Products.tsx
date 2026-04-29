const products = [
  {
    klass: 'bmx',
    cert: 'Authorised Reseller',
    ref: 'Series 02',
    brand: 'ButterflyMX',
    type: 'Video Intercom & Smart Access',
    desc: 'Cloud-managed video intercom purpose-built for residential buildings. Residents open doors via smartphone; managers control entire portfolios from a single dashboard; couriers use dedicated delivery access codes. The most widely deployed solution in multi-family apartment blocks.',
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

function ProductArt({ klass }: { klass: string }) {
  // Simplified but faithful brand-tinted device illustration
  return (
    <svg
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: 'block', width: '100%', height: '100%' }}
    >
      <rect width="800" height="500" fill="var(--bg2)" />
      {klass === 'bmx' && (
        <>
          <rect x="210" y="70" width="380" height="365" rx="14" fill="var(--bg2)" stroke="var(--gold)" strokeWidth="1.8" />
          <rect x="245" y="135" width="310" height="220" rx="6" fill="none" stroke="var(--gold)" strokeWidth="1.2" opacity=".7" />
          <circle cx="400" cy="218" r="42" fill="none" stroke="var(--gold)" strokeWidth="1.4" opacity=".75" />
          <circle cx="400" cy="208" r="14" fill="var(--gold)" opacity=".55" />
          <path d="M 372 252 Q 400 232 428 252 L 428 260 L 372 260 Z" fill="var(--gold)" opacity=".55" />
          <rect x="370" y="305" width="110" height="30" rx="15" fill="none" stroke="var(--gold)" strokeWidth="1.3" opacity=".85" />
          <rect x="395" y="313" width="10" height="14" fill="none" stroke="var(--gold)" strokeWidth="1.2" opacity=".9" />
          <circle cx="402" cy="320" r="1" fill="var(--gold)" />
        </>
      )}
      {klass === 'akv' && (
        <>
          <rect x="310" y="50" width="180" height="395" rx="9" fill="var(--bg2)" stroke="var(--gold)" strokeWidth="1.8" />
          <circle cx="400" cy="105" r="22" fill="var(--bg2)" stroke="var(--gold)" strokeWidth="1.6" />
          <circle cx="400" cy="105" r="11" fill="var(--gold)" opacity=".35" />
          <ellipse cx="400" cy="232" rx="30" ry="38" fill="none" stroke="var(--gold)" strokeWidth="1.4" opacity=".7" />
          <circle cx="389" cy="225" r="1.6" fill="var(--gold)" />
          <circle cx="411" cy="225" r="1.6" fill="var(--gold)" />
          <path d="M 393 248 Q 400 252 407 248" stroke="var(--gold)" strokeWidth="1" fill="none" />
          {[372, 383, 394, 405].flatMap((y) =>
            [400, 414, 428].map((x) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="none" stroke="var(--gold)" strokeWidth=".9" opacity=".5" />
            ))
          )}
        </>
      )}
      {klass === 'db' && (
        <>
          <rect x="300" y="70" width="200" height="370" rx="6" fill="var(--bg2)" stroke="var(--gold)" strokeWidth="1.8" />
          <circle cx="400" cy="160" r="34" fill="var(--bg2)" stroke="var(--gold)" strokeWidth="1.6" />
          <circle cx="400" cy="160" r="20" fill="var(--gold)" opacity=".15" />
          <circle cx="400" cy="160" r="13" fill="var(--gold)" opacity=".45" />
          <circle cx="395" cy="155" r="4" fill="var(--gold)" opacity=".7" />
          <circle cx="400" cy="270" r="42" fill="none" stroke="var(--gold)" strokeWidth="1" opacity=".4" />
          <circle cx="400" cy="365" r="22" fill="var(--gold)" opacity=".08" />
          <circle cx="400" cy="365" r="15" fill="none" stroke="var(--gold)" strokeWidth="1" opacity=".75" />
          <path d="M 395 361 Q 395 356 400 356 Q 405 356 405 361 L 405 366 L 395 366 Z" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
          <text x="400" y="416" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="var(--gold)" opacity=".55">IP65</text>
        </>
      )}
    </svg>
  );
}

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
                <ProductArt klass={p.klass} />
              </div>
              <div className="prod-meta">
                <span className="prod-cert">{p.cert}</span>
                <span className="prod-ref">{p.ref}</span>
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
