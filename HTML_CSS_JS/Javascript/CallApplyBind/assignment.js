let Book = {
    BookName : "Salt and Sugar",
    authorName: "Stephania",
    Price : "30",
    showDetail : function(){
        console.log(`Book Name : ${this.BookName}`);
        console.log(`Author Name : ${this.authorName}`);
    }
};

let Book2 = {
    BookName : "Feeling Well",
    authorName: "Samaya",    
};

Book.showDetail();

Book2BookName = Book.showDetail.bind(Book2);
Book2BookName();