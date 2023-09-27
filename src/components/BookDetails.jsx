import React from 'react'

/**
 * Renders the details of a book. This is a component in development.
 *
 * @return {JSX.Element} The JSX element containing the book details.
 */
const BookDetails = () => {
  return (
    <div>
    <div className='Card' key={book.title} style={{ backgroundColor: book.bg }}>
      <div className='borde'>
        <h4>{book.author}</h4>
        <h2>{book.title}</h2>
        <p>{book.year}</p>
      </div>
      </div>
      </div>
  )
}

export default BookDetails