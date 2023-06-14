import React from 'react'
import SideBar from '../SideBar/SideBar'
import AdminNavBar from '../AppBar/navBar'

const DasboardLayout = () => {
  return (
    <main className="flex flex-row h-screen w-screen overflow-hidden">
        <SideBar/>
        <div className="w-full">
            <AdminNavBar/>
        </div>
    </main>
  )
}

export default DasboardLayout