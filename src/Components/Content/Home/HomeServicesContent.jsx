import React from 'react'
import ServiseCard from '../../Card/ServiseCard'

const HomeServicesContent = () => {


  const cards = [
    {
      img: '',
      description: 'Royal Laser Hair Removal with Whitening',
      button: ''
    },
    {
      img: '',
      description: 'Royal Miracle White Glutathione',
      button: ''
    },
    {
      img: '',
      description: 'Royal Laser Hair Removal with Whitening',
      button: ''
    },
    {
      img: '',
      description: 'Royal Miracle White Glutathione',
      button: ''
    }
  ]

  return (
    <div name="service" className='h-screen w-full bg-[#F9F5F6] flex justify-center items-center'>
      <ServiseCard/>
    </div>
  )
}

export default HomeServicesContent