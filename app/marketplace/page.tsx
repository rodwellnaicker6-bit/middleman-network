'use client';
import { useState } from 'react';
import Link from 'next/link';
import { INDUSTRIES, NICHES, formatZAR, TRANSACTION_TYPE_LABELS, getVentureForNiche } from '@/lib/data';

export default function MarketplacePage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filtered = NICHES.filter(n => {
    if (selectedIndustry !== 'all' && n.industry_slug !== selectedIndustry) return false;
    if (selectedType === 'provider' && n.party_type !== 'provider') return false;
    if (selectedType === 'supplier' && n.party_type !== 'supplier') return false;
    if (search && !n.name.toLowerCase().includes(search.toLowerCase()) && !n.description.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Header */}
      <div style={{ background: '#0f172a', color: '#fff', padding: '3rem 0' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, margin: '0 0 0.75rem' }}>Marketplace</h1>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: 16 }}>{NICHES.length} niches across {INDUSTRIES.length} industries — find exactly what you need.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.5rem' }}>
        {/* Filters */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', border: '1px solid #e2e8f0', marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search niches..."
            style={{ flex: 1, minWidth: 160, border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 14px', fontSize: 14, outline: 'none' }}
          />
          <select value={selectedIndustry} onChange={e => setSelectedIndustry(e.target.value)}
            style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 14px', fontSize: 14, background: '#fff', cursor: 'pointer', outline: 'none' }}>
            <option value="all">All Industries</option>
            {INDUSTRIES.map(i => <option key={i.slug} value={i.slug}>{i.icon} {i.name}</option>)}
          </select>
          <select value={selectedType} onChange={e => setSelectedType(e.target.value)}
            style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 14px', fontSize: 14, background: '#fff', cursor: 'pointer', outline: 'none' }}>
            <option value="all">All Types</option>
            <option value="provider">Service Providers</option>
            <option value="supplier">Suppliers</option>
          </select>
          <div style={{ color: '#94a3b8', fontSize: 13, whiteSpace: 'nowrap' }}>{filtered.length} result{filtered.length !== 1 ? 's' : ''}</div>
        </div>

        {/* Industry pills */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {['all', ...INDUSTRIES.map(i => i.slug)].map(slug => {
            const industry = INDUSTRIES.find(i => i.slug === slug);
            const isActive = selectedIndustry === slug;
            return (
              <button key={slug} onClick={() => setSelectedIndustry(slug)}
                style={{ padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: isActive ? 700 : 500, border: `1px solid ${isActive ? '#0f172a' : '#e2e8f0'}`, background: isActive ? '#0f172a' : '#fff', color: isActive ? '#fff' : '#475569', cursor: 'pointer' }}>
                {slug === 'all' ? 'All' : `${industry?.icon} ${industry?.name}`}
              </button>
            );
          })}
        </div>

        {/* Niches grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#94a3b8' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <p style={{ fontSize: 16 }}>No niches found. Try adjusting your filters.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {filtered.map(niche => {
              const industry = INDUSTRIES.find(i => i.slug === niche.industry_slug);
              const txLabel = TRANSACTION_TYPE_LABELS[niche.transaction_type];
              const venture = getVentureForNiche(niche.slug);
              return (
                <Link key={niche.slug} href={`/niche/${niche.slug}`} className="card-hover"
                  style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', border: '1px solid #e2e8f0', display: 'block' }}>
                  {/* Header row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div>
                      <div style={{ fontSize: 24 }}>{industry?.icon}</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                      <span style={{ background: txLabel.color + '20', color: txLabel.color, fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 4 }}>
                        {txLabel.label}
                      </span>
                      {niche.party_type === 'supplier' && (
                        <span style={{ background: '#f1f5f9', color: '#64748b', fontSize: 10, padding: '2px 7px', borderRadius: 4 }}>SUPPLIER</span>
                      )}
                    </div>
                  </div>

                  <h3 style={{ fontWeight: 800, fontSize: 16, margin: '0 0 8px', color: '#0f172a', lineHeight: 1.3 }}>{niche.name}</h3>
                  <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.6, margin: '0 0 1rem' }}>{niche.description.slice(0, 110)}...</p>

                  {/* Meta */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: 12 }}>
                    <div>
                      {niche.avg_job_value_zar > 0 ? (
                        <div style={{ fontSize: 13 }}><span style={{ color: '#94a3b8', fontSize: 11 }}>Avg job</span><br /><span style={{ fontWeight: 700, color: '#0f172a' }}>{formatZAR(niche.avg_job_value_zar)}</span></div>
                      ) : (
                        <span style={{ fontSize: 12, color: '#94a3b8' }}>Listing only</span>
                      )}
                    </div>
                    {venture && (
                      <span style={{ fontSize: 11, color: '#94a3b8', background: '#f8fafc', padding: '3px 8px', borderRadius: 4 }}>{venture.icon} {venture.name}</span>
                    )}
                    {niche.required_credential && (
                      <span style={{ fontSize: 10, color: '#f59e0b', background: 'rgba(245,158,11,0.1)', padding: '2px 6px', borderRadius: 4 }}>🔒 Verified only</span>
                    )}
                  </div>

                  <div style={{ color: '#0f172a', fontSize: 13, fontWeight: 700, marginTop: 12 }}>{txLabel.cta} →</div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
