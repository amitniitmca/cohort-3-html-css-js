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

Employee.fullName(35, "India");
Employee.fullName.call(Emp1, 34, "US");
Employee.fullName.apply(Emp2, [33, "US"]);
