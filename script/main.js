
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
  const EXISTING_DATA = JSON.parse(localStorage.getItem('libraryBooks'));

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
    myLibrary.unshift(newBook)
    document.querySelector('form').reset()
    EXISTING_DATA.push(newBook)
    localStorage.setItem('libraryBooks', JSON.stringify(EXISTING_DATA))
    location.reload()
  }

  let libraryList = document.createElement("div");

  for(let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i)
    let value = localStorage.getItem(key)
    let rObject = JSON.parse(value)
    
    
   libraryList.innerHTML =  rObject.map(book => {
      return `<div class="d-flex flex-column col-6 justify-content-center">
      <img class="card-img-top " src="https://nypost.com/wp-content/uploads/sites/2/2019/03/old-library-book.jpg?quality=80&strip=all" alt="Card image cap">
      <div class="d-flex flex-column col-12 "> 
       <h5> Author: ${book.author}</h5>
        <h5>Title: ${book.title}</h5>
        <h5>Pages: ${book.pages}</h5>
        </div>
        <button type="button" class="btn btn-secondary deleteBtn">Delete</button>
        </div>`
    }) ;
    
    }


  document.body.appendChild(libraryList);
  document.getElementById("submit").addEventListener('click', addBookToLibrary)

  let btn = document.querySelectorAll(".deleteBtn")
  btn.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
      for(let i = 0; i < EXISTING_DATA.length; i++){
        console.log(i)
        EXISTING_DATA.splice(index, 1)
        localStorage.setItem('libraryBooks', JSON.stringify(EXISTING_DATA))
        location.reload()
      }
    })
  })


  