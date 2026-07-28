import specialities from '../data/speciality.json';
import { AppIconSvgType } from '../enums';
import { SpecialityType } from '../types/speciality.type';

export const useSpeciality = () => {
  const userSpecialities: SpecialityType[] = specialities.map((speciality) => ({
    ...speciality,
    label: speciality.label as AppIconSvgType,
  }));

  return { userSpecialities };
};
