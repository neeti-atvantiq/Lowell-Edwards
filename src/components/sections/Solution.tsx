"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const cards = [
  {
    n: '01',
    title: 'See Every Visitor Before You Open',
    body: 'HD video intercom lets residents and managers see and speak to any visitor before granting access — from their phone, from anywhere in the world. No more opening blind.',
    fact: 'Real-time HD video to any device',
    image: '/images/solutions/solution-01.png',
  },
  {
    n: '02',
    title: 'Secure Package & Visitor Management',
    body: 'Couriers and guests use delivery PINs, QR codes, or temporary access codes. Every visit is logged with time-stamped video. Access expires automatically—no lost parcels, no loose ends.',
    fact: 'Auto-expiring, logged access codes',
    image: '/images/solutions/solution-02.jpg',
  },
  {
    n: '03',
    title: 'Complete Audit Trail',
    body: 'Every entry event is logged — who, when, and how. Time-stamped video records provide irrefutable evidence for insurance claims, tenant disputes, and compliance audits.',
    fact: 'Court-admissible video logs',
    image: '/images/solutions/solution-04.png',
  },
  {
    n: '04',
    title: 'Manage Access Remotely & Instantly',
    body: 'Grant or revoke access credentials in seconds from any device. Onboarding a new tenant or locking out a former occupant takes moments — no site visit, no locksmith, no delay.',
    fact: 'Zero on-site visits required',
    image: '/images/solutions/solution-03.jpg',
  },
  {
    n: '05',
    title: 'Touchless Face Recognition Entry',
    body: 'For premium buildings, AI-powered face recognition provides frictionless, keyless entry for registered residents — secure, hygienic, and effortlessly modern.',
    fact: 'AI-powered, hygienic entry',
    image: '/images/solutions/solution-06.jpg',
  },
];

export default function Solution() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, clientWidth, scrollWidth, children } = sliderRef.current;
        
        const cardNode = children[0] as HTMLElement;
        const scrollAmount = cardNode ? cardNode.offsetWidth + 24 : clientWidth > 800 ? 424 : clientWidth * 0.9;
        
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth, children } = sliderRef.current;
      
      const cardNode = children[0] as HTMLElement;
      const scrollAmount = cardNode ? cardNode.offsetWidth + 24 : clientWidth > 800 ? 424 : clientWidth * 0.9; 
      
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="section solution" id="solutions">
      <div className="wrap" style={{ position: 'relative', maxWidth: '1300px' }}>
        <div className="solution-header reveal">
          <div className="tag" style={{ justifyContent: 'center' }}>The Solution</div>
          <h2 className="h2" style={{ textAlign: 'center' }}>
            One system. Every problem <em className="em">solved.</em>
          </h2>
          <p
            className="body-lg"
            style={{ textAlign: 'center', marginTop: 18, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}
          >
            Modern video intercom and access control transforms how buildings are secured — giving
            managers full visibility and control from anywhere, at any time.
          </p>
        </div>

        <div 
          className="solution-slider reveal" 
          ref={sliderRef}
          style={{ transitionDelay: '.1s' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {cards.map((c) => (
            <div className="slider-card" key={c.n}>
              {/* Image Hero Section */}
              <div className="slider-card-image">
                <div className="slider-card-badge">
                  <span>{c.n}</span>
                </div>
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 400px"
                  style={{ objectFit: 'cover' }}
                  className="sc-img"
                />
              </div>
              
              {/* Content Section */}
              <div className="slider-card-content">
                <div className="slider-card-title">{c.title}</div>
                <div className="slider-card-body">{c.body}</div>
                
                <div className="slider-card-footer">
                  <div className="sc-dot"></div>
                  <div className="sc-fact">{c.fact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Slider Track */
        .solution-slider {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 10px 10px 40px 10px;
          margin: -10px;
          -ms-overflow-style: none;
          scrollbar-width: none;
          align-items: stretch; /* Ensures all cards are same height */
        }
        
        .solution-slider::-webkit-scrollbar {
          display: none;
        }

        /* Modern Edge-to-Edge Card */
        .slider-card {
          flex: 0 0 auto;
          width: 400px;
          max-width: 85vw;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(26,26,46,.06);
          box-shadow: 0 12px 32px rgba(26,26,46,.04);
          transition: transform 0.4s cubic-bezier(.4,0,.2,1), box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .slider-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(26,26,46,.08);
          border-color: rgba(217,28,28,.15);
        }

        /* Image Wrapper */
        .slider-card-image {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: var(--bg2);
        }

        .sc-img {
          transition: transform 0.7s cubic-bezier(.4,0,.2,1) !important;
        }

        .slider-card:hover .sc-img {
          transform: scale(1.06);
        }

        /* Sleek Frosted Badge */
        .slider-card-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          padding: 6px 14px;
          border-radius: 100px;
          box-shadow: 0 4px 12px rgba(0,0,0,.08);
        }

        .slider-card-badge span {
          font-family: var(--fd);
          font-size: 14px;
          font-weight: 700;
          font-style: italic;
          color: var(--gold);
          letter-spacing: .04em;
        }

        /* Text Content Area */
        .slider-card-content {
          padding: 32px 28px 28px;
          display: flex;
          flex-direction: column;
          flex: 1; /* Pushes footer to the bottom */
        }

        .slider-card-title {
          font-family: var(--fd);
          font-size: 22px;
          font-weight: 600;
          color: var(--cream);
          margin-bottom: 12px;
          line-height: 1.25;
        }

        .slider-card-body {
          font-family: var(--fb);
          font-size: 14px;
          font-weight: 300;
          line-height: 1.65;
          color: var(--c65);
          margin-bottom: 28px;
        }

        /* Fact Footer */
        .slider-card-footer {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(26,26,46,.06);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sc-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }

        .sc-fact {
          font-family: var(--fb);
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--gold);
        }

        /* Navigation Buttons */
        .slider-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(217,28,28,.2);
          background: #FFFFFF;
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(26,26,46,.04);
        }

        .slider-btn:hover {
          background: var(--gold);
          color: #FFFFFF;
          border-color: var(--gold);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(217,28,28,.25);
        }
      `}} />
    </section>
  );
}