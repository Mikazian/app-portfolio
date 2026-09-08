import { hobbies } from '@app-portfolio/data';
import { AppIconSvgType } from '@app-portfolio/enums';
import { HobbyType } from '@app-portfolio/shared';
import { useLanguage } from '../contexts';

export const useHobby = () => {
  const { locale } = useLanguage();
  const userHobbies: HobbyType[] = hobbies[locale].map((hobby) => ({
    ...hobby,
    icon: hobby.logo as AppIconSvgType,
  }));

  return { userHobbies };
};
