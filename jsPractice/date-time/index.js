/***********Date and Time *********/

// 4 methods to create new Date object
// new Date();
// new Date(year, month, day, hours, minutes, seconds, milliseconds);
// new Date(milliseconds);
// new Date(date string);

/***********1st date Format***********/

// const date = new Date();
// console.log(date); // Time in GMT - Greenwich Mean Time
// console.log(date.toLocaleString()); //Exact local time
// console.log(date.toString()); //String format m date time day sb exact
// console.log(date.toUTCString()); //Universal cordinated time
// console.log(date.toTimeString()); //only GMT Time
// console.log(date.toDateString()); //only day and date

// console.log(Date.now());   // Time in millisecond from 1 Jan 1970 - Epoch

/***********2nd date Format***********/

// Month aurgument is compulsory
// if we dont give something it will treats it as 0

// const date = new Date(2021, 0, 15, 22, 59, 18, 0);
// console.log(date.toLocaleString());]

/***********3rd date Format***********/

// Normally space don't affect in  case of date .. be careful with time

// const date = new Date(" January 15 , 2021 23:05 :00 ");
// console.log(date.toLocaleString());

/***********4th date Format***********/
// By giving miliseconds

// const date = new Date(0);
// console.log(date);
// const date1 = new Date(999);
// console.log(date1);
// date2 = new Date(1000);
// console.log(date2.toLocaleString());
// date3 = new Date(1642268830588); //current milliseconds
// console.log(date3.toLocaleString());
// date4 = Date.now();
// console.log(date4);
// date5 = new Date(86400000 * 3); // Milliseconds in 1 day = 86400000
// console.log(date5.toLocaleString());

/*********** Date methods***********/

// Note month and day index are started from 0.
//get date methods

// const date = new Date();
// console.log(date.toLocaleString());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());

/******set date methods'*****/

// https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_setfullyear

// const date = new Date();
// console.log(date);
// date.setFullYear(2099);
// console.log(date);
// date.setMonth(11);
// console.log(date);
// date.setDate(20);
// console.log(date);

/*********** Time methods***********/

// const curTime = new Date();
// console.log(curTime);
// console.log(curTime.getTime());   //in Milliseconds
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());
// console.log(curTime.toTimeString());

/******set time methods'*****/

// const time = new Date();
// console.log(time.toLocaleString());
// time.setTime(982345678956);
// console.log(time.toLocaleString());
// time.setHours(5);
// console.log(time.toLocaleString());
// time.setMinutes(11);
// console.log(time.toLocaleString());
// time.setSeconds(19);
// console.log(time.toLocaleString());
// time.setMilliseconds(20);
// console.log(time);

/******only date and time methods'*****/

// const date = new Date();
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());
