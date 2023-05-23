// function Student(name, grade) {
//   this.name = name;
//   this.grade = grade;
// }

// Student.prototype.sayName = function () {
//   console.log(this.name);
// };

// Student.prototype.goToProm = function () {
//   console.log("Eh.. go to prom?");
// };

// const studentOne = new Student("Susan", 9);
// studentOne.sayName();

// const studentTwo = new Student("Dave", 20);
// studentTwo.sayName();

let myLibrary = [];

const title = document.getElementById("title");
const author = document.getElementById("author");



function Book(title, author, haveRead) {
    this.title = title
    this.author = author
    this.haveRead = haveRead

}

function addBookToLibrary(){
}


function getBook(){
    let getTitle = prompt("Enter book title");
    let getAuthor = prompt("Enter book author");
    let getRead = prompt("Have you read it?");

    const bookOne = new Book(getTitle, getAuthor, getRead);
    console.log(bookOne);

}
const bookOne = new Book("The Hobbit", "Tolkien", "No");
const bookTwo = new Book("LOTR", "Tolkien", "No");
myLibrary.push(bookOne);
myLibrary.push(bookTwo);


function displayLibrary(){
    const listTitles = myLibrary.map(book => createCard(book));

    //const listAuthors = myLibrary.map(book => author.innerHTML += book.author);

    // const listBooks = myLibrary.map(book => `${book.title} ${book.author} ${book.haveRead}`);
    // title.innerHTML = listBooks
}
const container = document.getElementById("container");

function createCard(book){
    const card = document.createElement("div");
    card.id = "card";
    container.appendChild(card);
    card.innerHTML = book.title + `<br>` + book.author + `<br>` + book.haveRead
}