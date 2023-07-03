import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navLinks } from '../Routes/Sidebar/SideLinks'
import {Link} from 'react-scroll'

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
  //FOR SCROLL HIDE OF NAVBAR
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;
  
        setPrevScrollPos(currentScrollPos);
        setVisible(visible);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);


  return (
    <nav className={` z-30 w-full h-auto font-bold flex justify-between items-center px-5 md:px-20 py-4 text-[18px] fixed  bg-opacity-50 shadow-lg backdrop-blur-5 webkit-backdrop-blur-5 transition-transform duration-300 transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }  bg-white text-[#4d494f] p-4 `}>
        <img className='w-[120px] md:w-[180px] ' src="\logo2.png" alt="logo" />
        <ul className="lg:flex hidden">
            {navLinks.map(({id, path, link}) => (
                <li key={id} className="hover:scale-110 duration-300">
                    <Link activeClass="active" to={path} spy={true} smooth={true} offset={50} duration={800} delay={200} className='px-4 py-2 cursor-pointer'>{link}</Link>
                </li> 
            ))}
        </ul>
        <div className='hidden lg:flex gap-2'>
        <button className='px-2 py-1 rounded-md text-1xl border border-[#d19db3] hover:bg-[#C88EA7] hover:text-white duration-500 shadow-md'>
           <a href="/login">Login</a>
        </button> 
        <button className=' bg-[#C88EA7] text-white px-2 py-1 rounded-md text-1xl hover:bg-[#c9a7b6] duration-500 shadow-md'>
            Sign-Up
        </button> 
        </div>
        <div onClick={handleClick} className="lg:hidden p-4">
            {click? <FaTimes size={30}/> : <FaBars size={30}/> }
        </div>
        <div className={click ? "lg:hidden fixed left-0 top-0 pl-5 pt-8 h-screen w-[70%] rounded-lg border border-gray-300 bg-[#F2D8D8] ease-in-out duration-500" : "hidden"}>
        <img className='w-[120px]' src="\logo2.png" alt="logo" />
            <ul className="text-left lg:hidden flex-col pl-4 gap-4 overflow-hidden">
                {navLinks.map(({id, path, link}) => (
                    <li key={id} className="border-b p-5 hover:scale-110 duration-500 ">
                        <Link onClick={closeMenu} activeClass="active" to={path} spy={true} smooth={true} offset={50} duration={800} delay={200} className='px-4 py-2 cursor-pointer'>{link}</Link>
                    </li>
                ))}
            </ul>
            <div className='hidden lg:flex gap-2'>
                <button className='px-2 py-1 rounded-md text-1xl border border-[#d19db3] hover:bg-[#C88EA7] hover:text-white duration-500 shadow-md'>
                    <Link to='/login'>Login</Link>
                </button> 
                <button className='bg-[#C88EA7] text-white px-2 py-1 rounded-md text-1xl hover:bg-[#c9a7b6] duration-500 shadow-md'>
                    Sign-Up
                </button> 
            </div>
        </div>
    </nav>
  )
}

export default NavBar