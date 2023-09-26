import React from 'react'

const Preguntas = () => {
  return (<>
  <div>Preguntas</div>
  <input type="color" name="pickme" id="color" list='paleta'/>
  <datalist id='paleta'>
    <option value="coral"></option>
  </datalist>
  </>
  )
}

export default Preguntas