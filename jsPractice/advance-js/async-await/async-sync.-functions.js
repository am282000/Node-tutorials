/*************Synchronous*************/

const fun2 = () => {
  console.log("Function 2 is running");
};
const fun1 = () => {
  console.log("Function 1 is running");
  fun2();
  console.log("Function 1 is continued");
};
fun1();

/*************ASynchronous*************/
const fun2 = () => {
  setTimeout(() => {
    console.log("Function 2 is running");
  }, 2000);
};
const fun1 = () => {
  console.log("Function 1 is running");
  fun2();
  console.log("Function 1 is continued");
};
fun1();
