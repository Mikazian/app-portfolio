export enum ResumeFileType {
  JPEG = 'jpeg',
  PNG = 'png',
  PDF = 'pdf',
}

export const ResumeFileTypeI18n: Record<ResumeFileType, string> = {
  [ResumeFileType.JPEG]: 'JPEG',
  [ResumeFileType.PNG]: 'PNG',
  [ResumeFileType.PDF]: 'PDF',
};
