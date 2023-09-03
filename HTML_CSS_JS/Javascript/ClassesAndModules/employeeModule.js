export default class Employee {
    employeeId;
    firstName;
    lastName;
    basicSalary;
    taxRate;

    constructor(id, fName, lName, bs, tRate){
        this.employeeId = id;
        this.firstName = fName;
        this.lastName = lName;
        this.basicSalary = bs;
        this.taxRate = tRate;
    }

    fullName(){
        return this.firstName+" "+this.lastName;
    }

    netSalary(){
        let amountToDeduct = this.basicSalary * this.taxRate;
        return this.basicSalary - amountToDeduct;
    }
}