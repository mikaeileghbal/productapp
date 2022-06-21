import React, { useState } from "react";
import SupplierEditor from "./SupplierEditor";
import SupplierTable from "./SupplierTable";

export default function SupplierDisplay({
  suppliers,
  saveCallback,
  deleteCallback,
}) {
  console.log(suppliers);
  const [state, setState] = useState({
    showEditor: false,
    selected: null,
  });

  const startEditing = (supplier) => {
    setState({ showEditor: true, selected: supplier });
  };

  const cancelEdit = () => {
    setState({ showEditor: false, selected: null });
  };

  const createSupplier = () => {
    setState({ showEditor: true, selected: {} });
  };

  const saveSupplier = (supplier) => {
    saveCallback(supplier);
    setState({ showEditor: false, selected: null });
  };

  if (state.showEditor) {
    return (
      <SupplierEditor
        key={state.selected.id || -1}
        supplier={state.selected}
        cancelCallback={cancelEdit}
        saveCallback={saveSupplier}
      />
    );
  } else {
    return (
      <div className="m-2">
        <SupplierTable
          suppliers={suppliers}
          editCallback={startEditing}
          deleteCallback={deleteCallback}
        />
        <div className="text-center">
          <button className="btn btn-primary m-1" onClick={createSupplier}>
            Create Supplier
          </button>
        </div>
      </div>
    );
  }
}
