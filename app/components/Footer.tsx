import Link from 'next/link';

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
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0 }}>South Africa&apos;s smart B2B marketplace connecting businesses with verified service providers and suppliers.</p>
          </div>
          {/* Marketplace */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 13, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 1 }}>Marketplace</h4>
            {['Energy & Solar', 'Security', 'Automotive Tech', 'Agriculture AI', 'Trading Tech', 'Property'].map(item => (
              <div key={item} style={{ marginBottom: 8 }}>
                <Link href="/marketplace" style={{ fontSize: 13, color: '#94a3b8' }}>{item}</Link>
              </div>
            ))}
          </div>
          {/* Ventures */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 13, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 1 }}>Ventures</h4>
            {[
              { name: 'D.R. Autotronics', slug: 'dr-autotronics' },
              { name: 'YieldCore AI', slug: 'yieldcore-ai' },
              { name: 'TipGuard SA', slug: 'tipguard-sa' },
              { name: 'Scope Indices', slug: 'scope-indices' },
            ].map(v => (
              <div key={v.slug} style={{ marginBottom: 8 }}>
                <Link href={`/ventures/${v.slug}`} style={{ fontSize: 13, color: '#94a3b8' }}>{v.name}</Link>
              </div>
            ))}
          </div>
          {/* Business */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 13, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 1 }}>For Businesses</h4>
            <div style={{ marginBottom: 8 }}><Link href="/get-listed" style={{ fontSize: 13, color: '#94a3b8' }}>List Your Business</Link></div>
            <div style={{ marginBottom: 8 }}><Link href="/get-listed#plans" style={{ fontSize: 13, color: '#94a3b8' }}>View Plans</Link></div>
            <div style={{ marginBottom: 8 }}><Link href="/marketplace" style={{ fontSize: 13, color: '#94a3b8' }}>Browse Niches</Link></div>
          </div>
          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 13, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 1 }}>Contact</h4>
            <div style={{ marginBottom: 8 }}>
              <a href="mailto:rodwellnaicker6@gmail.com" style={{ fontSize: 13, color: '#94a3b8' }}>📧 rodwellnaicker6@gmail.com</a>
            </div>
            <div style={{ marginBottom: 8 }}>
              <a href="https://wa.me/27627135401" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#94a3b8' }}>💬 WhatsApp</a>
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 13, color: '#94a3b8' }}>Mon–Fri · 8am–5pm SAST</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ margin: 0, fontSize: 12 }}>© 2026 The Middleman Network · D.R. Autotronics Group (Pty) Ltd · All rights reserved</p>
          <p style={{ margin: 0, fontSize: 12 }}>Regulated niches: listing only, no referral fees · POPIA compliant</p>
        </div>
      </div>
    </footer>
  );
}
