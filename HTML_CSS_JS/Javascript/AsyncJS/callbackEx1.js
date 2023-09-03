function showConsole(result){
    console.log(`Result = ${result}`);
}

function showBody(result){
    let comp = document.getElementById("mydiv");
    comp.innerHTML = `Result = ${result}`;
}

function adder(num1, num2, cb){
    let res = num1 + num2;
    cb(res);
}

adder(25, 35, showConsole);

adder(125, 547, showBody);
