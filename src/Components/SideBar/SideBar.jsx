import React from 'react'
import { LuLayoutDashboard, LuUser, LuUsers, LuTicket, LuBox, LuCalendarRange, LuSettings } from 'react-icons/lu'

const SideBar = () => {

 const Links = [
    {
      link: 'Dashboard',
      img: <LuLayoutDashboard size={30}/>
    },
    {
      link: 'Client',
      img: <LuUser size={30}/>
    },
    {
      link: 'Member',
      img: <LuUsers size={30}/>
    },
    {
      link: 'Promo',
      img: <LuTicket size={30}/>
    },
    {
      link: 'Product',
      img: <LuBox size={30}/>
    },
    {
      link: 'Reservations',
      img: <LuCalendarRange size={30}/>
    },
    {
      link: 'Setting',
      img: <LuSettings size={30}/>
    }
  ]
    
  return (
    <div className=' w-[260px] bg-[#F2D8D8] flex flex-col justify-between'>
        <div className=" flex justify-center items-center my-1">
          <img className='w-[130px]' src="\logo2.png" alt="logo" />
        </div>
        <h3 className=" text-center text-3xl py-4 font-semibold text-[#787878]">Administrator</h3>
        <div className=" h-full flex flex-col justify-start items-center m-4"> 
        {Links.map(({index, link, img}) => (
          <h3 key={index} className=" w-full my-2 text-2xl flex gap-2 hover:scale-105 duration-300 text-[#787878] cursor-pointer">
            <div className="flex justify-center items-center h-full w-auto ">
              {img}
            </div>
          {link}</h3>
        ))}
        </div>
        <h3 className='text-black   p-5 text-center'>Buttom</h3>
    </div>
  )
}

export default SideBar