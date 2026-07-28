import experiences from '../data/experience.json';
import trainingData from '../data/training.json';
import { calculateDurationInMonth } from '../helpers/calculate-duration-date';
import { convertDate } from '../helpers/format-date';
import { AppImgType } from '../enums';
import { ExperienceType } from '../types';

export const useExperience = () => {
  const allItems = [...experiences, ...trainingData].sort(
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
        logo: item.company.logo as AppImgType,
      },
      projects: item.projects?.map((project) => ({
        ...project,
        logo: project.logo as AppImgType,
      })),
    };
  });

  return { userExperiences };
};
