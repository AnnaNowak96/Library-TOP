const myLibrary = [
    {title: "Virion. Wyrocznia. Tom 1", author: "Andrzej Ziemianski", pages: 506, read: true},
    {title: "Odrobina magii",author: "Agnieszka Olejnik", pages: 400, read: false}
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.getInfo = function() {
    return this.title + ", " + this.author + ", " + this.pages + ", " + this.read;
};

const virion = new Book("Virion. Wyrocznia. Tom 1", "Andrzej Ziemianski", 506, true);
const wypiekiDefensywne = new Book("Wypieki defensywne. Przewodnik dla czarodziejów i czarodziejek","Kingfisher T.", 336, true);
const odrobinaMagii = new Book("Odrobina magii", "Agnieszka Olejnik", 400, true);


function displayBook() {
    const container = document.querySelector(".book-shelf");
    for (i=0; i < myLibrary.length; i++) {
        const book = myLibrary[i];

        const newBook = document.createElement("div");
        newBook.classList.add("book");

        const titleElement = document.createElement("h2");
        titleElement.textContent = book.title;
        newBook.appendChild(titleElement);

        const authorElement = document.createElement("p");
        authorElement.textContent = book.author;
        newBook.appendChild(authorElement);

        const pagesElement = document.createElement("p");
        pagesElement.textContent = book.pages + " pages";
        newBook.appendChild(pagesElement);

        const readElement = document.createElement("p");
        if (book.read == true) {
            readElement.textContent = "tak";
        } else {
            readElement.textContent = "nie";
        }
        newBook.appendChild(readElement);

        container.appendChild(newBook);
    };  
}

   
    

function addDivForNewBook() {
    const container = document.querySelector(".book-shelf");
    const newBook = document.createElement("div");
    newBook.classList.add("book");
    container.appendChild(newBook);
}

function showDialog() {
    const dialog = document.querySelector("dialog");
    const closeBtn = document.querySelector(".close");
    dialog.showModal();
    closeBtn.addEventListener("click", () => {
        dialog.close();
    })
}



// myLibrary.push(virion);
// console.log(virion.getInfo());



displayBook();
document.querySelector(".add").addEventListener("click", showDialog);
