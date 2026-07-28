import jobs from '../data/job.json';
import { JobType } from '../types/interfaces/job.type';

export const useJob = () => {
  const userJobs = jobs as JobType[];

  return { userJobs };
};
