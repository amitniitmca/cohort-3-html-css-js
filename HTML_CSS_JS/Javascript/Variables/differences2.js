
function myfun(){
    {
        let letA = 10;
        var varA = 20;
        const constA = 30;
    }
    console.log('==== INSIDE FUNCTION ====');
    console.log('VAR A : '+varA);
    console.log('LET A : '+letA);
    console.log('CONST A : '+constA);
}

myfun();

// Var has the scope of the function 
// Let and Const has the scope of the block