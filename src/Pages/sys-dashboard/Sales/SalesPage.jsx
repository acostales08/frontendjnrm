import React, {useState, useEffect, useRef} from 'react'
import { Button, IconButton } from '@mui/material'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { ControlledButton, ControlledCard } from '../../../Components'
import axios from 'axios'
import { ComponentToPrint } from '../../../Components/Print/Print'
import { useReactToPrint } from 'react-to-print';


const SalesContent = () => {

  const [productData, setProductData] = useState([])
  const [cart, setCart] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [discount, setDiscount] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  // const [cartToDb, setCartToDb] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/product');
      setProductData(response.data.product)

    } catch (error) {
      
    }
  }

 
  const addProductToCart = async (product) => {
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
  };

  

  const componentRef = useRef();

  const handleReactToPrint =  useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrint = () => {
    handleReactToPrint()
  }


const removeProduct = async(product) => {
      const newCart = cart.filter(cartItem =>  cartItem.id !== product.id )
      setCart(newCart)
      setDiscount('0');
      setDiscountPercentage('0');
  };


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
  
  const handleDiscountChange = (e) => {
    const enteredDiscount = parseFloat(e.target.value);
    if (!isNaN(enteredDiscount)) {
      setDiscount(enteredDiscount);
  
      // Calculate discount percentage and amount based on the entered discount
      const newDiscountPercentage = totalAmount * (enteredDiscount / 100);
      setDiscountPercentage(newDiscountPercentage);
    } else {
      setDiscount('');
      setDiscountPercentage('');
    }

  };


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
                  <p className=" flex items-center">Discount %:</p>
                  <p className=" flex items-center">Tax :</p>
                </div>
                <div className=" w-[230px] grid">
                  <div className=" p-1 flex items-center">
                    <p className=" w-full rounded-lg bg-white p-1 shadow-inner"><span>&#8369;</span>{totalAmount}</p>
                  </div>
                  <div className=" p-1 flex items-center">
                  <input
                  type="number"
                  className="text-black"
                  placeholder="Enter Discount here"
                  value={discount}
                  onChange={handleDiscountChange}
                />
                  </div>
                  <div className=" p-1 flex items-center">
                    <p className=" w-full rounded-lg bg-white p-1 shadow-inner"> <span>&#8369;</span>
            {totalAmount * 0.12}</p>
                  </div> 
                </div>
              </div>
              <div className="gap-2 w-9/12 text-2xl  flex flex-col justify-center items-center">
              <h1 className=""> Total Amount </h1>
          <p className="p-4 rounded-md shadow-inner bg-white w-36 overflow-hidden">
            <span>&#8369;</span>
            {totalAmount - discountPercentage }
          </p>
              </div>                
            </div>
            <div className="h-10 flex justify-center gap-5">
              <ControlledButton
              variant="contained"
              text='Save'
              size='large'
              />
              <ControlledButton
              variant="outlined"
              text='Cancel'
              size='large'
              />                   
              <ControlledButton
              variant="contained"
              text='Gcash'
              size='large'
              color='success'
              />   
              <ControlledButton
              variant="contained"
              text='Print'
              size='large'
              color='success'
              onClick={handlePrint}
              />        
            </div>
          </div>
          <div className=" h-full w-[50%] p-1 overflow-scroll">
            <div style={{display:'none'}}>
                  <ComponentToPrint cart={cart} totalAmount={totalAmount} ref={componentRef}/>
            </div>
            <div className="h-auto w-full rounded-lg grid grid-rows-10 gap-2">
                {cart.map((cartItem, index) => (
                <ControlledCard key={index}>
                  <div className="flex justify-around p-2">
                    <div className="w-16 h-16">
                      <img src={`http://127.0.0.1:8000/storage/${cartItem.image}`} alt="product image" />
                    </div>
                    <div className="flex items-center gap-10">
                      <p className="text-2xl font-semibold ">{cartItem.productname}</p>
                      </div>
                      <div className="grid grid-cols-2 grid-rows-3">
                        <p className="">Price: </p>
                        <p className="font-semibold">{cartItem.price}</p>
                        <p className="">Quantity: </p>    
                        <p className="font-semibold"> {cartItem.quantity}</p>
                        <p className="">Total:  </p>
                        <p className="font-semibold"><span>&#8369; </span>{cartItem.totalAmount}</p>      
                                           
                      </div>
                    <div className=" flex justify-center items-center">
                        <IconButton onClick={() => removeProduct(cartItem)}>
                          <RiDeleteBin6Line size={30} />
                        </IconButton>
                      </div>
                  </div>
                </ControlledCard>
              ))}
            </div>
          </div>
        </section>        
      )
}

export default SalesContent

