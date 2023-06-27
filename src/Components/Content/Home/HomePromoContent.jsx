import React, { useState, useEffect, useRef } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const sliders = [
  {
    img: '/mpromo.jpg'
  },
  {
    img: '/mpromo2.jpg'
  },
  {
    img: '/mpromo3.jpg'
  },
  {
    img: '/mpromo4.jpg'
  },
  {
    img: '/mpromo5.jpg'
  },
];

const HomePromoContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div name="promo" className='h-auto w-full bg-gradient-to-b from-[#F9F5F6] to-[hsl(346,37%,78%)] rounded-tr-full p-10 px-5 lg:px-10'>
      <div className="h-[100px] w-full flex justify-center items-center">
        <h4 className="text-2xl lg:text-4xl tracking-[.40em] font-bold text-[#c7941e] text-shadow">
          Our Promos
        </h4>
      </div>
      <div
        className="flex justify-between items-center rounded-xl text-[#4d494f] h-[70vh] lg:h-[100vh] w-full bg-fit bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${sliders[currentIndex].img})` }}
        ref={slideRef}
      >
        <div className="rounded-[50%] m-2 h-14 w-14 flex cursor-pointer justify-center items-center bg-white bg-opacity-40 backdrop-blur-5 webkit-backdrop-blur-5 hover:bg-opacity-60">
          <LuChevronLeft onClick={prevSlide} size={50} />
        </div>
        <div className="rounded-[50%] m-2 h-14 w-14 flex cursor-pointer justify-center items-center bg-white bg-opacity-40 shadow-lg backdrop-blur-5 webkit-backdrop-blur-5 hover:bg-opacity-60">
          <LuChevronRight onClick={nextSlide} size={50} />
        </div>
      </div>
    </div>
  );
};

export default HomePromoContent;