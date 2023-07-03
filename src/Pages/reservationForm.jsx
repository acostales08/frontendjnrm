import React from 'react'
import backgroundImage from '../assets/reservationbg.png'

const ReservationForm = () => {
  return (
    <div className='h-screen w-full px-36 py-24' style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="border border-black h-full w-full"></div>
    </div>
  )
}

export default ReservationForm