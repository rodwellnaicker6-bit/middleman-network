import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Apply submit error:', err);
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}
