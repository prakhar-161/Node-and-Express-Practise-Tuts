// const oper = require('./5.oper');

//Through object destructuring...
const {add,subtract,multiply,divide} = require('./5.oper');

// console.log(name);

// console.log(oper);                       //returns an object
// console.log(oper.add(4,6));
// console.log(oper.subtract(9,3));

console.log(add(4,7));
console.log(subtract(8,4));
console.log(multiply(3,4));
console.log(divide(8,3));