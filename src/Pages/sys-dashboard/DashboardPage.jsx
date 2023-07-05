import React from 'react'
import { ControlledContainer, ControlledCard } from '../../Components'



const DashboardContent = () => {
  return (
    <section className="bg-[#F9F5F6] h-[93vh] w-full">
      <div className="h-72 w-full  p-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full w-full">
        <ControlledCard/>
        <ControlledCard/>
        <ControlledCard/>
        <ControlledCard/>
        </div>
      </div>
        <div className="grid h-[60vh] w-full p-4">
        <ControlledCard
        />
        </div>
    </section>

  )
}

export default DashboardContent
