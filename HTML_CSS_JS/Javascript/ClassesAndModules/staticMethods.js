class Book{
    static country = 'US';

    constructor(bName, aName, pr){
        this.bookName = bName;
        this.authorName = aName;
        this.price = pr;
    }

    static show(name){
        console.log(`Hello ${name}`);
        console.log(this.country);
    }
}

let book1 = new Book("Let Us C", "Yashwant Kanitkar", 4);
let book2 = new Book("OOPS with C++", "Herbert Schildt", 30);
let book3 = new Book("Blackbook on HTML", "Herbert Schildt", 25);

console.log(book1);
console.log(book2);
console.log(book3);

Book.show("Amit");