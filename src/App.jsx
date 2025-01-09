import { useState } from 'react'
import Values from 'values.js'
import FormsColor from './components/FormsColor'
import './App.css'
import DisplayColors from './components/DisplayColors'

function App() {
  
  const [colors, setColors] = useState(new Values('red').all(10))

  console.log(colors, "color");
  

  return (
    <>
      <div className='App'>
        <h2>PALETA DE COLORES 🎨</h2>
        <FormsColor setColors={setColors} />
        <DisplayColors />
      </div>
    </>
  )
}

export default App
