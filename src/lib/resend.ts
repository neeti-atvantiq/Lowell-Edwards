import { Resend } from 'resend';
import {
  LeadEmailTemplateInput,
  renderAdminNotificationEmail,
  renderCustomerConfirmationEmail,
} from '@/lib/email-templates';

let cachedResend: Resend | null = null;

function getResend() {
  if (cachedResend) return cachedResend;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  cachedResend = new Resend(apiKey);
  return cachedResend;
}

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not configured`);
  }

  return value;
}

function parseEmailList(value: string) {
  return value
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);
}

function formatEmailError(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
    };
  }

  return error;
}

function logEmailError(label: string, input: LeadEmailTemplateInput, error: unknown) {
  console.error(`${label}: ${JSON.stringify({
    formType: input.formType,
    customerEmail: input.email,
    error: formatEmailError(error),
  })}`);
}

async function sendEmail(params: Parameters<Resend['emails']['send']>[0]) {
  const response = await getResend().emails.send(params);

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.data;
}

export async function sendLeadEmails(input: LeadEmailTemplateInput) {
  try {
    const adminEmail = renderAdminNotificationEmail(input);
    await sendEmail({
      from: getRequiredEnv('RESEND_FROM_EMAIL'),
      to: parseEmailList(getRequiredEnv('RESEND_ADMIN_EMAIL')),
      replyTo: input.email,
      subject: adminEmail.subject,
      html: adminEmail.html,
      text: adminEmail.text,
    });
  } catch (error) {
    logEmailError('Failed to send admin lead email', input, error);
  }

  try {
    const customerEmail = renderCustomerConfirmationEmail(input);
    await sendEmail({
      from: getRequiredEnv('RESEND_FROM_EMAIL'),
      to: input.email,
      subject: customerEmail.subject,
      html: customerEmail.html,
      text: customerEmail.text,
    });
  } catch (error) {
    logEmailError('Failed to send customer confirmation email', input, error);
  }
}
