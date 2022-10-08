/*************Math Object *****************/

// It is used to perform mathematical operations

// console.log(Math.PI);

// let num = 10.499;
// let num2 = 10.599;

// console.log(Math.round(num));
// console.log(Math.round(num2));

// console.log(Math.pow(2, 3));

// console.log(Math.sqrt(26));

// console.log(Math.abs(-45)); // always give a positive value

// ***********Ceil always return the upper value ..

// No matter what is after decimal except .0  or nothing*************/
// console.log(Math.ceil(41));
// console.log(Math.ceil(41.0));
// console.log(Math.ceil(41.000000000001));
// console.log(Math.ceil(41.5));

// ***********Ceil always return the lower value(same) *************/

// console.log(Math.floor(41));
// console.log(Math.floor(41.0));
// console.log(Math.floor(41.000000000001));
// console.log(Math.floor(41.5));

// console.log(Math.min(10, -9, -200, 56, 86));
// console.log(Math.max(10, -9, -200, 56, 86));

//Random always give a no b/w 0 to 1
// console.log(Math.floor(Math.random() * 10));

// ***********trunc method*************/

// trunc() return the integer part only before decimal.
// No matter its +ve or -ve

// Secret if aurguement is +ve => trunc act as floor   if -ve trunc act as -ve

console.log(Math.trunc(14.2));
console.log(Math.trunc(-9.7));
