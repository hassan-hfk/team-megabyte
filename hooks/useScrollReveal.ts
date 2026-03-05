'use client';

import { useState, useEffect } from 'react';

export function useScrollReveal(threshold = 80) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > threshold) {
        setRevealed(true);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return revealed;
}