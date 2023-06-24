import React from 'react'

const SimpleButton = ({className, text}) => {
  return (
    <button type='submit' className={className}>
        <h6>{text}</h6>
    </button>
  )
}

export default SimpleButton