let paragraphs = document.getElementsByName("para");

let colors = ["yellow", "cyan", "LightGray", "Tomato"];

for(let index=0; index < paragraphs.length; index++){
    paragraphs[index].style.backgroundColor = colors[index];
}