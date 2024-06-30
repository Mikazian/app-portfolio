import specialities from "../data/speciality.json";
import { AppIconSvgType } from "../types/enums";
import { SpecialityType } from "../types/interfaces/speciality";

export const useSpeciality = () => {
  const userSpecialities: SpecialityType[] = specialities.map((speciality) => ({
    ...speciality,
    label: speciality.label as AppIconSvgType,
  }));

  return { userSpecialities };
};
