import Link from 'next/link';
import { INDUSTRIES, VENTURES, NICHES, PLANS, formatZAR } from '@/lib/data';

export default function HomePage() {
  const providerNiches = NICHES.filter(n => n.party_type === 'provider');
  const avgJobValue = Math.round(providerNiches.filter(n => n.avg_job_value_zar > 0).reduce((s, n) => s + n.avg_job_value_zar, 0) / providerNiches.filter(n => n.avg_job_value_zar > 0).length);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: '#0a0f1a', color: '#fff', padding: '6rem 0 7rem', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient glow */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 60% at 80% 40%, rgba(245,158,11,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(99,102,241,0.06) 0%, transparent 50%)' }} />
        {/* Grid texture */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.03,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px' }} />

        <div className="container" style={{ position: 'relative' }}>
          {/* Eyebrow */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.22)', borderRadius: 999, padding: '5px 14px', marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ color: '#f59e0b', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>South Africa&apos;s Smart B2B Marketplace</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.25rem, 6vw, 4rem)', fontWeight: 900, margin: '0 0 1.5rem', lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: 680 }}>
            The platform South African<br />businesses were waiting for.
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: '#94a3b8', maxWidth: 520, lineHeight: 1.75, margin: '0 0 2.75rem', fontWeight: 400 }}>
            Connect with verified service providers across {INDUSTRIES.length} industries. Get AI-powered quotes in minutes. Pay zero commission — ever.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/marketplace" className="btn-gold">Browse Marketplace →</Link>
            <Link href="/get-listed" className="btn-ghost">List Your Business</Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {[
              { label: `${INDUSTRIES.length} Industries` },
              { label: `${providerNiches.length}+ Service Niches` },
              { label: '0% Commission' },
              { label: 'POPIA Compliant' },
              { label: 'SSL Secured' },
            ].map(b => (
              <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: '#64748b', fontWeight: 500 }}>
                <span style={{ color: '#10b981', fontSize: 11, fontWeight: 800 }}>✓</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section style={{ background: '#fff', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', textAlign: 'center', padding: '1.75rem 0' }}>
            {[
              { value: `${INDUSTRIES.length}`, label: 'Industries' },
              { value: `${providerNiches.length}+`, label: 'Service Niches' },
              { value: `${VENTURES.length}`, label: 'Group Ventures' },
              { value: '0%', label: 'Commission' },
              { value: formatZAR(avgJobValue), label: 'Avg Job Value' },
            ].map((stat, i) => (
              <div key={stat.label} style={{ padding: '0.75rem 1rem', borderRight: i < 4 ? '1px solid #f1f5f9' : 'none' }}>
                <div style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontWeight: 900, color: '#0a0f1a', letterSpacing: '-0.02em' }}>{stat.value}</div>
                <div style={{ fontSize: 11.5, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 3, fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THIS WORKS ───────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
        <div className="container">

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: 720, margin: '0 auto 3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 20, padding: '4px 14px', marginBottom: 16 }}>
              <span style={{ color: '#92400e', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5 }}>Built from experience — not theory</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, color: '#0f172a', margin: '0 0 1rem', lineHeight: 1.2 }}>
              Why someone like us can give every business exactly what they need
            </h2>
            <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.7, margin: 0 }}>
              The Middleman Network was not built in a boardroom. It was built by a business owner who spent 30 years dealing with every problem a South African business faces — and decided to build the platform he always wished existed.
            </p>
          </div>

          {/* The core argument — 3 columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              {
                icon: '🏛️',
                title: 'Built on 30 years of real business',
                color: '#f59e0b',
                body: 'We didn\'t research this market — we lived it. Automotive, engineering, trading, finance, legal, logistics — every division in this ecosystem came from a real need we faced as a South African operator. That\'s why the scope is right. We know what businesses actually need.',
                points: ['30-year family legacy in automotive & engineering', '6 active divisions across 7 sectors', 'R13.88M group network worth — built without external investment'],
              },
              {
                icon: '✅',
                title: 'The right providers. The right credentials.',
                color: '#10b981',
                body: 'Every niche on this platform requires verified credentials. RMI, PSIRA, LPC, FSP, SACAP, PIRB, NHBRC — we check before we list. That means when a business finds a provider here, they\'re not gambling. They\'re connecting with someone who can actually deliver the work legally and professionally.',
                points: [`Compliance-checked across ${providerNiches.length}+ service niches`, 'Industry credentials verified before listing', 'Zero commission — you pay the provider direct'],
              },
              {
                icon: '🔗',
                title: 'One ecosystem — everything connects',
                color: '#6366f1',
                body: 'A business needs legal, insurance, financial planning, IT security, logistics, fleet and maintenance — all at once, not one at a time. The Middleman Network is the only South African B2B platform that covers all of it under one roof, connecting 22 industries that feed into each other.',
                points: [`${INDUSTRIES.length} industries on one platform`, `${providerNiches.length}+ verified service niches`, 'Legal, financial, cyber, fleet, transport — all covered'],
              },
            ].map((card, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 20, border: '1px solid #e2e8f0', padding: '2rem', borderTop: `3px solid ${card.color}` }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{card.icon}</div>
                <h3 style={{ fontWeight: 900, fontSize: 17, color: '#0f172a', margin: '0 0 0.75rem', lineHeight: 1.3 }}>{card.title}</h3>
                <p style={{ color: '#475569', fontSize: 13.5, lineHeight: 1.7, margin: '0 0 1rem' }}>{card.body}</p>
                <div style={{ display: 'grid', gap: 6 }}>
                  {card.points.map((pt, j) => (
                    <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: card.color, fontWeight: 900, flexShrink: 0, marginTop: 1 }}>→</span>
                      <span style={{ fontSize: 12.5, color: '#334155' }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* The full scope — what we cover */}
          <div style={{ background: '#0f172a', borderRadius: 24, padding: '2.5rem', marginBottom: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ color: '#f59e0b', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>Complete Business Coverage</div>
              <h3 style={{ color: '#fff', fontWeight: 900, fontSize: 20, margin: 0 }}>Every service a South African business will ever need</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
              {[
                { icon: '⚖️', label: 'Legal & Attorneys', sub: 'Wills, contracts, labour, conveyancing' },
                { icon: '💰', label: 'Financial Planning', sub: 'Tax, bookkeeping, payroll, advisors' },
                { icon: '🛡️', label: 'Insurance', sub: 'Life, business, short-term, medical aid' },
                { icon: '🔐', label: 'Cybersecurity & AI', sub: 'Fraud detection, POPIA, IT audits' },
                { icon: '🚚', label: 'Logistics & Transport', sub: 'Courier, freight, cold chain, moving' },
                { icon: '🚐', label: 'Fleet Services', sub: 'GPS tracking, maintenance, financing' },
                { icon: '🚙', label: 'Automotive Mobile', sub: 'Detailing, callouts, panel beating, tyres' },
                { icon: '🔧', label: 'ECU & Auto-Tech', sub: 'Programming, diagnostics, remapping' },
                { icon: '🏗️', label: 'Construction', sub: 'Builders, plumbers, roofers, carpenters' },
                { icon: '⚡', label: 'Energy & Solar', sub: 'Solar installers, electricians' },
                { icon: '🔒', label: 'Security', sub: 'CCTV, alarms, electric fence' },
                { icon: '🌾', label: 'Agriculture AI', sub: 'Smart farms, sensors, irrigation' },
                { icon: '💳', label: 'Fintech & Payments', sub: 'Digital tipping, NFC, hospitality' },
                { icon: '🧹', label: 'Cleaning & Home', sub: 'Commercial, mobile, waste, handyman' },
                { icon: '🏥', label: 'Health & Wellness', sub: 'Occupational health, corporate wellness' },
                { icon: '📈', label: 'Trading Technology', sub: 'EAs, indicators, infrastructure' },
              ].map((cat, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1rem' }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{cat.icon}</div>
                  <div style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>{cat.label}</div>
                  <div style={{ color: '#475569', fontSize: 11, marginTop: 3, lineHeight: 1.4 }}>{cat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* The closing pitch */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🎯', title: 'Right scope for every job', body: 'Whether it\'s a R650 mobile car wash or a R85,000 AI fraud detection system — the platform scopes the job correctly, connects you to the right level of provider and gets you a quote fast.' },
              { icon: '📋', title: 'Right credentials every time', body: 'Every listed provider is credential-checked. LPC for lawyers. FSP for financial advisors. RMI for automotive. PSIRA for security. You never need to wonder if the person is qualified.' },
              { icon: '🚀', title: 'Real workmanship. Real finish.', body: 'We don\'t list anyone. We list verified professionals who show up, do the work and produce a finished result. The platform is built on 30 years of knowing what good workmanship looks like.' },
              { icon: '💡', title: 'This is realizable — right now', body: 'Every niche is live today. Every quote form works. Providers can list right now. Businesses can submit jobs right now. This isn\'t a vision deck — it\'s a working platform with 116 live pages.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: '1.5rem' }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 15, color: '#0f172a', marginBottom: 8 }}>{item.title}</div>
                <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.body}</p>
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
            <p style={{ color: '#64748b', maxWidth: 500, margin: '0 auto' }}>{INDUSTRIES.length} industries, {NICHES.length} niches, one platform. Whether you need a solar quote or a trading bot — we&apos;ve got you.</p>
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

      {/* ── ECOSYSTEM MAP ────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 20, padding: '5px 14px', marginBottom: 16 }}>
              <span style={{ color: '#92400e', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5 }}>How the ecosystem feeds itself</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, color: '#0f172a', margin: '0 0 1rem' }}>Every venture powers every other</h2>
            <p style={{ color: '#64748b', maxWidth: 560, margin: '0 auto', fontSize: 15, lineHeight: 1.7 }}>
              Tipping flows from restaurants into YieldCore farm data. ECU tech feeds CNC machining. Drone footage fuels AI analysis. Every division is a client of the others — and a revenue stream for the group.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🔧', venture: 'D.R. Autotronics', color: '#1e3a5f', feeds: ['ECU data feeds into Beryl Core AI diagnostics database', 'Vehicle fleet data powers YieldCore farm equipment monitoring', 'Workshop clients routed through TMN marketplace', 'CNC division manufactures custom ECU enclosures'], gets: ['Leads from TMN marketplace', 'AI diagnostics from Beryl Core', 'CNC parts from Manufacturing Division'] },
              { icon: '🌾', venture: 'YieldCore AI', color: '#1a5e3a', feeds: ['Farm data feeds Beryl Core AI training pipeline', 'Drone footage creates carbon credit data for export', 'Irrigation automation uses Manufacturing Division sensors', 'Farm operators tip via TipGuard SA'], gets: ['Drone hardware from Manufacturing Division', 'Leads via TMN agriculture niches', 'AI layer from Beryl Core AI'] },
              { icon: '💳', venture: 'TipGuard SA', color: '#7c3aed', feeds: ['Tipping data feeds Beryl Core AI spend analytics', 'Restaurant/hospitality leads routed via TMN', 'NFC hardware produced by Manufacturing Division', 'Transaction data informs TMN provider rankings'], gets: ['NFC wristbands/keyrings from Manufacturing Division', 'Hospitality leads from TMN', 'AI fraud detection from Beryl Core AI'] },
              { icon: '📈', venture: 'Scope Indices', color: '#b45309', feeds: ['EA signals logged to Beryl Core AI analytics', 'SiennaBridge infrastructure hosted on Beryl Core', 'TradingView indicators drive TMN trading tech niches', 'P&L data validates group\'s fintech credibility'], gets: ['AI data layer from Beryl Core', 'Server infrastructure from group', 'Leads from TMN trading tech niches'] },
              { icon: '🧠', venture: 'Beryl Core AI', color: '#4f46e5', feeds: ['AI layer to all 5 other ventures simultaneously', 'Business automation drives TMN lead matching', 'WhatsApp bots power all group client comms', 'Data pipelines feed investor reporting on group page'], gets: ['Data from all 5 divisions to train models', 'Commercial revenue from TMN tech clients', 'Infrastructure hosted by group'] },
              { icon: '🏭', venture: 'Manufacturing', color: '#c2410c', feeds: ['3D-printed components to D.R. Autotronics (ECU enclosures)', 'NFC hardware to TipGuard SA (wristbands, keyrings)', 'Drone parts and service to YieldCore AI', 'CNC fabrication for construction sector via TMN'], gets: ['Orders from all other 5 divisions', 'CNC floor plan leads from TMN', 'Design specs from Beryl Core AI'] },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 20, padding: '1.5rem', borderTop: `3px solid ${item.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                  <span style={{ fontSize: 28 }}>{item.icon}</span>
                  <div style={{ fontWeight: 900, fontSize: 14, color: '#0f172a' }}>{item.venture}</div>
                </div>
                <div style={{ fontSize: 11, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Feeds into →</div>
                <div style={{ display: 'grid', gap: 4, marginBottom: '1rem' }}>
                  {item.feeds.map((f, j) => (
                    <div key={j} style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                      <span style={{ color: item.color, fontWeight: 900, fontSize: 11, flexShrink: 0, marginTop: 1 }}>→</span>
                      <span style={{ fontSize: 11.5, color: '#475569', lineHeight: 1.4 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#f8fafc', borderRadius: 8, padding: '8px 10px' }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Receives from group</div>
                  {item.gets.map((g, j) => (
                    <div key={j} style={{ fontSize: 11, color: '#64748b', marginBottom: 2 }}>✓ {g}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, margin: '0 0 1rem', color: '#0f172a' }}>How It Works</h2>
            <p style={{ color: '#64748b', maxWidth: 440, margin: '0 auto' }}>Request a quote in under 2 minutes. AI-powered, subscription-based, 0% commission.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { step: '1', icon: '🔍', title: 'Find Your Niche', desc: `Browse ${NICHES.length} niches across ${INDUSTRIES.length} industries. Filter by location, industry or service type.` },
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

      {/* ── COMMISSION MODEL ─────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: 20, padding: '5px 14px', marginBottom: 16 }}>
              <span style={{ color: '#15803d', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5 }}>How the money works</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, color: '#0f172a', margin: '0 0 1rem' }}>0% Commission. Always.</h2>
            <p style={{ color: '#64748b', maxWidth: 520, margin: '0 auto', fontSize: 15, lineHeight: 1.7 }}>
              Most lead platforms take 10–30% of every job. We don&apos;t. Providers pay a flat monthly subscription — and every rand from the client goes directly to the provider. Full stop.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {[
              {
                icon: '👤',
                title: 'What the Client Does',
                color: '#6366f1',
                bg: '#eff6ff',
                border: '#bfdbfe',
                steps: [
                  'Submits a job request — free, no account needed',
                  'Receives quotes from verified providers in their area',
                  'Compares, chooses and pays the provider directly',
                  'Pays zero platform fee. Zero commission. R0 to TMN.',
                ],
              },
              {
                icon: '🏢',
                title: 'What the Provider Does',
                color: '#10b981',
                bg: '#f0fdf4',
                border: '#bbf7d0',
                steps: [
                  'Signs up and selects a monthly subscription plan',
                  'Receives lead credits to claim jobs in their niche',
                  'Claims relevant leads, contacts the client, closes the job',
                  'Keeps 100% of what the client pays — no commission deducted',
                ],
              },
              {
                icon: '🌐',
                title: 'What TMN Earns',
                color: '#f59e0b',
                bg: '#fefce8',
                border: '#fde68a',
                steps: [
                  'Monthly subscription fees from listed providers',
                  'No percentage of jobs. No hidden fees. No commissions.',
                  'Aligned with providers — we earn when they grow, not when they transact',
                  'Scalable revenue from 22 industries, 100+ niches across SA',
                ],
              },
            ].map((col, i) => (
              <div key={i} style={{ background: col.bg, border: `1px solid ${col.border}`, borderRadius: 20, padding: '1.75rem', borderTop: `3px solid ${col.color}` }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{col.icon}</div>
                <h3 style={{ fontWeight: 900, fontSize: 16, color: '#0f172a', margin: '0 0 1rem' }}>{col.title}</h3>
                <div style={{ display: 'grid', gap: 8 }}>
                  {col.steps.map((s, j) => (
                    <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: col.color, fontWeight: 900, flexShrink: 0, fontSize: 13, marginTop: 1 }}>→</span>
                      <span style={{ fontSize: 13, color: '#334155', lineHeight: 1.5 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Commission comparison bar */}
          <div style={{ background: '#0f172a', borderRadius: 20, padding: '2rem 2.5rem' }}>
            <div style={{ color: '#94a3b8', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: '1.5rem', textAlign: 'center' }}>How TMN compares to other lead platforms</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {[
                { platform: 'Bark / Bidvine', model: 'Pay-per-lead', commission: 'R85–R420 per lead', verdict: '❌ You pay before you even speak to the client', color: '#ef4444' },
                { platform: 'Checkatrade / Homefeed', model: 'Subscription + per-job %', commission: '10–25% of job value', verdict: '❌ They take a cut from every rand you earn', color: '#f97316' },
                { platform: 'Gumtree / Facebook', model: 'Organic / Ads', commission: 'Unpredictable ad spend', verdict: '⚠️ No lead quality, no verification, no structure', color: '#f59e0b' },
                { platform: 'Middleman Network', model: 'Flat subscription', commission: '0% commission', verdict: '✅ You keep every rand. Grow as fast as you like.', color: '#22c55e' },
              ].map((row, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 14, padding: '1.25rem', borderLeft: `3px solid ${row.color}` }}>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{row.platform}</div>
                  <div style={{ color: '#64748b', fontSize: 11, marginBottom: 4 }}>{row.model}</div>
                  <div style={{ color: row.color, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>{row.commission}</div>
                  <div style={{ color: '#94a3b8', fontSize: 11.5, lineHeight: 1.5 }}>{row.verdict}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE ACTIVITY STRIP ──────────────────────────────── */}
      <section style={{ background: '#0f172a', padding: '1.5rem 0', borderTop: '1px solid #1e293b' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            {[
              { icon: '🟢', text: 'Platform live · 22 industries active' },
              { icon: '📋', text: `${NICHES.length}+ service niches published` },
              { icon: '🔒', text: 'POPIA compliant · SSL secured' },
              { icon: '📧', text: 'Leads notify you within minutes' },
              { icon: '💳', text: '0% commission · Always' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: '#94a3b8', whiteSpace: 'nowrap' }}>
                <span>{item.icon}</span><span>{item.text}</span>
              </div>
            ))}
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

      {/* ── PLANS PREVIEW ────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
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
