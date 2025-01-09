import React, { useState } from 'react'
import Values from 'values.js'

const FormsColor = ({ setColors }) => {
  
    const [nameColor, setNameColor] = useState('')
    const [error, setError] = useState(false)

    const handleGenerator = (e) => {
      e.preventDefault()
      
      try {
        let colors = new Values(nameColor).all(10)
        setColors(colors)
        setError(false)
      } catch (error) {
        console.error(error)
        setError(true)
      }

    }

    return (
    <>
        <form onSubmit={ handleGenerator }>
            <input type="search" placeholder="Nombre del color" onChange={(e) => setNameColor(e.target.value)} />
            <button type='submit'>Generar</button>
        </form>

        {
            error && <small className='error'>No existe el color insertado</small>
        }
    </>
    )
  
}

export default FormsColor
