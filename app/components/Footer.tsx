import Link from 'next/link';
import { VENTURES } from '@/lib/data';

export default function Footer() {
  return (
    <footer style={{ background: '#040810', color: '#94a3b8', marginTop: 'auto', position: 'relative', overflow: 'hidden' }}>
      {/* Gold top accent line */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.6) 30%, rgba(245,158,11,0.9) 50%, rgba(245,158,11,0.6) 70%, transparent 100%)' }} />

      {/* Subtle aurora behind footer */}
      <div style={{ position: 'absolute', width: 600, height: 400, top: -100, right: -100, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ padding: '3.5rem 1.5rem 2rem', position: 'relative', zIndex: 1 }}>

        {/* Top section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
              <div style={{ background: '#f59e0b', color: '#0a0f1a', fontWeight: 900, fontSize: 12, padding: '4px 9px', borderRadius: 6, letterSpacing: '0.05em', boxShadow: '0 2px 12px rgba(245,158,11,0.4)' }}>TMN</div>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: '-0.01em' }}>The Middleman Network</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.75, margin: '0 0 16px', color: '#64748b' }}>
              South Africa&apos;s smart B2B marketplace. 22 industries. 120+ verified niches. Zero commission — ever.
            </p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <a href="mailto:rodwellnaicker6@gmail.com"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8', padding: '7px 13px', borderRadius: 8, fontSize: 12, transition: 'all 0.15s ease' }}>
                ✉️ Email
              </a>
              <a href="https://wa.me/27627135401" target="_blank" rel="noopener noreferrer"
                style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)', color: '#25d366', padding: '7px 13px', borderRadius: 8, fontSize: 12 }}>
                💬 WhatsApp
              </a>
            </div>
            {/* Trust badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['POPIA Compliant', 'SSL Secured', '0% Commission'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: '#475569' }}>
                  <span style={{ color: '#10b981', fontSize: 10, fontWeight: 900 }}>✓</span>{t}
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 11, fontWeight: 800, margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Top Industries</h4>
            {[
              { label: 'Energy & Solar', href: '/marketplace?industry=energy', icon: '⚡' },
              { label: 'Automotive Tech', href: '/marketplace?industry=automotive-technology', icon: '🔧' },
              { label: 'Legal Services', href: '/marketplace?industry=legal-services', icon: '⚖️' },
              { label: 'Construction', href: '/marketplace?industry=construction', icon: '🏗️' },
              { label: 'Logistics', href: '/marketplace?industry=logistics-transport', icon: '🚚' },
              { label: 'Agriculture AI', href: '/marketplace?industry=agriculture-technology', icon: '🌾' },
              { label: 'Cybersecurity', href: '/marketplace?industry=cybersecurity-ai', icon: '🔐' },
              { label: 'Fleet Services', href: '/marketplace?industry=fleet-services', icon: '🚐' },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: 8 }}>
                <Link href={item.href} style={{ fontSize: 13, color: '#64748b', display: 'flex', alignItems: 'center', gap: 7, transition: 'color 0.15s ease' }}>
                  <span style={{ fontSize: 14 }}>{item.icon}</span>{item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* The Group */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 11, fontWeight: 800, margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>The Group</h4>
            <div style={{ marginBottom: 10 }}>
              <Link href="/group" style={{ fontSize: 13, color: '#f59e0b', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5 }}>
                🏢 Group Overview →
              </Link>
            </div>
            {VENTURES.map(v => (
              <div key={v.slug} style={{ marginBottom: 8 }}>
                <Link href={`/ventures/${v.slug}`} style={{ fontSize: 13, color: '#64748b', display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span>{v.icon}</span>{v.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 11, fontWeight: 800, margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Platform</h4>
            {[
              { label: 'Browse Marketplace', href: '/marketplace' },
              { label: 'List Your Business', href: '/get-listed' },
              { label: 'Pricing & Plans', href: '/get-listed#plans' },
              { label: 'Live Leads Board', href: '/leads' },
              { label: 'Investor Deck', href: '/group' },
              { label: 'Items For Sale', href: '/for-sale' },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: 8 }}>
                <Link href={item.href} style={{ fontSize: 13, color: '#64748b' }}>{item.label}</Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 11, fontWeight: 800, margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h4>
            <a href="mailto:rodwellnaicker6@gmail.com" style={{ fontSize: 13, color: '#64748b', display: 'block', marginBottom: 10 }}>
              ✉️ rodwellnaicker6@gmail.com
            </a>
            <a href="https://wa.me/27627135401" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#64748b', display: 'block', marginBottom: 10 }}>
              💬 +27 62 713 5401
            </a>
            <div style={{ fontSize: 13, color: '#475569', marginBottom: 6 }}>📍 Durban, KwaZulu-Natal</div>
            <div style={{ fontSize: 13, color: '#475569', marginBottom: 20 }}>🕐 Mon–Fri · 8am–5pm SAST</div>

            {/* Group badge */}
            <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ color: '#f59e0b', fontSize: 11, fontWeight: 800, marginBottom: 4, letterSpacing: '0.05em' }}>D.R. AUTOTRONICS GROUP</div>
              <div style={{ fontSize: 12, color: '#475569', lineHeight: 1.5 }}>30-year SA legacy · 6 divisions<br />R13.88M group network worth</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ margin: 0, fontSize: 11.5, color: '#334155' }}>
            © 2026 The Middleman Network · D.R. Autotronics Group (Pty) Ltd
          </p>
          <p style={{ margin: 0, fontSize: 11.5, color: '#334155' }}>
            POPIA compliant · Regulated niches listed only · 0% commission marketplace
          </p>
        </div>
      </div>
    </footer>
  );
}
