/*********Copy all the value of from an array************/
// const color = ["red", "yellow", "green", "blue"];

// const newColor = [...color, "white"];
// console.log(newColor);

//In es9 .. spread will also work for objects

const person = { name: "ashish", age: 21, dob: "28/08/2000" };
const bioData = { interest: "Development", ...person };
console.log(person);
console.log(bioData);
