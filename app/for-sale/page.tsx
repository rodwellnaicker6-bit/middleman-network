'use client';
import { useState } from 'react';

const LISTINGS = [
  {
    id: 'bass-boat',
    emoji: '⛵',
    badge: 'BOAT FOR SALE',
    badgeColor: '#0ea5e9',
    title: '4.5m Bass Boat — Fully Rigged',
    price: 'R95,000',
    tag: 'Negotiable',
    location: 'Durban, KZN',
    condition: 'Excellent',
    specs: [
      '4.5m fibreglass bass boat',
      '75HP Suzuki 4-stroke outboard',
      'Live bait well + rod holders',
      'Depth finder / fish finder fitted',
      'Road-registered trailer included',
      'Full set of safety equipment',
      'Recently serviced — runs perfectly',
      'Selling to fund next project',
    ],
    whatsapp: `Hi, I'm interested in the 4.5m Bass Boat (R95,000) listed on TMN. Can we chat?`,
  },
  {
    id: 'vr6-project',
    emoji: '🏎️',
    badge: 'VR6 PROJECT FOR SALE',
    badgeColor: '#ef4444',
    title: 'VW Golf 3 — 2.8L VR6 Completed Build',
    price: 'R75,000',
    tag: 'Negotiable',
    location: 'Durban, KZN',
    condition: 'Excellent — completed build',
    specs: [
      '2.8L VR6 naturally aspirated',
      'Full VR6 swap — professionally built',
      'Stage 1 software tune',
      'Upgraded exhaust manifold',
      'Solid suspension refresh',
      'Fresh timing chains & tensioners',
      'Strong healthy engine — no issues',
      'Serious buyers only — can demo',
    ],
    whatsapp: `Hi, I'm interested in the VW Golf 3 VR6 project (R75,000) listed on TMN. Can we chat?`,
  },
];

