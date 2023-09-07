import { React, useState } from 'react'

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
    year: '1943',
    bg: '#a46904'
},
{
    title: 'El Camino del Artista',
    author: 'Julia Cameron',
    year: '1992',
    bg: '#135253'
}
]

const Cards = () => {
    const [otro, setOtro] = useState(0)
    const [activeArray, setActiveArray] = useState(books)
    /* PREGUNTA: ¿Cómo usar el estado para que muestre el último elemento de la lista?*/
    let bgColor = activeArray[otro].bg
    /* Separar las funciones para que las variables at y sg queden en el numero correcto y se muestren correctamente sin neccesidad del trigger */
    const increment = () => {
        otro < (books.length - 1) ? setOtro(otro + 1) : setOtro(0);
    
    };

    const decrement = () => {
        otro === 0 ? setOtro(books.length - 1) : setOtro(otro - 1);
    };
    const sortedBooks=[...books].sort((a,b) => a.title > b.title ? 1 : -1)
    const handleSorted = () => {
        setActiveArray(sortedBooks)
    }
    const newBooks=[...books].sort((a,b) => a.year < b.year ? 1 : -1)
    const handleOriginal = () => {
        setActiveArray(books)
    }
    const handleNew =()=> {
        setActiveArray(newBooks)
    }

    return (
        <div className='books' style={{ backgroundColor: bgColor }}>
            <div className='borde'>
                <h2>{activeArray[otro].author}</h2>
                <h1>{activeArray[otro].title}</h1>
                <p>{activeArray[otro].year}</p>


                <br />
                <button onClick={decrement} style={{ backgroundColor: bgColor }}>Anterior: {activeArray[(otro - 1)]?.title || books[books.length - 1]?.title}</button>

                <button onClick={increment} style={{ backgroundColor: bgColor }}>Siguiente: {activeArray[otro + 1]?.title || books[0]?.title}</button>
               <br />
               <div className='btn'>
                <h4>Ordenar: </h4>
                <button onClick={handleSorted} style={{ backgroundColor: bgColor }}>Alfabéticamente</button>
                <button onClick={handleNew}style={{ backgroundColor: bgColor }}>Más nuevos</button>
                <button onClick={handleOriginal}style={{ backgroundColor: bgColor }}>Original</button>
               </div>
            </div>

        </div>
    )
}

export default Cards