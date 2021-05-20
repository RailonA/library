
  /* eslint-disable no-underscore-dangle */
  /* eslint-disable import/extensions */
  /* eslint-disable no-use-before-define */

  // import {
  //   getDomElement,
  //   setInnerHTML,
  //   resetValue,
  //   getAllElementsOfType,
  //   handleEvent,
  //   } from './dom.js'; 
  
  let body = document.getElementsByTagName("body");

  let myLibrary = [
    // {
    //   author: "Rashad",
    //   title: "random",
    //   pages: 23
    // },

    // {
    //   author: "Railon",
    //   title: "random",
    //   pages: 45
    // }
  ]

  function Book(author, title, pages){
    this.author = author
    this.title = title
    this.pages = pages
  }

  function addBookToLibrary(event){
    event.preventDefault()
    let newBook = new Book(
      document.getElementById('author').value,
      document.getElementById('title').value,
      document.getElementById('pages').value
    )
    myLibrary.push(newBook)
    document.querySelector('form').reset()
    console.log(myLibrary)
  }




 // Get the app element
var libraryList = document.createElement("div");

libraryList.innerHTML = myLibrary.map(function (book) {
	return `<div class="">
  <img class="card-img-top" src="https://nypost.com/wp-content/uploads/sites/2/2019/03/old-library-book.jpg?quality=80&strip=all" alt="Card image cap">
    <h5>${book.author}</h5>
    <h5>${book.title}</h5>
    <h5>${book.pages}</h5>
    </div>`;
}).join('') ;


  



  document.body.appendChild(libraryList);


 
    document.getElementById("submit").addEventListener('click', addBookToLibrary)

  