import React, { PureComponent } from 'react'
import { ControlledCard } from '../../Components'
import { FaUsers } from 'react-icons/fa'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { FcSalesPerformance } from 'react-icons/fc'
import { RiCustomerService2Line } from 'react-icons/ri'
import { VscGraph } from 'react-icons/vsc'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DashboardContent = () => {
  const data = [
    {
      name: 'January',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'February',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      uv: 2000,
      pv: 1800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  return (
    <section className=" h-auto w-full">
      <div className=" h-96 md:h-52 lg:h-52 w-full p-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full w-full">
          {/* card  */}
        <ControlledCard 
        // card content
        children ={
          <div className='flex h-full w-full bg-red-600 bg-opacity-75 '>
            <div className="h-full w-full flex justify-center items-center">
                {/* icons */}
                <FaUsers size={130} className='text-[#4c4d7a] opacity-[0.7] hover:scale-125 duration-500'/>
            </div>
            <div className="h-full w-full">
              <div className="h-[60%] flex justify-start items-end">
                <h1 className="text-[50px] md:text-[60px] lg:text-[60px] font-bold font-sans text-[white]">40</h1>
              </div>
              <div className="h-[40%] flex justify-start items-start">
                <h2 className="text-1xl text-[white] font-semibold">Total Members</h2>
              </div>
            </div>
          </div>
        }/>

        <ControlledCard children ={
          <div className='flex h-full w-full bg-[#068FFF] bg-opacity-75 '>
            <div className=" h-full w-full flex justify-center items-center">
              <div className="h-32 w-32  ">
                   {/* icons */}
                   <MdProductionQuantityLimits size={130} className=' text-[#4c4d7a] opacity-[0.5] hover:scale-125 duration-500'/>
              </div>
            </div>
            <div className="h-full w-full">
            <div className="h-[60%] flex justify-start items-end">
              <h1 className='text-[50px] font-bold font-sans text-[white]'>50</h1>
            </div>
            <div className="h-[40%] flex justify-start items-start">
            <h2 className="text-1xl text-[white] font-semibold">Total Product</h2>
            </div>
            </div>
            </div>
          
        }/>
        <ControlledCard children ={
          <div className='flex h-full w-full bg-[#5D9C59] bg-opacity-75 '>
          <div className=" h-full w-full flex justify-center items-center">
            <div className="h-32 w-32 ">
               {/* icons */}
               <VscGraph size={130} className=' text-[#32553b] opacity-[0.5] hover:scale-125 duration-500'/>
            </div>
          </div>
          <div className="h-full w-full">
          <div className="h-[60%] flex justify-start items-end">
            <h1 className='text-[50px] font-bold font-sans text-[white]'>20</h1>
          </div>
          <div className="h-[40%] flex justify-start items-start">
          <h2 className="text-1xl text-[white] font-semibold">Total Sales</h2>
          </div>
          </div>
          </div>
        }/>

        <ControlledCard children ={
         <div className='flex h-full w-full bg-[#FBD85D] bg-opacity-75 '>
         <div className=" h-full w-full flex justify-center items-center">
           <div className="h-32 w-32 ">
              {/* icons */}
              <RiCustomerService2Line size={130} className=' text-[#6c724a] opacity-[0.5] hover:scale-125 duration-500'/>
           </div>
         </div>
         <div className="h-full w-full">
         <div className="h-[60%] flex justify-start items-end">
           <h1 className='text-[50px] font-bold font-sans text-[white]'>30</h1>
         </div>
         <div className="h-[40%] flex justify-start items-start">
         <h2 className="text-1 xl text-[white] font-semibold">Total Service</h2>
         </div>
         </div>
         </div>
        }/>

        </div>
      </div>
        <div className="grid h-[650px] w-full p-4">
        <ControlledCard children ={
                <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
        }/>
        </div>
    </section>

  )
}


export default DashboardContent
