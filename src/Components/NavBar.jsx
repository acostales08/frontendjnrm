import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { navLinks } from '../Routes/Sidebar/SideLinks'
import { Button } from '@mui/material'

const NavBar = () => {
    const [nav, setNav] = useState(false)
  return (
    <nav className=" w-full h-auto  font-bold flex justify-between items-center px-5 md:px-20 py-8 text-[18px] text-[#4d494f] fixed">
        <img className='w-[120px] md:w-[180px] ' src="\logo2.png" alt="logo" />
        <ul className="p-2 hidden md:flex gap-4 ">
            {navLinks.map(({id, path, link}) => (
                <li key={id} className="  p-2 hover:scale-110 duration-500">
                    <Link to={path}>{link}</Link>
                </li>
            ))}
        </ul>
        <div className=' gap-2 hidden md:flex'>
        <Button style={{
        border: '',
        color: '#4d494f',
        fontWeight: '600',
        fontSize: '16px'
        }}>Sign-in</Button>
        <Button style={{
            border: '',
            color: '#4d494f',
            fontWeight: '600',
            fontSize: '16px'
        }}><Link to='/login'>Login</Link></Button>    
        </div>
        <div onClick={() => setNav(!nav)} className="md:hidden">
            {nav? <FaTimes size={30}/> : <FaBars size={30}/> }
        </div>  
    </nav>
  )
}

export default NavBar