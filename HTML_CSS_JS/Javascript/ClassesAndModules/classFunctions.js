class Book{
    constructor(bName, aName, pr){
        this.bookName = bName;
        this.authorName = aName;
        this.price = pr;
    }

    display(divComp){
        let message = `Book Name : <b> ${this.bookName} </b> <br>`;
        message += `Author Name : <b> ${this.authorName} </b> <br>`;
        message += `Price : <b> ${this.price}$ <b> <br> <br>`;
        divComp.innerHTML = message;
    }
}

let book1 = new Book("Let Us C", "Yashwant Kanitkar", 4);
let book2 = new Book("OOPS with C++", "Herbert Schildt", 30);
let book3 = new Book("Blackbook on HTML", "Herbert Schildt", 25);

book1.display(document.getElementById("div1"));
book2.display(document.getElementById("div2"));
book3.display(document.getElementById("div3"));