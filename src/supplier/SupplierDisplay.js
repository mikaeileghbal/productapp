import React, { useState } from "react";
import { deleteSupplier, saveSupplier } from "../store";
import SupplierEditor from "./SupplierEditor";
import SupplierTable from "./SupplierTable";
import { connect } from "react-redux";
import { EditorConnector } from "../store/EditorConnector";
import { SUPPLIERS } from "../store/dataTypes";
import { TableConnector, tableConnector } from "../store/TableConnector";
import { startCreatingSupplier } from "../store/stateActions";

const connectedEditor = EditorConnector(SUPPLIERS, SupplierEditor);
const connectedTable = TableConnector(SUPPLIERS, SupplierTable);

const mapStateToProps = (storeData) => ({
  editing: storeData.stateData.editing,
  selected: storeData.modelData.suppliers.find(
    (s) => s.id === storeData.stateData.selectedId || {}
  ),
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
    return <connectedEditor key={selected.id} />;
  } else {
    return (
      <div className="m-2">
        <connectedTable />
        <div className="text-center">
          <button className="btn btn-primary m-1" onClick={createSupplier}>
            Create Supplier
          </button>
        </div>
      </div>
    );
  }
});
