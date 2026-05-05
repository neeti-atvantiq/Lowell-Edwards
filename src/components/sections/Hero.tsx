import ImageSlider from '@/components/ui/ImageSlider';

const heroImages = [
  'https://images.unsplash.com/photo-1758448721134-1798533ae917?auto=format&fit=crop&w=1920&h=900&q=85',
  '/images/hero/1.jpg',
  '/images/hero/2.png',
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-building-bg">
        <ImageSlider images={heroImages} interval={6000} />
      </div>
      
      {/* Floating Badges */}
      <div className="hero-badges">
        <div className="hero-badge badge-cloud">
          <div className="badge-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="badge-text">
            <div className="badge-label">Cloud-Based</div>
            <div className="badge-sub">Remote Access</div>
          </div>
        </div>
        
        <div className="hero-badge badge-app">
          <div className="badge-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="badge-text">
            <div className="badge-label">App Control</div>
            <div className="badge-sub">iOS & Android</div>
          </div>
        </div>
      </div>
      
      <div className="hero-veil" />
      <div className="hero-inner">
        <div className="hero-text-col">
          <div className="hero-eyebrow">Certified Home Integration Specialists · Hackensack, NJ</div>
          <h1
            className="h1"
            style={{
              fontSize: 'clamp(40px,5.8vw,80px)',
              lineHeight: 1.03,
              letterSpacing: '-.025em',
              marginBottom: 26,
              textShadow: '0 2px 32px rgba(0,0,0,.65)',
            }}
          >
            Smarter access.<br />
            <em
              className="em"
              style={{ fontStyle: 'italic' }}
            >
              Safer buildings.
            </em>
            <br />
            <span
              style={{
                fontSize: '.68em',
                fontStyle: 'normal',
                color: 'rgba(245,240,232,.68)',
                fontWeight: 500,
              }}
            >
              Zero compromise.
            </span>
          </h1>
          <p
            className="body-lg hero-desc"
            style={{
              fontSize: 17,
              maxWidth: 580,
              lineHeight: 1.75,
              marginBottom: 40,
              textShadow: '0 1px 12px rgba(0,0,0,.7)',
            }}
          >
            Video intercoms and access control systems supplied, installed, and maintained by a
            dedicated local team. Onsite or remote — we respond within 24 hours, guaranteed.
          </p>
          <div className="hero-actions">
            <a
              href="#solutions"
              className="btn btn-gold"
              style={{
                fontSize: 13,
                padding: '16px 36px',
                letterSpacing: '.1em',
                boxShadow: '0 4px 24px rgba(217,28,28,.5)',
              }}
            >
              See How It Works
            </a>
            <a
              href="#quote"
              className="btn btn-outline"
              style={{ fontSize: 13, padding: '16px 36px', letterSpacing: '.1em' }}
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
