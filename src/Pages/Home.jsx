import React from 'react';
import NavBar from '../Components/NavBar';
import { HomeHero, HomePromoContent, HomeServicesContent, HomeAboutContent, HomeContactContent } from '../Components/Content';



const Home = () => {
  return (
    <>
      <div className=" h-screen w-full relative">
        {/* <img src="\bg.jpeg" alt="" /> */}
        <NavBar/>
        <HomeHero/>
        <HomePromoContent/>
        <HomeServicesContent/>
        <HomeAboutContent/>
        <HomeContactContent/>
      </div>
    </>

  );
};

export default Home;