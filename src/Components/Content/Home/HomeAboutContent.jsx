import React from 'react'
import ServiseCard from '../../Card/ServiseCard'
import { LuArrowRight } from 'react-icons/lu'
import { CiBullhorn } from 'react-icons/ci'
import ControlledCard from '../../Card/Card'
import backgroundImage from '../../../assets/bg.jpeg'




const HomeAboutContent = () => {

  const Product = [
    {
      img: '\product1.png',
      productName: 'product 1',
      description: 'product 1',
      price: '54.00'
    },
    {
      img: '\product2.png',
      description: 'product 12',
      productName: 'product 2',
      price: '68.00'
    },
    {
      img: '\product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00'
    },
    {
      img: '\product4.png',
      description: 'product 14',
      productName: 'product 4',
      price: '578.00'
    },
    
  ]

  return (
    <div name="about" className=' lg:h-screen w-full bg-fixed' style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="p-2 md:p-8 lg:p-10 h-full w-full  flex-col  bg-[#523240] bg-opacity-80 shadow-lg backdrop-blur-5 webkit-backdrop-blur-5">
          <div className="h-[50%] w-full bg-[#fff3f6] my-5 rounded-[25px] shadow-lg">
            <h2 className="text-1xl lg:text-4xl font-semibold tracking-[.35em] text-[#c7941e] text-shadow  w-full text-center py-2">Announcement</h2>
            <div className=" w-full h-[80%] flex justify-center items-center">
                <div className=" h-full w-[70%]">
                  <h2 className="flex justify-center items-center h-full w-full text-1xl lg:text-3xl text-[#4d494f] m-2 bg-white py-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione reprehenderit repellendus illum quidem ipsum at unde temporibus dolore nulla quasi facilis perspiciatis, nemo quibusdam autem veritatis assumenda cum? Commodi esse praesentium perferendis! Totam repudiandae numquam provident dolores, tenetur non maxime ad, inventore assumenda repellat, accusantium hic harum magni optio dolorum!</h2>
                </div>
            </div>
          </div>
           <div className="h-[60px] lg:h-[100px] w-full flex flex-col justify-center items-center">
              <h4 className="text-2xl md:text-3xl lg:text-4xl tracking-[.40em] font-bold text-[#c7941e] text-shadow ">
               Our Products
              </h4>
            </div>
          <div className="h-auto w-full rounded-[25px] bg-[#fff3f6] shadow-lg p-2 md:p-5 lg:p-10">
            <div className="w-full h-full text-center gap-2 lg:gap-8  grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 pt-8">
            {Product.map(({img, description, productName,price})=>(
              <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center">
                  <ControlledCard
                  style={{
                    borderRadius: '25px'
                    
                  }}
                    children = {
                      <div className='grid grid-cols4 grid-rows-1'>
                              <div className=' h-full w-full overflow-hidden'>
                                  <div className="h-[60%] w-[240px] lg:w-[350px] flex justify-center items-center">
                                    <img className='h-[180px] w-[150px] lg:w-[200px] my-4' src={img} />                          
                                  </div>
                                  <div className="h-[40%] w-full py-10">
                                    <h4 className='text-[14px] lg:text-3xl text-shadow'>{productName}</h4>  
                                    <p  className='text-[12px] lg:text-1xl text-shadow'>{description}</p>
                                    <p className='text-[#C88EA7] text-1xl lg:text-2xl'><span>&#8369;</span>{price}</p>                          
                                  </div>
                                </div>                
                                           
                      </div>
                    }
                  />

              </div>
              ))}  
            </div>
            <div className="w-full flex justify-center p-5 pt-10">
              <button className="border-2 border-[#C88EA7] justify-center items-center text-[16px] lg:text-xl px-4 font-semibold rounded-full flex text-[#4d494f] hover:bg-[#C88EA7] hover:text-white duration-500">
                      See more
                <LuArrowRight size={20} className='m-[6px]'/>
              </button>              
            </div>

          </div>
        </div>
    </div>
  )
}

export default HomeAboutContent