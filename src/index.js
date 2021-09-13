//const books = [];

document.getElementById('addbook').addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = { id: new Date(), title, author };
  //books.push(book);



  const tempBooks=[];

  if(localStorage.getItem('booksData') !== null) {
   tempBooks = JSON.parse(booksData);

   tempBooks.push(book);
   
   const convertedBooks = JSON.stringify(tempBooks);
   localStorage.setItem('booksData', convertedBooks);
   window.location.reload();
  }else {

    tempBooks.push(book);
    
    const convertedBooks = JSON.stringify(tempBooks);
    localStorage.setItem('booksData', convertedBooks);
    window.location.reload();
   }

 
});

window.addEventListener('load', () => {
  const booksData = localStorage.getItem('booksData');
  const convertedBooks = JSON.parse(booksData);
  if (convertedBooks.length === 0) {
    document.getElementById('bookstatus').innerHTML = 'No books added';
  } else {
    let html = '';
    convertedBooks.forEach((book) => {
      html += `<article>
     <h2>${book.title}</h2>
     <h2>${book.author}</h2>
     <button data-book-id="${book.id}">Remove</button>
     <hr />
   </article></br>`;
    });
    document.getElementById('bookstatus').innerHTML = '';
    document.getElementById('bookslist').innerHTML = html;
  }
});
