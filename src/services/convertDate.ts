export const convertDate = (date: string) => {
  const dateObject = new Date(date);
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const month = months[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  return `${month} ${year}`;
};
