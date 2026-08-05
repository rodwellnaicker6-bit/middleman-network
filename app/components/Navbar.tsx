'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: '#0f172a', borderBottom: '1px solid #1e293b', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: '#f59e0b', color: '#0f172a', fontWeight: 900, fontSize: 14, padding: '4px 8px', borderRadius: 6, letterSpacing: 1 }}>TMN</div>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>The Middleman Network</span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {[
            { href: '/marketplace', label: 'Marketplace' },
            { href: '/#ventures', label: 'Ventures' },
            { href: '/get-listed', label: 'Get Listed' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{ color: '#94a3b8', fontSize: 14, fontWeight: 500, transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}>
              {link.label}
            </Link>
          ))}
          <Link href="/get-listed" style={{ background: '#f59e0b', color: '#0f172a', fontWeight: 700, fontSize: 13, padding: '8px 16px', borderRadius: 8 }}>
            List Your Business →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', display: 'none', padding: 8 }} className="mobile-menu-btn">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: '#1e293b', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { href: '/marketplace', label: 'Marketplace' },
            { href: '/#ventures', label: 'Ventures' },
            { href: '/get-listed', label: 'Get Listed' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{ color: '#e2e8f0', fontSize: 15, fontWeight: 500 }} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/get-listed" style={{ background: '#f59e0b', color: '#0f172a', fontWeight: 700, padding: '10px 16px', borderRadius: 8, textAlign: 'center' }} onClick={() => setOpen(false)}>
            List Your Business
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
