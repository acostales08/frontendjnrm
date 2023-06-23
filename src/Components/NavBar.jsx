import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navLinks } from '../Routes/Sidebar/SideLinks'
import {Link} from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false)
  return (
    <nav className=" w-full h-auto  font-bold flex justify-between items-center px-5 md:px-20 py-8 text-[18px] text-[#4d494f] fixed">
        <img className='w-[120px] md:w-[180px] ' src="\logo2.png" alt="logo" />
        <ul className="md:flex hidden">
            {navLinks.map(({id, path, link}) => (
                <li key={id} className="p-4 hover:scale-110 duration-500">
                    <Link activeClass="active" to={path} spy={true} smooth={true} offset={50} duration={800} delay={200}>{link}</Link>
                </li>
            ))}
        </ul>
        <div className='hidden md:flex gap-1'>
        <button className='px-2 py-1 rounded-md text-1xl border border-[#d19db3] hover:scale-105 duration-400 drop-shadow-2xl'>
            LOGIN
        </button> 
        <button className='bg-[#C88EA7] text-white px-2 py-1 rounded-md text-1xl hover:bg-[#d19db3] hover:scale-105 duration-400 drop-shadow-2xl'>
            SIGN-IN
        </button> 
        </div>
        <div onClick={() => setNav(!nav)} className="md:hidden p-4">
            {nav? <FaTimes size={30}/> : <FaBars size={30}/> }
        </div>
        <div className={nav ? "md:hidden fixed left-0 top-0 pl-5 pt-8 h-auto w-[60%] rounded-lg border border-gray-300 bg-[#F2D8D8] ease-in-out duration-700" : "fixed left-[-100%]"}>
        <img className='w-[120px]' src="\logo2.png" alt="logo" />
            <ul className="text-left md:hidden md:flex pl-4 gap-4 ">
                {navLinks.map(({id, path, link}) => (
                    <li key={id} className="border-b p-5 hover:scale-110 duration-500">
                        <Link to={path}>{link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar