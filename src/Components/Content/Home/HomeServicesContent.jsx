import React from 'react'
import ServiseCard from '../../Card/ServiseCard'

const HomeServicesContent = () => {


  const cards = [
    {
      img: 'Home.png',
      description: 'Royal Laser Hair Removal with Whitening',
    },
    {
      img: 'bg.jpeg',
      description: 'Royal Miracle White Glutathione',
    },
    {
      img: 'Home.png',
      description: 'Royal Laser Hair Removal with Whitening',
    },
    {
      img: 'Home.png',
      description: 'Royal Miracle White Glutathione',
    }
  ]

  return (
    <div name="service" className='h-auto w-full bg-[#F9F5F6] flex flex-col md:flex-row justify-center items-center px-10 py-20 gap-4'>
      {cards.map(({description, img})=> (
        <ServiseCard
        description={description}
        img={img}
        />
      ))}

    </div>
  )
}

export default HomeServicesContent