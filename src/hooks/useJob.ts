import { jobs } from '@app-portfolio/data';
import { JobType } from '@app-portfolio/shared';

export const useJob = () => {
  const userJobs = jobs as JobType[];

  return { userJobs };
};
