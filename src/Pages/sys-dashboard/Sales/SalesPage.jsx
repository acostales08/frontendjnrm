import React from 'react'
import { Button } from '@mui/material'
import { RiDeleteBin6Line } from 'react-icons/ri'
import {BsPlusLg, BsDash} from 'react-icons/bs'
import { ControlledCard } from '../../../Components'

const SalesContent = () => {
    return (
        <div className="h-[93vh] w-auto p-8 bg-[#F9F5F6] overflow-hidden top-0">
          {/* <ControlledCard
            children={
              <div>

              </div>
            }
          /> */}
          <div className="h-full w-full shadow-md flex rounded-md bg-[#F8E8EE]">
            <div className=" h-full w-[60%] flex flex-col p-2">
              <div className="w-full h-full bg-white rounded-lg grid grid-cols-4 grid-rows-3 p-5 gap-2">
              <ControlledCard
                      children = {
                        <div>
                        </div>
                      }
                    /> 
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>   
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/>
                <ControlledCard/> 
              </div>
              <div className="w-full h-[20%] flex p-2">
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
                      <p className=" w-full rounded-lg bg-white p-1 shadow-inner">10.00</p>
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
            <div className=" h-full w-[40%] p-2">
              <div className="h-full w-full rounded-lg grid grid-rows-5 gap-2">
                <ControlledCard 
                children={
                  <div className='h-full flex items-center p-2'>
                    <div className="">
                      <img src="\product1.png" alt=""  className=' h-32 w-36'/>
                    </div>
                    <div className=" text-center h-full w-52 flex flex-col">
                      <p className=" h-20 flex justify-center items-center">product name</p>
                      <p className=" h-16 flex justify-center items-center"><span>&#8369;</span>10.00</p>
                    </div>
                    <div className=" h-full w-60 flex">
                      <div className=" flex justify-center items-center w-full ">
                        <div className=" flex justify-center items-center rounded-full shadow-lg h-10 w-10 bg-[#F9F5F6] cursor-pointer"><BsDash/></div>
                        <div className=" flex justify-center items-center mx-1 h-14 w-20 bg-[#F9F5F6] rounded-md">1</div>
                        <div className=" flex justify-center items-center rounded-full shadow-lg h-10 w-10 bg-[#F9F5F6] cursor-pointer"><BsPlusLg/></div>
                      </div>
                      <div className=" flex justify-end items-center text-[#4d494f] cursor-pointer">
                      <RiDeleteBin6Line size={30} className=' m-4'/>
                      </div>
                    </div>
                  </div>
                }
                />
                <ControlledCard 
                children={
                  <div className='h-full flex items-center p-2'>
                    <div className="">
                      <img src="\product1.png" alt=""  className=' h-32 w-36'/>
                    </div>
                    <div className=" text-center h-full w-52 flex flex-col">
                      <p className=" h-20 flex justify-center items-center">product name</p>
                      <p className=" h-16 flex justify-center items-center"><span>&#8369;</span>10.00</p>
                    </div>
                    <div className=" h-full w-60 flex">
                      <div className=" flex justify-center items-center w-full ">
                        <div className=" flex justify-center items-center rounded-full shadow-lg h-10 w-10 bg-[#F9F5F6] cursor-pointer"><BsDash/></div>
                        <div className=" flex justify-center items-center mx-1 h-14 w-20 bg-[#F9F5F6] rounded-md">1</div>
                        <div className=" flex justify-center items-center rounded-full shadow-lg h-10 w-10 bg-[#F9F5F6] cursor-pointer"><BsPlusLg/></div>
                      </div>
                      <div className=" flex justify-end items-center text-[#4d494f] cursor-pointer">
                      <RiDeleteBin6Line size={30} className=' m-4'/>
                      </div>
                    </div>
                  </div>
                }
                />

              </div>
            </div>
          </div>
        </div>
      )
}

export default SalesContent