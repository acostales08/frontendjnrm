import React, {useState, useEffect} from 'react'
import { RiEditBoxFill, RiDeleteBin2Fill } from "react-icons/ri";
import { IconButton } from "@mui/material";
import axios from 'axios'
import {
  ControlledDataTable,
  ControlledButton,
  ControlledModal,
  ControlledTypography,
  ControlledTextField,
} from "../../../Components";


const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProd, setSelectedProd] = useState(null);
  const [modalState, setModalState] = useState({
    AddModal: false,
    EditModal: false,
    DeleteModal: false, // Fixed typo in modal state
  });

  const [newProduct, setNewProduct] = useState({
    fullname: "",
    email: "",
    username: "",
    image: null,
  });

  

  const openModal = (modalType, productId = null ) => {
    setModalState({ ...modalState, [modalType]: true });
    if (productId) {
      const product = products.find((p) => p.id === productId);
      console.log(productId)
      setSelectedProd(product);
    } else {
      setSelectedProd(null);
    }
  };

  const closeModal = (modalType) => {
    setModalState({ ...modalState, [modalType]: false });
  };

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/product')
      setProducts(response.data.product)
    } catch (error) {
      
    }
  };

  const createProduct = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/product', newProduct)
      if(response.data === 200){
        alert(response.data.message)
        fetchData()
        closeModal('AddModal')        
      }else{
        alert(response.data.message)
      }

    } catch (error) {
      
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/product/${productId}/delete`)
      alert(response.data.message)
      closeModal("DeleteModal")
      fetchData()
    } catch (error) {
      
    }
  }

    const columns = [
      { name: "id", selector: (row) => row.id, sortable: true },
      { name: "image", selector: (row) => row.image, sortable: true },
      { name: "Product-Name", selector: (row) => row.productname, sortable: true },
      { name: "Product-Description", selector: (row) => row.description, sortable: true },
      { name: "Product-Price", selector: (row) => row.price, sortable: true },
      { name: "Quantity", selector: (row) => row.quantity, sortable: true },
      {
        name: "action",
        cell: (row) => (
          <div className="flex gap-2">
            <IconButton color="success">
              <RiEditBoxFill
                size={25}
                // onClick={() => openModal("EditModal", row.id)}
              />
            </IconButton>
            <IconButton color="error">
              <RiDeleteBin2Fill
                size={25}
                onClick={() => openModal("DeleteModal", row.id)}
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
          onClick={() => openModal("AddModal")}
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
        onClose={() => closeModal("AddModal")}
      >
        <ControlledTypography text="Add Member" />
        <div className="flex flex-col justify-center p-5">
          <form onSubmit={createProduct}>
            <ControlledTextField
              type="text"
              variant="outlined"
              label="Product Name"
              value={newProduct.productname}
              onChange={(e) =>
                setNewProduct({ ...newProduct, productname: e.target.value })
              }
              style={{ margin: "5px", width: "100%" }}
            />
            <ControlledTextField
              type="text"
              variant="outlined"
              label="Description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              style={{ margin: "5px", width: "100%" }}
            />
            <ControlledTextField
              type="number"
              variant="outlined"
              label="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              style={{ margin: "5px", width: "100%" }}
            />
            <ControlledTextField
              type="number"
              variant="outlined"
              label="Quantity"
              value={newProduct.quantity}
              onChange={(e) =>
                setNewProduct({ ...newProduct, quantity: e.target.value })
              }
              style={{ margin: "5px", width: "100%" }}
            />
            <ControlledTextField
              type="file"
              variant="outlined"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              style={{ margin: "5px", width: "100%" }}
            />
            <div className="flex">
              <ControlledButton
                type="button"
                color="primary"
                text="Save"
                variant="contained"
                onClick={createProduct}
              />
              <ControlledButton
                color="info"
                text="Cancel"
                variant="outlined"
                onClick={() => closeModal("AddModal")}
              />
            </div>
          </form>
        </div>
      </ControlledModal>
      {/* Deleting Product */}
      {selectedProd && (
       <ControlledModal open={modalState.DeleteModal} onClose={() => closeModal('DeleteModal')}>
        <ControlledTypography
        text="Delete"
        />
        <div className="h-32 py-4 flex justify-center items-center">
          <h2 className="text-3xl border border-black font-semibold p-4">Are you sure? you want to delete this?</h2>
        </div>
        <div className="flex">
          <ControlledButton
          variant='contained'
          type='submit'
          text="Delete"
          color='error'
          onClick={deleteProduct}
          />
          <ControlledButton
          variant='outlined'
          type='submit'
          text="Cancel"
          color='info'
          onClick={() => closeModal('DeleteModal')}
          />          
        </div>

      </ControlledModal>
      )}

    </>
  )
}

export default ProductPage