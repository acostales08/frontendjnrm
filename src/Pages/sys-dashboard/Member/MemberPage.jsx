import React, {useState, useEffect} from "react"
import { RiEditBoxFill, RiDeleteBin2Fill } from 'react-icons/ri';
import axios from 'axios'
import { IconButton } from '@mui/material';
import {ControlledDataTable, ControlledButton, ControlledModal, ControlledTypography, ControlledTextField} from "../../../Components"


const MemberContent = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] =useState(false);
  const [isEdit, setIsEdit] =useState(false);
  const [newMember, setNewMember] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
  });

  const openAddmodal = () => {
    setIsOpen(true)
  }
  const closeAddModal = () => {
    setIsOpen(false)
  }
  const openEditModal = () => {
    setIsEdit(true)
  }
  const closeEditModal = () => {
    setIsEdit(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/member')
      setData(response.data.member)
    } catch (error) {
      
    }
  };

  const createMember = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/member', newMember)
      fetchData()
      closeAddModal()
    } catch (error) {
      
    }
  }

  const columns = [
    { name: 'id', selector: (row) => row.id, sortable: true },
    { name: 'fullname', selector: (row) => row.fullname, sortable: true },
    { name: 'email', selector: (row) => row.email, sortable: true },
    { name: 'username', selector: (row) => row.username, sortable: true },
    {
      name: 'action',
      cell: (row) => (
        <div className="flex gap-2">
          <IconButton color="success" onClick={openEditModal}>
            <RiEditBoxFill size={25} />
          </IconButton>
          <IconButton color="error">
            <RiDeleteBin2Fill size={25} />
          </IconButton>
        </div>
      ),
    },
  ];

  return(
    <>
      <div className="px-6 py-4">
        <ControlledButton 
          onClick={openAddmodal}
          size='small' 
          color='primary' 
          text='Add Member' 
          variant='contained'
          />      
      </div>
      <div className="px-8">
        <ControlledDataTable
        columns={columns}
        data={data}
        />    
      </div>    


      {/* create member Modal */}
      <ControlledModal open={isOpen} onClose={closeAddModal}>
        <ControlledTypography
        text='Add Member'
        />
        <div className="flex flex-col justify-center p-5">
          <ControlledTextField
            type='text'
            variant='outlined'
            label="Full Name"
            value={newMember.fullname}
            onChange={(e) => setNewMember({...newMember, fullname: e.target.value})}
            style={{
              margin: '5px',
              width: '100%',
            }}
          />  
          <ControlledTextField
            type='email'
            variant='outlined'
            label="Email"
            value={newMember.email}
            onChange={(e) => setNewMember({...newMember, email: e.target.value})}
            style={{
              margin: '5px',
              width: '100%',
            }}
          /> 
          <ControlledTextField
            type='text'
            variant='outlined'
            label="Username"
            value={newMember.username}
            onChange={(e) => setNewMember({...newMember, username: e.target.value})}
            style={{
              margin: '5px',
              width: '100%',
            }}
          /> 
          <ControlledTextField
            type='password'
            variant='outlined'
            label="Password"
            value={newMember.password}
            onChange={(e) => setNewMember({...newMember, password: e.target.value})}
            style={{
              margin: '5px',
              width: '100%',
            }}
          />  
          <div className="flex">
            <ControlledButton color='primary' text='Save' variant='contained' onClick={createMember}/>
            <ControlledButton color='success' text='Cancel' variant='outlined' onClick={closeAddModal}/>             
          </div>
     
        </div>
      </ControlledModal>

      {/* edit member Modal */}
      <ControlledModal open={isEdit} onClose={closeEditModal}>
        <ControlledTypography
        text='Edit Member'
        />
        <div className="flex flex-col justify-center p-5">
          <ControlledTextField
            type='text'
            variant='outlined'
            label="Full Name"
            value={newMember.fullname}
            onChange={(e) => setNewMember({...newMember, fullname: e.target.value})}
            style={{
              margin: '5px',
              width: '100%',
            }}
          />  
          <ControlledTextField
            type='email'
            variant='outlined'
            label="Email"
            value={newMember.email}
            onChange={(e) => setNewMember({...newMember, email: e.target.value})}
            style={{
              margin: '5px',
              width: '100%',
            }}
          /> 
          <ControlledTextField
            type='text'
            variant='outlined'
            label="Username"
            value={newMember.username}
            onChange={(e) => setNewMember({...newMember, username: e.target.value})}
            style={{
              margin: '5px',
              width: '100%',
            }}
          /> 
          <ControlledTextField
            type='password'
            variant='outlined'
            label="Password"
            value={newMember.password}
            onChange={(e) => setNewMember({...newMember, password: e.target.value})}
            style={{
              margin: '5px',
              width: '100%',
            }}
          />  
          <div className="flex">
            <ControlledButton color='primary' text='Update' variant='contained' onClick={createMember}/>
            <ControlledButton color='success' text='Cancel' variant='outlined' onClick={closeAddModal}/>             
          </div>
     
        </div>
      </ControlledModal>
    </>
  )
}

export default MemberContent
