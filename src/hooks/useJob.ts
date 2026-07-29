import jobs from '../data/job.json';
import { JobType } from '../types/job.type';

export const useJob = () => {
  const userJobs = jobs as JobType[];

  return { userJobs };
};
