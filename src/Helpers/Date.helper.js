export const getDateTimeNow = function () {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return (
    year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
  );
};

export const getDate = function () {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return year + '-' + month + '-' + day;
};

export const getDateDayFormat = function (d) {
  const dateFormat = require('dateformat');

  return dateFormat(d, 'dddd, mmmm d, yyyy');
};

export const getDayFormat = function (d) {
  const dateFormat = require('dateformat');

  return dateFormat(d, 'ddd, d');
};

export const getTimeStampFormat = function (d) {
  const daybefore = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
  console.log(new Date().getTime())
  return daybefore;
};
