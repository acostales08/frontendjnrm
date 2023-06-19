import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {LuSearch} from 'react-icons/lu'
import DataTable from 'react-data-table-component'


const MemberContent = () => {
  const [member, setMember] = useState([])
  const [records, setRecords] = useState(member)

  const handleFilter = (event) => {
      const newData = member.filter(row => {
        return row.data.includes.toLowerCase().includes(event.target.value.toLowerCase())
      })
      setRecords(newData)
  }


  useEffect(()=>{

     axios.get('http://localhost:8000/api/member').then(res=> {
      console.log(res.data)
      setMember(res.data.member)
    })
  }, [])



  const columns = [
    {name: 'id', selector: row => row.id, sortable: true},
    {name: 'fullname', selector: row => row.fullname, sortable: true},
    {name: 'email', selector: row => row.email, sortable: true},
    {name: 'username', selector: row => row.username, sortable: true},
    {name: 'password', selector: row => row.password, sortable: true},
    
    
  ]

  return (
    <div className="h-full w-auto p-8 flex flex-col justify-center items-center bg-[#F9F5F6]">
      <div className="bg-white h-auto w-full p-4 overflow-hidden "style={{boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.4)', borderRadius: '25px'}}>
        <div className="flex justify-between items-center p-5 pb-0">
          {/* <h3 className="text-center p-2 text-[#787878] text-1xl">Member's table</h3> */}
        {/* <button className="bg-[#C88EA7] text-white p-2 rounded-lg hover:scale-105 duration-75">Add Member</button> */}
        <div className="flex">
          <div className="text-[#787878] p-2 rounded-l-md flex justify-center items-center border border-gray-300">
              <LuSearch className='hover:scale-100 cursor-pointer' />
            </div>
            <input onChange={handleFilter} className='border rounded-r-md border-gray-300 px-4' type="text" placeholder='Search ...' />
          </div>
        </div>          
        <div className=" h-auto w-full flex justify-center items-start">
            <div className="w-full m-5 border border-gray rounded-lg mb-8">
              <DataTable
              title="Member's List"
              columns={columns}
              data={member}
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
