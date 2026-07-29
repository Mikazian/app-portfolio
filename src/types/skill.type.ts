export type DevelopmentSkill = {
  id: number;
  name: string;
  icon: string;
  label: string;
};

export type DesignSkill = {
  id: number;
  name: string;
  icon: string;
  label: string;
};

export type SkillType = {
  development: DevelopmentSkill[];
  design: DesignSkill[];
};
