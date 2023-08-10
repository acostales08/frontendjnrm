import React from 'react'
import { ControlledDataTable } from '../../../Components'
import { IconButton } from '@mui/material';
import { RiEditBoxFill, RiDeleteBin2Fill } from 'react-icons/ri';

const ServicePage = () => {

    const NumberedCell = ({ rowIndex }) => <div>{rowIndex}</div>;

    const columns = [
      {
        name: 'No.',
        selector: (row, index) => <NumberedCell rowIndex={index + 1} />,
        sortable: true,
      },
      { 
        name: "fullname", 
        selector: (row) => row.fullname, 
        sortable: true 
      },
      { 
        name: "email", 
        selector: (row) => row.email, 
        sortable: true 
      },
      { 
        name: "username", 
        selector: (row) => row.username, 
        sortable: true },
      {
        name: "action",
        cell: (row) => (
          <div className="flex gap-2">
            <IconButton color="success">
              <RiEditBoxFill
                size={25}
                // onClick={() => openModal("EditModal", row.id)}
              />
            </IconButton>
            <IconButton color="error">
              <RiDeleteBin2Fill
                size={25}
                // onClick={() => openModal("DeleteModal", row.id)}
              />
            </IconButton>
          </div>
        ),
      },
  ];

  return (
    <div className='p-10'>
    <ControlledDataTable columns={columns}/>
    </div>
  )
}

export default ServicePage