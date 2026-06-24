'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// Minimal typing for the particles.js global so TS stays happy.
declare global {
  interface Window {
    particlesJS?: (id: string, config: Record<string, unknown>) => void;
    pJSDom?: Array<{ pJS?: { fn?: { vendors?: { destroypJS?: () => void } } } }>;
  }
}

// Identical to the portfolio config, with the accent recoloured from
// green (#64ffda) to white (#ffffff) to match the team-megabyte black/white theme.
const config: Record<string, unknown> = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: {
      value: 0.75,
      random: true,
      anim: { enable: true, speed: 0.8, opacity_min: 0.3, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.8, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.35,
      width: 1.2,
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 160, line_linked: { opacity: 0.45 } },
      push: { particles_nb: 4 },
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  retina_detect: true,
};

export default function ParticlesBackground() {
  const init = () => {
    if (typeof window === 'undefined' || !window.particlesJS) return;

    // Tear down any previous instance first so dev hot-reloads / remounts
    // don't stack multiple canvases on top of each other.
    if (window.pJSDom && window.pJSDom.length) {
      window.pJSDom.forEach((dom) => dom?.pJS?.fn?.vendors?.destroypJS?.());
      window.pJSDom = [];
    }

    window.particlesJS('particles-js', config);
  };

  // Covers the case where the script was already cached/loaded before mount
  // (e.g. client-side navigation back to a page).
  useEffect(() => {
    if (typeof window !== 'undefined' && window.particlesJS) init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div id="particles-js" aria-hidden="true" />
      <Script
        src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        strategy="afterInteractive"
        onLoad={init}
      />
    </>
  );
}
