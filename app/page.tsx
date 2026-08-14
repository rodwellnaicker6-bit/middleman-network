import Link from 'next/link';
import { INDUSTRIES, VENTURES, NICHES, PLANS } from '@/lib/data';

export default function HomePage() {
  const providerNiches = NICHES.filter(n => n.party_type === 'provider');
  const avgJobValue = Math.round(
    providerNiches.filter(n => n.avg_job_value_zar > 0)
      .reduce((s, n) => s + n.avg_job_value_zar, 0) /
    providerNiches.filter(n => n.avg_job_value_zar > 0).length
  );

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-aurora" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', color: '#fff', padding: '5rem 0' }}>
        <div className="aurora-blob-gold" />
        <div className="aurora-blob-purple" />
        <div className="aurora-grid-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <div className="section-label section-label-gold float" style={{ marginBottom: 36 }}>
            <span className="dot-live" />
            South Africa&apos;s Smart B2B Marketplace · Live Now
          </div>

          <h1 style={{ fontSize: 'clamp(3.2rem, 8vw, 6rem)', fontWeight: 900, margin: '0 0 1.5rem', lineHeight: 0.92, letterSpacing: '-0.045em', maxWidth: 820 }}>
            <span className="text-gradient-gold" style={{ display: 'block' }}>Connect. Quote.</span>
            <span style={{ color: '#ffffff' }}>Grow your business.</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: '#94a3b8', maxWidth: 520, lineHeight: 1.85, margin: '0 0 2.75rem', fontWeight: 400 }}>
            Verified providers. {INDUSTRIES.length} industries. AI quotes in minutes.{' '}
            <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Zero commission — forever.</span>{' '}
            Built for South Africa.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center', marginBottom: '4rem' }}>
            <Link href="/marketplace" className="btn-gold">Browse Marketplace →</Link>
            <Link href="/get-listed" className="btn-ghost">List Your Business Free</Link>
          </div>

          <div style={{ display: 'inline-flex', gap: 0, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,158,11,0.18)', borderTop: '1px solid rgba(245,158,11,0.38)', borderRadius: 18, overflow: 'hidden', boxShadow: '0 0 60px rgba(245,158,11,0.07), inset 0 1px 0 rgba(255,255,255,0.05)' }}>
            {[
              { value: `${INDUSTRIES.length}`, label: 'Industries' },
              { value: `${providerNiches.length}+`, label: 'Niches' },
              { value: '0%', label: 'Commission' },
              { value: 'R' + Math.round(avgJobValue / 1000) + 'K', label: 'Avg Job' },
              { value: `${VENTURES.length}`, label: 'Ventures' },
            ].map((s, i, arr) => (
              <div key={s.label} style={{ flex: '1 1 90px', padding: '1.25rem 1.6rem', textAlign: 'center', borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div className="stat-gold" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 10, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE PROPS ──────────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label section-label-light" style={{ marginBottom: 16 }}>Why it works</div>
            <h2 style={{ fontWeight: 900, color: '#0a0f1a', margin: '0 0 0.75rem', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.035em' }}>
              Built by a business owner.
            </h2>
            <p style={{ color: '#64748b', maxWidth: 480, margin: '0 auto', fontSize: 15, lineHeight: 1.8 }}>
              Not a startup. Not a VC. 30 years of SA business experience — built into every feature.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { accent: '#f59e0b', icon: '💳', big: '0%',                      label: 'Commission. Always.',           body: 'Every rand from a job goes straight to you. We earn on subscriptions only — no cuts, no surprises, ever.',   tag: "SA's only zero-commission B2B marketplace" },
              { accent: '#10b981', icon: '🔒', big: `${providerNiches.length}+`, label: 'Credential-verified niches',   body: 'RMI. PSIRA. LPC. FSP. SACAP. PIRB. NHBRC. Every niche has a compliance gate. We check it so you trust it.', tag: 'No unverified providers, ever' },
              { accent: '#818cf8', icon: '🌐', big: `${INDUSTRIES.length}`,     label: 'Industries. One platform.',     body: 'Solar, legal, automotive, logistics, fintech, AI, construction — the full SA business ecosystem in one place.', tag: 'Widest SA B2B scope on one platform' },
            ].map((card, i) => (
              <div key={i} className="card-glow" style={{ background: '#f8fafc', border: '1px solid #e8edf3', borderRadius: 24, padding: '2.25rem', borderTop: `3px solid ${card.accent}`, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -40, right: -40, width: 140, height: 140, borderRadius: '50%', background: `${card.accent}0c`, pointerEvents: 'none' }} />
                <div style={{ fontSize: 30, marginBottom: 18 }}>{card.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 5vw, 4.2rem)', fontWeight: 900, color: card.accent, lineHeight: 1, marginBottom: 10, letterSpacing: '-0.055em' }}>{card.big}</div>
                <div style={{ fontWeight: 800, fontSize: 16.5, color: '#0a0f1a', marginBottom: 10, letterSpacing: '-0.025em' }}>{card.label}</div>
                <p style={{ color: '#64748b', fontSize: 13.5, lineHeight: 1.75, margin: '0 0 1.5rem' }}>{card.body}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${card.accent}14`, border: `1px solid ${card.accent}35`, borderRadius: 999, padding: '5px 12px' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: card.accent, flexShrink: 0, display: 'inline-block' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: card.accent, letterSpacing: '0.01em' }}>{card.tag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div style={{ background: '#040d1a', borderRadius: 24, padding: '2.25rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <div style={{ color: '#f59e0b', fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 8 }}>How TMN compares</div>
              <div style={{ color: '#475569', fontSize: 14 }}>Why businesses choose us over the alternatives</div>
            </div>
            <div className="table-scroll">
              <table style={{ width: '100%', minWidth: 520, borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '10px 14px', color: '#334155', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Feature</th>
                    {['TMN', 'Gumtree', 'FB Groups', 'Bark.com'].map(h => (
                      <th key={h} style={{ textAlign: 'center', padding: '10px 14px', color: h === 'TMN' ? '#fbbf24' : '#334155', fontWeight: h === 'TMN' ? 900 : 600, fontSize: 12, letterSpacing: h === 'TMN' ? '0.04em' : 0 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['0% commission on jobs',  '✅', '✅', '✅', '❌ 15–20%'],
                    ['Verified credentials',   '✅', '❌', '❌', '❌'],
                    ['AI quote estimation',    '✅', '❌', '❌', '❌'],
                    ['22 industry categories', '✅', '❌', '❌', '❌'],
                    ['SA-specific niches',     '✅', '⚠️', '⚠️', '⚠️'],
                    ['Flat predictable fee',   '✅', '❌', '✅', '❌'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '11px 14px', color: '#94a3b8', fontWeight: 500 }}>{row[0]}</td>
                      {row.slice(1).map((val, j) => (
                        <td key={j} style={{ textAlign: 'center', padding: '11px 14px', fontSize: 15, background: j === 0 ? 'rgba(245,158,11,0.05)' : 'transparent' }}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: '#060c1a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label section-label-gold" style={{ marginBottom: 18 }}>Simple, transparent pricing</div>
            <h2 style={{ color: '#fff', margin: '0 0 0.75rem', letterSpacing: '-0.035em', fontWeight: 900, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              From <span className="stat-gold">R299</span> / month
            </h2>
            <p style={{ color: '#475569', maxWidth: 440, margin: '0 auto', fontSize: 14, lineHeight: 1.85 }}>
              Flat subscription. No per-lead fees. No commission on jobs.<br />Every rand the client pays goes directly to you.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: 980, margin: '0 auto 3rem' }}>
            {PLANS.filter(p => p.party_type === 'provider').map(plan => (
              <div key={plan.slug} className={plan.highlight ? 'glow-pulse' : ''} style={{ position: 'relative' }}>
                {plan.highlight && (
                  <div style={{ position: 'absolute', top: -13, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 2 }}>
                    <div style={{ background: 'linear-gradient(90deg,#f59e0b,#fbbf24)', color: '#0a0f1a', fontSize: 10, fontWeight: 900, padding: '4px 16px', borderRadius: 999, letterSpacing: '0.08em', boxShadow: '0 2px 16px rgba(245,158,11,0.55)' }}>MOST POPULAR</div>
                  </div>
                )}
                <div style={{ background: plan.highlight ? 'rgba(245,158,11,0.08)' : 'rgba(255,255,255,0.03)', border: plan.highlight ? '1px solid rgba(245,158,11,0.40)' : '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '2rem 1.75rem', height: '100%' }}>
                  <div style={{ color: plan.highlight ? '#fbbf24' : '#475569', fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>{plan.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 2 }}>
                    <span style={{ color: '#fff', fontWeight: 900, fontSize: 38, letterSpacing: '-0.035em', lineHeight: 1 }}>R{plan.price_monthly.toLocaleString()}</span>
                    <span style={{ color: '#334155', fontSize: 13 }}>/mo</span>
                  </div>
                  <div style={{ color: '#334155', fontSize: 11, marginBottom: 20, fontWeight: 500 }}>excl. VAT</div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem', display: 'grid', gap: 9, marginBottom: '1.5rem' }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                        <span style={{ color: '#10b981', fontWeight: 900, fontSize: 12, flexShrink: 0, marginTop: 1 }}>✓</span>
                        <span style={{ color: '#64748b', fontSize: 13, lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/get-listed#plans" className={plan.highlight ? 'btn-gold' : ''} style={plan.highlight
                    ? { display: 'block', textAlign: 'center', fontSize: 13, padding: '12px 0', borderRadius: 10 }
                    : { display: 'block', textAlign: 'center', background: 'rgba(255,255,255,0.06)', color: '#94a3b8', fontWeight: 700, fontSize: 13, padding: '12px 0', borderRadius: 10, border: '1px solid rgba(255,255,255,0.09)' }}>
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 20, padding: '2rem 2.5rem', maxWidth: 700, margin: '0 auto', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', boxShadow: '0 0 50px rgba(16,185,129,0.07)' }}>
            {[
              { revenue: 'R29,900',   desc: '100 Starter / mo' },
              { revenue: 'R119,800',  desc: '200 Growth / mo' },
              { revenue: 'R499,500',  desc: '500 providers / mo' },
            ].map((item, i, arr) => (
              <div key={item.revenue} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div className="neon-emerald" style={{ fontWeight: 900, fontSize: 26, fontFamily: 'var(--font-display)', letterSpacing: '-0.04em' }}>{item.revenue}</div>
                  <div style={{ color: '#475569', fontSize: 11.5, fontWeight: 600, marginTop: 4 }}>{item.desc}</div>
                </div>
                {i < arr.length - 1 && <div style={{ color: '#10b981', fontSize: 20, opacity: 0.35 }}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label section-label-light" style={{ marginBottom: 16 }}>Browse the marketplace</div>
            <h2 style={{ fontWeight: 900, color: '#0a0f1a', margin: '0 0 0.75rem', letterSpacing: '-0.035em', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              {INDUSTRIES.length} Industries. {NICHES.length} Niches.
            </h2>
            <p style={{ color: '#64748b', maxWidth: 440, margin: '0 auto', fontSize: 14, lineHeight: 1.85 }}>
              Every verified service category South African businesses need — one platform.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.75rem' }}>
            {INDUSTRIES.map(industry => {
              const count = NICHES.filter(n => n.industry_slug === industry.slug && n.party_type === 'provider').length;
              return (
                <Link key={industry.slug} href={`/marketplace?industry=${industry.slug}`} className="card-glow"
                  style={{ background: '#f8fafc', border: '1px solid #edf1f6', borderRadius: 16, padding: '1.25rem 0.875rem', display: 'block', textAlign: 'center' }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{industry.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 12.5, color: '#0f172a', marginBottom: 3, letterSpacing: '-0.01em' }}>{industry.name}</div>
                  <div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600 }}>{count > 0 ? `${count} niche${count > 1 ? 's' : ''}` : 'Supplier'}</div>
                </Link>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/marketplace" className="btn-dark">Explore All {NICHES.length} Niches →</Link>
          </div>
        </div>
      </section>

      {/* ── VENTURES ─────────────────────────────────────── */}
      <section id="ventures" className="hero-aurora" style={{ padding: '6rem 0' }}>
        <div className="aurora-blob-gold" />
        <div className="aurora-blob-purple" />
        <div className="aurora-grid-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label section-label-gold" style={{ marginBottom: 16 }}>D.R. Autotronics Group</div>
            <h2 style={{ color: '#fff', margin: '0 0 0.75rem', letterSpacing: '-0.035em', fontWeight: 900, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              Six Divisions. One Ecosystem.
            </h2>
            <p style={{ color: '#475569', maxWidth: 480, margin: '0 auto', fontSize: 14, lineHeight: 1.85 }}>
              Each with its own marketplace presence, branding and revenue stream — all cross-feeding each other.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {VENTURES.map(venture => (
              <Link key={venture.slug} href={`/ventures/${venture.slug}`} className="card-3d"
                style={{
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 100%)',
                  borderRadius: 20,
                  padding: '2rem',
                  display: 'block',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderTop: `2px solid ${venture.color}`,
                  boxShadow: `0 8px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.07)`,
                }}>
                <div style={{ fontSize: 38, marginBottom: 14 }}>{venture.icon}</div>
                <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 18, margin: '0 0 8px', letterSpacing: '-0.025em' }}>{venture.name}</h3>
                <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7, margin: '0 0 1.25rem' }}>{venture.tagline}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '1.25rem' }}>
                  {venture.services.slice(0, 3).map(svc => (
                    <span key={svc} style={{ background: 'rgba(255,255,255,0.06)', color: '#64748b', fontSize: 10.5, padding: '3px 8px', borderRadius: 5, border: '1px solid rgba(255,255,255,0.08)' }}>{svc}</span>
                  ))}
                </div>
                <div style={{ color: venture.color, fontSize: 13, fontWeight: 700, letterSpacing: '0.01em' }}>View venture →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label section-label-light" style={{ marginBottom: 16 }}>How it works</div>
            <h2 style={{ fontWeight: 900, margin: '0 0 0.75rem', color: '#0a0f1a', letterSpacing: '-0.035em', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)' }}>
              Get a quote in under 2 minutes
            </h2>
            <p style={{ color: '#64748b', maxWidth: 380, margin: '0 auto', fontSize: 14, lineHeight: 1.85 }}>No account needed. Providers compete — you choose.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem' }}>
            {[
              { step: '01', icon: '🔍', title: 'Find Your Service', desc: 'Browse 85+ niches across 22 industries — solar, ECU, legal, logistics and more.' },
              { step: '02', icon: '📋', title: 'Fill the Form',     desc: 'Quick smart form. AI shows you the cost range before you even submit.' },
              { step: '03', icon: '🤝', title: 'Get Matched',       desc: 'Verified local providers see your lead and compete for the job.' },
              { step: '04', icon: '✅', title: 'Accept & Close',    desc: 'Compare quotes, pick your provider, pay them directly. TMN earns R0 commission.' },
            ].map((item, i) => (
              <div key={i} className="card-glow" style={{ borderRadius: 20, padding: '2rem', background: '#fff', border: '1px solid #e8edf3' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 900, letterSpacing: '0.14em', color: '#f59e0b', marginBottom: 14, textTransform: 'uppercase' }}>{item.step}</div>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: 16, margin: '0 0 8px', color: '#0a0f1a', letterSpacing: '-0.02em' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: 13.5, lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTOR ─────────────────────────────────────── */}
      <section className="hero-aurora" style={{ padding: '6rem 0' }}>
        <div className="aurora-blob-gold" />
        <div className="aurora-blob-purple" />
        <div className="aurora-grid-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-label section-label-gold" style={{ marginBottom: 24 }}>For investors</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 900, margin: '0 0 1.25rem', letterSpacing: '-0.04em', lineHeight: 1.08 }}>
                Simple to understand.<br />
                <span className="text-gradient-gold">Easy to back.</span>
              </h2>
              <p style={{ color: '#64748b', fontSize: 14.5, lineHeight: 1.9, margin: '0 0 1.5rem' }}>
                Providers pay a flat monthly subscription. Clients pay nothing. TMN earns on subscriptions alone — no commissions, no per-lead fees.
              </p>
              <p style={{ color: '#475569', fontSize: 13.5, lineHeight: 1.9, margin: '0 0 2.5rem' }}>
                22 industries. 85+ niches. Each one a revenue stream. Every new provider grows the business automatically.
              </p>
              <Link href="/group" className="btn-gold" style={{ fontSize: 14, padding: '13px 28px', display: 'inline-block' }}>
                View the full group deck →
              </Link>
            </div>
            <div style={{ display: 'grid', gap: '0.625rem' }}>
              {[
                { label: 'Revenue source',    value: 'Monthly subscriptions only', color: 'emerald' },
                { label: 'Commission on jobs',value: 'R0 — zero, always',           color: 'emerald' },
                { label: 'Cost to buyers',    value: 'R0 — free forever',           color: 'emerald' },
                { label: 'Break-even point',  value: '~34 Starter subscribers',     color: 'gold' },
                { label: '100 subscribers',   value: 'R29,900 / month',             color: 'gold' },
                { label: '500 subscribers',   value: 'R300K–R500K / month',         color: 'gold' },
                { label: 'Active industries', value: '22 live today',               color: 'violet' },
              ].map((row, i) => (
                <div key={i} style={{
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  background: row.color === 'emerald' ? 'rgba(16,185,129,0.09)' : row.color === 'gold' ? 'rgba(245,158,11,0.09)' : 'rgba(139,92,246,0.09)',
                  border: `1px solid ${row.color === 'emerald' ? 'rgba(16,185,129,0.28)' : row.color === 'gold' ? 'rgba(245,158,11,0.28)' : 'rgba(139,92,246,0.26)'}`,
                  borderRadius: 12, padding: '0.9rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                }}>
                  <span style={{ color: '#64748b', fontSize: 12.5, fontWeight: 600 }}>{row.label}</span>
                  <span className={row.color === 'emerald' ? 'neon-emerald' : row.color === 'gold' ? 'neon-gold' : ''} style={row.color === 'violet' ? { color: '#a78bfa', fontWeight: 800, fontSize: 13.5, letterSpacing: '-0.01em' } : { fontWeight: 800, fontSize: 13.5, letterSpacing: '-0.01em' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label section-label-light" style={{ marginBottom: 16 }}>What providers say</div>
            <h2 style={{ fontWeight: 900, color: '#0f172a', margin: '0 0 0.75rem', letterSpacing: '-0.035em', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)' }}>
              Built for South African businesses
            </h2>
            <p style={{ color: '#64748b', maxWidth: 460, margin: '0 auto', fontSize: 14, lineHeight: 1.85 }}>Real feedback from providers who listed on TMN during our launch phase.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Marcus T.',  role: 'Solar PV Installer · Cape Town, WC',  avatar: 'M', color: '#f59e0b', text: 'Listed in under 30 minutes. Had my first qualified lead within 2 days — a 5kW grid-tied installation in Brackenfell. No commission taken. That job alone paid for 3 months of my subscription.' },
              { name: 'Priya N.',   role: 'Fleet Manager · Johannesburg, GP',     avatar: 'P', color: '#6366f1', text: "Finally a platform that doesn't punish you for closing a big job. We manage 40 vehicles and every rand goes straight to us. The leads are specific — people who actually need telematics, not random tyre-kickers." },
              { name: 'Thabo K.',   role: 'ECU Technician · Durban, KZN',         avatar: 'T', color: '#10b981', text: "I've tried Gumtree, Facebook Groups, Bark. Nothing compares. TMN people already know what they need — they've seen the price range. I spend less time quoting and more time working." },
            ].map((t, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 24, padding: '2.25rem', border: '1px solid #e8edf3' }}>
                <div style={{ color: '#fbbf24', fontSize: 15, marginBottom: 18, letterSpacing: 3 }}>★★★★★</div>
                <p style={{ color: '#1e293b', fontSize: 14, lineHeight: 1.8, margin: '0 0 1.75rem', fontStyle: 'italic' }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 42, height: 42, background: t.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 17, flexShrink: 0 }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 14, color: '#0f172a', letterSpacing: '-0.01em' }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#0f172a', margin: '0 0 1rem', letterSpacing: '-0.04em' }}>
            Ready to grow your<br />South African business?
          </h2>
          <p style={{ color: '#78350f', maxWidth: 460, margin: '0 auto 2.5rem', fontSize: 16, lineHeight: 1.8 }}>
            Join the network. List your services, claim leads and get found by customers who are ready to buy.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/get-listed" style={{ background: '#0f172a', color: '#fff', fontWeight: 800, padding: '16px 36px', borderRadius: 12, fontSize: 16, letterSpacing: '-0.01em', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
              List Your Business →
            </Link>
            <Link href="/marketplace" style={{ background: 'rgba(0,0,0,0.12)', color: '#0f172a', fontWeight: 700, padding: '16px 36px', borderRadius: 12, fontSize: 16, border: '2px solid rgba(0,0,0,0.18)' }}>
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
