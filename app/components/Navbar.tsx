'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/leads',       label: 'Live Leads' },
  { href: '/group',       label: 'The Group' },
  { href: '/for-sale',    label: 'For Sale' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav style={{
        background: 'rgba(10,15,26,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'sticky',
        top: 0,
        zIndex: 200,
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 62 }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
              background: '#f59e0b',
              color: '#0a0f1a',
              fontWeight: 900,
              fontSize: 12,
              padding: '4px 9px',
              borderRadius: 6,
              letterSpacing: '0.08em',
              fontFamily: 'var(--font-display)',
            }}>TMN</div>
            <span style={{
              color: '#fff',
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '-0.01em',
              fontFamily: 'var(--font-display)',
            }}>The Middleman Network</span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
            {NAV_LINKS.map(link => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: active ? '#fff' : '#94a3b8',
                    fontSize: 13.5,
                    fontWeight: active ? 600 : 500,
                    padding: '6px 14px',
                    borderRadius: 8,
                    background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
                    transition: 'all 0.15s ease',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; } }}
                >
                  {link.label}
                </Link>
              );
            })}

            <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.1)', margin: '0 8px' }} />

            <Link href="/get-listed" className="nav-cta">
              List Your Business
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              color: '#fff',
              cursor: 'pointer',
              padding: '7px 10px',
              fontSize: 16,
              lineHeight: 1,
            }}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div style={{
            background: 'rgba(10,15,26,0.98)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '1.25rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}>
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  color: pathname === link.href ? '#fff' : '#94a3b8',
                  fontSize: 15,
                  fontWeight: 500,
                  padding: '11px 14px',
                  borderRadius: 8,
                  background: pathname === link.href ? 'rgba(255,255,255,0.08)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginTop: 8 }}>
              <Link
                href="/get-listed"
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  background: '#f59e0b',
                  color: '#0a0f1a',
                  fontWeight: 800,
                  padding: '13px 16px',
                  borderRadius: 10,
                  textAlign: 'center',
                  fontSize: 15,
                }}
              >
                List Your Business →
              </Link>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
