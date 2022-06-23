import { connect } from "react-redux";
import { PRODUCTS, SUPPLIERS } from "./dataTypes";
import { deleteProduct, deleteSupplier } from "./modelActionCreators";
import { startEditingProduct, startEditingSupplier } from "./stateActions";

export const TableConnector = (dataType, presentationComponent) => {
  const mapStateToProps = (storeData) => ({
    products: storeData.modelData[PRODUCTS],
    suppliers: storeData.modelData[SUPPLIERS],
  });

  const mapDisplatchToProps = {
    editCallback:
      dataType === PRODUCTS ? startEditingProduct : startEditingSupplier,
    deleteCallback: dataType === PRODUCTS ? deleteProduct : deleteSupplier,
  };

  return connect(mapStateToProps, mapDisplatchToProps)(presentationComponent);
};
