let comp1 = document.querySelector("h1");
let comp2 = document.querySelector("#heading");
let comp3 = document.querySelector(".head");

console.log(comp1);
console.log(comp2);
console.log(comp3);

let comp4 = document.querySelectorAll(".para");

for(let index=0; index < comp4.length; index++){
    console.log(comp4[index]);
}