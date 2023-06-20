import React from 'react';
import { Link } from 'react-router-dom';
import { Links } from '../../Routes/Sidebar/SideLinks';
import { Drawer, List, ListItem, ListItemText,  } from '@mui/material';

const MockSide = ({ isOpen, onClose }) => {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <div className='w-[260px] h-full bg-[#F2D8D8] flex flex-col justify-between'>
        <div className="flex justify-center items-center my-1">
          <img className='w-[130px]' src="\logo2.png" alt="logo" />
        </div>
        <h3 className="text-center text-3xl py-4 font-semibold text-[#787878]">Administrator</h3>
          <div className="h-full flex flex-col justify-start items-center my-4 px-3 overflow-hidden"> 
          {Links.map(({index, link, path, img}) => (
            <h3 key={index} className="w-full p-2 px-4 text-1xl text-[#787878] cursor-pointer flex gap-2 hover:scale-105 duration-200 hover:bg-[#C88EA7] rounded-xl hover:text-white"> 
            <Link className='flex w-full hover:animate-pulse' to={path}>
              <div className="flex justify-center px-2 items-center h-full w-auto ">
                {img}
              </div>
              {link}</Link></h3>
              ))}
              </div>
        <h3 className='text-[#787878] p-5 text-start'>Powered by: JNRM corp.</h3>
    </div>
    </Drawer>
  );
};

export default MockSide;