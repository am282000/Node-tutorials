// Object is a key value pair

/*********Object Literal*********/

// let bioData = {
//   name: "Ashish",
//   age: 21,
//   fetchData: function () {
//     console.log(`Hi my name is ${bioData.name} nd age is ${bioData.age}`);
//   },
//   //after es 6
//   getData: () =>
//     console.log(`Hi my name is ${bioData.name} nd age is ${bioData.age}`),
//   //after es 6
//   newData() {
//     console.log(`Hi my name is ${bioData.name} nd age is ${bioData.age}`);
//   },
// };

// console.log(bioData.name);
// bioData.fetchData();
// bioData.getData();
// bioData.newData();

/*********object of object*********/

// let bioData = {
//   name: {
//     firstName: "John",
//     lastName: "Cena",
//   },
// };

// console.log(bioData.name);
// console.log(`${bioData.name.firstName} ${bioData.name.lastName}`);

/*********this object*********/

// It contains the current context

// ####  Context 1  #####
// console.log(this); // window global object - see on console

// ####  Context 2  #####
// console.log(this.alert("Awesome")); // window global.alert object - see on console

// ####  Context 3  #####
function myName() {
  console.log(this);
}
myName(); // window global object - see on console

// ####  Context 4  #####

let type = "male";
function myType() {
  console.log(this.male);
}
myType(); // window global object - see on console,  value = male

// ####  Context 5  #####  in case of object
let obj = {
  myName: "Ashish",
  getName() {
    console.log(this);
    console.log(this.myName);
  },
};
obj.getName(); //function scope

// ####  Context 6  #####  in case of object with arrow function

// Exception => We can't use this in arrow function to get obj value

let obj = {
  myName: "Ashish",
  getName: () => {
    console.log(this); //window global object
    console.log(this.myName); //obj will not work with arrow func
  },
};
obj.getName(); //window global object
