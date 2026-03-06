'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/robots',       label: 'Robots'       },
  { href: '/competitions', label: 'Competitions'  },
  { href: '/awards',       label: 'Awards'        },
  { href: '/team',         label: 'Team'          },
  { href: '/sponsors',     label: 'Sponsors'      },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  // null = not yet mounted, avoids any flash before we know the screen size
  const [narrow, setNarrow] = useState<boolean | null>(null);

  useEffect(() => {
    function check() { setNarrow(window.innerWidth < 768); }
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 5, left: 0, right: 0, zIndex: 999,
        background: '#000000',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px', height: 64,
        boxSizing: 'border-box',
      }}>
        {/* Logo */}
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 13, letterSpacing: '0.12em', whiteSpace: 'nowrap' }}>
          TEAM MEGABYTE
        </Link>

        {/* Only render right side after mount so we never flash wrong state */}
        {narrow === null ? null : narrow ? (
          /* HAMBURGER */
          <button
            onClick={() => setMenuOpen(v => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            <span style={{ width: 24, height: 2, background: '#fff', display: 'block', borderRadius: 2, transition: 'transform .25s', transform: menuOpen ? 'rotate(45deg) translate(3px,7px)' : 'none' }} />
            <span style={{ width: 24, height: 2, background: '#fff', display: 'block', borderRadius: 2, transition: 'opacity .25s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 24, height: 2, background: '#fff', display: 'block', borderRadius: 2, transition: 'transform .25s', transform: menuOpen ? 'rotate(-45deg) translate(3px,-7px)' : 'none' }} />
          </button>
        ) : (
          /* NAV LINKS */
          <div style={{ display: 'flex', gap: 36 }}>
            {links.map(({ href, label }) => (
              <Link key={href} href={href} style={{
                color: pathname === href ? '#fff' : '#6b7280',
                textDecoration: 'none', fontSize: 14,
                borderBottom: pathname === href ? '1px solid #fff' : 'none',
                paddingBottom: 2,
              }}>
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Fullscreen menu — only when narrow is confirmed true */}
      {narrow === true && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 998,
          background: '#000',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '0 32px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity .3s',
        }}>
          {links.map(({ href, label }, i) => (
            <div key={href} style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'none' : 'translateY(16px)',
              transition: `opacity .35s ${i * 60}ms, transform .35s ${i * 60}ms`,
            }}>
              <Link href={href} onClick={() => setMenuOpen(false)} style={{
                display: 'block', textDecoration: 'none',
                fontSize: 'clamp(2rem, 11vw, 3.5rem)',
                fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.3,
                padding: '6px 0',
                color: pathname === href ? '#fff' : '#374151',
              }}>
                {label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}