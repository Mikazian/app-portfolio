import { languages } from '@app-portfolio/data';
import { LanguageType } from '@app-portfolio/shared';
import { useLanguage as useAppLanguage } from '../contexts';

export const useLanguage = () => {
  const { locale } = useAppLanguage();
  const userLanguages = languages[locale] as LanguageType[];

  return { userLanguages };
};
