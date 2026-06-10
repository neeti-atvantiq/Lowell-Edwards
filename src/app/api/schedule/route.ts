import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/ses';

export const runtime = 'nodejs';

interface RequestBody {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  buildingType?: string;
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
  const company = (body.company ?? '').trim();
  const email = (body.email ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const buildingType = (body.buildingType ?? '').trim();

  if (!name || !email || !phone || !buildingType) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Invalid email address' }, { status: 400 });
  }

  const subject = `Service Request from ${name}`;
  const text = [
    `Name: ${name}`,
    `Company: ${company || '—'}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Building Type: ${buildingType}`,
  ].join('\n');

  const html = `
    <h2>New Service Request</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td style="padding:6px 12px;font-weight:600">Name</td><td style="padding:6px 12px">${name}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:600">Company</td><td style="padding:6px 12px">${company || '—'}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:600">Email</td><td style="padding:6px 12px">${email}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:600">Phone</td><td style="padding:6px 12px">${phone}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:600">Building Type</td><td style="padding:6px 12px">${buildingType}</td></tr>
    </table>
  `;

  try {
    await sendEmail({ subject, html, text, replyTo: email });
  } catch (err) {
    console.error('SES send failed (schedule):', err);
    return NextResponse.json({ ok: false, error: 'Failed to send message' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
