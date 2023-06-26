import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='h-[40vh] w-full bg-[#523240] text-white flex flex-col justify-end items-end px-20'>
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
      <div className="h-[65px] w-full flex justify-center items-center border-t-2 border-[#C88EA7]">
        <h6 className="text-white">Copyright © 2023 The Royal Charm. All Rights Reserved</h6>
      </div>
    </div>
  )
}

export default Footer