async function display(){
    let mypromise = new Promise(function(resolve){
        setTimeout(function() {
            resolve("I Love JS");
        }, 3000);
    });
    let comp = document.getElementById("mydiv");
    comp.innerHTML = await mypromise;
}

display();