import { NextRequest, NextResponse } from 'next/server';
import { createLead, formatLeadMessage } from '@/lib/leads';
import { contactLeadSchema, formatValidationMessage } from '@/lib/lead-validation';
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

  const result = contactLeadSchema.safeParse(body);
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

  try {
    const payload = result.data;
    const message = formatLeadMessage([
      ['Appointment Date', payload.appointmentDate],
      ['Appointment Time', payload.appointmentTime],
      ['Message', payload.message],
    ]);
    await createLead({
      formType: 'contact',
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message,
    });

    await sendLeadEmails({
      formType: 'Book a Consultation',
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message,
    });

    return NextResponse.json({ status: true, code: 200, message: 'Your consultation request has been submitted.' });
  } catch (error) {
    console.error('Failed to save contact lead:', error);
    return NextResponse.json(
      { status: false, code: 500, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
