'use client';

import Link from 'next/link';

const explore = [
  { href: '/robots', label: 'Robots' },
  { href: '/competitions', label: 'Competitions' },
  { href: '/awards', label: 'Awards' },
  { href: '/team', label: 'Team' },
  { href: '/sponsors', label: 'Sponsors' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-16 md:mt-28 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-16 md:pt-24 pb-8">
        {/* Top row: brand + link columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-12 md:gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-xl md:text-2xl font-extrabold tracking-tight hover:text-gray-300 transition-colors"
            >
              TEAM MEGABYTE
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-[340px]">
              Pakistan&apos;s RoboWar combat team. Forged in battle, driven by passion,
              engineered to win.
            </p>
            <p className="mt-6 font-mono text-[0.7rem] tracking-[0.25em] uppercase text-gray-600">
              Rawalpindi, Pakistan
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="font-mono text-[0.7rem] tracking-[0.25em] uppercase text-gray-600 mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <p className="font-mono text-[0.7rem] tracking-[0.25em] uppercase text-gray-600 mb-5">
              Get in touch
            </p>
            <a
              href="mailto:team@megabyte.pk"
              className="text-gray-300 hover:text-white transition-colors text-sm break-all"
            >
              team@megabyte.pk
            </a>
            <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-[260px]">
              Sponsorships, collaborations and arena challenges welcome.
            </p>
          </div>
        </div>

        {/* Signature wordmark */}
        <div className="mt-14 md:mt-24 overflow-hidden" aria-hidden="true">
          <p className="select-none font-display font-extrabold tracking-tight leading-[0.8] text-center md:text-left text-white/[0.05] text-[19vw] md:text-[15vw]">
            MEGABYTE
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="font-mono text-[0.7rem] tracking-wider text-gray-600">
            © {year} Team Megabyte. All rights reserved.
          </p>
          <p className="font-mono text-[0.7rem] tracking-wider text-gray-600">
            Built in Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
}
