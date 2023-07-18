import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({
    productname: '',
    description: '',
    price: '',
    image: null,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data.product);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('productname', productData.productname);
      formData.append('description', productData.description);
      formData.append('price', productData.price);
      formData.append('image', productData.image);

      await axios.post('/api/products', formData);

      // Clear form data
      setProductData({
        productname: '',
        description: '',
        price: '',
        image: null,
      });

      // Fetch updated products list
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="productname"
            value={productData.productname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input type="file" name="image" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>

      <h2>Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.productname}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <img src={`uploads/product/${product.image}`} alt="Product" />
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