export default function ForSalePage() {
  const [enquiry, setEnquiry] = useState<{ id: string; name: string; phone: string; message: string } | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function sendEnquiry() {
    if (!enquiry) return;
    setSending(true);
    const listing = LISTINGS.find(l => l.id === enquiry.id);
    try {
      await fetch('https://formsubmit.co/ajax/rodwellnaicker6@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `💰 TMN For Sale Enquiry — ${listing?.title}`,
          Item: listing?.title,
          Price: listing?.price,
          'Buyer Name': enquiry.name,
          'Buyer Phone': enquiry.phone,
          Message: enquiry.message || '—',
        }),
      });
      setSent(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Hero */}
      <section style={{ background: '#0f172a', color: '#fff', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 20, padding: '4px 12px', marginBottom: 16 }}>
            <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Private Listings</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, margin: '0 0 1rem' }}>Items For Sale</h1>
          <p style={{ color: '#94a3b8', fontSize: 16, maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
            Two quality items available now. Both priced to move — serious buyers only. Located in Durban, KZN.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {LISTINGS.map(listing => (
            <div key={listing.id} style={{ background: '#fff', borderRadius: 20, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
              {/* Banner */}
              <div style={{ background: `linear-gradient(135deg, ${listing.badgeColor}22 0%, #0f172a 100%)`, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ fontSize: 80 }}>{listing.emoji}</div>
                <div style={{ position: 'absolute', top: 16, left: 16, background: listing.badgeColor, color: '#fff', fontSize: 11, fontWeight: 800, padding: '4px 10px', borderRadius: 6 }}>
                  {listing.badge}
                </div>
                <div style={{ position: 'absolute', top: 16, right: 16, background: '#f59e0b', color: '#0f172a', fontSize: 12, fontWeight: 800, padding: '4px 10px', borderRadius: 6 }}>
                  {listing.tag}
                </div>
              </div>

              <div style={{ padding: '1.75rem' }}>
                <h2 style={{ fontWeight: 900, fontSize: 20, color: '#0f172a', margin: '0 0 8px', lineHeight: 1.2 }}>{listing.title}</h2>
                <div style={{ fontWeight: 900, fontSize: 28, color: '#0f172a', marginBottom: 16 }}>{listing.price}</div>

                <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
                  <span style={{ background: '#f0fdf4', color: '#166534', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 6 }}>✓ {listing.condition}</span>
                  <span style={{ background: '#f8fafc', color: '#64748b', fontSize: 12, padding: '4px 10px', borderRadius: 6 }}>📍 {listing.location}</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem' }}>
                  {listing.specs.map(spec => (
                    <li key={spec} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '6px 0', borderBottom: '1px solid #f8fafc', fontSize: 14, color: '#334155' }}>
                      <span style={{ color: '#10b981', flexShrink: 0, marginTop: 1 }}>✓</span>{spec}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <button
                    onClick={() => { setEnquiry({ id: listing.id, name: '', phone: '', message: '' }); setSent(false); }}
                    style={{ width: '100%', background: '#0f172a', color: '#fff', fontWeight: 800, fontSize: 15, padding: '14px', borderRadius: 10, border: 'none', cursor: 'pointer' }}>
                    📩 Enquire Now
                  </button>
                  <a
                    href={`https://wa.me/27627135401?text=${encodeURIComponent(listing.whatsapp)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{ display: 'block', background: '#25d366', color: '#fff', fontWeight: 700, fontSize: 14, padding: '12px', borderRadius: 10, textAlign: 'center' }}>
                    💬 WhatsApp Seller
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '1.5rem 2rem', border: '1px solid #e2e8f0', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          {['📍 Durban, KZN', '✅ Available to view', '💬 WhatsApp preferred', '🕐 Responds within a few hours'].map(s => (
            <span key={s} style={{ fontSize: 13, color: '#475569' }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Enquiry modal */}
      {enquiry && (
        <div
          onClick={e => { if (e.target === e.currentTarget) setEnquiry(null); }}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ background: '#fff', borderRadius: 20, padding: '2rem', maxWidth: 440, width: '100%', boxShadow: '0 24px 80px rgba(0,0,0,0.25)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontWeight: 900, color: '#0f172a', margin: '0 0 8px' }}>Enquiry Sent!</h3>
                <p style={{ color: '#64748b', marginBottom: 20 }}>The seller will contact you within 24 hours.</p>
                <button onClick={() => setEnquiry(null)} style={{ background: '#0f172a', color: '#fff', fontWeight: 700, padding: '12px 28px', borderRadius: 8, border: 'none', cursor: 'pointer' }}>Done</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontWeight: 900, fontSize: 18, color: '#0f172a', margin: '0 0 4px' }}>Make an Enquiry</h3>
                <p style={{ color: '#64748b', fontSize: 13, margin: '0 0 1.5rem' }}>{LISTINGS.find(l => l.id === enquiry.id)?.title}</p>

                <div style={{ marginBottom: 12 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 4 }}>Your Name *</label>
                  <input value={enquiry.name} onChange={e => setEnquiry(q => q && ({ ...q, name: e.target.value }))}
                    placeholder="Full name"
                    style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', outline: 'none', background: '#f8fafc' }} />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 4 }}>Phone Number *</label>
                  <input value={enquiry.phone} onChange={e => setEnquiry(q => q && ({ ...q, phone: e.target.value }))}
                    placeholder="+27 8X XXX XXXX"
                    style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', outline: 'none', background: '#f8fafc' }} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 4 }}>Message (optional)</label>
                  <textarea value={enquiry.message} onChange={e => setEnquiry(q => q && ({ ...q, message: e.target.value }))}
                    placeholder="Any questions? Best time to call? Cash buyer?"
                    rows={3}
                    style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', outline: 'none', resize: 'vertical', background: '#f8fafc' }} />
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
                  <button onClick={() => setEnquiry(null)}
                    style={{ flex: 1, background: '#f8fafc', color: '#64748b', fontWeight: 700, padding: '12px', borderRadius: 8, border: '1px solid #e2e8f0', cursor: 'pointer', fontSize: 14 }}>
                    Cancel
                  </button>
                  <button onClick={sendEnquiry} disabled={sending || !enquiry.name.trim() || !enquiry.phone.trim()}
                    style={{ flex: 2, background: (!enquiry.name.trim() || !enquiry.phone.trim()) ? '#94a3b8' : '#0f172a', color: '#fff', fontWeight: 800, padding: '12px', borderRadius: 8, border: 'none', cursor: (!enquiry.name.trim() || !enquiry.phone.trim()) ? 'not-allowed' : 'pointer', fontSize: 14 }}>
                    {sending ? 'Sending...' : 'Send Enquiry →'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
