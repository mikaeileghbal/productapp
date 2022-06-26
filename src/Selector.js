import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import IsolatedTable from "./IsolatedTable";
import { ProductDisplay } from "./product/ProductDisplay";
import { SupplierDisplay } from "./supplier/SupplierDisplay";

export default function Selector({ children }) {
  // const [selection, setSelection] = useState("Products");

  // const handleClick = (event) => {
  //   setSelection(event.target.name);
  // };
  const location = useLocation();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <div>
            <Link
              to="/products"
              className={`btn btn-block m-2 d-block ${
                location.pathname === "/products"
                  ? "btn-primary active"
                  : "btn-secondary"
              }`}
            >
              Products
            </Link>
          </div>
          <div>
            <Link
              to="/suppliers"
              className={`btn btn-block m-2 d-block ${
                location.pathname === "/suppliers"
                  ? "btn-primary active"
                  : "btn-secondary"
              }
              `}
            >
              Suppliers
            </Link>
          </div>
          <div>
            <Link
              to="/isolated"
              className={`btn btn-block m-2 d-block ${
                location.pathname === "/isolated"
                  ? "btn-primary active"
                  : "btn-secondary"
              }
              `}
            >
              Isolated
            </Link>
          </div>
        </div>
        <div className="col">
          <Routes>
            <Route path="/products" element={<ProductDisplay />} />
            <Route path="/suppliers" element={<SupplierDisplay />} />
            <Route path="/isolated" element={<IsolatedTable />} />
          </Routes>
        </div>
        {/*
            {React.Children.map(children, (c) => (
          <button
          name={c.props.name}
          onClick={handleClick}
          style={{ width: "100%" }}
          className={`btn btn-block m-2 d-block ${
            selection === c.props.name
            ? "btn-primary active"
            : "btn-secondary"
          }`}
          >
          {c.props.name}
          </button>
          ))}
          </div>
          <div className="col">
          {React.Children.toArray(children).filter(
            (c) => c.props.name === selection
            )}
          </div> */}
      </div>
    </div>
  );
}

function renderMessage(msg) {
  return <h5 className="bg-info text-center text-white p-2">{msg}</h5>;
}
