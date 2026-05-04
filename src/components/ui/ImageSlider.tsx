'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
  interval?: number;
  className?: string;
}

export default function ImageSlider({ 
  images, 
  interval = 5000,
  className = '' 
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`image-slider ${className}`}>
      {images.map((image, index) => (
        <Image
          key={image}
          className={`hero-bg-img ${index === currentIndex ? 'active' : ''}`}
          src={image}
          alt=""
          aria-hidden="true"
          fill
          priority={index === 0}
          sizes="100vw"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
          }}
        />
      ))}
    </div>
  );
}
