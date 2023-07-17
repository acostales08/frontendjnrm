import React, { useState, useEffect } from "react";
import { RiEditBoxFill, RiDeleteBin2Fill } from "react-icons/ri";
import axios from "axios";
import { IconButton } from "@mui/material";
import {
  ControlledDataTable,
  ControlledButton,
  ControlledModal,
  ControlledTypography,
  ControlledTextField,
} from "../../../Components";

const MemberContent = () => {

  const [members, setMembers] = useState([])
  const [selectedMem, setSelectedMem] = useState(null)
  const [modalState, setModalState] = useState({
    AddModal: false,
    EditModal: false,
    Delete: false
  });

  const [newMember, setNewMember] = useState({
    fullname: '',
    email: '',
    username: '',
    password: ''
  })


  const openModal = (modalType, memberId = null) => {
    setModalState({ ...modalState, [modalType]: true });
    if (memberId) {
      const member = members.find((m) => m.id === memberId);
      setSelectedMem(member);
    } else {
      setSelectedMem(null);
    }
  };


  const closeModal = (modalType) => {
    setModalState({...modalState, [modalType]: false});
  }

  useEffect(()=>{
    fetchdata()
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/member')
      setMembers(response.data.member)
    } catch (error) {
      
    }
  }

  const createMember = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/member', newMember)
      alert(response.data.message)
      fetchdata();
      closeModal('AddModal')
    } catch (error) {
      
    }
  }

  const deleteMember = (memberId) => {
    axios
      .delete(`http://localhost:8000/api/member/${memberId}/delete`)
      .then((response) => {
        console.log("Member deleted successfully:", response.data);
        closeModal("DeleteModal");
        fetchdata();
      })
      .catch((error) => {
        console.error("Error deleting member:", error);
      });
  };


  const columns = [
    { name: "id", selector: (row) => row.id, sortable: true },
    { name: "fullname", selector: (row) => row.fullname, sortable: true },
    { name: "email", selector: (row) => row.email, sortable: true },
    { name: "username", selector: (row) => row.username, sortable: true },
    {
      name: "action",
      cell: (row) => (
        <div className="flex gap-2">
          <IconButton color="success">
            <RiEditBoxFill
              size={25}
             onClick={()=> openModal('EditModal', row.id)}
            />
          </IconButton>
          <IconButton color="error">
            <RiDeleteBin2Fill
              size={25}
              onClick={()=> openModal('DeleteModal', row.id)}
            />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="px-6 py-4">
        <ControlledButton
          size="small"
          color="primary"
          text="Add Member"
          variant="contained"
          onClick={() => openModal('AddModal')}
        />
      </div>
      <div className="px-8">
        <ControlledDataTable columns={columns} data={members}/>
      </div>

      {/* create member Modal */}
      <ControlledModal open={modalState.AddModal} onClose={() => closeModal('AddModal')}>
        <ControlledTypography text="Add Member" />
        <div className="flex flex-col justify-center p-5">
          <form onSubmit={createMember}>
            <ControlledTextField
              type="text"
              variant="outlined"
              label="Full Name"
              value={newMember.fullname}
              onChange={(e) => setNewMember({...newMember, fullname: e.target.value})}
              style={{ margin: "5px", width: "100%" }}
            />
            <ControlledTextField
              type="email"
              variant="outlined"
              label="Email"
              value={newMember.email}
              onChange={(e) => setNewMember({...newMember, email: e.target.value})}
              style={{ margin: "5px", width: "100%" }}
            />
            <ControlledTextField
              type="text"
              variant="outlined"
              label="Username"
              value={newMember.username}
              onChange={(e) => setNewMember({...newMember, username: e.target.value})}
              style={{ margin: "5px", width: "100%" }}
            />
            <ControlledTextField
              type="password"
              variant="outlined"
              label="Password"
              value={newMember.password}
              onChange={(e) => setNewMember({...newMember, password: e.target.value})}
              style={{ margin: "5px", width: "100%" }}
            />
            <div className="flex">
              <ControlledButton
                type="button"
                color="primary"
                text="Save"
                variant="contained"
                onClick={createMember}
              />
              <ControlledButton
                color="info"
                text="Cancel"
                variant="outlined"
                onClick={() => closeModal('AddModal')}
              />
            </div>
          </form>
        </div>
      </ControlledModal>

      {/* edit member Modal */}
    {selectedMem && (
          <ControlledModal open={modalState.EditModal} onClose={() => closeModal('EditModal')}>
            <ControlledTypography text="Edit Member" />
            <div className="flex flex-col justify-center p-5">
              <form>
                <ControlledTextField
                  type="text"
                  variant="outlined"
                  label="Full Name"
                  value={selectedMem.fullname}
                  style={{ margin: "5px", width: "100%" }}
                />
                <ControlledTextField
                  type="email"
                  variant="outlined"
                  label="Email"
                  style={{ margin: "5px", width: "100%" }}
                />
                <ControlledTextField
                  type="text"
                  variant="outlined"
                  label="Username"
                  style={{ margin: "5px", width: "100%" }}
                />
                <ControlledTextField
                  type="password"
                  variant="outlined"
                  label="Password"
                  style={{ margin: "5px", width: "100%" }}
                />
                <div className="flex">
                  <ControlledButton
                    color="primary"
                    text="Update"
                    variant="contained"
                  
                  />
                  <ControlledButton
                    color="info"
                    text="Cancel"
                    variant="outlined"
                    onClick={() => closeModal('EditModal')}
                  />
                </div>
              </form>
            </div>
          </ControlledModal>      
    )}



      {/* delete member */}
      {selectedMem && (
        <ControlledModal open={modalState.DeleteModal} onClose={() => closeModal('DeleteModal')}>
          <ControlledTypography text="Delete Member" />
          <div className="h-32 flex justify-center items-center">
            <h2 className="text-[20px] text-center">
              Are you sure you want to delete this member?
            </h2>
          </div>
          <div className="flex">
            <ControlledButton
              type="submit"
              color="error"
              text="Delete"
              variant="contained"
              onClick={() => deleteMember(selectedMem.id)}
            />
            <ControlledButton
              color="info"
              text="Cancel"
              variant="outlined"
              onClick={() => closeModal('DeleteModal')}
            />
          </div>
        </ControlledModal>
      )}
    </>
  );
};

export default MemberContent;