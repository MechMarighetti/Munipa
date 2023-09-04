import React from 'react'

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

export default AddBook