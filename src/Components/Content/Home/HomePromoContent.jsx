import React from 'react'
import backgroundImage from '../../../assets/bg.jpeg'
import {LuChevronLeft, LuChevronRight} from 'react-icons/lu'

const HomePromoContent = () => {
  return (
    <div name="promo" className='h-screen w-full bg-[#F9F5F6] p-10 px-20'>
      <div className="flex justify-between items-center rounded-xl text-[#4d494f] h-full w-full" style={{ backgroundImage: `url(${backgroundImage})` }}>
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