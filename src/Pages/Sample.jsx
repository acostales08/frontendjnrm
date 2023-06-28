import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Links } from '../Routes/Sidebar/SideLinks'
import {LuLayoutDashboard} from 'react-icons/lu'

const Sample = () => {
    const [open, setOpen] = useState(false)
    
  return (
            <>
          <div className={`${open ? 'w-16' : 'w-64'} h-screen bg-[#F2D8D8] text-[#787878] flex flex-col justify-between duration-500 overflow-hidden`}>
            <div className="">
                <div className=" h-[68px]  flex justify-start items-center w-full my-1">
                <img className=' w-14' src="\logo2.png" alt="logo" />
                <h3 className={`${open ? 'hidden' : 'text-2xl font-semibold px-2'}`}>Royal Charm</h3>
                </div>
            </div>
            <div className=" h-full w-full my-4 px-2">
                {Links.map(({id, link, path, img}) => (
            <Link to={path}>
                <div key={id} className=" h-11 w-full flex rounded-lg text-xl hover:scale-105 duration-200 hover:bg-[#C88EA7]  hover:text-white">
                    {img}
                    <h3 className={`${open ? 'hidden' : 'flex'} px-2  w-full justify-start items-center`}>
                        {link}
                    </h3>
                </div>         
                </Link>       
                ))}

            </div>   
            <div className={`${open ? 'hidden' : 'h-[108px] w-full flex justify-center items-center text-[15px]'} `}>Powered by: JNRM corp.</div>
          </div>
            <button onClick={() => setOpen(!open)} className='m-2 h-8 '>click</button>
        </>
  )
}

export default Sample