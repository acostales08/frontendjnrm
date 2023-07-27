import React, { useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { FaMinusCircle } from 'react-icons/fa'
import { ControlledButton, ControlledDataTable, ControlledModal, ControlledTypography, ControlledTextField } from '../../../Components'

const InventoryContent = () => {

    const [modal, setModal] = useState({
      AddModal: false,
      MinusModal: false
    })

    const openModal = (modalType) => {
      setModal({...modal, [modalType]: true})
    }

    const closeModal = (modalType) => {
      setModal({...modal, [modalType]: false})
    }

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
        name: "Stock action",
        cell: (row) => (
          <>
            <ControlledButton
            icon={<BsPlusCircleFill size={20} className='mx-1'/>}
            text='add'
            variant='contained'
            size='small'
            color='primary'
            onClick={() => openModal('AddModal', row.id)}
            />
            <ControlledButton
            icon={<FaMinusCircle size={20} className='mx-1'/>}
            text='minus'
            variant='contained'
            size='small'
            color='warning'
            onClick={() => openModal('MinusModal', row.id)}
            />          
          </>

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

    {/* increase product quantity */}
    <ControlledModal open={modal.AddModal}  onClose={() => closeModal('AddModal')}>
      <ControlledTypography text='Add Product Quantity' />
      <div className="flex flex-col justify-center p-5">
      <ControlledTextField
      type = 'number'
      variant = 'outlined'
      label = 'Enter Product Quantity'
      style={{ margin: "5px", width: "100%" }}
      />

      <div className="flex justify-center mt-5">
        <ControlledButton
          type="button"
          color="primary"
          text="Save"
          variant="contained"
        />
        <ControlledButton
          color="info"
          text="Cancel"
          variant="outlined"
          onClick={() => closeModal("AddModal")}
        />
      </div>
      </div>
    </ControlledModal>

      {/* decreasing product quantity */}
      <ControlledModal open={modal.MinusModal}  onClose={() => closeModal('MinusModal')}>
      <ControlledTypography text='Minus Product Quantity' />
      <div className="flex flex-col justify-center p-5">
      <ControlledTextField
      type = 'number'
      variant = 'outlined'
      label = 'Enter Product Quantity'
      style={{ margin: "5px", width: "100%" }}
      />

      <div className="flex justify-center mt-5">
        <ControlledButton
          type="button"
          color="primary"
          text="Save"
          variant="contained"
        />
        <ControlledButton
          color="info"
          text="Cancel"
          variant="outlined"
          onClick={() => closeModal("AddModal")}
        />
      </div>
      </div>
    </ControlledModal>

    </>
  )
}

export default InventoryContent