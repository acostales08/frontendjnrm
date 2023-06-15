import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Links = [
    {
        id:1,
        path: '/',
        link: 'Home'
    },
    {
        id: 2,
        path: '/Services',
        link: 'Services'
    },
    {
        id: 3,
        path: '/About',
        link: 'About'
    },
    {
        id: 4,
        path: '/Contact',
        link: 'Contact'
    },
]

const NavBar = () => {
    const [nav, setNav] = useState(false)
  return (
    <nav className="border-2 w-full h-auto bg-[#F2D8D8] font-bold flex justify-between items-center px-10 py-1 text-[18px] text-[#C88EA7] ">
        <img className='w-[180px]' src="\logo2.png" alt="logo" />
        <ul className="border-2 p-2 hidden md:flex gap-4">
            {Links.map(({id, path, link}) => (
                <li key={id} className="border-2 p-2 hover:scale-150 duration-500">
                    <Link to={path}>{link}</Link>
                </li>
            ))}
        </ul>
        <div className="">
            <Button style={{
                color: '#C88EA7',
                fontWeight: '600',
                fontSize: '16px'
            }}>Sign-in</Button>
            <Button style={{
                color: '#C88EA7',
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