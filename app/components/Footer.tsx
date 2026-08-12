import Link from 'next/link';
import { VENTURES } from '@/lib/data';

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8', marginTop: 'auto' }}>
      <div className="container" style={{ padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ background: '#f59e0b', color: '#0f172a', fontWeight: 900, fontSize: 12, padding: '3px 7px', borderRadius: 5 }}>TMN</div>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>The Middleman Network</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, margin: '0 0 12px' }}>
              South Africa&apos;s smart B2B marketplace. 22 industries. 120+ verified niches. 0% commission.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="mailto:rodwellnaicker6@gmail.com" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', padding: '6px 12px', borderRadius: 8, fontSize: 12 }}>
                📧 Email
              </a>
              <a href="https://wa.me/27627135401" target="_blank" rel="noopener noreferrer" style={{ background: '#25d36615', border: '1px solid #25d36630', color: '#25d366', padding: '6px 12px', borderRadius: 8, fontSize: 12 }}>
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 13, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 1 }}>Industries</h4>
            {[
              { label: '⚡ Energy & Solar', href: '/marketplace?industry=energy' },
              { label: '🏗️ Construction', href: '/marketplace?industry=construction' },
              { label: '🔧 Automotive Tech', href: '/marketplace?industry=automotive-technology' },
              { label: '🌾 Agriculture AI', href: '/marketplace?industry=agriculture-technology' },
              { label: '⚖️ Legal Services', href: '/marketplace?industry=legal-services' },
              { label: '🚚 Logistics', href: '/marketplace?industry=logistics-transport' },
              { label: '📡 Telecoms', href: '/marketplace?industry=telecoms' },
              { label: '⚙️ CNC Manufacturing', href: '/marketplace?industry=manufacturing-cnc' },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: 7 }}>
                <Link href={item.href} style={{ fontSize: 13, color: '#94a3b8' }}>{item.label}</Link>
              </div>
            ))}
          </div>

          {/* The Group */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 13, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 1 }}>The Group</h4>
            <div style={{ marginBottom: 8 }}>
              <Link href="/group" style={{ fontSize: 13, color: '#f59e0b', fontWeight: 700 }}>🏢 Group Overview →</Link>
            </div>
            {VENTURES.map(v => (
              <div key={v.slug} style={{ marginBottom: 7 }}>
                <Link href={`/ventures/${v.slug}`} style={{ fontSize: 13, color: '#94a3b8' }}>
                  {v.icon} {v.name}
                </Link>
              </div>
            ))}
          </div>

          {/* For Businesses */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 13, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 1 }}>For Businesses</h4>
            {[
              { label: 'Browse Marketplace', href: '/marketplace' },
              { label: 'List Your Business', href: '/get-listed' },
              { label: 'View Plans & Pricing', href: '/get-listed#plans' },
              { label: '🔴 Live Leads Board', href: '/leads' },
              { label: '🏢 Group Investors', href: '/group' },
              { label: 'Items For Sale', href: '/for-sale' },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: 7 }}>
                <Link href={item.href} style={{ fontSize: 13, color: '#94a3b8' }}>{item.label}</Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 13, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 1 }}>Contact</h4>
            <div style={{ marginBottom: 10 }}>
              <a href="mailto:rodwellnaicker6@gmail.com" style={{ fontSize: 13, color: '#94a3b8' }}>📧 rodwellnaicker6@gmail.com</a>
            </div>
            <div style={{ marginBottom: 10 }}>
              <a href="https://wa.me/27627135401" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#94a3b8' }}>💬 +27 62 713 5401</a>
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 13, color: '#64748b' }}>📍 Durban, KwaZulu-Natal</span>
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 13, color: '#64748b' }}>🕐 Mon–Fri · 8am–5pm SAST</span>
            </div>
            <div style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 8, padding: '10px 12px' }}>
              <div style={{ color: '#f59e0b', fontSize: 11, fontWeight: 800, marginBottom: 2 }}>D.R. Autotronics Group</div>
              <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.4 }}>30-year family legacy · 6 active divisions · R13.88M network worth</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ margin: 0, fontSize: 12 }}>© 2026 The Middleman Network · D.R. Autotronics Group (Pty) Ltd · All rights reserved</p>
          <p style={{ margin: 0, fontSize: 12 }}>POPIA compliant · Regulated niches: listing only · 0% commission marketplace</p>
        </div>
      </div>
    </footer>
  );
}
