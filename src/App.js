import { Provider } from "react-redux";
import { ProductDisplay } from "./product/ProductDisplay";
import { BrowserRouter as Router } from "react-router-dom";

//import ProductsAndSuppliers from "./ProductsAndSuppliers";
import Selector from "./Selector";
import dataStore from "./store";
import { SupplierDisplay } from "./supplier/SupplierDisplay";

function App() {
  return (
    <Provider store={dataStore}>
      <Router>
        <Selector>
          <ProductDisplay name="Products" />
          <SupplierDisplay name="Suppliers" />
        </Selector>
      </Router>
    </Provider>
  );
}

export default App;
