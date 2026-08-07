import Link from 'next/link';

const DIVISIONS = [
  {
    num: '01',
    name: 'D.R. Autotronics',
    category: 'Automotive Technology',
    status: 'Active — Revenue Generating',
    statusColor: '#10b981',
    icon: '🔧',
    color: '#ef4444',
    description:
      'Anchor division. 10+ years as a specialist ECU diagnostics, repair, reprogramming and reflashing centre. Immobiliser bypass, key programming, engine tuning and fleet servicing across 15+ vehicle brands.',
    highlights: [
      '10GB ECU database — 180+ programs — 15+ brands',
      'BMW, Audi, VW, Toyota, Nissan, Mercedes, Hyundai & more',
      'Chassis dyno installation in progress — +R135K–R180K/mo projected',
      '10-year continuous operating history — verified income',
    ],
    feeds: ['TipGuard SA', 'Manufacturing Division', 'The Middleman Network'],
  },
  {
    num: '02',
    name: 'Scope Indices',
    category: 'Trading Intelligence SaaS',
    status: 'Active — Live Systems',
    statusColor: '#10b981',
    icon: '📈',
    color: '#8b5cf6',
    description:
      'Proprietary algorithmic trading platform — 12,367 lines of institutional-grade code. AQI Bridge EA v4.40 live on MT5, SiennaBridge v2.25 on NinjaTrader 8, and 9 proprietary TradingView Pine Script indicators.',
    highlights: [
      'AQI Bridge EA v4.40 — 9,080 lines MQL5 — live execution engine',
      'SiennaBridge v2.25 — 3,287 lines C# — NinjaTrader 8 bridge',
      '9 proprietary TradingView indicators — subscription ready',
      'Live funded account — daily profit generation',
    ],
    feeds: ['Beryl Core AI', 'The Middleman Network'],
  },
  {
    num: '03',
    name: 'YieldCore AI',
    category: 'Precision Agriculture',
    status: 'Platform Built — Market Development',
    statusColor: '#f59e0b',
    icon: '🌾',
    color: '#10b981',
    description:
      'Full-stack precision agriculture platform delivering +18% yield uplift, −32% water savings, and R3,200/ha/year additional profit. 10 active farm clients across 5,419 hectares with 17 API integrations.',
    highlights: [
      '5,419 hectares across 10 active farm clients',
      '17 API integrations — soil sensors, satellite, weather data',
      'Verified carbon credit engine — 4,930 tonnes CO₂e',
      'Full React/Node platform — built and operational',
    ],
    feeds: ['Manufacturing Division', 'TipGuard SA', 'The Middleman Network'],
  },
  {
    num: '04',
    name: 'TipGuard SA',
    category: 'Fintech / Cashless Payments',
    status: 'Platform Built — Market Development',
    statusColor: '#f59e0b',
    icon: '💳',
    color: '#06b6d4',
    description:
      'NFC and QR-based cashless tipping platform for South African hospitality and service industries. Google Pay, Apple Pay, QR, NFC tap and card payments — with a real-time fraud scoring engine.',
    highlights: [
      'Full Paystack payment gateway integration',
      'Google Pay + Apple Pay + NFC tap support',
      'Real-time fraud scoring engine — every transaction',
      'Merchant onboarding portal — live and operational',
    ],
    feeds: ['Manufacturing Division', 'Beryl Core AI'],
  },
  {
    num: '05',
    name: 'Beryl Core AI',
    category: 'Group AI Operating System',
    status: 'Active — Internal Deployment',
    statusColor: '#10b981',
    icon: '🧠',
    color: '#6366f1',
    description:
      'The group\'s unified AI operating layer. Powers SIENNA (group intelligence assistant), the Rodwell OS CRM, cross-division data pipelines, and automated operations across all six divisions.',
    highlights: [
      'SIENNA — group AI assistant for operations, trading & analysis',
      'Rodwell OS — group CRM and business management platform',
      'Cross-division data pipeline — all units feed one system',
      'AI automation deployed across all 6 divisions',
    ],
    feeds: ['D.R. Autotronics', 'Scope Indices', 'YieldCore AI', 'TipGuard SA', 'Manufacturing Division'],
  },
  {
    num: '06',
    name: 'Manufacturing Division',
    category: '3D Printing · Drones · NFC Hardware',
    status: 'Active — Expansion Phase',
    statusColor: '#f59e0b',
    icon: '🏭',
    color: '#f97316',
    description:
      '3D printing of custom ECU housings, NFC hardware and drone components. Commercial drone services with SACAA licensing in process. Specialist drone repairs with 48–72h turnaround using in-house printed parts.',
    highlights: [
      '150+ ECU units in inventory across 15+ vehicle brands',
      'NFC merchant hardware produced in-house for TipGuard SA',
      'Commercial drone services — SACAA licensing in progress',
      '48–72 hour drone repair turnaround — fully self-sufficient',
    ],
    feeds: ['D.R. Autotronics', 'TipGuard SA', 'YieldCore AI'],
  },
];

