import { z } from 'zod';

const requiredString = z.preprocess(
  (value) => (typeof value === 'string' ? value : ''),
  z.string().trim().min(1, 'is required.')
);
const optionalString = z
  .string()
  .trim()
  .optional()
  .transform((value) => value || undefined);

const emailString = z
  .preprocess((value) => (typeof value === 'string' ? value : ''), z.string().trim().min(1, 'is required.'))
  .pipe(z.email('Invalid email address'));

export const contactLeadSchema = z.object({
  name: requiredString,
  email: emailString,
  phone: requiredString,
  appointmentDate: requiredString,
  appointmentTime: requiredString,
  message: optionalString,
});

export const quoteLeadSchema = z.object({
  first: requiredString,
  last: requiredString,
  company: requiredString,
  email: emailString,
  phone: requiredString,
  buildingType: requiredString,
  units: requiredString,
  priority: requiredString,
  notes: optionalString,
});

export const serviceRequestLeadSchema = z.object({
  name: requiredString,
  company: requiredString,
  email: emailString,
  phone: requiredString,
  state: requiredString,
  city: requiredString,
  streetAddress: requiredString,
  apartment: requiredString,
  zipCode: requiredString,
  requestType: requiredString,
  notes: optionalString,
});

export function formatValidationErrors(error: z.ZodError) {
  return error.issues.map((issue) => ({
    field: issue.path.join('.') || 'body',
    message: issue.message,
  }));
}

export function formatValidationMessage(error: z.ZodError) {
  const issue = error.issues[0];
  if (!issue) {
    return 'Invalid request body.';
  }

  const field = issue.path.join('.') || 'body';
  const label = field
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, (character) => character.toUpperCase());

  return `${label}: ${issue.message}`;
}
