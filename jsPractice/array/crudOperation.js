/**************In case of array*****************/

/**************Create*****************/

// #push

// push => add the element in last of the array
// we can add one or more elements to the array
// It always return the length of the new Array (update the old array)

// const animals = ["panda", "billu", "bhallu"];
// animals.push("monku");
// const zoo = animals.push("chintu", "chilgoza");

// console.log(zoo);
// console.log(animals);

// # unshift

// unshift => add the element in front of the array
// we can add one or more elements to the array
// It always return the length of the new Array (update the old array)

// const animals = ["panda", "billu", "bhallu"];
// animals.unshift("monku");
// const zoo = animals.unshift("chintu", "chilgoza");

// console.log(zoo);
// console.log(animals);

// #pop

// removes elements from the last of array
// returns the element that is removed from of the array

// const animals = ["grumfy", "panda", "billu", "bhallu", "dumbo"];
// const poppedAniaml = animals.pop();
// console.log(poppedAniaml);
// console.log(animals);

//#shift

// removes elements from the start of array
// returns the element that is removed from         of the array

// const animals = ["grumfy", "panda", "billu", "bhallu", "dumbo"];
// const poppedAniaml = animals.shift();
// console.log(poppedAniaml);
// console.log(animals);

// #splice
// splice(from where to delete index no, how many elements delete , what to add)
// return array of deleted  items.. blank array

// const months = ["Jan ", "march", "April", "June", "July"];
// const val = months.splice(months.length - 1, 1, "Dec");
// console.log(val);
// console.log(months);

//Find and replace

// const months = ["Jan ", "march", "April", "June", "July"];
// const indexOfMonth = months.indexOf("march");
// if (indexOfMonth != -1) {
//   months.splice(indexOfMonth, 1, "March");
//   console.log(months);
//   console.log(indexOfMonth);
// } else console.log("No data found");

// delete all further elements
const months = ["Jan ", "march", "April", "June", "July"];
const indexOfMonth = months.indexOf("April");
if (indexOfMonth != -1) {
  months.splice(indexOfMonth, Infinity);
  console.log(months);
  console.log(indexOfMonth);
} else console.log("No data found");
