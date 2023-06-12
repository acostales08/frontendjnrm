import React from 'react'
import SideBar from '../SideBar/SideBar'
import ButtonAppBar from '../AppBar/AppBar'

const DasboardLayout = () => {
  return (
    <main className="flex flex-row h-screen w-screen overflow-hidden">
        <SideBar/>
        <div className="w-full">
            <ButtonAppBar/>
        </div>
    </main>
  )
}

export default DasboardLayout