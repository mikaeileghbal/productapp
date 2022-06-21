import React, { useState } from "react";
import ProductEditor from "./ProductEditor";
import ProductTable from "./ProductTable";

export default function ProductDisplay({
  products,
  saveCallback,
  deleteCallback,
}) {
  const [state, setState] = useState({
    showEditor: false,
    selectedProduct: null,
  });

  const startEditing = (product) => {
    setState({ showEditor: true, selectedProduct: product });
  };

  const cancelEdit = () => {
    setState({ showEditor: false, selectedProduct: null });
  };

  const createProduct = () => {
    setState({ showEditor: true, selectedProduct: {} });
  };

  const saveProduct = (product) => {
    saveCallback(product);
    setState({ showEditor: false, selectedProduct: null });
  };

  if (state.showEditor) {
    return (
      <ProductEditor
        key={state.selectedProduct.id || -1}
        product={state.selectedProduct}
        cancelCallback={cancelEdit}
        saveCallback={saveProduct}
      />
    );
  } else {
    return (
      <div className="m-2">
        <ProductTable
          products={products}
          editCallback={startEditing}
          deleteCallback={deleteCallback}
        />
        <div className="text-center">
          <button className="btn btn-primary m-1" onClick={createProduct}>
            Create Product
          </button>
        </div>
      </div>
    );
  }
}
