'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CategoryData, ProductData, products } from '@/data/products';
import CategoryQuoteForm from '@/components/forms/CategoryQuoteForm';
import StickyCtaBar from '@/components/ui/StickyCtaBar';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export default function BrandCategoryPage({ category }: { category: CategoryData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeProduct, setActiveProduct] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [userClicked, setUserClicked] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);
  const [countersAnimated, setCountersAnimated] = useState(false);

  // Get actual product data for this category
  const categoryProducts = category.products
    .map((slug) => products[slug])
    .filter(Boolean) as ProductData[];

  // Aggregate FAQs from all products (take first 2 from each)
  const allFaqs = categoryProducts.flatMap((p) => p.faqs.slice(0, 2));

  // Aggregate testimonials
  const allTestimonials = categoryProducts.flatMap((p) => p.testimonials.slice(0, 1));

  // One general spec table: merge first spec group from each product
  const generalSpecs = categoryProducts.length > 0
    ? categoryProducts[0].specs.slice(0, 2)
    : [];

    

  useRevealOnScroll({ threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  // Parallax effect on hero
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }
    };
    const hero = heroRef.current;
    hero?.addEventListener('mousemove', handleMouse);
    return () => hero?.removeEventListener('mousemove', handleMouse);
  }, []);

  // Counter animation on scroll
  useEffect(() => {
    if (!countersRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersAnimated) {
          setCountersAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(countersRef.current);
    return () => obs.disconnect();
  }, [countersAnimated]);

  // Auto-rotate products — pauses for 10s after user clicks a tab
  useEffect(() => {
    if (categoryProducts.length <= 1) return;
    if (userClicked) {
      const resume = setTimeout(() => setUserClicked(false), 10000);
      return () => clearTimeout(resume);
    }
    const interval = setInterval(() => {
      setActiveProduct((prev) => {
        const next = (prev + 1) % categoryProducts.length;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [categoryProducts.length, userClicked]);

  const switchProduct = (i: number) => {
    if (i === activeProduct) return;
    setActiveProduct(i);
    setAnimKey((k) => k + 1);
  };

  const handleTabClick = (i: number) => {
    switchProduct(i);
    setUserClicked(true);
  };

  const categoryLabel = category.categorySlug === 'intercoms' ? 'intercom'
    : category.categorySlug === 'access-control' ? 'access control'
    : category.categorySlug === 'apartment-stations' ? 'indoor station'
    : category.categorySlug === 'software' ? 'software' : '';

  return (
    <>

      {/* Hero Section */}
      <section className="cat-hero" ref={heroRef}>
        <div className="cat-hero-bg">
          <div className="cat-hero-orb cat-hero-orb-1" style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 20}px)` }} />
          <div className="cat-hero-orb cat-hero-orb-2" style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -15}px)` }} />
          <div className="cat-hero-grid-pattern" />
        </div>
        <div className="wrap">
          <div className="cat-hero-layout">
            <div className="cat-hero-content reveal">
              <div className="cat-hero-eyebrow">
                <span className="cat-hero-brand-badge">{category.brandName}</span>
                <span className="cat-hero-category-label">{category.subtitle}</span>
              </div>
              <h1 className="cat-hero-title">{category.title}</h1>
              <p className="cat-hero-desc">{category.description}</p>

              {/* Highlights strip */}
              <div className="cat-hero-highlights">
                {category.highlights.map((h, i) => (
                  <div className="cat-hero-hl" key={i}>
                    <span className="cat-hero-hl-value">{h.value}</span>
                    <span className="cat-hero-hl-label">{h.label}</span>
                  </div>
                ))}
              </div>

              <div className="cat-hero-actions">
                <a href="#products" className="btn btn-gold">View Products</a>
                <a href="#quote" className="btn btn-outline">Get a Quote</a>
              </div>
            </div>

            <div className="cat-hero-visual reveal">
              <div className="cat-hero-image-wrap" style={{ transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${mousePos.y * -3}deg)` }}>
                <Image
                  src={category.heroImage}
                  alt={category.title}
                  width={500}
                  height={500}
                  className="cat-hero-image"
                  priority
                />
                <div className="cat-hero-image-glow" />
              </div>
              {/* Floating badges */}
              <div className="cat-hero-float cat-hero-float-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Certified Integrator
              </div>
              <div className="cat-hero-float cat-hero-float-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                {categoryProducts.length} Product{categoryProducts.length !== 1 ? 's' : ''} Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="section cat-products" id="products">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">The Range</div>
            <h2 className="pp-h2">{category.brandName} {categoryLabel} products we install</h2>
            <p className="pp-body-lg">Each product is purpose-built for a specific use case. We&apos;ll recommend the right one during your site survey.</p>
          </div>

          {categoryProducts.length > 0 ? (
            <>
              {/* Product Selector Tabs */}
              {categoryProducts.length > 1 && (
                <div className="cat-prod-tabs reveal">
                  {categoryProducts.map((p, i) => (
                    <button
                      key={p.slug}
                      className={`cat-prod-tab ${activeProduct === i ? 'active' : ''}`}
                      onClick={() => handleTabClick(i)}
                    >
                      <span className="cat-prod-tab-brand">{p.model}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Active Product Display */}
              {categoryProducts[activeProduct] && (
                <div className="cat-prod-showcase" key={animKey}>
                  <div className="cat-prod-image-area">
                    <div className="cat-prod-image-bg" />
                    <Image
                      src={categoryProducts[activeProduct].image}
                      alt={categoryProducts[activeProduct].model}
                      width={400}
                      height={480}
                      className="cat-prod-image"
                    />
                    {/* Stats floating around image */}
                    <div className="cat-prod-float-stats">
                      {categoryProducts[activeProduct].stats.slice(0, 3).map((s, i) => (
                        <div className={`cat-prod-float-stat cat-prod-float-stat-${i + 1}`} key={i}>
                          <span className="cat-prod-float-val">{s.value}<small>{s.unit}</small></span>
                          <span className="cat-prod-float-label">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="cat-prod-info">
                    <div className="cat-prod-eyebrow">{categoryProducts[activeProduct].eyebrow}</div>
                    <h3 className="cat-prod-title">{categoryProducts[activeProduct].title}</h3>
                    <p className="cat-prod-tagline">{categoryProducts[activeProduct].tagline}</p>
                    <p className="cat-prod-desc">{categoryProducts[activeProduct].description}</p>

                    {/* Key Features */}
                    <div className="cat-prod-features">
                      {categoryProducts[activeProduct].features.slice(0, 4).map((f, i) => (
                        <div className="cat-prod-feat" key={i}>
                          <div className="cat-prod-feat-dot" />
                          <div>
                            <strong>{f.title}</strong>
                            <span>{f.body}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="cat-prod-actions">
                      <a href="#quote" className="btn btn-gold" style={{ padding: '12px 24px', fontSize: '11.5px' }}>Get a Quote</a>
                      <a href="#specs" className="btn btn-outline" style={{ padding: '11px 23px', fontSize: '11.5px' }}>View Specs</a>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="cat-prod-empty reveal">
              <p>Contact us for details on available {category.brandName} {categoryLabel} solutions. <a href="#quote">Get a quote</a></p>
            </div>
          )}
        </div>
      </section>

      {/* General Specs — single table for the category */}
      {generalSpecs.length > 0 && (
        <section className="section cat-specs" id="specs">
          <div className="wrap">
            <div className="section-header reveal">
              <div className="pp-tag">Specifications</div>
              <h2 className="pp-h2">General {categoryLabel} specifications</h2>
              <p className="pp-body-lg">Representative specs across the {category.brandName} {categoryLabel} range. Specific models may vary — we&apos;ll confirm during your site survey.</p>
            </div>

            <div className="cat-specs-general reveal">
              {generalSpecs.map((group, gi) => (
                <div className="cat-specs-group" key={gi}>
                  <div className="cat-specs-group-title">{group.category}</div>
                  <div className="cat-specs-rows">
                    {group.rows.map((row, ri) => (
                      <div className="cat-specs-row" key={ri}>
                        <span className="cat-specs-key">{row.key}</span>
                        <span className="cat-specs-val">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cross-Brand Comparison */}
      <section className="section cat-compare" id="compare">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Brand Comparison</div>
            <h2 className="pp-h2">{category.brandName} vs the alternatives</h2>
            <p className="pp-body-lg">An honest, integrator-led comparison. We install all three brands — this is how we help you decide.</p>
          </div>

          <div className="cat-compare-table reveal">
            <div className="cat-compare-head">
              <div className="cat-compare-th">Feature</div>
              {category.crossBrandComparison.headers.map((h, i) => (
                <div className={`cat-compare-th ${h.featured ? 'featured' : ''}`} key={i}>
                  <div className="cat-compare-brand">{h.brand}</div>
                  <div className="cat-compare-tag-label">{h.tag}</div>
                </div>
              ))}
            </div>
            {category.crossBrandComparison.rows.map((row, i) => (
              <div className="cat-compare-row" key={i}>
                <div className="cat-compare-cell feat-name">{row.feature}</div>
                {row.values.map((val, vi) => (
                  <div className={`cat-compare-cell ${category.crossBrandComparison.headers[vi]?.featured ? 'featured-col' : ''}`} key={vi}>
                    {val === 'yes' ? (
                      <span className="compare-yes">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                    ) : val === 'no' ? (
                      <span className="compare-no">—</span>
                    ) : (
                      <span className="compare-partial">{val}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases — with images */}
      {/* {categoryProducts.length > 0 && (
        <section className="section cat-usecases">
          <div className="wrap">
            <div className="section-header reveal">
              <div className="pp-tag">Where It Shines</div>
              <h2 className="pp-h2">Real-world applications</h2>
              <p className="pp-body-lg">Selected use cases from our installations — where {category.brandName} {categoryLabel ? categoryLabel + ' systems' : 'products'} deliver the most value.</p>
            </div>

            <div className="cat-uc-grid reveal">
              {categoryProducts.flatMap((p) => p.useCases.slice(0, 2)).slice(0, 6).map((uc, i) => (
                <div className="cat-uc-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="cat-uc-image">
                    <Image
                      src={`/images/usecase/${(i % 6) + 1}.png`}
                      alt={uc.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="cat-uc-image-overlay" />
                  </div>
                  <div className="cat-uc-content">
                    <div className="cat-uc-mark">
                      <span className="cat-uc-mark-line" />
                      {uc.mark}
                    </div>
                    <h4 className="cat-uc-title">{uc.title}</h4>
                    <p className="cat-uc-desc">{uc.desc}</p>
                    <div className="cat-uc-stats">
                      {uc.stats.map((s, si) => (
                        <div className="cat-uc-stat" key={si}>
                          <span className="cat-uc-stat-val">{s.value}</span>
                          <span className="cat-uc-stat-label">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* Animated Counter Strip */}
      <div className="cat-counter-strip" ref={countersRef}>
        <div className="wrap">
          <div className={`cat-counter-grid ${countersAnimated ? 'animate' : ''}`}>
            <div className="cat-counter-item">
              <span className="cat-counter-num">500<small>+</small></span>
              <span className="cat-counter-label">Installations completed</span>
            </div>
            <div className="cat-counter-item">
              <span className="cat-counter-num">10,000<small>+</small></span>
              <span className="cat-counter-label">Units deployed</span>
            </div>
            <div className="cat-counter-item">
              <span className="cat-counter-num">99.8<small>%</small></span>
              <span className="cat-counter-label">Client satisfaction</span>
            </div>
            <div className="cat-counter-item">
              <span className="cat-counter-num">24<small>/7</small></span>
              <span className="cat-counter-label">Support available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {allTestimonials.length > 0 && (
        <section className="section cat-testimonials">
          <div className="wrap">
            <div className="section-header reveal">
              <div className="pp-tag">What Clients Say</div>
              <h2 className="pp-h2">Trusted by property professionals</h2>
            </div>

            <div className="cat-test-grid reveal">
              {allTestimonials.map((t, i) => (
                <div className="cat-test-card" key={i}>
                  <div className="cat-test-quote-mark">&ldquo;</div>
                  <div className="cat-test-stars">
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                  <p className="cat-test-quote">{t.quote}</p>
                  <div className="cat-test-author">
                    <div className="cat-test-avatar">{t.initials}</div>
                    <div className="cat-test-meta">
                      <div className="cat-test-name">{t.name}</div>
                      <div className="cat-test-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Installations Gallery */}
      <section className="section cat-installations">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="pp-tag">Our Work</div>
            <h2 className="pp-h2">Recent {category.brandName} installations</h2>
            <p className="pp-body-lg">Real projects completed by our certified engineering team across London and the South East.</p>
          </div>

          <div className="cat-inst-grid reveal">
            {category.installationImages?.map((item, i) => (
              <div className={`cat-inst-item${i === 0 ? ' cat-inst-item-lg' : ''}`} key={item.image}>
                <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                <div className="cat-inst-overlay">
                  <span className="cat-inst-tag">{item.tag}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {allFaqs.length > 0 && (
        <section className="section cat-faq" id="faq">
          <div className="wrap">
            <div className="section-header reveal">
              <div className="pp-tag">Common Questions</div>
              <h2 className="pp-h2">Frequently asked about {category.brandName}</h2>
            </div>

            <div className="cat-faq-list reveal">
              {allFaqs.map((faq, i) => (
                <div className="cat-faq-item" key={i}>
                  <button
                    className="cat-faq-q"
                    aria-expanded={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.question}
                    <span className="cat-faq-plus">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </span>
                  </button>
                  <div className={`cat-faq-a ${openFaq === i ? 'open' : ''}`}>
                    <div className="cat-faq-a-inner">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote Form */}
      <section className="section cat-quote" id="quote">
        <div className="wrap">
          <div className="cat-quote-grid">
            <div className="cat-quote-info reveal">
              <div className="pp-tag">Get Started</div>
              <h2 className="pp-h2">Request a free quote</h2>
              <p className="pp-body-lg">Tell us about your building and we&apos;ll recommend the right {category.brandName} solution — with pricing, timelines, and installation details.</p>

              <div className="cat-quote-benefits">
                <div className="cat-qb-item">
                  <div className="cat-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <strong>Free site survey</strong>
                    <p>We assess your building&apos;s specific requirements on-site.</p>
                  </div>
                </div>
                <div className="cat-qb-item">
                  <div className="cat-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <strong>24-hour response</strong>
                    <p>We respond to every enquiry within one business day.</p>
                  </div>
                </div>
                <div className="cat-qb-item">
                  <div className="cat-qb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <strong>Certified installer</strong>
                    <p>Authorised {category.brandName} partner — genuine hardware, full warranty.</p>
                  </div>
                </div>
              </div>
            </div>

            <CategoryQuoteForm brand={category.brandName} category={category.subtitle} />
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <StickyCtaBar category={category} />
    </>
  );
}
