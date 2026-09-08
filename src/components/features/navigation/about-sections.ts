import type { Locale } from '@app-portfolio/enums';

export type SectionLabel = { fr: string; en: string };

export const aboutSections: { id: string; label: SectionLabel }[] = [
  { id: 'profil', label: { fr: 'Profil', en: 'Profile' } },
  { id: 'certifications', label: { fr: 'Formations', en: 'Education' } },
  { id: 'specialites', label: { fr: 'Spécialités', en: 'Specialties' } },
  { id: 'competences', label: { fr: 'Compétences', en: 'Skills' } },
  { id: 'experiences', label: { fr: 'Expériences', en: 'Experience' } },
  { id: 'langues', label: { fr: 'Langues', en: 'Languages' } },
  { id: 'centres-interet', label: { fr: 'Centres d\u2019intérêt', en: 'Interests' } },
  { id: 'contact', label: { fr: 'Contact', en: 'Contact' } },
];

export const getSectionLabel = (section: { label: SectionLabel }, locale: Locale): string =>
  section.label[locale];
