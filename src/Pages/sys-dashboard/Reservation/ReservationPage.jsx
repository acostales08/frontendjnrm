import React, { useState, useEffect} from 'react'
import { ControlledCard } from '../../../Components'
import DataTable from 'react-data-table-component'
import { IconButton } from '@mui/material'
import { RiEditBoxFill, RiDeleteBin2Fill } from 'react-icons/ri'
import axios from 'axios'


const ReservationPage = () => {

  const [data, setData] = useState([])
  const [modalState, setModalState] = useState({
    AddModal: "false",
    EditModal: "false",
    DeleteModal: "false"
  })

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/reservation");
      setData(response.data.reservations);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const NumberedCell = ({ rowIndex }) => <div>{rowIndex}</div>;

  const columns = [
    {
      name: 'No.',
      selector: (row, index) => <NumberedCell rowIndex={index + 1} />,
      sortable: true,
    },
    { 
      name: "name", 
      selector: (row) => row.name, 
      sortable: true 
    },
    { 
      name: "email", 
      selector: (row) => row.email, 
      sortable: true 
    },
    { 
      name: "phone", 
      selector: (row) => row.phone, 
      sortable: true 
    },
    { 
      name: "address", 
      selector: (row) => row.address, 
      sortable: true 
    },
    { 
      name: "reserve_date", 
      selector: (row) => row.reserve_date, 
      sortable: true 
    },
    { 
      name: "service", 
      selector: (row) => row.service, 
      sortable: true 
    },
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


        <section className="h-[897px] w-auto p-8 bg-[#F9F5F6]">
          <ControlledCard>
            <DataTable
                  title="Reservation's List"
                  columns={columns}
                  data={data}
                  selectableRows
                  pagination
                  fixedHeader
                  >
                </DataTable>
          </ControlledCard>
        </section>
      )
}

export default ReservationPage