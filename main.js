const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// const virion = new Book("Virion. Wyrocznia. Tom 1", "Andrzej Ziemianski", 506, true);
// const wypiekiDefensywne = new Book("Wypieki defensywne. Przewodnik dla czarodziejów i czarodziejek","Kingfisher T.", 336, true);
// const odrobinaMagii = new Book("Odrobina magii", "Agnieszka Olejnik", 400, true);

function storeUserInput() {
    const form =  document.querySelector("form");
    const check = document.getElementById("checkbox");

    form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);

    if (check.checked) {
        obj.read = true;
    } else {
        obj.read = false;
    }
    
    const addedBook = new Book (obj.title, obj.author, obj.pages, obj.read);
    myLibrary.push(addedBook);

    displayBook(addedBook);

    form.reset();
    closeDialog();

    })
}




function displayBook(book) {
    const container = document.querySelector(".book-shelf");

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

        const readCheck = document.createElement("input");
        const readAsk = document.createElement("p");
        readCheck.setAttribute("type", "checkbox");
        readCheck.classList.add("readcheck");
        readAsk.textContent = "Have you listen it yet?"
        readAsk.classList.add("readask");
        readAsk.appendChild(readCheck);
        newBook.appendChild(readAsk);

        if (book.read) {
            readCheck.checked = true;
        } else {
            readCheck.checked = false;
        }
        
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove");
        removeBtn.textContent = "Remove";
        newBook.appendChild(removeBtn);
        removeBtn.addEventListener("click", () => {
            newBook.remove();
        })

        container.appendChild(newBook);  
}

const dialog = document.querySelector("dialog");


function showDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

function removeBook() {
    const newBook = document.querySelector(".book");
    newBook.remove();
}


storeUserInput();
document.querySelector(".add").addEventListener("click", showDialog);
document.querySelector(".close").addEventListener("click", closeDialog);