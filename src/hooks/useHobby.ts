import hobbies from "../data/hobby.json";
import { AppIconSvgType } from "../types/enums";
import { HobbyType } from "../types/interfaces/hobby.type";

export const useHobby = () => {
  const userHobbies: HobbyType[] = hobbies.map((hobby) => ({
    ...hobby,
    icon: hobby.logo as AppIconSvgType,
  }));

  return { userHobbies };
};
