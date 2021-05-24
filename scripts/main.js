/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */

const myLibrary = [];
const EXISTING_DATA = JSON.parse(localStorage.getItem('libraryBooks')) || [];

function Book(author, title, pages, readStatus) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readStatus = readStatus;
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
  EXISTING_DATA.push(newBook);
  localStorage.setItem('libraryBooks', JSON.stringify(EXISTING_DATA));
}

const libraryList = document.createElement('div');

for (let i = 0; i < localStorage.length; i += 1) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  const rObject = JSON.parse(value);

  libraryList.innerHTML = rObject.map((book) => `<div class="d-flex flex-column col-6 justify-content-center">
      <img class="card-img-top " src="https://nypost.com/wp-content/uploads/sites/2/2019/03/old-library-book.jpg?quality=80&strip=all" alt="Card image cap">
      <div class="d-flex flex-column col-12 "> 
       <h5> Author: ${book.author}</h5>
        <h5>Title: ${book.title}</h5>
        <h5>Pages: ${book.pages}</h5>
        
        <a href='#' class="btn ${book.readStatus
    ? 'btn-success'
    : 'btn-primary'} toggle" data-index-number="${myLibrary.indexOf(
  book,
)}">${book.readStatus ? 'Read' : 'Not read'}</a>
        </div>
        <button type="button" class="btn btn-danger deleteBtn">Delete</button>
        </div>`);
}

document.body.appendChild(libraryList);
document.getElementById('submit').addEventListener('click', addBookToLibrary);

const btn = document.querySelectorAll('.deleteBtn');
btn.forEach((element, index) => {
  element.addEventListener('click', () => {
    for (let i = 0; i < EXISTING_DATA.length; i += 1) {
      console.log(i);
      EXISTING_DATA.splice(index, 1);
      localStorage.setItem('libraryBooks', JSON.stringify(EXISTING_DATA));
    }
  });
});
