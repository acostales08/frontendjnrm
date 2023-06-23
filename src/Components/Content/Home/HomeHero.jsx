import React from 'react'
import { BiChevronRightCircle} from 'react-icons/bi'

const HomeHero = () => {
  return (
    <div name="home" className='h-screen w-full flex justify-center items-center  px-0 md:px-20'>
        <div className="w-full text-center py-10 gap-2">
          <h3 className="font-bold text-4xl md:text-[60px]  tracking-widest leading-10 text-[#4d494f]">THE ROYAL CHARM</h3>
          <p className="tracking-[.25em] text-1xl md:text-2xl w-full my-10 text-center text-[#4d494f]">Health and beauty for everybody</p>
          <div className="flex justify-center items-center">
            <button className=" bg-[#C88EA7] py-2 px-4 rounded-md text-white text-2xl hover:bg-[#d19db3] flex justify-center items-center gap-2 border-1 drop-shadow-2xl">
              Get Started 
              <BiChevronRightCircle size={25} className='mt-1 animate-pulse'/> 
            </button>
          </div>
        </div>        

    </div>
  )
}

export default HomeHero