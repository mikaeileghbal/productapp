import { Provider } from "react-redux";
import { ProductDisplay } from "./product/ProductDisplay";

//import ProductsAndSuppliers from "./ProductsAndSuppliers";
import Selector from "./Selector";
import dataStore from "./store";
import { SupplierDisplay } from "./supplier/SupplierDisplay";

function App() {
  return (
    <Provider store={dataStore}>
      <Selector>
        <ProductDisplay name="Products" />
        <SupplierDisplay name="Suppliers" />
      </Selector>
    </Provider>
  );
}

export default App;
