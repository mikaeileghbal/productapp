import React, { useState } from "react";

export default function SupplierEditor({
  supplier,
  saveCallback,
  cancelCallback,
}) {
  const [formData, setFormData] = useState({
    id: supplier.id || "",
    name: supplier.name || "",
    city: supplier.city || "",
    products: supplier.products || [],
  });

  const onInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.name === "products"
          ? event.target.value.split(",")
          : event.target.value,
    });
  };

  const handleClick = (event) => {
    saveCallback({
      ...formData,
      products: formData.products.map((val) => Number(val)),
    });
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
        <label>City</label>
        <input
          className="form-control"
          name="city"
          value={formData.city}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="form-group">
        <label>Products</label>
        <input
          className="form-control"
          name="products"
          value={formData.products}
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
