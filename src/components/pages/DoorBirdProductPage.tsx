'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ProductData } from '@/data/products';

function FeatureIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    material: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    video: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>,
    integration: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    storage: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
    api: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    shield: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
    layout: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
    button: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>,
    key: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 0-7.78 7.78 5.5 5.5 0 0 0 7.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>,
  };
  return <>{icons[type] || icons.integration}</>;
}

export default function DoorBirdProductPage({ product }: { product: ProductData }) {
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

      {/* Hero — DoorBird style with floating callouts */}
      <section className="db-hero">
        <div className="wrap">
          <div className="db-hero-grid">
            <div className="db-hero-content reveal">
              <div className="db-brand-badge">
                <span className="db-badge-mark">D</span>
                <span className="db-badge-text">Certified <strong>{product.brand}</strong> Integrator</span>
              </div>
              <div className="db-hero-eyebrow">{product.eyebrow}</div>
              <h1 className="db-hero-title">{product.title}</h1>
              <p className="db-hero-desc">{product.description}</p>

              <div className="db-hero-specs">
                {product.meta.map((m, i) => (
                  <div className="db-hero-spec" key={i}>
                    <div className="db-hero-spec-val">{m.value}<span className="em">{m.unit}</span></div>
                    <div className="db-hero-spec-label">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="db-hero-cta">
                <a href="#quote" className="btn btn-gold">
                  <span>Get a Free Quote</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="#features" className="btn btn-outline">
                  <span>See it in action</span>
                </a>
                <span className="db-hero-cta-note">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  No obligation · Response in 24h
                </span>
              </div>
            </div>

            <div className="db-hero-product reveal">
              <div className="db-hero-product-stage"></div>
              <div className="db-hero-float db-hero-float-1">
                <div className="db-hero-float-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
                </div>
                <div className="db-hero-float-text">
                  <div className="db-hero-float-label">HD Camera</div>
                  <div className="db-hero-float-value">Crystal-clear video</div>
                </div>
              </div>
              <div className="db-hero-float db-hero-float-2">
                <div className="db-hero-float-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div className="db-hero-float-text">
                  <div className="db-hero-float-label">Smart Home</div>
                  <div className="db-hero-float-value">HomeKit · KNX · Crestron</div>
                </div>
              </div>
              <Image src={product.image} alt={`${product.brand} ${product.model}`} width={380} height={540} className="db-hero-device" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="db-stats-bar">
        <div className="wrap">
          <div className="db-stats-grid">
            {product.stats.map((s, i) => (
              <div className="db-stat-item reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="db-stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.78 1.02 6.41 2.66"/></svg>
                </div>
                <div>
                  <div className="db-stat-num">{s.value}<span>{s.unit}</span></div>
                  <div className="db-stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — 3-column grid */}
      <section className="section db-features" id="features">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Capabilities</div>
            <h2 className="pp-h2">Reasons it&apos;s <em className="em">different.</em></h2>
            <p className="pp-body-lg">{product.brand} is not a consumer doorbell. It&apos;s the answer for properties where craftsmanship, privacy, and precision integration matter.</p>
          </div>

          <div className="db-features-grid">
            {product.features.map((f, i) => (
              <div className="db-feature-card reveal" key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="db-feature-num">{['i', 'ii', 'iii', 'iv', 'v', 'vi'][i]}. {f.tag}</div>
                <div className="db-feature-icon">
                  <FeatureIcon type={f.icon} />
                </div>
                <div className="db-feature-title">{f.title}</div>
                <div className="db-feature-body">{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases — with bullet-style stats */}
      <section className="section db-usecases" id="usecases">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Where it shines</div>
            <h2 className="pp-h2">Built for properties that <em className="em">demand more.</em></h2>
            <p className="pp-body-lg">{product.brand} is a deliberate choice for a particular kind of property.</p>
          </div>

          <div className="db-usecases-grid">
            {product.useCases.map((uc, i) => {
              const ucImages = ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=560&q=80&auto=format&fit=crop', 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&h=560&q=80&auto=format&fit=crop', 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];
              return (
              <div className="db-uc-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="db-uc-image">
                  <Image src={uc.image || ucImages[i % ucImages.length]} alt={uc.title} fill sizes="(max-width: 1024px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                  <span className="db-uc-image-mark">{uc.mark}</span>
                </div>
                <div className="db-uc-content">
                  <div className="db-uc-title">{uc.title}</div>
                  <p className="db-uc-body">{uc.desc}</p>
                  <ul className="db-uc-points">
                    {uc.stats.map((s, j) => (
                      <li key={j}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                        {s.value} {s.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specs — 2-column grid */}
      <section className="section db-specs" id="specs">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Technical Specifications</div>
            <h2 className="pp-h2">Engineered to <em className="em">outlast.</em></h2>
            <p className="pp-body-lg">{product.brand} hardware is designed to remain in place for fifteen to twenty years.</p>
          </div>

          <div className="db-specs-grid reveal">
            {product.specs.map((group, i) => (
              <div className="db-spec-group" key={i}>
                <div className="db-spec-group-title">{group.category}</div>
                {group.rows.map((row, j) => (
                  <div className="db-spec-row" key={j}>
                    <div className="db-spec-label">{row.key}</div>
                    <div className="db-spec-value">{row.value}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section db-compare" id="compare">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">How it compares</div>
            <h2 className="pp-h2">{product.brand} vs <em className="em">the alternatives.</em></h2>
            <p className="pp-body-lg">A candid comparison — where {product.brand} leads, and where it doesn&apos;t.</p>
          </div>

          <div className="db-compare-table reveal">
            <div className="db-compare-head">
              <div className="db-compare-head-cell">
                <div className="db-compare-brand">Feature</div>
              </div>
              {product.comparison.headers.map((h, i) => (
                <div className={`db-compare-head-cell${h.featured ? ' db-col' : ''}`} key={i}>
                  <div className="db-compare-brand">{h.brand}</div>
                  <div className="db-compare-brand-sub">{h.tag}</div>
                </div>
              ))}
            </div>
            {product.comparison.rows.map((row, i) => (
              <div className="db-compare-row" key={i}>
                <div className="db-compare-cell feat-name">{row.feature}</div>
                {row.values.map((val, j) => (
                  <div className={`db-compare-cell${product.comparison.headers[j]?.featured ? ' db-col' : ''}`} key={j}>
                    {val === 'yes' ? (
                      <svg className="compare-yes" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
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
      <section className="section db-testimonials">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">What clients say</div>
            <h2 className="pp-h2">From people who chose <em className="em">deliberately.</em></h2>
          </div>

          <div className="db-test-grid">
            {product.testimonials.map((t, i) => (
              <div className="db-test-card reveal" key={i}>
                <div className="db-test-quote-mark">&ldquo;</div>
                <p className="db-test-text">{t.quote}</p>
                <div className="db-test-author">
                  <div className="db-test-avatar">{t.initials}</div>
                  <div className="db-test-meta">
                    <div className="db-test-name">{t.name}</div>
                    <div className="db-test-role">{t.role}</div>
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
            <div className="pp-tag">Installations</div>
            <h2 className="pp-h2">In situ. <em className="em">Always considered.</em></h2>
            <p className="pp-body-lg">A few recent {product.brand} installations — chosen to show the breadth of property contexts where DoorBird is the right answer.</p>
          </div>

          <div className="pp-inst-grid reveal">
            {[
              { title: 'Mayfair House · Private Residence', location: 'D2101V · brass finish · recessed flush mount', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=900&q=80&auto=format&fit=crop', featured: true },
              { title: 'The Old Rectory · Cotswolds', location: 'Stone gatepost integration', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=600&q=80&auto=format&fit=crop' },
              { title: 'Hartford Boutique · Edinburgh', location: 'Hospitality · 12 rooms · brand engraved', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=600&q=80&auto=format&fit=crop' },
              { title: 'Belgravia Townhouse · London', location: 'Grade II listed · bronze finish', image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&h=600&q=80&auto=format&fit=crop' },
              { title: 'Riverside Villa · Henley-on-Thames', location: 'Contemporary · anthracite + Crestron', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=600&q=80&auto=format&fit=crop' },
            ].map((inst, i) => (
              <div className="pp-inst-item" key={i}>
                {inst.featured && <span className="pp-inst-tag">Featured</span>}
                <Image src={inst.image} alt={`${inst.title} installation`} fill sizes={i === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'} />
                <div className="pp-inst-overlay">
                  <div className="pp-inst-caption">{inst.title}<span>{inst.location}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section db-faq" id="faq">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Common Questions</div>
            <h2 className="pp-h2">Frequently asked <em className="em">questions</em>.</h2>
          </div>

          <div className="db-faq-list reveal">
            {product.faqs.map((faq, i) => (
              <div className="db-faq-item" key={i}>
                <button
                  className="db-faq-q"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.question}
                  <span className="db-faq-plus">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </span>
                </button>
                <div className={`db-faq-a${openFaq === i ? ' open' : ''}`}>
                  <div className="db-faq-a-inner">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section db-quote" id="quote">
        <div className="wrap">
          <div className="db-quote-grid">
            <div className="db-quote-info reveal">
              <div className="pp-tag">Request Your Quote</div>
              <h2 className="pp-h2">Get a quote for {product.brand} <em className="em">at your property</em>.</h2>
              <p className="pp-body-lg">Tell us about your property. We&apos;ll respond within 24 hours with a tailored proposal.</p>

              <div className="db-quote-benefits">
                <div className="db-qb-item">
                  <span className="db-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </span>
                  <div className="db-qb-text">
                    <div className="db-qb-title">24-hour response</div>
                    <div className="db-qb-body">A real engineer responds within one business day.</div>
                  </div>
                </div>
                <div className="db-qb-item">
                  <span className="db-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </span>
                  <div className="db-qb-text">
                    <div className="db-qb-title">Free site survey</div>
                    <div className="db-qb-body">For larger projects, we visit and assess at no cost.</div>
                  </div>
                </div>
                <div className="db-qb-item">
                  <span className="db-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <div className="db-qb-text">
                    <div className="db-qb-title">Zero obligation</div>
                    <div className="db-qb-body">No commitment, no follow-up pressure.</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="db-quote-form reveal" onSubmit={(e) => e.preventDefault()}>
              <div className="db-qf-title">Get Your Free Quote</div>
              <div className="db-qf-sub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                No obligation · Response within 24 hours
              </div>

              <div className="db-qf-row">
                <div className="db-qf-field">
                  <label className="db-qf-label">First Name *</label>
                  <input className="db-qf-input" type="text" required />
                </div>
                <div className="db-qf-field">
                  <label className="db-qf-label">Last Name *</label>
                  <input className="db-qf-input" type="text" required />
                </div>
              </div>

              <div className="db-qf-row db-qf-full">
                <div className="db-qf-field">
                  <label className="db-qf-label">Email Address *</label>
                  <input className="db-qf-input" type="email" required />
                </div>
              </div>

              <div className="db-qf-row">
                <div className="db-qf-field">
                  <label className="db-qf-label">Phone Number *</label>
                  <input className="db-qf-input" type="tel" required />
                </div>
                <div className="db-qf-field">
                  <label className="db-qf-label">Property Type *</label>
                  <select className="db-qf-select" required>
                    <option value="">Select type...</option>
                    <option>Private residence</option>
                    <option>Gated estate</option>
                    <option>Heritage / listed property</option>
                    <option>Boutique hotel / commercial</option>
                    <option>Multi-occupancy (HMO)</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="db-qf-row db-qf-full">
                <div className="db-qf-field">
                  <label className="db-qf-label">Additional Notes (optional)</label>
                  <textarea className="db-qf-textarea" placeholder="Tell us about your property, existing system, or requirements..."></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-gold db-qf-submit">
                Request My Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>

              <div className="db-qf-disclaimer">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Your details are kept private. We never share your information.
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
