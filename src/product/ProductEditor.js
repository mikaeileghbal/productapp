import React, { useState } from "react";

export default function ProductEditor({
  product,
  saveCallback,
  cancelCallback,
}) {
  const [formData, setFormData] = useState({
    id: product.id || "",
    name: product.name || "",
    category: product.category || "",
    price: product.price || "",
  });

  const onInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    saveCallback(formData);
  };

  return (
    <div className="m-2">
      <div className="form-group">
        <label>ID</label>
        <input
          className="form-control"
          name="id"
          disabled
          value={formData.id}
        ></input>
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          name="name"
          value={formData.name}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="form-group">
        <label>Category</label>
        <input
          className="form-control"
          name="category"
          value={formData.category}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          className="form-control"
          name="price"
          value={formData.price}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="text-center">
        <button className="btn btn-primary m-1" onClick={handleClick}>
          Save
        </button>
        <button className="btn btn-secondary" onClick={cancelCallback}>
          Cancel
        </button>
      </div>
    </div>
  );
}
