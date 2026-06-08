import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

let cachedClient: SESClient | null = null;

function getClient(): SESClient {
  if (cachedClient) return cachedClient;

  const region = process.env.AWS_SES_REGION;
  const accessKeyId = process.env.AWS_SES_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SES_SECRET_ACCESS_KEY;

  if (!region) {
    throw new Error('AWS_SES_REGION is not configured');
  }

  cachedClient = new SESClient({
    region,
    credentials:
      accessKeyId && secretAccessKey
        ? { accessKeyId, secretAccessKey }
        : undefined,
  });

  return cachedClient;
}

export type SendEmailParams = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

export async function sendEmail({ subject, html, text, replyTo }: SendEmailParams): Promise<void> {
  const from = process.env.SES_FROM_EMAIL;
  const to = process.env.SES_TO_EMAIL;

  if (!from || !to) {
    throw new Error('SES_FROM_EMAIL or SES_TO_EMAIL is not configured');
  }

  const command = new SendEmailCommand({
    Source: from,
    Destination: { ToAddresses: to.split(',').map((s) => s.trim()).filter(Boolean) },
    ReplyToAddresses: replyTo ? [replyTo] : undefined,
    Message: {
      Subject: { Data: subject, Charset: 'UTF-8' },
      Body: {
        Html: { Data: html, Charset: 'UTF-8' },
        Text: { Data: text, Charset: 'UTF-8' },
      },
    },
  });

  await getClient().send(command);
}
