import React from 'react'

const SimpleButton = ({style, text}) => {
  return (
    <button type='submit' className='px-3 py-1 rounded-lg' style={style}>
        <h6>{text}</h6>
    </button>
  )
}

export default SimpleButton