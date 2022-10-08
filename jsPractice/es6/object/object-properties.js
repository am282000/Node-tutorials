/**********Adding dynamic properties in Object ***********/

// let myName = "Ashish";
// const myBio = {
//   myName: "is my name",
//   26: "is my age ",
// };
// console.log(myBio);

// Output =  { '26': 'is my age ', myName: 'is my name' }

// let myName = "Ashish";
// const myBio = {
//   [myName]: "is my name",
//   [26 + 1]: "is my age ",
// };
// console.log(myBio);

// Output = { '27': 'is my age ', Ashish: 'is my name' }

/**********No need to writekey and value if both are same ***********/

let myName = "Ashish";
let myAge = 21;
const bioData = {
  myName: myName, // myName m daalni h mere vale myname ki value i.e. <Ashish>
  myAge: myAge,
};
const bioData2 = {
  myName,
  myAge,
};
console.log(bioData);
console.log(bioData2);
