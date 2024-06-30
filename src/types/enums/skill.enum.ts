export const SkillEnum = ["development", "design"] as const;

export type SkillType = (typeof SkillEnum)[number];
