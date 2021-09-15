/* eslint-disable no-undef */
let tempBooks = [];

class Book {
  constructor(id = null, title = null, author = null) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const book = new Book(new Date().getTime(), title, author);
    if (localStorage.getItem('booksData') !== null) {
      tempBooks = JSON.parse(localStorage.getItem('booksData'));
      tempBooks.push(book);
      const convertedBooks = JSON.stringify(tempBooks);
      localStorage.setItem('booksData', convertedBooks);
      window.location.reload();
    } else {
      tempBooks.push(book);
      const convertedBooks = JSON.stringify(tempBooks);
      localStorage.setItem('booksData', convertedBooks);
      window.location.reload();
    }
  };

  displayBooks = () => {
    const booksData = localStorage.getItem('booksData');
    const convertedBooks = JSON.parse(booksData);
    document.getElementById('bookstatus').innerHTML = 'No books added';
    if (convertedBooks && convertedBooks.length === 0) {
      document.getElementById('bookstatus').innerHTML = 'No books added';
    } else {
      document.getElementById('bookstatus').innerHTML = '';
      let html = '';
      convertedBooks.forEach((book) => {
        html += `<article class="article-container">
    <h2 class="title">"${book.title}" by ${book.author}</h2>
    <button class="book-remove" data-book-id = "${book.id}" id = "remove-button" onclick="removeBook(${book.id})">Remove</button>
    </article></br>`;
      });
      document.getElementById('bookslist').innerHTML = html;
    }
  };
}
// eslint-disable-next-line no-unused-vars
const removeBook = (id) => {
  const booksData = localStorage.getItem('booksData');
  const convertedBooks = JSON.parse(booksData);
  const remainingBooks = convertedBooks.filter((book) => book.id !== id);
  const removedBooks = JSON.stringify(remainingBooks);
  localStorage.setItem('booksData', removedBooks);
  window.location.reload();
};

document.getElementById('addbook').addEventListener('click', () => {
  const book = new Book();
  book.addBook();
});

window.addEventListener('load', () => {
  const book = new Book();
  book.displayBooks();
  const { DateTime } = luxon;
  document.getElementById('date-time').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
});

document.getElementById('list-books-item').addEventListener('click', () => {
  const list = document.getElementById('book-container');
  list.classList.remove('hide');
  const section = document.getElementById('section-addbook');
  section.classList.add('hide');
  const contact = document.getElementById('contact-section');
  contact.classList.add('hide');
  document.getElementById('add-books-item').classList.remove('active');
  document.getElementById('list-books-item').classList.add('active');
  document.getElementById('add-contact-item').classList.remove('active');
});

document.getElementById('add-books-item').addEventListener('click', () => {
  const sectionAddBook = document.getElementById('section-addbook');
  sectionAddBook.classList.remove('hide');
  document.getElementById('add-books-item').classList.add('active');
  document.getElementById('list-books-item').classList.remove('active');
  document.getElementById('add-contact-item').classList.remove('active');
  const bookContainer = document.getElementById('book-container');
  bookContainer.classList.add('hide');
  const contact = document.getElementById('contact-section');
  contact.classList.add('hide');
});

document.getElementById('add-contact-item').addEventListener('click', () => {
  const sectionAddBook = document.getElementById('section-addbook');
  sectionAddBook.classList.add('hide');
  document.getElementById('add-books-item').classList.remove('active');
  document.getElementById('list-books-item').classList.remove('active');
  document.getElementById('add-contact-item').classList.add('active');
  const bookContainer = document.getElementById('book-container');
  bookContainer.classList.add('hide');
  const contact = document.getElementById('contact-section');
  contact.classList.remove('hide');
});