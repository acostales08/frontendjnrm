import React, { useState, useEffect } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { FaMinusCircle } from 'react-icons/fa'
import axios from 'axios'
import { ControlledButton, ControlledDataTable, ControlledModal, ControlledTypography, ControlledTextField } from '../../../Components'

const InventoryContent = () => {
    const [modal, setModal] = useState({
      AddModal: false,
      MinusModal: false
    })
    const [products, setProducts] = useState([]);
    const [enteredQuantity, setEnteredQuantity] = useState(0);
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/product');
        setProducts(response.data.product);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

 console.log(products.quantity)
 
 const increaseProductQuantity = async (productId, quantity) => {
  try {
    const response = await axios.post( `http://localhost:8000/api/product/${productId}/stockin`, { quantity } );
    console.log("Product Quantity Increased:", response.data);
    fetchData();
  } catch (error) {
    console.error("Error increasing product quantity:", error);
  }
};

const decreaseProductQuantity = async (productId, quantity) => {
  try {
    const response = await axios.post( `http://localhost:8000/api/product/${productId}/stockout`, { quantity } );
    console.log("Product Quantity Decreased:", response.data);
    fetchData();
  } catch (error) {
    console.error("Error increasing product quantity:", error);
  }
};

    const openModal = (modalType) => {
      setModal({...modal, [modalType]: true})
    }

    const closeModal = (modalType) => {
      setModal({...modal, [modalType]: false})
    }

    const NumberedCell = ({ rowIndex }) => <div>{rowIndex}</div>;
    const columns = [
        {
          name: 'No.',
          selector: (row, index) => <NumberedCell rowIndex={index + 1} />,
          sortable: true,
        },
        { 
        name: "ProductName", 
        selector: (row) => row.productname, 
        sortable: true 
        },
        { 
        name: "Quantiy", 
        selector: (row) => row.quantity, 
        sortable: true 
        },
        {
          name: "Status",
          cell: (row) => (
            <>
            
              <div className="bg-red-600 rounded-full">
                <p className="text-[10px] text-white mx-2 ">Out of Stock</p>  
              </div>  
            </>
  
          ),
          },
        {
        name: "Stock action",
        cell: (row) => (
          <>
            <ControlledButton
            icon={<BsPlusCircleFill size={20} className='mx-1'/>}
            text="add"
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            setModal({ ...modal, AddModal: true, productId: row.id });
            setEnteredQuantity("");
          }}
            />
            <ControlledButton
            icon={<FaMinusCircle size={20} className='mx-1'/>}
            text='minus'
            variant='contained'
            size='small'
            color='warning'
            onClick={() => {
              setModal({ ...modal, MinusModal: true, productId: row.id });
              setEnteredQuantity("");
            }}
            />          
          </>

        ),
        },
    ];

    const data =[
        {
            id: '1',
            productname: 'sample1',
            quantity: '23'
        },
        {
          id: '2',
          productname: 'sample2',
          quantity: '23'
      },
    ];
  return (
    <>
      <div className="p-8">
        <ControlledDataTable columns={columns} data={products} />
      </div>

    {/* increase product quantity */}
    <ControlledModal open={modal.AddModal}  onClose={() => closeModal('AddModal')}>
      <ControlledTypography text='Add Product Quantity' />
      <div className="flex flex-col justify-center p-5">
          <ControlledTextField
            type="number"
            variant="outlined"
            label="Enter Product Quantity"
            style={{ margin: "5px", width: "100%" }}
            value={enteredQuantity}
            onChange={(e) => setEnteredQuantity(e.target.value)}
          />

      <div className="flex justify-center mt-5">
        <ControlledButton
           type="button"
           color="primary"
           text="Save"
           variant="contained"
           onClick={() => {
             increaseProductQuantity(modal.productId, enteredQuantity);
             closeModal("AddModal");
           }}
         />
        <ControlledButton
          color="info"
          text="Cancel"
          variant="outlined"
          onClick={() => closeModal("AddModal")}
        />
      </div>
      </div>
    </ControlledModal>

      {/* decreasing product quantity */}
      <ControlledModal open={modal.MinusModal}  onClose={() => closeModal('MinusModal')}>
      <ControlledTypography text='Minus Product Quantity' />
      <div className="flex flex-col justify-center p-5">
      <ControlledTextField
      type="number"
      variant="outlined"
      label="Enter Product Quantity"
      style={{ margin: "5px", width: "100%" }}
      value={enteredQuantity}
      onChange={(e) => setEnteredQuantity(e.target.value)}
      />

      <div className="flex justify-center mt-5">
        <ControlledButton
          type="button"
          color="primary"
          text="Save"
          variant="contained"
          onClick={() => {
            decreaseProductQuantity(modal.productId, enteredQuantity);
            closeModal("MinusModal");
          }}
        />
        <ControlledButton
          color="info"
          text="Cancel"
          variant="outlined"
          onClick={() => closeModal("AddModal")}
        />
      </div>
      </div>
    </ControlledModal>

    </>
  )
}

export default InventoryContent