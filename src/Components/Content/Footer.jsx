import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'  
import { MdOutlineEmail, MdLocalPhone } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='h-auto w-full bg-[#523240] text-white flex flex-col justify-end items-end px-20'>
      <div className=" w-full h-2/4 flex flex-col lg:flex-row">
        <div className=" w-2/4 h-full mx-20 flex flex-col justify-center items-start">
          <h6 className="text-[#C88EA7] flex"><ImLocation2 size={15}  className='m-1'/>Plaridel Bulacan Philippines, 3004</h6>
          <h6 className="text-[#C88EA7] flex"><MdLocalPhone size={15}  className='m-1'/>0995 464 2090</h6>
          <h6 className="text-[#C88EA7] flex"><MdOutlineEmail size={15}  className='m-1'/>theroyalcharm@gmail.com</h6>
        </div>
        <div className=" w-2/4 h-full mx-20">
          <h4 className="w-full text-center text-[#C88EA7] font-semibold">About the company</h4>
          <p className="mx-10 text-[#C88EA7]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quis rem numquam doloremque commodi! Laboriosam autem quidem sapiente corporis ut fugiat molestiae deleniti saepe at. Voluptatum eum, illum facilis in vero et corrupti, maxime cum magnam provident optio ullam quam aperiam nisi ad animi mollitia cumque totam? Animi, corporis expedita!</p>
          <div className=" w-full h-[50px] flex justify-center items-center gap-4 py-5">
          <div className="border-2 border-[#C88EA7] text-[#C88EA7] rounded-full p-1 hover:bg-[#C88EA7] hover:border-white hover:shadow-md hover:shadow-[#C88EA7] hover:text-white duration-300 cursor-pointer">
            <FaFacebookF size={20}/>
          </div>
          <div className="border-2 border-[#C88EA7] text-[#C88EA7] rounded-full p-1 hover:bg-[#C88EA7] hover:border-white hover:shadow-md hover:shadow-[#C88EA7] hover:text-white duration-300 cursor-pointer">
            <FaTwitter size={20}/>
          </div>
          <div className="border-2 border-[#C88EA7] text-[#C88EA7] rounded-full p-1 hover:bg-[#C88EA7] hover:border-white hover:shadow-md hover:shadow-[#C88EA7] hover:text-white duration-300 cursor-pointer">
            <FaInstagram size={20}/>
          </div>
          <div className="border-2 border-[#C88EA7] text-[#C88EA7] rounded-full p-1 hover:bg-[#C88EA7] hover:border-white hover:shadow-md hover:shadow-[#C88EA7] hover:text-white duration-300 cursor-pointer">
            <MdOutlineEmail size={20}/>
          </div> 
        </div>
        </div>
      </div>
        <div className="h-[65px] w-full flex justify-center items-center border-t-2 border-[#C88EA7] mt-14">
          <h6 className="text-white">Copyright © 2023 The Royal Charm. All Rights Reserved</h6>
        </div>
    </div>
  )
}

export default Footer