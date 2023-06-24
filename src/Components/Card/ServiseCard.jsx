import React from 'react'
import SimpleButton from '../Button/simpleButton'

const ServiseCard = ({text, img}) => {
  return (
    <div className="h-[60vh] w-full bg-white rounded-[20px] overflow-hidden shadow-lg">
      <div className="h-[55%] w-full">
        <img src={img} alt="image" className="h-full w-full" />
      </div>
      <div className="h-[45%] w-full flex-col justify-center items-center pb-10">
        <div className="h-[75%] w-full flex justify-center items-center">
          <h4 className="text-center text-[#4d494f] sm:text-[20px] md:text-[15px] lg:text-xl font-semibold">{text}</h4>
        </div>
        <div className="w-full flex justify-center items-center">
          <SimpleButton
          className= 'px-2 py-1 bg-[#C88EA7] hover:bg-[#d19db3] rounded-md text-[#3b3a3b] shadow-xl'
          text='View Details'
          />
        </div>
      </div>
    </div>
  )
}

export default ServiseCard





