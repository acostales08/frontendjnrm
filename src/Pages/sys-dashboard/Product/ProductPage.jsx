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

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProd, setSelectedProd] = useState(null);
  const [modalState, setModalState] = useState({
    AddModal: false,
    EditModal: false,
    DeleteModal: false, 
  });

  const [newProduct, setNewProduct] = useState({
    productname: '', 
    description: '',
    price: '',
    quantity: '',
    image: '',
  });

  const openModal = (modalType, productId = null) => {
    setModalState({ ...modalState, [modalType]: true });
    if (productId) {
      const product = products.find((p) => p.id === productId);
      console.log(productId);
      setSelectedProd(product);
    } else {
      setSelectedProd(null);
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
      const response = await axios.get('http://localhost:8000/api/product');
      setProducts(response.data.product);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const CreateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productname', newProduct.productname);
    formData.append('description', newProduct.description);
    formData.append('price', newProduct.price);
    formData.append('quantity', newProduct.quantity);
    formData.append('image', newProduct.image);

    try {
      const response = await axios.post('http://localhost:8000/api/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      closeModal("AddModal")
      Swal.fire({
        title: 'Success!',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'Got it!'
      }).then(() => {
        fetchData();
        setNewProduct({})
    });

    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/product/${productId}/delete`);
      alert(response.data.message);
      closeModal('DeleteModal');
      fetchData();
    } catch (error) {
      console.error('Error deleting product:', error);
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
      name: 'Product-Name',
      selector: (row) => row.productname,
      sortable: true,
    },
    {
      name: 'Product-Description',
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: 'Product-Price',
      selector: (row) => row.price,
      sortable: true,
    },
    // {
    //   name: 'Quantity',
    //   selector: (row) => row.quantity,
    //   sortable: true,
    // },
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
    <>
      <div className="px-6 py-4">
        <ControlledButton
          size="medium"
          color="primary"
          text="Add Product"
          variant="contained"
          icon={<TiPlus size={20}/>}
          onClick={() => openModal('AddModal')}
        />
      </div>
      <div className="px-8">
        <ControlledDataTable
          columns={columns}
          data={products}
        />
      </div>

      {/* creating new product modal */}
      <ControlledModal
        open={modalState.AddModal}
        onClose={() => closeModal('AddModal')}
      >
        <ControlledTypography text="Add Member" />
        <div className="flex flex-col justify-center p-5">
          <form onSubmit={CreateProduct}>
            <ControlledTextField
              type="text"
              variant="outlined"
              label="Product Name"
              name="productname"
              value={newProduct.productname}
              onChange={handleChange}
              style={{ margin: '5px', width: '100%' }}
            />
            <ControlledTextField
              type="text"
              variant="outlined"
              label="Description"
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              style={{ margin: '5px', width: '100%' }}
            />
            <ControlledTextField
              type="number"
              variant="outlined"
              label="Price"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              style={{ margin: '5px', width: '100%' }}
            />
            <ControlledTextField
              type="number"
              variant="outlined"
              label="Quantity"
              name="quantity" // Added the correct field name for quantity if it exists in the data
              value={newProduct.quantity}
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

      {/* Deleting Product */}
      {selectedProd && (
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
              onClick={() => deleteProduct(selectedProd.id)}
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
    </>
  );
};

export default ProductPage;
