import {React, useState} from 'react'

const books = [{
    title:'Cien Años de Soledad',
    author: 'Gabriel García Marquez',
    year: 1961,
    bg:'	#83aa3f'
},{
    title:'El Viejo y el Mar',
    author: 'Ernest Hemingway',
    year: 1954,
    bg:'#00483b'
},
{
    title:'1984',
    author: 'Orson G. Wells',
    year: 1927,
    bg:'#728191'
},
{
    title:'Un Mundo Feliz',
    author: 'Aldous Huxley',
    year: 1936,
    bg:'coral'
},
{
    title:'Soy un Gato',
    author: 'Natsume Söseki',
    year: 1924,
    bg: 'indianred'
},
{
    title:'Nuestra Parte de Noche',
    author: 'Mariana Enriquez',
    year: 2019,
    bg: '#161707'
},
{
    title:'Un Caballero en Moscú',
    author: 'Amor Towles',
    year: 2016,
    bg:'#652454'
},
{
    title:'La Divina Comedia',
    author: 'Dante Alligheri',
    year: 1520,
    bg:'#b2005a'
},
{
    title:'El Gatopardo',
    author: 'Giuseppe Tomasi de Lampedusa',
    year: 1958,
    bg:'#b75060'
},
{
    title:'Distancia de Rescate',
    author: 'Samanta Schweblin',
    year: 2014,
    bg: '#322167'
},
]

const Cards = () => {
    const [otro, setOtro] = useState(0)
     /* PREGUNTA: ¿Cómo usar el estado para que muestre el último elemento de la lista?*/ 
    let bgColor = books[otro].bg
    /* Separar las funciones para que las variables at y sg queden en el numero correcto y se muestren correctamente sin neccesidad del trigger */
    const increment = () => {
        otro < (books.length - 1) ? setOtro(otro + 1) : setOtro(0);
    };
    
    const decrement = () => {
        otro === 0 ? setOtro(books.length - 1) : setOtro(otro - 1);
    };
  return (
    <div className='books' style={{backgroundColor: bgColor}}>
        <div className='borde'>
        <h2>{books[otro].author}</h2>
        <h1>{books[otro].title}</h1>
        <p>{books[otro].year}</p>
        

        <br />
        <button onClick={decrement}style={{backgroundColor: bgColor}}>Anterior: {books[(otro-1)]?.title || books[books.length-1]?.title}</button>
           
        <button onClick={increment}style={{backgroundColor: bgColor}}>Siguiente: {books[otro+1]?.title || books[0]?.title}</button>
        </div>

    </div>
  )
}

export default Cards