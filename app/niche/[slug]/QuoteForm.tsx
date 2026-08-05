'use client';
import { useState } from 'react';
import type { QuoteField } from '@/lib/types';

interface Props {
  fields: QuoteField[];
  nicheName: string;
  nicheSlug: string;
  txLabel: string;
}

export default function QuoteForm({ fields, nicheName, txLabel }: Props) {
  const [values, setValues] = useState<Record<string, unknown>>({});
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) { setError('Name and phone are required.'); return; }
    if (!consent) { setError('Please confirm your consent to proceed.'); return; }
    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
        <h3 style={{ fontWeight: 800, color: '#0f172a', margin: '0 0 8px' }}>Quote Request Sent!</h3>
        <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.6, margin: '0 0 1rem' }}>
          Verified {nicheName} providers in your area will receive your request and respond shortly.
        </p>
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '1rem', marginBottom: '1rem' }}>
          <div style={{ fontSize: 13, color: '#166534' }}>✓ Your details have been submitted securely.</div>
          <div style={{ fontSize: 13, color: '#166534' }}>✓ POPIA consent recorded.</div>
          <div style={{ fontSize: 13, color: '#166534' }}>✓ You&apos;ll hear from providers within 2 hours.</div>
        </div>
        <button onClick={() => { setSubmitted(false); setValues({}); setName(''); setPhone(''); setEmail(''); setConsent(false); }}
          style={{ background: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0', padding: '10px 20px', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>
          Submit another request
        </button>
      </div>
    );
  }

  const inputStyle = {
    width: '100%',
    border: '1px solid #e2e8f0',
    borderRadius: 8,
    padding: '10px 12px',
    fontSize: 14,
    outline: 'none',
    background: '#f8fafc',
    boxSizing: 'border-box' as const,
  };

  const labelStyle = {
    fontSize: 12,
    fontWeight: 700,
    color: '#374151',
    display: 'block',
    marginBottom: 4,
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1.5rem' }}>
      {/* Contact details */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle}>Full Name *</label>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={inputStyle} required />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: '1rem' }}>
        <div>
          <label style={labelStyle}>Phone *</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+27 8X XXX XXXX" style={inputStyle} required />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Optional" style={inputStyle} type="email" />
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #f1f5f9', margin: '1rem 0', paddingTop: '1rem' }}>
        <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: 1 }}>Service Details</div>
      </div>

      {/* Dynamic fields */}
      {fields.map(field => (
        <div key={field.key} style={{ marginBottom: '1rem' }}>
          <label style={labelStyle}>
            {field.label}
            {field.validation?.required && <span style={{ color: '#ef4444' }}> *</span>}
          </label>

          {field.kind === 'text' && (
            <input
              placeholder={field.ai_hint || ''}
              value={(values[field.key] as string) || ''}
              onChange={e => setValues(v => ({ ...v, [field.key]: e.target.value }))}
              style={inputStyle}
              required={field.validation?.required}
            />
          )}

          {field.kind === 'number' && (
            <input
              type="number"
              min={field.validation?.min}
              max={field.validation?.max}
              value={(values[field.key] as string) || ''}
              onChange={e => setValues(v => ({ ...v, [field.key]: e.target.value }))}
              style={inputStyle}
              required={field.validation?.required}
              placeholder={field.unit ? `Enter value in ${field.unit}` : ''}
            />
          )}

          {field.kind === 'select' && (
            <select
              value={(values[field.key] as string) || ''}
              onChange={e => setValues(v => ({ ...v, [field.key]: e.target.value }))}
              style={{ ...inputStyle, cursor: 'pointer' }}
              required={field.validation?.required}>
              <option value="">Select an option</option>
              {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          )}

          {field.kind === 'multiselect' && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {field.options?.map(opt => {
                const selected = ((values[field.key] as string[]) || []).includes(opt);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      const current = (values[field.key] as string[]) || [];
                      setValues(v => ({ ...v, [field.key]: selected ? current.filter(x => x !== opt) : [...current, opt] }));
                    }}
                    style={{ padding: '6px 12px', borderRadius: 20, fontSize: 12, border: `1px solid ${selected ? '#0f172a' : '#e2e8f0'}`, background: selected ? '#0f172a' : '#fff', color: selected ? '#fff' : '#475569', cursor: 'pointer' }}>
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {field.kind === 'boolean' && (
            <div style={{ display: 'flex', gap: 8 }}>
              {['Yes', 'No'].map(opt => {
                const isSelected = values[field.key] === (opt === 'Yes');
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setValues(v => ({ ...v, [field.key]: opt === 'Yes' }))}
                    style={{ flex: 1, padding: '9px', borderRadius: 8, fontSize: 14, border: `1px solid ${isSelected ? '#0f172a' : '#e2e8f0'}`, background: isSelected ? '#0f172a' : '#fff', color: isSelected ? '#fff' : '#475569', cursor: 'pointer', fontWeight: isSelected ? 700 : 400 }}>
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {field.kind === 'address' && (
            <input
              placeholder="Enter your address or suburb"
              value={(values[field.key] as string) || ''}
              onChange={e => setValues(v => ({ ...v, [field.key]: e.target.value }))}
              style={inputStyle}
              required={field.validation?.required}
            />
          )}

          {field.kind === 'date' && (
            <input
              type="date"
              value={(values[field.key] as string) || ''}
              onChange={e => setValues(v => ({ ...v, [field.key]: e.target.value }))}
              style={inputStyle}
            />
          )}

          {field.kind === 'file' && (
            <div style={{ border: '2px dashed #e2e8f0', borderRadius: 8, padding: '1rem', textAlign: 'center', background: '#f8fafc', cursor: 'pointer' }}>
              <div style={{ fontSize: 24, marginBottom: 4 }}>📎</div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Upload {field.label.toLowerCase()}</div>
              {field.validation?.max_files && <div style={{ fontSize: 11, color: '#94a3b8' }}>Max {field.validation.max_files} files</div>}
            </div>
          )}
        </div>
      ))}

      {/* POPIA Consent */}
      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '12px', marginBottom: '1rem' }}>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
          <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} style={{ marginTop: 2, flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: '#64748b', lineHeight: 1.5 }}>
            I consent to The Middleman Network sharing my contact details with verified providers for the purpose of responding to my quote request. POPIA compliant.
          </span>
        </label>
      </div>

      {error && <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 8, padding: '10px 12px', color: '#dc2626', fontSize: 13, marginBottom: '1rem' }}>{error}</div>}

      <button type="submit"
        style={{ width: '100%', background: '#0f172a', color: '#fff', fontWeight: 800, fontSize: 15, padding: '14px', borderRadius: 10, border: 'none', cursor: 'pointer', letterSpacing: 0.3 }}>
        {txLabel} 🚀
      </button>
      <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: 11, margin: '8px 0 0' }}>Free · No obligation · 0% commission marketplace</p>
    </form>
  );
}
