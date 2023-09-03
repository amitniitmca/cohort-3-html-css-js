/*
for(Initialization; condition_check; Updating){
    statement_to_repeat;    
}
*/

let fn = prompt("Enter first number :");
let sn = prompt("Enter second number :");

let min = Math.min(fn, sn);
let max = Math.max(fn, sn);

for(let lc = min; lc <= max; lc++){ 
    console.log(lc);
}