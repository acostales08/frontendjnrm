import React, {useState, useEffect, useRef} from 'react'
import { Button, IconButton } from '@mui/material'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { ControlledCard } from '../../../Components'
import axios from 'axios'
import { ComponentToPrint } from '../../../Components/Print/Print'
import { useReactToPrint } from 'react-to-print';


const SalesContent = () => {

  const [productData, setProductData] = useState([])
  const [cart, setCart] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [discount, setDiscount] = useState(0)

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/product');
      setProductData(response.data.product)
    } catch (error) {
      
    }
  }

  const addProductToCart = async (product) => {
    try {
      const response = await axios.post('http://localhost:8000/api/order', {
        id: product.id,
        quantity: 1, // I-adjust depende sa desired quantity ng user
      });
  
      if (response.status === 200) {
        console.log(response.data.message); // Success message from Laravel
  
        // Add the new cart item to the cart state
        let findProductInCart = cart.find((item) => item.id === product.id);
  
    if (findProductInCart) {
      let newCart = cart.map((cartItem) => {
        if (cartItem.id === product.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalAmount: cartItem.price * (cartItem.quantity + 1),
          };
        } else {
          return cartItem;
        }
      });
  
      setCart(newCart);
    } else {
      let addingProduct = {
        ...product,
        quantity: 1,
        totalAmount: product.price,
      };
      setCart([...cart, addingProduct]);
    }
      } else {
        console.error('Something went wrong!');
        // Handle error cases
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error cases
    }
  };
  

  const componentRef = useRef();

  const handleReactToPrint =  useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrint = () => {
    handleReactToPrint()
  }

  const removeProduct = async() => {
    try {
      const response = await axios.post('http://localhost:8000/api/cancelorder', { cartItem: cart });
  
      // Kapag nag-response ng 200 OK, ibalik ang mga produkto sa kanilang orihinal na quantity sa cart
      const updatedCart = cart.map((cartItem) => {
        const originalQuantity = productData.find((product) => product.id === cartItem.product.id).quantity;
        return {
          ...cartItem,
          quantity: originalQuantity,
        };
      });
  
      setCart(updatedCart);
  
      // I-display ang success message sa user
      console.log('Order removed successfully');
    } catch (error) {
      // I-handle ang mga error mula sa backend
      console.error('Remove order failed:');
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
      let newTotalAmount = 0;
      cart.forEach(icart => {
        newTotalAmount = newTotalAmount + parseInt(icart.totalAmount)
      });
      setTotalAmount(newTotalAmount)
  }, [cart])

    return (
        <section className="h-[897px] w-auto p-2 top-0 flex bg-[#F9F5F6]">
          <div className=" h-full w-[50%] flex flex-col">
            <div className="w-full h-[65vh] bg-white rounded-lg overflow-scroll">
              <div className="w-full h-auto  grid grid-cols-2 lg:grid-cols-5 grid-rows-3 p-5 gap-3 shadow-inner">
                {productData.map(( product) => (
                  <ControlledCard  
                    children = {
                      <div key={product.id} className='h-full flex flex-col justify-center items-center cursor-pointer' onClick={() => addProductToCart(product)}>
                        <img src={`http://127.0.0.1:8000/storage/${product.image}`} alt="" className='h-28 w-28'/>
                              <p className="m-2">{product.productname}</p>
                              <p className="flex justify-center items-center"><span>&#8369;</span>{product.price}</p>
                          </div>
                        } 
                  />          
                  ))}                
              </div>


            </div>
            <div className="w-full h-[20%] flex p-2 bg-[#F9F5F6]">
              <div className="w-full flex px-10 text-1xl gap-4">
                <div className="gap-0 grid">
                  <p className=" flex items-center">Sub :</p>
                  <p className=" flex items-center">Discount :</p>
                  <p className=" flex items-center">Tax :</p>
                </div>
                <div className=" w-[230px] grid">
                  <div className=" p-1 flex items-center">
                    <p className=" w-full rounded-lg bg-white p-1 shadow-inner"><span>&#8369;</span>{totalAmount}</p>
                  </div>
                  <div className=" p-1 flex items-center">
                    <input type="number" className="text-black" placeholder='Enter Discount here' onChange={(e) => setDiscount(e.target.value)} />
                  </div>
                  <div className=" p-1 flex items-center">
                    <p className=" w-full rounded-lg bg-white p-1 shadow-inner">10.00</p>
                  </div> 
                </div>
              </div>
              <div className="gap-2 w-9/12 text-2xl  flex flex-col justify-center items-center">
                <h1 className=""> Total Amount </h1>
                <p className="p-4 rounded-md shadow-inner bg-white w-36 "><span>&#8369;</span>{totalAmount}</p>
              </div>                
            </div>
            <div className="h-10 flex justify-center gap-5">
              <Button

              variant='contained'
              >Save</Button>
              <Button 

              color='warning'
              variant='outlined'
              >Cancel</Button>                    
              <Button 

              variant='contained'
              color='success'
              >
                GCash</Button>    
              <Button
 
              variant='contained'
              color='success'
              >
                Discount</Button>    
              <Button onClick={handlePrint}
              variant='contained'
              color='success'
              >Print</Button>    
            </div>
          </div>
          <div className=" h-full w-[50%] p-1 overflow-scroll">
            <div style={{display:'none'}}>
                  <ComponentToPrint cart={cart} totalAmount={totalAmount} ref={componentRef}/>
            </div>
            <div className="h-auto w-full rounded-lg grid grid-rows-10 gap-2">
  {cart.length > 0 ? (
    cart.map((cartItem, index) => (
      <ControlledCard key={index}>
        <div className="flex h-full">
          <div className="p-4 h-full w-[20%]">
            <img src={`http://127.0.0.1:8000/storage/${cartItem.image}`} alt="Product image" className="" />
          </div>
          <div className="flex justify-between items-center w-full h-full gap-5 text-2xl">
            <p className="m-6">{cartItem.name}</p>
            <p className="m-6">
              <span>&#8369;</span>
              {cartItem.price}
            </p>
            <div className="">
              <p className="m-6">
                <span className="mx-3">quantity</span>
                {cartItem.quantity}
              </p>
              <p className="m-6">
                <span className="mx-3">total</span>
                <span>&#8369;</span>
                {cartItem.totalAmount}
              </p>
              {/* Display discount if applicable */}
              {cartItem.discount && (
                <p className="m-6">
                  <span className="mx-3">discount</span>
                  <span>&#8369;</span>
                  {cartItem.discount}
                </p>
              )}
            </div>
          </div>
          <div className="w-[20%] flex justify-center items-center">
            <IconButton onClick={() => removeProduct(cartItem)}>
              <RiDeleteBin6Line size={30} />
            </IconButton>
          </div>
        </div>
      </ControlledCard>
    ))
  ) : (
    'No Items In Cart'
  )}
</div>
          </div>
        </section>        
      )
}

export default SalesContent