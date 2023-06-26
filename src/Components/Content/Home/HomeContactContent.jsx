import React from 'react'

const HomeContactContent = () => {
  return (
    <div name="contact" className='h-auto w-full bg-transparent flex justify-end items-end shadow-xl'>
        <div className="h-[60vh] mt-[150vh] w-full rounded-[25px] flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full h-full py-10 pl-4 flex-col lg:flex-row">
            <div className="h-full w-full rounded-[20px] bg-white border border-black"></div>
          </div>
          <div className="w-full h-full py-10 pr-4">
            <div className="h-full w-full rounded-[20px] bg-white border border-black"></div>
          </div>
        </div>
    </div>
  )
}

export default HomeContactContent