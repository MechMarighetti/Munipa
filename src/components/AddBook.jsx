/* import React from 'react'

const AddBook = () => {
  return (
    <div>
      <form action="addbook" method="post">
        <input type="text" name="title" placeholder="Título del Libro" />
        <input type="text" name="author" placeholder="Autor" />
        <input type="text" name="year" placeholder="Año de Publicación" />
        <input type="color" name="bg" id="bg" />
        <button type="submit">Agregar Libro</button>
      </form>
    </div>
  )
}

export default AddBook */

import React, { useState } from 'react';

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    year: '',
    bg: '#000000', // Valor inicial para el input de color
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier acción que desees con los datos del libro, como enviarlos a un servidor o almacenarlos en un estado global.
    console.log(bookData);
  };

  return (
    <div className='input'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título del Libro"
          value={bookData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={bookData.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Año de Publicación"
          value={bookData.year}
          onChange={handleChange}
        />
        <input
          type="color"
          name="bg"
          id="bg"
          value={bookData.bg}
          onChange={handleChange}
        />
        <button type="submit">Agregar Libro</button>
      </form>
    </div>
  );
};

export default AddBook;
/* En este código, hemos creado un estado (bookData) que contiene los valores del formulario. El método handleChange se llama cuando los inputs cambian y actual
 */

