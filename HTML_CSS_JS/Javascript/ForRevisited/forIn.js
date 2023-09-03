let employee = {
    employeeId : "EMP-1101",
    employeeName : "Fatima",
    salary : 100000,
    tax : "10%"
}

let comp = document.getElementById("mylist");

let message = "<UL>";

for(let key in employee){
    message += "<LI>"+key+" => "+employee[key]+"</LI>";   
}

message += "</UL>";

comp.innerHTML = message;