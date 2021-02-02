const getDateFormatString = () => {
  const today = new Date();
  let yy = today.getFullYear();
  let mm = today.getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;
  let dd = today.getDate();
  if (dd < 10) dd = `0${dd}`;
  return `${yy}-${mm}-${dd}`;
};

const getTimeFormatString = () => {
  const today = new Date();
  let hh = today.getHours();
  if (hh < 10) hh = `0${hh}`;
  let mm = today.getMinutes();
  if (mm < 10) mm = `0${mm}`;
  return `${hh}:${mm}`;
};

const DateClass = { getDateFormatString, getTimeFormatString };

export default DateClass;
