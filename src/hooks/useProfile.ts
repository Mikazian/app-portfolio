import personalInfos from '../data/personal-infos.json';
import { ProfileType } from '@app-portfolio/shared';

export const useProfile = () => {
  const profile: ProfileType = personalInfos[0];

  return { profile };
};
