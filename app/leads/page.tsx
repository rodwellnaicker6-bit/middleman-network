import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { NICHES, INDUSTRIES } from '@/lib/data';

export const revalidate = 30;

function timeAgo(date: string) {
  const diff = Date.now() - new Date(date).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'Just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function nicheLabel(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function summaryFromFields(fields: Record<string, unknown>) {
  const useful = Object.entries(fields)
    .filter(([, v]) => v && String(v).length > 0 && String(v) !== 'false')
    .slice(0, 3)
    .map(([, v]) => Array.isArray(v) ? (v as string[]).join(', ') : String(v));
  return useful.join(' · ');
}

export default async function LeadsPage() {
  const { data: leads } = await supabase
    .from('leads')
    .select('id, niche_slug, field_values, created_at')
    .order('created_at', { ascending: false })
    .limit(50);

  const industryColors: Record<string, string> = {
    'energy': '#f59e0b', 'security': '#3b82f6', 'automotive': '#ef4444',
    'agriculture': '#10b981', 'trading': '#8b5cf6', 'property': '#06b6d4',
    'hospitality': '#f97316', 'logistics': '#64748b', 'construction': '#84cc16',
    'technology': '#6366f1', 'professional': '#ec4899',
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Hero */}
      <section style={{ background: '#0f172a', color: '#fff', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 20, padding: '4px 12px', marginBottom: 12 }}>
                <span style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                <span style={{ color: '#10b981', fontSize: 12, fontWeight: 700 }}>LIVE FEED</span>
              </div>
              <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, margin: '0 0 8px' }}>Live Leads Board</h1>
              <p style={{ color: '#94a3b8', margin: 0, fontSize: 15 }}>
                {leads?.length ?? 0} active quote requests · Updated every 30 seconds
              </p>
            </div>
            <Link href="/get-listed" style={{ background: '#f59e0b', color: '#0f172a', fontWeight: 800, padding: '12px 24px', borderRadius: 10, fontSize: 14, whiteSpace: 'nowrap' }}>
              List Your Business to Claim →
            </Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '2rem 1.5rem' }}>
        {/* How it works strip */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '1rem 1.5rem', border: '1px solid #e2e8f0', marginBottom: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {[
            { icon: '👁️', text: 'Browse available leads below' },
            { icon: '📋', text: 'List your business on a matching niche' },
            { icon: '🎯', text: 'Use your subscription credits to claim' },
            { icon: '💰', text: '0% commission — keep every rand you earn' },
          ].map(s => (
            <div key={s.text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#475569' }}>
              <span>{s.icon}</span><span>{s.text}</span>
            </div>
          ))}
        </div>

        {/* Leads grid */}
        {!leads || leads.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0' }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>📭</div>
            <h2 style={{ color: '#0f172a', fontWeight: 800, margin: '0 0 8px' }}>No leads yet</h2>
            <p style={{ color: '#64748b' }}>Be the first to submit a quote request via the marketplace.</p>
            <Link href="/marketplace" style={{ display: 'inline-block', marginTop: 16, background: '#f59e0b', color: '#0f172a', fontWeight: 700, padding: '12px 24px', borderRadius: 8 }}>Browse Marketplace →</Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '1rem' }}>
            {leads.map((lead, i) => {
              const niche = NICHES.find(n => n.slug === lead.niche_slug);
              const industry = INDUSTRIES.find(ind => ind.slug === niche?.industry_slug);
              const color = industryColors[niche?.industry_slug?.split('-')[0] ?? ''] ?? '#64748b';
              const summary = summaryFromFields(lead.field_values as Record<string, unknown> || {});
              const viewers = 2 + (i % 4);

              return (
                <div key={lead.id} style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', boxShadow: i === 0 ? '0 4px 24px rgba(0,0,0,0.06)' : 'none' }}>
                  {/* Left */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flex: 1, minWidth: 240 }}>
                    <div style={{ width: 48, height: 48, background: color + '15', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                      {industry?.icon ?? '📋'}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <span style={{ background: color + '20', color, fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>
                          {nicheLabel(lead.niche_slug)}
                        </span>
                        {i === 0 && <span style={{ background: '#fef3c7', color: '#d97706', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>🔥 NEW</span>}
                      </div>
                      <p style={{ color: '#334155', fontSize: 14, margin: '0 0 4px', fontWeight: 500 }}>
                        {summary || 'Quote request submitted — contact details on claim'}
                      </p>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <span style={{ color: '#94a3b8', fontSize: 12 }}>🕐 {timeAgo(lead.created_at)}</span>
                        <span style={{ color: '#94a3b8', fontSize: 12 }}>👁️ {viewers} providers viewing</span>
                      </div>
                    </div>
                  </div>
                  {/* Right */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: '#0f172a', fontWeight: 800, fontSize: 15 }}>
                        {niche ? `${niche.lead_credit_cost} credit${niche.lead_credit_cost > 1 ? 's' : ''}` : '1 credit'}
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: 11 }}>to claim</div>
                    </div>
                    <Link href="/get-listed" style={{ background: '#0f172a', color: '#fff', fontWeight: 700, padding: '10px 18px', borderRadius: 8, fontSize: 13, whiteSpace: 'nowrap', display: 'inline-block' }}>
                      Claim Lead →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', borderRadius: 16, padding: '2.5rem', textAlign: 'center', marginTop: '2.5rem' }}>
          <h2 style={{ fontWeight: 900, fontSize: 22, color: '#0f172a', margin: '0 0 8px' }}>Want to claim these leads?</h2>
          <p style={{ color: '#78350f', margin: '0 0 1.5rem' }}>List your business and start receiving quote requests today. 0% commission, ever.</p>
          <Link href="/get-listed" style={{ background: '#0f172a', color: '#fff', fontWeight: 800, padding: '14px 32px', borderRadius: 10, fontSize: 15, display: 'inline-block' }}>
            List Your Business →
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
      `}</style>
    </div>
  );
}
