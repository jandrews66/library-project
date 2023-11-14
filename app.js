let myLibrary = [];

const title = document.getElementById("title");
const author = document.getElementById("author");
const addBookBtn = document.getElementById("addBtn")
const container = document.getElementById("container");

function Book(title, author, pages, haveRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead

}
const bookOne = new Book("The Hobbit", "Tolkien", "1000", "Unread");
const bookTwo = new Book("LOTR", "Tolkien", "500", "Read");
myLibrary.push(bookOne);
myLibrary.push(bookTwo);

function displayLibrary(){
    removeExisting();
    const listTitles = myLibrary.map(book => createCard(book));
    createDeleteBtn()
    createReadBtn()
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
    para.innerHTML = "by " + book.author + `<br>` + book.pages + " pages"
    para.id = "bookDetails";
    card.appendChild(para);

    const readBtn = document.createElement("button");
    readBtn.innerHTML = book.haveRead
    readBtn.className ="readBtn";
    card.appendChild(readBtn);

    const btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.className ="deleteBtn";
    card.appendChild(btn);
}

function createDeleteBtn() {
    const deleteButtons = document.getElementsByClassName("deleteBtn");
    for (let deleteButton of deleteButtons){ 
        deleteButton.addEventListener('click', (e) => {
            const titleToRemove = e.currentTarget.parentNode.firstElementChild.innerHTML
            index = myLibrary.findIndex(x => x.title === titleToRemove)
            myLibrary.splice(index, 1);
            displayLibrary()
        })
    }
}

function createReadBtn() {
    const readButtons = document.getElementsByClassName("readBtn");
    for (let readButton of readButtons){
        readButton.addEventListener('click', (e) => {
            const readTitle = e.currentTarget.parentNode.firstElementChild.innerHTML
            index = myLibrary.findIndex(x => x.title === readTitle)
            if (myLibrary[index].haveRead === "Read"){
                myLibrary[index].haveRead = "Unread"
            } else { 
                myLibrary[index].haveRead = "Read"
            }
            displayLibrary();
        })
    }
}

addBookBtn.addEventListener('click', () => {
    const form = document.getElementById('form');

    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});

const form = document.getElementById('form');
form.style.display = 'none';

form.addEventListener("submit", (e) => {

    if (!title.validity.valid){
        showTitleError();
        e.preventDefault();
        return
    } else if (!constraint.test(author.value)){
        showAuthorError();
        e.preventDefault();
        return
    }

    e.preventDefault();
    let read = "";
     
    if (have_read.checked === true) {
        read = "Read"
    } else {
        read = "Unread"
    }
    e = new Book(title.value, author.value, pages.value, read);
    myLibrary.push(e);
    displayLibrary();
    form.reset();
})

document.addEventListener('click', function handleClickOutsideForm(event) {
  
    if (!form.contains(event.target) && !addBookBtn.contains(event.target)) {
      form.style.display = 'none';
    }
  });

  const titleError = document.querySelector("#title + span.error")
  title.addEventListener("input", (event) =>{
    if (title.validity.valid){
        titleError.textContent = "";
        titleError.className = "error";
    } else {
        showTitleError();
    }

  })

  function showTitleError(){
    if (title.validity.valueMissing){
        titleError.textContent = "You need to add a title"
    } else if (title.validity.tooShort){
        titleError.textContent = "Too short"
    }

    titleError.className = "error active";
  }

  const authorError = document.querySelector("#author + span.error")

  const constraint = new RegExp("^[A-Za-z]+$")

  author.addEventListener("input", (event) =>{
    if (constraint.test(author.value)){
        author.setCustomValidity("");
        authorError.textContent = author.validationMessage;
    } else {
        showAuthorError();
    }

  })

  function showAuthorError(){
    author.setCustomValidity("use alphabet characters only")
    authorError.textContent = author.validationMessage;
  }