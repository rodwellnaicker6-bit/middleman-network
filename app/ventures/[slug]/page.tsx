import Link from 'next/link';
import { notFound } from 'next/navigation';
import { VENTURES, NICHES, INDUSTRIES, formatZAR, TRANSACTION_TYPE_LABELS } from '@/lib/data';

export function generateStaticParams() {
  return VENTURES.map(v => ({ slug: v.slug }));
}

export default async function VenturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venture = VENTURES.find(v => v.slug === slug);
  if (!venture) notFound();

  const niches = NICHES.filter(n => venture.niches.includes(n.slug));

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${venture.color} 0%, #0f172a 100%)`, color: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ fontSize: 80, lineHeight: 1 }}>{venture.icon}</div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
                D.R. Autotronics Group Venture
              </div>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, margin: '0 0 1rem', lineHeight: 1.1 }}>{venture.name}</h1>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', margin: '0 0 1.5rem', lineHeight: 1.6, maxWidth: 600 }}>{venture.tagline}</p>
              {venture.slug === 'scope-indices' && (
                <div style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.4)', borderRadius: 8, padding: '10px 14px', marginBottom: 16, fontSize: 12, color: '#fbbf24' }}>
                  ⚠️ Technology provider only. Not an FSP. Not financial or investment advice. Not registered with the FSCA.
                </div>
              )}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href={`/niche/${niches[0]?.slug}`} style={{ background: '#f59e0b', color: '#0f172a', fontWeight: 800, padding: '12px 24px', borderRadius: 10, fontSize: 15, display: 'inline-block' }}>
                  Get a Quote →
                </Link>
                <a href={`mailto:${venture.support_email}`} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 700, padding: '12px 24px', borderRadius: 10, fontSize: 15, border: '1px solid rgba(255,255,255,0.2)', display: 'inline-block' }}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: '2rem', alignItems: 'start' }}>
          {/* Main content */}
          <div>
            {/* D.R. Autotronics key stats */}
            {venture.slug === 'dr-autotronics' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  { val: '10+', label: 'Years operating', color: '#ef4444' },
                  { val: '15+', label: 'Vehicle brands', color: '#f97316' },
                  { val: '150+', label: 'ECU units in stock', color: '#f59e0b' },
                  { val: '180+', label: 'ECU programs', color: '#10b981' },
                  { val: '10GB', label: 'ECU database', color: '#6366f1' },
                  { val: 'R92K', label: 'Equipment value', color: '#8b5cf6' },
                ].map(s => (
                  <div key={s.label} style={{ background: '#fff', border: `2px solid ${s.color}20`, borderTop: `3px solid ${s.color}`, borderRadius: 12, padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: s.color }}>{s.val}</div>
                    <div style={{ fontSize: 11, color: '#64748b', marginTop: 4, fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* About */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
              <h2 style={{ fontWeight: 800, fontSize: 20, margin: '0 0 1rem', color: '#0f172a' }}>About {venture.name}</h2>
              <p style={{ color: '#475569', lineHeight: 1.8, fontSize: 15, margin: 0 }}>{venture.description}</p>
            </div>

            {/* Services */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
              <h2 style={{ fontWeight: 800, fontSize: 20, margin: '0 0 1.5rem', color: '#0f172a' }}>Services</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.75rem' }}>
                {venture.services.map(svc => (
                  <div key={svc} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: '#f8fafc', borderRadius: 8 }}>
                    <span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 13, color: '#334155' }}>{svc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Niches */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontWeight: 800, fontSize: 20, margin: '0 0 1.5rem', color: '#0f172a' }}>Request a Quote by Category</h2>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {niches.map(niche => {
                  const industry = INDUSTRIES.find(i => i.slug === niche.industry_slug);
                  const txLabel = TRANSACTION_TYPE_LABELS[niche.transaction_type];
                  return (
                    <Link key={niche.slug} href={`/niche/${niche.slug}`} className="card-hover"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', border: '1px solid #e2e8f0', borderRadius: 12, gap: '1rem', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontSize: 24 }}>{industry?.icon}</span>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 15, color: '#0f172a' }}>{niche.name}</div>
                          <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>{niche.description.slice(0, 80)}...</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                        {niche.avg_job_value_zar > 0 && (
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: 11, color: '#94a3b8' }}>Avg job</div>
                            <div style={{ fontWeight: 700, color: '#0f172a', fontSize: 14 }}>{formatZAR(niche.avg_job_value_zar)}</div>
                          </div>
                        )}
                        <span style={{ color: txLabel.color, fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>{txLabel.cta} →</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Contact */}
            <div style={{ background: '#0f172a', borderRadius: 16, padding: '1.75rem', marginBottom: '1.5rem', color: '#fff' }}>
              <h3 style={{ fontWeight: 800, fontSize: 18, margin: '0 0 1rem' }}>Contact {venture.name}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <a href="https://wa.me/27627135401?text=Hi%2C%20I%27m%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer"
                  style={{ background: '#25d366', color: '#fff', fontWeight: 800, padding: '13px 16px', borderRadius: 8, textAlign: 'center', display: 'block', fontSize: 15 }}>
                  💬 WhatsApp Us
                </a>
                <a href={`mailto:${venture.support_email}`} style={{ background: '#f59e0b', color: '#0f172a', fontWeight: 700, padding: '12px 16px', borderRadius: 8, textAlign: 'center', display: 'block' }}>
                  📧 Email Us
                </a>
                {venture.slug === 'dr-autotronics' && (
                  <a href="https://maps.google.com/?q=Durban+KwaZulu-Natal+South+Africa" target="_blank" rel="noopener noreferrer"
                    style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 700, padding: '12px 16px', borderRadius: 8, textAlign: 'center', display: 'block', border: '1px solid rgba(255,255,255,0.15)' }}>
                    📍 Durban, KwaZulu-Natal
                  </a>
                )}
              </div>
              {venture.slug === 'dr-autotronics' && (
                <div style={{ marginTop: 14, padding: '10px 12px', background: 'rgba(245,158,11,0.1)', borderRadius: 8, border: '1px solid rgba(245,158,11,0.2)' }}>
                  <div style={{ color: '#f59e0b', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Workshop Hours</div>
                  <div style={{ color: '#94a3b8', fontSize: 12 }}>Mon – Fri: 8am – 5pm SAST</div>
                  <div style={{ color: '#94a3b8', fontSize: 12 }}>Sat: 8am – 1pm · Mobile available</div>
                </div>
              )}
            </div>

            {/* Part of group */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 8 }}>PART OF THE GROUP</div>
              <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>D.R. Autotronics Group (Pty) Ltd</div>
              <p style={{ fontSize: 13, color: '#64748b', margin: '0 0 12px', lineHeight: 1.6 }}>A diversified technology holding company with ventures in automotive, agriculture, hospitality and trading technology.</p>
              <Link href="/#ventures" style={{ fontSize: 13, color: '#f59e0b', fontWeight: 700 }}>View all ventures →</Link>
            </div>

            {/* Other ventures */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Other Ventures</div>
              {VENTURES.filter(v => v.slug !== venture.slug).map(v => (
                <Link key={v.slug} href={`/ventures/${v.slug}`}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ fontSize: 24 }}>{v.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#0f172a' }}>{v.name}</div>
                    <div style={{ fontSize: 12, color: '#94a3b8' }}>{v.niches.length} niche{v.niches.length > 1 ? 's' : ''}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
