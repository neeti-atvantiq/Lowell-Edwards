'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ProductData } from '@/data/products';

function FeatureIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    video: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23,7 16,12 23,17"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
    smartphone: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    package: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/></svg>,
    log: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    integration: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    key: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 0-7.78 7.78 5.5 5.5 0 0 0 7.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>,
    cloud: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    clock: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    face: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>,
    shield: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    hand: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 0 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>,
    screen: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    building: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><path d="M9 18h6v4H9z"/></svg>,
    material: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    storage: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    api: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    layout: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
    button: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>,
  };
  return icons[type] || icons.integration;
}

export default function ProductPage({ product }: { product: ProductData }) {
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
      <section className="pp-hero">
        <div className="wrap">
          <div className="pp-hero-grid">
            <div className="pp-hero-content reveal">
              <div className="pp-eyebrow">
                <span className="pp-cert-badge">★ Certified Integrator</span>
                {product.eyebrow}
              </div>
              <h1 className="pp-hero-title">{product.title}</h1>
              <p className="pp-tagline">{product.tagline}</p>
              <p className="pp-desc">{product.description}</p>

              <div className="pp-meta">
                {product.meta.map((m, i) => (
                  <div className="pp-meta-item" key={i}>
                    <div className="pp-meta-val">{m.value}<span className="em">{m.unit}</span></div>
                    <div className="pp-meta-label">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="pp-actions">
                <a href="#quote" className="btn btn-gold">
                  Request a Free Quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="#specs" className="btn btn-outline">View Full Specs</a>
              </div>

              <div className="pp-trust">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                1-year installation guarantee · Response within 24h · No obligation quote
              </div>
            </div>

            <div className="pp-hero-visual reveal" style={{ transitionDelay: '.15s' }}>
              <div className="pp-hero-image-wrap">
                <Image
                  src={product.image}
                  alt={`${product.brand} ${product.model}`}
                  width={500}
                  height={600}
                  className="pp-hero-image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="pp-stats">
        <div className="wrap">
          <div className="pp-stats-grid reveal">
            {product.stats.map((s, i) => (
              <div className="pp-stat-item" key={i}>
                <div className="pp-stat-num">{s.value}<span className="em">{s.unit}</span></div>
                <div className="pp-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section pp-features" id="features">
        <div className="wrap">
          <div className="pp-section-header reveal">
            <div className="tag">Core Features</div>
            <h2 className="h2">What makes the {product.brand} {product.model} <em className="em">stand out</em>.</h2>
          </div>
          <div className="pp-features-grid reveal" style={{ transitionDelay: '.1s' }}>
            {product.features.map((f, i) => (
              <div className="pp-feat-card" key={i}>
                <div className="pp-feat-icon">
                  <FeatureIcon type={f.icon} />
                </div>
                <div className="pp-feat-tag">{f.tag}</div>
                <div className="pp-feat-title">{f.title}</div>
                <div className="pp-feat-body">{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section pp-usecases">
        <div className="wrap">
          <div className="pp-section-header reveal">
            <div className="tag">Real-World Deployments</div>
            <h2 className="h2">Built for environments <em className="em">like yours</em>.</h2>
          </div>
          <div className="pp-uc-grid reveal" style={{ transitionDelay: '.1s' }}>
            {product.useCases.map((uc, i) => (
              <div className="pp-uc-card" key={i}>
                <div className="pp-uc-mark">{uc.mark}</div>
                <h3 className="pp-uc-title">{uc.title}</h3>
                <p className="pp-uc-desc">{uc.desc}</p>
                <div className="pp-uc-stats">
                  {uc.stats.map((s, j) => (
                    <div key={j}>
                      <div className="pp-uc-stat-num">{s.value}</div>
                      <div className="pp-uc-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section pp-specs" id="specs">
        <div className="wrap">
          <div className="pp-section-header reveal">
            <div className="tag">Technical Specifications</div>
            <h2 className="h2">The full <em className="em">spec sheet</em>.</h2>
          </div>
          <div className="pp-specs-wrap reveal" style={{ transitionDelay: '.1s' }}>
            <div className="pp-specs-tabs">
              {product.specs.map((s, i) => (
                <button
                  key={i}
                  className={`pp-specs-tab ${activeSpec === i ? 'active' : ''}`}
                  onClick={() => setActiveSpec(i)}
                  type="button"
                >
                  {s.category}
                </button>
              ))}
            </div>
            <div className="pp-specs-content">
              {product.specs[activeSpec].rows.map((row, i) => (
                <div className="pp-specs-row" key={i}>
                  <div className="pp-specs-key">{row.key}</div>
                  <div className="pp-specs-val">{row.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section pp-compare" id="compare">
        <div className="wrap">
          <div className="pp-section-header reveal">
            <div className="tag">Side-by-Side</div>
            <h2 className="h2">How it compares to <em className="em">the alternatives</em>.</h2>
          </div>
          <div className="pp-compare-table reveal" style={{ transitionDelay: '.1s' }}>
            <div className="pp-compare-head">
              <div className="pp-compare-th">Feature</div>
              {product.comparison.headers.map((h, i) => (
                <div className={`pp-compare-th ${h.featured ? 'featured' : ''}`} key={i}>
                  <div className="pp-compare-brand">{h.brand}</div>
                  <div className="pp-compare-tag">{h.tag}</div>
                </div>
              ))}
            </div>
            {product.comparison.rows.map((row, i) => (
              <div className="pp-compare-row" key={i}>
                <div className="pp-compare-cell pp-compare-feat">{row.feature}</div>
                {row.values.map((val, j) => (
                  <div className={`pp-compare-cell ${product.comparison.headers[j]?.featured ? 'featured-col' : ''}`} key={j}>
                    {val === 'yes' ? (
                      <svg className="pp-check-yes" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : val === 'no' ? (
                      <span className="pp-check-no">×</span>
                    ) : val === 'partial' ? (
                      <span className="pp-partial">Partial</span>
                    ) : (
                      <span className="pp-compare-text">{val}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section pp-testimonials">
        <div className="wrap">
          <div className="pp-section-header reveal">
            <div className="tag">What Customers Say</div>
            <h2 className="h2">Trusted by property managers <em className="em">everywhere</em>.</h2>
          </div>
          <div className="pp-test-grid reveal" style={{ transitionDelay: '.1s' }}>
            {product.testimonials.map((t, i) => (
              <div className="pp-test-card" key={i}>
                <span className="pp-test-quote-mark">&ldquo;</span>
                <div className="pp-test-stars">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                  ))}
                </div>
                <p className="pp-test-quote">{t.quote}</p>
                <div className="pp-test-author">
                  <div className="pp-test-avatar">{t.initials}</div>
                  <div className="pp-test-meta">
                    <div className="pp-test-name">{t.name}</div>
                    <div className="pp-test-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pp-faq" id="faq">
        <div className="wrap">
          <div className="pp-section-header reveal">
            <div className="tag">Common Questions</div>
            <h2 className="h2">Frequently asked <em className="em">questions</em>.</h2>
          </div>
          <div className="pp-faq-list reveal" style={{ transitionDelay: '.1s' }}>
            {product.faqs.map((faq, i) => (
              <div className="pp-faq-item" key={i}>
                <button
                  className="pp-faq-q"
                  type="button"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.question}
                  <span className="pp-faq-plus">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </span>
                </button>
                <div className={`pp-faq-a ${openFaq === i ? 'open' : ''}`}>
                  <div className="pp-faq-a-inner">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section pp-quote" id="quote">
        <div className="wrap">
          <div className="pp-quote-grid">
            <div className="pp-quote-info reveal">
              <div className="tag" style={{ marginBottom: '18px' }}>Request Your Quote</div>
              <h2 className="h2">Get a quote for {product.brand} {product.model} <em className="em">in your building</em>.</h2>
              <p className="body-lg" style={{ marginTop: '18px', marginBottom: '36px' }}>Tell us about your building. We&apos;ll respond within 24 hours with an itemised quote — hardware, installation, and any optional extras. No sales pressure.</p>
              <div className="pp-quote-benefits">
                <div className="pp-qb-item">
                  <span className="pp-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </span>
                  <div>
                    <div className="pp-qb-title">24-hour response</div>
                    <div className="pp-qb-body">A real engineer reads every request — not an automated email reply.</div>
                  </div>
                </div>
                <div className="pp-qb-item">
                  <span className="pp-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </span>
                  <div>
                    <div className="pp-qb-title">Itemised, transparent pricing</div>
                    <div className="pp-qb-body">Line-item breakdown: hardware, labour, network. No hidden fees.</div>
                  </div>
                </div>
                <div className="pp-qb-item">
                  <span className="pp-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <div>
                    <div className="pp-qb-title">Zero obligation</div>
                    <div className="pp-qb-body">Quotes are free. No commitment, no follow-up calls.</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="pp-quote-form reveal" style={{ transitionDelay: '.15s' }} onSubmit={(e) => e.preventDefault()}>
              <div className="pp-qf-title">Get Your Free Quote</div>
              <div className="pp-qf-sub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                No obligation · Response within 24 hours · {product.brand}-specific
              </div>
              <div className="pp-qf-row">
                <div className="pp-qf-field">
                  <label className="pp-qf-label">First Name *</label>
                  <input className="pp-qf-input" type="text" required />
                </div>
                <div className="pp-qf-field">
                  <label className="pp-qf-label">Last Name *</label>
                  <input className="pp-qf-input" type="text" required />
                </div>
              </div>
              <div className="pp-qf-row" style={{ gridTemplateColumns: '1fr' }}>
                <div className="pp-qf-field">
                  <label className="pp-qf-label">Company / Organisation</label>
                  <input className="pp-qf-input" type="text" />
                </div>
              </div>
              <div className="pp-qf-row">
                <div className="pp-qf-field">
                  <label className="pp-qf-label">Email Address *</label>
                  <input className="pp-qf-input" type="email" required />
                </div>
                <div className="pp-qf-field">
                  <label className="pp-qf-label">Phone Number *</label>
                  <input className="pp-qf-input" type="tel" required />
                </div>
              </div>
              <div className="pp-qf-row">
                <div className="pp-qf-field">
                  <label className="pp-qf-label">Building Type *</label>
                  <select className="pp-qf-select" required>
                    <option value="">Select building type...</option>
                    <option>Apartment building (residential)</option>
                    <option>Mixed-use development</option>
                    <option>Gated community</option>
                    <option>Student housing</option>
                    <option>Commercial / office</option>
                    <option>Private residence</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="pp-qf-field">
                  <label className="pp-qf-label">Number of Units *</label>
                  <select className="pp-qf-select" required>
                    <option value="">Units...</option>
                    <option>Single unit</option>
                    <option>Under 20 units</option>
                    <option>20-50 units</option>
                    <option>50-100 units</option>
                    <option>100-250 units</option>
                    <option>250+ units</option>
                  </select>
                </div>
              </div>
              <div className="pp-qf-row" style={{ gridTemplateColumns: '1fr' }}>
                <div className="pp-qf-field">
                  <label className="pp-qf-label">Additional Notes (optional)</label>
                  <textarea className="pp-qf-textarea" placeholder="Tell us about your requirements..."></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-gold pp-qf-submit">
                Request My Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
              <div className="pp-qf-disclaimer">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Your details are kept private. We never share or sell your data.
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
