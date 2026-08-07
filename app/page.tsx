import Link from 'next/link';
import { INDUSTRIES, VENTURES, NICHES, PLANS, formatZAR } from '@/lib/data';

export default function HomePage() {
  const providerNiches = NICHES.filter(n => n.party_type === 'provider');
  const avgJobValue = Math.round(providerNiches.filter(n => n.avg_job_value_zar > 0).reduce((s, n) => s + n.avg_job_value_zar, 0) / providerNiches.filter(n => n.avg_job_value_zar > 0).length);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f1a2e 100%)', color: '#fff', padding: '5rem 0 6rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'radial-gradient(ellipse at 80% 50%, rgba(245,158,11,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 20, padding: '6px 14px', marginBottom: 24 }}>
            <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>🇿🇦 South Africa&apos;s Smart B2B Marketplace</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, margin: '0 0 1.5rem', lineHeight: 1.1, maxWidth: 700 }}>
            Connect. Quote. <span style={{ color: '#f59e0b' }}>Grow.</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#94a3b8', maxWidth: 560, lineHeight: 1.7, margin: '0 0 2.5rem' }}>
            The Middleman Network connects South African businesses with verified service providers and suppliers across 11 industries — powered by AI quoting, subscription leads and 0% commission.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/marketplace" style={{ background: '#f59e0b', color: '#0f172a', fontWeight: 800, fontSize: 16, padding: '14px 28px', borderRadius: 10, display: 'inline-block' }}>
              Browse Marketplace →
            </Link>
            <Link href="/get-listed" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 700, fontSize: 16, padding: '14px 28px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.15)', display: 'inline-block' }}>
              List Your Business
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', textAlign: 'center', padding: '1.5rem 0' }}>
            {[
              { value: `${INDUSTRIES.length}`, label: 'Industries' },
              { value: `${providerNiches.length}+`, label: 'Service Niches' },
              { value: `${VENTURES.length}`, label: 'Ventures' },
              { value: '0%', label: 'Commission' },
              { value: formatZAR(avgJobValue), label: 'Avg Job Value' },
            ].map(stat => (
              <div key={stat.label} style={{ padding: '1rem', borderRight: '1px solid #f1f5f9' }}>
                <div style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: 900, color: '#0f172a' }}>{stat.value}</div>
                <div style={{ fontSize: 12, color: '#64748b', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ──────────────────────────────────── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, margin: '0 0 1rem', color: '#0f172a' }}>Browse by Industry</h2>
            <p style={{ color: '#64748b', maxWidth: 500, margin: '0 auto' }}>11 industries, 36 niches, one platform. Whether you need a solar quote or a trading bot — we&apos;ve got you.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
            {INDUSTRIES.map(industry => {
              const count = NICHES.filter(n => n.industry_slug === industry.slug && n.party_type === 'provider').length;
              return (
                <Link key={industry.slug} href={`/marketplace?industry=${industry.slug}`} className="card-hover"
                  style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1.25rem', display: 'block', cursor: 'pointer' }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{industry.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#0f172a', marginBottom: 4 }}>{industry.name}</div>
                  <div style={{ fontSize: 12, color: '#94a3b8' }}>{count > 0 ? `${count} niche${count > 1 ? 's' : ''}` : 'Supplier'}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VENTURES SHOWCASE ────────────────────────────────── */}
      <section id="ventures" style={{ background: '#0f172a', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 20, padding: '5px 14px', marginBottom: 16 }}>
              <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>DR Autotronics Group Ventures</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, margin: '0 0 1rem', color: '#fff' }}>Brands on the Platform</h2>
            <p style={{ color: '#64748b', maxWidth: 520, margin: '0 auto' }}>Six active divisions under one holding company — D.R. Autotronics Group — each with its own marketplace presence, branding and service offering.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {VENTURES.map(venture => (
              <Link key={venture.slug} href={`/ventures/${venture.slug}`} className="card-hover"
                style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 16, padding: '1.75rem', display: 'block', cursor: 'pointer', borderTop: `3px solid ${venture.color}` }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{venture.icon}</div>
                <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 18, margin: '0 0 8px' }}>{venture.name}</h3>
                <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.6, margin: '0 0 1rem' }}>{venture.tagline}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1rem' }}>
                  {venture.services.slice(0, 3).map(svc => (
                    <span key={svc} style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8', fontSize: 11, padding: '3px 8px', borderRadius: 4 }}>{svc}</span>
                  ))}
                  {venture.services.length > 3 && (
                    <span style={{ background: 'rgba(255,255,255,0.05)', color: '#64748b', fontSize: 11, padding: '3px 8px', borderRadius: 4 }}>+{venture.services.length - 3} more</span>
                  )}
                </div>
                <div style={{ color: '#f59e0b', fontSize: 13, fontWeight: 700 }}>View venture →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, margin: '0 0 1rem', color: '#0f172a' }}>How It Works</h2>
            <p style={{ color: '#64748b', maxWidth: 440, margin: '0 auto' }}>Request a quote in under 2 minutes. AI-powered, subscription-based, 0% commission.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { step: '1', icon: '🔍', title: 'Find Your Niche', desc: 'Browse 36 niches across 11 industries. Filter by location, industry or service type.' },
              { step: '2', icon: '📋', title: 'Fill the Smart Form', desc: 'Answer a few questions. Our AI estimates the cost range before any provider sees your lead.' },
              { step: '3', icon: '🤝', title: 'Get Matched', desc: 'Verified providers in your area claim your lead using subscription credits — not per-lead commission.' },
              { step: '4', icon: '✅', title: 'Accept & Proceed', desc: 'Compare quotes, read reviews and accept the best offer. The marketplace earns via subscriptions only.' },
            ].map(item => (
              <div key={item.step} style={{ background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid #e2e8f0', position: 'relative' }}>
                <div style={{ position: 'absolute', top: -16, left: 24, background: '#f59e0b', color: '#0f172a', fontWeight: 900, width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{item.step}</div>
                <div style={{ fontSize: 36, marginBottom: 12, marginTop: 8 }}>{item.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: 16, margin: '0 0 8px', color: '#0f172a' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANS PREVIEW ────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, margin: '0 0 1rem', color: '#0f172a' }}>Simple Subscription Pricing</h2>
            <p style={{ color: '#64748b', maxWidth: 480, margin: '0 auto' }}>No per-lead commission. No hidden fees. Pay a flat monthly subscription and use your lead credits to grow your business.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', maxWidth: 900, margin: '0 auto' }}>
            {PLANS.filter(p => p.party_type === 'provider').map(plan => (
              <div key={plan.slug} className="card-hover"
                style={{ background: plan.highlight ? '#0f172a' : '#f8fafc', border: `2px solid ${plan.highlight ? '#f59e0b' : '#e2e8f0'}`, borderRadius: 16, padding: '1.75rem', position: 'relative' }}>
                {plan.highlight && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#f59e0b', color: '#0f172a', fontSize: 11, fontWeight: 800, padding: '3px 12px', borderRadius: 10 }}>MOST POPULAR</div>}
                <h3 style={{ fontWeight: 800, fontSize: 18, margin: '0 0 4px', color: plan.highlight ? '#fff' : '#0f172a' }}>{plan.name}</h3>
                <div style={{ color: '#f59e0b', fontWeight: 900, fontSize: 28, margin: '8px 0 0' }}>R{plan.price_monthly.toLocaleString()}</div>
                <div style={{ color: plan.highlight ? '#94a3b8' : '#64748b', fontSize: 12, marginBottom: 16 }}>/month excl. VAT</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem' }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ fontSize: 13, color: plan.highlight ? '#e2e8f0' : '#475569', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/get-listed#plans" style={{ display: 'block', background: plan.highlight ? '#f59e0b' : '#0f172a', color: plan.highlight ? '#0f172a' : '#fff', textAlign: 'center', fontWeight: 700, padding: '10px 0', borderRadius: 8, fontSize: 14 }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, color: '#0f172a', margin: '0 0 1rem' }}>Ready to grow your South African business?</h2>
          <p style={{ color: '#78350f', maxWidth: 480, margin: '0 auto 2rem', fontSize: 16 }}>Join the network. List your services, claim leads and get found by customers who are ready to buy.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/get-listed" style={{ background: '#0f172a', color: '#fff', fontWeight: 800, padding: '14px 32px', borderRadius: 10, fontSize: 16 }}>
              List Your Business →
            </Link>
            <Link href="/marketplace" style={{ background: 'rgba(0,0,0,0.1)', color: '#0f172a', fontWeight: 700, padding: '14px 32px', borderRadius: 10, fontSize: 16, border: '2px solid rgba(0,0,0,0.15)' }}>
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
