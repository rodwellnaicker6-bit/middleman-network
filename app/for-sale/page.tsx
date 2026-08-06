import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bundle Sale — 20ft Sail Yacht + VW VR6 Project — R60,000 | Middleman Network',
  description: 'Selling as bundle: 20ft Vassisty sail yacht (sails, dinghy, 5HP Yamaha, mooring) + 2000 VW VR6 turbo project. R60,000. Durban. WhatsApp 062 713 5401.',
};

export default function ForSalePage() {
  const whatsappMsg = encodeURIComponent(
    "Hi Rodwell, I saw your bundle listing on Middleman Network — the sail yacht + VR6. I'm interested. Can we talk?"
  );
  const whatsappUrl = `https://wa.me/27627135401?text=${whatsappMsg}`;

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', color: '#fff', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: '#ef4444', color: '#fff', fontSize: 11, fontWeight: 800, padding: '4px 12px', borderRadius: 4, letterSpacing: 1, marginBottom: '1rem' }}>
            URGENT SALE — BUNDLE ONLY
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, margin: '0 0 0.75rem', lineHeight: 1.2 }}>
            20ft Sail Yacht + VW VR6 Project
          </h1>
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#34d399', margin: '0.5rem 0' }}>
            R60,000
          </div>
          <p style={{ color: '#94a3b8', margin: '0.5rem 0 0', fontSize: 16 }}>
            Durban · Cash or EFT · Not splitting · Serious buyers only
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.5rem', maxWidth: 900 }}>
        {/* CTA top */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', border: '2px solid #34d399', marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: '#0f172a' }}>Ready to buy? Contact Rodwell now</div>
            <div style={{ color: '#64748b', fontSize: 14, marginTop: 4 }}>WhatsApp or call · 062 713 5401 · Durban</div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            style={{ background: '#25d366', color: '#fff', fontWeight: 800, fontSize: 15, padding: '14px 28px', borderRadius: 10, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
            💬 WhatsApp Now
          </a>
        </div>

        {/* Two items */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>

          {/* Yacht */}
          <div style={{ background: '#fff', borderRadius: 16, padding: '1.75rem', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>⛵</div>
            <div style={{ background: '#eff6ff', color: '#1d4ed8', fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 4, display: 'inline-block', marginBottom: 12 }}>PACKAGE 1</div>
            <h2 style={{ fontWeight: 900, fontSize: 20, margin: '0 0 1rem', color: '#0f172a' }}>20ft Vassisty Sail Yacht</h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                '20ft fibreglass sailing yacht — Vassisty hull',
                'Full sail set included',
                'Inflatable dinghy included',
                '5HP Yamaha outboard motor included',
                'Mooring chain + mooring included',
                'Currently moored — buyer arranges transport',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: '#374151', fontSize: 14 }}>
                  <span style={{ color: '#34d399', fontWeight: 900, flexShrink: 0, marginTop: 1 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid #f1f5f9' }}>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Replacement value</div>
              <div style={{ fontWeight: 800, fontSize: 18, color: '#0f172a' }}>R100,000+</div>
            </div>
          </div>

          {/* VR6 */}
          <div style={{ background: '#fff', borderRadius: 16, padding: '1.75rem', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🚗</div>
            <div style={{ background: '#fef3c7', color: '#d97706', fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 4, display: 'inline-block', marginBottom: 12 }}>PACKAGE 2</div>
            <h2 style={{ fontWeight: 900, fontSize: 20, margin: '0 0 1rem', color: '#0f172a' }}>2000 VW Golf VR6 Project</h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                '2.8L VR6 — classic South African performance engine',
                'Turbo build in progress',
                'All parts included in sale',
                'Solid project car with massive potential',
                'Ideal for fast driver or show car build',
                'Priced to sell — not to profit',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: '#374151', fontSize: 14 }}>
                  <span style={{ color: '#f59e0b', fontWeight: 900, flexShrink: 0, marginTop: 1 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid #f1f5f9' }}>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Project value</div>
              <div style={{ fontWeight: 800, fontSize: 18, color: '#0f172a' }}>R45,000+</div>
            </div>
          </div>
        </div>

        {/* Deal summary */}
        <div style={{ background: '#0f172a', borderRadius: 16, padding: '2rem', marginBottom: '2rem', color: '#fff' }}>
          <h3 style={{ fontWeight: 900, fontSize: 20, margin: '0 0 1.25rem' }}>The Deal</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
            {[
              { label: 'Bundle price', value: 'R60,000', highlight: true },
              { label: 'Combined value', value: 'R145,000+', highlight: false },
              { label: 'Your saving', value: 'R85,000+', highlight: false },
              { label: 'Location', value: 'Durban, KZN', highlight: false },
              { label: 'Payment', value: 'Cash / EFT', highlight: false },
              { label: 'Splitting', value: 'No — bundle only', highlight: false },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: 11, color: '#64748b', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>{item.label}</div>
                <div style={{ fontWeight: 800, fontSize: 16, color: item.highlight ? '#34d399' : '#f1f5f9' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact section */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 900, fontSize: 22, margin: '0 0 0.5rem', color: '#0f172a' }}>Interested? Let&apos;s talk.</h3>
          <p style={{ color: '#64748b', margin: '0 0 1.5rem', fontSize: 15 }}>
            WhatsApp or call Rodwell directly. Cash sale, quick handover, no agents.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              style={{ background: '#25d366', color: '#fff', fontWeight: 800, fontSize: 15, padding: '14px 28px', borderRadius: 10, textDecoration: 'none' }}>
              💬 WhatsApp: 062 713 5401
            </a>
            <a href="tel:0627135401"
              style={{ background: '#0f172a', color: '#fff', fontWeight: 800, fontSize: 15, padding: '14px 28px', borderRadius: 10, textDecoration: 'none' }}>
              📞 Call Now
            </a>
          </div>
          <p style={{ color: '#94a3b8', fontSize: 12, marginTop: '1.25rem' }}>
            Listing via <strong>The Middleman Network</strong> — middleman-network.vercel.app
          </p>
        </div>
      </div>
    </div>
  );
}
