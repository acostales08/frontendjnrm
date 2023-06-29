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
      description: 'Royal Laser Hair Removal with Whitening',
    },
    {
      img: 'Home.png',
      description: 'Royal Miracle White Glutathione',
    }
  ]

  return (
    <div name="service" className="h-auto w-full bg-gradient-to-t from-[#F9F5F6] to-[hsl(346,37%,78%)] rounded-bl-full p-4 lg:p-16 ease-in-out duration-150 shadow-2xl">
      <div className="h-[100px] w-full flex justify-center items-center my-8">
        <h4 className="text-3xl lg:text-4xl tracking-[.40em] font-bold text-[#c7941e] text-shadow">
        Our Services
        </h4>
      </div>
      <div className="h-full justify-center items-center w-full grid grid-cols-2 lg:grid-cols-4 grid-rows-1  lg:flex-row gap-4">
        {cards.slice(0, 4).map(({img, description})=> (
            <ServiseCard
            img={img}
            text={description}
            />
          ))}
      </div>
      <div className="h-[50px] w-full my-5 flex justify-center items-center mt-12">
        <button className="border-2 border-[#C88EA7] lg:text-xl justify-center items-center text-[16px] px-4 font-semibold rounded-full flex text-[#4d494f] hover:bg-[#C88EA7] hover:text-white duration-500">
          See more 
          <LuArrowRight size={20} className=' m-[6px] '/>
        </button>
      </div>
    </div>
  )
}

export default HomeServicesContent