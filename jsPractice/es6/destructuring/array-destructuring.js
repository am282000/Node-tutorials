/********** Array destructuring => destructor the array in small chunks*********/

//Normal Way

// const array = ["ashish", "apple", 21];
// let name = array[0];
// let fruit = array[1];
// let age = array[2];
// console.log(`Hey ${name} you like ${fruit} and your age ${age}`);

// In Array destructuring

// const array = ["ashish", "apple", 21];
// let [name, fruit, age] = array;
// console.log(`Hey ${name} you like ${fruit} and your age ${age}`);

// Sometimeswe also want to assign a default value

const array = ["ashish", "apple", 21];
let [name, fruit, age, degree = "B.tech"] = array;
console.log(`Hey ${name} you like ${fruit} and your age ${age} with degree ${degree}`);
