import type { ReactNode } from 'react';
import Image from 'next/image';

type Persona = {
  mark: string;
  img: string;
  img2x: string;
  alt: string;
  icon: ReactNode;
  title: string;
  sub: string;
  feats: string[];
  tiers: { c: string; l: string }[];
};

const personas: Persona[] = [
  {
    mark: 'For Residents',
    img: '/images/Personas/tenants.jpg',
    img2x: '/images/Personas/tenants.jpg',
    alt: 'Modern apartment building exterior with balconies',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Tenants & Residents',
    sub: 'Convenience · Safety · Peace of mind',
    feats: [
      "Open your building's front door from your smartphone — from anywhere",
      'See and speak to visitors via HD video before granting entry',
      'Secure package delivery — couriers use a dedicated access code',
      'PIN, fob, or face recognition — choose the entry method that suits you',
    ],
    tiers: [
      { c: 'tier-1', l: 'Tier 1 — Essential' },
      { c: 'tier-2', l: 'Tier 2 — Smart' },
    ],
  },
  {
    mark: 'For Managers',
    img: '/images/Personas/property_manager.jpg',
    img2x: '/images/Personas/property_manager.jpg',
    alt: 'Property management workspace with multiple screens',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: 'Property Management',
    sub: 'Control · Efficiency · Accountability',
    feats: [
      'Manage all building entry points from a single cloud dashboard',
      'Instantly grant or revoke access for tenants, contractors, and staff',
      'Full audit log — every entry event recorded with time and credentials',
      '24-hour maintenance support — we resolve most faults remotely',
    ],
    tiers: [
      { c: 'tier-2', l: 'Tier 2 — Smart' },
      { c: 'tier-3', l: 'Tier 3 — Enterprise' },
    ],
  },
  {
    mark: 'For Developers',
    img: 'https://images.unsplash.com/photo-1768230130990-6b4fe57778ce?w=800&h=500&q=80&auto=format&fit=crop',
    img2x: 'https://images.unsplash.com/photo-1768230130990-6b4fe57778ce?w=1200&h=750&q=80&auto=format&fit=crop',
    alt: 'Aerial view of modern residential development',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
        <polyline points="12,22 12,15.5" />
        <polyline points="22,8.5 12,15.5 2,8.5" />
      </svg>
    ),
    title: 'Developers & Owners',
    sub: 'Asset value · Scalability · Future-proofing',
    feats: [
      'Increase property value and resident satisfaction with smart access',
      'Scalable platform — integrates across single and multi-site portfolios',
      'Resilient network infrastructure with remote power management',
      'Fully documented specification packs for planning and handover',
    ],
    tiers: [{ c: 'tier-3', l: 'Tier 3 — Enterprise' }],
  },
];

export default function Personas() {
  return (
    <section className="section personas" id="personas">
      <div className="wrap">
        <div className="personas-header reveal">
          <div className="tag" style={{ justifyContent: 'center' }}>Built for Every Stakeholder</div>
          <h2 className="h2" style={{ textAlign: 'center' }}>
            A solution for every<br />person in the building
          </h2>
          <p
            className="body-lg"
            style={{ textAlign: 'center', marginTop: 18, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}
          >
            Whether you&apos;re a tenant, a property manager, or a developer — there is a tier and a
            system designed specifically for your needs and budget.
          </p>
        </div>
        <div className="personas-grid reveal" style={{ transitionDelay: '.1s' }}>
          {personas.map((p, i) => (
            <div className="persona-card" key={i}>
              <div className="persona-image">
                <span className="persona-image-mark">{p.mark}</span>
                <Image
                  src={p.img}
                  alt={p.alt}
                  width={800}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="persona-top">
                <div className="persona-icon">{p.icon}</div>
                <div className="persona-title">{p.title}</div>
                <div className="persona-subtitle">{p.sub}</div>
              </div>
              <div className="persona-body">
                <div className="persona-features">
                  {p.feats.map((f, j) => (
                    <div className="persona-feat" key={j}>
                      <div className="feat-check">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                      </div>
                      <div className="feat-text">{f}</div>
                    </div>
                  ))}
                </div>
                <div className="persona-tiers">
                  {p.tiers.map((t, k) => (
                    <span key={k} className={`tier-badge ${t.c}`}>{t.l}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
