/************ Hoisting**********/

// Hoisting is a mechnism where variable and func declarations are moved to the top of their local scope

//In case of var

// console.log(myName);
// var myName;
// myName = "hoisting";

//  hoisting order of above code

// var myName;        //if we dont assign any value then it is undefined
// console.log(myName);
// myName = "hoisting";

// In case of let or const

// Gives error you cant use myName before initialization

// console.log(myName);
// let myName;
// myName = "hoisting";

/************ Scope chain**********/
// Used to resolve the value of variables names
// It is lexically defined => means by looking at code we can analyze the scope chain
// At the top we have the global object i.e. window object

/************ Lexical Scoping**********/

// child can access the values of parents variable
// but vice versa is not true

// let a = 10; //global #sbka baap

// const first = () => {
//   // baap 2
//   let b = 5;
//   const second = () => {
//     //baap 3
//     let c = 1;
//     console.log(a + b + c);
//   };
//   second();
//   // console.log(a + b + c);    // c is not defined
// };

// first();

/************ Closures **********/

// child can access all the parameters and variables of parent component

// Two phases creation phase and execution phase

//  In my word closure is like a store where function can store the value sof of variable even after return and ending
// the execution phase

//Example 1
// const outer = (a) => {
//   const inner = () => {
//     let b = 10;
//     console.log(a + b);
//   };
//   inner();
// };
// outer(3);

//check in console

// const outer = (a) => {
//   const inner = () => {
//     let b = 10;
//     console.log(a + b);
//   };
//   return inner;
// };
// let myFunc = outer(3);
// console.dir(myFunc);
