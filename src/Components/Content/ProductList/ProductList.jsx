import React from 'react'
import { Link } from 'react-router-dom'
import ControlledCard from '../../Card/Card'
import {SlArrowLeft} from 'react-icons/sl'

const ProductList = () => {

  const Product = [
    {
      img: 'product1.png',
      productName: 'product 1',
      description: 'product 1',
      price: '54.00',
      link: 'https://shopee.ph/Palmolive-Naturals-White-Beauty-Bar-Soap-with-100-Natural-Papaya-Extract-80g-Pack-of-3-i.45237836.726251114?sp_atk=e0151b7a-257c-412d-bfc3-92bcb178e791&xptdk=e0151b7a-257c-412d-bfc3-92bcb178e791'
    },
    {
      img: 'product2.png',
      description: 'product 12',
      productName: 'product 2',
      price: '68.00',
      link: 'https://shopee.ph/Palmolive-Naturals-Intensive-Moisture-Shampoo-with-Coconut-Cream-for-Dry-Coarse-Hair-600mhttps://shopee.ph/Breeze-Laundry-Liquid-Detergent-Power-Machine-3L-Bottle-i.40495882.2227713819?sp_atk=b9db5cb2-0d0c-4537-8aab-ff499b496845&xptdk=b9db5cb2-0d0c-4537-8aab-ff499b496845l-Pump-i.45237836.5019871290?sp_atk=5790db3e-b127-43aa-a9d1-3bf52c14842a&xptdk=5790db3e-b127-43aa-a9d1-3bf52c14842a'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product4.png',
      description: 'product 14',
      productName: 'product 4',
      price: '578.00',
      link: 'https://shopee.ph/-BUNDLE-OF-2-Baby-Dove-Hair-to-Toe-Wash-Rich-Moisture-430ml-Refill-for-Dry-Skin-i.40867978.7657839993?sp_atk=b33b8d6d-c0fd-44c9-b2f4-22eef52008e1&xptdk=b33b8d6d-c0fd-44c9-b2f4-22eef52008e1'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },
    {
      img: 'product3.png',
      description: 'product 3',
      productName: 'product 3',
      price: '67.00',
      link: 'https://shopee.ph/-BUNDLE-OF-3-Cream-Silk-Triple-Keratin-Rescue-Ultimate-Straight-Conditioner-340ml-i.40867978.5440704693?sp_atk=fafd2bb8-5140-47aa-a686-10063561ba76&xptdk=fafd2bb8-5140-47aa-a686-10063561ba76'
    },

    
  ]
  return (
    <>
    <div className="px-10 my-10">
      <Link to='/'>
      <div className=" flex justify-start tracking-tighter items-center text-end text-[16px] hover:text-[#C88EA7] duration-150 "><SlArrowLeft size={20} className='pr-2'/> Back to Home</div>
      </Link>
      <h1 className="text-center text-4xl font-semibold text-shadow m-5 mt-[-40px]">Our Product's</h1>     
    </div>

    <div className="h-auto w-full flex justify-center items-center px-4 lg:px-16">
      <div className="w-full h-full text-center gap-4 lg:gap-4  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8">
            {Product.map(({img, description, productName,price,link })=>(
                <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center">
                  <a href={link}>
                    <ControlledCard
                    style={{
                      borderRadius: '25px'
                      
                    }}
                      children = {
              
                      <div className='h-full w-full overflow-hidden'>
                          <div className="h-[60%] w-full px-8 lg:px-16">
                            <img className='h-36 w-44 mt-2 lg:mt-4' src={img} alt='product' />                          
                          </div>
                          <div className="h-[40%] w-full py-0 lg:py-2 mb-5">
                            <h4 className='text-[14px] lg:text-3xl text-shadow'>{productName}</h4>  
                            <p  className='text-[12px] lg:text-1xl text-shadow'>{description}</p>
                            <p className='text-[#C88EA7] text-1xl lg:text-2xl mb-10'><span>&#8369;</span>{price}</p>                          
                          </div>
                        </div>                
                                  
                      }
                    />                    
                  </a>


              </div>
              ))}  
            </div>
    </div>
    </>
  )
}

export default ProductList