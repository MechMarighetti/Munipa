import { useState } from 'react'
import Cards from './components/Cards'
import AddBook from './components/AddBook'
import Watch from './components/Watch'
import Footer from './components/common/footer'
import './App.css'

function App() {
  
  return (
    <>
      <h1>Mi Biblioteca</h1>
      <AddBook></AddBook>
      <br />
      <Cards></Cards>
      {/* <Watch></Watch> */}

      <Footer></Footer>
          </>

  )
}

export default App
