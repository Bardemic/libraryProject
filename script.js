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
        bookDiv.setAttribute("id", i);
        const title = document.createElement("h3");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const delButton = document.createElement("button");
        const readCheckbox = document.createElement("checkbox");
        author.innerHTML = `Author: ${myLibrary[i].author}`;
        title.innerHTML = myLibrary[i].title;
        pages.innerHTML =  `Pages: ${myLibrary[i].pages}`;
        delButton.addEventListener('click', (e) => {
            console.log(myLibrary.splice(e.target.parentElement.id, e.target.parentElement.id + 1));
            updateBooksList();
        })
        bookDiv.append(title);
        bookDiv.append(author);
        bookDiv.append(pages);
        bookDiv.append(delButton);
        bookDiv.append(readCheckbox);
        booksContainer.append(bookDiv);
    }
}

const book1 = new book("One", "1", "One");
const book2 = new book("Two", "2", "Two");
const book3 = new book("Three", "3", "Three");
myLibrary.push(book1, book2, book3);
updateBooksList();