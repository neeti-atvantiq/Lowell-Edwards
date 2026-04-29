export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-building-bg">
        <img
          className="hero-bg-img"
          src="https://images.unsplash.com/photo-1758448721134-1798533ae917?auto=format&fit=crop&w=1920&h=900&q=85"
          srcSet="https://images.unsplash.com/photo-1758448721134-1798533ae917?auto=format&fit=crop&w=1920&h=900&q=85 1x, https://images.unsplash.com/photo-1758448721134-1798533ae917?auto=format&fit=crop&w=2880&h=1350&q=85 2x"
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className="hero-veil" />
      <div className="hero-inner">
        <div className="hero-text-col">
          <div className="hero-eyebrow">Certified Home Integration Specialists · Hackensack, NJ</div>
          <h1
            className="h1"
            style={{
              fontSize: 'clamp(46px,5.8vw,86px)',
              lineHeight: 1.03,
              letterSpacing: '-.025em',
              marginBottom: 26,
              textShadow: '0 2px 32px rgba(0,0,0,.65)',
            }}
          >
            Smarter access.<br />
            <em
              className="em"
              style={{ fontStyle: 'italic', color: 'var(--gold)' }}
            >
              Safer buildings.
            </em>
            <br />
            <span
              style={{
                fontSize: '.72em',
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
