import React from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const sliders = [
  {
    label: 'promo1',
    img: '/mpromo.jpg'
  },
  {
    label: 'promo2',
    img: '/mpromo2.jpg'
  },
  {
    label: 'promo3',
    img: '/mpromo3.jpg'
  },
  {
    label: 'promo4',
    img: '/mpromo4.jpg'
  },
  {
    label: 'promo5',
    img: '/mpromo5.jpg'
  },
];

const HomePromoContent = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = sliders.length;
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div name="promo" className="h-auto w-full bg-gradient-to-b from-[#F9F5F6] to-[hsl(346,37%,78%)] flex flex-col justify-center items-center rounded-tr-full p-1 px-1 lg:px-10">
      <div className="h-[100px] w-full flex justify-center items-center">
        <h4 className="text-2xl lg:text-4xl tracking-[.40em] font-bold text-[#c7941e] text-shadow">
          Our Promos
        </h4>
      </div>
      <div className=" h-[45vh] lg:h-[80vh] w-full lg:w-[80%]  flex justify-between items-center overflow-hidden">
        <div className=" h-full flex justify-center items-center z-30">
        <button
          onClick={handleBack}
          className="static rounded-[50%] m-0 lg:m-2 h-14 w-14 cursor-pointer bg-white bg-opacity-40 backdrop-blur-5 webkit-backdrop-blur-5 hover:bg-opacity-60"
        >
          <LuChevronLeft size={50} />
        </button>
        </div>
        <div className=" h-full w-full flex flex-col items-center">
        <div className="  h-[98%] w-full">
          <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {sliders.map(({ img, label }, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <div className=' flex justify-center items-center w-full  '>
                      <img className="h-[42vh]  lg:h-[77vh] w-full lg:w-full z-10" src={img} alt={label} />
                    </div>
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
        </div>
        <div className=" text-center z-30">
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            style={{
              background: 'transparent',
              display: 'absolute'
            }}
            />
        </div>
        </div>
            {/*  */}

          
          {/*  */}


        <div className="h-full flex justify-center items-center z-30">
          <button
            onClick={handleNext}
            className="static rounded-[50%] m-0 lg:m-2 h-14 w-14  cursor-pointer bg-white bg-opacity-40 shadow-lg backdrop-blur-5 webkit-backdrop-blur-5 hover:bg-opacity-60"
          >
            <LuChevronRight size={50} />
          </button>          
        </div>

      </div>
    </div>

  );
}

export default HomePromoContent;


{/* import React, { useState, useEffect, useRef } from 'react';
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

export default HomePromoContent; */}