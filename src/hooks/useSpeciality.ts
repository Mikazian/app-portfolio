import { specialities } from '@app-portfolio/data';
import { AppIconSvgType } from '@app-portfolio/enums';
import { SpecialityType } from '@app-portfolio/shared';
import { useLanguage } from '../contexts';

export const useSpeciality = () => {
  const { locale } = useLanguage();
  const userSpecialities: SpecialityType[] = specialities[locale].map((speciality) => ({
    ...speciality,
    label: speciality.label as AppIconSvgType,
  }));

  return { userSpecialities };
};
