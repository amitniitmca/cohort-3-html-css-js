function showClock(){
    let comp = document.getElementById("mydiv");
    let mydate = new Date();

    let h = mydate.getHours(); 
    let m = mydate.getMinutes(); 
    let s = mydate.getSeconds();

    comp.innerHTML = `<H1> ${h} : ${m} : ${s} </H1>`;
}

setInterval(showClock, 1000);