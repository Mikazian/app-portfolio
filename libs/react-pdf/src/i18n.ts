import type { Locale } from '@app-portfolio/enums';

const PDF_STRINGS: Record<string, Record<Locale, string>> = {
  'section.experiences': { fr: 'Expériences', en: 'Experience' },
  'section.formations': { fr: 'Formations', en: 'Education' },
  'section.contact': { fr: 'Contact', en: 'Contact' },
  'section.skills': { fr: 'Compétences', en: 'Skills' },
  'section.hobbies': { fr: 'Centres d\u2019intérêt', en: 'Interests' },
  'viewer.title': { fr: 'Mon CV', en: 'My CV' },
  'viewer.download': { fr: 'Télécharger le CV', en: 'Download the CV' },
  'viewer.generating': { fr: 'Génération du PDF...', en: 'Generating PDF...' },
};

export const pdfT = (locale: Locale, key: string): string => PDF_STRINGS[key]?.[locale] ?? key;
