import Link from 'next/link';
import { VENTURES } from '@/lib/data';

export const metadata = {
  title: 'Our Ventures — D.R. Autotronics Group | The Middleman Network',
  description: 'Six divisions, one ecosystem. D.R. Autotronics, YieldCore AI, TipGuard SA, Scope Indices, Beryl Core AI and Manufacturing Division — all under one South African group.',
};

export default function VenturesPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Hero */}
      <section style={{ background: '#0f172a', color: '#fff', padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 20, padding: '4px 14px', marginBottom: 20 }}>
            <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>D.R. Autotronics Group</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 900, margin: '0 0 1rem', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Six Divisions.<br />One Ecosystem.
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 16, maxWidth: 560, lineHeight: 1.75, margin: 0 }}>
            Built from a 30-year family business legacy. Every venture is active, deployed and generating value — not a pitch deck, a reality.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 0, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {[
              { val: '6', label: 'Active Divisions' },
              { val: 'R9.3M+', label: 'Group Net Assets' },
              { val: '30 Yrs', label: 'Business Legacy' },
              { val: 'KZN', label: 'Headquartered' },
            ].map((s, i) => (
              <div key={i} style={{ flex: '0 0 auto', padding: '1.25rem 2rem', borderRight: '1px solid #f1f5f9', textAlign: 'center' }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em' }}>{s.val}</div>
                <div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ventures grid */}
      <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {VENTURES.map((v) => (
            <Link
              key={v.slug}
              href={`/ventures/${v.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                className="card-3d"
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  height: '100%',
                  cursor: 'pointer',
                }}
              >
                {/* Colour bar */}
                <div style={{ background: `linear-gradient(135deg, ${v.color} 0%, #0f172a 100%)`, padding: '1.75rem 1.75rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{ fontSize: 44, lineHeight: 1, flexShrink: 0 }}>{v.icon}</div>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: 19, color: '#fff', lineHeight: 1.15, marginBottom: 6, letterSpacing: '-0.02em' }}>{v.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{v.tagline}</div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '1.5rem 1.75rem' }}>
                  <p style={{ color: '#475569', fontSize: 13.5, lineHeight: 1.75, margin: '0 0 1.25rem' }}>
                    {v.description.length > 160 ? v.description.slice(0, 160) + '…' : v.description}
                  </p>

                  {/* Niche count */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: v.color, display: 'inline-block' }} />
                      <span style={{ fontSize: 12, color: '#64748b', fontWeight: 600 }}>
                        {v.niches.length} service{v.niches.length !== 1 ? 's' : ''} listed
                      </span>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, color: v.color }}>View →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Group CTA */}
        <div style={{ marginTop: '3rem', background: '#0f172a', borderRadius: 24, padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ color: '#f59e0b', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>The Full Group Picture</div>
            <h3 style={{ color: '#fff', fontWeight: 900, margin: '0 0 8px', fontSize: 20 }}>See how all six divisions connect.</h3>
            <p style={{ color: '#64748b', fontSize: 13, margin: 0, lineHeight: 1.6, maxWidth: 480 }}>Revenue flow, synergies, investment metrics and R12M+ pipeline — all in one overview.</p>
          </div>
          <Link
            href="/group"
            style={{ background: '#f59e0b', color: '#0f172a', fontWeight: 900, fontSize: 14, padding: '14px 28px', borderRadius: 12, whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            View Group Overview →
          </Link>
        </div>
      </div>
    </div>
  );
}
