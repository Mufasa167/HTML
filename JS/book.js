const book={
    Author:'Erwin Schrodinger',
    Publisher:'Cambridge University Press',
    Hard_cover:true,
    Year:'2012',
    language:'English',
    numOfpages:184,
    Title:'What is life?'

}

function defBook(book){
    console.log(`The book "${book.Title}" was written by ${book.Author} back in 1942 and was re-published in ${book.Year}`)
}

defBook(book); 