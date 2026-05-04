'use client';
import { useEffect, useState } from 'react';

export default function FloatingCards() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="floating-cards-container">
      <div 
        className="floating-card cloud-card"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        <div className="floating-card-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="floating-card-title">Cloud-Based Solutions</h3>
        <p className="floating-card-desc">
          Access your system from anywhere with secure cloud integration. Real-time monitoring and control at your fingertips.
        </p>
        <div className="floating-card-badge">Remote Access</div>
      </div>

      <div 
        className="floating-card app-card"
        style={{
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      >
        <div className="floating-card-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="floating-card-title">App-Based Control</h3>
        <p className="floating-card-desc">
          Manage entry systems, intercoms, and access control directly from your smartphone with our intuitive mobile app.
        </p>
        <div className="floating-card-badge">iOS & Android</div>
      </div>
    </div>
  );
}
