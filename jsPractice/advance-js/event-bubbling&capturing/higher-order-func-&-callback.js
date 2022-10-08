const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return Math.abs(a - b);
};
const mul = (a, b) => {
  return a * b;
};

const calculator = (a, b, operator) => {
  return operator(a, b);
};

console.log(calculator(2, 5, sub));

// Here calculator ia the Higher order func in which other func are passed as arguments.
// Here add, sub, mul are the callback func becoz they are passed as arguments in any higher order func.
