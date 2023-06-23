import React from 'react'

const HomePromoContent = () => {
  return (
    <div name="promo" className='border border-black h-screen w-full bg-gray flex-col justify-center items-center'>
      <img src="" alt="" />
        <h3 className="border border-black text-4xl font-bold w-full text-center text-[#4d494f] flex flex-col">Our Promo</h3>
        <div className="h-[460px] w-full border border-black bg-[gray] flex justify-center items-center">
              <h4 className="text-[43px] w-[1378px] border border-black text-center">Merging the worlds of aesthetics & beauty, we are committed to offering the highest level of service and results driven treatments all in the comfort of our luxury beauty clinics.</h4>
        </div>
        <div className="h-[460px] w-full border border-black bg-[blue] flex justify-center items-center">
          <h3 className="flex text-[43px] w-[1776px] border border-black text-center">Our state-of-the-art facility is designed with your comfort in mind, offering the latest treatments, techniques, and technologies, and maintaining an energetic, positive atmosphere in which you can feel confident, beautiful and relaxed. Visit us, we’d love to talk about your beauty journey. </h3>
        </div>       
    </div>
  )
}

export default HomePromoContent