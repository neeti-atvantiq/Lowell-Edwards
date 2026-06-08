import { NextRequest, NextResponse } from 'next/server';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { sendEmail } from '@/lib/ses';
import { renderQuoteEmail, type QuotePayload } from '@/lib/email-templates';

export const runtime = 'nodejs';

type RequestBody = Partial<QuotePayload> & { recaptchaToken?: string };

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

  const payload: QuotePayload = {
    first: (body.first ?? '').trim(),
    last: (body.last ?? '').trim(),
    company: (body.company ?? '').trim(),
    email: (body.email ?? '').trim(),
    phone: (body.phone ?? '').trim(),
    buildingType: (body.buildingType ?? '').trim(),
    units: (body.units ?? '').trim(),
    priority: (body.priority ?? '').trim(),
    notes: (body.notes ?? '').trim(),
  };
  const token = body.recaptchaToken ?? '';

  if (!payload.first || !payload.last || !payload.email || !payload.phone) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
  }
  if (!isEmail(payload.email)) {
    return NextResponse.json({ ok: false, error: 'Invalid email address' }, { status: 400 });
  }

  const verification = await verifyRecaptcha({
    token,
    expectedAction: 'quote',
    remoteIp: getClientIp(req),
  });
  if (!verification.ok) {
    return NextResponse.json({ ok: false, error: verification.reason }, { status: 400 });
  }

  const { subject, html, text } = renderQuoteEmail(payload);

  try {
    await sendEmail({ subject, html, text, replyTo: payload.email });
  } catch (err) {
    console.error('SES send failed (quote):', err);
    return NextResponse.json({ ok: false, error: 'Failed to send quote request' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
