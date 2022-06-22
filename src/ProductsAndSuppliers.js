import React, { useEffect, useState } from "react";
import Selector from "./Selector";
import { ProductDisplay } from "./product/ProductDisplay";
import { SupplierDisplay } from "./supplier/SupplierDisplay";

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
    console.log("save data", collection, item);
    if (item.id === "") {
      item.id = state.idCounter++;
      setState({
        ...state,
        [collection]: state[collection].concat(item),
        idCounter: state.idCounter++,
      });
    } else {
      setState({
        ...state,
        [collection]: state[collection].map((stored) =>
          stored.id === item.id ? item : stored
        ),
      });
    }
  };

  const deleteData = (collection, item) => {
    console.log("delete data", collection, item);
    setState({
      ...state,
      [collection]: state[collection].filter((stored) => stored.id !== item.id),
    });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Selector>
      <ProductDisplay
        name="Products"
        products={state.products}
        saveCallback={(p) => saveData("products", p)}
        deleteCallback={(p) => deleteData("products", p)}
      />
      <SupplierDisplay
        name="Suppliers"
        suppliers={state.suppliers}
        saveCallback={(s) => saveData("suppliers", s)}
        deleteCallback={(s) => deleteData("suppliers", s)}
      />
    </Selector>
  );
}
