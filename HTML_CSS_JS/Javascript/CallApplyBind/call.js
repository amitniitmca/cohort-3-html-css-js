let Employee = {
    employeeId : "EMP-007",
    firstName : "Amit",
    lastName : "Kumar",
    basicSalary : 10000,
    taxRate : 0.10,

    fullName : function(){
        return this.firstName+" "+this.lastName;
    },

    netSalary : function(){
        let amountToDeduct = this.basicSalary * this.taxRate;
        return this.basicSalary - amountToDeduct;
    }

};

let Emp1 = {
    firstName : "Besher",
    lastName : "Alsakati"
}

let Emp2 = {
    basicSalary : 10000,
    taxRate : 0.10,
}

console.log(Employee.fullName());
console.log(Employee.fullName.call(Emp1));
console.log(Employee.fullName.call(Emp2));