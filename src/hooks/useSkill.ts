import skills from "../data/skills.json";
import { SkillType } from "../types/interfaces/skill.type";

export const useSkill = () => {
  const userSkills: SkillType = skills[0];

  return { userSkills };
};
