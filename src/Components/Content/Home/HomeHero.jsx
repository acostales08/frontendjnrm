import React from 'react'
import { BiChevronRightCircle} from 'react-icons/bi'
import backgroundImage from '../../../assets/Homebg.png'
import NavBar from '../../NavBar'


const HomeHero = () => {
  return (
    <>
    <NavBar/>
    <div name="home" className='h-screen w-full flex justify-center items-center  px-0 md:px-20 bg-cover bg-center h-screen bg-fixed' style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="w-full text-center py-10 gap-2">
          <h3 className="font-semibold text-5xl md:text-[80px] tracking-widest leading-10 text-[#c7941e]">THE ROYAL CHARM</h3>
          <p className="tracking-[.25em] text-1xl md:text-2xl w-full my-10 text-center text-[#4d494f]">Health and beauty for everybody</p>
          <div className="flex justify-center items-center">
            <button className=" bg-[#C88EA7] py-2 px-4 rounded-md text-white text-1xl md:text-2xl hover:bg-[#d19db3] flex justify-center items-center gap-2 border-1 shadow-md">
              Get Started 
              <BiChevronRightCircle size={25} className='mt-1 animate-pulse'/> 
            </button>
          </div>
        </div>        
    </div>    
    </>

  )
}

export default HomeHero