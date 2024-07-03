import experiences from "../data/experience.json";
import { calculateDurationInMonth } from "../services/calculDuration";
import { convertDate } from "../services/convertDate";
import { AppImgType } from "../types/enums";
import { ExperienceType } from "../types/interfaces";

export const useExperience = () => {
  const sortedExperiences = [...experiences].sort(
    (a, b) =>
      new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
  );

  const userExperiences: ExperienceType[] = sortedExperiences.map(
    (experience) => {
      const duration = calculateDurationInMonth(
        experience.start_date,
        experience.end_date
      );

      return {
        ...experience,
        start_date: convertDate(experience.start_date),
        end_date: convertDate(experience.end_date),
        duration: duration.toString(),
        company: {
          ...experience.company,
          logo: experience.company.logo as AppImgType,
        },
        projects: experience.projects.map((project) => ({
          ...project,
          logo: project.logo as AppImgType,
        })),
      };
    }
  );

  return { userExperiences };
};
