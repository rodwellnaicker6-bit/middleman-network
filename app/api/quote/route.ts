import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

const NOTIFY_EMAIL = 'rodwellnaicker6@gmail.com';

function titleCase(s: string) {
  return s.replace(/-/g, ' ').replace(/\b\w/g, (c: string): string => c.toUpperCase());
}

async function sendEmail(subject: string, body: Record<string, string>) {
  try {
    await fetch(`https://formsubmit.co/ajax/${NOTIFY_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ _subject: subject, ...body }),
    });
  } catch { /* non-blocking */ }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { niche_slug, name, phone, email, field_values, consent } = body;

    if (!niche_slug || !name || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!consent) {
      return NextResponse.json({ error: 'Consent required' }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from('leads').insert({
      niche_slug,
      name,
      phone,
      email: email || null,
      field_values: field_values || {},
      consent: true,
    });

    if (error) throw error;

    await sendEmail(`🎯 TMN — New Quote: ${titleCase(niche_slug)}`, {
      Name: name,
      Phone: phone,
      Email: email || '—',
      Niche: titleCase(niche_slug),
      ...Object.fromEntries(
        Object.entries(field_values || {}).map(([k, v]) => [k, Array.isArray(v) ? v.join(', ') : String(v)])
      ),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Quote submit error:', err);
    return NextResponse.json({ error: 'Failed to submit quote request' }, { status: 500 });
  }
}
