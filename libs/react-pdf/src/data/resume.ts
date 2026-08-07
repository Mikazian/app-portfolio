import {
  personalInfos,
  jobs,
  experiences,
  trainingData,
  degrees,
  skills as skillsData,
  languages,
  hobbies,
  socialNetworks,
} from '@app-portfolio/data';
import type {
  ProfileType,
  JobType,
  ExperienceType,
  DegreeType,
  SkillType,
  LanguageType,
  HobbyType,
} from '@app-portfolio/shared';

export type ResumeData = {
  profile: ProfileType;
  jobs: JobType[];
  experiences: ExperienceType[];
  formations: ExperienceType[];
  degrees: DegreeType[];
  skills: SkillType;
  languages: LanguageType[];
  hobbies: HobbyType[];
  socialNetworks: { id: number; name: string; url: string; icon: string }[];
};

export const resumeData: ResumeData = {
  profile: personalInfos[0] as ProfileType,
  jobs: jobs as JobType[],
  experiences: experiences as ExperienceType[],
  formations: trainingData as ExperienceType[],
  degrees: degrees as DegreeType[],
  skills: skillsData[0] as SkillType,
  languages: languages as LanguageType[],
  hobbies: hobbies.map((h) => ({ ...h, icon: h.logo })) as HobbyType[],
  socialNetworks: socialNetworks as ResumeData['socialNetworks'],
};
