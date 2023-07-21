import React, {useState, useEffect} from 'react'
import { Button, IconButton } from '@mui/material'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { ControlledCard } from '../../../Components'
import axios from 'axios'


const SalesContent = () => {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/product');
      setProductData(response.data.product)
      console.log(response.data.product)
    } catch (error) {
      
    }
  }

    return (
        <section className="h-[897px] w-auto p-2 top-0 flex bg-[#F9F5F6]">
          <div className=" h-full w-[60%] flex flex-col">
            <div className="w-full h-full bg-white rounded-lg grid grid-cols-2 lg:grid-cols-5 grid-rows-3 p-5 gap-3 shadow-inner">
            {productData.map(({productname, image, price, index}) => (
              <ControlledCard key={index}
                      children = {
                        <div className='h-full flex flex-col justify-center items-center cursor-pointer'>
                            <img src={`http://127.0.0.1:8000/storage/${image}`} alt="" className='h-28 w-28'/>
                            <p className="m-2">{productname}</p>
                            <p className="flex justify-center items-center"><span>&#8369;</span>{price}</p>
                        </div>
                      }
                    /> 
            ))}

            </div>
            <div className="w-full h-[20%] flex p-2 bg-[#F9F5F6]">
              <div className="w-full flex px-10 text-1xl gap-4">
                <div className="gap-0 grid">
                  <p className=" flex items-center">Sub :</p>
                  <p className=" flex items-center">Discount :</p>
                  <p className=" flex items-center">Tax :</p>
                </div>
                <div className=" w-[230px] grid">
                  <div className=" p-1 flex items-center">
                    <p className=" w-full rounded-lg bg-white p-1 shadow-inner">10.00</p>
                  </div>
                  <div className=" p-1 flex items-center">
                    <p className=" w-full rounded-lg bg-white p-1 shadow-inner">0.7</p>
                  </div>
                  <div className=" p-1 flex items-center">
                    <p className=" w-full rounded-lg bg-white p-1 shadow-inner">10.00</p>
                  </div> 
                </div>
              </div>
              <div className="gap-2 w-9/12 text-2xl  flex flex-col justify-center items-center">
                <h1 className=""> Total Amount </h1>
                <p className="p-4 rounded-md shadow-inner bg-white w-36 "><span>&#8369;</span> 10.11</p>
              </div>                
            </div>
            <div className="h-10 flex justify-center gap-5">
              <Button
              // style={{
              //   backgroundColor: '#C88EA7'
              // }}
              variant='contained'
              >Save</Button>
              <Button 
              // style={{
              //   backgroundColor: '#cfd8dc'
              // }}
              color='warning'
              variant='outlined'
              >Cancel</Button>                    
              <Button 
              // style={{
              //   backgroundColor: '#C88EA7'
              // }}
              variant='contained'
              color='success'
              >
                GCash</Button>    
              <Button
              // style={{
              // backgroundColor: '#C88EA7'
              //   }} 
              variant='contained'
              color='success'
              >
                Discount</Button>    
              <Button
              // style={{
              // backgroundColor: '#C88EA7'
              //   }} 
              variant='contained'
              color='success'
              >Print</Button>    
            </div>
          </div>
          <div className=" h-full w-[40%] p-1">
            <div className="h-[60%] w-full rounded-lg grid grid-rows-5 gap-2">
              {productData.map(({productname, image, price, index}) => (
              <ControlledCard key={index}
              children={
                <div className='flex h-full'>
                    <div className='p-4 h-full w-[20%]'>
                      <img src={`http://127.0.0.1:8000/storage/${image}`} alt="Product image" className='' />
                    </div>
                    <div className='flex justify-between items-center w-full h-full gap-5 text-2xl'>
                      <p className="m-6">{productname}</p>
                      <p className="m-6"><span>&#8369;</span>{price}</p>
                    </div>
                    <div className="w-[20%] flex justify-center items-center">
                      <IconButton>
                        <RiDeleteBin6Line size={30}/>                        
                      </IconButton>
                    </div>          
                </div>
              }   
              />                
              ))}

            </div>
          </div>
        </section>        

      )
}

export default SalesContent