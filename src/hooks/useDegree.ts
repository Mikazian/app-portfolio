import degress from "../data/degree.json";
import { DegreeType } from "../types/interfaces/degree.type";

export const useDegree = () => {
  const userDegrees: DegreeType[] = degress;

  return { userDegrees };
};
