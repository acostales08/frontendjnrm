import React from 'react'
import ServiseCard from '../../Card/ServiseCard'
import ControlledCard from '../../Card/Card'
import { Button } from '@mui/material'
import { LuArrowRight } from 'react-icons/lu'


const HomeServicesContent = () => {


  const cards = [
    {
      img: 'Home.png',
      description: 'Royal Laser Hair Removal with Whitening',
    },
    {
      img: 'bg.jpeg',
      description: 'Royal Miracle White Glutathione',
    },
    {
      img: 'Home.png',
      description: 'Royal Laser Hair Removal with Whitening',
    },
    {
      img: 'Home.png',
      description: 'Royal Laser Hair Removal with Whitening',
    }
  ]

  return (
    <div name="service" className="h-auto w-full bg-gradient-to-t from-[#F9F5F6] to-[hsl(346,37%,78%)] rounded-bl-full p-4 lg:p-16 ease-in-out duration-150 shadow-2xl">
      <div className="h-[100px] w-full flex justify-center items-center my-8">
        <h4 className="text-3xl lg:text-4xl tracking-[.40em] font-bold text-[#c7941e] text-shadow">
        Our Services
        </h4>
      </div>
        <div className="h-[full] w-full grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-5 flex-col lg:flex-row justify-center items-center">
          {cards.map(({img, description}) => (
            <ControlledCard
            style={{
              borderRadius: '25px'
              
            }}
              children = {
                <>
                <div className='h-[280px] lg:h-full w-full overflow-hidden'>
                  <div className="h-[50%] w-full">
                    <img className='h-[15vh] lg:h-[30vh] w-full' src={img} />                          
                  </div>
                  <div className="gap-2 h-[50%] w-full flex flex-col justify-center items-center">
                    <div className=" h-[40px] lg:h-[80px] w-full flex justify-center items-center">
                      <h3 className="text-[16px] lg:text-1xl text-center font-semibold text-shadow">{description}</h3>
                    </div>  
                    <div className=" h-[40px] lg:h-[80px] w-full flex justify-center items-center">
                    <Button
                        style={{
                          backgroundColor: '#C88EA7'
                        }}
                          variant="contained"
                          type="submit"
                        >
                          View
                        </Button>
                    </div>                      
                  </div>
                  </div>
                </>
              }
            />            
          ))}

        </div>  
    </div>
  )
}

export default HomeServicesContent