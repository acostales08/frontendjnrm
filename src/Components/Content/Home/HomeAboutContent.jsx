import React from 'react'
import ServiseCard from '../../Card/ServiseCard'
import { LuArrowRight } from 'react-icons/lu'
import { CiBullhorn } from 'react-icons/ci'
import ControlledCard from '../../Card/Card'
import backgroundImage from '../../../assets/bg.jpeg'

const HomeAboutContent = () => {
  return (
    <div name="about" className='h-auto sm:h-auto md:h-auto lg:h-screen w-full bg-fixed' style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="p-2 md:p-8 lg:p-10 h-full w-full  flex-col  bg-[#523240] bg-opacity-80 shadow-lg backdrop-blur-5 webkit-backdrop-blur-5">
          <div className="h-[50%] w-full bg-[#fff3f6] my-5 rounded-[25px] shadow-lg">
            <h2 className="text-1xl lg:text-4xl font-semibold tracking-[.35em] text-[#c7941e] text-shadow  w-full text-center py-2">Announcement</h2>
            <div className=" w-full h-[80%] flex justify-center items-center">
                <div className=" h-full w-[70%]">

                  <h2 className="flex justify-center items-center h-full w-full text-1xl lg:text-3xl text-[#4d494f]  bg-white py-10">Tomorrow is another day</h2>
                </div>
            </div>
          </div>
           <div className=" h-[100px] w-full flex flex-col justify-center items-center">
              <h4 className="text-2xl md:text-3xl lg:text-4xl tracking-[.40em] font-bold text-[#c7941e] text-shadow ">
               Our Products
              </h4>
            </div>
          <div className=" h-auto w-full rounded-[25px] bg-[#fff3f6] shadow-lg p-2 md:p-5 lg:p-10">
            <div className="w-full h-full text-center gap-8 flex flex-col lg:flex-row pt-8">
              <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center">
                  <ControlledCard
                  style={{
                    borderRadius: '25px'
                    
                  }}
                    children = {
                      <>
                      <div className='h-full w-full overflow-hidden'>
                        <div className="h-[50%] w-full">
                          <img className='' src='\Home.png' />                          
                        </div>
                        <div className="h-[50%] w-full py-10">
                          <h4 className='text-[14px] lg:text-3xl text-shadow'>Product Name</h4>  
                          <p  className='text-[12px] lg:text-1xl text-shadow'>Description</p>
                          <p className='text-[#C88EA7] text-1xl lg:text-2xl'><span>&#8369;</span> 0.00</p>                          
                        </div>

                        </div>
                      </>
                    }
                  />
              </div>
              <div className="h-full w-full flex justify-center items-center">
                  <ControlledCard
                  style={{
                    borderRadius: '25px'
                    
                  }}
                    children = {
                      <>
                      <div className='h-full w-full overflow-hidden'>
                        <div className="h-[50%] w-full">
                          <img className='' src='\Home.png' />                          
                        </div>
                        <div className="h-[50%] w-full py-10">
                          <h4 className='text-[14px] lg:text-3xl text-shadow'>Product Name</h4>  
                          <p  className='text-[12px] lg:text-1xl text-shadow'>Description</p>
                          <p className='text-[#C88EA7] text-1xl lg:text-2xl'><span>&#8369;</span> 0.00</p>                          
                        </div>

                        </div>
                      </>
                    }
                  />
              </div>
              <div className="h-full w-full flex justify-center items-center">
                  <ControlledCard
                  style={{
                    borderRadius: '25px'
                    
                  }}
                    children = {
                      <>
                      <div className='h-full w-full overflow-hidden'>
                        <div className="h-[50%] w-full">
                          <img className='' src='\Home.png' />                          
                        </div>
                        <div className="h-[50%] w-full py-10">
                          <h4 className='text-[14px] lg:text-3xl text-shadow'>Product Name</h4>  
                          <p  className='text-[12px] lg:text-1xl text-shadow'>Description</p>
                          <p className='text-[#C88EA7] text-1xl lg:text-2xl'><span>&#8369;</span> 0.00</p>                          
                        </div>

                        </div>
                      </>
                    }
                  />
              </div>
              <div className="h-full w-full flex justify-center items-center">
                  <ControlledCard
                  style={{
                    borderRadius: '25px'
                    
                  }}
                    children = {
                      <>
                      <div className='h-full w-full overflow-hidden'>
                        <div className="h-[50%] w-full">
                          <img className='' src='\Home.png' />                          
                        </div>
                        <div className="h-[50%] w-full py-10">
                          <h4 className='text-[14px] lg:text-3xl text-shadow'>Product Name</h4>  
                          <p  className='text-[12px] lg:text-1xl text-shadow'>Description</p>
                          <p className='text-[#C88EA7] text-1xl lg:text-2xl'><span>&#8369;</span> 0.00</p>                          
                        </div>

                        </div>
                      </>
                    }
                  />
              </div>
            </div>
            <div className="w-full flex justify-center p-5 pt-10">
              <button className="border-2 border-[#C88EA7] text-xl px-4 font-semibold rounded-full flex text-[#4d494f] hover:bg-[#C88EA7] hover:text-white duration-500">
                      See more
                <LuArrowRight size={20} className=' m-[6px]'/>
              </button>              
            </div>

          </div>
        </div>
    </div>
  )
}

export default HomeAboutContent