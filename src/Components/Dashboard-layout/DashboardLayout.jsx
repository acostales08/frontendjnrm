import React, {useState, createContext} from 'react'
import SideBar from '../SideBar/SideBar'
import ButtonAppBar from '../AppBar/AppBar'
import { Outlet } from 'react-router-dom'

export const dashboardContext = createContext({})

const DasboardLayout = () => {
  const [open, setOpen] = useState(false)

  return (
    <dashboardContext.Provider value={{open, setOpen}}>
      <main className="flex">
          <div className="hidden lg:flex">
          <SideBar/>
          </div>
          <div className="flex-1">
              <ButtonAppBar />            

                <Outlet/>
          </div>
      </main>
    </dashboardContext.Provider>
  )
}

export default DasboardLayout