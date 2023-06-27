import React, {  useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { FaEye, FaEyeSlash, FaRegUser} from 'react-icons/fa'
import { TextField, IconButton, InputAdornment } from '@mui/material'
import { BiLock } from 'react-icons/bi'
import BasicButtons from '../Components/Button/Button'

import axios from 'axios'

const LoginFom = () => {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null)

  const haddleOnChangeToggle = () => {
        setShowPassword(!showPassword)
      }
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        username,
        password
      })

  
      
      if (response.data.status === 200) {
        // Login successful
        // Store the token or handle the response accordingly
;
        // Navigate to the home screen or any other screen upon successful login
        navigate('/');
      } else {
        // Login failed
        alert('Error',  'Incorrect Username or Password!');
      }
    } catch (error) {
      setError(error)
    }
  }

  return (
      <div className='bg-[#fffff] h-screen w-full flex justify-center items-center'>
        <div className="w-auto h-auto bg-[#F2D8D8] rounded-[80px] px-5 pb-20" style={{boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.4)'}}>
          <div className="h-60 flex justify-center items-center">
            <img className='w-[250px]' src="\logo2.png" alt="logo" />
          </div>
          <div className="">
            <form onSubmit={handleSubmit}>
                <div className=" h-16 p-0 flex justify-center items-center gap-4 mx-4 ml-0">
                  <FaRegUser size={25} style={{color: 'rgba(46, 32, 38, .7)'}}/>
                  <div className=' -translate-y-2'>
                  <TextField
                    variant='standard'
                    label='Username'
                    type='text'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    sx={{
                      width: '350px',
                      fontWeight: '400'
                    }}
                  />
                  </div>

                </div>
                <div className=" h-16 p-0 flex flex-row justify-center items-center gap-4 m-4 ml-0">
                  <BiLock size={25} style={{color: 'rgba(46, 32, 38, .7)'}}/>
                  <div className=' -translate-y-2 text-2xl'>
                  <TextField
                    variant='standard'
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="standard-basic"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    sx={{
                      width: '350px',
                      fontWeight: '400'
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={haddleOnChangeToggle} edge="end">
                            {showPassword ? <FaEye size={25}/> : <FaEyeSlash size={25}/>}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  </div>
                </div>
                <button className=' mx-2 w-full text-[20px] text-white bg-[#C88EA7] py-2 rounded-[25px] hover:bg-[#c9a7b6]' style={{boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.2)'}}>Login</button>

            </form>
          </div>
        </div>
      </div>
        )
  }

export default LoginFom
