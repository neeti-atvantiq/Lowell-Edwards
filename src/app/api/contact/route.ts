import { NextRequest, NextResponse } from 'next/server';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { sendEmail } from '@/lib/ses';
import { renderContactEmail, type ContactPayload } from '@/lib/email-templates';

export const runtime = 'nodejs';

type RequestBody = Partial<ContactPayload> & { recaptchaToken?: string };

function getClientIp(req: NextRequest): string | undefined {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0]?.trim();
  return req.headers.get('x-real-ip') ?? undefined;
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: NextRequest) {
  let body: RequestBody;
  try {
    body = (await req.json()) as RequestBody;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const appointmentDate = (body.appointmentDate ?? '').trim();
  const appointmentTime = (body.appointmentTime ?? '').trim();
  const message = (body.message ?? '').trim();
  const token = body.recaptchaToken ?? '';

  if (!name || !email || !phone || !appointmentDate || !appointmentTime || !message) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Invalid email address' }, { status: 400 });
  }

  const verification = await verifyRecaptcha({
    token,
    expectedAction: 'contact',
    remoteIp: getClientIp(req),
  });
  if (!verification.ok) {
    return NextResponse.json({ ok: false, error: verification.reason }, { status: 400 });
  }

  const { subject, html, text } = renderContactEmail({ name, email, phone, appointmentDate, appointmentTime, message });

  try {
    await sendEmail({ subject, html, text, replyTo: email });
  } catch (err) {
    console.error('SES send failed (contact):', err);
    return NextResponse.json({ ok: false, error: 'Failed to send message' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
