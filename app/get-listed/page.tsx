'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PLANS, INDUSTRIES, NICHES } from '@/lib/data';

export default function GetListedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', niche: '', plan: 'growth', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setLoading(true);
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          business_name: form.business,
          email: form.email,
          phone: form.phone,
          niche_slug: form.niche,
          plan_slug: form.plan,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const providerPlans = PLANS.filter(p => p.party_type === 'provider');

  if (submitted) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: '3rem', maxWidth: 500, textAlign: 'center', border: '1px solid #e2e8f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
          <h2 style={{ fontWeight: 900, color: '#0f172a', margin: '0 0 1rem', fontSize: 24 }}>Application Received!</h2>
          <p style={{ color: '#64748b', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
            Thank you, <strong>{form.name}</strong>. We&apos;ll review <strong>{form.business}</strong>&apos;s application and be in touch within 24 hours at <strong>{form.email}</strong>.
          </p>
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: 13, color: '#166534', marginBottom: 4 }}>✓ Application confirmed</div>
            <div style={{ fontSize: 13, color: '#166534', marginBottom: 4 }}>✓ Account setup starts within 24 hours</div>
            <div style={{ fontSize: 13, color: '#166534' }}>✓ Selected plan: {form.plan.toUpperCase()}</div>
          </div>
          <Link href="/" style={{ display: 'inline-block', background: '#0f172a', color: '#fff', padding: '12px 28px', borderRadius: 10, fontWeight: 700 }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Hero */}
      <section style={{ background: '#0f172a', color: '#fff', padding: '3.5rem 0' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, margin: '0 0 1rem' }}>List Your Business</h1>
          <p style={{ color: '#94a3b8', fontSize: 16, maxWidth: 560, lineHeight: 1.7, margin: 0 }}>
            Join South Africa&apos;s fastest-growing B2B marketplace. Get qualified leads delivered via subscription credits — no per-lead commission, ever.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 1.5rem' }}>
        {/* Why join */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          {[
            { icon: '📊', title: '0% Commission', desc: 'We never take a cut of your jobs. Pay a flat monthly subscription only.' },
            { icon: '🎯', title: 'Qualified Leads', desc: 'AI-screened quote requests matched to your niche and region.' },
            { icon: '⭐', title: 'Verified Badge', desc: 'Get a verification badge on Growth+ plans. Stand out from unverified competitors.' },
            { icon: '🤖', title: 'AI Quote Engine', desc: 'Your customers get an AI cost estimate before you even respond — better-informed leads.' },
          ].map(item => (
            <div key={item.title} style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>{item.icon}</div>
              <h3 style={{ fontWeight: 800, color: '#0f172a', margin: '0 0 8px', fontSize: 16 }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing plans */}
        <div id="plans" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontWeight: 900, fontSize: 24, color: '#0f172a', margin: '0 0 0.5rem' }}>Choose a Plan</h2>
          <p style={{ color: '#64748b', margin: '0 0 2rem' }}>Annual billing saves 2 months. All prices exclude VAT.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem' }}>
            {providerPlans.map(plan => (
              <div key={plan.slug}
                onClick={() => setForm(f => ({ ...f, plan: plan.slug }))}
                style={{ background: form.plan === plan.slug ? '#0f172a' : '#fff', border: `2px solid ${form.plan === plan.slug ? '#f59e0b' : '#e2e8f0'}`, borderRadius: 16, padding: '1.75rem', cursor: 'pointer', position: 'relative', transition: 'all 0.15s' }}>
                {plan.highlight && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#f59e0b', color: '#0f172a', fontSize: 11, fontWeight: 800, padding: '3px 12px', borderRadius: 10, whiteSpace: 'nowrap' }}>MOST POPULAR</div>
                )}
                <h3 style={{ fontWeight: 800, fontSize: 18, margin: '0 0 4px', color: form.plan === plan.slug ? '#fff' : '#0f172a' }}>{plan.name}</h3>
                <div style={{ color: '#f59e0b', fontWeight: 900, fontSize: 28 }}>R{plan.price_monthly.toLocaleString()}</div>
                <div style={{ color: form.plan === plan.slug ? '#94a3b8' : '#64748b', fontSize: 12, marginBottom: 16 }}>/month excl. VAT<br /><span style={{ fontSize: 11 }}>R{plan.price_annual.toLocaleString()} annual (save 2 mo)</span></div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem' }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ fontSize: 13, color: form.plan === plan.slug ? '#e2e8f0' : '#475569', marginBottom: 6, display: 'flex', gap: 6 }}>
                      <span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <div style={{ textAlign: 'center', padding: '8px 0', borderRadius: 8, background: form.plan === plan.slug ? '#f59e0b' : '#f1f5f9', color: form.plan === plan.slug ? '#0f172a' : '#64748b', fontWeight: 700, fontSize: 13 }}>
                  {form.plan === plan.slug ? '✓ Selected' : 'Select'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application form */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '2rem', alignItems: 'start' }}>
          <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 20, padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontWeight: 900, fontSize: 22, color: '#0f172a', margin: '0 0 1.5rem' }}>Business Application</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 4 }}>Your Name *</label>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required
                  style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', background: '#f8fafc', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 4 }}>Business Name *</label>
                <input value={form.business} onChange={e => setForm(f => ({ ...f, business: e.target.value }))} required
                  style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', background: '#f8fafc', outline: 'none' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 4 }}>Email Address *</label>
                <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required
                  style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', background: '#f8fafc', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 4 }}>Phone Number *</label>
                <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required
                  style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', background: '#f8fafc', outline: 'none' }} />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 4 }}>Primary Service Niche *</label>
              <select value={form.niche} onChange={e => setForm(f => ({ ...f, niche: e.target.value }))} required
                style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', background: '#f8fafc', outline: 'none', cursor: 'pointer' }}>
                <option value="">Select your primary niche</option>
                {INDUSTRIES.map(ind => (
                  <optgroup key={ind.slug} label={`${ind.icon} ${ind.name}`}>
                    {NICHES.filter(n => n.industry_slug === ind.slug && n.party_type === 'provider').map(n => (
                      <option key={n.slug} value={n.slug}>{n.name}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 4 }}>Selected Plan</label>
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '10px 14px', fontSize: 14, color: '#166534', fontWeight: 700 }}>
                ✓ {providerPlans.find(p => p.slug === form.plan)?.name} — R{providerPlans.find(p => p.slug === form.plan)?.price_monthly.toLocaleString()}/month
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 4 }}>Tell us about your business</label>
              <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={4}
                placeholder="What services do you offer? Which regions do you cover? Do you have any credentials or licences?"
                style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', background: '#f8fafc', outline: 'none', resize: 'vertical' }} />
            </div>

            {submitError && (
              <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 8, padding: '10px 12px', color: '#dc2626', fontSize: 13, marginBottom: '1rem' }}>{submitError}</div>
            )}
            <button type="submit" disabled={loading}
              style={{ width: '100%', background: loading ? '#94a3b8' : '#f59e0b', color: '#0f172a', fontWeight: 900, fontSize: 16, padding: '14px', borderRadius: 10, border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}>
              {loading ? 'Submitting...' : 'Submit Application →'}
            </button>
            <p style={{ textAlign: 'center', fontSize: 12, color: '#94a3b8', margin: '10px 0 0' }}>We&apos;ll be in touch within 24 hours. No payment required to apply.</p>
          </form>

          {/* Sidebar */}
          <div>
            <div style={{ background: '#0f172a', borderRadius: 16, padding: '1.75rem', color: '#fff', marginBottom: '1.5rem' }}>
              <h3 style={{ fontWeight: 800, fontSize: 18, margin: '0 0 1rem' }}>What happens next?</h3>
              {[
                { step: '1', title: 'Review', desc: 'We review your application within 24 hours.' },
                { step: '2', title: 'Verify', desc: 'We verify your credentials and business details.' },
                { step: '3', title: 'Activate', desc: 'Your profile goes live and you start receiving leads.' },
                { step: '4', title: 'Grow', desc: 'Claim leads, send AI-powered quotes, close deals.' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: 12, marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: '#f59e0b', color: '#0f172a', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 13, flexShrink: 0 }}>{item.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: '#94a3b8' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#fff', borderRadius: 16, padding: '1.75rem', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontWeight: 800, fontSize: 16, margin: '0 0 1rem', color: '#0f172a' }}>Have questions?</h3>
              <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.6, margin: '0 0 1rem' }}>Our team is available Monday–Friday 8am–5pm SAST.</p>
              <a href="mailto:info@middlemannetwork.co.za"
                style={{ display: 'block', background: '#f8fafc', border: '1px solid #e2e8f0', color: '#0f172a', padding: '10px 14px', borderRadius: 8, textAlign: 'center', fontWeight: 700, fontSize: 13, marginBottom: 8 }}>
                📧 info@middlemannetwork.co.za
              </a>
              <a href="https://wa.me/27000000000" target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', background: '#25d366', color: '#fff', padding: '10px 14px', borderRadius: 8, textAlign: 'center', fontWeight: 700, fontSize: 13 }}>
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
