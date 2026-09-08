import { jobs } from '@app-portfolio/data';
import { JobType } from '@app-portfolio/shared';
import { useLanguage } from '../contexts';

export const useJob = () => {
  const { locale } = useLanguage();
  const userJobs = jobs[locale] as JobType[];

  return { userJobs };
};
