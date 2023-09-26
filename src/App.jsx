import { useState } from 'react'
import Cards from './components/Cards'
import AddBook from './components/AddBook'
import Watch from './components/Watch'
import './App.css'
import Timer from './components/timer'
import Title from './components/Title'


function App() {
  const email= 'mercedesmarighetti@gmail.com'
  return (
    <>
      <Title>Esta biblioteca es mia</Title>

      <AddBook></AddBook>
         <br />
      <Cards></Cards>
  {/*   <Watch></Watch>
    <Timer></Timer> */}

      <div className='footer'>
      <h3>Mercedes Marighetti 2023</h3>
      <p>Contact me: {email}</p>
    </div>
          </>

  )
}

export default App
