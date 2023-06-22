import React from 'react';
import NavBar from '../Components/NavBar';
import { HomeFirstlayer, HomeSecondLayer } from '../Components/Content';


const Home = () => {
  return (
    <>
      <div className=" h-screen w-full ">
        {/* <img src="\bg.jpeg" alt="" /> */}
        <NavBar/>
        <HomeFirstlayer/>
        <HomeSecondLayer/>
      </div>
    </>

  );
};

export default Home;