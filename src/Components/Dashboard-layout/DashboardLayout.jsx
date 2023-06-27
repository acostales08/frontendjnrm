import React, {useState} from 'react'
import SideBar from '../SideBar/SideBar'
import MockSide from '../SideBar/mockbar'
import ButtonAppBar from '../AppBar/AppBar'
import { Outlet } from 'react-router-dom'


const DasboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="flex">
        <div className="hidden lg:flex">
        <SideBar/>
        </div>
        <div className="flex-1">
            <ButtonAppBar/>
              <Outlet/>
        </div>
    </main>
  )
}

export default DasboardLayout