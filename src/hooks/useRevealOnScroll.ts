'use client';
import { useEffect } from 'react';

/**
 * Sets up IntersectionObserver for `.reveal` elements.
 * Adds the `in` class when elements scroll into view.
 */
export function useRevealOnScroll(options?: { threshold?: number; rootMargin?: string; deps?: unknown[] }) {
  const deps = options?.deps ?? [];
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.1,
        rootMargin: options?.rootMargin,
      }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options?.threshold, options?.rootMargin, ...deps]);
}
