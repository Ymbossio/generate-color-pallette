import React, { useState } from 'react'
import Values from 'values.js'
import { Toaster, toast } from 'sonner'

const FormsColor = ({ setColors }) => {
  
    const [nameColor, setNameColor] = useState('')
    const [error, setError] = useState(false)

    const handleGenerator = (e) => {
      e.preventDefault()
      
      try {
        if(nameColor == ""){
          toast.error('El nombre del color no puede estar vacio')
          return
        }
        let colors = new Values(nameColor).all(10)
        setColors(colors)
        setError(false)
      } catch (error) {
        console.error(error)
        setError(true)
        setNameColor('')
        toast.error('Hubo un error al generar el color')
      }

    }

    return (
    <div className='form-color'>
              <h2>PALETA DE COLORES 🎨</h2>
        <form onSubmit={ handleGenerator }>
            <input type="search" placeholder="eje. #000000, blue" value={nameColor} onChange={(e) => setNameColor(e.target.value)} />
            <button type='submit'>Generar</button>
        </form>

        {
            error && <small className='error'>No existe el color insertado</small>
        }
      <Toaster position="top-right" richColors />
    </div>
    )
  
}

export default FormsColor
