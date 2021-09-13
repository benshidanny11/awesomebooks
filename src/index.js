//const books = [];

document.getElementById('addbook').addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = { id: new Date(), title, author };
  //books.push(book);



  let tempBooks = [];

  if(localStorage.getItem('booksData') !== null) {
   tempBooks = JSON.parse(localStorage.getItem('booksData'));

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
     <button data-book-id = "${book.id}" id = "remove-button" onclick="removeBook(${book.id})">Remove</button>
     <hr />
   </article></br>`;
    });
    document.getElementById('bookstatus').innerHTML = '';
    document.getElementById('bookslist').innerHTML = html;
  };
});

// document.getElementById('remove-button').addEventListener('click', () => {
  
// });

function removeBook (id) {
  const booksData = localStorage.getItem('booksData');
  const convertedBooks = JSON.parse(booksData);
  let id = document.elementById('remove-button').getAtribute('data-book-id');
  let remainingBooks = convertedBooks.filter((book) => {
    return book.id!== id;
  });
  const removedBooks = JSON.stringify(remainingBooks);
  localStorage.setItem('booksData', removedBooks);
  window.location.reload();
  console.log(id)
}



