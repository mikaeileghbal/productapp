import React from "react";

export default function SupplierTableRow({
  supplier,
  editCallback,
  deleteCallback,
}) {
  let s = supplier;
  return (
    <tr>
      <td>{s.id}</td>
      <td>{s.name}</td>
      <td>{s.city}</td>
      <td>{s.products.join(", ")}</td>
      <td>
        <button
          className="btn btn-sm btn-warning m-1"
          onClick={() => editCallback(s)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger m-1"
          onClick={() => deleteCallback(s)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
