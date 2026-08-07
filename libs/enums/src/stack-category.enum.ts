export enum StackCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DEV_OPS = 'dev-ops',
  CLOUD = 'cloud',
  TOOLS = 'tools',
  UX_UI = 'ux-ui',
}

export const StackCategoryI18n: Record<StackCategory, string> = {
  [StackCategory.FRONTEND]: 'Frontend',
  [StackCategory.BACKEND]: 'Backend',
  [StackCategory.DEV_OPS]: 'DevOps',
  [StackCategory.CLOUD]: 'Cloud',
  [StackCategory.TOOLS]: 'Outils',
  [StackCategory.UX_UI]: 'UX/UI',
};
