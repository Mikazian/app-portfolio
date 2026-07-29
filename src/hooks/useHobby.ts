import hobbies from '../data/hobby.json';
import { AppIconSvgType } from '../enums';
import { HobbyType } from '../types/hobby.type';

export const useHobby = () => {
  const userHobbies: HobbyType[] = hobbies.map((hobby) => ({
    ...hobby,
    icon: hobby.logo as AppIconSvgType,
  }));

  return { userHobbies };
};
