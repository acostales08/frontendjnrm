import React from 'react'
import { ControlledDataTable, ControlledButton } from '../../../Components'

const PromoPage = () => {
  return (
    <>
    <div className="px-6 p-4">
    <ControlledButton 
      variant='contained'
      text='ADD Promo'
      size='small'
      />
    </div>
      <div className='px-8'>
        <ControlledDataTable/>    
      </div>    
    </>


  )
}

export default PromoPage