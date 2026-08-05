import languages from '../data/language.json';
import { LanguageType } from '@app-portfolio/shared';

export const useLanguage = () => {
  const userLanguages = languages as LanguageType[];

  return { userLanguages };
};
