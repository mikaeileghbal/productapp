import React, { useState } from "react";

export default function Selector({ children }) {
  const [selection, setSelection] = useState("Products");

  const handleClick = (event) => {
    setSelection(event.target.name);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
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
        </div>
      </div>
    </div>
  );
}
