import skills from '../data/skill.json';
import { SkillType } from '@app-portfolio/shared';

export const useSkill = () => {
  const userSkills = skills[0] as SkillType;

  return { userSkills };
};
