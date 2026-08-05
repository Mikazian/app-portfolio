export const convertDate = (date: string | null) => {
  const dateObject = date ? new Date(date) : new Date();

  const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  const month = months[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  return `${month} ${year}`;
};
