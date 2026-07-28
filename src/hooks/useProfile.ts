import personalInfos from '../data/personal-infos.json';
import { ProfileType } from '../types/profile.type';

export const useProfile = () => {
  const profile: ProfileType = personalInfos[0];

  return { profile };
};
