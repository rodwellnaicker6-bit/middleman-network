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

const FLOW_TYPES = [
  { type: 'revenue', label: 'Revenue Flows', icon: '💰', color: '#10b981', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', desc: 'Money circulating between divisions — core income funding growth across the group' },
  { type: 'hardware', label: 'Hardware Flows', icon: '🔩', color: '#f97316', bg: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.3)', desc: 'Physical goods produced internally — zero external supplier dependency' },
  { type: 'data', label: 'Data & AI Flows', icon: '🧠', color: '#8b5cf6', bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.3)', desc: 'Intelligence, automation and insights shared across every division' },
  { type: 'clients', label: 'Client Flows', icon: '🤝', color: '#0ea5e9', bg: 'rgba(14,165,233,0.12)', border: 'rgba(14,165,233,0.3)', desc: 'Customers discovered in one division become clients of another' },
];

const ALL_CONNECTIONS = [
  { type: 'revenue', from: 'D.R. Autotronics', to: 'Scope Indices', what: 'Workshop income funds trading capital base', impact: 'R60,000/mo verified income supports prop firm margin and trading account top-ups' },
  { type: 'revenue', from: 'TipGuard SA', to: 'Manufacturing Division', what: 'Merchant growth drives NFC hardware production orders', impact: 'Every new TipGuard merchant = a new hardware kit produced by Manufacturing Division' },
  { type: 'revenue', from: 'YieldCore AI', to: 'Manufacturing Division', what: 'Farm contracts generate paid drone deployment missions', impact: 'Each farm monitoring contract = recurring drone flight revenue for Manufacturing' },
  { type: 'revenue', from: 'Manufacturing Division', to: 'D.R. Autotronics', what: 'Drone repair income supplements workshop revenue', impact: '48–72h in-house repair turnaround — new income line using in-house printed parts' },
  { type: 'revenue', from: 'All Divisions', to: 'The Middleman Network', what: 'Six live divisions anchor TMN credibility and subscriber value', impact: 'No competitor marketplace has 6 operating companies behind it — this is the moat' },
  { type: 'revenue', from: 'The Middleman Network', to: 'All Divisions', what: 'TMN subscription income is pure group revenue on top of division earnings', impact: 'R399–R3,499/month per subscriber — every subscriber adds to the group bottom line' },
  { type: 'hardware', from: 'Manufacturing Division', to: 'D.R. Autotronics', what: 'Custom ECU housings, electronic enclosures and diagnostic brackets', impact: 'Zero external parts sourcing — full cost control on every housing produced in-house' },
  { type: 'hardware', from: 'Manufacturing Division', to: 'TipGuard SA', what: 'ALL NFC hardware stock: cards, wristbands, keyrings, QR stands', impact: 'TipGuard SA buys zero NFC stock from outside — margin stays entirely in the group' },
  { type: 'hardware', from: 'Manufacturing Division', to: 'YieldCore AI', what: 'Drones, drone frames, components and 3D-printed replacement parts', impact: 'YieldCore AI deploys drones at internal cost — no external drone hire fees ever' },
  { type: 'hardware', from: 'D.R. Autotronics', to: 'Manufacturing Division', what: '10 years of ECU expertise drives precision housing design specs', impact: 'Every enclosure design validated by a decade of real-world ECU handling' },
  { type: 'hardware', from: 'Manufacturing Division', to: 'Scope Indices', what: 'Custom server enclosures and hardware for trading infrastructure builds', impact: 'In-house printing for any physical trading infrastructure components — no lead time' },
  { type: 'data', from: 'Scope Indices', to: 'Beryl Core AI', what: 'Live MT5 signals, trade data and performance metrics fed to SIENNA', impact: 'SIENNA monitors every live position in real time — risk oversight across all funded accounts' },
  { type: 'data', from: 'TipGuard SA', to: 'Beryl Core AI', what: 'Transaction data and fraud patterns processed by Beryl Core AI engine', impact: 'Every TipGuard transaction assessed by the fraud scoring engine before it processes' },
  { type: 'data', from: 'YieldCore AI', to: 'Beryl Core AI', what: 'Farm sensor readings, carbon metrics and crop intelligence', impact: 'Group AI learns agricultural patterns — improving YieldCore predictions every season' },
  { type: 'data', from: 'D.R. Autotronics', to: 'Beryl Core AI', what: 'Workshop CRM data, client records, job history and inventory levels', impact: 'Rodwell OS tracks every job — SIENNA flags opportunities and risk patterns' },
  { type: 'data', from: 'Beryl Core AI', to: 'All Divisions', what: 'SIENNA AI automation, Rodwell OS CRM, live reporting and decision intelligence', impact: 'One AI brain eliminating manual admin and driving data-backed decisions across all 6' },
  { type: 'data', from: 'All Divisions', to: 'The Middleman Network', what: 'Live niche content, pricing, availability and capability data feeds TMN listings', impact: 'TMN listings always current — powered directly by live division data in real time' },
  { type: 'clients', from: 'D.R. Autotronics', to: 'TipGuard SA', what: 'Workshop staff and clients onboarded as TipGuard merchants', impact: 'Every mechanic, receptionist and valet becomes a potential TipGuard user instantly' },
  { type: 'clients', from: 'D.R. Autotronics', to: 'The Middleman Network', what: '10 years of automotive clients feed TMN automotive technology niches', impact: 'Pre-qualified warm audience — the hardest part of a marketplace already solved' },
  { type: 'clients', from: 'YieldCore AI', to: 'TipGuard SA', what: 'Farm workers and agricultural labourers receive digital tips via TipGuard', impact: 'Agriculture workforce becomes TipGuard\'s rural market — a completely untapped vertical' },
  { type: 'clients', from: 'YieldCore AI', to: 'Manufacturing Division', what: 'Farm monitoring contracts activate drone deployments = drone repair pipeline', impact: 'Every YieldCore farm = recurring drone maintenance client for Manufacturing Division' },
  { type: 'clients', from: 'The Middleman Network', to: 'All Divisions', what: '34 niches across 11 industries drive inbound discovery for all 6 divisions', impact: 'Zero marketing spend per lead — TMN is the group\'s permanent acquisition engine' },
  { type: 'clients', from: 'TipGuard SA', to: 'Manufacturing Division', what: 'Merchant scale directly drives NFC hardware demand', impact: '100 merchants = 100 hardware kits = consistent ongoing Manufacturing orders' },
];

const CHAIN_REACTIONS = [
  {
    trigger: 'D.R. Autotronics wins a major fleet contract',
    icon: '🔧', color: '#ef4444',
    chain: [
      { div: 'Manufacturing', result: 'Produces more ECU housings and electronic enclosures' },
      { div: 'TipGuard SA', result: 'Fleet drivers and workshop staff onboarded as tipping merchants' },
      { div: 'Scope Indices', result: 'Fleet revenue increases the trading capital base' },
      { div: 'Beryl Core AI', result: 'New client data added to Rodwell OS — SIENNA tracks fleet patterns' },
      { div: 'TMN', result: 'D.R. Autotronics brand strengthened — more automotive niche subscribers' },
    ],
  },
  {
    trigger: 'TipGuard SA onboards 50 hotel merchants',
    icon: '💳', color: '#06b6d4',
    chain: [
      { div: 'Manufacturing', result: '50 NFC hardware kits produced — significant production run activated' },
      { div: 'Beryl Core AI', result: '50 new fraud scoring clients — transaction data sharpens AI accuracy' },
      { div: 'TMN', result: 'Hospitality fintech niche grows — new provider leads generated' },
      { div: 'YieldCore AI', result: 'Hotel catering suppliers → potential precision agriculture clients' },
      { div: 'D.R. Autotronics', result: 'Hotel vehicle fleets → potential ECU workshop clients' },
    ],
  },
  {
    trigger: 'YieldCore AI signs 5 new farm contracts (5,000+ ha)',
    icon: '🌾', color: '#10b981',
    chain: [
      { div: 'Manufacturing', result: 'Drone deployments activated across 5 new farms — paid missions' },
      { div: 'TipGuard SA', result: 'Farm workers receive digital tips — new rural merchant vertical opened' },
      { div: 'Beryl Core AI', result: '5 new farm sensor data streams deepen AI crop prediction models' },
      { div: 'TMN', result: 'Agriculture technology niche grows — attracts new supplier subscribers' },
      { div: 'D.R. Autotronics', result: 'Farm vehicle and machinery fleet → new ECU workshop clients' },
    ],
  },
  {
    trigger: 'Manufacturing Division gets SACAA commercial drone licence',
    icon: '🏭', color: '#f97316',
    chain: [
      { div: 'YieldCore AI', result: 'Professional drone monitoring tier added — premium contract pricing' },
      { div: 'D.R. Autotronics', result: 'Drone inspections of vehicle fleets added as a premium service' },
      { div: 'TipGuard SA', result: 'Drone delivery operators → new merchant vertical for digital tipping' },
      { div: 'Scope Indices', result: 'Drone inspection industry → new EA and trading tech client vertical' },
      { div: 'TMN', result: 'Commercial Drone Services niche fully live — new subscribers attracted' },
    ],
  },
  {
    trigger: 'TMN reaches 100 paying subscribers',
    icon: '🌐', color: '#f59e0b',
    chain: [
      { div: 'D.R. Autotronics', result: 'Inbound automotive ECU lead volume increases materially' },
      { div: 'TipGuard SA', result: 'Hospitality operators discovering TipGuard through TMN listings' },
      { div: 'YieldCore AI', result: 'Agriculture businesses finding farm intelligence through TMN' },
      { div: 'Scope Indices', result: 'Trading technology clients finding EA and charting services through TMN' },
      { div: 'Manufacturing', result: 'Drone and 3D printing enquiries flowing in through TMN niches' },
    ],
  },
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
          <p style={{ color: '#94a3b8', fontSize: 'clamp(14px, 2vw, 18px)', maxWidth: 640, lineHeight: 1.7, margin: '0 0 0.75rem' }}>
            A South African technology and services holding company with six active divisions spanning automotive technology, trading intelligence, precision agriculture, fintech, AI infrastructure and advanced manufacturing.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 10, padding: '8px 16px', marginBottom: '2rem' }}>
            <span style={{ fontSize: 18 }}>🏛️</span>
            <span style={{ color: '#fcd34d', fontSize: 13.5, fontWeight: 700, lineHeight: 1.5 }}>
              Built on a <strong style={{ color: '#f59e0b' }}>30-year legacy</strong> of automotive &amp; engineering excellence — 2nd generation ownership, carrying forward decades of trust, trade relationships and technical authority.
            </span>
          </div>

          {/* Key stats — strength only */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: '1rem', maxWidth: 900 }}>
            {[
              { label: 'Group Network Worth', value: 'R13,881,000', sub: 'Business assets — August 2026' },
              { label: 'Security Package', value: 'R9,570,000', sub: 'Trust + 3 Sanlam policies' },
              { label: 'Active Divisions', value: '6', sub: 'operating divisions' },
              { label: 'Legacy', value: '30 Years', sub: '2nd generation · automotive & engineering' },
              { label: 'Monthly Income', value: 'R60,000', sub: 'verified 10-month avg' },
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

      {/* ── PROVEN INCOME & TRACK RECORD ─────────────────────── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#dcfce7', borderRadius: 20, padding: '4px 12px', marginBottom: 12 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
                <span style={{ color: '#15803d', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Proven Operating Business</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 900, color: '#0f172a', margin: '0 0 0.75rem' }}>30-Year Legacy · R60,000/month · Real Clients</h2>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, margin: '0 0 0.75rem' }}>
                D.R. Autotronics carries forward a 30-year family legacy in automotive and engineering. As a second-generation owner, Rodwell inherited the trade relationships, technical authority and industry trust built over three decades — and built a technology group on top of it.
              </p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, margin: '0 0 1rem' }}>
                The core business generates R60,000/month from ECU diagnostics, repair, programming and module work across all major vehicle brands. This is the verified financial foundation that supports the entire group.
              </p>
              {/* System impact story */}
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '1rem 1.25rem' }}>
                <div style={{ color: '#15803d', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>How the System Has Grown This Business</div>
                <div style={{ display: 'grid', gap: 8 }}>
                  {[
                    { icon: '🤖', text: 'AQI trading system generated +$2,018 confirmed across 8 documented sessions — supplementing workshop income with trading capital' },
                    { icon: '🌉', text: 'SiennaBridge routes MT5 signals directly to NinjaTrader 8 — removing human delay and executing on a $50K funded account' },
                    { icon: '🌐', text: 'Middleman Network generates inbound ECU leads at zero marginal cost — 68 live pages, R60K avg job value per client' },
                    { icon: '📊', text: 'IP portfolio grew from zero to R3.9M across 3 active software systems in under 12 months' },
                    { icon: '🛡️', text: 'Sanlam policies and Trust structure secured R9.57M in protection — funded by the operating business cash flow' },
                    { icon: '📈', text: 'Group network worth reached R13.88M — built from a single workshop with no external investment' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 15, flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ fontSize: 12.5, color: '#166534', lineHeight: 1.5 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { val: 'R60,000', label: 'Monthly income', sub: 'Verified 10-month avg', color: '#16a34a' },
                { val: 'R60,000', label: 'Average job value', sub: 'ECU, modules, programming', color: '#0284c7' },
                { val: '30 yrs', label: 'Family legacy', sub: 'Automotive & engineering', color: '#7c3aed' },
                { val: '15+', label: 'Vehicle brands', sub: 'Covered in-house', color: '#d97706' },
                { val: '150+', label: 'ECU units', sub: 'In inventory', color: '#0f172a' },
                { val: 'R720K+', label: 'Annual revenue', sub: 'From core division alone', color: '#be123c' },
              ].map(s => (
                <div key={s.label} style={{ background: '#f8fafc', borderRadius: 10, padding: '0.875rem 1rem', borderLeft: `3px solid ${s.color}` }}>
                  <div style={{ color: s.color, fontSize: 18, fontWeight: 900 }}>{s.val}</div>
                  <div style={{ color: '#0f172a', fontSize: 11, fontWeight: 700, marginTop: 3 }}>{s.label}</div>
                  <div style={{ color: '#94a3b8', fontSize: 10, marginTop: 1 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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

        {/* 3-Month Growth Timeline */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 20, padding: '4px 14px', marginBottom: 12 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              <span style={{ color: '#065f46', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5 }}>Group Progress — Last 3 Months</span>
            </div>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: '#0f172a', margin: 0 }}>June · July · August 2026</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* June */}
            <div style={{ background: '#fff', borderRadius: 20, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <div style={{ background: 'linear-gradient(135deg, #1e40af, #1e3a8a)', padding: '1.25rem 1.5rem' }}>
                <div style={{ color: '#93c5fd', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>June 2026</div>
                <div style={{ color: '#fff', fontSize: 20, fontWeight: 900, marginTop: 2 }}>Foundation Built</div>
              </div>
              <div style={{ padding: '1.25rem 1.5rem', display: 'grid', gap: 10 }}>
                {[
                  { icon: '🤖', text: 'AQI Bridge EA v3.50 — first profitable session (+$291.42)' },
                  { icon: '🏆', text: 'Blue Guardian challenge payout triggered at $5,250' },
                  { icon: '📈', text: 'ADX peak 78.8 — sell_breakout A+ signal confirmed' },
                  { icon: '⚙️', text: 'EA upgraded v3.31 → v3.57 — ADX gates, session fixes' },
                  { icon: '📊', text: 'BOS + CHoCH + DXY alignment — full structure confirmed' },
                  { icon: '💰', text: 'Total from seed: +9.7% gain in one session' },
                ].map((m, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>{m.icon}</span>
                    <span style={{ fontSize: 12.5, color: '#334155', lineHeight: 1.5 }}>{m.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* July */}
            <div style={{ background: '#fff', borderRadius: 20, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <div style={{ background: 'linear-gradient(135deg, #065f46, #064e3b)', padding: '1.25rem 1.5rem' }}>
                <div style={{ color: '#6ee7b7', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>July 2026</div>
                <div style={{ color: '#fff', fontSize: 20, fontWeight: 900, marginTop: 2 }}>Scale & Systems</div>
              </div>
              <div style={{ padding: '1.25rem 1.5rem', display: 'grid', gap: 10 }}>
                {[
                  { icon: '🌉', text: 'SiennaBridge v2.25 built — MT5 → NinjaTrader 8 bridge (3,287 lines C#)' },
                  { icon: '🏦', text: 'FundedNext $50K NinjaTrader account opened' },
                  { icon: '📅', text: 'Jul 12: +$814 · Jul 13: +$435.60 (14 trades) · Jul 15: +$551' },
                  { icon: '⚡', text: 'EA v4.36 — 12 risk gates removed, full funded-account power' },
                  { icon: '🛡️', text: 'Sanlam signed: R1M life + R2.27M estate + R800K business cover' },
                  { icon: '🌐', text: 'Middleman Network launched live — 53 niches, 13 industries' },
                  { icon: '📋', text: 'IDC dealmaker (Cerina) engaged — investment memo submitted' },
                  { icon: '💼', text: 'Net worth documented: R4.65M across 6 divisions' },
                ].map((m, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>{m.icon}</span>
                    <span style={{ fontSize: 12.5, color: '#334155', lineHeight: 1.5 }}>{m.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* August */}
            <div style={{ background: '#fff', borderRadius: 20, border: '2px solid #f59e0b', overflow: 'hidden' }}>
              <div style={{ background: 'linear-gradient(135deg, #92400e, #78350f)', padding: '1.25rem 1.5rem' }}>
                <div style={{ color: '#fcd34d', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>August 2026</div>
                <div style={{ color: '#fff', fontSize: 20, fontWeight: 900, marginTop: 2 }}>Capital & IP Push</div>
                <div style={{ color: '#fcd34d', fontSize: 10, fontWeight: 700, marginTop: 4 }}>← Current month</div>
              </div>
              <div style={{ padding: '1.25rem 1.5rem', display: 'grid', gap: 10 }}>
                {[
                  { icon: '💵', text: 'Lula R40,000 loan disbursed — first external capital secured' },
                  { icon: '🏛️', text: 'IDC investment plan deployed online (dr-autotronics-idc.vercel.app)' },
                  { icon: '📬', text: 'TIA R2.5M application completed + 15 funder outreach emails sent' },
                  { icon: '🔖', text: 'Middleman Ecosystem™ trademark strategy filed' },
                  { icon: '💡', text: 'IP portfolio valued at R3.9M — 6 divisions, 3 software systems' },
                  { icon: '🚗', text: 'TRUEMILE vehicle inspection service conceptualised' },
                  { icon: '🌐', text: 'TMN expanded: 68 static pages, 19 new niches added' },
                  { icon: '📊', text: 'Business Capital score within 10 points of approval threshold' },
                ].map((m, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>{m.icon}</span>
                    <span style={{ fontSize: 12.5, color: '#334155', lineHeight: 1.5 }}>{m.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Group growth summary bar */}
          <div style={{ background: '#0f172a', borderRadius: 16, padding: '1.5rem 2rem', marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
            {[
              { label: 'Confirmed Trading P&L', val: '+$2,018', sub: 'Across 8 sessions', color: '#22c55e' },
              { label: 'External Capital Raised', val: 'R40,000', sub: 'Lula · Aug 2026', color: '#f59e0b' },
              { label: 'IP Portfolio Value', val: 'R3.9M', sub: 'Across all software', color: '#8b5cf6' },
              { label: 'Net Worth Growth', val: 'R4.65M', sub: 'Jun → Aug 2026', color: '#06b6d4' },
              { label: 'Funders Contacted', val: '15+', sub: 'Active pipeline', color: '#f97316' },
              { label: 'Platform Pages Live', val: '68', sub: 'TMN · Static', color: '#10b981' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ color: s.color, fontSize: 22, fontWeight: 900 }}>{s.val}</div>
                <div style={{ color: '#fff', fontSize: 11, fontWeight: 700, marginTop: 4 }}>{s.label}</div>
                <div style={{ color: '#475569', fontSize: 10, marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TRUE ECOSYSTEM — Full Map */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>True Ecosystem</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#0f172a', margin: '0.5rem 0' }}>How All Six Divisions Work Together</h2>
          <p style={{ color: '#64748b', margin: '0 0 2rem', maxWidth: 680, lineHeight: 1.7 }}>
            This is not a collection of separate businesses that happen to share an owner. Every division <strong style={{ color: '#0f172a' }}>sends value into every other division</strong> — through money, hardware, data and clients. 23 documented connections. When one division wins, all six benefit. That is what makes this a true ecosystem.
          </p>

          {/* Ecosystem proof stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { val: '23', label: 'Internal connections', sub: 'documented and active', color: '#f59e0b' },
              { val: '4', label: 'Types of value exchange', sub: 'revenue · hardware · data · clients', color: '#8b5cf6' },
              { val: '0', label: 'External hardware suppliers', sub: 'needed for group operations', color: '#10b981' },
              { val: '1', label: 'Shared AI brain', sub: 'SIENNA serving all 6 divisions', color: '#6366f1' },
              { val: '6×', label: 'Revenue amplification', sub: 'each win ripples across all', color: '#ef4444' },
            ].map(s => (
              <div key={s.label} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1.25rem', borderTop: `3px solid ${s.color}` }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: '#0f172a', marginTop: 4 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Flow type legend */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {FLOW_TYPES.map(ft => (
              <div key={ft.type} style={{ background: ft.bg, border: `1px solid ${ft.border}`, borderRadius: 12, padding: '1rem 1.25rem', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{ft.icon}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 13, color: ft.color, marginBottom: 3 }}>{ft.label}</div>
                  <div style={{ fontSize: 12, color: '#475569', lineHeight: 1.5 }}>{ft.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* All 23 connections grouped by flow type */}
          {FLOW_TYPES.map(ft => {
            const connections = ALL_CONNECTIONS.filter(c => c.type === ft.type);
            return (
              <div key={ft.type} style={{ background: '#0f172a', borderRadius: 20, padding: '2rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: 22 }}>{ft.icon}</span>
                  <div>
                    <div style={{ color: ft.color, fontWeight: 900, fontSize: 16 }}>{ft.label}</div>
                    <div style={{ color: '#64748b', fontSize: 12 }}>{connections.length} connections</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {connections.map((c, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1rem 1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                        <span style={{ background: ft.bg, border: `1px solid ${ft.border}`, color: ft.color, fontSize: 11, fontWeight: 800, padding: '3px 10px', borderRadius: 6, whiteSpace: 'nowrap' }}>{c.from}</span>
                        <span style={{ color: ft.color, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>→</span>
                        <span style={{ background: 'rgba(255,255,255,0.07)', color: '#e2e8f0', fontSize: 11, fontWeight: 800, padding: '3px 10px', borderRadius: 6, whiteSpace: 'nowrap' }}>{c.to}</span>
                      </div>
                      <div style={{ color: '#fff', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{c.what}</div>
                      <div style={{ color: '#64748b', fontSize: 12, lineHeight: 1.6 }}>{c.impact}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* If One Wins, All Win */}
          <div style={{ background: 'linear-gradient(135deg, #0a0f1a 0%, #0f172a 100%)', borderRadius: 20, padding: '2.5rem', border: '1px solid rgba(245,158,11,0.2)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ color: '#f59e0b', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>The Compounding Effect</div>
              <h3 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', margin: '0 0 8px' }}>When One Division Wins — All Six Benefit</h3>
              <p style={{ color: '#64748b', fontSize: 13, maxWidth: 520, margin: '0 auto' }}>
                This is what separates a true ecosystem from a holding company that just owns businesses. Every single win inside one division triggers a chain reaction across all others.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
              {CHAIN_REACTIONS.map((cr, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden' }}>
                  <div style={{ background: cr.color + '18', borderBottom: `2px solid ${cr.color}30`, padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 22 }}>{cr.icon}</span>
                    <div>
                      <div style={{ color: '#94a3b8', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 2 }}>Trigger Event</div>
                      <div style={{ color: '#fff', fontWeight: 800, fontSize: 14 }}>{cr.trigger}</div>
                    </div>
                  </div>
                  <div style={{ padding: '1rem 1.5rem', display: 'grid', gap: '0.5rem' }}>
                    {cr.chain.map((step, si) => (
                      <div key={si} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: cr.color, fontSize: 14, fontWeight: 900, flexShrink: 0, marginTop: 1 }}>↳</span>
                        <span style={{ background: 'rgba(255,255,255,0.06)', color: '#a5b4fc', fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', flexShrink: 0, marginTop: 1 }}>{step.div}</span>
                        <span style={{ color: '#94a3b8', fontSize: 12.5, lineHeight: 1.5 }}>{step.result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* The closed loop proof */}
            <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem' }}>
              <div style={{ color: '#f59e0b', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: '1rem', textAlign: 'center' }}>The Closed Loop</div>
              <div className="flow-scroll">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'nowrap', gap: '0.5rem', minWidth: 580 }}>
                {[
                  { label: 'D.R. Autotronics', sub: 'generates income', color: '#ef4444' },
                  { arrow: true, label: 'funds' },
                  { label: 'Scope Indices', sub: 'trades capital', color: '#8b5cf6' },
                  { arrow: true, label: 'powers' },
                  { label: 'Beryl Core AI', sub: 'runs SIENNA', color: '#6366f1' },
                  { arrow: true, label: 'automates' },
                  { label: 'All Divisions', sub: 'operate smarter', color: '#f59e0b' },
                  { arrow: true, label: 'found via' },
                  { label: 'TMN', sub: 'drives leads', color: '#f59e0b' },
                  { arrow: true, label: 'back to' },
                  { label: 'D.R. Autotronics', sub: 'more clients', color: '#ef4444' },
                ].map((item, i) => (
                  item.arrow
                    ? <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <span style={{ color: '#f59e0b', fontSize: 18, lineHeight: 1 }}>→</span>
                        <span style={{ color: '#475569', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{item.label}</span>
                      </div>
                    : <div key={i} style={{ background: (item.color || '#fff') + '15', border: `1px solid ${item.color || '#fff'}30`, borderRadius: 10, padding: '8px 14px', textAlign: 'center' }}>
                        <div style={{ color: item.color, fontSize: 12, fontWeight: 800 }}>{item.label}</div>
                        <div style={{ color: '#64748b', fontSize: 10, marginTop: 2 }}>{item.sub}</div>
                      </div>
                ))}
              </div>
              </div>{/* /flow-scroll */}
              <p style={{ color: '#475569', fontSize: 12, textAlign: 'center', marginTop: '1.5rem', maxWidth: 560, margin: '1.5rem auto 0' }}>
                The loop is self-reinforcing. Every revolution makes the whole group stronger — more revenue, smarter AI, cheaper hardware, more clients. This is not theory — these flows are operating today.
              </p>
            </div>
          </div>
        </div>

        {/* Who We Work With */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>Our Network</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#0f172a', margin: '0.5rem 0' }}>Who We Work With</h2>
          <p style={{ color: '#64748b', margin: '0 0 2rem', maxWidth: 620 }}>
            Established commercial relationships, integrations and operating agreements built across multiple industries over 10+ years.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {/* Vehicle brands */}
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', padding: '1.5rem' }}>
              <div style={{ fontWeight: 900, color: '#0f172a', fontSize: 15, marginBottom: 4 }}>🔧 Vehicle Brands Serviced</div>
              <div style={{ color: '#64748b', fontSize: 12, marginBottom: 14 }}>D.R. Autotronics — ECU diagnostics &amp; reprogramming</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Toyota', 'Nissan', 'Hyundai', 'Opel', 'Ford', 'Mazda', 'Mitsubishi', 'Isuzu', 'GWM', 'Fiat', 'Chevrolet'].map(brand => (
                  <span key={brand} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#334155', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 6 }}>{brand}</span>
                ))}
              </div>
            </div>

            {/* Financial & Insurance */}
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', padding: '1.5rem' }}>
              <div style={{ fontWeight: 900, color: '#0f172a', fontSize: 15, marginBottom: 4 }}>🏦 Financial &amp; Insurance Partners</div>
              <div style={{ color: '#64748b', fontSize: 12, marginBottom: 14 }}>Banking, assurance and payment infrastructure</div>
              <div style={{ display: 'grid', gap: 8 }}>
                {[
                  { name: 'FNB — Gold Business Account', note: '5 years continuous relationship' },
                  { name: 'Sanlam Life Assurance', note: 'R1,000,000 policy — underwriting in progress' },
                  { name: 'Capital Legacy / Guardrisk', note: 'Legacy Plan PN3020424 — R2,270,000' },
                  { name: 'Paystack', note: 'TipGuard SA payment gateway integration' },
                  { name: 'Google Pay + Apple Pay', note: 'TipGuard SA mobile payments' },
                ].map(p => (
                  <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '6px 0', borderBottom: '1px solid #f8fafc', gap: 8 }}>
                    <div style={{ fontSize: 12.5, color: '#0f172a', fontWeight: 600 }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: '#94a3b8', textAlign: 'right', maxWidth: 160 }}>{p.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trading platforms */}
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', padding: '1.5rem' }}>
              <div style={{ fontWeight: 900, color: '#0f172a', fontSize: 15, marginBottom: 4 }}>📈 Trading &amp; Tech Platforms</div>
              <div style={{ color: '#64748b', fontSize: 12, marginBottom: 14 }}>Scope Indices — live algorithmic execution</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['MetaTrader 5 (MT5)', 'NinjaTrader 8', 'TradingView', 'MetaTrader 4 (MT4)', 'Cloudflare', 'Vercel', 'Supabase', 'NFC Technology'].map(p => (
                  <span key={p} style={{ background: '#f0f0ff', border: '1px solid #c7d2fe', color: '#4338ca', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 6 }}>{p}</span>
                ))}
              </div>
            </div>

            {/* Agriculture */}
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', padding: '1.5rem' }}>
              <div style={{ fontWeight: 900, color: '#0f172a', fontSize: 15, marginBottom: 4 }}>🌾 Agriculture &amp; Carbon Integrations</div>
              <div style={{ color: '#64748b', fontSize: 12, marginBottom: 14 }}>YieldCore AI — 5,419 ha · 10 active farm clients</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Soil Moisture Sensor APIs', 'Satellite Imagery Feed', 'Weather Intelligence APIs', 'Carbon MRV Systems', 'Precision Irrigation Control', 'WhatsApp Business API', '17 Active Integrations', '10 Farm Clients'].map(p => (
                  <span key={p} style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#15803d', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 6 }}>{p}</span>
                ))}
              </div>
            </div>

            {/* Regulatory */}
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', padding: '1.5rem' }}>
              <div style={{ fontWeight: 900, color: '#0f172a', fontSize: 15, marginBottom: 4 }}>⚖️ Regulatory &amp; Compliance Bodies</div>
              <div style={{ color: '#64748b', fontSize: 12, marginBottom: 14 }}>Industry memberships and compliance frameworks</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['RMI — Retail Motor Industry', 'IAMESA', 'SACAA (drone licensing)', 'FSCA (via TMN partners)', 'PSIRA (via TMN partners)', 'POPIA Compliant', 'NYDA Application Active'].map(p => (
                  <span key={p} style={{ background: '#fff7ed', border: '1px solid #fed7aa', color: '#c2410c', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 6 }}>{p}</span>
                ))}
              </div>
            </div>

            {/* TMN industries */}
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', padding: '1.5rem' }}>
              <div style={{ fontWeight: 900, color: '#0f172a', fontSize: 15, marginBottom: 4 }}>🌐 TMN — Industries &amp; Sectors Served</div>
              <div style={{ color: '#64748b', fontSize: 12, marginBottom: 14 }}>The Middleman Network — 34 niches across 11 industries</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Energy & Solar', 'Security & CCTV', 'Automotive Technology', 'Agriculture Technology', 'Hospitality & Fintech', 'Trading Technology', 'Construction & Trades', 'Property & Professional', 'Suppliers & Wholesale', 'Technology Services', 'Healthcare'].map(p => (
                  <span key={p} style={{ background: '#fefce8', border: '1px solid #fde047', color: '#92400e', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 6 }}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Potential */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>True Potential</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#0f172a', margin: '0.5rem 0' }}>Revenue Projections — All Six Divisions</h2>
          <p style={{ color: '#64748b', margin: '0 0 2rem', maxWidth: 640 }}>
            The infrastructure is built. The platforms are live. The IP is owned. The next phase is scaling revenue across all six divisions simultaneously — from R60,000/month today to R400,000+/month at full operating capacity.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { div: 'D.R. Autotronics (existing)', current: 'R60,000/mo avg', target90: 'R80,000', target12m: 'R120,000', color: '#ef4444', icon: '🔧', note: '10-year verified income base — growing with fleet clients' },
              { div: 'D.R. Autotronics (Dyno)', current: 'Installing', target90: 'R135,000', target12m: 'R180,000', color: '#ef4444', icon: '⚙️', note: 'Chassis dynamometer — engine tuning + power verification — 3-month payback' },
              { div: 'Scope Indices', current: 'Live + variable', target90: 'R15,000', target12m: 'R30,000', color: '#8b5cf6', icon: '📈', note: 'TradingView subscriptions + live funded account trading profits' },
              { div: 'YieldCore AI', current: 'Platform built', target90: 'R8,000', target12m: 'R35,000', color: '#10b981', icon: '🌾', note: 'Farm SaaS contracts at R3,200/ha/yr + carbon credit commission pipeline' },
              { div: 'TipGuard SA', current: 'Platform built', target90: 'R5,000', target12m: 'R25,000', color: '#06b6d4', icon: '💳', note: 'Merchant subscriptions — hotels, restaurants, salons, car washes' },
              { div: 'Manufacturing Division', current: 'Internal supply', target90: 'R12,000', target12m: 'R30,000', color: '#f97316', icon: '🏭', note: 'Drone services (post SACAA) + 3D printing + NFC hardware contracts' },
              { div: 'The Middleman Network', current: 'Live — pre-revenue', target90: 'R3,000', target12m: 'R50,000', color: '#f59e0b', icon: '🌐', note: 'Provider subscriptions at R299–R999/mo across 34 niches' },
            ].map(row => (
              <div key={row.div} style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <div style={{ background: row.color + '10', borderBottom: `2px solid ${row.color}`, padding: '0.875rem 1.25rem', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 20 }}>{row.icon}</span>
                  <div style={{ fontWeight: 800, color: '#0f172a', fontSize: 13.5, lineHeight: 1.3 }}>{row.div}</div>
                </div>
                <div style={{ padding: '1rem 1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 10 }}>
                    <div>
                      <div style={{ fontSize: 10, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>Now</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#475569' }}>{row.current}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>90-Day</div>
                      <div style={{ fontSize: 14, fontWeight: 900, color: '#d97706' }}>{row.target90}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>12-Month</div>
                      <div style={{ fontSize: 14, fontWeight: 900, color: '#15803d' }}>{row.target12m}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 11.5, color: '#64748b', lineHeight: 1.5 }}>{row.note}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Total banner */}
          <div style={{ background: '#0f172a', borderRadius: 16, padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#64748b', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Current Monthly (Verified)</div>
              <div style={{ color: '#fff', fontSize: 28, fontWeight: 900 }}>R60,000</div>
              <div style={{ color: '#64748b', fontSize: 11 }}>Anchor division — 10-month average</div>
            </div>
            <div>
              <div style={{ color: '#64748b', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>90-Day Group Target</div>
              <div style={{ color: '#f59e0b', fontSize: 28, fontWeight: 900 }}>R223,000</div>
              <div style={{ color: '#64748b', fontSize: 11 }}>Dyno installed + first commercial launches</div>
            </div>
            <div>
              <div style={{ color: '#64748b', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>12-Month Group Target</div>
              <div style={{ color: '#10b981', fontSize: 28, fontWeight: 900 }}>R410,000</div>
              <div style={{ color: '#64748b', fontSize: 11 }}>All six divisions at operating capacity</div>
            </div>
            <div style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 12, padding: '1rem' }}>
              <div style={{ color: '#f59e0b', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Annualised at 12-Month Rate</div>
              <div style={{ color: '#f59e0b', fontSize: 28, fontWeight: 900 }}>R4.9M</div>
              <div style={{ color: '#94a3b8', fontSize: 11 }}>Per year — all divisions combined</div>
            </div>
          </div>
        </div>

        {/* Asset Register */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>What We Own</span>
          <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 900, color: '#0f172a', margin: '0.5rem 0 1.5rem' }}>Asset Register — August 2026</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              {
                title: 'Group Legal & Protection',
                color: '#10b981',
                total: 'R9,570,000',
                items: [
                  ['Registered Family / Business Trust', 'R5,500,000', 'Active ✓ — primary group security'],
                  ['Sanlam Life Assurance Policy', 'R1,000,000', 'Signed Aug 2026 ✓'],
                  ['Sanlam Legacy Plan PN3020424', 'R2,270,000', 'Estate plan — Will signed 31 Jul 2026 ✓'],
                  ['Sanlam Business Overhead Cover', 'R800,000', 'Business protection — signed Aug 2026 ✓'],
                ],
              },
              {
                title: 'Intellectual Property',
                color: '#6366f1',
                total: 'R3,900,000',
                items: [
                  ['AQI Bridge EA v4.40', 'R650,000', '9,080 lines MQL5 — live funded account'],
                  ['SiennaBridge v2.25', 'R280,000', '3,287 lines C# — NinjaTrader bridge live'],
                  ['TradingView Pine Scripts', 'R170,000', '9 proprietary indicators — subscription ready'],
                  ['ECU Database', 'R900,000', '10GB · 180+ programs · 10 years of data'],
                  ['YieldCore AI Platform', 'R600,000', 'React/Node · 17 APIs · full SaaS'],
                  ['TipGuard SA Platform', 'R500,000', 'Paystack integrated · NFC hardware ready'],
                  ['Beryl Core / Rodwell OS', 'R800,000', 'Group CRM + AI platform + SIENNA'],
                ],
              },
              {
                title: 'Business Physical Assets',
                color: '#f59e0b',
                total: 'R411,000',
                items: [
                  ['ECU Inventory', 'R225,000', '150+ units — 15+ brands'],
                  ['Workshop & Diagnostic Equipment', 'R92,000', 'ECU tools, iProg+ V84'],
                  ['Computing Equipment', 'R69,000', 'Dev machines, servers, networking'],
                  ['NFC Hardware Stock', 'R25,000', 'TipGuard merchant hardware — ready to deploy'],
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
            <h3 style={{ fontWeight: 900, fontSize: 18, margin: '0 0 1.25rem' }}>Group Network Asset Statement — August 2026</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              {[
                { label: 'Group Legal & Protection', value: 'R9,570,000' },
                { label: 'Business Physical Assets', value: 'R411,000' },
                { label: 'Intellectual Property', value: 'R3,900,000' },
                { label: 'Group Network Worth', value: 'R13,881,000', highlight: true },
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
                <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>Signed Aug 2026 ✓</div>
              </div>
              <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, padding: '1rem' }}>
                <div style={{ color: '#10b981', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Sanlam Legacy Plan</div>
                <div style={{ color: '#fff', fontSize: 20, fontWeight: 900, marginTop: 2 }}>R2,270,000</div>
                <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>PN3020424 — Will signed 31 Jul 2026 ✓</div>
              </div>
              <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, padding: '1rem' }}>
                <div style={{ color: '#10b981', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Sanlam Business Cover</div>
                <div style={{ color: '#fff', fontSize: 20, fontWeight: 900, marginTop: 2 }}>R800,000</div>
                <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>Business overhead protection — Aug 2026 ✓</div>
              </div>
              <div style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 10, padding: '1rem' }}>
                <div style={{ color: '#f59e0b', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Total Security Package</div>
                <div style={{ color: '#f59e0b', fontSize: 24, fontWeight: 900, marginTop: 2 }}>R9,570,000</div>
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
              <div style={{ color: '#64748b', fontSize: 14, marginBottom: 4 }}>Executive Director · D.R. Autotronics Group (Pty) Ltd</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fef3c7', borderRadius: 20, padding: '3px 10px', marginBottom: 12 }}>
                <span style={{ color: '#92400e', fontSize: 11, fontWeight: 700 }}>🏛️ 2nd Generation — 30-Year Automotive & Engineering Legacy</span>
              </div>
              <p style={{ color: '#475569', fontSize: 13.5, lineHeight: 1.7, margin: '0 0 0.75rem' }}>
                Rodwell inherited and advanced a 30-year family legacy in automotive and engineering — bringing with it established client relationships, supplier networks, industry credibility and deep technical knowledge built across two generations.
              </p>
              <p style={{ color: '#475569', fontSize: 13.5, lineHeight: 1.7, margin: '0 0 1rem' }}>
                On that foundation, he built six technology divisions: an ECU specialist workshop, an algorithmic trading platform, a precision agriculture AI, a fintech tipping system, a group AI infrastructure, and a B2B marketplace — all owned, operated and funded from within the group.
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
