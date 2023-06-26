import React from 'react'
import ServiseCard from '../../Card/ServiseCard'
import backgroundImage from '../../../assets/bg.jpeg'

const HomeAboutContent = () => {
  return (
    <div name="about" className='h-screen w-full bg-fixed' style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className=" p-10 h-full w-full  flex-col  bg-[#523240] bg-opacity-80 shadow-lg backdrop-blur-5 webkit-backdrop-blur-5">
          <div className="h-[50%] w-full bg-[#fff3f6] my-5 rounded-[25px] shadow-lg">

          </div>
           <div className=" h-[100px] w-full flex flex-col justify-center items-center">
              <h4 className="text-4xl tracking-[.40em] font-bold text-[#c7941e] text-shadow ">
               Our Products
              </h4>
            </div>
          <div className=" h-[100rem] w-full rounded-[25px] bg-[#fff3f6] shadow-lg ">
            <div className="border border-black w-full h-full text-center grid grid-cols-4 grid-rows-2">
              <div className="border border-black h-full w-full flex justify-center items-center"><ServiseCard
              img='\Home.png'
              text='Lorem ipsum dolor sit amet consectetur, '
              /></div>
              <div className="border border-black h-full w-full">2</div>
              <div className="border border-black h-full w-full">3</div>
              <div className="border border-black h-full w-full">4</div>
              <div className="border border-black h-full w-full">5</div>
              <div className="border border-black h-full w-full">6</div>
              <div className="border border-black h-full w-full">7</div>
              <div className="border border-black h-full w-full">8</div>


            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeAboutContent