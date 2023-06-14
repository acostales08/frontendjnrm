import React from 'react'
import { FaBars, FaUserCircle} from 'react-icons/fa'

const AdminNavBar = () => {
  return (
    <div className='bg-[#F8E8EE] w-full h-20 flex justify-between items-center'>
        <div className=" m-2 text-[#787878] p-2">
          <FaBars size={30}/>
        </div>
        <div className="m-2 text-[#787878] ">
          <FaUserCircle size={40}/>
        </div>
    </div>
  )
}

export default AdminNavBar