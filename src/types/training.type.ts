import { Stack } from '../enums/stack.enum';
import { CompanyType, ProjectType } from './experience.type';

export type TrainingType = {
  id: number;
  job: string;
  contract: string;
  start_date: string;
  duration: string;
  end_date: string;
  company: CompanyType;
  description: string;
  projects?: ProjectType[];
  tasks?: { title: string; description: string }[];
  stacks?: Stack[];
};
