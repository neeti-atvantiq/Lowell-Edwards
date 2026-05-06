'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ProductData } from '@/data/products';

function FeatureIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    video: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="23,7 16,12 23,17"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
    smartphone: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    package: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/></svg>,
    log: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    integration: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    key: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 0-7.78 7.78 5.5 5.5 0 0 0 7.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>,
    cloud: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    clock: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  };
  return <>{icons[type] || icons.integration}</>;
}

export default function ButterflyMXProductPage({ product }: { product: ProductData }) {
  const [activeSpec, setActiveSpec] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Breadcrumb */}
      <div className="pp-breadcrumb">
        <div className="wrap">
          <div className="pp-breadcrumb-inner">
            <Link href="/">Home</Link>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9,18 15,12 9,6"/></svg>
            <Link href="/#gallery">Products</Link>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9,18 15,12 9,6"/></svg>
            <span className="pp-breadcrumb-current">{product.brand} {product.model}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bmx-hero">
        <div className="wrap">
          <div className="bmx-hero-grid">
            <div className="bmx-hero-content reveal">
              <div className="bmx-eyebrow">
                <span className="bmx-cert-badge">★ Certified Integrator</span>
                {product.eyebrow}
              </div>
              <h1 className="bmx-hero-title">{product.title}</h1>
              <p className="bmx-tagline">{product.tagline}</p>
              <p className="bmx-desc">{product.description}</p>

              <div className="bmx-meta">
                {product.meta.map((m, i) => (
                  <div className="bmx-meta-item" key={i}>
                    <div className="bmx-meta-val">{m.value}<span className="em">{m.unit}</span></div>
                    <div className="bmx-meta-label">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="bmx-actions">
                <a href="#quote" className="btn btn-gold">
                  Request a Free Quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="#specs" className="btn btn-outline">View Full Specs</a>
              </div>

              <div className="bmx-trust">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                1-year installation guarantee · Response within 24h · No obligation quote
              </div>
            </div>

            <div className="bmx-hero-visual reveal">
              <div className="bmx-device-wrap">
                <Image src={product.image} alt={`${product.brand} ${product.model}`} width={460} height={480} className="bmx-device-img" priority />
              </div>
              <span className="bmx-chip bmx-chip-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23,7 16,12 23,17"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
                1080p HD Camera
              </span>
              <span className="bmx-chip bmx-chip-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                Mobile-key access
              </span>
              <span className="bmx-chip bmx-chip-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Instant entry log
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bmx-stats">
        <div className="wrap">
          <div className="bmx-stats-grid reveal">
            {product.stats.map((s, i) => (
              <div className="bmx-stat-item" key={i}>
                <div className="bmx-stat-num">{s.value}<span className="em">{s.unit}</span></div>
                <div className="bmx-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — Bento Grid */}
      <section className="section bmx-features" id="features">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Core Features</div>
            <h2 className="pp-h2">Everything residents and managers need — <em className="em">in one app</em>.</h2>
            <p className="pp-body-lg">{product.brand} combines video intercom, smartphone access, delivery management, and visitor logging into a single cloud platform.</p>
          </div>

          <div className="bmx-features-grid reveal">
            {product.features.map((f, i) => (
              <div className={`bmx-feat-card bmx-fc-${i + 1}`} key={i}>
                <div className="bmx-feat-icon">
                  <FeatureIcon type={f.icon} />
                </div>
                <div className="bmx-feat-tag">{f.tag}</div>
                <div className="bmx-feat-title">{f.title}</div>
                <div className="bmx-feat-body">{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bmx-usecases">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Real-World Deployments</div>
            <h2 className="pp-h2">Built for buildings <em className="em">like yours</em>.</h2>
            <p className="pp-body-lg">From luxury apartments to student housing to commercial offices — {product.brand} adapts to your building&apos;s actual operational needs.</p>
          </div>

          <div className="bmx-uc-grid reveal">
            {product.useCases.map((uc, i) => (
              <div className="bmx-uc-card" key={i}>
                <div className="bmx-uc-image">
                  <span className="bmx-uc-mark">{uc.mark}</span>
                </div>
                <div className="bmx-uc-body">
                  <h3 className="bmx-uc-title">{uc.title}</h3>
                  <p className="bmx-uc-desc">{uc.desc}</p>
                  <div className="bmx-uc-stats">
                    {uc.stats.map((s, j) => (
                      <div key={j}>
                        <div className="bmx-uc-stat-num">{s.value}</div>
                        <div className="bmx-uc-stat-label">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs — Tabbed */}
      <section className="section bmx-specs" id="specs">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Technical Specifications</div>
            <h2 className="pp-h2">The full <em className="em">spec sheet</em>.</h2>
            <p className="pp-body-lg">Hardware, software, network, and certifications — everything you need for procurement, IT, or compliance review.</p>
          </div>

          <div className="bmx-specs-wrap reveal">
            <div className="bmx-specs-tabs">
              {product.specs.map((cat, i) => (
                <button
                  key={i}
                  className={`bmx-specs-tab${activeSpec === i ? ' active' : ''}`}
                  onClick={() => setActiveSpec(i)}
                >
                  {cat.category}
                </button>
              ))}
            </div>
            <div className="bmx-specs-content">
              {product.specs[activeSpec]?.rows.map((row, i) => (
                <div className="bmx-specs-row" key={i}>
                  <div className="bmx-specs-key">{row.key}</div>
                  <div className="bmx-specs-val">{row.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bmx-compare" id="compare">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Side-by-Side</div>
            <h2 className="pp-h2">How {product.brand} compares to <em className="em">the alternatives</em>.</h2>
            <p className="pp-body-lg">A neutral, integrator-led comparison against traditional systems and other cloud-based solutions.</p>
          </div>

          <div className="bmx-compare-table reveal">
            <div className="bmx-compare-head">
              <div className="bmx-compare-th">Feature</div>
              {product.comparison.headers.map((h, i) => (
                <div className={`bmx-compare-th${h.featured ? ' featured' : ''}`} key={i}>
                  <div className="bmx-compare-brand">{h.brand}</div>
                  <div className="bmx-compare-tag">{h.tag}</div>
                </div>
              ))}
            </div>
            {product.comparison.rows.map((row, i) => (
              <div className="bmx-compare-row" key={i}>
                <div className="bmx-compare-cell feat-name">{row.feature}</div>
                {row.values.map((val, j) => (
                  <div className={`bmx-compare-cell${product.comparison.headers[j]?.featured ? ' featured-col' : ''}`} key={j}>
                    {val === 'yes' ? (
                      <svg className="compare-yes" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : val === 'no' ? (
                      <span className="compare-no">×</span>
                    ) : val === 'partial' ? (
                      <span className="compare-partial">Partial</span>
                    ) : (
                      <span className="compare-text">{val}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bmx-testimonials">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">What Customers Say</div>
            <h2 className="pp-h2">Trusted by property managers <em className="em">across the country</em>.</h2>
          </div>

          <div className="bmx-test-grid reveal">
            {product.testimonials.map((t, i) => (
              <div className="bmx-test-card" key={i}>
                <span className="bmx-test-quote-mark">&ldquo;</span>
                <div className="bmx-test-stars">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                  ))}
                </div>
                <p className="bmx-test-quote">{t.quote}</p>
                <div className="bmx-test-author">
                  <div className="bmx-test-avatar">{t.initials}</div>
                  <div className="bmx-test-meta">
                    <div className="bmx-test-name">{t.name}</div>
                    <div className="bmx-test-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installations */}
      <section className="section pp-installations">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Our Installations</div>
            <h2 className="pp-h2">Real sites. Real deployments. <em className="em">Built to perform.</em></h2>
            <p className="pp-body-lg">A quick look at recent {product.brand} projects delivered by our team across the country.</p>
          </div>
        </div>
        <div className="pp-inst-slider reveal">
          <div className="pp-inst-track">
            {[
              { title: 'Riverside Apartments', location: 'Manhattan, NY', image: '/images/installations/8.jpg' },
              { title: 'Westbrook Offices', location: 'Brooklyn, NY', image: '/images/installations/2.jpg' },
              { title: 'Crown Plaza Residences', location: 'Hackensack, NJ', image: '/images/installations/7.jpg' },
              { title: 'North Gate Student Living', location: 'Newark, NJ', image: '/images/installations/4.jpg' },
              { title: 'Elm Street Mixed Use', location: 'Jersey City, NJ', image: '/images/installations/5.jpg' },
              { title: 'Canal View Towers', location: 'Hoboken, NJ', image: '/images/installations/6.jpg' },
              { title: 'Riverside Apartments', location: 'Manhattan, NY', image: '/images/installations/8.jpg' },
              { title: 'Westbrook Offices', location: 'Brooklyn, NY', image: '/images/installations/2.jpg' },
              { title: 'Crown Plaza Residences', location: 'Hackensack, NJ', image: '/images/installations/7.jpg' },
              { title: 'North Gate Student Living', location: 'Newark, NJ', image: '/images/installations/4.jpg' },
              { title: 'Elm Street Mixed Use', location: 'Jersey City, NJ', image: '/images/installations/5.jpg' },
              { title: 'Canal View Towers', location: 'Hoboken, NJ', image: '/images/installations/6.jpg' },
            ].map((inst, i) => (
              <article className="pp-inst-card" key={i}>
                <div className="pp-inst-image-wrap">
                  <Image src={inst.image} alt={`${inst.title} installation`} fill sizes="(max-width: 768px) 80vw, 28vw" className="pp-inst-image" />
                </div>
                <div className="pp-inst-meta">
                  <h3>{inst.title}</h3>
                  <p>{inst.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bmx-faq" id="faq">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Common Questions</div>
            <h2 className="pp-h2">Frequently asked <em className="em">questions</em>.</h2>
          </div>

          <div className="bmx-faq-list reveal">
            {product.faqs.map((faq, i) => (
              <div className="bmx-faq-item" key={i}>
                <button
                  className="bmx-faq-q"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.question}
                  <span className="bmx-faq-plus">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </span>
                </button>
                <div className={`bmx-faq-a${openFaq === i ? ' open' : ''}`}>
                  <div className="bmx-faq-a-inner">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section bmx-quote" id="quote">
        <div className="wrap">
          <div className="bmx-quote-grid">
            <div className="bmx-quote-info reveal">
              <div className="pp-tag">Request Your Quote</div>
              <h2 className="pp-h2">Get a quote for {product.brand} <em className="em">in your building</em>.</h2>
              <p className="pp-body-lg">Tell us about your building. We&apos;ll come back within 24 hours with an itemised quote — hardware, installation, and any optional extras.</p>

              <div className="bmx-quote-benefits">
                <div className="bmx-qb-item">
                  <span className="bmx-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </span>
                  <div className="bmx-qb-text">
                    <div className="bmx-qb-title">24-hour response</div>
                    <div className="bmx-qb-body">A real engineer reads every quote request. We respond within one business day.</div>
                  </div>
                </div>
                <div className="bmx-qb-item">
                  <span className="bmx-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </span>
                  <div className="bmx-qb-text">
                    <div className="bmx-qb-title">Itemised, transparent pricing</div>
                    <div className="bmx-qb-body">Line-item breakdown: hardware, install labour, network kit, optional extras. No surprises.</div>
                  </div>
                </div>
                <div className="bmx-qb-item">
                  <span className="bmx-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </span>
                  <div className="bmx-qb-text">
                    <div className="bmx-qb-title">Free site survey</div>
                    <div className="bmx-qb-body">For larger projects, we&apos;ll visit and assess your existing infrastructure at no cost.</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="bmx-quote-form reveal" onSubmit={(e) => e.preventDefault()}>
              <div className="bmx-qf-title">Get Your Free Quote</div>
              <div className="bmx-qf-sub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                No obligation · Response within 24 hours
              </div>

              <div className="bmx-qf-row">
                <div className="bmx-qf-field">
                  <label className="bmx-qf-label">First Name *</label>
                  <input className="bmx-qf-input" type="text" required />
                </div>
                <div className="bmx-qf-field">
                  <label className="bmx-qf-label">Last Name *</label>
                  <input className="bmx-qf-input" type="text" required />
                </div>
              </div>

              <div className="bmx-qf-row bmx-qf-full">
                <div className="bmx-qf-field">
                  <label className="bmx-qf-label">Company / Organisation</label>
                  <input className="bmx-qf-input" type="text" />
                </div>
              </div>

              <div className="bmx-qf-row">
                <div className="bmx-qf-field">
                  <label className="bmx-qf-label">Email Address *</label>
                  <input className="bmx-qf-input" type="email" required />
                </div>
                <div className="bmx-qf-field">
                  <label className="bmx-qf-label">Phone Number *</label>
                  <input className="bmx-qf-input" type="tel" required />
                </div>
              </div>

              <div className="bmx-qf-row">
                <div className="bmx-qf-field">
                  <label className="bmx-qf-label">Building Type *</label>
                  <select className="bmx-qf-select" required>
                    <option value="">Select building type...</option>
                    <option>Apartment building (residential)</option>
                    <option>Mixed-use development</option>
                    <option>Gated community</option>
                    <option>Student housing</option>
                    <option>Commercial / office</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="bmx-qf-field">
                  <label className="bmx-qf-label">Number of Units *</label>
                  <select className="bmx-qf-select" required>
                    <option value="">Units...</option>
                    <option>Under 20 units</option>
                    <option>20-50 units</option>
                    <option>50-100 units</option>
                    <option>100-250 units</option>
                    <option>250+ units</option>
                  </select>
                </div>
              </div>

              <div className="bmx-qf-row bmx-qf-full">
                <div className="bmx-qf-field">
                  <label className="bmx-qf-label">Additional Notes (optional)</label>
                  <textarea className="bmx-qf-textarea" placeholder="Tell us about your existing system, concerns, or questions..."></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-gold bmx-qf-submit">
                Request My Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>

              <div className="bmx-qf-disclaimer">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Your details are kept private. We never share or sell your information.
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <StickyCtaBar product={product} />
    </>
  );
}

function StickyCtaBar({ product }: { product: ProductData }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`pp-sticky-cta${visible ? ' visible' : ''}`}>
      <div className="pp-sticky-cta-info">
        <div className="pp-sticky-cta-name">{product.brand} {product.model}</div>
        <div className="pp-sticky-cta-price"><span className="em">Free quote</span> · 24h response</div>
      </div>
      <a href="#quote" className="btn btn-gold" style={{ padding: '11px 20px', fontSize: '11.5px' }}>Get a Quote</a>
    </div>
  );
}
