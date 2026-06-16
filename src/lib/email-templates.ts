function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function row(label: string, value: string | undefined): string {
  if (!value) return '';
  const safe = escapeHtml(value).replace(/\n/g, '<br/>');
  return `
    <tr>
      <td style="padding:8px 12px;background:#f7f5f1;font-weight:600;color:#1a1a1a;width:200px;border:1px solid #e6e1d8;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;color:#222;border:1px solid #e6e1d8;">${safe}</td>
    </tr>`;
}

function wrap(title: string, rowsHtml: string): string {
  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#faf8f3;font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e6e1d8;">
    <tr><td style="padding:24px 28px;background:#1a1a1a;color:#fff;">
      <div style="font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#c9a96e;">Lowell Edwards</div>
      <div style="font-size:20px;margin-top:6px;">${escapeHtml(title)}</div>
    </td></tr>
    <tr><td style="padding:24px 28px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;font-size:14px;">
        ${rowsHtml}
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function toText(title: string, fields: Array<[string, string | undefined]>): string {
  const lines = [title, '='.repeat(title.length), ''];
  for (const [k, v] of fields) {
    if (v) lines.push(`${k}: ${v}`);
  }
  return lines.join('\n');
}

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  appointmentDate?: string;
  appointmentTime?: string;
  message: string;
};

function formatAppointmentDate(value?: string): string | undefined {
  if (!value) return undefined;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!m) return value;
  const [, y, mo, d] = m;
  return `${d}/${mo}/${y}`;
}

function formatAppointmentTime(value?: string): string | undefined {
  if (!value) return undefined;
  const m = /^(\d{2}):(\d{2})$/.exec(value);
  if (!m) return value;
  let h = parseInt(m[1], 10);
  const min = m[2];
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${min} ${ampm}`;
}

export function renderContactEmail(p: ContactPayload) {
  const title = 'New Meeting Request';
  const fields: Array<[string, string | undefined]> = [
    ['Name', p.name],
    ['Email', p.email],
    ['Phone', p.phone],
    ['Appointment Date', formatAppointmentDate(p.appointmentDate)],
    ['Appointment Time', formatAppointmentTime(p.appointmentTime)],
    ['Message', p.message],
  ];
  return {
    subject: `New meeting request — ${p.name}`,
    html: wrap(title, fields.map(([k, v]) => row(k, v)).join('')),
    text: toText(title, fields),
  };
}

export type QuotePayload = {
  first: string;
  last: string;
  company: string;
  email: string;
  phone: string;
  buildingType: string;
  units: string;
  priority: string;
  notes: string;
};

export function renderQuoteEmail(p: QuotePayload) {
  const title = 'New Quote Request';
  const fullName = `${p.first} ${p.last}`.trim();
  const fields: Array<[string, string | undefined]> = [
    ['Name', fullName],
    ['Company', p.company],
    ['Email', p.email],
    ['Phone', p.phone],
    ['Building Type', p.buildingType],
    ['Units', p.units],
    ['Priority', p.priority],
    ['Notes', p.notes],
  ];
  return {
    subject: `New quote request — ${fullName || p.company || p.email}`,
    html: wrap(title, fields.map(([k, v]) => row(k, v)).join('')),
    text: toText(title, fields),
  };
}

export type CategoryQuotePayload = {
  name: string;
  email: string;
  phone: string;
  units: string;
  message: string;
  brand: string;
  category: string;
};

export function renderCategoryQuoteEmail(p: CategoryQuotePayload) {
  const title = `New ${p.brand} Quote Request`;
  const fields: Array<[string, string | undefined]> = [
    ['Brand', p.brand],
    ['Category', p.category],
    ['Name', p.name],
    ['Email', p.email],
    ['Phone', p.phone],
    ['Units', p.units],
    ['Project Details', p.message],
  ];
  return {
    subject: `New ${p.brand} quote — ${p.name || p.email}`,
    html: wrap(title, fields.map(([k, v]) => row(k, v)).join('')),
    text: toText(title, fields),
  };
}

export type LeadEmailTemplateInput = {
  formType: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
};

export function renderAdminNotificationEmail(input: LeadEmailTemplateInput) {
  const title = 'New Lead Submission';
  const fields: Array<[string, string | undefined]> = [
    ['Form Type', input.formType],
    ['Name', input.name],
    ['Email', input.email],
    ['Phone', input.phone],
    ['Message', input.message],
  ];

  return {
    subject: `New ${input.formType} lead - ${input.name}`,
    html: wrap(title, fields.map(([label, value]) => row(label, value)).join('')),
    text: toText(title, fields),
  };
}

export function renderCustomerConfirmationEmail(input: LeadEmailTemplateInput) {
  const title = 'Thank You for Contacting Lowell Edwards';
  const submittedDetails = toText('Submitted Details', [
    ['Form Type', input.formType],
    ['Name', input.name],
    ['Email', input.email],
    ['Phone', input.phone],
    ['Message', input.message],
  ]);
  const fields: Array<[string, string | undefined]> = [
    ['Customer Name', input.name],
    ['Submitted Details', submittedDetails],
    ['Thank You Message', 'Thank you for reaching out. Our team has received your submission and will contact you shortly.'],
  ];

  return {
    subject: 'We received your Lowell Edwards request',
    html: wrap(title, fields.map(([label, value]) => row(label, value)).join('')),
    text: toText(title, fields),
  };
}
