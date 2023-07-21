import React from 'react'
import { BsEyeFill } from 'react-icons/bs'
import { ControlledButton, ControlledDataTable } from '../../../Components'

const InventoryContent = () => {
    const NumberedCell = ({ rowIndex }) => <div>{rowIndex}</div>;
    const columns = [
        {
          name: 'No.',
          selector: (row, index) => <NumberedCell rowIndex={index + 1} />,
          sortable: true,
        },
        { 
        name: "ProductName", 
        selector: (row) => row.productname, 
        sortable: true 
        },
        { 
        name: "Quantiy", 
        selector: (row) => row.quantity, 
        sortable: true 
        },
        {
        name: "action",
        cell: (row) => (
            <ControlledButton
            icon={<BsEyeFill size={20} className='mx-1'/>}
            text='view'
            variant='contained'
            size='small'
            color='warning'
            />
        ),
        },
    ];

    const data =[
        {
            id: '1',
            productname: 'sample1',
            quantity: '23'
        },
    ];
  return (
    <>
      <div className="p-8">
        <ControlledDataTable columns={columns} data={data} />
      </div>

    </>
  )
}

export default InventoryContent