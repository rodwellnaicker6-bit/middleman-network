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
    const { name, business_name, email, phone, niche_slug, plan_slug, message } = body;

    if (!name || !business_name || !email || !phone || !niche_slug) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from('provider_applications').insert({
      name,
      business_name,
      email,
      phone,
      niche_slug,
      plan_slug: plan_slug || 'growth',
      message: message || null,
    });

    if (error) throw error;

    await sendEmail(`🏢 TMN — New Application: ${business_name} (${(plan_slug || 'growth').toUpperCase()})`, {
      Business: business_name,
      Contact: name,
      Email: email,
      Phone: phone,
      Niche: titleCase(niche_slug),
      Plan: (plan_slug || 'growth').toUpperCase(),
      ...(message ? { Message: message } : {}),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Apply submit error:', err);
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}
