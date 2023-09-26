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

const books = [{
  title: 'Cien Años de Soledad',
  author: 'Gabriel García Marquez',
  year: 1961,
  bg: '	#83aa3f'
}, {
  title: 'El Viejo y el Mar',
  author: 'Ernest Hemingway',
  year: 1954,
  bg: '#00483b'
},
{
  title: '1984',
  author: 'Orson G. Wells',
  year: 1927,
  bg: '#728191'
},
{
  title: 'Boquitas Pintadas',
  author: 'Manuel Puig',
  year: 1969,
  bg: '#336699'
},
{
  title: 'Un Mundo Feliz',
  author: 'Aldous Huxley',
  year: 1936,
  bg: 'coral'
},
{
  title: 'Soy un Gato',
  author: 'Natsume Söseki',
  year: 1924,
  bg: 'indianred'
},
{
  title: 'Nuestra Parte de Noche',
  author: 'Mariana Enriquez',
  year: 2019,
  bg: '#161707'
},
{
  title: 'Un Caballero en Moscú',
  author: 'Amor Towles',
  year: 2016,
  bg: '#652454'
},
{
  title: 'La Divina Comedia',
  author: 'Dante Alligheri',
  year: 1520,
  bg: '#b2005a'
},
{
  title: 'El Gatopardo',
  author: 'Giuseppe Tomasi de Lampedusa',
  year: 1958,
  bg: '#b75060'
},
{
  title: 'Distancia de Rescate',
  author: 'Samanta Schweblin',
  year: 2014,
  bg: '#322167'
}, {
  title: '¡Noticia Bomba!',
  author: 'Evelyn Waugh',
  year: 1938,
  bg: '#760d12'
}, {
  title: 'El Principito',
  author: 'Antoine de Saint-Exupéry',
  year: 1943,
  bg: '#a46904'
},
{
  title: 'El Camino del Artista',
  author: 'Julia Cameron',
  year: 1992,
  bg: '#135253'
}
]


const AddBook = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16)

  const [books, setBooks] = useState({
    title: '',
    author: '',
    year: '',
    bg: '#' + randomColor, // Valor inicial para el input de color
  });

  const [library, setLibrary] = useState(books)



  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooks({
      ...books,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier acción que desees con los datos del libro, como enviarlos a un servidor o almacenarlos en un estado global.
    console.log(books);
    setLibrary([...library, books])
    console.log(library);
  };

  return (
    <div className='input'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título del Libro"
          value={books.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={books.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Año de Publicación"
          value={books.year}
          onChange={handleChange}
        />
        <input
          type="color"
          name="bg"
          id="bg"
          value={books.bg}
          onChange={handleChange}
          list='suggested'
        />
        <datalist id='suggested'>
          <option value="#ff7db3">Rosado</option>
          <option value="#EB55BF">Fucsia</option>
          <option value="#B292EA">Violeta</option>
          <option value="#8BDBF5">Celeste</option>
          <option value="#91DFA8">Verde</option>
          <option value="#F1FFD9">Verde</option>
          <option value="#fff8b5">Amarillo</option>
          <option value="#ff9028">Naranaja</option>
        </datalist>
        <button type="submit">Agregar Libro</button>
      </form>
    </div>
  );
};

export default AddBook;
/* En este código, hemos creado un estado (bookData) que contiene los valores del formulario. El método handleChange se llama cuando los inputs cambian y actual
 */

