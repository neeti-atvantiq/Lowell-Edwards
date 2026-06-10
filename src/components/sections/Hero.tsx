import ImageSlider from '@/components/ui/ImageSlider';

const heroImages = [
  '/images/hero/hero1.png',
  '/images/hero/heroimg2.png',
  '/images/hero/heroimg3.png',
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-building-bg">
        <ImageSlider images={heroImages} interval={6000} />
      </div>
      
      <div className="hero-veil" />
      <div className="hero-inner">
        <div className="hero-text-col">
          <h1
            className="h1"
            style={{
              fontSize: 'clamp(40px,5.8vw,80px)',
              lineHeight: 1.03,
              letterSpacing: '-.025em',
              marginBottom: 36,
              textShadow: '0 2px 32px rgba(0,0,0,.65)',
            }}
          >
            Smarter access.<br />
              Safer buildings.
            <br />
          </h1>
          <p
            className="body-lg hero-desc"
            style={{
              fontSize: 19,
              maxWidth: 580,
              lineHeight: 1.75,
              marginBottom: 52,
              textShadow: '0 1px 12px rgba(0,0,0,.7)',
            }}
          >
            Video intercoms and access control systems supplied, installed, and maintained by a
            dedicated local team. 
            {/* Onsite or remote — we respond within 24 hours, guaranteed. */}
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
              style={{ fontSize: 13, padding: '16px 36px', letterSpacing: '.1em', background: 'rgba(12, 12, 12, 0.12)' }}
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
