export enum ResumeMode {
  INTERACTIVE = 'interactive',
  PRINT = 'print',
}

export const ResumeModeI18n: Record<ResumeMode, string> = {
  [ResumeMode.INTERACTIVE]: 'PDF interactif',
  [ResumeMode.PRINT]: 'PDF impression',
};
