import { AppImgType } from '../enums';
import { Stack } from '../enums/stack.enum';

type LocationType = {
  city: string;
  zip_code: string;
  country: string;
};

export type CompanyType = {
  name: string;
  logo: AppImgType;
  location: LocationType;
};

export type ProjectType = {
  name: string;
  type: string;
  logo: AppImgType;
  url: string;
};

export type ExperienceType = {
  id: number;
  job: string;
  contract: string;
  start_date: string;
  duration: string;
  end_date: string | null;
  company: CompanyType;
  description: string;
  projects?: ProjectType[];
  tasks?: { title: string; description: string }[];
  stacks?: Stack[];
};
