import MyEmp from './employeeModule.js';

let emp = new MyEmp("101", "Amit", "Kumar", 25000, 0.15);

console.log(emp);

console.log(emp.fullName());
console.log(emp.netSalary());
