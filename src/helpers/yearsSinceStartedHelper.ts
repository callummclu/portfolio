const START_DATE = new Date(2022, 2, 1);

export const timeSinceStarted = (): string => {
  let dateNow = new Date(Date.now());
  let yearsDiff = dateNow.getFullYear() - START_DATE.getFullYear();
  let monthsDiff = dateNow.getMonth() - START_DATE.getMonth();

  let displayMonth = "";
  if (monthsDiff < -1) {
    yearsDiff--;
  }
  if (monthsDiff < -1) {
    displayMonth = ".5";
  }
  if (monthsDiff < -6) {
    displayMonth = "";
  }
  if (monthsDiff > 6) {
    displayMonth = ".5";
  }
  if (monthsDiff >= 11) {
    yearsDiff++;
    displayMonth = "";
  }
  return yearsDiff + displayMonth;
};
