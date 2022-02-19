const bookInput = document.querySelector(".book-input");
const bookButton = document.querySelector(".book-button");
const bookList = document.querySelector(".book-list");
const filterOption = document.querySelector(".filter-list");

document.addEventListener("DOMContentLoaded", getBooks);
bookButton.addEventListener("click", addBook);
bookList.addEventListener("click", deleteBook);
filterOption.addEventListener("click", filterBook);

function addBook(e) {
  e.preventDefault();

  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  const newbook = document.createElement("li");
  newbook.innerText = bookInput.value;

  saveLocalbooks(bookInput.value);
  newbook.classList.add("book-item");
  bookDiv.appendChild(newbook);
  bookInput.value = "";

  const readBtn = document.createElement("button");
  readBtn.innerHTML = `&check;`;
  readBtn.classList.add("read-btn");
  bookDiv.appendChild(readBtn);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = `&cross;`;
  trashBtn.classList.add("trash-btn");
  bookDiv.appendChild(trashBtn);

  bookList.appendChild(bookDiv);
}

function deleteBook(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {

    const book = item.parentElement;
    book.classList.add("fall");

    removeLocalbooks(book);
    book.addEventListener("transitionend", e => {
      book.remove();
    });
  }
  if (item.classList[0] === "read-btn") {
    const book = item.parentElement;
    book.classList.toggle("read");
    console.log(book);
  }
}

function filterBook(e) {
  const books = bookList.childNodes;
  books.forEach(function(book) {
    switch (e.target.value) {
      case "all":
        book.style.display = "flex";
        break;
      case "read":
        if (book.classList.contains("read")) {
          book.style.display = "flex";
        } else {
          book.style.display = "none";
        }
        break;
      case "unread":
        if (!book.classList.contains("read")) {
          book.style.display = "flex";
        } else {
          book.style.display = "none";
        }
    }
  });
}

function saveLocalbooks(book) {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
}
function removeLocalbooks(book) {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  const bookIndex = book.children[0].innerText;
  books.splice(books.indexOf(bookIndex), 1);
  localStorage.setItem("books", JSON.stringify(books));
}

function getBooks() {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  books.forEach(function(book) {

    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const newbook = document.createElement("li");
    newbook.innerText = book;
    newbook.classList.add("book-item");
    bookDiv.appendChild(newbook);
    bookInput.value = "";

    const readBtn = document.createElement("button");
    readBtn.innerHTML = `&check;`;
    readBtn.classList.add("read-btn");
    bookDiv.appendChild(readBtn);

    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = `&cross;`;
    trashBtn.classList.add("trash-btn");
    bookDiv.appendChild(trashBtn);

    bookList.appendChild(bookDiv);
  });
}