import React from 'react'
import Cards from './Cards'
import { books } from './Cards';


const MiniCard = () => {
  return (
    <>
      {books.map((book) => (
        
        <div className='Card' key={book.title} style={{ backgroundColor: book.bg }}>
          <div className='borde'>
            <h4>{book.author}</h4>
            <h2>{book.title}</h2>
            <p>{book.year}</p>
          </div>
   
          {/* <p className='buynow'>¡Consigue {book.title} de {book.author} </p>
          <p>en nuestra Librería Online!</p> */}
        </div>
      ))}
    </>
  );
}


export default MiniCard