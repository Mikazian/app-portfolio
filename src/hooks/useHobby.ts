import { hobbies } from '@app-portfolio/data';
import { AppIconSvgType } from '@app-portfolio/enums';
import { HobbyType } from '@app-portfolio/shared';

export const useHobby = () => {
  const userHobbies: HobbyType[] = hobbies.map((hobby) => ({
    ...hobby,
    icon: hobby.logo as AppIconSvgType,
  }));

  return { userHobbies };
};
