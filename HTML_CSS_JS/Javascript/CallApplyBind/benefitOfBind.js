let Employee = {
    employeeId : "EMP-007",
    firstName : "Amit",
    lastName : "Kumar",

    fullName : function(){
        let comp = document.getElementById("mydiv");
        console.log(this.firstName+" "+this.lastName);
        comp.innerHTML = this.firstName+" "+this.lastName;
    }
};

let display = Employee.fullName.bind(Employee);

setTimeout(display, 3000);
