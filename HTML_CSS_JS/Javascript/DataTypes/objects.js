let a = {
    prop1 : 10,
    prop2 : 'value'
};

console.log(a);

let student = {
    name : 'Amit Kumar',
    age : 35,
    standard : 'MCA',
    male : true,
    female : false
};

console.log(student.name);
console.log(student.age);
console.log(student.standard);

student.email = 'amit@yoll.io';

delete student.age;

console.log(student);

console.log(student.age);