import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'Le nom est requis')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  email: z.email("L'email est requis"),
  message: z
    .string()
    .min(1, 'Le message est requis')
    .max(2000, 'Le message ne peut pas dépasser 2000 caractères'),
});

export type ContactForm = z.infer<typeof contactSchema>;
