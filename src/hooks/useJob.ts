import jobs from '../data/job.json';
import { JobType } from '@app-portfolio/shared';

export const useJob = () => {
  const userJobs = jobs as JobType[];

  return { userJobs };
};
