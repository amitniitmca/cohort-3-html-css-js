// Constructor Function Approach

let add = new Function('n1', 'n2', 'return n1 + n2');
let sub = new Function('n1', 'n2', 'return n1 - n2');
let mul = new Function('n1', 'n2', 'return n1 * n2');
let quo = new Function('n1', 'n2', 'return n1 / n2');
let rem = new Function('n1', 'n2', 'return n1 % n2');
let isNegative = new Function('n1', 'return n1 < 0');
let sample = new Function('name', 'console.log("Hello "+name)');

console.log(add(258, 456));
console.log(sub(258, 456));
console.log(mul(258, 456));
console.log(quo(456, 258));
console.log(rem(456, 258));
console.log(isNegative(25));
console.log(isNegative(-25));

sample("Amit");