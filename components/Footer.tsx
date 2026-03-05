'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/robots', label: 'Robots' },
    { href: '/competitions', label: 'Competitions' },
    { href: '/awards', label: 'Awards' },
    { href: '/team', label: 'Team' },
    { href: '/sponsors', label: 'Sponsors' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/" className="text-base font-semibold tracking-wider hover:text-gray-300 transition-colors">
          TEAM MEGABYTE
        </Link>
        <div className="flex gap-10 text-sm tracking-wide">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors tracking-tight ${
                pathname === href ? 'text-white border-b border-white pb-0.5' : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}