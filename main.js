function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.getInfo = function() {
    return this.title + ", " + this.author + ", " + this.pages + ", " + this.read;
    // console.log(this.title, this.author, this.pages, this.read);
};

const virion = new Book("Virion. Wyrocznia. Tom 1", "Andrzej Ziemianski", 506, "przeczytana");
const wypiekiDefensywne = new Book("Wypieki defensywne. Przewodnik dla czarodziejów i czarodziejek","Kingfisher T.", 336, "przeczytana");
const odrobinaMagii = new Book("Odrobina magii", "Agnieszka Olejnik", 400, "przeczytana");

console.log(virion.getInfo());
virion.getInfo();