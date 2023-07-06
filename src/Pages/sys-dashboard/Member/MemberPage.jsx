import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {LuSearch} from 'react-icons/lu'
import DataTable from 'react-data-table-component'
import { FiEdit } from 'react-icons/fi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import IconButton from '@mui/material/IconButton'
import { ControlledCard, ControlledTextField } from '../../../Components'
import ReusableModal from '../../../Components/Modal/modal'
import { Button } from '@mui/material'


const MemberContent = () => {

  const [search, setSearch] = useState("")
  const [fillteredMember, setFillteredMember] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [member, setMember] = useState({
    fullname: "",
    email:"",
    username: "",
    password: ""
  })
  const [data, setData] = useState([]);

  const openAddModal = () => {
    setIsOpenAdd(true);
  };

  const openEditModal = () => {
    setIsOpenEdit(true);
  };

  const openDeleteModal = () => {
    setIsOpenDelete(true);
  };

  const closeAddModal = () => {
    setIsOpenAdd(false);
  };

  const closeEditModal = () => {
    setIsOpenEdit(false);
  };

  const closeDeleteModal = () => {
    setIsOpenDelete(false);
  };


  useEffect(() => {
    fetchData()
  }, []);


  const fetchData = async () => {

    try {

    const response = await axios.get('http://localhost:8000/api/member');
    setData(response.data.member);
    setFillteredMember(response.data.member)
    setLoading(false);

    }catch (error) {
      setLoading(false)
    
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullname: member.fullname,
      email: member.email,
      username: member.email,
      password: member.password
    }

    axios.post('http://localhost:8000/api/member', data).then(res => {
      alert(res.data.message);
    });
    closeAddModal()
  };

  const handleChange = (e) => {
    e.persist();
    setMember({...member, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    const result = data.filter((member) => {
      return member.fullname.toLowerCase().match(search.toLowerCase());
    })
    setFillteredMember(result)
  }, [search]);

  const rowDisable =(row) => {
    if (row.status === 'active') {
    return false;
  }else{
    return true;
  }
  };



  if (error) {
    return <p>{error}</p>;
  }



  const columns = [
    {name: 'id', selector: row => row.id, sortable: true},
    {name: 'fullname', selector: row => row.fullname, sortable: true},
    {name: 'email', selector: row => row.email, sortable: true},
    {name: 'username', selector: row => row.username, sortable: true},
    {name: 'action', cell: row => <div className="flex gap-2"><IconButton onClick={openEditModal}><FiEdit size={20} className='text-[#3c5dc9]'/></IconButton>
   <IconButton onClick={openDeleteModal}><RiDeleteBin6Line size={20} className='text-[#971212]'/></IconButton>
    </div>}
    
    
  ]
  

  return (
    <section name="member" className='h-[897px] p-8 bg-[#F9F5F6] overflow-scroll'>

      <ControlledCard>
          <DataTable
              title="Member's List"
              columns={columns}
              data={fillteredMember}
              selectableRows
              pagination
              fixedHeader
              progressPending={loading}
              progressComponent={<h2 className='text-gray-900'>loading please wait ...</h2>}
              expandableRowDisabled={rowDisable}
              actions={
                <div className="m-10">
                  <Button onClick={openAddModal} variant='contained'>Add</Button>
                </div>
              }
              subHeader
              subHeaderComponent={
                <div className="border rounded-lg flex justify-center items-center h-full text-gray-900">
                  <div className="border-r">
                  <LuSearch size={20} className='m-2 cursor-pointer'/>
                  </div>
                  <input
                   type="text" 
                   placeholder='Search' 
                   className=' p-1'
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

              }
              subHeaderAlign='left'
              >
            </DataTable>
        </ControlledCard>

    {/* add modal */}
        <ReusableModal open={isOpenAdd} onClose={closeAddModal} title="Add Modal">
        <div className="flex py-8 flex-col justify-center items-center">
          <div className="w-full px-5">
            <div className="py-8">
              <form action="" onSubmit={handleSubmit}>
              <ControlledTextField 
                    variant="subtitle1"
                    label="Fullname"
                    value={member.fullname}
                    onChange={handleChange}
                    style={{
                      margin: '5px',
                      width: '100%'
                    }}
                    variantTextfield="standard"
                    isgutterbottom={false}
                />              

                <ControlledTextField 
                    variant="subtitle1"
                    label="Email"
                    value={member.email}
                    onChange={handleChange}
                    style={{
                        marginTop: '10px',
                        marginBottom: '10px',
                        width: '100%'
                    }}
                    variantTextfield="standard"
                    isgutterbottom={false}
                />              
                <ControlledTextField 
                  variant="subtitle1"
                  label="Username"
                  value={member.username}
                  onChange={handleChange}
                  style={{
                      marginTop: '10px',
                      marginBottom: '10px',
                      width: '100%'
                  }}
                  variantTextfield="standard"
                  isgutterbottom={false}
                />
                <ControlledTextField 
                  variant="subtitle1"
                  label="Password"
                  value={member.password}
                  onChange={handleChange}
                  style={{
                      marginTop: '10px',
                      marginBottom: '10px',
                      width: '100%'
                  }}
                  variantTextfield="standard"
                  isgutterbottom={false}
                  
                />   
              </form>   
            </div>
          </div>
            <div className='flex justify-end w-full px-2  border-t-2'>
              <div className="flex gap-3 my-4">
                <Button type='submit' variant="contained" color="primary">
                  Save
                </Button>
                <Button variant="text" color="info" onClick={closeAddModal}>
                  Close
                </Button>
              </div>
            </div>
          </div>
          
        </ReusableModal>

    {/* edit modal */}
        <ReusableModal open={isOpenEdit} onClose={closeEditModal} title="Edit Member">
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
          <div className='flex justify-end w-full px-2'>
              <div className="flex gap-3 my-4">
                <Button variant="contained" color="primary" onClick={closeAddModal}>
                  Save
                </Button>
                <Button variant="text" color="info" onClick={closeEditModal}>
                  Close
                </Button>
              </div>
            </div>
        </ReusableModal>

    {/* delete modal */}
        <ReusableModal open={isOpenDelete} onClose={closeDeleteModal} title="Delete Modal">
        <h1 className='text-2xl text-center py-4 border-y-[1px]'>Are you sure?? you whant to Delete</h1>
        <div className='flex justify-end w-full px-2'>
              <div className="flex gap-3 my-4">
                <Button variant="contained" color="error" onClick={closeAddModal}>
                  Delete
                </Button>
                <Button variant="text" color="info" onClick={closeDeleteModal}>
                  Close
                </Button>
              </div>
            </div>
        </ReusableModal>
        
    </section>
  )
}

export default MemberContent
