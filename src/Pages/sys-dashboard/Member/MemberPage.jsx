import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {LuSearch} from 'react-icons/lu'
import DataTable from 'react-data-table-component'
import { ControlledContainer, ControlledCard, ControlledTextField } from '../../../Components'
import ReusableModal from '../../../Components/Modal/modal'


const MemberContent = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {

    try {

    const response = await axios.get('http://localhost:8000/api/member');
    setData(response.data.member);
    setLoading(false);

    }catch (error) {

      setError('error message')
      setLoading(false)
    
    }
  }

  if (loading) {
    return(
      <div className='h-screen w-full fles justify-center items-center'>

      </div>
    ) 
  }

  if (error) {
    return <p>{error}</p>;
  }

  const columns = [
    {name: 'id', selector: row => row.id, sortable: true},
    {name: 'fullname', selector: row => row.fullname, sortable: true},
    {name: 'email', selector: row => row.email, sortable: true},
    {name: 'username', selector: row => row.username, sortable: true},
    {name: 'action', cell: row => <div className="flex gap-2"><button onClick={handleModalOpen} className='px-3 py-2 bg-[yellow] rounded-lg font-semibold hover:scale-110 duration-200'>edit</button>
    <button onClick={handleModalOpen} className='px-3 py-2 bg-[red] text-white rounded-md font-semibold hover:scale-110 duration-200'>delete</button>
    </div>}
    
    
  ]
  

  return (
    <main className='h-full px-4 py-40 bg-[#F9F5F6]'>
      <ControlledCard >
          <DataTable
              title="Member's List"
              columns={columns}
              data={data}
              selectableRows
              pagination
              fixedHeader
              >
            </DataTable>
        </ControlledCard>
        <ReusableModal open={modalOpen} onClose={handleModalClose} title="Edit Member">
          <div className="flex py-8 flex-col justify-center items-center">
            <div className="w-full px-6">
              <ControlledTextField 
                  variant="subtitle1"
                  label="Fullname"
                  style={{
                    margin: '5px',
                    width: '100%'
                  }}
                  variantTextfield="standard"
                  isgutterbottom={false}
              />              
            </div>
            <div className="w-full px-6">
              <ControlledTextField 
                  variant="subtitle1"
                  label="Email"
                  style={{
                      marginTop: '10px',
                      marginBottom: '10px',
                      width: '100%'
                  }}
                  variantTextfield="standard"
                  isgutterbottom={false}
              />              
            </div>
            <div className="w-full px-6">
              <ControlledTextField 
                variant="subtitle1"
                label="Username"
                style={{
                    marginTop: '10px',
                    marginBottom: '10px',
                    width: '100%'
                }}
                variantTextfield="standard"
                isgutterbottom={false}
            />
            </div>
          </div>
        </ReusableModal>
    </main>
  )
}

export default MemberContent
