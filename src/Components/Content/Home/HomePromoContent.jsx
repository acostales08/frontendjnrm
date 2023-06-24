import React from 'react'
import backgroundImage from '../../../assets/promo.jpg'
import {LuChevronLeft, LuChevronRight} from 'react-icons/lu'

const HomePromoContent = () => {
  return (
    <div name="promo" className='h-auto w-full bg-gradient-to-b from-[#F9F5F6] to-[hsl(346,37%,78%)] rounded-tr-full p-10 px-10 lg:px-20'>
      <div className="h-[100px] w-full flex justify-center items-center my-8">
        <h4 className="text-4xl tracking-[.40em] font-bold text-[#c7941e] text-shadow">
        Our Promos
        </h4>
      </div>
      <div className="flex justify-between items-center rounded-xl text-[#4d494f] h-screen w-full bg-fit bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="rounded-[50%] m-2 h-14 w-14 flex cursor-pointer justify-center items-center bg-white bg-opacity-40 shadow-lg backdrop-blur-5 webkit-backdrop-blur-5 hover:bg-opacity-60">
          <LuChevronLeft size={50}/>
        </div>
        <div className="rounded-[50%] m-2 h-14 w-14 flex cursor-pointer justify-center items-center bg-white bg-opacity-40 shadow-lg backdrop-blur-5 webkit-backdrop-blur-5 hover:bg-opacity-60">
          <LuChevronRight size={50}/>
        </div>
      </div>
    </div>
  )
}

export default HomePromoContent