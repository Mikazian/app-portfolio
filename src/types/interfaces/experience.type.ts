import { AppImgType } from "../enums";

interface LocationType {
  city: string;
  zip_code: string;
  country: string;
}

export interface CompanyType {
  name: string;
  logo: AppImgType;
  location: LocationType;
}

export interface ProjectType {
  name: string;
  type: string;
  logo: AppImgType;
  url: string;
}

export interface ExperienceType {
  id: string;
  job: string;
  contract: string;
  start_date: string;
  duration: string;
  end_date: string;
  company: CompanyType;
  description: string;
  projects: ProjectType[];
}
