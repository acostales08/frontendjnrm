import React from 'react' 
import { Link } from 'react-router-dom'
import { LuArrowRight } from 'react-icons/lu'
import ControlledCard from '../../Card/Card'
import backgroundImage from '../../../assets/bg.jpeg'




const HomeAboutContent = () => {

  const Product = [
    {
      img: '\product1.png',
      productName: 'product 1',
      description: 'product 1',
      price: '54.00',
      link: 'https://shopee.ph/Palmolive-Naturals-White-Beauty-Bar-Soap-with-100-Natural-Papaya-Extract-80g-Pack-of-3-i.45237836.726251114?sp_atk=e0151b7a-257c-412d-bfc3-92bcb178e791&xptdk=e0151b7a-257c-412d-bfc3-92bcb178e791'
    },
    {
      img: '\product2.png',
      description: 'product 12',
      productName: 'product 2',
      price: '68.00',
      link: 'https://shopee.ph/Palmolive-Naturals-Intensive-Moisture-Shampoo-with-Coconut-Cream-for-Dry-Coarse-Hair-600mhttps://shopee.ph/Breeze-Laundry-Liquid-Detergent-Power-Machine-3L-Bottle-i.40495882.2227713819?sp_atk=b9db5cb2-0d0c-4537-8aab-ff499b496845&xptdk=b9db5cb2-0d0c-4537-8aab-ff499b496845l-Pump-i.45237836.5019871290?sp_atk=5790db3e-b127-43aa-a9d1-3bf52c14842a&xptdk=5790db3e-b127-43aa-a9d1-3bf52c14842a'
    },
    {
      img: '\product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: '\product4.png',
      description: 'product 14',
      productName: 'product 4',
      price: '578.00',
      link: 'https://shopee.ph/-BUNDLE-OF-2-Baby-Dove-Hair-to-Toe-Wash-Rich-Moisture-430ml-Refill-for-Dry-Skin-i.40867978.7657839993?sp_atk=b33b8d6d-c0fd-44c9-b2f4-22eef52008e1&xptdk=b33b8d6d-c0fd-44c9-b2f4-22eef52008e1'
    }
    
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
            {Product.slice(0, 4).map(({img, description, productName,price,link })=>(
                <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center">
                  <a href={link}>
                    <ControlledCard
                    style={{
                      borderRadius: '25px'
                      
                    }}
                      children = {
                        
                        <div className='grid grid-cols4 grid-rows-1'>
                                <div className=' h-full w-full overflow-hidden'>
                                    <div className="h-[60%] w-[240px] md:w-[320px] lg:w-[350px] flex justify-center items-center">
                                      <img className='h-[180px] w-[150px] lg:w-[200px] my-4' src={img} />                          
                                    </div>
                                    <div className="h-[40%] w-full py-0 lg:py-10">
                                      <h4 className='text-[14px] lg:text-3xl text-shadow'>{productName}</h4>  
                                      <p  className='text-[12px] lg:text-1xl text-shadow'>{description}</p>
                                      <p className='text-[#C88EA7] text-1xl lg:text-2xl'><span>&#8369;</span>{price}</p>                          
                                    </div>
                                  </div>                
                                            
                        </div>
                      }
                    />                    
                  </a>


              </div>
              ))}  
            </div>
            <div className="w-full flex justify-center p-5 pt-10">
              <Link to='/productList'>
              <button className="border-2 border-[#C88EA7] justify-center items-center text-[16px] lg:text-xl px-4 font-semibold rounded-full flex text-[#4d494f] hover:bg-[#C88EA7] hover:text-white duration-500">
                      See more
                <LuArrowRight size={20} className='m-[6px]'/>
              </button>              
              </Link>
            </div>

          </div>
        </div>
    </div>
  )
}

export default HomeAboutContent