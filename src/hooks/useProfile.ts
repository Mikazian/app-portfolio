import { personalInfos } from '@app-portfolio/data';
import { ProfileType } from '@app-portfolio/shared';
import { useLanguage } from '../contexts';

export const useProfile = () => {
  const { locale } = useLanguage();
  const profile: ProfileType = personalInfos[locale][0];

  return { profile };
};
