import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Quote submit error:', err);
    return NextResponse.json({ error: 'Failed to submit quote request' }, { status: 500 });
  }
}
