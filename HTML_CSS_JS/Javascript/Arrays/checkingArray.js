let myarray = ["Amit", "Stephania", "Besher", "Azar"];
            //   0          1           2        3

let myvar1 = myarray.includes("Amit");
let myvar2 = myarray.includes("Fidan");

console.log(myvar1);
console.log(myvar2);

let myvar3 = myarray.indexOf("Amit");
let myvar4 = myarray.indexOf("Fidan");

console.log(myvar3);
console.log(myvar4);

console.log(Array.isArray(myarray));
console.log(Array.isArray(myvar1));
console.log(Array.isArray(myvar2));