import { LuLayoutDashboard, LuUser, LuUsers, LuTicket, LuBox, LuCalendarRange, LuSettings, LuBarChart4 } from 'react-icons/lu'

export const Links = [
    {
      id: '1',
      link: 'Dashboard',
      path: '/admin',
      img: <LuLayoutDashboard size={25} className='m-1'/>
    },
    {
      id: '2',
        link: 'Sales',
        path: '/admin/sales',
        img: <LuBarChart4 size={25} className='m-1'/>
    },
    {
      id: '3',
      link: 'Member',
      path: '/admin/member',
      img: <LuUsers size={25} className='m-1' border border-black/>
    },
    {
      id: '4',
      link: 'Promo',
      path: '/admin/promo',
      img: <LuTicket size={25} className='m-1' border border-black />
    },
    {
      id: '5',
      link: 'Product',
      path: '/admin/product',
      img: <LuBox size={25} className='m-1' border border-black/>
    },
    {
      id: '6',
      link: 'Reservations',
      path: '/admin/reservation',
      img: <LuCalendarRange size={25} className='m-1' border border-black/>
    },
    {
      id: '7',
      link: 'Setting',
      path: '/admin/',
      img: <LuSettings size={25} className='m-1' border border-black/>
    }
  ]

  export const navLinks = [
    {
        id:1,
        path: 'home',
        link: 'Home'
    },
    {
        id: 2,
        path: 'promo',
        link: 'Promo'
    },
    {
        id: 3,

        path: 'service',
        link: 'Service'
    },
    {
        id: 4,
        path: 'about',
        link: 'Product'
    },
    {
        id: 5,
        path: 'contact',
        link: 'Contact Us'
    },
]