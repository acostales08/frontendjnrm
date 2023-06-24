import React from 'react'
import ServiseCard from '../../Card/ServiseCard'
import { LuArrowRight } from 'react-icons/lu'

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
    <div name="service" className="h-auto w-full bg-[#F9F5F6] p-16 ease-in-out duration-150">
      <div className="h-full flex  justify-center items-center w-full flex-col  md:flex-row  lg:flex-row  gap-4">
        {cards.map(({img, description})=> (
            <ServiseCard
            img={img}
            text={description}
            />
          ))}
      </div>
      <div className="h-[50px] w-full my-5 flex justify-center items-center mt-12">
        <button className="border-2 border-[#C88EA7] text-2xl py-1 px-4 font-semibold rounded-[15px] flex text-[#4d494f] hover:bg-[#C88EA7] hover:text-white ">
          See more 
          <LuArrowRight size={30} className='m-1 mx-4'/>
        </button>
      </div>
    </div>
  )
}

export default HomeServicesContent