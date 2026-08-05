import Link from 'next/link';
import { notFound } from 'next/navigation';
import { NICHES, INDUSTRIES, VENTURES, QUOTE_FIELDS, SERVICE_TYPES, formatZAR, TRANSACTION_TYPE_LABELS, getVentureForNiche } from '@/lib/data';
import QuoteForm from './QuoteForm';

export function generateStaticParams() {
  return NICHES.map(n => ({ slug: n.slug }));
}

const MOCK_PROVIDERS = [
  { name: 'PrimeTech Solutions', rating: 4.8, reviews: 124, location: 'Johannesburg, GP', verified: true, badge: '🥇 Top Rated' },
  { name: 'SA Pro Services', rating: 4.6, reviews: 87, location: 'Cape Town, WC', verified: true, badge: '✅ Verified' },
  { name: 'Expert Link SA', rating: 4.4, reviews: 62, location: 'Durban, KZN', verified: false, badge: '' },
];

export default async function NichePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const niche = NICHES.find(n => n.slug === slug);
  if (!niche) notFound();

  const industry = INDUSTRIES.find(i => i.slug === niche.industry_slug);
  const venture = getVentureForNiche(niche.slug);
  const txLabel = TRANSACTION_TYPE_LABELS[niche.transaction_type];
  const fields = QUOTE_FIELDS[niche.slug] || [];
  const services = SERVICE_TYPES[niche.slug] || [];
  const isSupplier = niche.party_type === 'supplier';
  const isRegulated = niche.compliance_mode === 'listing_only';
  const isLicenceRequired = niche.compliance_mode === 'licence_required';

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Breadcrumb */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: '#94a3b8' }}>
          <Link href="/" style={{ color: '#94a3b8' }}>Home</Link>
          <span>/</span>
          <Link href="/marketplace" style={{ color: '#94a3b8' }}>Marketplace</Link>
          <span>/</span>
          <span style={{ color: '#0f172a', fontWeight: 600 }}>{niche.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: '#0f172a', color: '#fff', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ fontSize: 56 }}>{industry?.icon}</div>
            <div style={{ flex: 1, minWidth: 240 }}>
              {venture && (
                <Link href={`/ventures/${venture.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 20, padding: '4px 12px', marginBottom: 12 }}>
                  <span style={{ fontSize: 14 }}>{venture.icon}</span>
                  <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 700 }}>{venture.name}</span>
                </Link>
              )}
              <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.1 }}>{niche.name}</h1>
              <p style={{ color: '#94a3b8', margin: '0 0 1.5rem', lineHeight: 1.7, maxWidth: 580, fontSize: 15 }}>{niche.description}</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ background: txLabel.color + '25', color: txLabel.color, fontSize: 12, fontWeight: 700, padding: '5px 12px', borderRadius: 20 }}>
                  {txLabel.label}
                </span>
                {niche.avg_job_value_zar > 0 && (
                  <span style={{ background: 'rgba(255,255,255,0.1)', color: '#e2e8f0', fontSize: 12, padding: '5px 12px', borderRadius: 20 }}>
                    Avg job: {formatZAR(niche.avg_job_value_zar)}
                  </span>
                )}
                {isLicenceRequired && niche.required_credential && (
                  <span style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', fontSize: 12, padding: '5px 12px', borderRadius: 20 }}>
                    🔒 {niche.required_credential}
                  </span>
                )}
                {isRegulated && (
                  <span style={{ background: 'rgba(99,102,241,0.2)', color: '#a5b4fc', fontSize: 12, padding: '5px 12px', borderRadius: 20 }}>
                    ⚖️ Regulated · Listing only
                  </span>
                )}
                {niche.slug === 'scope-indices' || (venture?.slug === 'scope-indices') ? (
                  <span style={{ background: 'rgba(245,158,11,0.1)', color: '#fbbf24', fontSize: 11, padding: '4px 10px', borderRadius: 20, border: '1px solid rgba(245,158,11,0.3)' }}>
                    Not financial advice · Tech only
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '2rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2rem', alignItems: 'start' }}>
          {/* Left column */}
          <div>
            {/* Services */}
            {services.length > 0 && (
              <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
                <h2 style={{ fontWeight: 800, fontSize: 18, margin: '0 0 1.25rem', color: '#0f172a' }}>Services in this category</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
                  {services.map(svc => (
                    <div key={svc.slug} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', background: '#f8fafc', borderRadius: 8 }}>
                      <span style={{ color: '#10b981' }}>✓</span>
                      <span style={{ fontSize: 13, color: '#334155' }}>{svc.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Providers (mock) */}
            {!isSupplier && (
              <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <h2 style={{ fontWeight: 800, fontSize: 18, margin: 0, color: '#0f172a' }}>Available Providers</h2>
                  <span style={{ fontSize: 12, color: '#94a3b8' }}>Ranked by tier & rating</span>
                </div>
                {MOCK_PROVIDERS.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0', borderBottom: i < MOCK_PROVIDERS.length - 1 ? '1px solid #f1f5f9' : 'none', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: `hsl(${i * 60 + 200}, 60%, 45%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 16 }}>
                        {p.name[0]}
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontWeight: 700, fontSize: 15, color: '#0f172a' }}>{p.name}</span>
                          {p.verified && <span style={{ fontSize: 10, background: '#dcfce7', color: '#16a34a', padding: '2px 6px', borderRadius: 4 }}>✓ Verified</span>}
                          {p.badge && <span style={{ fontSize: 10, color: '#f59e0b' }}>{p.badge}</span>}
                        </div>
                        <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>📍 {p.location}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: '#f59e0b', fontWeight: 700 }}>{'★'.repeat(Math.round(p.rating))} <span style={{ color: '#0f172a' }}>{p.rating}</span></div>
                      <div style={{ fontSize: 12, color: '#94a3b8' }}>{p.reviews} reviews</div>
                    </div>
                  </div>
                ))}
                <div style={{ background: '#f8fafc', borderRadius: 10, padding: '1rem', marginTop: '1rem', textAlign: 'center' }}>
                  <p style={{ color: '#64748b', fontSize: 13, margin: '0 0 8px' }}>Submit your quote request below to see all available providers in your area.</p>
                </div>
              </div>
            )}

            {/* Supplier info */}
            {isSupplier && (
              <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
                <h2 style={{ fontWeight: 800, fontSize: 18, margin: '0 0 1rem', color: '#0f172a' }}>About Supplier Listings</h2>
                <p style={{ color: '#475569', lineHeight: 1.7, fontSize: 14, margin: '0 0 1rem' }}>
                  Suppliers on The Middleman Network offer trade pricing to verified service providers. Submit an RFQ with your requirements and receive competitive quotes from multiple suppliers.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 8 }}>
                  {['Trade pricing available', 'RFQ in 60 seconds', 'Multiple suppliers respond', 'Lead time included', 'Stock status live'].map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: '#f8fafc', borderRadius: 8 }}>
                      <span style={{ color: '#10b981' }}>✓</span>
                      <span style={{ fontSize: 13, color: '#334155' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quote form sidebar */}
          <div style={{ position: 'sticky', top: 80 }}>
            <div style={{ background: '#fff', borderRadius: 16, border: '2px solid #f59e0b', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
              <div style={{ background: '#f59e0b', padding: '1.25rem 1.5rem' }}>
                <h2 style={{ fontWeight: 800, fontSize: 18, margin: 0, color: '#0f172a' }}>{txLabel.cta}</h2>
                <p style={{ color: '#78350f', margin: '4px 0 0', fontSize: 13 }}>Free · No obligation · AI-powered estimate</p>
              </div>
              {fields.length > 0 ? (
                <QuoteForm fields={fields} nicheName={niche.name} nicheSlug={niche.slug} txLabel={txLabel.cta} />
              ) : (
                <div style={{ padding: '2rem' }}>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.6, marginBottom: '1rem' }}>
                    {isRegulated
                      ? 'This is a regulated niche. Browse verified provider listings or contact them directly via their profiles.'
                      : 'Contact us directly to discuss your requirements for this niche.'}
                  </p>
                  <a href={`mailto:${venture?.support_email || 'info@middlemannetwork.co.za'}`}
                    style={{ display: 'block', background: '#0f172a', color: '#fff', textAlign: 'center', padding: '12px', borderRadius: 8, fontWeight: 700, fontSize: 14 }}>
                    📧 Contact Directly
                  </a>
                </div>
              )}
            </div>

            {/* Provider CTA */}
            {!isSupplier && (
              <div style={{ background: '#1e293b', borderRadius: 16, padding: '1.5rem', marginTop: '1rem' }}>
                <div style={{ color: '#94a3b8', fontSize: 12, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Are you a {niche.name.toLowerCase()} provider?</div>
                <p style={{ color: '#e2e8f0', fontSize: 14, lineHeight: 1.6, margin: '0 0 1rem' }}>Get leads delivered to you. From {niche.lead_credit_cost} credit{niche.lead_credit_cost > 1 ? 's' : ''} per lead.</p>
                <Link href="/get-listed" style={{ display: 'block', background: '#f59e0b', color: '#0f172a', textAlign: 'center', padding: '12px', borderRadius: 8, fontWeight: 800, fontSize: 14 }}>
                  List Your Business →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
