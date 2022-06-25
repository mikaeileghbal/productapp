import React, { useState } from "react";
import { deleteSupplier, saveSupplier } from "../store";
import SupplierEditor from "./SupplierEditor";
import SupplierTable from "./SupplierTable";
import { connect } from "react-redux";
import { EditorConnector } from "../store/EditorConnector";
import { SUPPLIERS } from "../store/dataTypes";
import { TableConnector } from "../store/TableConnector";
import { startCreatingSupplier } from "../store/stateActions";

const ConnectedEditor = EditorConnector(SUPPLIERS, SupplierEditor);
const ConnectedTable = TableConnector(SUPPLIERS, SupplierTable);

const mapStateToProps = (storeData) => ({
  editing: storeData.stateData.editing,
  selected:
    storeData.modelData.suppliers.find(
      (s) => s.id === storeData.stateData.selectedId
    ) || {},
});

const mapDispatchToProps = {
  createSupplier: startCreatingSupplier,
};

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const SupplierDisplay = connectFunction(function ({
  editing,
  selected,
  createSupplier,
}) {
  if (editing) {
    return <ConnectedEditor key={selected.id} />;
  } else {
    return (
      <div className="m-2">
        <ConnectedTable />
        <div className="text-center">
          <button className="btn btn-primary m-1" onClick={createSupplier}>
            Create Supplier
          </button>
        </div>
      </div>
    );
  }
});
