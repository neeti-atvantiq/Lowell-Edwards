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
    body: 'Couriers use a delivery PIN or QR code for secure package drop-off, with every delivery logged and time-stamped. Temporary access codes for guests or contractors expire automatically—no keys, no loose ends.',
    fact: 'Time-stamped delivery & auto-expiring codes',
    image: '/images/solutions/solution-02.png',
  },
  {
    n: '03',
    title: 'Complete Audit Trail',
    body: 'Every entry event is logged — who, when, and how. Time-stamped video records provide irrefutable evidence for insurance claims, tenant disputes, and compliance audits.',
    fact: 'Extensive Photo Logs',
    image: '/images/solutions/solution-04.jpg',
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
    image: '/images/solutions/solution-05.jpeg',
  },
  {
    n: '06',
    title: 'Support Standard Phone Calls',
    body: 'Residents without smartphones can still talk to and unlock doors for visitors through a standard phone call — ensuring every occupant has full access control regardless of their device.',
    fact: 'No smartphone required',
    image: '/images/solutions/solution-06.jpeg',
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
    }, 3500);

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
            One system. Solves every <em className="em">problem.</em>
          </h2>
          <p
            className="body-lg"
            style={{ textAlign: 'center', marginTop: 18, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto', marginBottom: 48 }}
          >
            Modern video intercom and access control transforms how buildings are secured — giving
            managers full visibility and control from anywhere, at any time.
          </p>
        </div>

        {/* Wrapper for Slider and Absolute Buttons */}
        <div className="slider-wrapper reveal" style={{ position: 'relative' }}>
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')} 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="slider-btn slider-btn-left"
            aria-label="Scroll Left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Slider Container */}
          <div 
            className="solution-slider" 
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            {cards.map((c) => (
              <div className="slider-card" key={c.n}>
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
          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')} 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="slider-btn slider-btn-right"
            aria-label="Scroll Right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
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
          align-items: stretch;
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
          flex: 1; 
        }

        .slider-card-title {
          font-family: var(--fd);
          font-size: 24px;
          font-weight: 600;
          color: var(--cream);
          margin-bottom: 12px;
          line-height: 1.25;
        }

        .slider-card-body {
          font-family: var(--fb);
          font-size: 15px;
          font-weight: 300;
          line-height: 1.7;
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

        /* Positioned Navigation Buttons */
        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(217,28,28,.15);
          background: #FFFFFF;
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(26,26,46,.12);
        }

        /* Negative margins pull the buttons outside the card boundary */
        .slider-btn-left {
          left: -26px;
        }

        .slider-btn-right {
          right: -26px;
        }

        .slider-btn:hover {
          background: var(--gold);
          color: #FFFFFF;
          border-color: var(--gold);
          transform: translateY(-50%) scale(1.08); /* Retain centering, scale up slightly */
          box-shadow: 0 12px 32px rgba(217,28,28,.25);
        }

        /* Hide the arrows on small screens to prioritize swipe gestures */
        @media (max-width: 768px) {
          .slider-btn {
            display: none;
          }
          .slider-card {
            width: 320px;
          }
          .slider-card-image {
            height: 210px;
          }
          .slider-card-content {
            padding: 24px 22px 22px;
          }
          .slider-card-title {
            font-size: 20px;
          }
        }
        @media (max-width: 480px) {
          .slider-card {
            width: 88vw;
            max-width: 88vw;
          }
          .slider-card-image {
            height: 190px;
          }
          .slider-card-title {
            font-size: 18px;
          }
          .slider-card-body {
            font-size: 14px;
          }
        }
      `}} />
    </section>
  );
}