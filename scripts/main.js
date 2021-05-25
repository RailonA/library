/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
// const { formatters } = require("stylelint");

const myLibrary = [];

function Book(author, title, pages, readStatus) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readStatus = readStatus;
}

const addBookForm = document.getElementById('addBookForm');
const showForm = document.getElementById('showForm');
const libraryList = document.createElement('div');
const booksDiv = document.getElementById('booksDiv');

function displayForm() {
  addBookForm.classList.toggle('d-none');
}

function addBookToLibrary(event) {
  event.preventDefault();
  const newBook = new Book(
    document.getElementById('author').value,
    document.getElementById('title').value,
    document.getElementById('pages').value,
    document.getElementById('read').checked,
  );

  myLibrary.unshift(newBook);
  document.querySelector('form').reset();
  displayBooks();
}

function displayBooks() {
  // Display all children of bookList
  booksDiv.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const book = document.createElement('div');
    book.classList.add('card', 'card-body', 'mb-3', 'col-4');

    const image = document.createElement('img');
    image.src = 'https://nypost.com/wp-content/uploads/sites/2/2019/03/old-library-book.jpg?quality=80&strip=all';
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = `${myLibrary[i].title}`;
    const author = document.createElement('p');
    author.textContent = `${myLibrary[i].author}`;
    const pages = document.createElement('p');
    pages.textContent = `Pages: ${myLibrary[i].pages}`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Delete Book';
    deleteButton.setAttribute('data-attribute', i);

    deleteButton.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-attribute');
      deleteBook(index);
      displayBooks();
    });

    const readButton = document.createElement('button');
    readButton.textContent = myLibrary[i].readStatus ? 'Read' : 'Unread';
    if (myLibrary[i].readStatus === true) {
      readButton.classList.add('btn', 'btn-primary');
    } else {
      readButton.classList.add('btn', 'btn-secondary');
    }
    readButton.setAttribute('data-attribute', i);

    readButton.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-attribute');
      const bookIndex = myLibrary[index];
      bookIndex.read = !bookIndex.read;
    });

    book.appendChild(image);
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(deleteButton);
    book.appendChild(readButton);
    booksDiv.appendChild(book);
    book.appendChild(deleteButton);
  }
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
}

document.body.appendChild(libraryList);
document.getElementById('submit').addEventListener('click', addBookToLibrary);
showForm.addEventListener('click', displayForm);

displayBooks();
