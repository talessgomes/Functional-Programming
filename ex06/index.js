// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(originalBookList, bookName) {

    let newBookList = [...originalBookList];
    newBookList.push(bookName);

    return newBookList;

    // Change code above this line
}

// Change code below this line
function remove(originalBookList, bookName) {
    const book_index = bookList.indexOf(bookName);
    console.log("book", book_index);

    if (book_index >= 0) {

        let newBookList = [...originalBookList];
        newBookList.splice(book_index, 1);
        return newBookList;

        // Change code above this line
    }
}


/*A primeira função vai pegar a cópia do Array e vai
passar os valores na outra variável.
a segunda função vai remover o primeiro item do 
array sem mexer na original. */