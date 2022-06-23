import { initialData } from "./initialData";
import { DELETE, STORE, UPDATE } from "./modelActionTypes";

export default function modelReducer(storeData, action) {
  switch (action.type) {
    case STORE:
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType].concat([action.payload]),
      };
    case UPDATE:
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType].map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case DELETE:
      console.log("Delete called");
      console.log(action.payload);
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType].filter(
          (p) => p.id !== action.payload
        ),
      };
    default:
      return storeData || initialData.modelData;
  }
}
