import React from 'react'
import { ControlledContainer, ControlledCard } from '../../Components'



const DashboardContent = () => {
  return (
    <div className="bg-[#F9F5F6] h-screen w-full">
      <div className=" h-72 w-full  p-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full w-full">
          <div className=" bg-white h-full w-full rounded-lg shadow-lg"></div>
          <div className=" bg-white h-full w-full rounded-lg shadow-lg"></div>
          <div className=" bg-white h-full w-full rounded-lg shadow-lg"></div>
          <div className=" bg-white h-full w-full rounded-lg shadow-lg"></div>
        </div>
      </div>
    </div>

  )
}

export default DashboardContent
