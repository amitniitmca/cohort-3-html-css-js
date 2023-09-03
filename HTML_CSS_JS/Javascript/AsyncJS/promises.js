function showBody(result){
    let comp = document.getElementById("mydiv");
    comp.innerHTML = result;
}

function showConsole(result){
    console.log(result);
}

let mypromise = new Promise(function myfunction(res, rej){
    let x = 11;

    if(x > 10){
        res("OK");
    }
    else{
        rej("ERROR")
    }
});

mypromise.then(
    function (val) { showBody(val) },
    function (val) { showConsole(val) }
);