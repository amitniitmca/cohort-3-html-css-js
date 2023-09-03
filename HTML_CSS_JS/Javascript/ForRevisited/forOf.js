let myarray = [10, 20, 30, "Amit", "Besher", "Azar"];

let comp = document.getElementById("mylist");

let message = "<UL>";

for(let temp of myarray){
    message += "<LI>"+temp+"</LI>";   
}

message += "</UL>";

comp.innerHTML = message;


let myname = "Amit Kumar";

for(let ch of myname){
    console.log(ch);
}