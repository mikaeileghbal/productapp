import React from "react";
import ProductTableRow from "./ProductTableRow";

export default function ProductTable({
  products,
  editCallback,
  deleteCallback,
}) {
  return (
    <table className="table table-sm table-strippd text-center table-bordered table-hover">
      <thead>
        <tr>
          <th colSpan="5" className="bg-primary text-white text-center h4 p-2">
            Products
          </th>
        </tr>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Categopry</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductTableRow
            key={product.id}
            product={product}
            editCallback={editCallback}
            deleteCallback={deleteCallback}
          />
        ))}
      </tbody>
    </table>
  );
}
