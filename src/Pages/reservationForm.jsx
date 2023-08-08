import React, { useEffect, useState} from 'react'
import { TextField, Button } from '@mui/material'
import backgroundImage from '../assets/reservationbg.png'
import axios from 'axios'
import { ControlledButton } from '../Components'
import Swal from 'sweetalert2';


const ReservationForm = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    reserve_date: "",
    service: ""
  })

  const submitData = async() => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/reservation', data)
      if(response.status === 200){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title:(response.data.message)
        
        })
        setData({
          name: "",
          email: "",
          phone: "",
          address: "",
          reserve_date: "",
          service: ""
        })
      }
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'error',
        title:'Error to Submit'
      
      })
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
        value={data.name}
        onChange={(e) => setData({...data, name: e.target.value})}
        fullWidth
        />
        <TextField
        type='email'
        variant='outlined'
        label="Email"
        value={data.email}
        onChange={(e) => setData({...data, email: e.target.value})}
        fullWidth
        />
        <TextField
        type='number'
        variant='outlined'
        label="Phone"
        value={data.phone}
        onChange={(e) => setData({...data, phone: e.target.value})}
        fullWidth
        />
        <TextField
        type='text'
        variant='outlined'
        label="Address"
        value={data.address}
        onChange={(e) => setData({...data, address: e.target.value})}
        fullWidth
        />
        <TextField
        type='date'
        variant='outlined'
        label=""
        value={data.reserve_date}
        onChange={(e) => setData({...data, reserve_date: e.target.value})}
        fullWidth
        />
        <TextField
        type='text'
        variant='outlined'
        label="Service"
        value={data.service}
        onChange={(e) => setData({...data, service: e.target.value})}
        fullWidth
        />

        </div>
        <div className="mx-8 pr-4 my-8">
        <ControlledButton
          type="submit"
          color="primary"
          text="Submit"
          variant="contained"
          onClick={submitData}
          fullWidth
        />
        <a href="/">
        <ControlledButton
          type="submit"
          color="error"
          text="Back"
          variant="contained"
          fullWidth
        />          
        </a>

        </div>
      </div>
    </div> 
  )
}

export default ReservationForm