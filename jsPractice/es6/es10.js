// ES-10

/**************Flaten an Array*************/

//flat()  - flat one level
//flat(2)  - flat two level
//flat(Infinity) - flat infinite level

// const arr = [
//   ["zone1", "zone2"],
//   ["zone3", "zone4"],
//   [["zone5", "zone6"], "zone7"],
// ];
// console.log(arr);
// // console.log(arr.flat(2));
// console.log(arr.flat(Infinity));

/**************FlatMap an Array*************/
// let arr1 = [1, 2, 3, 4];
// console.log(arr1.flatMap((x) => x * 2));
// console.log(arr1.flatMap((x) => [[x * 2]]));

/**************Optional Catch Binding*************/

// try {
//   throw new Error("Hey Guys");
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("I am done");
//   //clean up code
// }

/**************Object Transformation*************/

// array-> object

// const arr = [
//   ["1", "2"],
//   ["3", "4"],
// ];
// console.log(arr);
// let obj = Object.fromEntries(arr);
// console.log(obj);

// map-> object

// const arr = new Map([
//   ["1", "2"],
//   ["3", "4"],
// ]);
// console.log(arr);
// let obj = Object.fromEntries(arr);
// console.log(obj);

/**************fromEntries *************/

// let obj = {
//   key1: "value1",
//   key2: "value2",
// };
// console.log(obj);
// let newObj = Object.entries(obj);
// console.log(newObj); // array to objects
// let originalObj = Object.fromEntries(newObj);
// console.log(originalObj);

/**************trimStart and trimEnd *************/

// let string = "        Hi there        ";
// console.log(string);
// console.log(string.trimStart());
// console.log(string.trimEnd());
// console.log(string.trim()); //all space gone

/**************Symbol description *************/

//If I want tp compare a and b => than I have to convert a into string
// let a = "My Symbol";
// let b = Symbol(a);
// console.log(a);
// console.log(b);
// console.log(a == b);
// console.log(a == b.description);

/**************function .toString*************/

//Also prints comment whitespace everything now

// function /* Heelloo*/ myFunction() {}
// console.log(myFunction.toString());

/**************Dynamic Imports *************/

// export function myFunc() {
//   return "This a random func";
// }

// import { myFunc } from "./main.js";
