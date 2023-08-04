import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ControlledCard from '../../Card/Card'
import {SlArrowLeft} from 'react-icons/sl'
import axios from 'axios'

const ProductList = () => {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response =  await axios.get('http://localhost:8000/api/product')
      setProductData(response.data.product)
    } catch (error) {
      
    }
  }

  return (
    <>
    <div className="px-10 my-10">
      <Link to='/'>
      <div className=" flex justify-start tracking-tighter items-center text-end text-[16px] hover:text-[#C88EA7] duration-150 "><SlArrowLeft size={20} className='pr-2'/> Back to Home</div>
      </Link>
      <h1 className="text-center text-4xl font-semibold text-shadow m-5 mt-[-40px]">Our Product's</h1>     
    </div>

    <div className="h-auto w-full flex justify-center items-center px-4 lg:px-16">
    {productData.map(({image, description, productName,price, link, index })=>(
      <div className="w-full h-full text-center gap-4 grid  pt-8">
                <div className="h-full w-full flex flex-col justify-center items-center cursor-pointer" >
                  <a href={link} >
                    <ControlledCard key={index}
                    style={{
                      borderRadius: '25px'
                      
                    }}
                      children = {
              
                      <div className='h-full w-full overflow-hidden '>
                          <div className="h-[60%] w-full px-8 lg:px-16">
                            <img className='h-36 w-44 mt-2 lg:mt-4' src={`http://127.0.0.1:8000/storage/${image}`} alt='product' />                          
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
              </div>
              ))}  

      

    </div>
    </>
  )
}

export default ProductList