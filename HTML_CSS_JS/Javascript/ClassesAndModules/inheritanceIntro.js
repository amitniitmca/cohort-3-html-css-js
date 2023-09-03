class Book{ // Parent Class or Super Class or Base Class
    showDetails(bookName){
        console.log(bookName);
    }
}

class NewBook extends Book{ // Child Class or Sub Class or Derived Class

}

let book1 = new Book();
book1.showDetails("Let us C");

let book2 = new NewBook();
book2.showDetails("OOPS with C++");