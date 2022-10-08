const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");
const tempStatus = "Clouds";

const getCurrentDate = () => {
  let currentTime = new Date();
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let day = weekday[currentTime.getDay()].slice(0, 3);
  return day;
};

const getCurrentTime = () => {
  let now = new Date();
  let date = now.getDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  let hours = now.getHours();
  let mins = now.getMinutes();
  let periods = "AM";
  if (hours > 11) {
    periods = "PM";
    if (hours > 12) hours -= 12;
  }
  if (mins < 10) mins = "0" + mins;

  return ` ${date} ${month} | ${hours}:${mins}`;
};

curDate.innerHTML = getCurrentDate() + getCurrentTime();
