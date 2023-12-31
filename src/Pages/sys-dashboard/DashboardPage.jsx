import React, { PureComponent, useState, useEffect } from 'react'
import axios from 'axios';
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
      name: 'April',
      uv: 2780,
      pv: 6555,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'August',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'September',
      uv: 8989,
      pv: 667,
      amt: 2100,
    },
    {
      name: 'October',
      uv: 5467,
      pv: 4567,
      amt: 2100,
    },
    {
      name: 'November',
      uv: 3456,
      pv: 7867,
      amt: 2100,
    },
    {
      name: 'December',
      uv: 8764,
      pv: 8976,
      amt: 2100,
    },
  ];

  const [totalMembers, setTotalMembers] = useState(null);
  const [totalProduct, setTotalProduct] = useState(null);
  const [totalSales, setTotalSales] = useState(null);
  const [criticalStock, setCriticalStock] = useState(null);

  useEffect(() => {
    // Fetch the total member count from the API
    axios.get('http://127.0.0.1:8000/api/totalmember') // Replace '/api/total-member' with your actual API endpoint
      .then(response => {
        if (response.data.status === 200) {
          setTotalMembers(response.data.message);
          console.log(totalMembers) // Update the state with the total member count
        }
      })
      .catch(error => {
        console.error(error);
        setTotalMembers(null); // Handle errors if needed
      });
  }, []);


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/totalproduct') 
      .then(response => {
        if (response.data.status === 200) {
          setTotalProduct(response.data.message); 
          console.log(totalProduct)
        }
      })
      .catch(error => {
        console.error(error);
        setTotalProduct(null);
      });
  }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/totalsales') 
      .then(response => {
        if (response.data.status === 200) {
          setTotalSales(response.data.message); 
          console.log(totalSales)
        }
      })
      .catch(error => {
        console.error(error);
        setTotalSales(null);
      });
  }, []);


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/criticalstock') 
      .then(response => {
        if (response.data.status === 200) {
          setCriticalStock(response.data.message); 
          console.log(criticalStock)
        }
      })
      .catch(error => {
        console.error(error);
        setCriticalStock(null);
      });
  }, []);

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
                  <FaUsers size={130} className='text-[#af5858] opacity-[0.7] hover:scale-125 duration-500'/>
              </div>
              <div className="h-full w-full">
                <div className="h-[60%] flex justify-start items-end">
                  <h1 className="text-[50px] md:text-[60px] lg:text-[60px] font-bold font-sans text-[white]">{totalMembers !== null ? totalMembers : 'Loading...'}</h1>
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
                   <MdProductionQuantityLimits size={130} className=' text-[#3f85be] opacity-[0.5] hover:scale-125 duration-500'/>
              </div>
            </div>
            <div className="h-full w-full">
              <div className="h-[60%] flex justify-start items-end">
                <h1 className='text-[50px] md:text-[60px] lg:text-[60px] font-bold font-sans text-[white]'>{totalProduct !== null ? totalProduct : 'Loading...'}</h1>
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
                <VscGraph size={130} className=' text-[#66806d] opacity-[0.5] hover:scale-125 duration-500'/>
              </div>
            </div>
            <div className="h-full w-full">
              <div className="h-[60%] flex justify-start items-end">
                <h1 className='text-[50px] md:text-[60px] lg:text-[60px] font-bold font-sans text-[white]'>{totalSales !== null ? totalSales : 'Loading...'}</h1>
              </div>{console.log(totalSales)}
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
                <RiCustomerService2Line size={130} className=' text-[#b5be88] opacity-[0.5] hover:scale-125 duration-500'/>
            </div>
          </div>
         <div className="h-full w-full">
          <div className="h-[60%] flex justify-start items-end">
            <h1 className='text-[50px] font-bold font-sans text-[white]'>{criticalStock !== null ? criticalStock : 'Loading...'}</h1>
          </div>
          <div className="h-[40%] flex justify-start items-start">
              <h2 className="text-1 xl text-[white] font-semibold">Critical Stock</h2>
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
