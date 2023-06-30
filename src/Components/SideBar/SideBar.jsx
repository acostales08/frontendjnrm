import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Links } from '../../Routes/Sidebar/SideLinks'
import { dashboardContext } from '../Dashboard-layout/DashboardLayout'

const SideBar = () => {

  const {open, setOpen} = useContext(dashboardContext)
    
  return (
    <div className={`${open ? 'w-16' : 'w-64'} h-screen bg-[#F2D8D8] text-[#787878] flex flex-col justify-between duration-700 overflow-hidden px-2 `}>
        <div>
          <div className="h-[68px]  flex justify-center items-center">
          <img className={`${open ? 'w-[80px] h-[55px] py-2' : 'w-[112px]'}`} src="\logo2.png" alt="logo" />
          </div>
      <h3 className="text-center my-1 font-serif font-semibold">Admin<span className={`${open ? 'hidden' : ''}`}>istrator</span></h3>
      <lu className="px-2">
      {Links.map(({id, link, path, img}) => (
        <Link to={path}>
          <li key={id} className='flex items-center gap-x-2 cursor-pointer p-1 hover:bg-[#C88EA7] hover:text-white rounded-sm'>
            {img}
            <span
              className={`${open ? 'hidden' : 'origin-left duration-200'}`}
            >
              {link}
            </span>
          </li>
        </Link>
      ))}
      </lu>  
      </div> 
      <div className=' my-4 w-full text-center '>
        <span className={`${open && 'hidden'}`}>
        Powered by: JNRM corp.
        </span>
        </div>
    </div>
  )
}

export default SideBar

