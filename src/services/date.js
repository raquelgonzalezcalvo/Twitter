const months = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const year = date.getFullYear();
  return `${day} ${month}. ${year}`;
};

const objToExport = {
  getCurrentDate: getCurrentDate,
};
console.log(getCurrentDate());
export default objToExport;
