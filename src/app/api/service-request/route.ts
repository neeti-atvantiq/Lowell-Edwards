import { NextRequest, NextResponse } from 'next/server';
import { createLead, formatLeadMessage } from '@/lib/leads';
import { formatValidationMessage, serviceRequestLeadSchema } from '@/lib/lead-validation';
import { sendLeadEmails } from '@/lib/resend';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { status: false, code: 400, message: 'Invalid request. Please try again.' },
      { status: 400 }
    );
  }

  const result = serviceRequestLeadSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        status: false,
        code: 400,
        message: formatValidationMessage(result.error),
      },
      { status: 400 }
    );
  }

  const payload = result.data;
  const address = [
    payload.streetAddress,
    payload.apartment,
    `${payload.city}, ${payload.state} ${payload.zipCode}`,
  ].filter(Boolean).join(', ');

  try {
    const message = formatLeadMessage([
      ['Address', address],
      ['Notes', payload.notes],
    ]);
    await createLead({
      formType: 'service-request',
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      company: payload.company,
      service: payload.requestType,
      message,
    });

    await sendLeadEmails({
      formType: 'Request Service',
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message,
    });

    return NextResponse.json({ status: true, code: 200, message: 'Your service request has been submitted.' });
  } catch (error) {
    console.error('Failed to save service request lead:', error);
    return NextResponse.json(
      { status: false, code: 500, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
