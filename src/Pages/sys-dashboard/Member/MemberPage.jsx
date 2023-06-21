import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {LuSearch} from 'react-icons/lu'
import DataTable from 'react-data-table-component'


const MemberContent = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
      <div className="bg-[gray] flex justify-center items-center h-full w-full">
        <p>Loading...</p>
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
    {name: 'action', cell: row => <div className="flex gap-2"><button className='px-3 py-2 bg-[yellow] rounded-lg font-semibold hover:scale-110 duration-200'>edit</button>
    <button className='px-3 py-2 bg-[red] text-white rounded-md font-semibold hover:scale-110 duration-200'>delete</button>
    </div>}
    
    
  ]
  

  return (
    <div className="h-full w-auto p-8 flex flex-col justify-center items-center bg-[#F9F5F6]">
      <div className="bg-white h-auto w-full p-4 overflow-hidden "style={{boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.4)', borderRadius: '10px'}}>
        <div className="flex justify-between items-center p-5 pb-0">
        <button className="bg-[#C88EA7] text-white p-2 rounded-md hover:scale-105 duration-75 hover:animate-pulse ">Add Member</button>
        <div className="flex">
          <div className="text-[#787878] p-2 rounded-l-md flex justify-center items-center border border-gray-300">
              <LuSearch className='hover:scale-100 cursor-pointer' />
            </div>
            <input className='border rounded-r-md border-gray-300 px-4' type="text" placeholder='Search ...' />
          </div>
        </div>          
        <div className=" h-auto w-full flex justify-center items-start">
            <div className="w-full m-5 border border-gray rounded-lg mb-8">
              <DataTable
              title="Member's List"
              columns={columns}
              data={data}
              selectableRows
              pagination
              fixedHeader
              >
              </DataTable>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MemberContent
