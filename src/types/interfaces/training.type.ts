import { CompanyType, ProjectType } from './experience.type';

export interface TrainingType {
  id: number;
  job: string;
  contract: string;
  start_date: string;
  duration: string;
  end_date: string;
  company: CompanyType;
  description: string;
  projects?: ProjectType[];
}
