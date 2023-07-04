import React from 'react'
import { Button } from '@mui/material'
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
            <div className=" h-full w-[60%] flex flex-col p-4">
              <div className="w-full h-[80%] bg-white rounded-lg">
box-1
              </div>
              <div className="w-full h-[20%] flex p-4">
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
            <div className=" h-full w-[40%] p-4">
              <div className="bg-white h-full w-full rounded-lg"></div>
            </div>
          </div>
        </div>
      )
}

export default SalesContent