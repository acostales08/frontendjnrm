import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import backgroundImage from '../../../assets/Homebg.png'


const HomeHero = () => {
  return (
    <div name="home" className='h-screen w-full flex justify-center items-center  px-0 md:px-20 bg-cover bg-center bg-fixed' style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="w-full text-center py-10 gap-2">
          <p className="tracking-[.80em] font-semibold text-1xl text-[#4d494f] text-shadow">Beauty & Spa</p>
          <h3 className="mt-[1rem] font-semibold font-sans text-4xl sm:text-5xl md:text-[50px] lg:text-[70px] tracking-widest leading-10 text-[#c7941e] text-shadow">THE ROYAL CHARM</h3>
          <p className="tracking-[.50em] text-1xl lg:text-2xl h-auto w-full my-10 text-center text-[#4d494f] text-shadow">Health and beauty for everybody</p>
          <div className="flex justify-center items-center">
          <button className="border-2 border-[#C88EA7] text-xl px-4 font-semibold rounded-full flex text-[#4d494f] hover:bg-[#C88EA7] hover:text-white duration-500">
          Book now 
          <LuArrowRight size={20} className=' m-[6px] '/>
          </button>
          </div>
        </div>        
    </div>    
  )
}

export default HomeHero