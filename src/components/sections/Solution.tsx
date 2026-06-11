"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { solutionCards } from '@/data/solutions';

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
            Intercom systems that solves every <em className="em">problem</em>
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
            {solutionCards.map((c) => (
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

    </section>
  );
}