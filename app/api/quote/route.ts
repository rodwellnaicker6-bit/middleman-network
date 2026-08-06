import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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

    // Send notification email
    if (resend) {
      const details = Object.entries(field_values || {})
        .map(([k, v]) => `<tr><td style="padding:4px 8px;color:#64748b;font-size:13px;">${k}</td><td style="padding:4px 8px;font-size:13px;font-weight:600;">${Array.isArray(v) ? v.join(', ') : String(v)}</td></tr>`)
        .join('');

      await resend.emails.send({
        from: 'TMN Alerts <onboarding@resend.dev>',
        to: ['rodwellnaicker6@gmail.com'],
        subject: `🎯 New Quote Request — ${niche_slug.replace(/-/g, ' ').replace(/\b\w/g, (c: string): string => c.toUpperCase())}`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
            <div style="background:#0f172a;padding:24px;">
              <div style="display:inline-block;background:#f59e0b;color:#0f172a;font-weight:900;font-size:12px;padding:3px 8px;border-radius:4px;margin-bottom:12px;">TMN</div>
              <h1 style="color:#fff;margin:0;font-size:22px;">New Quote Request</h1>
              <p style="color:#94a3b8;margin:6px 0 0;font-size:14px;">via The Middleman Network</p>
            </div>
            <div style="padding:24px;">
              <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
                <tr style="background:#f8fafc;">
                  <td style="padding:8px;font-size:13px;color:#64748b;">Niche</td>
                  <td style="padding:8px;font-size:14px;font-weight:700;">${niche_slug.replace(/-/g, ' ').replace(/\b\w/g, (c: string): string => c.toUpperCase())}</td>
                </tr>
                <tr>
                  <td style="padding:8px;font-size:13px;color:#64748b;">Name</td>
                  <td style="padding:8px;font-size:14px;font-weight:700;">${name}</td>
                </tr>
                <tr style="background:#f8fafc;">
                  <td style="padding:8px;font-size:13px;color:#64748b;">Phone</td>
                  <td style="padding:8px;font-size:14px;font-weight:700;">${phone}</td>
                </tr>
                ${email ? `<tr><td style="padding:8px;font-size:13px;color:#64748b;">Email</td><td style="padding:8px;font-size:14px;">${email}</td></tr>` : ''}
                ${details}
              </table>
              <a href="https://supabase.com/dashboard/project/fpspyizdnnzoyiajdxcs/editor" style="display:inline-block;background:#f59e0b;color:#0f172a;font-weight:700;padding:10px 20px;border-radius:8px;font-size:14px;text-decoration:none;">View in Dashboard →</a>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Quote submit error:', err);
    return NextResponse.json({ error: 'Failed to submit quote request' }, { status: 500 });
  }
}
