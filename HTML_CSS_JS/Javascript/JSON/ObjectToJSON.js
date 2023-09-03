let student = {
    name : "Amit Kumar",
    admNo : 1101,
    gender : "Male",
    havingContact : false,
    email : null,
    subjects : ["HTML", "CSS", "JS"]
};

console.log(student);

let jsonData = JSON.stringify(student);

console.log(jsonData);