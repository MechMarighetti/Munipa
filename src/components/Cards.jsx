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
    title:'Soy un Gato',
    author: 'Natsume Söseki',
    year: 1924,
    bg: 'indianred'
},
]

const Cards = () => {
    const [otro, setOtro] = useState(0)
    let bgColor = books[otro].bg
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
        <button onClick={decrement}style={{backgroundColor: bgColor}}>Anterior</button>
           
        <button onClick={increment}style={{backgroundColor: bgColor}}>Siguiente</button>
        </div>

    </div>
  )
}

export default Cards