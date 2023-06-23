import React from 'react'

const ServiseCard = ({description, img}) => {
  return (
    <div className="h-[660px] w-[440px] rounded-[20px] overflow-hidden shadow-lg gap-1">
        <img src={img} alt="" className="h-[60%]" />
        <div className="flex justify-center items-center w-full h-[40%] bg-white">
            <div className="flex-col w-full  text-center text-[#4d494f]">
            <h6 className=" text-4xl mx-4 my-4">{description}</h6>
            <button className=" bg-[#C88EA7] rounded-md text-white py-2 px-4 m-4">View Details</button>
            </div>
        </div>
    </div>
  )
}

export default ServiseCard