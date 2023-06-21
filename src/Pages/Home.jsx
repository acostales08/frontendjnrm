import React from 'react';
import NavBar from '../Components/NavBar';

const Home = () => {
  return (
      <div className="relative h-screen bg-[#bbb4bf]  w-full">
        <img className='absolute w-full h-screen opacity-50' src="\bg.jpeg" alt="" />
        <NavBar/>
      </div>
  );
};

export default Home;