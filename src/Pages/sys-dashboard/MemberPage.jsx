import axios from 'axios'
import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'


const MemberContent = () => {
  const [member, setMember] = useState([])


  useEffect(()=>{

     axios.get('http://localhost:8000/api/member').then(res=> {
      console.log(res.data)
      setMember(res.data.member)
    })
  }, [])


  useEffect(()=>{
    setMember()
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
        <div className="flex justify-between items-center p-4 pb-0">
          <div className=" ">
            <h3 className="text-center p-2 text-[#787878] text-1xl">Member's table</h3>
          </div>
        <button className="bg-[#C88EA7] text-white p-2 rounded-lg hover:scale-105 duration-75">Add Member</button>
        </div>          
        <div className=" h-auto w-full flex justify-center items-start">
            <div className="w-full m-5 border border-gray rounded-lg mb-8">
              <DataTable
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
