'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ProductData } from '@/data/products';

function FeatureIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    face: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg>,
    shield: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
    hand: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/><path d="M16 8l-4 4-2-2"/></svg>,
    key: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><circle cx="12" cy="16" r="1"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
    video: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="23,7 16,12 23,17"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
    screen: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    building: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><path d="M9 18h6v4H9z"/></svg>,
    integration: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    audit: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  };
  return <>{icons[type] || icons.integration}</>;
}

export default function AkuvoxProductPage({ product }: { product: ProductData }) {
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

      {/* Hero — Akuvox style with floating callouts */}
      <section className="akv-hero">
        <div className="wrap">
          <div className="akv-hero-grid">
            <div className="akv-hero-content reveal">
              <div className="akv-brand-badge">
                <span className="akv-badge-mark">A</span>
                <span className="akv-badge-text">Certified <strong>{product.brand}</strong> Integrator</span>
              </div>
              <div className="akv-hero-eyebrow">{product.eyebrow}</div>
              <h1 className="akv-hero-title">{product.title}</h1>
              <p className="akv-hero-desc">{product.description}</p>

              <div className="akv-hero-specs">
                {product.meta.map((m, i) => (
                  <div className="akv-hero-spec" key={i}>
                    <div className="akv-hero-spec-val">{m.value}<span className="em">{m.unit}</span></div>
                    <div className="akv-hero-spec-label">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="akv-hero-cta">
                <a href="#quote" className="btn btn-gold">
                  <span>Get a Free Quote</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="#features" className="btn btn-outline">
                  <span>See AI in action</span>
                </a>
                <span className="akv-hero-cta-note">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  No obligation · Response in 24h
                </span>
              </div>
            </div>

            <div className="akv-hero-product reveal">
              <div className="akv-hero-product-stage"></div>
              <div className="akv-hero-float akv-hero-float-1">
                <div className="akv-hero-float-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
                </div>
                <div className="akv-hero-float-text">
                  <div className="akv-hero-float-label">AI Recognition</div>
                  <div className="akv-hero-float-value">{product.meta[0]?.value}{product.meta[0]?.unit} accurate</div>
                </div>
              </div>
              <div className="akv-hero-float akv-hero-float-2">
                <div className="akv-hero-float-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                </div>
                <div className="akv-hero-float-text">
                  <div className="akv-hero-float-label">Anti-Spoofing</div>
                  <div className="akv-hero-float-value">3D liveness check</div>
                </div>
              </div>
              <Image src={product.image} alt={`${product.brand} ${product.model}`} width={380} height={540} className="akv-hero-device" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="akv-stats-bar">
        <div className="wrap">
          <div className="akv-stats-grid">
            {product.stats.map((s, i) => (
              <div className="akv-stat-item reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="akv-stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.78 1.02 6.41 2.66"/></svg>
                </div>
                <div>
                  <div className="akv-stat-num">{s.value}<span>{s.unit}</span></div>
                  <div className="akv-stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — 3-column grid */}
      <section className="section akv-features" id="features">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Capabilities</div>
            <h2 className="pp-h2">AI features that <em className="em">change the game.</em></h2>
            <p className="pp-body-lg">{product.brand} is purpose-built for properties where access needs to be both touchless and intelligent.</p>
          </div>

          <div className="akv-features-grid">
            {product.features.map((f, i) => (
              <div className="akv-feature-card reveal" key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="akv-feature-num">{['i', 'ii', 'iii', 'iv', 'v', 'vi'][i]}. {f.tag}</div>
                <div className="akv-feature-icon">
                  <FeatureIcon type={f.icon} />
                </div>
                <div className="akv-feature-title">{f.title}</div>
                <div className="akv-feature-body">{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases — with bullet-style stats */}
      <section className="section akv-usecases" id="usecases">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Where it shines</div>
            <h2 className="pp-h2">Built for environments where <em className="em">precision matters.</em></h2>
            <p className="pp-body-lg">{product.brand} isn&apos;t a residential doorbell — it&apos;s a security platform for environments where speed, hygiene, and intelligence matter.</p>
          </div>

          <div className="akv-usecases-grid">
            {product.useCases.map((uc, i) => (
              <div className="akv-uc-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="akv-uc-image">
                  <span className="akv-uc-image-mark">{uc.mark}</span>
                </div>
                <div className="akv-uc-content">
                  <div className="akv-uc-title">{uc.title}</div>
                  <p className="akv-uc-body">{uc.desc}</p>
                  <ul className="akv-uc-points">
                    {uc.stats.map((s, j) => (
                      <li key={j}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                        {s.value} {s.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs — 2-column grid */}
      <section className="section akv-specs" id="specs">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Technical Specifications</div>
            <h2 className="pp-h2">Engineered for <em className="em">precision.</em></h2>
            <p className="pp-body-lg">Every spec exists for a reason — dedicated neural processing, multiple optical sensors, and multi-modal authentication.</p>
          </div>

          <div className="akv-specs-grid reveal">
            {product.specs.map((group, i) => (
              <div className="akv-spec-group" key={i}>
                <div className="akv-spec-group-title">{group.category}</div>
                {group.rows.map((row, j) => (
                  <div className="akv-spec-row" key={j}>
                    <div className="akv-spec-label">{row.key}</div>
                    <div className="akv-spec-value">{row.value}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section akv-compare" id="compare">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">How it compares</div>
            <h2 className="pp-h2">{product.brand} vs <em className="em">the alternatives.</em></h2>
            <p className="pp-body-lg">A candid comparison — where {product.brand} leads, and where other solutions might suit better.</p>
          </div>

          <div className="akv-compare-table reveal">
            <div className="akv-compare-head">
              <div className="akv-compare-head-cell">
                <div className="akv-compare-brand">Feature</div>
              </div>
              {product.comparison.headers.map((h, i) => (
                <div className={`akv-compare-head-cell${h.featured ? ' akv-col' : ''}`} key={i}>
                  <div className="akv-compare-brand">{h.brand}</div>
                  <div className="akv-compare-brand-sub">{h.tag}</div>
                </div>
              ))}
            </div>
            {product.comparison.rows.map((row, i) => (
              <div className="akv-compare-row" key={i}>
                <div className="akv-compare-cell feat-name">{row.feature}</div>
                {row.values.map((val, j) => (
                  <div className={`akv-compare-cell${product.comparison.headers[j]?.featured ? ' akv-col' : ''}`} key={j}>
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
      <section className="section akv-testimonials">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">What clients say</div>
            <h2 className="pp-h2">From people who chose <em className="em">deliberately.</em></h2>
          </div>

          <div className="akv-test-grid">
            {product.testimonials.map((t, i) => (
              <div className="akv-test-card reveal" key={i}>
                <div className="akv-test-quote-mark">&ldquo;</div>
                <p className="akv-test-text">{t.quote}</p>
                <div className="akv-test-author">
                  <div className="akv-test-avatar">{t.initials}</div>
                  <div className="akv-test-meta">
                    <div className="akv-test-name">{t.name}</div>
                    <div className="akv-test-role">{t.role}</div>
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
      <section className="section akv-faq" id="faq">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Common Questions</div>
            <h2 className="pp-h2">Frequently asked <em className="em">questions</em>.</h2>
          </div>

          <div className="akv-faq-list reveal">
            {product.faqs.map((faq, i) => (
              <div className="akv-faq-item" key={i}>
                <button
                  className="akv-faq-q"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.question}
                  <span className="akv-faq-plus">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </span>
                </button>
                <div className={`akv-faq-a${openFaq === i ? ' open' : ''}`}>
                  <div className="akv-faq-a-inner">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section akv-quote" id="quote">
        <div className="wrap">
          <div className="akv-quote-grid">
            <div className="akv-quote-info reveal">
              <div className="pp-tag">Request Your Quote</div>
              <h2 className="pp-h2">Get a quote for {product.brand} <em className="em">at your site</em>.</h2>
              <p className="pp-body-lg">Tell us about your environment. We&apos;ll respond within 24 hours with a tailored proposal.</p>

              <div className="akv-quote-benefits">
                <div className="akv-qb-item">
                  <span className="akv-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </span>
                  <div className="akv-qb-text">
                    <div className="akv-qb-title">24-hour response</div>
                    <div className="akv-qb-body">A real engineer responds within one business day.</div>
                  </div>
                </div>
                <div className="akv-qb-item">
                  <span className="akv-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </span>
                  <div className="akv-qb-text">
                    <div className="akv-qb-title">Free site survey</div>
                    <div className="akv-qb-body">For larger projects, we visit and assess at no cost.</div>
                  </div>
                </div>
                <div className="akv-qb-item">
                  <span className="akv-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <div className="akv-qb-text">
                    <div className="akv-qb-title">Zero obligation</div>
                    <div className="akv-qb-body">No commitment, no follow-up pressure. Take your time.</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="akv-quote-form reveal" onSubmit={(e) => e.preventDefault()}>
              <div className="akv-qf-title">Get Your Free Quote</div>
              <div className="akv-qf-sub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                No obligation · Response within 24 hours
              </div>

              <div className="akv-qf-row">
                <div className="akv-qf-field">
                  <label className="akv-qf-label">First Name *</label>
                  <input className="akv-qf-input" type="text" required />
                </div>
                <div className="akv-qf-field">
                  <label className="akv-qf-label">Last Name *</label>
                  <input className="akv-qf-input" type="text" required />
                </div>
              </div>

              <div className="akv-qf-row akv-qf-full">
                <div className="akv-qf-field">
                  <label className="akv-qf-label">Email Address *</label>
                  <input className="akv-qf-input" type="email" required />
                </div>
              </div>

              <div className="akv-qf-row">
                <div className="akv-qf-field">
                  <label className="akv-qf-label">Phone Number *</label>
                  <input className="akv-qf-input" type="tel" required />
                </div>
                <div className="akv-qf-field">
                  <label className="akv-qf-label">Environment Type *</label>
                  <select className="akv-qf-select" required>
                    <option value="">Select type...</option>
                    <option>Corporate office</option>
                    <option>Healthcare / clinical</option>
                    <option>Residential building</option>
                    <option>Co-working / shared</option>
                    <option>Education</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="akv-qf-row akv-qf-full">
                <div className="akv-qf-field">
                  <label className="akv-qf-label">Additional Notes (optional)</label>
                  <textarea className="akv-qf-textarea" placeholder="Tell us about your requirements..."></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-gold akv-qf-submit">
                Request My Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>

              <div className="akv-qf-disclaimer">
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
