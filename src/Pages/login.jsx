import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/Homebg.png'
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material'


const Samplelogin = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-[#F9F5F6]'>
        <div className="h-[85%] w-[80%] flex rounded-[25px] overflow-hidden bg-white shadow-2xl">
            <div className="flex justify-center items-center h-full w-[45%] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`}}>
              <img src="\logo2.png" alt="" className='w-[360px]' />
            </div>
            <div className="h-full w-[55%] flex justify-center items-center">
              <div className=" h-[380px] w-96">
                <h2 className=" border-[#C88EA7] text-2xl font-bold px-2 border-l-4">Member <span className="font-normal">Access</span></h2>
                <TextField
                label='Username'
                variant='standard'
                fullWidth
                style={{margin: '15px 0'}}
                />
                <TextField
                type='password'
                label='Password'
                variant='standard'
                fullWidth
                style={{margin: '15px 0'}}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={rememberMe}
                      // onChange={handleCheckboxChange}
                      color="primary"
                    />
                  }
                  label="Remember Me"
                  style={{
                    color: '#4d494f',
                  }}
                />
                <Button
                style={{backgroundColor: '#C88EA7', margin: '15px 0'}}
                variant='contained'
                color='secondary'
                fullWidth
                >
                  Submit
                </Button>
                <div className="text-[#4d494f] flex justify-center items-center flex-col m-4">
                  <p className="">Don't have an account? <a href="" className="text-[#C88EA7]">Register here</a></p>
                  <p className="">OR</p>
                  <p className="">Back to <Link to="/"><span href="" className="text-[#C88EA7]">Homepage</span></Link>  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Samplelogin