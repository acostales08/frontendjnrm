import { LuLayoutDashboard, LuUser, LuUsers, LuTicket, LuBox, LuCalendarRange, LuSettings, LuBarChart4 } from 'react-icons/lu'

export const Links = [
    {
      link: 'Dashboard',
      path: '/',
      img: <LuLayoutDashboard size={20}/>
    },
    {
        link: 'Sales',
        path: '/sales',
        img: <LuBarChart4 size={20}/>
    },
    {
      link: 'Client',
      path: '/client',
      img: <LuUser size={20}/>
    },
    {
      link: 'Member',
      path: '/member',
      img: <LuUsers size={20}/>
    },
    {
      link: 'Promo',
      path: '/promo',
      img: <LuTicket size={20}/>
    },
    {
      link: 'Product',
      path: '/product',
      img: <LuBox size={20}/>
    },
    {
      link: 'Reservations',
      path: '/reservation',
      img: <LuCalendarRange size={20}/>
    },
    {
      link: 'Setting',
      path: '/',
      img: <LuSettings size={20}/>
    }
  ]

  export const navLinks = [
    {
        id:1,
        path: '/',
        link: 'Home'
    },
    {
        id: 2,
        path: '/Services',
        link: 'Services'
    },
    {
        id: 3,
        path: '/Promos',
        link: 'Promos'
    },
    {
        id: 4,
        path: '/About',
        link: 'About'
    },
    {
        id: 5,
        path: '/Contact',
        link: 'Contact'
    },
]