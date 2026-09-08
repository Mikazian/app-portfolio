import { z } from 'zod';
import type { Locale } from '@app-portfolio/enums';

const MESSAGES: Record<
  Locale,
  { nameRequired: string; nameMax: string; emailRequired: string; messageRequired: string; messageMax: string }
> = {
  fr: {
    nameRequired: 'Le nom est requis',
    nameMax: 'Le nom ne peut pas dépasser 100 caractères',
    emailRequired: "L'email est requis",
    messageRequired: 'Le message est requis',
    messageMax: 'Le message ne peut pas dépasser 2000 caractères',
  },
  en: {
    nameRequired: 'Name is required',
    nameMax: 'Name cannot exceed 100 characters',
    emailRequired: 'Email is required',
    messageRequired: 'Message is required',
    messageMax: 'Message cannot exceed 2000 characters',
  },
};

export const createContactSchema = (locale: Locale) => {
  const m = MESSAGES[locale];

  return z.object({
    name: z.string().min(1, m.nameRequired).max(100, m.nameMax),
    email: z.email(m.emailRequired),
    message: z.string().min(1, m.messageRequired).max(2000, m.messageMax),
  });
};

export type ContactForm = z.infer<ReturnType<typeof createContactSchema>>;
