import { useState } from 'react'
import Values from 'values.js'
import FormsColor from './components/FormsColor'
import DisplayColors from './components/DisplayColors'
import './App.css'

function App() {
  
  const [colors, setColors] = useState(new Values('green').all(10))
  

  return (
    <>
      <div className='App'>
        <FormsColor setColors={setColors} />
        <DisplayColors colors={colors} />
      </div>
    </>
  )
}

export default App
