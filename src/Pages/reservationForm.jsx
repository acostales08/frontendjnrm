import React, { useState} from 'react'
import { TextField, Button } from '@mui/material'
import backgroundImage from '../assets/reservationbg.png'
import axios from 'axios'
import { ControlledButton } from '../Components'


const ReservationForm = () => {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    fullname: '',
  })


  const submitData = async() => {
    try {
      const response = await axios.post('', data)
    } catch (error) {
      
    }
  }
  return (
    <div className='h-screen flex justify-center items-center w-full bg-cover px-36 py-24' style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="h-auto w-[60%] rounded-2xl shadow-2xl bg-white bg-opacity-10 backdrop-blur-md webkit-backdrop-blur-sm ">
        <h2 className="text-5xl font-medium text-center m-10 text-[#4d494f]  py-15">Make Reservation</h2>
        <div className="w-full px-10 grid grid-cols-2 gap-5">
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
        type='text'
        variant='outlined'
        label="Service"
        fullWidth
        />

        </div>
        <div className="mx-8 pr-4 my-8">
        <ControlledButton
          type="submit"
          color="primary"
          text="Submit"
          variant="contained"
          fullWidth
        />
        <ControlledButton
          type="submit"
          color="error"
          text="Delete"
          variant="contained"
          fullWidth
        />
        </div>
      </div>
    </div> 
  )
}

export default ReservationForm