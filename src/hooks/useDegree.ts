import { degrees } from '@app-portfolio/data';
import { DegreeType } from '@app-portfolio/shared';
import { useLanguage } from '../contexts';

export const useDegree = () => {
  const { locale } = useLanguage();
  const userDegrees = degrees[locale] as DegreeType[];

  return { userDegrees };
};
