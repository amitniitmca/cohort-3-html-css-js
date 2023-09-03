let myarray = ["Amit", "Stephania", "Besher", "Azar", "Samaya"];
            //   0          1           2        3       4
            //   -5        -4          -3       -2      -1

let myvar1 = myarray.splice(1, 2);

console.log(myarray);
console.log(myvar1);

let myvar2 = myarray.splice(2, 0, "Parviz", "Vinuja");
console.log(myarray);
console.log(myvar2);

myarray.splice(4, 0, "Aynur");
console.log(myarray);