let fileName = 'Outer Variable'; // outer variable

function greetTo(userName){
    let funName = 'Greet To'; // local variable
    console.log(`Hello ${userName}`);
    console.log(`I am ${funName} function`);
    console.log(`I am in ${fileName} File`);
}

greetTo("Amit");

// console.log(funName); ==> Error
