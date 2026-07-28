import degress from '../data/degree.json';
import { DegreeType } from '../types/interfaces/degree.type';

export const useDegree = () => {
  const userDegrees = degress as DegreeType[];

  return { userDegrees };
};
