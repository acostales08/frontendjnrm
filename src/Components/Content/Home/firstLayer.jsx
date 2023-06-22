import React from 'react'
import ControlledTypography from '../../Typography/Typography'

const HomeFirstlayer = () => {
  return (
    <div className=' h-screen w-full flex justify-center items-center  px-0 md:px-20'>
      <div className="">
        <div className=" w-full text-center py-10 font-[blue]">
          <h3 className="font-black text-3xl md:text-[60px]  tracking-tight leading-10 text-[#4d494f]">WELCOME TO ROYAL CHARM</h3>
          {/* <ControlledTypography 
            variant="h2"
            isgutterbottom={true}
            text="WELCOME TO ROYAL CHARM"
            /> */}
        </div>
        <div className=" text-center px-0 md:px-40 py-10">
          <p className="tracking-[.25em] text-1xl md:text-2xl w-full mt-0 text-center text-[#4d494f]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium aperiam hic unde voluptatum eius enim atque perspiciatis</p>
          {/* <ControlledTypography 
            variant="h4"
            isgutterbottom={true}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium aperiam hic unde voluptatum eius enim atque perspiciatis"
            />  */}
        </div>        
      </div>

    </div>
  )
}

export default HomeFirstlayer