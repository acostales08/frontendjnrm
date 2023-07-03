import React from 'react'
import { TextField, Button } from '@mui/material'
import backgroundImage from '../assets/reservationbg.png'

const ReservationForm = () => {
  return (
    <div className='h-screen flex justify-center items-center w-full bg-cover px-36 py-24' style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="h-[95%] w-[60%] rounded-2xl shadow-2xl bg-white bg-opacity-10 backdrop-blur-md webkit-backdrop-blur-sm">
        <h2 className="text-5xl font-medium text-center text-[#4d494f]  py-10">Make Reservation</h2>
        <div className="w-full px-32 grid grid-cols-2 gap-5">
        <TextField
        variant='outlined'
        label="Full Name"
        fullWidth
        />
        <TextField
        type='email'
        variant='outlined'
        label="Email"
        fullWidth
        />
        <TextField
        type='text'
        variant='outlined'
        label="Phone"
        fullWidth
        />
        <TextField
        type='text'
        variant='outlined'
        label="Address"
        fullWidth
        />
        <TextField
        type='date'
        variant='outlined'
        label=""
        fullWidth
        />
        <TextField
        type='time'
        variant='outlined'
        label=""
        fullWidth
        />
        <TextField
        type='text'
        variant='outlined'
        label="return"
        fullWidth
        />
        <TextField
        type='text'
        variant='outlined'
        label="Service"
        fullWidth
        />

        </div>
        <div className="mx-32 my-10">
        <Button
        variant='contained'
        fullWidth
        style={{
          margin: '15px 0'
        }}
        >Submit</Button>        
        
        <Button
        variant='contained'
        fullWidth
        color='error'
        >Cancel</Button>  
        </div>



      </div>
    </div> 
  )
}

export default ReservationForm