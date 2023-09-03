// let a; ==> No Error, value will be undefined
let a = 10;
a = 100;
console.log(a);

// var b; ==> No Error, value will be undefined
var b = 20;
b = 200;
console.log(b);

// const c;  ==> Will be an error, it must be initialized
const c = 30;
// c = 300; ==> Will be an error, cannot change constant variable
console.log(c);
