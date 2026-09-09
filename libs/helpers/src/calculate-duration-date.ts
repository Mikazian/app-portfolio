export const calculateDurationInMonth = (start: string, end: string | null): number => {
  const [startYear, startMonth] = start.split('-').map(Number);

  let endYear: number;
  let endMonth: number;

  if (end) {
    [endYear, endMonth] = end.split('-').map(Number);
  } else {
    const now = new Date();
    endYear = now.getFullYear();
    endMonth = now.getMonth() + 1;
  }

  const months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;

  return Math.max(0, months);
};
