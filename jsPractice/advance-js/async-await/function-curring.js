// Evaluating func with multiple arguments , into sequence of func with a single argument

// Instead of taking all arguement taking one arguement  and return new func , taking another arguement anf=d returning new function
// and so on until all argument have been fulfilled

//Solution solve it by the help of lexical order

// function sum(num1) {
//   return function (num2) {
//     return function (num3) {
//       console.log(num1, num2, num3);
//       console.log(num1 + num2 + num3);
//     };
//   };
// }

//short hand of same
const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);

sum(5)(3)(8); // Note this is different from sum(5,3,8)
