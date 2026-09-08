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
import type { Locale } from '@app-portfolio/enums';
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

export const getResumeData = (locale: Locale): ResumeData => ({
  profile: personalInfos[locale][0] as ProfileType,
  jobs: jobs[locale] as JobType[],
  experiences: experiences[locale] as ExperienceType[],
  formations: trainingData[locale] as ExperienceType[],
  degrees: degrees[locale] as DegreeType[],
  skills: skillsData[locale][0] as SkillType,
  languages: languages[locale] as LanguageType[],
  hobbies: hobbies[locale].map((h) => ({ ...h, icon: h.logo })) as HobbyType[],
  socialNetworks: socialNetworks[locale] as ResumeData['socialNetworks'],
});
