import React from 'react'
import { books } from './Cards'

const Shelfie = () => {
  return (
  <>
      {books.map((book) => (
        <div>
            <div className='bookie' style={{ backgroundColor: book.bg }}>
          <div className='book-content'>
            <h4>{book.author}</h4>
            <h2>{book.title}</h2>
            <p>{book.year}</p>
          </div>
           </div>

        </div>
      ))}
    </>
  )
}

export default Shelfie