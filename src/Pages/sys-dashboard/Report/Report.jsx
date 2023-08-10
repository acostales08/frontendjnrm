import React, { useState } from 'react'
import { ControlledDataTable } from '../../../Components'

const ReportPage = () => {
  const [data, setData] = useState([])

  
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
      
      <ControlledDataTable title = "Hello" />
      
    </div>
  )
}

export default ReportPage