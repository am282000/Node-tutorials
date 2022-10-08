//Array

/************* # Length in an Array************/

//Here length  => as a property
// var array1 = ["Ashish", "Barry", "Cherry"];
// var array2 = ["Ashish", "Barry", "Cherry", "Bubby"];

// console.log(array1.length);

/************* # Loops in an Array************/

// Print values

// for (let i = 0; i < array1.length; i++) {
//   console.log(array1[i]);
// }

//Print indexes

// for (let elements in array1) {
//   console.log(elements);
// }

//Print values
// for (let elements of array1) {
//   console.log(elements);
// }

//Print everything
// arguements => element, index, array,this

// array1.forEach((element, index, array) => {
//   console.log(`${element} ${index}  ${array}`);
// });

/************* # Searching in an Array - indexOf ************/

//Forward Search
// Search the value .. and returns first occurence
// if index is not given than start from 0.
//Case sensitive ..if not found returns -1

// var array1 = ["Ashish", "Barry", "Cherry", "Barry"];
// console.log(array1.indexOf("Barry", 2));
// console.log(array1.indexOf("barry", 2));

//Backward search
// Search the value .. and returns first occurence from last
// if index is not given than start from last.
//Case sensitive ..if not found returns -1

// var array1 = ["Ashish", "Barry", "Cherry", "Barry"];
// console.log(array1.lastIndexOf("Barry"));
// console.log(array1.lastIndexOf("Barry", 2));

/************* # Includes in an Array************/

// be careful even counts the space
//Case sensitive , forward search

// var array1 = ["Ashish", "Barry", "Cherry", "BarryBrown"];
// console.log(array1.includes("Barry"));

// console.log(array1.includes("Barry", 2));

/************* # Find in an Array************/

// To find anything in  array ..
// problem => it only returns one result or the first result that satisfies the condition
// arguements => element, index, array,this
//  If not found return undefined

// const price = [100, 150, 200, 250, 300, 350];
// let result = price.find((val) => {
//   return val < 50;
// });
// console.log(result);

/************* # FindIndex in an Array************/
// To find index of anything in  array ..
// problem => it only returns one result or the first result's index that satisfies the condition
// arguements => element, index, array,this
//  If not found return -1

// const price = [100, 150, 200, 250, 300, 350];
// let result = price.findIndex((val) => {
//   return val > 200;
// });
// console.log(result);

/************* # Filter in an Array************/
// Returns a new array for all the result that satifies the condition
// If found nothing returns blank array

// const price = [100, 150, 200, 250, 300, 350];
// let newArray = price.filter((val) => {
//   return val < 300;
// });
// console.log(newArray);

/************* # Sort an Array************/
// sorts the array in place
// default order of sorting is ascending
// incase of string array ... sort acc to first alphabtical letter
// incase of nubmers it will first convert them into strings 1,2 => One , two
// => then sort in asc order of alphabetical order

// const months = ["August", "Apr", "March", "Jun", "May", "July"];
// console.log(months.sort());

// Works incorrect in case of numbers sorting

// const nums = [1, 4, 100, 5, 29, 9, 33];
// console.log(nums.sort());

/************* # Map in an Array************/

// It returns the new array without mutating the original array with value true or false.
//chainable after return we can use any method .reduce .sort
// forEach returns undefined

// const array1 = [1, 2, 3, 4, 5, 6];

// let newArr = array1.map((currElem, index, arr) => {
//   return currElem > 3;
// });
// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((currElem, index, arr) => {
//   if (currElem > 3) return `${currElem} with index ${index} from ${arr} array`;
//   else return;
// });
// console.log(array1);
// console.log(newArr);

// Questions
// Find the square root of all the elements of an array

// const array1 = [25, 36, 49, 64, 81];
// const newArr = array1.map((currElem) => {
//   return Math.sqrt(currElem);
// });
// console.log(newArr);

// Multiply all element by 2 and return only those who is greater than 10

// const array1 = [2, 3, 4, 6, 8];
// const newArr = array1
//   .map((currElem) => {
//     return 2 * currElem;
//   })
//   .filter((currElem) => {
//     return currElem > 10;
//   });
// console.log(newArr);

/************* # Reduce in an Array************/

//  To flatten a 2D or 3D array into 1D.
// Jha result single value m cahiye ho like sum of all , avg of all , total %
// arguements =>(accumulator,currElem,index,arr)
// accumulator = ikthaa krna

// let arr = [3, 4, 5, 8];
// let newArr = arr.reduce((accumulator, currElem, index, arr) => {
//   return (accumulator += currElem);
// });

// console.log(newArr);

// If want to give an initial val

// let arr = [2, 4, 5];
// const newArr = arr.reduce((accumulator, currVal) => {
//   return (accumulator *= currVal);
// }, 0);
// console.log(newArr);

/************* # Flatten an Array************/

// Converting an 2D or 3D arrray in 1D

// const arr = [
//   ["hello ", "Panda"],
//   ["world ", "Me"],
//   ["chotu", "baby"],
// ];

// const flatArr = arr.reduce((accumulator, currVal) => {
//   return accumulator.concat(currVal);
// });
// console.log(flatArr);

// only problem with this is when we have nested array like

// const arr = [
//   ["hello ", "Panda"],
//   ["world ", "Me"],
//   ["chotu", ["baby", "boy"]],
// ];

// const flatArr = arr.reduce((accumulator, currVal) => {
//   return accumulator.concat(currVal);
// });
// console.log(flatArr);
