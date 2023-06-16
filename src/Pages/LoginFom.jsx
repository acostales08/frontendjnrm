import React, { useState } from 'react'
import { TextField, IconButton, InputAdornment } from '@mui/material'
import { FaEye, FaEyeSlash, FaRegUser} from 'react-icons/fa'
import { BiLock, BiMessageRoundedMinus } from 'react-icons/bi'
import BasicButtons from '../Components/Button/Button'
import ControlledTexField from '../Components/TextField/TextField'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const haddleOnChangeToggle = () => {
    setShowPassword(!showPassword)
  }
  return (
      <div className='bg-[#fffff] h-screen w-full flex justify-center items-center'>
        <div className="w-auto h-auto bg-[#F2D8D8] rounded-[100px] px-10 pb-20" style={{boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.4)'}}>
          <div className=" h-60 flex justify-center items-center">
            <img className='w-[250px]' src="\logo2.png" alt="logo" />
          </div>
          <div className="">
            <form action="">
                <div className=" h-16 p-0 flex justify-center items-center gap-4 mx-4 ml-0">
                  <FaRegUser size={25} style={{color: 'rgba(46, 32, 38, .7)'}}/>
                  <div className=' -translate-y-2'>
                  <TextField
                    variant='standard'
                    label='Username'
                    type='text'
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
              <div className=" w-auto flex flex-col gap-4 m-4 pl-3">
                <BasicButtons 
                variant="contained" 
                type="submit" 
                text='login' 
                style={{
                  backgroundColor:'#C88EA7',
                  fontSize: '16px',
                  borderRadius: '50px',
                  boxShadow: '0px 4px 4px #99627A',
                }}
                />
                <BasicButtons variant="contained" type="submit" text='Create Account' style={{
                  backgroundColor: '#C88EA7',
                  fontSize: '16px',
                  borderRadius: '50px',
                  boxShadow: '0px 4px 4px #99627A'
                }}
                  
                />
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login