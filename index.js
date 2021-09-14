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
});