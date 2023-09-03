
let adder = (num1, num2) => num1 + num2;

let greet = (name) => console.log(`Hello ${name}`);

let average = (num1, num2, num3) => (num1 + num2 + num3) / 3;

console.log(average(2,10,16));

let greet2 = (name) => {
    console.log(`Hello ${name}`);
    console.log(`How are you ${name}?`);
}

console.log(adder(25, 35));

greet("Amit");
greet2("Amit");
