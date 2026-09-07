import type { Locale } from './locale.enum';

export enum StackCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DEV_OPS = 'dev-ops',
  CLOUD = 'cloud',
  TOOLS = 'tools',
  UX_UI = 'ux-ui',
}

export const StackCategoryI18n: Record<StackCategory, Record<Locale, string>> = {
  [StackCategory.FRONTEND]: { fr: 'Frontend', en: 'Frontend' },
  [StackCategory.BACKEND]: { fr: 'Backend', en: 'Backend' },
  [StackCategory.DEV_OPS]: { fr: 'DevOps', en: 'DevOps' },
  [StackCategory.CLOUD]: { fr: 'Cloud', en: 'Cloud' },
  [StackCategory.TOOLS]: { fr: 'Outils', en: 'Tools' },
  [StackCategory.UX_UI]: { fr: 'UX/UI', en: 'UX/UI' },
};
