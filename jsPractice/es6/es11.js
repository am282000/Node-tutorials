/**********Promise.race**********/

// Promise.race = who is working first

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("one"), 500);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("two"), 100);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("three"), 50);
// });

// Promise.race([promise1, promise2, promise3]).then(
//   (value) => console.log(value),
//   () => console.log("!Error")
// );

// Output = three

/**********Promise all**********/

// Promise.all = All promises work at the same time returns all promise in a array if all resolved or all reject

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("one"), 500);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("two"), 100);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("three"), 50);
// });

// Promise.all([promise1, promise2, promise3]).then(
//   (value) => console.log(value),
//   () => console.log("!Error")
// );

// Output = [ 'one', 'two', 'three' ]

// Only problem if any one is rejected =we can't use other resolved values

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("one"), 500);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error()), 100);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("three"), 50);
// });

// Promise.all([promise1, promise2, promise3]).then(
//   (value) => console.log(value),
//   () => console.log("!Error")
// );

//output = !Error

/**********Promise allSettled********** return the object with resolved and rejected values  */

// If promise resolved than we get value if failed then we get reason

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("one"), 500);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error()), 100);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("three"), 50);
// });

// Promise.allSettled([promise1, promise2, promise3]).then(
//   (value) => console.log(value),
//   () => console.log("!Error")
// );

// output =   { status: 'fulfilled', value: 'one' },
// {
//   status: 'rejected',
//   reason: Error
//       at Timeout._onTimeout (C:\Users\ASHISH\Desktop\node practice\jsPractice\es6\es11.js:75:27)
//       at listOnTimeout (internal/timers.js:557:17)
//       at processTimers (internal/timers.js:500:7)
// },
// { status: 'fulfilled', value: 'three' }

/*******MatchAll****** return all the occurences of string*/

//match = return the first occurence with index

// const str = "hello-panda-hello-ji-hello-hru";
// console.log(...str.match("hello"));

//matchAll = return all the occurences of regex but spread the string with (...)
// const str = "hello1-panda-hello2-ji-hello3-hru";
// console.log(...str.matchAll("hello"));

//also works on all regex
// console.log(...str.matchAll(/h(ell)o[\d]?/g));

/*************globalThis*************/

//before this

// Platform          Global Object

// browsers          window
// Node              global
// web workers       self

// const getGlobalThis = () => {
//   if (typeof window !== "undefined") return window;
//   if(typeof self !== "undefined") return self;
//   if(typeof global !== "undefined") return global;
//   if(typeof this !== "undefined") return this;
// };

// const getGlobalThis = getGlobalThis();

//Now
// console.log(globalThis);  // try in console

/************Optional chaining************/

// const obj = {
//   a: {
//     b: 1,
//   },
// };
// console.log(obj.a.b);
// console.log(obj.x.y); //Cannot read property 'y' of undefined
// console.log(obj?.x?.y); //Cannot read property 'y' of undefined

/************Nullish coalescing*********syntax ?? ***/
//to check nullish value instead of falsy value

// Nullish value = undefined, null
// Falsy value = undefined,null,false,0,NaN

//Try on console
// undefined ?? "fallback value";
// fallback value

// 0 ?? "fallback value"
// 0

/************BigInt************/

// Used to represent no larger than 2^53 -1

// How to assign bigInt value to a num
// 2 methods - by simply adding n at the last digit at time of declaration
// or by using BigInt()

// const oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);

// const bigint = 9007199254740991n;
// const bigint2 = BigInt(9007199254740991);
// console.log(typeof bigint);

/************Dynamic Import************/

// if (isTrue) {
//   const myFunc = import("./es10");
//   myFunc.myMethod();
// }

/************ Import.meta************/

//Let we have a import like this than import.meta will print its metadata i.e.url of this
// {
//   <script type="module" src="es10.js"></script>;
//   console.log(import.meta);
// }

// output = { url: "file/ASHISH/......" };

/************ Namespace exports************/

// before

// import * as utils from "./es10"
// export {utils};

//Now

// export * as utils from "./es10";

/************ for in mechanics************/
// before for in in objects ka order browser to browser vary krta tha
// But ab sb browsers ne standarized kr diya h

//Es 2014

// "use strict";         // follow all the rules strictly
// x = 3.14;
// console.log(x);
