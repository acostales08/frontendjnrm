import React from 'react'
import { ControlledCard } from '../../Components'
import { FaUsers } from 'react-icons/fa'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { FcSalesPerformance } from 'react-icons/fc'
import { RiCustomerService2Line } from 'react-icons/ri'
import { VscGraph } from 'react-icons/vsc'


const DashboardContent = () => {
  return (
    <section className=" h-auto w-full">
      <div className=" h-60 w-full p-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full w-full">
          {/* card  */}
        <ControlledCard 
        // card content
        children ={

          <div className='flex h-full w-full bg-red-600'>
            <div className="h-full w-full flex justify-center items-center">
                {/* icons */}
                <FaUsers size={130} className='text-[#4c4d7a] opacity-[0.7] hover:scale-125 duration-500'/>
            </div>
            <div className="h-full w-full">
              <div className="h-[60%] flex justify-start items-end">
                <h1 className="text-[70px] font-bold font-sans text-[white]">40</h1>
              </div>
              <div className="h-[40%] flex justify-start items-start">
                <h2 className="text-2xl text-[white] font-semibold">Total Members</h2>
              </div>
            </div>
          </div>
        }/>

        <ControlledCard children ={
          <div className='flex h-full w-full bg-[#068FFF]'>
            <div className=" h-full w-full flex justify-center items-center">
              <div className="h-32 w-32  ">
                   {/* icons */}
                   <MdProductionQuantityLimits size={130} className=' text-[#4c4d7a] opacity-[0.5] hover:scale-125 duration-500'/>
              </div>
            </div>
            <div className="h-full w-full">
            <div className="h-[60%] flex justify-start items-end">
              <h1 className='text-[70px] font-bold font-sans text-[white]'>50</h1>
            </div>
            <div className="h-[40%] flex justify-start items-start">
            <h2 className="text-2xl text-[white] font-semibold">Total Product</h2>
            </div>
            </div>
            </div>
          
        }/>
        <ControlledCard children ={
          <div className='flex h-full w-full bg-[#5D9C59]'>
          <div className=" h-full w-full flex justify-center items-center">
            <div className="h-32 w-32 ">
               {/* icons */}
               <VscGraph size={130} className=' text-[#32553b] opacity-[0.5] hover:scale-125 duration-500'/>
            </div>
          </div>
          <div className="h-full w-full">
          <div className="h-[60%] flex justify-start items-end">
            <h1 className='text-[70px] font-bold font-sans text-[white]'>20</h1>
          </div>
          <div className="h-[40%] flex justify-start items-start">
          <h2 className="text-2xl text-[white] font-semibold">Total Sales</h2>
          </div>
          </div>
          </div>
        }/>

        <ControlledCard children ={
         <div className='flex h-full w-full bg-[#FBD85D]'>
         <div className=" h-full w-full flex justify-center items-center">
           <div className="h-32 w-32 ">
              {/* icons */}
              <RiCustomerService2Line size={130} className=' text-[#6c724a] opacity-[0.5] hover:scale-125 duration-500'/>
           </div>
         </div>
         <div className="h-full w-full">
         <div className="h-[60%] flex justify-start items-end">
           <h1 className='text-[70px] font-bold font-sans text-[white]'>30</h1>
         </div>
         <div className="h-[40%] flex justify-start items-start">
         <h2 className="text-2xl text-[white] font-semibold">Total Service</h2>
         </div>
         </div>
         </div>
        }/>

        </div>
      </div>
        <div className="grid h-[55vh] w-full p-4">
        <ControlledCard children ={
          <>
          </>
        }/>
        </div>
    </section>

  )
}

export default DashboardContent
