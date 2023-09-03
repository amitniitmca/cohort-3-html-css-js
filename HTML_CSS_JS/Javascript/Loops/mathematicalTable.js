let num = prompt("Enter a number :");

let mult;

for(mult = 1; mult <= 10; mult++){
    let tab = mult * num;
    console.log(`${num} x ${mult} = ${tab}`);
}

console.log(mult);