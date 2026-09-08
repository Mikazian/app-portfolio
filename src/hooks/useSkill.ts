import { skills } from '@app-portfolio/data';
import { SkillCategoryList } from '@app-portfolio/shared';
import { useLanguage } from '../contexts';

export const useSkill = () => {
  const { locale } = useLanguage();
  const userSkills = skills[locale][0].list[0] as SkillCategoryList;

  return { userSkills };
};