const ECOSYSTEM_FLOWS = [
  { from: 'D.R. Autotronics', to: 'Manufacturing Division', flow: 'ECU housings & parts manufactured in-house — no external supplier' },
  { from: 'D.R. Autotronics', to: 'TipGuard SA', flow: 'Workshop clients onboarded as cashless tipping merchants' },
  { from: 'Manufacturing Division', to: 'TipGuard SA', flow: 'NFC merchant hardware stock produced in-house' },
  { from: 'Manufacturing Division', to: 'YieldCore AI', flow: 'Drones deployed for precision crop monitoring' },
  { from: 'YieldCore AI', to: 'TipGuard SA', flow: 'Farm workers tipped digitally via cashless platform' },
  { from: 'Scope Indices', to: 'Beryl Core AI', flow: 'Live market data feeds Beryl Core analytics engine' },
  { from: 'Beryl Core AI', to: 'All Divisions', flow: 'SIENNA AI — automation, CRM & intelligence across every division' },
  { from: 'All Divisions', to: 'The Middleman Network', flow: 'All 6 divisions listed — TMN drives inbound leads for the group' },
  { from: 'D.R. Autotronics', to: 'Scope Indices', flow: 'Core automotive revenue funds trading capital base' },
];

export default function GroupPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>

      {/* Hero */}
      <section style={{ background: '#0a0f1a', color: '#fff', padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(245,158,11,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(99,102,241,0.08) 0%, transparent 50%)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 20, padding: '5px 14px', marginBottom: 24 }}>
            <span style={{ color: '#f59e0b', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>South African Technology Holding Company · August 2026</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, margin: '0 0 1rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            D.R. Autotronics Group
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 'clamp(14px, 2vw, 18px)', maxWidth: 640, lineHeight: 1.7, margin: '0 0 2.5rem' }}>
            A South African technology and services holding company with six active divisions spanning automotive technology, trading intelligence, precision agriculture, fintech, AI infrastructure and advanced manufacturing — operating for over 10 years.
          </p>

          {/* Key stats — strength only */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: '1rem', maxWidth: 900 }}>
            {[
              { label: 'Verified Net Worth', value: 'R11,513,720', sub: 'August 2026' },
              { label: 'Gross Asset Value', value: 'R11,642,765', sub: 'Legal + IP + Physical' },
              { label: 'Security Package', value: 'R8,581,765', sub: 'Trust + Policy + Legacy Plan' },
              { label: 'Active Divisions', value: '6', sub: 'operating divisions' },
              { label: 'Years Operating', value: '10+', sub: 'continuous operation' },
              { label: 'Monthly Income', value: 'R32,800', sub: 'verified 10-month avg' },
            ].map(stat => (
              <div key={stat.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1.25rem' }}>
                <div style={{ color: '#f59e0b', fontSize: 'clamp(16px, 2.5vw, 22px)', fontWeight: 900 }}>{stat.value}</div>
                <div style={{ color: '#fff', fontSize: 12, fontWeight: 700, marginTop: 4 }}>{stat.label}</div>
                <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 1.5rem' }}>

        {/* Group structure */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>Six Divisions</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#0f172a', margin: '0.5rem 0' }}>Group Structure</h2>
          <p style={{ color: '#64748b', margin: '0 0 2rem', maxWidth: 620 }}>
            D.R. Autotronics Group operates as a holding company across six high-growth divisions. Each division operates independently and feeds into the others — forming a closed-loop commercial ecosystem.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {DIVISIONS.map(div => (
              <div key={div.num} style={{ background: '#fff', borderRadius: 20, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
                <div style={{ background: div.color + '10', borderBottom: `3px solid ${div.color}`, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 44, height: 44, background: div.color + '15', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
                      {div.icon}
                    </div>
                    <div>
                      <div style={{ color: '#64748b', fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5 }}>Division {div.num}</div>
                      <div style={{ color: '#0f172a', fontWeight: 900, fontSize: 16 }}>{div.name}</div>
                    </div>
                  </div>
                  <div style={{ background: div.statusColor + '20', color: div.statusColor, fontSize: 10, fontWeight: 800, padding: '4px 10px', borderRadius: 20, textAlign: 'center', lineHeight: 1.4, maxWidth: 110 }}>
                    {div.status}
                  </div>
                </div>

                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ color: '#64748b', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>{div.category}</div>
                  <p style={{ color: '#334155', fontSize: 13.5, lineHeight: 1.6, margin: '0 0 1rem' }}>{div.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem' }}>
                    {div.highlights.map(h => (
                      <li key={h} style={{ display: 'flex', gap: 8, padding: '4px 0', fontSize: 12.5, color: '#475569', alignItems: 'flex-start' }}>
                        <span style={{ color: div.color, flexShrink: 0, marginTop: 1, fontWeight: 700 }}>→</span>{h}
                      </li>
                    ))}
                  </ul>
                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Feeds Into</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {div.feeds.map(f => (
                        <span key={f} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#475569', fontSize: 11, padding: '3px 8px', borderRadius: 6 }}>{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem connections */}
        <div style={{ background: '#0f172a', borderRadius: 24, padding: '2.5rem', marginBottom: '3rem', color: '#fff' }}>
          <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>True Ecosystem</span>
          <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 900, margin: '0.5rem 0' }}>How the Divisions Work Together</h2>
          <p style={{ color: '#94a3b8', fontSize: 14, margin: '0 0 2rem', maxWidth: 560 }}>
            This is not six separate businesses. Every division feeds revenue, data, hardware, or clients into the others — creating a compounding, self-reinforcing commercial engine.
          </p>

          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {ECOSYSTEM_FLOWS.map((flow, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', fontSize: 12, fontWeight: 800, padding: '4px 10px', borderRadius: 6, whiteSpace: 'nowrap' }}>{flow.from}</span>
                <span style={{ color: '#f59e0b', fontSize: 18, flexShrink: 0 }}>→</span>
                <span style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', fontSize: 12, fontWeight: 800, padding: '4px 10px', borderRadius: 6, whiteSpace: 'nowrap' }}>{flow.to}</span>
                <span style={{ color: '#64748b', fontSize: 13, flex: 1 }}>— {flow.flow}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { icon: '🔄', title: 'Internal Supply Chain', desc: 'Manufacturing Division produces hardware for D.R. Autotronics and TipGuard SA — zero external supplier dependency' },
              { icon: '🧠', title: 'Shared AI Layer', desc: 'Beryl Core AI and SIENNA serve all 6 divisions — data from every unit flows into one intelligence system' },
              { icon: '💰', title: 'Multi-Stream Revenue', desc: 'Automotive services, trading profits, agri SaaS fees, tipping commissions, manufacturing contracts — 6 income sources' },
              { icon: '📡', title: 'TMN as Distribution', desc: 'The Middleman Network markets all 6 divisions to a B2B audience — inbound leads at zero marginal cost' },
            ].map(item => (
              <div key={item.title} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '1.25rem', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: 13, marginBottom: 4 }}>{item.title}</div>
                <div style={{ color: '#64748b', fontSize: 12, lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Asset Register */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>What We Own</span>
          <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 900, color: '#0f172a', margin: '0.5rem 0 1.5rem' }}>Asset Register — August 2026</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              {
                title: 'Legal & Protection Assets',
                color: '#10b981',
                total: 'R9,781,765',
                items: [
                  ['Registered Family / Business Trust', 'R5,500,000', 'Active ✓'],
                  ['Sanlam Life Assurance Policy', 'R1,000,000', 'Underwriting in progress'],
                  ['Sanlam Legacy Plan PN3020424', 'R2,081,765', 'Will signed 31 Jul 2026 ✓'],
                  ['Household & Contents Cover', 'R1,200,000', 'Signed August 2026 ✓'],
                ],
              },
              {
                title: 'Intellectual Property',
                color: '#6366f1',
                total: 'R1,160,000',
                items: [
                  ['AQI Bridge EA v4.40', 'R180,000', '9,080 lines MQL5 — live'],
                  ['SiennaBridge v2.25', 'R80,000', '3,287 lines C# — live'],
                  ['TradingView Pine Scripts', 'R50,000', '9 proprietary indicators'],
                  ['ECU Database', 'R300,000', '10GB — 180+ programs — 10 years'],
                  ['YieldCore AI Platform', 'R200,000', 'React/Node — 17 APIs'],
                  ['TipGuard SA Platform', 'R150,000', 'Paystack integrated'],
                  ['Beryl Core / Rodwell OS', 'R200,000', 'Group CRM + AI platform'],
                ],
              },
              {
                title: 'Physical Assets',
                color: '#f59e0b',
                total: 'R701,000',
                items: [
                  ['Workshop & Diagnostic Equipment', 'R92,000', 'ECU tools, iProg+ V84'],
                  ['Computing Equipment', 'R69,000', 'Dev machines, servers, networking'],
                  ['ECU Inventory', 'R225,000', '150+ units — 15+ brands'],
                  ['NFC Inventory', 'R25,000', 'TipGuard merchant hardware stock'],
                  ['Vehicles', 'R250,000', 'Almera, W203, BMW E90, VW VR6'],
                  ['Marine Asset', 'R40,000', 'Vivacity 20 boat'],
                ],
              },
            ].map(cat => (
              <div key={cat.title} style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <div style={{ background: cat.color + '10', borderBottom: `2px solid ${cat.color}`, padding: '1rem 1.25rem' }}>
                  <div style={{ fontWeight: 900, color: '#0f172a', fontSize: 15 }}>{cat.title}</div>
                  <div style={{ color: cat.color, fontWeight: 900, fontSize: 22, marginTop: 2 }}>{cat.total}</div>
                </div>
                <div style={{ padding: '0.75rem 1.25rem' }}>
                  {cat.items.map(([name, val, note]) => (
                    <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '6px 0', borderBottom: '1px solid #f8fafc', gap: 8 }}>
                      <div>
                        <div style={{ fontSize: 12.5, color: '#334155', fontWeight: 500 }}>{name}</div>
                        <div style={{ fontSize: 11, color: '#94a3b8' }}>{note}</div>
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Gross asset total — no debt mention */}
          <div style={{ background: '#0f172a', borderRadius: 16, padding: '2rem', color: '#fff' }}>
            <h3 style={{ fontWeight: 900, fontSize: 18, margin: '0 0 1.25rem' }}>Consolidated Asset Statement — August 2026</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              {[
                { label: 'Legal & Protection Assets', value: 'R9,781,765' },
                { label: 'Physical Assets', value: 'R701,000' },
                { label: 'Intellectual Property', value: 'R1,160,000' },
                { label: 'Total Net Worth', value: 'R11,513,720', highlight: true },
              ].map(row => (
                <div key={row.label} style={{
                  background: row.highlight ? 'rgba(245,158,11,0.1)' : 'rgba(255,255,255,0.04)',
                  border: row.highlight ? '1px solid rgba(245,158,11,0.3)' : '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 12, padding: '1.25rem',
                }}>
                  <div style={{ color: '#94a3b8', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{row.label}</div>
                  <div style={{ color: row.highlight ? '#f59e0b' : '#fff', fontSize: row.highlight ? 24 : 18, fontWeight: 900, marginTop: 4 }}>{row.value}</div>
                </div>
              ))}
            </div>

            {/* Security package highlight */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
              <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, padding: '1rem' }}>
                <div style={{ color: '#10b981', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Primary Security</div>
                <div style={{ color: '#fff', fontSize: 20, fontWeight: 900, marginTop: 2 }}>R5,500,000</div>
                <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>Registered Family / Business Trust</div>
              </div>
              <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, padding: '1rem' }}>
                <div style={{ color: '#10b981', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Sanlam Life Policy</div>
                <div style={{ color: '#fff', fontSize: 20, fontWeight: 900, marginTop: 2 }}>R1,000,000</div>
                <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>Underwriting in progress</div>
              </div>
              <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, padding: '1rem' }}>
                <div style={{ color: '#10b981', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Sanlam Legacy Plan</div>
                <div style={{ color: '#fff', fontSize: 20, fontWeight: 900, marginTop: 2 }}>R2,081,765</div>
                <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>Policy PN3020424 — Will signed 31 Jul 2026</div>
              </div>
              <div style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 10, padding: '1rem' }}>
                <div style={{ color: '#f59e0b', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Total Security Package</div>
                <div style={{ color: '#f59e0b', fontSize: 24, fontWeight: 900, marginTop: 2 }}>R8,581,765</div>
                <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>Documented and legally constituted</div>
              </div>
            </div>
          </div>
        </div>

        {/* The Middleman Network's role */}
        <div style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(99,102,241,0.08) 100%)', borderRadius: 24, padding: '2.5rem', border: '1px solid #e2e8f0', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 20, padding: '4px 12px', marginBottom: 16 }}>
                <span style={{ color: '#f59e0b', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5 }}>Group Distribution Platform</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 900, color: '#0f172a', margin: '0 0 1rem' }}>The Middleman Network</h2>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, margin: '0 0 1rem' }}>
                TMN is the group's B2B marketplace and distribution platform. It markets every division's services to a qualifying business audience, generates inbound leads at zero marginal cost, and builds the group's brand with the commercial sector.
              </p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Businesses needing ECU services find D.R. Autotronics. Hospitality operators find TipGuard SA. Farmers find YieldCore AI. The platform generates revenue for the group while building its own independent subscriber base.
              </p>
            </div>
            <div style={{ display: 'grid', gap: '0.75rem', minWidth: 240 }}>
              {[
                { icon: '🎯', text: 'Generates leads for all 6 divisions' },
                { icon: '💼', text: 'B2B marketplace — 0% commission model' },
                { icon: '🔴', text: 'Live leads board — real-time feed' },
                { icon: '📋', text: 'Provider subscriptions — recurring revenue' },
                { icon: '🌐', text: 'Live at middleman-network.vercel.app' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 10, padding: '10px 14px', border: '1px solid #e2e8f0', fontSize: 13, color: '#334155' }}>
                  <span>{item.icon}</span><span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div style={{ background: '#fff', borderRadius: 20, border: '1px solid #e2e8f0', padding: '2rem', marginBottom: '3rem' }}>
          <h2 style={{ fontWeight: 900, fontSize: 20, color: '#0f172a', margin: '0 0 1.25rem' }}>Founder & Executive Director</h2>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ width: 72, height: 72, background: 'linear-gradient(135deg, #f59e0b, #d97706)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 900, color: '#0f172a', flexShrink: 0 }}>
              RN
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontWeight: 900, fontSize: 22, color: '#0f172a' }}>Rodwell Naicker</div>
              <div style={{ color: '#64748b', fontSize: 14, marginBottom: 12 }}>Founder · Executive Director · D.R. Autotronics Group (Pty) Ltd</div>
              <p style={{ color: '#475569', fontSize: 13.5, lineHeight: 1.7, margin: '0 0 1rem' }}>
                Over 10 years building and operating the group across six divisions. Deep technical expertise in automotive ECU systems, algorithmic trading, and full-stack software development. Founded and grew all six divisions from a single automotive workshop into a diversified South African technology holding company.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href="mailto:rodwellnaicker6@gmail.com" style={{ background: '#0f172a', color: '#fff', fontWeight: 700, fontSize: 13, padding: '8px 16px', borderRadius: 8, textDecoration: 'none' }}>
                  ✉ rodwellnaicker6@gmail.com
                </a>
                <a href="https://wa.me/27627135401" target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', fontWeight: 700, fontSize: 13, padding: '8px 16px', borderRadius: 8, textDecoration: 'none' }}>
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', borderRadius: 20, padding: '2.5rem', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🏢</div>
          <h2 style={{ fontWeight: 900, fontSize: 22, margin: '0 0 8px' }}>Partner With the Group</h2>
          <p style={{ color: '#94a3b8', margin: '0 0 2rem', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            Investment enquiries, partnership proposals, and supplier conversations welcome. All 6 divisions are open for commercial discussion.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/get-listed" style={{ background: '#f59e0b', color: '#0f172a', fontWeight: 800, padding: '14px 28px', borderRadius: 10, fontSize: 15 }}>
              List on The Middleman Network →
            </Link>
            <a href="mailto:rodwellnaicker6@gmail.com?subject=DR Autotronics Group — Investment Enquiry" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 700, padding: '14px 28px', borderRadius: 10, fontSize: 15, border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none' }}>
              Investor Enquiry
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
