export const calculateDurationInMonth = (start: string, end: string | null): number => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();
  const extraMonth = endDate.getDate() >= startDate.getDate() ? 1 : 0;

  return years * 12 + months + extraMonth + (months < 0 ? 12 : 0);
};
