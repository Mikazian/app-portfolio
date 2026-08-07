import { languages } from '@app-portfolio/data';
import { LanguageType } from '@app-portfolio/shared';

export const useLanguage = () => {
  const userLanguages = languages as LanguageType[];

  return { userLanguages };
};
