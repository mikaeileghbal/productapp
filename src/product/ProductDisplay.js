//import { deleteProduct, saveProduct } from "../store";
import ProductEditor from "./ProductEditor";
import ProductTable from "./ProductTable";
import { connect } from "react-redux";
import { EditorConnector } from "../store/EditorConnector";
import { PRODUCTS } from "../store/dataTypes";
import { TableConnector } from "../store/TableConnector";
import { startCreatingProduct } from "../store/stateActions";

const ConnectedEditor = EditorConnector(PRODUCTS, ProductEditor);
const ConnectedTable = TableConnector(PRODUCTS, ProductTable);

const mapStateToProps = (storeData) => ({
  editing: storeData.stateData.editing,
  products: storeData.modelData.products.find(
    (item) => item.id === storeData.stateData.selectedId
  ),
});

const mapDispatchToProps = {
  createProduct: startCreatingProduct,
};

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const ProductDisplay = connectFunction(function ({
  products,
  editing,
  selected,
  createProduct,
}) {
  // const [state, setState] = useState({
  //   showEditor: false,
  //   selectedProduct: null,
  // });

  // const startEditing = (product) => {
  //   setState({ showEditor: true, selectedProduct: product });
  // };

  // const cancelEdit = () => {
  //   setState({ showEditor: false, selectedProduct: null });
  // };

  // const createProduct = () => {
  //   setState({ showEditor: true, selectedProduct: {} });
  // };

  // const saveProduct = (product) => {
  //   saveCallback(product);
  //   setState({ showEditor: false, selectedProduct: null });
  // };

  if (editing) {
    return (
      <>
        <p>Test</p>
        <ConnectedEditor key={selected.id || -1} />
      </>
      // <ProductEditor
      //   key={state.selectedProduct.id || -1}
      //   product={state.selectedProduct}
      //   cancelCallback={cancelEdit}
      //   saveCallback={saveProduct}
      // />
    );
  } else {
    return (
      <div className="m-2">
        <ConnectedTable />
        {/* <ProductTable
          products={products}
          editCallback={startEditing}
          deleteCallback={deleteCallback}
        /> */}
        <div className="text-center">
          <button className="btn btn-primary m-1" onClick={createProduct}>
            Create Product
          </button>
        </div>
      </div>
    );
  }
});
