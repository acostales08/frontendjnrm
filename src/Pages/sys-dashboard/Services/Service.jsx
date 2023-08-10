import React, { useState, useEffect } from 'react';
import { RiEditBoxFill, RiDeleteBin2Fill } from 'react-icons/ri';
import { TiPlus } from 'react-icons/ti'
import { IconButton } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  ControlledDataTable,
  ControlledButton,
  ControlledModal,
  ControlledTypography,
  ControlledTextField,
} from '../../../Components';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [selectedServ, setSelectedServ] = useState(null);
  const [modalState, setModalState] = useState({
    AddModal: false,
    EditModal: false,
    DeleteModal: false, 
  });

  const [newService, setNewService] = useState({
    image: '', 
    description: '',
    price: ''
  });

  const openModal = (modalType, serviceId = null) => {
    setModalState({ ...modalState, [modalType]: true });
    if (serviceId) {
      const service = services.find((p) => p.id === serviceId);
      console.log(serviceId);
      setSelectedServ(service);
    } else {
      setSelectedServ(null);
    }
  };

  const closeModal = (modalType) => {
    setModalState({ ...modalState, [modalType]: false });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/services');
      setServices(response.data.service);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewService({ ...newService, image: e.target.files[0] });
  };

  const CreateService = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', newService.image);
    formData.append('description', newService.description);
    formData.append('price', newService.price);

    try {
      const response = await axios.post('http://localhost:8000/api/services', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      closeModal("AddModal")
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 700,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: (response.data.message)
      }).then(() => {
        fetchData();
        setNewService({})
    });

    } catch (error) {
      console.error('Error creating services:', error);
    }
  };

  const updateService = async(service) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/services/${services.id}/edit`, service)
      if(response.status === 200){

      }else{

      }
    } catch (error) {
      
    }
  }

  const deleteService = async (serviceId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/services/${serviceId}/delete`);
      closeModal('DeleteModal');
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 700,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: (response.data.message)
      }).then(() => {
        fetchData();
      fetchData();
      })
    } catch (error) {
      console.error('Error deleting services:', error);
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
      name: 'image',
      selector: (row) => (
        <img
          src={`http://127.0.0.1:8000/storage/${row.image}`}
          alt=""
          height={50}
          width={50}
        />
      ),
      sortable: true,
    },
    {
      name: 'Service-Description',
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: 'Services-Price',
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: 'action',
      cell: (row) => (
        <div className="flex gap-2">
          <IconButton color="success">
            <RiEditBoxFill
              size={25}
              onClick={() => openModal('EditModal', row.id)}
            />
          </IconButton>
          <IconButton color="error">
            <RiDeleteBin2Fill
              size={25}
              onClick={() => openModal('DeleteModal', row.id)}
            />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div className='h-[93vh] overflow-scroll'>
      <div className="px-6 py-4">
        <ControlledButton
          size="small"
          color="primary"
          text="Add Service"
          variant="contained"
          icon={<TiPlus size={20}/>}
          onClick={() => openModal('AddModal')}
        />
      </div>
      <div className="px-8 ">
        <ControlledDataTable
          columns={columns}
          data={services}
          pagination
        />
      </div>

      {/* creating new product modal */}
      <ControlledModal
        open={modalState.AddModal}
        onClose={() => closeModal('AddModal')}
      >
        <ControlledTypography text="Add Service" />
        <div className="flex flex-col justify-center p-5">
          <form onSubmit={CreateService}>
            <ControlledTextField
              type="text"
              variant="outlined"
              label="Description"
              name="description"
              value={newService.description}
              onChange={handleChange}
              style={{ margin: '5px', width: '100%' }}
            />
            <ControlledTextField
              type="number"
              variant="outlined"
              label="Price"
              name="price"
              value={newService.price}
              onChange={handleChange}
              style={{ margin: '5px', width: '100%' }}
            />
            <ControlledTextField
              type="file"
              variant="outlined"
              name="image"
              onChange={handleImageChange}
              style={{ margin: '5px', width: '100%' }}
            />
            <div className="flex">
              <ControlledButton
                type="submit"
                color="primary"
                text="Save"
                variant="contained"
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

      {/* update product modal */}
      {selectedServ && (
              <ControlledModal
              open={modalState.EditModal}
              onClose={() => closeModal('EditModal')}
            >
              <ControlledTypography text="Add Service" />
              <div className="flex justify-center items-center">
                <div className="w-36 h-36">
                    <img src={`http://127.0.0.1:8000/storage/${selectedServ.image}`} alt="" />
                </div>
              </div>

              <div className="flex flex-col justify-center p-5">
                <form onSubmit={CreateService}>
                  <ControlledTextField
                    type="text"
                    variant="outlined"
                    label="Description"
                    name="description"
                    value={selectedServ.description}
                    onChange={(e) =>
                    setSelectedServ({ ...selectedServ, description: e.target.value })
                    }
                    style={{ margin: '5px', width: '100%' }}
                  />
                  <ControlledTextField
                    type="number"
                    variant="outlined"
                    label="Price"
                    name="price"
                    value={selectedServ.price}
                    onChange={(e) =>
                    setSelectedServ({ ...selectedServ, price: e.target.value })
                    }
                    style={{ margin: '5px', width: '100%' }}
                  />
                  <ControlledTextField
                    type="file"
                    variant="outlined"
                    name="image"
                    // value={selectedProd.image}
                    onChange={(e) =>
                      setSelectedServ({ ...selectedServ, image: e.target.value })
                      }
                    style={{ margin: '5px', width: '100%' }}
                  />
                  <div className="flex">
                    <ControlledButton
                      type="submit"
                      color="primary"
                      text="Save"
                      variant="contained"
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
      )}
      

      {/* Deleting Product */}
      {selectedServ && (
        <ControlledModal open={modalState.DeleteModal} onClose={() => closeModal('DeleteModal')}>
          <ControlledTypography text="Delete" />
          <div className="h-32 py-4 flex justify-center items-center">
            <h2 className="text-3xl font-semibold p-4">
              Are you sure? you want to delete this?
            </h2>
          </div>
          <div className="flex">
            <ControlledButton
              variant="contained"
              type="submit"
              text="Delete"
              color="error"
              onClick={() => deleteService(selectedServ.id)}
            />
            <ControlledButton
              variant="outlined"
              type="submit"
              text="Cancel"
              color="info"
              onClick={() => closeModal('DeleteModal')}
            />
          </div>
        </ControlledModal>
      )}
    </div>
  );
};

export default ServicesPage;
