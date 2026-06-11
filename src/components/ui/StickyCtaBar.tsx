'use client';
import { useState, useEffect } from 'react';
import { CategoryData } from '@/data/products';

export default function StickyCtaBar({ category }: { category: CategoryData }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`pp-sticky-cta${visible ? ' visible' : ''}`}>
      <div className="pp-sticky-cta-info">
        <div className="pp-sticky-cta-name">{category.brandName} — {category.subtitle}</div>
        <div className="pp-sticky-cta-price"><span className="em">Free quote</span> · 24h response</div>
      </div>
      <a href="#quote" className="btn btn-gold" style={{ padding: '11px 20px', fontSize: '11.5px' }}>Get a Quote</a>
    </div>
  );
}
