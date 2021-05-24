/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */

// const { formatters } = require("stylelint");

const myLibrary = [
  {
   author: "Rashad",
   title: "Random Title",
   pages: 22,

  },
  
  {
    author: "Rashad",
    title: "Random Title",
    pages: 22,

   }
];
// const EXISTING_DATA = JSON.parse(localStorage.getItem('libraryBooks')) || [];

function Book(author, title, pages, readStatus) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readStatus = readStatus;
}

const addBookForm = document.getElementById("addBookForm");
const showForm = document.getElementById('showForm');
const libraryList = document.createElement('div');
const btn = document.querySelectorAll('.deleteBtn');
const booksDiv = document.getElementById('booksDiv')

function displayForm() {
  addBookForm.classList.toggle("d-none")
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
  console.log(myLibrary)
  displayBooks()
}


// function displayBooks(){

// for (let i = 0; i < myLibrary.length; i += 1) {
//   // const key = localStorage.key(i);
//   // const value = localStorage.getItem(key);
//   // const rObject = JSON.parse(value);

//   libraryList.innerHTML = myLibrary.map((book) => `<div class="d-flex flex-column col-6 justify-content-center">
//       <img class="card-img-top " src="https://nypost.com/wp-content/uploads/sites/2/2019/03/old-library-book.jpg?quality=80&strip=all" alt="Card image cap">
//       <div class="d-flex flex-column col-12 "> 
//        <h5> Author: ${book.author}</h5>
//         <h5>Title: ${book.title}</h5>
//         <h5>Pages: ${book.pages}</h5>
        
//         <a href='#' class="btn ${book.readStatus
//     ? 'btn-success'
//     : 'btn-primary'} toggle" data-index-number="${myLibrary.indexOf(
//   book,
// )}">${book.readStatus ? 'Read' : 'Not read'}</a>
//         </div>
//         <button type="button" class="btn btn-danger deleteBtn">Delete</button>
//         </div>`);

//         const deleteButton = document.createElement('button');
//         deleteButton.classList.add('btn', 'btn-primary');
//         deleteButton.textContent = 'Remove Book';
//         deleteButton.setAttribute('data-attribute', i);
      
//         deleteButton.addEventListener('click', (event) => {
//         const index = event.target.getAttribute('data-attribute');
//         deleteBook(index);
//         displayBooks();
//       });
// }

// }



function displayBooks() {
  // Remove all children of bookList
  booksDiv.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const book = document.createElement('div');
    book.classList.add('card', 'card-body', 'mb-3');

    const image = document.createElement('img')
    image.src = "https://nypost.com/wp-content/uploads/sites/2/2019/03/old-library-book.jpg?quality=80&strip=all"
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = `"${myLibrary[i].title}"`;
    const pages = document.createElement('p')
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
    readButton.classList.add('btn', 'btn-secondary');
    readButton.textContent = 'Change Read Status';
    readButton.setAttribute('data-attribute', i);

    readButton.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-attribute');
      const book = myLibrary[index];
      book.read = !book.read;
      displayLibrary();
    });

    book.appendChild(image)
    book.appendChild(title);
    book.appendChild(pages);
    book.appendChild(deleteButton);
    book.appendChild(readButton);
    booksDiv.appendChild(book);
    book.appendChild(deleteButton);
  }
}


function deleteBook(index){
  myLibrary.splice(index, 1)
}


document.body.appendChild(libraryList);
document.getElementById('submit').addEventListener('click', addBookToLibrary);

displayBooks()
