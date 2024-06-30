export interface DevelopmentSkill {
  id: string;
  name: string;
  icon: string;
  label: string;
}

export interface DesignSkill {
  id: string;
  name: string;
  icon: string;
  label: string;
}

export interface SkillType {
  development: DevelopmentSkill[];
  design: DesignSkill[];
}
