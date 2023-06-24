import { LuLayoutDashboard, LuUser, LuUsers, LuTicket, LuBox, LuCalendarRange, LuSettings, LuBarChart4 } from 'react-icons/lu'

export const Links = [
    {
      id: '1',
      link: 'Dashboard',
      path: '/',
      img: <LuLayoutDashboard size={20}/>
    },
    {
      id: '2',
        link: 'Sales',
        path: '/sales',
        img: <LuBarChart4 size={20}/>
    },
    {
      id: '3',
      link: 'Client',
      path: '/client',
      img: <LuUser size={20}/>
    },
    {
      id: '4',
      link: 'Member',
      path: '/member',
      img: <LuUsers size={20}/>
    },
    {
      id: '5',
      link: 'Promo',
      path: '/promo',
      img: <LuTicket size={20}/>
    },
    {
      id: '6',
      link: 'Product',
      path: '/product',
      img: <LuBox size={20}/>
    },
    {
      id: '7',
      link: 'Reservations',
      path: '/reservation',
      img: <LuCalendarRange size={20}/>
    },
    {
      id: '8',
      link: 'Setting',
      path: '/',
      img: <LuSettings size={20}/>
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
        link: 'About'
    },
    {
        id: 5,
        path: 'contact',
        link: 'Contact'
    },
]