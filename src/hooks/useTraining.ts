import trainingData from "../data/training.json";
import { calculateDurationInMonth } from "../services/calculDuration";
import { convertDate } from "../services/convertDate";
import { AppImgType } from "../types/enums";
import { TrainingType } from "../types/interfaces";

export const useTraining = () => {
  const sortedTraining = [...trainingData].sort(
    (a, b) =>
      new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
  );

  const userTrainings: TrainingType[] = sortedTraining.map((training) => {
    const duration = calculateDurationInMonth(
      training.start_date,
      training.end_date
    );

    return {
      ...training,
      start_date: convertDate(training.start_date),
      end_date: convertDate(training.end_date),
      duration: duration.toString(),
      company: {
        ...training.company,
        logo: training.company.logo as AppImgType,
      },
      projects: training?.projects?.map((project) => ({
        ...project,
        logo: project.logo as AppImgType,
      })),
    };
  });

  return { userTrainings };
};
