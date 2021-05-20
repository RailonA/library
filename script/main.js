
  /* eslint-disable no-underscore-dangle */
  /* eslint-disable import/extensions */
  /* eslint-disable no-use-before-define */

  import {
    getDomElement,
    setInnerHTML,
    resetValue,
    getAllElementsOfType,
    handleEvent,
    } from './dom.js'; 
  
  let myLibrary = [
    {
      author: "Rashad",
      title: "random",
      pages: 23
    },

    {
      author: "Railon",
      title: "random",
      pages: 45
    }
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
    myLibrary.unshift(newBook)
    document.querySelector('form').reset()
    console.log(myLibrary)
  }


    document.getElementById("submit").addEventListener('click', addBookToLibrary)

  