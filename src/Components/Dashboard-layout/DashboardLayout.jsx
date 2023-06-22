import React, {useState} from 'react'
import SideBar from '../SideBar/SideBar'
import ButtonAppBar from '../AppBar/AppBar'
import { Outlet } from 'react-router-dom'


const DasboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="flex">
      <div className="hidden md:flex">
        <SideBar />
      </div>
        <div className="flex-1">
            <ButtonAppBar onToggle={toggleSidebar}/>
              <Outlet/>
        </div>
    </main>
  )
}

export default DasboardLayout