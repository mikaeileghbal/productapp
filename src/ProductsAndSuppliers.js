import React, { useState } from "react";
import ProductDisplay from "./product/ProductDisplay";
import Selector from "./Selector";
import SupplierDisplay from "./supplier/SupplierDisplay";

export default function ProductsAndSuppliers() {
  const [state, setState] = useState({
    products: [
      { id: 1, name: "Kayak", category: "Watersports", price: 275 },
      { id: 2, name: "Lifejacket", category: "Watersports", price: 48.95 },
      { id: 3, name: "Soccer Ball", category: "Soccer", price: 19.5 },
    ],
    suppliers: [
      { id: 1, name: "Surf Dudes", city: "San Jose", products: [1, 2] },
      { id: 2, name: "Field Supplies", city: "New York", products: [3] },
    ],
    idCounter: 100,
  });

  const saveData = (collection, item) => {
    if (item.id === "") {
      item.id = state.idCounter++;
      setState({ ...state, [collection]: [collection].concat(item) });
    } else {
      setState({
        ...state,
        [collection]: [collection].map((stored) =>
          stored.id === item.id ? item : stored
        ),
      });
    }
  };

  const deleteData = (collection, item) => {
    setState({
      ...state,
      [collection]: [collection].filter((stored) => stored.id !== item.id),
    });
  };

  return (
    <Selector>
      <ProductDisplay
        name="Products"
        products={state.products}
        saveCallback={(p) => saveData("Products", p)}
        deleteCallback={(p) => deleteData("Products", p)}
      />
      <SupplierDisplay
        name="Suppliers"
        suppliers={state.suppliers}
        saveCallback={(s) => saveData("Suppliers", s)}
        deleteCallback={(s) => deleteData("Suppliers", s)}
      />
    </Selector>
  );
}
