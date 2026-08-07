import { skills } from '@app-portfolio/data';
import { SkillCategoryList } from '@app-portfolio/shared';

export const useSkill = () => {
  const userSkills = skills[0].list[0] as SkillCategoryList;

  return { userSkills };
};
