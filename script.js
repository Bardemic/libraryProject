const myLibrary = [];
const titleInput = document.querySelector("#bookTitle");
const pagesInput = document.querySelector("#bookPages");
const authorInput = document.querySelector("#bookAuthor");

const booksContainer = document.querySelector("#books");


function getBook() {
    myLibrary.push(new book(titleInput.value, pagesInput.value, authorInput.value));
    updateBooksList();
}

function book(title, pages, author) { 
    this.title = title;
    this.pages = pages;
    this.author = author;
}

function updateBooksList() {
    booksContainer.innerHTML = "";
    for(var i = 0; i < myLibrary.length; i++) {
        const bookDiv = document.createElement("div");
        const title = document.createElement("h3");
        title.innerHTML = myLibrary[i].title;
        bookDiv.append(title);
        booksContainer.append(bookDiv);
    }
}
