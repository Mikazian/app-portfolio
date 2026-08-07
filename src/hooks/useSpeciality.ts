import { specialities } from '@app-portfolio/data';
import { AppIconSvgType } from '@app-portfolio/enums';
import { SpecialityType } from '@app-portfolio/shared';

export const useSpeciality = () => {
  const userSpecialities: SpecialityType[] = specialities.map((speciality) => ({
    ...speciality,
    label: speciality.label as AppIconSvgType,
  }));

  return { userSpecialities };
};
