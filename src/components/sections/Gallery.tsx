'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hardwareCategories } from '@/data/gallery';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export default function Products() {
  const [filter, setFilter] = useState('all');

  useRevealOnScroll({ threshold: 0.12, rootMargin: '0px 0px -8% 0px', deps: [filter] });

  const visibleCategories = filter === 'all' 
    ? hardwareCategories 
    : hardwareCategories.filter(c => c.id === filter);

  return (
    <section className="section gallery" id="products">
      <div className="wrap">
        <div className="products-header reveal">
          <div className="tag">Systems We Integrate</div>
          <h2 className="h2">
            Explore the hardware
            we <em className="em">supply & install</em>
          </h2>
        </div>
        
        <div className="integrator-note reveal" style={{ transitionDelay: '.1s' }}>
          {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          We are certified authorised integrators and resellers for each of the systems below. Our
          role is to assess your building&apos;s specific requirements, recommend the most suitable
          solution, then manage the complete process from supply and installation through to
          long-term maintenance. */}
        </div>

        {/* Filter Bar */}
        <div className="prod-filter-bar reveal">
          <button
            className={`prod-filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Hardware
          </button>
          <button
            className={`prod-filter-tab ${filter === 'intercoms' ? 'active' : ''}`}
            onClick={() => setFilter('intercoms')}
          >
            Intercoms
          </button>
          <button
            className={`prod-filter-tab ${filter === 'access-control' ? 'active' : ''}`}
            onClick={() => setFilter('access-control')}
          >
            Access Control
          </button>
          <button
            className={`prod-filter-tab ${filter === 'apartment-stations' ? 'active' : ''}`}
            onClick={() => setFilter('apartment-stations')}
          >
            Apartment Stations
          </button>
        </div>

        {/* Dynamic Category Loop */}
        <div className="compact-categories-wrapper">
          {visibleCategories.map((category) => (
            <div className="cat-group reveal in" key={category.id}>
              
              {/* Explicit Category Heading */}
              <div className="cat-group-header">
                <h3 className="cat-group-title">{category.title}</h3>
              </div>
              
              <div className={`prod-grid prod-grid-${category.brands.length}`}>
                {category.brands.map((p, pIdx) => (
                  <div className="prod-card compact" key={`${category.id}-${p.brand}-${pIdx}`}>
                    
                    <div className="prod-image">
                      <Image
                        src={p.image}
                        alt={p.brand}
                        width={800}
                        height={600}
                        style={{ display: 'block', width: '105%', height: '115%', objectFit: 'cover', padding: '24px' }}
                      />
                    </div>
                    
                    <div className="prod-meta">
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
                    
                    <div className="prod-top">
                      <div className="prod-brand">{p.brand}</div>
                      <div className="prod-type">{p.type}</div>
                    </div>
                    
                    {/* Divided Features Area */}
                    <div className="prod-features-compact">
                      {p.featureGroups.map((group, gIdx) => (
                        <div className="feature-group" key={gIdx}>
                          <div className="feature-group-label">{group.label}:</div>
                          <div className="feature-chip-list">
                            {group.items.map((feat) => (
                              <span className="feature-chip" key={feat}>{feat}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Exact match to 'All Products' card buttons */}
                    <div className="ap-card-footer">
                      <Link href={p.href} className="ap-card-cta">
                        View Details
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </Link>
                      <Link href="/contact" className="ap-card-quote">Quote</Link>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}