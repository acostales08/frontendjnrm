import React, { useState } from 'react'
import { ControlledDataTable, ControlledModal } from '../../../Components'

const ReportPage = () => {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }
  
  // const columns = [
  //   {
  //     name: 'No.',
  //     selector: (row, index) => <NumberedCell rowIndex={index + 1} />,
  //     sortable: true,
  //   },
  //   { 
  //     name: "name", 
  //     selector: (row) => row.name, 
  //     sortable: true 
  //   },
  //   { 
  //     name: "email", 
  //     selector: (row) => row.email, 
  //     sortable: true 
  //   },
  //   { 
  //     name: "phone", 
  //     selector: (row) => row.phone, 
  //     sortable: true 
  //   },
  //   { 
  //     name: "address", 
  //     selector: (row) => row.address, 
  //     sortable: true 
  //   },
  //   { 
  //     name: "reserve_date", 
  //     selector: (row) => row.reserve_date, 
  //     sortable: true 
  //   },
  //   { 
  //     name: "service", 
  //     selector: (row) => row.service, 
  //     sortable: true 
  //   },
  //   {
  //     name: "action",
  //     cell: (row) => (
  //       <div className="flex gap-2">
  //         <IconButton color="success">
  //           <RiEditBoxFill
  //             size={25}
  //             // onClick={() => openModal("EditModal", row.id)}
  //           />
  //         </IconButton>
  //         <IconButton color="error">
  //           <RiDeleteBin2Fill
  //             size={25}
  //             // onClick={() => openModal("DeleteModal", row.id)}
  //           />
  //         </IconButton>
  //       </div>
  //     ),
  //   },
  // ]
  
  return (
    <div>
      <button onClick={openModal}>open</button>
      
      <ControlledDataTable title = "Hello" />

      <ControlledModal open={open} onClose={closeModal}
      children={
        <>
        <h1>Hello</h1>
        <button onClick={closeModal}>close</button>
        </>
      }
      />
    </div>
  )
}

export default ReportPage