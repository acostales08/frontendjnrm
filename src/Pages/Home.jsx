import React from 'react';
import NavBar from '../Components/NavBar';
import { HomeHero, HomePromoContent, HomeServicesContent, HomeAboutContent, HomeContactContent } from '../Components/Content';



const Home = () => {
  return (
    <>
      <NavBar/>
      <HomeHero/>
      <HomePromoContent/>
      <HomeServicesContent/>
      <HomeAboutContent/>
      <HomeContactContent/>
    </>

  );
};

export default Home;