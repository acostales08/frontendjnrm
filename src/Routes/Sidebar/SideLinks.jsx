import { LuLayoutDashboard, LuUser, LuUsers, LuTicket, LuBox, LuCalendarRange, LuSettings, LuBarChart4 } from 'react-icons/lu'

export const Links = [
    {
      link: 'Dashboard',
      path: '/',
      img: <LuLayoutDashboard size={30}/>
    },
    {
        link: 'Sales',
        path: '/sales',
        img: <LuBarChart4 size={30}/>
    },
    {
      link: 'Client',
      path: '/client',
      img: <LuUser size={30}/>
    },
    {
      link: 'Member',
      path: '/member',
      img: <LuUsers size={30}/>
    },
    {
      link: 'Promo',
      path: '/promo',
      img: <LuTicket size={30}/>
    },
    {
      link: 'Product',
      path: '/product',
      img: <LuBox size={30}/>
    },
    {
      link: 'Reservations',
      path: '/reservation',
      img: <LuCalendarRange size={30}/>
    },
    {
      link: 'Setting',
      path: '/',
      img: <LuSettings size={30}/>
    }
  ]