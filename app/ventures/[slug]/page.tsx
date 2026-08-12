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

            {/* ── SCOPE INDICES DEMO ───────────────────────────── */}
            {venture.slug === 'scope-indices' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: 20, padding: '4px 14px', marginBottom: 16 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  <span style={{ color: '#15803d', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>Live Demo Preview</span>
                </div>

                <div style={{ background: 'rgba(180,83,9,0.05)', border: '1px solid rgba(180,83,9,0.2)', borderRadius: 10, padding: '10px 14px', marginBottom: '1rem', fontSize: 12, color: '#92400e' }}>
                  ⚠️ Technology provider only — not an FSP. Not financial advice. All figures below are for demonstration purposes.
                </div>

                {/* EA performance dashboard */}
                <div style={{ background: '#0f172a', borderRadius: 20, padding: '1.5rem 2rem', color: '#fff', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: 12 }}>
                    <div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 1, textTransform: 'uppercase' }}>AQI Bridge EA v4.40 · MT5</div>
                      <div style={{ fontSize: 20, fontWeight: 900, marginTop: 4 }}>Live Performance — Funded Account</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <div style={{ background: '#22c55e', color: '#fff', fontSize: 10, fontWeight: 800, padding: '4px 10px', borderRadius: 20 }}>● EA ACTIVE</div>
                      <div style={{ background: 'rgba(255,255,255,0.1)', color: '#94a3b8', fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>XAUUSD · US30 · NAS100</div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {[
                      { label: 'Win Rate', val: '68.4%', color: '#22c55e', sub: '579 / 847 trades' },
                      { label: 'Profit Factor', val: '2.31', color: '#f59e0b', sub: 'Gross P / Gross L' },
                      { label: 'Max Drawdown', val: '−3.2%', color: '#ef4444', sub: 'Within 5% limit' },
                      { label: 'Total Trades', val: '847', color: '#8b5cf6', sub: 'All-time executed' },
                    ].map(s => (
                      <div key={s.label} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: '14px 12px', borderTop: `2px solid ${s.color}` }}>
                        <div style={{ fontSize: 20, fontWeight: 900, color: s.color }}>{s.val}</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginTop: 4 }}>{s.label}</div>
                        <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>{s.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* Recent trades */}
                  <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '10px 16px', background: 'rgba(255,255,255,0.06)', fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
                      <span>Instrument</span><span>Direction</span><span>Result</span><span>P&L</span>
                    </div>
                    {[
                      { inst: 'XAUUSD', dir: 'SELL', result: 'WIN', pnl: '+$336', color: '#22c55e' },
                      { inst: 'US30', dir: 'BUY', result: 'WIN', pnl: '+$218', color: '#22c55e' },
                      { inst: 'NAS100', dir: 'BUY', result: 'LOSS', pnl: '−$87', color: '#ef4444' },
                      { inst: 'XAUUSD', dir: 'BUY', result: 'WIN', pnl: '+$174', color: '#22c55e' },
                    ].map((t, i) => (
                      <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: 12 }}>
                        <span style={{ color: '#fff', fontWeight: 700 }}>{t.inst}</span>
                        <span style={{ color: t.dir === 'SELL' ? '#ef4444' : '#22c55e', fontWeight: 700 }}>{t.dir}</span>
                        <span style={{ color: t.color, fontWeight: 700 }}>{t.result}</span>
                        <span style={{ color: t.color, fontWeight: 800 }}>{t.pnl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TradingView indicators */}
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: '1.5rem', marginBottom: '1rem' }}>
                  <div style={{ fontWeight: 800, fontSize: 15, color: '#0f172a', marginBottom: 14 }}>📊 Proprietary TradingView Indicators (9)</div>
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
                  <div style={{ marginTop: '1rem', padding: '10px 12px', background: '#fef3c7', borderRadius: 8, fontSize: 12, color: '#92400e', fontWeight: 600 }}>
                    🚀 Indicator subscription launching soon — R299–R999/month on TradingView
                  </div>
                </div>

                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '1rem 1.25rem', fontSize: 13, color: '#15803d', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 18 }}>📈</span>
                  <span><strong>This is Scope Indices.</strong> 12,367 lines of live trading code. 9 proprietary indicators. A live funded account. Technology built for serious traders — not signals, not advice, just tools.</span>
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
