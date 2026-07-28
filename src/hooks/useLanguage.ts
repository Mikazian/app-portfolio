import languages from '../data/language.json';
import { LanguageType } from '../types/interfaces';

export const useLanguage = () => {
  const userLanguages = languages as LanguageType[];

  return { userLanguages };
};
