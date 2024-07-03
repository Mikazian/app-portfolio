import personalInfos from "../data/personal-infos.json";
import { ProfileType } from "../types/interfaces/profile.type";

export const useProfile = () => {
  const profile: ProfileType = personalInfos[0];

  return { profile };
};
