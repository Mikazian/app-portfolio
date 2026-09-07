import type { Locale } from './locale.enum';

export enum ResumeMode {
  INTERACTIVE = 'interactive',
  PRINT = 'print',
}

export const ResumeModeI18n: Record<ResumeMode, Record<Locale, string>> = {
  [ResumeMode.INTERACTIVE]: { fr: 'PDF interactif', en: 'Interactive PDF' },
  [ResumeMode.PRINT]: { fr: 'PDF impression', en: 'Print PDF' },
};
