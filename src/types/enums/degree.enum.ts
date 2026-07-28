export enum Degree {
  CERTIFICATE = 'certificate',
  DIPLOMA = 'diploma',
}

export const DegreeI18n: { [key in Degree]: string } = {
  [Degree.CERTIFICATE]: 'certificat',
  [Degree.DIPLOMA]: 'diplôme',
};
