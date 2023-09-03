class Book{
   bookName;
   authorName;
   price;
   
    set name(value){
        this.bookName = "BOOK-"+value;
    }
    get name(){
        return this.bookName;
    }

    set author(value){
        this.authorName = value;
    }
    get author(){
        return this.authorName;
    }

    set bookPrice(value){
        this.price = value;
    }
    get bookPrice(){
        return this.price;
    }
}

let book1 = new Book();
book1.name = "Let us C";
book1.author = "Yashwant Kanitkar";
book1.bookPrice = 4;
console.log(book1.name);
console.log(book1.author);
console.log(book1.bookPrice);

