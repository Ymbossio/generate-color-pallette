import React from 'react'

const CardColors = ({hexColor}) => {
  return (
    <div className='single-card' style={{backgroundColor: `#${hexColor}`}}>
        <div className='content'>
            <p>#{hexColor}</p>
        </div>
      
    </div>
  )
}

export default CardColors
