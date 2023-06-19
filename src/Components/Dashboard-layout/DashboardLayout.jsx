import React from 'react'
import SideBar from '../SideBar/SideBar'
import ButtonAppBar from '../AppBar/AppBar'
import { Outlet } from 'react-router-dom'


const DasboardLayout = () => {
  return (
    <main className="h-screen w-auto overflow-hidden flex flex-row">
      <div className="h-screen hidden md:flex">
        <SideBar/>
      </div>
        <div className="flex flex-col flex-1">
            <ButtonAppBar/>
              <Outlet/>
        </div>
    </main>
  )
}

export default DasboardLayout