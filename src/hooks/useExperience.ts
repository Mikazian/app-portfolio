import { experiences, trainingData } from '@app-portfolio/data';
import { calculateDurationInMonth, convertDate } from '@app-portfolio/helpers';
import { AppImgType, Stack } from '@app-portfolio/enums';
import { ExperienceType } from '@app-portfolio/shared';
import { useLanguage } from '../contexts';

const toAppImg = (logo: string): AppImgType => logo as AppImgType;

export const useExperience = () => {
  const { locale } = useLanguage();
  const allItems = [...experiences[locale], ...trainingData[locale]].sort(
    (a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime(),
  );

  const userExperiences: ExperienceType[] = allItems.map((item) => {
    const duration = calculateDurationInMonth(item.start_date, item.end_date);

    return {
      ...item,
      start_date: convertDate(item.start_date),
      end_date: item.end_date ? convertDate(item.end_date) : null,
      duration: duration.toString(),
      company: {
        ...item.company,
        logo: toAppImg(item.company.logo),
      },
      stacks: 'stacks' in item ? (item.stacks as Stack[] | undefined) : undefined,
      projects: item.projects?.map((project) => ({
        ...project,
        logo: toAppImg(project.logo),
      })),
    };
  });

  return { userExperiences };
};
