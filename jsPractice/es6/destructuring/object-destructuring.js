/*******Object Destructuring*********/

// Normal way
// const myBioData = {
//   name:"Ashish",
//   age:21
// }
// let name = myBioData.name;
// let age=myBioData.age;
// console.log(name,age);

//Destructuring
const myBioData = {
  name:"Ashish",
  age:21
}
let {name,age,gender="male"}= myBioData;
console.log(name,age,gender);
