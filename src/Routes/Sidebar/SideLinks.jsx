import { LuLayoutDashboard, LuUsers, LuTicket, LuBox, LuCalendarRange, LuSettings, LuBarChart4 } from 'react-icons/lu'
import { MdOutlineInventory2 } from 'react-icons/md'

export const Links = [
    {
      id: '1',
      link: 'Dashboard',
      path: '/dashboard',
      img: <LuLayoutDashboard size={25} className='m-1'/>
    },
    {
      id: '2',
      link: 'Sales',
      path: '/dashboard/sales',
      img: <LuBarChart4 size={25} className='m-1'/>
    },
    {
      id: '3',
      link: 'Inventory',
      path: '/dashboard/inventory',
      img: <MdOutlineInventory2 size={25} className='m-1' border border-black/>
    },
    {
      id: '4',
      link: 'Member',
      path: '/dashboard/member',
      img: <LuUsers size={25} className='m-1' border border-black/>
    },
    {
      id: '5',
      link: 'Promo',
      path: '/dashboard/promo',
      img: <LuTicket size={25} className='m-1' border border-black />
    },
    {
      id: '6',
      link: 'Product',
      path: '/dashboard/product',
      img: <LuBox size={25} className='m-1' border border-black/>
    },
    {
      id: '7',
      link: 'Reservations',
      path: '/dashboard/reservation',
      img: <LuCalendarRange size={25} className='m-1' border border-black/>
    },
    {
      id: '8',
      link: 'Setting',
      path: '/dashboard/',
      img: <LuSettings size={25} className='m-1' border border-black/>
    }
  ]

  export const navLinks = [
    {
        id:'1',
        path: 'home',
        link: 'Home'
    },
    {
        id: '2',
        path: 'promo',
        link: 'Promo'
    },
    {
        id: '3',

        path: 'service',
        link: 'Service'
    },
    {
        id: '4',
        path: 'about',
        link: 'Product'
    },
    {
        id: '5',
        path: 'contact',
        link: 'Contact Us'
    },
]