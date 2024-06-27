import jobs from "../data/job.json";
import { JobType } from "../types/interfaces/job";

export const useJob = () => {
  const userJobs: JobType[] = jobs;

  return { userJobs };
};
