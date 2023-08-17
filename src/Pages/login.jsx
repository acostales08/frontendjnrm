import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import backgroundImage from '../assets/Homebg.png'
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material'
import axios from 'axios'



const Samplelogin = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8000/api/login', {
          username,
          password
        })
        setRedirect(true);

        navigate('/');
    } catch (error) {
        console.error("Error:", error);
    }
};

if (redirect) {
    // No need for Redirect component, since we're using navigate
    return null;
}

  return (
    <div className='h-screen w-full flex justify-center items-center bg-[#F9F5F6]'>
        <div className=" h-[60%] lg:h-[85%] w-[95%] lg:w-[80%] flex rounded-[25px] overflow-hidden bg-white shadow-2xl">
            <div className="hidden lg:flex justify-center items-center h-full w-[45%] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`}}>
              <img src="\logo2.png" alt="" className='w-[360px]' />
            </div>
            <div className="h-full w-full px-4 lg:w-[55%] flex justify-center items-center">
              <div className=" h-[380px] w-96">
                <h2 className=" border-[#C88EA7] text-2xl font-bold px-2 border-l-4">Member <span className="font-normal">Access</span></h2>
                <form action="" onSubmit={handleSubmit}>
                <TextField
                label='Username'
                variant='standard'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                style={{margin: '15px 0'}}
                />
                <TextField
                type='password'
                label='Password'
                variant='standard'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                style={{margin: '15px 0'}}
                />  
                <Button
                type='submit'
                style={{backgroundColor: '#C88EA7', margin: '15px 0'}}
                variant='contained'
                color='secondary'

                fullWidth
                >
                  Submit
                </Button>                  
                </form>

                <div className="text-[#4d494f] flex justify-center items-center flex-col m-1 lg:m-4">
                  <p className="">Back to <Link to="/"><span href="" className="text-[#C88EA7]">Homepage</span></Link>  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Samplelogin