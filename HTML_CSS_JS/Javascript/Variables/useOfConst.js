const tax = 0.15;

let salary1 = 10000;
let salary2 = 20000;
let salary3 = 30000;

let netSalary1 = salary1 - (salary1 * tax);
let netSalary2 = salary2 - (salary2 * tax);
let netSalary3 = salary3 - (salary3 * tax);

console.log('Net Salary 1 : '+netSalary1);
console.log('Net Salary 2 : '+netSalary2);
console.log('Net Salary 3 : '+netSalary3);