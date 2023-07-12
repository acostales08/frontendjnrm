import React, {useState, useEffect} from "react"
import { RiEditBoxFill, RiDeleteBin2Fill } from 'react-icons/ri';
import axios from 'axios'
import { IconButton } from '@mui/material';
import {ControlledDataTable, ControlledButton, ControlledModal, ControlledTypography, ControlledTextField, ControlledAlert} from "../../../Components"


const MemberContent = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] =useState(false);
  const [isEdit, setIsEdit] =useState(false);
  const [isDelete, setIsDelete] = useState(false)
  const [newMember, setNewMember] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
  });
  const [editedMember, setEditedMember] = useState({
    id: '',
    fullname: '',
    email: '',
    username: '',
    password: '',
  });


  const openAlert = () => {
    setOpen(true)
  }

  const closeAlert = () => {
    setOpen(false)
  }

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
  const openDeletetModal = () => {
    setEditedMember(data.id)
    setIsDelete(true)
  }
  const closeDeleteModal = () => {
    setIsDelete(false)
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
      alert(response.data.message)
      fetchData()
      closeAddModal()
    } catch (error) {
      
    }
  };

  const editMember = async (member) => {
    openEditModal()
    setEditedMember(data);
  };

  const updateMember = async () => {
    openEditModal()
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/member/${editedMember.id}`, editedMember); 
      console.log(response.data);
      fetchData();
      setEditedMember({
        id: '',
        fullname: '',
        email: '',
        username: '',
        password: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteMember = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/member/${id}/delete`);
      console.log(response.data);
      fetchData();
      closeDeleteModal();
    } catch (error) {
      console.error(error);
    }
  };



  const columns = [
    { name: 'id', selector: (row) => row.id, sortable: true },
    { name: 'fullname', selector: (row) => row.fullname, sortable: true },
    { name: 'email', selector: (row) => row.email, sortable: true },
    { name: 'username', selector: (row) => row.username, sortable: true },
    {
      name: 'action',
      cell: (row) => (
        <div className="flex gap-2">
          <IconButton color="success" onClick={() => editMember(data)}>
            <RiEditBoxFill size={25} />
          </IconButton>
          <IconButton color="error" onClick={() => openDeletetModal(row.id)}>
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
         <form action="" onSubmit={createMember}>
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
            <ControlledButton type='button' color='primary' text='Save' variant='contained' onClick={createMember}/>
            <ControlledButton color='info' text='Cancel' variant='outlined' onClick={closeAddModal}/>             
          </div>
          </form>
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
            value={editedMember.fullname}
            onChange={(e) => setEditedMember({...editedMember, fullname: e.target.value})}
            style={{
              margin: '5px',
              width: '100%',
            }}
          />  
          <ControlledTextField
            type='email'
            variant='outlined'
            label="Email"
            value={editedMember.email}
            onChange={(e) => setEditedMember({...editedMember, email: e.target.value})}
            style={{
              margin: '5px',
              width: '100%',
            }}
          /> 
          <ControlledTextField
            type='text'
            variant='outlined'
            label="Username"
            value={editedMember.username}
            onChange={(e) => setEditedMember({...editedMember, username: e.target.value})}
            style={{
              margin: '5px',
              width: '100%',
            }}
          /> 
          <ControlledTextField
            type='password'
            variant='outlined'
            label="Password"
            value={editedMember.password}
            onChange={(e) => setEditedMember({...editedMember, password: e.target.value})}
            style={{
              margin: '5px',
              width: '100%',
            }}
          />  
          <div className="flex">
            <ControlledButton color='primary' text='Update' variant='contained' onClick={createMember}/>
            <ControlledButton color='info' text='Cancel' variant='outlined' onClick={closeEditModal}/>             
          </div>          
        </div>        

      </ControlledModal>

      {/* delete member  */}
      <ControlledModal open={isDelete} onClose={closeDeleteModal}>
        <ControlledTypography
        text='Delete Member'
        />
        <div className=" h-32 flex justify-center items-center">
            <h2 className="text-[20px] text-center">
              Are you sure to delete from the list?
            </h2>
        </div>
        <div className="flex">
          <ControlledButton type='submit' color='error' text='Delete' variant='contained' onClick={() => deleteMember(data.id)}/>
          <ControlledButton color='info' text='Cancel' variant='outlined' onClick={closeDeleteModal}/>          
        </div>
      </ControlledModal>
    </>
  )
}

export default MemberContent
