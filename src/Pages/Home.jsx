import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
import NavBar from '../Components/NavBar';

// const Links = [
//     {
//         id:1,
//         path: '/',
//         link: 'Home'
//     },
//     {
//         id:1,
//         path: '/Services',
//         link: 'Services'
//     },
//     {
//         id:1,
//         path: '/About',
//         link: 'About'
//     },
//     {
//         id:1,
//         path: '/Contact',
//         link: 'Contact'
//     },
// ]

const Home = () => {
    // const [nav, setNav] = useState(false)
  return (
    <>
    <NavBar/>
    </>
        // <nav className="flex justify-between items-center text-1xl font-semibold bg-gray-800 h-auto w-full text-white px-8 py-4 fixed">
        //      <h3 className="text-2xl">Logo</h3>
        //     <ul className="hidden md:flex gap-6 cursor-pointer">
        //         {Links.map(({link, id, path}) => (
        //            <li key={id} className="hover:scale-150 duration-200">
        //             <Link to={path}>{link}</Link>
        //             </li>
        //         ))}

        //     </ul>
        //     <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer z-10">
        //       {nav? <FaTimes size={30}/> : <FaBars size={30}/> }  
        //     </div>
        //     {nav && (
        //         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-slate-950">
        //             {Links.map(({id, link, path}) => (
        //                 <li key={id} className=''>
        //                     <Link to={path}>{link}</Link>
        //                 </li>
        //             ))}
        //         </ul>
        //     )} 
        // </nav>


  );
};

export default Home;