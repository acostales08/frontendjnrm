import React from 'react'
import { ControlledCard } from '../../Components'



const DashboardContent = () => {
  return (
    <section className=" h-auto w-full">
      <div className=" h-52 w-full p-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full w-full">
        <ControlledCard children ={
          <>
          </>
        }/>
        <ControlledCard children ={
          <>
          </>
        }/>
        <ControlledCard children ={
          <>
          </>
        }/>
        <ControlledCard children ={
          <>
          </>
        }/>
        </div>
      </div>
        <div className="grid h-[55vh] w-full p-4">
        <ControlledCard children ={
          <>
          </>
        }/>
        </div>
    </section>

  )
}

export default DashboardContent
