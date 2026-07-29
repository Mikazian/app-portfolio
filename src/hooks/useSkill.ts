import skills from '../data/skill.json';
import { SkillType } from '../types/skill.type';

export const useSkill = () => {
  const userSkills = skills[0] as SkillType;

  return { userSkills };
};
