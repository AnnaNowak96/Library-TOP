const myLibrary = [
    {title: "Virion. Wyrocznia. Tom 1", author: "Andrzej Ziemianski", pages: 14.45, read: true},
    {title: "Odrobina magii", author: "Agnieszka Olejnik", pages: 10.36, read: false},
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



function storeUserInput() {
    const form =  document.querySelector("form");
    const formData = new FormData(form);

    for (item of formData) {
        console.log(item[0], item[1]);
    }

    console.log(formData);

    // let userBook = {};
    // const inputTitle = document.getElementById("title").value;
    // console.log(inputTitle);
    // userBook.push(inputTitle);

    // const inputAuthor = document.getElementById("author").value;
    // const inputPages = document.getElementById("pages").value;
    // // const inputRead = document.getElementById("read").value;

    // myLibrary.push(userBook);
    // console.log(myLibrary);
}

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
        pagesElement.textContent = book.pages + " hours";
        newBook.appendChild(pagesElement);

        const readElement = document.createElement("p");
        if (book.read == true) {
            readElement.textContent = "tak";
        } else {
            readElement.textContent = "nie";
        }
        newBook.appendChild(readElement);

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove");
        removeBtn.textContent = "Remove";
        newBook.appendChild(removeBtn);
        removeBtn.addEventListener("click", () => {
            newBook.remove();
        })

        container.appendChild(newBook);
    };  
}

// Book.prototype.getInfo = function() {
//     return this.title + ", " + this.author + ", " + this.pages + ", " + this.read;
// };

function showDialog() {
    const dialog = document.querySelector("dialog");
    const closeBtn = document.querySelector(".close");
    dialog.showModal();
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault();
        dialog.close();
    });
}

function removeBook() {
    const newBook = document.querySelector(".book");
    newBook.remove();
}

// myLibrary.push(virion);
// console.log(virion.getInfo());


displayBook();
document.querySelector(".add").addEventListener("click", showDialog);
document.querySelector("#submit").addEventListener("click", storeUserInput);