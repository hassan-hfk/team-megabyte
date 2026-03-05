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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* Top bar: logo left, hamburger right — always */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: '#000',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '18px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link href="/" style={{
          color: 'white', textDecoration: 'none',
          fontSize: 13, fontWeight: 700, letterSpacing: '0.12em',
        }}>
          TEAM MEGABYTE
        </Link>

        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', gap: 5, padding: 4,
          }}
        >
          <span style={{ display: 'block', width: 24, height: 2, background: 'white', borderRadius: 2, transition: 'transform .3s', transform: open ? 'rotate(45deg) translate(3px, 7px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: 'white', borderRadius: 2, transition: 'opacity .3s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: 'white', borderRadius: 2, transition: 'transform .3s', transform: open ? 'rotate(-45deg) translate(3px, -7px)' : 'none' }} />
        </button>
      </nav>

      {/* Full-screen menu */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 49, backgroundColor: '#000',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 32px',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.35s ease',
      }}>
        {links.map(({ href, label }, i) => (
          <div key={href} style={{
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity .4s ease ${i * 70}ms, transform .4s ease ${i * 70}ms`,
          }}>
            <Link href={href} onClick={() => setOpen(false)} style={{
              display: 'block',
              fontSize: 'clamp(2.2rem, 12vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
              padding: '6px 0',
              textDecoration: 'none',
              color: pathname === href ? '#ffffff' : '#374151',
            }}>
              {label}
            </Link>
          </div>
        ))}
        <p style={{
          position: 'absolute', bottom: 36, left: 32,
          fontSize: 10, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: '#374151', margin: 0,
        }}>
          Team Megabyte © 2025
        </p>
      </div>
    </>
  );
}