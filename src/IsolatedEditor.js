import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductEditor from "./product/ProductEditor";
import RestDataSource from "./webservice/RestDataSource";

export default function IsolatedEditor({ dataSourceProp, history, match }) {
  const [data, setData] = useState({});

  const params = useParams();

  const dataSource =
    dataSourceProp || new RestDataSource("https://localhost:3500/api/products");

  const save = () => {
    const callback = () => this.props.history.push("/isolated");
    if (data.id === "") {
      dataSource.Store(data, callback);
    } else {
      dataSource.Update(data, callback);
    }
  };

  const cancel = () => {
    history.push("/Isolated");
  };

  useEffect(() => {
    if (params.mode === "edit") {
      dataSource.GetOne(params.id, (dataItem) => setData({ data: dataItem }));
    }
  });

  return (
    <ProductEditor
      key={data.id}
      product={data}
      saveCallback={save}
      cancelCallback={cancel}
    />
  );
}
