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
        path: '/Promos',
        link: 'Promos'
    },
    {
        id: 4,
        path: '/About',
        link: 'About'
    },
    {
        id: 5,
        path: '/Contact',
        link: 'Contact'
    },
]

const NavBar = () => {
    const [nav, setNav] = useState(false)
  return (
    <nav className=" w-full h-auto  font-bold flex justify-between items-center px-10 py-1 text-[18px] text-[#4d494f] fixed">
        <img className='w-[180px]' src="\logo2.png" alt="logo" />
        <ul className="p-2 hidden md:flex gap-4">
            {Links.map(({id, path, link}) => (
                <li key={id} className="  p-2 hover:scale-150 duration-500">
                    <Link to={path}>{link}</Link>
                </li>
            ))}
        </ul>
        <div className=''>
        <Button style={{
        color: '#4d494f',
        fontWeight: '600',
        fontSize: '16px'
        }}>Sign-in</Button>
        <Button style={{
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