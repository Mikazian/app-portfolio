import personalInfos from '../../../../src/data/personal-infos.json';
import jobs from '../../../../src/data/job.json';
import experiences from '../../../../src/data/experience.json';
import trainingData from '../../../../src/data/training.json';
import degrees from '../../../../src/data/degree.json';
import skillsData from '../../../../src/data/skill.json';
import languages from '../../../../src/data/language.json';
import hobbies from '../../../../src/data/hobby.json';
import socialNetworks from '../../../../src/data/social-network.json';
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
