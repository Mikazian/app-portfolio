import { degrees } from '@app-portfolio/data';
import { DegreeType } from '@app-portfolio/shared';

export const useDegree = () => {
  const userDegrees = degrees as DegreeType[];

  return { userDegrees };
};
