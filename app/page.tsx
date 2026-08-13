import Link from 'next/link';
import { INDUSTRIES, VENTURES, NICHES, PLANS, formatZAR } from '@/lib/data';

export default function HomePage() {
  const providerNiches = NICHES.filter(n => n.party_type === 'provider');
  const avgJobValue = Math.round(providerNiches.filter(n => n.avg_job_value_zar > 0).reduce((s, n) => s + n.avg_job_value_zar, 0) / providerNiches.filter(n => n.avg_job_value_zar > 0).length);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-aurora" style={{ color: '#fff', padding: '6.5rem 0 7.5rem' }}>
        {/* Grid overlay as a child div — keeps ::before/::after free for aurora blobs */}
        <div className="aurora-grid-overlay" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Live badge */}
          <div className="section-label section-label-gold float" style={{ marginBottom: 28 }}>
            <span className="dot-live" />
            South Africa&apos;s Smart B2B Marketplace · Live Now
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)', fontWeight: 900, margin: '0 0 1.5rem', lineHeight: 1.0, letterSpacing: '-0.035em', maxWidth: 740 }}>
            <span className="text-gradient-gold">Connect. Quote.</span>
            <br />
            <span style={{ color: '#fff' }}>Grow your business.</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: '#94a3b8', maxWidth: 500, lineHeight: 1.8, margin: '0 0 2.75rem', fontWeight: 400 }}>
            Verified service providers. {INDUSTRIES.length} industries. AI-powered quotes in minutes. Zero commission — ever. Built for South Africa.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: '3rem' }}>
            <Link href="/marketplace" className="btn-gold">Browse Marketplace →</Link>
            <Link href="/get-listed" className="btn-ghost">List Your Business</Link>
          </div>

          {/* Social proof strip */}
          <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: 14, overflow: 'hidden', maxWidth: 680, boxShadow: '0 0 40px rgba(245,158,11,0.05)' }}>
            {[
              { value: `${INDUSTRIES.length}`, label: 'Industries' },
              { value: `${providerNiches.length}+`, label: 'Niches' },
              { value: '0%', label: 'Commission' },
              { value: 'R' + Math.round(avgJobValue / 1000) + 'K', label: 'Avg Job' },
              { value: `${VENTURES.length}`, label: 'Ventures' },
            ].map((s, i) => (
              <div key={s.label} style={{ flex: '1 1 80px', padding: '1rem 1.25rem', textAlign: 'center', borderRight: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div className="stat-gold" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.7rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ fontSize: 10.5, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 600, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #f1f5f9', padding: '0.875rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            {[
              'POPIA Compliant', 'SSL Secured', '0% Commission', 'Verified Providers Only', 'Instant Quote Forms',
            ].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#64748b', fontWeight: 600, whiteSpace: 'nowrap' }}>
                <span style={{ color: '#10b981', fontWeight: 900, fontSize: 10 }}>✓</span>{t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── VALUE PROPS ──────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label section-label-light" style={{ marginBottom: 14 }}>Why it works</div>
            <h2 style={{ color: '#0a0f1a', margin: '0 0 0.75rem', lineHeight: 1.1 }}>
              Built by a business owner.<br />
              <span style={{ color: '#64748b', fontWeight: 600, fontSize: '0.85em' }}>Not a startup. Not a VC. Real 30-year SA experience.</span>
            </h2>
          </div>

          {/* 3 big value prop cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {[
              {
                accent: '#f59e0b',
                icon: '💳',
                big: '0%',
                label: 'Commission. Always.',
                body: 'Every rand you earn from a job goes straight to you. We earn via subscriptions only. No cuts, no surprises — ever.',
                tag: 'South Africa\'s only zero-commission B2B marketplace',
              },
              {
                accent: '#10b981',
                icon: '🔒',
                big: `${providerNiches.length}+`,
                label: 'Credential-verified niches',
                body: 'RMI. PSIRA. LPC. FSP. SACAP. PIRB. NHBRC. Each niche has a compliance requirement. We check it. You trust it.',
                tag: 'No unverified providers ever get listed',
              },
              {
                accent: '#818cf8',
                icon: '🌐',
                big: `${INDUSTRIES.length}`,
                label: 'Industries. One platform.',
                body: 'Legal, insurance, automotive, logistics, solar, fintech, construction, AI — a full SA business ecosystem, cross-connected.',
                tag: 'The only SA marketplace with this scope',
              },
            ].map((card, i) => (
              <div key={i} className="card-glow" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 20, padding: '2rem', borderLeft: `3px solid ${card.accent}`, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: `${card.accent}10`, pointerEvents: 'none' }} />
                <div style={{ fontSize: 28, marginBottom: 12 }}>{card.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: card.accent, lineHeight: 1, marginBottom: 6, letterSpacing: '-0.04em' }}>{card.big}</div>
                <div style={{ fontWeight: 800, fontSize: 16, color: '#0a0f1a', marginBottom: 10 }}>{card.label}</div>
                <p style={{ color: '#64748b', fontSize: 13.5, lineHeight: 1.7, margin: '0 0 1.25rem' }}>{card.body}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: `${card.accent}15`, border: `1px solid ${card.accent}30`, borderRadius: 999, padding: '4px 10px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: card.accent, display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: card.accent }}>{card.tag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison strip — TMN vs alternatives */}
          <div style={{ background: '#0a0f1a', borderRadius: 20, padding: '2rem', overflow: 'hidden' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ color: '#f59e0b', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 6 }}>How TMN compares</div>
              <div style={{ color: '#94a3b8', fontSize: 13 }}>Why businesses choose us over the alternatives</div>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', minWidth: 520, borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '8px 12px', color: '#475569', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>Feature</th>
                    {['TMN', 'Gumtree', 'FB Groups', 'Bark.com'].map(h => (
                      <th key={h} style={{ textAlign: 'center', padding: '8px 12px', color: h === 'TMN' ? '#f59e0b' : '#475569', fontWeight: h === 'TMN' ? 900 : 600, fontSize: 12 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['0% commission on jobs', '✅', '✅', '✅', '❌ 15–20%'],
                    ['Verified credentials', '✅', '❌', '❌', '❌'],
                    ['AI quote estimation', '✅', '❌', '❌', '❌'],
                    ['22 industry categories', '✅', '❌', '❌', '❌'],
                    ['SA-specific niches', '✅', '⚠️', '⚠️', '⚠️'],
                    ['Flat predictable fee', '✅', '❌', '✅', '❌'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '10px 12px', color: '#94a3b8', fontWeight: 500 }}>{row[0]}</td>
                      {row.slice(1).map((val, j) => (
                        <td key={j} style={{ textAlign: 'center', padding: '10px 12px', fontSize: 15, background: j === 0 ? 'rgba(245,158,11,0.04)' : 'transparent' }}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING — prominent, near top ────────────────────── */}
      <section style={{ padding: '4.5rem 0', background: '#0a0f1a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label section-label-gold" style={{ marginBottom: 16 }}>Simple, transparent pricing</div>
            <h2 style={{ color: '#fff', margin: '0 0 0.75rem', letterSpacing: '-0.025em' }}>From <span className="stat-gold">R299</span> / month</h2>
            <p style={{ color: '#64748b', maxWidth: 440, margin: '0 auto', fontSize: 14 }}>
              Flat subscription. No per-lead fees. No commission on jobs. Every rand the client pays goes to you.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', maxWidth: 960, margin: '0 auto' }}>
            {PLANS.filter(p => p.party_type === 'provider').map(plan => (
              <div key={plan.slug} className={plan.highlight ? 'border-gradient glow-pulse' : ''} style={{ position: 'relative' }}>
                <div style={{
                  background: plan.highlight ? 'rgba(245,158,11,0.09)' : 'rgba(255,255,255,0.03)',
                  border: plan.highlight ? '1px solid rgba(245,158,11,0.35)' : '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16, padding: '1.75rem',
                  position: 'relative',
                }}>
                  {plan.highlight && (
                    <div style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)', background: '#f59e0b', color: '#0a0f1a', fontSize: 10, fontWeight: 900, padding: '3px 14px', borderRadius: 999, whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>MOST POPULAR</div>
                  )}
                  <div style={{ color: plan.highlight ? '#fbbf24' : '#94a3b8', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{plan.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                    <span style={{ color: '#fff', fontWeight: 900, fontSize: 32, letterSpacing: '-0.02em' }}>R{plan.price_monthly.toLocaleString()}</span>
                    <span style={{ color: '#475569', fontSize: 13 }}>/mo</span>
                  </div>
                  <div style={{ color: '#334155', fontSize: 11, marginBottom: 16 }}>excl. VAT</div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem', display: 'grid', gap: 7, marginBottom: '1.25rem' }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: '#10b981', fontWeight: 900, fontSize: 11, flexShrink: 0, marginTop: 1 }}>✓</span>
                        <span style={{ color: '#94a3b8', fontSize: 12.5, lineHeight: 1.4 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/get-listed#plans" className={plan.highlight ? 'btn-gold' : ''} style={plan.highlight ? { display: 'block', textAlign: 'center', fontSize: 13, padding: '11px 0' } : { display: 'block', textAlign: 'center', background: 'rgba(255,255,255,0.07)', color: '#e2e8f0', fontWeight: 700, fontSize: 13, padding: '11px 0', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}>
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Revenue clarity */}
          <div style={{ marginTop: '2.5rem', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 14, padding: '1.5rem 1.75rem', maxWidth: 680, margin: '2.5rem auto 0', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 30px rgba(16,185,129,0.08)' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="neon-emerald" style={{ fontWeight: 900, fontSize: 22, fontFamily: 'var(--font-display)' }}>R29,900</div>
              <div style={{ color: '#475569', fontSize: 11, fontWeight: 600, marginTop: 3 }}>100 Starter providers/mo</div>
            </div>
            <div style={{ color: '#10b981', fontSize: 20, opacity: 0.5 }}>→</div>
            <div style={{ textAlign: 'center' }}>
              <div className="neon-emerald" style={{ fontWeight: 900, fontSize: 22, fontFamily: 'var(--font-display)' }}>R119,800</div>
              <div style={{ color: '#475569', fontSize: 11, fontWeight: 600, marginTop: 3 }}>200 Growth providers/mo</div>
            </div>
            <div style={{ color: '#10b981', fontSize: 20, opacity: 0.5 }}>→</div>
            <div style={{ textAlign: 'center' }}>
              <div className="neon-emerald" style={{ fontWeight: 900, fontSize: 22, fontFamily: 'var(--font-display)' }}>R499,500</div>
              <div style={{ color: '#475569', fontSize: 11, fontWeight: 600, marginTop: 3 }}>500 providers/mo (scale)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ──────────────────────────────────── */}
      <section style={{ padding: '4.5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label section-label-light">Browse the marketplace</div>
            <h2 style={{ margin: '0 0 0.75rem', color: '#0a0f1a' }}>{INDUSTRIES.length} Industries. {NICHES.length} Niches.</h2>
            <p style={{ color: '#64748b', maxWidth: 440, margin: '0 auto', fontSize: 14 }}>Every verified service category South African businesses need — one platform.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.875rem' }}>
            {INDUSTRIES.map(industry => {
              const count = NICHES.filter(n => n.industry_slug === industry.slug && n.party_type === 'provider').length;
              return (
                <Link key={industry.slug} href={`/marketplace?industry=${industry.slug}`} className="card-3d"
                  style={{ background: '#f8fafc', border: '1px solid #f1f5f9', borderRadius: 14, padding: '1.25rem 1rem', display: 'block', cursor: 'pointer', textAlign: 'center' }}>
                  <div style={{ fontSize: 34, marginBottom: 10, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}>{industry.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#0f172a', marginBottom: 3 }}>{industry.name}</div>
                  <div style={{ fontSize: 11.5, color: '#94a3b8', fontWeight: 600 }}>{count > 0 ? `${count} niche${count > 1 ? 's' : ''}` : 'Supplier'}</div>
                </Link>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/marketplace" className="btn-dark">Explore All {NICHES.length} Niches →</Link>
          </div>
        </div>
      </section>

      {/* ── VENTURES SHOWCASE ────────────────────────────────── */}
      <section id="ventures" className="hero-aurora" style={{ padding: '4.5rem 0' }}>
        <div className="aurora-grid-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label section-label-gold">D.R. Autotronics Group Ventures</div>
            <h2 style={{ color: '#fff', margin: '0 0 0.75rem' }}>Six Divisions. One Ecosystem.</h2>
            <p style={{ color: '#64748b', maxWidth: 460, margin: '0 auto', fontSize: 14 }}>Each with its own marketplace presence, branding and revenue stream — all cross-feeding each other.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {VENTURES.map(venture => (
              <Link key={venture.slug} href={`/ventures/${venture.slug}`} className="card-3d glass"
                style={{ borderRadius: 16, padding: '1.75rem', display: 'block', cursor: 'pointer', borderTop: `2px solid ${venture.color}` }}>
                <div style={{ fontSize: 36, marginBottom: 12, filter: `drop-shadow(0 4px 12px ${venture.color}55)` }}>{venture.icon}</div>
                <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 17, margin: '0 0 6px', letterSpacing: '-0.015em' }}>{venture.name}</h3>
                <p style={{ color: '#64748b', fontSize: 12.5, lineHeight: 1.6, margin: '0 0 1rem' }}>{venture.tagline}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '1rem' }}>
                  {venture.services.slice(0, 3).map(svc => (
                    <span key={svc} style={{ background: 'rgba(255,255,255,0.06)', color: '#94a3b8', fontSize: 10.5, padding: '3px 8px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.06)' }}>{svc}</span>
                  ))}
                </div>
                <div style={{ color: venture.color, fontSize: 12.5, fontWeight: 700 }}>View venture →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label section-label-light" style={{ marginBottom: 16 }}>How it works</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, margin: '0 0 0.5rem', color: '#0a0f1a' }}>Get a quote in under 2 minutes</h2>
            <p style={{ color: '#64748b', maxWidth: 380, margin: '0 auto', fontSize: 14 }}>No account needed. Providers compete — you choose.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {[
              { step: '01', icon: '🔍', title: 'Find Your Service', desc: 'Browse 85+ niches across 22 industries — solar, ECU, legal, logistics and more.' },
              { step: '02', icon: '📋', title: 'Fill the Form', desc: 'Quick smart form. AI shows you the cost range before you even submit.' },
              { step: '03', icon: '🤝', title: 'Get Matched', desc: 'Verified local providers see your lead and compete for the job.' },
              { step: '04', icon: '✅', title: 'Accept & Close', desc: 'Compare quotes, pick your provider, pay them directly. TMN earns R0 commission.' },
            ].map((item, i) => (
              <div key={i} className="card-3d card-glow" style={{ borderRadius: 16, padding: '1.75rem', position: 'relative', background: '#fff', border: '1px solid #e2e8f0' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 900, letterSpacing: 2, color: '#f59e0b', marginBottom: 10 }}>{item.step}</div>
                <div style={{ fontSize: 30, marginBottom: 10 }}>{item.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: 15, margin: '0 0 8px', color: '#0a0f1a' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTOR SECTION ──────────────────────────────────── */}
      <section className="hero-aurora" style={{ padding: '4.5rem 0' }}>
        <div className="aurora-grid-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="section-label section-label-gold" style={{ marginBottom: 20 }}>For investors</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, margin: '0 0 1rem' }}>This is easy<br />to understand.<br /><span className="text-gradient-gold">And easy to back.</span></h2>
              <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.8, margin: '0 0 1.5rem' }}>
                Providers pay a flat monthly subscription. Clients pay nothing. TMN earns on subscriptions alone — not commissions, not per-lead fees. Simple, predictable, recurring.
              </p>
              <p style={{ color: '#475569', fontSize: 13, lineHeight: 1.8, margin: '0 0 2rem' }}>
                22 industries. 85+ niches. Each one a revenue stream. Every new provider listed grows the business — automatically.
              </p>
              <Link href="/group" className="btn-gold" style={{ fontSize: 14, padding: '12px 24px', display: 'inline-block' }}>
                View the full group deck →
              </Link>
            </div>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {[
                { label: 'Revenue source', value: 'Monthly subscriptions only', neon: 'neon-emerald' },
                { label: 'Commission on jobs', value: 'R0 — zero, always', neon: 'neon-emerald' },
                { label: 'Cost to buyers', value: 'R0 — free to use', neon: 'neon-emerald' },
                { label: 'Break-even point', value: '~34 Starter subscribers', neon: 'neon-gold' },
                { label: '100 subscribers earn', value: 'R29,900/month', neon: 'neon-gold' },
                { label: '500 subscribers earn', value: 'R300K–R500K/month', neon: 'neon-gold' },
                { label: 'Active industries', value: '22 live today', neon: '' },
              ].map((row, i) => (
                <div key={i} className="glass" style={{ borderRadius: 10, padding: '0.875rem 1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, borderColor: i < 3 ? 'rgba(16,185,129,0.15)' : i < 6 ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.1)' }}>
                  <span style={{ color: '#94a3b8', fontSize: 12, fontWeight: 600 }}>{row.label}</span>
                  <span className={row.neon} style={!row.neon ? { color: '#818cf8', fontWeight: 800, fontSize: 13 } : { fontWeight: 800, fontSize: 13 }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 20, padding: '5px 14px', marginBottom: 16 }}>
              <span style={{ color: '#92400e', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5 }}>What providers say</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, color: '#0f172a', margin: '0 0 1rem' }}>Built for South African businesses</h2>
            <p style={{ color: '#64748b', maxWidth: 480, margin: '0 auto', fontSize: 15 }}>Real feedback from providers who listed on TMN during our launch phase.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                name: 'Marcus T.',
                role: 'Solar PV Installer · Cape Town, WC',
                avatar: 'M',
                color: '#f59e0b',
                stars: 5,
                text: 'Listed in under 30 minutes. Had my first qualified lead within 2 days — a 5kW grid-tied installation in Brackenfell. No commission taken. That job alone paid for 3 months of my subscription.',
              },
              {
                name: 'Priya N.',
                role: 'Fleet Manager · Johannesburg, GP',
                avatar: 'P',
                color: '#6366f1',
                stars: 5,
                text: 'Finally a platform that doesn\'t punish you for closing a big job. We manage 40 vehicles and every rand the client pays goes straight to us. The leads are specific — people who actually need telematics, not random tyre-kickers.',
              },
              {
                name: 'Thabo K.',
                role: 'ECU Technician · Durban, KZN',
                avatar: 'T',
                color: '#10b981',
                stars: 5,
                text: 'I\'ve tried Gumtree, Facebook Groups, Bark. Nothing compares. TMN people already know what they need — they\'ve filled in the form, they\'ve seen the price range. I spend less time quoting and more time working.',
              },
            ].map((t, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 20, padding: '2rem', border: '1px solid #e2e8f0', position: 'relative' }}>
                <div style={{ color: '#f59e0b', fontSize: 18, marginBottom: 12 }}>{'★'.repeat(t.stars)}</div>
                <p style={{ color: '#334155', fontSize: 14, lineHeight: 1.7, margin: '0 0 1.5rem', fontStyle: 'italic' }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, background: t.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 16, flexShrink: 0 }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 14, color: '#0f172a' }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: '#64748b' }}>{t.role}</div>
                  </div>
                </div>
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
