import { prisma } from '@/lib/prisma';

export type LeadFormType = 'contact' | 'quote' | 'service-request';

type CreateLeadInput = {
  formType: LeadFormType;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
};

export function formatLeadMessage(fields: Array<[string, string | undefined]>) {
  return fields
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n');
}

export async function createLead(input: CreateLeadInput) {
  return prisma.lead.create({
    data: {
      formType: input.formType,
      name: input.name,
      email: input.email,
      phone: input.phone,
      company: input.company,
      service: input.service,
      message: input.message,
    },
    select: {
      id: true,
      formType: true,
      createdAt: true,
    },
  });
}
