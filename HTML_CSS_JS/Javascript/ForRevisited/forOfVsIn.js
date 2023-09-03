let employee = {
    employeeId : "EMP-1101",
    employeeName : "Fatima",
    salary : 100000,
    tax : "10%"
};

let JSONData = JSON.stringify(employee);

for(let temp of JSONData){
    console.log(temp);
}
