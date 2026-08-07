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

export type SkillCategoryList = {
  development: DevelopmentSkill[];
  design: DesignSkill[];
};

export type SkillShortList = {
  frontend: string[];
  backend: string[];
  devOps: string[];
  cloud: string[];
  tools: string[];
  uiUx: string[];
};

export type SkillType = {
  list: SkillCategoryList[];
  shortList: {
    skills: SkillShortList;
  };
};
