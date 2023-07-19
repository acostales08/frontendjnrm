
import React, { useState, useEffect } from 'react';

const EditItemModal = ({ showModal, closeModal, item, onUpdate }) => {
  const [itemData, setItemData] = useState({
    productname: '',
    description: '',
    price: '',
    image: '',
  });

  useEffect(() => {
    if (item) {
      setItemData({
        productname: item.productname,
        description: item.description,
        price: item.price,
        image: '',
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleUpdate = () => {
    onUpdate(itemData);
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <input
        type="text"
        name="productname"
        value={itemData.productname}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <input
        type="text"
        name="description"
        value={itemData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="number"
        name="price"
        value={itemData.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <input
        type="file"
        name="image"
        onChange={handleChange}
        placeholder="Image"
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default EditItemModal;