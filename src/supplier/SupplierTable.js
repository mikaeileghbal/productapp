import React from "react";
import SupplierTableRow from "./SupplierTableRow";

export default function SupplierTable({
  suppliers,
  editCallback,
  deleteCallback,
}) {
  return (
    <table className="table table-sm table-strippd text-center table-bordered">
      <thead>
        <tr>
          <th colSpan="5" className="bg-primary text-white text-center h4 p-2">
            suppliers
          </th>
        </tr>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
          <th>Products</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((product) => (
          <SupplierTableRow
            key={product.id}
            editCallback={editCallback}
            deleteCallback={deleteCallback}
          />
        ))}
      </tbody>
    </table>
  );
}
