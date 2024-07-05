export const calculateDurationInMonth = (
  start: string,
  end: string
): number => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();

  return years * 12 + months + (months < 0 ? 12 : 0);
};
