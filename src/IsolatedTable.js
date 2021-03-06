import React, { useEffect, useState } from "react";
import RestDataSource from "./webservice/RestDataSource";
import { Link } from "react-router-dom";

export default function IsolatedTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataSource = new RestDataSource("http://localhost:3500/api/products");
    dataSource.GetData((data) => setProducts(data));
  }, []);

  return (
    <table className="table table-sm table-striped table-bordered">
      <thead>
        <tr>
          <th colSpan="5" className="bg-info text-white text-center h4 p-2">
            (Isolated) Products
          </th>
        </tr>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Category</td>
          <td className="text-right">Price</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{Number(product.price).toFixed(2)}</td>
            <td>
              <Link
                to={`/isolated/edit/${product.id}`}
                className="btn btn-sm btn-warning mx-2"
              >
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="text-center">
          <td colSpan="5">
            <Link to="/isolated/create" className="btn btn-info">
              Create
            </Link>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
