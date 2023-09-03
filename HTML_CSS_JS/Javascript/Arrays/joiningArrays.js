let myarray1 = ["Amit", "Stephania", "Besher", "Azar", "Farhad"];
let myarray2 = [10, 20, 30, 40, 50];

let newArray1 = myarray1.concat(myarray2);

let newArray2 = myarray2.concat(myarray1);

console.log(newArray1);
console.log(newArray2);

let newArray3 = myarray1.concat([1, 2, 3]);
let newArray4 = [1, 2, 3].concat(myarray1);

console.log(newArray3);
console.log(newArray4);