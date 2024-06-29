interface LabelType {
  name: string;
}

export interface DevelopmentSkill {
  id: string;
  name: string;
  icon: string;
  labels: LabelType[];
}

export interface DesignSkill {
  id: string;
  name: string;
  icon: string;
  labels: LabelType[];
}

export interface SoftSkills {
  id: string;
  name: string;
  icon: string;
}

export interface SkillType {
  development: DevelopmentSkill[];
  design: DesignSkill[];
  softSkills: SoftSkills[];
}
