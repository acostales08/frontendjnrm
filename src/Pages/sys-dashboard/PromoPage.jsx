import React from 'react'
import ControlledTextField from '../../Components/TextField/TextField'
import { TextField, Button } from '@mui/material'

const PromoPage = () => {
    return (
        <div className="h-full w-auto p-8 bg-[#F9F5F6]">
          <div className="bg-white h-auto w-auto "style={{boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.4)', borderRadius: '25px'}}>
              <div className=" h-full w-full flex flex-col md:flex-row justify-between items-center">
                <div className="h-full w-full  flex flex-col justify-center items-center">
                    <h3 className=" w-[323px] text-start">Create Promo :</h3>
                  <div className="h-[224px] border border-black w-[323px]  m-4">

                  </div>
                  <button className='border border-black w-[323px]'>Upload Image</button>
                </div>
                <div className="h-full w-full  p-20">
                  <div className=" flex flex-col justify-center items-center gap-4">
                      <TextField
                      variant='filled'
                      label='Promo Name :'
                      type='text'
                      sx={{
                        width: '350px',
                        fontWeight: '400'
                      }}
                    />
                    <TextField
                      variant='filled'
                      label='Promo :'
                      type='text'
                      sx={{
                        width: '350px',
                        fontWeight: '400'
                      }}
                    />
                    <TextField
                      variant='filled'
                      label='Discription :'
                      type='text'
                      sx={{
                        width: '350px',
                        fontWeight: '400'
                      }}
                    />
                    <div className=" w-[323px] flex gap-4 p-4 justify-end  items-end">
                      <button className='border border-black px-4 py-1'>Save</button>
                      <button className='border border-black px-4 py-1'>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )
}

export default PromoPage