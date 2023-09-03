class Employee{
    constructor(eCode, eName, sal) {
        this.employeeCode = eCode;
        this.employeeName = eName;
        this.salary = sal;
    }
    displayDetails(){
        console.log(`Employee Code : ${this.employeeCode}`);
        console.log(`Employee Name : ${this.employeeName}`);
        console.log(`Salary : ${this.salary}`);
    }
}

class TeachingStaff extends Employee{
    constructor(eCode, eName, sal, sub) {
        super(eCode, eName, sal);
        this.subject = sub;
    }
    displayDetails(){
        super.displayDetails();
        console.log(`Subject : ${this.subject}`);
    }
}

class NonTeachingStaff extends Employee{
    constructor(eCode, eName, sal, shift){
        super(eCode, eName, sal);
        this.shiftTiming = shift;
    }
    displayDetails(){
        super.displayDetails();
        console.log(`Shift Timing : ${this.shiftTiming}`);
    }
}

let emp = new Employee("101", "Besher", 25000);
emp.displayDetails();
console.log("---------------------");
let ts = new TeachingStaff("102", "Amit", 20000, "JavaScript");
ts.displayDetails();
console.log("---------------------");
let nts = new NonTeachingStaff("103", "Parviz", 15000, "8:00 AM to 5:00 PM");
nts.displayDetails();