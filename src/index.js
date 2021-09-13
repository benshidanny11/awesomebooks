let tempBooks = [];

document.getElementById('addbook').addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = { id: new Date().getTime(), title, author };
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
});

// eslint-disable-next-line no-unused-vars
function removeBook(id) {
  const booksData = localStorage.getItem('booksData');
  const convertedBooks = JSON.parse(booksData);
  const remainingBooks = convertedBooks.filter((book) => book.id !== id);
  const removedBooks = JSON.stringify(remainingBooks);
  localStorage.setItem('booksData', removedBooks);
  window.location.reload();
}

window.addEventListener('load', () => {
  const booksData = localStorage.getItem('booksData');
  const convertedBooks = JSON.parse(booksData);
  if (convertedBooks && convertedBooks.length === 0) {
    document.getElementById('bookstatus').innerHTML = 'No books added';
  } else {
    let html = '';
    convertedBooks.forEach((book) => {
      html += `<article>
     <h2>${book.title}</h2>
     <h2>${book.author}</h2>
     <button data-book-id = "${book.id}" id = "remove-button" onclick="removeBook(${book.id})">Remove</button>
    
   </article></br>`;
    });
    // document.getElementById('bookstatus').innerHTML = '';
    document.getElementById('bookslist').innerHTML = html;
  }
});
