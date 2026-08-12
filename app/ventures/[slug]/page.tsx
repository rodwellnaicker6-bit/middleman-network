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
                  { val: '30 Yrs', label: 'Family legacy', color: '#ef4444' },
                  { val: '2nd Gen', label: 'Ownership', color: '#f97316' },
                  { val: '15+', label: 'Vehicle brands', color: '#f59e0b' },
                  { val: '150+', label: 'ECU units in stock', color: '#10b981' },
                  { val: '180+', label: 'ECU programs', color: '#6366f1' },
                  { val: '10GB', label: 'Proprietary database', color: '#8b5cf6' },
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
              <p style={{ color: '#475569', lineHeight: 1.8, fontSize: 15, margin: venture.slug === 'dr-autotronics' ? '0 0 1.25rem' : 0 }}>{venture.description}</p>

              {venture.slug === 'dr-autotronics' && (
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#0f172a', marginBottom: 10 }}>Vehicles We Work On</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 6, marginBottom: '1.25rem' }}>
                    {[
                      '🚙 Bakkies (all makes)', '🚛 Heavy trucks', '🚐 Minibus taxis',
                      '⭐ Mercedes-Benz Actros', '🔵 Isuzu trucks & bakkies', '🟡 Toyota Hilux & Land Cruiser',
                      '🟠 Ford Ranger & Everest', '⚪ Mitsubishi Canter & Fuso', '🟤 Volkswagen Amarok',
                      '🟢 John Deere tractors', '🔴 Mahindra tractors', '🟣 Nissan NP300 & Navara',
                      '🔷 Hino trucks', '🔶 Fiat Ducato & Iveco', '⚫ BMW & Mercedes passenger',
                      '🟦 Hyundai & Kia fleet', '🔸 Scania & Volvo trucks', '🟥 Renault trucks',
                    ].map(v => (
                      <div key={v} style={{ fontSize: 12, color: '#334155', background: '#f8fafc', borderRadius: 7, padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
                        {v}
                      </div>
                    ))}
                  </div>
                  <div style={{ background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 10, padding: '10px 14px', fontSize: 12.5, color: '#92400e', fontWeight: 600 }}>
                    🔧 If it has an ECU, BCM, TCU or immobiliser — we can programme, repair, clone or replace it. Dealer-level tooling. No dealership price tag.
                  </div>
                </div>
              )}
            </div>

            {/* ── TIPGUARD SA DEMO ─────────────────────────────── */}
            {venture.slug === 'tipguard-sa' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: 20, padding: '4px 14px', marginBottom: 16 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  <span style={{ color: '#15803d', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Live Demo Preview</span>
                </div>

                {/* Mock merchant tipping card */}
                <div style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)', borderRadius: 20, padding: '2rem', color: '#fff', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>TipGuard SA</div>
                      <div style={{ fontSize: 22, fontWeight: 900 }}>Sarah M.</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>The Waterfront Restaurant · Table 7</div>
                    </div>
                    <div style={{ background: '#fff', borderRadius: 12, padding: '10px', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>
                      📱
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 10 }}>SELECT TIP AMOUNT</div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {['R10', 'R20', 'R50', 'R100'].map((amt, i) => (
                        <div key={amt} style={{ background: i === 2 ? '#fff' : 'rgba(255,255,255,0.15)', color: i === 2 ? '#7c3aed' : '#fff', fontWeight: 800, fontSize: 16, padding: '10px 20px', borderRadius: 10, border: i === 2 ? 'none' : '1px solid rgba(255,255,255,0.2)' }}>
                          {amt}
                        </div>
                      ))}
                      <div style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 700, fontSize: 13, padding: '10px 16px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.2)' }}>
                        Custom
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 10 }}>PAY WITH</div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {[{ icon: '🟢', label: 'Google Pay' }, { icon: '⬛', label: 'Apple Pay' }, { icon: '💳', label: 'Card' }, { icon: '📲', label: 'NFC Tap' }].map(p => (
                        <div key={p.label} style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700 }}>
                          <span>{p.icon}</span><span>{p.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Tipping R50 to Sarah</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>Secure · Instant · 0% platform fee to tipper</div>
                    </div>
                    <div style={{ background: '#22c55e', color: '#fff', fontWeight: 800, padding: '10px 20px', borderRadius: 8, fontSize: 14 }}>
                      Pay Now →
                    </div>
                  </div>
                </div>

                {/* Merchant dashboard stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
                  {[
                    { val: 'R4,820', label: 'Sarah\'s tips this month', color: '#7c3aed', icon: '💰' },
                    { val: '234', label: 'Transactions processed', color: '#06b6d4', icon: '✅' },
                    { val: 'R48', label: 'Average tip amount', color: '#10b981', icon: '📈' },
                    { val: '0%', label: 'Fraud rate — all-time', color: '#f59e0b', icon: '🛡️' },
                  ].map(s => (
                    <div key={s.label} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1rem', borderTop: `3px solid ${s.color}` }}>
                      <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                      <div style={{ fontSize: 18, fontWeight: 900, color: s.color }}>{s.val}</div>
                      <div style={{ fontSize: 11, color: '#64748b', marginTop: 3 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '1rem 1.25rem', fontSize: 13, color: '#15803d', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 18 }}>✅</span>
                  <span><strong>This is how TipGuard SA works.</strong> Customers scan, tap or click — tips land instantly in the employee&apos;s account. No cash. No friction. No lost tips.</span>
                </div>
              </div>
            )}

            {/* ── YIELDCORE AI DEMO ────────────────────────────── */}
            {venture.slug === 'yieldcore-ai' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: 20, padding: '4px 14px', marginBottom: 16 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  <span style={{ color: '#15803d', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Live Demo Preview</span>
                </div>

                {/* Dashboard header */}
                <div style={{ background: 'linear-gradient(135deg, #1a5e3a 0%, #0f172a 100%)', borderRadius: 20, padding: '1.5rem 2rem', color: '#fff', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 1, textTransform: 'uppercase' }}>YieldCore AI · Farm Intelligence</div>
                      <div style={{ fontSize: 20, fontWeight: 900, marginTop: 4 }}>Sunrise Farm — KwaZulu-Natal</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>1,240 ha · Maize + Soya · Drip Irrigation</div>
                    </div>
                    <div style={{ background: '#22c55e', color: '#fff', fontWeight: 800, fontSize: 11, padding: '5px 12px', borderRadius: 20, letterSpacing: 1 }}>● LIVE</div>
                  </div>

                  {/* Key metrics */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem' }}>
                    {[
                      { label: 'Overall Field Health', val: '87%', bar: 87, color: '#22c55e', icon: '🌿' },
                      { label: 'Avg Soil Moisture', val: '68%', bar: 68, color: '#06b6d4', icon: '💧' },
                      { label: 'Yield Forecast', val: '+18%', bar: 80, color: '#f59e0b', icon: '📈' },
                      { label: 'Water Savings', val: '−32%', bar: 68, color: '#8b5cf6', icon: '🚿' },
                    ].map(m => (
                      <div key={m.label} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 10, padding: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                          <span style={{ fontSize: 16 }}>{m.icon}</span>
                          <span style={{ color: m.color, fontWeight: 900, fontSize: 16 }}>{m.val}</span>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 4, height: 4, marginBottom: 6 }}>
                          <div style={{ background: m.color, width: `${m.bar}%`, height: '100%', borderRadius: 4 }} />
                        </div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', lineHeight: 1.3 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Field map + alerts */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: '1.25rem' }}>
                    <div style={{ fontWeight: 800, fontSize: 14, color: '#0f172a', marginBottom: 12 }}>🗺️ Field Status Map</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                      {[
                        { field: 'Field A1', status: 'Healthy', color: '#22c55e' },
                        { field: 'Field A2', status: 'Healthy', color: '#22c55e' },
                        { field: 'Field B1', status: 'Healthy', color: '#22c55e' },
                        { field: 'Field B2', status: 'Monitor', color: '#f59e0b' },
                        { field: 'Field C1', status: 'Low H₂O', color: '#ef4444' },
                        { field: 'Field C2', status: 'Healthy', color: '#22c55e' },
                      ].map(f => (
                        <div key={f.field} style={{ background: f.color + '15', border: `1px solid ${f.color}40`, borderRadius: 8, padding: '8px 10px' }}>
                          <div style={{ fontSize: 11, fontWeight: 800, color: '#0f172a' }}>{f.field}</div>
                          <div style={{ fontSize: 10, color: f.color, fontWeight: 700, marginTop: 2 }}>{f.status}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: '1.25rem' }}>
                    <div style={{ fontWeight: 800, fontSize: 14, color: '#0f172a', marginBottom: 12 }}>🔔 Recent Alerts</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {[
                        { icon: '🚿', msg: 'Field C1 irrigation activated', time: '14 min ago', color: '#06b6d4' },
                        { icon: '⚠️', msg: 'Field B2 soil moisture below threshold', time: '1h ago', color: '#f59e0b' },
                        { icon: '☁️', msg: 'Rain forecast: 18mm in 48h', time: '3h ago', color: '#8b5cf6' },
                        { icon: '✅', msg: 'Carbon log updated — 4,930 t CO₂e', time: '6h ago', color: '#10b981' },
                      ].map((a, i) => (
                        <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '6px 0', borderBottom: i < 3 ? '1px solid #f8fafc' : 'none' }}>
                          <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>{a.icon}</span>
                          <div>
                            <div style={{ fontSize: 11.5, color: '#334155', fontWeight: 600, lineHeight: 1.4 }}>{a.msg}</div>
                            <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 2 }}>{a.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Carbon + profit */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
                  {[
                    { val: '4,930t', label: 'CO₂e verified credits', color: '#10b981', icon: '🌍' },
                    { val: '+R3,200', label: 'Additional profit per ha/yr', color: '#f59e0b', icon: '💰' },
                    { val: '17', label: 'Live API integrations', color: '#6366f1', icon: '📡' },
                    { val: '10', label: 'Active farm clients', color: '#06b6d4', icon: '🌾' },
                  ].map(s => (
                    <div key={s.label} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1rem', borderLeft: `4px solid ${s.color}` }}>
                      <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
                      <div style={{ fontSize: 18, fontWeight: 900, color: s.color }}>{s.val}</div>
                      <div style={{ fontSize: 11, color: '#64748b', marginTop: 3 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '1rem 1.25rem', fontSize: 13, color: '#15803d', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 18 }}>🌾</span>
                  <span><strong>This is YieldCore AI.</strong> Real-time farm intelligence, automated irrigation, satellite monitoring and carbon credit tracking — all in one platform built for South African farms.</span>
                </div>
              </div>
            )}

            {/* ── SCOPE INDICES — REAL NUMBERS ─────────────────── */}
            {venture.slug === 'scope-indices' && (
              <div style={{ marginBottom: '1.5rem' }}>

                <div style={{ background: 'rgba(180,83,9,0.06)', border: '1px solid rgba(180,83,9,0.25)', borderRadius: 10, padding: '10px 14px', marginBottom: '1.25rem', fontSize: 12, color: '#92400e' }}>
                  ⚠️ Technology provider only — not an FSP. Not financial advice. Past performance does not guarantee future results.
                </div>

                {/* Code stats bar */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {[
                    { val: '12,367', label: 'Lines of code — total', color: '#b45309', icon: '💻' },
                    { val: '9,080', label: 'MQL5 lines — AQI EA', color: '#8b5cf6', icon: '⚙️' },
                    { val: '3,287', label: 'C# lines — SiennaBridge', color: '#06b6d4', icon: '🔗' },
                    { val: '9', label: 'TradingView indicators', color: '#f59e0b', icon: '📊' },
                    { val: 'v4.40', label: 'AQI Bridge EA version', color: '#10b981', icon: '🤖' },
                    { val: 'v2.25', label: 'SiennaBridge version', color: '#6366f1', icon: '🌉' },
                  ].map(s => (
                    <div key={s.label} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1rem', borderTop: `3px solid ${s.color}` }}>
                      <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
                      <div style={{ fontSize: 18, fontWeight: 900, color: s.color }}>{s.val}</div>
                      <div style={{ fontSize: 11, color: '#64748b', marginTop: 3, lineHeight: 1.3 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* SiennaBridge — dedicated panel */}
                <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)', borderRadius: 20, padding: '1.75rem 2rem', color: '#fff', marginBottom: '1rem', border: '1px solid rgba(99,102,241,0.3)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <span style={{ fontSize: 22 }}>🌉</span>
                        <span style={{ color: '#818cf8', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>SiennaBridge v2.25</span>
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 900 }}>MT5 → NinjaTrader 8 Bridge</div>
                      <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 4 }}>3,287 lines C# · Proprietary · IP Value R80,000</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div style={{ background: '#22c55e', color: '#fff', fontSize: 10, fontWeight: 800, padding: '4px 12px', borderRadius: 20, textAlign: 'center' }}>● BRIDGE ACTIVE</div>
                      <div style={{ background: 'rgba(99,102,241,0.2)', color: '#818cf8', fontSize: 10, fontWeight: 700, padding: '4px 12px', borderRadius: 20, textAlign: 'center' }}>MGCQ6 — Micro Gold</div>
                    </div>
                  </div>

                  {/* What SiennaBridge does */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 8, marginBottom: '1.25rem' }}>
                    {[
                      { icon: '📡', text: 'Receives live signals from AQI Bridge EA on MT5' },
                      { icon: '🔗', text: 'Routes execution commands to NinjaTrader 8 in real time' },
                      { icon: '🏦', text: 'Manages the $50,000 funded NinjaTrader account' },
                      { icon: '🛡️', text: 'Enforces daily loss limits, drawdown gates and risk rules' },
                    ].map((f, i) => (
                      <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 10, padding: '12px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ fontSize: 18, flexShrink: 0 }}>{f.icon}</span>
                        <span style={{ fontSize: 12.5, color: '#cbd5e1', lineHeight: 1.5 }}>{f.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Live funded account real numbers */}
                  <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 14, padding: '1.25rem', border: '1px solid rgba(99,102,241,0.2)' }}>
                    <div style={{ color: '#818cf8', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12 }}>Live Funded Account — FNFTCHRODWELLNAICKER14915</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
                      {[
                        { label: 'Account Size', val: '$50,000', color: '#f59e0b', sub: 'NinjaTrader funded' },
                        { label: 'Jul 13 Session', val: '+$435.60', color: '#22c55e', sub: '14 trades · 1 day' },
                        { label: 'Jul 12 Session', val: '+$814', color: '#22c55e', sub: 'Verified result' },
                        { label: 'Best Single Trade', val: '+$336', color: '#10b981', sub: 'MGCQ6 · Jul 13' },
                        { label: 'Max Session DD', val: '−$313', color: '#f97316', sub: 'Recovered same session' },
                        { label: 'Account Balance', val: '$49,845', color: '#6366f1', sub: 'As at Jul 13 2026' },
                      ].map(s => (
                        <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 10, padding: '12px' }}>
                          <div style={{ color: s.color, fontSize: 18, fontWeight: 900 }}>{s.val}</div>
                          <div style={{ color: '#fff', fontSize: 11, fontWeight: 700, marginTop: 4 }}>{s.label}</div>
                          <div style={{ color: '#64748b', fontSize: 10, marginTop: 2 }}>{s.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AQI Bridge EA panel */}
                <div style={{ background: '#0f172a', borderRadius: 20, padding: '1.75rem 2rem', color: '#fff', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <span style={{ fontSize: 22 }}>🤖</span>
                        <span style={{ color: '#f59e0b', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>AQI Bridge EA v4.40</span>
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 900 }}>Live MT5 Execution Engine</div>
                      <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 4 }}>9,080 lines MQL5 · 12 risk gates removed in v4.36 for funded account</div>
                    </div>
                    <div style={{ background: '#22c55e', color: '#fff', fontSize: 10, fontWeight: 800, padding: '4px 12px', borderRadius: 20 }}>● EA LIVE</div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {[
                      { label: 'Strategy', val: 'ICT / SMC', color: '#f59e0b', sub: 'Smart Money Concepts' },
                      { label: 'Instruments', val: 'XAUUSD', color: '#8b5cf6', sub: 'Gold · Indices · Futures' },
                      { label: 'Signals Used', val: 'BOS + CHoCH', color: '#06b6d4', sub: 'Market structure' },
                      { label: 'ADX Filter', val: '25+', color: '#10b981', sub: 'Trend confirmation gate' },
                    ].map(s => (
                      <div key={s.label} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: '12px', borderTop: `2px solid ${s.color}` }}>
                        <div style={{ fontSize: 16, fontWeight: 900, color: s.color }}>{s.val}</div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', marginTop: 4 }}>{s.label}</div>
                        <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>{s.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* 7-pump pattern */}
                  <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 12, padding: '1rem 1.25rem', marginBottom: '1rem' }}>
                    <div style={{ color: '#f59e0b', fontSize: 12, fontWeight: 800, marginBottom: 6 }}>⚡ 7-Pump Pattern — Confirmed Jul 13, 2026</div>
                    <div style={{ color: '#94a3b8', fontSize: 12.5, lineHeight: 1.6 }}>
                      AQI EA identified and traded a 7-candle pump sequence on MGCQ6, generating +$435.60 in a single session across 14 trades. The pattern is now logged and added to the EA&apos;s learning set.
                    </div>
                  </div>

                  {/* Full session history */}
                  <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.1fr 0.9fr 1fr 0.9fr', padding: '10px 16px', background: 'rgba(255,255,255,0.06)', fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
                      <span>Date</span><span>Platform</span><span>Instrument</span><span>Detail</span><span>P&L</span>
                    </div>
                    {[
                      { date: 'Jul 15, 2026', platform: 'NinjaTrader 8', instrument: 'MGCQ6', detail: 'Futures session', result: '+$551.00', color: '#22c55e', tag: '' },
                      { date: 'Jul 13, 2026', platform: 'NinjaTrader 8', instrument: 'MGCQ6', detail: '14 trades · 7-pump', result: '+$435.60', color: '#22c55e', tag: '' },
                      { date: 'Jul 12, 2026', platform: 'NinjaTrader 8', instrument: 'MGCQ6', detail: 'Futures session', result: '+$814.00', color: '#22c55e', tag: '' },
                      { date: 'Jul 17, 2026', platform: 'NinjaTrader 8', instrument: 'MGCQ6', detail: '−$543 DD held · premium zone conviction', result: 'Conviction hold', color: '#f59e0b', tag: '' },
                      { date: 'Jul 22, 2026', platform: 'NinjaTrader 8', instrument: 'MGCQ6', detail: 'Manual only · EA waiting', result: '−$74.00', color: '#f97316', tag: '' },
                      { date: 'Jul 29, 2026', platform: 'NinjaTrader 8', instrument: 'MGCQ6', detail: 'DD breach — account limit hit', result: 'Account reset', color: '#ef4444', tag: '' },
                      { date: 'Jun 25, 2026', platform: 'MT5 (Blue Guardian)', instrument: 'XAUUSD / XAGUSD', detail: 'sell_sweep B− · ADX 27–32', result: '+$28.12 open', color: '#84cc16', tag: '' },
                      { date: 'Jun 24, 2026', platform: 'MT5 (Blue Guardian)', instrument: 'XAUUSD / XAGUSD', detail: 'ADX peak 78.8 · sell_breakout A+', result: '+$291.42', color: '#22c55e', tag: '🏆 Payout' },
                    ].map((t, i) => (
                      <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.1fr 0.9fr 1fr 0.9fr', padding: '11px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: 11, alignItems: 'center' }}>
                        <span style={{ color: '#94a3b8', fontWeight: 600 }}>{t.date}</span>
                        <span style={{ color: '#fff', fontWeight: 700, fontSize: 10 }}>{t.platform}</span>
                        <span style={{ color: '#818cf8', fontWeight: 700, fontSize: 10 }}>{t.instrument}</span>
                        <span style={{ color: '#64748b', fontSize: 10, lineHeight: 1.4 }}>{t.detail}</span>
                        <span style={{ color: t.color, fontWeight: 900 }}>{t.tag && <span style={{ fontSize: 9, marginRight: 4 }}>{t.tag}</span>}{t.result}</span>
                      </div>
                    ))}
                    {/* Confirmed profitable total bar */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.1fr 0.9fr 1fr 0.9fr', padding: '12px 16px', background: 'rgba(34,197,94,0.08)', borderTop: '1px solid rgba(34,197,94,0.2)', fontSize: 12 }}>
                      <span style={{ color: '#22c55e', fontWeight: 800 }}>CONFIRMED P&L</span>
                      <span style={{ color: '#64748b', fontSize: 10 }}>Jun–Jul 2026</span>
                      <span style={{ color: '#64748b', fontSize: 10 }}>All instruments</span>
                      <span style={{ color: '#64748b', fontSize: 10 }}>8 documented sessions</span>
                      <span style={{ color: '#22c55e', fontWeight: 900, fontSize: 14 }}>+$2,018.02</span>
                    </div>
                  </div>
                </div>

                {/* Blue Guardian challenge callout */}
                <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)', borderRadius: 16, padding: '1.5rem', color: '#fff', marginBottom: '1rem', border: '1px solid rgba(96,165,250,0.2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: '1rem' }}>
                    <div>
                      <div style={{ color: '#60a5fa', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 4 }}>Blue Guardian — $5K Challenge Account</div>
                      <div style={{ fontSize: 18, fontWeight: 900 }}>Funded Challenge Passed</div>
                      <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12.5, marginTop: 4 }}>MT5 · XAUUSD + XAGUSD · EA v3.50</div>
                    </div>
                    <div style={{ background: '#22c55e', color: '#fff', fontSize: 10, fontWeight: 800, padding: '4px 12px', borderRadius: 20 }}>✅ PAYOUT TRIGGERED</div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem' }}>
                    {[
                      { label: 'Session P&L', val: '+$291.42', color: '#22c55e', sub: 'Jun 24, 2026' },
                      { label: 'Peak Balance', val: '$5,525.52', color: '#60a5fa', sub: 'Intraday high' },
                      { label: 'Total Gain', val: '+9.7%', color: '#f59e0b', sub: 'From $5,000 seed' },
                      { label: 'Payout At', val: '$5,250', color: '#10b981', sub: '$200 withdrawal req' },
                      { label: 'ADX Peak', val: '78.8', color: '#a78bfa', sub: 'Strongest signal' },
                      { label: 'EA Version', val: 'v3.50', color: '#94a3b8', sub: 'XAUUSD+XAGUSD' },
                    ].map(s => (
                      <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 10, padding: '10px 12px' }}>
                        <div style={{ color: s.color, fontSize: 17, fontWeight: 900 }}>{s.val}</div>
                        <div style={{ color: '#fff', fontSize: 11, fontWeight: 700, marginTop: 3 }}>{s.label}</div>
                        <div style={{ color: '#475569', fontSize: 10, marginTop: 2 }}>{s.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Algo + ML + Tech Stack */}
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 20, padding: '1.75rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: 22 }}>🧠</span>
                    <div>
                      <div style={{ fontWeight: 900, fontSize: 16, color: '#0f172a' }}>Algorithm · AI Scoring · Pattern Learning</div>
                      <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>How the system thinks, scores, learns and executes</div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                    {[
                      {
                        title: 'Multi-Timeframe Algo Engine',
                        color: '#6366f1',
                        icon: '⚙️',
                        points: [
                          'Scans D1, H4, H1, M15, M5 simultaneously',
                          'Each timeframe votes — bullish or bearish',
                          'Weighted score 0–10 generated per bar',
                          'Minimum score 8/10 required to open a trade',
                        ]
                      },
                      {
                        title: 'Pattern Recognition Engine',
                        color: '#f59e0b',
                        icon: '🔍',
                        points: [
                          'Detects BOS (Break of Structure) events',
                          'Identifies CHoCH (Change of Character) shifts',
                          'Reads liquidity sweeps — BSL and SSL grabs',
                          '7-pump pattern confirmed and logged Jul 13, 2026',
                        ]
                      },
                      {
                        title: 'Machine Learning Data Layer',
                        color: '#10b981',
                        icon: '📚',
                        points: [
                          'Every trade writes to aiq_analytics.json and archive',
                          'ADX, score, MTF breakdown logged per entry',
                          'Patterns are reviewed, catalogued and re-used',
                          '7-pump pattern added to EA learning set after Jul 13',
                        ]
                      },
                      {
                        title: 'Risk Intelligence System',
                        color: '#ef4444',
                        icon: '🛡️',
                        points: [
                          'ADX strength filter — only trades above 25 ADX',
                          'Late-session trail tightens automatically when ADX < 35',
                          'Daily loss halt: $1,000 max (funded account protection)',
                          '3-bar pause after any loss (reduces revenge trading)',
                        ]
                      },
                    ].map((block, i) => (
                      <div key={i} style={{ background: '#f8fafc', borderRadius: 14, padding: '1rem 1.25rem', borderLeft: `3px solid ${block.color}` }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                          <span style={{ fontSize: 18 }}>{block.icon}</span>
                          <span style={{ fontSize: 13, fontWeight: 800, color: '#0f172a' }}>{block.title}</span>
                        </div>
                        <div style={{ display: 'grid', gap: 6 }}>
                          {block.points.map((p, j) => (
                            <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                              <span style={{ color: block.color, fontWeight: 900, fontSize: 11, flexShrink: 0, marginTop: 2 }}>→</span>
                              <span style={{ fontSize: 12, color: '#475569', lineHeight: 1.5 }}>{p}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Signal flow diagram */}
                  <div style={{ background: '#0f172a', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
                    <div style={{ color: '#94a3b8', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: '1rem' }}>Signal Flow — Market to Execution</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                      {[
                        { label: 'Live Market Data', sub: 'XAUUSD · US30 · MGCQ6', color: '#64748b' },
                        { label: '→', sub: '', color: '#334155', small: true },
                        { label: 'MTF Algorithm', sub: 'D1 H4 H1 M15 M5 scan', color: '#6366f1' },
                        { label: '→', sub: '', color: '#334155', small: true },
                        { label: 'AI Scorer', sub: '0–10 signal score', color: '#f59e0b' },
                        { label: '→', sub: '', color: '#334155', small: true },
                        { label: 'Risk Check', sub: 'ADX · DD · pause gates', color: '#ef4444' },
                        { label: '→', sub: '', color: '#334155', small: true },
                        { label: 'AQI EA v4.40', sub: 'Opens order on MT5', color: '#10b981' },
                        { label: '→', sub: '', color: '#334155', small: true },
                        { label: 'SiennaBridge', sub: 'Routes to NinjaTrader 8', color: '#818cf8' },
                        { label: '→', sub: '', color: '#334155', small: true },
                        { label: 'Funded Account', sub: 'Real execution · Real P&L', color: '#22c55e' },
                      ].map((step, i) => (
                        step.small
                          ? <span key={i} style={{ color: '#475569', fontSize: 18, fontWeight: 900 }}>›</span>
                          : <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '8px 12px', textAlign: 'center', borderTop: `2px solid ${step.color}` }}>
                              <div style={{ color: step.color, fontSize: 11, fontWeight: 800 }}>{step.label}</div>
                              <div style={{ color: '#475569', fontSize: 10, marginTop: 2 }}>{step.sub}</div>
                            </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* TradingView indicators */}
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: '1.5rem', marginBottom: '1rem' }}>
                  <div style={{ fontWeight: 800, fontSize: 15, color: '#0f172a', marginBottom: 14 }}>📊 Proprietary TradingView Indicators — 9 Built & Owned</div>
                  <div style={{ display: 'grid', gap: 8 }}>
                    {[
                      { name: 'AQI Market Structure Detector', type: 'BOS / CHoCH' },
                      { name: 'Liquidity Sweep Highlighter', type: 'Stop Hunt Detection' },
                      { name: 'ICT Killzone Highlighter', type: 'Session Timing' },
                      { name: 'Order Block Scanner', type: 'Smart Money Zones' },
                      { name: 'Fair Value Gap Detector', type: 'Imbalance Zones' },
                      { name: 'Premium / Discount Zones', type: 'Range Equilibrium' },
                      { name: 'ADX Trend Strength Filter', type: 'Trend Confirmation' },
                      { name: 'Multi-Session Volume Delta', type: 'Volume Analysis' },
                      { name: 'AQI Confluence Score', type: 'Signal Aggregator' },
                    ].map((ind, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#f8fafc', borderRadius: 8, gap: 8 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ color: '#22c55e', fontWeight: 900, fontSize: 12 }}>✓</span>
                          <span style={{ fontSize: 13, fontWeight: 600, color: '#0f172a' }}>{ind.name}</span>
                        </div>
                        <span style={{ fontSize: 10, color: '#94a3b8', fontWeight: 600, whiteSpace: 'nowrap' }}>{ind.type}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '1rem', padding: '12px 14px', background: '#fef3c7', borderRadius: 8, fontSize: 12, color: '#92400e', fontWeight: 600 }}>
                    🚀 Indicator subscription launching soon — R299–R999/month on TradingView. All 9 indicators built and ready.
                  </div>
                </div>

                <div style={{ background: '#0f172a', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 12, padding: '1.25rem 1.5rem', fontSize: 13, color: '#94a3b8', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ fontSize: 28 }}>📈</span>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 800, marginBottom: 4 }}>12,367 lines. 2 live systems. 2 funded accounts. $2,018 confirmed across 5 sessions.</div>
                    <div style={{ lineHeight: 1.6, fontSize: 12.5 }}>AQI Bridge EA on MT5 generates the signals. SiennaBridge routes them to NinjaTrader 8. The account executes. The P&L is real. Everything is built, owned and operated by Scope Indices. Not signals. Not advice. Pure technology.</div>
                  </div>
                </div>
              </div>
            )}

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
                <>
                  <div style={{ marginTop: 14, padding: '10px 12px', background: 'rgba(245,158,11,0.1)', borderRadius: 8, border: '1px solid rgba(245,158,11,0.2)' }}>
                    <div style={{ color: '#f59e0b', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Workshop Hours</div>
                    <div style={{ color: '#94a3b8', fontSize: 12 }}>Mon – Fri: 8am – 5pm SAST</div>
                    <div style={{ color: '#94a3b8', fontSize: 12 }}>Sat: 8am – 1pm · Mobile available</div>
                  </div>
                  <div style={{ marginTop: 10, padding: '10px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ color: '#fcd34d', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>🏛️ 30-Year Family Legacy</div>
                    <div style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.5 }}>2nd generation · Automotive &amp; engineering · Durban, KZN</div>
                  </div>
                </>
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
