export interface DevelopmentSkill {
  id: number;
  name: string;
  icon: string;
  label: string;
}

export interface DesignSkill {
  id: number;
  name: string;
  icon: string;
  label: string;
}

export interface SkillType {
  development: DevelopmentSkill[];
  design: DesignSkill[];
}
