const text1 = "YOLL ACADEMY";
const text2 = "Launch your new IT career! ";

let comp = document.getElementById("heading");
comp.style.textAlign = "center";

function enter(){
    comp.innerText = text2;
    comp.style.backgroundColor = "red";
    comp.style.color = "yellow";
}

function leave(){
    comp.innerText = text1;
    comp.style.backgroundColor = "yellow";
    comp.style.color = "red";
}