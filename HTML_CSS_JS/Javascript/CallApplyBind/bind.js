let Employee = {
    employeeId : "EMP-007",
    firstName : "Amit",
    lastName : "Kumar",
    basicSalary : 10000,
    taxRate : 0.10,

    fullName : function(age, country){
        console.log(this.firstName+" "+this.lastName);
        console.log(`${this.firstName} is ${age} years old`);
        console.log(`${this.firstName} is living in ${country}`);
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
    firstName : "Stephania",
    lastName : "Isaza"
}

Employee.fullName.bind(Emp1, 34, "Canada")();

let Emp2FullName = Employee.fullName.bind(Emp2, 34, "US");

Emp2FullName();
