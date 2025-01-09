import React from 'react'
import CardColors from './CardColors'

const DisplayColors = ({colors}) => {
  return (
    <div className='colors-box'>
      {
        colors.map((colors, index) => (
            <CardColors key={index} hexColor={colors.hex} />
        ))
      }
    </div>
  )
}

export default DisplayColors
