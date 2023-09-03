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

console.log(Employee.fullName());
console.log(Employee.netSalary());