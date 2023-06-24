import React from 'react'
import backgroundImage from '../../../assets/bg.jpeg'

const HomeAboutContent = () => {
  return (
    <div name="about" className='h-screen w-full bg-fixed' style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className=" p-10 h-full w-full  flex-col  bg-[#523240] bg-opacity-80 shadow-lg backdrop-blur-5 webkit-backdrop-blur-5">
          <div className="h-[50%] w-full bg-[#fff3f6] my-5 rounded-[25px] shadow-2xl"></div>
          <div className=" h-[100vh] w-full rounded-[25px] bg-[#fff3f6] shadow-2xl ">

          </div>
        </div>
    </div>
  )
}

export default HomeAboutContent