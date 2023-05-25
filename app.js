let myLibrary = [];

const title = document.getElementById("title");
const author = document.getElementById("author");
const addBookBtn = document.getElementById('addBtn')
const container = document.getElementById("container");

function Book(title, author, pages, haveRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead

}
const bookOne = new Book("The Hobbit", "Tolkien", "1000", "No");
const bookTwo = new Book("LOTR", "Tolkien", "500", "No");
myLibrary.push(bookOne);
myLibrary.push(bookTwo);

function addBookToLibrary(){
}

function displayLibrary(){
    removeExisting();
    const listTitles = myLibrary.map(book => createCard(book));
}

function removeExisting(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function createCard(book){
    const card = document.createElement("div");
    card.id = "card";
    container.appendChild(card);

    const heading = document.createElement("h2")
    heading.innerHTML = book.title
    heading.id = "bookTitle";
    card.appendChild(heading);

    const para = document.createElement("p");
    para.innerHTML = book.author + `<br>` + book.pages
    para.id = "bookDetails";
    card.appendChild(para);

    const btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.className ="deleteBtn";
    card.appendChild(btn);
    createDeleteBtn()
}

function createDeleteBtn() {
    const deleteButtons = document.getElementsByClassName("deleteBtn");
    for (let deleteButton of deleteButtons){ 
        deleteButton.addEventListener('click', (e) => {
            //e.currentTarget.parentNode.remove();        
            let titleToRemove = e.target.parentNode.firstElementChild.innerHTML
            console.log(titleToRemove)
            index = myLibrary.findIndex(x => x.title === titleToRemove)
            console.log(index)
            myLibrary.splice(index, 1);
        })
    }
}

function testClick(){
    console.log("click")
}

addBookBtn.addEventListener('click', () => {
    const form = document.getElementById('form');

    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});

let form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let read = "";
     
    if (have_read.checked === true) {
        read = "Yes"
    } else {
        read = "No"
    }
    e = new Book(title.value, author.value, pages.value, read);
    myLibrary.push(e);
    displayLibrary();
    form.reset();
})
