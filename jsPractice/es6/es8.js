/**********String padding*************/

// Give white spaces or padding in string values

// let name = "ashish";
// console.log(name.padStart(10)); // padding from start - includes all the character length too
// console.log(name.padEnd(10)); // padding from end

/**********Object values and object entries************ now easily loop the array */
const person = { name: "ashish", age: 21, dob: "28/08/2000" };
console.log(Object.values(person)); //returns the array of values
console.log(Object.entries(person)); //returns the array of arrays
