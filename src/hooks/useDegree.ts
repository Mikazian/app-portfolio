import degress from '../data/degree.json';
import { DegreeType } from '@app-portfolio/shared';

export const useDegree = () => {
  const userDegrees = degress as DegreeType[];

  return { userDegrees };
};
