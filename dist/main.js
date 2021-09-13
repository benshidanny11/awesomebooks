/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//const books = [];\n\ndocument.getElementById('addbook').addEventListener('click', () => {\n  const title = document.getElementById('title').value;\n  const author = document.getElementById('author').value;\n\n  const book = { id: new Date(), title, author };\n  //books.push(book);\n\n\n\n  const tempBooks=[];\n\n  if(localStorage.getItem('booksData') !== null) {\n   tempBooks = JSON.parse(booksData);\n\n   tempBooks.push(book);\n   \n   const convertedBooks = JSON.stringify(tempBooks);\n   localStorage.setItem('booksData', convertedBooks);\n   window.location.reload();\n  }else {\n\n    tempBooks.push(book);\n    \n    const convertedBooks = JSON.stringify(tempBooks);\n    localStorage.setItem('booksData', convertedBooks);\n    window.location.reload();\n   }\n\n \n});\n\nwindow.addEventListener('load', () => {\n  const booksData = localStorage.getItem('booksData');\n  const convertedBooks = JSON.parse(booksData);\n  if (convertedBooks.length === 0) {\n    document.getElementById('bookstatus').innerHTML = 'No books added';\n  } else {\n    let html = '';\n    convertedBooks.forEach((book) => {\n      html += `<article>\n     <h2>${book.title}</h2>\n     <h2>${book.author}</h2>\n     <button data-book-id=\"${book.id}\">Remove</button>\n     <hr />\n   </article></br>`;\n    });\n    document.getElementById('bookstatus').innerHTML = '';\n    document.getElementById('bookslist').innerHTML = html;\n  }\n});\n\n\n//# sourceURL=webpack://awesomebooks/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;