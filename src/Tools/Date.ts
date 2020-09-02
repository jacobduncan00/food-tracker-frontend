// Gets the current date and formats it
export default function getDate() {
  const date = new Date();
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "numeric",
    day: "2-digit",
  });
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(date);
  let formattedDate = "";
  if (parseInt(month) < 10) {
    formattedDate = `0${month}/${day}/${year}`;
  } else {
    formattedDate = `${month}/${day}/${year}`;
  }
  return formattedDate;
}
