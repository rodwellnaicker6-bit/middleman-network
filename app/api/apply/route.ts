import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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

    // Send notification email
    if (resend) {
      await resend.emails.send({
        from: 'TMN Alerts <onboarding@resend.dev>',
        to: ['rodwellnaicker6@gmail.com'],
        subject: `🏢 New Business Application — ${business_name} (${plan_slug?.toUpperCase()})`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
            <div style="background:#0f172a;padding:24px;">
              <div style="display:inline-block;background:#f59e0b;color:#0f172a;font-weight:900;font-size:12px;padding:3px 8px;border-radius:4px;margin-bottom:12px;">TMN</div>
              <h1 style="color:#fff;margin:0;font-size:22px;">New Business Application</h1>
              <p style="color:#94a3b8;margin:6px 0 0;font-size:14px;">Someone wants to list on The Middleman Network</p>
            </div>
            <div style="padding:24px;">
              <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
                <tr style="background:#f8fafc;">
                  <td style="padding:8px;font-size:13px;color:#64748b;">Business</td>
                  <td style="padding:8px;font-size:14px;font-weight:700;">${business_name}</td>
                </tr>
                <tr>
                  <td style="padding:8px;font-size:13px;color:#64748b;">Contact</td>
                  <td style="padding:8px;font-size:14px;font-weight:700;">${name}</td>
                </tr>
                <tr style="background:#f8fafc;">
                  <td style="padding:8px;font-size:13px;color:#64748b;">Email</td>
                  <td style="padding:8px;font-size:14px;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding:8px;font-size:13px;color:#64748b;">Phone</td>
                  <td style="padding:8px;font-size:14px;font-weight:700;">${phone}</td>
                </tr>
                <tr style="background:#f8fafc;">
                  <td style="padding:8px;font-size:13px;color:#64748b;">Niche</td>
                  <td style="padding:8px;font-size:14px;">${niche_slug.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())}</td>
                </tr>
                <tr>
                  <td style="padding:8px;font-size:13px;color:#64748b;">Plan</td>
                  <td style="padding:8px;"><span style="background:#f59e0b;color:#0f172a;font-size:12px;font-weight:700;padding:2px 8px;border-radius:4px;">${(plan_slug || 'growth').toUpperCase()}</span></td>
                </tr>
                ${message ? `<tr style="background:#f8fafc;"><td style="padding:8px;font-size:13px;color:#64748b;vertical-align:top;">Message</td><td style="padding:8px;font-size:14px;">${message}</td></tr>` : ''}
              </table>
              <a href="https://supabase.com/dashboard/project/fpspyizdnnzoyiajdxcs/editor" style="display:inline-block;background:#f59e0b;color:#0f172a;font-weight:700;padding:10px 20px;border-radius:8px;font-size:14px;text-decoration:none;">Review Application →</a>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Apply submit error:', err);
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}
