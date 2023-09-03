let myarray = ["Amit", "Stephania", "Besher", "Azar"];
            //   0          1           2        3
            //   -4        -3          -2        -1
let myvar1 = myarray.slice(0, 2);
let myvar2 = myarray.slice(4, 7);
let myvar3 = myarray.slice(-3, -1);
let myvar4 = myarray.slice(-4, -2);

console.log(myarray);
console.log(myvar1);
console.log(myvar2);
console.log(myvar3);
console.log(myvar4);

let salaries = [10000, 50000, 55000, 100000, 500000, 600000];
            //   0       1      2       3       4      5
let less = salaries.slice(0, 3);
let more = salaries.slice(3, 7);
console.log(less);
console.log(more);
